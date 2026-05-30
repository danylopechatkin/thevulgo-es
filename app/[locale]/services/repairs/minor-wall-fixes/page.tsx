import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Hammer,
  Home,
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
    ? "Pequeños Arreglos de Pared en Valencia | Desde 29€ | THEVULGO"
    : "Minor Wall Fixes in Valencia | From €29 | THEVULGO";

  const description = isEs
    ? "Pequeños arreglos de pared en Valencia desde 29€: marcas de tornillos, agujeros pequeños, retoques locales, roces y correcciones visibles."
    : "Minor wall fixes in Valencia from €29: screw marks, small holes, local touch-ups, scuffs and visible wall corrections.";

  return {
    title,
    description,
    keywords: isEs
      ? [
          "pequeños arreglos pared Valencia",
          "reparar marcas tornillos Valencia",
          "retoques pared Valencia",
          "arreglos pared manitas Valencia",
          "correcciones pared Valencia",
          "reparaciones pequeñas pared Valencia",
          "manitas pared Valencia",
          "arreglar agujeros pequeños pared Valencia",
          "reparar roces pared Valencia",
        ]
      : [
          "minor wall fixes Valencia",
          "screw marks repair Valencia",
          "wall touch ups Valencia",
          "small wall repairs Valencia",
          "handyman wall repair Valencia",
          "visible wall corrections Valencia",
          "small wall hole repair Valencia",
          "wall scuff repair Valencia",
        ],
    alternates: {
      canonical: `${siteUrl}/${locale}/services/repairs/minor-wall-fixes`,
      languages: {
        es: `${siteUrl}/es/services/repairs/minor-wall-fixes`,
        en: `${siteUrl}/en/services/repairs/minor-wall-fixes`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${siteUrl}/${locale}/services/repairs/minor-wall-fixes`,
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

export default async function MinorWallFixesPage({ params }: PageProps) {
  const { locale } = await params;
  const isEs = locale === "es";

  const pageUrl = `${siteUrl}/${locale}/services/repairs/minor-wall-fixes`;

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, quiero pedir presupuesto para pequeños arreglos de pared en Valencia."
      : "Hi, I would like an estimate for minor wall fixes in Valencia."
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
          q: "¿Qué incluye un pequeño arreglo de pared?",
          a: "Incluye retoques locales sencillos, marcas de tornillos, pequeñas correcciones visibles, zonas dañadas pequeñas y detalles que afectan al acabado visual de la pared.",
        },
        {
          q: "¿Cuánto cuesta reparar marcas de tornillos en Valencia?",
          a: "El servicio empieza desde 29€. El precio final depende del número de marcas, tamaño, estado de la pared, acabado necesario y si hace falta pintura.",
        },
        {
          q: "¿Podéis arreglar agujeros pequeños de pared?",
          a: "Sí. Se pueden corregir agujeros pequeños, marcas de tacos, marcas de tornillos y pequeños daños visibles cuando el alcance es sencillo.",
        },
        {
          q: "¿Incluye pintura?",
          a: "Depende del caso. Algunos retoques pueden necesitar pintura del mismo color. Si el cliente ya tiene la pintura original, normalmente es más fácil conseguir un acabado más discreto.",
        },
        {
          q: "¿Qué fotos tengo que enviar?",
          a: "Lo ideal es enviar una foto de cerca, una foto general de la pared y explicar cuántas marcas o zonas quieres corregir.",
        },
        {
          q: "¿Sirve antes de entregar un piso de alquiler?",
          a: "Sí. Es útil antes de entregar llaves, preparar fotos, recibir visitas o mejorar el aspecto general de una habitación.",
        },
      ]
    : [
        {
          q: "What is included in a minor wall fix?",
          a: "It includes simple local touch-ups, screw marks, small visible corrections, small damaged areas and details that affect the visible wall finish.",
        },
        {
          q: "How much does screw mark repair cost in Valencia?",
          a: "The service starts from €29. Final price depends on the number of marks, size, wall condition, required finish and whether paint is needed.",
        },
        {
          q: "Can you fix small wall holes?",
          a: "Yes. Small holes, plug marks, screw marks and minor visible wall damage can be corrected when the scope is simple.",
        },
        {
          q: "Is painting included?",
          a: "It depends on the case. Some touch-ups may require matching paint. If the client already has the original paint, it is usually easier to get a more discreet finish.",
        },
        {
          q: "What photos should I send?",
          a: "Ideally, send a close-up photo, one general photo of the wall and explain how many marks or areas need correction.",
        },
        {
          q: "Is this useful before handing over a rental apartment?",
          a: "Yes. It is useful before returning keys, preparing photos, receiving viewings or improving the overall look of a room.",
        },
      ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: isEs
      ? "Pequeños arreglos de pared en Valencia"
      : "Minor wall fixes in Valencia",
    description: isEs
      ? "Retoques locales de pared, reparación de marcas de tornillos, pequeños agujeros, roces y correcciones visibles en Valencia."
      : "Local wall touch-ups, screw mark repair, small hole fixes, scuffs and visible wall corrections in Valencia.",
    serviceType: isEs ? "Pequeños arreglos de pared" : "Minor wall fixes",
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
    areaServed: areas.map((area) => ({
      "@type": "Place",
      name: area,
    })),
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
        name: isEs ? "Reparaciones" : "Repairs",
        item: `${siteUrl}/${locale}/services/repairs`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: isEs ? "Pequeños arreglos de pared" : "Minor wall fixes",
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
        "Marcas de tornillos",
        "Retoques locales simples",
        "Pequeñas correcciones visibles",
      ]
    : [
        "From €29",
        "Screw marks",
        "Simple local touch-ups",
        "Small visible corrections",
      ];

  const included = isEs
    ? [
        "Revisión de marcas, agujeros pequeños o zonas visibles",
        "Corrección de marcas de tornillos y tacos",
        "Retoques locales simples en pared",
        "Preparación básica de la zona dañada",
        "Acabado más limpio y discreto cuando es posible",
        "Presupuesto claro según fotos y alcance",
      ]
    : [
        "Inspection of marks, small holes or visible areas",
        "Correction of screw and wall plug marks",
        "Simple local wall touch-ups",
        "Basic preparation of the damaged area",
        "Cleaner and more discreet finish where possible",
        "Clear estimate based on photos and scope",
      ];

  const repairSituations = isEs
    ? [
        "Marcas de tornillos después de quitar cuadros o soportes",
        "Pequeños agujeros visibles en paredes",
        "Roces de muebles y uso diario",
        "Paredes antes de entregar un piso",
        "Correcciones antes de fotografías inmobiliarias",
        "Detalles visibles que afectan la apariencia general",
      ]
    : [
        "Screw marks after removing pictures or brackets",
        "Small visible wall holes",
        "Furniture scuffs and daily wear marks",
        "Walls before apartment handover",
        "Corrections before property photos",
        "Visible details affecting overall appearance",
      ];

  const processSteps = isEs
    ? [
        "Envías fotos de la pared",
        "Revisamos el alcance del trabajo",
        "Valoramos materiales y tiempo",
        "Recibes presupuesto claro",
        "Realizamos la corrección acordada",
      ]
    : [
        "You send wall photos",
        "We review the scope of work",
        "We evaluate materials and time",
        "You receive a clear estimate",
        "We perform the agreed correction",
      ];

  const commonProblems = isEs
    ? [
        {
          title: "Marcas de tornillos",
          text: "Corregimos marcas pequeñas después de retirar cuadros, soportes, estantes, ganchos o accesorios.",
        },
        {
          title: "Agujeros pequeños",
          text: "Rellenamos pequeños agujeros de tacos o tornillos cuando el daño es local y sencillo.",
        },
        {
          title: "Roces visibles",
          text: "Mejoramos zonas con roces, golpes ligeros o marcas que afectan al aspecto general de la pared.",
        },
        {
          title: "Entrega de piso",
          text: "Servicio útil antes de devolver llaves, preparar fotos, recibir visitas o revisar una vivienda.",
        },
      ]
    : [
        {
          title: "Screw marks",
          text: "We correct small marks after removing pictures, brackets, shelves, hooks or accessories.",
        },
        {
          title: "Small holes",
          text: "We fill small wall plug or screw holes when the damage is local and simple.",
        },
        {
          title: "Visible scuffs",
          text: "We improve areas with scuffs, light impacts or marks that affect the overall wall appearance.",
        },
        {
          title: "Apartment handover",
          text: "Useful before returning keys, preparing photos, receiving viewings or checking a property.",
        },
      ];

  const notIncluded = isEs
    ? [
        "Reparación estructural de paredes muy dañadas",
        "Pintura completa de habitación",
        "Igualación perfecta de color sin pintura original",
        "Tratamiento de humedad, grietas activas o moho",
      ]
    : [
        "Structural repair of heavily damaged walls",
        "Full room painting",
        "Perfect colour matching without original paint",
        "Treatment of damp, active cracks or mould",
      ];

  const related = isEs
    ? [
        { title: "Reparaciones en Valencia", href: `/${locale}/services/repairs` },
        { title: "Pladur y paredes", href: `/${locale}/services/drywall` },
        { title: "Sellado de huecos", href: `/${locale}/services/repairs/sealing-gap-filling` },
        { title: "Servicios handyman", href: `/${locale}/services` },
      ]
    : [
        { title: "Repairs in Valencia", href: `/${locale}/services/repairs` },
        { title: "Drywall and walls", href: `/${locale}/services/drywall` },
        { title: "Sealing & gap filling", href: `/${locale}/services/repairs/sealing-gap-filling` },
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
              {isEs ? "Pequeños arreglos de pared" : "Minor wall fixes"}{" "}
              <span className="text-yellow-500">
                {isEs ? "en Valencia" : "in Valencia"}
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-700">
              {isEs
                ? "Retoques locales simples para marcas de tornillos, pequeños agujeros y correcciones visibles en paredes. Ideal para mejorar detalles sin una reparación grande."
                : "Simple local wall touch-ups for screw marks, small holes and visible corrections. Ideal for improving details without a large repair."}
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
              <Paintbrush className="mb-6 h-12 w-12 text-black" />
              <p className="text-sm font-black uppercase tracking-widest">
                {isEs ? "Desde 29€" : "From €29"}
              </p>
              <h2 className="mt-3 text-3xl font-black">
                {isEs
                  ? "Menos marcas. Mejor pared. Acabado más limpio."
                  : "Fewer marks. Better wall. Cleaner finish."}
              </h2>
              <p className="mt-4 font-medium leading-7 text-neutral-900">
                {isEs
                  ? "Corregimos pequeñas marcas visibles para que la pared se vea más cuidada antes de entregar, alquilar o vivir mejor el espacio."
                  : "We correct small visible marks so the wall looks cleaner before moving, renting or improving the space."}
              </p>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: isEs ? "Tornillos" : "Screws",
                  text: isEs ? "Marcas y agujeros pequeños" : "Marks and small holes",
                  icon: Hammer,
                },
                {
                  title: isEs ? "Retoques" : "Touch-ups",
                  text: isEs ? "Correcciones locales" : "Local corrections",
                  icon: Paintbrush,
                },
                {
                  title: isEs ? "Paredes" : "Walls",
                  text: isEs ? "Detalles visibles" : "Visible details",
                  icon: Home,
                },
                {
                  title: isEs ? "Acabado" : "Finish",
                  text: isEs ? "Más limpio y discreto" : "Cleaner and discreet",
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
              title: isEs ? "Marcas de tornillos" : "Screw marks",
              text: isEs
                ? "Corrección de pequeñas marcas visibles después de retirar soportes, cuadros, estantes o accesorios."
                : "Correction of small visible marks after removing brackets, pictures, shelves or fittings.",
            },
            {
              title: isEs ? "Retoque local" : "Local touch-up",
              text: isEs
                ? "Solución práctica para zonas concretas sin convertirlo en una reparación grande."
                : "A practical solution for specific areas without turning it into a large repair.",
            },
            {
              title: isEs ? "Presupuesto claro" : "Clear estimate",
              text: isEs
                ? "Envía fotos por WhatsApp y recibe precio según cantidad, tamaño y acabado esperado."
                : "Send photos by WhatsApp and get a price based on quantity, size and expected finish.",
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
            ? "Retoques simples para paredes con marcas, agujeros pequeños y detalles visibles"
            : "Simple touch-ups for walls with marks, small holes and visible details"}
        </h2>

        <div className="mt-6 space-y-5 text-lg leading-8 text-neutral-700">
          <p>
            {isEs
              ? "Las marcas de tornillos, tacos, pequeños golpes o zonas visibles pueden hacer que una pared se vea descuidada. Un arreglo local bien hecho ayuda a mejorar el aspecto general del espacio sin necesidad de una reforma completa."
              : "Screw marks, wall plug marks, small impacts or visible areas can make a wall look neglected. A good local fix helps improve the overall look without needing a full renovation."}
          </p>

          <p>
            {isEs
              ? "THEVULGO realiza pequeños arreglos de pared en Valencia para pisos, casas, apartamentos de alquiler, mudanzas, entregas de vivienda y mejoras rápidas antes de fotos, visitas o uso diario."
              : "THEVULGO provides minor wall fixes in Valencia for apartments, homes, rental properties, move-ins, move-outs and quick improvements before photos, viewings or everyday use."}
          </p>

          <p>
            {isEs
              ? "Antes de confirmar, puedes enviar fotos para valorar si se trata de un retoque pequeño, si hace falta material adicional o si conviene hacer una reparación más completa."
              : "Before confirming, you can send photos to check whether it is a small touch-up, whether extra material is needed or whether a more complete repair would be better."}
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <h2 className="text-3xl font-black md:text-4xl">
            {isEs
              ? "Pequeñas reparaciones de pared para viviendas en Valencia"
              : "Small wall repairs for homes in Valencia"}
          </h2>

          <div className="mt-6 space-y-6 text-lg leading-8 text-neutral-700">
            <p>
              {isEs
                ? "Las pequeñas marcas en una pared suelen acumularse con el paso del tiempo. Tornillos retirados, tacos antiguos, pequeños golpes, roces de muebles o zonas deterioradas pueden hacer que una habitación parezca menos cuidada."
                : "Small wall marks tend to accumulate over time. Removed screws, old wall plugs, small impacts, furniture scuffs and worn areas can make a room look less maintained."}
            </p>

            <p>
              {isEs
                ? "THEVULGO realiza pequeños arreglos de pared en Valencia para propietarios, inquilinos, viviendas de alquiler, apartamentos turísticos y personas que quieren mejorar la apariencia general de una estancia sin realizar una reforma completa."
                : "THEVULGO provides minor wall fixes in Valencia for homeowners, tenants, rental properties, tourist apartments and anyone wanting to improve a room without carrying out a full renovation."}
            </p>

            <p>
              {isEs
                ? "Este servicio es especialmente útil antes de mudanzas, devoluciones de vivienda, fotografías inmobiliarias, visitas o simplemente para mejorar el aspecto visual de una pared dañada."
                : "This service is especially useful before moving out, property handovers, real estate photography, viewings or simply improving the appearance of a damaged wall."}
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-yellow-200 bg-white p-7 shadow-md">
            <ShieldCheck className="h-10 w-10 text-yellow-500" />
            <h2 className="mt-4 text-3xl font-black">
              {isEs ? "Situaciones comunes que solucionamos" : "Common wall issues we help with"}
            </h2>

            <div className="mt-6 space-y-4">
              {repairSituations.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-yellow-500" />
                  <p className="font-semibold leading-7 text-neutral-800">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-yellow-200 bg-yellow-50 p-7 shadow-md">
            <Wrench className="h-10 w-10 text-yellow-500" />
            <h2 className="mt-4 text-3xl font-black">
              {isEs ? "Cómo funciona" : "How it works"}
            </h2>

            <div className="mt-6 space-y-4">
              {processSteps.map((step, index) => (
                <div key={step} className="flex items-start gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-yellow-400 font-black text-black">
                    {index + 1}
                  </span>
                  <p className="font-semibold leading-7 text-neutral-800">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <h2 className="text-3xl font-black md:text-4xl">
            {isEs ? "Problemas habituales que revisamos" : "Common problems we check"}
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-4">
            {commonProblems.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-yellow-200 bg-yellow-50 p-6 shadow-sm"
              >
                <h3 className="text-xl font-black">{item.title}</h3>
                <p className="mt-3 leading-7 text-neutral-700">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="rounded-3xl border border-yellow-200 bg-white p-7 shadow-md md:p-10">
          <h2 className="text-3xl font-black md:text-4xl">
            {isEs ? "Qué no incluye este servicio" : "What this service does not include"}
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {notIncluded.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-2xl bg-yellow-50 p-5">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-yellow-500" />
                <p className="font-bold leading-7 text-neutral-800">{item}</p>
              </div>
            ))}
          </div>
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
              ? "Envía fotos y recibe un precio claro"
              : "Send photos and get a clear price"}
          </h2>
          <p className="mt-6 text-lg font-medium leading-8 text-neutral-900">
            {isEs
              ? "Para calcular el precio, envía una foto de cerca, una foto general de la pared y la cantidad aproximada de marcas o zonas."
              : "To estimate the price, send a close-up photo, a general photo of the wall and the approximate number of marks or areas."}
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
              ? "¿Quieres corregir pequeñas marcas de pared?"
              : "Need small wall marks corrected?"}
          </h2>
          <p className="mt-5 text-lg font-medium text-neutral-900">
            {isEs
              ? "Envía fotos de la pared y te damos un presupuesto claro antes de empezar."
              : "Send photos of the wall and get a clear estimate before the work starts."}
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