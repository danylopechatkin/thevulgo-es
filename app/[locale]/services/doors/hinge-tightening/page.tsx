import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  DoorOpen,
  ShieldCheck,
  Home,
  HelpCircle,
  MapPin,
  Star,
  Ruler,
  Wrench,
} from "lucide-react";

type PageProps = {
  params: Promise<{ locale: string }>;
};

const siteUrl = "https://www.thevulgo.es";
const phoneNumber = "34610076942";
const pagePath = "/services/doors/hinge-tightening";

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";

  return {
    title: isEs
      ? "Apriete de Bisagras de Puerta | Desde 25€ | THEVULGO"
      : "Hinge Tightening | From €25 | THEVULGO",
    description: isEs
      ? "Apriete de bisagras de puerta desde 25€. Corrección de bisagras sueltas que afectan la apertura, cierre o alineación de puertas interiores."
      : "Door hinge tightening from €25. Tightening loose hinges and making small corrections to improve door opening, closing and alignment.",
    alternates: {
      canonical: `${siteUrl}/${locale}${pagePath}`,
      languages: {
        es: `${siteUrl}/es${pagePath}`,
        en: `${siteUrl}/en${pagePath}`,
      },
    },
    openGraph: {
      title: isEs
        ? "Apriete de Bisagras de Puerta | THEVULGO"
        : "Hinge Tightening | THEVULGO",
      description: isEs
        ? "Apriete y corrección básica de bisagras sueltas en puertas interiores."
        : "Tightening and small correction of loose hinges on interior doors.",
      url: `${siteUrl}/${locale}${pagePath}`,
      siteName: "THEVULGO",
      locale: isEs ? "es_ES" : "en_US",
      type: "website",
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

const faqs = [
  {
    q: "¿Cuánto cuesta apretar bisagras de puerta?",
    a: "El apriete de bisagras empieza desde 25€. El precio depende del número de bisagras, tipo de puerta, estado de tornillos, desalineación y dificultad del ajuste.",
  },
  {
    q: "¿Las bisagras sueltas pueden hacer que la puerta roce?",
    a: "Sí. Las bisagras flojas pueden hacer que la puerta baje, roce con el marco o suelo y cierre peor.",
  },
  {
    q: "¿Pueden apretar bisagras sin cambiarlas?",
    a: "Muchas veces sí. Si las bisagras están en buen estado, puede bastar con apretar tornillos y hacer pequeñas correcciones.",
  },
  {
    q: "¿Por qué mi puerta roza con el marco?",
    a: "Puede ser por bisagras flojas, tornillos gastados, puerta desalineada, marco movido o desgaste con el tiempo.",
  },
  {
    q: "¿Ajustan bisagras de puertas interiores?",
    a: "Sí. Trabajamos principalmente con puertas interiores de habitaciones, baños, cocinas, apartamentos y viviendas.",
  },
  {
    q: "¿Cuándo hace falta cambiar las bisagras?",
    a: "Si la bisagra está rota, doblada, muy desgastada o los tornillos ya no agarran bien, puede ser necesario sustituirla por una pieza compatible.",
  },
  {
    q: "¿Pueden ajustar varias puertas en una visita?",
    a: "Sí. Podemos revisar varias puertas, bisagras, manillas, pestillos y cerraderos en una sola visita.",
  },
  {
    q: "¿Qué necesito enviar para pedir presupuesto?",
    a: "Envíanos fotos de la puerta, bisagras, tornillos, marco y un vídeo corto abriendo y cerrando la puerta.",
  },
];

export default async function HingeTighteningPage({ params }: PageProps) {
  const { locale } = await params;
  const isEs = locale === "es";

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, quiero un presupuesto para apriete de bisagras de puerta."
      : "Hi, I would like a quote for door hinge tightening."
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappText}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: isEs ? "Apriete de Bisagras de Puerta" : "Hinge Tightening",
    serviceType: "Door hinge tightening",
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
      price: "25",
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
    description:
      "Apriete de bisagras, ajuste de puertas, manillas, pestillos, cerraderos, herrajes de puertas interiores y servicios handyman en Valencia.",
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
        name: "Home",
        item: `${siteUrl}/${locale}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: `${siteUrl}/${locale}/services`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Doors",
        item: `${siteUrl}/${locale}/services/doors`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: isEs ? "Apriete de Bisagras de Puerta" : "Hinge Tightening",
        item: `${siteUrl}/${locale}${pagePath}`,
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
              Bisagras sueltas, puertas que rozan y cierre desalineado
            </div>

            <h1 className="text-4xl font-black tracking-tight md:text-6xl">
              Apriete de bisagras de puerta
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-700">
              Apriete y pequeñas correcciones de bisagras que se han aflojado
              con el tiempo y empiezan a afectar cómo la puerta abre, cierra o
              se alinea con el marco.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappUrl}
                className="inline-flex items-center justify-center rounded-xl bg-yellow-400 px-6 py-4 font-black text-black shadow-md transition hover:scale-105 hover:bg-yellow-300"
              >
                Pedir presupuesto por WhatsApp
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>

              <a
                href={`tel:+${phoneNumber}`}
                className="inline-flex items-center justify-center rounded-xl border border-neutral-300 bg-white px-6 py-4 font-black text-neutral-950 shadow-sm transition hover:scale-105 hover:border-yellow-400"
              >
                Llamar ahora
              </a>
            </div>

            <div className="mt-8 grid gap-3 text-sm font-semibold text-neutral-700 sm:grid-cols-2">
              {[
                "Desde 25€",
                "Bisagras sueltas",
                "Puertas que rozan",
                "Mejor apertura y cierre",
                "Corrección pequeña",
                "Valencia y alrededores",
              ].map((item) => (
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
                Hinge tightening. Less sagging. Smoother door movement.
              </h2>
              <p className="mt-4 font-medium leading-7 text-neutral-900">
                Revisamos bisagras, tornillos y alineación para mejorar el
                movimiento de la puerta con una corrección práctica.
              </p>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                ["Loose hinges", "Bisagras más firmes"],
                ["Better alignment", "Mejor línea con el marco"],
                ["Smoother movement", "Apertura y cierre más cómodos"],
                ["Fast estimate", "Presupuesto rápido por WhatsApp"],
              ].map(([title, text]) => (
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
          {[
            {
              icon: ShieldCheck,
              title: "Corrección práctica",
              text: "Revisamos si la puerta puede mejorar con apriete de bisagras.",
            },
            {
              icon: Wrench,
              title: "Tornillos y bisagras",
              text: "Comprobamos tornillos, placas, holgura y puntos de movimiento.",
            },
            {
              icon: Ruler,
              title: "Mejor alineación",
              text: "Buscamos que la puerta abra y cierre con menos roce.",
            },
            {
              icon: Star,
              title: "Precio claro",
              text: "Desde 25€. Presupuesto según fotos, vídeo y dificultad.",
            },
          ].map((item) => (
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
          Apriete de bisagras para puertas interiores
        </h2>

        <div className="mt-6 space-y-5 text-lg leading-8 text-neutral-700">
          <p>
            En THEVULGO realizamos apriete de bisagras de puertas interiores
            cuando la puerta empieza a rozar, bajar, moverse mal o cerrar peor
            por el uso diario y el desgaste de los tornillos.
          </p>

          <p>
            Antes de ajustar revisamos las bisagras, tornillos, marco, hoja de
            puerta, punto de roce y movimiento real. Esto ayuda a saber si basta
            con apretar y corregir o si hace falta una sustitución de bisagra.
          </p>

          <p>
            También podemos combinar este trabajo con ajuste de puerta
            desalineada, ajuste de pestillo, ajuste de cerradero, reparación de
            manilla suelta o cambio de manilla.
          </p>
        </div>
      </section>

      <section className="bg-yellow-50 py-16">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <h2 className="text-3xl font-black md:text-4xl">
            ¿Qué incluye el apriete de bisagras?
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              "Revisión de bisagras",
              "Comprobación de tornillos",
              "Revisión de marco y puerta",
              "Detección del punto de roce",
              "Apriete básico si es posible",
              "Pequeña corrección de movimiento",
              "Comprobación de apertura",
              "Prueba final de cierre",
              "Presupuesto claro antes del trabajo",
            ].map((item) => (
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
          Problemas de bisagras que podemos revisar
        </h2>

        <div className="grid gap-8 md:grid-cols-4">
          {[
            {
              title: "Bisagras sueltas",
              text: "Apriete de bisagras que han perdido firmeza con el tiempo.",
            },
            {
              title: "Puerta que baja",
              text: "Revisión de puertas que empiezan a caer o quedar desalineadas.",
            },
            {
              title: "Puerta que roza",
              text: "Corrección pequeña cuando la puerta roza por holgura en bisagras.",
            },
            {
              title: "Tornillos flojos",
              text: "Apriete de tornillos visibles y revisión de sujeción básica.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-yellow-300 bg-white p-7 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400">
                <Wrench className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-2xl font-black">{item.title}</h3>
              <p className="mt-4 leading-7 text-neutral-700">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-16 md:px-8">
        <h2 className="text-3xl font-black">
          ¿Dónde apretamos bisagras?
        </h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {[
            "Puertas interiores",
            "Puertas de habitación",
            "Puertas de baño",
            "Puertas de cocina",
            "Pisos de alquiler",
            "Viviendas y apartamentos",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-yellow-200 bg-white p-5 shadow-sm"
            >
              <Home className="h-7 w-7 text-yellow-500" />
              <p className="mt-3 font-bold">{item}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-lg leading-8 text-neutral-700">
          Si los tornillos ya no agarran, la madera está dañada o la bisagra está
          doblada, puede hacer falta reparación adicional o sustitución de la
          bisagra. Envíanos fotos y vídeo para revisar el caso.
        </p>
      </section>

      <section className="bg-yellow-400 py-16 text-black">
        <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
          <p className="text-sm font-black uppercase tracking-widest">
            Desde 25€
          </p>
          <h2 className="mt-3 text-4xl font-black">
            Precio para apretar bisagras de puerta
          </h2>
          <p className="mt-6 text-lg font-medium leading-8 text-neutral-900">
            El precio depende del número de bisagras, tornillos, estado de la
            puerta, marco, nivel de desalineación y si hacen falta piezas nuevas.
            Envíanos fotos y vídeo para darte un presupuesto claro.
          </p>

          <div className="mt-8 rounded-3xl border border-yellow-600/30 bg-white p-6 text-left shadow-xl">
            <h3 className="text-xl font-black">El precio depende de:</h3>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Número de bisagras",
                "Estado de tornillos",
                "Tipo de puerta",
                "Estado del marco",
                "Nivel de roce",
                "Piezas necesarias",
                "Número de puertas",
                "Distancia fuera de Valencia",
              ].map((item) => (
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
            Enviar fotos y pedir precio
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <h2 className="text-3xl font-black md:text-4xl">
          Zonas donde trabajamos
        </h2>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-neutral-700">
          Realizamos apriete de bisagras de puertas en Valencia ciudad y
          alrededores. Si estás fuera de Valencia, envíanos tu dirección y te
          confirmamos disponibilidad.
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
            Preguntas frecuentes
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
          Servicios relacionados
        </h2>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {[
            {
              title: "Servicios de puertas",
              href: `/${locale}/services/doors`,
            },
            {
              title: "Ajuste de pestillo",
              href: `/${locale}/services/doors/latch-adjustment`,
            },
            {
              title: "Ajuste de cerradero",
              href: `/${locale}/services/doors/strike-plate-adjustment`,
            },
            {
              title: "Ajuste de puerta desalineada",
              href: `/${locale}/services/doors/door-alignment-adjustment`,
            },
            {
              title: "Cambio de manilla",
              href: `/${locale}/services/doors/handle-replacement`,
            },
            {
              title: "Reparar manilla suelta",
              href: `/${locale}/services/doors/loose-handle-fixing`,
            },
          ].map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group rounded-2xl border border-yellow-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-yellow-400 hover:shadow-md"
            >
              <p className="text-xl font-black">{item.title}</p>
              <p className="mt-3 inline-flex items-center font-bold text-neutral-700 group-hover:text-black">
                Ver servicio
                <ArrowRight className="ml-2 h-4 w-4" />
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-yellow-400 py-16">
        <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
          <h2 className="text-4xl font-black tracking-tight">
            ¿Quieres apretar bisagras de una puerta?
          </h2>
          <p className="mt-5 text-lg font-medium text-neutral-900">
            Envíanos fotos de la puerta, bisagras, tornillos, marco y un vídeo
            corto abriendo y cerrando. Te damos un presupuesto claro antes de
            empezar.
          </p>

          <a
            href={whatsappUrl}
            className="mt-8 inline-flex items-center justify-center rounded-xl bg-black px-8 py-4 font-black text-white shadow-xl transition hover:scale-105"
          >
            Pedir presupuesto ahora
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>
    </main>
  );
}