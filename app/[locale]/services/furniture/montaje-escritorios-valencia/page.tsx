import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  BriefcaseBusiness,
  ShieldCheck,
  Wrench,
  Home,
  HelpCircle,
  MapPin,
  Star,
  Ruler,
  Cable,
  Monitor,
} from "lucide-react";

type PageProps = {
  params: Promise<{ locale: string }>;
};

const siteUrl = "https://www.thevulgo.es";
const phoneNumber = "34610076942";

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";

  return {
    title: isEs
      ? "Montaje de Escritorios en Valencia | Desde 39€ | THEVULGO"
      : "Desk & Home Office Assembly in Valencia | From €39 | THEVULGO",
    description: isEs
      ? "Montaje de escritorios, mesas de trabajo y zonas compactas de oficina en casa en Valencia desde 39€. Alineación, estabilidad y organización básica de cables."
      : "Desk, work table and compact home office assembly in Valencia from €39. Careful alignment, stable setup and basic cable organization.",
    alternates: {
      canonical: `${siteUrl}/${locale}/montaje-escritorios-valencia`,
      languages: {
        es: `${siteUrl}/es/montaje-escritorios-valencia`,
      },
    },
    openGraph: {
      title: isEs
        ? "Montaje de Escritorios en Valencia | THEVULGO"
        : "Desk & Home Office Assembly in Valencia | THEVULGO",
      description: isEs
        ? "Montaje limpio de escritorios, mesas de trabajo y zonas de oficina en casa en Valencia."
        : "Clean assembly of desks, work tables and home office setups in Valencia.",
      url: `${siteUrl}/${locale}/montaje-escritorios-valencia`,
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
    q: "¿Cuánto cuesta montar un escritorio en Valencia?",
    a: "El montaje de escritorios empieza desde 39€. El precio final depende del tamaño, número de piezas, cajones, patas, estantes, dificultad y si hay que organizar cables o montar accesorios.",
  },
  {
    q: "¿Montan escritorios IKEA?",
    a: "Sí. Montamos escritorios IKEA y mesas de trabajo de Leroy Merlin, Amazon, JYSK, Conforama, Bauhaus, Carrefour y otras tiendas.",
  },
  {
    q: "¿Pueden montar una zona de oficina en casa?",
    a: "Sí. Podemos montar escritorio, mesa, estantería, soporte de monitor, cajonera, organización de cables y una zona compacta de trabajo.",
  },
  {
    q: "¿Pueden organizar cables del escritorio?",
    a: "Sí. Podemos ayudar con organización básica de cables, regletas, monitor, cargadores, router, ordenador y canaleta si hace falta.",
  },
  {
    q: "¿Montan mesas de trabajo grandes?",
    a: "Sí. Montamos mesas pequeñas, medianas y grandes, revisando estabilidad, patas, estructura y nivelación.",
  },
  {
    q: "¿Tengo que tener herramientas?",
    a: "No. Llevamos herramientas profesionales. Solo necesitas tener piezas, tornillos, accesorios e instrucciones disponibles.",
  },
  {
    q: "¿Cuánto tarda montar un escritorio?",
    a: "Un escritorio sencillo puede tardar entre 30 y 60 minutos. Escritorios grandes, con cajones o varios accesorios pueden tardar más.",
  },
  {
    q: "¿Trabajan fuera de Valencia ciudad?",
    a: "Sí. Trabajamos en Valencia y alrededores como Mislata, Burjassot, Paterna, Torrent, Sagunto, Cullera, Gandía y otras zonas cercanas.",
  },
];

export default async function DeskAssemblyValenciaPage({ params }: PageProps) {
  const { locale } = await params;
  const isEs = locale === "es";

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, quiero un presupuesto para montaje de escritorio o zona de trabajo en Valencia."
      : "Hi, I would like a quote for desk or home office assembly in Valencia."
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappText}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Montaje de Escritorios y Zonas de Trabajo en Valencia",
    serviceType: "Desk and home office assembly",
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
      "Montaje de escritorios, mesas de trabajo, zonas de oficina en casa, muebles IKEA, estanterías, cajoneras y servicios handyman en Valencia.",
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
        name: "Montaje de Escritorios en Valencia",
        item: `${siteUrl}/${locale}/montaje-escritorios-valencia`,
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
              Escritorios · Oficina en casa · Mesas de trabajo · Cables
            </div>

            <h1 className="text-4xl font-black tracking-tight md:text-6xl">
              Montaje de escritorios{" "}
              <span className="text-yellow-500">en Valencia</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-700">
              Montaje de escritorios, mesas de trabajo y zonas compactas de
              oficina en casa desde{" "}
              <strong className="text-neutral-950">39€</strong>. Alineación
              correcta, estructura estable y organización básica de cables para
              trabajar cómodo.
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
                "Montaje desde 39€",
                "Escritorios y mesas de trabajo",
                "Oficina en casa",
                "Cajoneras y accesorios",
                "Organización básica de cables",
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
              <BriefcaseBusiness className="mb-6 h-12 w-12 text-black" />
              <p className="text-sm font-black uppercase tracking-widest">
                THEVULGO Valencia
              </p>
              <h2 className="mt-3 text-3xl font-black">
                Home office setup. Clean. Stable. Ready to work.
              </h2>
              <p className="mt-4 font-medium leading-7 text-neutral-900">
                Montamos el escritorio, revisamos estabilidad, alineamos piezas y
                dejamos la zona preparada para monitor, ordenador y cables.
              </p>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                ["Desk assembly", "Escritorios y mesas de trabajo"],
                ["Home office", "Zonas compactas de oficina en casa"],
                ["Cable setup", "Monitor, regleta, router y cargadores"],
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
              icon: Wrench,
              title: "Montaje completo",
              text: "Estructura, tablero, patas, cajones, estantes y accesorios.",
            },
            {
              icon: Ruler,
              title: "Alineación correcta",
              text: "Revisamos nivelación, estabilidad y posición final.",
            },
            {
              icon: Cable,
              title: "Cables organizados",
              text: "Ayuda con monitor, regleta, cargadores, router y escritorio.",
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
          Montaje profesional de escritorios y zonas de trabajo en Valencia
        </h2>

        <div className="mt-6 space-y-5 text-lg leading-8 text-neutral-700">
          <p>
            En THEVULGO realizamos montaje de escritorios en Valencia para pisos,
            casas, oficinas, habitaciones, estudios y espacios de teletrabajo.
            Montamos mesas de trabajo, escritorios compactos, escritorios IKEA,
            mesas con cajones, soportes, estanterías pequeñas y zonas de oficina
            en casa.
          </p>

          <p>
            Un escritorio debe quedar estable, recto y cómodo para uso diario.
            Revisamos estructura, patas, tablero, tornillos, cajones, nivelación
            y posición final para que puedas trabajar con monitor, portátil,
            teclado, silla y accesorios sin movimientos incómodos.
          </p>

          <p>
            También podemos ayudarte con organización básica de cables, regletas,
            cargadores, router, soportes de monitor, cajoneras, estanterías y
            pequeños ajustes para dejar una zona de trabajo más limpia y
            funcional.
          </p>
        </div>
      </section>

      <section className="bg-yellow-50 py-16">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <h2 className="text-3xl font-black md:text-4xl">
            ¿Qué incluye el montaje de escritorio?
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              "Revisión de piezas e instrucciones",
              "Montaje de estructura principal",
              "Instalación de patas y tablero",
              "Montaje de cajones si tiene",
              "Ajuste de estantes y accesorios",
              "Revisión de nivelación",
              "Organización básica de cables",
              "Comprobación final de estabilidad",
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
          Tipos de escritorios que montamos
        </h2>

        <div className="grid gap-8 md:grid-cols-4">
          {[
            {
              title: "Escritorios IKEA",
              text: "Montaje de escritorios flat-pack, patas, cajones y accesorios.",
            },
            {
              title: "Mesas de trabajo",
              text: "Mesas para estudio, oficina, ordenador, portátil o trabajo manual.",
            },
            {
              title: "Oficina en casa",
              text: "Escritorio, cajonera, estantería, monitor y organización básica.",
            },
            {
              title: "Setup multimedia",
              text: "Zona con monitor, cables, regleta, router y accesorios de trabajo.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-yellow-300 bg-white p-7 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400">
                <Monitor className="h-8 w-8 text-black" />
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
            Desde 39€
          </p>
          <h2 className="mt-3 text-4xl font-black">
            Presupuesto para montar escritorio en Valencia
          </h2>
          <p className="mt-6 text-lg font-medium leading-8 text-neutral-900">
            El precio depende del tamaño, número de piezas, cajones, accesorios,
            cableado, dificultad y si hay varios muebles en una visita. Envíanos
            fotos o modelo y te damos un precio claro.
          </p>

          <div className="mt-8 rounded-3xl border border-yellow-600/30 bg-white p-6 text-left shadow-xl">
            <h3 className="text-xl font-black">El precio depende de:</h3>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Tipo de escritorio",
                "Tamaño del tablero",
                "Patas y estructura",
                "Cajones o estantes",
                "Soporte de monitor",
                "Organización de cables",
                "Varios muebles",
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
          Realizamos montaje de escritorios y zonas de trabajo en Valencia ciudad
          y alrededores. Si estás fuera de Valencia, envíanos tu dirección y te
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
              title: "Montaje de muebles IKEA",
              href: `/${locale}/montaje-muebles-ikea-valencia`,
            },
            {
              title: "Montaje de cómodas y cajoneras",
              href: `/${locale}/montaje-comodas-cajoneras-valencia`,
            },
            {
              title: "Montaje de estanterías",
              href: `/${locale}/montaje-estanterias-valencia`,
            },
            {
              title: "Ocultar cables en Valencia",
              href: `/${locale}/ocultar-cables-valencia`,
            },
            {
              title: "Montaje de muebles TV y multimedia",
              href: `/${locale}/montaje-muebles-tv-multimedia-valencia`,
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
            ¿Quieres montar un escritorio en Valencia?
          </h2>
          <p className="mt-5 text-lg font-medium text-neutral-900">
            Envíanos fotos del escritorio, cajas, modelo y zona de trabajo. Te
            damos un presupuesto claro antes de empezar.
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