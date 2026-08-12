import { getAdminSession } from "@/lib/admin-auth";
import { NextResponse } from "next/server";

export async function GET() {
  const admin = await getAdminSession();
  if (!admin)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { data, error } = await admin.supabase
    .from("orders")
    .select(
      "id, order_number, total, currency, city, area, deposit_required, deposit_amount, attribution_source, attribution_service, attribution_page_path, created_at",
    )
    .order("created_at", { ascending: false })
    .limit(200);
  if (error)
    return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ orders: data || [] });
}
