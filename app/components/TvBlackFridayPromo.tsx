"use client";

import { useLayoutEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { useCurrentMarket } from "@/lib/useCurrentMarket";
import { trackMarketingEvent } from "@/lib/client-attribution";
import WhatsAppLink from "./WhatsAppLink";
import Image from "next/image";
import { isTvBlackFridayCampaignPath, isTvBlackFridayVisible, TV_BLACK_FRIDAY_DISPLAY, tvBlackFridayPromotion } from "@/lib/tvBlackFridayPromotion";

/** Runtime reconciliation is separate from the SSR banner: search params must
 * never suspend or delay the initial banner markup. */
export function TvBlackFridayRuntime({ locale, preview }: { locale: string; preview: boolean }) {
  const { pathname, searchParams, market } = useCurrentMarket(locale);
  const previewRequested = searchParams.get("previewTvBlackFriday") === "1";
  const lastView = useRef("");
  useLayoutEffect(() => {
    const update = () => {
      const visible = isTvBlackFridayVisible({ pathname, preview, previewRequested, market });
      document.documentElement.style.setProperty(TV_BLACK_FRIDAY_DISPLAY, visible ? "block" : "none");
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

/** Rendered in the first HTML response on eligible routes, not after hydration. */
export default function TvBlackFridayPromo({ locale }: { locale: string }) {
  const pathname = usePathname();
  if (!pathname || !isTvBlackFridayCampaignPath(pathname)) return null;
  const es = locale === "es";
  const message = es
    ? "Hola, quiero reservar el montaje de mi TV con la oferta Black Friday de canaleta e instalación gratis."
    : "Hello, I would like to book my TV installation with the Black Friday free cable raceway offer.";
  return <section aria-label="Black Friday" style={{ display: `var(${TV_BLACK_FRIDAY_DISPLAY}, none)` }} className="mx-auto w-full max-w-7xl px-4 py-4 sm:px-6">
    <div className="overflow-hidden rounded-3xl bg-black p-6 text-white shadow-lg sm:p-8">
      <div className="grid items-center gap-6 md:grid-cols-[1fr_240px]">
        <div><p className="text-sm font-black tracking-widest text-yellow-400">BLACK FRIDAY</p>
          <h2 className="mt-2 text-2xl font-black sm:text-3xl">{es ? "Montamos tu TV. Ocultamos tus cables GRATIS." : "We mount your TV. We hide your cables for FREE."}</h2>
          <p className="mt-3 text-sm text-white/85">{es ? "Reserva el montaje de tu televisor por WhatsApp y llévate una canaleta exterior de regalo con instalación incluida." : "Book your TV installation via WhatsApp and get a free surface cable raceway with installation included."}</p>
          <p className="mt-3 font-black text-yellow-400">{es ? "Canaleta e instalación de regalo — 0 €" : "Free cable raceway and installation — €0"}</p>
          <WhatsAppLink source="tv_black_friday" service="tv_standard_mount" message={message} ctaId="tv_black_friday_whatsapp" placement="promotion" eventMetadata={{ promo_id: tvBlackFridayPromotion.id }} className="mt-4 inline-flex rounded-xl bg-yellow-400 px-5 py-3 font-black text-black">{es ? "Reservar por WhatsApp" : "Book via WhatsApp"}</WhatsAppLink>
          <p className="mt-3 text-xs text-white/70">{es ? "Oferta para reservas del 25 al 30 de noviembre de 2026 en Valencia y zona de servicio confirmada. Una canaleta exterior de hasta 1 m por TV; instalación sujeta a viabilidad. Metros adicionales, canalización interior, rozas, enchufes y trabajos eléctricos no incluidos. Confirma las condiciones por WhatsApp." : "For bookings from 25–30 November 2026 in Valencia and the confirmed service area. One external raceway up to 1 m per TV; subject to feasibility. Extra length, concealed wiring, chasing, sockets and electrical work are excluded. Confirm the terms on WhatsApp."}</p>
        </div>
        <div className="hidden overflow-hidden rounded-2xl md:block"><Image src="/tv-black-friday-raceway-2026.webp" alt="" width={900} height={506} sizes="240px" className="h-auto w-full object-cover" /><p className="mt-2 text-center text-3xl font-black text-yellow-400">{es ? "GRATIS" : "FREE"}</p></div>
      </div>
    </div>
  </section>;
}
