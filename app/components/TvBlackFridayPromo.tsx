"use client";

import { useLayoutEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { useCurrentMarket } from "@/lib/useCurrentMarket";
import { trackMarketingEvent } from "@/lib/client-attribution";
import WhatsAppLink from "./WhatsAppLink";
import Image from "next/image";
import { ArrowRight, Gift } from "lucide-react";
import { isTvBlackFridayCampaignPath, isTvBlackFridayVisible, TV_BLACK_FRIDAY_DISPLAY, TV_BLACK_FRIDAY_STYLE_ID, tvBlackFridayPromotion } from "@/lib/tvBlackFridayPromotion";

/** Runtime reconciliation is separate from the SSR banner: search params must
 * never suspend or delay the initial banner markup. */
export function TvBlackFridayRuntime({ locale, preview }: { locale: string; preview: boolean }) {
  const { pathname, searchParams, market } = useCurrentMarket(locale);
  const previewRequested = searchParams.get("previewTvBlackFriday") === "1";
  const lastView = useRef("");
  useLayoutEffect(() => {
    const update = () => {
      const visible = isTvBlackFridayVisible({ pathname, preview, previewRequested, market });
      const rule = (document.getElementById(TV_BLACK_FRIDAY_STYLE_ID) as HTMLStyleElement | null)?.sheet?.cssRules[0] as CSSStyleRule | undefined;
      const display = visible ? "block" : "none";
      if (rule?.style && rule.style.getPropertyValue(TV_BLACK_FRIDAY_DISPLAY).trim() !== display) {
        rule.style.setProperty(TV_BLACK_FRIDAY_DISPLAY, display);
      }
      if (!visible) lastView.current = "";
      if (visible && !preview && lastView.current !== pathname) {
        lastView.current = pathname;
        trackMarketingEvent("promo_view", { source: "tv_black_friday", service: "tv_standard_mount", metadata: { promo_id: tvBlackFridayPromotion.id, locale, market } });
      }
    };
    update();
    const timer = window.setInterval(update, 1000);
    document.addEventListener("visibilitychange", update);
    window.addEventListener("thevulgo-market-change", update);
    return () => {
      window.clearInterval(timer);
      document.removeEventListener("visibilitychange", update);
      window.removeEventListener("thevulgo-market-change", update);
    };
  }, [pathname, previewRequested, market, preview, locale]);
  return null;
}

function promotionMessage(es: boolean) {
  return es
    ? "Hola, quiero reservar el montaje de mi TV con la oferta Black Friday de canaleta e instalación gratis."
    : "Hello, I would like to book my TV installation with the Black Friday free cable raceway offer.";
}

const promotionStyle = { display: `var(${TV_BLACK_FRIDAY_DISPLAY}, none)` };

/** Rendered in the first HTML response on eligible routes, not after hydration. */
export default function TvBlackFridayPromo({ locale }: { locale: string }) {
  const pathname = usePathname();
  if (!pathname || !isTvBlackFridayCampaignPath(pathname)) return null;
  const es = locale === "es";
  return (
    <section aria-label="Black Friday" style={promotionStyle} className="mx-auto w-full max-w-7xl px-4 py-3 sm:px-6">
      <div className="overflow-hidden rounded-[1.5rem] border border-neutral-800 bg-neutral-950 p-4 text-white shadow-lg sm:p-5 lg:p-6">
        <div className="grid items-center gap-4 md:grid-cols-[minmax(0,1fr)_minmax(220px,32%)] lg:gap-7">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
              <span className="inline-flex items-center gap-1.5 text-xs font-black tracking-[.16em] text-yellow-400 sm:text-sm"><Gift aria-hidden="true" className="h-4 w-4" /> BLACK FRIDAY</span>
              <span className="rounded-full border border-white/20 px-2.5 py-1 text-[11px] font-bold text-neutral-200">25–30 NOV · VALENCIA</span>
            </div>
            <h2 className="mt-2 text-[1.4rem] font-black leading-[1.13] tracking-tight sm:text-2xl lg:text-[1.8rem] xl:text-[2rem]">
              {es ? "Montamos tu TV. Ocultamos tus cables " : "We mount your TV. We hide your cables for "}
              <span className="text-yellow-400">{es ? "GRATIS." : "FREE."}</span>
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-neutral-200 sm:text-base">
              {es ? "Una canaleta exterior de hasta 1 m por TV. Material e instalación incluidos." : "One surface cable raceway up to 1 m per TV. Materials and installation included."}
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-3 sm:gap-4">
              <WhatsAppLink source="tv_black_friday" service="tv_standard_mount" message={promotionMessage(es)} ctaId="tv_black_friday_whatsapp" placement="promotion" eventMetadata={{ promo_id: tvBlackFridayPromotion.id }} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-yellow-400 px-4 py-2.5 text-sm font-black text-black shadow-sm transition hover:bg-yellow-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-yellow-400 sm:px-5">
                {es ? "Reservar por WhatsApp" : "Book via WhatsApp"} <ArrowRight aria-hidden="true" className="h-4 w-4 shrink-0" />
              </WhatsAppLink>
              <div className="flex items-center gap-2">
                <span className="text-3xl font-black leading-none tracking-tight text-yellow-400">{es ? "0 €" : "€0"}</span>
                <span className="max-w-[7.5rem] text-xs font-medium leading-tight text-neutral-300">{es ? "por la canaleta y su instalación" : "for raceway and installation"}</span>
              </div>
            </div>
            <p className="mt-3 text-xs leading-relaxed text-neutral-300">
              {es ? "Reservas por WhatsApp del 25 al 30 de noviembre de 2026, Valencia y zona confirmada. Sujeto a viabilidad." : "WhatsApp bookings 25–30 November 2026, Valencia and confirmed service area. Subject to feasibility."}
            </p>
            <details className="mt-1 text-xs leading-relaxed text-neutral-300">
              <summary className="cursor-pointer font-semibold underline decoration-neutral-500 underline-offset-2 hover:text-white">{es ? "Condiciones de la oferta" : "Offer terms"}</summary>
              <p className="mt-1.5">{es ? "Una canaleta exterior de hasta 1 m por TV instalada. Metros adicionales, canalización interior, rozas, enchufes y trabajos eléctricos no incluidos. El montaje puede realizarse después de la promoción por acuerdo. Confirma el regalo por WhatsApp antes de contratar." : "One surface raceway up to 1 m per TV installed. Extra length, concealed wiring, chasing, sockets and electrical work excluded. Installation may take place later by agreement. Confirm the gift on WhatsApp before booking."}</p>
            </details>
          </div>
          <div className="relative hidden aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 md:block">
            <Image src="/tv-black-friday-raceway-2026.webp" alt="" fill sizes="(min-width: 1280px) 384px, (min-width: 768px) 32vw, 1px" className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}

/** Compact reminder; the same pre-paint gate controls it, with no pricing changes. */
export function TvBlackFridayReminder({ locale, placement }: { locale: string; placement: "calculator" | "price" | "final" }) {
  const pathname = usePathname();
  if (!pathname || !isTvBlackFridayCampaignPath(pathname)) return null;
  const es = locale === "es";
  const compact = placement === "calculator";
  return (
    <div style={promotionStyle} className={compact ? "mt-3" : "mx-auto mt-5 max-w-2xl text-left"}>
      <div className={`flex min-w-0 flex-wrap items-center gap-x-3 gap-y-2 rounded-2xl border border-neutral-800 bg-neutral-950 text-white shadow-sm ${compact ? "p-3" : "p-3 sm:px-4"}`}>
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-yellow-400 text-black"><Gift aria-hidden="true" className="h-5 w-5" /></span>
        <div className="min-w-0 flex-1">
          <p className="text-[10px] font-black tracking-[.12em] text-yellow-400">BLACK FRIDAY</p>
          <p className="text-sm font-bold leading-tight">{es ? "Canaleta e instalación GRATIS" : "FREE cable raceway and fitting"}</p>
          <p className="mt-1 text-[11px] leading-snug text-neutral-300">{es ? "Hasta 1 m por TV · Reserva y confirma por WhatsApp" : "Up to 1 m per TV · Book and confirm on WhatsApp"}</p>
        </div>
        <span className="shrink-0 text-xl font-black text-yellow-400">{es ? "0 €" : "€0"}</span>
        <WhatsAppLink source="tv_black_friday" service="tv_standard_mount" message={promotionMessage(es)} ctaId={`tv_black_friday_${placement}`} placement={`promotion_${placement}`} eventMetadata={{ promo_id: tvBlackFridayPromotion.id }} className="inline-flex items-center gap-1 text-xs font-bold text-yellow-400 underline underline-offset-4 hover:text-yellow-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400">
          {es ? "Reservar por WhatsApp" : "Book via WhatsApp"} <ArrowRight aria-hidden="true" className="h-3.5 w-3.5" />
        </WhatsAppLink>
      </div>
    </div>
  );
}
