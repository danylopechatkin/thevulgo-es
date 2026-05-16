import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  Lightbulb,
  ShieldCheck,
  HelpCircle,
  MapPin,
  Star,
  Wrench,
  Plug,
  Cable,
} from "lucide-react";

type PageProps = {
  params: Promise<{ locale: string }>;
};

const siteUrl = "https://www.thevulgo.es";
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
    ? "Cambio de Lámpara de Techo en Valencia | Desde 35€ | THEVULGO"
    : "Ceiling Lamp Replacement in Valencia | From €35 | THEVULGO";

  const description = isEs
    ? "Cambio de lámpara de techo en Valencia desde 35€. Retirada de luz antigua e instalación limpia de una nueva lámpara compatible."
    : "Ceiling lamp replacement in Valencia from €35. Removal of an old light and clean installation of a new compatible ceiling lamp.";

  return {
    title,
    description,
    alternates: {
      canonical: `${siteUrl}/${locale}/cambio-lampara-techo-valencia`,
      languages: {
        es: `${siteUrl}/es/cambio-lampara-techo-valencia`,
        en: `${siteUrl}/en/cambio-lampara-techo-valencia`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${siteUrl}/${locale}/cambio-lampara-techo-valencia`,
      siteName: "THEVULGO",
      locale: isEs ? "es_ES" : "en_US",
      type: "website",
    },
  };
}

export default async function CeilingLampReplacementValenciaPage({
  params,
}: PageProps) {
  const { locale } = await params;
  const isEs = locale === "es";

  const t = {
    badge: isEs
      ? "Lámpara de techo · Sustitución · Instalación limpia"
      : "Ceiling lamp · Replacement · Clean installation",

    h1: isEs
      ? "Cambio de lámpara de techo en Valencia"
      : "Ceiling lamp replacement in Valencia",

    hero: isEs
      ? "Retirada de luz antigua e instalación limpia de una nueva lámpara compatible desde 35€. Servicio para casas, apartamentos, pisos de alquiler y oficinas pequeñas."
      : "Removal of an old light and clean installation of a new compatible ceiling lamp from €35. Service for homes, apartments, rental flats and small offices.",

    whatsapp: isEs
      ? "Hola, quiero un presupuesto para cambio de lámpara de techo en Valencia."
      : "Hi, I would like a quote for ceiling lamp replacement in Valencia.",

    cta: isEs ? "Pedir presupuesto por WhatsApp" : "Get quote on WhatsApp",
    call: isEs ? "Llamar ahora" : "Call now",

    heroCardTitle: isEs
      ? "Cambio de lámpara limpio, seguro y ordenado."
      : "Clean, safe and organized ceiling lamp replacement.",

    heroCardText: isEs
      ? "Retiramos la lámpara antigua compatible, revisamos el punto existente, instalamos la nueva y comprobamos el funcionamiento."
      : "We remove the compatible old lamp, check the existing point, install the new one and test that it works.",

    bullets: isEs
      ? [
          "Desde 35€",
          "Retirada de luz antigua",
          "Lámpara compatible",
          "Acabado limpio",
          "Revisión básica",
          "Valencia y alrededores",
        ]
      : [
          "From €35",
          "Old light removal",
          "Compatible lamp",
          "Clean finish",
          "Basic check",
          "Valencia and nearby",
        ],

    benefits: isEs
      ? [
          {
            title: "Cambio compatible",
            text: "Sustitución de lámpara cuando el nuevo modelo encaja con el punto existente.",
            icon: Lightbulb,
          },
          {
            title: "Retirada de luz antigua",
            text: "Quitamos la luz anterior y preparamos el punto para la nueva.",
            icon: Wrench,
          },
          {
            title: "Revisión básica",
            text: "Comprobamos fijación, conexión visible y funcionamiento final.",
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
            title: "Compatible replacement",
            text: "Lamp replacement when the new model fits the existing point.",
            icon: Lightbulb,
          },
          {
            title: "Old light removal",
            text: "We remove the old light and prepare the point for the new one.",
            icon: Wrench,
          },
          {
            title: "Basic check",
            text: "We check fixing, visible connection and final operation.",
            icon: ShieldCheck,
          },
          {
            title: "Clear pricing",
            text: "Quote before the job based on photos and complexity.",
            icon: Star,
          },
        ],

    seoTitle: isEs
      ? "Sustitución de lámparas de techo en Valencia"
      : "Ceiling lamp replacement in Valencia",

    seoParagraphs: isEs
      ? [
          "En THEVULGO realizamos cambio de lámparas de techo en Valencia para casas, apartamentos, oficinas pequeñas y pisos de alquiler. Este servicio está pensado para retirar una luz antigua e instalar una nueva lámpara compatible en el punto existente.",
          "Antes de empezar revisamos la lámpara antigua, el tipo de techo, el punto eléctrico, el sistema de fijación, el peso de la nueva lámpara y la altura de instalación. El objetivo es dejar un acabado limpio, estable y funcional.",
          "Si quieres renovar una luz vieja, cambiar un plafón, instalar una lámpara nueva o mejorar el aspecto de una habitación, podemos ayudarte con una sustitución simple. Para instalaciones nuevas, cableado nuevo o lámparas muy pesadas, hay que revisar el caso antes.",
        ]
      : [
          "THEVULGO provides ceiling lamp replacement in Valencia for homes, apartments, small offices and rental flats. This service is designed to remove an old light and install a new compatible ceiling lamp using the existing point.",
          "Before starting, we check the old lamp, ceiling type, electrical point, fixing system, weight of the new lamp and installation height. The goal is a clean, stable and functional result.",
          "If you want to refresh an old light, replace a ceiling fixture, install a new lamp or improve the look of a room, we can help with a simple replacement. For new installations, new wiring or very heavy lamps, the case needs to be checked first.",
        ],

    includesTitle: isEs
      ? "¿Qué incluye el cambio de lámpara de techo?"
      : "What is included in ceiling lamp replacement?",

    includes: isEs
      ? [
          "Revisión de la lámpara antigua",
          "Revisión de la nueva lámpara",
          "Retirada de la luz existente",
          "Comprobación del punto actual",
          "Instalación de lámpara compatible",
          "Fijación y ajuste",
          "Comprobación de funcionamiento",
          "Acabado limpio y ordenado",
          "Presupuesto claro antes del trabajo",
        ]
      : [
          "Old lamp check",
          "New lamp check",
          "Removal of existing light",
          "Existing point check",
          "Compatible lamp installation",
          "Fixing and adjustment",
          "Functionality test",
          "Clean and tidy finish",
          "Clear quote before the job",
        ],

    placesTitle: isEs
      ? "Dónde cambiamos lámparas de techo"
      : "Where we replace ceiling lamps",

    places: isEs
      ? [
          {
            title: "Salón",
            text: "Cambio de lámparas principales, plafones o luces decorativas.",
          },
          {
            title: "Dormitorio",
            text: "Sustitución de lámparas de techo en habitaciones y apartamentos.",
          },
          {
            title: "Pasillo",
            text: "Cambio de luces simples en zonas de paso, entradas o distribuidores.",
          },
          {
            title: "Piso de alquiler",
            text: "Cambio rápido para apartamentos, alquileres y viviendas turísticas.",
          },
        ]
      : [
          {
            title: "Living room",
            text: "Replacement of main lamps, ceiling fixtures or decorative lights.",
          },
          {
            title: "Bedroom",
            text: "Ceiling lamp replacement in rooms and apartments.",
          },
          {
            title: "Hallway",
            text: "Simple light replacement in hallways, entrances or corridors.",
          },
          {
            title: "Rental apartment",
            text: "Quick replacement for apartments, rentals and tourist properties.",
          },
        ],

    priceTitle: isEs
      ? "Presupuesto para cambio de lámpara de techo en Valencia"
      : "Quote for ceiling lamp replacement in Valencia",

    priceText: isEs
      ? "El precio depende del tipo de lámpara, tamaño, peso, altura, tipo de techo, compatibilidad, punto eléctrico existente y dificultad. Envíanos fotos de la lámpara antigua y del nuevo modelo para confirmar precio."
      : "The price depends on lamp type, size, weight, height, ceiling type, compatibility, existing electrical point and difficulty. Send photos of the old lamp and the new model to confirm the price.",

    priceFactorsTitle: isEs ? "El precio depende de:" : "The price depends on:",

    priceFactors: isEs
      ? [
          "Tipo de lámpara",
          "Peso y tamaño",
          "Tipo de techo",
          "Altura de instalación",
          "Compatibilidad",
          "Estado del punto existente",
          "Material adicional",
          "Distancia fuera de Valencia",
        ]
      : [
          "Lamp type",
          "Weight and size",
          "Ceiling type",
          "Installation height",
          "Compatibility",
          "Existing point condition",
          "Additional material",
          "Distance outside Valencia",
        ],

    areasTitle: isEs ? "Zonas donde trabajamos" : "Areas we serve",

    areasText: isEs
      ? "Realizamos cambio de lámparas de techo en Valencia ciudad y alrededores. Si estás fuera de Valencia, envíanos tu dirección y te confirmamos disponibilidad."
      : "We replace ceiling lamps in Valencia city and nearby areas. If you are outside Valencia, send your address and we will confirm availability.",

    faqTitle: isEs ? "Preguntas frecuentes" : "Frequently asked questions",

    relatedTitle: isEs ? "Servicios relacionados" : "Related services",

    finalTitle: isEs
      ? "¿Quieres cambiar una lámpara de techo en Valencia?"
      : "Want to replace a ceiling lamp in Valencia?",

    finalText: isEs
      ? "Envíanos fotos de la lámpara antigua, del nuevo modelo y del techo. Te damos un presupuesto claro antes de empezar."
      : "Send photos of the old lamp, the new model and the ceiling. We will give you a clear quote before starting.",

    sendPhotos: isEs ? "Enviar fotos y pedir precio" : "Send photos and get quote",
    finalCta: isEs ? "Pedir presupuesto ahora" : "Get quote now",
    viewService: isEs ? "Ver servicio" : "View service",
  };

  const faqs = isEs
    ? [
        {
          q: "¿Cuánto cuesta cambiar una lámpara de techo en Valencia?",
          a: "El cambio de lámpara de techo empieza desde 35€. El precio final depende del tipo de lámpara, peso, altura, techo, compatibilidad y dificultad.",
        },
        {
          q: "¿Pueden retirar la lámpara antigua?",
          a: "Sí. Podemos retirar la luz antigua compatible e instalar una nueva en el mismo punto existente.",
        },
        {
          q: "¿Instalan plafones de techo?",
          a: "Sí. Podemos cambiar plafones, luces de techo y lámparas simples cuando el nuevo modelo es compatible.",
        },
        {
          q: "¿Tengo que comprar la lámpara?",
          a: "Puedes comprarla tú o podemos ayudarte a revisar si el modelo es compatible antes de la visita.",
        },
        {
          q: "¿Pueden instalar una lámpara donde no había ninguna?",
          a: "Esta página es para sustitución en un punto existente. Para instalación nueva o cableado nuevo, hay que revisar el caso antes.",
        },
        {
          q: "¿Qué fotos necesito enviar?",
          a: "Lo ideal es enviar fotos de la lámpara antigua, del nuevo modelo, del techo, del punto de luz y la altura aproximada.",
        },
        {
          q: "¿Pueden cambiar varias lámparas en una visita?",
          a: "Sí. Podemos cambiar varias lámparas compatibles en una misma visita con presupuesto combinado.",
        },
        {
          q: "¿Trabajan fuera de Valencia ciudad?",
          a: "Sí. Trabajamos en Valencia y alrededores como Mislata, Burjassot, Paterna, Torrent, Sagunto, Cullera, Gandía y otras zonas cercanas.",
        },
      ]
    : [
        {
          q: "How much does ceiling lamp replacement cost in Valencia?",
          a: "Ceiling lamp replacement starts from €35. The final price depends on lamp type, weight, height, ceiling, compatibility and difficulty.",
        },
        {
          q: "Can you remove the old lamp?",
          a: "Yes. We can remove the compatible old light and install a new one using the same existing point.",
        },
        {
          q: "Do you install ceiling fixtures?",
          a: "Yes. We can replace ceiling fixtures, ceiling lights and simple lamps when the new model is compatible.",
        },
        {
          q: "Do I need to buy the lamp?",
          a: "You can buy it yourself, or we can help check whether the model is compatible before the visit.",
        },
        {
          q: "Can you install a lamp where there was none before?",
          a: "This page is for replacement using an existing point. For a new installation or new wiring, the case needs to be checked first.",
        },
        {
          q: "What photos should I send?",
          a: "Ideally, send photos of the old lamp, the new model, the ceiling, the light point and approximate height.",
        },
        {
          q: "Can you replace several lamps in one visit?",
          a: "Yes. We can replace several compatible lamps in one visit with a combined quote.",
        },
        {
          q: "Do you work outside Valencia city?",
          a: "Yes. We work in Valencia and nearby areas such as Mislata, Burjassot, Paterna, Torrent, Sagunto, Cullera, Gandía and other nearby areas.",
        },
      ];

  const relatedServices = isEs
    ? [
        {
          title: "Instalación de lámpara",
          href: `/${locale}/instalacion-lampara-valencia`,
        },
        {
          title: "Lámparas colgantes",
          href: `/${locale}/instalacion-lamparas-colgantes-valencia`,
        },
        {
          title: "Apliques de pared",
          href: `/${locale}/instalacion-apliques-pared-valencia`,
        },
        {
          title: "Montaje eléctrico básico",
          href: `/${locale}/montaje-electrico-basico-valencia`,
        },
        {
          title: "Cambio de interruptor",
          href: `/${locale}/cambio-interruptor-valencia`,
        },
        {
          title: "Servicios handyman Valencia",
          href: `/${locale}/services`,
        },
      ]
    : [
        {
          title: "Lamp installation",
          href: `/${locale}/instalacion-lampara-valencia`,
        },
        {
          title: "Pendant lamp installation",
          href: `/${locale}/instalacion-lamparas-colgantes-valencia`,
        },
        {
          title: "Wall light installation",
          href: `/${locale}/instalacion-apliques-pared-valencia`,
        },
        {
          title: "Basic electrical installation",
          href: `/${locale}/montaje-electrico-basico-valencia`,
        },
        {
          title: "Switch replacement",
          href: `/${locale}/cambio-interruptor-valencia`,
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
      ? "Cambio de Lámpara de Techo en Valencia"
      : "Ceiling Lamp Replacement in Valencia",
    serviceType: "Ceiling lamp replacement",
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
      price: "35",
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
      ? "Cambio de lámparas de techo, instalación de lámparas, apliques, montaje eléctrico básico, enchufes, interruptores y servicios handyman en Valencia."
      : "Ceiling lamp replacement, lamp installation, wall lights, basic electrical installation, sockets, switches and handyman services in Valencia.",
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
          ? "Cambio de Lámpara de Techo en Valencia"
          : "Ceiling Lamp Replacement in Valencia",
        item: `${siteUrl}/${locale}/cambio-lampara-techo-valencia`,
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
              {t.badge}
            </div>

            <h1 className="text-4xl font-black tracking-tight md:text-6xl">
              {t.h1}
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-700">
              {t.hero}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={whatsappUrl} className="inline-flex items-center justify-center rounded-xl bg-yellow-400 px-6 py-4 font-black text-black shadow-md transition hover:scale-105 hover:bg-yellow-300">
                {t.cta}
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>

              <a href={`tel:+${phoneNumber}`} className="inline-flex items-center justify-center rounded-xl border border-neutral-300 bg-white px-6 py-4 font-black text-neutral-950 shadow-sm transition hover:scale-105 hover:border-yellow-400">
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
              <Lightbulb className="mb-6 h-12 w-12 text-black" />
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
                    ["Retirada", "Retirada de luz antigua"],
                    ["Instalación", "Nueva lámpara compatible"],
                    ["Revisión", "Conexión y fijación básica"],
                    ["Respuesta rápida", "Respuesta rápida por WhatsApp"],
                  ]
                : [
                    ["Removal", "Old light removal"],
                    ["Installation", "New compatible lamp"],
                    ["Check", "Basic connection and fixing check"],
                    ["Fast replies", "Fast replies on WhatsApp"],
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
          {t.benefits.map((item) => (
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
          <h2 className="text-3xl font-black md:text-4xl">{t.includesTitle}</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {t.includes.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-2xl border border-yellow-200 bg-white p-5 shadow-sm">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-yellow-500" />
                <p className="font-bold text-neutral-900">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <h2 className="mb-8 text-3xl font-black md:text-4xl">{t.placesTitle}</h2>
        <div className="grid gap-8 md:grid-cols-4">
          {t.places.map((item) => (
            <div key={item.title} className="rounded-3xl border border-yellow-300 bg-white p-7 shadow-md transition hover:-translate-y-1 hover:shadow-xl">
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
            {isEs ? "Desde 35€" : "From €35"}
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

          <a href={whatsappUrl} className="mt-8 inline-flex items-center justify-center rounded-xl bg-black px-7 py-4 font-black text-white shadow-md transition hover:scale-105">
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
            <span key={area} className="rounded-full border border-yellow-300 bg-yellow-50 px-4 py-2 font-bold text-neutral-900">
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
        <h2 className="text-3xl font-black md:text-4xl">{t.relatedTitle}</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {relatedServices.map((item) => (
            <Link key={item.title} href={item.href} className="group rounded-2xl border border-yellow-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-yellow-400 hover:shadow-md">
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
          <h2 className="text-4xl font-black tracking-tight">{t.finalTitle}</h2>
          <p className="mt-5 text-lg font-medium text-neutral-900">
            {t.finalText}
          </p>

          <a href={whatsappUrl} className="mt-8 inline-flex items-center justify-center rounded-xl bg-black px-8 py-4 font-black text-white shadow-xl transition hover:scale-105">
            {t.finalCta}
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>
    </main>
  );
}