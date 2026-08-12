"use client";

import { marketName } from "@/lib/cities";
import { marketWhatsAppHref } from "@/lib/marketLinks";
import { useCurrentMarket } from "@/lib/useCurrentMarket";

export function MarketLabel({ locale }: { locale: string }) {
  const { market } = useCurrentMarket(locale);
  const city = marketName(market);
  return <span className="ml-0 mt-0.5 hidden text-sm font-semibold text-gray-500 sm:block">{city}</span>;
}

export function MarketWhatsApp({ locale, className, label }: { locale: string; className: string; label: string }) {
  const { market } = useCurrentMarket(locale);
  return <a href={marketWhatsAppHref({ locale, market })} target="_blank" rel="noopener noreferrer" className={className}>{label}</a>;
}
