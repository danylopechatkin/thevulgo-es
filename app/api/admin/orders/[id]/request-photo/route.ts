import { getAdminSession } from "@/lib/admin-auth";
import { getSupabaseAdmin } from "@/lib/supabase-admin";

type StoredService = { photo_paths?: unknown };

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  if (!(await getAdminSession())) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  const index = Number(new URL(request.url).searchParams.get("index"));
  if (!Number.isInteger(index) || index < 0 || index > 4) {
    return Response.json({ error: "Invalid photo" }, { status: 400 });
  }

  const database = getSupabaseAdmin();
  const { data: order, error } = await database
    .from("orders")
    .select("services")
    .eq("id", id)
    .maybeSingle();
  if (error || !order) {
    return Response.json({ error: "Order not found" }, { status: 404 });
  }

  const paths = (Array.isArray(order.services) ? order.services : []).flatMap(
    (service: StoredService) =>
      Array.isArray(service.photo_paths)
        ? service.photo_paths.filter(
            (path): path is string =>
              typeof path === "string" &&
              path.startsWith("customer-requests/") &&
              !path.includes(".."),
          )
        : [],
  );
  const path = paths[index];
  if (!path) return Response.json({ error: "Photo not found" }, { status: 404 });

  const { data: signed, error: signedError } = await database.storage
    .from("worker-job-photos")
    .createSignedUrl(path, 60 * 10);
  if (signedError || !signed?.signedUrl) {
    return Response.json({ error: "Could not open photo" }, { status: 500 });
  }
  return Response.redirect(signed.signedUrl, 302);
}
