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
    ? "Preparación de Pared para Retoques en Valencia | Desde 35€ | THEVULGO"
    : "Wall Touch-Up Prep in Valencia | From €35 | THEVULGO";

  const description = isEs
    ? "Preparación básica de pared antes de pintar o retocar en Valencia desde 35€. Alisado, corrección de marcas, preparación de superficie y mejora visible."
    : "Basic wall touch-up preparation in Valencia from €35. Surface preparation before painting or touch-up work: smoothing, marks correction and visible finish prep.";

  return {
    title,
    description,
    keywords: isEs
      ? [
          "preparación pared pintura Valencia",
          "preparar pared para pintar Valencia",
          "retoques pared Valencia",
          "alisar pared Valencia",
          "preparación superficie pared Valencia",
          "arreglar marcas pared Valencia",
          "manitas pared Valencia",
        ]
      : [
          "wall touch up prep Valencia",
          "wall preparation before painting Valencia",
          "surface prep wall Valencia",
          "wall smoothing Valencia",
          "paint touch up prep Valencia",
          "wall marks prep Valencia",
          "drywall prep Valencia",
        ],
    alternates: {
      canonical: `${siteUrl}/${locale}/services/drywall/wall-touch-up-prep`,
      languages: {
        es: `${siteUrl}/es/services/drywall/wall-touch-up-prep`,
        en: `${siteUrl}/en/services/drywall/wall-touch-up-prep`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${siteUrl}/${locale}/services/drywall/wall-touch-up-prep`,
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

export default async function WallTouchUpPrepPage({ params }: PageProps) {
  const { locale } = await params;
  const isEs = locale === "es";

  const pageUrl = `${siteUrl}/${locale}/services/drywall/wall-touch-up-prep`;

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, quiero pedir presupuesto para preparación de pared antes de pintar o retocar en Valencia."
      : "Hi, I would like an estimate for wall touch-up preparation before painting in Valencia."
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
          q: "¿Qué incluye la preparación de pared para retoques?",
          a: "Incluye revisión de la superficie, corrección básica de pequeñas marcas, alisado local, preparación de zonas visibles y mejora de la pared antes de pintar o retocar.",
        },
        {
          q: "¿Cuánto cuesta preparar una pared para pintar en Valencia?",
          a: "El servicio empieza desde 35€. El precio final depende del tamaño de la zona, estado de la pared, número de marcas, material necesario y acabado esperado.",
        },
        {
          q: "¿Incluye pintura?",
          a: "Este servicio está enfocado en la preparación de superficie. La pintura o retoque con color puede valorarse aparte según el caso y la pintura disponible.",
        },
        {
          q: "¿Sirve antes de entregar un piso?",
          a: "Sí. Es útil para mejorar zonas visibles antes de mudanza, entrega de llaves, fotos, visitas o inspección.",
        },
        {
          q: "¿Qué fotos tengo que enviar?",
          a: "Envía una foto general de la pared, fotos de cerca de las zonas a preparar, medidas aproximadas y explica si después quieres pintar o solo dejar preparado.",
        },
      ]
    : [
        {
          q: "What is included in wall touch-up prep?",
          a: "It includes checking the surface, basic correction of small marks, local smoothing, preparation of visible areas and wall improvement before painting or touch-up work.",
        },
        {
          q: "How much does wall prep before painting cost in Valencia?",
          a: "The service starts from €35. Final price depends on area size, wall condition, number of marks, required material and expected finish.",
        },
        {
          q: "Is painting included?",
          a: "This service focuses on surface preparation. Painting or color touch-up can be reviewed separately depending on the case and available paint.",
        },
        {
          q: "Is this useful before handing over an apartment?",
          a: "Yes. It is useful for improving visible areas before move-out, key handover, photos, viewings or inspection.",
        },
        {
          q: "What photos should I send?",
          a: "Send one general photo of the wall, close-up photos of the areas to prepare, approximate measurements and explain whether you want painting after or prep only.",
        },
      ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: isEs
      ? "Preparación de pared para retoques en Valencia"
      : "Wall touch-up prep in Valencia",
    description: isEs
      ? "Preparación básica de superficie antes de pintar o retocar: alisado local, corrección de marcas y mejora visible de pared en Valencia."
      : "Basic surface preparation before painting or touch-up work: local smoothing, mark correction and visible wall improvement in Valencia.",
    serviceType: isEs ? "Preparación de pared" : "Wall touch-up preparation",
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
      price: "35",
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
        name: isEs ? "Preparación de pared para retoques" : "Wall touch-up prep",
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
        "Desde 35€",
        "Preparación antes de pintar",
        "Alisado y corrección local",
        "Mejor acabado visible",
      ]
    : [
        "From €35",
        "Prep before painting",
        "Local smoothing and correction",
        "Better visible finish",
      ];

  const included = isEs
    ? [
        "Revisión de marcas y superficie",
        "Preparación básica de zonas visibles",
        "Alisado local cuando es necesario",
        "Corrección de pequeñas imperfecciones",
        "Preparación para pintura o retoque posterior",
        "Presupuesto claro según fotos, tamaño y alcance",
      ]
    : [
        "Check of marks and surface",
        "Basic preparation of visible areas",
        "Local smoothing where needed",
        "Correction of small imperfections",
        "Preparation for later painting or touch-up",
        "Clear estimate based on photos, size and scope",
      ];

  const related = isEs
    ? [
        {
          title: "Reparación de agujeros pequeños",
          href: `/${locale}/services/drywall/small-hole-repair`,
        },
        {
          title: "Reparación media de pared",
          href: `/${locale}/services/drywall/medium-wall-patching`,
        },
        {
          title: "Retoques antes de entregar piso",
          href: `/${locale}/services/repairs/move-out-touch-ups`,
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
          title: "Medium wall patching",
          href: `/${locale}/services/drywall/medium-wall-patching`,
        },
        {
          title: "Move-out touch-ups",
          href: `/${locale}/services/repairs/move-out-touch-ups`,
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
              {isEs ? "Preparación de pared para retoques" : "Wall touch-up prep"}{" "}
              <span className="text-yellow-500">
                {isEs ? "en Valencia" : "in Valencia"}
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-700">
              {isEs
                ? "Preparación básica de superficie antes de pintar o retocar: alisado local, corrección de marcas y mejora visible de la pared."
                : "Basic surface preparation before painting or touch-up work: local smoothing, mark correction and visible wall improvement."}
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
              <Paintbrush className="mb-6 h-12 w-12 text-black" />
              <p className="text-sm font-black uppercase tracking-widest">
                {isEs ? "Desde 35€" : "From €35"}
              </p>
              <h2 className="mt-3 text-3xl font-black">
                {isEs
                  ? "Superficie más lisa. Retoque más limpio. Mejor resultado."
                  : "Smoother surface. Cleaner touch-up. Better result."}
              </h2>
              <p className="mt-4 font-medium leading-7 text-neutral-900">
                {isEs
                  ? "Ideal cuando la pared necesita preparación antes de aplicar pintura, retocar marcas o mejorar una zona visible."
                  : "Ideal when the wall needs preparation before paint, mark touch-up or visible area improvement."}
              </p>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: isEs ? "Preparación" : "Preparation",
                  text: isEs ? "Antes de pintar" : "Before painting",
                  icon: Paintbrush,
                },
                {
                  title: isEs ? "Alisado" : "Smoothing",
                  text: isEs ? "Zonas locales" : "Local areas",
                  icon: Ruler,
                },
                {
                  title: isEs ? "Marcas" : "Marks",
                  text: isEs ? "Corrección básica" : "Basic correction",
                  icon: Wrench,
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
              title: isEs ? "Antes de pintar" : "Before painting",
              text: isEs
                ? "Preparación básica para que la zona quede más lista antes de pintura o retoque."
                : "Basic preparation so the area is more ready before painting or touch-up.",
            },
            {
              title: isEs ? "Mejor superficie" : "Better surface",
              text: isEs
                ? "Alisado local y corrección de pequeñas imperfecciones visibles."
                : "Local smoothing and correction of small visible imperfections.",
            },
            {
              title: isEs ? "Presupuesto claro" : "Clear estimate",
              text: isEs
                ? "Envía fotos y medidas para valorar el tamaño de la zona y el acabado esperado."
                : "Send photos and measurements to review area size and expected finish.",
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
            ? "Preparación básica de superficie antes de pintar o retocar"
            : "Basic surface preparation before painting or touch-up work"}
        </h2>

        <div className="mt-6 space-y-5 text-lg leading-8 text-neutral-700">
          <p>
            {isEs
              ? "Antes de pintar una zona o hacer un retoque, la pared puede necesitar preparación: pequeñas marcas, irregularidades, zonas ásperas, restos de reparaciones anteriores o superficies que no están listas para un acabado limpio."
              : "Before painting an area or doing a touch-up, the wall may need preparation: small marks, uneven spots, rough areas, previous repair remains or surfaces that are not ready for a clean finish."}
          </p>

          <p>
            {isEs
              ? "THEVULGO realiza preparación de pared en Valencia para pisos, casas, alquileres, move-out, entregas de vivienda, habitaciones y zonas visibles que necesitan mejorar antes de pintar."
              : "THEVULGO provides wall preparation in Valencia for apartments, homes, rental properties, move-outs, handovers, rooms and visible areas that need improvement before painting."}
          </p>

          <p>
            {isEs
              ? "Este servicio se enfoca en preparar la superficie. Si también necesitas pintura, se puede valorar aparte según color, disponibilidad de pintura y tamaño de la zona."
              : "This service focuses on preparing the surface. If painting is also needed, it can be reviewed separately depending on color, paint availability and area size."}
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
            {isEs ? "Desde 35€" : "From €35"}
          </p>
          <h2 className="mt-3 text-4xl font-black">
            {isEs
              ? "Envía fotos de la zona a preparar"
              : "Send photos of the area to prepare"}
          </h2>
          <p className="mt-6 text-lg font-medium leading-8 text-neutral-900">
            {isEs
              ? "Para calcular el precio, envía una foto general, fotos de cerca y medidas aproximadas de la superficie."
              : "To estimate the price, send a general photo, close-up photos and approximate measurements of the surface."}
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
              ? "¿Necesitas preparar una pared para retocar?"
              : "Need a wall prepared for touch-up?"}
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