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
const pagePath = "/services/doors/door-seal-replacement";

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";

  return {
    title: isEs
      ? "Cambio de Burlete de Puerta | Desde 29€ | THEVULGO"
      : "Door Seal Replacement | From €29 | THEVULGO",
    description: isEs
      ? "Cambio y ajuste de burletes de puerta desde 29€. Sustitución de sellos desgastados para reducir corrientes de aire, ruido y mejorar el cierre."
      : "Door seal replacement from €29. Replacement or adjustment of worn door seals to reduce drafts, noise and improve closing comfort.",
    alternates: {
      canonical: `${siteUrl}/${locale}${pagePath}`,
      languages: {
        es: `${siteUrl}/es${pagePath}`,
        en: `${siteUrl}/en${pagePath}`,
      },
    },
    openGraph: {
      title: isEs
        ? "Cambio de Burlete de Puerta | THEVULGO"
        : "Door Seal Replacement | THEVULGO",
      description: isEs
        ? "Sustitución de burletes y sellos de puerta para mejor aislamiento y cierre."
        : "Replacement of worn door seals for better insulation and cleaner door fit.",
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
    q: "¿Cuánto cuesta cambiar un burlete de puerta?",
    a: "El cambio de burlete de puerta empieza desde 29€. El precio depende del tipo de puerta, longitud del burlete, estado del sello anterior, compatibilidad y dificultad de instalación.",
  },
  {
    q: "¿Pueden sustituir burletes desgastados?",
    a: "Sí. Podemos retirar o ajustar burletes desgastados y colocar un nuevo sello compatible para mejorar el cierre y el confort.",
  },
  {
    q: "¿El burlete ayuda a reducir corrientes de aire?",
    a: "Sí. Un burlete adecuado puede ayudar a reducir pequeñas corrientes de aire, mejorar el ajuste de la puerta y hacer el cierre más cómodo.",
  },
  {
    q: "¿También ayuda con el ruido?",
    a: "Puede ayudar a reducir algo de ruido y mejorar la sensación de aislamiento, dependiendo del tipo de puerta, huecos y sello instalado.",
  },
  {
    q: "¿Necesito comprar el burlete antes?",
    a: "Lo ideal es tener el burlete comprado antes de la visita. También puedes enviarnos fotos o enlace para revisar si parece compatible.",
  },
  {
    q: "¿Pueden ajustar el cierre después de instalar el burlete?",
    a: "Sí. Podemos revisar si la puerta cierra correctamente después de colocar el burlete y hacer pequeños ajustes si es necesario.",
  },
  {
    q: "¿Pueden cambiar varios burletes en una visita?",
    a: "Sí. Podemos revisar varias puertas y cambiar o ajustar varios burletes en una sola visita.",
  },
  {
    q: "¿Qué necesito enviar para pedir presupuesto?",
    a: "Envíanos fotos de la puerta, marco, burlete actual, zona donde entra aire o ruido y medidas aproximadas si las tienes.",
  },
];

export default async function DoorSealReplacementPage({
  params,
}: PageProps) {
  const { locale } = await params;
  const isEs = locale === "es";

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, quiero un presupuesto para cambio de burlete de puerta."
      : "Hi, I would like a quote for door seal replacement."
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappText}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: isEs ? "Cambio de Burlete de Puerta" : "Door Seal Replacement",
    serviceType: "Door seal replacement",
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
      "Cambio de burletes de puerta, sellos, ajustes de cierre, puertas interiores, bisagras, manillas, pestillos y servicios handyman en Valencia.",
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
        name: isEs ? "Cambio de Burlete de Puerta" : "Door Seal Replacement",
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
              Burletes, sellos y mejor ajuste de puerta
            </div>

            <h1 className="text-4xl font-black tracking-tight md:text-6xl">
              Cambio de burlete de puerta
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-700">
              Sustitución o ajuste de burletes y sellos desgastados para reducir
              corrientes de aire, mejorar el cierre, disminuir ruido ligero y
              conseguir un ajuste más limpio de la puerta.
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
                "Burletes desgastados",
                "Menos corrientes de aire",
                "Mejor cierre",
                "Ajuste más limpio",
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
                Door seal replacement. Better insulation. Cleaner fit.
              </h2>
              <p className="mt-4 font-medium leading-7 text-neutral-900">
                Revisamos el marco, la puerta y el sello actual para instalar o
                ajustar un burlete compatible y mejorar el confort diario.
              </p>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                ["Less drafts", "Menos entrada de aire"],
                ["Better closing", "Cierre más cómodo"],
                ["Cleaner fit", "Puerta mejor ajustada"],
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
              title: "Mejor aislamiento",
              text: "Ayuda a reducir pequeñas corrientes de aire y mejorar el confort.",
            },
            {
              icon: Wrench,
              title: "Cambio práctico",
              text: "Retiramos o ajustamos el sello anterior e instalamos uno compatible.",
            },
            {
              icon: Ruler,
              title: "Mejor ajuste",
              text: "Revisamos que la puerta cierre con el nuevo burlete colocado.",
            },
            {
              icon: Star,
              title: "Precio claro",
              text: "Desde 29€. Presupuesto según fotos, medidas y dificultad.",
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
          Sustitución de burletes y sellos de puerta
        </h2>

        <div className="mt-6 space-y-5 text-lg leading-8 text-neutral-700">
          <p>
            En THEVULGO realizamos cambio de burletes de puerta para viviendas,
            apartamentos, pisos de alquiler y puertas interiores que han perdido
            ajuste, dejan pasar aire o ya no cierran con la misma comodidad.
          </p>

          <p>
            Antes de instalar revisamos el tipo de puerta, marco, hueco visible,
            longitud del burlete, material, adhesivo o sistema de fijación y el
            cierre final. Esto ayuda a evitar que el nuevo sello impida cerrar
            correctamente la puerta.
          </p>

          <p>
            También podemos combinar este trabajo con ajuste de puerta
            desalineada, apriete de bisagras, ajuste de pestillo, ajuste de
            cerradero, reparación de manilla suelta o pequeños trabajos de
            herrajes.
          </p>
        </div>
      </section>

      <section className="bg-yellow-50 py-16">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <h2 className="text-3xl font-black md:text-4xl">
            ¿Qué incluye el cambio de burlete?
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              "Revisión del burlete actual",
              "Comprobación de marco y puerta",
              "Medición básica de la zona",
              "Retirada o ajuste si procede",
              "Instalación de sello compatible",
              "Revisión del cierre",
              "Comprobación de ajuste",
              "Recomendación si hace falta otra pieza",
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
          Problemas que puede mejorar un burlete
        </h2>

        <div className="grid gap-8 md:grid-cols-4">
          {[
            {
              title: "Corrientes de aire",
              text: "Cambio de burlete para reducir pequeñas entradas de aire por la puerta.",
            },
            {
              title: "Cierre incómodo",
              text: "Revisión cuando el sello viejo afecta al cierre o queda mal colocado.",
            },
            {
              title: "Ruido ligero",
              text: "Mejora básica de confort cuando hay huecos visibles alrededor de la puerta.",
            },
            {
              title: "Sello desgastado",
              text: "Sustitución de burletes viejos, rotos, despegados o deformados.",
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
          ¿Dónde cambiamos burletes de puerta?
        </h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {[
            "Puertas interiores",
            "Puertas de habitación",
            "Puertas de baño",
            "Puertas de entrada interior",
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
          Si la puerta está muy desalineada, no cierra bien o el marco está
          deformado, puede que primero haya que ajustar bisagras, pestillo o
          cerradero antes de colocar un nuevo burlete.
        </p>
      </section>

      <section className="bg-yellow-400 py-16 text-black">
        <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
          <p className="text-sm font-black uppercase tracking-widest">
            Desde 29€
          </p>
          <h2 className="mt-3 text-4xl font-black">
            Precio para cambiar burlete de puerta
          </h2>
          <p className="mt-6 text-lg font-medium leading-8 text-neutral-900">
            El precio depende del tipo de burlete, longitud, estado del sello
            anterior, tipo de puerta, cierre, material y dificultad. Envíanos
            fotos para darte un presupuesto claro.
          </p>

          <div className="mt-8 rounded-3xl border border-yellow-600/30 bg-white p-6 text-left shadow-xl">
            <h3 className="text-xl font-black">El precio depende de:</h3>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Tipo de burlete",
                "Longitud necesaria",
                "Estado del sello viejo",
                "Tipo de puerta",
                "Sistema adhesivo o encajado",
                "Ajuste del cierre",
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
          Realizamos cambio de burletes de puerta en Valencia ciudad y
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
              title: "Apriete de bisagras",
              href: `/${locale}/services/doors/hinge-tightening`,
            },
            {
              title: "Ajuste de puerta desalineada",
              href: `/${locale}/services/doors/door-alignment-adjustment`,
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
              title: "Cambio de manilla",
              href: `/${locale}/services/doors/handle-replacement`,
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
            ¿Quieres cambiar un burlete de puerta?
          </h2>
          <p className="mt-5 text-lg font-medium text-neutral-900">
            Envíanos fotos de la puerta, marco, burlete actual y zona donde entra
            aire o ruido. Te damos un presupuesto claro antes de empezar.
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