import Link from "next/link";
import {
  ArrowRight,
  Check,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Wind,
  X,
} from "lucide-react";
import WhatsAppLink from "./WhatsAppLink";
import AcCleaningStickyCta from "./AcCleaningStickyCta";
import {
  AC_DEEP_CLEANING_SERVICE_ID,
  acDeepCleaningPromotion,
  getAcCleaningBookingPath,
  getAcCleaningPath,
  getAcCleaningWhatsAppMessage,
  getAcDeepCleaningPrice,
} from "@/lib/acPromotion";
import { SITE_ORIGIN } from "@/lib/seo";

export default function AcCleaningLanding({ locale }: { locale: string }) {
  const isEs = locale === "es";
  const price = getAcDeepCleaningPrice();
  const metadata = {
    locale,
    value: price,
    currency: acDeepCleaningPromotion.currency,
    units: 1,
  };
  const included = isEs
    ? [
        "Protección de la zona de trabajo",
        "Limpieza profunda de la unidad interior",
        "Limpieza de filtros",
        "Limpieza del evaporador",
        "Limpieza de zonas interiores accesibles",
        "Eliminación de polvo y suciedad",
        "Desinfección",
        "Revisión visual del drenaje",
        "Prueba básica de funcionamiento",
      ]
    : [
        "Protection of the work area",
        "Deep cleaning of the indoor unit",
        "Filter cleaning",
        "Evaporator cleaning",
        "Cleaning of accessible internal areas",
        "Removal of accumulated dust and dirt",
        "Disinfection",
        "Visual drain inspection",
        "Basic operation test",
      ];
  const excluded = isEs
    ? [
        "Reparaciones",
        "Recarga de refrigerante",
        "Sistemas por conductos",
        "Cassette",
        "Desmontajes especiales",
        "Trabajos eléctricos adicionales",
        "Limpieza profunda de la unidad exterior",
      ]
    : [
        "Repairs",
        "Refrigerant recharge",
        "Ducted systems",
        "Cassette systems",
        "Special dismantling",
        "Additional electrical work",
        "Deep cleaning of the outdoor unit",
      ];
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: isEs
      ? "Limpieza profunda de aire acondicionado split"
      : "Deep split air conditioner cleaning",
    serviceType: isEs
      ? "Limpieza y desinfección de aire acondicionado"
      : "Air conditioner cleaning and disinfection",
    url: `${SITE_ORIGIN}${getAcCleaningPath(locale)}`,
    areaServed: { "@type": "City", name: "Valencia" },
    provider: { "@type": "HomeAndConstructionBusiness", name: "THEVULGO" },
    offers: {
      "@type": "Offer",
      price: String(price),
      priceCurrency: acDeepCleaningPromotion.currency,
      availability: "https://schema.org/InStock",
      url: `${SITE_ORIGIN}${getAcCleaningBookingPath(locale)}`,
      description: isEs
        ? "Precio por una unidad interior split de pared con acceso normal."
        : "Price per standard wall-mounted split indoor unit with normal access.",
    },
  };

  return (
    <main className="overflow-hidden bg-white text-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <section className="relative px-4 py-14 sm:py-24">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-yellow-50 via-white to-white" />
        <div className="mx-auto grid max-w-6xl gap-9 lg:grid-cols-[1.08fr_.92fr] lg:items-center">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-white px-4 py-2 text-xs font-black uppercase tracking-[.15em] shadow-sm">
              <Sparkles className="h-4 w-4 text-yellow-600" />
              {acDeepCleaningPromotion.active
                ? isEs ? "Oferta especial" : "Special offer"
                : isEs ? "Servicio de limpieza" : "Cleaning service"}
            </p>
            <h1 className="mt-5 text-4xl font-black leading-[1.02] tracking-tight sm:text-6xl">
              {isEs
                ? "Limpieza de aire acondicionado en Valencia"
                : "Air conditioner cleaning in Valencia"}
            </h1>
            <p className="mt-5 text-xl font-bold">
              {isEs
                ? "Limpieza profunda y desinfección de split"
                : "Deep cleaning and disinfection for split AC"}
            </p>
            <div className="mt-5 flex flex-wrap items-baseline gap-3">
              {acDeepCleaningPromotion.active && (
                <span className="text-2xl font-bold text-neutral-400 line-through">
                  {isEs
                    ? `${acDeepCleaningPromotion.regularPrice} €`
                    : `€${acDeepCleaningPromotion.regularPrice}`}
                </span>
              )}
              <strong className="text-6xl font-black text-black">
                {isEs ? `${price} €` : `€${price}`}
              </strong>
              <span className="text-lg font-bold text-neutral-600">
                / {isEs ? "unidad" : "unit"}
              </span>
            </div>
            <p className="mt-5 max-w-2xl leading-7 text-neutral-600">
              {acDeepCleaningPromotion.active
                ? isEs
                  ? "Oferta especial por tiempo limitado para unidades interiores split de pared con acceso normal."
                  : "Limited-time special offer for standard wall-mounted split AC indoor units with normal access."
                : isEs
                  ? "Servicio para unidades interiores split de pared con acceso normal."
                  : "Service for standard wall-mounted split AC indoor units with normal access."}
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href={getAcCleaningBookingPath(locale)}
                data-event="ac_cleaning_booking_click"
                data-service={AC_DEEP_CLEANING_SERVICE_ID}
                data-cta-location="cleaning-hero"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-yellow-400 px-7 py-4 font-black shadow-lg"
              >
                {isEs ? `Reservar por ${price} €` : `Book for €${price}`}
                <ArrowRight className="h-5 w-5" />
              </Link>
              <WhatsAppLink
                source="cleaning-hero"
                service={AC_DEEP_CLEANING_SERVICE_ID}
                message={getAcCleaningWhatsAppMessage(locale)}
                eventName="ac_cleaning_whatsapp_click"
                eventMetadata={metadata}
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-neutral-300 bg-white px-7 py-4 font-black"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp
              </WhatsAppLink>
            </div>
          </div>
          <aside className="rounded-[2rem] border-2 border-yellow-400 bg-neutral-950 p-6 text-white shadow-2xl sm:p-8">
            <Wind className="h-8 w-8 text-yellow-400" />
            <h2 className="mt-5 text-3xl font-black">
              {isEs
                ? "Una limpieza completa y clara"
                : "A complete, clear cleaning service"}
            </h2>
            <div className="mt-6 space-y-3">
              {(isEs
                ? [
                    "Interior del split",
                    "Filtros y evaporador",
                    "Desinfección",
                    "Revisión visual del desagüe",
                  ]
                : [
                    "Split indoor unit",
                    "Filters and evaporator",
                    "Disinfection",
                    "Visual drain check",
                  ]
              ).map((item) => (
                <p key={item} className="flex gap-3 font-semibold">
                  <Check className="h-5 w-5 shrink-0 text-yellow-400" />
                  {item}
                </p>
              ))}
            </div>
            <p className="mt-6 border-t border-white/15 pt-5 text-sm text-neutral-300">
              {acDeepCleaningPromotion.active
                ? isEs ? "Oferta por tiempo limitado · Valencia y alrededores" : "Limited-time offer · Valencia and nearby areas"
                : isEs ? "Servicio en Valencia y alrededores" : "Service in Valencia and nearby areas"}
            </p>
          </aside>
        </div>
      </section>

      <section className="bg-neutral-50 px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-black uppercase tracking-[.18em] text-yellow-700">
            {isEs ? "Qué incluye" : "What is included"}
          </p>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl">
            {isEs
              ? "Limpieza profunda de la unidad interior"
              : "Deep cleaning of the indoor unit"}
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {included.map((item) => (
              <div
                key={item}
                className="flex gap-3 rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm"
              >
                <Check className="h-5 w-5 shrink-0 text-yellow-600" />
                <span className="font-semibold">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-neutral-200 p-6 sm:p-8">
            <p className="text-sm font-black uppercase tracking-[.16em] text-yellow-700">
              {isEs ? "Varias unidades" : "Multiple units"}
            </p>
            <h2 className="mt-3 text-3xl font-black">
              {isEs
                ? `${price} € × número de unidades`
                : `€${price} × number of units`}
            </h2>
            <div className="mt-6 space-y-3">
              {[1, 2, 3].map((quantity) => (
                <Link
                  key={quantity}
                  href={getAcCleaningBookingPath(locale, quantity)}
                  data-event="ac_cleaning_booking_click"
                  data-service={AC_DEEP_CLEANING_SERVICE_ID}
                  data-cta-location="cleaning-quantity"
                  className="flex items-center justify-between rounded-xl bg-yellow-50 px-5 py-4 font-bold"
                >
                  <span>
                    {quantity}{" "}
                    {isEs
                      ? quantity === 1
                        ? "unidad"
                        : "unidades"
                      : quantity === 1
                        ? "unit"
                        : "units"}
                  </span>
                  <strong className="text-xl">
                    {isEs ? `${price * quantity} €` : `€${price * quantity}`}
                  </strong>
                </Link>
              ))}
            </div>
            <p className="mt-5 text-sm text-neutral-600">
              {isEs
                ? "Sin descuento adicional por lote. Selecciona la cantidad exacta al reservar."
                : "No additional bundle discount. Select the exact quantity when booking."}
            </p>
          </div>
          <div className="rounded-[2rem] bg-neutral-950 p-6 text-white sm:p-8">
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-7 w-7 text-yellow-400" />
              <h2 className="text-3xl font-black">
                {isEs
                  ? "La promoción no incluye"
                  : "The promotion does not include"}
              </h2>
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {excluded.map((item) => (
                <p key={item} className="flex gap-2 text-sm text-neutral-200">
                  <X className="h-4 w-4 shrink-0 text-yellow-400" />
                  {item}
                </p>
              ))}
            </div>
            <p className="mt-6 border-t border-white/15 pt-5 text-sm leading-6 text-neutral-300">
              {isEs
                ? "Si durante la limpieza se detecta una avería, se informará al cliente antes de realizar cualquier trabajo adicional."
                : "If a fault is found during cleaning, we will inform the customer before carrying out any additional work."}
            </p>
          </div>
        </div>
      </section>

      <section id="ac-cleaning-footer" className="bg-yellow-50 px-4 py-16">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-yellow-400 bg-white p-7 text-center shadow-xl sm:p-12">
          <h2 className="text-3xl font-black">
            {isEs ? "Reserva tu limpieza profunda" : "Book your deep cleaning"}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-neutral-600">
            {isEs
              ? "Selecciona el número de splits y envía tus datos. Confirmaremos la visita contigo."
              : "Choose the number of split units and send your details. We will confirm the visit with you."}
          </p>
          <Link
            href={getAcCleaningBookingPath(locale)}
            data-event="ac_cleaning_booking_click"
            data-service={AC_DEEP_CLEANING_SERVICE_ID}
            data-cta-location="cleaning-footer"
            className="mt-7 inline-flex items-center gap-2 rounded-2xl bg-yellow-400 px-7 py-4 font-black"
          >
            {isEs ? `Reservar por ${price} €` : `Book for €${price}`}
            <ArrowRight className="h-5 w-5" />
          </Link>
          <p className="mt-5 text-xs leading-5 text-neutral-500">
            {isEs
              ? "Promoción válida por unidad interior split de pared con acceso normal. No incluye sistemas por conductos o cassette, reparaciones, recarga de refrigerante ni desmontajes especiales."
              : "Promotion applies per standard wall-mounted split indoor unit with normal access. Ducted and cassette systems, repairs, refrigerant recharge and special dismantling are not included."}
          </p>
        </div>
      </section>
      <AcCleaningStickyCta locale={locale} />
    </main>
  );
}
