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
  AlertTriangle,
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
    ? "Montaje TV 98 Pulgadas Valencia | Instalación Profesional | THEVULGO"
    : "98 Inch TV Mounting Valencia | Professional Installation | THEVULGO";

  const description = isEs
    ? "Montaje profesional de TV de 98 pulgadas en Valencia. Instalación segura para pantallas gigantes, revisión de pared, soporte compatible, manipulación cuidadosa y ocultación de cables. Desde 129€."
    : "Professional 98 inch TV mounting in Valencia. Safe installation for giant screens, wall check, compatible bracket, careful handling and cable concealment. From €129.";

  const url = `${baseUrl}/${locale}/montaje-tv-98-pulgadas-valencia`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        es: `${baseUrl}/es/montaje-tv-98-pulgadas-valencia`,
        en: `${baseUrl}/en/montaje-tv-98-pulgadas-valencia`,
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
          "montaje tv 98 pulgadas valencia",
          "instalar tv 98 pulgadas valencia",
          "colgar tv 98 pulgadas valencia",
          "montar tv 98 valencia",
          "instalador tv 98 pulgadas valencia",
          "tv gigante pared valencia",
          "montaje tv gigante valencia",
          "montaje tv grande valencia",
          "soporte tv 98 pulgadas valencia",
          "ocultar cables tv 98 valencia",
        ]
      : [
          "98 inch tv mounting valencia",
          "install 98 inch tv valencia",
          "hang 98 inch tv valencia",
          "giant tv mounting valencia",
          "extra large tv mounting valencia",
          "large tv installer valencia",
          "98 inch tv wall mount valencia",
        ],
  };
}

export default async function Page({ params }: Props) {
  const { locale } = await params;
  const isEs = locale === "es";

  const pageUrl = `${baseUrl}/${locale}/montaje-tv-98-pulgadas-valencia`;
  const estimateHref = `/${locale}/estimate?category=tv-mounting`;

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, necesito montar una TV de 98 pulgadas en Valencia. Me gustaría pedir presupuesto."
      : "Hi! I need to mount a 98 inch TV in Valencia. I’d like an estimate."
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
      ? "Montaje de TV 98 pulgadas en Valencia"
      : "98 Inch TV Mounting in Valencia",
    serviceType: isEs ? "Montaje de TV gigante" : "Giant TV mounting",
    provider: {
      "@id": `${baseUrl}/#localbusiness`,
    },
    areaServed: {
      "@type": "City",
      name: "Valencia",
    },
    url: pageUrl,
    description: isEs
      ? "Servicio profesional para montar televisores de 98 pulgadas en pared en Valencia con soporte compatible, fijación segura, manipulación cuidadosa, nivelación precisa y acabado limpio."
      : "Professional service to mount 98 inch TVs on the wall in Valencia with compatible bracket, secure fixing, careful handling, precise levelling and clean finish.",
    offers: {
      "@type": "Offer",
      priceCurrency: "EUR",
      price: "129",
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
          ? "¿Cuánto cuesta montar una TV de 98 pulgadas en Valencia?"
          : "How much does it cost to mount a 98 inch TV in Valencia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: isEs
            ? "El montaje de una TV de 98 pulgadas empieza desde 129 €. El precio final depende del tipo de pared, soporte, altura, ocultación de cables, ayuda necesaria, peso de la TV y dificultad del trabajo."
            : "98 inch TV mounting starts from €129. The final price depends on wall type, bracket, height, cable concealment, required help, TV weight and job complexity.",
        },
      },
      {
        "@type": "Question",
        name: isEs
          ? "¿Se puede montar una TV de 98 pulgadas en pladur?"
          : "Can a 98 inch TV be mounted on drywall?",
        acceptedAnswer: {
          "@type": "Answer",
          text: isEs
            ? "Puede ser posible, pero hay que revisar muy bien la estructura. Una TV de 98 pulgadas normalmente requiere refuerzo, puntos sólidos o una solución específica para evitar riesgos."
            : "It may be possible, but the structure must be checked very carefully. A 98 inch TV usually requires reinforcement, solid fixing points or a specific solution to avoid risks.",
        },
      },
      {
        "@type": "Question",
        name: isEs
          ? "¿Hace falta dos personas para montar una TV de 98 pulgadas?"
          : "Are two people needed to mount a 98 inch TV?",
        acceptedAnswer: {
          "@type": "Answer",
          text: isEs
            ? "Sí. Una TV de 98 pulgadas es una pantalla gigante, pesada y delicada. Normalmente se necesita ayuda adicional para manipularla y colocarla de forma segura."
            : "Yes. A 98 inch TV is a giant, heavy and delicate screen. Extra help is normally needed to handle and position it safely.",
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
        name: isEs ? "Montaje TV 98 pulgadas" : "98 Inch TV Mounting",
        item: pageUrl,
      },
    ],
  };

  const copy = {
    badge: isEs
      ? "THEVULGO • TV 98 pulgadas Valencia"
      : "THEVULGO • 98 inch TV Valencia",

    heroTitle: isEs
      ? "Montaje de TV 98 pulgadas en Valencia"
      : "98 Inch TV Mounting in Valencia",

    heroSubtitle: isEs
      ? "Instalación profesional de televisores de 98 pulgadas en pared. Servicio para pantallas gigantes con revisión de pared, soporte compatible, manipulación cuidadosa, nivelación precisa y opción de ocultar cables."
      : "Professional 98 inch TV wall installation. Service for giant screens with wall check, compatible bracket, careful handling, precise levelling and cable concealment options.",

    primaryCta: isEs ? "Pedir presupuesto" : "Get estimate",

    secondaryCta: isEs ? "WhatsApp rápido" : "Quick WhatsApp",

    heroNote: isEs
      ? "Desde 129 €. Precio final según pared, soporte, altura, ayuda necesaria, cableado, peso y dificultad."
      : "From €129. Final price depends on wall, bracket, height, required help, cabling, weight and complexity.",

    servicesTitle: isEs
      ? "Servicio para montar TV de 98 pulgadas"
      : "98 inch TV mounting service",

    seoTitle: isEs
      ? "Instalación segura para pantallas gigantes de 98 pulgadas"
      : "Safe installation for giant 98 inch screens",

    includedTitle: isEs ? "Qué incluye el servicio" : "What is included",

    processTitle: isEs ? "Cómo funciona" : "How it works",

    wallTitle: isEs
      ? "Pared adecuada para una TV de 98 pulgadas"
      : "Suitable wall for a 98 inch TV",

    bracketTitle: isEs
      ? "Soporte correcto para TV de 98 pulgadas"
      : "Correct bracket for 98 inch TV",

    heightTitle: isEs
      ? "Altura ideal para una TV de 98 pulgadas"
      : "Ideal height for a 98 inch TV",

    cableTitle: isEs ? "Ocultación de cables" : "Cable concealment",

    areasTitle: isEs ? "Zonas de Valencia" : "Valencia areas",

    linksTitle: isEs ? "Servicios relacionados" : "Related services",

    faqTitle: isEs
      ? "Preguntas frecuentes sobre montaje TV 98 pulgadas"
      : "98 inch TV mounting FAQ",

    finalTitle: isEs
      ? "¿Quieres montar una TV de 98 pulgadas?"
      : "Want to mount a 98 inch TV?",

    finalText: isEs
      ? "Envía fotos de la pared, TV, soporte y zona de enchufes por WhatsApp para recibir una estimación clara antes de reservar."
      : "Send photos of the wall, TV, bracket and outlet area by WhatsApp to receive a clear estimate before booking.",
  };

  const trustPoints = [
    {
      title: isEs ? "Pantalla gigante" : "Giant screen",
      text: isEs
        ? "Una TV de 98 pulgadas requiere planificación, espacio, ayuda y manipulación muy cuidadosa."
        : "A 98 inch TV requires planning, space, help and very careful handling.",
      icon: <Monitor className="h-5 w-5" />,
    },
    {
      title: isEs ? "Seguridad primero" : "Safety first",
      text: isEs
        ? "Se revisa pared, soporte, peso, puntos de anclaje y condiciones antes de perforar."
        : "Wall, bracket, weight, fixing points and conditions are checked before drilling.",
      icon: <ShieldCheck className="h-5 w-5" />,
    },
    {
      title: isEs ? "Trabajo profesional" : "Professional work",
      text: isEs
        ? "Pantallas gigantes son delicadas: se mide, se nivela y se coloca con máxima atención."
        : "Giant screens are delicate: everything is measured, levelled and positioned with maximum care.",
      icon: <CheckCircle2 className="h-5 w-5" />,
    },
  ];

  const services = [
    {
      title: isEs ? "Montaje TV 98 pulgadas" : "98 inch TV mounting",
      text: isEs
        ? "Instalación completa de TV gigante en pared con medición y nivelación precisa."
        : "Complete giant TV wall installation with precise measuring and levelling.",
      icon: <Tv className="h-5 w-5" />,
    },
    {
      title: isEs ? "Manipulación con ayuda" : "Assisted handling",
      text: isEs
        ? "Una pantalla de 98 pulgadas necesita más personas, más espacio y más cuidado."
        : "A 98 inch screen needs more people, more space and more care.",
      icon: <Users className="h-5 w-5" />,
    },
    {
      title: isEs ? "Soporte de alta resistencia" : "Heavy-duty bracket",
      text: isEs
        ? "El soporte debe ser compatible con peso, VESA, pared y tamaño de pantalla."
        : "The bracket must match weight, VESA, wall type and screen size.",
      icon: <Settings className="h-5 w-5" />,
    },
    {
      title: isEs ? "Revisión de riesgo" : "Risk check",
      text: isEs
        ? "Se revisa si la pared y el soporte son adecuados antes de aceptar el montaje."
        : "Wall and bracket suitability are checked before accepting the mounting.",
      icon: <AlertTriangle className="h-5 w-5" />,
    },
  ];

  const included = isEs
    ? [
        "Montaje de TV de 98 pulgadas en pared",
        "Revisión del tipo de pared antes de perforar",
        "Montaje de soporte fijo, inclinable o articulado compatible",
        "Medición de altura ideal para salón grande o local",
        "Nivelación y centrado visual de pantalla gigante",
        "Instalación en ladrillo, hormigón o pared revisada",
        "Manipulación cuidadosa de pantalla muy grande",
        "Revisión de compatibilidad del soporte y VESA",
        "Opciones para ocultar cables",
        "Instalación para casas grandes, oficinas, bares y locales",
        "Comprobación final de estabilidad",
        "Presupuesto claro antes de reservar",
      ]
    : [
        "98 inch TV wall mounting",
        "Wall type check before drilling",
        "Compatible fixed, tilting or full-motion bracket mounting",
        "Ideal height measurement for large living rooms or units",
        "Giant screen levelling and visual centering",
        "Installation on brick, concrete or checked wall",
        "Careful handling of extra-large screen",
        "Bracket and VESA compatibility check",
        "Cable concealment options",
        "Installation for large homes, offices, bars and units",
        "Final stability check",
        "Clear estimate before booking",
      ];

  const process = [
    {
      step: "01",
      title: isEs ? "Envía fotos" : "Send photos",
      text: isEs
        ? "Foto de TV, soporte, pared completa, enchufes, acceso y zona donde irá instalada."
        : "Photo of TV, bracket, full wall, outlets, access and installation area.",
      icon: <PhoneCall className="h-5 w-5" />,
    },
    {
      step: "02",
      title: isEs ? "Revisión previa" : "Pre-check",
      text: isEs
        ? "Se revisa peso, medidas, pared, soporte, altura, acceso y si hará falta ayuda adicional."
        : "Weight, dimensions, wall, bracket, height, access and extra help are reviewed.",
      icon: <Eye className="h-5 w-5" />,
    },
    {
      step: "03",
      title: isEs ? "Montaje" : "Mounting",
      text: isEs
        ? "Se mide, nivela, perfora y se instala la TV de 98 pulgadas con máxima precaución."
        : "The 98 inch TV is measured, levelled, drilled and mounted with maximum care.",
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
        ? "Puede ser adecuada si tiene buena resistencia y se usan fijaciones correctas para pantalla gigante."
        : "Can be suitable if it has good strength and correct fixings are used for a giant screen.",
      icon: <Home className="h-5 w-5" />,
    },
    {
      title: isEs ? "Pared de hormigón" : "Concrete wall",
      text: isEs
        ? "Normalmente es la opción más segura para una TV de 98 pulgadas si el soporte es compatible."
        : "Usually the safest option for a 98 inch TV if the bracket is compatible.",
      icon: <Building2 className="h-5 w-5" />,
    },
    {
      title: isEs ? "Pared de pladur" : "Drywall wall",
      text: isEs
        ? "Necesita revisión especial. Para 98 pulgadas normalmente se requiere refuerzo o estructura sólida."
        : "Needs special checking. For 98 inches, reinforcement or a solid structure is usually required.",
      icon: <Layers className="h-5 w-5" />,
    },
  ];

  const brackets = [
    {
      title: isEs ? "Soporte fijo heavy-duty" : "Heavy-duty fixed bracket",
      text: isEs
        ? "Suele ser la opción más segura para una pantalla gigante si no necesitas movimiento."
        : "Usually the safest option for a giant screen if movement is not needed.",
    },
    {
      title: isEs ? "Soporte inclinable fuerte" : "Strong tilting bracket",
      text: isEs
        ? "Puede ser útil si la pantalla queda alta, pero debe ser de alta resistencia."
        : "Can be useful if the screen is mounted high, but it must be heavy-duty.",
    },
    {
      title: isEs ? "Soporte articulado" : "Full-motion bracket",
      text: isEs
        ? "Para 98 pulgadas debe revisarse con mucha precaución por peso, palanca y resistencia de pared."
        : "For 98 inches, it must be checked very carefully due to weight, leverage and wall strength.",
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
          q: "¿Cuánto cuesta montar una TV de 98 pulgadas en Valencia?",
          a: "El montaje empieza desde 129 €. El precio final depende del tipo de pared, soporte, altura, cableado, peso, acceso y ayuda necesaria.",
        },
        {
          q: "¿Se puede colgar una TV de 98 pulgadas en pladur?",
          a: "Puede ser posible, pero hay que revisar la estructura. Normalmente hace falta refuerzo o puntos de fijación sólidos.",
        },
        {
          q: "¿Qué soporte necesito para una TV de 98 pulgadas?",
          a: "Necesitas un soporte de alta resistencia compatible con el tamaño, peso y VESA de la TV.",
        },
        {
          q: "¿Es mejor soporte fijo o articulado?",
          a: "Para 98 pulgadas normalmente el soporte fijo heavy-duty es más seguro. El articulado exige mucho más a la pared y debe revisarse muy bien.",
        },
        {
          q: "¿Podéis ocultar los cables?",
          a: "Sí. Se puede usar canaleta, ruta limpia o cable management según enchufes, pared, mueble y dispositivos.",
        },
        {
          q: "¿A qué altura se monta una TV de 98 pulgadas?",
          a: "Depende del tamaño del salón, distancia de visión y mueble. La posición debe ser cómoda y visualmente equilibrada.",
        },
        {
          q: "¿Hace falta dos personas para montar una TV de 98 pulgadas?",
          a: "Sí. Una TV de 98 pulgadas es gigante, pesada y delicada, por eso normalmente necesita ayuda adicional.",
        },
        {
          q: "¿Trabajáis en Valencia y alrededores?",
          a: "Sí. Valencia ciudad y zonas cercanas como Ruzafa, Campanar, Benimaclet, Mislata, Paterna, Torrent y alrededores.",
        },
      ]
    : [
        {
          q: "How much does it cost to mount a 98 inch TV in Valencia?",
          a: "Mounting starts from €129. Final price depends on wall type, bracket, height, cabling, weight, access and required help.",
        },
        {
          q: "Can a 98 inch TV be mounted on drywall?",
          a: "It may be possible, but the structure must be checked. Reinforcement or solid fixing points are usually required.",
        },
        {
          q: "What bracket do I need for a 98 inch TV?",
          a: "You need a heavy-duty bracket compatible with the TV size, weight and VESA.",
        },
        {
          q: "Is fixed or full-motion bracket better?",
          a: "For 98 inches, a heavy-duty fixed bracket is usually safer. Full-motion puts much more stress on the wall and must be checked carefully.",
        },
        {
          q: "Can you hide the cables?",
          a: "Yes. Raceways, clean routing or cable management can be used depending on outlets, wall, furniture and devices.",
        },
        {
          q: "What height is best for a 98 inch TV?",
          a: "It depends on room size, viewing distance and furniture. The position should be comfortable and visually balanced.",
        },
        {
          q: "Are two people needed to mount a 98 inch TV?",
          a: "Yes. A 98 inch TV is giant, heavy and delicate, so extra help is normally needed.",
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
                      ? "Una TV de 98 pulgadas es una pantalla gigante. Para instalarla bien hay que revisar pared, soporte, peso, acceso, espacio de trabajo y ayuda necesaria antes de confirmar el montaje."
                      : "A 98 inch TV is a giant screen. To install it properly, wall, bracket, weight, access, work space and required help must be checked before confirming the mounting."}
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
                    SEO • TV 98 pulgadas Valencia
                  </div>

                  <h2 className="mt-5 text-3xl font-black sm:text-4xl">
                    {copy.seoTitle}
                  </h2>

                  <div className="mt-7 space-y-5 text-[15px] leading-8 text-gray-700 sm:text-base">
                    {isEs ? (
                      <>
                        <p>
                          Si buscas{" "}
                          <strong>montaje de TV 98 pulgadas en Valencia</strong>,
                          THEVULGO ofrece una instalación profesional para
                          pantallas gigantes con fijación segura, nivelación
                          precisa y acabado limpio.
                        </p>
                        <p>
                          Una TV de 98 pulgadas es mucho más exigente que una TV
                          estándar. Antes de perforar se revisa el tipo de pared,
                          el soporte, el tamaño VESA, el peso, la altura ideal,
                          la distancia de visión, la ubicación de enchufes y el
                          espacio disponible para manipular la pantalla.
                        </p>
                        <p>
                          Este servicio es ideal para salones grandes, villas,
                          oficinas, salas de reuniones, bares, restaurantes,
                          locales comerciales y espacios donde se necesita una
                          pantalla gigante bien instalada.
                        </p>
                      </>
                    ) : (
                      <>
                        <p>
                          If you need{" "}
                          <strong>98 inch TV mounting in Valencia</strong>,
                          THEVULGO provides professional giant-screen
                          installation with secure fixing, precise levelling and
                          clean finish.
                        </p>
                        <p>
                          A 98 inch TV is much more demanding than a standard TV.
                          Before drilling, wall type, bracket, VESA size, weight,
                          ideal height, viewing distance, outlet position and
                          available space for handling are checked.
                        </p>
                        <p>
                          This service is ideal for large living rooms, villas,
                          offices, meeting rooms, bars, restaurants, commercial
                          units and spaces where a giant screen needs to be
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
                        ? "El objetivo es dejar una pantalla gigante instalada de forma segura, centrada, nivelada y visualmente limpia."
                        : "The goal is to leave a giant screen installed safely, centered, level and visually clean."}
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
                      ? "Para una TV de 98 pulgadas, la pared es el punto más importante. No todas las paredes son adecuadas para una pantalla gigante."
                      : "For a 98 inch TV, the wall is the most important point. Not every wall is suitable for a giant screen."}
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
                        ? "El soporte debe ser de alta resistencia, compatible con una TV de 98 pulgadas, con su peso y con el estándar VESA. Para pantallas gigantes no conviene improvisar."
                        : "The bracket must be heavy-duty, compatible with a 98 inch TV, its weight and VESA standard. For giant screens, improvising is not recommended."}
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
                          La altura de una TV de 98 pulgadas debe elegirse con
                          mucho cuidado. Una pantalla tan grande domina toda la
                          pared, por eso es importante equilibrarla con el sofá,
                          el mueble, la distancia de visión y el centro visual de
                          la estancia.
                        </p>
                        <p>
                          Antes de perforar se marca la posición para confirmar
                          que la TV queda cómoda, centrada y visualmente
                          proporcionada al espacio.
                        </p>
                      </>
                    ) : (
                      <>
                        <p>
                          The height of a 98 inch TV should be chosen very
                          carefully. Such a large screen dominates the wall, so it
                          must be balanced with the sofa, furniture, viewing
                          distance and visual center of the room.
                        </p>
                        <p>
                          Before drilling, the position is marked to confirm that
                          the TV feels comfortable, centered and visually
                          proportional to the space.
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
                        ? "Montaje de TV 98 pulgadas con cables más limpios"
                        : "98 inch TV mounting with cleaner cables"}
                    </h2>

                    <div className="mt-5 space-y-5 text-[15px] leading-8 text-gray-700 sm:text-base">
                      {isEs ? (
                        <>
                          <p>
                            En una pantalla gigante, los cables visibles se notan
                            mucho. Por eso se puede mejorar el acabado con
                            canaleta, ruta limpia o una organización básica de
                            HDMI, alimentación y dispositivos.
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
                            On a giant screen, visible cables stand out a lot.
                            The finish can be improved with raceways, clean
                            routing or basic organization of HDMI, power and
                            devices.
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
                            "Medidas del espacio y acceso",
                            "Confirmar si hay ayuda para levantar la TV",
                          ]
                        : [
                            "Photo of the full wall",
                            "Photo of the bracket if you already have it",
                            "TV model or approximate weight",
                            "Nearby outlet location",
                            "Room/access measurements",
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
                        ? "Montaje TV 98 pulgadas en Valencia y alrededores"
                        : "98 inch TV mounting in Valencia and nearby areas"}
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
                ? "THEVULGO • Montaje TV 98 pulgadas Valencia • TV gigante pared • Instalador TV Valencia"
                : "THEVULGO • 98 inch TV Mounting Valencia • Giant TV wall mounting • TV Installer Valencia"}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}