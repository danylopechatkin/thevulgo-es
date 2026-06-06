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
const pagePath = "/services/doors/instalacion-tope-puerta";

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";

  return {
    title: isEs
      ? "Instalación de Tope de Puerta | Desde 25€ | THEVULGO"
      : "Door Stopper Installation | From €25 | THEVULGO",
    description: isEs
      ? "Instalación de topes de puerta desde 25€. Montaje de topes sencillos para proteger paredes, muebles, manillas y evitar golpes repetidos."
      : "Door stopper installation from €25. Installation of simple door stoppers to protect walls, furniture and handles from repeated impact damage.",
    alternates: {
      canonical: `${siteUrl}/${locale}${pagePath}`,
      languages: {
        es: `${siteUrl}/es${pagePath}`,
        en: `${siteUrl}/en${pagePath}`,
      },
    },
    openGraph: {
      title: isEs
        ? "Instalación de Tope de Puerta | THEVULGO"
        : "Door Stopper Installation | THEVULGO",
      description: isEs
        ? "Montaje de topes de puerta para proteger paredes, muebles y manillas."
        : "Door stopper mounting to protect walls, furniture and handles.",
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
    q: "¿Cuánto cuesta instalar un tope de puerta?",
    a: "La instalación de tope de puerta empieza desde 25€. El precio depende del tipo de tope, superficie, ubicación, fijación, número de topes y dificultad del montaje.",
  },
  {
    q: "¿Para qué sirve un tope de puerta?",
    a: "Un tope de puerta ayuda a proteger paredes, muebles, manillas y zócalos de golpes repetidos cuando la puerta se abre con fuerza.",
  },
  {
    q: "¿Pueden instalar topes en pared o suelo?",
    a: "Sí. Podemos instalar topes de puerta en pared o suelo cuando la superficie y el producto son adecuados.",
  },
  {
    q: "¿Pueden instalar topes adhesivos?",
    a: "Sí. Podemos colocar topes adhesivos si el producto y la superficie son adecuados. También instalamos topes atornillados.",
  },
  {
    q: "¿Necesito comprar el tope antes?",
    a: "Sí, lo ideal es tener el tope comprado antes de la visita. Puedes enviarnos foto o enlace para revisar si parece compatible.",
  },
  {
    q: "¿Pueden instalar varios topes en una visita?",
    a: "Sí. Podemos instalar varios topes de puerta en una misma visita para habitaciones, baños, cocina, pasillos o zonas comunes.",
  },
  {
    q: "¿Qué necesito enviar para pedir presupuesto?",
    a: "Envíanos fotos de la puerta, pared o suelo donde quieres instalar el tope, foto del producto y número de topes que necesitas.",
  },
  {
    q: "¿Trabajan fuera de Valencia ciudad?",
    a: "Sí. Trabajamos en Valencia y alrededores como Mislata, Burjassot, Paterna, Torrent, Sagunto, Cullera, Gandía y otras zonas cercanas.",
  },
];

export default async function InstalacionTopePuertaPage({
  params,
}: PageProps) {
  const { locale } = await params;
  const isEs = locale === "es";

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, quiero un presupuesto para instalación de tope de puerta."
      : "Hi, I would like a quote for door stopper installation."
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappText}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: isEs ? "Instalación de Tope de Puerta" : "Door Stopper Installation",
    serviceType: "Door stopper installation",
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
      "Instalación de topes de puerta, protección de paredes, ajustes de puertas, bisagras, manillas, pestillos, cerraderos y servicios handyman en Valencia.",
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
          ? "Instalación de Tope de Puerta"
          : "Door Stopper Installation",
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
              Topes de puerta para proteger paredes, muebles y manillas
            </div>

            <h1 className="text-4xl font-black tracking-tight md:text-6xl">
              Instalación de tope de puerta
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-700">
              Instalación de topes de puerta sencillos para proteger paredes,
              muebles, zócalos y manillas contra golpes repetidos cuando la
              puerta se abre con fuerza.
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
                "Topes de puerta",
                "Protección de paredes",
                "Protección de manillas",
                "Montaje limpio",
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
                Door stopper installation. Protect walls. Prevent impact.
              </h2>
              <p className="mt-4 font-medium leading-7 text-neutral-900">
                Revisamos la apertura de la puerta, elegimos una posición
                práctica y montamos el tope en pared o suelo cuando es adecuado.
              </p>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                ["Wall protection", "Menos golpes en paredes"],
                ["Handle protection", "Evita impacto de manillas"],
                ["Clean placement", "Posición práctica y discreta"],
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
              title: "Protección práctica",
              text: "Ayuda a evitar golpes repetidos en paredes, muebles y manillas.",
            },
            {
              icon: Wrench,
              title: "Montaje limpio",
              text: "Instalamos topes adhesivos o atornillados según producto y superficie.",
            },
            {
              icon: Ruler,
              title: "Posición correcta",
              text: "Revisamos el recorrido de la puerta para colocar el tope donde conviene.",
            },
            {
              icon: Star,
              title: "Precio claro",
              text: "Desde 25€. Presupuesto según fotos, producto y cantidad.",
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
          Instalación de topes de puerta para viviendas y apartamentos
        </h2>

        <div className="mt-6 space-y-5 text-lg leading-8 text-neutral-700">
          <p>
            En THEVULGO instalamos topes de puerta para proteger paredes,
            muebles, manillas, zócalos y superficies que reciben golpes
            repetidos por la apertura diaria de puertas interiores.
          </p>

          <p>
            Antes de montar revisamos el tipo de tope, superficie, recorrido de
            la puerta, ubicación del impacto, distancia a la pared y si conviene
            colocar el tope en suelo, pared o zona cercana al marco.
          </p>

          <p>
            También podemos combinar este trabajo con ajuste de puerta
            desalineada, apriete de bisagras, cambio de manilla, reparación de
            manilla suelta, ajuste de pestillo o instalación de otros herrajes
            pequeños.
          </p>
        </div>
      </section>

      <section className="bg-yellow-50 py-16">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <h2 className="text-3xl font-black md:text-4xl">
            ¿Qué incluye la instalación?
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              "Revisión del tope de puerta",
              "Comprobación de pared o suelo",
              "Revisión del recorrido de la puerta",
              "Marcado de posición práctica",
              "Montaje adhesivo o atornillado",
              "Comprobación del impacto",
              "Revisión visual del resultado",
              "Instalación de varios topes si hace falta",
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
          Tipos de topes que podemos instalar
        </h2>

        <div className="grid gap-8 md:grid-cols-4">
          {[
            {
              title: "Tope de pared",
              text: "Instalación de topes en pared para evitar impacto de manilla o puerta.",
            },
            {
              title: "Tope de suelo",
              text: "Montaje de topes en suelo cuando la superficie y ubicación son adecuadas.",
            },
            {
              title: "Tope adhesivo",
              text: "Colocación de topes adhesivos cuando el producto y la superficie lo permiten.",
            },
            {
              title: "Varios topes",
              text: "Instalación de varios topes en habitaciones, baños, cocina o pasillos.",
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
          ¿Dónde instalamos topes de puerta?
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
          Si no sabes qué tipo de tope conviene, envíanos fotos de la puerta,
          pared, suelo y zona donde golpea. Te ayudamos a revisar la mejor
          posición antes de confirmar la visita.
        </p>
      </section>

      <section className="bg-yellow-400 py-16 text-black">
        <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
          <p className="text-sm font-black uppercase tracking-widest">
            Desde 25€
          </p>
          <h2 className="mt-3 text-4xl font-black">
            Precio para instalar tope de puerta
          </h2>
          <p className="mt-6 text-lg font-medium leading-8 text-neutral-900">
            El precio depende del tipo de tope, superficie, ubicación, número de
            topes, sistema de fijación y dificultad. Envíanos fotos para darte un
            presupuesto claro.
          </p>

          <div className="mt-8 rounded-3xl border border-yellow-600/30 bg-white p-6 text-left shadow-xl">
            <h3 className="text-xl font-black">El precio depende de:</h3>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Tipo de tope",
                "Pared o suelo",
                "Sistema adhesivo o atornillado",
                "Número de topes",
                "Zona de impacto",
                "Superficie de montaje",
                "Acceso a la zona",
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
          Realizamos instalación de topes de puerta en Valencia ciudad y
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
              title: "Ajuste de cierrapuertas",
              href: `/${locale}/services/doors/ajuste-cierrapuertas`,
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
            ¿Quieres instalar un tope de puerta?
          </h2>
          <p className="mt-5 text-lg font-medium text-neutral-900">
            Envíanos fotos de la puerta, pared o suelo, zona donde golpea y foto
            del tope si ya lo tienes. Te damos un presupuesto claro antes de
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