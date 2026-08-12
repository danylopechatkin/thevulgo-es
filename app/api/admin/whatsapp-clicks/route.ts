import { getAdminSession } from "@/lib/admin-auth";
import { NextResponse } from "next/server";

export async function GET() {
  const admin = await getAdminSession();
  if (!admin)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { data, error } = await admin.supabase
    .from("whatsapp_clicks")
    .select("id, source, service, page_path, message_type, created_at")
    .order("created_at", { ascending: false })
    .limit(200);
  if (error)
    return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ clicks: data || [] });
}
