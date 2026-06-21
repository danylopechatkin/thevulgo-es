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
    ? "Montaje TV 65 Pulgadas Valencia | Instalación Profesional | THEVULGO"
    : "65 Inch TV Mounting Valencia | Professional Installation | THEVULGO";

  const description = isEs
    ? "Montaje profesional de TV de 65 pulgadas en Valencia. Instalación segura en pared, soporte fijo o articulado, revisión de pared, nivelación precisa y ocultación de cables. Desde 59€."
    : "Professional 65 inch TV mounting in Valencia. Safe wall installation, fixed or full-motion bracket, wall check, precise levelling and cable concealment. From €59.";

  const url = `${baseUrl}/${locale}/montaje-tv-65-pulgadas-valencia`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        es: `${baseUrl}/es/montaje-tv-65-pulgadas-valencia`,
        en: `${baseUrl}/en/montaje-tv-65-pulgadas-valencia`,
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
          "montaje tv 65 pulgadas valencia",
          "instalar tv 65 pulgadas valencia",
          "colgar tv 65 pulgadas valencia",
          "montar tv 65 valencia",
          "instalador tv 65 pulgadas valencia",
          "tv 65 pulgadas pared valencia",
          "montaje tv grande valencia",
          "soporte tv 65 pulgadas valencia",
          "ocultar cables tv 65 valencia",
          "montaje tv valencia",
        ]
      : [
          "65 inch tv mounting valencia",
          "install 65 inch tv valencia",
          "hang 65 inch tv valencia",
          "large tv mounting valencia",
          "tv installer valencia",
          "65 inch tv wall mount valencia",
        ],
  };
}

export default async function Page({ params }: Props) {
  const { locale } = await params;
  const isEs = locale === "es";

  const pageUrl = `${baseUrl}/${locale}/montaje-tv-65-pulgadas-valencia`;
  const estimateHref = `/${locale}/estimate?category=tv-mounting`;

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, necesito montar una TV de 65 pulgadas en Valencia. Me gustaría pedir presupuesto."
      : "Hi! I need to mount a 65 inch TV in Valencia. I’d like an estimate."
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
      ? "Montaje de TV 65 pulgadas en Valencia"
      : "65 Inch TV Mounting in Valencia",
    serviceType: isEs ? "Montaje de TV grande" : "Large TV mounting",
    provider: {
      "@id": `${baseUrl}/#localbusiness`,
    },
    areaServed: {
      "@type": "City",
      name: "Valencia",
    },
    url: pageUrl,
    description: isEs
      ? "Servicio profesional para montar televisores de 65 pulgadas en pared en Valencia con soporte compatible, fijación segura, nivelación precisa y acabado limpio."
      : "Professional service to mount 65 inch TVs on the wall in Valencia with compatible bracket, secure fixing, precise levelling and clean finish.",
    offers: {
      "@type": "Offer",
      priceCurrency: "EUR",
      price: "59",
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
          ? "¿Cuánto cuesta montar una TV de 65 pulgadas en Valencia?"
          : "How much does it cost to mount a 65 inch TV in Valencia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: isEs
            ? "El montaje de una TV de 65 pulgadas empieza desde 59 €. El precio final depende del tipo de pared, soporte, altura, ocultación de cables y dificultad del trabajo."
            : "65 inch TV mounting starts from €59. The final price depends on wall type, bracket, height, cable concealment and job complexity.",
        },
      },
      {
        "@type": "Question",
        name: isEs
          ? "¿Se puede montar una TV de 65 pulgadas en pladur?"
          : "Can a 65 inch TV be mounted on drywall?",
        acceptedAnswer: {
          "@type": "Answer",
          text: isEs
            ? "Sí, pero hay que revisar la estructura, peso de la TV, soporte y puntos de fijación. En algunos casos puede ser necesario refuerzo."
            : "Yes, but the structure, TV weight, bracket and fixing points must be checked. Reinforcement may be needed in some cases.",
        },
      },
      {
        "@type": "Question",
        name: isEs
          ? "¿Qué soporte necesito para una TV de 65 pulgadas?"
          : "What bracket do I need for a 65 inch TV?",
        acceptedAnswer: {
          "@type": "Answer",
          text: isEs
            ? "Necesitas un soporte compatible con el peso, tamaño y VESA de la TV. Puede ser fijo, inclinable o articulado según el uso."
            : "You need a bracket compatible with the TV weight, size and VESA. It can be fixed, tilting or full-motion depending on use.",
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
        name: isEs ? "Montaje TV 65 pulgadas" : "65 Inch TV Mounting",
        item: pageUrl,
      },
    ],
  };

  const copy = {
    badge: isEs
      ? "THEVULGO • TV 65 pulgadas Valencia"
      : "THEVULGO • 65 inch TV Valencia",

    heroTitle: isEs
      ? "Montaje de TV 65 pulgadas en Valencia"
      : "65 Inch TV Mounting in Valencia",

    heroSubtitle: isEs
      ? "Instalación profesional de televisores de 65 pulgadas en pared. Montaje seguro, soporte compatible, revisión de pared, nivelación precisa, altura correcta y opción de ocultar cables."
      : "Professional 65 inch TV wall installation. Safe mounting, compatible bracket, wall check, precise levelling, correct height and cable concealment options.",

    primaryCta: isEs ? "Pedir presupuesto" : "Get estimate",

    secondaryCta: isEs ? "WhatsApp rápido" : "Quick WhatsApp",

    heroNote: isEs
      ? "Desde 59 €. Precio final según pared, soporte, altura, cableado y dificultad."
      : "From €59. Final price depends on wall, bracket, height, cabling and complexity.",

    servicesTitle: isEs
      ? "Servicio para montar TV de 65 pulgadas"
      : "65 inch TV mounting service",

    seoTitle: isEs
      ? "Instalación segura para TVs de 65 pulgadas"
      : "Safe installation for 65 inch TVs",

    includedTitle: isEs ? "Qué incluye el servicio" : "What is included",

    processTitle: isEs ? "Cómo funciona" : "How it works",

    wallTitle: isEs
      ? "Pared adecuada para una TV de 65 pulgadas"
      : "Suitable wall for a 65 inch TV",

    bracketTitle: isEs
      ? "Soporte correcto para TV de 65 pulgadas"
      : "Correct bracket for 65 inch TV",

    heightTitle: isEs
      ? "Altura ideal para una TV de 65 pulgadas"
      : "Ideal height for a 65 inch TV",

    cableTitle: isEs ? "Ocultación de cables" : "Cable concealment",

    areasTitle: isEs ? "Zonas de Valencia" : "Valencia areas",

    linksTitle: isEs ? "Servicios relacionados" : "Related services",

    faqTitle: isEs
      ? "Preguntas frecuentes sobre montaje TV 65 pulgadas"
      : "65 inch TV mounting FAQ",

    finalTitle: isEs
      ? "¿Quieres montar una TV de 65 pulgadas?"
      : "Want to mount a 65 inch TV?",

    finalText: isEs
      ? "Envía fotos de la pared, TV, soporte y zona de enchufes por WhatsApp para recibir una estimación clara antes de reservar."
      : "Send photos of the wall, TV, bracket and outlet area by WhatsApp to receive a clear estimate before booking.",
  };

  const trustPoints = [
    {
      title: isEs ? "Tamaño popular" : "Popular size",
      text: isEs
        ? "Una TV de 65 pulgadas es ideal para salones y necesita buena altura y centrado."
        : "A 65 inch TV is ideal for living rooms and needs good height and centering.",
      icon: <Monitor className="h-5 w-5" />,
    },
    {
      title: isEs ? "Fijación segura" : "Secure fixing",
      text: isEs
        ? "Se revisa pared, soporte, peso y puntos de anclaje antes de montar."
        : "Wall, bracket, weight and fixing points are checked before mounting.",
      icon: <ShieldCheck className="h-5 w-5" />,
    },
    {
      title: isEs ? "Acabado limpio" : "Clean finish",
      text: isEs
        ? "Instalación nivelada, centrada y con cables más ordenados si es posible."
        : "Level, centered installation with cleaner cables where possible.",
      icon: <CheckCircle2 className="h-5 w-5" />,
    },
  ];

  const services = [
    {
      title: isEs ? "Montaje TV 65 pulgadas" : "65 inch TV mounting",
      text: isEs
        ? "Instalación completa de TV en pared con medición y nivelación precisa."
        : "Complete TV wall installation with precise measuring and levelling.",
      icon: <Tv className="h-5 w-5" />,
    },
    {
      title: isEs ? "Soporte fijo o inclinable" : "Fixed or tilting bracket",
      text: isEs
        ? "Buena opción para dejar la TV estable, cerca de la pared y cómoda para ver."
        : "Good option to keep the TV stable, close to the wall and comfortable to watch.",
      icon: <Hammer className="h-5 w-5" />,
    },
    {
      title: isEs ? "Soporte articulado" : "Full-motion bracket",
      text: isEs
        ? "Permite mover la TV, girarla o separarla de la pared si el soporte y pared son adecuados."
        : "Allows the TV to move, turn or pull away from the wall if bracket and wall are suitable.",
      icon: <Settings className="h-5 w-5" />,
    },
    {
      title: isEs ? "Ocultar cables" : "Hide cables",
      text: isEs
        ? "Canaleta, ruta limpia o cable management para mejorar el aspecto final."
        : "Raceway, clean route or cable management to improve the final look.",
      icon: <Cable className="h-5 w-5" />,
    },
  ];

  const included = isEs
    ? [
        "Montaje de TV de 65 pulgadas en pared",
        "Revisión del tipo de pared antes de perforar",
        "Montaje de soporte fijo, inclinable o articulado",
        "Medición de altura ideal para salón o dormitorio",
        "Nivelación y centrado visual de la pantalla",
        "Instalación en ladrillo, hormigón o pladur revisado",
        "Revisión de compatibilidad del soporte",
        "Opciones para ocultar cables",
        "Instalación para casas, pisos, oficinas y locales",
        "Comprobación final de estabilidad",
        "Presupuesto claro antes de reservar",
      ]
    : [
        "65 inch TV wall mounting",
        "Wall type check before drilling",
        "Fixed, tilting or full-motion bracket mounting",
        "Ideal height measurement for living room or bedroom",
        "Screen levelling and visual centering",
        "Installation on brick, concrete or checked drywall",
        "Bracket compatibility check",
        "Cable concealment options",
        "Installation for homes, apartments, offices and units",
        "Final stability check",
        "Clear estimate before booking",
      ];

  const process = [
    {
      step: "01",
      title: isEs ? "Envía fotos" : "Send photos",
      text: isEs
        ? "Foto de la TV, soporte, pared, enchufes y zona donde quieres instalarla."
        : "Photo of the TV, bracket, wall, outlets and desired installation area.",
      icon: <PhoneCall className="h-5 w-5" />,
    },
    {
      step: "02",
      title: isEs ? "Revisión" : "Review",
      text: isEs
        ? "Se revisa tamaño, pared, soporte, altura y posible ocultación de cables."
        : "Size, wall, bracket, height and possible cable concealment are reviewed.",
      icon: <Eye className="h-5 w-5" />,
    },
    {
      step: "03",
      title: isEs ? "Montaje" : "Mounting",
      text: isEs
        ? "Se mide, nivela, perfora y se instala la TV de 65 pulgadas con cuidado."
        : "The 65 inch TV is measured, levelled, drilled and mounted carefully.",
      icon: <Drill className="h-5 w-5" />,
    },
    {
      step: "04",
      title: isEs ? "Comprobación" : "Final check",
      text: isEs
        ? "Se revisa estabilidad, alineación, posición y resultado visual final."
        : "Stability, alignment, position and final visual result are checked.",
      icon: <CheckCircle2 className="h-5 w-5" />,
    },
  ];

  const wallTypes = [
    {
      title: isEs ? "Pared de ladrillo" : "Brick wall",
      text: isEs
        ? "Muy habitual en Valencia. Suele permitir buen anclaje con tacos adecuados."
        : "Very common in Valencia. Usually allows good anchoring with suitable fixings.",
      icon: <Home className="h-5 w-5" />,
    },
    {
      title: isEs ? "Pared de hormigón" : "Concrete wall",
      text: isEs
        ? "Opción fuerte y estable, pero necesita broca correcta y perforación precisa."
        : "Strong and stable option, but needs correct drill bit and precise drilling.",
      icon: <Building2 className="h-5 w-5" />,
    },
    {
      title: isEs ? "Pared de pladur" : "Drywall wall",
      text: isEs
        ? "Debe revisarse bien. Una TV de 65 pulgadas puede necesitar fijaciones especiales."
        : "Must be checked well. A 65 inch TV may need special fixings.",
      icon: <Layers className="h-5 w-5" />,
    },
  ];

  const brackets = [
    {
      title: isEs ? "Soporte fijo para 65 pulgadas" : "Fixed bracket for 65 inch",
      text: isEs
        ? "La opción más limpia si no necesitas mover la TV."
        : "The cleanest option if you do not need to move the TV.",
    },
    {
      title: isEs ? "Soporte inclinable" : "Tilting bracket",
      text: isEs
        ? "Útil si la pantalla se instala algo más alta y quieres ajustar el ángulo."
        : "Useful if the screen is mounted slightly higher and you want angle adjustment.",
    },
    {
      title: isEs ? "Soporte articulado" : "Full-motion bracket",
      text: isEs
        ? "Permite orientar la TV, pero requiere soporte fuerte y pared adecuada."
        : "Allows screen positioning, but requires a strong bracket and suitable wall.",
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
      label: isEs ? "Montaje TV grande Valencia" : "Large TV mounting Valencia",
      href: `/${locale}/montaje-tv-grande-valencia`,
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
      label: isEs ? "Montaje TV 75 pulgadas" : "75 inch TV mounting",
      href: `/${locale}/montaje-tv-75-pulgadas-valencia`,
    },
    {
      label: isEs ? "Montaje TV 85 pulgadas" : "85 inch TV mounting",
      href: `/${locale}/montaje-tv-85-pulgadas-valencia`,
    },
    {
      label: isEs ? "Samsung Frame Valencia" : "Samsung Frame Valencia",
      href: `/${locale}/montaje-tv-samsung-frame-valencia`,
    },
    {
      label: isEs ? "Ocultar cables TV" : "Hide TV cables",
      href: `/${locale}/ocultar-cables-valencia`,
    },
  ];

  const faq = isEs
    ? [
        {
          q: "¿Cuánto cuesta montar una TV de 65 pulgadas en Valencia?",
          a: "El montaje empieza desde 59 €. El precio final depende del tipo de pared, soporte, altura, cableado y dificultad.",
        },
        {
          q: "¿Se puede colgar una TV de 65 pulgadas en pladur?",
          a: "Sí, pero hay que revisar estructura, peso y fijaciones. En algunos casos puede ser necesario refuerzo.",
        },
        {
          q: "¿Qué soporte necesito para una TV de 65 pulgadas?",
          a: "Necesitas un soporte compatible con el tamaño, peso y VESA de la TV. Puede ser fijo, inclinable o articulado.",
        },
        {
          q: "¿Es mejor soporte fijo o articulado?",
          a: "El soporte fijo suele ser más limpio y estable. El articulado permite movimiento, pero exige más a la pared.",
        },
        {
          q: "¿Podéis ocultar los cables?",
          a: "Sí. Se puede usar canaleta, ruta limpia o cable management según enchufes, pared y dispositivos.",
        },
        {
          q: "¿A qué altura se monta una TV de 65 pulgadas?",
          a: "Depende del sofá, distancia de visión y altura del mueble. Normalmente se busca una posición cómoda al verla sentado.",
        },
        {
          q: "¿Trabajáis en Valencia y alrededores?",
          a: "Sí. Valencia ciudad y zonas cercanas como Ruzafa, Campanar, Benimaclet, Mislata, Paterna, Torrent y alrededores.",
        },
      ]
    : [
        {
          q: "How much does it cost to mount a 65 inch TV in Valencia?",
          a: "Mounting starts from €59. Final price depends on wall type, bracket, height, cabling and complexity.",
        },
        {
          q: "Can a 65 inch TV be mounted on drywall?",
          a: "Yes, but the structure, weight and fixings must be checked. Reinforcement may be needed in some cases.",
        },
        {
          q: "What bracket do I need for a 65 inch TV?",
          a: "You need a bracket compatible with TV size, weight and VESA. It can be fixed, tilting or full-motion.",
        },
        {
          q: "Is fixed or full-motion bracket better?",
          a: "A fixed bracket is usually cleaner and more stable. Full-motion allows movement but puts more stress on the wall.",
        },
        {
          q: "Can you hide the cables?",
          a: "Yes. Raceways, clean routing or cable management can be used depending on outlets, wall and devices.",
        },
        {
          q: "What height is best for a 65 inch TV?",
          a: "It depends on sofa, viewing distance and furniture height. The goal is comfortable viewing when seated.",
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
                      ? "Una TV de 65 pulgadas es una de las opciones más populares para salones modernos. Para que quede bien, hay que revisar altura, pared, soporte y cableado antes de perforar."
                      : "A 65 inch TV is one of the most popular choices for modern living rooms. For a good result, height, wall, bracket and cabling must be checked before drilling."}
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
                    SEO • TV 65 pulgadas Valencia
                  </div>

                  <h2 className="mt-5 text-3xl font-black sm:text-4xl">
                    {copy.seoTitle}
                  </h2>

                  <div className="mt-7 space-y-5 text-[15px] leading-8 text-gray-700 sm:text-base">
                    {isEs ? (
                      <>
                        <p>
                          Si buscas{" "}
                          <strong>montaje de TV 65 pulgadas en Valencia</strong>
                          , THEVULGO ofrece una instalación profesional para
                          televisores grandes con fijación segura, nivelación
                          precisa y acabado limpio.
                        </p>
                        <p>
                          Una TV de 65 pulgadas necesita una buena medición para
                          que quede cómoda desde el sofá, centrada con el mueble y
                          bien alineada en la pared. Antes de perforar se revisa
                          el tipo de pared, el soporte, el tamaño VESA, la altura
                          ideal y la ubicación de enchufes.
                        </p>
                        <p>
                          El servicio es adecuado para salones, dormitorios
                          amplios, oficinas, apartamentos turísticos, bares,
                          cafeterías y locales donde se necesita una pantalla
                          grande bien instalada.
                        </p>
                      </>
                    ) : (
                      <>
                        <p>
                          If you need{" "}
                          <strong>65 inch TV mounting in Valencia</strong>,
                          THEVULGO provides professional large TV installation
                          with secure fixing, precise levelling and clean finish.
                        </p>
                        <p>
                          A 65 inch TV needs good measuring so it feels
                          comfortable from the sofa, centered with the furniture
                          and well aligned on the wall. Before drilling, wall
                          type, bracket, VESA size, ideal height and outlet
                          position are checked.
                        </p>
                        <p>
                          The service is suitable for living rooms, larger
                          bedrooms, offices, tourist apartments, bars, cafés and
                          commercial spaces where a large screen needs to be
                          installed properly.
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
                        ? "El objetivo es dejar la TV instalada de forma segura, centrada, nivelada y cómoda para ver."
                        : "The goal is to leave the TV installed safely, centered, level and comfortable to watch."}
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
                    <Layers className="h-4 w-4" />
                    {copy.wallTitle}
                  </div>

                  <h2 className="mx-auto mt-4 max-w-4xl text-3xl font-black sm:text-4xl">
                    {copy.wallTitle}
                  </h2>

                  <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-gray-600">
                    {isEs
                      ? "Para una TV de 65 pulgadas, la pared debe revisarse antes de perforar. El tipo de pared influye en la fijación y seguridad."
                      : "For a 65 inch TV, the wall should be checked before drilling. Wall type affects fixing and safety."}
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
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr]">
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-yellow-50 px-4 py-1 text-xs font-bold">
                      <Hammer className="h-4 w-4" />
                      {copy.bracketTitle}
                    </div>

                    <h2 className="mt-5 text-3xl font-black sm:text-4xl">
                      {copy.bracketTitle}
                    </h2>

                    <p className="mt-4 text-base leading-8 text-gray-600">
                      {isEs
                        ? "El soporte debe ser compatible con una TV de 65 pulgadas, con su peso y con el estándar VESA. Puede ser fijo, inclinable o articulado."
                        : "The bracket must be compatible with a 65 inch TV, its weight and VESA standard. It can be fixed, tilting or full-motion."}
                    </p>

                    <div className="mt-6">
                      <Link
                        href={`/${locale}/instalacion-soporte-tv-valencia`}
                        className="inline-flex items-center justify-center gap-2 rounded-2xl bg-yellow-400 px-6 py-3 text-sm font-black text-black shadow-lg transition hover:scale-[1.02]"
                      >
                        {isEs
                          ? "Ver instalación de soporte TV"
                          : "Open TV bracket installation"}
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {brackets.map((item) => (
                      <div
                        key={item.title}
                        className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
                      >
                        <h3 className="text-lg font-black">{item.title}</h3>
                        <p className="mt-2 text-sm leading-7 text-gray-600">
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>
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
                          La altura de una TV de 65 pulgadas debe elegirse según
                          el sofá, la distancia de visión, el mueble y el tamaño
                          de la habitación. En muchos salones, el centro de la
                          pantalla debe quedar cerca del nivel de los ojos cuando
                          estás sentado.
                        </p>
                        <p>
                          Antes de perforar se puede marcar la posición para
                          confirmar que la TV queda cómoda, centrada y visualmente
                          equilibrada con el espacio.
                        </p>
                      </>
                    ) : (
                      <>
                        <p>
                          The height of a 65 inch TV should be chosen based on
                          sofa, viewing distance, furniture and room size. In many
                          living rooms, the center of the screen should be close
                          to seated eye level.
                        </p>
                        <p>
                          Before drilling, the position can be marked to confirm
                          that the TV feels comfortable, centered and visually
                          balanced in the space.
                        </p>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </section>

            <section className="mt-16">
              <div className="rounded-3xl border border-yellow-400 bg-white p-8 shadow-xl sm:p-10">
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1fr]">
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-yellow-50 px-4 py-1 text-xs font-bold">
                      <Cable className="h-4 w-4" />
                      {copy.cableTitle}
                    </div>

                    <h2 className="mt-5 text-3xl font-black sm:text-4xl">
                      {isEs
                        ? "Montaje de TV 65 pulgadas con cables más limpios"
                        : "65 inch TV mounting with cleaner cables"}
                    </h2>

                    <div className="mt-5 space-y-5 text-[15px] leading-8 text-gray-700 sm:text-base">
                      {isEs ? (
                        <>
                          <p>
                            Una TV grande se ve mucho mejor cuando los cables
                            están ordenados. Se puede mejorar el acabado con
                            canaleta, ruta limpia o cable management básico para
                            HDMI, corriente y dispositivos.
                          </p>
                          <p>
                            La mejor solución depende de la ubicación de enchufes,
                            mueble, consola, router, decodificador, soundbar y
                            tipo de pared.
                          </p>
                        </>
                      ) : (
                        <>
                          <p>
                            A large TV looks much better when cables are tidy. The
                            finish can be improved with raceways, clean routing or
                            basic cable management for HDMI, power and devices.
                          </p>
                          <p>
                            The best solution depends on outlet location,
                            furniture, console, router, decoder, soundbar and
                            wall type.
                          </p>
                        </>
                      )}
                    </div>

                    <div className="mt-6">
                      <Link
                        href={`/${locale}/ocultar-cables-valencia`}
                        className="inline-flex items-center justify-center gap-2 rounded-2xl bg-yellow-400 px-6 py-3 text-sm font-black text-black shadow-lg transition hover:scale-[1.02]"
                      >
                        {isEs
                          ? "Ver ocultación de cables"
                          : "Open cable concealment"}
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>

                  <div className="rounded-3xl border border-gray-200 bg-yellow-50 p-6">
                    <h3 className="text-xl font-black">
                      {isEs ? "Antes de reservar" : "Before booking"}
                    </h3>

                    <div className="mt-5 space-y-4">
                      {(isEs
                        ? [
                            "Foto de la pared completa",
                            "Foto del soporte si ya lo tienes",
                            "Modelo o peso aproximado de la TV",
                            "Ubicación de enchufes cercanos",
                            "Indicar si quieres ocultar cables",
                          ]
                        : [
                            "Photo of the full wall",
                            "Photo of the bracket if you already have it",
                            "TV model or approximate weight",
                            "Nearby outlet location",
                            "Mention if you want cable concealment",
                          ]
                      ).map((item) => (
                        <div key={item} className="flex items-start gap-3">
                          <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-yellow-500" />
                          <span className="text-sm leading-7 text-gray-700">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
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
                        ? "Montaje TV 65 pulgadas en Valencia y alrededores"
                        : "65 inch TV mounting in Valencia and nearby areas"}
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
                ? "THEVULGO • Montaje TV 65 pulgadas Valencia • TV grande pared • Instalador TV Valencia"
                : "THEVULGO • 65 inch TV Mounting Valencia • Large TV wall mounting • TV Installer Valencia"}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}