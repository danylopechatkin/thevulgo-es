import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  Bath,
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
const pagePath = "/services/bathroom/cabinet-door-alignment";

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";

  return {
    title: isEs
      ? "Ajuste de Puertas de Mueble de Baño | Desde 29€ | THEVULGO"
      : "Bathroom Cabinet Door Alignment | From €29 | THEVULGO",
    description: isEs
      ? "Ajuste de puertas de muebles de baño desde 29€. Mejora de simetría, cierre, bisagras y línea visual del mueble para un acabado más limpio."
      : "Bathroom cabinet door alignment from €29. Adjustment of cabinet doors to improve symmetry, closing feel and the visual line of bathroom furniture.",
    alternates: {
      canonical: `${siteUrl}/${locale}${pagePath}`,
      languages: {
        es: `${siteUrl}/es${pagePath}`,
        en: `${siteUrl}/en${pagePath}`,
      },
    },
    openGraph: {
      title: isEs
        ? "Ajuste de Puertas de Mueble de Baño | THEVULGO"
        : "Bathroom Cabinet Door Alignment | THEVULGO",
      description: isEs
        ? "Ajuste de puertas, bisagras y líneas visuales en muebles de baño."
        : "Cabinet door, hinge and visual line adjustment for bathroom furniture.",
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
    q: "¿Cuánto cuesta ajustar puertas de mueble de baño?",
    a: "El ajuste de puertas de mueble de baño empieza desde 29€. El precio depende del número de puertas, tipo de bisagra, estado del mueble, acceso y dificultad del ajuste.",
  },
  {
    q: "¿Pueden ajustar puertas que no cierran bien?",
    a: "Sí. Podemos ajustar puertas que rozan, quedan torcidas, no cierran bien o tienen una línea visual desigual.",
  },
  {
    q: "¿Ajustan bisagras de muebles de baño?",
    a: "Sí. Podemos hacer ajustes básicos de bisagras compatibles para mejorar la apertura, cierre y alineación de las puertas.",
  },
  {
    q: "¿Pueden ajustar cajones también?",
    a: "Sí. Si el sistema lo permite, podemos revisar cajones, guías y pequeños desajustes visibles del mueble.",
  },
  {
    q: "¿Necesito comprar piezas nuevas?",
    a: "Normalmente no, si solo hace falta ajuste. Si la bisagra está rota o dañada, puede ser necesario comprar una pieza compatible.",
  },
  {
    q: "¿Pueden ajustar varios muebles en una visita?",
    a: "Sí. Podemos ajustar puertas de varios muebles, armarios, vanity units, cajones y pequeños herrajes en una sola visita.",
  },
  {
    q: "¿Qué necesito enviar para pedir presupuesto?",
    a: "Envíanos fotos del mueble, puertas abiertas y cerradas, bisagras, zona que roza o queda torcida y un vídeo corto mostrando el problema.",
  },
  {
    q: "¿Trabajan fuera de Valencia ciudad?",
    a: "Sí. Trabajamos en Valencia y alrededores como Mislata, Burjassot, Paterna, Torrent, Sagunto, Cullera, Gandía y otras zonas cercanas.",
  },
];

export default async function CabinetDoorAlignmentPage({ params }: PageProps) {
  const { locale } = await params;
  const isEs = locale === "es";

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, quiero un presupuesto para ajuste de puertas de mueble de baño."
      : "Hi, I would like a quote for bathroom cabinet door alignment."
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappText}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: isEs
      ? "Ajuste de Puertas de Mueble de Baño"
      : "Bathroom Cabinet Door Alignment",
    serviceType: "Bathroom cabinet door alignment",
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
      "Ajuste de puertas de muebles de baño, bisagras, cajones, vanity units, muebles, accesorios y servicios handyman en Valencia.",
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
        name: "Bathroom",
        item: `${siteUrl}/${locale}/services/bathroom`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: isEs
          ? "Ajuste de Puertas de Mueble de Baño"
          : "Bathroom Cabinet Door Alignment",
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
              Puertas, bisagras y muebles de baño mejor alineados
            </div>

            <h1 className="text-4xl font-black tracking-tight md:text-6xl">
              Ajuste de puertas de mueble de baño
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-700">
              Ajuste de puertas de muebles de baño para mejorar la simetría, el
              cierre, la sensación de uso y la línea visual del mueble.
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
                "Puertas desalineadas",
                "Ajuste de bisagras",
                "Mejor cierre",
                "Línea visual más limpia",
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
              <Bath className="mb-6 h-12 w-12 text-black" />
              <p className="text-sm font-black uppercase tracking-widest">
                THEVULGO Valencia
              </p>
              <h2 className="mt-3 text-3xl font-black">
                Cabinet door alignment. Better symmetry. Cleaner furniture line.
              </h2>
              <p className="mt-4 font-medium leading-7 text-neutral-900">
                Revisamos las bisagras, ajustamos la posición y mejoramos el
                cierre para que el mueble se vea más limpio y equilibrado.
              </p>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                ["Better symmetry", "Puertas más alineadas"],
                ["Closing feel", "Cierre más cómodo"],
                ["Hinge adjustment", "Ajuste básico de bisagras"],
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
              title: "Ajuste cuidado",
              text: "Revisamos bisagras, puertas, tornillos y estructura antes de ajustar.",
            },
            {
              icon: Wrench,
              title: "Mejor cierre",
              text: "Corregimos pequeños desajustes para mejorar la sensación de cierre.",
            },
            {
              icon: Ruler,
              title: "Línea visual limpia",
              text: "Buscamos una separación más uniforme y una simetría más ordenada.",
            },
            {
              icon: Star,
              title: "Precio claro",
              text: "Desde 29€. Presupuesto según fotos, puertas y dificultad.",
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
          Ajuste de puertas y bisagras en muebles de baño
        </h2>

        <div className="mt-6 space-y-5 text-lg leading-8 text-neutral-700">
          <p>
            En THEVULGO realizamos ajuste de puertas de muebles de baño,
            armarios, vanity units, muebles bajo lavabo y unidades de almacenaje
            que han quedado torcidas, desalineadas o con mal cierre.
          </p>

          <p>
            Antes de ajustar revisamos las bisagras, tornillos, separación entre
            puertas, línea visual, apertura, cierre y estado general del mueble.
            Esto ayuda a mejorar la simetría y el uso diario sin necesidad de
            cambiar todo el mueble.
          </p>

          <p>
            Este servicio es ideal para baños nuevos, muebles instalados hace
            tiempo, pisos de alquiler, Airbnb, muebles IKEA o Leroy Merlin y
            pequeños ajustes finales después de una instalación.
          </p>
        </div>
      </section>

      <section className="bg-yellow-50 py-16">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <h2 className="text-3xl font-black md:text-4xl">
            ¿Qué incluye el ajuste?
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              "Revisión de puertas y bisagras",
              "Comprobación de tornillos",
              "Ajuste básico de altura",
              "Ajuste lateral de puertas",
              "Mejora de separación visual",
              "Corrección del cierre",
              "Revisión de cajones si procede",
              "Comprobación final de uso",
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
          Problemas que podemos corregir
        </h2>

        <div className="grid gap-8 md:grid-cols-4">
          {[
            {
              title: "Puertas torcidas",
              text: "Ajuste de puertas que quedan inclinadas o visualmente desiguales.",
            },
            {
              title: "Cierre incómodo",
              text: "Mejora del cierre cuando la puerta no encaja o roza ligeramente.",
            },
            {
              title: "Bisagras desajustadas",
              text: "Corrección básica de bisagras compatibles y tornillos visibles.",
            },
            {
              title: "Líneas desiguales",
              text: "Ajuste de separaciones para que el mueble se vea más simétrico.",
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
          ¿Dónde se puede hacer este ajuste?
        </h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {[
            "Mueble bajo lavabo",
            "Armario con espejo",
            "Mueble auxiliar de baño",
            "Vanity unit",
            "Baño de alquiler",
            "Mueble recién instalado",
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
          Si la puerta está rota, la bisagra está partida o falta una pieza,
          puede ser necesario comprar recambio. Envíanos fotos para revisar si
          es ajuste simple o reparación con pieza nueva.
        </p>
      </section>

      <section className="bg-yellow-400 py-16 text-black">
        <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
          <p className="text-sm font-black uppercase tracking-widest">
            Desde 29€
          </p>
          <h2 className="mt-3 text-4xl font-black">
            Precio para ajustar puertas de mueble de baño
          </h2>
          <p className="mt-6 text-lg font-medium leading-8 text-neutral-900">
            El precio depende del número de puertas, tipo de bisagra, estado del
            mueble, acceso, cajones y dificultad del ajuste. Envíanos fotos y te
            damos un presupuesto claro antes de empezar.
          </p>

          <div className="mt-8 rounded-3xl border border-yellow-600/30 bg-white p-6 text-left shadow-xl">
            <h3 className="text-xl font-black">El precio depende de:</h3>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Número de puertas",
                "Tipo de bisagra",
                "Estado del mueble",
                "Puertas o cajones",
                "Nivel de desajuste",
                "Piezas necesarias",
                "Tiempo de ajuste",
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
          Realizamos ajuste de puertas de muebles de baño en Valencia ciudad y
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
              title: "Servicios de baño",
              href: `/${locale}/services/bathroom`,
            },
            {
              title: "Instalación de mueble de baño",
              href: `/${locale}/services/bathroom/cabinet-installation`,
            },
            {
              title: "Instalación de mueble bajo lavabo",
              href: `/${locale}/services/bathroom/vanity-unit-installation`,
            },
            {
              title: "Instalación de armario con espejo",
              href: `/${locale}/services/bathroom/mirror-cabinet-fitting`,
            },
            {
              title: "Instalación de accesorios de baño",
              href: `/${locale}/services/bathroom/accessory-installation`,
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
            ¿Quieres ajustar puertas de un mueble de baño?
          </h2>
          <p className="mt-5 text-lg font-medium text-neutral-900">
            Envíanos fotos del mueble, puertas, bisagras y un vídeo corto del
            problema. Te damos un presupuesto claro antes de empezar.
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