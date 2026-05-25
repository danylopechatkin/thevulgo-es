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
    ? "Instalación de Tacos y Anclajes en Valencia | Desde 25€ | THEVULGO"
    : "Wall Anchor Installation in Valencia | From €25 | THEVULGO";

  const description = isEs
    ? "Instalación de tacos y anclajes de pared en Valencia desde 25€ para montar estantes, espejos, accesorios y fijaciones de forma segura."
    : "Wall anchor and plug installation in Valencia from €25 for safe mounting of shelves, mirrors, fixtures and small wall fittings.";

  return {
    title,
    description,
    keywords: isEs
      ? [
          "instalación tacos pared Valencia",
          "anclajes pared Valencia",
          "poner tacos pared Valencia",
          "tacos para estantes Valencia",
          "anclajes espejo Valencia",
          "fijaciones pared Valencia",
          "manitas anclajes Valencia",
        ]
      : [
          "wall anchor installation Valencia",
          "wall plugs Valencia",
          "install wall anchors Valencia",
          "shelf anchors Valencia",
          "mirror wall anchors Valencia",
          "wall fixing handyman Valencia",
          "safe mounting Valencia",
        ],
    alternates: {
      canonical: `${siteUrl}/${locale}/services/repairs/wall-anchor-installation`,
      languages: {
        es: `${siteUrl}/es/services/repairs/wall-anchor-installation`,
        en: `${siteUrl}/en/services/repairs/wall-anchor-installation`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${siteUrl}/${locale}/services/repairs/wall-anchor-installation`,
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

export default async function WallAnchorInstallationPage({ params }: PageProps) {
  const { locale } = await params;
  const isEs = locale === "es";

  const pageUrl = `${siteUrl}/${locale}/services/repairs/wall-anchor-installation`;

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, quiero pedir presupuesto para instalación de tacos o anclajes de pared en Valencia."
      : "Hi, I would like an estimate for wall anchor or plug installation in Valencia."
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
          q: "¿Qué incluye la instalación de tacos y anclajes?",
          a: "Incluye revisión básica de la pared, selección de fijación adecuada cuando es posible, perforación, colocación de tacos o anclajes y preparación para montar estantes, espejos o accesorios.",
        },
        {
          q: "¿Cuánto cuesta instalar anclajes de pared en Valencia?",
          a: "El servicio empieza desde 25€. El precio final depende del número de puntos, tipo de pared, peso del objeto, acceso y material necesario.",
        },
        {
          q: "¿Sirve para montar estantes y espejos?",
          a: "Sí. Este servicio es ideal para preparar fijaciones seguras para estantes, espejos, pequeños accesorios, soportes y detalles de pared.",
        },
        {
          q: "¿Trabajáis con pladur, ladrillo y hormigón?",
          a: "Sí, pero el tipo de taco o anclaje depende de la pared y del peso. En pladur puede hacer falta una fijación específica.",
        },
        {
          q: "¿Qué fotos tengo que enviar?",
          a: "Envía fotos de la pared, del objeto que quieres montar, medidas aproximadas y una foto de la zona donde quieres colocar los anclajes.",
        },
      ]
    : [
        {
          q: "What is included in wall anchor installation?",
          a: "It includes a basic wall check, suitable fixing selection where possible, drilling, plug or anchor installation and preparation for mounting shelves, mirrors or fittings.",
        },
        {
          q: "How much does wall anchor installation cost in Valencia?",
          a: "The service starts from €25. Final price depends on the number of fixing points, wall type, item weight, access and required material.",
        },
        {
          q: "Is this suitable for shelves and mirrors?",
          a: "Yes. This service is ideal for preparing secure fixings for shelves, mirrors, small accessories, brackets and wall details.",
        },
        {
          q: "Do you work with drywall, brick and concrete walls?",
          a: "Yes, but the plug or anchor type depends on the wall and item weight. Drywall may require a specific fixing.",
        },
        {
          q: "What photos should I send?",
          a: "Send photos of the wall, the item you want to mount, approximate measurements and one photo of the area where the anchors should be installed.",
        },
      ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: isEs
      ? "Instalación de tacos y anclajes en Valencia"
      : "Wall anchor installation in Valencia",
    description: isEs
      ? "Instalación de tacos, anclajes y fijaciones de pared para montar estantes, espejos, accesorios y pequeños elementos de forma segura en Valencia."
      : "Installation of wall anchors, plugs and fixings for safe mounting of shelves, mirrors, fixtures and small wall fittings in Valencia.",
    serviceType: isEs ? "Instalación de tacos y anclajes" : "Wall anchor installation",
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
        name: isEs ? "Tacos y anclajes" : "Wall anchor installation",
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
        "Tacos y anclajes",
        "Estantes, espejos y accesorios",
        "Fijación más segura",
      ]
    : [
        "From €25",
        "Wall plugs and anchors",
        "Shelves, mirrors and fixtures",
        "Safer mounting",
      ];

  const included = isEs
    ? [
        "Revisión básica del tipo de pared",
        "Selección de taco o anclaje adecuado cuando es posible",
        "Perforación y colocación de fijaciones",
        "Preparación para montar estantes, espejos o accesorios",
        "Comprobación básica de estabilidad",
        "Presupuesto claro según fotos, peso y alcance",
      ]
    : [
        "Basic check of the wall type",
        "Selection of suitable plug or anchor where possible",
        "Drilling and installation of fixings",
        "Preparation for shelves, mirrors or fittings",
        "Basic stability check",
        "Clear estimate based on photos, weight and scope",
      ];

  const related = isEs
    ? [
        { title: "Instalación de estantes", href: `/${locale}/services/shelf-installation` },
        { title: "Reparaciones en Valencia", href: `/${locale}/services/repairs` },
        { title: "Pladur y paredes", href: `/${locale}/services/drywall` },
        { title: "Servicios handyman", href: `/${locale}/services` },
      ]
    : [
        { title: "Shelf installation", href: `/${locale}/services/shelf-installation` },
        { title: "Repairs in Valencia", href: `/${locale}/services/repairs` },
        { title: "Drywall and walls", href: `/${locale}/services/drywall` },
        { title: "Handyman services", href: `/${locale}/services` },
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
                ? "THEVULGO • Reparaciones en Valencia"
                : "THEVULGO • Repairs in Valencia"}
            </div>

            <h1 className="text-4xl font-black tracking-tight md:text-6xl">
              {isEs ? "Instalación de tacos y anclajes" : "Wall anchor installation"}{" "}
              <span className="text-yellow-500">
                {isEs ? "en Valencia" : "in Valencia"}
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-700">
              {isEs
                ? "Instalación de tacos, anclajes y fijaciones de pared para montar estantes, espejos, accesorios y pequeños elementos con más seguridad."
                : "Installation of wall anchors and plugs for safer mounting of shelves, mirrors, fixtures and small wall fittings."}
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
                  ? "Anclajes correctos. Montaje más seguro. Mejor resultado."
                  : "Correct anchors. Safer mounting. Better result."}
              </h2>
              <p className="mt-4 font-medium leading-7 text-neutral-900">
                {isEs
                  ? "Revisamos pared, peso y punto de fijación para usar una solución adecuada según el objeto y la superficie."
                  : "We check the wall, weight and fixing point to use a suitable solution for the item and surface."}
              </p>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: isEs ? "Tacos" : "Wall plugs",
                  text: isEs ? "Para fijaciones simples" : "For simple fixings",
                  icon: Hammer,
                },
                {
                  title: isEs ? "Anclajes" : "Anchors",
                  text: isEs ? "Según pared y peso" : "Based on wall and weight",
                  icon: ShieldCheck,
                },
                {
                  title: isEs ? "Perforación" : "Drilling",
                  text: isEs ? "Puntos marcados" : "Marked points",
                  icon: Drill,
                },
                {
                  title: isEs ? "Montaje" : "Mounting",
                  text: isEs ? "Más firme y limpio" : "Firmer and cleaner",
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
              title: isEs ? "Fijación adecuada" : "Suitable fixing",
              text: isEs
                ? "El tipo de taco o anclaje depende de la pared, el peso y el uso del objeto."
                : "The plug or anchor type depends on the wall, item weight and intended use.",
            },
            {
              title: isEs ? "Estantes y espejos" : "Shelves and mirrors",
              text: isEs
                ? "Ideal para preparar puntos de montaje para estantes, espejos y accesorios."
                : "Ideal for preparing mounting points for shelves, mirrors and fixtures.",
            },
            {
              title: isEs ? "Presupuesto claro" : "Clear estimate",
              text: isEs
                ? "Envía fotos, medidas y peso aproximado para valorar material y tiempo."
                : "Send photos, measurements and approximate weight to estimate material and time.",
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
            ? "Instalación de tacos y anclajes para estantes, espejos y accesorios"
            : "Wall anchors and plugs for shelves, mirrors and fixtures"}
        </h2>

        <div className="mt-6 space-y-5 text-lg leading-8 text-neutral-700">
          <p>
            {isEs
              ? "Una fijación correcta es clave para que un estante, espejo o accesorio quede más seguro. No todos los tacos sirven para todas las paredes, y elegir mal la fijación puede hacer que el objeto quede flojo o dañe la superficie."
              : "Correct fixing is important for a shelf, mirror or fixture to stay safer. Not every plug works for every wall, and choosing the wrong fixing can make the item loose or damage the surface."}
          </p>

          <p>
            {isEs
              ? "THEVULGO instala tacos y anclajes de pared en Valencia para pequeños montajes, reparaciones, mejoras del hogar, pisos de alquiler y accesorios visibles."
              : "THEVULGO installs wall anchors and plugs in Valencia for small mounting jobs, repairs, home improvements, rental apartments and visible fixtures."}
          </p>

          <p>
            {isEs
              ? "Antes de confirmar, puedes enviar fotos de la pared y del objeto que quieres montar. Así se puede valorar el tipo de pared, peso aproximado y número de puntos de fijación."
              : "Before confirming, you can send photos of the wall and the item you want to mount. This helps review the wall type, approximate weight and number of fixing points."}
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
              ? "Envía fotos para elegir la fijación correcta"
              : "Send photos to choose the right fixing"}
          </h2>
          <p className="mt-6 text-lg font-medium leading-8 text-neutral-900">
            {isEs
              ? "Para calcular el precio, envía fotos de la pared, del objeto, medidas aproximadas y peso estimado."
              : "To estimate the price, send photos of the wall, the item, approximate measurements and estimated weight."}
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
              ? "¿Necesitas tacos o anclajes para montar algo?"
              : "Need wall anchors or plugs for mounting?"}
          </h2>
          <p className="mt-5 text-lg font-medium text-neutral-900">
            {isEs
              ? "Envía fotos del objeto y de la pared. Te damos un presupuesto claro antes de empezar."
              : "Send photos of the item and wall. Get a clear estimate before the work starts."}
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