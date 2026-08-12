"use client";

import { usePathname } from "next/navigation";
import { marketFromPath, marketName } from "@/lib/cities";
import { marketWhatsAppHref } from "@/lib/marketLinks";

export function MarketLabel({ locale }: { locale: string }) {
  const pathname = usePathname();
  const city = marketName(marketFromPath(pathname, locale));
  return <span className="ml-0 mt-0.5 hidden text-sm font-semibold text-gray-500 sm:block">{city}</span>;
}

export function MarketWhatsApp({ locale, className, label }: { locale: string; className: string; label: string }) {
  const pathname = usePathname();
  const market = marketFromPath(pathname, locale);
  return <a href={marketWhatsAppHref({ locale, market })} target="_blank" rel="noopener noreferrer" className={className}>{label}</a>;
}
