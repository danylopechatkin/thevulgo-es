import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
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
    ? "Preparación y Nivelación Básica de Pared en Valencia | Desde 45€ | THEVULGO"
    : "Wall Levelling Prep in Valencia | From €45 | THEVULGO";

  const description = isEs
    ? "Preparación y corrección básica de superficie de pared en Valencia desde 45€. Alisado local, mejora visible y preparación para un acabado más limpio."
    : "Wall levelling prep in Valencia from €45. Basic wall surface correction, local smoothing and prep for a cleaner visible finish.";

  return {
    title,
    description,
    keywords: isEs
      ? [
          "preparación pared Valencia",
          "nivelación básica pared Valencia",
          "alisar pared Valencia",
          "corrección superficie pared Valencia",
          "preparar pared para pintar Valencia",
          "pared irregular Valencia",
          "pladur y paredes Valencia",
        ]
      : [
          "wall levelling prep Valencia",
          "wall surface correction Valencia",
          "wall smoothing Valencia",
          "prepare wall for painting Valencia",
          "uneven wall correction Valencia",
          "drywall surface prep Valencia",
          "wall repair Valencia",
        ],
    alternates: {
      canonical: `${siteUrl}/${locale}/services/drywall/wall-levelling-prep`,
      languages: {
        es: `${siteUrl}/es/services/drywall/wall-levelling-prep`,
        en: `${siteUrl}/en/services/drywall/wall-levelling-prep`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${siteUrl}/${locale}/services/drywall/wall-levelling-prep`,
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

export default async function WallLevellingPrepPage({ params }: PageProps) {
  const { locale } = await params;
  const isEs = locale === "es";

  const pageUrl = `${siteUrl}/${locale}/services/drywall/wall-levelling-prep`;

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, quiero pedir presupuesto para preparación y corrección básica de superficie de pared en Valencia."
      : "Hi, I would like an estimate for wall levelling prep and basic surface correction in Valencia."
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
          q: "¿Qué incluye la preparación y nivelación básica de pared?",
          a: "Incluye revisión visual de la superficie, corrección local de pequeñas irregularidades, alisado básico y preparación para un acabado más limpio antes de pintura o retoque.",
        },
        {
          q: "¿Cuánto cuesta la preparación de pared en Valencia?",
          a: "El servicio empieza desde 45€. El precio final depende del tamaño de la zona, estado de la pared, profundidad de irregularidades, material necesario y acabado esperado.",
        },
        {
          q: "¿Es una nivelación completa de pared?",
          a: "No. Este servicio es para corrección básica y preparación local de superficie. Una nivelación completa o reforma amplia se valora como otro tipo de trabajo.",
        },
        {
          q: "¿Sirve antes de pintar?",
          a: "Sí. Es útil antes de pintar, retocar, entregar vivienda o mejorar una pared visible que tiene pequeñas imperfecciones.",
        },
        {
          q: "¿Incluye pintura?",
          a: "La pintura se valora aparte. Este servicio se centra en preparar y mejorar la superficie antes del acabado final.",
        },
        {
          q: "¿Qué fotos tengo que enviar?",
          a: "Envía una foto general de la pared, fotos de cerca de las irregularidades y medidas aproximadas de la zona a preparar.",
        },
      ]
    : [
        {
          q: "What is included in wall levelling prep?",
          a: "It includes visual surface review, local correction of small irregularities, basic smoothing and preparation for a cleaner finish before painting or touch-up work.",
        },
        {
          q: "How much does wall levelling prep cost in Valencia?",
          a: "The service starts from €45. Final price depends on area size, wall condition, depth of irregularities, required material and expected finish.",
        },
        {
          q: "Is this full wall levelling?",
          a: "No. This service is for basic correction and local surface preparation. Full levelling or larger renovation work is quoted separately.",
        },
        {
          q: "Is this useful before painting?",
          a: "Yes. It is useful before painting, touch-up work, handover or improving a visible wall with small imperfections.",
        },
        {
          q: "Is painting included?",
          a: "Painting is reviewed separately. This service focuses on preparing and improving the surface before the final finish.",
        },
        {
          q: "What photos should I send?",
          a: "Send one general photo of the wall, close-up photos of the irregularities and approximate measurements of the area to prepare.",
        },
      ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: isEs
      ? "Preparación y nivelación básica de pared en Valencia"
      : "Wall levelling prep in Valencia",
    description: isEs
      ? "Corrección básica de superficie de pared, alisado local y preparación para un acabado más limpio en Valencia."
      : "Basic wall surface correction, local smoothing and preparation for a cleaner visible finish in Valencia.",
    serviceType: isEs ? "Preparación de superficie de pared" : "Wall levelling prep",
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
      price: "45",
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
        name: isEs ? "Preparación y nivelación básica" : "Wall levelling prep",
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
        "Desde 45€",
        "Corrección básica de superficie",
        "Alisado local",
        "Preparación para acabado limpio",
      ]
    : [
        "From €45",
        "Basic surface correction",
        "Local smoothing",
        "Prep for a cleaner finish",
      ];

  const included = isEs
    ? [
        "Revisión de irregularidades visibles",
        "Preparación básica de la superficie",
        "Corrección local de pequeñas zonas desiguales",
        "Alisado básico para mejorar el acabado",
        "Preparación para pintura o retoque posterior",
        "Presupuesto claro según fotos, medidas y alcance",
      ]
    : [
        "Check of visible irregularities",
        "Basic surface preparation",
        "Local correction of small uneven areas",
        "Basic smoothing to improve finish",
        "Preparation for later painting or touch-up",
        "Clear estimate based on photos, measurements and scope",
      ];

  const related = isEs
    ? [
        {
          title: "Preparación de pared para retoques",
          href: `/${locale}/services/drywall/wall-touch-up-prep`,
        },
        {
          title: "Reparación media de pared",
          href: `/${locale}/services/drywall/medium-wall-patching`,
        },
        {
          title: "Relleno de grietas",
          href: `/${locale}/services/drywall/crack-filling`,
        },
        {
          title: "Pladur y paredes",
          href: `/${locale}/services/drywall`,
        },
      ]
    : [
        {
          title: "Wall touch-up prep",
          href: `/${locale}/services/drywall/wall-touch-up-prep`,
        },
        {
          title: "Medium wall patching",
          href: `/${locale}/services/drywall/medium-wall-patching`,
        },
        {
          title: "Crack filling",
          href: `/${locale}/services/drywall/crack-filling`,
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
              {isEs
                ? "Preparación y nivelación básica de pared"
                : "Wall levelling prep"}{" "}
              <span className="text-yellow-500">
                {isEs ? "en Valencia" : "in Valencia"}
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-700">
              {isEs
                ? "Corrección básica de superficie y preparación de pared para conseguir un acabado más limpio antes de pintar, retocar o entregar una vivienda."
                : "Basic wall surface correction and prep for a cleaner finish before painting, touch-up work or property handover."}
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
              <Layers3 className="mb-6 h-12 w-12 text-black" />
              <p className="text-sm font-black uppercase tracking-widest">
                {isEs ? "Desde 45€" : "From €45"}
              </p>
              <h2 className="mt-3 text-3xl font-black">
                {isEs
                  ? "Pared más preparada. Superficie más limpia. Mejor acabado."
                  : "Better-prepared wall. Cleaner surface. Better finish."}
              </h2>
              <p className="mt-4 font-medium leading-7 text-neutral-900">
                {isEs
                  ? "Ideal para zonas con pequeñas irregularidades, marcas o superficies que necesitan preparación local."
                  : "Ideal for areas with small irregularities, marks or surfaces that need local preparation."}
              </p>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: isEs ? "Superficie" : "Surface",
                  text: isEs ? "Corrección básica" : "Basic correction",
                  icon: Layers3,
                },
                {
                  title: isEs ? "Alisado" : "Smoothing",
                  text: isEs ? "Zonas locales" : "Local areas",
                  icon: Paintbrush,
                },
                {
                  title: isEs ? "Nivelación" : "Levelling",
                  text: isEs ? "Preparación ligera" : "Light prep",
                  icon: Ruler,
                },
                {
                  title: isEs ? "Acabado" : "Finish",
                  text: isEs ? "Más limpio" : "Cleaner result",
                  icon: Sparkles,
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
              title: isEs ? "Corrección local" : "Local correction",
              text: isEs
                ? "Para pequeñas zonas desiguales o superficies que necesitan preparación antes del acabado."
                : "For small uneven areas or surfaces that need preparation before final finishing.",
            },
            {
              title: isEs ? "No es reforma completa" : "Not full renovation",
              text: isEs
                ? "Servicio pensado para preparación básica, no para nivelación completa de toda la pared."
                : "A service for basic prep, not full levelling of an entire wall.",
            },
            {
              title: isEs ? "Presupuesto claro" : "Clear estimate",
              text: isEs
                ? "Envía fotos y medidas para valorar tamaño, irregularidad y acabado esperado."
                : "Send photos and measurements to review size, irregularity and expected finish.",
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
            ? "Corrección básica de superficie para un acabado más limpio"
            : "Basic surface correction for a cleaner finish"}
        </h2>

        <div className="mt-6 space-y-5 text-lg leading-8 text-neutral-700">
          <p>
            {isEs
              ? "Algunas paredes tienen pequeñas irregularidades, marcas, zonas ásperas o reparaciones anteriores que se notan antes de pintar o entregar una vivienda. La preparación básica ayuda a mejorar la superficie antes del acabado final."
              : "Some walls have small irregularities, marks, rough areas or previous repairs that stand out before painting or handover. Basic prep helps improve the surface before the final finish."}
          </p>

          <p>
            {isEs
              ? "THEVULGO realiza preparación y corrección básica de pared en Valencia para pisos, casas, alquileres, oficinas, habitaciones y zonas visibles donde se busca un resultado más limpio sin una reforma completa."
              : "THEVULGO provides basic wall preparation and correction in Valencia for apartments, homes, rentals, offices, rooms and visible areas where a cleaner result is needed without a full renovation."}
          </p>

          <p>
            {isEs
              ? "Este servicio no es una nivelación completa profesional de toda la pared. Está enfocado en correcciones locales, preparación ligera y mejora visible de zonas concretas."
              : "This service is not full professional levelling of the entire wall. It focuses on local corrections, light preparation and visible improvement of specific areas."}
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
            {isEs ? "Desde 45€" : "From €45"}
          </p>
          <h2 className="mt-3 text-4xl font-black">
            {isEs
              ? "Envía fotos de la superficie"
              : "Send photos of the surface"}
          </h2>
          <p className="mt-6 text-lg font-medium leading-8 text-neutral-900">
            {isEs
              ? "Para calcular el precio, envía una foto general, fotos de cerca y medidas aproximadas de la zona a preparar."
              : "To estimate the price, send a general photo, close-up photos and approximate measurements of the area to prepare."}
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
              ? "¿Necesitas preparar una pared irregular?"
              : "Need an uneven wall prepared?"}
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