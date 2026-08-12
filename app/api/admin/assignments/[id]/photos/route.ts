import { getAdminSession } from "@/lib/admin-auth";
import { getSupabaseAdmin } from "@/lib/supabase-admin";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const session = await getAdminSession();
  if (!session)
    return Response.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await params;
  const database = getSupabaseAdmin();
  const { data: assignment } = await database
    .from("worker_assignments")
    .select("id, order_id")
    .eq("id", id)
    .maybeSingle();
  if (!assignment)
    return Response.json({ error: "Assignment not found" }, { status: 404 });

  const { data, error } = await database
    .from("worker_job_photos")
    .select("id, photo_type, storage_path, uploaded_at")
    .eq("assignment_id", id)
    .order("uploaded_at", { ascending: false });
  if (error) return Response.json({ error: error.message }, { status: 500 });

  const photos = await Promise.all(
    (data || []).map(async (photo) => {
      const { data: signed } = await database.storage
        .from("worker-job-photos")
        .createSignedUrl(photo.storage_path, 60 * 60);
      return {
        id: photo.id,
        photoType: photo.photo_type,
        uploadedAt: photo.uploaded_at,
        url: signed?.signedUrl || null,
      };
    }),
  );

  return Response.json({ photos });
}
