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
    ? "Reparación de Agujeros Pequeños en Pared en Valencia | Desde 29€ | THEVULGO"
    : "Small Hole Repair in Valencia | From €29 | THEVULGO";

  const description = isEs
    ? "Reparación de agujeros pequeños en pladur o paredes de yeso en Valencia desde 29€. Relleno limpio, alisado y corrección visible de pequeños daños."
    : "Small hole repair in drywall or plaster walls in Valencia from €29. Clean filling, smoothing and visible correction of small wall damage.";

  return {
    title,
    description,
    keywords: isEs
      ? [
          "reparación agujeros pared Valencia",
          "arreglar agujero pladur Valencia",
          "reparar agujero yeso Valencia",
          "rellenar agujero pared Valencia",
          "pequeños agujeros pared Valencia",
          "reparación pladur Valencia",
          "manitas pared Valencia",
        ]
      : [
          "small hole repair Valencia",
          "drywall hole repair Valencia",
          "plaster wall hole repair Valencia",
          "wall hole filling Valencia",
          "small wall damage repair Valencia",
          "drywall repair Valencia",
          "handyman wall repair Valencia",
        ],
    alternates: {
      canonical: `${siteUrl}/${locale}/services/drywall/small-hole-repair`,
      languages: {
        es: `${siteUrl}/es/services/drywall/small-hole-repair`,
        en: `${siteUrl}/en/services/drywall/small-hole-repair`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${siteUrl}/${locale}/services/drywall/small-hole-repair`,
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

export default async function SmallHoleRepairPage({ params }: PageProps) {
  const { locale } = await params;
  const isEs = locale === "es";

  const pageUrl = `${siteUrl}/${locale}/services/drywall/small-hole-repair`;

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, quiero pedir presupuesto para reparar agujeros pequeños en pared o pladur en Valencia."
      : "Hi, I would like an estimate for small hole repair in drywall or plaster walls in Valencia."
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
          q: "¿Qué incluye la reparación de agujeros pequeños?",
          a: "Incluye revisión del daño, limpieza básica de la zona, relleno del agujero, alisado y preparación visual para que la pared quede más limpia. La pintura depende del caso y del color disponible.",
        },
        {
          q: "¿Cuánto cuesta reparar un agujero pequeño en pared en Valencia?",
          a: "El servicio empieza desde 29€. El precio final depende del tamaño del agujero, tipo de pared, número de zonas, acabado esperado y si hace falta pintura o material adicional.",
        },
        {
          q: "¿Trabajáis con pladur y paredes de yeso?",
          a: "Sí. Se pueden reparar pequeños agujeros en pladur, paredes de yeso y superficies interiores similares cuando el daño es local y sencillo.",
        },
        {
          q: "¿Se puede reparar un agujero de taco o tornillo?",
          a: "Sí. Agujeros pequeños de tacos, tornillos, soportes retirados, cuadros o accesorios pueden corregirse si el alcance es menor.",
        },
        {
          q: "¿Incluye pintura?",
          a: "La pintura puede valorarse aparte. Si tienes la pintura original, normalmente es más fácil conseguir un acabado más discreto.",
        },
        {
          q: "¿Qué fotos tengo que enviar?",
          a: "Envía una foto general de la pared, una foto de cerca del agujero, medidas aproximadas y explica si necesitas solo relleno/alisado o también pintura.",
        },
      ]
    : [
        {
          q: "What is included in small hole repair?",
          a: "It includes checking the damage, basic area cleaning, filling the hole, smoothing and visible preparation so the wall looks cleaner. Painting depends on the case and available matching color.",
        },
        {
          q: "How much does small wall hole repair cost in Valencia?",
          a: "The service starts from €29. Final price depends on hole size, wall type, number of areas, expected finish and whether paint or extra material is needed.",
        },
        {
          q: "Do you work with drywall and plaster walls?",
          a: "Yes. Small holes in drywall, plaster walls and similar interior surfaces can be repaired when the damage is local and straightforward.",
        },
        {
          q: "Can you repair screw or wall plug holes?",
          a: "Yes. Small holes from plugs, screws, removed brackets, pictures or accessories can be corrected when the scope is minor.",
        },
        {
          q: "Is painting included?",
          a: "Painting can be reviewed separately. If you already have the original paint, it is usually easier to get a more discreet finish.",
        },
        {
          q: "What photos should I send?",
          a: "Send one general photo of the wall, one close-up photo of the hole, approximate measurements and explain whether you need filling/smoothing only or painting too.",
        },
      ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: isEs
      ? "Reparación de agujeros pequeños en pared en Valencia"
      : "Small hole repair in Valencia",
    description: isEs
      ? "Reparación de agujeros pequeños en pladur o paredes de yeso con relleno limpio, alisado y corrección visible en Valencia."
      : "Repair of small holes in drywall or plaster walls with clean filling, smoothing and visible correction in Valencia.",
    serviceType: isEs ? "Reparación de agujeros pequeños" : "Small hole repair",
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
        name: isEs ? "Reparación de agujeros pequeños" : "Small hole repair",
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
        "Pladur o paredes de yeso",
        "Relleno limpio y alisado",
        "Ideal para agujeros pequeños",
      ]
    : [
        "From €29",
        "Drywall or plaster walls",
        "Clean filling and smoothing",
        "Ideal for small holes",
      ];

  const included = isEs
    ? [
        "Revisión del agujero y tipo de pared",
        "Limpieza básica de la zona dañada",
        "Relleno del agujero pequeño",
        "Alisado básico para mejorar el acabado visible",
        "Preparación para pintura cuando aplica",
        "Presupuesto claro según fotos, tamaño y alcance",
      ]
    : [
        "Check of the hole and wall type",
        "Basic cleaning of the damaged area",
        "Filling of the small hole",
        "Basic smoothing to improve visible finish",
        "Preparation for painting where applicable",
        "Clear estimate based on photos, size and scope",
      ];

  const related = isEs
    ? [
        {
          title: "Pladur y paredes",
          href: `/${locale}/services/drywall`,
        },
        {
          title: "Pequeños arreglos de pared",
          href: `/${locale}/services/repairs/minor-wall-fixes`,
        },
        {
          title: "Retoques antes de entregar piso",
          href: `/${locale}/services/repairs/move-out-touch-ups`,
        },
        {
          title: "Reparaciones en Valencia",
          href: `/${locale}/services/repairs`,
        },
      ]
    : [
        {
          title: "Drywall and walls",
          href: `/${locale}/services/drywall`,
        },
        {
          title: "Minor wall fixes",
          href: `/${locale}/services/repairs/minor-wall-fixes`,
        },
        {
          title: "Move-out touch-ups",
          href: `/${locale}/services/repairs/move-out-touch-ups`,
        },
        {
          title: "Repairs in Valencia",
          href: `/${locale}/services/repairs`,
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
              {isEs ? "Reparación de agujeros pequeños" : "Small hole repair"}{" "}
              <span className="text-yellow-500">
                {isEs ? "en Valencia" : "in Valencia"}
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-700">
              {isEs
                ? "Reparación de agujeros pequeños en pladur o paredes de yeso con relleno limpio, alisado y corrección visible del daño."
                : "Repair of small holes in drywall or plaster walls with clean filling, smoothing and visible correction of wall damage."}
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
                  ? "Agujero rellenado. Pared más limpia. Mejor acabado."
                  : "Hole filled. Cleaner wall. Better finish."}
              </h2>
              <p className="mt-4 font-medium leading-7 text-neutral-900">
                {isEs
                  ? "Ideal para pequeños agujeros de tornillos, tacos, accesorios retirados o daños locales en paredes interiores."
                  : "Ideal for small holes from screws, wall plugs, removed accessories or local interior wall damage."}
              </p>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: isEs ? "Agujeros" : "Small holes",
                  text: isEs ? "Daños locales" : "Local damage",
                  icon: CircleDot,
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
                {
                  title: isEs ? "Paredes" : "Walls",
                  text: isEs ? "Pladur o yeso" : "Drywall or plaster",
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
              title: isEs ? "Agujeros pequeños" : "Small holes",
              text: isEs
                ? "Corrección de daños pequeños de tacos, tornillos, soportes retirados o accesorios."
                : "Correction of small damage from plugs, screws, removed brackets or accessories.",
            },
            {
              title: isEs ? "Relleno y alisado" : "Filling and smoothing",
              text: isEs
                ? "Trabajo local para mejorar el aspecto visible de la pared antes de pintar o entregar."
                : "Local work to improve the visible wall finish before painting or handover.",
            },
            {
              title: isEs ? "Presupuesto claro" : "Clear estimate",
              text: isEs
                ? "Envía fotos y medidas aproximadas para valorar tamaño, pared y acabado esperado."
                : "Send photos and approximate measurements to review size, wall type and expected finish.",
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
            ? "Reparación local de agujeros pequeños en pladur y paredes de yeso"
            : "Local repair of small holes in drywall and plaster walls"}
        </h2>

        <div className="mt-6 space-y-5 text-lg leading-8 text-neutral-700">
          <p>
            {isEs
              ? "Los agujeros pequeños en la pared suelen aparecer después de retirar estantes, soportes, cuadros, accesorios, tornillos o tacos. Aunque sean pequeños, afectan mucho al aspecto general de una habitación."
              : "Small wall holes often appear after removing shelves, brackets, pictures, accessories, screws or wall plugs. Even when small, they can affect the overall look of a room."}
          </p>

          <p>
            {isEs
              ? "THEVULGO realiza reparación de agujeros pequeños en Valencia para paredes interiores, pladur, yeso, pisos de alquiler, mudanzas, entregas de vivienda y mejoras visibles del hogar."
              : "THEVULGO provides small hole repair in Valencia for interior walls, drywall, plaster, rental apartments, move-outs, handovers and visible home improvements."}
          </p>

          <p>
            {isEs
              ? "Antes de confirmar, puedes enviar fotos del agujero y de la pared completa. Así se puede valorar el tamaño, tipo de pared, si hace falta solo rellenar y alisar, o si también conviene pintar."
              : "Before confirming, you can send photos of the hole and the full wall. This helps check the size, wall type, whether filling and smoothing is enough, or whether painting should also be considered."}
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
              ? "Envía fotos del agujero y la pared"
              : "Send photos of the hole and wall"}
          </h2>
          <p className="mt-6 text-lg font-medium leading-8 text-neutral-900">
            {isEs
              ? "Para calcular el precio, envía una foto de cerca, una foto general de la pared y el tamaño aproximado del agujero."
              : "To estimate the price, send a close-up photo, a general photo of the wall and the approximate size of the hole."}
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
              ? "¿Necesitas reparar un agujero pequeño?"
              : "Need a small wall hole repaired?"}
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