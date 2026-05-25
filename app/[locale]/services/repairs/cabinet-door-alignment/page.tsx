import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  DoorOpen,
  MapPin,
  Package,
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
    ? "Alineación de Puertas de Armario en Valencia | Desde 35€ | THEVULGO"
    : "Cabinet Door Alignment in Valencia | From €35 | THEVULGO";

  const description = isEs
    ? "Alineación de puertas de armario en Valencia desde 35€. Ajustes simples de bisagras para puertas de muebles, armarios, cocina e interiores."
    : "Cabinet door alignment in Valencia from €35. Simple hinge adjustments for cabinet doors, wardrobes, kitchen units and interior fittings.";

  return {
    title,
    description,
    keywords: isEs
      ? [
          "alinear puertas armario Valencia",
          "ajustar bisagras mueble Valencia",
          "puerta armario desalineada Valencia",
          "ajuste puertas cocina Valencia",
          "reparar puerta mueble Valencia",
          "manitas muebles Valencia",
          "bisagras armario Valencia",
        ]
      : [
          "cabinet door alignment Valencia",
          "cabinet hinge adjustment Valencia",
          "wardrobe door alignment Valencia",
          "kitchen cabinet door adjustment Valencia",
          "furniture door repair Valencia",
          "handyman cabinet doors Valencia",
          "interior fittings Valencia",
        ],
    alternates: {
      canonical: `${siteUrl}/${locale}/services/repairs/cabinet-door-alignment`,
      languages: {
        es: `${siteUrl}/es/services/repairs/cabinet-door-alignment`,
        en: `${siteUrl}/en/services/repairs/cabinet-door-alignment`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${siteUrl}/${locale}/services/repairs/cabinet-door-alignment`,
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

export default async function CabinetDoorAlignmentPage({ params }: PageProps) {
  const { locale } = await params;
  const isEs = locale === "es";

  const pageUrl = `${siteUrl}/${locale}/services/repairs/cabinet-door-alignment`;

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, quiero pedir presupuesto para alinear puertas de armario o ajustar bisagras en Valencia."
      : "Hi, I would like an estimate for cabinet door alignment or hinge adjustment in Valencia."
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
          q: "¿Qué incluye la alineación de puertas de armario?",
          a: "Incluye revisión de puertas, bisagras, holguras, cierre y alineación visible. Se realizan ajustes simples cuando las bisagras y el mueble lo permiten.",
        },
        {
          q: "¿Cuánto cuesta ajustar puertas de armario en Valencia?",
          a: "El servicio empieza desde 35€. El precio final depende del número de puertas, tipo de bisagra, estado del mueble, acceso y tiempo necesario.",
        },
        {
          q: "¿Podéis ajustar puertas de cocina?",
          a: "Sí. Se pueden ajustar puertas de muebles de cocina, armarios, muebles de baño, cajones con frente y otros interiores cuando el sistema lo permite.",
        },
        {
          q: "¿Podéis arreglar puertas que no cierran bien?",
          a: "Sí, en muchos casos se puede mejorar el cierre con ajustes de bisagra. Si la bisagra está rota o el mueble está dañado, puede hacer falta sustituir piezas.",
        },
        {
          q: "¿Qué fotos tengo que enviar?",
          a: "Envía una foto general del mueble, fotos de las bisagras, una foto de las separaciones entre puertas y un vídeo corto mostrando cómo abre o cierra.",
        },
      ]
    : [
        {
          q: "What is included in cabinet door alignment?",
          a: "It includes checking doors, hinges, gaps, closing and visible alignment. Simple adjustments are made when the hinges and cabinet allow it.",
        },
        {
          q: "How much does cabinet door alignment cost in Valencia?",
          a: "The service starts from €35. Final price depends on the number of doors, hinge type, cabinet condition, access and required time.",
        },
        {
          q: "Can you adjust kitchen cabinet doors?",
          a: "Yes. Kitchen cabinet doors, wardrobes, bathroom furniture, drawer fronts and other interior fittings can be adjusted where the system allows it.",
        },
        {
          q: "Can you fix doors that do not close properly?",
          a: "Yes, in many cases closing can be improved with hinge adjustments. If the hinge is broken or the cabinet is damaged, parts may need replacement.",
        },
        {
          q: "What photos should I send?",
          a: "Send one general photo of the cabinet, photos of the hinges, one photo showing the gaps between doors and a short video showing how it opens or closes.",
        },
      ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: isEs
      ? "Alineación de puertas de armario en Valencia"
      : "Cabinet door alignment in Valencia",
    description: isEs
      ? "Ajustes simples de bisagras para puertas de armario, muebles de cocina, muebles de baño e interiores en Valencia."
      : "Simple hinge adjustments for cabinet doors, kitchen units, bathroom furniture and interior fittings in Valencia.",
    serviceType: isEs
      ? "Alineación de puertas de armario"
      : "Cabinet door alignment",
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
        name: isEs ? "Alineación de puertas de armario" : "Cabinet door alignment",
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
        "Ajuste de bisagras",
        "Puertas de armario y cocina",
        "Mejor cierre y alineación",
      ]
    : [
        "From €35",
        "Hinge adjustments",
        "Cabinet and kitchen doors",
        "Better closing and alignment",
      ];

  const included = isEs
    ? [
        "Revisión de puertas, bisagras y separaciones",
        "Ajuste básico de bisagras cuando es posible",
        "Corrección de holguras y líneas visibles",
        "Mejora del cierre y uso diario",
        "Revisión de frentes de muebles e interiores",
        "Presupuesto claro según fotos, vídeo y alcance",
      ]
    : [
        "Check of doors, hinges and gaps",
        "Basic hinge adjustment where possible",
        "Correction of visible gaps and lines",
        "Improved closing and everyday use",
        "Review of furniture fronts and interior fittings",
        "Clear estimate based on photos, video and scope",
      ];

  const related = isEs
    ? [
        {
          title: "Instalaciones de cocina",
          href: `/${locale}/services/kitchen`,
        },
        {
          title: "Pequeñas reparaciones de muebles",
          href: `/${locale}/services/repairs/furniture-touch-up-fixes`,
        },
        {
          title: "Reparaciones en Valencia",
          href: `/${locale}/services/repairs`,
        },
        {
          title: "Ajuste de puertas",
          href: `/${locale}/services/repairs/door-adjustment`,
        },
      ]
    : [
        {
          title: "Kitchen installations",
          href: `/${locale}/services/kitchen`,
        },
        {
          title: "Furniture touch-up fixes",
          href: `/${locale}/services/repairs/furniture-touch-up-fixes`,
        },
        {
          title: "Repairs in Valencia",
          href: `/${locale}/services/repairs`,
        },
        {
          title: "Door adjustment",
          href: `/${locale}/services/repairs/door-adjustment`,
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
              {isEs ? "Alineación de puertas de armario" : "Cabinet door alignment"}{" "}
              <span className="text-yellow-500">
                {isEs ? "en Valencia" : "in Valencia"}
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-700">
              {isEs
                ? "Ajustes simples de bisagras para puertas de armario, muebles de cocina e interiores. Ideal para mejorar líneas, cierre y uso diario."
                : "Simple hinge adjustments for cabinet doors and interior fittings. Ideal for improving lines, closing and everyday usability."}
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
                  ? "Puertas más rectas. Mejor cierre. Mueble más limpio."
                  : "Straighter doors. Better closing. Cleaner furniture look."}
              </h2>
              <p className="mt-4 font-medium leading-7 text-neutral-900">
                {isEs
                  ? "Revisamos bisagras, separaciones y cierre para corregir pequeñas desalineaciones cuando el sistema lo permite."
                  : "We check hinges, gaps and closing to correct small misalignments when the system allows it."}
              </p>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: isEs ? "Bisagras" : "Hinges",
                  text: isEs ? "Ajuste simple" : "Simple adjustment",
                  icon: Wrench,
                },
                {
                  title: isEs ? "Puertas" : "Doors",
                  text: isEs ? "Mejor alineación" : "Better alignment",
                  icon: DoorOpen,
                },
                {
                  title: isEs ? "Muebles" : "Cabinets",
                  text: isEs ? "Cocina e interiores" : "Kitchen and interiors",
                  icon: Package,
                },
                {
                  title: isEs ? "Acabado" : "Finish",
                  text: isEs ? "Líneas más limpias" : "Cleaner lines",
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
              title: isEs ? "Puertas desalineadas" : "Misaligned doors",
              text: isEs
                ? "Corrección de puertas que quedan torcidas, con huecos irregulares o líneas visualmente desordenadas."
                : "Correction of doors that sit crooked, have uneven gaps or visually messy lines.",
            },
            {
              title: isEs ? "Mejor cierre" : "Better closing",
              text: isEs
                ? "Ajustes simples para ayudar a que las puertas cierren y se usen mejor."
                : "Simple adjustments to help doors close and work better.",
            },
            {
              title: isEs ? "Presupuesto claro" : "Clear estimate",
              text: isEs
                ? "Envía fotos y vídeo para valorar bisagras, número de puertas y estado del mueble."
                : "Send photos and video to review hinges, number of doors and furniture condition.",
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
            ? "Ajuste de bisagras para puertas de armario, cocina e interiores"
            : "Hinge adjustments for cabinet doors, kitchen units and interior fittings"}
        </h2>

        <div className="mt-6 space-y-5 text-lg leading-8 text-neutral-700">
          <p>
            {isEs
              ? "Las puertas de armario desalineadas hacen que un mueble se vea descuidado y pueden molestar en el uso diario. A veces basta con ajustar las bisagras para mejorar las líneas, el cierre y la separación entre puertas."
              : "Misaligned cabinet doors make furniture look unfinished and can be annoying in everyday use. Sometimes hinge adjustments are enough to improve lines, closing and the gaps between doors."}
          </p>

          <p>
            {isEs
              ? "THEVULGO realiza alineación de puertas de armario en Valencia para cocinas, baños, armarios, muebles interiores, pisos de alquiler, mudanzas y pequeñas mejoras del hogar."
              : "THEVULGO provides cabinet door alignment in Valencia for kitchens, bathrooms, wardrobes, interior furniture, rental apartments, move-ins and small home improvements."}
          </p>

          <p>
            {isEs
              ? "Antes de confirmar, puedes enviar fotos de las puertas, bisagras y huecos visibles, además de un vídeo corto mostrando cómo abren y cierran. Así se puede valorar si es un ajuste simple o si hace falta cambiar piezas."
              : "Before confirming, you can send photos of the doors, hinges and visible gaps, plus a short video showing how they open and close. This helps check whether it is a simple adjustment or if parts need replacement."}
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
              ? "Envía fotos para valorar las bisagras"
              : "Send photos to check the hinges"}
          </h2>
          <p className="mt-6 text-lg font-medium leading-8 text-neutral-900">
            {isEs
              ? "Para calcular el precio, envía una foto general del mueble, fotos de las bisagras y un vídeo corto mostrando el cierre."
              : "To estimate the price, send a general photo of the cabinet, photos of the hinges and a short video showing the closing issue."}
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
              ? "¿Tus puertas de armario están desalineadas?"
              : "Are your cabinet doors misaligned?"}
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