"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import {
  ArrowRight,
  Check,
  ChefHat,
  Drill,
  Hammer,
  MessageCircle,
  PackageCheck,
  ShieldCheck,
  Sparkles,
  Tv,
} from "lucide-react";
import AvailabilityBadge from "@/app/components/AvailabilityBadge";
import MobileStickyCta from "@/app/components/MobileStickyCta";
import { buildWhatsAppHref, type CommercialService } from "@/lib/commercial";
import type { Market } from "@/lib/cities";
import { getCatalogServices } from "@/lib/serviceCatalog";

type Props = { locale?: string; city?: string; market?: Market };

export default function HomeClient({
  locale: localeProp,
  city = "Valencia",
  market = "valencia",
}: Props) {
  const routeParams = useParams<{ locale?: string }>();
  const locale = localeProp ?? routeParams.locale ?? "en";
  const es = locale === "es";
  const base = market === "valencia" ? `/${locale}` : `/${locale}/${market}`;
  const price = (category: string, fallback: number) =>
    getCatalogServices(category)[0]?.price ?? fallback;
  const serviceHref = (slug: string) => `${base}/${slug}`;
  const kitchenHref =
    market === "valencia"
      ? es
        ? "/es/montaje-cocinas-valencia"
        : "/en/kitchen-assembly-valencia"
      : serviceHref("services/kitchen");
  const generalWa = buildWhatsAppHref("general", locale, city);
  const cards: Array<{
    icon: typeof Tv;
    service: CommercialService;
    title: string;
    text: string;
    price: number;
    href: string;
  }> = [
    {
      icon: Tv,
      service: "tv",
      title: es ? "Montaje de TV" : "TV mounting",
      text: es
        ? "Soporte, nivelado y cables bien resueltos."
        : "Secure bracket, clean levelling and tidy cables.",
      price: price("TV Mounting", 59),
      href: serviceHref("montaje-tv-valencia"),
    },
    {
      icon: Hammer,
      service: "handyman",
      title: es ? "Manitas y reparaciones" : "Handyman & repairs",
      text: es
        ? "Una visita para esa lista que llevas aplazando."
        : "One visit for the jobs you have been putting off.",
      price: price("Handyman", 35),
      href: serviceHref("handyman-valencia"),
    },
    {
      icon: PackageCheck,
      service: "furniture",
      title: es ? "Montaje de muebles" : "Furniture assembly",
      text: es
        ? "IKEA y otras marcas, montado correctamente."
        : "IKEA and other brands, assembled correctly.",
      price: price("Furniture Assembly", 49),
      href: serviceHref("montaje-muebles-valencia"),
    },
    {
      icon: ChefHat,
      service: "kitchen",
      title: es ? "Montaje de cocinas" : "Kitchen assembly",
      text: es
        ? "Módulos sueltos o una cocina completa."
        : "Individual units or a complete kitchen fit-out.",
      price: price("Kitchen", 149),
      href: kitchenHref,
    },
  ];
  const secondary = es
    ? [
        "Cortinas y estores",
        "Estantes y espejos",
        "Lámparas",
        "Silicona y sellados",
        "Ajustes de puertas",
        "Reparaciones pequeñas",
      ]
    : [
        "Curtains and blinds",
        "Shelves and mirrors",
        "Light fittings",
        "Silicone and sealing",
        "Door adjustments",
        "Small repairs",
      ];

  return (
    <main className="bg-white text-neutral-950">
      <section className="relative overflow-hidden border-b border-neutral-200 bg-[radial-gradient(circle_at_75%_20%,#fff4b8_0,transparent_38%)]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-[1.1fr_.9fr] md:px-8 md:py-24">
          <div>
            <AvailabilityBadge locale={locale} />
            <p className="mt-6 text-sm font-black uppercase tracking-[.18em] text-neutral-500">
              THEVULGO · {city}
            </p>
            <h1 className="mt-3 max-w-3xl text-4xl font-black leading-[1.02] tracking-tight sm:text-6xl">
              {es
                ? `Manitas e instalaciones para tu hogar en ${city}`
                : `Handyman & home installation in ${city}`}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
              {es
                ? "Montaje de TV, muebles, cocinas y pequeñas reparaciones. Precios claros antes de empezar y un único contacto por WhatsApp."
                : "TV mounting, furniture and kitchen assembly, plus small home repairs. Clear pricing before work starts and one easy WhatsApp contact."}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={generalWa}
                data-event="whatsapp_click"
                data-cta-location="hero"
                data-service="general"
                className="rounded-xl bg-[#ffcc00] px-6 py-4 text-center font-black shadow-lg shadow-yellow-200"
              >
                <MessageCircle className="mr-2 inline" size={20} />
                {es ? "Pedir presupuesto por WhatsApp" : "Get a WhatsApp quote"}
              </a>
              <a
                href="#services"
                data-event="services_click"
                data-cta-location="hero"
                className="rounded-xl border border-neutral-300 px-6 py-4 text-center font-bold"
              >
                {es ? "Ver servicios" : "Explore services"}
              </a>
            </div>
            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold text-neutral-700">
              {[
                es ? "Respuesta rápida" : "Fast reply",
                es ? "Precio acordado" : "Price agreed first",
                es ? "Trabajo limpio" : "Clean finish",
              ].map((x) => (
                <span key={x}>
                  <Check className="mr-1 inline text-emerald-600" size={16} />
                  {x}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-3xl bg-neutral-950 p-7 text-white shadow-2xl md:p-10">
            <Sparkles className="text-[#ffcc00]" />
            <h2 className="mt-8 text-3xl font-black">
              {es ? "¿Varias cosas pendientes?" : "Several jobs on your list?"}
            </h2>
            <p className="mt-3 leading-7 text-neutral-300">
              {es
                ? "Envíanos fotos y una lista. Organizamos los trabajos en una sola visita siempre que sea posible."
                : "Send photos and a list. We group the work into one visit whenever practical."}
            </p>
            <a
              href={buildWhatsAppHref("handyman", locale, city)}
              data-event="multi_job_click"
              data-cta-location="hero"
              data-service="handyman"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-black text-black"
            >
              {es ? "Enviar mi lista" : "Send my job list"}
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      <section
        id="services"
        className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24"
      >
        <p className="text-sm font-black uppercase tracking-[.18em] text-neutral-500">
          {es ? "Servicios principales" : "Core services"}
        </p>
        <h2 className="mt-3 text-3xl font-black sm:text-5xl">
          {es
            ? "Elige el trabajo. Nosotros lo resolvemos."
            : "Choose the job. We’ll sort it."}
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {cards.map(
            ({ icon: Icon, service, title, text, price: from, href }) => (
              <article
                key={service}
                className="flex flex-col rounded-2xl border border-neutral-200 p-6 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <Icon size={30} />
                <h3 className="mt-6 text-xl font-black">{title}</h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-neutral-600">
                  {text}
                </p>
                <p className="mt-6 text-sm font-bold">
                  {es ? "Precio de referencia" : "Reference price"}{" "}
                  <span className="text-2xl">€{from}</span>
                </p>
                <Link
                  href={href}
                  data-event="service_view"
                  data-cta-location="service-card"
                  data-service={service}
                  className="mt-4 inline-flex items-center gap-2 font-black underline decoration-[#ffcc00] decoration-4 underline-offset-4"
                >
                  {es ? "Ver precios" : "View prices"}
                  <ArrowRight size={16} />
                </Link>
                <a
                  href={buildWhatsAppHref(service, locale, city)}
                  data-event="whatsapp_click"
                  data-cta-location="service-card"
                  data-service={service}
                  className="mt-5 rounded-xl bg-neutral-950 px-4 py-3 text-center text-sm font-bold text-white"
                >
                  WhatsApp
                </a>
              </article>
            ),
          )}
        </div>
      </section>

      <section className="bg-neutral-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 md:grid-cols-2 md:px-8">
          <div>
            <Drill className="text-[#ffcc00]" size={34} />
            <h2 className="mt-5 text-3xl font-black sm:text-4xl">
              {es
                ? "Una visita. Varios trabajos."
                : "One visit. Multiple jobs."}
            </h2>
            <p className="mt-4 max-w-xl leading-7 text-neutral-300">
              {es
                ? "TV, estantes, lámparas, ajustes y pequeñas reparaciones: dinos todo lo que necesitas para preparar una visita eficiente."
                : "TVs, shelves, lights, adjustments and small repairs: tell us the full list so we can plan an efficient visit."}
            </p>
          </div>
          <div className="flex items-center">
            <a
              href={buildWhatsAppHref("handyman", locale, city)}
              data-event="multi_job_click"
              data-cta-location="multi-job"
              data-service="handyman"
              className="w-full rounded-2xl bg-[#ffcc00] p-6 text-center text-xl font-black text-black"
            >
              {es ? "Enviar lista y fotos" : "Send your list and photos"}
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <h2 className="text-3xl font-black">
          {es ? "Más ayuda para tu hogar" : "More help around your home"}
        </h2>
        <div className="mt-7 flex flex-wrap gap-3">
          {secondary.map((x) => (
            <a
              key={x}
              href={buildWhatsAppHref("general", locale, city)}
              data-event="secondary_service_click"
              data-cta-location="service-card"
              className="rounded-full border border-neutral-300 px-4 py-2.5 text-sm font-bold hover:border-black hover:bg-neutral-50"
            >
              {x}
            </a>
          ))}
        </div>
        {market === "valencia" && (
          <div className="mt-12 grid gap-6 rounded-3xl bg-[#fff5c2] p-7 md:grid-cols-[1fr_auto] md:items-center md:p-10">
            <div>
              <p className="text-sm font-black uppercase tracking-widest">
                {es ? "Pack mudanza" : "Move-in setup"}
              </p>
              <h2 className="mt-2 text-3xl font-black">
                {es
                  ? "Deja la vivienda lista de una vez"
                  : "Get the whole home ready at once"}
              </h2>
              <p className="mt-3 text-neutral-700">
                {es
                  ? "Muebles, TV, cortinas, estantes y pequeños ajustes en una visita planificada."
                  : "Furniture, TV, curtains, shelves and small fixes in one planned visit."}
              </p>
            </div>
            <a
              href={buildWhatsAppHref("move-in", locale, city)}
              data-event="move_in_click"
              data-cta-location="service-card"
              data-service="move-in"
              className="rounded-xl bg-black px-6 py-4 text-center font-black text-white"
            >
              {es ? "Planear mi visita" : "Plan my visit"}
            </a>
          </div>
        )}
      </section>

      <section className="border-y border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8">
          <h2 className="text-3xl font-black">
            {es ? "Cómo funciona" : "How it works"}
          </h2>
          <div className="mt-9 grid gap-6 md:grid-cols-4">
            {(es
              ? [
                  ["1", "Envía fotos", "Cuéntanos qué necesitas."],
                  ["2", "Precio claro", "Confirmamos alcance y coste."],
                  ["3", "Elegimos hora", "Acordamos una franja de visita."],
                  ["4", "Trabajo terminado", "Limpio, probado y revisado."],
                ]
              : [
                  ["1", "Send photos", "Tell us what needs doing."],
                  ["2", "Clear price", "We confirm scope and cost."],
                  ["3", "Pick a time", "We agree a visit window."],
                  ["4", "Job completed", "Clean, tested and checked."],
                ]
            ).map(([n, t, d]) => (
              <div key={n}>
                <span className="grid h-10 w-10 place-items-center rounded-full bg-[#ffcc00] font-black">
                  {n}
                </span>
                <h3 className="mt-4 font-black">{t}</h3>
                <p className="mt-1 text-sm text-neutral-600">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-20 text-center">
        <ShieldCheck className="mx-auto" size={40} />
        <h2 className="mt-5 text-4xl font-black">
          {es
            ? "¿Qué quieres resolver esta semana?"
            : "What do you want sorted this week?"}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-neutral-600">
          {es
            ? "Envíanos unas fotos. Te diremos qué necesitamos, el precio y la primera disponibilidad."
            : "Send a few photos. We’ll confirm what is needed, the price and the first availability."}
        </p>
        <a
          href={generalWa}
          data-event="whatsapp_click"
          data-cta-location="final"
          data-service="general"
          className="mt-8 inline-block rounded-xl bg-[#ffcc00] px-7 py-4 font-black"
        >
          {es ? "Hablar por WhatsApp" : "Talk on WhatsApp"}
        </a>
      </section>
      <MobileStickyCta
        href={generalWa}
        locale={locale}
        servicesHref="#services"
      />
    </main>
  );
}
