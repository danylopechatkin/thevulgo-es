import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  Zap,
  ShieldCheck,
  Wrench,
  HelpCircle,
  MapPin,
  Star,
  Plug,
  Lightbulb,
  Cable,
} from "lucide-react";

type PageProps = {
  params: Promise<{ locale: string }>;
};

const siteUrl = "https://thevulgo.es";
const phoneNumber = "34610076942";

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";

  return {
    title: isEs
      ? "Montaje Eléctrico Básico en Valencia | Desde 35€ | THEVULGO"
      : "Basic Electrical Installation in Valencia | From €35 | THEVULGO",
    description: isEs
      ? "Montaje eléctrico básico en Valencia desde 35€. Conexión de accesorios eléctricos simples, enchufes, interruptores, lámparas y pequeños trabajos con acabado ordenado."
      : "Basic electrical installation in Valencia from €35. Simple electrical accessories, sockets, switches, lamps and small clean-finish electrical jobs.",
    alternates: {
      canonical: `${siteUrl}/${locale}/montaje-electrico-basico-valencia`,
      languages: {
        es: `${siteUrl}/es/montaje-electrico-basico-valencia`,
        en: `${siteUrl}/en/basic-electrical-installation-valencia`,
      },
    },
    openGraph: {
      title: isEs
        ? "Montaje Eléctrico Básico en Valencia | THEVULGO"
        : "Basic Electrical Installation in Valencia | THEVULGO",
      description: isEs
        ? "Montaje y conexión de accesorios eléctricos simples con acabado ordenado."
        : "Simple electrical accessory installation with a clean finish.",
      url: `${siteUrl}/${locale}/montaje-electrico-basico-valencia`,
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
    q: "¿Cuánto cuesta un montaje eléctrico básico en Valencia?",
    a: "El montaje eléctrico básico empieza desde 35€. El precio final depende del tipo de accesorio, estado del punto existente, material necesario, altura, acceso y dificultad.",
  },
  {
    q: "¿Qué incluye un montaje eléctrico básico?",
    a: "Puede incluir conexión de accesorios simples, sustitución de enchufes, interruptores, lámparas, apliques, pequeños mecanismos y organización básica de cableado.",
  },
  {
    q: "¿Hacen instalaciones eléctricas completas?",
    a: "No. Esta página es para trabajos eléctricos básicos y accesorios simples. Para instalaciones completas, cuadro eléctrico o trabajos complejos, se debe contactar a un electricista autorizado.",
  },
  {
    q: "¿Pueden instalar lámparas y apliques?",
    a: "Sí. Podemos instalar lámparas, lámparas colgantes, plafones y apliques de pared si el punto eléctrico existente está preparado.",
  },
  {
    q: "¿Pueden cambiar enchufes e interruptores?",
    a: "Sí. Podemos cambiar enchufes, tapas, interruptores simples o dobles y mecanismos similares, revisando primero la conexión existente.",
  },
  {
    q: "¿Tengo que comprar el material?",
    a: "Puedes comprarlo tú o podemos ayudarte a elegir material compatible. Si hace falta material adicional, se confirma antes del trabajo.",
  },
  {
    q: "¿Pueden hacer varios trabajos en una visita?",
    a: "Sí. Podemos combinar lámparas, enchufes, interruptores, apliques y otros pequeños trabajos eléctricos en una misma visita.",
  },
  {
    q: "¿Trabajan fuera de Valencia ciudad?",
    a: "Sí. Trabajamos en Valencia y alrededores como Mislata, Burjassot, Paterna, Torrent, Sagunto, Cullera, Gandía y otras zonas cercanas.",
  },
];

export default async function BasicElectricalInstallationValenciaPage({
  params,
}: PageProps) {
  const { locale } = await params;
  const isEs = locale === "es";

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, quiero un presupuesto para montaje eléctrico básico en Valencia."
      : "Hi, I would like a quote for basic electrical installation in Valencia."
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappText}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Montaje Eléctrico Básico en Valencia",
    serviceType: "Basic electrical installation",
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
    description:
      "Montaje eléctrico básico, cambio de enchufes, cambio de interruptores, instalación de lámparas, apliques y servicios handyman en Valencia.",
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
      { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/${locale}` },
      { "@type": "ListItem", position: 2, name: "Services", item: `${siteUrl}/${locale}/services` },
      {
        "@type": "ListItem",
        position: 3,
        name: "Montaje Eléctrico Básico en Valencia",
        item: `${siteUrl}/${locale}/montaje-electrico-basico-valencia`,
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
              Enchufes · Interruptores · Lámparas · Valencia
            </div>

            <h1 className="text-4xl font-black tracking-tight md:text-6xl">
              Montaje eléctrico básico{" "}
              <span className="text-yellow-500">en Valencia</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-700">
              Montaje y conexión de accesorios eléctricos simples desde{" "}
              <strong className="text-neutral-950">35€</strong>, con acabado
              ordenado para casas, apartamentos, oficinas pequeñas y pisos de
              alquiler.
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
                "Desde 35€",
                "Accesorios eléctricos simples",
                "Enchufes e interruptores",
                "Lámparas y apliques",
                "Acabado ordenado",
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
              <Zap className="mb-6 h-12 w-12 text-black" />
              <p className="text-sm font-black uppercase tracking-widest">
                THEVULGO Valencia
              </p>
              <h2 className="mt-3 text-3xl font-black">
                Basic electrical setup. Clean. Simple. Organized.
              </h2>
              <p className="mt-4 font-medium leading-7 text-neutral-900">
                Revisamos el punto existente, conectamos el accesorio simple y
                dejamos un acabado limpio y funcional.
              </p>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                ["Sockets", "Cambio de enchufes y tapas"],
                ["Switches", "Interruptores simples o dobles"],
                ["Lighting", "Lámparas, plafones y apliques"],
                ["Fast replies", "Respuesta rápida por WhatsApp"],
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
              icon: Plug,
              title: "Enchufes",
              text: "Sustitución de enchufes, tapas y mecanismos básicos.",
            },
            {
              icon: Lightbulb,
              title: "Iluminación",
              text: "Instalación de lámparas, plafones y apliques simples.",
            },
            {
              icon: ShieldCheck,
              title: "Trabajo cuidadoso",
              text: "Revisión del punto existente antes de conectar.",
            },
            {
              icon: Star,
              title: "Precio claro",
              text: "Presupuesto antes del trabajo según fotos y dificultad.",
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
          Montaje eléctrico básico para casas y apartamentos en Valencia
        </h2>

        <div className="mt-6 space-y-5 text-lg leading-8 text-neutral-700">
          <p>
            En THEVULGO realizamos montaje eléctrico básico en Valencia para
            casas, apartamentos, oficinas pequeñas y propiedades de alquiler.
            Este servicio está pensado para accesorios eléctricos simples:
            enchufes, interruptores, lámparas, apliques, plafones y pequeños
            mecanismos.
          </p>

          <p>
            Antes de empezar revisamos el punto existente, el accesorio, el tipo
            de conexión, la fijación y el estado visible del mecanismo. El
            objetivo es dejar un acabado ordenado, limpio y funcional.
          </p>

          <p>
            Este servicio no sustituye a una instalación eléctrica completa. Para
            trabajos complejos, cuadro eléctrico, nuevas líneas o reformas
            completas, se debe contactar a un electricista autorizado.
          </p>
        </div>
      </section>

      <section className="bg-yellow-50 py-16">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <h2 className="text-3xl font-black md:text-4xl">
            ¿Qué puede incluir este servicio?
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              "Cambio de enchufe",
              "Cambio de interruptor",
              "Instalación de lámpara",
              "Instalación de aplique",
              "Instalación de plafón",
              "Conexión de accesorio simple",
              "Organización básica de cable",
              "Comprobación de funcionamiento",
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
          Tipos de trabajos eléctricos básicos
        </h2>

        <div className="grid gap-8 md:grid-cols-4">
          {[
            {
              title: "Enchufes",
              text: "Cambio de enchufes antiguos, tapas dañadas o mecanismos desgastados.",
            },
            {
              title: "Interruptores",
              text: "Sustitución de interruptores simples, dobles o mecanismos similares.",
            },
            {
              title: "Lámparas",
              text: "Instalación o sustitución simple de luces de techo y lámparas.",
            },
            {
              title: "Apliques",
              text: "Instalación limpia de iluminación montada en pared.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-yellow-300 bg-white p-7 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400">
                <Zap className="h-8 w-8 text-black" />
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
            Desde 35€
          </p>
          <h2 className="mt-3 text-4xl font-black">
            Presupuesto para montaje eléctrico básico en Valencia
          </h2>
          <p className="mt-6 text-lg font-medium leading-8 text-neutral-900">
            El precio depende del tipo de accesorio, número de piezas, estado
            del punto existente, material necesario y dificultad. Envíanos fotos
            y te damos un precio claro.
          </p>

          <div className="mt-8 rounded-3xl border border-yellow-600/30 bg-white p-6 text-left shadow-xl">
            <h3 className="text-xl font-black">El precio depende de:</h3>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Tipo de accesorio",
                "Número de piezas",
                "Estado del punto existente",
                "Material necesario",
                "Altura o acceso",
                "Cableado visible",
                "Varios trabajos en una visita",
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
          Realizamos montaje eléctrico básico en Valencia ciudad y alrededores.
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
              title: "Cambio de enchufe",
              href: `/${locale}/cambio-enchufe-valencia`,
            },
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
              title: "Servicios handyman Valencia",
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
            ¿Necesitas montaje eléctrico básico en Valencia?
          </h2>
          <p className="mt-5 text-lg font-medium text-neutral-900">
            Envíanos fotos del accesorio, punto eléctrico y zona. Te damos un
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