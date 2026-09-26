"use client";

import Link from "next/link";
import { ArrowRight, MessageCircle, ShieldCheck } from "lucide-react";
import { marketName, marketPathForLocation } from "@/lib/cities";
import { marketWhatsAppHref } from "@/lib/marketLinks";
import { localizedPath } from "@/lib/technicalRoutes";
import { useCurrentMarket } from "@/lib/useCurrentMarket";

export default function MarketGuideCta({ locale, serviceHref, serviceLabel, title }: { locale: string; serviceHref: string; serviceLabel: string; title: string }) {
  const { market } = useCurrentMarket(locale);
  const city = marketName(market);
  const servicePath = marketPathForLocation(localizedPath(locale, serviceHref), locale, market);
  const whatsapp = marketWhatsAppHref({ locale, market, serviceName: title });
  const isEs = locale === "es";

  return <div className="rounded-3xl border border-yellow-400 bg-white p-6 shadow-lg">
    <ShieldCheck className="h-8 w-8" />
    <h2 className="mt-4 text-xl font-black">{isEs ? `¿Prefieres que lo hagamos en ${city}?` : `Would you like us to do it in ${city}?`}</h2>
    <p className="mt-3 text-sm leading-6 text-gray-600">{isEs ? "Envía fotos y recibe una valoración clara antes de reservar." : "Send photos and receive a clear assessment before booking."}</p>
    <Link href={servicePath} className="mt-5 flex items-center justify-between rounded-2xl bg-yellow-400 px-5 py-4 font-black hover:bg-yellow-300">{serviceLabel}<ArrowRight className="h-5 w-5" /></Link>
    <a href={whatsapp} data-analytics-cta="guide_sidebar_whatsapp" data-cta-placement="guide_sidebar" className="mt-3 flex items-center justify-center gap-2 rounded-2xl border border-gray-300 px-5 py-4 font-bold hover:border-black"><MessageCircle className="h-5 w-5" /> WhatsApp</a>
  </div>;
}
