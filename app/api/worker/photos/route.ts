import { getWorkerSession } from "@/lib/worker-auth";
import { getSupabaseAdmin } from "@/lib/supabase-admin";

const PHOTO_TYPES = ["before", "after", "issue"] as const;

async function getOwnedAssignment(assignmentId: string, workerId: string) {
  return getSupabaseAdmin()
    .from("worker_assignments")
    .select("id, order_id, worker_id, response_status, access_revoked_at, orders(order_number)")
    .eq("id", assignmentId)
    .eq("worker_id", workerId)
    .maybeSingle();
}

function photoName(storagePath: string) {
  return storagePath.split("/").at(-1) || "work-photo";
}

export async function GET(request: Request) {
  const session = await getWorkerSession();
  if (!session) return Response.json({ error: "Unauthorized" }, { status: 401 });

  const assignmentId = new URL(request.url).searchParams.get("assignmentId") || "";
  if (!assignmentId)
    return Response.json({ error: "Assignment is required" }, { status: 400 });

  const { data: assignment } = await getOwnedAssignment(
    assignmentId,
    session.user.id,
  );
  if (!assignment)
    return Response.json({ error: "Assignment not found" }, { status: 404 });

  const admin = getSupabaseAdmin();
  const { data, error } = await admin
    .from("worker_job_photos")
    .select("id, photo_type, storage_path, uploaded_at")
    .eq("assignment_id", assignmentId)
    .eq("worker_id", session.user.id)
    .order("uploaded_at", { ascending: false });
  if (error) return Response.json({ error: error.message }, { status: 500 });

  const photos = await Promise.all(
    (data || []).map(async (photo) => {
      const { data: signed } = await admin.storage
        .from("worker-job-photos")
        .createSignedUrl(photo.storage_path, 60 * 60);
      return {
        id: photo.id,
        type: photo.photo_type,
        fileName: photoName(photo.storage_path),
        uploadedAt: photo.uploaded_at,
        url: signed?.signedUrl || null,
      };
    }),
  );
  return Response.json({ photos });
}

export async function POST(request: Request) {
  const session = await getWorkerSession();
  if (!session)
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  const form = await request.formData();
  const assignmentId = String(form.get("assignmentId") || ""),
    type = String(form.get("type") || ""),
    file = form.get("file");
  if (
    !assignmentId ||
    !PHOTO_TYPES.includes(type as (typeof PHOTO_TYPES)[number]) ||
    !(file instanceof File) ||
    !file.type.startsWith("image/") ||
    file.size > 10 * 1024 * 1024
  )
    return Response.json(
      { error: "Use an image up to 10 MB." },
      { status: 400 },
    );
  const admin = getSupabaseAdmin();
  const { data: assignment } = await getOwnedAssignment(assignmentId, session.user.id);
  if (!assignment)
    return Response.json({ error: "Assignment not found" }, { status: 404 });
  if (assignment.access_revoked_at || assignment.response_status !== "accepted")
    return Response.json(
      { error: "Accept this active assignment before uploading photos." },
      { status: 409 },
    );
  const extension =
      file.name
        .split(".")
        .pop()
        ?.replace(/[^a-z0-9]/gi, "") || "jpg",
    path = `${session.user.id}/${assignmentId}/${type}-${crypto.randomUUID()}.${extension}`;
  const { error: storageError } = await admin.storage
    .from("worker-job-photos")
    .upload(path, file, { contentType: file.type, upsert: false });
  if (storageError)
    return Response.json({ error: storageError.message }, { status: 500 });
  const { error } = await admin.from("worker_job_photos").insert({
    assignment_id: assignmentId,
    worker_id: session.user.id,
    photo_type: type,
    storage_path: path,
  });
  if (error) return Response.json({ error: error.message }, { status: 500 });
  const order = Array.isArray(assignment.orders)
    ? assignment.orders[0]
    : assignment.orders;
  const orderLabel = `TVG-ES-${String(order?.order_number || "").padStart(5, "0")}`;
  const now = new Date().toISOString();
  await Promise.all([
    admin.from("worker_activity_events").insert({
      worker_id: assignment.worker_id,
      event_type: "job_photo_uploaded",
      detail: `${type.replaceAll("_", " ")} photo uploaded for ${orderLabel}.`,
      metadata: {
        assignment_id: assignment.id,
        order_id: assignment.order_id,
        order_number: order?.order_number,
        photo_type: type,
      },
    }),
    admin.from("order_change_history").insert({
      order_id: assignment.order_id,
      order_number: order?.order_number,
      change_type: "updated",
      new_data: {
        crm_event: "worker_job_photo_uploaded",
        assignment_id: assignment.id,
        worker_id: assignment.worker_id,
        photo_type: type,
        event_at: now,
      },
    }),
  ]);
  return Response.json({ ok: true });
}

export async function DELETE(request: Request) {
  const session = await getWorkerSession();
  if (!session) return Response.json({ error: "Unauthorized" }, { status: 401 });

  const body = (await request.json().catch(() => null)) as {
    assignmentId?: string;
    photoId?: string;
  } | null;
  const assignmentId = body?.assignmentId || "";
  const photoId = body?.photoId || "";
  if (!assignmentId || !photoId)
    return Response.json({ error: "Photo and assignment are required" }, { status: 400 });

  const admin = getSupabaseAdmin();
  const { data: assignment } = await getOwnedAssignment(assignmentId, session.user.id);
  if (!assignment)
    return Response.json({ error: "Assignment not found" }, { status: 404 });
  if (assignment.access_revoked_at || assignment.response_status !== "accepted")
    return Response.json({ error: "This assignment is no longer active." }, { status: 409 });

  const { data: photo, error: photoError } = await admin
    .from("worker_job_photos")
    .select("id, photo_type, storage_path")
    .eq("id", photoId)
    .eq("assignment_id", assignmentId)
    .eq("worker_id", session.user.id)
    .maybeSingle();
  if (photoError) return Response.json({ error: photoError.message }, { status: 500 });
  if (!photo) return Response.json({ error: "Photo not found" }, { status: 404 });

  const { error: databaseError } = await admin
    .from("worker_job_photos")
    .delete()
    .eq("id", photo.id)
    .eq("worker_id", session.user.id);
  if (databaseError) return Response.json({ error: databaseError.message }, { status: 500 });

  const { error: storageError } = await admin.storage
    .from("worker-job-photos")
    .remove([photo.storage_path]);
  if (storageError)
    console.error("Worker job photo storage cleanup failed", storageError.message);

  const order = Array.isArray(assignment.orders) ? assignment.orders[0] : assignment.orders;
  const now = new Date().toISOString();
  await Promise.all([
    admin.from("worker_activity_events").insert({
      worker_id: assignment.worker_id,
      event_type: "job_photo_deleted",
      detail: `${photo.photo_type} photo removed by the contractor.`,
      metadata: { assignment_id: assignment.id, order_id: assignment.order_id, order_number: order?.order_number, photo_type: photo.photo_type },
    }),
    admin.from("order_change_history").insert({
      order_id: assignment.order_id,
      order_number: order?.order_number,
      change_type: "updated",
      new_data: { crm_event: "worker_job_photo_deleted", assignment_id: assignment.id, worker_id: assignment.worker_id, photo_type: photo.photo_type, event_at: now },
    }),
  ]);

  return Response.json({ ok: true });
}
