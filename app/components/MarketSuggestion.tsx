"use client";

import Link from "next/link";
import { MapPin, X } from "lucide-react";
import { useSyncExternalStore } from "react";
import { MARKET_IDS, type Market } from "@/lib/markets";
import { marketName, marketPathForLocation } from "@/lib/cities";
import { useCurrentMarket } from "@/lib/useCurrentMarket";

const readCookie = (name: string) => document.cookie.split("; ").find((row) => row.startsWith(`${name}=`))?.split("=")[1];

export default function MarketSuggestion({ locale }: { locale: string }) {
  const { market, pathname, searchParams } = useCurrentMarket(locale);
  const suggested = useSyncExternalStore<Market | null>(
    (notify) => { window.addEventListener("thevulgo-market-suggestion", notify); return () => window.removeEventListener("thevulgo-market-suggestion", notify); },
    () => {
    const saved = readCookie("thevulgo_market");
    const source = readCookie("thevulgo_market_source");
    const dismissed = sessionStorage.getItem("thevulgo_market_suggestion_dismissed");
      return !dismissed && source === "geo" && MARKET_IDS.includes(saved as Market) && saved !== market ? saved as Market : null;
    },
    () => null,
  );

  if (!suggested) return null;
  const rawHref = marketPathForLocation(pathname, locale, suggested);
  const [targetPath, targetQuery = ""] = rawHref.split("?");
  const targetParams = new URLSearchParams(targetQuery);
  ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "gclid"].forEach((key) => {
    const value = searchParams.get(key);
    if (value) targetParams.set(key, value);
  });
  const href = `${targetPath}${targetParams.size ? `?${targetParams}` : ""}`;
  const close = () => {
    sessionStorage.setItem("thevulgo_market_suggestion_dismissed", "1");
    window.dispatchEvent(new Event("thevulgo-market-suggestion"));
  };

  return <div className="fixed inset-x-3 bottom-4 z-40 mx-auto flex max-w-xl items-center gap-3 rounded-2xl border border-yellow-300 bg-white p-3 shadow-xl sm:bottom-6">
    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-yellow-100 text-yellow-700"><MapPin className="h-5 w-5" /></span>
    <p className="min-w-0 flex-1 text-sm font-bold">{locale === "es" ? `¿Necesitas este servicio en ${marketName(suggested)}?` : `Need this service in ${marketName(suggested)}?`}</p>
    <Link href={href} className="shrink-0 rounded-xl bg-yellow-400 px-4 py-2 text-sm font-black" onClick={close}>{locale === "es" ? `Ver ${marketName(suggested)}` : `View ${marketName(suggested)}`}</Link>
    <button type="button" aria-label={locale === "es" ? "Cerrar" : "Close"} onClick={close} className="grid h-9 w-9 shrink-0 place-items-center rounded-xl hover:bg-neutral-100"><X className="h-4 w-4" /></button>
  </div>;
}
