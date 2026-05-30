import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Home,
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
    ? "Ajuste de Rieles de Cortina en Valencia | Desde 29€ | THEVULGO"
    : "Curtain Rail Adjustments in Valencia | From €29 | THEVULGO";

  const description = isEs
    ? "Ajuste de rieles de cortina en Valencia desde 29€: soportes flojos, rieles desalineados, fijaciones simples y mejoras de uso diario."
    : "Curtain rail adjustments in Valencia from €29: loose supports, misaligned rails, simple fittings and everyday usability improvements.";

  return {
    title,
    description,
    keywords: isEs
      ? [
          "ajuste riel cortina Valencia",
          "arreglar riel cortina Valencia",
          "riel cortina suelto Valencia",
          "soporte cortina suelto Valencia",
          "arreglar cortinas Valencia",
          "manitas cortinas Valencia",
          "reparación cortinero Valencia",
          "riel cortina techo Valencia",
          "riel cortina pared Valencia",
        ]
      : [
          "curtain rail adjustment Valencia",
          "curtain rail repair Valencia",
          "loose curtain rail Valencia",
          "curtain fitting repair Valencia",
          "curtain rail handyman Valencia",
          "minor curtain rail fixes Valencia",
          "ceiling curtain rail repair Valencia",
          "wall curtain rail repair Valencia",
        ],
    alternates: {
      canonical: `${siteUrl}/${locale}/services/repairs/curtain-rail-adjustments`,
      languages: {
        es: `${siteUrl}/es/services/repairs/curtain-rail-adjustments`,
        en: `${siteUrl}/en/services/repairs/curtain-rail-adjustments`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${siteUrl}/${locale}/services/repairs/curtain-rail-adjustments`,
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

export default async function CurtainRailAdjustmentsPage({ params }: PageProps) {
  const { locale } = await params;
  const isEs = locale === "es";

  const pageUrl = `${siteUrl}/${locale}/services/repairs/curtain-rail-adjustments`;

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, quiero pedir presupuesto para ajuste de riel de cortina en Valencia."
      : "Hi, I would like an estimate for curtain rail adjustments in Valencia."
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
          q: "¿Qué incluye el ajuste de rieles de cortina?",
          a: "Incluye pequeñas correcciones de rieles, soportes flojos, fijaciones simples, alineación básica y mejoras de uso cuando el problema permite una reparación sencilla.",
        },
        {
          q: "¿Cuánto cuesta ajustar un riel de cortina en Valencia?",
          a: "El servicio empieza desde 29€. El precio final depende del tipo de riel, estado de la pared o techo, número de soportes, acceso y material necesario.",
        },
        {
          q: "¿Podéis arreglar un riel de cortina suelto?",
          a: "Sí. En muchos casos se puede reforzar o volver a fijar un soporte suelto. Si la pared está muy dañada o el riel está roto, puede hacer falta una reparación mayor o sustitución.",
        },
        {
          q: "¿Trabajáis con rieles de techo y pared?",
          a: "Sí. Se pueden revisar rieles de techo, rieles de pared, soportes simples, cortineros y pequeñas fijaciones relacionadas con cortinas.",
        },
        {
          q: "¿Qué fotos tengo que enviar?",
          a: "Envía una foto general de la cortina, una foto de cerca del riel o soporte suelto, y si puedes, un vídeo corto mostrando el problema.",
        },
        {
          q: "¿Hace falta cambiar todo el riel?",
          a: "No siempre. Muchas veces basta con ajustar soportes, reforzar fijaciones o corregir una pieza suelta. Si el riel está roto o doblado, se valora sustitución.",
        },
        {
          q: "¿Podéis revisar rieles después de una mudanza?",
          a: "Sí. Este servicio es útil después de mudanzas, cambios de cortina, pisos de alquiler o cuando el riel empieza a moverse con el uso diario.",
        },
      ]
    : [
        {
          q: "What is included in curtain rail adjustment?",
          a: "It includes minor curtain rail corrections, loose supports, simple fittings, basic alignment and usability improvements when the issue allows a simple fix.",
        },
        {
          q: "How much does curtain rail adjustment cost in Valencia?",
          a: "The service starts from €29. Final price depends on rail type, wall or ceiling condition, number of supports, access and required material.",
        },
        {
          q: "Can you fix a loose curtain rail?",
          a: "Yes. In many cases a loose support can be reinforced or refixed. If the wall is badly damaged or the rail is broken, a bigger repair or replacement may be needed.",
        },
        {
          q: "Do you work with ceiling and wall curtain rails?",
          a: "Yes. Ceiling rails, wall rails, simple supports, curtain fittings and small curtain-related fixings can be reviewed.",
        },
        {
          q: "What photos should I send?",
          a: "Send one general photo of the curtain, one close-up photo of the rail or loose support, and if possible, a short video showing the issue.",
        },
        {
          q: "Do I need to replace the whole rail?",
          a: "Not always. Often adjusting supports, reinforcing fixings or correcting a loose part is enough. If the rail is broken or bent, replacement can be checked.",
        },
        {
          q: "Can you check curtain rails after moving in?",
          a: "Yes. This service is useful after move-ins, curtain changes, rental apartments or when the rail starts moving from everyday use.",
        },
      ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: isEs
      ? "Ajuste de rieles de cortina en Valencia"
      : "Curtain rail adjustments in Valencia",
    description: isEs
      ? "Pequeñas correcciones y ajustes de rieles de cortina, soportes flojos, fijaciones simples, rieles desalineados y mejoras básicas de uso en Valencia."
      : "Minor fixes and corrections for curtain rails, loose supports, simple fittings, misaligned rails and basic usability improvements in Valencia.",
    serviceType: isEs ? "Ajuste de rieles de cortina" : "Curtain rail adjustments",
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
        name: isEs ? "Ajuste de rieles de cortina" : "Curtain rail adjustments",
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
        "Rieles y soportes sueltos",
        "Fijaciones simples",
        "Mejor uso diario",
      ]
    : [
        "From €29",
        "Loose rails and supports",
        "Simple fittings",
        "Better everyday use",
      ];

  const included = isEs
    ? [
        "Revisión básica del riel de cortina",
        "Comprobación de soportes y fijaciones",
        "Ajuste de pequeñas piezas flojas",
        "Corrección de alineación simple cuando es posible",
        "Mejora del uso diario de la cortina",
        "Presupuesto claro según fotos, vídeo y alcance",
      ]
    : [
        "Basic check of the curtain rail",
        "Inspection of supports and fittings",
        "Adjustment of small loose parts",
        "Simple alignment correction where possible",
        "Improved everyday curtain use",
        "Clear estimate based on photos, video and scope",
      ];

  const repairSituations = isEs
    ? [
        "El riel se mueve al abrir o cerrar la cortina",
        "Un soporte está flojo o separado de la pared",
        "La cortina no corre bien por el riel",
        "El riel está ligeramente desalineado",
        "Hay tornillos o tacos que ya no sujetan bien",
        "El sistema necesita revisión después de una mudanza",
      ]
    : [
        "The rail moves when opening or closing the curtain",
        "A support is loose or separated from the wall",
        "The curtain does not slide properly on the rail",
        "The rail is slightly misaligned",
        "Screws or wall plugs no longer hold properly",
        "The system needs checking after a move-in",
      ];

  const commonProblems = isEs
    ? [
        {
          title: "Soportes flojos",
          text: "Revisamos soportes que se mueven, vibran o han perdido fuerza por uso diario o mala fijación anterior.",
        },
        {
          title: "Riel desalineado",
          text: "Ajustamos pequeñas desviaciones que hacen que la cortina no corra bien o se vea torcida.",
        },
        {
          title: "Fijación débil",
          text: "Comprobamos tacos, tornillos y puntos de anclaje cuando la pared o techo ya no sujeta bien.",
        },
        {
          title: "Uso incómodo",
          text: "Mejoramos detalles que dificultan abrir o cerrar la cortina en el día a día.",
        },
      ]
    : [
        {
          title: "Loose supports",
          text: "We check supports that move, vibrate or have lost strength from daily use or poor previous fixing.",
        },
        {
          title: "Misaligned rail",
          text: "We adjust small misalignments that make the curtain slide poorly or look uneven.",
        },
        {
          title: "Weak fixing",
          text: "We check plugs, screws and anchor points when the wall or ceiling no longer holds well.",
        },
        {
          title: "Uncomfortable use",
          text: "We improve details that make the curtain harder to open or close every day.",
        },
      ];

  const processSteps = isEs
    ? [
        "Envías foto general de la cortina",
        "Envías foto de cerca del soporte o riel",
        "Mandas un vídeo corto mostrando el problema",
        "Revisamos si conviene ajustar, reforzar o sustituir",
        "Te damos presupuesto claro antes de empezar",
      ]
    : [
        "You send a general photo of the curtain",
        "You send a close-up photo of the support or rail",
        "You send a short video showing the issue",
        "We check whether adjustment, reinforcement or replacement is better",
        "You receive a clear estimate before the work starts",
      ];

  const railTypes = isEs
    ? [
        {
          title: "Riel de techo",
          text: "Se revisan soportes, tornillos y puntos de fijación cuando el riel está instalado en techo.",
        },
        {
          title: "Riel de pared",
          text: "Se comprueba si la pared sujeta bien y si los soportes necesitan ajuste o refuerzo.",
        },
        {
          title: "Cortinero simple",
          text: "Se revisan piezas visibles, soportes, alineación y funcionamiento básico.",
        },
      ]
    : [
        {
          title: "Ceiling rail",
          text: "Supports, screws and fixing points are checked when the rail is installed on the ceiling.",
        },
        {
          title: "Wall rail",
          text: "The wall hold is checked and supports are reviewed for adjustment or reinforcement.",
        },
        {
          title: "Simple curtain fitting",
          text: "Visible parts, supports, alignment and basic function are reviewed.",
        },
      ];

  const notIncluded = isEs
    ? [
        "Instalación completa de sistema nuevo sin presupuesto previo",
        "Reparación estructural de techo o pared muy dañada",
        "Trabajos eléctricos cerca de mecanismos ocultos",
        "Garantía sobre rieles antiguos, doblados o piezas rotas no sustituibles",
      ]
    : [
        "Complete installation of a new system without prior estimate",
        "Structural repair of badly damaged ceiling or wall",
        "Electrical work near hidden mechanisms",
        "Guarantee on old, bent or non-replaceable broken rail parts",
      ];

  const related = isEs
    ? [
        { title: "Reparaciones en Valencia", href: `/${locale}/services/repairs` },
        { title: "Instalación de cortinas", href: `/${locale}/services/curtain-installation` },
        { title: "Sellado de huecos", href: `/${locale}/services/repairs/sealing-gap-filling` },
        { title: "Servicios handyman", href: `/${locale}/services` },
      ]
    : [
        { title: "Repairs in Valencia", href: `/${locale}/services/repairs` },
        { title: "Curtain installation", href: `/${locale}/services/curtain-installation` },
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
              {isEs ? "THEVULGO • Reparaciones en Valencia" : "THEVULGO • Repairs in Valencia"}
            </div>

            <h1 className="text-4xl font-black tracking-tight md:text-6xl">
              {isEs ? "Ajuste de rieles de cortina" : "Curtain rail adjustments"}{" "}
              <span className="text-yellow-500">{isEs ? "en Valencia" : "in Valencia"}</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-700">
              {isEs
                ? "Pequeñas correcciones y ajustes para rieles de cortina, soportes flojos y fijaciones simples. Ideal para mejorar el uso diario sin cambiar todo el sistema."
                : "Minor fixes and corrections for curtain rails, loose supports and simple fittings. Ideal for improving everyday use without replacing the full system."}
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
              <Ruler className="mb-6 h-12 w-12 text-black" />
              <p className="text-sm font-black uppercase tracking-widest">
                {isEs ? "Desde 29€" : "From €29"}
              </p>
              <h2 className="mt-3 text-3xl font-black">
                {isEs
                  ? "Riel más firme. Cortina más cómoda. Mejor acabado."
                  : "Firmer rail. Easier curtain use. Cleaner finish."}
              </h2>
              <p className="mt-4 font-medium leading-7 text-neutral-900">
                {isEs
                  ? "Revisamos el riel, soportes y puntos de fijación para mejorar estabilidad y funcionamiento cuando el arreglo es sencillo."
                  : "We check the rail, supports and fixing points to improve stability and function when the fix is straightforward."}
              </p>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                { title: isEs ? "Rieles" : "Rails", text: isEs ? "Techo o pared" : "Ceiling or wall", icon: Ruler },
                { title: isEs ? "Soportes" : "Supports", text: isEs ? "Piezas flojas" : "Loose pieces", icon: ShieldCheck },
                { title: isEs ? "Ajuste" : "Adjustment", text: isEs ? "Corrección simple" : "Simple correction", icon: Wrench },
                { title: isEs ? "Uso diario" : "Daily use", text: isEs ? "Más cómodo" : "Easier use", icon: Sparkles },
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
              title: isEs ? "Soportes flojos" : "Loose supports",
              text: isEs
                ? "Revisión y ajuste de soportes que se mueven, vibran o no quedan firmes."
                : "Checking and adjusting supports that move, vibrate or do not stay firm.",
            },
            {
              title: isEs ? "Mejor funcionamiento" : "Better function",
              text: isEs
                ? "Pequeñas mejoras para que la cortina se use mejor en el día a día."
                : "Small improvements so the curtain works better in everyday use.",
            },
            {
              title: isEs ? "Presupuesto claro" : "Clear estimate",
              text: isEs
                ? "Envía fotos y vídeo para valorar el riel, la pared o techo y el tipo de fijación."
                : "Send photos and a video to review the rail, wall or ceiling and fixing type.",
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
            ? "Pequeños ajustes para rieles de cortina, soportes y fijaciones"
            : "Minor adjustments for curtain rails, supports and fittings"}
        </h2>

        <div className="mt-6 space-y-5 text-lg leading-8 text-neutral-700">
          <p>
            {isEs
              ? "Un riel de cortina flojo, desalineado o con soportes débiles puede hacer que la cortina sea incómoda de usar y que la zona se vea descuidada. Muchas veces no hace falta cambiar todo: basta con revisar y ajustar las fijaciones."
              : "A loose or misaligned curtain rail with weak supports can make the curtain difficult to use and the area look unfinished. Often, the full system does not need replacement: the fittings simply need to be checked and adjusted."}
          </p>

          <p>
            {isEs
              ? "THEVULGO realiza ajustes de rieles de cortina en Valencia para pisos, casas, alquileres, mudanzas y pequeñas reparaciones del hogar."
              : "THEVULGO provides curtain rail adjustments in Valencia for apartments, homes, rental properties, move-ins and small home repairs."}
          </p>

          <p>
            {isEs
              ? "Antes de confirmar, puedes enviar fotos y un vídeo corto mostrando el problema. Así se puede valorar si el riel se puede ajustar o si conviene instalar una solución nueva."
              : "Before confirming, you can send photos and a short video showing the issue. This helps check whether the rail can be adjusted or whether a new installation is better."}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-16 md:px-8">
        <h2 className="text-3xl font-black md:text-4xl">
          {isEs
            ? "Servicio para rieles de cortina flojos o desalineados en Valencia"
            : "Service for loose or misaligned curtain rails in Valencia"}
        </h2>

        <div className="mt-6 space-y-6 text-lg leading-8 text-neutral-700">
          <p>
            {isEs
              ? "Los rieles de cortina soportan movimiento constante: abrir, cerrar, tirar de la tela, limpiar, cambiar cortinas o mover muebles cerca de la ventana. Con el tiempo, los tornillos pueden aflojarse, los tacos pueden perder agarre y el riel puede empezar a moverse o quedar desalineado."
              : "Curtain rails handle constant movement: opening, closing, pulling the fabric, cleaning, changing curtains or moving furniture near the window. Over time, screws can loosen, wall plugs can lose grip and the rail can start moving or become misaligned."}
          </p>

          <p>
            {isEs
              ? "Este servicio está pensado para problemas pequeños y concretos: un soporte flojo, una pieza que vibra, una zona que se separa del techo o pared, una cortina que no corre bien o un riel que necesita revisión antes de que el daño aumente."
              : "This service is designed for small and specific problems: one loose support, a part that vibrates, an area separating from the ceiling or wall, a curtain that does not slide well or a rail that needs checking before the damage gets worse."}
          </p>

          <p>
            {isEs
              ? "En Valencia trabajamos con viviendas particulares, pisos de alquiler, apartamentos turísticos y mudanzas donde se necesita dejar la cortina funcionando mejor sin cambiar necesariamente todo el sistema."
              : "In Valencia we work with private homes, rental apartments, tourist apartments and move-ins where the curtain needs to work better without necessarily replacing the whole system."}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-yellow-200 bg-white p-7 shadow-md">
            <ShieldCheck className="h-10 w-10 text-yellow-500" />
            <h2 className="mt-4 text-3xl font-black">
              {isEs ? "Cuándo conviene ajustar el riel" : "When rail adjustment makes sense"}
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
              <div key={item.title} className="rounded-2xl border border-yellow-200 bg-yellow-50 p-6 shadow-sm">
                <h3 className="text-xl font-black">{item.title}</h3>
                <p className="mt-3 leading-7 text-neutral-700">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-yellow-50 py-16">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <h2 className="text-3xl font-black md:text-4xl">
            {isEs ? "Tipos de rieles y cortineros" : "Types of rails and curtain fittings"}
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {railTypes.map((item) => (
              <div key={item.title} className="rounded-2xl border border-yellow-200 bg-white p-7 shadow-sm">
                <Home className="h-8 w-8 text-yellow-500" />
                <h3 className="mt-4 text-xl font-black">{item.title}</h3>
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
            {isEs ? "Desde 29€" : "From €29"}
          </p>
          <h2 className="mt-3 text-4xl font-black">
            {isEs ? "Envía fotos y vídeo para valorar el riel" : "Send photos and video to check the rail"}
          </h2>
          <p className="mt-6 text-lg font-medium leading-8 text-neutral-900">
            {isEs
              ? "Para calcular el precio, envía una foto general, foto de cerca del soporte o riel y un vídeo corto mostrando el movimiento o problema."
              : "To estimate the price, send a general photo, close-up photo of the support or rail and a short video showing the movement or issue."}
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
                <summary className="cursor-pointer list-none font-black">{item.q}</summary>
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
            {isEs ? "¿Tu riel de cortina está flojo o mal ajustado?" : "Is your curtain rail loose or badly adjusted?"}
          </h2>
          <p className="mt-5 text-lg font-medium text-neutral-900">
            {isEs
              ? "Envía fotos y un vídeo corto. Te damos un presupuesto claro antes de empezar."
              : "Send photos and a short video. Get a clear estimate before the work starts."}
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