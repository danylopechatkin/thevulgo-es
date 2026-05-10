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
  Bath,
  Plug,
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
    ? "Cambio de Luz de Baño en Valencia | Desde 35€ | THEVULGO"
    : "Bathroom Light Replacement in Valencia | From €35 | THEVULGO";

  const description = isEs
    ? "Cambio de luz de baño en Valencia desde 35€. Sustitución simple de luces de espejo, apliques y accesorios de baño compatibles."
    : "Bathroom light replacement in Valencia from €35. Simple replacement of mirror lights, wall lights and compatible bathroom lighting accessories.";

  return {
    title,
    description,
    alternates: {
      canonical: `${siteUrl}/${locale}/cambio-luz-bano-valencia`,
      languages: {
        es: `${siteUrl}/es/cambio-luz-bano-valencia`,
        en: `${siteUrl}/en/cambio-luz-bano-valencia`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${siteUrl}/${locale}/cambio-luz-bano-valencia`,
      siteName: "THEVULGO",
      locale: isEs ? "es_ES" : "en_US",
      type: "website",
    },
  };
}

export default async function BathroomLightReplacementValenciaPage({
  params,
}: PageProps) {
  const { locale } = await params;
  const isEs = locale === "es";

  const t = {
    badge: isEs
      ? "Luz de baño · Espejo · Aplique · Sustitución simple"
      : "Bathroom light · Mirror light · Wall light · Simple replacement",

    h1: isEs
      ? "Cambio de luz de baño en Valencia"
      : "Bathroom light replacement in Valencia",

    hero: isEs
      ? "Sustitución simple de luces de espejo y accesorios de baño desde 35€. Cambio limpio, revisión básica del punto existente y acabado ordenado para casas, apartamentos y pisos de alquiler."
      : "Simple replacement of mirror lights and bathroom lighting accessories from €35. Clean swap, basic existing-point check and tidy finish for homes, apartments and rental properties.",

    whatsapp: isEs
      ? "Hola, quiero un presupuesto para cambio de luz de baño en Valencia."
      : "Hi, I would like a quote for bathroom light replacement in Valencia.",

    cta: isEs ? "Pedir presupuesto por WhatsApp" : "Get quote on WhatsApp",
    call: isEs ? "Llamar ahora" : "Call now",

    heroCardTitle: isEs
      ? "Cambio de luz de baño limpio y ordenado."
      : "Clean and organized bathroom light replacement.",

    heroCardText: isEs
      ? "Retiramos la luz antigua compatible, revisamos el punto existente, colocamos la nueva y comprobamos el funcionamiento."
      : "We remove the compatible old light, check the existing point, install the new one and test that it works.",

    bullets: isEs
      ? [
          "Desde 35€",
          "Luces de espejo",
          "Apliques de baño",
          "Sustitución compatible",
          "Acabado limpio",
          "Valencia y alrededores",
        ]
      : [
          "From €35",
          "Mirror lights",
          "Bathroom wall lights",
          "Compatible replacement",
          "Clean finish",
          "Valencia and nearby",
        ],

    benefits: isEs
      ? [
          {
            title: "Luz de espejo",
            text: "Sustitución simple de luces sobre espejo o mueble de baño.",
            icon: Lightbulb,
          },
          {
            title: "Baño y aseo",
            text: "Cambio de iluminación compatible en baños, aseos y apartamentos.",
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
            title: "Mirror light",
            text: "Simple replacement of lights above mirrors or bathroom furniture.",
            icon: Lightbulb,
          },
          {
            title: "Bathroom and toilet",
            text: "Compatible lighting replacement in bathrooms, toilets and apartments.",
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
      ? "Sustitución de luces de baño y espejo en Valencia"
      : "Bathroom and mirror light replacement in Valencia",

    seoParagraphs: isEs
      ? [
          "En THEVULGO realizamos cambio de luces de baño en Valencia para casas, apartamentos, aseos, pisos de alquiler y propiedades turísticas. Este servicio está pensado para sustituir una luz existente por otra compatible, como luces de espejo, apliques de baño o accesorios de iluminación simples.",
          "Antes de empezar revisamos la luz antigua, el punto eléctrico existente, el tipo de fijación, la ubicación, el estado visible del cableado y el nuevo accesorio. El objetivo es confirmar que el cambio es viable y dejar un acabado limpio y funcional.",
          "Si la luz de baño no funciona, está vieja, deteriorada, amarillenta o quieres renovar el aspecto del baño, podemos ayudarte con una sustitución simple. Para instalaciones nuevas, cableado nuevo o modificaciones eléctricas importantes, hay que revisar el caso antes.",
        ]
      : [
          "THEVULGO provides bathroom light replacement in Valencia for homes, apartments, toilets, rental flats and tourist properties. This service is designed to replace an existing light with a compatible unit, such as mirror lights, bathroom wall lights or simple lighting accessories.",
          "Before starting, we check the old light, existing electrical point, fixing type, location, visible wiring condition and the new accessory. The goal is to confirm that the replacement is viable and leave a clean, functional finish.",
          "If the bathroom light does not work, is old, worn, yellowed or you want to refresh the bathroom look, we can help with a simple replacement. For new installations, new wiring or major electrical changes, the case needs to be checked first.",
        ],

    includesTitle: isEs
      ? "¿Qué incluye el cambio de luz de baño?"
      : "What is included in bathroom light replacement?",

    includes: isEs
      ? [
          "Revisión de la luz antigua",
          "Revisión de la nueva luz",
          "Retirada del accesorio existente",
          "Comprobación del punto actual",
          "Instalación de luz compatible",
          "Fijación y ajuste",
          "Comprobación de funcionamiento",
          "Acabado limpio y ordenado",
          "Presupuesto claro antes del trabajo",
        ]
      : [
          "Old light check",
          "New light check",
          "Removal of existing accessory",
          "Existing point check",
          "Compatible light installation",
          "Fixing and adjustment",
          "Functionality test",
          "Clean and tidy finish",
          "Clear quote before the job",
        ],

    placesTitle: isEs
      ? "Dónde cambiamos luces de baño"
      : "Where we replace bathroom lights",

    places: isEs
      ? [
          {
            title: "Luz de espejo",
            text: "Sustitución de luces sobre espejo o mueble de baño.",
          },
          {
            title: "Aplique de baño",
            text: "Cambio de apliques de baño compatibles con el punto existente.",
          },
          {
            title: "Baño o aseo",
            text: "Luces simples para baños, aseos y zonas interiores.",
          },
          {
            title: "Piso de alquiler",
            text: "Cambio rápido para apartamentos, alquileres y viviendas turísticas.",
          },
        ]
      : [
          {
            title: "Mirror light",
            text: "Replacement of lights above mirrors or bathroom furniture.",
          },
          {
            title: "Bathroom wall light",
            text: "Replacement of compatible bathroom wall lights using the existing point.",
          },
          {
            title: "Bathroom or toilet",
            text: "Simple lights for bathrooms, toilets and interior areas.",
          },
          {
            title: "Rental apartment",
            text: "Quick replacement for apartments, rentals and tourist properties.",
          },
        ],

    priceTitle: isEs
      ? "Presupuesto para cambio de luz de baño en Valencia"
      : "Quote for bathroom light replacement in Valencia",

    priceText: isEs
      ? "El precio depende del tipo de luz, tamaño, acceso, fijación, compatibilidad, punto eléctrico existente y dificultad. Envíanos fotos de la luz antigua y del nuevo modelo para confirmar precio."
      : "The price depends on light type, size, access, fixing, compatibility, existing electrical point and difficulty. Send photos of the old light and the new model to confirm the price.",

    priceFactorsTitle: isEs ? "El precio depende de:" : "The price depends on:",

    priceFactors: isEs
      ? [
          "Tipo de luz",
          "Luz de espejo o aplique",
          "Tamaño del modelo",
          "Compatibilidad",
          "Estado del punto existente",
          "Acceso y altura",
          "Material adicional",
          "Distancia fuera de Valencia",
        ]
      : [
          "Light type",
          "Mirror light or wall light",
          "Model size",
          "Compatibility",
          "Existing point condition",
          "Access and height",
          "Additional material",
          "Distance outside Valencia",
        ],

    areasTitle: isEs ? "Zonas donde trabajamos" : "Areas we serve",

    areasText: isEs
      ? "Realizamos cambio de luces de baño en Valencia ciudad y alrededores. Si estás fuera de Valencia, envíanos tu dirección y te confirmamos disponibilidad."
      : "We replace bathroom lights in Valencia city and nearby areas. If you are outside Valencia, send your address and we will confirm availability.",

    faqTitle: isEs ? "Preguntas frecuentes" : "Frequently asked questions",

    relatedTitle: isEs ? "Servicios relacionados" : "Related services",

    finalTitle: isEs
      ? "¿Quieres cambiar una luz de baño en Valencia?"
      : "Want to replace a bathroom light in Valencia?",

    finalText: isEs
      ? "Envíanos fotos de la luz antigua, del nuevo modelo y de la zona. Te damos un presupuesto claro antes de empezar."
      : "Send photos of the old light, the new model and the area. We will give you a clear quote before starting.",

    sendPhotos: isEs ? "Enviar fotos y pedir precio" : "Send photos and get quote",
    finalCta: isEs ? "Pedir presupuesto ahora" : "Get quote now",
    viewService: isEs ? "Ver servicio" : "View service",
  };

  const faqs = isEs
    ? [
        {
          q: "¿Cuánto cuesta cambiar una luz de baño en Valencia?",
          a: "El cambio de luz de baño empieza desde 35€. El precio final depende del tipo de luz, tamaño, acceso, compatibilidad, fijación y dificultad.",
        },
        {
          q: "¿Cambian luces de espejo de baño?",
          a: "Sí. Podemos sustituir luces de espejo compatibles con el punto existente, revisando tamaño, conexión y fijación antes de instalar.",
        },
        {
          q: "¿Cambian apliques de baño?",
          a: "Sí. Podemos cambiar apliques de baño simples cuando el nuevo modelo es compatible con la instalación existente.",
        },
        {
          q: "¿Tengo que comprar la luz de baño?",
          a: "Puedes comprarla tú o podemos ayudarte a revisar si el modelo es compatible antes de la visita.",
        },
        {
          q: "¿Pueden instalar una luz donde no había ninguna?",
          a: "Esta página es para sustitución de luces existentes. Para instalación nueva o cableado nuevo, hay que revisar el caso antes.",
        },
        {
          q: "¿Qué fotos necesito enviar?",
          a: "Lo ideal es enviar fotos de la luz antigua, del nuevo modelo, de la zona, del tamaño aproximado y del punto de conexión.",
        },
        {
          q: "¿Pueden cambiar varias luces en una visita?",
          a: "Sí. Podemos cambiar varias luces compatibles en una misma visita con presupuesto combinado.",
        },
        {
          q: "¿Trabajan fuera de Valencia ciudad?",
          a: "Sí. Trabajamos en Valencia y alrededores como Mislata, Burjassot, Paterna, Torrent, Sagunto, Cullera, Gandía y otras zonas cercanas.",
        },
      ]
    : [
        {
          q: "How much does bathroom light replacement cost in Valencia?",
          a: "Bathroom light replacement starts from €35. The final price depends on light type, size, access, compatibility, fixing and difficulty.",
        },
        {
          q: "Do you replace bathroom mirror lights?",
          a: "Yes. We can replace mirror lights compatible with the existing point, checking size, connection and fixing before installation.",
        },
        {
          q: "Do you replace bathroom wall lights?",
          a: "Yes. We can replace simple bathroom wall lights when the new model is compatible with the existing installation.",
        },
        {
          q: "Do I need to buy the bathroom light?",
          a: "You can buy it yourself, or we can help check whether the model is compatible before the visit.",
        },
        {
          q: "Can you install a light where there was none before?",
          a: "This page is for replacing existing lights. For a new installation or new wiring, the case needs to be checked first.",
        },
        {
          q: "What photos should I send?",
          a: "Ideally, send photos of the old light, the new model, the area, approximate size and the connection point.",
        },
        {
          q: "Can you replace several lights in one visit?",
          a: "Yes. We can replace several compatible lights in one visit with a combined quote.",
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
          title: "Instalación de lámpara",
          href: `/${locale}/instalacion-lampara-valencia`,
        },
        {
          title: "Apliques de pared",
          href: `/${locale}/instalacion-apliques-pared-valencia`,
        },
        {
          title: "Cambio de extractor",
          href: `/${locale}/cambio-extractor-valencia`,
        },
        {
          title: "Cambio de enchufe",
          href: `/${locale}/cambio-enchufe-valencia`,
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
          title: "Lamp installation",
          href: `/${locale}/instalacion-lampara-valencia`,
        },
        {
          title: "Wall light installation",
          href: `/${locale}/instalacion-apliques-pared-valencia`,
        },
        {
          title: "Extractor fan replacement",
          href: `/${locale}/cambio-extractor-valencia`,
        },
        {
          title: "Socket replacement",
          href: `/${locale}/cambio-enchufe-valencia`,
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
      ? "Cambio de Luz de Baño en Valencia"
      : "Bathroom Light Replacement in Valencia",
    serviceType: "Bathroom light replacement",
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
      ? "Cambio de luces de baño, montaje eléctrico básico, lámparas, apliques, extractores, enchufes, interruptores y servicios handyman en Valencia."
      : "Bathroom light replacement, basic electrical installation, lamps, wall lights, extractor fans, sockets, switches and handyman services in Valencia.",
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
          ? "Cambio de Luz de Baño en Valencia"
          : "Bathroom Light Replacement in Valencia",
        item: `${siteUrl}/${locale}/cambio-luz-bano-valencia`,
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
              <Bath className="mb-6 h-12 w-12 text-black" />
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
                    ["Espejo", "Luces sobre espejo o mueble"],
                    ["Aplique", "Apliques simples de baño"],
                    ["Revisión", "Conexión y fijación básica"],
                    ["Respuesta rápida", "Respuesta rápida por WhatsApp"],
                  ]
                : [
                    ["Mirror", "Lights above mirror or furniture"],
                    ["Wall light", "Simple bathroom wall lights"],
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
                {item.title === "Luz de espejo" || item.title === "Mirror light" ? (
                  <Lightbulb className="h-8 w-8 text-black" />
                ) : item.title === "Aplique de baño" ||
                  item.title === "Bathroom wall light" ? (
                  <Plug className="h-8 w-8 text-black" />
                ) : item.title === "Baño o aseo" ||
                  item.title === "Bathroom or toilet" ? (
                  <Bath className="h-8 w-8 text-black" />
                ) : (
                  <Wrench className="h-8 w-8 text-black" />
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