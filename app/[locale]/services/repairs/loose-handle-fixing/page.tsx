import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  DoorOpen,
  Grip,
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
    ? "Reparación de Tiradores Sueltos en Valencia | Desde 25€ | THEVULGO"
    : "Loose Handle Fixing in Valencia | From €25 | THEVULGO";

  const description = isEs
    ? "Reparación y ajuste de tiradores sueltos en Valencia desde 25€: pomos, manillas, tiradores de muebles, puertas, cajones y pequeños accesorios."
    : "Loose handle fixing in Valencia from €25: tightening and fixing of handles, knobs, furniture pulls, door handles, drawers and small fittings.";

  return {
    title,
    description,
    keywords: isEs
      ? [
          "tirador suelto Valencia",
          "arreglar tirador Valencia",
          "pomo suelto Valencia",
          "manilla suelta Valencia",
          "ajustar tiradores muebles Valencia",
          "reparar manilla puerta Valencia",
          "manitas tiradores Valencia",
        ]
      : [
          "loose handle fixing Valencia",
          "fix loose handle Valencia",
          "loose knob repair Valencia",
          "door handle repair Valencia",
          "furniture handle fixing Valencia",
          "drawer handle repair Valencia",
          "handyman handle fixing Valencia",
        ],
    alternates: {
      canonical: `${siteUrl}/${locale}/services/repairs/loose-handle-fixing`,
      languages: {
        es: `${siteUrl}/es/services/repairs/loose-handle-fixing`,
        en: `${siteUrl}/en/services/repairs/loose-handle-fixing`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${siteUrl}/${locale}/services/repairs/loose-handle-fixing`,
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

export default async function LooseHandleFixingPage({ params }: PageProps) {
  const { locale } = await params;
  const isEs = locale === "es";

  const pageUrl = `${siteUrl}/${locale}/services/repairs/loose-handle-fixing`;

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, quiero pedir presupuesto para arreglar un tirador, pomo o manilla suelta en Valencia."
      : "Hi, I would like an estimate for fixing a loose handle, knob or small fitting in Valencia."
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
          q: "¿Qué tiradores o manillas se pueden arreglar?",
          a: "Se pueden ajustar tiradores de muebles, pomos, manillas de puertas, tiradores de cajones, puertas de armario y pequeños accesorios sueltos cuando el daño permite una reparación simple.",
        },
        {
          q: "¿Cuánto cuesta arreglar un tirador suelto en Valencia?",
          a: "El servicio empieza desde 25€. El precio final depende del tipo de tirador, estado del tornillo, material, acceso, número de piezas y si hace falta reemplazar algún componente.",
        },
        {
          q: "¿Podéis arreglar una manilla de puerta suelta?",
          a: "Sí. En muchos casos se puede apretar, ajustar o volver a fijar una manilla suelta. Si la pieza está rota, puede hacer falta sustituirla.",
        },
        {
          q: "¿También arregláis pomos y tiradores de muebles?",
          a: "Sí. Este servicio es ideal para pomos, tiradores de cocina, cajones, armarios, muebles de baño y pequeños accesorios de uso diario.",
        },
        {
          q: "¿Qué fotos tengo que enviar?",
          a: "Envía una foto general, una foto de cerca del tirador o manilla, y si puedes, un vídeo corto mostrando cómo se mueve o qué parte está suelta.",
        },
      ]
    : [
        {
          q: "What handles or knobs can be fixed?",
          a: "Furniture handles, knobs, door handles, drawer pulls, cabinet handles and small loose fittings can often be adjusted when the damage allows a simple repair.",
        },
        {
          q: "How much does loose handle fixing cost in Valencia?",
          a: "The service starts from €25. Final price depends on handle type, screw condition, material, access, number of pieces and whether any component needs replacement.",
        },
        {
          q: "Can you fix a loose door handle?",
          a: "Yes. In many cases a loose door handle can be tightened, adjusted or refixed. If the part is broken, replacement may be needed.",
        },
        {
          q: "Do you also fix furniture knobs and drawer handles?",
          a: "Yes. This service is ideal for knobs, kitchen handles, drawers, wardrobes, bathroom furniture and small everyday fittings.",
        },
        {
          q: "What photos should I send?",
          a: "Send one general photo, one close-up photo of the handle or knob, and if possible, a short video showing how it moves or which part is loose.",
        },
      ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: isEs
      ? "Reparación de tiradores sueltos en Valencia"
      : "Loose handle fixing in Valencia",
    description: isEs
      ? "Ajuste y reparación de tiradores, pomos, manillas, accesorios pequeños y piezas sueltas en muebles, puertas y cajones en Valencia."
      : "Tightening and fixing of loose handles, knobs, door handles, small fittings and loose pieces on furniture, doors and drawers in Valencia.",
    serviceType: isEs ? "Reparación de tiradores sueltos" : "Loose handle fixing",
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
        name: isEs ? "Tiradores sueltos" : "Loose handle fixing",
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
        "Tiradores y pomos sueltos",
        "Manillas y pequeños accesorios",
        "Uso diario más cómodo",
      ]
    : [
        "From €25",
        "Loose handles and knobs",
        "Door handles and small fittings",
        "Better everyday use",
      ];

  const included = isEs
    ? [
        "Revisión del tirador, pomo o manilla",
        "Ajuste y apriete de piezas sueltas",
        "Revisión básica de tornillos y fijación",
        "Corrección de pequeños accesorios flojos",
        "Mejora del uso diario cuando es posible",
        "Presupuesto claro según fotos y alcance",
      ]
    : [
        "Inspection of the handle, knob or fitting",
        "Tightening and adjustment of loose parts",
        "Basic screw and fixing check",
        "Correction of small loose fittings",
        "Improved everyday use where possible",
        "Clear estimate based on photos and scope",
      ];

  const related = isEs
    ? [
        { title: "Ajuste de puertas", href: `/${locale}/services/repairs/door-adjustment` },
        { title: "Reparaciones en Valencia", href: `/${locale}/services/repairs` },
        { title: "Servicios de puertas", href: `/${locale}/services/doors` },
        { title: "Instalaciones de cocina", href: `/${locale}/services/kitchen` },
      ]
    : [
        { title: "Door adjustment", href: `/${locale}/services/repairs/door-adjustment` },
        { title: "Repairs in Valencia", href: `/${locale}/services/repairs` },
        { title: "Door services", href: `/${locale}/services/doors` },
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
              {isEs ? "Reparación de tiradores sueltos" : "Loose handle fixing"}{" "}
              <span className="text-yellow-500">
                {isEs ? "en Valencia" : "in Valencia"}
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-700">
              {isEs
                ? "Ajuste y fijación de tiradores, pomos, manillas y pequeños accesorios sueltos para mejorar el uso diario de puertas, cajones y muebles."
                : "Tightening and fixing of loose handles, knobs and small fittings to improve everyday use of doors, drawers and furniture."}
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
              <Grip className="mb-6 h-12 w-12 text-black" />
              <p className="text-sm font-black uppercase tracking-widest">
                {isEs ? "Desde 25€" : "From €25"}
              </p>
              <h2 className="mt-3 text-3xl font-black">
                {isEs
                  ? "Menos movimiento. Mejor agarre. Uso más cómodo."
                  : "Less movement. Better grip. Easier everyday use."}
              </h2>
              <p className="mt-4 font-medium leading-7 text-neutral-900">
                {isEs
                  ? "Revisamos la pieza, tornillos y fijación para dejar el tirador o manilla más firme cuando es posible."
                  : "We check the part, screws and fixing to make the handle or knob firmer where possible."}
              </p>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: isEs ? "Tiradores" : "Handles",
                  text: isEs ? "Muebles y cajones" : "Furniture and drawers",
                  icon: Grip,
                },
                {
                  title: isEs ? "Manillas" : "Door handles",
                  text: isEs ? "Puertas interiores" : "Interior doors",
                  icon: DoorOpen,
                },
                {
                  title: isEs ? "Fijación" : "Fixing",
                  text: isEs ? "Ajuste de piezas" : "Part adjustment",
                  icon: Wrench,
                },
                {
                  title: isEs ? "Uso diario" : "Daily use",
                  text: isEs ? "Más firme y cómodo" : "Firmer and easier",
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
              title: isEs ? "Tiradores flojos" : "Loose handles",
              text: isEs
                ? "Ajuste de tiradores que se mueven, giran, vibran o no quedan bien sujetos."
                : "Adjustment of handles that move, rotate, vibrate or do not stay firmly attached.",
            },
            {
              title: isEs ? "Pomos y manillas" : "Knobs and handles",
              text: isEs
                ? "Servicio útil para muebles, cajones, armarios, puertas interiores y pequeños accesorios."
                : "Useful for furniture, drawers, wardrobes, interior doors and small fittings.",
            },
            {
              title: isEs ? "Presupuesto claro" : "Clear estimate",
              text: isEs
                ? "Envía fotos y vídeo por WhatsApp para valorar la pieza y el tipo de fijación."
                : "Send photos and a video by WhatsApp to check the part and fixing type.",
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
            ? "Ajuste de tiradores, pomos, manillas y accesorios sueltos"
            : "Fixing loose handles, knobs, door handles and small fittings"}
        </h2>

        <div className="mt-6 space-y-5 text-lg leading-8 text-neutral-700">
          <p>
            {isEs
              ? "Un tirador suelto puede parecer un detalle pequeño, pero molesta cada día y puede terminar dañando más el mueble, cajón o puerta. En muchos casos se puede mejorar con un ajuste sencillo."
              : "A loose handle may seem like a small detail, but it is annoying every day and can eventually damage the furniture, drawer or door more. In many cases it can be improved with a simple adjustment."}
          </p>

          <p>
            {isEs
              ? "THEVULGO realiza reparación de tiradores sueltos en Valencia para muebles de cocina, baño, armarios, cajones, puertas interiores y pequeños accesorios de uso diario."
              : "THEVULGO provides loose handle fixing in Valencia for kitchen furniture, bathroom furniture, wardrobes, drawers, interior doors and small everyday fittings."}
          </p>

          <p>
            {isEs
              ? "Antes de confirmar, puedes enviar fotos y un vídeo corto mostrando cómo se mueve la pieza. Así se puede valorar si basta con ajustar o si hace falta reemplazar algún tornillo, fijación o tirador."
              : "Before confirming, you can send photos and a short video showing how the part moves. This helps check whether tightening is enough or if a screw, fixing or handle needs replacement."}
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
              ? "Envía fotos y vídeo para valorar la pieza"
              : "Send photos and video to check the fitting"}
          </h2>
          <p className="mt-6 text-lg font-medium leading-8 text-neutral-900">
            {isEs
              ? "Para calcular el precio, envía una foto general, foto de cerca y un vídeo corto mostrando qué parte está suelta."
              : "To estimate the price, send a general photo, close-up photo and a short video showing which part is loose."}
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
              ? "¿Tienes un tirador o pomo suelto?"
              : "Do you have a loose handle or knob?"}
          </h2>
          <p className="mt-5 text-lg font-medium text-neutral-900">
            {isEs
              ? "Envía fotos y un vídeo corto. Te damos un presupuesto claro antes de empezar."
              : "Send photos and a short video. Get a clear estimate before the work starts."}
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