import { getAdminSession } from "@/lib/admin-auth";
import { NextResponse } from "next/server";
import { reportingRange } from "@/lib/analytics/reporting";

export async function GET(request: Request) {
  const admin = await getAdminSession();
  if (!admin) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const url = new URL(request.url);
  const model = url.searchParams.get("model") === "first" ? "first" : "last";
  const range = reportingRange(url.searchParams.get("period"), url.searchParams.get("from"), url.searchParams.get("to"));
  const call = (start: Date, end: Date) => admin.supabase.rpc("owner_analytics_snapshot", { p_from: start.toISOString(), p_to: end.toISOString(), p_attribution_model: model });
  const [current, previous] = await Promise.all([call(range.from, range.to), call(range.previousFrom, range.previousTo)]);
  const error = current.error || previous.error;
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ current: current.data, previous: previous.data, period: range.period, from: range.from.toISOString(), to: range.to.toISOString(), model, generatedAt: new Date().toISOString() });
}
