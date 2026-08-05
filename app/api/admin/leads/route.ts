import { getAdminSupabase } from "@/lib/adminAuth";
import { LEAD_STATUSES, type LeadStatus } from "@/lib/leads";
import { NextResponse } from "next/server";

const clean = (value: unknown, max = 2000) => String(value || "").trim().slice(0, max);

export async function GET(request: Request) {
  const admin = await getAdminSupabase();
  if (!admin) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const url = new URL(request.url);
  const scope = url.searchParams.get("scope");
  let query = admin.supabase.from("leads").select("*");

  if (scope === "today") {
    const tomorrow = new Date();
    tomorrow.setHours(24, 0, 0, 0);
    query = query
      .not("status", "in", "(converted,lost)")
      .or(`follow_up_at.is.null,follow_up_at.lte.${tomorrow.toISOString()}`)
      .order("follow_up_at", { ascending: true });
  } else {
    query = query.order("updated_at", { ascending: false });
  }

  const { data, error } = await query;
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ leads: data || [] });
}

export async function POST(request: Request) {
  const admin = await getAdminSupabase();
  if (!admin) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await request.json();
  const fullName = clean(body.full_name, 160);
  const phone = clean(body.phone, 80);
  const email = clean(body.email, 240);
  const status = LEAD_STATUSES.includes(body.status as LeadStatus)
    ? (body.status as LeadStatus)
    : "new";

  if (!fullName && !phone && !email) {
    return NextResponse.json(
      { error: "Add a client name, phone or email" },
      { status: 400 }
    );
  }

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
      source: "whatsapp",
    })
    .select("*")
    .single();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ lead: data }, { status: 201 });
}
