import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Drill,
  Hammer,
  MapPin,
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
    ? "Pequeños Trabajos de Taladro en Valencia | Desde 25€ | THEVULGO"
    : "Small Drilling Jobs in Valencia | From €25 | THEVULGO";

  const description = isEs
    ? "Pequeños trabajos de taladro en Valencia desde 25€. Perforación limpia para accesorios, soportes, estantes, fijaciones y pequeñas instalaciones del hogar."
    : "Small drilling jobs in Valencia from €25. Clean drilling for simple home fixes, accessories, fittings, shelves and minor installs.";

  return {
    title,
    description,
    keywords: isEs
      ? [
          "pequeños trabajos taladro Valencia",
          "taladrar pared Valencia",
          "perforación limpia Valencia",
          "hacer agujeros pared Valencia",
          "instalar accesorios pared Valencia",
          "manitas taladro Valencia",
          "fijaciones pared Valencia",
        ]
      : [
          "small drilling jobs Valencia",
          "clean drilling Valencia",
          "drill wall Valencia",
          "wall drilling handyman Valencia",
          "minor installs Valencia",
          "accessory drilling Valencia",
          "wall fittings Valencia",
        ],
    alternates: {
      canonical: `${siteUrl}/${locale}/services/repairs/small-drilling-jobs`,
      languages: {
        es: `${siteUrl}/es/services/repairs/small-drilling-jobs`,
        en: `${siteUrl}/en/services/repairs/small-drilling-jobs`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${siteUrl}/${locale}/services/repairs/small-drilling-jobs`,
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

export default async function SmallDrillingJobsPage({ params }: PageProps) {
  const { locale } = await params;
  const isEs = locale === "es";

  const pageUrl = `${siteUrl}/${locale}/services/repairs/small-drilling-jobs`;

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, quiero pedir presupuesto para pequeños trabajos de taladro en Valencia."
      : "Hi, I would like an estimate for small drilling jobs in Valencia."
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
          q: "¿Qué incluye un pequeño trabajo de taladro?",
          a: "Incluye perforación limpia para pequeñas fijaciones, accesorios, soportes, estantes ligeros y pequeñas instalaciones del hogar cuando el alcance es sencillo.",
        },
        {
          q: "¿Cuánto cuesta un pequeño trabajo de taladro en Valencia?",
          a: "El servicio empieza desde 25€. El precio final depende del número de agujeros, tipo de pared, acceso, material necesario y objeto a fijar.",
        },
        {
          q: "¿Podéis taladrar para accesorios de baño, cocina o pared?",
          a: "Sí. Se pueden hacer pequeños trabajos para accesorios, soportes, colgadores, estantes ligeros, guías, placas y fijaciones visibles.",
        },
        {
          q: "¿Trabajáis con azulejo, ladrillo, hormigón o pladur?",
          a: "Sí, pero cada superficie se revisa antes. El tipo de pared afecta a la fijación, herramienta y material necesario.",
        },
        {
          q: "¿Qué fotos tengo que enviar?",
          a: "Envía una foto general de la zona, una foto del objeto que quieres fijar, medidas aproximadas y explica cuántos puntos de taladro necesitas.",
        },
      ]
    : [
        {
          q: "What is included in a small drilling job?",
          a: "It includes clean drilling for small fixings, accessories, brackets, light shelves and minor home installations when the scope is straightforward.",
        },
        {
          q: "How much does a small drilling job cost in Valencia?",
          a: "The service starts from €25. Final price depends on the number of holes, wall type, access, required material and the item being fixed.",
        },
        {
          q: "Can you drill for bathroom, kitchen or wall accessories?",
          a: "Yes. Small jobs can include accessories, brackets, hooks, light shelves, rails, plates and visible wall fixings.",
        },
        {
          q: "Do you work with tile, brick, concrete or drywall?",
          a: "Yes, but each surface is checked first. Wall type affects the fixing, tool and material needed.",
        },
        {
          q: "What photos should I send?",
          a: "Send one general photo of the area, one photo of the item you want fixed, approximate measurements and explain how many drilling points you need.",
        },
      ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: isEs
      ? "Pequeños trabajos de taladro en Valencia"
      : "Small drilling jobs in Valencia",
    description: isEs
      ? "Perforación limpia para pequeñas fijaciones, accesorios, soportes, estantes ligeros y pequeñas instalaciones del hogar en Valencia."
      : "Clean drilling for simple home fixes, accessories, brackets, light shelves and minor installs in Valencia.",
    serviceType: isEs ? "Pequeños trabajos de taladro" : "Small drilling jobs",
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
      price: "25",
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
        name: isEs ? "Reparaciones" : "Repairs",
        item: `${siteUrl}/${locale}/services/repairs`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: isEs ? "Pequeños trabajos de taladro" : "Small drilling jobs",
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
        "Desde 25€",
        "Perforación limpia",
        "Accesorios y pequeñas fijaciones",
        "Baño, cocina y detalles de pared",
      ]
    : [
        "From €25",
        "Clean drilling",
        "Accessories and small fixings",
        "Bathroom, kitchen and wall details",
      ];

  const included = isEs
    ? [
        "Revisión básica de la zona y superficie",
        "Marcado de puntos de fijación cuando aplica",
        "Perforación limpia para trabajos pequeños",
        "Preparación para tacos, anclajes o tornillos",
        "Instalación de accesorios simples cuando es posible",
        "Presupuesto claro según fotos, medidas y alcance",
      ]
    : [
        "Basic check of the area and surface",
        "Marking of fixing points where needed",
        "Clean drilling for small jobs",
        "Preparation for plugs, anchors or screws",
        "Simple accessory installation where possible",
        "Clear estimate based on photos, measurements and scope",
      ];

  const related = isEs
    ? [
        {
          title: "Instalación de tacos y anclajes",
          href: `/${locale}/services/repairs/wall-anchor-installation`,
        },
        {
          title: "Reparaciones en Valencia",
          href: `/${locale}/services/repairs`,
        },
        {
          title: "Instalación de estantes",
          href: `/${locale}/services/shelf-installation`,
        },
        {
          title: "Servicios handyman",
          href: `/${locale}/services`,
        },
      ]
    : [
        {
          title: "Wall anchor installation",
          href: `/${locale}/services/repairs/wall-anchor-installation`,
        },
        {
          title: "Repairs in Valencia",
          href: `/${locale}/services/repairs`,
        },
        {
          title: "Shelf installation",
          href: `/${locale}/services/shelf-installation`,
        },
        {
          title: "Handyman services",
          href: `/${locale}/services`,
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
                ? "THEVULGO • Reparaciones en Valencia"
                : "THEVULGO • Repairs in Valencia"}
            </div>

            <h1 className="text-4xl font-black tracking-tight md:text-6xl">
              {isEs ? "Pequeños trabajos de taladro" : "Small drilling jobs"}{" "}
              <span className="text-yellow-500">
                {isEs ? "en Valencia" : "in Valencia"}
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-700">
              {isEs
                ? "Perforación limpia para pequeñas reparaciones del hogar, accesorios, soportes, estantes ligeros y pequeñas instalaciones visibles."
                : "Clean drilling for simple home fixes, accessories, brackets, light shelves and minor visible installs."}
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
                href={`/${locale}/services/repairs`}
                className="inline-flex items-center justify-center rounded-xl border border-neutral-300 bg-white px-6 py-4 font-black text-neutral-950 shadow-sm transition hover:scale-105 hover:border-yellow-400"
              >
                {isEs ? "Ver reparaciones" : "View repairs"}
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
              <Drill className="mb-6 h-12 w-12 text-black" />
              <p className="text-sm font-black uppercase tracking-widest">
                {isEs ? "Desde 25€" : "From €25"}
              </p>
              <h2 className="mt-3 text-3xl font-black">
                {isEs
                  ? "Taladro limpio. Fijación correcta. Mejor acabado."
                  : "Clean drilling. Correct fixing. Better finish."}
              </h2>
              <p className="mt-4 font-medium leading-7 text-neutral-900">
                {isEs
                  ? "Revisamos la zona, superficie y objeto para hacer pequeños puntos de fijación de forma ordenada y práctica."
                  : "We check the area, surface and item to create small fixing points in a clean and practical way."}
              </p>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: isEs ? "Taladro" : "Drilling",
                  text: isEs ? "Puntos limpios" : "Clean points",
                  icon: Drill,
                },
                {
                  title: isEs ? "Fijaciones" : "Fixings",
                  text: isEs ? "Tacos y tornillos" : "Plugs and screws",
                  icon: Hammer,
                },
                {
                  title: isEs ? "Superficie" : "Surface",
                  text: isEs ? "Revisión básica" : "Basic check",
                  icon: ShieldCheck,
                },
                {
                  title: isEs ? "Instalación" : "Install",
                  text: isEs ? "Accesorios simples" : "Simple accessories",
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
              title: isEs ? "Perforación limpia" : "Clean drilling",
              text: isEs
                ? "Pequeños puntos de taladro para accesorios, soportes y fijaciones visibles."
                : "Small drilling points for accessories, brackets and visible fixings.",
            },
            {
              title: isEs ? "Paredes y superficies" : "Walls and surfaces",
              text: isEs
                ? "Se revisa el tipo de pared para elegir una fijación adecuada al objeto."
                : "The wall type is checked to choose a suitable fixing for the item.",
            },
            {
              title: isEs ? "Presupuesto claro" : "Clear estimate",
              text: isEs
                ? "Envía fotos, medidas y número de puntos para valorar material y tiempo."
                : "Send photos, measurements and number of points to estimate material and time.",
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
            ? "Taladro limpio para pequeños accesorios, soportes y reparaciones del hogar"
            : "Clean drilling for small accessories, brackets and home fixes"}
        </h2>

        <div className="mt-6 space-y-5 text-lg leading-8 text-neutral-700">
          <p>
            {isEs
              ? "Muchos pequeños trabajos del hogar necesitan una perforación limpia y una fijación correcta: accesorios de baño, pequeños soportes, estantes ligeros, colgadores, placas, guías o detalles visibles."
              : "Many small home jobs need clean drilling and correct fixing: bathroom accessories, small brackets, light shelves, hooks, plates, rails or visible details."}
          </p>

          <p>
            {isEs
              ? "THEVULGO realiza pequeños trabajos de taladro en Valencia para pisos, casas, apartamentos de alquiler, oficinas, mudanzas y pequeñas mejoras visibles del hogar."
              : "THEVULGO provides small drilling jobs in Valencia for apartments, homes, rental properties, offices, move-ins and small visible home improvements."}
          </p>

          <p>
            {isEs
              ? "Antes de confirmar, puedes enviar fotos de la zona y del objeto que quieres fijar. Así se puede valorar la superficie, el número de puntos, el acceso y el material necesario."
              : "Before confirming, you can send photos of the area and the item you want fixed. This helps review the surface, number of points, access and required material."}
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
            {isEs ? "Desde 25€" : "From €25"}
          </p>
          <h2 className="mt-3 text-4xl font-black">
            {isEs
              ? "Envía fotos para valorar el trabajo"
              : "Send photos to check the job"}
          </h2>
          <p className="mt-6 text-lg font-medium leading-8 text-neutral-900">
            {isEs
              ? "Para calcular el precio, envía una foto general, foto del objeto, medidas aproximadas y cuántos puntos de taladro necesitas."
              : "To estimate the price, send a general photo, photo of the item, approximate measurements and how many drilling points you need."}
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
              ? "¿Necesitas hacer pequeños agujeros limpios?"
              : "Need small clean drilling points?"}
          </h2>
          <p className="mt-5 text-lg font-medium text-neutral-900">
            {isEs
              ? "Envía fotos de la zona y del objeto. Te damos un presupuesto claro antes de empezar."
              : "Send photos of the area and item. Get a clear estimate before the work starts."}
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