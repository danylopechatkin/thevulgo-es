import { getAdminSession } from "@/lib/admin-auth";
import { LEAD_STATUSES, type LeadStatus } from "@/lib/leads";
import { NextResponse } from "next/server";

const clean = (value: unknown, limit: number) =>
  String(value || "")
    .trim()
    .slice(0, limit);
const stringArray = (value: unknown) =>
  Array.isArray(value) ? value.map((item) => clean(item, 240)).filter(Boolean).slice(0, 40) : [];
const services = (value: unknown) =>
  Array.isArray(value)
    ? value.slice(0, 40).map((item) => ({
        service_id: clean(item?.service_id, 120) || null,
        label: clean(item?.label, 240),
        quantity: item?.quantity == null ? null : Math.max(1, Number(item.quantity) || 1),
        price: item?.price == null ? null : Math.max(0, Number(item.price) || 0),
        details: clean(item?.details, 500) || null,
      })).filter((item) => item.label)
    : [];

export async function GET(request: Request) {
  const admin = await getAdminSession();
  if (!admin)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const today = new Intl.DateTimeFormat("en-IE", {
    timeZone: "Europe/Madrid",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());
  const scope = new URL(request.url).searchParams.get("scope");
  let query = admin.supabase.from("leads").select("*");
  query =
    scope === "today"
      ? query
          .not("status", "in", "(converted,lost)")
          .or(`follow_up_at.is.null,follow_up_at.lte.${today}T23:59:59.999Z`)
          .order("follow_up_at", { ascending: true })
      : query.order("updated_at", { ascending: false });
  const { data, error } = await query;
  if (error)
    return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ leads: data || [] });
}

export async function POST(request: Request) {
  const admin = await getAdminSession();
  if (!admin)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const body = await request.json();
  const status = LEAD_STATUSES.includes(body.status as LeadStatus)
    ? (body.status as LeadStatus)
    : "new";
  if (status === "converted")
    return NextResponse.json(
      { error: "Create the order before marking a lead as converted" },
      { status: 400 },
    );
  const fullName = clean(body.full_name, 160),
    phone = clean(body.phone, 80),
    email = clean(body.email, 240);
  if (!fullName && !phone && !email)
    return NextResponse.json(
      { error: "Add a client name, phone or email" },
      { status: 400 },
    );
  const database = admin.supabase;
  const { data, error } = await database
    .from("leads")
    .insert({
      created_by: admin.user.id,
      full_name: fullName,
      phone,
      email,
      language: clean(body.language, 12) || "unknown",
      market: clean(body.market, 80),
      city: clean(body.city, 100),
      area: clean(body.area, 120),
      postal_code: clean(body.postal_code, 20),
      address: clean(body.address, 240),
      apartment: clean(body.apartment, 60),
      service_summary: clean(body.service_summary, 500),
      structured_services: services(body.structured_services),
      category: clean(body.category, 120) || "Repairs",
      requested_date: body.requested_date || null,
      requested_time: body.requested_time || null,
      quoted_value: body.quoted_value == null ? null : Math.max(0, Number(body.quoted_value) || 0),
      accepted_value: body.accepted_value == null ? null : Math.max(0, Number(body.accepted_value) || 0),
      status,
      next_action: clean(body.next_action, 500),
      follow_up_at: body.follow_up_at || null,
      potential_value: Math.max(0, Number(body.potential_value) || 0),
      notes: clean(body.notes, 5000),
      source: clean(body.source, 120) || "whatsapp",
      ai_summary: clean(body.ai_summary, 2000),
      ai_missing_fields: stringArray(body.ai_missing_fields),
      ai_warnings: stringArray(body.ai_warnings),
      contact_reference: clean(body.contact_reference, 32) || null,
      attribution_confidence: clean(body.contact_reference, 32) ? "manual" : "unknown",
      lost_reason_code: body.lost_reason_code || null,
      lost_reason_comment: clean(body.lost_reason_comment, 500) || null,
    })
    .select("*")
    .single();
  if (error)
    return NextResponse.json({ error: error.message }, { status: 500 });
  if (body.conversation_import?.content_hash) {
    const item = body.conversation_import;
    const { error: importError } = await database.from("lead_conversation_imports").insert({
      lead_id: data.id,
      import_kind: "initial",
      source_type: clean(item.source_type, 20) || "paste",
      source_files: Array.isArray(item.source_files) ? item.source_files.slice(0, 30) : [],
      raw_text: clean(item.raw_text, 150000) || null,
      extracted_data: body,
      applied_changes: [],
      warnings: stringArray(body.ai_warnings),
      content_hash: clean(item.content_hash, 64),
      created_by: admin.user.id,
    });
    if (importError) {
      await database.from("leads").delete().eq("id", data.id);
      return NextResponse.json({ error: importError.message }, { status: importError.code === "23505" ? 409 : 500 });
    }
  }
  return NextResponse.json({ lead: data }, { status: 201 });
}
