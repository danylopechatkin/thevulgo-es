import { getAdminSession } from "@/lib/admin-auth";
import { LEAD_STATUSES, type LeadStatus } from "@/lib/leads";
import { NextResponse } from "next/server";

const clean = (value: unknown, limit: number) =>
  String(value || "")
    .trim()
    .slice(0, limit);

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
  const fullName = clean(body.full_name, 160),
    phone = clean(body.phone, 80),
    email = clean(body.email, 240);
  if (!fullName && !phone && !email)
    return NextResponse.json(
      { error: "Add a client name, phone or email" },
      { status: 400 },
    );
  const { data, error } = await admin.supabase
    .from("leads")
    .insert({
      created_by: admin.user.id,
      full_name: fullName,
      phone,
      email,
      service_summary: clean(body.service_summary, 500),
      category: clean(body.category, 120) || "Repairs",
      status,
      next_action: clean(body.next_action, 500),
      follow_up_at: body.follow_up_at || null,
      potential_value: Math.max(0, Number(body.potential_value) || 0),
      notes: clean(body.notes, 5000),
      source: clean(body.source, 120) || "whatsapp",
    })
    .select("*")
    .single();
  if (error)
    return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ lead: data }, { status: 201 });
}
