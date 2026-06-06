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
const pagePath = "/services/doors/ajuste-cierrapuertas";

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";

  return {
    title: isEs
      ? "Ajuste de Cierrapuertas | Desde 39€ | THEVULGO"
      : "Door Closer Adjustment | From €39 | THEVULGO",
    description: isEs
      ? "Ajuste básico de cierrapuertas desde 39€. Corrección de cierrapuertas compatibles para mejorar el movimiento, reducir golpes y suavizar apertura y cierre."
      : "Door closer adjustment from €39. Basic adjustment of compatible closers to improve door movement, reduce slamming and make opening and closing smoother.",
    alternates: {
      canonical: `${siteUrl}/${locale}${pagePath}`,
      languages: {
        es: `${siteUrl}/es${pagePath}`,
        en: `${siteUrl}/en${pagePath}`,
      },
    },
    openGraph: {
      title: isEs
        ? "Ajuste de Cierrapuertas | THEVULGO"
        : "Door Closer Adjustment | THEVULGO",
      description: isEs
        ? "Ajuste de cierrapuertas para mejorar cierre, movimiento y reducir golpes."
        : "Door closer adjustment to improve movement, closing action and reduce slamming.",
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
    q: "¿Cuánto cuesta ajustar un cierrapuertas?",
    a: "El ajuste de cierrapuertas empieza desde 39€. El precio depende del tipo de cierrapuertas, estado del mecanismo, puerta, tornillos, acceso y dificultad del ajuste.",
  },
  {
    q: "¿Pueden ajustar un cierrapuertas que da golpes?",
    a: "Sí. Podemos revisar cierrapuertas compatibles que cierran demasiado fuerte, golpean o necesitan un cierre más suave.",
  },
  {
    q: "¿Pueden hacer que la puerta cierre más lento?",
    a: "Sí, si el cierrapuertas lo permite. Podemos hacer ajustes básicos de velocidad y cierre final según el modelo compatible.",
  },
  {
    q: "¿Ajustan cierrapuertas de viviendas y locales?",
    a: "Sí. Podemos revisar cierrapuertas en viviendas, comunidades, oficinas, locales y puertas interiores o de acceso cuando el sistema es compatible.",
  },
  {
    q: "¿Se puede ajustar sin cambiar el cierrapuertas?",
    a: "Muchas veces sí. Si el mecanismo está en buen estado, puede bastar con un ajuste. Si está roto, pierde aceite o no responde, puede hacer falta sustituirlo.",
  },
  {
    q: "¿Necesito comprar un cierrapuertas nuevo?",
    a: "No siempre. Primero revisamos si se puede ajustar el actual. Si está dañado o no funciona, puede ser necesario comprar uno compatible.",
  },
  {
    q: "¿Pueden ajustar varios cierrapuertas en una visita?",
    a: "Sí. Podemos revisar varios cierrapuertas, puertas, bisagras, pestillos y herrajes en una sola visita.",
  },
  {
    q: "¿Qué necesito enviar para pedir presupuesto?",
    a: "Envíanos fotos del cierrapuertas, puerta, brazo, tornillos, marco y un vídeo corto abriendo y cerrando la puerta para ver el problema.",
  },
];

export default async function AjusteCierrapuertasPage({
  params,
}: PageProps) {
  const { locale } = await params;
  const isEs = locale === "es";

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, quiero un presupuesto para ajuste de cierrapuertas."
      : "Hi, I would like a quote for door closer adjustment."
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappText}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: isEs ? "Ajuste de Cierrapuertas" : "Door Closer Adjustment",
    serviceType: "Door closer adjustment",
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
      "Ajuste de cierrapuertas, puertas que golpean, bisagras, pestillos, cerraderos, manillas, herrajes y servicios handyman en Valencia.",
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
        name: isEs ? "Ajuste de Cierrapuertas" : "Door Closer Adjustment",
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
              Cierrapuertas, cierre suave y puertas que golpean
            </div>

            <h1 className="text-4xl font-black tracking-tight md:text-6xl">
              Ajuste de cierrapuertas
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-700">
              Ajuste básico de cierrapuertas compatibles para mejorar el
              movimiento de la puerta, reducir golpes y conseguir una apertura y
              cierre más suaves en el uso diario.
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
                "Puertas que golpean",
                "Cierre más suave",
                "Ajuste de velocidad",
                "Movimiento más controlado",
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
                Door closer adjustment. Less slamming. Smoother movement.
              </h2>
              <p className="mt-4 font-medium leading-7 text-neutral-900">
                Revisamos el cierrapuertas, brazo, tornillos y movimiento para
                ajustar el cierre cuando el sistema es compatible.
              </p>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                ["Less slamming", "Menos golpes al cerrar"],
                ["Smoother closing", "Cierre más suave"],
                ["Compatible closers", "Ajuste si el sistema lo permite"],
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
              title: "Ajuste compatible",
              text: "Revisamos si el cierrapuertas permite corrección de velocidad y cierre.",
            },
            {
              icon: Wrench,
              title: "Menos golpes",
              text: "Buscamos reducir portazos y mejorar el control del cierre.",
            },
            {
              icon: Ruler,
              title: "Movimiento suave",
              text: "Comprobamos apertura, cierre final y movimiento del brazo.",
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
          Ajuste básico de cierrapuertas compatibles
        </h2>

        <div className="mt-6 space-y-5 text-lg leading-8 text-neutral-700">
          <p>
            En THEVULGO realizamos ajuste de cierrapuertas cuando la puerta
            cierra demasiado rápido, golpea fuerte, queda incómoda de usar o
            necesita un movimiento más controlado.
          </p>

          <p>
            Antes de ajustar revisamos el tipo de cierrapuertas, brazo,
            tornillos, fijación, estado del mecanismo, puerta, marco y velocidad
            de cierre. Esto ayuda a saber si se puede ajustar o si el mecanismo
            está dañado.
          </p>

          <p>
            También podemos combinar este trabajo con ajuste de puerta
            desalineada, apriete de bisagras, ajuste de pestillo, ajuste de
            cerradero, cambio de manilla o revisión de otros herrajes visibles.
          </p>
        </div>
      </section>

      <section className="bg-yellow-50 py-16">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <h2 className="text-3xl font-black md:text-4xl">
            ¿Qué incluye el ajuste de cierrapuertas?
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              "Revisión del cierrapuertas",
              "Comprobación del brazo",
              "Revisión de tornillos y fijación",
              "Comprobación de velocidad",
              "Ajuste básico si es compatible",
              "Revisión del cierre final",
              "Prueba de apertura y cierre",
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
              title: "Puerta que golpea",
              text: "Ajuste para reducir golpes cuando la puerta cierra demasiado fuerte.",
            },
            {
              title: "Cierre demasiado rápido",
              text: "Corrección básica de velocidad si el cierrapuertas lo permite.",
            },
            {
              title: "Movimiento incómodo",
              text: "Revisión de apertura, brazo y cierre para mejorar el uso diario.",
            },
            {
              title: "Cierrapuertas flojo",
              text: "Revisión de tornillos, fijación y herrajes visibles del mecanismo.",
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
          ¿Dónde ajustamos cierrapuertas?
        </h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {[
            "Puertas interiores",
            "Puertas de acceso",
            "Puertas de comunidad",
            "Oficinas y locales",
            "Viviendas y apartamentos",
            "Puertas con cierrapuertas visible",
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
          Si el cierrapuertas pierde aceite, está roto, no responde al ajuste o
          el brazo está dañado, puede ser necesario sustituirlo por un modelo
          compatible. Envíanos fotos y vídeo para revisar el caso.
        </p>
      </section>

      <section className="bg-yellow-400 py-16 text-black">
        <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
          <p className="text-sm font-black uppercase tracking-widest">
            Desde 39€
          </p>
          <h2 className="mt-3 text-4xl font-black">
            Precio para ajustar cierrapuertas
          </h2>
          <p className="mt-6 text-lg font-medium leading-8 text-neutral-900">
            El precio depende del tipo de cierrapuertas, estado del mecanismo,
            fijación, acceso, velocidad de cierre y dificultad. Envíanos fotos y
            vídeo para darte un presupuesto claro.
          </p>

          <div className="mt-8 rounded-3xl border border-yellow-600/30 bg-white p-6 text-left shadow-xl">
            <h3 className="text-xl font-black">El precio depende de:</h3>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Tipo de cierrapuertas",
                "Estado del mecanismo",
                "Brazo y tornillos",
                "Puerta y marco",
                "Nivel de ajuste",
                "Acceso a la pieza",
                "Posible sustitución",
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
          Realizamos ajuste de cierrapuertas en Valencia ciudad y alrededores.
          Si estás fuera de Valencia, envíanos tu dirección y te confirmamos
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
              title: "Ajuste de puerta desalineada",
              href: `/${locale}/services/doors/door-alignment-adjustment`,
            },
            {
              title: "Apriete de bisagras",
              href: `/${locale}/services/doors/hinge-tightening`,
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
            ¿Quieres ajustar un cierrapuertas?
          </h2>
          <p className="mt-5 text-lg font-medium text-neutral-900">
            Envíanos fotos del cierrapuertas, brazo, puerta, marco y un vídeo
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