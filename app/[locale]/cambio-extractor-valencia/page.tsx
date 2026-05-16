import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  Fan,
  ShieldCheck,
  HelpCircle,
  MapPin,
  Star,
  Wrench,
  Plug,
  Bath,
  CookingPot,
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
    ? "Cambio de Extractor en Valencia | Desde 45€ | THEVULGO"
    : "Extractor Fan Replacement in Valencia | From €45 | THEVULGO";

  const description = isEs
    ? "Cambio de extractor en Valencia desde 45€. Sustitución de extractores compatibles de baño o cocina con instalación limpia y revisión básica."
    : "Extractor fan replacement in Valencia from €45. Replacement of compatible bathroom or kitchen extractor fans with clean installation and basic check.";

  return {
    title,
    description,
    alternates: {
      canonical: `${siteUrl}/${locale}/cambio-extractor-valencia`,
      languages: {
        es: `${siteUrl}/es/cambio-extractor-valencia`,
        en: `${siteUrl}/en/cambio-extractor-valencia`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${siteUrl}/${locale}/cambio-extractor-valencia`,
      siteName: "THEVULGO",
      locale: isEs ? "es_ES" : "en_US",
      type: "website",
    },
  };
}

export default async function ExtractorReplacementValenciaPage({
  params,
}: PageProps) {
  const { locale } = await params;
  const isEs = locale === "es";

  const t = {
    badge: isEs
      ? "Extractor · Baño · Cocina · Sustitución compatible"
      : "Extractor fan · Bathroom · Kitchen · Compatible replacement",

    h1: isEs
      ? "Cambio de extractor en Valencia"
      : "Extractor fan replacement in Valencia",

    hero: isEs
      ? "Sustitución de extractores compatibles de baño o cocina desde 45€. Cambio limpio, revisión básica de conexión y acabado ordenado para casas, apartamentos y pisos de alquiler."
      : "Replacement of compatible bathroom or kitchen extractor fans from €45. Clean swap, basic connection check and tidy finish for homes, apartments and rental properties.",

    whatsapp: isEs
      ? "Hola, quiero un presupuesto para cambio de extractor en Valencia."
      : "Hi, I would like a quote for extractor fan replacement in Valencia.",

    cta: isEs ? "Pedir presupuesto por WhatsApp" : "Get quote on WhatsApp",
    call: isEs ? "Llamar ahora" : "Call now",

    heroCardTitle: isEs
      ? "Cambio de extractor limpio, rápido y ordenado."
      : "Clean, fast and organized extractor fan replacement.",

    heroCardText: isEs
      ? "Retiramos el extractor antiguo compatible, revisamos el punto existente, colocamos el nuevo y comprobamos el funcionamiento."
      : "We remove the compatible old extractor fan, check the existing point, install the new unit and test that it works.",

    bullets: isEs
      ? [
          "Desde 45€",
          "Extractor de baño",
          "Extractor de cocina",
          "Sustitución compatible",
          "Acabado limpio",
          "Valencia y alrededores",
        ]
      : [
          "From €45",
          "Bathroom extractor fan",
          "Kitchen extractor fan",
          "Compatible replacement",
          "Clean finish",
          "Valencia and nearby",
        ],

    benefits: isEs
      ? [
          {
            title: "Sustitución compatible",
            text: "Cambio de extractor cuando el nuevo modelo encaja con el punto existente.",
            icon: Fan,
          },
          {
            title: "Baño o cocina",
            text: "Extractores simples para baño, cocina, aseo o zona ventilada.",
            icon: Bath,
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
            text: "Extractor fan swap when the new model fits the existing point.",
            icon: Fan,
          },
          {
            title: "Bathroom or kitchen",
            text: "Simple extractor fans for bathrooms, kitchens, toilets or ventilated areas.",
            icon: Bath,
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
      ? "Sustitución de extractores de baño y cocina en Valencia"
      : "Bathroom and kitchen extractor fan replacement in Valencia",

    seoParagraphs: isEs
      ? [
          "En THEVULGO realizamos cambio de extractores en Valencia para baños, cocinas, aseos, apartamentos, casas y propiedades de alquiler. Este servicio está pensado para sustituir un extractor existente por otro compatible, manteniendo el punto actual y dejando un acabado limpio.",
          "Antes de empezar revisamos el extractor antiguo, el tamaño aproximado, el sistema de fijación, el punto eléctrico existente, la salida de ventilación y el tipo de nuevo extractor. El objetivo es confirmar que el cambio es viable y evitar sorpresas durante la instalación.",
          "Si el extractor hace ruido, no funciona, está viejo, sucio, roto o desgastado, podemos ayudarte a cambiarlo por un modelo compatible. Para instalaciones nuevas, conductos complejos o modificaciones eléctricas importantes, hay que revisar el caso antes.",
        ]
      : [
          "THEVULGO provides extractor fan replacement in Valencia for bathrooms, kitchens, toilets, apartments, homes and rental properties. This service is designed to replace an existing extractor fan with a compatible unit while keeping the current point and leaving a clean finish.",
          "Before starting, we check the old extractor fan, approximate size, fixing system, existing electrical point, ventilation outlet and the type of new unit. The goal is to confirm that the replacement is viable and avoid surprises during installation.",
          "If the extractor fan is noisy, not working, old, dirty, broken or worn out, we can help replace it with a compatible model. For new installations, complex ducting or major electrical changes, the case needs to be checked first.",
        ],

    includesTitle: isEs
      ? "¿Qué incluye el cambio de extractor?"
      : "What is included in extractor fan replacement?",

    includes: isEs
      ? [
          "Revisión del extractor antiguo",
          "Revisión del nuevo extractor",
          "Retirada del extractor existente",
          "Comprobación del punto actual",
          "Instalación del extractor compatible",
          "Fijación y ajuste",
          "Comprobación de funcionamiento",
          "Acabado limpio y ordenado",
          "Presupuesto claro antes del trabajo",
        ]
      : [
          "Old extractor fan check",
          "New extractor fan check",
          "Removal of existing unit",
          "Existing point check",
          "Compatible extractor installation",
          "Fixing and adjustment",
          "Functionality test",
          "Clean and tidy finish",
          "Clear quote before the job",
        ],

    placesTitle: isEs
      ? "Dónde cambiamos extractores"
      : "Where we replace extractor fans",

    places: isEs
      ? [
          {
            title: "Baño",
            text: "Sustitución de extractores de baño compatibles con el punto existente.",
          },
          {
            title: "Cocina",
            text: "Cambio de extractores simples de cocina cuando el modelo encaja.",
          },
          {
            title: "Aseo",
            text: "Extractores pequeños para aseos, baños secundarios o zonas interiores.",
          },
          {
            title: "Piso de alquiler",
            text: "Cambio rápido para apartamentos, alquileres y viviendas turísticas.",
          },
        ]
      : [
          {
            title: "Bathroom",
            text: "Replacement of bathroom extractor fans compatible with the existing point.",
          },
          {
            title: "Kitchen",
            text: "Replacement of simple kitchen extractor fans when the model fits.",
          },
          {
            title: "Toilet room",
            text: "Small extractor fans for toilets, secondary bathrooms or interior spaces.",
          },
          {
            title: "Rental apartment",
            text: "Quick replacement for apartments, rentals and tourist properties.",
          },
        ],

    priceTitle: isEs
      ? "Presupuesto para cambio de extractor en Valencia"
      : "Quote for extractor fan replacement in Valencia",

    priceText: isEs
      ? "El precio depende del tipo de extractor, tamaño, acceso, fijación, compatibilidad, punto eléctrico existente y dificultad. Envíanos fotos del extractor antiguo y del nuevo modelo para confirmar precio."
      : "The price depends on extractor type, size, access, fixing, compatibility, existing electrical point and difficulty. Send photos of the old fan and the new model to confirm the price.",

    priceFactorsTitle: isEs ? "El precio depende de:" : "The price depends on:",

    priceFactors: isEs
      ? [
          "Tipo de extractor",
          "Baño o cocina",
          "Tamaño del modelo",
          "Compatibilidad",
          "Estado del punto existente",
          "Acceso y altura",
          "Material adicional",
          "Distancia fuera de Valencia",
        ]
      : [
          "Extractor fan type",
          "Bathroom or kitchen",
          "Model size",
          "Compatibility",
          "Existing point condition",
          "Access and height",
          "Additional material",
          "Distance outside Valencia",
        ],

    areasTitle: isEs ? "Zonas donde trabajamos" : "Areas we serve",

    areasText: isEs
      ? "Realizamos cambio de extractores en Valencia ciudad y alrededores. Si estás fuera de Valencia, envíanos tu dirección y te confirmamos disponibilidad."
      : "We replace extractor fans in Valencia city and nearby areas. If you are outside Valencia, send your address and we will confirm availability.",

    faqTitle: isEs ? "Preguntas frecuentes" : "Frequently asked questions",

    relatedTitle: isEs ? "Servicios relacionados" : "Related services",

    finalTitle: isEs
      ? "¿Quieres cambiar un extractor en Valencia?"
      : "Want to replace an extractor fan in Valencia?",

    finalText: isEs
      ? "Envíanos fotos del extractor antiguo, del nuevo modelo y de la zona. Te damos un presupuesto claro antes de empezar."
      : "Send photos of the old extractor fan, the new model and the area. We will give you a clear quote before starting.",

    sendPhotos: isEs ? "Enviar fotos y pedir precio" : "Send photos and get quote",
    finalCta: isEs ? "Pedir presupuesto ahora" : "Get quote now",
    viewService: isEs ? "Ver servicio" : "View service",
  };

  const faqs = isEs
    ? [
        {
          q: "¿Cuánto cuesta cambiar un extractor en Valencia?",
          a: "El cambio de extractor empieza desde 45€. El precio final depende del tipo de extractor, tamaño, acceso, compatibilidad, fijación y dificultad.",
        },
        {
          q: "¿Cambian extractores de baño?",
          a: "Sí. Podemos sustituir extractores de baño compatibles con el punto existente, revisando tamaño, conexión y fijación antes de instalar.",
        },
        {
          q: "¿Cambian extractores de cocina?",
          a: "Sí. Podemos cambiar extractores simples de cocina cuando el nuevo modelo es compatible con la instalación existente.",
        },
        {
          q: "¿Tengo que comprar el extractor?",
          a: "Puedes comprarlo tú o podemos ayudarte a revisar si el modelo es compatible antes de la visita.",
        },
        {
          q: "¿Pueden instalar un extractor donde no había ninguno?",
          a: "Esta página es para sustitución de extractores existentes. Para instalación nueva, conductos o cableado nuevo, hay que revisar el caso antes.",
        },
        {
          q: "¿Qué fotos necesito enviar?",
          a: "Lo ideal es enviar fotos del extractor antiguo, del nuevo modelo, de la zona, del tamaño aproximado y del punto de conexión.",
        },
        {
          q: "¿Pueden cambiar varios extractores en una visita?",
          a: "Sí. Podemos cambiar varios extractores compatibles en una misma visita con presupuesto combinado.",
        },
        {
          q: "¿Trabajan fuera de Valencia ciudad?",
          a: "Sí. Trabajamos en Valencia y alrededores como Mislata, Burjassot, Paterna, Torrent, Sagunto, Cullera, Gandía y otras zonas cercanas.",
        },
      ]
    : [
        {
          q: "How much does extractor fan replacement cost in Valencia?",
          a: "Extractor fan replacement starts from €45. The final price depends on fan type, size, access, compatibility, fixing and difficulty.",
        },
        {
          q: "Do you replace bathroom extractor fans?",
          a: "Yes. We can replace bathroom extractor fans compatible with the existing point, checking size, connection and fixing before installation.",
        },
        {
          q: "Do you replace kitchen extractor fans?",
          a: "Yes. We can replace simple kitchen extractor fans when the new model is compatible with the existing installation.",
        },
        {
          q: "Do I need to buy the extractor fan?",
          a: "You can buy it yourself, or we can help check whether the model is compatible before the visit.",
        },
        {
          q: "Can you install an extractor fan where there was none before?",
          a: "This page is for replacing existing extractor fans. For a new installation, ducting or new wiring, the case needs to be checked first.",
        },
        {
          q: "What photos should I send?",
          a: "Ideally, send photos of the old extractor fan, the new model, the area, approximate size and the connection point.",
        },
        {
          q: "Can you replace several extractor fans in one visit?",
          a: "Yes. We can replace several compatible extractor fans in one visit with a combined quote.",
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
          title: "Cambio de interruptor",
          href: `/${locale}/cambio-interruptor-valencia`,
        },
        {
          title: "Instalación de lámpara",
          href: `/${locale}/instalacion-lampara-valencia`,
        },
        {
          title: "Instalación de tira LED",
          href: `/${locale}/instalacion-tira-led-valencia`,
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
          title: "Switch replacement",
          href: `/${locale}/cambio-interruptor-valencia`,
        },
        {
          title: "Lamp installation",
          href: `/${locale}/instalacion-lampara-valencia`,
        },
        {
          title: "LED strip installation",
          href: `/${locale}/instalacion-tira-led-valencia`,
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
      ? "Cambio de Extractor en Valencia"
      : "Extractor Fan Replacement in Valencia",
    serviceType: "Extractor fan replacement",
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
      price: "45",
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
      ? "Cambio de extractores, montaje eléctrico básico, cambio de enchufes, interruptores, lámparas, tiras LED y servicios handyman en Valencia."
      : "Extractor fan replacement, basic electrical installation, socket replacement, switch replacement, lamp installation, LED strips and handyman services in Valencia.",
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
          ? "Cambio de Extractor en Valencia"
          : "Extractor Fan Replacement in Valencia",
        item: `${siteUrl}/${locale}/cambio-extractor-valencia`,
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
              <Fan className="mb-6 h-12 w-12 text-black" />
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
                    ["Baño", "Extractores compatibles de baño"],
                    ["Cocina", "Cambio de extractor simple"],
                    ["Revisión", "Conexión y fijación básica"],
                    ["Respuesta rápida", "Respuesta rápida por WhatsApp"],
                  ]
                : [
                    ["Bathroom", "Compatible bathroom extractor fans"],
                    ["Kitchen", "Simple extractor fan replacement"],
                    ["Check", "Basic connection and fixing check"],
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
                {item.title === "Baño" || item.title === "Bathroom" ? (
                  <Bath className="h-8 w-8 text-black" />
                ) : item.title === "Cocina" || item.title === "Kitchen" ? (
                  <CookingPot className="h-8 w-8 text-black" />
                ) : (
                  <Fan className="h-8 w-8 text-black" />
                )}
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
            {isEs ? "Desde 45€" : "From €45"}
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