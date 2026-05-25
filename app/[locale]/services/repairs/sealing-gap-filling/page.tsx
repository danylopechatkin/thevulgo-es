import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Home,
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
    ? "Sellado de Juntas y Huecos en Valencia | Desde 29€ | THEVULGO"
    : "Sealing & Gap Filling in Valencia | From €29 | THEVULGO";

  const description = isEs
    ? "Sellado de pequeños huecos, juntas y separaciones visibles en Valencia desde 29€. Acabado limpio alrededor de superficies, accesorios y detalles del hogar."
    : "Small gap sealing and filling in Valencia from €29. Clean finish around surfaces, fittings and visible home details.";

  return {
    title,
    description,
    keywords: isEs
      ? [
          "sellado de juntas Valencia",
          "relleno de huecos Valencia",
          "sellar huecos casa Valencia",
          "sellado hogar Valencia",
          "sellar juntas baño Valencia",
          "sellar juntas cocina Valencia",
          "manitas Valencia sellado",
          "reparaciones pequeñas Valencia",
        ]
      : [
          "sealing gap filling Valencia",
          "small gap sealing Valencia",
          "home gap filling Valencia",
          "surface sealing Valencia",
          "bathroom gap sealing Valencia",
          "kitchen gap sealing Valencia",
          "handyman sealing Valencia",
          "small repairs Valencia",
        ],
    alternates: {
      canonical: `${siteUrl}/${locale}/services/repairs/sealing-gap-filling`,
      languages: {
        es: `${siteUrl}/es/services/repairs/sealing-gap-filling`,
        en: `${siteUrl}/en/services/repairs/sealing-gap-filling`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${siteUrl}/${locale}/services/repairs/sealing-gap-filling`,
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

export default async function SealingGapFillingPage({ params }: PageProps) {
  const { locale } = await params;
  const isEs = locale === "es";

  const pageUrl = `${siteUrl}/${locale}/services/repairs/sealing-gap-filling`;

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, quiero pedir presupuesto para sellado de juntas y pequeños huecos en Valencia."
      : "Hi, I would like an estimate for sealing and small gap filling in Valencia."
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
          q: "¿Qué tipo de huecos se pueden sellar?",
          a: "Se pueden sellar pequeños huecos visibles alrededor de superficies, accesorios, muebles, rodapiés, encimeras, paredes, zonas de baño, cocina y detalles del hogar.",
        },
        {
          q: "¿Cuánto cuesta el sellado de huecos en Valencia?",
          a: "El servicio empieza desde 29€. El precio final depende del número de zonas, tamaño de los huecos, material necesario, acceso y acabado esperado.",
        },
        {
          q: "¿Este servicio sirve para baños y cocinas?",
          a: "Sí. Es útil para pequeñas separaciones visibles en baños, cocinas, encimeras, fregaderos, lavabos, muebles y zonas donde se necesita un acabado más limpio.",
        },
        {
          q: "¿Es lo mismo que renovar silicona completa?",
          a: "No exactamente. Esta página está enfocada en sellado de pequeños huecos y juntas visibles. Si hay silicona vieja deteriorada, puede ser mejor renovar la silicona completa.",
        },
        {
          q: "¿Qué necesito enviar para presupuesto?",
          a: "Lo ideal es enviar fotos de cerca, foto general de la zona y una breve descripción del problema para valorar el material y el tiempo necesario.",
        },
      ]
    : [
        {
          q: "What kind of gaps can be sealed?",
          a: "Small visible gaps can be sealed around surfaces, fittings, furniture, skirting boards, worktops, walls, bathroom areas, kitchen areas and home details.",
        },
        {
          q: "How much does sealing and gap filling cost in Valencia?",
          a: "The service starts from €29. Final price depends on the number of areas, gap size, required material, access and expected finish.",
        },
        {
          q: "Is this service suitable for bathrooms and kitchens?",
          a: "Yes. It is useful for small visible gaps in bathrooms, kitchens, worktops, sinks, basins, furniture and areas that need a cleaner finish.",
        },
        {
          q: "Is this the same as full silicone renewal?",
          a: "Not exactly. This page is focused on small gap sealing and visible joints. If old silicone is damaged, full silicone renewal may be the better option.",
        },
        {
          q: "What should I send for an estimate?",
          a: "Ideally, send close-up photos, one general photo of the area and a short description of the issue so the material and time can be estimated.",
        },
      ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: isEs
      ? "Sellado de juntas y huecos en Valencia"
      : "Sealing and gap filling in Valencia",
    description: isEs
      ? "Sellado de pequeños huecos, juntas y separaciones visibles alrededor de superficies, accesorios y detalles del hogar en Valencia."
      : "Small gap sealing and filling around surfaces, fittings and visible home details in Valencia.",
    serviceType: isEs ? "Sellado de juntas y huecos" : "Sealing and gap filling",
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
        name: isEs ? "Reparaciones" : "Repairs",
        item: `${siteUrl}/${locale}/services/repairs`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: isEs ? "Sellado de juntas y huecos" : "Sealing & gap filling",
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
        "Huecos pequeños y juntas visibles",
        "Baños, cocinas y detalles del hogar",
        "Acabado más limpio",
      ]
    : [
        "From €29",
        "Small gaps and visible joints",
        "Bathrooms, kitchens and home details",
        "Cleaner visible finish",
      ];

  const included = isEs
    ? [
        "Revisión del hueco o junta visible",
        "Preparación básica de la zona",
        "Aplicación de sellador compatible",
        "Relleno de pequeñas separaciones",
        "Sellado alrededor de accesorios y superficies",
        "Acabado visual más limpio y ordenado",
      ]
    : [
        "Inspection of the visible gap or joint",
        "Basic preparation of the area",
        "Application of compatible sealant",
        "Filling of small visible gaps",
        "Sealing around fittings and surfaces",
        "Cleaner and more organized visible finish",
      ];

  const related = isEs
    ? [
        { title: "Cambio de silicona", href: `/${locale}/services/repairs/silicone-renewal` },
        { title: "Reparaciones en Valencia", href: `/${locale}/services/repairs` },
        { title: "Servicios de baño", href: `/${locale}/services/bathroom` },
        { title: "Instalaciones de cocina", href: `/${locale}/services/kitchen` },
      ]
    : [
        { title: "Silicone renewal", href: `/${locale}/services/repairs/silicone-renewal` },
        { title: "Repairs in Valencia", href: `/${locale}/services/repairs` },
        { title: "Bathroom services", href: `/${locale}/services/bathroom` },
        { title: "Kitchen installations", href: `/${locale}/services/kitchen` },
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
              {isEs ? "Sellado de juntas y huecos" : "Sealing & gap filling"}{" "}
              <span className="text-yellow-500">
                {isEs ? "en Valencia" : "in Valencia"}
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-700">
              {isEs
                ? "Sellado de pequeños huecos, juntas y separaciones visibles alrededor de superficies, accesorios y detalles del hogar. Ideal para mejorar el acabado visual sin una reforma grande."
                : "Small gap sealing around surfaces, fittings and visible home details. Ideal for improving the visible finish without a large renovation."}
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
              <Sparkles className="mb-6 h-12 w-12 text-black" />
              <p className="text-sm font-black uppercase tracking-widest">
                {isEs ? "Desde 29€" : "From €29"}
              </p>
              <h2 className="mt-3 text-3xl font-black">
                {isEs
                  ? "Pequeños huecos. Mejor acabado. Casa más cuidada."
                  : "Small gaps. Better finish. Cleaner home details."}
              </h2>
              <p className="mt-4 font-medium leading-7 text-neutral-900">
                {isEs
                  ? "Sellamos pequeñas separaciones visibles para que las superficies, accesorios y detalles del hogar se vean más terminados."
                  : "We seal small visible gaps so surfaces, fittings and home details look more finished."}
              </p>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: isEs ? "Superficies" : "Surfaces",
                  text: isEs ? "Juntas y bordes visibles" : "Visible joints and edges",
                  icon: Home,
                },
                {
                  title: isEs ? "Accesorios" : "Fittings",
                  text: isEs ? "Alrededor de detalles" : "Around home details",
                  icon: Wrench,
                },
                {
                  title: isEs ? "Sellado" : "Sealing",
                  text: isEs ? "Huecos pequeños" : "Small visible gaps",
                  icon: ShieldCheck,
                },
                {
                  title: isEs ? "Acabado" : "Finish",
                  text: isEs ? "Más limpio y ordenado" : "Cleaner and neater",
                  icon: BadgeCheck,
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
              title: isEs ? "Huecos pequeños" : "Small gaps",
              text: isEs
                ? "Ideal para pequeñas separaciones visibles entre superficies, muebles, accesorios y paredes."
                : "Ideal for small visible separations between surfaces, furniture, fittings and walls.",
            },
            {
              title: isEs ? "Acabado limpio" : "Clean finish",
              text: isEs
                ? "Un detalle pequeño puede hacer que la zona se vea mucho más terminada y cuidada."
                : "A small detail can make the area look much more finished and cared for.",
            },
            {
              title: isEs ? "Presupuesto claro" : "Clear estimate",
              text: isEs
                ? "Envía fotos por WhatsApp y recibe una estimación según zonas, material y dificultad."
                : "Send photos by WhatsApp and get an estimate based on areas, material and difficulty.",
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
            ? "Sellado de pequeños huecos alrededor de superficies y accesorios"
            : "Small gap sealing around surfaces and fittings"}
        </h2>

        <div className="mt-6 space-y-5 text-lg leading-8 text-neutral-700">
          <p>
            {isEs
              ? "Los pequeños huecos entre superficies, muebles, accesorios y paredes pueden hacer que una zona se vea inacabada. El sellado correcto ayuda a mejorar el aspecto visual y dejar un resultado más limpio."
              : "Small gaps between surfaces, furniture, fittings and walls can make an area look unfinished. Proper sealing helps improve the visible finish and creates a cleaner result."}
          </p>

          <p>
            {isEs
              ? "THEVULGO ofrece sellado y relleno de pequeños huecos en Valencia para baños, cocinas, zonas de paso, muebles instalados, accesorios y detalles visibles del hogar."
              : "THEVULGO provides sealing and small gap filling in Valencia for bathrooms, kitchens, passage areas, installed furniture, fittings and visible home details."}
          </p>

          <p>
            {isEs
              ? "Este servicio es perfecto cuando no necesitas una reforma grande, sino cerrar detalles visibles que afectan al acabado general de la vivienda."
              : "This service is perfect when you do not need a large renovation, but want to close visible details that affect the overall home finish."}
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
              ? "Envía fotos y te damos un precio claro"
              : "Send photos and get a clear price"}
          </h2>
          <p className="mt-6 text-lg font-medium leading-8 text-neutral-900">
            {isEs
              ? "Para calcular el precio, envía una foto de cerca, una foto general y explica dónde está el hueco o junta que quieres sellar."
              : "To estimate the price, send a close-up photo, a general photo and explain where the gap or joint needs sealing."}
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
              ? "¿Quieres sellar pequeños huecos en casa?"
              : "Need small gaps sealed at home?"}
          </h2>
          <p className="mt-5 text-lg font-medium text-neutral-900">
            {isEs
              ? "Envía fotos de la zona y te damos un presupuesto claro antes de empezar."
              : "Send photos of the area and get a clear estimate before the work starts."}
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