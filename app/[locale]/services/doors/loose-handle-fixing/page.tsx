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
const pagePath = "/services/doors/loose-handle-fixing";

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";

  return {
    title: isEs
      ? "Reparar Manilla Suelta | Desde 25€ | THEVULGO"
      : "Fix Loose Door Handle | From €25 | THEVULGO",
    description: isEs
      ? "Reparación de manillas sueltas desde 25€. Apriete, ajuste y estabilización de manillas, pomos y herrajes visibles que se mueven o se sienten inseguros."
      : "Fix loose door handles from €25. Tightening and stabilizing loose handles, knobs and visible fittings that move, wobble or feel unreliable.",
    alternates: {
      canonical: `${siteUrl}/${locale}${pagePath}`,
      languages: {
        es: `${siteUrl}/es${pagePath}`,
        en: `${siteUrl}/en${pagePath}`,
      },
    },
    openGraph: {
      title: isEs
        ? "Reparar Manilla Suelta | THEVULGO"
        : "Fix Loose Door Handle | THEVULGO",
      description: isEs
        ? "Apriete y ajuste de manillas, pomos y herrajes sueltos de puertas interiores."
        : "Tightening and adjustment of loose handles, knobs and interior door hardware.",
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
    q: "¿Cuánto cuesta reparar una manilla suelta?",
    a: "La reparación de manilla suelta empieza desde 25€. El precio depende del tipo de manilla, tornillos, estado del herraje, puerta, cierre y si hace falta una pieza nueva.",
  },
  {
    q: "¿Pueden apretar una manilla que se mueve?",
    a: "Sí. Podemos apretar, ajustar y estabilizar manillas que se mueven, bailan o se sienten inseguras durante el uso diario.",
  },
  {
    q: "¿Se puede reparar sin cambiar la manilla?",
    a: "Muchas veces sí. Si la manilla y el mecanismo están en buen estado, puede bastar con ajuste, apriete o recolocación. Si está rota, puede hacer falta cambiarla.",
  },
  {
    q: "¿Reparan pomos de puerta sueltos?",
    a: "Sí. Podemos revisar y ajustar pomos, manillas tipo palanca y herrajes visibles compatibles.",
  },
  {
    q: "¿Pueden reparar varias manillas en una visita?",
    a: "Sí. Podemos revisar varias manillas, pomos o herrajes sueltos en una sola visita y dar un presupuesto agrupado.",
  },
  {
    q: "¿Por qué se afloja una manilla?",
    a: "Normalmente por uso diario, tornillos flojos, desgaste del mecanismo, mala instalación previa o piezas internas dañadas.",
  },
  {
    q: "¿Necesito comprar una manilla nueva?",
    a: "No siempre. Primero revisamos si se puede ajustar. Si el mecanismo o la manilla están rotos, puede ser necesario comprar una pieza compatible.",
  },
  {
    q: "¿Qué necesito enviar para pedir presupuesto?",
    a: "Envíanos fotos de la manilla por ambos lados, canto de la puerta, cierre y un vídeo corto mostrando cómo se mueve la manilla.",
  },
];

export default async function LooseHandleFixingPage({ params }: PageProps) {
  const { locale } = await params;
  const isEs = locale === "es";

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, quiero un presupuesto para reparar una manilla suelta."
      : "Hi, I would like a quote to fix a loose door handle."
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappText}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: isEs ? "Reparar Manilla Suelta" : "Fix Loose Door Handle",
    serviceType: "Loose handle fixing",
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
      "Reparación de manillas sueltas, pomos, herrajes visibles, cambio de manillas, ajustes de puertas, bisagras y servicios handyman en Valencia.",
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
        name: isEs ? "Reparar Manilla Suelta" : "Fix Loose Door Handle",
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
              Manillas, pomos y herrajes sueltos de puertas interiores
            </div>

            <h1 className="text-4xl font-black tracking-tight md:text-6xl">
              Reparar manilla suelta
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-700">
              Apriete y estabilización de manillas, pomos y herrajes visibles
              que se mueven, bailan o se sienten poco seguros durante el uso
              diario.
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
                "Manillas que se mueven",
                "Pomos sueltos",
                "Apriete de herrajes",
                "Uso diario más seguro",
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
                Loose handle fixing. Tightened. Stable. Reliable.
              </h2>
              <p className="mt-4 font-medium leading-7 text-neutral-900">
                Revisamos la manilla, tornillos, herrajes y cierre para mejorar
                la estabilidad sin cambiar piezas cuando es posible.
              </p>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                ["Less movement", "Manilla más estable"],
                ["Tightened hardware", "Apriete de tornillos y herrajes"],
                ["Quick repair", "Solución práctica si es compatible"],
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
              title: "Reparación práctica",
              text: "Revisamos si la manilla puede estabilizarse sin sustituirla.",
            },
            {
              icon: Wrench,
              title: "Apriete y ajuste",
              text: "Ajustamos tornillos, herrajes visibles y piezas compatibles.",
            },
            {
              icon: Ruler,
              title: "Mejor sensación",
              text: "Buscamos que la manilla quede más firme y cómoda de usar.",
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
          Reparación de manillas y pomos sueltos
        </h2>

        <div className="mt-6 space-y-5 text-lg leading-8 text-neutral-700">
          <p>
            En THEVULGO reparamos manillas sueltas, pomos que se mueven,
            herrajes visibles flojos y manillas que han empezado a sentirse poco
            fiables en el uso diario.
          </p>

          <p>
            Antes de ajustar revisamos ambos lados de la puerta, tornillos,
            embellecedores, cierre, canto de la puerta, mecanismo interior y el
            movimiento real de la manilla. Esto ayuda a saber si basta con
            apretar y estabilizar o si conviene cambiar la pieza.
          </p>

          <p>
            Este servicio es ideal para puertas interiores de habitaciones,
            baños, cocinas, pisos de alquiler, apartamentos, Airbnb y viviendas
            donde la manilla todavía funciona pero necesita quedar más firme.
          </p>
        </div>
      </section>

      <section className="bg-yellow-50 py-16">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <h2 className="text-3xl font-black md:text-4xl">
            ¿Qué incluye la reparación?
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              "Revisión de manilla o pomo",
              "Comprobación de tornillos",
              "Revisión de herrajes visibles",
              "Apriete de piezas compatibles",
              "Ajuste básico del mecanismo",
              "Comprobación del cierre",
              "Prueba final de movimiento",
              "Recomendación si hace falta cambio",
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
          Problemas que podemos revisar
        </h2>

        <div className="grid gap-8 md:grid-cols-4">
          {[
            {
              title: "Manilla que baila",
              text: "Ajuste de manillas que se mueven o quedan poco firmes.",
            },
            {
              title: "Pomo suelto",
              text: "Revisión de pomos que giran mal, se aflojan o se sienten inestables.",
            },
            {
              title: "Herraje flojo",
              text: "Apriete de tornillos, embellecedores y piezas visibles compatibles.",
            },
            {
              title: "Mecanismo inseguro",
              text: "Revisión básica cuando la manilla funciona pero no transmite confianza.",
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
          ¿Dónde reparamos manillas sueltas?
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
          Si la manilla está rota, falta una pieza o el mecanismo interior está
          dañado, puede ser mejor cambiar la manilla completa. Envíanos fotos y
          un vídeo para revisar si se puede reparar o conviene sustituir.
        </p>
      </section>

      <section className="bg-yellow-400 py-16 text-black">
        <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
          <p className="text-sm font-black uppercase tracking-widest">
            Desde 25€
          </p>
          <h2 className="mt-3 text-4xl font-black">
            Precio para reparar manilla suelta
          </h2>
          <p className="mt-6 text-lg font-medium leading-8 text-neutral-900">
            El precio depende del tipo de manilla, estado del herraje, tornillos,
            mecanismo, cierre, número de manillas y dificultad. Envíanos fotos y
            vídeo para darte un presupuesto claro.
          </p>

          <div className="mt-8 rounded-3xl border border-yellow-600/30 bg-white p-6 text-left shadow-xl">
            <h3 className="text-xl font-black">El precio depende de:</h3>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Tipo de manilla",
                "Nivel de movimiento",
                "Estado de tornillos",
                "Estado del mecanismo",
                "Pomo o palanca",
                "Piezas necesarias",
                "Número de manillas",
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
          Reparamos manillas sueltas en Valencia ciudad y alrededores. Si estás
          fuera de Valencia, envíanos tu dirección y te confirmamos
          disponibilidad.
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
              title: "Ajuste de puerta desalineada",
              href: `/${locale}/services/doors/door-alignment-adjustment`,
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
            ¿Quieres reparar una manilla suelta?
          </h2>
          <p className="mt-5 text-lg font-medium text-neutral-900">
            Envíanos fotos de la manilla por ambos lados, canto de la puerta,
            cierre y un vídeo corto mostrando el movimiento. Te damos un
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