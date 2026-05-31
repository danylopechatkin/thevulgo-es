import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  PackageOpen,
  ShieldCheck,
  Wrench,
  Home,
  HelpCircle,
  MapPin,
  Star,
  Ruler,
  PackageCheck,
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
    ? "Preparación de Muebles al Mudarse en Valencia | THEVULGO"
    : "Move-In Furniture Setup in Valencia | THEVULGO";

  const description = isEs
    ? "Preparación de muebles al mudarse en Valencia. Montaje de camas, armarios, escritorios, estanterías, cómodas, muebles IKEA y flat-pack para pisos y habitaciones."
    : "Move-in furniture setup in Valencia. Assembly of beds, wardrobes, desks, shelves, dressers, IKEA and flat-pack furniture for rooms and apartments.";

  return {
    title,
    description,
    keywords: isEs
      ? [
          "preparación muebles mudanza Valencia",
          "montaje muebles mudanza Valencia",
          "montar muebles al mudarse Valencia",
          "montaje habitación Valencia",
          "montaje muebles piso Valencia",
          "montaje IKEA mudanza Valencia",
          "home setup Valencia",
        ]
      : [
          "move in furniture setup Valencia",
          "furniture setup Valencia",
          "furniture assembly moving Valencia",
          "room setup Valencia",
          "apartment furniture setup Valencia",
          "IKEA move in assembly Valencia",
          "home setup Valencia",
        ],
    alternates: {
      canonical: `${siteUrl}/${locale}/preparacion-muebles-mudanza-valencia`,
      languages: {
        es: `${siteUrl}/es/preparacion-muebles-mudanza-valencia`,
        en: `${siteUrl}/en/preparacion-muebles-mudanza-valencia`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${siteUrl}/${locale}/preparacion-muebles-mudanza-valencia`,
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

export default async function MoveInFurnitureSetupValenciaPage({
  params,
}: PageProps) {
  const { locale } = await params;
  const isEs = locale === "es";

  const pageUrl = `${siteUrl}/${locale}/preparacion-muebles-mudanza-valencia`;

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, quiero un presupuesto para preparar/montar muebles durante una mudanza en Valencia."
      : "Hi, I would like a quote for move-in furniture setup in Valencia."
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappText}`;

  const faqs = isEs
    ? [
        {
          q: "¿Cuánto cuesta preparar muebles al mudarse en Valencia?",
          a: "Este servicio tiene presupuesto personalizado. El precio depende del número de muebles, tamaño, dificultad, tiempo necesario, si hay que fijar piezas a la pared y la zona de trabajo.",
        },
        {
          q: "¿Qué muebles pueden montar durante una mudanza?",
          a: "Podemos montar camas, armarios, escritorios, estanterías, cómodas, cajoneras, mesas, muebles TV, muebles de entrada y otras piezas tipo flat-pack.",
        },
        {
          q: "¿Pueden montar varios muebles en una sola visita?",
          a: "Sí. Este servicio está pensado para montar varias piezas durante la preparación de una habitación, piso o apartamento.",
        },
        {
          q: "¿Trabajan con muebles IKEA?",
          a: "Sí. Montamos muebles IKEA y también muebles de Leroy Merlin, Amazon, JYSK, Conforama, Bauhaus, Carrefour y otras tiendas.",
        },
        {
          q: "¿Pueden fijar muebles a la pared?",
          a: "Sí. Podemos fijar muebles altos, armarios, estanterías o unidades de almacenamiento si la pared lo permite y es recomendable por seguridad.",
        },
        {
          q: "¿Pueden organizar el orden del trabajo?",
          a: "Sí. Podemos priorizar primero cama, armario, escritorio o lo más urgente para que la habitación o piso quede funcional lo antes posible.",
        },
        {
          q: "¿Tengo que tener herramientas?",
          a: "No. Llevamos herramientas profesionales. Solo necesitas tener las cajas, piezas, tornillos, instrucciones y espacio libre para trabajar.",
        },
        {
          q: "¿Trabajan fuera de Valencia ciudad?",
          a: "Sí. Trabajamos en Valencia y alrededores como Mislata, Burjassot, Paterna, Torrent, Sagunto, Cullera, Gandía y otras zonas cercanas.",
        },
        {
          q: "¿Qué tengo que enviar para recibir presupuesto?",
          a: "Envía fotos de las cajas, lista de muebles, modelos o enlaces, dirección aproximada y si necesitas fijación a pared.",
        },
      ]
    : [
        {
          q: "How much does move-in furniture setup cost in Valencia?",
          a: "This service has a custom quote. Price depends on the number of furniture items, size, difficulty, required time, wall fixing and work area.",
        },
        {
          q: "What furniture can you assemble during a move-in?",
          a: "We can assemble beds, wardrobes, desks, shelves, dressers, drawer units, tables, TV units, entryway furniture and other flat-pack items.",
        },
        {
          q: "Can you assemble several items in one visit?",
          a: "Yes. This service is designed for assembling multiple pieces while setting up a room, apartment or flat.",
        },
        {
          q: "Do you work with IKEA furniture?",
          a: "Yes. We assemble IKEA furniture and also furniture from Leroy Merlin, Amazon, JYSK, Conforama, Bauhaus, Carrefour and other stores.",
        },
        {
          q: "Can you fix furniture to the wall?",
          a: "Yes. We can fix tall furniture, wardrobes, shelves or storage units to the wall when the wall allows it and it is recommended for safety.",
        },
        {
          q: "Can you organise the work order?",
          a: "Yes. We can prioritise the bed, wardrobe, desk or most urgent items so the room or apartment becomes functional as soon as possible.",
        },
        {
          q: "Do I need to have tools?",
          a: "No. We bring professional tools. You only need to have the boxes, parts, screws, instructions and clear space to work.",
        },
        {
          q: "Do you work outside Valencia city?",
          a: "Yes. We work in Valencia and nearby areas such as Mislata, Burjassot, Paterna, Torrent, Sagunto, Cullera, Gandía and other nearby zones.",
        },
        {
          q: "What should I send to get a quote?",
          a: "Send photos of the boxes, furniture list, models or links, approximate address and whether wall fixing is needed.",
        },
      ];

  const included = isEs
    ? [
        "Montaje de cama",
        "Montaje de armario",
        "Montaje de escritorio",
        "Montaje de estanterías",
        "Montaje de cómodas y cajoneras",
        "Montaje de muebles TV",
        "Fijación a pared si hace falta",
        "Organización por prioridad",
        "Presupuesto personalizado",
      ]
    : [
        "Bed assembly",
        "Wardrobe assembly",
        "Desk assembly",
        "Shelf assembly",
        "Dresser and drawer unit assembly",
        "TV unit assembly",
        "Wall fixing if needed",
        "Priority-based work order",
        "Custom quote",
      ];

  const situations = isEs
    ? [
        {
          title: "Mudanza a piso",
          text: "Montaje de varias piezas para dejar el piso funcional rápido después de entrar.",
        },
        {
          title: "Habitación nueva",
          text: "Cama, armario, escritorio, estantería y muebles básicos para usar la habitación cuanto antes.",
        },
        {
          title: "Piso de alquiler",
          text: "Preparación rápida para inquilinos, propietarios, Airbnb o vivienda turística.",
        },
        {
          title: "Home office",
          text: "Escritorio, cajonera, estantería y zona de trabajo compacta para teletrabajo.",
        },
      ]
    : [
        {
          title: "Apartment move-in",
          text: "Assembly of several pieces so the apartment becomes functional quickly after moving in.",
        },
        {
          title: "New room setup",
          text: "Bed, wardrobe, desk, shelf and basic furniture to make the room usable fast.",
        },
        {
          title: "Rental apartment",
          text: "Fast setup for tenants, owners, Airbnb or tourist apartments.",
        },
        {
          title: "Home office",
          text: "Desk, drawer unit, shelf and compact work area for remote work.",
        },
      ];

  const processSteps = isEs
    ? [
        "Envías lista de muebles, fotos o modelos",
        "Revisamos cantidad, tamaño y dificultad",
        "Ordenamos prioridades: cama, armario, escritorio o almacenamiento",
        "Confirmamos si hace falta fijación a pared",
        "Te damos presupuesto personalizado antes de empezar",
      ]
    : [
        "You send furniture list, photos or models",
        "We check quantity, size and difficulty",
        "We organise priorities: bed, wardrobe, desk or storage",
        "We confirm whether wall fixing is needed",
        "You receive a custom quote before the work starts",
      ];

  const notIncluded = isEs
    ? [
        "Transporte de muebles desde tienda",
        "Mudanza completa de cajas y objetos personales",
        "Subida de muebles sin ascensor si no se avisa antes",
        "Reparación de piezas rotas de fábrica",
        "Modificaciones estructurales no indicadas por el fabricante",
      ]
    : [
        "Furniture transport from store",
        "Full moving of boxes and personal belongings",
        "Carrying furniture upstairs without prior notice",
        "Repair of factory-broken parts",
        "Structural modifications not recommended by the manufacturer",
      ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: isEs
      ? "Preparación de Muebles al Mudarse en Valencia"
      : "Move-In Furniture Setup in Valencia",
    serviceType: isEs ? "Preparación de muebles al mudarse" : "Move-in furniture setup",
    description: isEs
      ? "Montaje de varias piezas de mobiliario durante mudanzas, preparación de habitaciones, pisos de alquiler y home setup en Valencia."
      : "Assembly of multiple furniture pieces during move-ins, room setup, rental apartment preparation and home setup in Valencia.",
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
      ? "Preparación de muebles al mudarse, montaje de varias piezas, muebles IKEA, camas, armarios, escritorios, estanterías y servicios handyman en Valencia."
      : "Move-in furniture setup, multi-item furniture assembly, IKEA furniture, beds, wardrobes, desks, shelves and handyman services in Valencia.",
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
          ? "Preparación de Muebles al Mudarse en Valencia"
          : "Move-In Furniture Setup in Valencia",
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
                ? "Mudanza · Habitación · Piso · IKEA · Home setup"
                : "Move-in · Room · Apartment · IKEA · Home setup"}
            </div>

            <h1 className="text-4xl font-black tracking-tight md:text-6xl">
              {isEs ? "Preparación de muebles al mudarse" : "Move-in furniture setup"}{" "}
              <span className="text-yellow-500">
                {isEs ? "en Valencia" : "in Valencia"}
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-700">
              {isEs
                ? "Montaje de varias piezas durante la preparación de una habitación, piso o apartamento. Camas, armarios, escritorios, estanterías, cómodas y muebles IKEA con presupuesto personalizado."
                : "Assembly of several pieces while setting up a room, flat or apartment. Beds, wardrobes, desks, shelves, dressers and IKEA furniture with a custom quote."}
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
                    "Presupuesto personalizado",
                    "Montaje de varias piezas",
                    "Habitaciones y pisos completos",
                    "Muebles IKEA y flat-pack",
                    "Fijación a pared si hace falta",
                    "Valencia y alrededores",
                  ]
                : [
                    "Custom quote",
                    "Multiple item assembly",
                    "Full rooms and apartments",
                    "IKEA and flat-pack furniture",
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
              <PackageOpen className="mb-6 h-12 w-12 text-black" />
              <p className="text-sm font-black uppercase tracking-widest">
                THEVULGO Valencia
              </p>
              <h2 className="mt-3 text-3xl font-black">
                {isEs
                  ? "Mudanza más rápida. Piso más funcional."
                  : "Faster move-in. More functional home."}
              </h2>
              <p className="mt-4 font-medium leading-7 text-neutral-900">
                {isEs
                  ? "Organizamos el montaje por prioridad para que tu habitación o piso quede funcional lo antes posible."
                  : "We organise assembly by priority so your room or apartment becomes functional as soon as possible."}
              </p>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {(isEs
                ? [
                    ["Multiple items", "Montaje de varias piezas"],
                    ["Room setup", "Habitación o piso listo para usar"],
                    ["IKEA furniture", "Muebles IKEA y flat-pack"],
                    ["Fast replies", "Respuesta rápida por WhatsApp"],
                  ]
                : [
                    ["Multiple items", "Several pieces in one visit"],
                    ["Room setup", "Room or apartment ready to use"],
                    ["IKEA furniture", "IKEA and flat-pack furniture"],
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
                  title: "Montaje por prioridad",
                  text: "Primero lo urgente: cama, armario, escritorio o almacenamiento.",
                },
                {
                  icon: Ruler,
                  title: "Orden y alineación",
                  text: "Revisamos estabilidad, ajuste y posición final.",
                },
                {
                  icon: ShieldCheck,
                  title: "Fijación si hace falta",
                  text: "Anclaje de muebles altos o estanterías cuando conviene.",
                },
                {
                  icon: Star,
                  title: "Presupuesto claro",
                  text: "Precio personalizado según cantidad de muebles y tiempo.",
                },
              ]
            : [
                {
                  icon: Wrench,
                  title: "Priority assembly",
                  text: "Urgent items first: bed, wardrobe, desk or storage.",
                },
                {
                  icon: Ruler,
                  title: "Order and alignment",
                  text: "We check stability, adjustment and final position.",
                },
                {
                  icon: ShieldCheck,
                  title: "Wall fixing if needed",
                  text: "Fixing tall furniture or shelves when recommended.",
                },
                {
                  icon: Star,
                  title: "Clear quote",
                  text: "Custom price based on number of items and time.",
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
            ? "Preparación de muebles para mudanza en Valencia"
            : "Furniture setup for move-ins in Valencia"}
        </h2>

        <div className="mt-6 space-y-5 text-lg leading-8 text-neutral-700">
          <p>
            {isEs
              ? "En THEVULGO ayudamos con la preparación de muebles al mudarse en Valencia. Este servicio está pensado para personas que acaban de entrar en un piso, habitación, apartamento, oficina o propiedad de alquiler y necesitan montar varias piezas el mismo día."
              : "At THEVULGO we help with move-in furniture setup in Valencia. This service is designed for people who have just moved into an apartment, room, office or rental property and need several pieces assembled on the same day."}
          </p>

          <p>
            {isEs
              ? "Podemos montar camas, armarios, escritorios, cómodas, cajoneras, estanterías, mesas, muebles TV, muebles de entrada y otras piezas tipo flat-pack. También podemos organizar el orden del trabajo para que primero quede lista la parte más importante del espacio."
              : "We can assemble beds, wardrobes, desks, dressers, drawer units, shelves, tables, TV units, entryway furniture and other flat-pack pieces. We can also organise the work order so the most important part of the space is ready first."}
          </p>

          <p>
            {isEs
              ? "Si tienes muchas cajas o muebles, envíanos fotos, modelos o una lista de piezas por WhatsApp. Así podemos calcular tiempo, prioridad, herramientas necesarias y presupuesto personalizado."
              : "If you have many boxes or furniture items, send photos, models or a furniture list by WhatsApp. This helps estimate time, priority, required tools and a custom quote."}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-16 md:px-8">
        <h2 className="text-3xl font-black md:text-4xl">
          {isEs
            ? "Montaje organizado para que la vivienda sea funcional antes"
            : "Organised assembly so the home becomes functional sooner"}
        </h2>

        <div className="mt-6 space-y-6 text-lg leading-8 text-neutral-700">
          <p>
            {isEs
              ? "Durante una mudanza, no todos los muebles tienen la misma urgencia. Normalmente la cama, el armario, el escritorio o el almacenamiento básico son lo primero para poder dormir, guardar ropa y empezar a usar la vivienda con normalidad."
              : "During a move-in, not every furniture item has the same urgency. Usually the bed, wardrobe, desk or basic storage comes first so you can sleep, store clothes and start using the home normally."}
          </p>

          <p>
            {isEs
              ? "Por eso este servicio no es solo montaje de muebles sueltos. También ayuda a ordenar prioridades, agrupar varias piezas en una visita y dejar una habitación o piso con uso práctico cuanto antes."
              : "That is why this service is not only single furniture assembly. It also helps organise priorities, group several items into one visit and make a room or apartment practical as soon as possible."}
          </p>

          <p>
            {isEs
              ? "Trabajamos con muebles IKEA y flat-pack de diferentes tiendas. Si hay muebles altos o estanterías, también revisamos si conviene fijar a pared para mejorar seguridad y estabilidad."
              : "We work with IKEA and flat-pack furniture from different stores. If there are tall units or shelves, we also check whether wall fixing is recommended for safety and stability."}
          </p>
        </div>
      </section>

      <section className="bg-yellow-50 py-16">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <h2 className="text-3xl font-black md:text-4xl">
            {isEs ? "Qué puede incluir este servicio" : "What this service can include"}
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
          {isEs ? "Ideal para diferentes situaciones" : "Ideal for different situations"}
        </h2>

        <div className="grid gap-8 md:grid-cols-4">
          {situations.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-yellow-300 bg-white p-7 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
            >
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
            {isEs ? "Presupuesto personalizado" : "Custom quote"}
          </p>
          <h2 className="mt-3 text-4xl font-black">
            {isEs
              ? "Presupuesto para preparar muebles al mudarse en Valencia"
              : "Quote for move-in furniture setup in Valencia"}
          </h2>
          <p className="mt-6 text-lg font-medium leading-8 text-neutral-900">
            {isEs
              ? "El precio depende del número de muebles, tamaño, dificultad, tiempo necesario, fijación a pared, transporte interno y zona. Envíanos una lista o fotos y te damos un precio claro."
              : "Price depends on the number of items, size, difficulty, required time, wall fixing, internal moving and area. Send a list or photos and get a clear quote."}
          </p>

          <div className="mt-8 rounded-3xl border border-yellow-600/30 bg-white p-6 text-left shadow-xl">
            <h3 className="text-xl font-black">
              {isEs ? "El precio depende de:" : "Price depends on:"}
            </h3>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {(isEs
                ? [
                    "Número de muebles",
                    "Tipo de piezas",
                    "Tamaño y peso",
                    "Cantidad de cajas",
                    "Fijación a pared",
                    "Orden de prioridad",
                    "Tiempo estimado",
                    "Distancia fuera de Valencia",
                  ]
                : [
                    "Number of items",
                    "Type of furniture",
                    "Size and weight",
                    "Number of boxes",
                    "Wall fixing",
                    "Priority order",
                    "Estimated time",
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
            {isEs ? "Enviar lista y pedir precio" : "Send list and request price"}
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
            ? "Realizamos preparación de muebles para mudanzas en Valencia ciudad y alrededores. Si estás fuera de Valencia, envíanos tu dirección y te confirmamos disponibilidad."
            : "We provide move-in furniture setup in Valencia city and nearby areas. If you are outside Valencia, send your address and we will confirm availability."}
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
                  title: "Montaje de muebles IKEA",
                  href: `/${locale}/montaje-muebles-ikea-valencia`,
                },
                {
                  title: "Montaje de cama",
                  href: `/${locale}/montaje-cama-valencia`,
                },
                {
                  title: "Montaje de armario",
                  href: `/${locale}/montaje-armario-valencia`,
                },
                {
                  title: "Montaje de escritorios",
                  href: `/${locale}/montaje-escritorios-valencia`,
                },
                {
                  title: "Fijación de muebles a la pared",
                  href: `/${locale}/fijacion-muebles-pared-valencia`,
                },
                {
                  title: "Servicios handyman Valencia",
                  href: `/${locale}/services`,
                },
              ]
            : [
                {
                  title: "IKEA furniture assembly",
                  href: `/${locale}/montaje-muebles-ikea-valencia`,
                },
                {
                  title: "Bed assembly",
                  href: `/${locale}/montaje-cama-valencia`,
                },
                {
                  title: "Wardrobe assembly",
                  href: `/${locale}/montaje-armario-valencia`,
                },
                {
                  title: "Desk assembly",
                  href: `/${locale}/montaje-escritorios-valencia`,
                },
                {
                  title: "Furniture wall fixing",
                  href: `/${locale}/fijacion-muebles-pared-valencia`,
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
              ? "¿Quieres preparar muebles al mudarte en Valencia?"
              : "Need furniture setup after moving in Valencia?"}
          </h2>
          <p className="mt-5 text-lg font-medium text-neutral-900">
            {isEs
              ? "Envíanos lista de muebles, fotos de cajas o modelos. Te damos un presupuesto personalizado antes de empezar."
              : "Send your furniture list, box photos or models. Get a custom quote before the work starts."}
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