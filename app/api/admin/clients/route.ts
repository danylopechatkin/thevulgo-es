import { getAdminSession } from "@/lib/admin-auth";

export async function GET() {
  const admin = await getAdminSession();
  if (!admin) return Response.json({ error: "Unauthorized" }, { status: 401 });

  const [profiles, orders] = await Promise.all([
    admin.supabase
      .from("client_profiles")
      .select("*")
      .order("last_order_at", { ascending: false, nullsFirst: false }),
    admin.supabase
      .from("orders")
      .select(
        "id, client_profile_id, order_number, category, services, notes, total, currency, status, scheduled_at, created_at, completed_at, payment_received_at, payment_method, area, city, address",
      )
      .order("created_at", { ascending: false }),
  ]);
  const error = profiles.error || orders.error;
  return error
    ? Response.json({ error: error.message }, { status: 500 })
    : Response.json({
        clients: profiles.data || [],
        orders: orders.data || [],
      });
}
