"use client";

import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { useCurrentMarket } from "@/lib/useCurrentMarket";
import { trackMarketingEvent } from "@/lib/client-attribution";
import WhatsAppLink from "./WhatsAppLink";
import Image from "next/image";
import { tvBlackFridayPromotion } from "@/lib/tvBlackFridayPromotion";

const campaignPaths = new Set([
  "", "services", "montaje-tv-valencia", "services/tv-mounting", "montaje-tv-grande-valencia",
  "colgar-tv-valencia", "instalacion-soporte-tv-valencia", "instalar-tv-pared-valencia",
  "instalador-tv-valencia", "montaje-tv-65-pulgadas-valencia", "montaje-tv-75-pulgadas-valencia",
  "montaje-tv-85-pulgadas-valencia", "montaje-tv-98-pulgadas-valencia", "montaje-tv-samsung-frame-valencia",
  "instalar-samsung-frame-valencia", "ocultar-cables-valencia", "services/tv-mounting/instalar-soundbar-valencia",
  "services/furniture/montaje-muebles-tv-multimedia-valencia", "home-cinema-valencia",
]);

export default function TvBlackFridayPromo({ locale, preview }: { locale: string; preview: boolean }) {
  const pathname = usePathname();
  const query = useSearchParams();
  const { market } = useCurrentMarket(locale);
  const [now, setNow] = useState<number | null>(null);
  useEffect(() => {
    const update = () => setNow(Date.now());
    update();
    const timer = window.setInterval(update, 30_000);
    return () => window.clearInterval(timer);
  }, []);
  const normalized = pathname.replace(/^\/(?:es|en)(?=\/|$)/, "").replace(/^\/+|\/+$/g, "");
  const eligiblePage = campaignPaths.has(normalized);
  const previewRequested = preview && query.get("previewTvBlackFriday") === "1";
  const active = now !== null && (previewRequested || (tvBlackFridayPromotion.enabled && now >= Date.parse(tvBlackFridayPromotion.startsAt) && now < Date.parse(tvBlackFridayPromotion.endsAtExclusive)));
  const visible = active && market === "valencia" && eligiblePage;
  useEffect(() => {
    if (visible && !preview) trackMarketingEvent("promo_view", { source: "tv_black_friday", service: "tv_standard_mount", metadata: { promo_id: tvBlackFridayPromotion.id, locale, market } });
  }, [visible, locale, market, preview]);
  if (!visible) return null;
  const es = locale === "es";
  const message = es
    ? "Hola, quiero reservar el montaje de mi TV con la oferta Black Friday de canaleta e instalación gratis."
    : "Hello, I would like to book my TV installation with the Black Friday free cable raceway offer.";
  return <section aria-label="Black Friday" className="mx-auto w-full max-w-7xl px-4 py-4 sm:px-6">
    <div className="overflow-hidden rounded-3xl bg-black p-6 text-white shadow-lg sm:p-8">
      <div className="grid items-center gap-6 md:grid-cols-[1fr_240px]">
        <div><p className="text-sm font-black tracking-widest text-yellow-400">BLACK FRIDAY</p>
          <h2 className="mt-2 text-2xl font-black sm:text-3xl">{es ? "Montamos tu TV. Ocultamos tus cables GRATIS." : "We mount your TV. We hide your cables for FREE."}</h2>
          <p className="mt-3 text-sm text-white/85">{es ? "Reserva el montaje de tu televisor y consulta por WhatsApp tu canaleta exterior de regalo con instalación incluida." : "Book your TV installation and ask us on WhatsApp about your free surface cable raceway and installation."}</p>
          <p className="mt-3 font-black text-yellow-400">{es ? "Canaleta e instalación de regalo — 0 €" : "Free cable raceway and installation — €0"}</p>
          <WhatsAppLink source="tv_black_friday" service="tv_standard_mount" message={message} ctaId="tv_black_friday_whatsapp" placement="promotion" eventMetadata={{ promo_id: tvBlackFridayPromotion.id }} className="mt-4 inline-flex rounded-xl bg-yellow-400 px-5 py-3 font-black text-black">{es ? "Consultar por WhatsApp" : "Ask us on WhatsApp"}</WhatsAppLink>
          <p className="mt-3 text-xs text-white/70">{es ? "Oferta para reservas del 25 al 30 de noviembre de 2026 en Valencia y zona de servicio confirmada. Una canaleta exterior de hasta 1 m por TV; instalación sujeta a viabilidad. Metros adicionales, canalización interior, rozas, enchufes y trabajos eléctricos no incluidos. Confirma las condiciones por WhatsApp." : "For bookings from 25–30 November 2026 in Valencia and the confirmed service area. One external raceway up to 1 m per TV; subject to feasibility. Extra length, concealed wiring, chasing, sockets and electrical work are excluded. Confirm the terms on WhatsApp."}</p>
        </div>
        <div className="hidden overflow-hidden rounded-2xl md:block"><Image src="/tv-black-friday-raceway-2026.webp" alt="" width={900} height={506} sizes="240px" className="h-auto w-full object-cover" /><p className="mt-2 text-center text-3xl font-black text-yellow-400">{es ? "GRATIS" : "FREE"}</p></div>
      </div>
    </div>
  </section>;
}
