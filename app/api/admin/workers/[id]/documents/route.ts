import { getAdminSession } from "@/lib/admin-auth";
import { getSupabaseAdmin } from "@/lib/supabase-admin";

export async function POST(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const session = await getAdminSession();
  if (!session) return Response.json({ error: "Unauthorized" }, { status: 401 });
  const { id } = await params;
  const form = await request.formData();
  const type = String(form.get("type") || "");
  const file = form.get("file");
  if (!['driver_licence', 'government_id'].includes(type) || !(file instanceof File) || !file.type.startsWith('image/') || file.size > 10 * 1024 * 1024) {
    return Response.json({ error: "Upload a JPG, PNG or WebP image up to 10 MB." }, { status: 400 });
  }
  const admin = getSupabaseAdmin();
  const { data: worker } = await admin.from("worker_profiles").select("user_id").eq("user_id", id).maybeSingle();
  if (!worker) return Response.json({ error: "Worker not found" }, { status: 404 });
  const extension = file.name.split('.').pop()?.replace(/[^a-z0-9]/gi, '') || 'jpg';
  const path = `${id}/${type}-${crypto.randomUUID()}.${extension}`;
  const { error: uploadError } = await admin.storage.from("worker-private-documents").upload(path, file, { contentType: file.type, upsert: false });
  if (uploadError) return Response.json({ error: uploadError.message }, { status: 500 });
  const expiresAt = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString();
  const { error } = await admin.from("worker_documents").insert({ worker_id: id, document_type: type, storage_path: path, expires_at: expiresAt });
  if (error) return Response.json({ error: error.message }, { status: 500 });
  await admin.from("worker_profiles").update({ identity_retention_until: expiresAt }).eq("user_id", id);
  return Response.json({ ok: true });
}
