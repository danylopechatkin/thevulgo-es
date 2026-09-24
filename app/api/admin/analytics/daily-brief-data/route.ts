import { getAdminSession } from "@/lib/admin-auth";
import { NextResponse } from "next/server";

export async function GET() {
  const admin = await getAdminSession();
  if (!admin) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const now = new Date(), day = 86_400_000;
  const call = (from: Date, to: Date) => admin.supabase.rpc("owner_analytics_snapshot", { p_from: from.toISOString(), p_to: to.toISOString(), p_attribution_model: "last" });
  const [today, sevenDays, previousSevenDays] = await Promise.all([call(new Date(now.getTime() - day), now), call(new Date(now.getTime() - 7 * day), now), call(new Date(now.getTime() - 14 * day), new Date(now.getTime() - 7 * day))]);
  const error = today.error || sevenDays.error || previousSevenDays.error;
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  const current = sevenDays.data as { metrics?: Record<string, number>; services?: Array<Record<string, number | string>> };
  const previous = previousSevenDays.data as typeof current;
  const opportunities = (current.services || []).filter((service) => Number(service.visitors) >= 20 && Number(service.leads) === 0).map((service) => ({ type: "high_traffic_zero_leads", service: service.category, visitors: service.visitors }));
  return NextResponse.json({ today: today.data, last7: sevenDays.data, previous7: previousSevenDays.data, changes: Object.fromEntries(Object.keys(current.metrics || {}).map((key) => [key, Number(current.metrics?.[key] || 0) - Number(previous.metrics?.[key] || 0)])), opportunities });
}
