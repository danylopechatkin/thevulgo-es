"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Check, MessageCircle, Sparkles, Wind } from "lucide-react";
import WhatsAppLink from "./WhatsAppLink";
import { trackMarketingEvent } from "@/lib/client-attribution";
import {
  AC_DEEP_CLEANING_SERVICE_ID,
  acDeepCleaningPromotion,
  getAcCleaningBookingPath,
  getAcCleaningPath,
  getAcCleaningWhatsAppMessage,
  getAcDeepCleaningPrice,
} from "@/lib/acPromotion";

type Props = {
  locale: string;
  source: string;
  variant?: "home" | "hub" | "context";
};

export default function AcCleaningPromoCard({
  locale,
  source,
  variant = "home",
}: Props) {
  const viewed = useRef(false);
  const isEs = locale === "es";
  const isHub = variant === "hub";
  const price = getAcDeepCleaningPrice();
  const metadata = {
    locale,
    value: price,
    currency: acDeepCleaningPromotion.currency,
  };

  useEffect(() => {
    if (viewed.current) return;
    viewed.current = true;
    trackMarketingEvent("ac_promo_view", {
      source,
      service: AC_DEEP_CLEANING_SERVICE_ID,
      metadata: {
        locale,
        value: price,
        currency: acDeepCleaningPromotion.currency,
      },
    });
  }, [source, locale, price]);

  const primaryHref = isHub
    ? getAcCleaningBookingPath(locale)
    : getAcCleaningPath(locale);
  const primaryEvent = isHub ? "ac_cleaning_booking_click" : "ac_promo_click";
  const benefits = isEs
    ? [
        "Unidad interior",
        "Filtros y evaporador",
        "Desinfección",
        "Revisión visual del desagüe",
      ]
    : [
        "Indoor unit",
        "Filters and evaporator",
        "Disinfection",
        "Visual drain check",
      ];

  return (
    <section
      className={
        variant === "home" ? "px-4 py-5 sm:py-8" : "px-4 py-10 sm:py-14"
      }
    >
      <div
        className={`mx-auto overflow-hidden border-2 border-yellow-400 bg-white shadow-xl ${variant === "home" ? "max-w-7xl rounded-3xl" : "max-w-6xl rounded-[2rem]"}`}
      >
        <div
          className={`grid items-center ${isHub ? "lg:grid-cols-[1fr_.9fr]" : "md:grid-cols-[1fr_auto]"}`}
        >
          <div className={variant === "home" ? "p-5 sm:p-7" : "p-6 sm:p-9"}>
            <p className="flex items-center gap-2 text-xs font-black uppercase tracking-[.17em] text-yellow-700">
              <Sparkles className="h-4 w-4" />
              {isEs
                ? "Oferta · Aire acondicionado"
                : "Offer · Air conditioning"}
            </p>
            <h2
              className={`mt-2 font-black tracking-tight ${variant === "home" ? "text-2xl sm:text-3xl" : "text-3xl sm:text-4xl"}`}
            >
              {isEs ? "Limpieza profunda de split" : "Deep split AC cleaning"}
            </h2>
            <div className="mt-3 flex flex-wrap items-baseline gap-3">
              {acDeepCleaningPromotion.active && (
                <span className="text-lg font-bold text-neutral-400 line-through">
                  {isEs
                    ? `${acDeepCleaningPromotion.regularPrice} €`
                    : `€${acDeepCleaningPromotion.regularPrice}`}
                </span>
              )}
              <strong className="text-4xl font-black text-black">
                {isEs ? `${price} €` : `€${price}`}
              </strong>
              <span className="font-bold text-neutral-600">
                / {isEs ? "unidad" : "unit"}
              </span>
            </div>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-neutral-600 sm:text-base">
              {isEs
                ? "Limpieza profunda y desinfección de la unidad interior de aire acondicionado split."
                : "Deep cleaning and disinfection for a standard wall-mounted split AC indoor unit."}
            </p>
            {isHub && (
              <div className="mt-5 grid gap-2 sm:grid-cols-2">
                {benefits.map((benefit) => (
                  <span
                    key={benefit}
                    className="flex items-center gap-2 text-sm font-semibold"
                  >
                    <Check className="h-4 w-4 text-yellow-600" />
                    {benefit}
                  </span>
                ))}
              </div>
            )}
          </div>
          <div
            className={`bg-yellow-50 ${variant === "home" ? "p-5 sm:p-7" : "p-6 sm:p-9"}`}
          >
            <div className="flex items-center gap-2 text-sm font-bold text-neutral-700">
              <Wind className="h-4 w-4 text-yellow-600" />
              {isEs
                ? "Por tiempo limitado · Valencia y alrededores"
                : "Limited-time offer · Valencia and nearby areas"}
            </div>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
              <Link
                href={primaryHref}
                data-event={primaryEvent}
                data-service={AC_DEEP_CLEANING_SERVICE_ID}
                data-cta-location={source}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-yellow-400 px-6 py-4 font-black shadow-md transition hover:bg-yellow-300"
              >
                {isHub
                  ? isEs
                    ? `Reservar por ${price} €`
                    : `Book for €${price}`
                  : isEs
                    ? "Ver oferta"
                    : "View offer"}
                <ArrowRight className="h-5 w-5" />
              </Link>
              {isHub && (
                <WhatsAppLink
                  source={source}
                  service={AC_DEEP_CLEANING_SERVICE_ID}
                  message={getAcCleaningWhatsAppMessage(locale)}
                  eventName="ac_cleaning_whatsapp_click"
                  eventMetadata={metadata}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-neutral-300 bg-white px-6 py-4 font-black"
                >
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp
                </WhatsAppLink>
              )}
            </div>
            {isHub && (
              <p className="mt-4 text-xs leading-5 text-neutral-600">
                {isEs
                  ? "Válida por unidad interior split de pared con acceso normal. No incluye conductos, cassette, reparaciones, recarga de refrigerante ni desmontajes especiales."
                  : "Valid per standard wall-mounted split indoor unit with normal access. Ducted and cassette systems, repairs, refrigerant recharge and special dismantling are not included."}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
