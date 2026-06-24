import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Brush,
  CalendarCheck,
  CheckCircle2,
  ClipboardCheck,
  Clock3,
  Euro,
  Hammer,
  Home,
  Hotel,
  Layers,
  MapPin,
  MessageCircle,
  Paintbrush,
  Ruler,
  ShieldCheck,
  Sparkles,
  Star,
  Wrench,
  Drill,
  PanelsTopLeft,
  Construction,
  House,
  ClipboardList,
  Settings,
} from "lucide-react";

type Props = {
  params: Promise<{ locale: string }>;
};

const baseUrl = "https://www.thevulgo.es";
const phone = "34610076942";
const slug = "services/reparacion-paredes-valencia";

const areas = [
  "Valencia",
  "Ruzafa",
  "Russafa",
  "Benimaclet",
  "Campanar",
  "Patraix",
  "El Carmen",
  "Extramurs",
  "Mestalla",
  "Algiros",
  "Mislata",
  "Burjassot",
  "Paterna",
  "Torrent",
  "Alboraya",
  "Manises",
];

const clusterLinks = [
  {
    slug: "reparacion-agujeros-pared-valencia",
    es: "Reparación de agujeros en paredes",
    en: "Wall hole repair",
  },
  {
    slug: "tapar-agujeros-pared-valencia",
    es: "Tapar agujeros en paredes",
    en: "Fill wall holes",
  },
  {
    slug: "retoques-pintura-valencia",
    es: "Retoques de pintura",
    en: "Paint touch-ups",
  },
  {
    slug: "reparacion-desperfectos-paredes-valencia",
    es: "Reparación de desperfectos en paredes",
    en: "Wall damage repair",
  },
  {
    slug: "arreglar-paredes-valencia",
    es: "Arreglar paredes",
    en: "Fix walls",
  },
  {
    slug: "pintura-pequenos-arreglos-valencia",
    es: "Pintura y pequeños arreglos",
    en: "Painting and small repairs",
  },
  {
    slug: "pequenas-reparaciones-valencia",
    es: "Pequeñas reparaciones",
    en: "Small repairs",
  },
  {
    slug: "reparacion-piso-alquiler-valencia",
    es: "Reparación de piso de alquiler",
    en: "Rental apartment repair",
  },
  {
    slug: "reparaciones-antes-entrega-piso-valencia",
    es: "Reparaciones antes de entregar un piso",
    en: "Repairs before apartment handover",
  },
  {
    slug: "fin-contrato-alquiler-valencia",
    es: "Reparaciones antes del fin del contrato",
    en: "Repairs before rental contract ends",
  },
  {
    slug: "mantenimiento-airbnb-valencia",
    es: "Mantenimiento para Airbnb",
    en: "Airbnb maintenance",
  },
  {
    slug: "preparacion-vivienda-alquiler-valencia",
    es: "Preparación de vivienda para alquiler",
    en: "Rental property preparation",
  },
];

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";

  const title = isEs
    ? "Reparación de Paredes en Valencia | Agujeros, Grietas y Desperfectos | THEVULGO"
    : "Wall Repair in Valencia | Holes, Cracks & Wall Damage | THEVULGO";

  const description = isEs
    ? "Reparación de paredes en Valencia. Tapar agujeros, reparar grietas, golpes, desconchones, desperfectos, pladur, yeso, lijado, masilla y preparación para pintura."
    : "Wall repair in Valencia. Fill holes, repair cracks, dents, chips, wall damage, drywall, plaster, sanding, filler and paint preparation.";

  return {
    title,
    description,
    keywords: isEs
      ? [
          "reparacion paredes valencia",
          "reparar pared valencia",
          "arreglar pared valencia",
          "reparacion pared yeso valencia",
          "reparacion pared pladur valencia",
          "pared dañada valencia",
          "tapar agujeros pared valencia",
          "reparacion agujeros pared valencia",
          "retoques pintura valencia",
          "reparacion desperfectos paredes valencia",
          "manitas paredes valencia",
        ]
      : [
          "wall repair valencia",
          "repair wall valencia",
          "fix wall valencia",
          "plaster wall repair valencia",
          "drywall repair valencia",
          "damaged wall valencia",
          "fill wall holes valencia",
          "wall hole repair valencia",
          "paint touch ups valencia",
          "wall damage repair valencia",
          "handyman wall repair valencia",
        ],
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
    alternates: {
      canonical: `${baseUrl}/${locale}/${slug}`,
      languages: {
        es: `${baseUrl}/es/${slug}`,
        en: `${baseUrl}/en/${slug}`,
        "x-default": `${baseUrl}/es/${slug}`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${baseUrl}/${locale}/${slug}`,
      siteName: "THEVULGO",
      locale: isEs ? "es_ES" : "en_GB",
      type: "website",
    },
  };
}

export default async function WallRepairValenciaPage({ params }: Props) {
  const { locale } = await params;
  const isEs = locale === "es";

  const pageUrl = `${baseUrl}/${locale}/${slug}`;
  const estimateHref = `/${locale}/estimate?category=repairs`;

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, necesito reparación de paredes en Valencia. Puedo enviar fotos de los agujeros, grietas o desperfectos para pedir presupuesto."
      : "Hi, I need wall repair in Valencia. I can send photos of the holes, cracks or wall damage for an estimate."
  );

  const whatsappHref = `https://wa.me/${phone}?text=${whatsappText}`;

  const services = isEs
    ? [
        {
          title: "Tapar agujeros en pared",
          text: "Agujeros de cuadros, estanterías, soportes de TV, tacos, tornillos y fijaciones antiguas.",
          icon: <Drill className="h-6 w-6" />,
        },
        {
          title: "Reparar grietas pequeñas",
          text: "Grietas finas, juntas abiertas, pequeñas fisuras y líneas visibles en paredes interiores.",
          icon: <Construction className="h-6 w-6" />,
        },
        {
          title: "Golpes y desconchones",
          text: "Marcas por muebles, puertas, esquinas golpeadas, roces y desperfectos visibles.",
          icon: <Hammer className="h-6 w-6" />,
        },
        {
          title: "Paredes de pladur",
          text: "Parches, agujeros, cortes, zonas dañadas, lijado y preparación para acabado.",
          icon: <Layers className="h-6 w-6" />,
        },
        {
          title: "Paredes de yeso",
          text: "Masilla, reparación superficial, nivelado de zonas pequeñas y preparación para pintar.",
          icon: <PanelsTopLeft className="h-6 w-6" />,
        },
        {
          title: "Preparación para pintura",
          text: "Lijado, masilla, limpieza de bordes, retoque y preparación de la superficie.",
          icon: <Paintbrush className="h-6 w-6" />,
        },
      ]
    : [
        {
          title: "Fill wall holes",
          text: "Holes from pictures, shelves, TV brackets, plugs, screws and old fixings.",
          icon: <Drill className="h-6 w-6" />,
        },
        {
          title: "Small crack repair",
          text: "Fine cracks, open joints, small fissures and visible lines on interior walls.",
          icon: <Construction className="h-6 w-6" />,
        },
        {
          title: "Dents and chips",
          text: "Furniture marks, door impacts, dented corners, scratches and visible damage.",
          icon: <Hammer className="h-6 w-6" />,
        },
        {
          title: "Drywall repair",
          text: "Patches, holes, cuts, damaged areas, sanding and preparation for finishing.",
          icon: <Layers className="h-6 w-6" />,
        },
        {
          title: "Plaster wall repair",
          text: "Filler, surface repair, small area levelling and preparation for painting.",
          icon: <PanelsTopLeft className="h-6 w-6" />,
        },
        {
          title: "Paint preparation",
          text: "Sanding, filler, edge cleaning, touch-up and surface preparation.",
          icon: <Paintbrush className="h-6 w-6" />,
        },
      ];

  const prices = isEs
    ? [
        ["Tapar agujeros pequeños", "desde 35 €"],
        ["Reparación de pared", "desde 35 €"],
        ["Reparación de pladur", "desde 35 €"],
        ["Grietas pequeñas", "desde 39 €"],
        ["Retoques de pintura", "desde 49 €"],
        ["Visita / revisión", "desde 49 €"],
      ]
    : [
        ["Fill small holes", "from €35"],
        ["Wall repair", "from €35"],
        ["Drywall repair", "from €35"],
        ["Small cracks", "from €39"],
        ["Paint touch-ups", "from €49"],
        ["Visit / inspection", "from €49"],
      ];

  const process = isEs
    ? [
        ["1. Envía fotos", "Manda fotos claras de la pared, agujeros, grietas o desperfectos."],
        ["2. Revisamos el daño", "Valoramos si hace falta masilla, pladur, lija, pintura o visita previa."],
        ["3. Presupuesto claro", "Confirmamos precio de trabajo y materiales antes de empezar."],
        ["4. Reparación limpia", "Tapamos, rellenamos, lijamos y preparamos la superficie."],
        ["5. Acabado final", "Dejamos la pared lista para pintar o con retoque si es posible."],
      ]
    : [
        ["1. Send photos", "Send clear photos of the wall, holes, cracks or damage."],
        ["2. We check damage", "We assess whether filler, drywall, sandpaper, paint or a prior visit is needed."],
        ["3. Clear estimate", "We confirm labour and material price before starting."],
        ["4. Clean repair", "We fill, patch, sand and prepare the surface."],
        ["5. Final finish", "We leave the wall ready for paint or touched up when possible."],
      ];

  const wallProblems = isEs
    ? [
        "Agujeros de tacos y tornillos",
        "Marcas de soportes de TV",
        "Daños por estanterías",
        "Golpes de puertas o muebles",
        "Esquinas dañadas",
        "Grietas pequeñas",
        "Pintura levantada",
        "Desconchones visibles",
        "Paredes con manchas",
        "Pladur roto o cortado",
        "Yeso irregular",
        "Pared preparada para pintar",
      ]
    : [
        "Plug and screw holes",
        "TV bracket marks",
        "Shelf damage",
        "Door or furniture impacts",
        "Damaged corners",
        "Small cracks",
        "Peeling paint",
        "Visible chips",
        "Stained walls",
        "Broken or cut drywall",
        "Uneven plaster",
        "Wall prepared for painting",
      ];

  const wallTypes = isEs
    ? [
        {
          title: "Pared de yeso",
          text: "Ideal para reparaciones superficiales con masilla, lijado y preparación para pintura.",
        },
        {
          title: "Pared de pladur",
          text: "Puede requerir parche, cinta, pasta, refuerzo o reparación por capas según el daño.",
        },
        {
          title: "Pared pintada",
          text: "Hay que revisar color, brillo y estado para que el retoque quede lo más discreto posible.",
        },
        {
          title: "Pared dañada por fijaciones",
          text: "Muy común después de quitar TV, estanterías, cuadros, espejos o muebles fijados.",
        },
      ]
    : [
        {
          title: "Plaster wall",
          text: "Good for surface repairs with filler, sanding and preparation for painting.",
        },
        {
          title: "Drywall",
          text: "May require patching, tape, compound, reinforcement or layered repair depending on damage.",
        },
        {
          title: "Painted wall",
          text: "Colour, sheen and condition must be checked so the touch-up is as discreet as possible.",
        },
        {
          title: "Wall damaged by fixings",
          text: "Very common after removing TVs, shelves, pictures, mirrors or wall-mounted furniture.",
        },
      ];

  const faqs = isEs
    ? [
        {
          q: "¿Cuánto cuesta reparar una pared en Valencia?",
          a: "Depende del tamaño del daño, tipo de pared, materiales, pintura y tiempo. Las reparaciones pequeñas suelen empezar desde 35–49 €.",
        },
        {
          q: "¿Tapáis agujeros de TV, cuadros o estanterías?",
          a: "Sí. Podemos tapar agujeros de soportes de TV, cuadros, estanterías, tacos, tornillos y fijaciones antiguas.",
        },
        {
          q: "¿Reparáis paredes de pladur?",
          a: "Sí. Reparamos agujeros, cortes, parches y desperfectos en pladur según el tamaño y profundidad del daño.",
        },
        {
          q: "¿También pintáis después de reparar?",
          a: "Sí, se pueden hacer retoques de pintura o preparar la pared para pintar. Si hace falta pintura igual, se confirma aparte.",
        },
        {
          q: "¿Reparáis grietas?",
          a: "Sí, grietas pequeñas o superficiales. Si la grieta parece estructural o vuelve a abrirse, puede hacer falta una revisión más técnica.",
        },
        {
          q: "¿Se nota la reparación?",
          a: "El objetivo es dejarla lo más discreta posible. El resultado depende del color, textura, luz, antigüedad de pintura y estado de la pared.",
        },
        {
          q: "¿Cuánto tarda una reparación de pared?",
          a: "Muchas reparaciones pequeñas se hacen en una visita. Si hay pintura, secado o varias capas, puede requerir más tiempo.",
        },
        {
          q: "¿Necesito comprar materiales?",
          a: "Puedes tenerlos o podemos indicar qué comprar. Masilla, lija, pintura, tacos o piezas se calculan según el caso.",
        },
        {
          q: "¿Trabajáis en pisos de alquiler?",
          a: "Sí. Es un servicio muy útil antes de entregar llaves, recibir nuevos inquilinos o preparar un Airbnb.",
        },
        {
          q: "¿Puedo enviar fotos por WhatsApp?",
          a: "Sí. Es lo mejor para dar una estimación rápida y preparar herramientas y materiales.",
        },
      ]
    : [
        {
          q: "How much does wall repair in Valencia cost?",
          a: "It depends on damage size, wall type, materials, paint and time. Small repairs usually start from €35–49.",
        },
        {
          q: "Do you fill holes from TVs, pictures or shelves?",
          a: "Yes. We can fill holes from TV brackets, pictures, shelves, plugs, screws and old fixings.",
        },
        {
          q: "Do you repair drywall walls?",
          a: "Yes. We repair holes, cuts, patches and drywall damage depending on size and depth.",
        },
        {
          q: "Do you also paint after repairing?",
          a: "Yes, paint touch-ups can be done or the wall can be prepared for painting. Matching paint is confirmed separately if needed.",
        },
        {
          q: "Do you repair cracks?",
          a: "Yes, small or surface cracks. If the crack looks structural or keeps opening, a more technical inspection may be needed.",
        },
        {
          q: "Will the repair be visible?",
          a: "The goal is to make it as discreet as possible. The result depends on colour, texture, light, paint age and wall condition.",
        },
        {
          q: "How long does wall repair take?",
          a: "Many small repairs are done in one visit. If painting, drying or several layers are needed, it may take longer.",
        },
        {
          q: "Do I need to buy materials?",
          a: "You can have them or we can advise what to buy. Filler, sandpaper, paint, plugs or parts are calculated case by case.",
        },
        {
          q: "Do you work in rental apartments?",
          a: "Yes. This service is very useful before key handover, new tenants or Airbnb preparation.",
        },
        {
          q: "Can I send photos by WhatsApp?",
          a: "Yes. It is the best way to get a quick estimate and prepare tools and materials.",
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
          addressRegion: "Valencia",
          addressCountry: "ES",
        },
      },
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: isEs
          ? "Reparación de paredes en Valencia"
          : "Wall repair in Valencia",
        serviceType: isEs
          ? "Reparación de paredes, agujeros, grietas y desperfectos"
          : "Wall repair, holes, cracks and wall damage",
        provider: {
          "@id": `${baseUrl}/#localbusiness`,
        },
        areaServed: areas,
        url: pageUrl,
        description: isEs
          ? "Servicio de reparación de paredes en Valencia: tapar agujeros, reparar grietas, golpes, desconchones, pladur, yeso, lijado y preparación para pintura."
          : "Wall repair service in Valencia: fill holes, repair cracks, dents, chips, drywall, plaster, sanding and paint preparation.",
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
            name: isEs ? "Inicio" : "Home",
            item: `${baseUrl}/${locale}`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: isEs ? "Servicios" : "Services",
            item: `${baseUrl}/${locale}/services`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: isEs ? "Reparación de paredes" : "Wall repair",
            item: pageUrl,
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
          <div className="max-w-5xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-white px-4 py-2 text-sm font-semibold shadow-sm">
              <MapPin className="h-4 w-4 text-yellow-500" />
              THEVULGO • Valencia
            </div>

            <h1 className="text-4xl font-black tracking-tight sm:text-6xl">
              {isEs
                ? "Reparación de paredes en Valencia"
                : "Wall repair in Valencia"}
            </h1>

            <p className="mt-6 max-w-4xl text-lg leading-8 text-neutral-700">
              {isEs
                ? "Reparamos paredes dañadas, agujeros, grietas pequeñas, golpes, desconchones, marcas de soportes de TV, cuadros, estanterías y desperfectos visibles. Servicio práctico para pisos, viviendas, alquileres, Airbnb y preparación antes de pintar."
                : "We repair damaged walls, holes, small cracks, dents, chips, marks from TV brackets, pictures, shelves and visible wall damage. Practical service for apartments, homes, rentals, Airbnb and preparation before painting."}
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
                  icon: Clock3,
                  title: isEs ? "Respuesta rápida" : "Fast response",
                  text: isEs
                    ? "Envía fotos de la pared y recibe una estimación."
                    : "Send photos of the wall and get an estimate.",
                },
                {
                  icon: ShieldCheck,
                  title: isEs ? "Acabado limpio" : "Clean finish",
                  text: isEs
                    ? "Masilla, lijado y preparación para pintura."
                    : "Filler, sanding and preparation for paint.",
                },
                {
                  icon: BadgeCheck,
                  title: isEs ? "ES / EN" : "EN / ES",
                  text: isEs
                    ? "Comunicación en español e inglés."
                    : "Communication in English and Spanish.",
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
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-yellow-50 px-4 py-1 text-xs font-bold">
              <Wrench className="h-4 w-4" />
              {isEs ? "Servicios de reparación" : "Wall repair services"}
            </div>

            <h2 className="mt-4 text-3xl font-black sm:text-4xl">
              {isEs
                ? "Servicios de reparación de paredes en Valencia"
                : "Wall repair services in Valencia"}
            </h2>

            <p className="mt-4 max-w-4xl leading-8 text-neutral-700">
              {isEs
                ? "Cada pared requiere una solución diferente. No es lo mismo reparar un pequeño agujero de un cuadro que un soporte de TV arrancado, una esquina golpeada o una grieta superficial. Analizamos el tipo de pared, el tamaño del desperfecto y el acabado para conseguir el mejor resultado posible."
                : "Every wall requires a different solution. Repairing a small picture hole is not the same as fixing a ripped TV bracket, a damaged corner or a surface crack. We analyse the wall type, the size of the damage and the finish to achieve the best possible result."}
            </p>
          </div>

          <Link
            href={`/${locale}/services/reparacion-agujeros-pared-valencia`}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-neutral-300 bg-white px-5 py-3 text-sm font-bold shadow-sm transition hover:scale-105"
          >
            {isEs ? "Reparación de agujeros" : "Wall hole repair"}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-yellow-300 bg-white p-6 shadow-md transition hover:shadow-xl"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-400 text-black shadow-md">
                {item.icon}
              </div>

              <h3 className="text-xl font-black">{item.title}</h3>

              <p className="mt-3 leading-7 text-neutral-700">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-white px-4 py-1 text-xs font-bold">
                <Euro className="h-4 w-4 text-yellow-500" />
                {isEs ? "Precios orientativos" : "Guide prices"}
              </div>

              <h2 className="mt-4 text-3xl font-black sm:text-4xl">
                {isEs
                  ? "Precio de reparación de paredes"
                  : "Wall repair pricing"}
              </h2>

              <p className="mt-5 text-lg leading-8 text-neutral-700">
                {isEs
                  ? "El precio depende del tamaño del daño, tipo de pared, materiales, número de reparaciones, altura, tiempo de secado y si posteriormente hay que pintar la zona. Lo más rápido es enviar fotografías por WhatsApp."
                  : "The price depends on the damage size, wall type, materials, number of repairs, height, drying time and whether painting is required afterwards. The fastest way is to send photos by WhatsApp."}
              </p>
            </div>

            <div className="rounded-3xl border border-yellow-300 bg-white p-6 shadow-xl">
              <h3 className="flex items-center gap-2 text-xl font-black">
                <Euro className="h-6 w-6 text-yellow-500" />
                {isEs ? "Precios desde" : "Prices from"}
              </h3>

              <div className="mt-5 space-y-3">
                {prices.map(([name, price]) => (
                  <div
                    key={name}
                    className="flex items-center justify-between rounded-xl bg-yellow-50 p-4"
                  >
                    <span className="font-semibold">
                      {name}
                    </span>

                    <span className="font-black">
                      {price}
                    </span>
                  </div>
                ))}
              </div>

              <p className="mt-5 text-sm leading-6 text-neutral-600">
                {isEs
                  ? "Materiales como masilla, pintura, imprimación, tacos o pladur pueden calcularse aparte dependiendo del trabajo."
                  : "Materials such as filler, paint, primer, wall plugs or drywall may be calculated separately depending on the repair."}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-yellow-50 px-4 py-1 text-xs font-bold">
            <CalendarCheck className="h-4 w-4" />
            {isEs ? "Proceso de trabajo" : "How it works"}
          </div>

          <h2 className="mx-auto mt-4 max-w-5xl text-3xl font-black sm:text-4xl">
            {isEs
              ? "Cómo reparamos una pared paso a paso"
              : "How we repair a wall step by step"}
          </h2>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-5">
          {process.map(([title, text]) => (
            <div
              key={title}
              className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-md"
            >
              <h3 className="font-black">
                {title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-neutral-600">
                {text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-black text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

          <div className="grid gap-10 lg:grid-cols-2">

            <div>

              <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-neutral-900 px-4 py-1 text-xs font-bold text-yellow-400">
                <Star className="h-4 w-4"/>
                {isEs ? "Por qué reparar la pared" : "Why repair the wall"}
              </div>

              <h2 className="mt-4 text-3xl font-black sm:text-4xl">
                {isEs
                  ? "Una pared bien reparada cambia toda la habitación"
                  : "A properly repaired wall changes the whole room"}
              </h2>

              <p className="mt-5 text-lg leading-8 text-neutral-300">
                {isEs
                  ? "Un pequeño agujero puede llamar más la atención que un mueble nuevo. Una pared bien preparada mejora la imagen del piso, ayuda antes de pintar, facilita la entrega de un alquiler y ofrece un acabado mucho más limpio."
                  : "A small hole can attract more attention than a new piece of furniture. A properly repaired wall improves the appearance of the apartment, helps before painting, simplifies rental handover and provides a much cleaner finish."}
              </p>

            </div>

            <div className="grid gap-4 sm:grid-cols-2">

              {[
                [Hammer,isEs ? "Reparaciones prácticas":"Practical repairs"],
                [ShieldCheck,isEs ? "Acabado limpio":"Clean finish"],
                [Brush,isEs ? "Preparado para pintar":"Ready for painting"],
                [House,isEs ? "Pisos y viviendas":"Homes & apartments"],
              ].map(([Icon,title])=>{

                const LucideIcon=Icon as typeof Hammer;

                return(

                  <div
                    key={String(title)}
                    className="rounded-2xl border border-yellow-400 bg-neutral-900 p-5"
                  >

                    <LucideIcon className="mb-4 h-6 w-6 text-yellow-400"/>

                    <h3 className="font-bold">
                      {String(title)}
                    </h3>

                  </div>

                );

              })}

            </div>

          </div>

        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">

          <div>

            <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-yellow-50 px-4 py-1 text-xs font-bold">
              <PanelsTopLeft className="h-4 w-4"/>
              {isEs ? "Problemas habituales":"Common wall problems"}
            </div>

            <h2 className="mt-4 text-3xl font-black sm:text-4xl">
              {isEs
                ? "Los desperfectos más comunes que reparamos"
                : "The most common wall damage we repair"}
            </h2>

            <p className="mt-5 text-lg leading-8 text-neutral-700">
              {isEs
                ? "Las reparaciones más habituales suelen aparecer después de desmontar una televisión, quitar cuadros, mover muebles o simplemente por el uso diario de la vivienda. Muchos de estos daños pueden solucionarse sin necesidad de una reforma completa."
                : "The most common repairs usually appear after removing a television, taking down pictures, moving furniture or simply through everyday use of the property. Many of these issues can be solved without a complete renovation."}
            </p>

          </div>

          <div className="grid gap-4 md:grid-cols-2">

            {wallProblems.map((item)=>(

              <div
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm"
              >

                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-yellow-500"/>

                <span className="text-sm leading-7 text-neutral-700">
                  {item}
                </span>

              </div>

            ))}

          </div>

        </div>

      </section>

      <section className="border-y border-neutral-200 bg-neutral-50">

        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

          <div className="text-center">

            <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-white px-4 py-1 text-xs font-bold">
              <Layers className="h-4 w-4"/>
              {isEs ? "Tipos de pared":"Wall types"}
            </div>

            <h2 className="mt-4 text-3xl font-black sm:text-4xl">
              {isEs
                ? "Trabajamos con diferentes tipos de paredes"
                : "We work with different wall types"}
            </h2>

          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {wallTypes.map((item)=>(

              <div
                key={item.title}
                className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-md"
              >

                <h3 className="text-xl font-black">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-neutral-700">
                  {item.text}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>
            <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-yellow-50 px-4 py-1 text-xs font-bold">
              <Sparkles className="h-4 w-4" />
              SEO • wall repair Valencia
            </div>

            <h2 className="mt-4 text-3xl font-black sm:text-4xl">
              {isEs
                ? "Reparación de paredes en Valencia"
                : "Wall repair in Valencia"}
            </h2>

            <div className="mt-6 space-y-5 text-lg leading-8 text-neutral-700">
              {isEs ? (
                <>
                  <p>
                    Si necesitas <strong>reparación de paredes en Valencia</strong>,
                    THEVULGO puede ayudarte con agujeros, grietas pequeñas,
                    golpes, desconchones, marcas de muebles, daños por soportes
                    de TV, estanterías, cuadros y desperfectos visibles en
                    pisos, viviendas, alquileres y apartamentos Airbnb.
                  </p>

                  <p>
                    Una pared dañada puede cambiar por completo la impresión de
                    una habitación. Aunque el resto del piso esté limpio, un
                    agujero mal tapado, una grieta visible, una zona levantada o
                    una marca de soporte pueden llamar mucho la atención. Por
                    eso, antes de pintar, entregar un piso o preparar una
                    vivienda para nuevos inquilinos, conviene revisar las
                    paredes principales.
                  </p>

                  <p>
                    Los trabajos más habituales incluyen tapar agujeros de tacos
                    y tornillos, reparar zonas donde había una televisión
                    colgada, corregir desperfectos de estanterías, arreglar
                    pequeños golpes en esquinas, aplicar masilla, lijar,
                    preparar la superficie y dejar la pared lista para pintar o
                    retocar.
                  </p>

                  <p>
                    Para dar un presupuesto claro, lo mejor es enviar fotos por
                    WhatsApp. Con una imagen cercana y otra general de la pared,
                    se puede valorar mejor el tamaño del daño, el tipo de
                    superficie, la necesidad de pintura y los materiales
                    necesarios.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    If you need <strong>wall repair in Valencia</strong>,
                    THEVULGO can help with holes, small cracks, dents, chips,
                    furniture marks, damage from TV brackets, shelves, pictures
                    and visible wall damage in apartments, homes, rentals and
                    Airbnb properties.
                  </p>

                  <p>
                    A damaged wall can completely change the impression of a
                    room. Even if the rest of the apartment is clean, a poorly
                    filled hole, visible crack, peeling area or bracket mark can
                    stand out. That is why it is useful to check main walls
                    before painting, handing over an apartment or preparing a
                    property for new tenants.
                  </p>

                  <p>
                    Common jobs include filling holes from plugs and screws,
                    repairing areas where a TV was mounted, fixing shelf damage,
                    repairing small corner dents, applying filler, sanding,
                    preparing the surface and leaving the wall ready for paint
                    or touch-up.
                  </p>

                  <p>
                    To provide a clear estimate, it is best to send photos by
                    WhatsApp. A close-up image and a general image of the wall
                    help assess the size of the damage, surface type, paint
                    needs and materials required.
                  </p>
                </>
              )}
            </div>
          </div>

          <div className="rounded-3xl border border-yellow-300 bg-yellow-50 p-8 shadow-xl">
            <h3 className="text-2xl font-black">
              {isEs ? "Antes de pedir presupuesto" : "Before requesting an estimate"}
            </h3>

            <div className="mt-6 space-y-4">
              {(isEs
                ? [
                    "Envía una foto cercana del daño",
                    "Envía una foto general de la pared",
                    "Indica si la pared es pladur, yeso o ladrillo",
                    "Explica si necesitas pintar después",
                    "Di si tienes pintura del mismo color",
                    "Manda medidas aproximadas del desperfecto",
                    "Indica la zona de Valencia",
                  ]
                : [
                    "Send a close-up photo of the damage",
                    "Send a general photo of the wall",
                    "Mention if the wall is drywall, plaster or brick",
                    "Explain if you need painting afterwards",
                    "Say if you have matching paint",
                    "Send approximate damage measurements",
                    "Mention the area of Valencia",
                  ]).map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-yellow-600" />
                  <span className="text-sm font-medium leading-7 text-neutral-800">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-white px-4 py-1 text-xs font-bold">
              <ArrowRight className="h-4 w-4 text-yellow-500" />
              {isEs ? "Servicios relacionados" : "Related services"}
            </div>

            <h2 className="mx-auto mt-4 max-w-5xl text-3xl font-black sm:text-4xl">
              {isEs
                ? "Más servicios para paredes, pintura, alquileres y Airbnb"
                : "More services for walls, paint, rentals and Airbnb"}
            </h2>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {clusterLinks.map((item) => (
              <Link
                key={item.slug}
                href={`/${locale}/services/${item.slug}`}
                className="group flex min-h-28 flex-col justify-between rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm transition hover:border-yellow-400 hover:shadow-md"
              >
                <span className="text-sm font-black">
                  {isEs ? item.es : item.en}
                </span>

                <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-neutral-600">
                  {isEs ? "Ver página" : "View page"}
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1 group-hover:text-yellow-500" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-yellow-50 px-4 py-1 text-xs font-bold">
              <MapPin className="h-4 w-4 text-yellow-500" />
              {isEs ? "Zonas de servicio" : "Service areas"}
            </div>

            <h2 className="mt-4 text-3xl font-black sm:text-4xl">
              {isEs
                ? "Reparación de paredes en Valencia y alrededores"
                : "Wall repair in Valencia and nearby areas"}
            </h2>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {areas.map((area) => (
              <span
                key={area}
                className="rounded-full border border-yellow-300 bg-yellow-50 px-4 py-2 text-sm font-semibold"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-white px-4 py-1 text-xs font-bold">
              <BadgeCheck className="h-4 w-4 text-yellow-500" />
              FAQ
            </div>

            <h2 className="mt-4 text-3xl font-black sm:text-4xl">
              {isEs ? "Preguntas frecuentes" : "Frequently asked questions"}
            </h2>
          </div>

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
          <div className="grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-center">
            <div>
              <h2 className="text-3xl font-black sm:text-4xl">
                {isEs
                  ? "¿Necesitas reparar una pared en Valencia?"
                  : "Need to repair a wall in Valencia?"}
              </h2>

              <p className="mt-4 max-w-3xl text-lg font-medium leading-8">
                {isEs
                  ? "Envía fotos por WhatsApp y te diremos qué se puede hacer, cuánto puede costar y qué materiales pueden hacer falta."
                  : "Send photos by WhatsApp and we will tell you what can be done, how much it may cost and what materials may be needed."}
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
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
        </div>
      </section>
    </main>
  );
}