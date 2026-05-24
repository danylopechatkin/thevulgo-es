import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Cable,
  CheckCircle2,
  Hammer,
  Layers3,
  MapPin,
  Paintbrush,
  Ruler,
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
    ? "Reparación de Recortes en Pladur en Valencia | Desde 49€ | THEVULGO"
    : "Drywall Cutout Repair in Valencia | From €49 | THEVULGO";

  const description = isEs
    ? "Reparación de recortes y aberturas en pladur en Valencia desde 49€. Parcheado de huecos hechos para cables, accesorios o instalaciones anteriores."
    : "Drywall cutout repair in Valencia from €49. Repair of openings made for cables, fittings or previous installations with patching, filling and smoothing.";

  return {
    title,
    description,
    keywords: isEs
      ? [
          "reparación recorte pladur Valencia",
          "reparar agujero cable pared Valencia",
          "reparar abertura pladur Valencia",
          "parche pladur cables Valencia",
          "hueco instalación pared Valencia",
          "reparar pladur después instalación Valencia",
          "drywall cutout repair Valencia",
        ]
      : [
          "drywall cutout repair Valencia",
          "repair cable hole drywall Valencia",
          "drywall opening repair Valencia",
          "patch drywall after cables Valencia",
          "wall opening repair Valencia",
          "repair drywall after installation Valencia",
          "drywall patch Valencia",
        ],
    alternates: {
      canonical: `${siteUrl}/${locale}/services/drywall/drywall-cutout-repair`,
      languages: {
        es: `${siteUrl}/es/services/drywall/drywall-cutout-repair`,
        en: `${siteUrl}/en/services/drywall/drywall-cutout-repair`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${siteUrl}/${locale}/services/drywall/drywall-cutout-repair`,
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

export default async function DrywallCutoutRepairPage({ params }: PageProps) {
  const { locale } = await params;
  const isEs = locale === "es";

  const pageUrl = `${siteUrl}/${locale}/services/drywall/drywall-cutout-repair`;

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, quiero pedir presupuesto para reparar un recorte o abertura en pladur en Valencia."
      : "Hi, I would like an estimate for drywall cutout repair in Valencia."
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
          q: "¿Qué incluye la reparación de recortes en pladur?",
          a: "Incluye revisión de la abertura, preparación de la zona, parcheado o relleno según el caso, alisado y mejora visible del acabado. La pintura se valora aparte.",
        },
        {
          q: "¿Cuánto cuesta reparar una abertura en pladur en Valencia?",
          a: "El servicio empieza desde 49€. El precio final depende del tamaño del recorte, tipo de pared, profundidad, acceso, material necesario y acabado esperado.",
        },
        {
          q: "¿Sirve para huecos hechos por cables o instalaciones anteriores?",
          a: "Sí. Este servicio está pensado para aberturas hechas por cables, cajas, soportes, accesorios, instalaciones retiradas o trabajos anteriores.",
        },
        {
          q: "¿Incluye pintura?",
          a: "Normalmente este servicio se enfoca en parchear, rellenar y alisar. La pintura puede valorarse aparte si hay color disponible o si quieres acabado más completo.",
        },
        {
          q: "¿Se puede hacer en una sola visita?",
          a: "Depende del tamaño, material, capas necesarias y tiempo de secado. Algunas reparaciones pueden necesitar más de una fase.",
        },
        {
          q: "¿Qué fotos tengo que enviar?",
          a: "Envía una foto general de la pared, una foto de cerca de la abertura, medidas aproximadas y explica qué había instalado antes.",
        },
      ]
    : [
        {
          q: "What is included in drywall cutout repair?",
          a: "It includes checking the opening, preparing the area, patching or filling depending on the case, smoothing and visible finish improvement. Painting is reviewed separately.",
        },
        {
          q: "How much does drywall opening repair cost in Valencia?",
          a: "The service starts from €49. Final price depends on cutout size, wall type, depth, access, required material and expected finish.",
        },
        {
          q: "Is this for holes made by cables or previous installations?",
          a: "Yes. This service is designed for openings made for cables, boxes, brackets, fittings, removed installations or previous work.",
        },
        {
          q: "Is painting included?",
          a: "Usually this service focuses on patching, filling and smoothing. Painting can be reviewed separately if matching color is available or if you want a more complete finish.",
        },
        {
          q: "Can it be done in one visit?",
          a: "It depends on size, material, required coats and drying time. Some repairs may need more than one phase.",
        },
        {
          q: "What photos should I send?",
          a: "Send one general photo of the wall, one close-up photo of the opening, approximate measurements and explain what was installed there before.",
        },
      ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: isEs
      ? "Reparación de recortes en pladur en Valencia"
      : "Drywall cutout repair in Valencia",
    description: isEs
      ? "Reparación de aberturas y recortes en pladur hechos para cables, accesorios o instalaciones anteriores en Valencia."
      : "Repair of drywall openings made for cables, fittings or previous installations in Valencia.",
    serviceType: isEs ? "Reparación de recortes en pladur" : "Drywall cutout repair",
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
      price: "49",
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
        name: isEs ? "Reparación de recortes en pladur" : "Drywall cutout repair",
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
        "Desde 49€",
        "Aberturas por cables o cajas",
        "Parcheado, relleno y alisado",
        "Ideal tras instalaciones retiradas",
      ]
    : [
        "From €49",
        "Openings from cables or boxes",
        "Patching, filling and smoothing",
        "Ideal after removed installations",
      ];

  const included = isEs
    ? [
        "Revisión del recorte o abertura",
        "Preparación de la zona dañada",
        "Parcheado o relleno según tamaño y forma",
        "Alisado básico para mejorar el acabado visible",
        "Preparación para pintura cuando aplica",
        "Presupuesto claro según fotos, medidas y alcance",
      ]
    : [
        "Check of the cutout or opening",
        "Preparation of the damaged area",
        "Patching or filling depending on size and shape",
        "Basic smoothing to improve visible finish",
        "Preparation for painting where applicable",
        "Clear estimate based on photos, measurements and scope",
      ];

  const related = isEs
    ? [
        {
          title: "Parche grande de pladur",
          href: `/${locale}/services/drywall/large-drywall-patch`,
        },
        {
          title: "Reparación media de pared",
          href: `/${locale}/services/drywall/medium-wall-patching`,
        },
        {
          title: "Reparación de agujeros pequeños",
          href: `/${locale}/services/drywall/small-hole-repair`,
        },
        {
          title: "Pladur y paredes",
          href: `/${locale}/services/drywall`,
        },
      ]
    : [
        {
          title: "Large drywall patch",
          href: `/${locale}/services/drywall/large-drywall-patch`,
        },
        {
          title: "Medium wall patching",
          href: `/${locale}/services/drywall/medium-wall-patching`,
        },
        {
          title: "Small hole repair",
          href: `/${locale}/services/drywall/small-hole-repair`,
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
              {isEs ? "Reparación de recortes en pladur" : "Drywall cutout repair"}{" "}
              <span className="text-yellow-500">
                {isEs ? "en Valencia" : "in Valencia"}
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-700">
              {isEs
                ? "Reparación de aberturas hechas para cables, cajas, accesorios o instalaciones anteriores. Parcheado, relleno y alisado para mejorar el acabado visible."
                : "Repair of openings made for cables, boxes, fittings or previous installations. Patching, filling and smoothing for a cleaner visible finish."}
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
              <Cable className="mb-6 h-12 w-12 text-black" />
              <p className="text-sm font-black uppercase tracking-widest">
                {isEs ? "Desde 49€" : "From €49"}
              </p>
              <h2 className="mt-3 text-3xl font-black">
                {isEs
                  ? "Hueco reparado. Superficie más limpia. Mejor acabado."
                  : "Opening repaired. Cleaner surface. Better finish."}
              </h2>
              <p className="mt-4 font-medium leading-7 text-neutral-900">
                {isEs
                  ? "Ideal para recortes antiguos de cableado, cajas, soportes o instalaciones retiradas."
                  : "Ideal for old cutouts from cabling, boxes, brackets or removed installations."}
              </p>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: isEs ? "Cables" : "Cables",
                  text: isEs ? "Huecos antiguos" : "Old openings",
                  icon: Cable,
                },
                {
                  title: isEs ? "Parche" : "Patch",
                  text: isEs ? "Según tamaño" : "Based on size",
                  icon: Layers3,
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
              title: isEs ? "Aberturas antiguas" : "Old openings",
              text: isEs
                ? "Para huecos hechos por cables, cajas, soportes, accesorios o instalaciones anteriores."
                : "For openings made by cables, boxes, brackets, fittings or previous installations.",
            },
            {
              title: isEs ? "Parcheado y alisado" : "Patching and smoothing",
              text: isEs
                ? "Corrección local para mejorar la superficie visible de la pared."
                : "Local correction to improve the visible surface of the wall.",
            },
            {
              title: isEs ? "Presupuesto claro" : "Clear estimate",
              text: isEs
                ? "Envía fotos, medidas y explica qué había instalado antes para valorar el alcance."
                : "Send photos, measurements and explain what was installed before to review the scope.",
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
            ? "Reparación de huecos en pladur después de cables, cajas o instalaciones"
            : "Repairing drywall openings after cables, boxes or installations"}
        </h2>

        <div className="mt-6 space-y-5 text-lg leading-8 text-neutral-700">
          <p>
            {isEs
              ? "Cuando se retiran cables, cajas, soportes o instalaciones antiguas, el pladur puede quedar con recortes visibles que no se arreglan bien con un simple tapón. Este servicio está pensado para cerrar y mejorar esos huecos."
              : "When cables, boxes, brackets or old installations are removed, drywall can be left with visible cutouts that are not properly fixed with simple filling. This service is designed to close and improve those openings."}
          </p>

          <p>
            {isEs
              ? "THEVULGO realiza reparación de recortes en pladur en Valencia para pisos, viviendas, oficinas, reformas ligeras, mudanzas y zonas donde se han retirado instalaciones anteriores."
              : "THEVULGO provides drywall cutout repair in Valencia for apartments, homes, offices, light refreshes, move-outs and areas where previous installations have been removed."}
          </p>

          <p>
            {isEs
              ? "Antes de confirmar, puedes enviar fotos generales y de cerca, medidas del hueco y una explicación de qué había instalado. Así se puede valorar si hace falta parche, varias capas o pintura posterior."
              : "Before confirming, you can send general and close-up photos, opening measurements and an explanation of what was installed there. This helps review whether patching, multiple coats or later painting is needed."}
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
            {isEs ? "Desde 49€" : "From €49"}
          </p>
          <h2 className="mt-3 text-4xl font-black">
            {isEs
              ? "Envía fotos y medidas del hueco"
              : "Send photos and opening measurements"}
          </h2>
          <p className="mt-6 text-lg font-medium leading-8 text-neutral-900">
            {isEs
              ? "Para calcular el precio, envía una foto general, una foto de cerca, medidas aproximadas y qué había instalado antes."
              : "To estimate the price, send a general photo, close-up photo, approximate measurements and what was installed before."}
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
              ? "¿Necesitas reparar un recorte en pladur?"
              : "Need a drywall cutout repaired?"}
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