import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  CircleDot,
  Hammer,
  MapPin,
  Paintbrush,
  ShieldCheck,
  Sparkles,
  Wrench,
} from "lucide-react";

type PageProps = {
  params: Promise<{ locale: string }>;
};

const siteUrl = "https://www.thevulgo.es";
const phoneNumber = "34610076942";

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";

  const title = isEs
    ? "Reparación de Agujeros de Tacos en Valencia | Desde 29€ | THEVULGO"
    : "Anchor Hole Repair in Valencia | From €29 | THEVULGO";

  const description = isEs
    ? "Reparación de agujeros antiguos de tacos, anclajes y marcas de soportes en Valencia desde 29€. Relleno, alisado y corrección visible tras desmontajes."
    : "Anchor hole repair in Valencia from €29. Repair of old anchor holes, wall plug holes and bracket marks after removals with filling and smoothing.";

  return {
    title,
    description,
    keywords: isEs
      ? [
          "reparar agujeros tacos Valencia",
          "agujeros anclajes pared Valencia",
          "marcas soporte pared Valencia",
          "reparar agujeros pared Valencia",
          "rellenar agujeros tacos Valencia",
          "arreglar pared después soporte Valencia",
          "manitas pared Valencia",
        ]
      : [
          "anchor hole repair Valencia",
          "wall plug hole repair Valencia",
          "bracket marks repair Valencia",
          "repair holes after removal Valencia",
          "old anchor holes Valencia",
          "wall hole filling Valencia",
          "drywall repair Valencia",
        ],
    alternates: {
      canonical: `${siteUrl}/${locale}/services/drywall/anchor-hole-repair`,
      languages: {
        es: `${siteUrl}/es/services/drywall/anchor-hole-repair`,
        en: `${siteUrl}/en/services/drywall/anchor-hole-repair`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${siteUrl}/${locale}/services/drywall/anchor-hole-repair`,
      siteName: "THEVULGO",
      locale: isEs ? "es_ES" : "en_US",
      type: "website",
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function AnchorHoleRepairPage({ params }: PageProps) {
  const { locale } = await params;
  const isEs = locale === "es";

  const pageUrl = `${siteUrl}/${locale}/services/drywall/anchor-hole-repair`;

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, quiero pedir presupuesto para reparar agujeros de tacos o anclajes en pared en Valencia."
      : "Hi, I would like an estimate for anchor hole repair in Valencia."
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappText}`;

  const areas = [
    "Valencia",
    "Campanar",
    "Ruzafa",
    "Benimaclet",
    "Patraix",
    "El Carmen",
    "Extramurs",
    "Mislata",
    "Burjassot",
    "Paterna",
    "Torrent",
    "Sagunto",
    "Cullera",
    "Gandía",
  ];

  const faqItems = isEs
    ? [
        {
          q: "¿Qué incluye la reparación de agujeros de tacos o anclajes?",
          a: "Incluye revisión de los agujeros, retirada básica de restos sueltos cuando aplica, relleno, alisado y mejora visible de la zona después de retirar soportes, estantes, cuadros o accesorios.",
        },
        {
          q: "¿Cuánto cuesta reparar agujeros de tacos en Valencia?",
          a: "El servicio empieza desde 29€. El precio final depende del número de agujeros, tamaño, tipo de pared, acabado esperado y si hace falta pintura.",
        },
        {
          q: "¿Podéis reparar marcas después de quitar un soporte de TV o estante?",
          a: "Sí. Este servicio es ideal para marcas de soportes, brackets, estantes, accesorios retirados, cuadros, tacos y tornillos antiguos.",
        },
        {
          q: "¿Incluye pintura?",
          a: "La pintura se valora aparte. Si tienes pintura original, normalmente se puede conseguir un acabado más discreto.",
        },
        {
          q: "¿Es útil antes de entregar un piso?",
          a: "Sí. Es muy útil para move-out, alquileres, entrega de llaves y paredes con agujeros visibles después de retirar accesorios.",
        },
        {
          q: "¿Qué fotos tengo que enviar?",
          a: "Envía una foto general de la pared, fotos de cerca de los agujeros y una cantidad aproximada de puntos que quieres reparar.",
        },
      ]
    : [
        {
          q: "What is included in anchor hole repair?",
          a: "It includes checking the holes, basic removal of loose remains where needed, filling, smoothing and visible improvement after removing brackets, shelves, pictures or accessories.",
        },
        {
          q: "How much does anchor hole repair cost in Valencia?",
          a: "The service starts from €29. Final price depends on number of holes, size, wall type, expected finish and whether painting is needed.",
        },
        {
          q: "Can you repair marks after removing a TV bracket or shelf?",
          a: "Yes. This service is ideal for bracket marks, shelf marks, removed accessories, pictures, wall plugs and old screw holes.",
        },
        {
          q: "Is painting included?",
          a: "Painting is reviewed separately. If you have the original paint, it is usually easier to get a more discreet finish.",
        },
        {
          q: "Is this useful before handing over an apartment?",
          a: "Yes. It is very useful for move-outs, rentals, key handovers and walls with visible holes after removing accessories.",
        },
        {
          q: "What photos should I send?",
          a: "Send one general photo of the wall, close-up photos of the holes and the approximate number of points you want repaired.",
        },
      ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: isEs
      ? "Reparación de agujeros de tacos en Valencia"
      : "Anchor hole repair in Valencia",
    description: isEs
      ? "Reparación de agujeros antiguos de tacos, anclajes y marcas de soportes después de desmontajes en Valencia."
      : "Repair of old anchor holes, wall plug holes and bracket marks after removals in Valencia.",
    serviceType: isEs ? "Reparación de agujeros de tacos" : "Anchor hole repair",
    url: pageUrl,
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: "THEVULGO",
      url: siteUrl,
      telephone: "+34610076942",
      priceRange: "€€",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Valencia",
        addressRegion: "Valencia",
        addressCountry: "ES",
      },
    },
    areaServed: areas,
    offers: {
      "@type": "Offer",
      price: "29",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      url: pageUrl,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: isEs ? "Inicio" : "Home",
        item: `${siteUrl}/${locale}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: isEs ? "Servicios" : "Services",
        item: `${siteUrl}/${locale}/services`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: isEs ? "Pladur y paredes" : "Drywall and walls",
        item: `${siteUrl}/${locale}/services/drywall`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: isEs ? "Reparación de agujeros de tacos" : "Anchor hole repair",
        item: pageUrl,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  const heroPoints = isEs
    ? [
        "Desde 29€",
        "Agujeros de tacos y anclajes",
        "Marcas de soportes retirados",
        "Relleno limpio y alisado",
      ]
    : [
        "From €29",
        "Wall plug and anchor holes",
        "Removed bracket marks",
        "Clean filling and smoothing",
      ];

  const included = isEs
    ? [
        "Revisión de agujeros y marcas visibles",
        "Limpieza básica de restos sueltos cuando aplica",
        "Relleno de agujeros de tacos o anclajes",
        "Alisado básico para mejorar el acabado visible",
        "Preparación para pintura cuando aplica",
        "Presupuesto claro según fotos, cantidad y alcance",
      ]
    : [
        "Check of holes and visible marks",
        "Basic cleaning of loose remains where needed",
        "Filling of wall plug or anchor holes",
        "Basic smoothing to improve visible finish",
        "Preparation for painting where applicable",
        "Clear estimate based on photos, quantity and scope",
      ];

  const related = isEs
    ? [
        {
          title: "Reparación de agujeros pequeños",
          href: `/${locale}/services/drywall/small-hole-repair`,
        },
        {
          title: "Retoques antes de entregar piso",
          href: `/${locale}/services/repairs/move-out-touch-ups`,
        },
        {
          title: "Pequeños arreglos de pared",
          href: `/${locale}/services/repairs/minor-wall-fixes`,
        },
        {
          title: "Pladur y paredes",
          href: `/${locale}/services/drywall`,
        },
      ]
    : [
        {
          title: "Small hole repair",
          href: `/${locale}/services/drywall/small-hole-repair`,
        },
        {
          title: "Move-out touch-ups",
          href: `/${locale}/services/repairs/move-out-touch-ups`,
        },
        {
          title: "Minor wall fixes",
          href: `/${locale}/services/repairs/minor-wall-fixes`,
        },
        {
          title: "Drywall and walls",
          href: `/${locale}/services/drywall`,
        },
      ];

  return (
    <main className="min-h-screen bg-white text-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="relative overflow-hidden border-b border-yellow-200 bg-gradient-to-br from-yellow-50 via-white to-white">
        <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-yellow-200/40 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-2 md:px-8 md:py-24">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-yellow-300 bg-white px-4 py-2 text-sm font-black text-neutral-900 shadow-sm">
              <MapPin className="h-4 w-4 text-yellow-600" />
              {isEs
                ? "THEVULGO • Pladur y paredes en Valencia"
                : "THEVULGO • Drywall and walls in Valencia"}
            </div>

            <h1 className="text-4xl font-black tracking-tight md:text-6xl">
              {isEs ? "Reparación de agujeros de tacos" : "Anchor hole repair"}{" "}
              <span className="text-yellow-500">
                {isEs ? "en Valencia" : "in Valencia"}
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-700">
              {isEs
                ? "Reparación de agujeros antiguos de tacos, anclajes y marcas de soportes después de retirar estantes, brackets, cuadros o accesorios."
                : "Repair of old anchor holes, wall plug holes and bracket marks after removing shelves, brackets, pictures or accessories."}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappUrl}
                className="inline-flex items-center justify-center rounded-xl bg-yellow-400 px-6 py-4 font-black text-black shadow-md transition hover:scale-105 hover:bg-yellow-300"
              >
                {isEs ? "Pedir presupuesto por WhatsApp" : "Get estimate by WhatsApp"}
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>

              <Link
                href={`/${locale}/services/drywall`}
                className="inline-flex items-center justify-center rounded-xl border border-neutral-300 bg-white px-6 py-4 font-black text-neutral-950 shadow-sm transition hover:scale-105 hover:border-yellow-400"
              >
                {isEs ? "Ver pladur y paredes" : "View drywall services"}
              </Link>
            </div>

            <div className="mt-8 grid gap-3 text-sm font-semibold text-neutral-700 sm:grid-cols-2">
              {heroPoints.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-yellow-500" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-yellow-300 bg-white p-4 shadow-2xl md:p-6">
            <div className="rounded-2xl bg-yellow-400 p-8 text-black shadow-md">
              <CircleDot className="mb-6 h-12 w-12 text-black" />
              <p className="text-sm font-black uppercase tracking-widest">
                {isEs ? "Desde 29€" : "From €29"}
              </p>
              <h2 className="mt-3 text-3xl font-black">
                {isEs
                  ? "Menos marcas. Pared más limpia. Mejor entrega."
                  : "Fewer marks. Cleaner wall. Better handover."}
              </h2>
              <p className="mt-4 font-medium leading-7 text-neutral-900">
                {isEs
                  ? "Ideal para paredes con agujeros visibles después de desmontar soportes, estantes o accesorios."
                  : "Ideal for walls with visible holes after removing brackets, shelves or accessories."}
              </p>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: isEs ? "Tacos" : "Wall plugs",
                  text: isEs ? "Agujeros antiguos" : "Old holes",
                  icon: CircleDot,
                },
                {
                  title: isEs ? "Soportes" : "Brackets",
                  text: isEs ? "Marcas retiradas" : "Removal marks",
                  icon: Hammer,
                },
                {
                  title: isEs ? "Relleno" : "Filling",
                  text: isEs ? "Aplicación limpia" : "Clean application",
                  icon: Wrench,
                },
                {
                  title: isEs ? "Alisado" : "Smoothing",
                  text: isEs ? "Mejor acabado" : "Better finish",
                  icon: Paintbrush,
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-yellow-200 bg-yellow-50 p-4 shadow-sm"
                >
                  <item.icon className="h-6 w-6 text-yellow-500" />
                  <p className="mt-3 font-black">{item.title}</p>
                  <p className="mt-1 text-sm text-neutral-700">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: isEs ? "Después de desmontar" : "After removal",
              text: isEs
                ? "Perfecto para agujeros después de quitar soportes, cuadros, estantes, cortinas o accesorios."
                : "Perfect for holes left after removing brackets, pictures, shelves, curtain fittings or accessories.",
            },
            {
              title: isEs ? "Relleno y alisado" : "Filling and smoothing",
              text: isEs
                ? "Corrección local para mejorar el acabado visible de la pared."
                : "Local correction to improve the visible finish of the wall.",
            },
            {
              title: isEs ? "Presupuesto claro" : "Clear estimate",
              text: isEs
                ? "Envía fotos y cantidad aproximada de agujeros para valorar tiempo y material."
                : "Send photos and approximate number of holes to estimate time and material.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-yellow-300 bg-white p-7 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
            >
              <BadgeCheck className="h-8 w-8 text-yellow-500" />
              <h2 className="mt-4 text-xl font-black">{item.title}</h2>
              <p className="mt-3 leading-7 text-neutral-700">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-10 md:px-8">
        <h2 className="text-3xl font-black tracking-tight md:text-4xl">
          {isEs
            ? "Reparación de agujeros antiguos después de retirar soportes y accesorios"
            : "Repair of old holes after removing brackets and accessories"}
        </h2>

        <div className="mt-6 space-y-5 text-lg leading-8 text-neutral-700">
          <p>
            {isEs
              ? "Después de quitar un soporte de TV, estante, cuadro, cortina, espejo o accesorio, la pared puede quedar llena de agujeros de tacos y marcas visibles. Este servicio está pensado para corregir esos puntos de forma limpia."
              : "After removing a TV bracket, shelf, picture, curtain fitting, mirror or accessory, the wall can be left with wall plug holes and visible marks. This service is designed to correct those points cleanly."}
          </p>

          <p>
            {isEs
              ? "THEVULGO realiza reparación de agujeros de anclajes en Valencia para pisos, casas, alquileres, mudanzas, entregas de vivienda y paredes interiores que necesitan verse más cuidadas."
              : "THEVULGO provides anchor hole repair in Valencia for apartments, homes, rentals, move-outs, property handovers and interior walls that need a cleaner look."}
          </p>

          <p>
            {isEs
              ? "Antes de confirmar, puedes enviar fotos generales y de cerca. Así se puede valorar el número de agujeros, tamaño, tipo de pared y si conviene añadir pintura al trabajo."
              : "Before confirming, you can send general and close-up photos. This helps review the number of holes, size, wall type and whether painting should be added to the job."}
          </p>
        </div>
      </section>

      <section className="bg-yellow-50 py-16">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <h2 className="text-3xl font-black md:text-4xl">
            {isEs ? "Qué incluye el servicio" : "What is included"}
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {included.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-yellow-200 bg-white p-5 shadow-sm"
              >
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-yellow-500" />
                <p className="font-bold text-neutral-900">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-yellow-400 py-16 text-black">
        <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
          <p className="text-sm font-black uppercase tracking-widest">
            {isEs ? "Desde 29€" : "From €29"}
          </p>
          <h2 className="mt-3 text-4xl font-black">
            {isEs
              ? "Envía fotos y cantidad de agujeros"
              : "Send photos and number of holes"}
          </h2>
          <p className="mt-6 text-lg font-medium leading-8 text-neutral-900">
            {isEs
              ? "Para calcular el precio, envía una foto general, fotos de cerca y la cantidad aproximada de puntos que quieres reparar."
              : "To estimate the price, send a general photo, close-up photos and the approximate number of points you want repaired."}
          </p>

          <a
            href={whatsappUrl}
            className="mt-8 inline-flex items-center justify-center rounded-xl bg-black px-7 py-4 font-black text-white shadow-md transition hover:scale-105"
          >
            {isEs ? "Pedir precio por WhatsApp" : "Request price by WhatsApp"}
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <h2 className="text-3xl font-black md:text-4xl">
          {isEs ? "Zonas donde trabajamos" : "Areas we serve"}
        </h2>

        <div className="mt-8 flex flex-wrap gap-3">
          {areas.map((area) => (
            <span
              key={area}
              className="rounded-full border border-yellow-300 bg-yellow-50 px-4 py-2 font-bold text-neutral-900"
            >
              {area}
            </span>
          ))}
        </div>
      </section>

      <section className="bg-yellow-50 py-16">
        <div className="mx-auto max-w-4xl px-5 md:px-8">
          <h2 className="text-3xl font-black md:text-4xl">
            {isEs ? "Preguntas frecuentes" : "Frequently asked questions"}
          </h2>

          <div className="mt-8 space-y-4">
            {faqItems.map((item) => (
              <details
                key={item.q}
                className="group rounded-2xl border border-yellow-200 bg-white p-6 shadow-sm"
              >
                <summary className="cursor-pointer list-none font-black">
                  {item.q}
                </summary>
                <p className="mt-4 leading-7 text-neutral-700">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <h2 className="text-3xl font-black md:text-4xl">
          {isEs ? "Servicios relacionados" : "Related services"}
        </h2>

        <div className="mt-8 grid gap-5 md:grid-cols-4">
          {related.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group rounded-2xl border border-yellow-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-yellow-400 hover:shadow-md"
            >
              <p className="text-xl font-black">{item.title}</p>
              <p className="mt-3 inline-flex items-center font-bold text-neutral-700 group-hover:text-black">
                {isEs ? "Ver servicio" : "View service"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-yellow-400 py-16">
        <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
          <h2 className="text-4xl font-black tracking-tight">
            {isEs
              ? "¿Necesitas reparar agujeros de tacos?"
              : "Need anchor holes repaired?"}
          </h2>
          <p className="mt-5 text-lg font-medium text-neutral-900">
            {isEs
              ? "Envía fotos y cantidad aproximada. Te damos un presupuesto claro antes de empezar."
              : "Send photos and approximate quantity. Get a clear estimate before the work starts."}
          </p>

          <a
            href={whatsappUrl}
            className="mt-8 inline-flex items-center justify-center rounded-xl bg-black px-8 py-4 font-black text-white shadow-xl transition hover:scale-105"
          >
            {isEs ? "Pedir presupuesto ahora" : "Get estimate now"}
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>
    </main>
  );
}