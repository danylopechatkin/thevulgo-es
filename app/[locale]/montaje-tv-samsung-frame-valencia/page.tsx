import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Tv,
  Monitor,
  Cable,
  CheckCircle2,
  Clock3,
  ShieldCheck,
  BadgeCheck,
  MapPin,
  Star,
  Ruler,
  Drill,
  Home,
  Building2,
  Layers,
  Eye,
  Plug,
  HelpCircle,
  PhoneCall,
  Paintbrush,
  Box,
  Wrench,
} from "lucide-react";

type Props = {
  params: Promise<{ locale: string }>;
};

const baseUrl = "https://www.thevulgo.es";
const phone = "+34 610 07 69 42";
const whatsappPhone = "34610076942";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";

  const title = isEs
    ? "Montaje Samsung Frame en Valencia | Instalación Profesional | THEVULGO"
    : "Samsung Frame TV Mounting in Valencia | Professional Installation | THEVULGO";

  const description = isEs
    ? "Montaje profesional de Samsung Frame en Valencia. Instalación limpia, alineación precisa, One Connect Box, ocultación de cable invisible y montaje seguro en pared. Desde 69€."
    : "Professional Samsung Frame TV mounting in Valencia. Clean installation, precise alignment, One Connect Box planning, cable concealment and secure wall mounting. From €69.";

  const url = `${baseUrl}/${locale}/montaje-tv-samsung-frame-valencia`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        es: `${baseUrl}/es/montaje-tv-samsung-frame-valencia`,
        en: `${baseUrl}/en/montaje-tv-samsung-frame-valencia`,
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "THEVULGO",
      type: "website",
      locale: isEs ? "es_ES" : "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    keywords: isEs
      ? [
          "montaje tv samsung frame valencia",
          "montaje samsung frame valencia",
          "instalar samsung frame valencia",
          "colgar samsung frame valencia",
          "instalador samsung frame valencia",
          "samsung frame pared valencia",
          "one connect box samsung frame valencia",
          "ocultar cable samsung frame valencia",
          "montaje tv valencia",
          "instalador tv valencia",
        ]
      : [
          "samsung frame tv mounting valencia",
          "samsung frame installation valencia",
          "install samsung frame valencia",
          "hang samsung frame valencia",
          "samsung frame wall mount valencia",
          "one connect box samsung frame valencia",
          "tv mounting valencia",
        ],
  };
}

export default async function Page({ params }: Props) {
  const { locale } = await params;
  const isEs = locale === "es";

  const pageUrl = `${baseUrl}/${locale}/montaje-tv-samsung-frame-valencia`;
  const estimateHref = `/${locale}/estimate?category=tv-mounting`;

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, necesito montar una TV Samsung Frame en Valencia. Me gustaría pedir presupuesto."
      : "Hi! I need to mount a Samsung Frame TV in Valencia. I’d like an estimate."
  );

  const whatsappHref = `https://wa.me/${whatsappPhone}?text=${whatsappText}`;

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${baseUrl}/#localbusiness`,
    name: "THEVULGO",
    url: baseUrl,
    telephone: phone,
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Valencia",
      addressRegion: "Valencia",
      addressCountry: "ES",
    },
    areaServed: [
      "Valencia",
      "Ruzafa",
      "Campanar",
      "Benimaclet",
      "Patraix",
      "Mislata",
      "Burjassot",
      "Paterna",
      "Torrent",
      "Alboraya",
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${pageUrl}#service`,
    name: isEs
      ? "Montaje de TV Samsung Frame en Valencia"
      : "Samsung Frame TV Mounting in Valencia",
    serviceType: isEs
      ? "Montaje Samsung Frame"
      : "Samsung Frame TV Mounting",
    provider: {
      "@id": `${baseUrl}/#localbusiness`,
    },
    areaServed: {
      "@type": "City",
      name: "Valencia",
    },
    url: pageUrl,
    description: isEs
      ? "Servicio profesional para montar Samsung Frame en pared con alineación precisa, instalación limpia, One Connect Box y ocultación de cables."
      : "Professional service to mount Samsung Frame TVs with precise alignment, clean installation, One Connect Box planning and cable concealment.",
    offers: {
      "@type": "Offer",
      priceCurrency: "EUR",
      price: "69",
      availability: "https://schema.org/InStock",
      url: pageUrl,
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: isEs
          ? "¿Cuánto cuesta montar una Samsung Frame en Valencia?"
          : "How much does Samsung Frame mounting cost in Valencia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: isEs
            ? "El montaje de Samsung Frame en Valencia empieza desde 69 €. El precio final depende del tamaño de la TV, tipo de pared, soporte, altura, ubicación del One Connect Box y ocultación de cables."
            : "Samsung Frame mounting in Valencia starts from €69. The final price depends on TV size, wall type, bracket, height, One Connect Box position and cable concealment.",
        },
      },
      {
        "@type": "Question",
        name: isEs
          ? "¿Se puede ocultar el cable de Samsung Frame?"
          : "Can the Samsung Frame cable be hidden?",
        acceptedAnswer: {
          "@type": "Answer",
          text: isEs
            ? "Sí. Se puede mejorar el acabado usando canaleta, ruta limpia o planificación del One Connect Box según la pared y la ubicación de enchufes."
            : "Yes. The finish can be improved with raceways, clean routing or One Connect Box planning depending on the wall and outlet position.",
        },
      },
      {
        "@type": "Question",
        name: isEs
          ? "¿Se puede montar Samsung Frame en pladur?"
          : "Can Samsung Frame be mounted on drywall?",
        acceptedAnswer: {
          "@type": "Answer",
          text: isEs
            ? "Sí, pero hay que revisar estructura, peso, soporte y puntos de fijación. En algunos casos puede ser necesario refuerzo."
            : "Yes, but the structure, weight, bracket and fixing points must be checked. Reinforcement may be needed in some cases.",
        },
      },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: isEs ? "Inicio" : "Home",
        item: `${baseUrl}/${locale}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: isEs ? "Montaje TV Valencia" : "TV Mounting Valencia",
        item: `${baseUrl}/${locale}/montaje-tv-valencia`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: isEs
          ? "Montaje Samsung Frame Valencia"
          : "Samsung Frame Mounting Valencia",
        item: pageUrl,
      },
    ],
  };

  const copy = {
    badge: isEs
      ? "THEVULGO • Samsung Frame Valencia"
      : "THEVULGO • Samsung Frame Valencia",

    heroTitle: isEs
      ? "Montaje de TV Samsung Frame en Valencia"
      : "Samsung Frame TV Mounting in Valencia",

    heroSubtitle: isEs
      ? "Instalación profesional de Samsung Frame en pared con alineación precisa, soporte bien nivelado, planificación del One Connect Box, ocultación de cable y acabado limpio tipo cuadro."
      : "Professional Samsung Frame wall installation with precise alignment, level bracket, One Connect Box planning, cable concealment and clean picture-frame style finish.",

    primaryCta: isEs ? "Pedir presupuesto" : "Get estimate",

    secondaryCta: isEs ? "WhatsApp rápido" : "Quick WhatsApp",

    heroNote: isEs
      ? "Desde 69 €. Precio final según tamaño, pared, soporte, cableado y dificultad."
      : "From €69. Final price depends on size, wall, bracket, cabling and complexity.",

    servicesTitle: isEs
      ? "Servicio especializado para Samsung Frame"
      : "Specialized Samsung Frame service",

    seoTitle: isEs
      ? "Instalación Samsung Frame con acabado limpio"
      : "Samsung Frame installation with clean finish",

    includedTitle: isEs ? "Qué incluye" : "What is included",

    processTitle: isEs ? "Cómo funciona" : "How it works",

    wallTitle: isEs
      ? "Montaje en ladrillo, hormigón o pladur"
      : "Mounting on brick, concrete or drywall",

    sizeTitle: isEs
      ? "Samsung Frame por tamaño"
      : "Samsung Frame by size",

    oneConnectTitle: isEs
      ? "One Connect Box y cable invisible"
      : "One Connect Box and invisible cable",

    linksTitle: isEs ? "Servicios relacionados" : "Related services",

    faqTitle: isEs
      ? "Preguntas frecuentes sobre Samsung Frame"
      : "Samsung Frame FAQ",

    finalTitle: isEs
      ? "¿Quieres montar tu Samsung Frame?"
      : "Want to mount your Samsung Frame?",

    finalText: isEs
      ? "Envía fotos de la pared, TV, soporte y zona del One Connect Box para recibir una estimación clara antes de reservar."
      : "Send photos of the wall, TV, bracket and One Connect Box area to receive a clear estimate before booking.",
  };

  const trustPoints = [
    {
      title: isEs ? "Alineación precisa" : "Precise alignment",
      text: isEs
        ? "La Samsung Frame debe quedar recta y visualmente equilibrada como un cuadro."
        : "Samsung Frame should stay straight and visually balanced like a picture frame.",
      icon: <Ruler className="h-5 w-5" />,
    },
    {
      title: isEs ? "Acabado limpio" : "Clean finish",
      text: isEs
        ? "Planificación de cableado, One Connect Box y posición final antes de perforar."
        : "Cable routing, One Connect Box and final position are planned before drilling.",
      icon: <Paintbrush className="h-5 w-5" />,
    },
    {
      title: isEs ? "Montaje seguro" : "Safe mounting",
      text: isEs
        ? "Fijaciones adecuadas según pared, peso, soporte y tamaño de pantalla."
        : "Suitable fixings based on wall, weight, bracket and screen size.",
      icon: <ShieldCheck className="h-5 w-5" />,
    },
  ];

  const services = [
    {
      title: isEs ? "Montaje Samsung Frame" : "Samsung Frame mounting",
      text: isEs
        ? "Instalación en pared con soporte compatible, nivelación y acabado tipo cuadro."
        : "Wall installation with compatible bracket, levelling and picture-frame style finish.",
      icon: <Tv className="h-5 w-5" />,
    },
    {
      title: isEs ? "One Connect Box" : "One Connect Box",
      text: isEs
        ? "Planificación de ubicación para caja One Connect según mueble, enchufe y cable."
        : "Planning the One Connect Box location based on furniture, outlet and cable route.",
      icon: <Box className="h-5 w-5" />,
    },
    {
      title: isEs ? "Ocultación de cable" : "Cable concealment",
      text: isEs
        ? "Canaleta, ruta limpia o solución visual según la pared y la distancia."
        : "Raceway, clean route or visual solution depending on wall and distance.",
      icon: <Cable className="h-5 w-5" />,
    },
    {
      title: isEs ? "Revisión de pared" : "Wall check",
      text: isEs
        ? "Ladrillo, hormigón o pladur necesitan fijaciones y técnica diferente."
        : "Brick, concrete and drywall need different fixings and technique.",
      icon: <Layers className="h-5 w-5" />,
    },
  ];

  const included = isEs
    ? [
        "Montaje de Samsung Frame en pared",
        "Medición de altura y posición visual",
        "Nivelación precisa del soporte",
        "Revisión del tipo de pared",
        "Instalación en ladrillo, hormigón o pladur",
        "Planificación del One Connect Box",
        "Mejor organización del cable invisible",
        "Consejo según tamaño de pantalla",
        "Instalación para salones, dormitorios y oficinas",
        "Revisión final de estabilidad y alineación",
      ]
    : [
        "Samsung Frame wall mounting",
        "Height and visual position measurement",
        "Precise bracket levelling",
        "Wall type check",
        "Installation on brick, concrete or drywall",
        "One Connect Box planning",
        "Better invisible cable organization",
        "Advice based on screen size",
        "Installation for living rooms, bedrooms and offices",
        "Final stability and alignment check",
      ];

  const process = [
    {
      step: "01",
      title: isEs ? "Envía fotos" : "Send photos",
      text: isEs
        ? "Foto de pared, TV, soporte, enchufes y zona donde irá el One Connect Box."
        : "Photo of wall, TV, bracket, outlets and One Connect Box area.",
      icon: <PhoneCall className="h-5 w-5" />,
    },
    {
      step: "02",
      title: isEs ? "Revisión" : "Review",
      text: isEs
        ? "Se revisa tamaño, pared, cableado, soporte y dificultad del montaje."
        : "Size, wall, cabling, bracket and installation complexity are reviewed.",
      icon: <Eye className="h-5 w-5" />,
    },
    {
      step: "03",
      title: isEs ? "Montaje" : "Mounting",
      text: isEs
        ? "Se mide, nivela, perfora y se instala la Samsung Frame con cuidado."
        : "Samsung Frame is measured, levelled, drilled and mounted carefully.",
      icon: <Drill className="h-5 w-5" />,
    },
    {
      step: "04",
      title: isEs ? "Acabado" : "Finish",
      text: isEs
        ? "Se revisa alineación, cable, estabilidad y resultado visual final."
        : "Alignment, cable, stability and final visual result are checked.",
      icon: <CheckCircle2 className="h-5 w-5" />,
    },
  ];

  const wallTypes = [
    {
      title: isEs ? "Pared de ladrillo" : "Brick wall",
      text: isEs
        ? "Habitual en pisos de Valencia. Permite una fijación sólida con tacos adecuados."
        : "Common in Valencia apartments. Allows solid fixing with suitable anchors.",
      icon: <Home className="h-5 w-5" />,
    },
    {
      title: isEs ? "Pared de hormigón" : "Concrete wall",
      text: isEs
        ? "Requiere perforación correcta y medición precisa antes de instalar el soporte."
        : "Requires correct drilling and precise measuring before bracket installation.",
      icon: <Building2 className="h-5 w-5" />,
    },
    {
      title: isEs ? "Pared de pladur" : "Drywall wall",
      text: isEs
        ? "Necesita revisar estructura, peso y puntos de fijación. A veces requiere refuerzo."
        : "Needs structure, weight and fixing-point checks. Sometimes reinforcement is required.",
      icon: <Layers className="h-5 w-5" />,
    },
  ];

  const sizes = [
    {
      title: "Samsung Frame 43”",
      text: isEs
        ? "Ideal para dormitorios, despachos y espacios pequeños."
        : "Ideal for bedrooms, offices and smaller rooms.",
      price: isEs ? "desde €69" : "from €69",
    },
    {
      title: "Samsung Frame 55”",
      text: isEs
        ? "Una de las medidas más habituales para salones modernos."
        : "One of the most common sizes for modern living rooms.",
      price: isEs ? "desde €69" : "from €69",
    },
    {
      title: "Samsung Frame 65”",
      text: isEs
        ? "Requiere buena medición para quedar centrada y cómoda."
        : "Requires good measuring to stay centered and comfortable.",
      price: isEs ? "desde €79" : "from €79",
    },
    {
      title: "Samsung Frame 75”",
      text: isEs
        ? "Pantalla grande con más peso y necesidad de fijación muy estable."
        : "Large screen with more weight and need for very stable fixing.",
      price: isEs ? "desde €99" : "from €99",
    },
  ];

  const areas = [
    "Valencia",
    "Ruzafa",
    "El Carmen",
    "Campanar",
    "Benimaclet",
    "Patraix",
    "Extramurs",
    "Cabanyal",
    "Malvarrosa",
    "Mislata",
    "Burjassot",
    "Paterna",
    "Torrent",
    "Alboraya",
    "Manises",
    "Xirivella",
  ];

  const relatedLinks = [
    {
      label: isEs ? "Montaje TV Valencia" : "TV mounting Valencia",
      href: `/${locale}/montaje-tv-valencia`,
    },
    {
      label: isEs ? "Instalador TV Valencia" : "TV installer Valencia",
      href: `/${locale}/instalador-tv-valencia`,
    },
    {
      label: isEs ? "Colgar TV Valencia" : "Hang TV Valencia",
      href: `/${locale}/colgar-tv-valencia`,
    },
    {
      label: isEs ? "Instalar TV pared Valencia" : "Install TV on wall Valencia",
      href: `/${locale}/instalar-tv-pared-valencia`,
    },
    {
      label: isEs ? "Ocultar cables TV Valencia" : "Hide TV cables Valencia",
      href: `/${locale}/ocultar-cables-valencia`,
    },
    {
      label: isEs ? "Instalación soporte TV Valencia" : "TV bracket installation Valencia",
      href: `/${locale}/instalacion-soporte-tv-valencia`,
    },
  ];

  const faq = isEs
    ? [
        {
          q: "¿Cuánto cuesta montar una Samsung Frame en Valencia?",
          a: "El montaje empieza desde 69 €. El precio final depende del tamaño, tipo de pared, soporte, ubicación del One Connect Box y ocultación de cables.",
        },
        {
          q: "¿Samsung Frame necesita instalación especial?",
          a: "Sí. Está diseñada para quedar muy cerca de la pared como un cuadro, por eso la alineación, altura y cableado son más importantes.",
        },
        {
          q: "¿Se puede ocultar el cable invisible?",
          a: "Sí. Se puede organizar con canaleta, ruta limpia o planificación del One Connect Box según la pared y los enchufes.",
        },
        {
          q: "¿Dónde se coloca el One Connect Box?",
          a: "Normalmente se coloca en un mueble, estantería o zona cercana con ventilación y acceso a corriente.",
        },
        {
          q: "¿Se puede montar en pladur?",
          a: "Sí, pero hay que revisar estructura, peso y fijaciones. En algunos casos puede ser necesario refuerzo.",
        },
        {
          q: "¿Montáis Samsung Frame de 75 pulgadas?",
          a: "Sí. Las pantallas grandes requieren más cuidado, ayuda y soporte adecuado.",
        },
        {
          q: "¿Tengo que comprar el soporte?",
          a: "Normalmente Samsung Frame incluye un sistema específico, pero conviene enviar foto del soporte antes de la cita.",
        },
        {
          q: "¿Trabajáis en toda Valencia?",
          a: "Sí. Valencia ciudad y zonas cercanas como Ruzafa, Campanar, Benimaclet, Mislata, Paterna, Torrent y alrededores.",
        },
      ]
    : [
        {
          q: "How much does Samsung Frame mounting cost in Valencia?",
          a: "Mounting starts from €69. Final price depends on size, wall type, bracket, One Connect Box location and cable concealment.",
        },
        {
          q: "Does Samsung Frame need special installation?",
          a: "Yes. It is designed to sit close to the wall like a picture frame, so alignment, height and cabling are more important.",
        },
        {
          q: "Can the invisible cable be hidden?",
          a: "Yes. It can be organized with raceways, clean routing or One Connect Box planning depending on the wall and outlets.",
        },
        {
          q: "Where is the One Connect Box placed?",
          a: "Usually in furniture, a shelf or nearby area with ventilation and power access.",
        },
        {
          q: "Can it be mounted on drywall?",
          a: "Yes, but the structure, weight and fixings must be checked. Reinforcement may be needed in some cases.",
        },
        {
          q: "Do you mount 75 inch Samsung Frame TVs?",
          a: "Yes. Large screens require extra care, support and suitable brackets.",
        },
        {
          q: "Do I need to buy the bracket?",
          a: "Samsung Frame usually includes a specific system, but it is best to send a photo of the bracket before the appointment.",
        },
        {
          q: "Do you work across Valencia?",
          a: "Yes. Valencia city and nearby areas such as Ruzafa, Campanar, Benimaclet, Mislata, Paterna, Torrent and surrounding areas.",
        },
      ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="min-h-screen bg-white text-black font-sans">
        <section className="relative overflow-hidden px-4 py-16 sm:py-20">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-white" />
            <div className="absolute left-1/2 top-0 h-[540px] w-[540px] -translate-x-1/2 rounded-full bg-yellow-200/40 blur-3xl" />
            <div className="absolute right-6 top-28 h-[320px] w-[320px] rounded-full bg-yellow-100/70 blur-3xl" />
          </div>

          <div className="mx-auto w-full max-w-7xl">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-white px-4 py-1.5 text-xs font-extrabold text-black shadow-sm">
                <span className="h-2 w-2 rounded-full bg-yellow-400" />
                {copy.badge}
              </div>

              <h1 className="mx-auto mt-5 max-w-5xl text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
                {copy.heroTitle}
              </h1>

              <p className="mx-auto mt-5 max-w-4xl text-base leading-8 text-gray-600 sm:text-lg">
                {copy.heroSubtitle}
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  href={estimateHref}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-yellow-400 px-7 py-4 text-sm font-black text-black shadow-lg transition hover:scale-[1.02]"
                >
                  {copy.primaryCta}
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-gray-300 bg-white px-7 py-4 text-sm font-bold text-black shadow-md transition hover:scale-[1.02]"
                >
                  <PhoneCall className="h-4 w-4" />
                  {copy.secondaryCta}
                </a>
              </div>

              <p className="mt-5 text-sm font-medium text-gray-500">
                {copy.heroNote}
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
              {trustPoints.map((point) => (
                <div
                  key={point.title}
                  className="rounded-2xl border border-yellow-400 bg-white p-6 shadow-md transition hover:scale-[1.02] hover:shadow-xl"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-400 text-black shadow-md">
                    {point.icon}
                  </div>
                  <h2 className="mt-4 text-lg font-black">{point.title}</h2>
                  <p className="mt-2 text-sm leading-7 text-gray-600">
                    {point.text}
                  </p>
                </div>
              ))}
            </div>

            <section className="mt-16">
              <div className="rounded-3xl border border-yellow-400 bg-white p-8 shadow-xl sm:p-10">
                <div className="text-center">
                  <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-yellow-50 px-4 py-1 text-xs font-bold">
                    <BadgeCheck className="h-4 w-4" />
                    {copy.servicesTitle}
                  </div>

                  <h2 className="mx-auto mt-4 max-w-4xl text-3xl font-black sm:text-4xl">
                    {copy.servicesTitle}
                  </h2>

                  <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-gray-600">
                    {isEs
                      ? "Samsung Frame no es una TV normal. El objetivo es que quede como un cuadro: recta, cerca de la pared y con el cableado lo más limpio posible."
                      : "Samsung Frame is not a normal TV. The goal is to make it look like a picture frame: straight, close to the wall and with cables as clean as possible."}
                  </p>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                  {services.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-yellow-400 bg-white p-6 shadow-md"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-400 text-black shadow-md">
                        {item.icon}
                      </div>
                      <h3 className="mt-5 text-lg font-black">{item.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-gray-600">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="mt-16">
              <div className="rounded-3xl border border-yellow-400 bg-white p-8 shadow-xl sm:p-10 lg:p-12">
                <div className="mx-auto max-w-5xl">
                  <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-yellow-50 px-4 py-1 text-xs font-bold">
                    <Star className="h-4 w-4" />
                    SEO • Samsung Frame Valencia
                  </div>

                  <h2 className="mt-5 text-3xl font-black sm:text-4xl">
                    {copy.seoTitle}
                  </h2>

                  <div className="mt-7 space-y-5 text-[15px] leading-8 text-gray-700 sm:text-base">
                    {isEs ? (
                      <>
                        <p>
                          Si buscas{" "}
                          <strong>
                            montaje de TV Samsung Frame en Valencia
                          </strong>
                          , THEVULGO ofrece una instalación pensada para mantener
                          el estilo decorativo de este modelo. Samsung Frame está
                          diseñada para parecer un cuadro, por eso el montaje
                          debe ser más preciso que una instalación de TV
                          tradicional.
                        </p>
                        <p>
                          Una Samsung Frame mal instalada puede quedar torcida,
                          demasiado separada de la pared o con el cable visible
                          de forma poco estética. Antes de perforar se revisa la
                          altura, el tipo de pared, el soporte, el tamaño de la
                          pantalla y la ubicación del One Connect Box.
                        </p>
                        <p>
                          Realizamos instalaciones en Valencia para salones,
                          dormitorios, oficinas, apartamentos turísticos y
                          locales. También podemos ayudar con la organización del
                          cable One Invisible Connection, canaletas, rutas limpias
                          y soluciones para que el resultado final se vea
                          ordenado.
                        </p>
                      </>
                    ) : (
                      <>
                        <p>
                          If you need{" "}
                          <strong>Samsung Frame TV mounting in Valencia</strong>,
                          THEVULGO provides an installation designed to preserve
                          the decorative style of this model. Samsung Frame is
                          made to look like a picture, so the mounting needs more
                          precision than a traditional TV installation.
                        </p>
                        <p>
                          A poorly installed Samsung Frame can look crooked, sit
                          too far from the wall or show the cable in an
                          unattractive way. Before drilling, the height, wall
                          type, bracket, screen size and One Connect Box location
                          are reviewed.
                        </p>
                        <p>
                          We install Samsung Frame TVs in Valencia for living
                          rooms, bedrooms, offices, tourist apartments and
                          commercial spaces. We can also help organize the One
                          Invisible Connection cable, raceways, clean routes and
                          visual cable solutions.
                        </p>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </section>

            <section className="mt-16">
              <div className="rounded-3xl border border-yellow-400 bg-white p-8 shadow-xl sm:p-10">
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr]">
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-yellow-50 px-4 py-1 text-xs font-bold">
                      <Wrench className="h-4 w-4" />
                      {copy.includedTitle}
                    </div>

                    <h2 className="mt-5 text-3xl font-black sm:text-4xl">
                      {copy.includedTitle}
                    </h2>

                    <p className="mt-4 text-base leading-8 text-gray-600">
                      {isEs
                        ? "El servicio está pensado para conseguir un montaje estable, nivelado y visualmente limpio."
                        : "The service is designed to achieve stable, level and visually clean mounting."}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    {included.map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-3 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm"
                      >
                        <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-yellow-500" />
                        <span className="text-sm leading-7 text-gray-700">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section className="mt-16">
              <div className="rounded-3xl border border-yellow-400 bg-white p-8 shadow-xl sm:p-10">
                <div className="text-center">
                  <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-yellow-50 px-4 py-1 text-xs font-bold">
                    <Box className="h-4 w-4" />
                    {copy.oneConnectTitle}
                  </div>

                  <h2 className="mx-auto mt-4 max-w-4xl text-3xl font-black sm:text-4xl">
                    {copy.oneConnectTitle}
                  </h2>
                </div>

                <div className="mx-auto mt-7 max-w-5xl space-y-5 text-[15px] leading-8 text-gray-700 sm:text-base">
                  {isEs ? (
                    <>
                      <p>
                        El sistema One Connect Box es una de las partes más
                        importantes en una instalación Samsung Frame. La caja debe
                        quedar en una ubicación accesible, ventilada y cómoda
                        para conectar HDMI, corriente, consola, decodificador o
                        sistema de sonido.
                      </p>
                      <p>
                        El cable One Invisible Connection ayuda a conseguir un
                        acabado más limpio, pero igualmente necesita
                        planificación. Según la pared y los muebles, se puede
                        usar canaleta, ruta limpia o una solución sencilla para
                        que el cable no arruine el aspecto decorativo de la TV.
                      </p>
                    </>
                  ) : (
                    <>
                      <p>
                        The One Connect Box is one of the most important parts of
                        a Samsung Frame installation. It should be placed in an
                        accessible, ventilated and convenient area for HDMI,
                        power, console, decoder or audio system connections.
                      </p>
                      <p>
                        The One Invisible Connection cable helps create a cleaner
                        finish, but it still needs planning. Depending on the
                        wall and furniture, a raceway, clean route or simple
                        visual solution can help keep the decorative look.
                      </p>
                    </>
                  )}
                </div>
              </div>
            </section>

            <section className="mt-16">
              <div className="rounded-3xl border border-yellow-400 bg-white p-8 shadow-xl sm:p-10">
                <div className="text-center">
                  <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-yellow-50 px-4 py-1 text-xs font-bold">
                    <Layers className="h-4 w-4" />
                    {copy.wallTitle}
                  </div>

                  <h2 className="mx-auto mt-4 max-w-4xl text-3xl font-black sm:text-4xl">
                    {copy.wallTitle}
                  </h2>

                  <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-gray-600">
                    {isEs
                      ? "Cada pared necesita una estrategia diferente para montar una Samsung Frame de forma segura."
                      : "Every wall needs a different strategy to mount a Samsung Frame safely."}
                  </p>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
                  {wallTypes.map((wall) => (
                    <div
                      key={wall.title}
                      className="rounded-2xl border border-yellow-400 bg-white p-6 shadow-md"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-400 text-black shadow-md">
                        {wall.icon}
                      </div>
                      <h3 className="mt-5 text-lg font-black">{wall.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-gray-600">
                        {wall.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="mt-16">
              <div className="rounded-3xl border border-yellow-400 bg-white p-8 shadow-xl sm:p-10">
                <div className="text-center">
                  <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-yellow-50 px-4 py-1 text-xs font-bold">
                    <Monitor className="h-4 w-4" />
                    {copy.sizeTitle}
                  </div>

                  <h2 className="mx-auto mt-4 max-w-4xl text-3xl font-black sm:text-4xl">
                    {copy.sizeTitle}
                  </h2>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                  {sizes.map((size) => (
                    <div
                      key={size.title}
                      className="rounded-2xl border border-yellow-400 bg-white p-6 shadow-md"
                    >
                      <h3 className="text-lg font-black">{size.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-gray-600">
                        {size.text}
                      </p>
                      <div className="mt-4 text-sm font-black text-yellow-500">
                        {size.price}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="mt-16">
              <div className="rounded-3xl border border-yellow-400 bg-white p-8 shadow-xl sm:p-10">
                <div className="text-center">
                  <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-yellow-50 px-4 py-1 text-xs font-bold">
                    <Clock3 className="h-4 w-4" />
                    {copy.processTitle}
                  </div>

                  <h2 className="mx-auto mt-4 max-w-4xl text-3xl font-black sm:text-4xl">
                    {copy.processTitle}
                  </h2>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                  {process.map((item) => (
                    <div
                      key={item.step}
                      className="rounded-2xl border border-yellow-400 bg-white p-6 shadow-md"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-400 text-black shadow-md">
                          {item.icon}
                        </div>
                        <span className="text-3xl font-black text-yellow-200">
                          {item.step}
                        </span>
                      </div>
                      <h3 className="mt-5 text-lg font-black">{item.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-gray-600">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="mt-16">
              <div className="rounded-3xl border border-yellow-400 bg-white p-8 shadow-xl sm:p-10">
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.2fr]">
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-yellow-50 px-4 py-1 text-xs font-bold">
                      <MapPin className="h-4 w-4" />
                      {isEs ? "Zonas de Valencia" : "Valencia areas"}
                    </div>

                    <h2 className="mt-5 text-3xl font-black sm:text-4xl">
                      {isEs
                        ? "Montaje Samsung Frame en Valencia y alrededores"
                        : "Samsung Frame mounting in Valencia and nearby areas"}
                    </h2>

                    <p className="mt-4 text-base leading-8 text-gray-600">
                      {isEs
                        ? "Trabajamos en Valencia ciudad y zonas cercanas. Si estás fuera, envía ubicación por WhatsApp."
                        : "We work in Valencia city and nearby areas. If you are outside, send your location by WhatsApp."}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
                    {areas.map((area) => (
                      <div
                        key={area}
                        className="rounded-2xl border border-gray-200 bg-white px-4 py-3 text-center text-sm font-bold text-gray-700 shadow-sm"
                      >
                        {area}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section className="mt-16">
              <div className="rounded-3xl border border-yellow-400 bg-white p-8 shadow-xl sm:p-10">
                <div className="text-center">
                  <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-yellow-50 px-4 py-1 text-xs font-bold">
                    <ArrowRight className="h-4 w-4" />
                    {copy.linksTitle}
                  </div>

                  <h2 className="mx-auto mt-4 max-w-4xl text-3xl font-black sm:text-4xl">
                    {copy.linksTitle}
                  </h2>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
                  {relatedLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="group flex items-center justify-between rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:border-yellow-400 hover:shadow-md"
                    >
                      <span className="text-sm font-black">{link.label}</span>
                      <ArrowRight className="h-4 w-4 text-gray-400 transition group-hover:text-yellow-500" />
                    </Link>
                  ))}
                </div>
              </div>
            </section>

            <section className="mt-16">
              <div className="rounded-3xl border border-yellow-400 bg-white p-8 shadow-xl sm:p-10">
                <div className="mx-auto max-w-5xl">
                  <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-yellow-50 px-4 py-1 text-xs font-bold">
                    <HelpCircle className="h-4 w-4" />
                    {copy.faqTitle}
                  </div>

                  <h2 className="mt-5 text-3xl font-black sm:text-4xl">
                    {copy.faqTitle}
                  </h2>

                  <div className="mt-10 space-y-7">
                    {faq.map((item, index) => (
                      <div
                        key={item.q}
                        className={
                          index === 0 ? "" : "border-t border-gray-200 pt-7"
                        }
                      >
                        <h3 className="text-lg font-black">{item.q}</h3>
                        <p className="mt-2 text-sm leading-7 text-gray-600 sm:text-base">
                          {item.a}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section className="mt-16">
              <div className="rounded-3xl border border-yellow-400 bg-white p-8 shadow-xl sm:p-10">
                <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
                  <div className="max-w-3xl">
                    <h2 className="text-3xl font-black sm:text-4xl">
                      {copy.finalTitle}
                    </h2>
                    <p className="mt-4 text-base leading-8 text-gray-600">
                      {copy.finalText}
                    </p>
                  </div>

                  <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                    <Link
                      href={estimateHref}
                      className="inline-flex items-center justify-center gap-2 rounded-2xl bg-yellow-400 px-7 py-4 text-sm font-black text-black shadow-lg transition hover:scale-[1.02]"
                    >
                      {copy.primaryCta}
                      <ArrowRight className="h-4 w-4" />
                    </Link>

                    <a
                      href={whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-2xl border border-gray-300 bg-white px-7 py-4 text-sm font-bold text-black shadow-md transition hover:scale-[1.02]"
                    >
                      <PhoneCall className="h-4 w-4" />
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </section>

            <div className="mt-10 text-center text-sm text-gray-500">
              {isEs
                ? "THEVULGO • Montaje Samsung Frame Valencia • Instalador TV Valencia • Ocultación de cables"
                : "THEVULGO • Samsung Frame Mounting Valencia • TV Installer Valencia • Cable concealment"}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}