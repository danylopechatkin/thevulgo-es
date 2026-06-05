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
const pagePath = "/services/doors/latch-adjustment";

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";

  return {
    title: isEs
      ? "Ajuste de Pestillo de Puerta | Desde 29€ | THEVULGO"
      : "Latch Adjustment | From €29 | THEVULGO",
    description: isEs
      ? "Ajuste de pestillos de puerta desde 29€. Correcciones pequeñas cuando la puerta no engancha bien, no cierra correctamente o necesita mejor alineación."
      : "Door latch adjustment from €29. Small latch corrections when the door does not catch properly, sticks, misaligns or needs smoother closing.",
    alternates: {
      canonical: `${siteUrl}/${locale}${pagePath}`,
      languages: {
        es: `${siteUrl}/es${pagePath}`,
        en: `${siteUrl}/en${pagePath}`,
      },
    },
    openGraph: {
      title: isEs
        ? "Ajuste de Pestillo de Puerta | THEVULGO"
        : "Latch Adjustment | THEVULGO",
      description: isEs
        ? "Corrección de pestillos, cierre y alineación para puertas interiores."
        : "Latch, catch and closing alignment correction for interior doors.",
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
    q: "¿Cuánto cuesta ajustar un pestillo de puerta?",
    a: "El ajuste de pestillo empieza desde 29€. El precio depende del tipo de puerta, pestillo, cerradero, manilla, alineación, estado del marco y dificultad del ajuste.",
  },
  {
    q: "¿Pueden arreglar una puerta que no engancha bien?",
    a: "Sí. Podemos revisar el pestillo, cerradero, manilla, marco y alineación para mejorar el cierre cuando la puerta no engancha correctamente.",
  },
  {
    q: "¿Por qué mi puerta no cierra con el pestillo?",
    a: "Puede ser por desalineación, bisagras flojas, marco movido, cerradero mal colocado, pestillo desgastado o manilla con holgura.",
  },
  {
    q: "¿Se puede ajustar el pestillo sin cambiarlo?",
    a: "Muchas veces sí. Si el pestillo está en buen estado, puede bastar con ajustar la alineación o el cerradero. Si está dañado, puede hacer falta una pieza nueva.",
  },
  {
    q: "¿También ajustan el cerradero?",
    a: "Sí. Podemos revisar y ajustar el cerradero o strike plate cuando el problema está en el punto donde entra el pestillo.",
  },
  {
    q: "¿Ajustan pestillos de puertas interiores?",
    a: "Sí. Trabajamos principalmente con puertas interiores de habitaciones, baños, cocinas, apartamentos y viviendas.",
  },
  {
    q: "¿Necesito comprar un pestillo nuevo?",
    a: "No siempre. Primero revisamos si se puede ajustar. Si el pestillo o el mecanismo están dañados, puede ser necesario comprar una pieza compatible.",
  },
  {
    q: "¿Qué necesito enviar para pedir presupuesto?",
    a: "Envíanos fotos de la puerta, manilla, pestillo, cerradero, marco y un vídeo corto cerrando la puerta para ver el problema.",
  },
];

export default async function LatchAdjustmentPage({ params }: PageProps) {
  const { locale } = await params;
  const isEs = locale === "es";

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, quiero un presupuesto para ajuste de pestillo de puerta."
      : "Hi, I would like a quote for door latch adjustment."
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappText}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: isEs ? "Ajuste de Pestillo de Puerta" : "Latch Adjustment",
    serviceType: "Door latch adjustment",
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
    description:
      "Ajuste de pestillos, cerraderos, manillas, puertas interiores, bisagras, herrajes y servicios handyman en Valencia.",
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
        name: isEs ? "Ajuste de Pestillo de Puerta" : "Latch Adjustment",
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
              Pestillos, cerraderos y puertas que no enganchan bien
            </div>

            <h1 className="text-4xl font-black tracking-tight md:text-6xl">
              Ajuste de pestillo de puerta
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-700">
              Correcciones pequeñas cuando la puerta no engancha correctamente,
              no cierra suave, queda desalineada o necesita mejor ajuste entre
              pestillo, cerradero y marco.
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
                "Desde 29€",
                "Puerta que no engancha",
                "Ajuste de pestillo",
                "Cerradero y alineación",
                "Mejor cierre diario",
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
                Latch adjustment. Better catch. Smoother closing.
              </h2>
              <p className="mt-4 font-medium leading-7 text-neutral-900">
                Revisamos pestillo, cerradero, manilla y marco para mejorar el
                cierre de la puerta con una corrección práctica.
              </p>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                ["Better catch", "El pestillo engancha mejor"],
                ["Smoother closing", "Cierre más cómodo"],
                ["Strike plate check", "Revisión del cerradero"],
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
              text: "Revisamos si el cierre puede mejorar con un ajuste sencillo.",
            },
            {
              icon: Wrench,
              title: "Pestillo y cerradero",
              text: "Comprobamos el punto donde el pestillo entra en el marco.",
            },
            {
              icon: Ruler,
              title: "Mejor alineación",
              text: "Buscamos que la puerta cierre con menos esfuerzo y más precisión.",
            },
            {
              icon: Star,
              title: "Precio claro",
              text: "Desde 29€. Presupuesto según fotos, vídeo y dificultad.",
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
          Ajuste de pestillos para puertas que no cierran bien
        </h2>

        <div className="mt-6 space-y-5 text-lg leading-8 text-neutral-700">
          <p>
            En THEVULGO realizamos ajuste de pestillos de puertas interiores
            cuando la puerta no engancha bien, necesita empujarse demasiado,
            queda ligeramente desalineada o el cierre no se siente cómodo en el
            uso diario.
          </p>

          <p>
            Antes de ajustar revisamos el pestillo, cerradero, manilla, bisagras,
            marco, tornillos visibles y el movimiento real de la puerta. Esto
            ayuda a saber si basta con un ajuste sencillo o si hace falta una
            reparación adicional.
          </p>

          <p>
            También podemos combinar este trabajo con ajuste de cerradero,
            reparación de manilla suelta, cambio de manilla, alineación de
            puerta, apriete de bisagras o pequeños trabajos de herrajes.
          </p>
        </div>
      </section>

      <section className="bg-yellow-50 py-16">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <h2 className="text-3xl font-black md:text-4xl">
            ¿Qué incluye el ajuste de pestillo?
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              "Revisión del pestillo",
              "Comprobación del cerradero",
              "Revisión de manilla y cierre",
              "Detección del punto de fallo",
              "Ajuste básico si es posible",
              "Revisión de tornillos visibles",
              "Comprobación del marco",
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
          Problemas de pestillo que podemos revisar
        </h2>

        <div className="grid gap-8 md:grid-cols-4">
          {[
            {
              title: "Puerta que no engancha",
              text: "Corrección cuando el pestillo no entra bien en el cerradero.",
            },
            {
              title: "Cierre desalineado",
              text: "Revisión de alineación entre pestillo, marco y placa de cierre.",
            },
            {
              title: "Puerta que hay que empujar",
              text: "Ajuste cuando la puerta necesita fuerza extra para cerrar.",
            },
            {
              title: "Pestillo que roza",
              text: "Revisión de pequeños roces o fricción en el punto de cierre.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-yellow-300 bg-white p-7 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400">
                <DoorOpen className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-2xl font-black">{item.title}</h3>
              <p className="mt-4 leading-7 text-neutral-700">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-16 md:px-8">
        <h2 className="text-3xl font-black">
          ¿Dónde hacemos ajustes de pestillo?
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
          Si el pestillo está roto, la manilla no funciona o el marco está muy
          deformado, puede que el trabajo no sea solo un ajuste básico. Envíanos
          fotos y un vídeo para revisar el caso antes de confirmar la visita.
        </p>
      </section>

      <section className="bg-yellow-400 py-16 text-black">
        <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
          <p className="text-sm font-black uppercase tracking-widest">
            Desde 29€
          </p>
          <h2 className="mt-3 text-4xl font-black">
            Precio para ajustar pestillo de puerta
          </h2>
          <p className="mt-6 text-lg font-medium leading-8 text-neutral-900">
            El precio depende del tipo de pestillo, cerradero, manilla, marco,
            nivel de desalineación, piezas necesarias y dificultad. Envíanos
            fotos y vídeo para darte un presupuesto claro.
          </p>

          <div className="mt-8 rounded-3xl border border-yellow-600/30 bg-white p-6 text-left shadow-xl">
            <h3 className="text-xl font-black">El precio depende de:</h3>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Tipo de pestillo",
                "Cerradero o placa",
                "Estado de la manilla",
                "Estado del marco",
                "Nivel de desalineación",
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
          Realizamos ajuste de pestillos de puerta en Valencia ciudad y
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
            {
              title: "Ajuste de cerradero",
              href: `/${locale}/services/doors/strike-plate-adjustment`,
            },
            {
              title: "Apriete de bisagras",
              href: `/${locale}/services/doors/hinge-tightening`,
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
            ¿Quieres ajustar un pestillo de puerta?
          </h2>
          <p className="mt-5 text-lg font-medium text-neutral-900">
            Envíanos fotos de la puerta, pestillo, cerradero, manilla, marco y
            un vídeo corto cerrando la puerta. Te damos un presupuesto claro
            antes de empezar.
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