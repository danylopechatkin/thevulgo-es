import { madridLocalDateTimeToUtc } from "@/lib/time";

export const ANALYTICS_PERIODS = ["today", "yesterday", "7d", "14d", "28d", "30d", "90d", "custom"] as const;
export type AnalyticsPeriod = (typeof ANALYTICS_PERIODS)[number];
export type AnalyticsDateRange = { from: Date; to: Date; previousFrom: Date; previousTo: Date; period: AnalyticsPeriod };

const dateFormat = new Intl.DateTimeFormat("en-CA", { timeZone: "Europe/Madrid", year: "numeric", month: "2-digit", day: "2-digit" });
const dateFrom = (value: Date) => dateFormat.format(value);
const addDays = (date: string, days: number) => {
  const [year, month, day] = date.split("-").map(Number);
  return new Date(Date.UTC(year, month - 1, day + days)).toISOString().slice(0, 10);
};
const midnight = (date: string) => new Date(madridLocalDateTimeToUtc(date, "00:00"));
const validDate = (value?: string | null) => Boolean(value && /^\d{4}-\d{2}-\d{2}$/.test(value) && !Number.isNaN(Date.parse(`${value}T00:00:00Z`)));

export function reportingRange(periodInput?: string | null, fromInput?: string | null, toInput?: string | null, now = new Date()): AnalyticsDateRange {
  const period = ANALYTICS_PERIODS.includes(periodInput as AnalyticsPeriod) ? periodInput as AnalyticsPeriod : "today";
  const today = dateFrom(now);
  let start: string;
  let end: string;
  if (period === "custom" && validDate(fromInput) && validDate(toInput) && fromInput! <= toInput!) {
    start = fromInput!;
    end = addDays(toInput!, 1);
  } else if (period === "yesterday") {
    end = today;
    start = addDays(today, -1);
  } else {
    const days = ({ today: 1, "7d": 7, "14d": 14, "28d": 28, "30d": 30, "90d": 90 } as Partial<Record<AnalyticsPeriod, number>>)[period] || 1;
    end = addDays(today, 1);
    start = addDays(end, -days);
  }
  const from = midnight(start), to = midnight(end);
  const durationMs = to.getTime() - from.getTime();
  return { from, to, previousFrom: new Date(from.getTime() - durationMs), previousTo: from, period };
}
