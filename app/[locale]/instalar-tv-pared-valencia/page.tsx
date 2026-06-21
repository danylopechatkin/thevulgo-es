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
  Wrench,
  Hammer,
  Settings,
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
    ? "Instalar TV en Pared Valencia | Montaje Profesional | THEVULGO"
    : "Install TV on Wall Valencia | Professional TV Mounting | THEVULGO";

  const description = isEs
    ? "Servicio profesional para instalar TV en pared en Valencia. Montaje seguro, soporte fijo, inclinable o articulado, TVs grandes, pladur, ladrillo, hormigón y ocultación de cables. Desde 49€."
    : "Professional service to install TV on wall in Valencia. Safe mounting, fixed, tilting or full-motion brackets, large TVs, drywall, brick, concrete and cable concealment. From €49.";

  const url = `${baseUrl}/${locale}/instalar-tv-pared-valencia`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        es: `${baseUrl}/es/instalar-tv-pared-valencia`,
        en: `${baseUrl}/en/instalar-tv-pared-valencia`,
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
          "instalar tv pared valencia",
          "instalar tv en pared valencia",
          "montaje tv pared valencia",
          "colgar tv pared valencia",
          "instalador tv valencia",
          "montaje tv valencia",
          "instalacion soporte tv valencia",
          "montar televisor pared valencia",
          "ocultar cables tv valencia",
          "tv pladur valencia",
          "tv ladrillo valencia",
          "manitas tv valencia",
        ]
      : [
          "install tv on wall valencia",
          "tv wall mounting valencia",
          "mount tv on wall valencia",
          "hang tv on wall valencia",
          "tv installer valencia",
          "hide tv cables valencia",
          "drywall tv mounting valencia",
        ],
  };
}

export default async function Page({ params }: Props) {
  const { locale } = await params;
  const isEs = locale === "es";

  const pageUrl = `${baseUrl}/${locale}/instalar-tv-pared-valencia`;
  const estimateHref = `/${locale}/estimate?category=tv-mounting`;

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, necesito instalar una TV en pared en Valencia. Me gustaría pedir presupuesto."
      : "Hi! I need to install a TV on the wall in Valencia. I’d like an estimate."
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
      ? "Instalar TV en pared en Valencia"
      : "Install TV on wall in Valencia",
    serviceType: isEs ? "Montaje de TV en pared" : "TV wall mounting",
    provider: {
      "@id": `${baseUrl}/#localbusiness`,
    },
    areaServed: {
      "@type": "City",
      name: "Valencia",
    },
    url: pageUrl,
    description: isEs
      ? "Servicio profesional para instalar televisión en pared en Valencia con soporte fijo, inclinable o articulado, montaje seguro y acabado limpio."
      : "Professional service to install a TV on the wall in Valencia with fixed, tilting or full-motion brackets, safe mounting and clean finish.",
    offers: {
      "@type": "Offer",
      priceCurrency: "EUR",
      price: "49",
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
          ? "¿Cuánto cuesta instalar una TV en pared en Valencia?"
          : "How much does it cost to install a TV on the wall in Valencia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: isEs
            ? "La instalación básica de TV en pared empieza desde 49 €. El precio final depende del tamaño de la TV, tipo de pared, soporte, altura, ocultación de cables y dificultad."
            : "Basic TV wall installation starts from €49. The final price depends on TV size, wall type, bracket, height, cable concealment and complexity.",
        },
      },
      {
        "@type": "Question",
        name: isEs
          ? "¿Se puede instalar una TV en pared de pladur?"
          : "Can a TV be installed on drywall?",
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
          ? "¿Podéis ocultar los cables de la TV?"
          : "Can you hide the TV cables?",
        acceptedAnswer: {
          "@type": "Answer",
          text: isEs
            ? "Sí. Se pueden usar canaletas, rutas limpias o soluciones de cable management según la pared, enchufes y dispositivos."
            : "Yes. Raceways, clean routes or cable management solutions can be used depending on wall, outlets and devices.",
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
          ? "Instalar TV en Pared Valencia"
          : "Install TV on Wall Valencia",
        item: pageUrl,
      },
    ],
  };

  const copy = {
    badge: isEs
      ? "THEVULGO • Instalar TV en pared Valencia"
      : "THEVULGO • Install TV on wall Valencia",

    heroTitle: isEs
      ? "Instalar TV en pared en Valencia"
      : "Install TV on Wall in Valencia",

    heroSubtitle: isEs
      ? "Servicio profesional para instalar televisores en pared con soporte fijo, inclinable o articulado. Montaje seguro en ladrillo, hormigón o pladur, altura correcta, nivelación precisa y opción de ocultar cables."
      : "Professional service to install TVs on the wall with fixed, tilting or full-motion brackets. Safe mounting on brick, concrete or drywall, correct height, precise levelling and cable concealment options.",

    primaryCta: isEs ? "Pedir presupuesto" : "Get estimate",

    secondaryCta: isEs ? "WhatsApp rápido" : "Quick WhatsApp",

    heroNote: isEs
      ? "Desde 49 €. Precio final según pared, tamaño de TV, soporte, altura y cableado."
      : "From €49. Final price depends on wall, TV size, bracket, height and cabling.",

    servicesTitle: isEs
      ? "Servicio para instalar TV en pared"
      : "TV wall installation service",

    seoTitle: isEs
      ? "Instalación de TV en pared con acabado limpio"
      : "TV wall installation with clean finish",

    includedTitle: isEs ? "Qué incluye el servicio" : "What is included",

    processTitle: isEs ? "Cómo funciona" : "How it works",

    wallTitle: isEs
      ? "Instalación en diferentes tipos de pared"
      : "Installation on different wall types",

    bracketTitle: isEs ? "Tipos de soporte TV" : "TV bracket types",

    sizeTitle: isEs ? "Instalación según tamaño de TV" : "Installation by TV size",

    cableTitle: isEs ? "Ocultación de cables" : "Cable concealment",

    areasTitle: isEs ? "Zonas de Valencia" : "Valencia areas",

    linksTitle: isEs ? "Servicios relacionados" : "Related services",

    faqTitle: isEs
      ? "Preguntas frecuentes sobre instalar TV en pared"
      : "Install TV on wall FAQ",

    finalTitle: isEs
      ? "¿Quieres instalar tu TV en pared?"
      : "Want to install your TV on the wall?",

    finalText: isEs
      ? "Envía fotos de la pared, TV, soporte y zona de enchufes por WhatsApp para recibir una estimación clara antes de reservar."
      : "Send photos of the wall, TV, bracket and outlet area by WhatsApp to receive a clear estimate before booking.",
  };

  const trustPoints = [
    {
      title: isEs ? "Montaje nivelado" : "Level mounting",
      text: isEs
        ? "La TV se mide, se centra y se nivela antes de fijarla definitivamente."
        : "The TV is measured, centered and levelled before final fixing.",
      icon: <Ruler className="h-5 w-5" />,
    },
    {
      title: isEs ? "Fijación segura" : "Secure fixing",
      text: isEs
        ? "Se usan fijaciones adecuadas según pared, soporte, peso y tamaño."
        : "Suitable fixings are used depending on wall, bracket, weight and size.",
      icon: <ShieldCheck className="h-5 w-5" />,
    },
    {
      title: isEs ? "Resultado limpio" : "Clean result",
      text: isEs
        ? "Se busca un acabado ordenado, cómodo y visualmente limpio."
        : "The goal is a tidy, comfortable and visually clean finish.",
      icon: <CheckCircle2 className="h-5 w-5" />,
    },
  ];

  const services = [
    {
      title: isEs ? "Instalar TV en pared" : "Install TV on wall",
      text: isEs
        ? "Montaje completo de televisión en pared con soporte compatible y nivelación precisa."
        : "Complete TV wall installation with compatible bracket and precise levelling.",
      icon: <Tv className="h-5 w-5" />,
    },
    {
      title: isEs ? "Soporte fijo" : "Fixed bracket",
      text: isEs
        ? "Ideal para dejar la TV cerca de la pared con acabado simple y limpio."
        : "Ideal to keep the TV close to the wall with a simple clean finish.",
      icon: <Monitor className="h-5 w-5" />,
    },
    {
      title: isEs ? "Soporte articulado" : "Full-motion bracket",
      text: isEs
        ? "Permite mover la TV, girarla o separarla de la pared según el espacio."
        : "Allows the TV to move, turn or pull away from the wall depending on the space.",
      icon: <Settings className="h-5 w-5" />,
    },
    {
      title: isEs ? "Cableado limpio" : "Clean cabling",
      text: isEs
        ? "Opciones para ordenar cables con canaleta, ruta limpia o cable management."
        : "Options to organize cables with raceways, clean routing or cable management.",
      icon: <Cable className="h-5 w-5" />,
    },
  ];

  const included = isEs
    ? [
        "Instalación de TV en pared",
        "Montaje de soporte fijo, inclinable o articulado",
        "Medición de altura ideal",
        "Nivelación y centrado de pantalla",
        "Revisión del tipo de pared",
        "Instalación en ladrillo, hormigón o pladur",
        "Montaje de TVs de 43, 55, 65, 75 y 85 pulgadas",
        "Revisión del soporte si ya lo compraste",
        "Opciones para ocultar cables",
        "Instalación para salón, dormitorio, oficina o local",
        "Comprobación final de estabilidad",
        "Presupuesto claro antes de reservar",
      ]
    : [
        "TV wall installation",
        "Fixed, tilting or full-motion bracket mounting",
        "Ideal height measurement",
        "Screen levelling and centering",
        "Wall type check",
        "Installation on brick, concrete or drywall",
        "Mounting for 43, 55, 65, 75 and 85 inch TVs",
        "Bracket check if you already bought it",
        "Cable concealment options",
        "Installation for living room, bedroom, office or unit",
        "Final stability check",
        "Clear estimate before booking",
      ];

  const process = [
    {
      step: "01",
      title: isEs ? "Envía fotos" : "Send photos",
      text: isEs
        ? "Foto de la pared, TV, soporte, enchufes y zona donde irá instalada."
        : "Photo of the wall, TV, bracket, outlets and installation area.",
      icon: <PhoneCall className="h-5 w-5" />,
    },
    {
      step: "02",
      title: isEs ? "Estimación" : "Estimate",
      text: isEs
        ? "Se calcula precio según tamaño, pared, soporte, altura y cableado."
        : "Price is estimated based on size, wall, bracket, height and cabling.",
      icon: <BadgeCheck className="h-5 w-5" />,
    },
    {
      step: "03",
      title: isEs ? "Montaje" : "Mounting",
      text: isEs
        ? "Se mide, nivela, perfora y se instala la TV con fijación adecuada."
        : "The TV is measured, levelled, drilled and installed with suitable fixing.",
      icon: <Drill className="h-5 w-5" />,
    },
    {
      step: "04",
      title: isEs ? "Revisión final" : "Final check",
      text: isEs
        ? "Se revisa estabilidad, posición, cableado y resultado visual."
        : "Stability, position, cabling and visual result are checked.",
      icon: <CheckCircle2 className="h-5 w-5" />,
    },
  ];

  const wallTypes = [
    {
      title: isEs ? "Pared de ladrillo" : "Brick wall",
      text: isEs
        ? "Muy común en Valencia. Permite una fijación sólida con tacos y tornillos adecuados."
        : "Very common in Valencia. Allows solid fixing with suitable anchors and screws.",
      icon: <Home className="h-5 w-5" />,
    },
    {
      title: isEs ? "Pared de hormigón" : "Concrete wall",
      text: isEs
        ? "Necesita brocas correctas, medición precisa y fijación fuerte."
        : "Needs correct drill bits, precise measuring and strong fixing.",
      icon: <Building2 className="h-5 w-5" />,
    },
    {
      title: isEs ? "Pared de pladur" : "Drywall wall",
      text: isEs
        ? "Requiere revisar estructura, peso de la TV y puntos de fijación antes de montar."
        : "Requires checking the structure, TV weight and fixing points before mounting.",
      icon: <Layers className="h-5 w-5" />,
    },
  ];

  const brackets = [
    {
      title: isEs ? "Soporte fijo" : "Fixed bracket",
      text: isEs
        ? "Buena opción para salones donde la TV debe quedar cerca de la pared."
        : "Good option for living rooms where the TV should stay close to the wall.",
    },
    {
      title: isEs ? "Soporte inclinable" : "Tilting bracket",
      text: isEs
        ? "Útil si la TV va un poco más alta y quieres mejorar el ángulo de visión."
        : "Useful if the TV is slightly higher and you want to improve the viewing angle.",
    },
    {
      title: isEs ? "Soporte articulado" : "Full-motion bracket",
      text: isEs
        ? "Perfecto si quieres mover la TV hacia un lado, girarla o separarla de la pared."
        : "Perfect if you want to move the TV sideways, turn it or pull it away from the wall.",
    },
  ];

  const sizes = [
    {
      title: isEs ? "TV 43–55 pulgadas" : "43–55 inch TV",
      text: isEs
        ? "Tamaño habitual para dormitorios, salones pequeños y apartamentos."
        : "Common size for bedrooms, small living rooms and apartments.",
      price: isEs ? "desde €49" : "from €49",
    },
    {
      title: isEs ? "TV 65 pulgadas" : "65 inch TV",
      text: isEs
        ? "Muy común en salones. Requiere medir bien altura y distancia de visión."
        : "Very common in living rooms. Requires proper height and viewing distance.",
      price: isEs ? "desde €59" : "from €59",
    },
    {
      title: isEs ? "TV 75 pulgadas" : "75 inch TV",
      text: isEs
        ? "Pantalla grande con más peso, más cuidado y soporte adecuado."
        : "Large screen with more weight, extra care and suitable bracket.",
      price: isEs ? "desde €79" : "from €79",
    },
    {
      title: isEs ? "TV 85 pulgadas" : "85 inch TV",
      text: isEs
        ? "Instalación avanzada para pantallas grandes y paredes bien revisadas."
        : "Advanced installation for large screens and carefully checked walls.",
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
      label: isEs ? "Samsung Frame Valencia" : "Samsung Frame Valencia",
      href: `/${locale}/montaje-tv-samsung-frame-valencia`,
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
          q: "¿Cuánto cuesta instalar una TV en pared en Valencia?",
          a: "El montaje básico empieza desde 49 €. El precio final depende de tamaño, tipo de pared, soporte, altura, cableado y dificultad.",
        },
        {
          q: "¿Puedo instalar una TV en pared de pladur?",
          a: "Sí, pero hay que revisar estructura, peso, soporte y puntos de fijación. En algunos casos puede hacer falta refuerzo.",
        },
        {
          q: "¿Instaláis soportes articulados?",
          a: "Sí. Se pueden instalar soportes fijos, inclinables y articulados si son compatibles con la TV y adecuados para la pared.",
        },
        {
          q: "¿Podéis ocultar los cables?",
          a: "Sí. Se pueden usar canaletas, rutas limpias o soluciones de cable management según la pared y los enchufes.",
        },
        {
          q: "¿Tengo que comprar el soporte antes?",
          a: "Puedes comprarlo tú o pedir recomendación. Es importante que sea compatible con el tamaño y VESA de la TV.",
        },
        {
          q: "¿Qué altura es mejor para instalar la TV?",
          a: "En salones normalmente el centro de la pantalla debe quedar cerca del nivel de los ojos sentado. En dormitorios puede variar.",
        },
        {
          q: "¿Instaláis TVs grandes?",
          a: "Sí. Se instalan TVs de 65, 75 y 85 pulgadas con revisión de pared y soporte adecuado.",
        },
        {
          q: "¿Trabajáis en Valencia y alrededores?",
          a: "Sí. Valencia ciudad y zonas cercanas como Ruzafa, Campanar, Benimaclet, Mislata, Paterna, Torrent y alrededores.",
        },
      ]
    : [
        {
          q: "How much does it cost to install a TV on the wall in Valencia?",
          a: "Basic mounting starts from €49. Final price depends on size, wall type, bracket, height, cabling and complexity.",
        },
        {
          q: "Can I install a TV on drywall?",
          a: "Yes, but the structure, weight, bracket and fixing points must be checked. Reinforcement may be needed in some cases.",
        },
        {
          q: "Do you install full-motion brackets?",
          a: "Yes. Fixed, tilting and full-motion brackets can be installed if compatible with the TV and suitable for the wall.",
        },
        {
          q: "Can you hide the cables?",
          a: "Yes. Raceways, clean routes or cable management solutions can be used depending on wall and outlets.",
        },
        {
          q: "Do I need to buy the bracket first?",
          a: "You can buy it yourself or ask for a recommendation. It must be compatible with TV size and VESA.",
        },
        {
          q: "What is the best height for TV installation?",
          a: "In living rooms, the center of the screen is usually close to seated eye level. In bedrooms it can vary.",
        },
        {
          q: "Do you install large TVs?",
          a: "Yes. 65, 75 and 85 inch TVs are installed with wall check and suitable bracket.",
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
                      ? "Instalar una TV en pared parece sencillo, pero para que quede segura y bien alineada hay que revisar la pared, el soporte, el peso, la altura y el cableado."
                      : "Installing a TV on the wall looks simple, but for a safe and well-aligned result the wall, bracket, weight, height and cabling must be checked."}
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
                    SEO • TV Pared Valencia
                  </div>

                  <h2 className="mt-5 text-3xl font-black sm:text-4xl">
                    {copy.seoTitle}
                  </h2>

                  <div className="mt-7 space-y-5 text-[15px] leading-8 text-gray-700 sm:text-base">
                    {isEs ? (
                      <>
                        <p>
                          Si buscas{" "}
                          <strong>instalar TV en pared en Valencia</strong>,
                          THEVULGO ofrece un servicio profesional para dejar tu
                          televisor seguro, nivelado y con un acabado limpio. La
                          instalación se puede realizar en salones, dormitorios,
                          oficinas, apartamentos turísticos, bares, cafeterías y
                          locales comerciales.
                        </p>
                        <p>
                          Una televisión mal instalada puede quedar torcida,
                          demasiado alta, demasiado baja o con una fijación poco
                          segura. Por eso antes de perforar se revisa el tipo de
                          pared, el tamaño de la pantalla, el soporte, la
                          distancia de visión y la posición de enchufes.
                        </p>
                        <p>
                          Trabajamos con soportes fijos, inclinables y
                          articulados. También se pueden preparar soluciones para
                          ocultar cables, instalar soundbar, organizar HDMI,
                          colocar dispositivos cerca de la TV o mejorar la zona
                          multimedia.
                        </p>
                      </>
                    ) : (
                      <>
                        <p>
                          If you need to{" "}
                          <strong>install a TV on the wall in Valencia</strong>,
                          THEVULGO provides a professional service to leave your
                          television safe, level and clean-looking. Installation
                          can be done in living rooms, bedrooms, offices, tourist
                          apartments, bars, cafés and commercial units.
                        </p>
                        <p>
                          A poorly installed TV can be crooked, too high, too low
                          or unsafe. That is why the wall type, screen size,
                          bracket, viewing distance and outlet position are
                          checked before drilling.
                        </p>
                        <p>
                          We work with fixed, tilting and full-motion brackets.
                          Cable concealment, soundbar mounting, HDMI organization
                          and media area improvements can also be prepared.
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
                        ? "El servicio está pensado para montar la TV de forma segura, cómoda para ver y visualmente ordenada."
                        : "The service is designed to mount the TV safely, comfortably for viewing and visually tidy."}
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
                      ? "Cada pared necesita una fijación diferente. El tipo de pared influye directamente en la seguridad del montaje."
                      : "Every wall needs a different fixing strategy. Wall type directly affects mounting safety."}
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
                        ? "Elegir el soporte correcto es clave para que la TV quede cómoda, segura y con el movimiento que necesitas."
                        : "Choosing the right bracket is key for the TV to be comfortable, safe and with the movement you need."}
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
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1fr]">
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-yellow-50 px-4 py-1 text-xs font-bold">
                      <Cable className="h-4 w-4" />
                      {copy.cableTitle}
                    </div>

                    <h2 className="mt-5 text-3xl font-black sm:text-4xl">
                      {isEs
                        ? "Instalar TV en pared sin cables colgando"
                        : "Install TV on wall without hanging cables"}
                    </h2>

                    <div className="mt-5 space-y-5 text-[15px] leading-8 text-gray-700 sm:text-base">
                      {isEs ? (
                        <>
                          <p>
                            Una instalación limpia no termina cuando la TV queda
                            colgada. El cableado también influye mucho en el
                            resultado visual. Si los cables quedan visibles, la
                            zona puede verse desordenada aunque la TV esté bien
                            nivelada.
                          </p>
                          <p>
                            Según la ubicación de enchufes, mueble y dispositivos,
                            se puede usar canaleta, ordenar HDMI, preparar una
                            ruta limpia o dejar el cableado más discreto.
                          </p>
                        </>
                      ) : (
                        <>
                          <p>
                            A clean installation does not end when the TV is on
                            the wall. Cabling also affects the visual result. If
                            cables are visible, the area can look messy even if
                            the TV is level.
                          </p>
                          <p>
                            Depending on outlets, furniture and devices, raceways,
                            HDMI organization, clean routing or more discreet
                            cabling can be prepared.
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
                      {isEs ? "Opciones habituales" : "Common options"}
                    </h3>

                    <div className="mt-5 space-y-4">
                      {(isEs
                        ? [
                            "Canaleta blanca exterior",
                            "Ruta limpia hacia enchufe cercano",
                            "Ordenar HDMI, corriente y dispositivos",
                            "Preparación para soundbar",
                            "Cableado detrás de mueble TV",
                          ]
                        : [
                            "White external raceway",
                            "Clean route to nearby outlet",
                            "Organize HDMI, power and devices",
                            "Soundbar preparation",
                            "Cabling behind TV furniture",
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
                        ? "Instalar TV en pared en Valencia y alrededores"
                        : "Install TV on wall in Valencia and nearby areas"}
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
                ? "THEVULGO • Instalar TV en pared Valencia • Montaje TV Valencia • Instalador TV Valencia"
                : "THEVULGO • Install TV on wall Valencia • TV Mounting Valencia • TV Installer Valencia"}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}