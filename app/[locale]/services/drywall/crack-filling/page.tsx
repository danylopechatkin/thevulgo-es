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
  Zap,
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
    ? "Relleno de Grietas en Valencia | Desde 29€ | THEVULGO"
    : "Crack Filling in Valencia | From €29 | THEVULGO";

  const description = isEs
    ? "Relleno y alisado de pequeñas grietas visibles en paredes y esquinas en Valencia desde 29€. Preparación limpia para mejorar el acabado."
    : "Crack filling in Valencia from €29. Filling and smoothing of small visible cracks in walls and corners for a cleaner finish.";

  return {
    title,
    description,
    keywords: isEs
      ? [
          "relleno grietas Valencia",
          "reparar grietas pared Valencia",
          "grietas pared Valencia",
          "grietas esquinas Valencia",
          "alisar grietas pared Valencia",
          "reparación pared Valencia",
          "manitas pared Valencia",
        ]
      : [
          "crack filling Valencia",
          "wall crack repair Valencia",
          "small wall cracks Valencia",
          "corner crack repair Valencia",
          "drywall crack filling Valencia",
          "plaster crack repair Valencia",
          "wall repair Valencia",
        ],
    alternates: {
      canonical: `${siteUrl}/${locale}/services/drywall/crack-filling`,
      languages: {
        es: `${siteUrl}/es/services/drywall/crack-filling`,
        en: `${siteUrl}/en/services/drywall/crack-filling`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${siteUrl}/${locale}/services/drywall/crack-filling`,
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

export default async function CrackFillingPage({ params }: PageProps) {
  const { locale } = await params;
  const isEs = locale === "es";

  const pageUrl = `${siteUrl}/${locale}/services/drywall/crack-filling`;

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, quiero pedir presupuesto para rellenar grietas pequeñas en pared o esquinas en Valencia."
      : "Hi, I would like an estimate for filling small cracks in walls or corners in Valencia."
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
          q: "¿Qué incluye el relleno de grietas?",
          a: "Incluye revisión visual de la grieta, preparación básica, relleno, alisado y mejora visible de pequeñas grietas en paredes o esquinas. La pintura se valora aparte.",
        },
        {
          q: "¿Cuánto cuesta rellenar una grieta en Valencia?",
          a: "El servicio empieza desde 29€. El precio final depende del largo de la grieta, profundidad, tipo de pared, número de zonas y acabado esperado.",
        },
        {
          q: "¿Reparáis grietas en esquinas?",
          a: "Sí. Se pueden rellenar y alisar pequeñas grietas visibles en esquinas interiores, uniones y zonas localizadas si el daño es superficial.",
        },
        {
          q: "¿Este servicio soluciona grietas estructurales?",
          a: "No. Este servicio es para grietas pequeñas y visibles de acabado. Si la grieta es grande, se abre, vuelve rápido o parece estructural, debe revisarla un profesional especializado.",
        },
        {
          q: "¿Incluye pintura?",
          a: "Normalmente se valora aparte. Si tienes la pintura original, se puede revisar la posibilidad de retocar después del relleno y alisado.",
        },
        {
          q: "¿Qué fotos tengo que enviar?",
          a: "Envía una foto general de la pared, fotos de cerca de la grieta y una medida aproximada del largo de cada grieta.",
        },
      ]
    : [
        {
          q: "What is included in crack filling?",
          a: "It includes visual crack review, basic preparation, filling, smoothing and visible improvement of small cracks in walls or corners. Painting is reviewed separately.",
        },
        {
          q: "How much does crack filling cost in Valencia?",
          a: "The service starts from €29. Final price depends on crack length, depth, wall type, number of areas and expected finish.",
        },
        {
          q: "Do you repair cracks in corners?",
          a: "Yes. Small visible cracks in interior corners, joints and local areas can be filled and smoothed if the damage is superficial.",
        },
        {
          q: "Does this service fix structural cracks?",
          a: "No. This service is for small visible finishing cracks. If the crack is large, widening, recurring quickly or looks structural, it should be checked by a specialist.",
        },
        {
          q: "Is painting included?",
          a: "Painting is usually reviewed separately. If you have the original paint, touch-up after filling and smoothing can be discussed.",
        },
        {
          q: "What photos should I send?",
          a: "Send one general photo of the wall, close-up photos of the crack and approximate length of each crack.",
        },
      ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: isEs ? "Relleno de grietas en Valencia" : "Crack filling in Valencia",
    description: isEs
      ? "Relleno y alisado de pequeñas grietas visibles en paredes y esquinas en Valencia."
      : "Filling and smoothing of small visible cracks in walls and corners in Valencia.",
    serviceType: isEs ? "Relleno de grietas" : "Crack filling",
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
        name: isEs ? "Relleno de grietas" : "Crack filling",
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
        "Grietas pequeñas visibles",
        "Paredes y esquinas",
        "Relleno y alisado limpio",
      ]
    : [
        "From €29",
        "Small visible cracks",
        "Walls and corners",
        "Clean filling and smoothing",
      ];

  const included = isEs
    ? [
        "Revisión visual de la grieta",
        "Preparación básica de la zona",
        "Relleno de grietas pequeñas",
        "Alisado local para mejorar el acabado",
        "Preparación para pintura cuando aplica",
        "Presupuesto claro según fotos, largo y alcance",
      ]
    : [
        "Visual check of the crack",
        "Basic preparation of the area",
        "Filling of small cracks",
        "Local smoothing to improve finish",
        "Preparation for painting where applicable",
        "Clear estimate based on photos, length and scope",
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
          title: "Wall touch-up prep",
          href: `/${locale}/services/drywall/wall-touch-up-prep`,
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
              {isEs ? "Relleno de grietas" : "Crack filling"}{" "}
              <span className="text-yellow-500">
                {isEs ? "en Valencia" : "in Valencia"}
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-700">
              {isEs
                ? "Relleno y alisado de pequeñas grietas visibles en paredes y esquinas para mejorar el acabado antes de pintar o retocar."
                : "Filling and smoothing of small visible cracks in walls and corners to improve the finish before painting or touch-up work."}
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
              <Zap className="mb-6 h-12 w-12 text-black" />
              <p className="text-sm font-black uppercase tracking-widest">
                {isEs ? "Desde 29€" : "From €29"}
              </p>
              <h2 className="mt-3 text-3xl font-black">
                {isEs
                  ? "Grieta rellenada. Superficie más lisa. Mejor acabado."
                  : "Crack filled. Smoother surface. Cleaner finish."}
              </h2>
              <p className="mt-4 font-medium leading-7 text-neutral-900">
                {isEs
                  ? "Ideal para grietas pequeñas de acabado en paredes interiores, esquinas y uniones visibles."
                  : "Ideal for small finishing cracks in interior walls, corners and visible joints."}
              </p>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: isEs ? "Grietas" : "Cracks",
                  text: isEs ? "Pequeñas y visibles" : "Small and visible",
                  icon: Zap,
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
                  title: isEs ? "Esquinas" : "Corners",
                  text: isEs ? "Zonas interiores" : "Interior areas",
                  icon: ShieldCheck,
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
              title: isEs ? "Grietas pequeñas" : "Small cracks",
              text: isEs
                ? "Para grietas visibles de acabado en paredes, esquinas y zonas interiores."
                : "For visible finishing cracks in walls, corners and interior areas.",
            },
            {
              title: isEs ? "Relleno y alisado" : "Filling and smoothing",
              text: isEs
                ? "Corrección local para dejar la superficie más limpia antes de pintar o retocar."
                : "Local correction to leave the surface cleaner before painting or touch-up.",
            },
            {
              title: isEs ? "Presupuesto claro" : "Clear estimate",
              text: isEs
                ? "Envía fotos y largo aproximado para valorar material, tiempo y acabado esperado."
                : "Send photos and approximate length to estimate material, time and expected finish.",
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
            ? "Relleno de pequeñas grietas visibles en paredes y esquinas"
            : "Filling small visible cracks in walls and corners"}
        </h2>

        <div className="mt-6 space-y-5 text-lg leading-8 text-neutral-700">
          <p>
            {isEs
              ? "Las grietas pequeñas pueden hacer que una pared se vea vieja o descuidada, especialmente en esquinas, uniones y zonas visibles. Este servicio está pensado para rellenar y alisar grietas superficiales antes de pintura o retoque."
              : "Small cracks can make a wall look old or poorly maintained, especially in corners, joints and visible areas. This service is designed to fill and smooth superficial cracks before painting or touch-up work."}
          </p>

          <p>
            {isEs
              ? "THEVULGO realiza relleno de grietas en Valencia para pisos, casas, alquileres, habitaciones, pasillos, zonas de move-out y paredes que necesitan una mejora visual limpia."
              : "THEVULGO provides crack filling in Valencia for apartments, homes, rental properties, rooms, hallways, move-out areas and walls that need a cleaner visual finish."}
          </p>

          <p>
            {isEs
              ? "Este servicio es para grietas pequeñas y de acabado. Si la grieta parece estructural, es muy larga, se abre de nuevo o está relacionada con humedad, debe revisarse primero la causa."
              : "This service is for small finishing cracks. If the crack looks structural, is very long, reopens quickly or is related to moisture, the cause should be checked first."}
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
              ? "Envía fotos y largo aproximado"
              : "Send photos and approximate length"}
          </h2>
          <p className="mt-6 text-lg font-medium leading-8 text-neutral-900">
            {isEs
              ? "Para calcular el precio, envía una foto general, fotos de cerca y el largo aproximado de cada grieta."
              : "To estimate the price, send a general photo, close-up photos and the approximate length of each crack."}
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
              ? "¿Necesitas rellenar grietas en la pared?"
              : "Need wall cracks filled?"}
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