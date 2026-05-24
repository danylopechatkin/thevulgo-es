import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  CircleDot,
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
    ? "Parche Localizado de Techo en Valencia | Desde 39€ | THEVULGO"
    : "Ceiling Spot Patching in Valencia | From €39 | THEVULGO";

  const description = isEs
    ? "Parcheado localizado de techo en Valencia desde 39€. Reparación pequeña, relleno y alisado de zonas visibles en techos interiores."
    : "Ceiling spot patching in Valencia from €39. Small localized ceiling patching, filling and smoothing for visible interior ceiling areas.";

  return {
    title,
    description,
    keywords: isEs
      ? [
          "parche techo Valencia",
          "reparación techo Valencia",
          "alisar techo Valencia",
          "reparar marca techo Valencia",
          "parche localizado techo Valencia",
          "reparación pladur techo Valencia",
          "manitas techo Valencia",
        ]
      : [
          "ceiling spot patching Valencia",
          "ceiling patch repair Valencia",
          "small ceiling repair Valencia",
          "ceiling smoothing Valencia",
          "localized ceiling patch Valencia",
          "drywall ceiling repair Valencia",
          "ceiling repair handyman Valencia",
        ],
    alternates: {
      canonical: `${siteUrl}/${locale}/services/drywall/ceiling-spot-patching`,
      languages: {
        es: `${siteUrl}/es/services/drywall/ceiling-spot-patching`,
        en: `${siteUrl}/en/services/drywall/ceiling-spot-patching`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${siteUrl}/${locale}/services/drywall/ceiling-spot-patching`,
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

export default async function CeilingSpotPatchingPage({ params }: PageProps) {
  const { locale } = await params;
  const isEs = locale === "es";

  const pageUrl = `${siteUrl}/${locale}/services/drywall/ceiling-spot-patching`;

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, quiero pedir presupuesto para parcheado localizado de techo en Valencia."
      : "Hi, I would like an estimate for ceiling spot patching in Valencia."
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
          q: "¿Qué incluye el parcheado localizado de techo?",
          a: "Incluye revisión visual de la zona, preparación básica, relleno o parche pequeño, alisado local y mejora visible del acabado. La pintura se valora aparte.",
        },
        {
          q: "¿Cuánto cuesta reparar una zona pequeña del techo en Valencia?",
          a: "El servicio empieza desde 39€. El precio final depende del tamaño, altura, estado del techo, material necesario y acabado esperado.",
        },
        {
          q: "¿Sirve para techos de pladur o yeso?",
          a: "Sí. Se puede trabajar en techos interiores de pladur, yeso o superficies similares, según el daño y acceso.",
        },
        {
          q: "¿Incluye pintura?",
          a: "Normalmente la pintura se valora aparte. Si tienes pintura original, se puede revisar un retoque más discreto.",
        },
        {
          q: "¿Qué fotos tengo que enviar?",
          a: "Envía una foto general del techo, una foto de cerca de la zona dañada y medidas aproximadas del parche.",
        },
      ]
    : [
        {
          q: "What is included in ceiling spot patching?",
          a: "It includes visual review of the area, basic preparation, small filling or patching, local smoothing and visible finish improvement. Painting is reviewed separately.",
        },
        {
          q: "How much does small ceiling repair cost in Valencia?",
          a: "The service starts from €39. Final price depends on size, height, ceiling condition, required material and expected finish.",
        },
        {
          q: "Is this suitable for drywall or plaster ceilings?",
          a: "Yes. Interior drywall, plaster or similar ceiling surfaces can be repaired depending on the damage and access.",
        },
        {
          q: "Is painting included?",
          a: "Painting is usually reviewed separately. If you have original paint, a more discreet touch-up can be discussed.",
        },
        {
          q: "What photos should I send?",
          a: "Send one general photo of the ceiling, one close-up photo of the damaged area and approximate patch measurements.",
        },
      ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: isEs
      ? "Parche localizado de techo en Valencia"
      : "Ceiling spot patching in Valencia",
    description: isEs
      ? "Parcheado localizado, relleno y alisado de pequeñas zonas visibles en techos interiores en Valencia."
      : "Small localized ceiling patching, filling and smoothing for visible interior ceiling areas in Valencia.",
    serviceType: isEs ? "Parcheado localizado de techo" : "Ceiling spot patching",
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
      price: "39",
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
      { "@type": "ListItem", position: 4, name: isEs ? "Parche localizado de techo" : "Ceiling spot patching", item: pageUrl },
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
    ? ["Desde 39€", "Parche localizado", "Techos interiores", "Relleno y alisado"]
    : ["From €39", "Localized patching", "Interior ceilings", "Filling and smoothing"];

  const included = isEs
    ? [
        "Revisión visual de la zona del techo",
        "Preparación básica de la superficie",
        "Relleno o parche localizado",
        "Alisado local para mejorar el acabado",
        "Preparación para pintura cuando aplica",
        "Presupuesto claro según fotos, altura y alcance",
      ]
    : [
        "Visual check of the ceiling area",
        "Basic surface preparation",
        "Localized filling or patching",
        "Local smoothing to improve finish",
        "Preparation for painting where applicable",
        "Clear estimate based on photos, height and scope",
      ];

  const related = isEs
    ? [
        { title: "Reparación media de pared", href: `/${locale}/services/drywall/medium-wall-patching` },
        { title: "Preparación de pared para retoques", href: `/${locale}/services/drywall/wall-touch-up-prep` },
        { title: "Relleno de grietas", href: `/${locale}/services/drywall/crack-filling` },
        { title: "Pladur y paredes", href: `/${locale}/services/drywall` },
      ]
    : [
        { title: "Medium wall patching", href: `/${locale}/services/drywall/medium-wall-patching` },
        { title: "Wall touch-up prep", href: `/${locale}/services/drywall/wall-touch-up-prep` },
        { title: "Crack filling", href: `/${locale}/services/drywall/crack-filling` },
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
              {isEs ? "THEVULGO • Pladur y techos en Valencia" : "THEVULGO • Drywall and ceilings in Valencia"}
            </div>

            <h1 className="text-4xl font-black tracking-tight md:text-6xl">
              {isEs ? "Parche localizado de techo" : "Ceiling spot patching"}{" "}
              <span className="text-yellow-500">{isEs ? "en Valencia" : "in Valencia"}</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-700">
              {isEs
                ? "Parcheado localizado, relleno y alisado de pequeñas zonas visibles en techos interiores para mejorar el acabado antes de pintar o retocar."
                : "Small localized ceiling patching, filling and smoothing for visible interior ceiling areas before painting or touch-up work."}
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
              <CircleDot className="mb-6 h-12 w-12 text-black" />
              <p className="text-sm font-black uppercase tracking-widest">
                {isEs ? "Desde 39€" : "From €39"}
              </p>
              <h2 className="mt-3 text-3xl font-black">
                {isEs ? "Zona reparada. Techo más limpio. Mejor acabado." : "Area repaired. Cleaner ceiling. Better finish."}
              </h2>
              <p className="mt-4 font-medium leading-7 text-neutral-900">
                {isEs
                  ? "Ideal para pequeños parches, marcas, golpes o zonas visibles en techos interiores."
                  : "Ideal for small patches, marks, dents or visible areas on interior ceilings."}
              </p>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                { title: isEs ? "Techo" : "Ceiling", text: isEs ? "Zonas pequeñas" : "Small areas", icon: CircleDot },
                { title: isEs ? "Relleno" : "Filling", text: isEs ? "Corrección local" : "Local correction", icon: Wrench },
                { title: isEs ? "Alisado" : "Smoothing", text: isEs ? "Mejor acabado" : "Better finish", icon: Paintbrush },
                { title: isEs ? "Medidas" : "Size", text: isEs ? "Según alcance" : "Based on scope", icon: Ruler },
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
              title: isEs ? "Parche localizado" : "Localized patch",
              text: isEs
                ? "Para pequeñas zonas dañadas o visibles en techos interiores."
                : "For small damaged or visible areas on interior ceilings.",
            },
            {
              title: isEs ? "Relleno y alisado" : "Filling and smoothing",
              text: isEs
                ? "Corrección local para mejorar la superficie antes de pintar o retocar."
                : "Local correction to improve the surface before painting or touch-up.",
            },
            {
              title: isEs ? "Presupuesto claro" : "Clear estimate",
              text: isEs
                ? "Envía fotos para valorar tamaño, altura, acceso y acabado esperado."
                : "Send photos to review size, height, access and expected finish.",
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
            ? "Parcheado pequeño y alisado localizado en techos interiores"
            : "Small patching and localized smoothing for interior ceilings"}
        </h2>

        <div className="mt-6 space-y-5 text-lg leading-8 text-neutral-700">
          <p>
            {isEs
              ? "Las marcas o daños pequeños en el techo se notan mucho por la luz y la posición de la superficie. Un parche localizado ayuda a mejorar el acabado visible sin convertirlo en una reparación grande."
              : "Small marks or damage on ceilings can stand out because of light and surface position. Localized patching helps improve the visible finish without turning it into a large repair."}
          </p>

          <p>
            {isEs
              ? "THEVULGO realiza parcheado localizado de techo en Valencia para pisos, casas, alquileres, habitaciones, pasillos y zonas interiores que necesitan una mejora antes de pintar o entregar."
              : "THEVULGO provides ceiling spot patching in Valencia for apartments, homes, rentals, rooms, hallways and interior areas that need improvement before painting or handover."}
          </p>

          <p>
            {isEs
              ? "Este servicio está pensado para zonas pequeñas y localizadas. Si el daño es grande, hay humedad activa o una grieta importante, primero hay que revisar la causa."
              : "This service is designed for small localized areas. If the damage is large, there is active moisture or a major crack, the cause should be checked first."}
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
            {isEs ? "Desde 39€" : "From €39"}
          </p>
          <h2 className="mt-3 text-4xl font-black">
            {isEs ? "Envía fotos de la zona del techo" : "Send photos of the ceiling area"}
          </h2>
          <p className="mt-6 text-lg font-medium leading-8 text-neutral-900">
            {isEs
              ? "Para calcular el precio, envía una foto general, una foto de cerca y medidas aproximadas del daño."
              : "To estimate the price, send a general photo, close-up photo and approximate damage measurements."}
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
            {isEs ? "¿Necesitas reparar una zona pequeña del techo?" : "Need a small ceiling area repaired?"}
          </h2>
          <p className="mt-5 text-lg font-medium text-neutral-900">
            {isEs
              ? "Envía fotos del techo. Te damos un presupuesto claro antes de empezar."
              : "Send photos of the ceiling. Get a clear estimate before the work starts."}
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