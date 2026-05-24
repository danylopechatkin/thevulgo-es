import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Drill,
  Hammer,
  MapPin,
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
    ? "Servicio de Taladro en Pared en Valencia | Desde 25€ | THEVULGO"
    : "Wall Drilling Service in Valencia | From €25 | THEVULGO";

  const description = isEs
    ? "Servicio de taladro limpio en pared en Valencia desde 25€. Perforación para soportes, brackets, accesorios y pequeñas fijaciones cuando la superficie es adecuada."
    : "Wall drilling service in Valencia from €25. Clean drilling for mounts, brackets or accessories where the wall surface is suitable.";

  return {
    title,
    description,
    keywords: isEs
      ? [
          "servicio taladro pared Valencia",
          "taladrar pared Valencia",
          "hacer agujeros pared Valencia",
          "instalar soporte pared Valencia",
          "taladro para brackets Valencia",
          "fijaciones pared Valencia",
          "manitas taladro Valencia",
        ]
      : [
          "wall drilling service Valencia",
          "drill wall Valencia",
          "clean drilling Valencia",
          "drilling for brackets Valencia",
          "mount drilling Valencia",
          "wall fixing service Valencia",
          "handyman drilling Valencia",
        ],
    alternates: {
      canonical: `${siteUrl}/${locale}/services/drywall/wall-drilling-service`,
      languages: {
        es: `${siteUrl}/es/services/drywall/wall-drilling-service`,
        en: `${siteUrl}/en/services/drywall/wall-drilling-service`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${siteUrl}/${locale}/services/drywall/wall-drilling-service`,
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

export default async function WallDrillingServicePage({ params }: PageProps) {
  const { locale } = await params;
  const isEs = locale === "es";

  const pageUrl = `${siteUrl}/${locale}/services/drywall/wall-drilling-service`;

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, quiero pedir presupuesto para un servicio de taladro en pared en Valencia."
      : "Hi, I would like an estimate for wall drilling service in Valencia."
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
          q: "¿Qué incluye el servicio de taladro en pared?",
          a: "Incluye revisión básica de la zona, marcado cuando aplica, perforación limpia para soportes, brackets, accesorios o pequeñas fijaciones y comprobación visual del resultado.",
        },
        {
          q: "¿Cuánto cuesta taladrar una pared en Valencia?",
          a: "El servicio empieza desde 25€. El precio final depende del número de puntos, tipo de pared, altura, acceso, objeto a fijar y material necesario.",
        },
        {
          q: "¿Podéis taladrar para soportes, brackets o accesorios?",
          a: "Sí. Se puede hacer taladro para soportes pequeños, brackets, accesorios, estantes ligeros, colgadores o fijaciones simples cuando la superficie es adecuada.",
        },
        {
          q: "¿Trabajáis en pladur, ladrillo, azulejo u hormigón?",
          a: "Se revisa cada caso antes de confirmar. El tipo de pared afecta al tipo de fijación, tiempo, herramienta y material necesario.",
        },
        {
          q: "¿Qué fotos tengo que enviar?",
          a: "Envía una foto general de la pared, una foto del objeto que quieres fijar, medidas aproximadas y explica cuántos puntos de taladro necesitas.",
        },
      ]
    : [
        {
          q: "What is included in wall drilling service?",
          a: "It includes a basic check of the area, marking where needed, clean drilling for mounts, brackets, accessories or small fixings and a visual check of the result.",
        },
        {
          q: "How much does wall drilling cost in Valencia?",
          a: "The service starts from €25. Final price depends on number of points, wall type, height, access, item being fixed and required material.",
        },
        {
          q: "Can you drill for mounts, brackets or accessories?",
          a: "Yes. Drilling can be done for small mounts, brackets, accessories, light shelves, hooks or simple fixings where the surface is suitable.",
        },
        {
          q: "Do you work with drywall, brick, tile or concrete?",
          a: "Each case is checked before confirming. Wall type affects fixing type, time, tools and required material.",
        },
        {
          q: "What photos should I send?",
          a: "Send one general photo of the wall, one photo of the item you want fixed, approximate measurements and explain how many drilling points you need.",
        },
      ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: isEs
      ? "Servicio de taladro en pared en Valencia"
      : "Wall drilling service in Valencia",
    description: isEs
      ? "Taladro limpio para soportes, brackets, accesorios y pequeñas fijaciones en paredes interiores de Valencia."
      : "Clean drilling for mounts, brackets, accessories and small fixings on interior walls in Valencia.",
    serviceType: isEs ? "Servicio de taladro en pared" : "Wall drilling service",
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
      { "@type": "ListItem", position: 1, name: isEs ? "Inicio" : "Home", item: `${siteUrl}/${locale}` },
      { "@type": "ListItem", position: 2, name: isEs ? "Servicios" : "Services", item: `${siteUrl}/${locale}/services` },
      { "@type": "ListItem", position: 3, name: isEs ? "Pladur y paredes" : "Drywall and walls", item: `${siteUrl}/${locale}/services/drywall` },
      { "@type": "ListItem", position: 4, name: isEs ? "Servicio de taladro en pared" : "Wall drilling service", item: pageUrl },
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
    ? ["Desde 25€", "Taladro limpio", "Soportes y accesorios", "Según tipo de pared"]
    : ["From €25", "Clean drilling", "Mounts and accessories", "Based on wall type"];

  const included = isEs
    ? [
        "Revisión básica de la zona y superficie",
        "Marcado de puntos cuando aplica",
        "Taladro limpio para fijaciones simples",
        "Trabajo para soportes, brackets o accesorios",
        "Comprobación visual del resultado",
        "Presupuesto claro según fotos, puntos y alcance",
      ]
    : [
        "Basic check of the area and surface",
        "Marking of points where needed",
        "Clean drilling for simple fixings",
        "Work for mounts, brackets or accessories",
        "Visual check of the result",
        "Clear estimate based on photos, points and scope",
      ];

  const related = isEs
    ? [
        { title: "Instalación de tacos y anclajes", href: `/${locale}/services/repairs/wall-anchor-installation` },
        { title: "Pequeños trabajos de taladro", href: `/${locale}/services/repairs/small-drilling-jobs` },
        { title: "Reparación de agujeros de tacos", href: `/${locale}/services/drywall/anchor-hole-repair` },
        { title: "Pladur y paredes", href: `/${locale}/services/drywall` },
      ]
    : [
        { title: "Wall anchor installation", href: `/${locale}/services/repairs/wall-anchor-installation` },
        { title: "Small drilling jobs", href: `/${locale}/services/repairs/small-drilling-jobs` },
        { title: "Anchor hole repair", href: `/${locale}/services/drywall/anchor-hole-repair` },
        { title: "Drywall and walls", href: `/${locale}/services/drywall` },
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
              {isEs ? "THEVULGO • Taladro en Valencia" : "THEVULGO • Drilling in Valencia"}
            </div>

            <h1 className="text-4xl font-black tracking-tight md:text-6xl">
              {isEs ? "Servicio de taladro en pared" : "Wall drilling service"}{" "}
              <span className="text-yellow-500">{isEs ? "en Valencia" : "in Valencia"}</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-700">
              {isEs
                ? "Taladro limpio para soportes, brackets, accesorios y pequeñas fijaciones cuando la superficie es adecuada."
                : "Clean drilling for mounts, brackets or accessories where the wall surface is suitable."}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={whatsappUrl} className="inline-flex items-center justify-center rounded-xl bg-yellow-400 px-6 py-4 font-black text-black shadow-md transition hover:scale-105 hover:bg-yellow-300">
                {isEs ? "Pedir presupuesto por WhatsApp" : "Get estimate by WhatsApp"}
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
              <Drill className="mb-6 h-12 w-12 text-black" />
              <p className="text-sm font-black uppercase tracking-widest">
                {isEs ? "Desde 25€" : "From €25"}
              </p>
              <h2 className="mt-3 text-3xl font-black">
                {isEs ? "Puntos limpios. Fijación preparada. Resultado cuidado." : "Clean points. Fixing prepared. Neat result."}
              </h2>
              <p className="mt-4 font-medium leading-7 text-neutral-900">
                {isEs
                  ? "Ideal para accesorios pequeños, soportes, brackets, colgadores y fijaciones visibles."
                  : "Ideal for small accessories, mounts, brackets, hooks and visible fixings."}
              </p>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                { title: isEs ? "Taladro" : "Drilling", text: isEs ? "Puntos limpios" : "Clean points", icon: Drill },
                { title: isEs ? "Soportes" : "Mounts", text: isEs ? "Brackets y accesorios" : "Brackets and accessories", icon: Hammer },
                { title: isEs ? "Medidas" : "Position", text: isEs ? "Marcado cuando aplica" : "Marking where needed", icon: Ruler },
                { title: isEs ? "Superficie" : "Surface", text: isEs ? "Según pared" : "Based on wall", icon: ShieldCheck },
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
              title: isEs ? "Para soportes y accesorios" : "For mounts and accessories",
              text: isEs
                ? "Taladro para brackets, soportes, colgadores, pequeños accesorios o fijaciones simples."
                : "Drilling for brackets, mounts, hooks, small accessories or simple fixings.",
            },
            {
              title: isEs ? "Según tipo de pared" : "Based on wall type",
              text: isEs
                ? "Se revisa la superficie antes de confirmar el trabajo y el material necesario."
                : "The surface is checked before confirming the job and required material.",
            },
            {
              title: isEs ? "Presupuesto claro" : "Clear estimate",
              text: isEs
                ? "Envía fotos, medidas y número de puntos para valorar el alcance."
                : "Send photos, measurements and number of points to review the scope.",
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
            ? "Servicio de taladro limpio para fijaciones en pared"
            : "Clean wall drilling service for wall fixings"}
        </h2>

        <div className="mt-6 space-y-5 text-lg leading-8 text-neutral-700">
          <p>
            {isEs
              ? "Muchas instalaciones pequeñas necesitan puntos de taladro bien ubicados: soportes, brackets, accesorios, colgadores, pequeñas placas o fijaciones visibles. El objetivo es hacer el trabajo de forma limpia y práctica."
              : "Many small installations need well-positioned drilling points: mounts, brackets, accessories, hooks, small plates or visible fixings. The goal is to complete the work cleanly and practically."}
          </p>

          <p>
            {isEs
              ? "THEVULGO ofrece servicio de taladro en Valencia para pisos, casas, alquileres, oficinas, mudanzas y pequeñas instalaciones donde se necesita fijar algo en pared."
              : "THEVULGO provides wall drilling service in Valencia for apartments, homes, rentals, offices, move-ins and small installations where something needs to be fixed to the wall."}
          </p>

          <p>
            {isEs
              ? "Antes de confirmar, puedes enviar fotos de la pared y del objeto. Así se puede valorar si la superficie es adecuada, cuántos puntos hacen falta y qué material puede ser necesario."
              : "Before confirming, you can send photos of the wall and the item. This helps review whether the surface is suitable, how many points are needed and what material may be required."}
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
            {isEs ? "Desde 25€" : "From €25"}
          </p>
          <h2 className="mt-3 text-4xl font-black">
            {isEs ? "Envía fotos de la pared y del objeto" : "Send photos of the wall and item"}
          </h2>
          <p className="mt-6 text-lg font-medium leading-8 text-neutral-900">
            {isEs
              ? "Para calcular el precio, envía una foto general, foto del objeto, medidas aproximadas y cuántos puntos necesitas."
              : "To estimate the price, send a general photo, photo of the item, approximate measurements and how many points you need."}
          </p>

          <a href={whatsappUrl} className="mt-8 inline-flex items-center justify-center rounded-xl bg-black px-7 py-4 font-black text-white shadow-md transition hover:scale-105">
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
            {isEs ? "¿Necesitas taladrar una pared?" : "Need wall drilling?"}
          </h2>
          <p className="mt-5 text-lg font-medium text-neutral-900">
            {isEs
              ? "Envía fotos de la pared y del objeto. Te damos un presupuesto claro antes de empezar."
              : "Send photos of the wall and item. Get a clear estimate before the work starts."}
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
