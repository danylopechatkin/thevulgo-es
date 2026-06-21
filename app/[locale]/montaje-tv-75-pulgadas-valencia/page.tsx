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
  Users,
  Weight,
  Sofa,
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
    ? "Montaje TV 75 Pulgadas Valencia | Instalación Profesional | THEVULGO"
    : "75 Inch TV Mounting Valencia | Professional Installation | THEVULGO";

  const description = isEs
    ? "Montaje profesional de TV de 75 pulgadas en Valencia. Instalación segura en pared, soporte fijo o articulado, revisión de pared, nivelación precisa y ocultación de cables. Desde 79€."
    : "Professional 75 inch TV mounting in Valencia. Safe wall installation, fixed or full-motion bracket, wall check, precise levelling and cable concealment. From €79.";

  const url = `${baseUrl}/${locale}/montaje-tv-75-pulgadas-valencia`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        es: `${baseUrl}/es/montaje-tv-75-pulgadas-valencia`,
        en: `${baseUrl}/en/montaje-tv-75-pulgadas-valencia`,
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
          "montaje tv 75 pulgadas valencia",
          "instalar tv 75 pulgadas valencia",
          "colgar tv 75 pulgadas valencia",
          "montar tv 75 valencia",
          "instalador tv 75 pulgadas valencia",
          "tv grande pared valencia",
          "montaje tv grande valencia",
          "soporte tv 75 pulgadas valencia",
          "ocultar cables tv 75 valencia",
          "montaje tv valencia",
        ]
      : [
          "75 inch tv mounting valencia",
          "install 75 inch tv valencia",
          "hang 75 inch tv valencia",
          "large tv mounting valencia",
          "tv installer valencia",
          "75 inch tv wall mount valencia",
        ],
  };
}

export default async function Page({ params }: Props) {
  const { locale } = await params;
  const isEs = locale === "es";

  const pageUrl = `${baseUrl}/${locale}/montaje-tv-75-pulgadas-valencia`;
  const estimateHref = `/${locale}/estimate?category=tv-mounting`;

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, necesito montar una TV de 75 pulgadas en Valencia. Me gustaría pedir presupuesto."
      : "Hi! I need to mount a 75 inch TV in Valencia. I’d like an estimate."
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
      ? "Montaje de TV 75 pulgadas en Valencia"
      : "75 Inch TV Mounting in Valencia",
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
      ? "Servicio profesional para montar televisores de 75 pulgadas en pared en Valencia con soporte compatible, fijación segura, nivelación precisa y acabado limpio."
      : "Professional service to mount 75 inch TVs on the wall in Valencia with compatible bracket, secure fixing, precise levelling and clean finish.",
    offers: {
      "@type": "Offer",
      priceCurrency: "EUR",
      price: "79",
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
          ? "¿Cuánto cuesta montar una TV de 75 pulgadas en Valencia?"
          : "How much does it cost to mount a 75 inch TV in Valencia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: isEs
            ? "El montaje de una TV de 75 pulgadas empieza desde 79 €. El precio final depende del tipo de pared, soporte, altura, ocultación de cables y dificultad del trabajo."
            : "75 inch TV mounting starts from €79. The final price depends on wall type, bracket, height, cable concealment and job complexity.",
        },
      },
      {
        "@type": "Question",
        name: isEs
          ? "¿Se puede montar una TV de 75 pulgadas en pladur?"
          : "Can a 75 inch TV be mounted on drywall?",
        acceptedAnswer: {
          "@type": "Answer",
          text: isEs
            ? "Sí, pero hay que revisar la estructura, el peso de la TV, el soporte y los puntos de fijación. En algunos casos puede ser necesario refuerzo."
            : "Yes, but the structure, TV weight, bracket and fixing points must be checked. Reinforcement may be needed in some cases.",
        },
      },
      {
        "@type": "Question",
        name: isEs
          ? "¿Hace falta ayuda para levantar una TV de 75 pulgadas?"
          : "Is extra help needed to lift a 75 inch TV?",
        acceptedAnswer: {
          "@type": "Answer",
          text: isEs
            ? "Normalmente una TV de 75 pulgadas requiere más cuidado y puede necesitar ayuda para manipularla de forma segura durante el montaje."
            : "A 75 inch TV usually requires extra care and may need assistance to handle it safely during mounting.",
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
        name: isEs ? "Montaje TV 75 pulgadas" : "75 Inch TV Mounting",
        item: pageUrl,
      },
    ],
  };

  const copy = {
    badge: isEs
      ? "THEVULGO • TV 75 pulgadas Valencia"
      : "THEVULGO • 75 inch TV Valencia",

    heroTitle: isEs
      ? "Montaje de TV 75 pulgadas en Valencia"
      : "75 Inch TV Mounting in Valencia",

    heroSubtitle: isEs
      ? "Instalación profesional de televisores de 75 pulgadas en pared. Montaje seguro, soporte compatible, revisión de pared, nivelación precisa, altura correcta y opción de ocultar cables."
      : "Professional 75 inch TV wall installation. Safe mounting, compatible bracket, wall check, precise levelling, correct height and cable concealment options.",

    primaryCta: isEs ? "Pedir presupuesto" : "Get estimate",

    secondaryCta: isEs ? "WhatsApp rápido" : "Quick WhatsApp",

    heroNote: isEs
      ? "Desde 79 €. Precio final según pared, soporte, altura, cableado y dificultad."
      : "From €79. Final price depends on wall, bracket, height, cabling and complexity.",

    servicesTitle: isEs
      ? "Servicio para montar TV de 75 pulgadas"
      : "75 inch TV mounting service",

    seoTitle: isEs
      ? "Instalación segura para TVs grandes de 75 pulgadas"
      : "Safe installation for large 75 inch TVs",

    includedTitle: isEs ? "Qué incluye el servicio" : "What is included",

    processTitle: isEs ? "Cómo funciona" : "How it works",

    wallTitle: isEs
      ? "Pared adecuada para una TV de 75 pulgadas"
      : "Suitable wall for a 75 inch TV",

    bracketTitle: isEs
      ? "Soporte correcto para TV de 75 pulgadas"
      : "Correct bracket for 75 inch TV",

    heightTitle: isEs
      ? "Altura ideal para una TV de 75 pulgadas"
      : "Ideal height for a 75 inch TV",

    cableTitle: isEs ? "Ocultación de cables" : "Cable concealment",

    areasTitle: isEs ? "Zonas de Valencia" : "Valencia areas",

    linksTitle: isEs ? "Servicios relacionados" : "Related services",

    faqTitle: isEs
      ? "Preguntas frecuentes sobre montaje TV 75 pulgadas"
      : "75 inch TV mounting FAQ",

    finalTitle: isEs
      ? "¿Quieres montar una TV de 75 pulgadas?"
      : "Want to mount a 75 inch TV?",

    finalText: isEs
      ? "Envía fotos de la pared, TV, soporte y zona de enchufes por WhatsApp para recibir una estimación clara antes de reservar."
      : "Send photos of the wall, TV, bracket and outlet area by WhatsApp to receive a clear estimate before booking.",
  };

  const trustPoints = [
    {
      title: isEs ? "Pantalla grande" : "Large screen",
      text: isEs
        ? "Una TV de 75 pulgadas necesita más cuidado al manipular, medir y fijar."
        : "A 75 inch TV needs more care when handling, measuring and fixing.",
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
      title: isEs ? "Montaje TV 75 pulgadas" : "75 inch TV mounting",
      text: isEs
        ? "Instalación completa de TV grande en pared con medición y nivelación precisa."
        : "Complete large TV wall installation with precise measuring and levelling.",
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
        ? "Requiere revisar pared y peso porque una TV de 75 pulgadas genera más palanca."
        : "Requires wall and weight check because a 75 inch TV creates more leverage.",
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
        "Montaje de TV de 75 pulgadas en pared",
        "Revisión del tipo de pared antes de perforar",
        "Montaje de soporte fijo, inclinable o articulado",
        "Medición de altura ideal para salón o dormitorio",
        "Nivelación y centrado visual de la pantalla",
        "Instalación en ladrillo, hormigón o pladur revisado",
        "Manipulación cuidadosa de pantalla grande",
        "Revisión de compatibilidad del soporte",
        "Opciones para ocultar cables",
        "Instalación para casas, pisos, oficinas y locales",
        "Comprobación final de estabilidad",
        "Presupuesto claro antes de reservar",
      ]
    : [
        "75 inch TV wall mounting",
        "Wall type check before drilling",
        "Fixed, tilting or full-motion bracket mounting",
        "Ideal height measurement for living room or bedroom",
        "Screen levelling and visual centering",
        "Installation on brick, concrete or checked drywall",
        "Careful handling of large screen",
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
        ? "Se revisa tamaño, peso, pared, soporte, altura y posible ocultación de cables."
        : "Size, weight, wall, bracket, height and possible cable concealment are reviewed.",
      icon: <Eye className="h-5 w-5" />,
    },
    {
      step: "03",
      title: isEs ? "Montaje" : "Mounting",
      text: isEs
        ? "Se mide, nivela, perfora y se instala la TV de 75 pulgadas con cuidado."
        : "The 75 inch TV is measured, levelled, drilled and mounted carefully.",
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
        ? "Muy habitual en Valencia. Suele permitir buen anclaje con tacos adecuados para pantalla grande."
        : "Very common in Valencia. Usually allows good anchoring with suitable fixings for a large screen.",
      icon: <Home className="h-5 w-5" />,
    },
    {
      title: isEs ? "Pared de hormigón" : "Concrete wall",
      text: isEs
        ? "Opción fuerte para TVs grandes, pero necesita broca correcta y perforación precisa."
        : "Strong option for large TVs, but needs correct drill bit and precise drilling.",
      icon: <Building2 className="h-5 w-5" />,
    },
    {
      title: isEs ? "Pared de pladur" : "Drywall wall",
      text: isEs
        ? "Debe revisarse muy bien. Una TV de 75 pulgadas puede necesitar refuerzo o fijación especial."
        : "Must be checked carefully. A 75 inch TV may need reinforcement or special fixings.",
      icon: <Layers className="h-5 w-5" />,
    },
  ];

  const brackets = [
    {
      title: isEs ? "Soporte fijo para 75 pulgadas" : "Fixed bracket for 75 inch",
      text: isEs
        ? "La opción más estable y limpia si no necesitas mover la TV."
        : "The most stable and clean option if you do not need to move the TV.",
    },
    {
      title: isEs ? "Soporte inclinable" : "Tilting bracket",
      text: isEs
        ? "Útil si la TV queda algo más alta y quieres corregir el ángulo."
        : "Useful if the TV is mounted higher and you want to correct the angle.",
    },
    {
      title: isEs ? "Soporte articulado" : "Full-motion bracket",
      text: isEs
        ? "Debe elegirse con cuidado porque el peso y la palanca son mayores en pantallas grandes."
        : "Must be chosen carefully because weight and leverage are higher with large screens.",
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
    {
      label: isEs ? "Instalación soporte TV" : "TV bracket installation",
      href: `/${locale}/instalacion-soporte-tv-valencia`,
    },
  ];

  const faq = isEs
    ? [
        {
          q: "¿Cuánto cuesta montar una TV de 75 pulgadas en Valencia?",
          a: "El montaje empieza desde 79 €. El precio final depende del tipo de pared, soporte, altura, cableado y dificultad.",
        },
        {
          q: "¿Se puede colgar una TV de 75 pulgadas en pladur?",
          a: "Sí, pero hay que revisar estructura, peso y fijaciones. En algunos casos puede ser necesario refuerzo.",
        },
        {
          q: "¿Qué soporte necesito para una TV de 75 pulgadas?",
          a: "Necesitas un soporte compatible con el tamaño, peso y VESA de la TV. Para pantallas grandes conviene elegir un soporte fuerte y de buena calidad.",
        },
        {
          q: "¿Es mejor soporte fijo o articulado?",
          a: "El soporte fijo suele ser más estable y limpio. El articulado permite movimiento, pero exige más a la pared y debe elegirse con cuidado.",
        },
        {
          q: "¿Podéis ocultar los cables?",
          a: "Sí. Se puede usar canaleta, ruta limpia o cable management según enchufes, pared y dispositivos.",
        },
        {
          q: "¿A qué altura se monta una TV de 75 pulgadas?",
          a: "Depende del sofá, distancia de visión y altura del mueble. Normalmente se busca que la pantalla quede cómoda al verla sentado.",
        },
        {
          q: "¿Hace falta dos personas para montar una TV de 75 pulgadas?",
          a: "Normalmente una pantalla de 75 pulgadas requiere más cuidado y puede necesitar ayuda para manipularla de forma segura.",
        },
        {
          q: "¿Trabajáis en Valencia y alrededores?",
          a: "Sí. Valencia ciudad y zonas cercanas como Ruzafa, Campanar, Benimaclet, Mislata, Paterna, Torrent y alrededores.",
        },
      ]
    : [
        {
          q: "How much does it cost to mount a 75 inch TV in Valencia?",
          a: "Mounting starts from €79. Final price depends on wall type, bracket, height, cabling and complexity.",
        },
        {
          q: "Can a 75 inch TV be mounted on drywall?",
          a: "Yes, but the structure, weight and fixings must be checked. Reinforcement may be needed in some cases.",
        },
        {
          q: "What bracket do I need for a 75 inch TV?",
          a: "You need a bracket compatible with the TV size, weight and VESA. For large screens, a strong high-quality bracket is recommended.",
        },
        {
          q: "Is fixed or full-motion bracket better?",
          a: "A fixed bracket is usually more stable and clean. A full-motion bracket allows movement but puts more stress on the wall.",
        },
        {
          q: "Can you hide the cables?",
          a: "Yes. Raceways, clean routing or cable management can be used depending on outlets, wall and devices.",
        },
        {
          q: "What height is best for a 75 inch TV?",
          a: "It depends on sofa, viewing distance and furniture height. The goal is comfortable viewing when seated.",
        },
        {
          q: "Are two people needed to mount a 75 inch TV?",
          a: "A 75 inch screen usually needs extra care and may need assistance for safe handling.",
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
                      ? "Una TV de 75 pulgadas no se monta igual que una pantalla pequeña. Hay que revisar soporte, pared, peso, altura, manipulación y estabilidad antes de perforar."
                      : "A 75 inch TV is not mounted like a small screen. Bracket, wall, weight, height, handling and stability must be checked before drilling."}
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
                    SEO • TV 75 pulgadas Valencia
                  </div>

                  <h2 className="mt-5 text-3xl font-black sm:text-4xl">
                    {copy.seoTitle}
                  </h2>

                  <div className="mt-7 space-y-5 text-[15px] leading-8 text-gray-700 sm:text-base">
                    {isEs ? (
                      <>
                        <p>
                          Si buscas{" "}
                          <strong>montaje de TV 75 pulgadas en Valencia</strong>
                          , THEVULGO ofrece una instalación profesional para
                          pantallas grandes con fijación segura, nivelación
                          precisa y acabado limpio. Una TV de 75 pulgadas tiene
                          más peso, más volumen y requiere más cuidado que una TV
                          pequeña.
                        </p>
                        <p>
                          Antes de montar la pantalla se revisa el tipo de pared,
                          el soporte, el tamaño VESA, la altura ideal, la
                          distancia de visión y la ubicación de enchufes. Esto
                          ayuda a evitar errores como una TV torcida, demasiado
                          alta, demasiado baja o fijada de forma insegura.
                        </p>
                        <p>
                          El servicio es adecuado para salones grandes,
                          dormitorios amplios, oficinas, bares, cafeterías,
                          apartamentos turísticos y locales donde se necesita una
                          pantalla grande bien instalada.
                        </p>
                      </>
                    ) : (
                      <>
                        <p>
                          If you need{" "}
                          <strong>75 inch TV mounting in Valencia</strong>,
                          THEVULGO provides professional large-screen
                          installation with secure fixing, precise levelling and
                          clean finish. A 75 inch TV is heavier, larger and needs
                          more care than a small TV.
                        </p>
                        <p>
                          Before mounting the screen, wall type, bracket, VESA
                          size, ideal height, viewing distance and outlet position
                          are checked. This helps avoid mistakes such as a
                          crooked TV, too high or too low placement, or unsafe
                          fixing.
                        </p>
                        <p>
                          The service is suitable for large living rooms,
                          bedrooms, offices, bars, cafés, tourist apartments and
                          commercial units where a large screen needs to be
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
                        ? "El objetivo es dejar la TV grande instalada de forma segura, centrada, nivelada y cómoda para ver."
                        : "The goal is to leave the large TV installed safely, centered, level and comfortable to watch."}
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
                      ? "Para una TV de 75 pulgadas, la pared es uno de los puntos más importantes. No todas las paredes soportan igual una pantalla grande."
                      : "For a 75 inch TV, the wall is one of the most important points. Not every wall supports a large screen the same way."}
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
                        ? "El soporte debe ser compatible con una TV de 75 pulgadas, con su peso y con el estándar VESA. En pantallas grandes no conviene usar soportes débiles."
                        : "The bracket must be compatible with a 75 inch TV, its weight and VESA standard. Weak brackets are not recommended for large screens."}
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
                          La altura de una TV de 75 pulgadas debe elegirse con
                          cuidado. Si se instala demasiado alta, puede resultar
                          incómoda para ver durante mucho tiempo. Si queda
                          demasiado baja, puede no encajar con el mueble o con la
                          distribución del salón.
                        </p>
                        <p>
                          Normalmente se busca que la pantalla quede cómoda desde
                          el sofá, teniendo en cuenta la distancia de visión, el
                          tamaño del mueble, la altura del soporte y el centro
                          visual de la TV.
                        </p>
                      </>
                    ) : (
                      <>
                        <p>
                          The height of a 75 inch TV should be chosen carefully.
                          If it is mounted too high, it may feel uncomfortable for
                          long viewing. If it is too low, it may not work well
                          with the furniture or room layout.
                        </p>
                        <p>
                          The goal is usually comfortable viewing from the sofa,
                          considering viewing distance, furniture size, bracket
                          height and the visual center of the TV.
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
                        ? "Montaje de TV 75 pulgadas con cables más limpios"
                        : "75 inch TV mounting with cleaner cables"}
                    </h2>

                    <div className="mt-5 space-y-5 text-[15px] leading-8 text-gray-700 sm:text-base">
                      {isEs ? (
                        <>
                          <p>
                            En una pantalla grande, los cables visibles llaman
                            más la atención. Por eso se puede mejorar el acabado
                            con canaleta, ruta limpia o una organización básica
                            de HDMI, alimentación y dispositivos.
                          </p>
                          <p>
                            La mejor solución depende de la ubicación de los
                            enchufes, mueble, consola, router, decodificador,
                            soundbar y tipo de pared.
                          </p>
                        </>
                      ) : (
                        <>
                          <p>
                            On a large screen, visible cables attract more
                            attention. The finish can be improved with raceways,
                            clean routing or basic organization of HDMI, power
                            and devices.
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
                            "Confirmar si hay ayuda para levantar la TV",
                          ]
                        : [
                            "Photo of the full wall",
                            "Photo of the bracket if you already have it",
                            "TV model or approximate weight",
                            "Nearby outlet location",
                            "Mention if you want cable concealment",
                            "Confirm if help is available to lift the TV",
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
                        ? "Montaje TV 75 pulgadas en Valencia y alrededores"
                        : "75 inch TV mounting in Valencia and nearby areas"}
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
                ? "THEVULGO • Montaje TV 75 pulgadas Valencia • TV grande pared • Instalador TV Valencia"
                : "THEVULGO • 75 inch TV Mounting Valencia • Large TV wall mounting • TV Installer Valencia"}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}