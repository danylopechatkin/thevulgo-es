import { getAdminSession } from "@/lib/admin-auth";
import { LEAD_STATUSES, type LeadStatus } from "@/lib/leads";
import { NextResponse } from "next/server";

const clean = (value: unknown, limit: number) =>
  String(value || "")
    .trim()
    .slice(0, limit);
export async function GET(
  _request: Request,
  context: { params: Promise<{ id: string }> },
) {
  const admin = await getAdminSession();
  if (!admin)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { id } = await context.params;
  const { data, error } = await admin.supabase
    .from("leads")
    .select("*")
    .eq("id", id)
    .single();
  return error
    ? NextResponse.json({ error: error.message }, { status: 404 })
    : NextResponse.json({ lead: data });
}
export async function PATCH(
  request: Request,
  context: { params: Promise<{ id: string }> },
) {
  const admin = await getAdminSession();
  if (!admin)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { id } = await context.params,
    body = await request.json();
  const updates: Record<string, unknown> = {};
  if (body.full_name !== undefined)
    updates.full_name = clean(body.full_name, 160);
  if (body.phone !== undefined) updates.phone = clean(body.phone, 80);
  if (body.email !== undefined) updates.email = clean(body.email, 240);
  if (body.service_summary !== undefined)
    updates.service_summary = clean(body.service_summary, 500);
  if (body.category !== undefined)
    updates.category = clean(body.category, 120) || "Repairs";
  if (body.next_action !== undefined)
    updates.next_action = clean(body.next_action, 500);
  if (body.follow_up_at !== undefined)
    updates.follow_up_at = body.follow_up_at || null;
  if (body.potential_value !== undefined)
    updates.potential_value = Math.max(0, Number(body.potential_value) || 0);
  if (body.notes !== undefined) updates.notes = clean(body.notes, 5000);
  if (body.lost_reason !== undefined)
    updates.lost_reason = clean(body.lost_reason, 500);
  if (body.last_contacted_at !== undefined)
    updates.last_contacted_at = body.last_contacted_at || null;
  if (body.converted_order_id !== undefined)
    updates.converted_order_id = body.converted_order_id || null;
  if (body.status !== undefined) {
    if (!LEAD_STATUSES.includes(body.status as LeadStatus))
      return NextResponse.json(
        { error: "Invalid lead status" },
        { status: 400 },
      );
    updates.status = body.status;
  }
  const { data, error } = await admin.supabase
    .from("leads")
    .update(updates)
    .eq("id", id)
    .select("*")
    .single();
  return error
    ? NextResponse.json({ error: error.message }, { status: 500 })
    : NextResponse.json({ lead: data });
}
