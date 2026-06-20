import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Calculator,
  CheckCircle2,
  Clock3,
  Euro,
  FileText,
  Hammer,
  Home,
  MapPin,
  MessageCircle,
  Paintbrush,
  Ruler,
  ShieldCheck,
  Sparkles,
  Star,
  Store,
  Wrench,
  Zap,
} from "lucide-react";

type Props = {
  params: Promise<{ locale: string }>;
};

const baseUrl = "https://www.thevulgo.es";
const phone = "34610076942";
const pagePath = "/presupuesto-pladur-valencia";

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

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";

  const title = isEs
    ? "Presupuesto de Pladur en Valencia | Precio por WhatsApp | THEVULGO"
    : "Drywall Quote in Valencia | Price by WhatsApp | THEVULGO";

  const description = isEs
    ? "Pide presupuesto de pladur en Valencia. Instalación de pladur, falsos techos, tabiques, reparaciones y trabajos de pladur para viviendas, oficinas y locales."
    : "Request a drywall quote in Valencia. Plasterboard installation, false ceilings, partitions, repairs and drywall work for homes, offices and commercial spaces.";

  return {
    title,
    description,
    keywords: isEs
      ? [
          "presupuesto pladur valencia",
          "presupuesto de pladur valencia",
          "precio pladur valencia",
          "precio de pladur valencia",
          "cuanto cuesta pladur valencia",
          "cuánto cuesta pladur valencia",
          "presupuesto falso techo pladur valencia",
          "presupuesto tabique pladur valencia",
          "presupuesto reparacion pladur valencia",
          "empresa pladur presupuesto valencia",
          "pladur valencia precio",
          "pladur en valencia",
          "instalacion pladur valencia",
          "reformas pladur valencia",
          "empresa pladur valencia",
          "falso techo pladur valencia",
          "tabiques pladur valencia",
          "reparacion pladur valencia",
        ]
      : [
          "drywall quote valencia",
          "plasterboard quote valencia",
          "drywall price valencia",
          "plasterboard price valencia",
          "drywall estimate valencia",
          "false ceiling quote valencia",
          "drywall partition quote valencia",
          "drywall repair quote valencia",
          "drywall company valencia",
          "plasterboard installation valencia",
        ],
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `${baseUrl}/${locale}${pagePath}`,
      languages: {
        es: `${baseUrl}/es${pagePath}`,
        en: `${baseUrl}/en${pagePath}`,
        "x-default": `${baseUrl}/es${pagePath}`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${baseUrl}/${locale}${pagePath}`,
      siteName: "THEVULGO",
      locale: isEs ? "es_ES" : "en_GB",
      type: "website",
    },
  };
}

export default async function PresupuestoPladurValenciaPage({ params }: Props) {
  const { locale } = await params;
  const isEs = locale === "es";

  const estimateHref = `/${locale}/estimate?category=handyman`;

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, necesito un presupuesto de pladur en Valencia. Puedo enviar fotos, medidas y detalles del trabajo."
      : "Hi, I need a drywall / plasterboard quote in Valencia. I can send photos, measurements and job details."
  );

  const whatsappHref = `https://wa.me/${phone}?text=${whatsappText}`;

  const priceItems = isEs
    ? [
        ["Reparación pequeña de pladur", "desde 35 €"],
        ["Parche y lijado básico", "desde 45 €"],
        ["Reparación de techo de pladur", "desde 49 €"],
        ["Instalación básica de pladur", "desde 79 €"],
        ["Tabique de pladur", "presupuesto"],
        ["Falso techo de pladur", "presupuesto"],
        ["Techo registrable", "presupuesto"],
        ["Trabajo para oficina o local", "presupuesto"],
        ["Visita técnica / revisión", "desde 49 €"],
      ]
    : [
        ["Small drywall repair", "from €35"],
        ["Patch and basic sanding", "from €45"],
        ["Drywall ceiling repair", "from €49"],
        ["Basic drywall installation", "from €79"],
        ["Drywall partition", "quote"],
        ["Plasterboard false ceiling", "quote"],
        ["Suspended ceiling", "quote"],
        ["Office or shop work", "quote"],
        ["Technical visit / inspection", "from €49"],
      ];

  const requiredInfo = isEs
    ? [
        "Fotos claras de la pared, techo o zona dañada",
        "Vídeo corto si el trabajo tiene varias partes",
        "Medidas aproximadas: ancho, alto y profundidad",
        "Altura del techo o zona de trabajo",
        "Ubicación en Valencia o alrededores",
        "Tipo de trabajo: reparación, tabique, techo o reforma",
        "Estado actual: grietas, humedad, agujeros o zona abierta",
        "Si necesitas pintura o solo preparación",
        "Si hay cables, focos, tuberías o instalaciones cerca",
      ]
    : [
        "Clear photos of the wall, ceiling or damaged area",
        "Short video if the job has several parts",
        "Approximate measurements: width, height and depth",
        "Ceiling height or working height",
        "Location in Valencia or nearby areas",
        "Job type: repair, partition, ceiling or renovation",
        "Current condition: cracks, moisture, holes or open area",
        "Whether you need painting or only preparation",
        "Whether there are cables, spotlights, pipes or installations nearby",
      ];

  const factors = isEs
    ? [
        "Metros cuadrados del trabajo",
        "Tipo de placa de pladur necesaria",
        "Estructura metálica o soporte existente",
        "Altura y dificultad de acceso",
        "Estado de pared o techo",
        "Necesidad de masilla, lijado y acabado",
        "Si hay que preparar para pintura",
        "Si hay focos, cables o registros",
        "Tiempo necesario y desplazamiento",
      ]
    : [
        "Square meters of the job",
        "Type of plasterboard required",
        "Metal framing or existing support",
        "Height and access difficulty",
        "Wall or ceiling condition",
        "Need for filler, sanding and finishing",
        "Whether paint preparation is needed",
        "Spotlights, cables or access panels",
        "Required time and travel",
      ];

  const moneyLinks = [
    {
      title: isEs ? "Pladur Valencia" : "Drywall Valencia",
      desc: isEs
        ? "Página principal del servicio de pladur en Valencia."
        : "Main drywall and plasterboard service page in Valencia.",
      href: `/${locale}/pladur-valencia`,
    },
    {
      title: isEs ? "Empresa Pladur Valencia" : "Drywall Company Valencia",
      desc: isEs
        ? "Servicio de pladur para viviendas, locales, oficinas y negocios."
        : "Drywall service for homes, shops, offices and businesses.",
      href: `/${locale}/empresa-pladur-valencia`,
    },
    {
      title: isEs ? "Reformas Pladur Valencia" : "Plasterboard Renovations Valencia",
      desc: isEs
        ? "Reformas interiores con pladur, tabiques, techos y reparaciones."
        : "Interior drywall renovations, partitions, ceilings and repairs.",
      href: `/${locale}/reformas-pladur-valencia`,
    },
    {
      title: isEs ? "Reparación Pladur Valencia" : "Drywall Repair Valencia",
      desc: isEs
        ? "Agujeros, grietas, golpes, esquinas y zonas dañadas."
        : "Holes, cracks, impact damage, corners and damaged areas.",
      href: `/${locale}/reparacion-pladur-valencia`,
    },
    {
      title: isEs ? "Falso Techo Pladur Valencia" : "Plasterboard False Ceiling Valencia",
      desc: isEs
        ? "Presupuesto para falsos techos de pladur y preparación para focos."
        : "Quote for plasterboard false ceilings and spotlight preparation.",
      href: `/${locale}/falso-techo-pladur-valencia`,
    },
    {
      title: isEs ? "Tabiques Pladur Valencia" : "Drywall Partitions Valencia",
      desc: isEs
        ? "Tabiques, divisiones interiores y cierres con pladur."
        : "Partitions, interior divisions and plasterboard closures.",
      href: `/${locale}/tabiques-pladur-valencia`,
    },
  ];

  const quoteBlocks = [
    {
      icon: Wrench,
      title: isEs ? "Precio de reparación de pladur" : "Drywall repair price",
      text: isEs
        ? "Para agujeros, grietas, golpes, esquinas dañadas, cortes o marcas de soportes. El precio depende del tamaño del daño, preparación, lijado y acabado."
        : "For holes, cracks, impact damage, damaged corners, cutouts or bracket marks. Price depends on damage size, preparation, sanding and finish.",
    },
    {
      icon: Hammer,
      title: isEs ? "Precio de falso techo de pladur" : "Plasterboard false ceiling price",
      text: isEs
        ? "El presupuesto depende de metros, altura, estructura, focos, registros, remates, acceso y acabado final."
        : "The quote depends on size, height, framing, spotlights, access panels, finishing details, access and final finish.",
    },
    {
      icon: Ruler,
      title: isEs ? "Precio de tabiques de pladur" : "Drywall partition price",
      text: isEs
        ? "Para divisiones interiores, cierres, paredes nuevas o separación de espacios. Se valoran medidas, estructura, placas, aislamiento y acabado."
        : "For interior divisions, closures, new walls or space separation. We check measurements, frame, boards, insulation and finish.",
    },
  ];

  const faqs = isEs
    ? [
        {
          q: "¿Cuánto cuesta el pladur en Valencia?",
          a: "Depende del tipo de trabajo, metros, materiales, altura, acceso, acabado y dificultad. Las reparaciones pequeñas pueden empezar desde 35 €, pero tabiques, falsos techos y reformas necesitan presupuesto personalizado.",
        },
        {
          q: "¿Cómo pedir presupuesto de pladur?",
          a: "Puedes enviar fotos, vídeo corto, medidas aproximadas, altura, ubicación y explicar qué necesitas. Con esa información podemos darte una estimación más clara o recomendar una visita.",
        },
        {
          q: "¿Puedo enviar fotos por WhatsApp?",
          a: "Sí. WhatsApp es la forma más rápida para valorar un trabajo de pladur. Envía fotos de cerca, fotos generales, medidas y detalles del acabado que necesitas.",
        },
        {
          q: "¿Necesitáis visitar la vivienda?",
          a: "Para trabajos simples muchas veces podemos orientar por fotos. Para tabiques, falsos techos, locales, oficinas o trabajos con varias partes, una visita puede ser necesaria.",
        },
        {
          q: "¿Cuánto cuesta reparar un agujero en pladur?",
          a: "Una reparación pequeña puede empezar desde 35 €, pero el precio cambia según tamaño del agujero, si hay que reforzar, masillar, lijar, preparar para pintura o igualar la superficie.",
        },
        {
          q: "¿Cuánto cuesta un falso techo de pladur?",
          a: "Un falso techo de pladur normalmente requiere presupuesto porque depende de metros, altura, estructura, focos, registros, remates y acabado.",
        },
        {
          q: "¿Cuánto cuesta un tabique de pladur?",
          a: "Un tabique de pladur se presupuesta según medidas, tipo de placa, estructura metálica, aislamiento, acabado, acceso y tiempo de trabajo.",
        },
        {
          q: "¿Trabajáis con particulares y empresas?",
          a: "Sí. Trabajamos con particulares, pisos de alquiler, viviendas, oficinas, locales comerciales, restaurantes, bares, tiendas y pequeños negocios en Valencia.",
        },
      ]
    : [
        {
          q: "How much does drywall cost in Valencia?",
          a: "It depends on job type, measurements, materials, height, access, finish and difficulty. Small repairs can start from €35, but partitions, false ceilings and renovations need a custom quote.",
        },
        {
          q: "How can I request a drywall quote?",
          a: "You can send photos, a short video, approximate measurements, height, location and explain what you need. With that information we can give a clearer estimate or recommend a visit.",
        },
        {
          q: "Can I send photos by WhatsApp?",
          a: "Yes. WhatsApp is the fastest way to review a drywall job. Send close-up photos, general photos, measurements and details of the finish you need.",
        },
        {
          q: "Do you need to visit the property?",
          a: "For simple jobs we can often estimate from photos. For partitions, false ceilings, shops, offices or jobs with several parts, a visit may be needed.",
        },
        {
          q: "How much does it cost to repair a drywall hole?",
          a: "A small repair can start from €35, but the price changes depending on hole size, reinforcement, filler, sanding, paint preparation and surface matching.",
        },
        {
          q: "How much does a plasterboard false ceiling cost?",
          a: "A plasterboard false ceiling usually requires a quote because it depends on measurements, height, frame, spotlights, access panels, finishing details and finish.",
        },
        {
          q: "How much does a drywall partition cost?",
          a: "A drywall partition is quoted based on measurements, board type, metal framing, insulation, finish, access and work time.",
        },
        {
          q: "Do you work with private clients and businesses?",
          a: "Yes. We work with private clients, rental apartments, homes, offices, commercial spaces, restaurants, bars, shops and small businesses in Valencia.",
        },
      ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `${baseUrl}/#localbusiness`,
        name: "THEVULGO",
        url: baseUrl,
        telephone: `+${phone}`,
        priceRange: "€€",
        areaServed: areas,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Valencia",
          addressCountry: "ES",
        },
      },
      {
        "@type": "Service",
        "@id": `${baseUrl}/${locale}${pagePath}#service`,
        name: isEs
          ? "Presupuesto de pladur en Valencia"
          : "Drywall and plasterboard quote in Valencia",
        serviceType: isEs
          ? "Presupuesto para trabajos de pladur, falsos techos, tabiques y reparaciones"
          : "Quote for drywall work, false ceilings, partitions and repairs",
        provider: {
          "@id": `${baseUrl}/#localbusiness`,
        },
        areaServed: areas,
        url: `${baseUrl}/${locale}${pagePath}`,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: isEs
            ? "Presupuestos de pladur en Valencia"
            : "Drywall quotes in Valencia",
          itemListElement: moneyLinks.map((item) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: item.title,
              url: `${baseUrl}${item.href}`,
            },
          })),
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.a,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: `${baseUrl}/${locale}`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: isEs ? "Presupuesto Pladur Valencia" : "Drywall Quote Valencia",
            item: `${baseUrl}/${locale}${pagePath}`,
          },
        ],
      },
    ],
  };

  return (
    <main className="bg-white text-neutral-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="relative overflow-hidden border-b border-yellow-200 bg-gradient-to-b from-yellow-50 via-white to-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-white px-4 py-2 text-sm font-semibold shadow-sm">
              <MapPin className="h-4 w-4 text-yellow-500" />
              THEVULGO • Valencia & nearby
            </div>

            <h1 className="text-4xl font-black tracking-tight sm:text-6xl">
              {isEs
                ? "Presupuesto de pladur en Valencia"
                : "Drywall and plasterboard quote in Valencia"}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-700">
              {isEs
                ? "Pide presupuesto de pladur en Valencia para reparaciones, tabiques, falsos techos, techos registrables, instalación de pladur, preparación para pintura y trabajos en viviendas, oficinas o locales comerciales."
                : "Request a drywall and plasterboard quote in Valencia for repairs, partitions, false ceilings, suspended ceilings, plasterboard installation, preparation for painting and work in homes, offices or commercial spaces."}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappHref}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-yellow-400 px-6 py-4 font-bold text-black shadow-lg transition hover:scale-105"
              >
                <MessageCircle className="h-5 w-5" />
                {isEs ? "Pedir presupuesto por WhatsApp" : "Request estimate by WhatsApp"}
              </a>

              <Link
                href={estimateHref}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-neutral-300 bg-white px-6 py-4 font-bold shadow-sm transition hover:scale-105"
              >
                {isEs ? "Abrir formulario" : "Open estimate form"}
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                {
                  icon: Calculator,
                  title: isEs ? "Precio orientativo" : "Guide price",
                  text: isEs
                    ? "Según fotos, medidas, altura y acabado."
                    : "Based on photos, measurements, height and finish.",
                },
                {
                  icon: FileText,
                  title: isEs ? "Presupuesto claro" : "Clear estimate",
                  text: isEs
                    ? "Explicamos qué incluye el trabajo."
                    : "We explain what the work includes.",
                },
                {
                  icon: Clock3,
                  title: isEs ? "Respuesta rápida" : "Fast response",
                  text: isEs
                    ? "Envía fotos por WhatsApp para valorar."
                    : "Send photos by WhatsApp for review.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-yellow-300 bg-white p-5 shadow-md"
                >
                  <item.icon className="mb-3 h-6 w-6 text-yellow-500" />
                  <h3 className="font-bold">{item.title}</h3>
                  <p className="mt-1 text-sm text-neutral-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <h2 className="text-3xl font-black">
              {isEs
                ? "¿Cuánto cuesta un trabajo de pladur?"
                : "How much does drywall work cost?"}
            </h2>

            <p className="mt-5 text-lg leading-8 text-neutral-700">
              {isEs
                ? "El precio de un trabajo de pladur en Valencia depende de lo que haya que hacer: no cuesta lo mismo reparar un agujero pequeño que instalar un tabique, reparar un techo, preparar una zona para pintura o hacer un falso techo con focos."
                : "The price of drywall work in Valencia depends on what needs to be done: repairing a small hole is not the same as installing a partition, repairing a ceiling, preparing an area for painting or building a false ceiling with spotlights."}
            </p>

            <p className="mt-5 text-lg leading-8 text-neutral-700">
              {isEs
                ? "Para darte una estimación más exacta necesitamos fotos, medidas, altura, estado de la pared o techo y el tipo de acabado que quieres. Con esa información podemos orientarte por WhatsApp antes de confirmar una visita."
                : "To give a more accurate estimate, we need photos, measurements, height, wall or ceiling condition and the type of finish you want. With that information we can guide you by WhatsApp before confirming a visit."}
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                isEs ? "Reparaciones pequeñas" : "Small repairs",
                isEs ? "Tabiques de pladur" : "Drywall partitions",
                isEs ? "Falsos techos" : "False ceilings",
                isEs ? "Techos registrables" : "Suspended ceilings",
                isEs ? "Preparación para pintura" : "Preparation for painting",
                isEs ? "Trabajos en locales" : "Commercial space jobs",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl bg-yellow-50 p-4 shadow-sm"
                >
                  <CheckCircle2 className="h-5 w-5 text-yellow-500" />
                  <span className="font-semibold">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-yellow-300 bg-white p-6 shadow-xl">
            <h3 className="flex items-center gap-2 text-xl font-black">
              <Euro className="h-6 w-6 text-yellow-500" />
              {isEs ? "Tabla de precios orientativos" : "Guide price table"}
            </h3>

            <div className="mt-5 space-y-3">
              {priceItems.map(([name, price]) => (
                <div
                  key={name}
                  className="flex items-center justify-between gap-4 rounded-xl bg-yellow-50 p-4"
                >
                  <span className="font-semibold">{name}</span>
                  <span className="text-right font-black">{price}</span>
                </div>
              ))}
            </div>

            <p className="mt-5 text-sm leading-6 text-neutral-600">
              {isEs
                ? "Los precios son orientativos. El precio final depende de medidas, materiales, altura, acceso, estructura, acabado y tiempo necesario."
                : "Prices are indicative. Final price depends on measurements, materials, height, access, framing, finish and required time."}
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <h2 className="text-3xl font-black">
            {isEs
              ? "¿Qué información necesitamos para dar presupuesto?"
              : "What information do we need to quote?"}
          </h2>

          <p className="mt-4 max-w-3xl text-neutral-700">
            {isEs
              ? "Cuanta más información envíes, más claro será el presupuesto. Para trabajos de pladur, las fotos y medidas ayudan mucho a evitar errores."
              : "The more information you send, the clearer the quote will be. For drywall jobs, photos and measurements help a lot to avoid mistakes."}
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {requiredInfo.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-neutral-200 bg-white p-5 shadow-md"
              >
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-yellow-500" />
                <span className="font-semibold leading-7">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <h2 className="text-3xl font-black">
          {isEs ? "Enviar fotos por WhatsApp" : "Send photos by WhatsApp"}
        </h2>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {[
            {
              icon: MessageCircle,
              title: isEs ? "Fotos generales" : "General photos",
              text: isEs
                ? "Haz una foto desde lejos para ver toda la zona, pared, techo, suelo y acceso."
                : "Take a photo from distance to show the whole area, wall, ceiling, floor and access.",
            },
            {
              icon: Ruler,
              title: isEs ? "Medidas aproximadas" : "Approximate measurements",
              text: isEs
                ? "Indica ancho, alto, profundidad y altura de trabajo. No hace falta que sea perfecto."
                : "Share width, height, depth and working height. It does not need to be perfect.",
            },
            {
              icon: Sparkles,
              title: isEs ? "Acabado deseado" : "Desired finish",
              text: isEs
                ? "Explica si quieres solo reparación, preparado para pintura o acabado más completo."
                : "Explain whether you need only repair, preparation for painting or a more complete finish.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-yellow-300 bg-white p-6 shadow-md"
            >
              <item.icon className="mb-4 h-7 w-7 text-yellow-500" />
              <h3 className="text-xl font-black">{item.title}</h3>
              <p className="mt-4 leading-7 text-neutral-700">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-black text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-black">
                {isEs
                  ? "Factores que influyen en el presupuesto"
                  : "Factors that affect the quote"}
              </h2>

              <p className="mt-5 text-lg leading-8 text-neutral-300">
                {isEs
                  ? "Dos trabajos de pladur pueden parecer iguales en fotos, pero tener precios muy diferentes. La estructura, altura, humedad, acceso, remates, pintura, focos y estado de la pared pueden cambiar el tiempo y materiales necesarios."
                  : "Two drywall jobs can look similar in photos but have very different prices. Framing, height, moisture, access, finishing details, paint, spotlights and wall condition can change the time and materials required."}
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {factors.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-yellow-400 bg-neutral-900 p-4"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-yellow-400" />
                  <span className="font-semibold">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <h2 className="text-3xl font-black">
          {isEs ? "Precios según tipo de trabajo" : "Prices by job type"}
        </h2>

        <p className="mt-4 max-w-3xl text-neutral-700">
          {isEs
            ? "Estos bloques explican por qué algunos trabajos se pueden estimar rápido y otros necesitan visita o más datos."
            : "These blocks explain why some jobs can be estimated quickly while others need a visit or more details."}
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {quoteBlocks.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-md"
            >
              <item.icon className="mb-4 h-7 w-7 text-yellow-500" />
              <h3 className="text-xl font-black">{item.title}</h3>
              <p className="mt-4 leading-7 text-neutral-700">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-black">
                {isEs
                  ? "Presupuesto para viviendas, oficinas y locales"
                  : "Quote for homes, offices and commercial spaces"}
              </h2>

              <p className="mt-5 text-lg leading-8 text-neutral-700">
                {isEs
                  ? "Podemos valorar trabajos de pladur en pisos, viviendas de alquiler, apartamentos turísticos, oficinas, locales, tiendas, bares, restaurantes y pequeños negocios. Cada espacio tiene necesidades diferentes de acabado, acceso y tiempo."
                  : "We can quote drywall work in apartments, rental homes, tourist apartments, offices, commercial spaces, shops, bars, restaurants and small businesses. Each space has different finish, access and timing needs."}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                [Home, isEs ? "Viviendas" : "Homes"],
                [Building2, isEs ? "Oficinas" : "Offices"],
                [Store, isEs ? "Locales" : "Shops"],
                [ShieldCheck, isEs ? "Negocios" : "Businesses"],
              ].map(([Icon, title]) => {
                const LucideIcon = Icon as typeof Home;
                return (
                  <div
                    key={String(title)}
                    className="rounded-2xl border border-yellow-300 bg-white p-5 shadow-md"
                  >
                    <LucideIcon className="mb-4 h-6 w-6 text-yellow-500" />
                    <h3 className="font-bold">{String(title)}</h3>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <h2 className="text-3xl font-black">
          {isEs ? "Páginas relacionadas de pladur" : "Related drywall pages"}
        </h2>

        <p className="mt-4 max-w-3xl text-neutral-700">
          {isEs
            ? "Este cluster ayuda a Google a entender las diferentes búsquedas de pladur en Valencia: precio, presupuesto, empresa, reformas, reparación, falsos techos y tabiques."
            : "This cluster helps Google understand different drywall searches in Valencia: price, quote, company, renovation, repair, false ceilings and partitions."}
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {moneyLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group rounded-2xl border border-yellow-300 bg-white p-6 shadow-md transition hover:scale-105 hover:shadow-xl"
            >
              <Wrench className="mb-4 h-6 w-6 text-yellow-500" />
              <h3 className="text-xl font-black">{item.title}</h3>
              <p className="mt-3 leading-7 text-neutral-700">{item.desc}</p>
              <div className="mt-5 inline-flex items-center gap-2 font-bold text-neutral-950">
                {isEs ? "Ver servicio" : "View service"}
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <h2 className="text-3xl font-black">
            {isEs ? "Cómo funciona el presupuesto" : "How the quote works"}
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              [
                isEs ? "1. Envía fotos" : "1. Send photos",
                isEs
                  ? "Muestra la pared, techo, daño o zona de trabajo."
                  : "Show the wall, ceiling, damage or work area.",
              ],
              [
                isEs ? "2. Indica medidas" : "2. Share measurements",
                isEs
                  ? "Ancho, alto, profundidad y altura aproximada."
                  : "Approximate width, height, depth and working height.",
              ],
              [
                isEs ? "3. Explica el acabado" : "3. Explain finish",
                isEs
                  ? "Solo reparación, preparado para pintar o acabado completo."
                  : "Repair only, preparation for paint or complete finish.",
              ],
              [
                isEs ? "4. Revisamos dificultad" : "4. We check difficulty",
                isEs
                  ? "Materiales, acceso, estructura, humedad y tiempo."
                  : "Materials, access, framing, moisture and time.",
              ],
              [
                isEs ? "5. Damos orientación" : "5. We give guidance",
                isEs
                  ? "Precio orientativo o visita si hace falta."
                  : "Approximate price or visit if needed.",
              ],
              [
                isEs ? "6. Confirmamos fecha" : "6. We confirm date",
                isEs
                  ? "Agendamos el trabajo según disponibilidad."
                  : "We schedule the job depending on availability.",
              ],
            ].map(([title, text]) => (
              <div
                key={title}
                className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-md"
              >
                <h3 className="font-black">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-neutral-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <h2 className="text-3xl font-black">
          {isEs ? "Zonas de servicio en Valencia" : "Service areas in Valencia"}
        </h2>

        <p className="mt-4 max-w-3xl text-neutral-700">
          {isEs
            ? "Trabajamos en Valencia ciudad y zonas cercanas. Si no estás seguro si cubrimos tu zona, envía tu ubicación por WhatsApp."
            : "We work in Valencia city and nearby areas. If you are not sure whether we cover your area, send your location by WhatsApp."}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {areas.map((area) => (
            <span
              key={area}
              className="rounded-full border border-yellow-300 bg-yellow-50 px-4 py-2 text-sm font-semibold"
            >
              {area}
            </span>
          ))}
        </div>
      </section>

      <section className="border-y border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <h2 className="text-3xl font-black">
            {isEs ? "Preguntas frecuentes" : "Frequently asked questions"}
          </h2>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm"
              >
                <h3 className="font-black">{faq.q}</h3>
                <p className="mt-3 leading-7 text-neutral-700">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="rounded-3xl border border-yellow-400 bg-yellow-400 p-8 shadow-2xl lg:p-12">
          <h2 className="text-3xl font-black">
            {isEs
              ? "¿Quieres un presupuesto de pladur en Valencia?"
              : "Want a drywall quote in Valencia?"}
          </h2>

          <p className="mt-4 max-w-3xl text-lg font-medium">
            {isEs
              ? "Envía fotos de la pared, techo, daño o zona donde quieres hacer el trabajo. Te diremos qué información falta, qué se puede hacer, cuánto puede costar y cuándo podemos ir."
              : "Send photos of the wall, ceiling, damage or area where you need the work. We will tell you what information is missing, what can be done, how much it may cost and when we can come."}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappHref}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-black px-6 py-4 font-bold text-white shadow-lg transition hover:scale-105"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp
            </a>

            <Link
              href={estimateHref}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-black bg-white px-6 py-4 font-bold text-black shadow-sm transition hover:scale-105"
            >
              {isEs ? "Pedir presupuesto" : "Request estimate"}
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}