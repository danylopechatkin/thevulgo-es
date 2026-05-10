import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  HelpCircle,
  MapPin,
  Star,
  Lightbulb,
  Cable,
} from "lucide-react";

type PageProps = {
  params: Promise<{ locale: string }>;
};

const siteUrl = "https://thevulgo.es";
const phoneNumber = "34610076942";

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

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";

  const title = isEs
    ? "Instalación de Tira LED en Valencia | Desde 29€ | THEVULGO"
    : "LED Strip Installation in Valencia | From €29 | THEVULGO";

  const description = isEs
    ? "Instalación simple de tiras LED en Valencia desde 29€. Iluminación decorativa para estantes, escritorios, muebles TV, cocinas y habitaciones."
    : "Simple LED strip installation in Valencia from €29. Decorative lighting for shelves, desks, TV units, kitchens and rooms.";

  return {
    title,
    description,
    alternates: {
      canonical: `${siteUrl}/${locale}/instalacion-tira-led-valencia`,
      languages: {
        es: `${siteUrl}/es/instalacion-tira-led-valencia`,
        en: `${siteUrl}/en/instalacion-tira-led-valencia`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${siteUrl}/${locale}/instalacion-tira-led-valencia`,
      siteName: "THEVULGO",
      locale: isEs ? "es_ES" : "en_US",
      type: "website",
    },
  };
}

export default async function LedStripInstallationValenciaPage({
  params,
}: PageProps) {
  const { locale } = await params;
  const isEs = locale === "es";

  const t = {
    badge: isEs
      ? "Tiras LED · Estantes · Escritorios · Iluminación decorativa"
      : "LED strips · Shelves · Desks · Decorative lighting",

    h1: isEs
      ? "Instalación de tira LED en Valencia"
      : "LED strip installation in Valencia",

    hero: isEs
      ? "Instalación simple de tiras LED desde 29€ para estantes, escritorios, muebles TV, cocinas, habitaciones e iluminación decorativa con acabado limpio y ordenado."
      : "Simple LED strip installation from €29 for shelves, desks, TV furniture, kitchens, rooms and decorative lighting with a clean, organized finish.",

    whatsapp: isEs
      ? "Hola, quiero un presupuesto para instalación de tira LED en Valencia."
      : "Hi, I would like a quote for LED strip installation in Valencia.",

    cta: isEs ? "Pedir presupuesto por WhatsApp" : "Get quote on WhatsApp",
    call: isEs ? "Llamar ahora" : "Call now",

    heroCardTitle: isEs
      ? "Instalación LED limpia, decorativa y ordenada."
      : "Clean, decorative and organized LED setup.",

    heroCardText: isEs
      ? "Preparamos la superficie, colocamos la tira LED, organizamos el cable y comprobamos el funcionamiento."
      : "We prepare the surface, install the LED strip, organize the cable and check that everything works.",

    bullets: isEs
      ? [
          "Desde 29€",
          "Estantes y escritorios",
          "Muebles TV y decoración",
          "Cableado ordenado",
          "Instalación simple",
          "Valencia y alrededores",
        ]
      : [
          "From €29",
          "Shelves and desks",
          "TV furniture and decor",
          "Clean cable routing",
          "Simple installation",
          "Valencia and nearby",
        ],

    benefits: isEs
      ? [
          {
            title: "Iluminación decorativa",
            text: "Tiras LED para estantes, muebles, escritorios y detalles.",
            icon: Sparkles,
          },
          {
            title: "Cableado ordenado",
            text: "Ruta básica para que el cable quede más limpio.",
            icon: Cable,
          },
          {
            title: "Instalación cuidada",
            text: "Revisión de superficie, fuente y conexión antes de colocar.",
            icon: ShieldCheck,
          },
          {
            title: "Precio claro",
            text: "Presupuesto antes del trabajo según fotos y dificultad.",
            icon: Star,
          },
        ]
      : [
          {
            title: "Decorative lighting",
            text: "LED strips for shelves, furniture, desks and details.",
            icon: Sparkles,
          },
          {
            title: "Clean cable routing",
            text: "Basic cable route for a cleaner final look.",
            icon: Cable,
          },
          {
            title: "Careful installation",
            text: "Surface, power supply and connection checked before fitting.",
            icon: ShieldCheck,
          },
          {
            title: "Clear pricing",
            text: "Quote before the job based on photos and complexity.",
            icon: Star,
          },
        ],

    seoTitle: isEs
      ? "Instalación simple de tiras LED en Valencia"
      : "Simple LED strip installation in Valencia",

    seoParagraphs: isEs
      ? [
          "En THEVULGO realizamos instalación de tiras LED en Valencia para estantes, escritorios, muebles TV, cocinas, vitrinas, cabeceros, armarios y zonas decorativas. Es una forma rápida de mejorar el ambiente de una habitación o crear iluminación indirecta.",
          "Antes de instalar revisamos la superficie, la longitud de la tira, el tipo de alimentación, la ubicación del enchufe y la ruta del cable. El objetivo es dejar una instalación limpia, funcional y visualmente ordenada.",
          "Este servicio está pensado para instalaciones simples con tiras LED preparadas, adaptador o fuente de alimentación incluida. Si quieres una instalación compleja, empotrada o con cableado nuevo, hay que revisar el caso antes.",
        ]
      : [
          "THEVULGO provides LED strip installation in Valencia for shelves, desks, TV furniture, kitchens, display cabinets, headboards, wardrobes and decorative areas. It is a quick way to improve the atmosphere of a room or create indirect lighting.",
          "Before installation, we check the surface, strip length, power supply, socket location and cable route. The goal is a clean, functional and visually organized result.",
          "This service is for simple installations with prepared LED strips, adapters or included power supplies. For complex, recessed or new-wiring installations, the case needs to be checked first.",
        ],

    includesTitle: isEs
      ? "¿Qué incluye la instalación de tira LED?"
      : "What is included in LED strip installation?",

    includes: isEs
      ? [
          "Revisión de superficie",
          "Revisión de longitud",
          "Preparación básica del área",
          "Colocación de la tira LED",
          "Conexión del adaptador",
          "Organización básica de cable",
          "Comprobación de funcionamiento",
          "Acabado limpio y ordenado",
          "Presupuesto claro antes del trabajo",
        ]
      : [
          "Surface check",
          "Length check",
          "Basic area preparation",
          "LED strip placement",
          "Adapter connection",
          "Basic cable organization",
          "Functionality check",
          "Clean and tidy finish",
          "Clear quote before the job",
        ],

    placesTitle: isEs ? "Dónde instalamos tiras LED" : "Where we install LED strips",

    places: isEs
      ? [
          {
            title: "Estantes",
            text: "Iluminación decorativa para estanterías, vitrinas y baldas.",
          },
          {
            title: "Escritorios",
            text: "Luz ambiental para zonas de trabajo, setup o gaming.",
          },
          {
            title: "Muebles TV",
            text: "LED decorativo para muebles multimedia y zonas de salón.",
          },
          {
            title: "Cocinas",
            text: "Iluminación simple bajo muebles o zonas visibles preparadas.",
          },
        ]
      : [
          {
            title: "Shelves",
            text: "Decorative lighting for shelves, cabinets and display areas.",
          },
          {
            title: "Desks",
            text: "Ambient lighting for workstations, setups or gaming areas.",
          },
          {
            title: "TV furniture",
            text: "Decorative LED lighting for media units and living rooms.",
          },
          {
            title: "Kitchens",
            text: "Simple lighting under cabinets or prepared visible areas.",
          },
        ],

    priceTitle: isEs
      ? "Presupuesto para instalar tira LED en Valencia"
      : "Quote for LED strip installation in Valencia",

    priceText: isEs
      ? "El precio depende de la longitud, superficie, ubicación, tipo de tira, fuente de alimentación, organización del cable y dificultad. Envíanos fotos y te damos un precio claro."
      : "The price depends on length, surface, location, strip type, power supply, cable organization and difficulty. Send photos and we will give you a clear quote.",

    priceFactorsTitle: isEs ? "El precio depende de:" : "The price depends on:",

    priceFactors: isEs
      ? [
          "Longitud de la tira",
          "Tipo de superficie",
          "Ubicación de instalación",
          "Fuente de alimentación",
          "Enchufe cercano",
          "Organización de cable",
          "Varias zonas",
          "Distancia fuera de Valencia",
        ]
      : [
          "LED strip length",
          "Surface type",
          "Installation location",
          "Power supply",
          "Nearby socket",
          "Cable organization",
          "Multiple areas",
          "Distance outside Valencia",
        ],

    areasTitle: isEs ? "Zonas donde trabajamos" : "Areas we serve",

    areasText: isEs
      ? "Realizamos instalación de tiras LED en Valencia ciudad y alrededores. Si estás fuera de Valencia, envíanos tu dirección y te confirmamos disponibilidad."
      : "We install LED strips in Valencia city and nearby areas. If you are outside Valencia, send your address and we will confirm availability.",

    faqTitle: isEs ? "Preguntas frecuentes" : "Frequently asked questions",

    relatedTitle: isEs ? "Servicios relacionados" : "Related services",

    finalTitle: isEs
      ? "¿Quieres instalar una tira LED en Valencia?"
      : "Want to install an LED strip in Valencia?",

    finalText: isEs
      ? "Envíanos fotos de la zona, la tira LED y el enchufe más cercano. Te damos un presupuesto claro antes de empezar."
      : "Send photos of the area, the LED strip and the nearest socket. We will give you a clear quote before starting.",

    sendPhotos: isEs ? "Enviar fotos y pedir precio" : "Send photos and get quote",
    finalCta: isEs ? "Pedir presupuesto ahora" : "Get quote now",
    viewService: isEs ? "Ver servicio" : "View service",
  };

  const faqs = isEs
    ? [
        {
          q: "¿Cuánto cuesta instalar una tira LED en Valencia?",
          a: "La instalación simple de tira LED empieza desde 29€. El precio final depende de la longitud, ubicación, tipo de superficie, fuente de alimentación, cableado y dificultad.",
        },
        {
          q: "¿Dónde se pueden instalar tiras LED?",
          a: "Se pueden instalar en estantes, escritorios, muebles TV, cocinas, vitrinas, cabeceros, armarios, zonas decorativas y pequeños espacios interiores.",
        },
        {
          q: "¿Tengo que comprar la tira LED?",
          a: "Puedes comprarla tú o podemos ayudarte a elegir una opción adecuada según la zona, color, longitud y tipo de alimentación.",
        },
        {
          q: "¿Pueden ocultar el cable de la tira LED?",
          a: "Sí. Podemos organizar el cableado de forma básica con canaleta, clips o una ruta más limpia según el espacio disponible.",
        },
        {
          q: "¿Instalan tiras LED con enchufe?",
          a: "Sí. Instalamos tiras LED simples con adaptador, enchufe o fuente de alimentación incluida, siempre que el sistema esté preparado.",
        },
        {
          q: "¿Pueden cortar o ajustar la tira LED?",
          a: "Depende del modelo. Algunas tiras LED permiten corte en puntos marcados, otras no. Conviene enviar fotos o enlace del producto antes.",
        },
        {
          q: "¿Pueden instalar varias tiras LED en una visita?",
          a: "Sí. Podemos instalar varias tiras LED en una misma visita con presupuesto combinado.",
        },
        {
          q: "¿Trabajan fuera de Valencia ciudad?",
          a: "Sí. Trabajamos en Valencia y alrededores como Mislata, Burjassot, Paterna, Torrent, Sagunto, Cullera, Gandía y otras zonas cercanas.",
        },
      ]
    : [
        {
          q: "How much does LED strip installation cost in Valencia?",
          a: "Simple LED strip installation starts from €29. The final price depends on length, location, surface type, power supply, cable routing and difficulty.",
        },
        {
          q: "Where can LED strips be installed?",
          a: "LED strips can be installed on shelves, desks, TV furniture, kitchens, display cabinets, headboards, wardrobes, decorative areas and small indoor spaces.",
        },
        {
          q: "Do I need to buy the LED strip?",
          a: "You can buy it yourself, or we can help you choose a suitable option based on the area, color, length and power type.",
        },
        {
          q: "Can you hide the LED strip cable?",
          a: "Yes. We can organize the cable in a basic way using raceway, clips or a cleaner route depending on the space.",
        },
        {
          q: "Do you install plug-in LED strips?",
          a: "Yes. We install simple LED strips with an adapter, plug or included power supply when the system is ready.",
        },
        {
          q: "Can you cut or adjust the LED strip?",
          a: "It depends on the model. Some LED strips can be cut at marked points, others cannot. Send photos or a product link before the job.",
        },
        {
          q: "Can you install several LED strips in one visit?",
          a: "Yes. We can install several LED strips in one visit with a combined quote.",
        },
        {
          q: "Do you work outside Valencia city?",
          a: "Yes. We work in Valencia and nearby areas such as Mislata, Burjassot, Paterna, Torrent, Sagunto, Cullera, Gandía and other nearby areas.",
        },
      ];

  const relatedServices = isEs
    ? [
        {
          title: "Montaje eléctrico básico",
          href: `/${locale}/montaje-electrico-basico-valencia`,
        },
        {
          title: "Cambio de enchufe",
          href: `/${locale}/cambio-enchufe-valencia`,
        },
        {
          title: "Instalación de lámpara",
          href: `/${locale}/instalacion-lampara-valencia`,
        },
        {
          title: "Ocultar cables",
          href: `/${locale}/ocultar-cables-valencia`,
        },
        {
          title: "Muebles TV y multimedia",
          href: `/${locale}/montaje-muebles-tv-multimedia-valencia`,
        },
        {
          title: "Servicios handyman Valencia",
          href: `/${locale}/services`,
        },
      ]
    : [
        {
          title: "Basic electrical installation",
          href: `/${locale}/montaje-electrico-basico-valencia`,
        },
        {
          title: "Socket replacement",
          href: `/${locale}/cambio-enchufe-valencia`,
        },
        {
          title: "Lamp installation",
          href: `/${locale}/instalacion-lampara-valencia`,
        },
        {
          title: "Cable concealment",
          href: `/${locale}/ocultar-cables-valencia`,
        },
        {
          title: "TV and media furniture",
          href: `/${locale}/montaje-muebles-tv-multimedia-valencia`,
        },
        {
          title: "Handyman services Valencia",
          href: `/${locale}/services`,
        },
      ];

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    t.whatsapp
  )}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: isEs
      ? "Instalación de Tira LED en Valencia"
      : "LED Strip Installation in Valencia",
    serviceType: "LED strip installation",
    provider: {
      "@type": "LocalBusiness",
      name: "THEVULGO",
      url: siteUrl,
      telephone: "+34610076942",
      areaServed: "Valencia",
    },
    areaServed: serviceAreas,
    offers: {
      "@type": "Offer",
      price: "29",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
    },
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "THEVULGO",
    url: siteUrl,
    telephone: "+34610076942",
    areaServed: "Valencia",
    priceRange: "€€",
    description: isEs
      ? "Instalación de tiras LED, iluminación decorativa, lámparas, apliques, cambio de enchufes, interruptores y servicios handyman en Valencia."
      : "LED strip installation, decorative lighting, lamps, wall lights, socket replacement, switch replacement and handyman services in Valencia.",
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
          ? "Instalación de Tira LED en Valencia"
          : "LED Strip Installation in Valencia",
        item: `${siteUrl}/${locale}/instalacion-tira-led-valencia`,
      },
    ],
  };

  return (
    <main className="bg-white text-neutral-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <section className="relative overflow-hidden border-b border-yellow-200 bg-gradient-to-br from-yellow-50 via-white to-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-2 md:px-8 md:py-24">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-yellow-300 bg-yellow-100 px-4 py-2 text-sm font-black text-neutral-900 shadow-sm">
              <MapPin className="h-4 w-4 text-yellow-600" />
              {t.badge}
            </div>

            <h1 className="text-4xl font-black tracking-tight md:text-6xl">
              {t.h1}
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-700">
              {t.hero}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappUrl}
                className="inline-flex items-center justify-center rounded-xl bg-yellow-400 px-6 py-4 font-black text-black shadow-md transition hover:scale-105 hover:bg-yellow-300"
              >
                {t.cta}
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>

              <a
                href={`tel:+${phoneNumber}`}
                className="inline-flex items-center justify-center rounded-xl border border-neutral-300 bg-white px-6 py-4 font-black text-neutral-950 shadow-sm transition hover:scale-105 hover:border-yellow-400"
              >
                {t.call}
              </a>
            </div>

            <div className="mt-8 grid gap-3 text-sm font-semibold text-neutral-700 sm:grid-cols-2">
              {t.bullets.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-yellow-500" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-yellow-300 bg-white p-4 shadow-2xl md:p-6">
            <div className="rounded-2xl bg-yellow-400 p-8 text-black shadow-md">
              <Sparkles className="mb-6 h-12 w-12 text-black" />
              <p className="text-sm font-black uppercase tracking-widest">
                THEVULGO Valencia
              </p>
              <h2 className="mt-3 text-3xl font-black">{t.heroCardTitle}</h2>
              <p className="mt-4 font-medium leading-7 text-neutral-900">
                {t.heroCardText}
              </p>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {(isEs
                ? [
                    ["Estantes", "Estantes, vitrinas y armarios"],
                    ["Escritorios", "Escritorios y zonas de trabajo"],
                    ["Muebles TV", "Muebles TV y media setup"],
                    ["Respuesta rápida", "Respuesta rápida por WhatsApp"],
                  ]
                : [
                    ["Shelves", "Shelves, cabinets and wardrobes"],
                    ["Desks", "Desks and work areas"],
                    ["TV furniture", "TV furniture and media setup"],
                    ["Fast replies", "Fast replies on WhatsApp"],
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
          {t.benefits.map((item) => (
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
          {t.seoTitle}
        </h2>

        <div className="mt-6 space-y-5 text-lg leading-8 text-neutral-700">
          {t.seoParagraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </section>

      <section className="bg-yellow-50 py-16">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <h2 className="text-3xl font-black md:text-4xl">
            {t.includesTitle}
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {t.includes.map((item) => (
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
          {t.placesTitle}
        </h2>

        <div className="grid gap-8 md:grid-cols-4">
          {t.places.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-yellow-300 bg-white p-7 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400">
                <Lightbulb className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-2xl font-black">{item.title}</h3>
              <p className="mt-4 leading-7 text-neutral-700">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-yellow-400 py-16 text-black">
        <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
          <p className="text-sm font-black uppercase tracking-widest">
            {isEs ? "Desde 29€" : "From €29"}
          </p>
          <h2 className="mt-3 text-4xl font-black">{t.priceTitle}</h2>
          <p className="mt-6 text-lg font-medium leading-8 text-neutral-900">
            {t.priceText}
          </p>

          <div className="mt-8 rounded-3xl border border-yellow-600/30 bg-white p-6 text-left shadow-xl">
            <h3 className="text-xl font-black">{t.priceFactorsTitle}</h3>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {t.priceFactors.map((item) => (
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
            {t.sendPhotos}
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <h2 className="text-3xl font-black md:text-4xl">{t.areasTitle}</h2>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-neutral-700">
          {t.areasText}
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
          <h2 className="text-3xl font-black md:text-4xl">{t.faqTitle}</h2>

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
        <h2 className="text-3xl font-black md:text-4xl">{t.relatedTitle}</h2>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {relatedServices.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group rounded-2xl border border-yellow-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-yellow-400 hover:shadow-md"
            >
              <p className="text-xl font-black">{item.title}</p>
              <p className="mt-3 inline-flex items-center font-bold text-neutral-700 group-hover:text-black">
                {t.viewService}
                <ArrowRight className="ml-2 h-4 w-4" />
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-yellow-400 py-16">
        <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
          <h2 className="text-4xl font-black tracking-tight">
            {t.finalTitle}
          </h2>
          <p className="mt-5 text-lg font-medium text-neutral-900">
            {t.finalText}
          </p>

          <a
            href={whatsappUrl}
            className="mt-8 inline-flex items-center justify-center rounded-xl bg-black px-8 py-4 font-black text-white shadow-xl transition hover:scale-105"
          >
            {t.finalCta}
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>
    </main>
  );
}