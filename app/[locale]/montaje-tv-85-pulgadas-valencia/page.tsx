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
    ? "Montaje TV 85 Pulgadas Valencia | Instalación Profesional | THEVULGO"
    : "85 Inch TV Mounting Valencia | Professional Installation | THEVULGO";

  const description = isEs
    ? "Montaje profesional de TV de 85 pulgadas en Valencia. Instalación segura, soporte compatible, revisión de pared, nivelación precisa y ocultación de cables. Desde 99€."
    : "Professional 85 inch TV mounting in Valencia. Safe installation, compatible bracket, wall check, precise levelling and cable concealment. From €99.";

  const url = `${baseUrl}/${locale}/montaje-tv-85-pulgadas-valencia`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        es: `${baseUrl}/es/montaje-tv-85-pulgadas-valencia`,
        en: `${baseUrl}/en/montaje-tv-85-pulgadas-valencia`,
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
          "montaje tv 85 pulgadas valencia",
          "instalar tv 85 pulgadas valencia",
          "colgar tv 85 pulgadas valencia",
          "montar tv 85 valencia",
          "instalador tv 85 pulgadas valencia",
          "tv gigante pared valencia",
          "montaje tv grande valencia",
          "soporte tv 85 pulgadas valencia",
          "ocultar cables tv 85 valencia",
          "montaje tv valencia",
        ]
      : [
          "85 inch tv mounting valencia",
          "install 85 inch tv valencia",
          "hang 85 inch tv valencia",
          "extra large tv mounting valencia",
          "large tv installer valencia",
          "85 inch tv wall mount valencia",
        ],
  };
}

export default async function Page({ params }: Props) {
  const { locale } = await params;
  const isEs = locale === "es";

  const pageUrl = `${baseUrl}/${locale}/montaje-tv-85-pulgadas-valencia`;
  const estimateHref = `/${locale}/estimate?category=tv-mounting`;

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, necesito montar una TV de 85 pulgadas en Valencia. Me gustaría pedir presupuesto."
      : "Hi! I need to mount an 85 inch TV in Valencia. I’d like an estimate."
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
      ? "Montaje de TV 85 pulgadas en Valencia"
      : "85 Inch TV Mounting in Valencia",
    serviceType: isEs ? "Montaje de TV grande" : "Extra large TV mounting",
    provider: {
      "@id": `${baseUrl}/#localbusiness`,
    },
    areaServed: {
      "@type": "City",
      name: "Valencia",
    },
    url: pageUrl,
    description: isEs
      ? "Servicio profesional para montar televisores de 85 pulgadas en pared en Valencia con soporte compatible, fijación segura, nivelación precisa y acabado limpio."
      : "Professional service to mount 85 inch TVs on the wall in Valencia with compatible bracket, secure fixing, precise levelling and clean finish.",
    offers: {
      "@type": "Offer",
      priceCurrency: "EUR",
      price: "99",
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
          ? "¿Cuánto cuesta montar una TV de 85 pulgadas en Valencia?"
          : "How much does it cost to mount an 85 inch TV in Valencia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: isEs
            ? "El montaje de una TV de 85 pulgadas empieza desde 99 €. El precio final depende del tipo de pared, soporte, altura, ocultación de cables, ayuda necesaria y dificultad del trabajo."
            : "85 inch TV mounting starts from €99. The final price depends on wall type, bracket, height, cable concealment, required help and job complexity.",
        },
      },
      {
        "@type": "Question",
        name: isEs
          ? "¿Se puede montar una TV de 85 pulgadas en pladur?"
          : "Can an 85 inch TV be mounted on drywall?",
        acceptedAnswer: {
          "@type": "Answer",
          text: isEs
            ? "Sí, pero hay que revisar muy bien la estructura, el peso de la TV, el soporte y los puntos de fijación. En muchos casos puede ser necesario refuerzo."
            : "Yes, but the structure, TV weight, bracket and fixing points must be checked very carefully. Reinforcement may be needed in many cases.",
        },
      },
      {
        "@type": "Question",
        name: isEs
          ? "¿Hace falta ayuda para levantar una TV de 85 pulgadas?"
          : "Is extra help needed to lift an 85 inch TV?",
        acceptedAnswer: {
          "@type": "Answer",
          text: isEs
            ? "Normalmente sí. Una TV de 85 pulgadas es grande, pesada y delicada, por eso se necesita más cuidado y, en muchos casos, dos personas para manipularla con seguridad."
            : "Usually yes. An 85 inch TV is large, heavy and delicate, so extra care and often two people are needed for safe handling.",
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
        name: isEs ? "Montaje TV 85 pulgadas" : "85 Inch TV Mounting",
        item: pageUrl,
      },
    ],
  };

  const copy = {
    badge: isEs
      ? "THEVULGO • TV 85 pulgadas Valencia"
      : "THEVULGO • 85 inch TV Valencia",

    heroTitle: isEs
      ? "Montaje de TV 85 pulgadas en Valencia"
      : "85 Inch TV Mounting in Valencia",

    heroSubtitle: isEs
      ? "Instalación profesional de televisores de 85 pulgadas en pared. Servicio para pantallas grandes con revisión de pared, soporte compatible, manipulación cuidadosa, nivelación precisa y opción de ocultar cables."
      : "Professional 85 inch TV wall installation. Service for extra-large screens with wall check, compatible bracket, careful handling, precise levelling and cable concealment options.",

    primaryCta: isEs ? "Pedir presupuesto" : "Get estimate",

    secondaryCta: isEs ? "WhatsApp rápido" : "Quick WhatsApp",

    heroNote: isEs
      ? "Desde 99 €. Precio final según pared, soporte, altura, ayuda necesaria, cableado y dificultad."
      : "From €99. Final price depends on wall, bracket, height, required help, cabling and complexity.",

    servicesTitle: isEs
      ? "Servicio para montar TV de 85 pulgadas"
      : "85 inch TV mounting service",

    seoTitle: isEs
      ? "Instalación segura para pantallas grandes de 85 pulgadas"
      : "Safe installation for large 85 inch screens",

    includedTitle: isEs ? "Qué incluye el servicio" : "What is included",

    processTitle: isEs ? "Cómo funciona" : "How it works",

    wallTitle: isEs
      ? "Pared adecuada para una TV de 85 pulgadas"
      : "Suitable wall for an 85 inch TV",

    bracketTitle: isEs
      ? "Soporte correcto para TV de 85 pulgadas"
      : "Correct bracket for 85 inch TV",

    heightTitle: isEs
      ? "Altura ideal para una TV de 85 pulgadas"
      : "Ideal height for an 85 inch TV",

    cableTitle: isEs ? "Ocultación de cables" : "Cable concealment",

    areasTitle: isEs ? "Zonas de Valencia" : "Valencia areas",

    linksTitle: isEs ? "Servicios relacionados" : "Related services",

    faqTitle: isEs
      ? "Preguntas frecuentes sobre montaje TV 85 pulgadas"
      : "85 inch TV mounting FAQ",

    finalTitle: isEs
      ? "¿Quieres montar una TV de 85 pulgadas?"
      : "Want to mount an 85 inch TV?",

    finalText: isEs
      ? "Envía fotos de la pared, TV, soporte y zona de enchufes por WhatsApp para recibir una estimación clara antes de reservar."
      : "Send photos of the wall, TV, bracket and outlet area by WhatsApp to receive a clear estimate before booking.",
  };

  const trustPoints = [
    {
      title: isEs ? "Pantalla muy grande" : "Extra-large screen",
      text: isEs
        ? "Una TV de 85 pulgadas necesita planificación, manipulación cuidadosa y más seguridad."
        : "An 85 inch TV needs planning, careful handling and extra safety.",
      icon: <Monitor className="h-5 w-5" />,
    },
    {
      title: isEs ? "Revisión de pared" : "Wall check",
      text: isEs
        ? "Se revisa pared, soporte, peso y puntos de anclaje antes de perforar."
        : "Wall, bracket, weight and fixing points are checked before drilling.",
      icon: <ShieldCheck className="h-5 w-5" />,
    },
    {
      title: isEs ? "Trabajo con cuidado" : "Careful work",
      text: isEs
        ? "Pantallas grandes son delicadas: se mide, se nivela y se manipula con más atención."
        : "Large screens are delicate: everything is measured, levelled and handled carefully.",
      icon: <CheckCircle2 className="h-5 w-5" />,
    },
  ];

  const services = [
    {
      title: isEs ? "Montaje TV 85 pulgadas" : "85 inch TV mounting",
      text: isEs
        ? "Instalación completa de TV muy grande en pared con medición y nivelación precisa."
        : "Complete extra-large TV wall installation with precise measuring and levelling.",
      icon: <Tv className="h-5 w-5" />,
    },
    {
      title: isEs ? "Manipulación segura" : "Safe handling",
      text: isEs
        ? "Una pantalla de 85 pulgadas requiere más cuidado al levantar, presentar y fijar."
        : "An 85 inch screen requires more care when lifting, positioning and fixing.",
      icon: <Users className="h-5 w-5" />,
    },
    {
      title: isEs ? "Soporte fuerte" : "Strong bracket",
      text: isEs
        ? "El soporte debe ser compatible con peso, VESA, pared y tamaño de pantalla."
        : "The bracket must match weight, VESA, wall type and screen size.",
      icon: <Settings className="h-5 w-5" />,
    },
    {
      title: isEs ? "Cableado limpio" : "Clean cabling",
      text: isEs
        ? "Canaleta, ruta limpia o cable management para mejorar el acabado final."
        : "Raceway, clean route or cable management to improve the final finish.",
      icon: <Cable className="h-5 w-5" />,
    },
  ];

  const included = isEs
    ? [
        "Montaje de TV de 85 pulgadas en pared",
        "Revisión del tipo de pared antes de perforar",
        "Montaje de soporte fijo, inclinable o articulado",
        "Medición de altura ideal para salón o dormitorio",
        "Nivelación y centrado visual de pantalla grande",
        "Instalación en ladrillo, hormigón o pladur revisado",
        "Manipulación cuidadosa de pantalla muy grande",
        "Revisión de compatibilidad del soporte",
        "Opciones para ocultar cables",
        "Instalación para casas, pisos, oficinas y locales",
        "Comprobación final de estabilidad",
        "Presupuesto claro antes de reservar",
      ]
    : [
        "85 inch TV wall mounting",
        "Wall type check before drilling",
        "Fixed, tilting or full-motion bracket mounting",
        "Ideal height measurement for living room or bedroom",
        "Large screen levelling and visual centering",
        "Installation on brick, concrete or checked drywall",
        "Careful handling of extra-large screen",
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
        ? "Se revisa tamaño, peso, pared, soporte, altura y si hará falta ayuda adicional."
        : "Size, weight, wall, bracket, height and possible extra help are reviewed.",
      icon: <Eye className="h-5 w-5" />,
    },
    {
      step: "03",
      title: isEs ? "Montaje" : "Mounting",
      text: isEs
        ? "Se mide, nivela, perfora y se instala la TV de 85 pulgadas con mucho cuidado."
        : "The 85 inch TV is measured, levelled, drilled and mounted with extra care.",
      icon: <Drill className="h-5 w-5" />,
    },
    {
      step: "04",
      title: isEs ? "Comprobación" : "Final check",
      text: isEs
        ? "Se revisa estabilidad, alineación, posición, cableado y resultado visual final."
        : "Stability, alignment, position, cabling and final visual result are checked.",
      icon: <CheckCircle2 className="h-5 w-5" />,
    },
  ];

  const wallTypes = [
    {
      title: isEs ? "Pared de ladrillo" : "Brick wall",
      text: isEs
        ? "Muy habitual en Valencia. Puede ser adecuada para pantallas grandes si se usan fijaciones correctas."
        : "Very common in Valencia. It can be suitable for large screens if correct fixings are used.",
      icon: <Home className="h-5 w-5" />,
    },
    {
      title: isEs ? "Pared de hormigón" : "Concrete wall",
      text: isEs
        ? "Opción fuerte para una TV de 85 pulgadas, pero requiere perforación precisa y soporte compatible."
        : "Strong option for an 85 inch TV, but requires precise drilling and compatible bracket.",
      icon: <Building2 className="h-5 w-5" />,
    },
    {
      title: isEs ? "Pared de pladur" : "Drywall wall",
      text: isEs
        ? "Debe revisarse con mucho cuidado. Una TV de 85 pulgadas puede necesitar refuerzo especial."
        : "Must be checked very carefully. An 85 inch TV may need special reinforcement.",
      icon: <Layers className="h-5 w-5" />,
    },
  ];

  const brackets = [
    {
      title: isEs ? "Soporte fijo para 85 pulgadas" : "Fixed bracket for 85 inch",
      text: isEs
        ? "Suele ser la opción más estable si no necesitas mover la TV."
        : "Usually the most stable option if you do not need to move the TV.",
    },
    {
      title: isEs ? "Soporte inclinable" : "Tilting bracket",
      text: isEs
        ? "Útil cuando la pantalla se instala más alta y necesitas ajustar el ángulo."
        : "Useful when the screen is mounted higher and you need angle adjustment.",
    },
    {
      title: isEs ? "Soporte articulado" : "Full-motion bracket",
      text: isEs
        ? "Debe elegirse con mucha precaución porque una TV de 85 pulgadas genera mucha palanca."
        : "Must be chosen very carefully because an 85 inch TV creates significant leverage.",
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
          q: "¿Cuánto cuesta montar una TV de 85 pulgadas en Valencia?",
          a: "El montaje empieza desde 99 €. El precio final depende del tipo de pared, soporte, altura, cableado, ayuda necesaria y dificultad.",
        },
        {
          q: "¿Se puede colgar una TV de 85 pulgadas en pladur?",
          a: "Sí, pero hay que revisar muy bien estructura, peso y fijaciones. En muchos casos puede ser necesario refuerzo.",
        },
        {
          q: "¿Qué soporte necesito para una TV de 85 pulgadas?",
          a: "Necesitas un soporte compatible con el tamaño, peso y VESA de la TV. Para 85 pulgadas conviene usar un soporte fuerte y de alta calidad.",
        },
        {
          q: "¿Es mejor soporte fijo o articulado?",
          a: "El soporte fijo suele ser más seguro y estable. El articulado puede funcionar, pero exige mucho más a la pared y al soporte.",
        },
        {
          q: "¿Podéis ocultar los cables?",
          a: "Sí. Se puede usar canaleta, ruta limpia o cable management según enchufes, pared y dispositivos.",
        },
        {
          q: "¿A qué altura se monta una TV de 85 pulgadas?",
          a: "Depende del sofá, distancia de visión y tamaño del salón. Normalmente se busca una posición cómoda y centrada visualmente.",
        },
        {
          q: "¿Hace falta dos personas para montar una TV de 85 pulgadas?",
          a: "Normalmente sí. Es una pantalla grande, pesada y delicada, por eso suele necesitar más ayuda para levantarla y colocarla.",
        },
        {
          q: "¿Trabajáis en Valencia y alrededores?",
          a: "Sí. Valencia ciudad y zonas cercanas como Ruzafa, Campanar, Benimaclet, Mislata, Paterna, Torrent y alrededores.",
        },
      ]
    : [
        {
          q: "How much does it cost to mount an 85 inch TV in Valencia?",
          a: "Mounting starts from €99. Final price depends on wall type, bracket, height, cabling, required help and complexity.",
        },
        {
          q: "Can an 85 inch TV be mounted on drywall?",
          a: "Yes, but the structure, weight and fixings must be checked very carefully. Reinforcement may be needed in many cases.",
        },
        {
          q: "What bracket do I need for an 85 inch TV?",
          a: "You need a bracket compatible with TV size, weight and VESA. For 85 inches, a strong high-quality bracket is recommended.",
        },
        {
          q: "Is fixed or full-motion bracket better?",
          a: "A fixed bracket is usually safer and more stable. Full-motion can work, but puts more stress on the wall and bracket.",
        },
        {
          q: "Can you hide the cables?",
          a: "Yes. Raceways, clean routing or cable management can be used depending on outlets, wall and devices.",
        },
        {
          q: "What height is best for an 85 inch TV?",
          a: "It depends on sofa, viewing distance and room size. The goal is a comfortable and visually centered position.",
        },
        {
          q: "Are two people needed to mount an 85 inch TV?",
          a: "Usually yes. It is a large, heavy and delicate screen, so extra help is normally needed to lift and position it.",
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
                      ? "Una TV de 85 pulgadas no se instala como una pantalla normal. Es una pantalla muy grande, delicada y con más peso, por eso hay que revisar pared, soporte, altura y manipulación."
                      : "An 85 inch TV is not installed like a normal screen. It is very large, delicate and heavier, so wall, bracket, height and handling must be checked."}
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
                    SEO • TV 85 pulgadas Valencia
                  </div>

                  <h2 className="mt-5 text-3xl font-black sm:text-4xl">
                    {copy.seoTitle}
                  </h2>

                  <div className="mt-7 space-y-5 text-[15px] leading-8 text-gray-700 sm:text-base">
                    {isEs ? (
                      <>
                        <p>
                          Si buscas{" "}
                          <strong>montaje de TV 85 pulgadas en Valencia</strong>,
                          THEVULGO ofrece una instalación profesional para
                          pantallas muy grandes con fijación segura, nivelación
                          precisa y acabado limpio.
                        </p>
                        <p>
                          Una TV de 85 pulgadas tiene más peso, más volumen y
                          requiere más cuidado que una pantalla estándar. Antes de
                          perforar se revisa el tipo de pared, el soporte, el
                          tamaño VESA, la altura ideal, la distancia de visión y
                          la ubicación de enchufes.
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
                          <strong>85 inch TV mounting in Valencia</strong>,
                          THEVULGO provides professional extra-large screen
                          installation with secure fixing, precise levelling and
                          clean finish.
                        </p>
                        <p>
                          An 85 inch TV is heavier, larger and requires more care
                          than a standard screen. Before drilling, wall type,
                          bracket, VESA size, ideal height, viewing distance and
                          outlet position are checked.
                        </p>
                        <p>
                          The service is suitable for large living rooms,
                          bedrooms, offices, bars, cafés, tourist apartments and
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
                        ? "El objetivo es dejar una pantalla muy grande instalada de forma segura, centrada, nivelada y cómoda para ver."
                        : "The goal is to leave an extra-large screen installed safely, centered, level and comfortable to watch."}
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
                      ? "Para una TV de 85 pulgadas, la pared es crítica. No todas las paredes soportan igual una pantalla tan grande."
                      : "For an 85 inch TV, the wall is critical. Not every wall supports such a large screen the same way."}
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
                        ? "El soporte debe ser compatible con una TV de 85 pulgadas, con su peso y con el estándar VESA. Para pantallas grandes no conviene usar soportes débiles."
                        : "The bracket must be compatible with an 85 inch TV, its weight and VESA standard. Weak brackets are not recommended for large screens."}
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
                          La altura de una TV de 85 pulgadas debe elegirse con
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
                          The height of an 85 inch TV should be chosen carefully.
                          If it is mounted too high, it may feel uncomfortable
                          for long viewing. If it is too low, it may not work well
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
                        ? "Montaje de TV 85 pulgadas con cables más limpios"
                        : "85 inch TV mounting with cleaner cables"}
                    </h2>

                    <div className="mt-5 space-y-5 text-[15px] leading-8 text-gray-700 sm:text-base">
                      {isEs ? (
                        <>
                          <p>
                            En una pantalla tan grande, los cables visibles llaman
                            mucho la atención. Por eso se puede mejorar el acabado
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
                            On such a large screen, visible cables attract a lot
                            of attention. The finish can be improved with
                            raceways, clean routing or basic organization of HDMI,
                            power and devices.
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
                        ? "Montaje TV 85 pulgadas en Valencia y alrededores"
                        : "85 inch TV mounting in Valencia and nearby areas"}
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
                ? "THEVULGO • Montaje TV 85 pulgadas Valencia • TV grande pared • Instalador TV Valencia"
                : "THEVULGO • 85 inch TV Mounting Valencia • Large TV wall mounting • TV Installer Valencia"}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}