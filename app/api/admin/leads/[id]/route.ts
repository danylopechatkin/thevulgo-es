import { getAdminSession } from "@/lib/admin-auth";
import { LEAD_STATUSES, type LeadStatus } from "@/lib/leads";
import { NextResponse } from "next/server";

const clean = (value: unknown, limit: number) =>
  String(value || "")
    .trim()
    .slice(0, limit);
const allowedExtra = [
  "language", "market", "city", "area", "postal_code", "address", "apartment",
  "structured_services", "requested_date", "requested_time", "quoted_value",
  "accepted_value", "ai_summary", "ai_missing_fields", "ai_warnings",
] as const;
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
    .select("*, lead_conversation_imports(*)")
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
  if (body.lost_reason_code !== undefined)
    updates.lost_reason_code = body.lost_reason_code || null;
  if (body.lost_reason_comment !== undefined)
    updates.lost_reason_comment = clean(body.lost_reason_comment, 500) || null;
  if (body.contact_reference !== undefined) {
    updates.contact_reference = clean(body.contact_reference, 32) || null;
    updates.attribution_confidence = body.contact_reference ? "manual" : "unknown";
  }
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
    if (body.status === "converted" && !body.converted_order_id)
      return NextResponse.json(
        { error: "Create the order before marking a lead as converted" },
        { status: 400 },
      );
    updates.status = body.status;
  }
  for (const key of allowedExtra) {
    if (body[key] === undefined) continue;
    if (["structured_services", "ai_missing_fields", "ai_warnings"].includes(key))
      updates[key] = Array.isArray(body[key]) ? body[key] : [];
    else if (["quoted_value", "accepted_value"].includes(key))
      updates[key] = body[key] == null ? null : Math.max(0, Number(body[key]) || 0);
    else if (["requested_date", "requested_time"].includes(key)) updates[key] = body[key] || null;
    else updates[key] = clean(body[key], key === "ai_summary" ? 2000 : 240);
  }
  const database = admin.supabase;
  if (body.conversation_import?.content_hash) {
    const item = body.conversation_import;
    const { data: duplicate } = await database.from("lead_conversation_imports")
      .select("id").eq("lead_id", id).eq("content_hash", clean(item.content_hash, 64)).maybeSingle();
    if (duplicate)
      return NextResponse.json({ error: "This conversation was already imported" }, { status: 409 });
  }
  const { data, error } = await database
    .from("leads")
    .update(updates)
    .eq("id", id)
    .select("*")
    .single();
  if (!error && body.conversation_import?.content_hash) {
    const item = body.conversation_import;
    const { error: importError } = await database.from("lead_conversation_imports").insert({
      lead_id: id,
      import_kind: "update",
      source_type: clean(item.source_type, 20) || "paste",
      source_files: Array.isArray(item.source_files) ? item.source_files.slice(0, 30) : [],
      raw_text: clean(item.raw_text, 150000) || null,
      extracted_data: item.extracted_data || {},
      applied_changes: item.applied_changes || [],
      warnings: Array.isArray(item.warnings) ? item.warnings : [],
      content_hash: clean(item.content_hash, 64),
      created_by: admin.user.id,
    });
    if (importError)
      return NextResponse.json({ error: importError.message }, { status: importError.code === "23505" ? 409 : 500 });
  }
  return error
    ? NextResponse.json({ error: error.message }, { status: 500 })
    : NextResponse.json({ lead: data });
}
