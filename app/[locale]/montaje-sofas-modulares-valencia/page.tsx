import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  Sofa,
  ShieldCheck,
  Wrench,
  Home,
  HelpCircle,
  MapPin,
  Star,
  Ruler,
  PackageCheck,
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
      ? "Montaje de Sofás Modulares en Valencia | Desde 39€ | THEVULGO"
      : "Modular Sofa Assembly in Valencia | From €39 | THEVULGO",
    description: isEs
      ? "Montaje simple de sofás y piezas modulares en Valencia desde 39€. Unión de módulos, patas, chaise longue, ajuste de piezas y posición estable."
      : "Simple sofa and modular piece assembly in Valencia from €39. Module connection, legs, chaise longue, piece adjustment and stable positioning.",
    alternates: {
      canonical: `${siteUrl}/${locale}/montaje-sofas-modulares-valencia`,
      languages: {
        es: `${siteUrl}/es/montaje-sofas-modulares-valencia`,
      },
    },
    openGraph: {
      title: isEs
        ? "Montaje de Sofás y Piezas Modulares en Valencia | THEVULGO"
        : "Sofa & Modular Piece Assembly in Valencia | THEVULGO",
      description: isEs
        ? "Montaje simple de sofás, chaise longue y piezas modulares en Valencia."
        : "Simple assembly of sofas, chaise longue and modular pieces in Valencia.",
      url: `${siteUrl}/${locale}/montaje-sofas-modulares-valencia`,
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
    q: "¿Cuánto cuesta montar un sofá modular en Valencia?",
    a: "El montaje simple de sofás y piezas modulares empieza desde 39€. El precio final depende del número de módulos, patas, conectores, chaise longue, tamaño y dificultad.",
  },
  {
    q: "¿Montan sofás IKEA?",
    a: "Sí. Montamos sofás y piezas modulares IKEA cuando el sistema lo permite, además de sofás de otras tiendas como Amazon, Conforama, JYSK, Leroy Merlin o Carrefour.",
  },
  {
    q: "¿Pueden unir módulos de sofá?",
    a: "Sí. Podemos unir módulos, revisar conectores, colocar patas, ajustar piezas y dejar el sofá en una posición estable.",
  },
  {
    q: "¿Montan chaise longue?",
    a: "Sí. Montamos chaise longue y sofás modulares con extensión lateral, siempre que las piezas y conectores estén completos.",
  },
  {
    q: "¿Pueden mover el sofá dentro de la habitación?",
    a: "Podemos ayudar a posicionar el sofá dentro del espacio si el acceso lo permite. Para movimientos pesados o plantas sin ascensor, conviene avisar antes.",
  },
  {
    q: "¿Tengo que tener herramientas?",
    a: "No. Llevamos herramientas profesionales. Solo necesitas tener las piezas, patas, conectores, tornillos e instrucciones disponibles.",
  },
  {
    q: "¿Cuánto tarda montar un sofá modular?",
    a: "Un montaje simple puede tardar entre 30 y 60 minutos. Sofás grandes, varios módulos o piezas pesadas pueden tardar más.",
  },
  {
    q: "¿Trabajan fuera de Valencia ciudad?",
    a: "Sí. Trabajamos en Valencia y alrededores como Mislata, Burjassot, Paterna, Torrent, Sagunto, Cullera, Gandía y otras zonas cercanas.",
  },
];

export default async function ModularSofaAssemblyValenciaPage({
  params,
}: PageProps) {
  const { locale } = await params;
  const isEs = locale === "es";

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, quiero un presupuesto para montaje de sofá modular en Valencia."
      : "Hi, I would like a quote for modular sofa assembly in Valencia."
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappText}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Montaje de Sofás y Piezas Modulares en Valencia",
    serviceType: "Sofa and modular furniture assembly",
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
      "Montaje de sofás modulares, muebles IKEA, camas, armarios, estanterías, mesas, muebles auxiliares y servicios handyman en Valencia.",
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
        name: "Montaje de Sofás Modulares en Valencia",
        item: `${siteUrl}/${locale}/montaje-sofas-modulares-valencia`,
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
              Sofás · Módulos · Chaise longue · IKEA · Salón
            </div>

            <h1 className="text-4xl font-black tracking-tight md:text-6xl">
              Montaje de sofás y piezas modulares{" "}
              <span className="text-yellow-500">en Valencia</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-700">
              Montaje simple de sofás y piezas modulares desde{" "}
              <strong className="text-neutral-950">39€</strong>, cuando el
              sistema lo permite. Unión de módulos, patas, conectores, chaise
              longue y posición estable para el uso diario.
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
                "Sofás modulares",
                "Chaise longue",
                "Unión de módulos",
                "Patas y conectores",
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
              <Sofa className="mb-6 h-12 w-12 text-black" />
              <p className="text-sm font-black uppercase tracking-widest">
                THEVULGO Valencia
              </p>
              <h2 className="mt-3 text-3xl font-black">
                Modular sofa assembly. Connected. Stable. Ready to use.
              </h2>
              <p className="mt-4 font-medium leading-7 text-neutral-900">
                Unimos módulos, instalamos patas, revisamos conectores y dejamos
                el sofá correctamente colocado en la habitación.
              </p>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                ["Modular sofas", "Sofás por módulos y piezas"],
                ["Chaise longue", "Extensión lateral y ajuste"],
                ["Connectors", "Patas, uniones y clips"],
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
              title: "Montaje simple",
              text: "Módulos, patas, conectores, clips y piezas principales.",
            },
            {
              icon: Ruler,
              title: "Posición correcta",
              text: "Ajustamos módulos para que el sofá quede alineado.",
            },
            {
              icon: ShieldCheck,
              title: "Uso diario estable",
              text: "Revisamos uniones, patas y estabilidad final.",
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
          Montaje profesional de sofás modulares en Valencia
        </h2>

        <div className="mt-6 space-y-5 text-lg leading-8 text-neutral-700">
          <p>
            En THEVULGO realizamos montaje simple de sofás y piezas modulares en
            Valencia para salones, apartamentos, casas, oficinas, zonas de espera
            y propiedades de alquiler. Montamos sofás por módulos, chaise longue,
            piezas laterales, patas, conectores y sistemas sencillos cuando el
            diseño del sofá lo permite.
          </p>

          <p>
            Aunque muchos sofás parecen sencillos, una mala unión de módulos,
            patas mal apretadas o piezas desalineadas pueden hacer que el sofá se
            mueva, se separe o quede incómodo. Revisamos las uniones, clips,
            tornillos, patas y posición final para dejar una instalación estable.
          </p>

          <p>
            Si el sofá es grande, pesado o tiene un sistema especial, envíanos
            fotos de las piezas, instrucciones o modelo antes de la visita. Así
            podemos confirmar si el montaje es posible y darte un presupuesto
            claro.
          </p>
        </div>
      </section>

      <section className="bg-yellow-50 py-16">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <h2 className="text-3xl font-black md:text-4xl">
            ¿Qué incluye el montaje de sofás modulares?
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              "Revisión de piezas e instrucciones",
              "Montaje de patas",
              "Unión de módulos",
              "Instalación de conectores o clips",
              "Ajuste de chaise longue",
              "Alineación de piezas",
              "Posición final en la habitación",
              "Comprobación de estabilidad",
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
          Tipos de sofás y piezas que montamos
        </h2>

        <div className="grid gap-8 md:grid-cols-4">
          {[
            {
              title: "Sofás modulares",
              text: "Unión de piezas, módulos laterales, centrales y esquinas.",
            },
            {
              title: "Chaise longue",
              text: "Montaje y ajuste de extensión lateral cuando el sistema lo permite.",
            },
            {
              title: "Sofás IKEA",
              text: "Montaje simple de sofás flat-pack y sistemas modulares comunes.",
            },
            {
              title: "Zonas de espera",
              text: "Sofás para oficina, recepción, bar, café o apartamento turístico.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-yellow-300 bg-white p-7 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400">
                <PackageCheck className="h-8 w-8 text-black" />
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
            Presupuesto para montar sofá modular en Valencia
          </h2>
          <p className="mt-6 text-lg font-medium leading-8 text-neutral-900">
            El precio depende del número de módulos, patas, conectores, tamaño,
            peso, acceso, dificultad y si hace falta mover o posicionar varias
            piezas. Envíanos fotos o modelo y te damos un precio claro.
          </p>

          <div className="mt-8 rounded-3xl border border-yellow-600/30 bg-white p-6 text-left shadow-xl">
            <h3 className="text-xl font-black">El precio depende de:</h3>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Número de módulos",
                "Tipo de sofá",
                "Chaise longue",
                "Patas y conectores",
                "Tamaño y peso",
                "Acceso al espacio",
                "Posicionamiento final",
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
          Realizamos montaje de sofás y piezas modulares en Valencia ciudad y
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
              title: "Montaje de muebles IKEA",
              href: `/${locale}/montaje-muebles-ikea-valencia`,
            },
            {
              title: "Montaje de cama",
              href: `/${locale}/montaje-cama-valencia`,
            },
            {
              title: "Montaje de mesas de comedor",
              href: `/${locale}/montaje-mesas-comedor-valencia`,
            },
            {
              title: "Montaje de aparadores",
              href: `/${locale}/montaje-aparadores-muebles-auxiliares-valencia`,
            },
            {
              title: "Montaje de muebles TV",
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
            ¿Quieres montar un sofá modular en Valencia?
          </h2>
          <p className="mt-5 text-lg font-medium text-neutral-900">
            Envíanos fotos del sofá, piezas, conectores o modelo. Te damos un
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