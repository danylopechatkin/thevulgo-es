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
  HelpCircle,
  PhoneCall,
  Wrench,
  Hammer,
  Settings,
  Box,
  Paintbrush,
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
    ? "Instalar Samsung Frame Valencia | Montaje Profesional | THEVULGO"
    : "Install Samsung Frame Valencia | Professional Mounting | THEVULGO";

  const description = isEs
    ? "Instalar Samsung Frame en Valencia. Montaje profesional en pared, alineación precisa, One Connect Box, cable invisible, acabado tipo cuadro y ocultación de cables. Desde 69€."
    : "Install Samsung Frame in Valencia. Professional wall mounting, precise alignment, One Connect Box, invisible cable, picture-frame finish and cable concealment. From €69.";

  const url = `${baseUrl}/${locale}/instalar-samsung-frame-valencia`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        es: `${baseUrl}/es/instalar-samsung-frame-valencia`,
        en: `${baseUrl}/en/instalar-samsung-frame-valencia`,
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
          "instalar samsung frame valencia",
          "instalacion samsung frame valencia",
          "montaje samsung frame valencia",
          "montaje tv samsung frame valencia",
          "colgar samsung frame valencia",
          "instalador samsung frame valencia",
          "samsung frame pared valencia",
          "one connect box samsung frame valencia",
          "cable invisible samsung frame valencia",
          "ocultar cables samsung frame valencia",
        ]
      : [
          "install samsung frame valencia",
          "samsung frame installation valencia",
          "samsung frame mounting valencia",
          "samsung frame wall mount valencia",
          "samsung frame installer valencia",
          "one connect box samsung frame valencia",
        ],
  };
}

export default async function Page({ params }: Props) {
  const { locale } = await params;
  const isEs = locale === "es";

  const pageUrl = `${baseUrl}/${locale}/instalar-samsung-frame-valencia`;
  const estimateHref = `/${locale}/estimate?category=tv-mounting`;

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, necesito instalar una Samsung Frame en Valencia. Me gustaría pedir presupuesto."
      : "Hi! I need to install a Samsung Frame in Valencia. I’d like an estimate."
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
      "El Carmen",
      "Campanar",
      "Benimaclet",
      "Patraix",
      "Mislata",
      "Burjassot",
      "Paterna",
      "Torrent",
      "Alboraya",
      "Manises",
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${pageUrl}#service`,
    name: isEs
      ? "Instalar Samsung Frame en Valencia"
      : "Install Samsung Frame in Valencia",
    serviceType: isEs
      ? "Instalación Samsung Frame"
      : "Samsung Frame installation",
    provider: {
      "@id": `${baseUrl}/#localbusiness`,
    },
    areaServed: {
      "@type": "City",
      name: "Valencia",
    },
    url: pageUrl,
    description: isEs
      ? "Servicio profesional para instalar Samsung Frame en Valencia con montaje en pared, alineación precisa, One Connect Box, cable invisible y acabado limpio."
      : "Professional service to install Samsung Frame in Valencia with wall mounting, precise alignment, One Connect Box, invisible cable and clean finish.",
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
          ? "¿Cuánto cuesta instalar una Samsung Frame en Valencia?"
          : "How much does it cost to install a Samsung Frame in Valencia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: isEs
            ? "Instalar una Samsung Frame en Valencia empieza desde 69 €. El precio final depende del tamaño, tipo de pared, soporte, ubicación del One Connect Box y ocultación de cables."
            : "Installing a Samsung Frame in Valencia starts from €69. Final price depends on size, wall type, bracket, One Connect Box location and cable concealment.",
        },
      },
      {
        "@type": "Question",
        name: isEs
          ? "¿Se puede instalar Samsung Frame con el cable oculto?"
          : "Can Samsung Frame be installed with the cable hidden?",
        acceptedAnswer: {
          "@type": "Answer",
          text: isEs
            ? "Sí. Se puede mejorar el acabado con canaleta, ruta limpia o planificación del One Connect Box según la pared, enchufes y muebles."
            : "Yes. The finish can be improved with raceways, clean routing or One Connect Box planning depending on wall, outlets and furniture.",
        },
      },
      {
        "@type": "Question",
        name: isEs
          ? "¿Samsung Frame se puede instalar en pladur?"
          : "Can Samsung Frame be installed on drywall?",
        acceptedAnswer: {
          "@type": "Answer",
          text: isEs
            ? "Sí, pero hay que revisar estructura, peso, soporte y puntos de fijación. En algunos casos puede ser necesario refuerzo."
            : "Yes, but structure, weight, bracket and fixing points must be checked. Reinforcement may be needed in some cases.",
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
          ? "Instalar Samsung Frame Valencia"
          : "Install Samsung Frame Valencia",
        item: pageUrl,
      },
    ],
  };

  const copy = {
    badge: isEs
      ? "THEVULGO • Instalar Samsung Frame Valencia"
      : "THEVULGO • Install Samsung Frame Valencia",

    heroTitle: isEs
      ? "Instalar Samsung Frame en Valencia"
      : "Install Samsung Frame in Valencia",

    heroSubtitle: isEs
      ? "Instalación profesional de Samsung Frame en pared con acabado tipo cuadro. Alineación precisa, soporte bien nivelado, planificación del One Connect Box, cable invisible y resultado limpio."
      : "Professional Samsung Frame wall installation with picture-frame finish. Precise alignment, level bracket, One Connect Box planning, invisible cable and clean result.",

    primaryCta: isEs ? "Pedir presupuesto" : "Get estimate",

    secondaryCta: isEs ? "WhatsApp rápido" : "Quick WhatsApp",

    heroNote: isEs
      ? "Desde 69 €. Precio final según tamaño, pared, soporte, cableado y dificultad."
      : "From €69. Final price depends on size, wall, bracket, cabling and complexity.",

    servicesTitle: isEs
      ? "Servicio para instalar Samsung Frame"
      : "Samsung Frame installation service",

    seoTitle: isEs
      ? "Instalación Samsung Frame con acabado tipo cuadro"
      : "Samsung Frame installation with picture-frame finish",

    includedTitle: isEs ? "Qué incluye el servicio" : "What is included",

    processTitle: isEs ? "Cómo funciona" : "How it works",

    wallTitle: isEs
      ? "Instalación según tipo de pared"
      : "Installation by wall type",

    oneConnectTitle: isEs
      ? "One Connect Box y cable invisible"
      : "One Connect Box and invisible cable",

    heightTitle: isEs
      ? "Altura ideal para Samsung Frame"
      : "Ideal height for Samsung Frame",

    areasTitle: isEs ? "Zonas de Valencia" : "Valencia areas",

    linksTitle: isEs ? "Servicios relacionados" : "Related services",

    faqTitle: isEs
      ? "Preguntas frecuentes sobre instalar Samsung Frame"
      : "Install Samsung Frame FAQ",

    finalTitle: isEs
      ? "¿Quieres instalar tu Samsung Frame?"
      : "Want to install your Samsung Frame?",

    finalText: isEs
      ? "Envía fotos de la pared, TV, soporte, enchufes y zona del One Connect Box por WhatsApp para recibir una estimación clara."
      : "Send photos of the wall, TV, bracket, outlets and One Connect Box area by WhatsApp to receive a clear estimate.",
  };

  const trustPoints = [
    {
      title: isEs ? "Acabado tipo cuadro" : "Picture-frame finish",
      text: isEs
        ? "Samsung Frame debe quedar recta, centrada y visualmente integrada con la pared."
        : "Samsung Frame should be straight, centered and visually integrated with the wall.",
      icon: <Paintbrush className="h-5 w-5" />,
    },
    {
      title: isEs ? "One Connect Box" : "One Connect Box",
      text: isEs
        ? "Se planifica dónde colocar la caja para que el resultado sea limpio y funcional."
        : "The box location is planned so the result is clean and functional.",
      icon: <Box className="h-5 w-5" />,
    },
    {
      title: isEs ? "Montaje seguro" : "Safe mounting",
      text: isEs
        ? "Fijación adecuada según pared, soporte, peso y tamaño de pantalla."
        : "Suitable fixing based on wall, bracket, weight and screen size.",
      icon: <ShieldCheck className="h-5 w-5" />,
    },
  ];

  const services = [
    {
      title: isEs ? "Instalar Samsung Frame" : "Install Samsung Frame",
      text: isEs
        ? "Montaje en pared con soporte compatible, medición y nivelación precisa."
        : "Wall mounting with compatible bracket, measuring and precise levelling.",
      icon: <Tv className="h-5 w-5" />,
    },
    {
      title: isEs ? "Cable invisible" : "Invisible cable",
      text: isEs
        ? "Organización del cable One Invisible Connection para un resultado más limpio."
        : "Organization of the One Invisible Connection cable for a cleaner result.",
      icon: <Cable className="h-5 w-5" />,
    },
    {
      title: isEs ? "One Connect Box" : "One Connect Box",
      text: isEs
        ? "Ubicación práctica para conectar HDMI, corriente, consola, deco o sonido."
        : "Practical location for HDMI, power, console, decoder or audio connections.",
      icon: <Box className="h-5 w-5" />,
    },
    {
      title: isEs ? "Alineación decorativa" : "Decorative alignment",
      text: isEs
        ? "Samsung Frame debe verse como un cuadro, no como una TV mal colocada."
        : "Samsung Frame should look like a picture, not like a poorly placed TV.",
      icon: <Ruler className="h-5 w-5" />,
    },
  ];

  const included = isEs
    ? [
        "Instalación de Samsung Frame en pared",
        "Medición de altura y posición visual",
        "Nivelación precisa del soporte",
        "Revisión del tipo de pared",
        "Instalación en ladrillo, hormigón o pladur revisado",
        "Planificación del One Connect Box",
        "Organización del cable One Invisible Connection",
        "Consejo según tamaño de pantalla",
        "Instalación para salón, dormitorio, oficina o local",
        "Opciones para ocultar cables",
        "Comprobación final de estabilidad y alineación",
        "Presupuesto claro antes de reservar",
      ]
    : [
        "Samsung Frame wall installation",
        "Height and visual position measurement",
        "Precise bracket levelling",
        "Wall type check",
        "Installation on brick, concrete or checked drywall",
        "One Connect Box planning",
        "One Invisible Connection cable organization",
        "Advice based on screen size",
        "Installation for living room, bedroom, office or unit",
        "Cable concealment options",
        "Final stability and alignment check",
        "Clear estimate before booking",
      ];

  const process = [
    {
      step: "01",
      title: isEs ? "Envía fotos" : "Send photos",
      text: isEs
        ? "Foto de la pared, Samsung Frame, soporte, enchufes y ubicación del One Connect Box."
        : "Photo of the wall, Samsung Frame, bracket, outlets and One Connect Box location.",
      icon: <PhoneCall className="h-5 w-5" />,
    },
    {
      step: "02",
      title: isEs ? "Revisión" : "Review",
      text: isEs
        ? "Se revisa pared, tamaño, soporte, cable, caja One Connect y dificultad."
        : "Wall, size, bracket, cable, One Connect Box and complexity are reviewed.",
      icon: <Eye className="h-5 w-5" />,
    },
    {
      step: "03",
      title: isEs ? "Instalación" : "Installation",
      text: isEs
        ? "Se mide, nivela, perfora y se instala la Samsung Frame con cuidado."
        : "Samsung Frame is measured, levelled, drilled and installed carefully.",
      icon: <Drill className="h-5 w-5" />,
    },
    {
      step: "04",
      title: isEs ? "Acabado" : "Finish",
      text: isEs
        ? "Se revisa alineación, estabilidad, cableado y resultado visual final."
        : "Alignment, stability, cabling and final visual result are checked.",
      icon: <CheckCircle2 className="h-5 w-5" />,
    },
  ];

  const wallTypes = [
    {
      title: isEs ? "Pared de ladrillo" : "Brick wall",
      text: isEs
        ? "Muy habitual en Valencia. Permite una fijación sólida con tacos adecuados."
        : "Very common in Valencia. Allows solid fixing with suitable anchors.",
      icon: <Home className="h-5 w-5" />,
    },
    {
      title: isEs ? "Pared de hormigón" : "Concrete wall",
      text: isEs
        ? "Opción fuerte y estable, pero necesita perforación correcta y medición precisa."
        : "Strong and stable option, but needs correct drilling and precise measuring.",
      icon: <Building2 className="h-5 w-5" />,
    },
    {
      title: isEs ? "Pared de pladur" : "Drywall wall",
      text: isEs
        ? "Debe revisarse según estructura, peso, soporte y puntos de fijación."
        : "Must be checked based on structure, weight, bracket and fixing points.",
      icon: <Layers className="h-5 w-5" />,
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
      label: isEs ? "Montaje Samsung Frame Valencia" : "Samsung Frame mounting Valencia",
      href: `/${locale}/montaje-tv-samsung-frame-valencia`,
    },
    {
      label: isEs ? "Montaje TV Valencia" : "TV mounting Valencia",
      href: `/${locale}/montaje-tv-valencia`,
    },
    {
      label: isEs ? "Instalador TV Valencia" : "TV installer Valencia",
      href: `/${locale}/instalador-tv-valencia`,
    },
    {
      label: isEs ? "Instalar TV en pared" : "Install TV on wall",
      href: `/${locale}/instalar-tv-pared-valencia`,
    },
    {
      label: isEs ? "Ocultar cables TV" : "Hide TV cables",
      href: `/${locale}/ocultar-cables-valencia`,
    },
    {
      label: isEs ? "Instalación soporte TV" : "TV bracket installation",
      href: `/${locale}/instalacion-soporte-tv-valencia`,
    },
    {
      label: isEs ? "Instalar soundbar Valencia" : "Soundbar mounting Valencia",
      href: `/${locale}/instalar-soundbar-valencia`,
    },
    {
      label: isEs ? "Montaje TV 65 pulgadas" : "65 inch TV mounting",
      href: `/${locale}/montaje-tv-65-pulgadas-valencia`,
    },
  ];

  const faq = isEs
    ? [
        {
          q: "¿Cuánto cuesta instalar una Samsung Frame en Valencia?",
          a: "Instalar una Samsung Frame empieza desde 69 €. El precio final depende del tamaño, pared, soporte, One Connect Box, cableado y dificultad.",
        },
        {
          q: "¿Samsung Frame necesita instalación especial?",
          a: "Sí. Está diseñada para quedar como un cuadro, por eso la alineación, altura, soporte y cableado son muy importantes.",
        },
        {
          q: "¿Se puede ocultar el cable invisible?",
          a: "Sí. Se puede organizar con canaleta, ruta limpia o planificación del One Connect Box según la pared, enchufes y muebles.",
        },
        {
          q: "¿Dónde se coloca el One Connect Box?",
          a: "Normalmente en un mueble, estantería o zona cercana con ventilación, acceso a corriente y conexión a dispositivos.",
        },
        {
          q: "¿Se puede instalar Samsung Frame en pladur?",
          a: "Sí, pero hay que revisar estructura, peso y fijaciones. En algunos casos puede ser necesario refuerzo.",
        },
        {
          q: "¿Instaláis Samsung Frame grande?",
          a: "Sí. Se pueden instalar diferentes tamaños, pero las pantallas grandes requieren más cuidado y revisión de pared.",
        },
        {
          q: "¿Tengo que comprar el soporte?",
          a: "Samsung Frame normalmente incluye un sistema específico, pero conviene enviar foto del soporte antes de la cita.",
        },
        {
          q: "¿Trabajáis en Valencia y alrededores?",
          a: "Sí. Valencia ciudad y zonas cercanas como Ruzafa, Campanar, Benimaclet, Mislata, Paterna, Torrent y alrededores.",
        },
      ]
    : [
        {
          q: "How much does it cost to install a Samsung Frame in Valencia?",
          a: "Installing a Samsung Frame starts from €69. Final price depends on size, wall, bracket, One Connect Box, cabling and complexity.",
        },
        {
          q: "Does Samsung Frame need special installation?",
          a: "Yes. It is designed to look like a picture, so alignment, height, bracket and cabling are very important.",
        },
        {
          q: "Can the invisible cable be hidden?",
          a: "Yes. It can be organized with raceways, clean routing or One Connect Box planning depending on wall, outlets and furniture.",
        },
        {
          q: "Where is the One Connect Box placed?",
          a: "Usually in furniture, a shelf or nearby area with ventilation, power access and device connections.",
        },
        {
          q: "Can Samsung Frame be installed on drywall?",
          a: "Yes, but structure, weight and fixings must be checked. Reinforcement may be needed in some cases.",
        },
        {
          q: "Do you install large Samsung Frame TVs?",
          a: "Yes. Different sizes can be installed, but large screens need more care and wall checking.",
        },
        {
          q: "Do I need to buy the bracket?",
          a: "Samsung Frame usually includes a specific system, but it is best to send a photo of the bracket before the appointment.",
        },
        {
          q: "Do you work in Valencia and nearby areas?",
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
                      ? "Samsung Frame necesita una instalación más precisa que una TV normal porque está pensada para quedar como un cuadro. La altura, el nivel, el cable invisible y la posición del One Connect Box cambian todo el resultado."
                      : "Samsung Frame needs a more precise installation than a normal TV because it is designed to look like a picture. Height, level, invisible cable and One Connect Box position change the whole result."}
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
                    SEO • Instalar Samsung Frame Valencia
                  </div>

                  <h2 className="mt-5 text-3xl font-black sm:text-4xl">
                    {copy.seoTitle}
                  </h2>

                  <div className="mt-7 space-y-5 text-[15px] leading-8 text-gray-700 sm:text-base">
                    {isEs ? (
                      <>
                        <p>
                          Si buscas{" "}
                          <strong>instalar Samsung Frame en Valencia</strong>,
                          THEVULGO ofrece un servicio profesional para montar la
                          televisión en pared con acabado limpio, alineación
                          precisa y planificación del cableado.
                        </p>
                        <p>
                          Samsung Frame está diseñada para integrarse con la
                          decoración como si fuera un cuadro. Por eso una
                          instalación incorrecta puede arruinar el efecto visual:
                          pantalla torcida, cable visible, caja One Connect mal
                          ubicada o altura poco cómoda.
                        </p>
                        <p>
                          Antes de perforar se revisa la pared, el soporte, el
                          tamaño de la pantalla, la altura ideal, el cable One
                          Invisible Connection, la ubicación del One Connect Box
                          y la posición de enchufes.
                        </p>
                      </>
                    ) : (
                      <>
                        <p>
                          If you need to{" "}
                          <strong>install Samsung Frame in Valencia</strong>,
                          THEVULGO provides a professional service to mount the
                          TV on the wall with clean finish, precise alignment and
                          cable planning.
                        </p>
                        <p>
                          Samsung Frame is designed to integrate with decoration
                          like a picture. A poor installation can ruin the visual
                          effect: crooked screen, visible cable, badly placed One
                          Connect Box or uncomfortable height.
                        </p>
                        <p>
                          Before drilling, the wall, bracket, screen size, ideal
                          height, One Invisible Connection cable, One Connect Box
                          location and outlet position are checked.
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
                        ? "El objetivo es dejar tu Samsung Frame instalada de forma segura, recta y visualmente elegante."
                        : "The goal is to leave your Samsung Frame installed safely, straight and visually elegant."}
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
                        El One Connect Box debe colocarse en una zona práctica,
                        accesible y ventilada. Es importante pensar dónde irán
                        HDMI, corriente, consola, router, decodificador, soundbar
                        o sistema de sonido.
                      </p>
                      <p>
                        El cable One Invisible Connection ayuda a crear un
                        resultado mucho más limpio, pero igualmente hay que
                        planificar la ruta. Según la pared y los muebles, se puede
                        usar canaleta, una ruta limpia o una solución sencilla
                        para que no se vea desordenado.
                      </p>
                    </>
                  ) : (
                    <>
                      <p>
                        The One Connect Box should be placed in a practical,
                        accessible and ventilated area. HDMI, power, console,
                        router, decoder, soundbar or audio system placement should
                        be considered.
                      </p>
                      <p>
                        The One Invisible Connection cable helps create a much
                        cleaner result, but the route still needs planning.
                        Depending on wall and furniture, raceways, clean routing
                        or a simple visual solution can be used.
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
                      ? "La pared debe revisarse antes de instalar Samsung Frame. No todas las paredes permiten el mismo tipo de fijación."
                      : "The wall should be checked before installing Samsung Frame. Not every wall allows the same fixing type."}
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
              <div className="rounded-3xl border border-yellow-400 bg-white p-8 shadow-xl sm:p-10 lg:p-12">
                <div className="mx-auto max-w-5xl">
                  <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-yellow-50 px-4 py-1 text-xs font-bold">
                    <Ruler className="h-4 w-4" />
                    {copy.heightTitle}
                  </div>

                  <h2 className="mt-5 text-3xl font-black sm:text-4xl">
                    {copy.heightTitle}
                  </h2>

                  <div className="mt-6 space-y-5 text-[15px] leading-8 text-gray-700 sm:text-base">
                    {isEs ? (
                      <>
                        <p>
                          La altura de una Samsung Frame debe elegirse con más
                          cuidado que en una TV normal. Como debe parecer un
                          cuadro, la posición debe estar equilibrada con sofá,
                          mueble, pared y decoración.
                        </p>
                        <p>
                          Antes de perforar se marca la posición para confirmar
                          que la pantalla queda centrada, recta y cómoda para
                          ver, pero también estética cuando está en modo arte.
                        </p>
                      </>
                    ) : (
                      <>
                        <p>
                          The height of a Samsung Frame should be chosen more
                          carefully than a normal TV. Because it should look like
                          a picture, the position must be balanced with sofa,
                          furniture, wall and decoration.
                        </p>
                        <p>
                          Before drilling, the position is marked to confirm that
                          the screen is centered, straight and comfortable to
                          watch, while still looking aesthetic in art mode.
                        </p>
                      </>
                    )}
                  </div>
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
                      {copy.areasTitle}
                    </div>

                    <h2 className="mt-5 text-3xl font-black sm:text-4xl">
                      {isEs
                        ? "Instalar Samsung Frame en Valencia y alrededores"
                        : "Install Samsung Frame in Valencia and nearby areas"}
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
                ? "THEVULGO • Instalar Samsung Frame Valencia • Montaje Samsung Frame • Instalador TV Valencia"
                : "THEVULGO • Install Samsung Frame Valencia • Samsung Frame Mounting • TV Installer Valencia"}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}