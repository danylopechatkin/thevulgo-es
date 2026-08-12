import { getAdminSession } from "@/lib/admin-auth";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const admin = await getAdminSession();
  if (!admin)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const url = new URL(request.url);
  const days = [7, 30, 90].includes(Number(url.searchParams.get("days")))
    ? Number(url.searchParams.get("days"))
    : 30;
  const since = new Date(Date.now() - days * 24 * 60 * 60 * 1000).toISOString();
  const [orders, events, leads, sessions, leadStages] = await Promise.all([
    admin.supabase
      .from("orders")
      .select(
        "id, order_number, status, category, total, material_cost, city, area, acquisition_source, attribution_service, attribution_page_path, analytics_session_id, utm_source, utm_medium, utm_campaign, created_at, first_response_at, quote_sent_at, confirmed_at, completed_at, review_status, payment_received_at",
      )
      .gte("created_at", since)
      .order("created_at", { ascending: false })
      .limit(1000),
    admin.supabase
      .from("marketing_events")
      .select(
        "session_id, visitor_id, event_name, source, service, page_path, referrer, duration_ms, scroll_depth, device_type, metadata, utm_source, utm_medium, utm_campaign, created_at",
      )
      .gte("created_at", since)
      .order("created_at", { ascending: false })
      .limit(20000),
    admin.supabase
      .from("leads")
      .select("status, lost_reason, potential_value, source, created_at")
      .gte("created_at", since)
      .limit(1000),
    admin.supabase
      .from("analytics_sessions")
      .select("session_id, visitor_id, landing_page, referrer, first_touch_source, utm_source, utm_medium, utm_campaign, device_type, first_seen_at, last_seen_at, page_view_count, event_count, engaged_seconds, converted")
      .gte("first_seen_at", since)
      .order("first_seen_at", { ascending: false })
      .limit(5000),
    admin.supabase
      .from("lead_stage_events")
      .select("from_status, to_status, source, potential_value, changed_at")
      .gte("changed_at", since)
      .order("changed_at", { ascending: false })
      .limit(5000),
  ]);
  if (orders.error || events.error || leads.error || sessions.error || leadStages.error)
    return NextResponse.json(
      {
        error:
          orders.error?.message ||
          events.error?.message ||
          leads.error?.message ||
          sessions.error?.message ||
          leadStages.error?.message,
      },
      { status: 500 },
    );
  return NextResponse.json({
    orders: orders.data || [],
    events: events.data || [],
    leads: leads.data || [],
    sessions: sessions.data || [],
    leadStages: leadStages.data || [],
    days,
  });
}
