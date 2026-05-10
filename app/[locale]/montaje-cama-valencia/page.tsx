import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  BedDouble,
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
      ? "Montaje de Cama en Valencia | Desde 49€ | THEVULGO"
      : "Bed Assembly in Valencia | From €49 | THEVULGO",
    description: isEs
      ? "Montaje profesional de camas en Valencia desde 49€. Camas estándar, camas IKEA, estructuras, somier, cabecero, cajones, ajuste y alineación estable."
      : "Professional bed assembly in Valencia from €49. Standard beds, IKEA beds, frames, slats, headboards, drawers, careful adjustment and stable alignment.",
    alternates: {
      canonical: `${siteUrl}/${locale}/montaje-cama-valencia`,
      languages: {
        es: `${siteUrl}/es/montaje-cama-valencia`,
      },
    },
    openGraph: {
      title: isEs
        ? "Montaje de Cama en Valencia | THEVULGO"
        : "Bed Assembly in Valencia | THEVULGO",
      description: isEs
        ? "Montaje limpio y estable de camas estándar, IKEA y estructuras flat-pack en Valencia."
        : "Clean and stable bed assembly for standard, IKEA and flat-pack bed frames in Valencia.",
      url: `${siteUrl}/${locale}/montaje-cama-valencia`,
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
    q: "¿Cuánto cuesta montar una cama en Valencia?",
    a: "El montaje de cama empieza desde 49€. El precio final depende del tipo de cama, tamaño, cajones, cabecero, somier, dificultad y si hay que desmontar una cama anterior.",
  },
  {
    q: "¿Montan camas IKEA?",
    a: "Sí. Montamos camas IKEA y camas tipo flat-pack de otras tiendas como Leroy Merlin, Amazon, JYSK, Conforama, Bauhaus y Carrefour.",
  },
  {
    q: "¿Montan camas con cajones o almacenamiento?",
    a: "Sí. Montamos camas con cajones, canapé, almacenamiento inferior, cabeceros y estructuras más complejas.",
  },
  {
    q: "¿Pueden desmontar una cama antigua?",
    a: "Sí. Podemos desmontar una cama anterior antes de montar la nueva. Si necesitas este servicio, envíanos fotos para calcular tiempo y precio.",
  },
  {
    q: "¿Tengo que tener herramientas?",
    a: "No. Llevamos herramientas profesionales. Solo necesitas tener las piezas, tornillos, instrucciones y espacio disponible para trabajar.",
  },
  {
    q: "¿Revisan que la cama quede estable?",
    a: "Sí. Revisamos la estructura, tornillos, alineación, somier, patas y estabilidad general antes de terminar.",
  },
  {
    q: "¿Cuánto tarda montar una cama?",
    a: "Una cama estándar puede tardar aproximadamente entre 45 y 90 minutos. Camas con cajones, canapé o estructuras complejas pueden tardar más.",
  },
  {
    q: "¿Trabajan fuera de Valencia ciudad?",
    a: "Sí. Trabajamos en Valencia y alrededores como Mislata, Burjassot, Paterna, Torrent, Sagunto, Cullera, Gandía y otras zonas cercanas.",
  },
];

export default async function BedAssemblyValenciaPage({ params }: PageProps) {
  const { locale } = await params;
  const isEs = locale === "es";

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, quiero un presupuesto para montaje de cama en Valencia."
      : "Hi, I would like a quote for bed assembly in Valencia."
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappText}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Montaje de Cama en Valencia",
    serviceType: "Bed assembly",
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
      price: "49",
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
      "Montaje de camas, muebles IKEA, armarios, cómodas, estanterías, muebles flat-pack y servicios handyman en Valencia.",
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
        name: "Montaje de Cama en Valencia",
        item: `${siteUrl}/${locale}/montaje-cama-valencia`,
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
              Camas estándar · IKEA · Flat-pack · Canapé · Cajones
            </div>

            <h1 className="text-4xl font-black tracking-tight md:text-6xl">
              Montaje de cama{" "}
              <span className="text-yellow-500">en Valencia</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-700">
              Montaje de cama estándar desde{" "}
              <strong className="text-neutral-950">49€</strong>, ajuste de
              estructura y alineación estable. Instalamos camas IKEA, estructuras
              flat-pack, somier, cabecero, cajones y camas con almacenamiento.
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
                "Montaje desde 49€",
                "Camas estándar e IKEA",
                "Somier, cabecero y estructura",
                "Camas con cajones",
                "Revisión de estabilidad",
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
              <BedDouble className="mb-6 h-12 w-12 text-black" />
              <p className="text-sm font-black uppercase tracking-widest">
                THEVULGO Valencia
              </p>
              <h2 className="mt-3 text-3xl font-black">
                Bed assembly. Stable. Aligned. Ready to sleep.
              </h2>
              <p className="mt-4 font-medium leading-7 text-neutral-900">
                Montamos la estructura, revisamos tornillos, alineamos piezas y
                dejamos la cama estable para uso diario.
              </p>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                ["Stable frame", "Estructura firme y alineada"],
                ["IKEA beds", "Camas IKEA y flat-pack"],
                ["Storage beds", "Cajones, canapé y almacenamiento"],
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
              text: "Estructura, somier, cabecero, cajones y accesorios.",
            },
            {
              icon: Ruler,
              title: "Alineación correcta",
              text: "Ajustamos piezas para que la cama quede recta y estable.",
            },
            {
              icon: ShieldCheck,
              title: "Estructura estable",
              text: "Revisamos tornillos, patas, soporte y firmeza final.",
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
          Montaje profesional de camas en Valencia
        </h2>

        <div className="mt-6 space-y-5 text-lg leading-8 text-neutral-700">
          <p>
            En THEVULGO realizamos montaje de camas en Valencia para pisos,
            casas, apartamentos, habitaciones de alquiler, oficinas con zona de
            descanso y propiedades turísticas. Montamos camas estándar, camas
            IKEA, estructuras flat-pack, camas con cajones, canapé, somier,
            cabeceros y camas dobles.
          </p>

          <p>
            Una cama bien montada debe quedar estable, alineada y sin movimientos
            innecesarios. Revisamos la estructura, tornillos, patas, soportes,
            somier, cabecero y piezas de unión para que el resultado sea cómodo y
            seguro para uso diario.
          </p>

          <p>
            Si tienes una cama grande, con almacenamiento, cajones o muchas
            piezas, envíanos fotos del modelo o de las cajas antes de la visita.
            Así podemos calcular mejor el tiempo, herramientas necesarias y
            presupuesto.
          </p>
        </div>
      </section>

      <section className="bg-yellow-50 py-16">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <h2 className="text-3xl font-black md:text-4xl">
            ¿Qué incluye el montaje de cama?
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              "Revisión de piezas e instrucciones",
              "Montaje de estructura principal",
              "Instalación de somier o lamas",
              "Montaje de cabecero",
              "Ajuste de tornillos y uniones",
              "Montaje de cajones si tiene",
              "Revisión de patas y soporte",
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
          Tipos de camas que montamos
        </h2>

        <div className="grid gap-8 md:grid-cols-4">
          {[
            {
              title: "Cama estándar",
              text: "Montaje de estructura básica, somier, patas y cabecero.",
            },
            {
              title: "Cama IKEA",
              text: "Montaje de camas flat-pack, piezas, lamas, cajones y accesorios.",
            },
            {
              title: "Cama con cajones",
              text: "Instalación de guías, cajones, almacenamiento y ajuste final.",
            },
            {
              title: "Canapé o almacenamiento",
              text: "Montaje de estructura con espacio inferior y revisión de estabilidad.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-yellow-300 bg-white p-7 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400">
                <BedDouble className="h-8 w-8 text-black" />
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
            Desde 49€
          </p>
          <h2 className="mt-3 text-4xl font-black">
            Presupuesto para montar cama en Valencia
          </h2>
          <p className="mt-6 text-lg font-medium leading-8 text-neutral-900">
            El precio depende del tipo de cama, tamaño, número de piezas,
            cajones, cabecero, desmontaje previo y dificultad. Envíanos fotos o
            modelo y te damos un precio claro.
          </p>

          <div className="mt-8 rounded-3xl border border-yellow-600/30 bg-white p-6 text-left shadow-xl">
            <h3 className="text-xl font-black">El precio depende de:</h3>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Tipo de cama",
                "Tamaño de la estructura",
                "Somier o lamas",
                "Cabecero incluido",
                "Cajones o almacenamiento",
                "Canapé",
                "Desmontaje previo",
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
          Realizamos montaje de camas en Valencia ciudad y alrededores. Si estás
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
              title: "Montaje de muebles IKEA",
              href: `/${locale}/montaje-muebles-ikea-valencia`,
            },
            {
              title: "Montaje de armario",
              href: `/${locale}/montaje-armario-valencia`,
            },
            {
              title: "Montaje de muebles en Valencia",
              href: `/${locale}/montaje-muebles-valencia`,
            },
            {
              title: "Instalación de estanterías",
              href: `/${locale}/instalacion-estanterias-valencia`,
            },
            {
              title: "Montaje de TV en Valencia",
              href: `/${locale}/montaje-tv-valencia`,
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
            ¿Quieres montar una cama en Valencia?
          </h2>
          <p className="mt-5 text-lg font-medium text-neutral-900">
            Envíanos fotos de la cama, cajas o modelo. Te damos un presupuesto
            claro antes de empezar.
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