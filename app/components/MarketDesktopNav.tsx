"use client";

import Link from "next/link";
import { Wind } from "lucide-react";
import { marketBasePath } from "@/lib/cities";
import { useCurrentMarket } from "@/lib/useCurrentMarket";

export default function MarketDesktopNav({ locale, labels }: { locale: string; labels: { services: string; tips: string; faq: string; estimate: string } }) {
  const { market } = useCurrentMarket(locale);
  const cityMarket = market !== "valencia";
  const base = marketBasePath(locale, market);
  return <nav className="hidden min-w-0 flex-1 items-center justify-center gap-5 text-[15px] font-semibold text-gray-800 xl:flex">
    <Link href={`${base}/services`} className="hover:text-black">{labels.services}</Link>
    {!cityMarket && <Link href={`/${locale}/services/aire-acondicionado`} className="inline-flex items-center gap-1.5 rounded-full bg-yellow-100 px-3 py-1.5 font-extrabold text-black transition hover:bg-yellow-400"><Wind className="h-4 w-4" />{locale === "es" ? "Aire" : "Air conditioning"}</Link>}
    <Link href={cityMarket ? `${base}/handyman` : `${base}/handyman-valencia`} className="font-extrabold text-yellow-500 hover:text-black">{locale === "es" ? "Manitas" : "Handyman"}</Link>
    <Link href={cityMarket ? `${base}/services/instalacion-ventilador-techo` : `${base}/services/instalacion-ventilador-techo-valencia`} className="hover:text-black">{locale === "es" ? "Ventiladores" : "Ceiling fans"}</Link>
    <Link href={`/${locale}/guias`} className="hover:text-black">{labels.tips}</Link>
    <Link href={`${base}${cityMarket ? "" : "/"}#faq`} className="hover:text-black">{labels.faq}</Link>
  </nav>;
}
