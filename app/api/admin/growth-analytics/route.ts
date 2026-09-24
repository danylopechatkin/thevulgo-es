import { getAdminSession } from "@/lib/admin-auth";
import { NextResponse } from "next/server";
import { madridLocalDateTimeToUtc } from "@/lib/time";

const DAY = 86_400_000;
const startOfMadridDay = () => {
  const parts = new Intl.DateTimeFormat("en-CA", { timeZone: "Europe/Madrid", year: "numeric", month: "2-digit", day: "2-digit" }).format(new Date());
  return new Date(madridLocalDateTimeToUtc(parts, "00:00"));
};

export async function GET(request: Request) {
  const admin = await getAdminSession();
  if (!admin) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const url = new URL(request.url);
  const days = [1, 7, 30, 90].includes(Number(url.searchParams.get("days"))) ? Number(url.searchParams.get("days")) : 1;
  const model = url.searchParams.get("model") === "first" ? "first" : "last";
  const now = new Date();
  const from = days === 1 ? startOfMadridDay() : new Date(now.getTime() - days * DAY);
  const call = (start: Date, end: Date) => admin.supabase.rpc("owner_analytics_snapshot", { p_from: start.toISOString(), p_to: end.toISOString(), p_attribution_model: model });
  const [current, last7, previous7] = await Promise.all([call(from, now), call(new Date(now.getTime() - 7 * DAY), now), call(new Date(now.getTime() - 14 * DAY), new Date(now.getTime() - 7 * DAY))]);
  const error = current.error || last7.error || previous7.error;
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ current: current.data, last7: last7.data, previous7: previous7.data, days, model, generatedAt: now.toISOString() });
}
