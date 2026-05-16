import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  Plug,
  ShieldCheck,
  Wrench,
  Home,
  HelpCircle,
  MapPin,
  Star,
  Zap,
} from "lucide-react";

type PageProps = {
  params: Promise<{ locale: string }>;
};

const siteUrl = "https://www.thevulgo.es";
const phoneNumber = "34610076942";

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";

  return {
    title: isEs
      ? "Cambio de Enchufe en Valencia | Desde 29€ | THEVULGO"
      : "Socket Replacement in Valencia | From €29 | THEVULGO",
    description: isEs
      ? "Cambio de enchufe en Valencia desde 29€. Sustitución de enchufes dañados, antiguos o tapas para una instalación más limpia en casas y apartamentos."
      : "Socket replacement in Valencia from €29. Replacement of damaged, old sockets and covers for cleaner installations.",
    alternates: {
      canonical: `${siteUrl}/${locale}/cambio-enchufe-valencia`,
      languages: {
        es: `${siteUrl}/es/cambio-enchufe-valencia`,
        en: `${siteUrl}/en/socket-replacement-valencia`,
      },
    },
    openGraph: {
      title: isEs
        ? "Cambio de Enchufe en Valencia | Desde 29€"
        : "Socket Replacement in Valencia | From €29",
      description: isEs
        ? "Cambio limpio y profesional de enchufes en Valencia."
        : "Clean and professional socket replacement in Valencia.",
      url: `${siteUrl}/${locale}/cambio-enchufe-valencia`,
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
    q: "¿Cuánto cuesta cambiar un enchufe en Valencia?",
    a: "El cambio de enchufe empieza desde 29€. El precio depende del tipo de enchufe, número de unidades, estado del mecanismo y complejidad.",
  },
  {
    q: "¿Pueden cambiar enchufes antiguos o dañados?",
    a: "Sí. Podemos sustituir enchufes antiguos, amarillentos, dañados, flojos o con tapas deterioradas.",
  },
  {
    q: "¿Cambian enchufes dobles?",
    a: "Sí. Podemos cambiar enchufes simples, dobles y mecanismos similares según la instalación existente.",
  },
  {
    q: "¿Puedo cambiar varios enchufes en una visita?",
    a: "Sí. Se puede hacer un presupuesto combinado para varios enchufes, interruptores u otros mecanismos.",
  },
  {
    q: "¿Tengo que comprar el enchufe?",
    a: "No necesariamente. Puedes comprarlo tú o podemos ayudarte a elegir uno compatible.",
  },
  {
    q: "¿Y si el problema es el cableado?",
    a: "Si el problema no es el enchufe sino el cableado o conexión, primero se revisa y se explica antes de cualquier trabajo adicional.",
  },
  {
    q: "¿Trabajan fuera de Valencia?",
    a: "Sí. Trabajamos en Valencia y alrededores como Mislata, Burjassot, Paterna, Torrent, Sagunto, Cullera y Gandía.",
  },
];

export default async function SocketReplacementPage({
  params,
}: PageProps) {
  const { locale } = await params;
  const isEs = locale === "es";

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, quiero presupuesto para cambio de enchufe en Valencia."
      : "Hi, I need a quote for socket replacement in Valencia."
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappText}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Cambio de Enchufe en Valencia",
    serviceType: "Socket replacement",
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
      "Cambio de enchufes, interruptores, iluminación y handyman services en Valencia.",
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
        name: "Cambio de Enchufe en Valencia",
        item: `${siteUrl}/${locale}/cambio-enchufe-valencia`,
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
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-yellow-300 bg-yellow-100 px-4 py-2 text-sm font-black shadow-sm">
              <MapPin className="h-4 w-4 text-yellow-600" />
              Valencia & nearby · Clean finish · Fast response
            </div>

            <h1 className="text-4xl font-black tracking-tight md:text-6xl">
              Cambio de enchufe en Valencia
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-700">
              Sustitución de enchufes y tapas para una instalación más limpia
              desde <strong className="text-black">29€</strong>. Cambio rápido,
              limpio y profesional para casas, apartamentos y oficinas.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappUrl}
                className="inline-flex items-center justify-center rounded-xl bg-yellow-400 px-6 py-4 font-black text-black shadow-md transition hover:scale-105 hover:bg-yellow-300"
              >
                Pedir presupuesto por WhatsApp
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>

              <Link
                href={`/${locale}/services`}
                className="inline-flex items-center justify-center rounded-xl border border-neutral-300 bg-white px-6 py-4 font-black text-neutral-950 shadow-sm transition hover:scale-105"
              >
                Ver otros servicios
              </Link>
            </div>

            <div className="mt-8 grid gap-3 text-sm font-medium text-neutral-700 sm:grid-cols-2">
              {[
                "Cambio desde 29€",
                "Enchufes simples y dobles",
                "Tapas y mecanismos",
                "Acabado limpio",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-yellow-500" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-yellow-300 bg-white p-6 shadow-2xl">
            <div className="rounded-2xl bg-yellow-400 p-8 text-black">
              <Plug className="mb-6 h-12 w-12" />

              <p className="text-sm font-black uppercase tracking-widest">
                THEVULGO Valencia
              </p>

              <h2 className="mt-3 text-3xl font-black">
                Clean socket replacement. No mess.
              </h2>

              <p className="mt-4 font-medium leading-7">
                Cambio profesional de enchufes dañados, antiguos o desgastados
                con acabado limpio y seguro.
              </p>
            </div>
                        <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                ["Fast replies", "Respuesta rápida por WhatsApp"],
                ["Clean finish", "Instalación limpia y ordenada"],
                ["Safe replacement", "Cambio profesional de mecanismos"],
                ["Clear pricing", "Precio claro antes del trabajo"],
              ].map(([title, text]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-yellow-200 bg-yellow-50 p-4"
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
              icon: Plug,
              title: "Cambio limpio",
              text: "Sustitución ordenada de enchufes y tapas.",
            },
            {
              icon: ShieldCheck,
              title: "Trabajo seguro",
              text: "Revisión básica del mecanismo antes del cambio.",
            },
            {
              icon: Wrench,
              title: "Múltiples enchufes",
              text: "Podemos cambiar varios en una sola visita.",
            },
            {
              icon: Star,
              title: "Precio claro",
              text: "Presupuesto transparente antes de empezar.",
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
          Cambio profesional de enchufes en Valencia
        </h2>

        <div className="mt-6 space-y-5 text-lg leading-8 text-neutral-700">
          <p>
            En THEVULGO realizamos <strong>cambio de enchufes en Valencia</strong>
            para casas, apartamentos, oficinas pequeñas y propiedades de alquiler.
            Sustituimos enchufes antiguos, dañados, flojos o tapas deterioradas
            para conseguir una instalación más limpia y funcional.
          </p>

          <p>
            Un enchufe viejo o mal fijado no solo se ve mal, también puede causar
            conexiones inestables o mal contacto. Antes de cambiarlo revisamos el
            mecanismo visible y la compatibilidad del nuevo enchufe.
          </p>

          <p>
            También podemos combinar el trabajo con cambio de interruptores,
            instalación de lámparas, apliques o pequeños trabajos eléctricos
            relacionados durante la misma visita.
          </p>
        </div>
      </section>

      <section className="bg-yellow-50 py-16">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <h2 className="text-3xl font-black md:text-4xl">
            ¿Qué incluye el servicio?
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              "Revisión visual del enchufe",
              "Retirada del enchufe antiguo",
              "Cambio de tapa o mecanismo",
              "Instalación del nuevo enchufe",
              "Comprobación básica",
              "Acabado limpio",
              "Cambio de varios enchufes",
              "Presupuesto antes del trabajo",
              "Respuesta rápida",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-yellow-200 bg-white p-5 shadow-sm"
              >
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-yellow-500" />
                <p className="font-bold">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <h2 className="mb-8 text-3xl font-black md:text-4xl">
          Tipos de enchufes que cambiamos
        </h2>

        <div className="grid gap-8 md:grid-cols-4">
          {[
            {
              title: "Enchufe simple",
              text: "Cambio de mecanismos individuales estándar.",
            },
            {
              title: "Enchufe doble",
              text: "Sustitución de enchufes dobles existentes.",
            },
            {
              title: "Tapas decorativas",
              text: "Cambio de tapas viejas o dañadas.",
            },
            {
              title: "Mecanismos antiguos",
              text: "Actualización visual más limpia y moderna.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-yellow-300 bg-white p-7 shadow-md"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400">
                <Plug className="h-8 w-8 text-black" />
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
            Desde 29€
          </p>

          <h2 className="mt-3 text-4xl font-black">
            Presupuesto para cambio de enchufe
          </h2>

          <p className="mt-6 text-lg font-medium leading-8">
            El precio final depende del número de enchufes, tipo de mecanismo,
            estado de la instalación y complejidad.
          </p>

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
          Trabajamos en Valencia ciudad y alrededores.
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
              title: "Cambio de interruptor",
              href: `/${locale}/cambio-interruptor-valencia`,
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
              title: "Lámparas colgantes",
              href: `/${locale}/instalacion-lamparas-colgantes-valencia`,
            },
            {
              title: "Ocultar cables",
              href: `/${locale}/ocultar-cables-valencia`,
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
            ¿Necesitas cambiar un enchufe?
          </h2>

          <p className="mt-5 text-lg font-medium text-neutral-900">
            Envíanos fotos y recibe presupuesto claro antes de empezar.
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