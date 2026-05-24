import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
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
    ? "Parche Grande de Pladur en Valencia | Desde 69€ | THEVULGO"
    : "Large Drywall Patch in Valencia | From €69 | THEVULGO";

  const description = isEs
    ? "Parche grande de pladur en Valencia desde 69€. Corte, preparación, parcheado, relleno, alisado y acabado para daños más visibles en paredes interiores."
    : "Large drywall patch in Valencia from €69. Larger cutout and patch work with preparation, filling, smoothing and finishing for visible wall damage.";

  return {
    title,
    description,
    keywords: isEs
      ? [
          "parche grande pladur Valencia",
          "reparación grande pladur Valencia",
          "reparar pladur dañado Valencia",
          "parche pared pladur Valencia",
          "agujero grande pared Valencia",
          "reparación drywall Valencia",
          "manitas pladur Valencia",
        ]
      : [
          "large drywall patch Valencia",
          "large drywall repair Valencia",
          "drywall cutout patch Valencia",
          "big wall hole repair Valencia",
          "damaged drywall repair Valencia",
          "plasterboard patch Valencia",
          "drywall handyman Valencia",
        ],
    alternates: {
      canonical: `${siteUrl}/${locale}/services/drywall/large-drywall-patch`,
      languages: {
        es: `${siteUrl}/es/services/drywall/large-drywall-patch`,
        en: `${siteUrl}/en/services/drywall/large-drywall-patch`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${siteUrl}/${locale}/services/drywall/large-drywall-patch`,
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

export default async function LargeDrywallPatchPage({ params }: PageProps) {
  const { locale } = await params;
  const isEs = locale === "es";

  const pageUrl = `${siteUrl}/${locale}/services/drywall/large-drywall-patch`;

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, quiero pedir presupuesto para un parche grande de pladur o pared en Valencia."
      : "Hi, I would like an estimate for a large drywall patch in Valencia."
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
          q: "¿Qué incluye un parche grande de pladur?",
          a: "Incluye revisión del daño, preparación de la zona, posible corte o saneado del área dañada, colocación de parche, relleno, alisado y preparación del acabado visible.",
        },
        {
          q: "¿Cuánto cuesta un parche grande de pladur en Valencia?",
          a: "El servicio empieza desde 69€. El precio final depende del tamaño del daño, tipo de pared, acceso, materiales, número de capas y acabado esperado.",
        },
        {
          q: "¿Cuándo necesito un parche grande y no una reparación pequeña?",
          a: "Cuando el agujero o daño es amplio, hay zona rota, hundida, agrietada o necesita un recorte y parche más completo que un simple relleno.",
        },
        {
          q: "¿Incluye pintura?",
          a: "La pintura se valora aparte según el color, superficie y disponibilidad de pintura original. El parche puede dejarse preparado para pintar.",
        },
        {
          q: "¿Se puede hacer en una sola visita?",
          a: "Depende del tamaño, humedad, material y acabado. Algunos parches grandes necesitan tiempo de secado entre capas.",
        },
        {
          q: "¿Qué fotos tengo que enviar?",
          a: "Envía una foto general de la pared, una foto de cerca del daño, medidas aproximadas y explica si necesitas solo parcheado o también acabado/pintura.",
        },
      ]
    : [
        {
          q: "What is included in a large drywall patch?",
          a: "It includes checking the damage, preparing the area, possible cutout or cleanup of the damaged section, patch installation, filling, smoothing and visible finish preparation.",
        },
        {
          q: "How much does a large drywall patch cost in Valencia?",
          a: "The service starts from €69. Final price depends on damage size, wall type, access, materials, number of coats and expected finish.",
        },
        {
          q: "When do I need a large patch instead of a small repair?",
          a: "When the hole or damage is larger, broken, sunken, cracked or needs a more complete cutout and patch instead of simple filling.",
        },
        {
          q: "Is painting included?",
          a: "Painting is reviewed separately depending on color, surface and availability of original paint. The patch can be left prepared for painting.",
        },
        {
          q: "Can it be done in one visit?",
          a: "It depends on size, moisture, material and finish. Some larger patches need drying time between coats.",
        },
        {
          q: "What photos should I send?",
          a: "Send one general photo of the wall, one close-up photo of the damage, approximate measurements and explain whether you need patching only or also finishing/painting.",
        },
      ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: isEs ? "Parche grande de pladur en Valencia" : "Large drywall patch in Valencia",
    description: isEs
      ? "Trabajo de corte, preparación, parcheado, relleno y alisado para daños grandes o visibles en pladur y paredes interiores en Valencia."
      : "Larger cutout and patch work with preparation, filling and smoothing for larger visible drywall or interior wall damage in Valencia.",
    serviceType: isEs ? "Parche grande de pladur" : "Large drywall patch",
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
      price: "69",
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
        name: isEs ? "Parche grande de pladur" : "Large drywall patch",
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
        "Desde 69€",
        "Corte y parche más grande",
        "Relleno, alisado y acabado",
        "Para daños visibles en pared",
      ]
    : [
        "From €69",
        "Larger cutout and patch",
        "Filling, smoothing and finishing",
        "For visible wall damage",
      ];

  const included = isEs
    ? [
        "Revisión del tamaño y tipo de daño",
        "Preparación o saneado de la zona afectada",
        "Corte o parche cuando el caso lo requiere",
        "Relleno y alisado en varias zonas/capas si aplica",
        "Preparación para pintura o acabado visible",
        "Presupuesto claro según fotos, medidas y alcance",
      ]
    : [
        "Review of damage size and type",
        "Preparation or cleanup of the affected area",
        "Cutout or patching where required",
        "Filling and smoothing in areas/coats where needed",
        "Preparation for painting or visible finish",
        "Clear estimate based on photos, measurements and scope",
      ];

  const related = isEs
    ? [
        { title: "Reparación de agujeros pequeños", href: `/${locale}/services/drywall/small-hole-repair` },
        { title: "Reparación media de pared", href: `/${locale}/services/drywall/medium-wall-patching` },
        { title: "Pladur y paredes", href: `/${locale}/services/drywall` },
        { title: "Retoques antes de entrega", href: `/${locale}/services/repairs/move-out-touch-ups` },
      ]
    : [
        { title: "Small hole repair", href: `/${locale}/services/drywall/small-hole-repair` },
        { title: "Medium wall patching", href: `/${locale}/services/drywall/medium-wall-patching` },
        { title: "Drywall and walls", href: `/${locale}/services/drywall` },
        { title: "Move-out touch-ups", href: `/${locale}/services/repairs/move-out-touch-ups` },
      ];

  return (
    <main className="min-h-screen bg-white text-black">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

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
              {isEs ? "Parche grande de pladur" : "Large drywall patch"}{" "}
              <span className="text-yellow-500">
                {isEs ? "en Valencia" : "in Valencia"}
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-700">
              {isEs
                ? "Trabajo de parche más grande para daños visibles en pladur o paredes interiores: corte, preparación, relleno, alisado y acabado."
                : "Larger patch work for visible drywall or interior wall damage: cutout, preparation, filling, smoothing and finishing."}
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
                {isEs ? "Desde 69€" : "From €69"}
              </p>
              <h2 className="mt-3 text-3xl font-black">
                {isEs
                  ? "Parche más fuerte. Mejor preparación. Acabado más limpio."
                  : "Stronger patch. Better prep. Cleaner finish."}
              </h2>
              <p className="mt-4 font-medium leading-7 text-neutral-900">
                {isEs
                  ? "Ideal para daños más grandes que necesitan saneado, parche y más trabajo de acabado."
                  : "Ideal for larger damage that needs cleanup, patching and more finishing work."}
              </p>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: isEs ? "Corte" : "Cutout",
                  text: isEs ? "Zona dañada" : "Damaged area",
                  icon: Ruler,
                },
                {
                  title: isEs ? "Parche" : "Patch",
                  text: isEs ? "Pladur o pared" : "Drywall or wall",
                  icon: Layers3,
                },
                {
                  title: isEs ? "Alisado" : "Smoothing",
                  text: isEs ? "Mejor acabado" : "Better finish",
                  icon: Paintbrush,
                },
                {
                  title: isEs ? "Reparación" : "Repair",
                  text: isEs ? "Daño visible" : "Visible damage",
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
              title: isEs ? "Daños grandes visibles" : "Larger visible damage",
              text: isEs
                ? "Para agujeros, roturas, cortes o zonas dañadas que necesitan más que un relleno simple."
                : "For holes, breaks, cutouts or damaged areas that need more than simple filling.",
            },
            {
              title: isEs ? "Preparación y acabado" : "Preparation and finish",
              text: isEs
                ? "Trabajo enfocado en preparar, parchear y alisar la zona para un resultado más limpio."
                : "Work focused on preparing, patching and smoothing the area for a cleaner result.",
            },
            {
              title: isEs ? "Presupuesto claro" : "Clear estimate",
              text: isEs
                ? "Envía fotos y medidas para valorar tamaño, material, tiempo y acabado esperado."
                : "Send photos and measurements to review size, material, time and expected finish.",
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
            ? "Parche grande para pladur dañado, agujeros amplios y zonas visibles"
            : "Large patching for damaged drywall, bigger holes and visible areas"}
        </h2>

        <div className="mt-6 space-y-5 text-lg leading-8 text-neutral-700">
          <p>
            {isEs
              ? "Un parche grande de pladur es necesario cuando el daño ya no se puede resolver con un simple relleno. Puede ser un agujero amplio, una zona rota, un corte, daño por impacto o una sección que necesita saneado antes de aplicar material nuevo."
              : "A large drywall patch is needed when damage cannot be solved with simple filling. It may be a larger hole, broken section, cutout, impact damage or an area that needs cleanup before new material is applied."}
          </p>

          <p>
            {isEs
              ? "THEVULGO realiza parches grandes de pladur en Valencia para viviendas, pisos de alquiler, oficinas, mudanzas, entregas de vivienda y paredes interiores con daños visibles."
              : "THEVULGO provides large drywall patching in Valencia for homes, rental apartments, offices, move-outs, property handovers and interior walls with visible damage."}
          </p>

          <p>
            {isEs
              ? "Antes de confirmar, puedes enviar fotos y medidas aproximadas. Así se puede valorar si hace falta corte, parche, varias capas de material, tiempo de secado o pintura posterior."
              : "Before confirming, you can send photos and approximate measurements. This helps review whether cutout, patching, multiple coats, drying time or later painting is needed."}
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
            {isEs ? "Desde 69€" : "From €69"}
          </p>
          <h2 className="mt-3 text-4xl font-black">
            {isEs
              ? "Envía fotos y medidas del daño"
              : "Send photos and damage measurements"}
          </h2>
          <p className="mt-6 text-lg font-medium leading-8 text-neutral-900">
            {isEs
              ? "Para calcular el precio, envía una foto general, una foto de cerca, medidas aproximadas y explica si necesitas también pintura."
              : "To estimate the price, send a general photo, a close-up photo, approximate measurements and explain whether you also need painting."}
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
              ? "¿Necesitas un parche grande de pladur?"
              : "Need a large drywall patch?"}
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