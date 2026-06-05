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
const pagePath = "/services/doors/door-alignment-adjustment";

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";

  return {
    title: isEs
      ? "Ajuste de Puertas Desalineadas | Desde 39€ | THEVULGO"
      : "Door Alignment Adjustment | From €39 | THEVULGO",
    description: isEs
      ? "Ajuste básico de puertas desalineadas desde 39€. Corrección de puertas que rozan, cierran mal o quedan desniveladas en viviendas y apartamentos."
      : "Door alignment adjustment from €39. Basic correction for doors that rub, sit unevenly or do not close smoothly in homes and apartments.",
    alternates: {
      canonical: `${siteUrl}/${locale}${pagePath}`,
      languages: {
        es: `${siteUrl}/es${pagePath}`,
        en: `${siteUrl}/en${pagePath}`,
      },
    },
    openGraph: {
      title: isEs
        ? "Ajuste de Puertas Desalineadas | THEVULGO"
        : "Door Alignment Adjustment | THEVULGO",
      description: isEs
        ? "Corrección práctica de puertas que rozan, no cierran bien o quedan torcidas."
        : "Practical correction for doors that rub, close badly or sit unevenly.",
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
    q: "¿Cuánto cuesta ajustar una puerta desalineada?",
    a: "El ajuste básico de puerta empieza desde 39€. El precio depende del tipo de puerta, bisagras, roce, marco, dificultad del ajuste y si hacen falta piezas adicionales.",
  },
  {
    q: "¿Pueden arreglar una puerta que roza?",
    a: "Sí. Podemos revisar puertas que rozan con el suelo, marco o lateral y hacer una corrección básica si el problema es adecuado para ajuste.",
  },
  {
    q: "¿Pueden arreglar una puerta que no cierra bien?",
    a: "Sí. Podemos revisar alineación, bisagras, cierre, marco y pequeñas correcciones para mejorar el cierre de la puerta.",
  },
  {
    q: "¿Ajustan puertas interiores?",
    a: "Sí. Trabajamos principalmente con puertas interiores de viviendas, apartamentos, habitaciones, baños, cocinas y zonas comunes.",
  },
  {
    q: "¿El ajuste incluye cambiar bisagras?",
    a: "No siempre. El ajuste básico puede incluir revisión y corrección de bisagras existentes. Si una bisagra está dañada o rota, puede hacer falta una pieza nueva.",
  },
  {
    q: "¿Pueden ajustar varias puertas en una visita?",
    a: "Sí. Si tienes varias puertas que rozan o cierran mal, podemos revisarlas en una sola visita y darte un presupuesto agrupado.",
  },
  {
    q: "¿Qué necesito enviar para pedir presupuesto?",
    a: "Envíanos fotos de la puerta, bisagras, marco, zona donde roza y un vídeo corto abriendo y cerrando la puerta.",
  },
  {
    q: "¿Trabajan fuera de Valencia ciudad?",
    a: "Sí. Trabajamos en Valencia y alrededores como Mislata, Burjassot, Paterna, Torrent, Sagunto, Cullera, Gandía y otras zonas cercanas.",
  },
];

export default async function DoorAlignmentAdjustmentPage({
  params,
}: PageProps) {
  const { locale } = await params;
  const isEs = locale === "es";

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, quiero un presupuesto para ajuste de puerta desalineada."
      : "Hi, I would like a quote for door alignment adjustment."
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappText}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: isEs ? "Ajuste de Puertas Desalineadas" : "Door Alignment Adjustment",
    serviceType: "Door alignment adjustment",
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
      price: "39",
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
      "Ajuste de puertas desalineadas, puertas que rozan, bisagras, manillas, cierres, herrajes y servicios handyman en Valencia.",
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
        name: isEs ? "Ajuste de Puertas Desalineadas" : "Door Alignment Adjustment",
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
              Puertas que rozan, cierran mal o quedan desalineadas
            </div>

            <h1 className="text-4xl font-black tracking-tight md:text-6xl">
              Ajuste de puertas desalineadas
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-700">
              Corrección básica de puertas que rozan, quedan torcidas, no cierran
              suavemente o tienen pequeños problemas de alineación en viviendas,
              apartamentos y pisos de alquiler.
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
                "Desde 39€",
                "Puertas que rozan",
                "Puertas que cierran mal",
                "Ajuste de bisagras",
                "Mejor uso diario",
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
                Door alignment. Less rubbing. Smoother closing.
              </h2>
              <p className="mt-4 font-medium leading-7 text-neutral-900">
                Revisamos bisagras, marco, roce y cierre para mejorar el
                funcionamiento de la puerta con una corrección práctica.
              </p>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                ["Less rubbing", "Menos roce con suelo o marco"],
                ["Smoother closing", "Cierre más cómodo"],
                ["Hinge check", "Revisión básica de bisagras"],
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
              text: "Revisamos si el problema puede solucionarse con ajuste básico.",
            },
            {
              icon: Wrench,
              title: "Bisagras y cierre",
              text: "Comprobamos bisagras, tornillos, marco y punto de roce.",
            },
            {
              icon: Ruler,
              title: "Mejor alineación",
              text: "Buscamos una línea más correcta y un cierre más suave.",
            },
            {
              icon: Star,
              title: "Precio claro",
              text: "Desde 39€. Presupuesto según fotos, vídeo y dificultad.",
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
          Ajuste básico de puertas que rozan o no cierran bien
        </h2>

        <div className="mt-6 space-y-5 text-lg leading-8 text-neutral-700">
          <p>
            En THEVULGO realizamos ajuste de puertas interiores que rozan, se
            quedan desalineadas, hacen fricción con el suelo o el marco, o no
            cierran tan suavemente como deberían. Es una solución práctica para
            pequeños problemas de uso diario en viviendas y apartamentos.
          </p>

          <p>
            Antes de ajustar revisamos el estado de las bisagras, tornillos,
            marco, hoja de la puerta, punto de roce y cierre. Esto ayuda a saber
            si el problema se puede corregir con un ajuste simple o si hace falta
            una reparación más amplia.
          </p>

          <p>
            También podemos combinar este trabajo con otros servicios de puertas:
            cambio de manilla, ajuste de pestillo, ajuste de cerradero,
            apriete de bisagras, sustitución de burlete o pequeños trabajos de
            herrajes.
          </p>
        </div>
      </section>

      <section className="bg-yellow-50 py-16">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <h2 className="text-3xl font-black md:text-4xl">
            ¿Qué incluye el ajuste?
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              "Revisión de la puerta",
              "Comprobación de bisagras",
              "Revisión de tornillos visibles",
              "Detección del punto de roce",
              "Ajuste básico si es posible",
              "Comprobación del cierre",
              "Revisión del marco",
              "Prueba final de apertura",
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
          Problemas de puerta que podemos revisar
        </h2>

        <div className="grid gap-8 md:grid-cols-4">
          {[
            {
              title: "Puerta que roza",
              text: "Corrección básica cuando la puerta roza con el suelo, lateral o marco.",
            },
            {
              title: "Puerta que no cierra",
              text: "Revisión de alineación, marco, bisagras y cierre para mejorar el uso.",
            },
            {
              title: "Puerta desnivelada",
              text: "Ajuste práctico cuando la hoja queda torcida o visualmente desigual.",
            },
            {
              title: "Bisagras desajustadas",
              text: "Revisión y ajuste básico de bisagras compatibles y tornillos visibles.",
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
          ¿Dónde hacemos ajustes de puertas?
        </h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {[
            "Puertas interiores",
            "Puertas de habitaciones",
            "Puertas de baño",
            "Puertas de cocina",
            "Apartamentos de alquiler",
            "Viviendas y pisos",
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
          Si la puerta está hinchada, muy dañada, el marco está deformado o falta
          una pieza, puede que el trabajo no sea solo un ajuste básico. Envíanos
          fotos y un vídeo para revisar el caso antes de confirmar la visita.
        </p>
      </section>

      <section className="bg-yellow-400 py-16 text-black">
        <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
          <p className="text-sm font-black uppercase tracking-widest">
            Desde 39€
          </p>
          <h2 className="mt-3 text-4xl font-black">
            Precio para ajustar una puerta desalineada
          </h2>
          <p className="mt-6 text-lg font-medium leading-8 text-neutral-900">
            El precio depende del tipo de puerta, bisagras, marco, punto de
            roce, dificultad del ajuste y si hacen falta piezas nuevas. Envíanos
            fotos y vídeo para darte un presupuesto claro.
          </p>

          <div className="mt-8 rounded-3xl border border-yellow-600/30 bg-white p-6 text-left shadow-xl">
            <h3 className="text-xl font-black">El precio depende de:</h3>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Tipo de puerta",
                "Punto de roce",
                "Estado de bisagras",
                "Estado del marco",
                "Nivel de desajuste",
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
          Realizamos ajuste de puertas desalineadas en Valencia ciudad y
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
              title: "Cambio de manilla",
              href: `/${locale}/services/doors/handle-replacement`,
            },
            {
              title: "Reparar manilla suelta",
              href: `/${locale}/services/doors/loose-handle-fixing`,
            },
            {
              title: "Ajuste de pestillo",
              href: `/${locale}/services/doors/latch-adjustment`,
            },
            {
              title: "Apriete de bisagras",
              href: `/${locale}/services/doors/hinge-tightening`,
            },
            {
              title: "Servicios handyman",
              href: `/${locale}/services`,
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
            ¿Quieres ajustar una puerta que roza o no cierra bien?
          </h2>
          <p className="mt-5 text-lg font-medium text-neutral-900">
            Envíanos fotos de la puerta, bisagras, marco y un vídeo corto
            abriendo y cerrando. Te damos un presupuesto claro antes de empezar.
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