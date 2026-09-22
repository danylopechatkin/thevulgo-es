import { CalendarCheck2 } from "lucide-react";
import { availabilityConfig } from "@/lib/commercial";

export default function AvailabilityBadge({ locale }: { locale: string }) {
  if (!availabilityConfig.enabled) return null;
  return <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-800"><CalendarCheck2 size={15} />{locale === "es" ? availabilityConfig.es : availabilityConfig.en}</span>;
}
