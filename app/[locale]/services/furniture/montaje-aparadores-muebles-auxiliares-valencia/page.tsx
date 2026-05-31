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
  DoorOpen,
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
    ? "Montaje de Aparadores y Muebles Auxiliares en Valencia | Desde 49€ | THEVULGO"
    : "Sideboard & Auxiliary Furniture Assembly in Valencia | From €49 | THEVULGO";

  const description = isEs
    ? "Montaje profesional de aparadores, muebles auxiliares, recibidores, zapateros y muebles de entrada en Valencia desde 49€. Puertas, cajones, baldas y fijación."
    : "Professional assembly of sideboards, auxiliary cabinets, shoe cabinets and entryway furniture in Valencia from €49. Doors, drawers, shelves and wall fixing.";

  return {
    title,
    description,
    keywords: isEs
      ? [
          "montaje aparadores Valencia",
          "montaje muebles auxiliares Valencia",
          "montar aparador Valencia",
          "montaje recibidor Valencia",
          "montaje zapatero Valencia",
          "montaje mueble entrada Valencia",
          "montaje armario auxiliar Valencia",
          "montador muebles Valencia",
        ]
      : [
          "sideboard assembly Valencia",
          "auxiliary furniture assembly Valencia",
          "entryway furniture assembly Valencia",
          "shoe cabinet assembly Valencia",
          "sideboard installer Valencia",
          "flat pack sideboard assembly Valencia",
          "furniture assembler Valencia",
        ],
    alternates: {
      canonical: `${siteUrl}/${locale}/montaje-aparadores-muebles-auxiliares-valencia`,
      languages: {
        es: `${siteUrl}/es/montaje-aparadores-muebles-auxiliares-valencia`,
        en: `${siteUrl}/en/montaje-aparadores-muebles-auxiliares-valencia`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${siteUrl}/${locale}/montaje-aparadores-muebles-auxiliares-valencia`,
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

export default async function SideboardAssemblyValenciaPage({
  params,
}: PageProps) {
  const { locale } = await params;
  const isEs = locale === "es";

  const pageUrl = `${siteUrl}/${locale}/montaje-aparadores-muebles-auxiliares-valencia`;

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, quiero un presupuesto para montaje de aparador o mueble auxiliar en Valencia."
      : "Hi, I would like a quote for sideboard or auxiliary furniture assembly in Valencia."
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappText}`;

  const faqs = isEs
    ? [
        {
          q: "¿Cuánto cuesta montar un aparador en Valencia?",
          a: "El montaje de aparadores y muebles auxiliares empieza desde 49€. El precio final depende del tamaño, número de puertas, cajones, baldas, tipo de mueble y si hace falta fijación a pared.",
        },
        {
          q: "¿Montan aparadores IKEA?",
          a: "Sí. Montamos aparadores, muebles auxiliares y muebles de entrada de IKEA, Leroy Merlin, Amazon, JYSK, Conforama, Bauhaus, Carrefour y otras tiendas.",
        },
        {
          q: "¿Pueden ajustar puertas y cajones?",
          a: "Sí. Ajustamos bisagras, puertas, cajones, guías, tiradores y baldas para que el mueble quede alineado y funcione correctamente.",
        },
        {
          q: "¿Pueden fijar el mueble a la pared?",
          a: "Sí. Si el mueble es alto, estrecho o pesado, recomendamos fijarlo a la pared por seguridad cuando la pared lo permite.",
        },
        {
          q: "¿Montan muebles de entrada?",
          a: "Sí. Montamos zapateros, recibidores, consolas, armarios auxiliares, muebles de pasillo y unidades de almacenamiento.",
        },
        {
          q: "¿Tengo que tener herramientas?",
          a: "No. Llevamos herramientas profesionales. Solo necesitas tener piezas, tornillos, accesorios e instrucciones disponibles.",
        },
        {
          q: "¿Cuánto tarda montar un aparador?",
          a: "Depende del tamaño y dificultad. Un mueble sencillo puede tardar alrededor de una hora, mientras que un aparador grande con puertas y cajones puede tardar más.",
        },
        {
          q: "¿Trabajan fuera de Valencia ciudad?",
          a: "Sí. Trabajamos en Valencia y alrededores como Mislata, Burjassot, Paterna, Torrent, Sagunto, Cullera, Gandía y otras zonas cercanas.",
        },
        {
          q: "¿Qué fotos tengo que enviar para presupuesto?",
          a: "Envía fotos de las cajas, modelo o instrucciones, número de puertas y cajones, medidas aproximadas y si quieres fijación a pared.",
        },
      ]
    : [
        {
          q: "How much does sideboard assembly cost in Valencia?",
          a: "Sideboard and auxiliary furniture assembly starts from €49. Final price depends on size, number of doors, drawers, shelves, furniture type and whether wall fixing is needed.",
        },
        {
          q: "Do you assemble IKEA sideboards?",
          a: "Yes. We assemble sideboards, auxiliary cabinets and entryway furniture from IKEA, Leroy Merlin, Amazon, JYSK, Conforama, Bauhaus, Carrefour and other stores.",
        },
        {
          q: "Can you adjust doors and drawers?",
          a: "Yes. We adjust hinges, doors, drawers, runners, handles and shelves so the furniture is aligned and works correctly.",
        },
        {
          q: "Can you fix the furniture to the wall?",
          a: "Yes. If the item is tall, narrow or heavy, we recommend wall fixing for safety when the wall allows it.",
        },
        {
          q: "Do you assemble entryway furniture?",
          a: "Yes. We assemble shoe cabinets, entryway units, consoles, auxiliary cabinets, hallway furniture and storage units.",
        },
        {
          q: "Do I need to have tools?",
          a: "No. We bring professional tools. You only need to have the parts, screws, accessories and instructions available.",
        },
        {
          q: "How long does sideboard assembly take?",
          a: "It depends on size and difficulty. A simple item may take around one hour, while a large sideboard with doors and drawers may take longer.",
        },
        {
          q: "Do you work outside Valencia city?",
          a: "Yes. We work in Valencia and nearby areas such as Mislata, Burjassot, Paterna, Torrent, Sagunto, Cullera, Gandía and other nearby zones.",
        },
        {
          q: "What photos should I send for a quote?",
          a: "Send photos of the boxes, model or instructions, number of doors and drawers, approximate measurements and whether you want wall fixing.",
        },
      ];

  const included = isEs
    ? [
        "Revisión de piezas e instrucciones",
        "Montaje de estructura principal",
        "Instalación de puertas",
        "Montaje de cajones y guías",
        "Colocación de baldas y accesorios",
        "Ajuste de bisagras y tiradores",
        "Fijación a pared si hace falta",
        "Comprobación final de estabilidad",
        "Presupuesto claro antes del trabajo",
      ]
    : [
        "Review of parts and instructions",
        "Main frame assembly",
        "Door installation",
        "Assembly of drawers and runners",
        "Installation of shelves and accessories",
        "Adjustment of hinges and handles",
        "Wall fixing if needed",
        "Final stability check",
        "Clear estimate before the job",
      ];

  const furnitureTypes = isEs
    ? [
        {
          title: "Aparadores",
          text: "Muebles bajos para salón, comedor, pasillo o zona de entrada.",
        },
        {
          title: "Muebles de entrada",
          text: "Recibidores, consolas, zapateros y muebles auxiliares compactos.",
        },
        {
          title: "Armarios auxiliares",
          text: "Unidades de almacenamiento con puertas, baldas y cajones.",
        },
        {
          title: "Muebles flat-pack",
          text: "IKEA, Leroy Merlin, Amazon, JYSK, Conforama y otras tiendas.",
        },
      ]
    : [
        {
          title: "Sideboards",
          text: "Low storage furniture for living rooms, dining rooms, hallways or entry areas.",
        },
        {
          title: "Entryway furniture",
          text: "Entry units, consoles, shoe cabinets and compact auxiliary furniture.",
        },
        {
          title: "Auxiliary cabinets",
          text: "Storage units with doors, shelves and drawers.",
        },
        {
          title: "Flat-pack furniture",
          text: "IKEA, Leroy Merlin, Amazon, JYSK, Conforama and other stores.",
        },
      ];

  const processSteps = isEs
    ? [
        "Envías fotos del mueble, cajas o instrucciones",
        "Revisamos tamaño, puertas, cajones y dificultad",
        "Confirmamos si conviene fijación a pared",
        "Te damos presupuesto claro antes de empezar",
        "Montamos, ajustamos y revisamos estabilidad",
      ]
    : [
        "You send photos of the furniture, boxes or instructions",
        "We check size, doors, drawers and difficulty",
        "We confirm whether wall fixing is recommended",
        "You receive a clear estimate before the work starts",
        "We assemble, adjust and check stability",
      ];

  const notIncluded = isEs
    ? [
        "Transporte del mueble desde tienda",
        "Reparación de piezas rotas de fábrica",
        "Modificaciones estructurales no indicadas por el fabricante",
        "Anclaje a pared si la pared no permite una fijación segura",
      ]
    : [
        "Furniture transport from store",
        "Repair of factory-broken parts",
        "Structural modifications not recommended by the manufacturer",
        "Wall fixing if the wall does not allow safe anchoring",
      ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: isEs
      ? "Montaje de Aparadores y Muebles Auxiliares en Valencia"
      : "Sideboard and Auxiliary Furniture Assembly in Valencia",
    serviceType: isEs
      ? "Montaje de aparadores y muebles auxiliares"
      : "Sideboard and auxiliary furniture assembly",
    description: isEs
      ? "Montaje de aparadores, armarios auxiliares, muebles de entrada, zapateros, consolas y muebles flat-pack en Valencia."
      : "Assembly of sideboards, auxiliary cabinets, entryway furniture, shoe cabinets, consoles and flat-pack furniture in Valencia.",
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
      price: "49",
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
      ? "Montaje de aparadores, armarios auxiliares, muebles de entrada, muebles IKEA, cómodas, estanterías, armarios y servicios handyman en Valencia."
      : "Sideboard assembly, auxiliary cabinets, entryway furniture, IKEA furniture, dressers, shelves, wardrobes and handyman services in Valencia.",
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
        name: isEs
          ? "Montaje de Aparadores y Muebles Auxiliares en Valencia"
          : "Sideboard and Auxiliary Furniture Assembly in Valencia",
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
                ? "Aparadores · Muebles auxiliares · Recibidores · Entrada"
                : "Sideboards · Auxiliary furniture · Entryway units"}
            </div>

            <h1 className="text-4xl font-black tracking-tight md:text-6xl">
              {isEs ? "Montaje de aparadores y muebles auxiliares" : "Sideboard and auxiliary furniture assembly"}{" "}
              <span className="text-yellow-500">
                {isEs ? "en Valencia" : "in Valencia"}
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-700">
              {isEs
                ? "Montaje de aparadores, armarios auxiliares y muebles de entrada desde 49€. Puertas, cajones, baldas, tiradores, alineación cuidada y estructura estable para uso diario."
                : "Assembly of sideboards, auxiliary cabinets and entryway furniture from €49. Doors, drawers, shelves, handles, careful alignment and stable structure for everyday use."}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={whatsappUrl} className="inline-flex items-center justify-center rounded-xl bg-yellow-400 px-6 py-4 font-black text-black shadow-md transition hover:scale-105 hover:bg-yellow-300">
                {isEs ? "Pedir presupuesto por WhatsApp" : "Get estimate by WhatsApp"}
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>

              <a href={`tel:+${phoneNumber}`} className="inline-flex items-center justify-center rounded-xl border border-neutral-300 bg-white px-6 py-4 font-black text-neutral-950 shadow-sm transition hover:scale-105 hover:border-yellow-400">
                {isEs ? "Llamar ahora" : "Call now"}
              </a>
            </div>

            <div className="mt-8 grid gap-3 text-sm font-semibold text-neutral-700 sm:grid-cols-2">
              {(isEs
                ? [
                    "Montaje desde 49€",
                    "Aparadores y recibidores",
                    "Armarios auxiliares",
                    "Ajuste de puertas y cajones",
                    "Fijación a pared si hace falta",
                    "Valencia y alrededores",
                  ]
                : [
                    "Assembly from €49",
                    "Sideboards and entryway units",
                    "Auxiliary cabinets",
                    "Door and drawer adjustment",
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
              <DoorOpen className="mb-6 h-12 w-12 text-black" />
              <p className="text-sm font-black uppercase tracking-widest">
                THEVULGO Valencia
              </p>
              <h2 className="mt-3 text-3xl font-black">
                {isEs ? "Alineado. Estable. Listo para usar." : "Aligned. Stable. Ready to use."}
              </h2>
              <p className="mt-4 font-medium leading-7 text-neutral-900">
                {isEs
                  ? "Montamos la estructura, ajustamos puertas y cajones, revisamos estabilidad y dejamos el mueble preparado para uso diario."
                  : "We assemble the structure, adjust doors and drawers, check stability and leave the furniture ready for everyday use."}
              </p>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {(isEs
                ? [
                    ["Sideboards", "Aparadores y muebles bajos"],
                    ["Entry furniture", "Recibidores, zapateros y consolas"],
                    ["Door alignment", "Puertas, cajones y bisagras"],
                    ["Fast replies", "Respuesta rápida por WhatsApp"],
                  ]
                : [
                    ["Sideboards", "Low storage furniture"],
                    ["Entry furniture", "Entry units, shoe cabinets and consoles"],
                    ["Door alignment", "Doors, drawers and hinges"],
                    ["Fast replies", "Quick response by WhatsApp"],
                  ]
              ).map(([title, text]) => (
                <div key={title} className="rounded-2xl border border-yellow-200 bg-yellow-50 p-4 shadow-sm">
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
                { icon: Wrench, title: "Montaje completo", text: "Estructura, puertas, cajones, baldas, patas y tiradores." },
                { icon: Ruler, title: "Alineación cuidada", text: "Ajustamos frentes, bisagras, guías y posición final." },
                { icon: ShieldCheck, title: "Estructura estable", text: "Revisamos firmeza y fijación si es recomendable." },
                { icon: Star, title: "Precio claro", text: "Presupuesto antes del trabajo según fotos y dificultad." },
              ]
            : [
                { icon: Wrench, title: "Complete assembly", text: "Frame, doors, drawers, shelves, legs and handles." },
                { icon: Ruler, title: "Careful alignment", text: "We adjust fronts, hinges, runners and final position." },
                { icon: ShieldCheck, title: "Stable structure", text: "We check firmness and wall fixing if recommended." },
                { icon: Star, title: "Clear price", text: "Estimate before the job based on photos and difficulty." },
              ]
          ).map((item) => (
            <div key={item.title} className="rounded-2xl border border-yellow-200 bg-yellow-50 p-6 shadow-sm">
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
            ? "Montaje profesional de aparadores y muebles auxiliares en Valencia"
            : "Professional sideboard and auxiliary furniture assembly in Valencia"}
        </h2>

        <div className="mt-6 space-y-5 text-lg leading-8 text-neutral-700">
          <p>
            {isEs
              ? "En THEVULGO realizamos montaje de aparadores y muebles auxiliares en Valencia para salones, entradas, pasillos, dormitorios, oficinas y apartamentos. Montamos muebles de entrada, recibidores, zapateros, consolas, armarios auxiliares, aparadores bajos y unidades de almacenamiento."
              : "At THEVULGO we assemble sideboards and auxiliary furniture in Valencia for living rooms, entryways, hallways, bedrooms, offices and apartments. We assemble entryway units, shoe cabinets, consoles, auxiliary cabinets, low sideboards and storage units."}
          </p>

          <p>
            {isEs
              ? "Un aparador bien montado debe quedar estable, recto y con puertas y cajones correctamente alineados. Revisamos estructura, patas, bisagras, guías, baldas, tiradores y cierre para que el mueble sea cómodo y seguro en el uso diario."
              : "A well-assembled sideboard should be stable, straight and have properly aligned doors and drawers. We check the frame, legs, hinges, runners, shelves, handles and closing so the furniture is comfortable and safe for everyday use."}
          </p>

          <p>
            {isEs
              ? "También podemos fijar el mueble a la pared cuando sea recomendable, especialmente si es alto, estrecho o pesado. Si tienes fotos, modelo o instrucciones, envíanos la información antes de la visita para calcular mejor el precio."
              : "We can also fix the furniture to the wall when recommended, especially if it is tall, narrow or heavy. If you have photos, model or instructions, send the information before the visit so the price can be estimated better."}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-16 md:px-8">
        <h2 className="text-3xl font-black md:text-4xl">
          {isEs
            ? "Aparadores, recibidores y almacenamiento auxiliar para el hogar"
            : "Sideboards, entryway units and auxiliary home storage"}
        </h2>

        <div className="mt-6 space-y-6 text-lg leading-8 text-neutral-700">
          <p>
            {isEs
              ? "Los aparadores y muebles auxiliares suelen tener muchas piezas pequeñas: bisagras, guías, tiradores, patas, baldas, cajones y puertas. Un montaje incorrecto puede hacer que las puertas rocen, los cajones no cierren bien o el mueble quede inestable."
              : "Sideboards and auxiliary furniture often include many small parts: hinges, runners, handles, legs, shelves, drawers and doors. Poor assembly can make doors rub, drawers close badly or the furniture feel unstable."}
          </p>

          <p>
            {isEs
              ? "Este servicio es ideal para muebles de salón, entrada, pasillo, dormitorio, oficina o apartamentos de alquiler. También es útil después de una mudanza, cuando necesitas dejar varias zonas de almacenamiento listas para usar."
              : "This service is ideal for living room, entryway, hallway, bedroom, office or rental apartment furniture. It is also useful after moving in, when you need several storage areas ready to use."}
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
              <div key={item} className="flex items-start gap-3 rounded-2xl border border-yellow-200 bg-white p-5 shadow-sm">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-yellow-500" />
                <p className="font-bold text-neutral-900">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <h2 className="mb-8 text-3xl font-black md:text-4xl">
          {isEs ? "Tipos de muebles que montamos" : "Types of furniture we assemble"}
        </h2>

        <div className="grid gap-8 md:grid-cols-4">
          {furnitureTypes.map((item) => (
            <div key={item.title} className="rounded-3xl border border-yellow-300 bg-white p-7 shadow-md transition hover:-translate-y-1 hover:shadow-xl">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400">
                <PackageCheck className="h-8 w-8 text-black" />
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
            {isEs ? "Desde 49€" : "From €49"}
          </p>
          <h2 className="mt-3 text-4xl font-black">
            {isEs ? "Presupuesto para montar aparadores en Valencia" : "Quote for sideboard assembly in Valencia"}
          </h2>
          <p className="mt-6 text-lg font-medium leading-8 text-neutral-900">
            {isEs
              ? "El precio depende del tamaño, número de puertas, cajones, baldas, accesorios, dificultad y si hace falta fijación a pared. Envíanos fotos o modelo y te damos un precio claro."
              : "Price depends on size, number of doors, drawers, shelves, accessories, difficulty and whether wall fixing is needed. Send photos or model and get a clear price."}
          </p>

          <div className="mt-8 rounded-3xl border border-yellow-600/30 bg-white p-6 text-left shadow-xl">
            <h3 className="text-xl font-black">
              {isEs ? "El precio depende de:" : "Price depends on:"}
            </h3>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {(isEs
                ? [
                    "Tipo de mueble",
                    "Tamaño y peso",
                    "Puertas y bisagras",
                    "Cajones y guías",
                    "Baldas y accesorios",
                    "Fijación a pared",
                    "Varios muebles",
                    "Distancia fuera de Valencia",
                  ]
                : [
                    "Furniture type",
                    "Size and weight",
                    "Doors and hinges",
                    "Drawers and runners",
                    "Shelves and accessories",
                    "Wall fixing",
                    "Several items",
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

          <a href={whatsappUrl} className="mt-8 inline-flex items-center justify-center rounded-xl bg-black px-7 py-4 font-black text-white shadow-md transition hover:scale-105">
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
            ? "Realizamos montaje de aparadores y muebles auxiliares en Valencia ciudad y alrededores. Si estás fuera de Valencia, envíanos tu dirección y te confirmamos disponibilidad."
            : "We provide sideboard and auxiliary furniture assembly in Valencia city and nearby areas. If you are outside Valencia, send your address and we will confirm availability."}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {serviceAreas.map((area) => (
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
            {faqs.map((item) => (
              <details key={item.q} className="group rounded-2xl border border-yellow-200 bg-white p-6 shadow-sm">
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
                { title: "Montaje de muebles IKEA", href: `/${locale}/montaje-muebles-ikea-valencia` },
                { title: "Montaje de armario", href: `/${locale}/montaje-armario-valencia` },
                { title: "Montaje de cómodas y cajoneras", href: `/${locale}/montaje-comodas-cajoneras-valencia` },
                { title: "Montaje de estanterías", href: `/${locale}/montaje-estanterias-valencia` },
                { title: "Montaje de muebles TV y multimedia", href: `/${locale}/montaje-muebles-tv-multimedia-valencia` },
                { title: "Servicios handyman Valencia", href: `/${locale}/services` },
              ]
            : [
                { title: "IKEA furniture assembly", href: `/${locale}/montaje-muebles-ikea-valencia` },
                { title: "Wardrobe assembly", href: `/${locale}/montaje-armario-valencia` },
                { title: "Dresser and drawer assembly", href: `/${locale}/montaje-comodas-cajoneras-valencia` },
                { title: "Shelf assembly", href: `/${locale}/montaje-estanterias-valencia` },
                { title: "TV and media furniture assembly", href: `/${locale}/montaje-muebles-tv-multimedia-valencia` },
                { title: "Handyman services Valencia", href: `/${locale}/services` },
              ]
          ).map((item) => (
            <Link key={item.title} href={item.href} className="group rounded-2xl border border-yellow-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-yellow-400 hover:shadow-md">
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
              ? "¿Quieres montar un aparador o mueble auxiliar en Valencia?"
              : "Need a sideboard or auxiliary cabinet assembled in Valencia?"}
          </h2>
          <p className="mt-5 text-lg font-medium text-neutral-900">
            {isEs
              ? "Envíanos fotos del mueble, cajas, modelo o instrucciones. Te damos un presupuesto claro antes de empezar."
              : "Send photos of the furniture, boxes, model or instructions. Get a clear estimate before the work starts."}
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