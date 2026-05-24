import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Drill,
  Hammer,
  Layers3,
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
    ? "Varias Reparaciones de Pared en Valencia | Presupuesto Combinado | THEVULGO"
    : "Multiple Wall Repairs in Valencia | Combined Estimate | THEVULGO";

  const description = isEs
    ? "Presupuesto combinado para varias reparaciones de pared, pladur, parches, lijado o taladro en Valencia. Ideal para agrupar varios trabajos en una visita."
    : "Combined estimate for several drywall, patching or drilling tasks in Valencia. Ideal for grouping multiple wall repair jobs in one visit.";

  return {
    title,
    description,
    keywords: isEs
      ? [
          "varias reparaciones pared Valencia",
          "reparaciones pladur Valencia",
          "arreglos pared Valencia",
          "parches pared Valencia",
          "taladro pared Valencia",
          "reparación drywall Valencia",
          "manitas pared Valencia",
        ]
      : [
          "multiple wall repairs Valencia",
          "drywall repairs Valencia",
          "wall patching Valencia",
          "wall drilling Valencia",
          "combined wall repair estimate Valencia",
          "drywall patching Valencia",
          "handyman wall repair Valencia",
        ],
    alternates: {
      canonical: `${siteUrl}/${locale}/services/drywall/multiple-wall-repairs`,
      languages: {
        es: `${siteUrl}/es/services/drywall/multiple-wall-repairs`,
        en: `${siteUrl}/en/services/drywall/multiple-wall-repairs`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${siteUrl}/${locale}/services/drywall/multiple-wall-repairs`,
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

export default async function MultipleWallRepairsPage({ params }: PageProps) {
  const { locale } = await params;
  const isEs = locale === "es";

  const pageUrl = `${siteUrl}/${locale}/services/drywall/multiple-wall-repairs`;

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, quiero pedir presupuesto combinado para varias reparaciones de pared, pladur o taladro en Valencia."
      : "Hi, I would like a combined estimate for several wall, drywall or drilling tasks in Valencia."
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
          q: "¿Qué incluye una visita para varias reparaciones de pared?",
          a: "Puede incluir varios trabajos pequeños o medianos como agujeros, parches, grietas, lijado, preparación de pared, cierre de huecos de cables, reparación tras soportes o trabajos de taladro.",
        },
        {
          q: "¿Cómo se calcula el presupuesto combinado?",
          a: "Se calcula según la cantidad de tareas, tamaño de cada reparación, tipo de pared, materiales, tiempo necesario, acceso y acabado esperado.",
        },
        {
          q: "¿Es mejor agrupar varios trabajos en una visita?",
          a: "Sí. Normalmente es más práctico agrupar varias reparaciones de pared, pladur o taladro en una misma visita para ahorrar tiempo y organizar mejor el trabajo.",
        },
        {
          q: "¿Incluye pintura?",
          a: "La pintura se valora aparte. El presupuesto combinado puede incluir preparación para pintura, lijado o acabado previo según el caso.",
        },
        {
          q: "¿Qué fotos tengo que enviar?",
          a: "Envía fotos generales y de cerca de cada zona, una lista de tareas, medidas aproximadas y tu ubicación en Valencia o alrededores.",
        },
      ]
    : [
        {
          q: "What is included in a multiple wall repairs visit?",
          a: "It can include several small or medium jobs such as holes, patches, cracks, sanding, wall prep, cable hole closing, repair after brackets or drilling tasks.",
        },
        {
          q: "How is the combined estimate calculated?",
          a: "It is calculated based on number of tasks, size of each repair, wall type, materials, time required, access and expected finish.",
        },
        {
          q: "Is it better to group several jobs in one visit?",
          a: "Yes. It is usually more practical to group several wall, drywall or drilling repairs into one visit to save time and organize the work better.",
        },
        {
          q: "Is painting included?",
          a: "Painting is reviewed separately. The combined estimate can include prep for painting, sanding or pre-finish work depending on the case.",
        },
        {
          q: "What photos should I send?",
          a: "Send general and close-up photos of each area, a task list, approximate measurements and your location in Valencia or nearby areas.",
        },
      ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: isEs ? "Varias reparaciones de pared en Valencia" : "Multiple wall repairs in Valencia",
    description: isEs
      ? "Presupuesto combinado para varias tareas de pared, pladur, parcheado, lijado o taladro en Valencia."
      : "Combined estimate for several drywall, patching, sanding or drilling tasks in Valencia.",
    serviceType: isEs ? "Varias reparaciones de pared" : "Multiple wall repairs",
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
      priceCurrency: "EUR",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "EUR",
        description: isEs ? "Presupuesto personalizado" : "Custom quote",
      },
      availability: "https://schema.org/InStock",
      url: pageUrl,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: isEs ? "Inicio" : "Home", item: `${siteUrl}/${locale}` },
      { "@type": "ListItem", position: 2, name: isEs ? "Servicios" : "Services", item: `${siteUrl}/${locale}/services` },
      { "@type": "ListItem", position: 3, name: isEs ? "Pladur y paredes" : "Drywall and walls", item: `${siteUrl}/${locale}/services/drywall` },
      { "@type": "ListItem", position: 4, name: isEs ? "Varias reparaciones de pared" : "Multiple wall repairs", item: pageUrl },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  const heroPoints = isEs
    ? ["Presupuesto personalizado", "Varias tareas en una visita", "Pladur, parches y taladro", "Mejor organización del trabajo"]
    : ["Custom quote", "Several tasks in one visit", "Drywall, patching and drilling", "Better job organization"];

  const included = isEs
    ? [
        "Revisión de varias zonas de pared",
        "Agrupación de tareas pequeñas o medianas",
        "Parches, agujeros, grietas o preparación",
        "Taladro, anclajes o pequeños trabajos relacionados",
        "Plan de trabajo más organizado en una visita",
        "Presupuesto claro según fotos, lista y alcance",
      ]
    : [
        "Review of several wall areas",
        "Grouping of small or medium tasks",
        "Patches, holes, cracks or preparation",
        "Drilling, anchors or related small jobs",
        "More organized work plan in one visit",
        "Clear estimate based on photos, list and scope",
      ];

  const related = isEs
    ? [
        { title: "Reparación de agujeros pequeños", href: `/${locale}/services/drywall/small-hole-repair` },
        { title: "Reparación media de pared", href: `/${locale}/services/drywall/medium-wall-patching` },
        { title: "Parche y lijado", href: `/${locale}/services/drywall/patch-and-sand-finish` },
        { title: "Servicio de taladro en pared", href: `/${locale}/services/drywall/wall-drilling-service` },
      ]
    : [
        { title: "Small hole repair", href: `/${locale}/services/drywall/small-hole-repair` },
        { title: "Medium wall patching", href: `/${locale}/services/drywall/medium-wall-patching` },
        { title: "Patch and sand finish", href: `/${locale}/services/drywall/patch-and-sand-finish` },
        { title: "Wall drilling service", href: `/${locale}/services/drywall/wall-drilling-service` },
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
              {isEs ? "THEVULGO • Pladur y paredes en Valencia" : "THEVULGO • Drywall and walls in Valencia"}
            </div>

            <h1 className="text-4xl font-black tracking-tight md:text-6xl">
              {isEs ? "Varias reparaciones de pared" : "Multiple wall repairs"}{" "}
              <span className="text-yellow-500">{isEs ? "en Valencia" : "in Valencia"}</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-700">
              {isEs
                ? "Presupuesto combinado para varias tareas de pladur, parches, lijado, taladro o preparación de pared en una visita organizada."
                : "Combined estimate for several drywall, patching, sanding, drilling or wall preparation tasks in one organized visit."}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={whatsappUrl} className="inline-flex items-center justify-center rounded-xl bg-yellow-400 px-6 py-4 font-black text-black shadow-md transition hover:scale-105 hover:bg-yellow-300">
                {isEs ? "Pedir presupuesto combinado" : "Get combined estimate"}
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>

              <Link href={`/${locale}/services/drywall`} className="inline-flex items-center justify-center rounded-xl border border-neutral-300 bg-white px-6 py-4 font-black text-neutral-950 shadow-sm transition hover:scale-105 hover:border-yellow-400">
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
                {isEs ? "Presupuesto personalizado" : "Custom quote"}
              </p>
              <h2 className="mt-3 text-3xl font-black">
                {isEs ? "Varias tareas. Una visita. Presupuesto claro." : "Several tasks. One visit. Clear estimate."}
              </h2>
              <p className="mt-4 font-medium leading-7 text-neutral-900">
                {isEs
                  ? "Ideal si tienes varios agujeros, parches, grietas, soportes retirados o puntos de taladro."
                  : "Ideal if you have several holes, patches, cracks, removed brackets or drilling points."}
              </p>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                { title: isEs ? "Parches" : "Patches", text: isEs ? "Pared y pladur" : "Wall and drywall", icon: Layers3 },
                { title: isEs ? "Taladro" : "Drilling", text: isEs ? "Puntos y fijaciones" : "Points and fixings", icon: Drill },
                { title: isEs ? "Lijado" : "Sanding", text: isEs ? "Mejor acabado" : "Better finish", icon: Paintbrush },
                { title: isEs ? "Reparaciones" : "Repairs", text: isEs ? "Varias zonas" : "Several areas", icon: Wrench },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl border border-yellow-200 bg-yellow-50 p-4 shadow-sm">
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
              title: isEs ? "Varias tareas agrupadas" : "Grouped tasks",
              text: isEs
                ? "Agujeros, grietas, parches, lijado, preparación o pequeños trabajos de taladro."
                : "Holes, cracks, patches, sanding, preparation or small drilling tasks.",
            },
            {
              title: isEs ? "Una visita organizada" : "One organized visit",
              text: isEs
                ? "Más práctico cuando hay varias zonas que necesitan corrección en la misma vivienda."
                : "More practical when several areas need correction in the same property.",
            },
            {
              title: isEs ? "Presupuesto combinado" : "Combined estimate",
              text: isEs
                ? "Envía lista, fotos y medidas para calcular un precio claro por todo el alcance."
                : "Send a list, photos and measurements to calculate a clear price for the full scope.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-yellow-300 bg-white p-7 shadow-md transition hover:-translate-y-1 hover:shadow-xl">
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
            ? "Presupuesto combinado para varias reparaciones de pared y pladur"
            : "Combined estimate for several wall and drywall repairs"}
        </h2>

        <div className="mt-6 space-y-5 text-lg leading-8 text-neutral-700">
          <p>
            {isEs
              ? "Cuando hay varias zonas pequeñas dañadas, normalmente es mejor agrupar el trabajo en una visita. Puede ser una combinación de agujeros, grietas, marcas de soportes, parches, lijado, preparación o puntos de taladro."
              : "When there are several small damaged areas, it is usually better to group the work into one visit. It can be a mix of holes, cracks, bracket marks, patches, sanding, preparation or drilling points."}
          </p>

          <p>
            {isEs
              ? "THEVULGO ofrece presupuestos combinados para reparaciones de pared en Valencia, especialmente para pisos, casas, alquileres, mudanzas, entregas de vivienda y mejoras visibles antes de pintar."
              : "THEVULGO provides combined estimates for wall repairs in Valencia, especially for apartments, homes, rentals, move-outs, property handovers and visible improvements before painting."}
          </p>

          <p>
            {isEs
              ? "Para calcular bien el precio, lo ideal es enviar una lista simple de tareas, fotos generales y de cerca, medidas aproximadas y la ubicación. Así se puede organizar el trabajo por prioridad y alcance."
              : "To calculate the price properly, it is best to send a simple task list, general and close-up photos, approximate measurements and location. This helps organize the work by priority and scope."}
          </p>
        </div>
      </section>

      <section className="bg-yellow-50 py-16">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <h2 className="text-3xl font-black md:text-4xl">
            {isEs ? "Qué puede incluir" : "What it can include"}
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {included.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-2xl border border-yellow-200 bg-white p-5 shadow-sm">
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
            {isEs ? "Presupuesto personalizado" : "Custom quote"}
          </p>
          <h2 className="mt-3 text-4xl font-black">
            {isEs ? "Envía lista de tareas y fotos" : "Send task list and photos"}
          </h2>
          <p className="mt-6 text-lg font-medium leading-8 text-neutral-900">
            {isEs
              ? "Para calcular el precio combinado, envía fotos de cada zona, una lista corta de tareas y medidas aproximadas."
              : "To calculate the combined price, send photos of each area, a short task list and approximate measurements."}
          </p>

          <a href={whatsappUrl} className="mt-8 inline-flex items-center justify-center rounded-xl bg-black px-7 py-4 font-black text-white shadow-md transition hover:scale-105">
            {isEs ? "Pedir presupuesto por WhatsApp" : "Request estimate by WhatsApp"}
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
            <span key={area} className="rounded-full border border-yellow-300 bg-yellow-50 px-4 py-2 font-bold text-neutral-900">
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
              <details key={item.q} className="group rounded-2xl border border-yellow-200 bg-white p-6 shadow-sm">
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
            <Link key={item.title} href={item.href} className="group rounded-2xl border border-yellow-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-yellow-400 hover:shadow-md">
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
            {isEs ? "¿Tienes varias reparaciones de pared?" : "Have several wall repairs?"}
          </h2>
          <p className="mt-5 text-lg font-medium text-neutral-900">
            {isEs
              ? "Envía fotos y lista de tareas. Te damos un presupuesto combinado claro."
              : "Send photos and a task list. Get a clear combined estimate."}
          </p>

          <a href={whatsappUrl} className="mt-8 inline-flex items-center justify-center rounded-xl bg-black px-8 py-4 font-black text-white shadow-xl transition hover:scale-105">
            {isEs ? "Pedir presupuesto ahora" : "Get estimate now"}
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>
    </main>
  );
}