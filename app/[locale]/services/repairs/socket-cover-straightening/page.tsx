import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  MapPin,
  ShieldCheck,
  Sparkles,
  Square,
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
    ? "Ajuste de Tapas y Embellecedores en Valencia | Desde 25€ | THEVULGO"
    : "Socket / Cover Straightening in Valencia | From €25 | THEVULGO";

  const description = isEs
    ? "Ajuste básico de tapas, placas, embellecedores y accesorios visibles en Valencia desde 25€. Corrección de piezas sueltas, torcidas o mal alineadas."
    : "Basic socket, cover and plate straightening in Valencia from €25. Correction of loose covers, visible plates and small accessory alignment.";

  return {
    title,
    description,
    keywords: isEs
      ? [
          "ajustar tapa enchufe Valencia",
          "tapa enchufe suelta Valencia",
          "placa interruptor torcida Valencia",
          "embellecedor suelto Valencia",
          "ajuste tapas Valencia",
          "manitas enchufes Valencia",
          "alinear placas Valencia",
        ]
      : [
          "socket cover straightening Valencia",
          "loose socket cover Valencia",
          "switch plate alignment Valencia",
          "cover plate adjustment Valencia",
          "visible accessory alignment Valencia",
          "handyman socket cover Valencia",
        ],
    alternates: {
      canonical: `${siteUrl}/${locale}/services/repairs/socket-cover-straightening`,
      languages: {
        es: `${siteUrl}/es/services/repairs/socket-cover-straightening`,
        en: `${siteUrl}/en/services/repairs/socket-cover-straightening`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${siteUrl}/${locale}/services/repairs/socket-cover-straightening`,
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

export default async function SocketCoverStraighteningPage({
  params,
}: PageProps) {
  const { locale } = await params;
  const isEs = locale === "es";

  const pageUrl = `${siteUrl}/${locale}/services/repairs/socket-cover-straightening`;

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, quiero pedir presupuesto para ajustar una tapa, placa o embellecedor suelto en Valencia."
      : "Hi, I would like an estimate for straightening or fixing a loose socket cover, plate or visible accessory in Valencia."
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
          q: "¿Qué incluye este servicio?",
          a: "Incluye ajuste básico de tapas, placas, embellecedores y accesorios visibles que están sueltos, torcidos o mal alineados, siempre que el problema sea exterior y sencillo.",
        },
        {
          q: "¿Cuánto cuesta ajustar una tapa o placa en Valencia?",
          a: "El servicio empieza desde 25€. El precio final depende del tipo de pieza, estado de la pared, número de tapas o placas y si hace falta material adicional.",
        },
        {
          q: "¿Trabajáis con tapas de enchufes e interruptores?",
          a: "Sí, podemos revisar tapas o placas visibles de enchufes e interruptores cuando se trata de un ajuste exterior. Si hay un problema eléctrico interno, se valora aparte.",
        },
        {
          q: "¿Podéis corregir una placa torcida o suelta?",
          a: "Sí. En muchos casos se puede alinear, reapretar o volver a colocar una tapa o placa si la pieza y la base están en buen estado.",
        },
        {
          q: "¿Qué fotos tengo que enviar?",
          a: "Envía una foto general de la zona, una foto de cerca de la tapa o placa y una breve explicación de si está suelta, torcida o separada de la pared.",
        },
      ]
    : [
        {
          q: "What is included in this service?",
          a: "It includes basic adjustment of covers, plates, trims and visible accessories that are loose, crooked or misaligned, when the issue is external and simple.",
        },
        {
          q: "How much does socket or cover straightening cost in Valencia?",
          a: "The service starts from €25. Final price depends on the part type, wall condition, number of covers or plates and whether extra material is needed.",
        },
        {
          q: "Do you work with socket and switch covers?",
          a: "Yes, visible socket and switch covers can be checked when it is an external adjustment. If there is an internal electrical issue, it is reviewed separately.",
        },
        {
          q: "Can you correct a crooked or loose plate?",
          a: "Yes. In many cases a cover or plate can be aligned, tightened or refitted if the part and base are in good condition.",
        },
        {
          q: "What photos should I send?",
          a: "Send one general photo of the area, one close-up photo of the cover or plate and a short explanation of whether it is loose, crooked or separated from the wall.",
        },
      ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: isEs
      ? "Ajuste de tapas y embellecedores en Valencia"
      : "Socket / cover straightening in Valencia",
    description: isEs
      ? "Ajuste básico de tapas, placas, embellecedores y accesorios visibles sueltos, torcidos o mal alineados en Valencia."
      : "Basic correction of loose covers, plates and visible accessory alignment in Valencia.",
    serviceType: isEs
      ? "Ajuste de tapas y placas"
      : "Socket and cover straightening",
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
        name: isEs
          ? "Ajuste de tapas y embellecedores"
          : "Socket / cover straightening",
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
        "Tapas y placas visibles",
        "Ajuste exterior básico",
        "Mejor alineación y acabado",
      ]
    : [
        "From €25",
        "Visible covers and plates",
        "Basic external adjustment",
        "Better alignment and finish",
      ];

  const included = isEs
    ? [
        "Revisión de la tapa, placa o embellecedor",
        "Comprobación básica de alineación visible",
        "Reapriete o recolocación simple cuando es posible",
        "Corrección de piezas sueltas o torcidas",
        "Mejora visual del acabado alrededor del accesorio",
        "Presupuesto claro según fotos y alcance",
      ]
    : [
        "Check of the cover, plate or trim",
        "Basic visible alignment inspection",
        "Simple tightening or refitting where possible",
        "Correction of loose or crooked parts",
        "Cleaner visible finish around the accessory",
        "Clear estimate based on photos and scope",
      ];

  const related = isEs
    ? [
        {
          title: "Reparaciones en Valencia",
          href: `/${locale}/services/repairs`,
        },
        {
          title: "Electricidad básica",
          href: `/${locale}/services/electrical`,
        },
        {
          title: "Instalación de tacos y anclajes",
          href: `/${locale}/services/repairs/wall-anchor-installation`,
        },
        {
          title: "Sellado de juntas y huecos",
          href: `/${locale}/services/repairs/sealing-gap-filling`,
        },
      ]
    : [
        {
          title: "Repairs in Valencia",
          href: `/${locale}/services/repairs`,
        },
        {
          title: "Basic electrical",
          href: `/${locale}/services/electrical`,
        },
        {
          title: "Wall anchor installation",
          href: `/${locale}/services/repairs/wall-anchor-installation`,
        },
        {
          title: "Sealing & gap filling",
          href: `/${locale}/services/repairs/sealing-gap-filling`,
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
              {isEs
                ? "Ajuste de tapas y embellecedores"
                : "Socket / cover straightening"}{" "}
              <span className="text-yellow-500">
                {isEs ? "en Valencia" : "in Valencia"}
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-700">
              {isEs
                ? "Corrección básica de tapas, placas y accesorios visibles sueltos, torcidos o mal alineados. Ideal para mejorar el acabado visual de enchufes, interruptores y pequeños detalles."
                : "Basic correction of loose covers, plates and visible accessory alignment. Ideal for improving the visible finish of sockets, switches and small details."}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappUrl}
                className="inline-flex items-center justify-center rounded-xl bg-yellow-400 px-6 py-4 font-black text-black shadow-md transition hover:scale-105 hover:bg-yellow-300"
              >
                {isEs
                  ? "Pedir presupuesto por WhatsApp"
                  : "Get estimate by WhatsApp"}
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
              <Square className="mb-6 h-12 w-12 text-black" />
              <p className="text-sm font-black uppercase tracking-widest">
                {isEs ? "Desde 25€" : "From €25"}
              </p>
              <h2 className="mt-3 text-3xl font-black">
                {isEs
                  ? "Placas más rectas. Tapas más firmes. Mejor acabado."
                  : "Straighter plates. Firmer covers. Cleaner finish."}
              </h2>
              <p className="mt-4 font-medium leading-7 text-neutral-900">
                {isEs
                  ? "Revisamos la pieza visible, la base y el ajuste exterior para mejorar la alineación cuando el caso es sencillo."
                  : "We check the visible part, base and external fit to improve alignment when the issue is straightforward."}
              </p>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: isEs ? "Tapas" : "Covers",
                  text: isEs ? "Piezas visibles" : "Visible parts",
                  icon: Square,
                },
                {
                  title: isEs ? "Placas" : "Plates",
                  text: isEs ? "Alineación básica" : "Basic alignment",
                  icon: ShieldCheck,
                },
                {
                  title: isEs ? "Accesorios" : "Accessories",
                  text: isEs ? "Detalles pequeños" : "Small details",
                  icon: Wrench,
                },
                {
                  title: isEs ? "Acabado" : "Finish",
                  text: isEs ? "Más limpio y recto" : "Cleaner and straighter",
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
              title: isEs ? "Tapa suelta" : "Loose cover",
              text: isEs
                ? "Revisión de tapas, placas o embellecedores que se mueven, quedan separados o no están rectos."
                : "Checking covers, plates or trims that move, sit away from the wall or are not straight.",
            },
            {
              title: isEs ? "Ajuste exterior" : "External adjustment",
              text: isEs
                ? "Corrección básica de piezas visibles sin entrar en reparaciones eléctricas internas."
                : "Basic correction of visible parts without internal electrical repair work.",
            },
            {
              title: isEs ? "Presupuesto claro" : "Clear estimate",
              text: isEs
                ? "Envía fotos para valorar número de piezas, tipo de tapa y estado de la pared."
                : "Send photos to review the number of parts, cover type and wall condition.",
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
            ? "Corrección básica de tapas, placas y accesorios visibles"
            : "Basic correction of covers, plates and visible accessories"}
        </h2>

        <div className="mt-6 space-y-5 text-lg leading-8 text-neutral-700">
          <p>
            {isEs
              ? "Una tapa de enchufe, placa de interruptor o embellecedor torcido puede hacer que una pared se vea descuidada. Muchas veces el problema es una pieza suelta, mal asentada o desalineada que se puede corregir con un ajuste simple."
              : "A crooked socket cover, switch plate or trim can make a wall look unfinished. Often the issue is a loose, poorly seated or misaligned visible part that can be corrected with a simple adjustment."}
          </p>

          <p>
            {isEs
              ? "THEVULGO realiza ajustes básicos de tapas y placas en Valencia para viviendas, pisos de alquiler, oficinas, reformas ligeras y pequeños detalles visibles del hogar."
              : "THEVULGO provides basic cover and plate straightening in Valencia for homes, rental apartments, offices, light refreshes and small visible home details."}
          </p>

          <p>
            {isEs
              ? "Este servicio está enfocado en la parte visible y exterior. Si hay chispas, olor a quemado, cables sueltos o un fallo eléctrico, eso se trata como una revisión eléctrica aparte."
              : "This service focuses on the visible external part. If there are sparks, burning smell, loose wires or an electrical fault, that is treated as a separate electrical check."}
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
              ? "Envía fotos para valorar el ajuste"
              : "Send photos to check the adjustment"}
          </h2>
          <p className="mt-6 text-lg font-medium leading-8 text-neutral-900">
            {isEs
              ? "Para calcular el precio, envía una foto general de la zona y una foto de cerca de la tapa, placa o accesorio visible."
              : "To estimate the price, send a general photo of the area and a close-up photo of the cover, plate or visible accessory."}
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
              ? "¿Tienes una tapa o placa suelta?"
              : "Do you have a loose cover or plate?"}
          </h2>
          <p className="mt-5 text-lg font-medium text-neutral-900">
            {isEs
              ? "Envía fotos de la pieza y la pared. Te damos un presupuesto claro antes de empezar."
              : "Send photos of the part and wall. Get a clear estimate before the work starts."}
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