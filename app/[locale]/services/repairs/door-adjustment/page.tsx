import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  DoorOpen,
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
    ? "Ajuste de Puertas en Valencia | Desde 35€ | THEVULGO"
    : "Door Adjustment in Valencia | From €35 | THEVULGO";

  const description = isEs
    ? "Ajuste de puertas en Valencia desde 35€: pequeñas correcciones de alineación, roces, cierre básico y mejoras de uso diario."
    : "Door adjustment in Valencia from €35: small alignment fixes, rubbing doors, basic closing improvements and everyday usability corrections.";

  return {
    title,
    description,
    keywords: isEs
      ? [
          "ajuste de puertas Valencia",
          "puerta roza suelo Valencia",
          "arreglar puerta Valencia",
          "alinear puerta Valencia",
          "puerta no cierra bien Valencia",
          "manitas puertas Valencia",
          "reparación pequeña puerta Valencia",
        ]
      : [
          "door adjustment Valencia",
          "door rubbing floor Valencia",
          "fix door Valencia",
          "door alignment Valencia",
          "door not closing properly Valencia",
          "handyman door repair Valencia",
          "small door repair Valencia",
        ],
    alternates: {
      canonical: `${siteUrl}/${locale}/services/repairs/door-adjustment`,
      languages: {
        es: `${siteUrl}/es/services/repairs/door-adjustment`,
        en: `${siteUrl}/en/services/repairs/door-adjustment`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${siteUrl}/${locale}/services/repairs/door-adjustment`,
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

export default async function DoorAdjustmentPage({ params }: PageProps) {
  const { locale } = await params;
  const isEs = locale === "es";

  const pageUrl = `${siteUrl}/${locale}/services/repairs/door-adjustment`;

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, quiero pedir presupuesto para ajuste de puerta en Valencia."
      : "Hi, I would like an estimate for door adjustment in Valencia."
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
          q: "¿Qué incluye el ajuste de una puerta?",
          a: "Incluye pequeñas correcciones de alineación, revisión básica de bisagras, roces simples, problemas leves de cierre y mejoras de uso diario cuando el alcance es sencillo.",
        },
        {
          q: "¿Cuánto cuesta ajustar una puerta en Valencia?",
          a: "El servicio empieza desde 35€. El precio final depende del tipo de puerta, bisagras, roce, estado del marco, acceso y tiempo necesario.",
        },
        {
          q: "¿Podéis arreglar una puerta que roza el suelo?",
          a: "Sí, en muchos casos se puede mejorar una puerta que roza el suelo o el marco. Primero hay que revisar si el problema viene de bisagras, marco, humedad o deformación.",
        },
        {
          q: "¿Podéis arreglar una puerta que no cierra bien?",
          a: "Sí. Se pueden hacer ajustes básicos para mejorar el cierre, la alineación y el uso diario cuando no hay daños estructurales importantes.",
        },
        {
          q: "¿Qué fotos tengo que enviar?",
          a: "Envía una foto general de la puerta, fotos de las bisagras, la zona donde roza o no cierra y un vídeo corto mostrando el problema.",
        },
      ]
    : [
        {
          q: "What is included in door adjustment?",
          a: "It includes small alignment corrections, basic hinge checks, simple rubbing issues, light closing problems and everyday usability improvements when the scope is straightforward.",
        },
        {
          q: "How much does door adjustment cost in Valencia?",
          a: "The service starts from €35. Final price depends on door type, hinges, rubbing issue, frame condition, access and required time.",
        },
        {
          q: "Can you fix a door rubbing the floor?",
          a: "Yes, in many cases a door rubbing the floor or frame can be improved. First it is necessary to check whether the issue comes from hinges, frame, humidity or deformation.",
        },
        {
          q: "Can you fix a door that does not close properly?",
          a: "Yes. Basic adjustments can often improve closing, alignment and everyday use when there is no major structural damage.",
        },
        {
          q: "What photos should I send?",
          a: "Send one general photo of the door, photos of the hinges, the area where it rubs or does not close and a short video showing the issue.",
        },
      ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: isEs ? "Ajuste de puertas en Valencia" : "Door adjustment in Valencia",
    description: isEs
      ? "Pequeños ajustes de puertas, correcciones de alineación, roces, cierre básico y mejoras de uso diario en Valencia."
      : "Small door adjustments, alignment fixes, rubbing doors, basic closing improvements and everyday usability corrections in Valencia.",
    serviceType: isEs ? "Ajuste de puertas" : "Door adjustment",
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
      price: "35",
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
        name: isEs ? "Ajuste de puertas" : "Door adjustment",
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
        "Desde 35€",
        "Puertas que rozan",
        "Mejor cierre y alineación",
        "Uso diario más cómodo",
      ]
    : [
        "From €35",
        "Rubbing doors",
        "Better closing and alignment",
        "Improved everyday use",
      ];

  const included = isEs
    ? [
        "Revisión básica de la puerta y el marco",
        "Comprobación de bisagras y alineación",
        "Corrección de pequeños roces cuando es posible",
        "Mejora del cierre básico de la puerta",
        "Ajustes simples para uso diario más cómodo",
        "Presupuesto claro según fotos, vídeo y alcance",
      ]
    : [
        "Basic check of the door and frame",
        "Hinge and alignment inspection",
        "Correction of small rubbing issues where possible",
        "Improvement of basic door closing",
        "Simple adjustments for easier everyday use",
        "Clear estimate based on photos, video and scope",
      ];

  const related = isEs
    ? [
        { title: "Reparaciones en Valencia", href: `/${locale}/services/repairs` },
        { title: "Servicios de puertas", href: `/${locale}/services/doors` },
        { title: "Pequeños arreglos de pared", href: `/${locale}/services/repairs/minor-wall-fixes` },
        { title: "Servicios handyman", href: `/${locale}/services` },
      ]
    : [
        { title: "Repairs in Valencia", href: `/${locale}/services/repairs` },
        { title: "Door services", href: `/${locale}/services/doors` },
        { title: "Minor wall fixes", href: `/${locale}/services/repairs/minor-wall-fixes` },
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
              {isEs ? "Ajuste de puertas" : "Door adjustment"}{" "}
              <span className="text-yellow-500">
                {isEs ? "en Valencia" : "in Valencia"}
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-700">
              {isEs
                ? "Pequeñas correcciones de alineación, roces y cierre básico para que la puerta funcione mejor en el uso diario."
                : "Small alignment fixes, rubbing corrections and basic closing improvements so your door works better in everyday use."}
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
              <DoorOpen className="mb-6 h-12 w-12 text-black" />
              <p className="text-sm font-black uppercase tracking-widest">
                {isEs ? "Desde 35€" : "From €35"}
              </p>
              <h2 className="mt-3 text-3xl font-black">
                {isEs
                  ? "Mejor alineación. Mejor cierre. Menos roces."
                  : "Better alignment. Better closing. Less rubbing."}
              </h2>
              <p className="mt-4 font-medium leading-7 text-neutral-900">
                {isEs
                  ? "Revisamos la puerta, bisagras y marco para mejorar el funcionamiento cuando el problema permite un ajuste sencillo."
                  : "We check the door, hinges and frame to improve function when the issue allows a simple adjustment."}
              </p>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: isEs ? "Alineación" : "Alignment",
                  text: isEs ? "Correcciones pequeñas" : "Small corrections",
                  icon: DoorOpen,
                },
                {
                  title: isEs ? "Bisagras" : "Hinges",
                  text: isEs ? "Revisión básica" : "Basic check",
                  icon: Wrench,
                },
                {
                  title: isEs ? "Cierre" : "Closing",
                  text: isEs ? "Mejor uso diario" : "Better everyday use",
                  icon: ShieldCheck,
                },
                {
                  title: isEs ? "Acabado" : "Finish",
                  text: isEs ? "Más cómodo y práctico" : "More comfortable",
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
              title: isEs ? "Puerta que roza" : "Rubbing door",
              text: isEs
                ? "Revisión de roces contra suelo, marco o zona lateral cuando el ajuste es sencillo."
                : "Checking rubbing against the floor, frame or side area when a simple adjustment is possible.",
            },
            {
              title: isEs ? "Cierre mejorado" : "Improved closing",
              text: isEs
                ? "Ajustes básicos para ayudar a que la puerta cierre y se use mejor."
                : "Basic adjustments to help the door close and work better.",
            },
            {
              title: isEs ? "Presupuesto claro" : "Clear estimate",
              text: isEs
                ? "Envía fotos y vídeo por WhatsApp para valorar el tipo de puerta y problema."
                : "Send photos and a video by WhatsApp to review the door type and issue.",
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
            ? "Ajustes simples para puertas que rozan, no cierran bien o se sienten desalineadas"
            : "Simple fixes for doors that rub, do not close well or feel misaligned"}
        </h2>

        <div className="mt-6 space-y-5 text-lg leading-8 text-neutral-700">
          <p>
            {isEs
              ? "Una puerta que roza, se atasca o no cierra bien puede ser muy incómoda en el uso diario. A veces el problema se puede mejorar con un ajuste básico de bisagras, alineación o revisión del marco."
              : "A door that rubs, sticks or does not close properly can be very annoying in everyday use. Sometimes the issue can be improved with a basic hinge, alignment or frame check."}
          </p>

          <p>
            {isEs
              ? "THEVULGO realiza ajustes pequeños de puertas en Valencia para pisos, casas, apartamentos de alquiler, mudanzas y pequeñas reparaciones del hogar."
              : "THEVULGO provides small door adjustments in Valencia for apartments, homes, rental properties, move-ins and minor home repairs."}
          </p>

          <p>
            {isEs
              ? "Antes de confirmar, puedes enviar fotos y un vídeo corto mostrando cómo abre, cierra o roza la puerta. Así se puede valorar si es un ajuste simple o si hace falta una reparación más completa."
              : "Before confirming, you can send photos and a short video showing how the door opens, closes or rubs. This helps check whether it is a simple adjustment or if a bigger repair is needed."}
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
            {isEs ? "Desde 35€" : "From €35"}
          </p>
          <h2 className="mt-3 text-4xl font-black">
            {isEs
              ? "Envía fotos y vídeo para valorar la puerta"
              : "Send photos and video to check the door"}
          </h2>
          <p className="mt-6 text-lg font-medium leading-8 text-neutral-900">
            {isEs
              ? "Para calcular el precio, envía una foto general, fotos de bisagras, marco y un vídeo corto mostrando el problema."
              : "To estimate the price, send one general photo, hinge and frame photos and a short video showing the issue."}
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
              ? "¿Tu puerta roza o no cierra bien?"
              : "Does your door rub or not close properly?"}
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