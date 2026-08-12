import { getWorkerSession } from "@/lib/worker-auth";
import { getSupabaseAdmin } from "@/lib/supabase-admin";
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
    !["before", "after", "issue"].includes(type) ||
    !(file instanceof File) ||
    !file.type.startsWith("image/") ||
    file.size > 10 * 1024 * 1024
  )
    return Response.json(
      { error: "Use an image up to 10 MB." },
      { status: 400 },
    );
  const admin = getSupabaseAdmin();
  const { data: assignment } = await admin
    .from("worker_assignments")
    .select(
      "id, order_id, worker_id, response_status, access_revoked_at, orders(order_number)",
    )
    .eq("id", assignmentId)
    .eq("worker_id", session.user.id)
    .maybeSingle();
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
