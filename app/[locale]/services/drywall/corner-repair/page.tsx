import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  MapPin,
  Paintbrush,
  Ruler,
  ShieldCheck,
  Sparkles,
  Wrench,
  CornerDownRight,
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
    ? "Reparación de Esquinas de Pared en Valencia | Desde 39€ | THEVULGO"
    : "Corner Repair in Valencia | From €39 | THEVULGO";

  const description = isEs
    ? "Reparación de esquinas de pared dañadas en Valencia desde 39€. Corrección de bordes, golpes, desconchones y zonas visibles con relleno y alisado."
    : "Corner repair in Valencia from €39. Repair of damaged wall corners, edge areas, chips and visible impact marks with filling and smoothing.";

  return {
    title,
    description,
    keywords: isEs
      ? [
          "reparación esquinas pared Valencia",
          "arreglar esquina pared Valencia",
          "esquina dañada pared Valencia",
          "reparar borde pared Valencia",
          "golpe esquina pared Valencia",
          "reparación pladur esquina Valencia",
          "manitas pared Valencia",
        ]
      : [
          "corner repair Valencia",
          "wall corner repair Valencia",
          "damaged wall corner Valencia",
          "edge wall repair Valencia",
          "drywall corner repair Valencia",
          "corner chip repair Valencia",
          "wall repair Valencia",
        ],
    alternates: {
      canonical: `${siteUrl}/${locale}/services/drywall/corner-repair`,
      languages: {
        es: `${siteUrl}/es/services/drywall/corner-repair`,
        en: `${siteUrl}/en/services/drywall/corner-repair`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${siteUrl}/${locale}/services/drywall/corner-repair`,
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

export default async function CornerRepairPage({ params }: PageProps) {
  const { locale } = await params;
  const isEs = locale === "es";

  const pageUrl = `${siteUrl}/${locale}/services/drywall/corner-repair`;

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, quiero pedir presupuesto para reparar una esquina de pared dañada en Valencia."
      : "Hi, I would like an estimate for damaged wall corner repair in Valencia."
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
          q: "¿Qué incluye la reparación de esquinas de pared?",
          a: "Incluye revisión del daño, preparación de la zona, relleno o reconstrucción básica del borde cuando aplica, alisado y mejora visible de la esquina.",
        },
        {
          q: "¿Cuánto cuesta reparar una esquina de pared en Valencia?",
          a: "El servicio empieza desde 39€. El precio final depende del tamaño del golpe, tipo de pared, profundidad del daño, acabado esperado y si hace falta pintura.",
        },
        {
          q: "¿Se pueden reparar golpes o desconchones en esquinas?",
          a: "Sí. Se pueden reparar daños pequeños o medios en bordes, esquinas, golpes, desconchones y zonas visibles si el daño no requiere reconstrucción mayor.",
        },
        {
          q: "¿Incluye pintura?",
          a: "Normalmente la pintura se valora aparte. Si tienes la pintura original, se puede revisar un retoque más discreto.",
        },
        {
          q: "¿Sirve para pladur y paredes de yeso?",
          a: "Sí. Se puede trabajar en pladur, yeso y paredes interiores similares, según el estado del borde y el tipo de daño.",
        },
        {
          q: "¿Qué fotos tengo que enviar?",
          a: "Envía una foto general de la pared, fotos de cerca de la esquina dañada y medidas aproximadas del daño.",
        },
      ]
    : [
        {
          q: "What is included in wall corner repair?",
          a: "It includes checking the damage, preparing the area, filling or basic edge rebuilding where needed, smoothing and visible improvement of the corner.",
        },
        {
          q: "How much does wall corner repair cost in Valencia?",
          a: "The service starts from €39. Final price depends on impact size, wall type, damage depth, expected finish and whether painting is needed.",
        },
        {
          q: "Can chips or impact marks on corners be repaired?",
          a: "Yes. Small or medium damage on edges, corners, chips, dents and visible areas can be repaired if the damage does not require major rebuilding.",
        },
        {
          q: "Is painting included?",
          a: "Painting is usually reviewed separately. If you have the original paint, a more discreet touch-up can be discussed.",
        },
        {
          q: "Is this suitable for drywall and plaster walls?",
          a: "Yes. Drywall, plaster and similar interior walls can be repaired depending on the edge condition and damage type.",
        },
        {
          q: "What photos should I send?",
          a: "Send one general photo of the wall, close-up photos of the damaged corner and approximate measurements of the damage.",
        },
      ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: isEs ? "Reparación de esquinas de pared en Valencia" : "Corner repair in Valencia",
    description: isEs
      ? "Reparación de esquinas, bordes dañados, golpes y desconchones visibles en paredes interiores en Valencia."
      : "Repair of damaged wall corners, edge areas, chips and visible impact marks in Valencia.",
    serviceType: isEs ? "Reparación de esquinas de pared" : "Wall corner repair",
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
      price: "39",
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
        name: isEs ? "Reparación de esquinas" : "Corner repair",
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
        "Desde 39€",
        "Esquinas y bordes dañados",
        "Relleno y alisado",
        "Mejor acabado visible",
      ]
    : [
        "From €39",
        "Damaged corners and edges",
        "Filling and smoothing",
        "Cleaner visible finish",
      ];

  const included = isEs
    ? [
        "Revisión de la esquina o borde dañado",
        "Preparación básica de la zona",
        "Relleno o corrección local del borde",
        "Alisado para mejorar el acabado visible",
        "Preparación para pintura cuando aplica",
        "Presupuesto claro según fotos, medidas y alcance",
      ]
    : [
        "Check of the damaged corner or edge",
        "Basic preparation of the area",
        "Filling or local edge correction",
        "Smoothing to improve visible finish",
        "Preparation for painting where applicable",
        "Clear estimate based on photos, measurements and scope",
      ];

  const related = isEs
    ? [
        {
          title: "Relleno de grietas",
          href: `/${locale}/services/drywall/crack-filling`,
        },
        {
          title: "Reparación media de pared",
          href: `/${locale}/services/drywall/medium-wall-patching`,
        },
        {
          title: "Preparación de pared para retoques",
          href: `/${locale}/services/drywall/wall-touch-up-prep`,
        },
        {
          title: "Pladur y paredes",
          href: `/${locale}/services/drywall`,
        },
      ]
    : [
        {
          title: "Crack filling",
          href: `/${locale}/services/drywall/crack-filling`,
        },
        {
          title: "Medium wall patching",
          href: `/${locale}/services/drywall/medium-wall-patching`,
        },
        {
          title: "Wall touch-up prep",
          href: `/${locale}/services/drywall/wall-touch-up-prep`,
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
              {isEs ? "Reparación de esquinas de pared" : "Corner repair"}{" "}
              <span className="text-yellow-500">
                {isEs ? "en Valencia" : "in Valencia"}
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-700">
              {isEs
                ? "Reparación de esquinas y bordes dañados por golpes, desconchones o desgaste visible. Relleno, alisado y preparación para mejor acabado."
                : "Repair of damaged wall corners and edge areas caused by impact, chips or visible wear. Filling, smoothing and preparation for a cleaner finish."}
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
              <CornerDownRight className="mb-6 h-12 w-12 text-black" />
              <p className="text-sm font-black uppercase tracking-widest">
                {isEs ? "Desde 39€" : "From €39"}
              </p>
              <h2 className="mt-3 text-3xl font-black">
                {isEs
                  ? "Esquina más limpia. Borde más recto. Mejor acabado."
                  : "Cleaner corner. Straighter edge. Better finish."}
              </h2>
              <p className="mt-4 font-medium leading-7 text-neutral-900">
                {isEs
                  ? "Ideal para esquinas interiores dañadas, bordes golpeados y zonas visibles con desconchones."
                  : "Ideal for damaged interior corners, impacted edges and visible chipped areas."}
              </p>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: isEs ? "Esquinas" : "Corners",
                  text: isEs ? "Bordes dañados" : "Damaged edges",
                  icon: CornerDownRight,
                },
                {
                  title: isEs ? "Relleno" : "Filling",
                  text: isEs ? "Corrección local" : "Local correction",
                  icon: Wrench,
                },
                {
                  title: isEs ? "Alisado" : "Smoothing",
                  text: isEs ? "Mejor acabado" : "Better finish",
                  icon: Paintbrush,
                },
                {
                  title: isEs ? "Medición" : "Shape",
                  text: isEs ? "Borde más limpio" : "Cleaner edge",
                  icon: Ruler,
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
              title: isEs ? "Bordes golpeados" : "Impacted edges",
              text: isEs
                ? "Corrección de golpes, desconchones y daños visibles en esquinas interiores."
                : "Correction of impact marks, chips and visible damage on interior corners.",
            },
            {
              title: isEs ? "Mejor forma visible" : "Better visible shape",
              text: isEs
                ? "Trabajo local para que la esquina se vea más recta, limpia y preparada."
                : "Local work to make the corner look straighter, cleaner and more prepared.",
            },
            {
              title: isEs ? "Presupuesto claro" : "Clear estimate",
              text: isEs
                ? "Envía fotos y medidas para valorar profundidad, tamaño y acabado esperado."
                : "Send photos and measurements to review depth, size and expected finish.",
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
            ? "Reparación de esquinas dañadas y bordes visibles de pared"
            : "Repair of damaged wall corners and visible edge areas"}
        </h2>

        <div className="mt-6 space-y-5 text-lg leading-8 text-neutral-700">
          <p>
            {isEs
              ? "Las esquinas de pared se dañan fácilmente con golpes de muebles, mudanzas, puertas, maletas o uso diario. Aunque sea una zona pequeña, una esquina rota o desconchada se nota mucho porque está en una línea visible."
              : "Wall corners are easily damaged by furniture impacts, move-outs, doors, luggage or daily use. Even if the area is small, a broken or chipped corner is very noticeable because it sits on a visible line."}
          </p>

          <p>
            {isEs
              ? "THEVULGO realiza reparación de esquinas en Valencia para pisos, casas, alquileres, habitaciones, pasillos, oficinas y zonas que necesitan mejorar antes de pintar o entregar."
              : "THEVULGO provides corner repair in Valencia for apartments, homes, rentals, rooms, hallways, offices and areas that need improvement before painting or handover."}
          </p>

          <p>
            {isEs
              ? "Antes de confirmar, puedes enviar fotos generales y de cerca. Así se puede valorar si basta con rellenar y alisar o si hace falta una corrección más completa del borde."
              : "Before confirming, you can send general and close-up photos. This helps review whether filling and smoothing is enough or if a more complete edge correction is needed."}
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
            {isEs ? "Desde 39€" : "From €39"}
          </p>
          <h2 className="mt-3 text-4xl font-black">
            {isEs
              ? "Envía fotos de la esquina dañada"
              : "Send photos of the damaged corner"}
          </h2>
          <p className="mt-6 text-lg font-medium leading-8 text-neutral-900">
            {isEs
              ? "Para calcular el precio, envía una foto general, fotos de cerca y medidas aproximadas del daño."
              : "To estimate the price, send a general photo, close-up photos and approximate damage measurements."}
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
              ? "¿Necesitas reparar una esquina de pared?"
              : "Need a damaged wall corner repaired?"}
          </h2>
          <p className="mt-5 text-lg font-medium text-neutral-900">
            {isEs
              ? "Envía fotos y medidas aproximadas. Te damos un presupuesto claro antes de empezar."
              : "Send photos and approximate measurements. Get a clear estimate before the work starts."}
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