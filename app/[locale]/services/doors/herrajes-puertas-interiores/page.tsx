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
const pagePath = "/services/doors/herrajes-puertas-interiores";

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";

  return {
    title: isEs
      ? "Herrajes para Puertas Interiores y Armarios | Desde 29€ | THEVULGO"
      : "Cabinet and Interior Door Hardware | From €29 | THEVULGO",
    description: isEs
      ? "Ajuste y corrección de herrajes desde 29€. Bisagras, manillas y mecanismos visibles en puertas interiores, armarios y puertas auxiliares."
      : "Cabinet and interior door hardware service from €29. Small corrections for hinges, handles and visible mechanisms on cabinet and interior doors.",
    alternates: {
      canonical: `${siteUrl}/${locale}${pagePath}`,
      languages: {
        es: `${siteUrl}/es${pagePath}`,
        en: `${siteUrl}/en${pagePath}`,
      },
    },
    openGraph: {
      title: isEs
        ? "Herrajes para Puertas Interiores y Armarios | THEVULGO"
        : "Cabinet and Interior Door Hardware | THEVULGO",
      description: isEs
        ? "Corrección de bisagras, manillas y herrajes visibles en puertas interiores y armarios."
        : "Small hardware corrections for cabinet doors, utility doors and interior fittings.",
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
    q: "¿Qué herrajes pueden reparar o ajustar?",
    a: "Podemos revisar y ajustar bisagras, manillas, pomos, tornillos, cerraderos, pequeños mecanismos visibles y herrajes comunes de puertas interiores, armarios y puertas auxiliares.",
  },
  {
    q: "¿Cuánto cuesta ajustar herrajes de puertas interiores o armarios?",
    a: "El servicio empieza desde 29€. El precio depende del número de puertas, tipo de herraje, estado de las piezas, dificultad y si hace falta sustituir algún elemento.",
  },
  {
    q: "¿Ajustan bisagras de armarios?",
    a: "Sí. Podemos ajustar bisagras de armarios, puertas de muebles, puertas auxiliares y pequeños mecanismos visibles cuando el sistema lo permite.",
  },
  {
    q: "¿Pueden reparar puertas interiores?",
    a: "Sí. Podemos hacer pequeños ajustes en puertas interiores, manillas, bisagras, pestillos, cerraderos y herrajes visibles.",
  },
  {
    q: "¿Cambian manillas o pomos?",
    a: "Sí. Podemos cambiar manillas, pomos y herrajes compatibles cuando la pieza nueva está disponible y el montaje es sencillo.",
  },
  {
    q: "¿Pueden revisar varias puertas en una visita?",
    a: "Sí. Podemos revisar varias puertas, armarios, bisagras, manillas y herrajes en una sola visita.",
  },
  {
    q: "¿Necesito comprar piezas nuevas?",
    a: "No siempre. Primero revisamos si se puede ajustar. Si una pieza está rota, doblada o desgastada, puede ser necesario comprar un repuesto compatible.",
  },
  {
    q: "¿Qué necesito enviar para pedir presupuesto?",
    a: "Envíanos fotos de la puerta o armario, herraje, bisagras, manilla, mecanismo visible y un vídeo corto mostrando el problema.",
  },
];

export default async function HerrajesPuertasInterioresPage({
  params,
}: PageProps) {
  const { locale } = await params;
  const isEs = locale === "es";

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, quiero un presupuesto para herrajes de puertas interiores o armarios."
      : "Hi, I would like a quote for cabinet and interior door hardware."
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappText}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: isEs
      ? "Herrajes para Puertas Interiores y Armarios"
      : "Cabinet and Interior Door Hardware",
    serviceType: "Cabinet and interior door hardware",
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
      "Ajuste de herrajes para puertas interiores, armarios, bisagras, manillas, pomos, cerraderos, pestillos y servicios handyman en Valencia.",
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
        name: isEs
          ? "Herrajes para Puertas Interiores y Armarios"
          : "Cabinet and Interior Door Hardware",
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
              Herrajes, bisagras, manillas y mecanismos visibles
            </div>

            <h1 className="text-4xl font-black tracking-tight md:text-6xl">
              Herrajes para puertas interiores y armarios
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-700">
              Correcciones pequeñas para puertas de armarios, puertas
              auxiliares y puertas interiores cuando bisagras, manillas o
              mecanismos visibles necesitan ajuste, apriete o mejora funcional.
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
                "Bisagras de armarios",
                "Manillas y pomos",
                "Puertas interiores",
                "Mecanismos visibles",
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
                Interior door hardware. Adjusted. Tightened. Improved.
              </h2>
              <p className="mt-4 font-medium leading-7 text-neutral-900">
                Revisamos bisagras, manillas, tornillos y mecanismos visibles
                para mejorar el uso diario sin cambiar toda la puerta.
              </p>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                ["Cabinet doors", "Ajustes de puertas de armario"],
                ["Interior fittings", "Herrajes interiores visibles"],
                ["Small corrections", "Apriete y corrección práctica"],
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
              text: "Revisamos si el herraje puede ajustarse sin sustituir toda la pieza.",
            },
            {
              icon: Wrench,
              title: "Bisagras y manillas",
              text: "Ajustamos bisagras, manillas, pomos y pequeños mecanismos visibles.",
            },
            {
              icon: Ruler,
              title: "Mejor funcionamiento",
              text: "Buscamos que la puerta abra, cierre y se alinee mejor.",
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
          Ajuste de herrajes en puertas interiores y armarios
        </h2>

        <div className="mt-6 space-y-5 text-lg leading-8 text-neutral-700">
          <p>
            En THEVULGO realizamos pequeñas correcciones de herrajes en puertas
            interiores, puertas de armarios, muebles, puertas auxiliares y
            mecanismos visibles que han empezado a fallar, moverse o cerrar peor
            con el uso diario.
          </p>

          <p>
            Antes de ajustar revisamos bisagras, tornillos, manillas, pomos,
            cerraderos, pestillos, guías visibles, holguras y el movimiento real
            de la puerta. Esto ayuda a saber si basta con ajuste o si hace falta
            cambiar una pieza compatible.
          </p>

          <p>
            Es una opción práctica para pisos de alquiler, apartamentos,
            viviendas, armarios, pequeños muebles y puertas interiores que no
            necesitan reforma, sino una mejora funcional y visual.
          </p>
        </div>
      </section>

      <section className="bg-yellow-50 py-16">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <h2 className="text-3xl font-black md:text-4xl">
            ¿Qué puede incluir el servicio?
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              "Ajuste de bisagras",
              "Apriete de tornillos",
              "Corrección de manillas",
              "Ajuste de pomos",
              "Revisión de pestillos",
              "Revisión de cerraderos",
              "Corrección de holguras",
              "Mejora de apertura y cierre",
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
          Herrajes y puertas que podemos revisar
        </h2>

        <div className="grid gap-8 md:grid-cols-4">
          {[
            {
              title: "Puertas de armario",
              text: "Ajuste de bisagras, manillas y pequeñas holguras en puertas de armario.",
            },
            {
              title: "Puertas interiores",
              text: "Correcciones en manillas, pestillos, cerraderos y herrajes visibles.",
            },
            {
              title: "Puertas auxiliares",
              text: "Revisión de puertas de trastero, lavadero, muebles o zonas de uso diario.",
            },
            {
              title: "Mecanismos visibles",
              text: "Apriete y ajuste de piezas accesibles cuando el sistema lo permite.",
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
          ¿Dónde hacemos correcciones de herrajes?
        </h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {[
            "Puertas interiores",
            "Puertas de armarios",
            "Puertas auxiliares",
            "Muebles y módulos",
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
          Si el herraje está roto, falta una pieza o el mecanismo está muy
          desgastado, puede hacer falta comprar un repuesto compatible. Envíanos
          fotos y un vídeo para revisar si es ajuste simple o sustitución.
        </p>
      </section>

      <section className="bg-yellow-400 py-16 text-black">
        <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
          <p className="text-sm font-black uppercase tracking-widest">
            Desde 29€
          </p>
          <h2 className="mt-3 text-4xl font-black">
            Precio para ajustar herrajes de puertas y armarios
          </h2>
          <p className="mt-6 text-lg font-medium leading-8 text-neutral-900">
            El precio depende del número de puertas, tipo de herraje, estado de
            las piezas, dificultad, tiempo necesario y si hacen falta repuestos.
            Envíanos fotos y vídeo para darte un presupuesto claro.
          </p>

          <div className="mt-8 rounded-3xl border border-yellow-600/30 bg-white p-6 text-left shadow-xl">
            <h3 className="text-xl font-black">El precio depende de:</h3>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Número de puertas",
                "Tipo de herraje",
                "Bisagras o manillas",
                "Estado del mecanismo",
                "Piezas necesarias",
                "Tiempo de ajuste",
                "Dificultad del trabajo",
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
          Realizamos ajustes de herrajes para puertas interiores y armarios en
          Valencia ciudad y alrededores. Si estás fuera de Valencia, envíanos tu
          dirección y te confirmamos disponibilidad.
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
              title: "Apriete de bisagras",
              href: `/${locale}/services/doors/hinge-tightening`,
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
              title: "Ajuste de puerta desalineada",
              href: `/${locale}/services/doors/door-alignment-adjustment`,
            },
            {
              title: "Cambio de bisagras",
              href: `/${locale}/services/doors/cambio-bisagras-puerta`,
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
            ¿Quieres ajustar herrajes de una puerta o armario?
          </h2>
          <p className="mt-5 text-lg font-medium text-neutral-900">
            Envíanos fotos de la puerta, armario, bisagras, manilla o mecanismo
            visible y un vídeo corto mostrando el problema. Te damos un
            presupuesto claro antes de empezar.
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