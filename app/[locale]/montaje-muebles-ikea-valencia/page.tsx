import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  PackageCheck,
  ShieldCheck,
  Wrench,
  Home,
  HelpCircle,
  MapPin,
  Star,
  Ruler,
  BedDouble,
} from "lucide-react";

type PageProps = {
  params: Promise<{ locale: string }>;
};

const siteUrl = "https://www.thevulgo.es";
const phoneNumber = "34610076942";

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";

  const title = isEs
    ? "Montaje de Muebles IKEA en Valencia | Desde 39€ | THEVULGO"
    : "IKEA Furniture Assembly in Valencia | From €39 | THEVULGO";

  const description = isEs
    ? "Montaje profesional de muebles IKEA en Valencia desde 39€. Armarios, camas, cómodas, estanterías, muebles flat-pack, ajuste de puertas, cajones y fijación a pared."
    : "Professional IKEA furniture assembly in Valencia from €39. Wardrobes, beds, dressers, shelves, flat-pack furniture, door and drawer adjustment and wall fixing.";

  return {
    title,
    description,
    keywords: isEs
      ? [
          "montaje muebles IKEA Valencia",
          "montador IKEA Valencia",
          "montar armario IKEA Valencia",
          "montar cama IKEA Valencia",
          "montar cómoda IKEA Valencia",
          "montaje muebles flat pack Valencia",
          "montaje muebles a domicilio Valencia",
          "manitas IKEA Valencia",
        ]
      : [
          "IKEA furniture assembly Valencia",
          "IKEA assembler Valencia",
          "IKEA wardrobe assembly Valencia",
          "IKEA bed assembly Valencia",
          "IKEA dresser assembly Valencia",
          "flat pack furniture assembly Valencia",
          "furniture assembly at home Valencia",
          "handyman IKEA Valencia",
        ],
    alternates: {
      canonical: `${siteUrl}/${locale}/montaje-muebles-ikea-valencia`,
      languages: {
        es: `${siteUrl}/es/montaje-muebles-ikea-valencia`,
        en: `${siteUrl}/en/montaje-muebles-ikea-valencia`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${siteUrl}/${locale}/montaje-muebles-ikea-valencia`,
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

const serviceAreas = [
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

export default async function IkeaFurnitureAssemblyValenciaPage({
  params,
}: PageProps) {
  const { locale } = await params;
  const isEs = locale === "es";

  const pageUrl = `${siteUrl}/${locale}/montaje-muebles-ikea-valencia`;

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, quiero un presupuesto para montaje de muebles IKEA en Valencia."
      : "Hi, I would like a quote for IKEA furniture assembly in Valencia."
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappText}`;

  const faqs = isEs
    ? [
        {
          q: "¿Cuánto cuesta el montaje de muebles IKEA en Valencia?",
          a: "El montaje de muebles IKEA empieza desde 39€. El precio final depende del tipo de mueble, tamaño, número de piezas, dificultad, si hay que fijar a pared y distancia fuera de Valencia.",
        },
        {
          q: "¿Montan armarios IKEA?",
          a: "Sí. Montamos armarios IKEA, incluyendo estructuras, puertas, cajones, baldas y ajustes básicos. Para armarios grandes recomendamos enviar fotos o modelo antes.",
        },
        {
          q: "¿Montan camas, cómodas y estanterías?",
          a: "Sí. Montamos camas, cómodas, estanterías, mesas, escritorios, muebles de TV, zapateros, muebles de baño y otros muebles tipo flat-pack.",
        },
        {
          q: "¿Pueden fijar muebles a la pared?",
          a: "Sí. Podemos fijar muebles a la pared cuando sea necesario por seguridad, especialmente estanterías, armarios altos o muebles que puedan volcar.",
        },
        {
          q: "¿Tengo que tener herramientas?",
          a: "No. Llevamos herramientas profesionales. Solo necesitas tener el mueble, piezas, tornillos e instrucciones disponibles.",
        },
        {
          q: "¿Pueden montar muebles que no son de IKEA?",
          a: "Sí. También montamos muebles de Leroy Merlin, Amazon, Conforama, JYSK, Bauhaus, Carrefour y otras tiendas.",
        },
        {
          q: "¿Cuánto tarda montar un mueble IKEA?",
          a: "Depende del mueble. Una pieza sencilla puede tardar menos de una hora, mientras que armarios, camas con cajones o varios muebles pueden requerir más tiempo.",
        },
        {
          q: "¿Trabajan fuera de Valencia ciudad?",
          a: "Sí. Trabajamos en Valencia y alrededores como Mislata, Burjassot, Paterna, Torrent, Sagunto, Cullera, Gandía y otras zonas cercanas.",
        },
        {
          q: "¿Qué fotos tengo que enviar para presupuesto?",
          a: "Envía fotos de las cajas, nombre o modelo IKEA, número de muebles, ubicación aproximada y si necesitas fijación a pared.",
        },
      ]
    : [
        {
          q: "How much does IKEA furniture assembly cost in Valencia?",
          a: "IKEA furniture assembly starts from €39. Final price depends on furniture type, size, number of pieces, difficulty, wall fixing and distance outside Valencia.",
        },
        {
          q: "Do you assemble IKEA wardrobes?",
          a: "Yes. We assemble IKEA wardrobes, including frames, doors, drawers, shelves and basic adjustments. For large wardrobes, send photos or model first.",
        },
        {
          q: "Do you assemble beds, dressers and shelves?",
          a: "Yes. We assemble beds, dressers, shelves, tables, desks, TV units, shoe cabinets, bathroom furniture and other flat-pack furniture.",
        },
        {
          q: "Can you fix furniture to the wall?",
          a: "Yes. We can fix furniture to the wall when needed for safety, especially tall wardrobes, shelves or furniture that may tip over.",
        },
        {
          q: "Do I need to have tools?",
          a: "No. We bring professional tools. You only need to have the furniture, parts, screws and instructions available.",
        },
        {
          q: "Can you assemble non-IKEA furniture?",
          a: "Yes. We also assemble furniture from Leroy Merlin, Amazon, Conforama, JYSK, Bauhaus, Carrefour and other stores.",
        },
        {
          q: "How long does IKEA assembly take?",
          a: "It depends on the item. A simple piece can take less than one hour, while wardrobes, beds with drawers or multiple items can take longer.",
        },
        {
          q: "Do you work outside Valencia city?",
          a: "Yes. We work in Valencia and nearby areas such as Mislata, Burjassot, Paterna, Torrent, Sagunto, Cullera, Gandía and other nearby zones.",
        },
        {
          q: "What photos should I send for a quote?",
          a: "Send photos of the boxes, IKEA name or model, number of items, approximate location and whether wall fixing is needed.",
        },
      ];

  const furnitureTypes = isEs
    ? [
        {
          title: "Armarios IKEA",
          text: "Montaje de estructuras, puertas, cajones, baldas, bisagras y ajuste básico para uso diario.",
        },
        {
          title: "Camas IKEA",
          text: "Montaje de camas simples, dobles, con cajones, cabeceros, somieres y estructuras flat-pack.",
        },
        {
          title: "Cómodas y cajoneras",
          text: "Montaje de guías, cajones, frontales, estructura y revisión de estabilidad.",
        },
        {
          title: "Estanterías y muebles TV",
          text: "Montaje de estanterías, muebles de salón, muebles TV, zapateros y almacenamiento.",
        },
      ]
    : [
        {
          title: "IKEA wardrobes",
          text: "Assembly of frames, doors, drawers, shelves, hinges and basic adjustment for everyday use.",
        },
        {
          title: "IKEA beds",
          text: "Assembly of single beds, double beds, beds with drawers, headboards, slats and flat-pack frames.",
        },
        {
          title: "Dressers and drawers",
          text: "Assembly of runners, drawers, fronts, frames and stability check.",
        },
        {
          title: "Shelves and TV units",
          text: "Assembly of shelving, living room furniture, TV units, shoe cabinets and storage furniture.",
        },
      ];

  const processSteps = isEs
    ? [
        "Envías fotos del mueble, cajas o modelo IKEA",
        "Revisamos tamaño, piezas y dificultad",
        "Confirmamos si hace falta fijación a pared",
        "Te damos presupuesto claro antes de empezar",
        "Montamos, ajustamos y revisamos estabilidad",
      ]
    : [
        "You send photos of the furniture, boxes or IKEA model",
        "We check size, pieces and difficulty",
        "We confirm whether wall fixing is needed",
        "You receive a clear estimate before the work starts",
        "We assemble, adjust and check stability",
      ];

  const included = isEs
    ? [
        "Revisión de piezas e instrucciones",
        "Montaje de estructura principal",
        "Instalación de puertas y cajones",
        "Ajuste de bisagras y guías",
        "Nivelación y alineación básica",
        "Montaje de baldas y accesorios",
        "Fijación a pared si hace falta",
        "Comprobación final de estabilidad",
        "Presupuesto claro antes del trabajo",
      ]
    : [
        "Review of parts and instructions",
        "Main frame assembly",
        "Installation of doors and drawers",
        "Adjustment of hinges and runners",
        "Basic levelling and alignment",
        "Assembly of shelves and accessories",
        "Wall fixing if needed",
        "Final stability check",
        "Clear estimate before the job",
      ];

  const notIncluded = isEs
    ? [
        "Transporte de muebles desde tienda",
        "Subida de muebles sin ascensor si no se avisa antes",
        "Reparación de piezas rotas de fábrica",
        "Modificaciones estructurales no indicadas por el fabricante",
      ]
    : [
        "Furniture transport from store",
        "Carrying furniture upstairs without prior notice",
        "Repair of factory-broken parts",
        "Structural modifications not recommended by the manufacturer",
      ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: isEs
      ? "Montaje de Muebles IKEA en Valencia"
      : "IKEA Furniture Assembly in Valencia",
    serviceType: isEs ? "Montaje de muebles IKEA" : "IKEA furniture assembly",
    description: isEs
      ? "Montaje profesional de muebles IKEA, flat-pack, armarios, camas, cómodas y estanterías en Valencia."
      : "Professional IKEA and flat-pack furniture assembly, wardrobes, beds, dressers and shelves in Valencia.",
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
    areaServed: serviceAreas.map((area) => ({
      "@type": "Place",
      name: area,
    })),
    offers: {
      "@type": "Offer",
      price: "39",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      url: pageUrl,
    },
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: "THEVULGO",
    url: siteUrl,
    telephone: "+34610076942",
    areaServed: serviceAreas.map((area) => ({
      "@type": "Place",
      name: area,
    })),
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Valencia",
      addressRegion: "Valencia",
      addressCountry: "ES",
    },
    description: isEs
      ? "Montaje de muebles IKEA, flat-pack, armarios, camas, cómodas, estanterías, montaje de TV y servicios handyman en Valencia."
      : "IKEA furniture assembly, flat-pack assembly, wardrobes, beds, dressers, shelves, TV mounting and handyman services in Valencia.",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
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
        name: isEs ? "Montaje de Muebles IKEA en Valencia" : "IKEA Furniture Assembly in Valencia",
        item: pageUrl,
      },
    ],
  };

  return (
    <main className="bg-white text-neutral-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="relative overflow-hidden border-b border-yellow-200 bg-gradient-to-br from-yellow-50 via-white to-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-2 md:px-8 md:py-24">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-yellow-300 bg-yellow-100 px-4 py-2 text-sm font-black text-neutral-900 shadow-sm">
              <MapPin className="h-4 w-4 text-yellow-600" />
              {isEs
                ? "IKEA · Flat-pack · Armarios · Camas · Estanterías"
                : "IKEA · Flat-pack · Wardrobes · Beds · Shelves"}
            </div>

            <h1 className="text-4xl font-black tracking-tight md:text-6xl">
              {isEs ? "Montaje de muebles IKEA" : "IKEA furniture assembly"}{" "}
              <span className="text-yellow-500">
                {isEs ? "en Valencia" : "in Valencia"}
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-700">
              {isEs
                ? "Montaje profesional de muebles IKEA tipo flat-pack desde 39€: armarios, camas, cómodas, muebles, estanterías y más. Ajuste cuidadoso, alineación correcta y estructura estable para uso diario."
                : "Professional IKEA flat-pack furniture assembly from €39: wardrobes, beds, dressers, furniture, shelves and more. Careful adjustment, correct alignment and stable structure for everyday use."}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappUrl}
                className="inline-flex items-center justify-center rounded-xl bg-yellow-400 px-6 py-4 font-black text-black shadow-md transition hover:scale-105 hover:bg-yellow-300"
              >
                {isEs ? "Pedir presupuesto por WhatsApp" : "Get estimate by WhatsApp"}
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>

              <a
                href={`tel:+${phoneNumber}`}
                className="inline-flex items-center justify-center rounded-xl border border-neutral-300 bg-white px-6 py-4 font-black text-neutral-950 shadow-sm transition hover:scale-105 hover:border-yellow-400"
              >
                {isEs ? "Llamar ahora" : "Call now"}
              </a>
            </div>

            <div className="mt-8 grid gap-3 text-sm font-semibold text-neutral-700 sm:grid-cols-2">
              {(isEs
                ? [
                    "Montaje desde 39€",
                    "Armarios, camas y cómodas",
                    "Estanterías y muebles de TV",
                    "Ajuste y alineación correcta",
                    "Fijación a pared si hace falta",
                    "Valencia y alrededores",
                  ]
                : [
                    "Assembly from €39",
                    "Wardrobes, beds and dressers",
                    "Shelves and TV units",
                    "Correct adjustment and alignment",
                    "Wall fixing if needed",
                    "Valencia and nearby areas",
                  ]
              ).map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-yellow-500" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-yellow-300 bg-white p-4 shadow-2xl md:p-6">
            <div className="rounded-2xl bg-yellow-400 p-8 text-black shadow-md">
              <PackageCheck className="mb-6 h-12 w-12 text-black" />
              <p className="text-sm font-black uppercase tracking-widest">
                THEVULGO Valencia
              </p>
              <h2 className="mt-3 text-3xl font-black">
                {isEs
                  ? "Montaje limpio. Recto. Estable."
                  : "Clean assembly. Straight. Stable."}
              </h2>
              <p className="mt-4 font-medium leading-7 text-neutral-900">
                {isEs
                  ? "Montamos piezas flat-pack con cuidado, revisamos alineación, ajustamos puertas y dejamos una estructura estable para uso diario."
                  : "We assemble flat-pack furniture carefully, check alignment, adjust doors and leave a stable structure for everyday use."}
              </p>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {(isEs
                ? [
                    ["Flat-pack assembly", "Montaje de muebles desmontados"],
                    ["Careful alignment", "Puertas, cajones y estructura recta"],
                    ["Wall fixing", "Fijación a pared cuando conviene"],
                    ["Fast replies", "Respuesta rápida por WhatsApp"],
                  ]
                : [
                    ["Flat-pack assembly", "Assembly of boxed furniture"],
                    ["Careful alignment", "Doors, drawers and straight structure"],
                    ["Wall fixing", "Wall fixing when recommended"],
                    ["Fast replies", "Quick response by WhatsApp"],
                  ]
              ).map(([title, text]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-yellow-200 bg-yellow-50 p-4 shadow-sm"
                >
                  <p className="font-black">{title}</p>
                  <p className="mt-1 text-sm text-neutral-700">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <div className="grid gap-6 md:grid-cols-4">
          {(isEs
            ? [
                {
                  icon: Wrench,
                  title: "Montaje cuidadoso",
                  text: "Montamos pieza por pieza siguiendo estructura e instrucciones.",
                },
                {
                  icon: Ruler,
                  title: "Alineación correcta",
                  text: "Ajustamos puertas, cajones, baldas y nivelación.",
                },
                {
                  icon: ShieldCheck,
                  title: "Estructura estable",
                  text: "Revisamos estabilidad y fijación para uso diario.",
                },
                {
                  icon: Star,
                  title: "Precio claro",
                  text: "Presupuesto antes del trabajo según mueble y dificultad.",
                },
              ]
            : [
                {
                  icon: Wrench,
                  title: "Careful assembly",
                  text: "We assemble piece by piece following structure and instructions.",
                },
                {
                  icon: Ruler,
                  title: "Correct alignment",
                  text: "We adjust doors, drawers, shelves and levelling.",
                },
                {
                  icon: ShieldCheck,
                  title: "Stable structure",
                  text: "We check stability and fixing for everyday use.",
                },
                {
                  icon: Star,
                  title: "Clear price",
                  text: "Estimate before the job based on furniture and difficulty.",
                },
              ]
          ).map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-yellow-200 bg-yellow-50 p-6 shadow-sm"
            >
              <item.icon className="h-8 w-8 text-yellow-500" />
              <h2 className="mt-4 text-xl font-black">{item.title}</h2>
              <p className="mt-2 text-neutral-700">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-10 md:px-8">
        <h2 className="text-3xl font-black tracking-tight md:text-4xl">
          {isEs
            ? "Montaje profesional de muebles IKEA en Valencia"
            : "Professional IKEA furniture assembly in Valencia"}
        </h2>

        <div className="mt-6 space-y-5 text-lg leading-8 text-neutral-700">
          <p>
            {isEs
              ? "En THEVULGO realizamos montaje de muebles IKEA en Valencia para pisos, casas, apartamentos, oficinas y propiedades de alquiler. Montamos muebles tipo flat-pack como armarios, camas, cómodas, estanterías, mesas, escritorios, muebles de TV, zapateros y muebles de almacenamiento."
              : "At THEVULGO we provide IKEA furniture assembly in Valencia for apartments, houses, offices and rental properties. We assemble flat-pack furniture such as wardrobes, beds, dressers, shelves, tables, desks, TV units, shoe cabinets and storage furniture."}
          </p>

          <p>
            {isEs
              ? "Un buen montaje no es solo apretar tornillos. Revisamos la estructura, alineación, cajones, puertas, bisagras, baldas y estabilidad general. El objetivo es que el mueble quede recto, estable y cómodo para uso diario."
              : "Good assembly is not just tightening screws. We check the structure, alignment, drawers, doors, hinges, shelves and overall stability. The goal is to leave the furniture straight, stable and comfortable for everyday use."}
          </p>

          <p>
            {isEs
              ? "También podemos ayudarte con fijación a pared, especialmente en armarios altos, estanterías, muebles estrechos o piezas que puedan volcar. Si el mueble es grande o pesado, envíanos fotos o el modelo antes de la visita para calcular mejor el tiempo y el precio."
              : "We can also help with wall fixing, especially for tall wardrobes, shelves, narrow furniture or pieces that may tip over. If the item is large or heavy, send photos or the model before the visit so time and price can be estimated better."}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-16 md:px-8">
        <h2 className="text-3xl font-black md:text-4xl">
          {isEs
            ? "Montaje IKEA para mudanzas, pisos de alquiler y viviendas en Valencia"
            : "IKEA assembly for move-ins, rentals and homes in Valencia"}
        </h2>

        <div className="mt-6 space-y-6 text-lg leading-8 text-neutral-700">
          <p>
            {isEs
              ? "Muchos muebles IKEA parecen sencillos al principio, pero pueden complicarse cuando hay puertas que no quedan rectas, cajones que rozan, piezas muy parecidas, instrucciones largas o muebles que necesitan fijación a pared. Un montaje cuidadoso evita errores que después afectan al uso diario."
              : "Many IKEA items look simple at first, but can become complicated when doors do not align, drawers rub, parts look similar, instructions are long or furniture needs wall fixing. Careful assembly helps avoid mistakes that later affect everyday use."}
          </p>

          <p>
            {isEs
              ? "Este servicio es útil después de una mudanza, al amueblar un piso de alquiler, preparar una habitación nueva, montar una oficina en casa o terminar varios muebles en una sola visita. Antes de confirmar, puedes enviar fotos de las cajas, modelo IKEA o enlace del producto."
              : "This service is useful after moving in, furnishing a rental apartment, preparing a new room, setting up a home office or finishing several pieces in one visit. Before confirming, you can send photos of the boxes, IKEA model or product link."}
          </p>

          <p>
            {isEs
              ? "Trabajamos especialmente con muebles flat-pack: armarios, camas, cómodas, cajoneras, estanterías, muebles de TV, escritorios, mesas, zapateros y muebles de almacenamiento. También revisamos si hace falta fijación a pared por seguridad."
              : "We especially work with flat-pack furniture: wardrobes, beds, dressers, drawer units, shelves, TV units, desks, tables, shoe cabinets and storage furniture. We also check whether wall fixing is needed for safety."}
          </p>
        </div>
      </section>

      <section className="bg-yellow-50 py-16">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <h2 className="text-3xl font-black md:text-4xl">
            {isEs ? "Qué incluye el montaje" : "What assembly includes"}
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

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <h2 className="mb-8 text-3xl font-black md:text-4xl">
          {isEs ? "Tipos de muebles IKEA que montamos" : "Types of IKEA furniture we assemble"}
        </h2>

        <div className="grid gap-8 md:grid-cols-4">
          {furnitureTypes.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-yellow-300 bg-white p-7 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400">
                <BedDouble className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-2xl font-black">{item.title}</h3>
              <p className="mt-4 leading-7 text-neutral-700">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-yellow-200 bg-white p-7 shadow-md">
            <ShieldCheck className="h-10 w-10 text-yellow-500" />
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

          <div className="rounded-3xl border border-yellow-200 bg-yellow-50 p-7 shadow-md">
            <Home className="h-10 w-10 text-yellow-500" />
            <h2 className="mt-4 text-3xl font-black">
              {isEs ? "Qué no incluye" : "What is not included"}
            </h2>

            <div className="mt-6 space-y-4">
              {notIncluded.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-yellow-500" />
                  <p className="font-semibold leading-7 text-neutral-800">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-yellow-400 py-16 text-black">
        <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
          <p className="text-sm font-black uppercase tracking-widest">
            {isEs ? "Desde 39€" : "From €39"}
          </p>
          <h2 className="mt-3 text-4xl font-black">
            {isEs
              ? "Presupuesto para montar muebles IKEA en Valencia"
              : "Quote for IKEA furniture assembly in Valencia"}
          </h2>
          <p className="mt-6 text-lg font-medium leading-8 text-neutral-900">
            {isEs
              ? "El precio depende del tipo de mueble, número de piezas, tamaño, dificultad, tiempo de montaje y si hace falta fijación a pared. Envíanos fotos o el modelo y te damos un precio claro."
              : "Price depends on furniture type, number of pieces, size, difficulty, assembly time and whether wall fixing is needed. Send photos or model and get a clear price."}
          </p>

          <div className="mt-8 rounded-3xl border border-yellow-600/30 bg-white p-6 text-left shadow-xl">
            <h3 className="text-xl font-black">
              {isEs ? "El precio depende de:" : "Price depends on:"}
            </h3>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {(isEs
                ? [
                    "Tipo de mueble",
                    "Número de piezas",
                    "Tamaño y peso",
                    "Puertas y cajones",
                    "Fijación a pared",
                    "Ajustes necesarios",
                    "Varios muebles en una visita",
                    "Distancia fuera de Valencia",
                  ]
                : [
                    "Furniture type",
                    "Number of pieces",
                    "Size and weight",
                    "Doors and drawers",
                    "Wall fixing",
                    "Needed adjustments",
                    "Several items in one visit",
                    "Distance outside Valencia",
                  ]
              ).map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-yellow-500" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <a
            href={whatsappUrl}
            className="mt-8 inline-flex items-center justify-center rounded-xl bg-black px-7 py-4 font-black text-white shadow-md transition hover:scale-105"
          >
            {isEs ? "Enviar fotos y pedir precio" : "Send photos and request price"}
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <h2 className="text-3xl font-black md:text-4xl">
          {isEs ? "Zonas donde trabajamos" : "Areas we serve"}
        </h2>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-neutral-700">
          {isEs
            ? "Realizamos montaje de muebles IKEA en Valencia ciudad y alrededores. Si estás fuera de Valencia, envíanos tu dirección y te confirmamos disponibilidad."
            : "We provide IKEA furniture assembly in Valencia city and nearby areas. If you are outside Valencia, send your address and we will confirm availability."}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {serviceAreas.map((area) => (
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
            {faqs.map((item) => (
              <details
                key={item.q}
                className="group rounded-2xl border border-yellow-200 bg-white p-6 shadow-sm"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-black">
                  <span>{item.q}</span>
                  <HelpCircle className="h-5 w-5 shrink-0 text-yellow-500" />
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

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {(isEs
            ? [
                {
                  title: "Montaje de muebles en Valencia",
                  href: `/${locale}/montaje-muebles-valencia`,
                },
                {
                  title: "Instalación de estanterías",
                  href: `/${locale}/instalacion-estanterias-valencia`,
                },
                {
                  title: "Colgar cuadros en Valencia",
                  href: `/${locale}/colgar-cuadros-valencia`,
                },
                {
                  title: "Instalar espejo en pared",
                  href: `/${locale}/instalar-espejo-valencia`,
                },
                {
                  title: "Montaje de TV en Valencia",
                  href: `/${locale}/montaje-tv-valencia`,
                },
                {
                  title: "Servicios handyman Valencia",
                  href: `/${locale}/services`,
                },
              ]
            : [
                {
                  title: "Furniture assembly in Valencia",
                  href: `/${locale}/montaje-muebles-valencia`,
                },
                {
                  title: "Shelf installation",
                  href: `/${locale}/instalacion-estanterias-valencia`,
                },
                {
                  title: "Picture hanging in Valencia",
                  href: `/${locale}/colgar-cuadros-valencia`,
                },
                {
                  title: "Mirror installation",
                  href: `/${locale}/instalar-espejo-valencia`,
                },
                {
                  title: "TV mounting in Valencia",
                  href: `/${locale}/montaje-tv-valencia`,
                },
                {
                  title: "Handyman services Valencia",
                  href: `/${locale}/services`,
                },
              ]
          ).map((item) => (
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
              ? "¿Quieres montar muebles IKEA en Valencia?"
              : "Need IKEA furniture assembled in Valencia?"}
          </h2>
          <p className="mt-5 text-lg font-medium text-neutral-900">
            {isEs
              ? "Envíanos fotos del mueble, cajas o modelo IKEA. Te damos un presupuesto claro antes de empezar."
              : "Send photos of the furniture, boxes or IKEA model. Get a clear estimate before the work starts."}
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