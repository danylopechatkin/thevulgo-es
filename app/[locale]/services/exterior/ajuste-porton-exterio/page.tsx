import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  Fence,
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
const pagePath = "/services/exterior/ajuste-porton-exterior";

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";

  return {
    title: isEs
      ? "Ajuste de Portón Exterior | Desde 49€ | THEVULGO"
      : "Gate Alignment | From €49 | THEVULGO",
    description: isEs
      ? "Ajuste de portones exteriores desde 49€. Corrección básica de portones, cancelas y accesos exteriores para mejorar apertura, cierre y uso diario."
      : "Gate alignment from €49. Basic correction of gates and outdoor access elements to improve opening, closing and practical daily use.",
    alternates: {
      canonical: `${siteUrl}/${locale}${pagePath}`,
      languages: {
        es: `${siteUrl}/es${pagePath}`,
        en: `${siteUrl}/en${pagePath}`,
      },
    },
    openGraph: {
      title: isEs
        ? "Ajuste de Portón Exterior | THEVULGO"
        : "Gate Alignment | THEVULGO",
      description: isEs
        ? "Corrección práctica de portones, cancelas y accesos exteriores."
        : "Practical correction of gates and outdoor access elements.",
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
    q: "¿Cuánto cuesta ajustar un portón exterior?",
    a: "El ajuste de portón exterior empieza desde 49€. El precio depende del tipo de portón, estado, bisagras, fijaciones, acceso, nivel de desalineación y dificultad.",
  },
  {
    q: "¿Pueden ajustar una cancela que no cierra bien?",
    a: "Sí. Podemos revisar cancelas y portones exteriores que no cierran bien, rozan, quedan desalineados o necesitan mejor movimiento.",
  },
  {
    q: "¿Qué tipo de portones pueden revisar?",
    a: "Podemos revisar portones sencillos, cancelas, accesos exteriores y elementos visibles cuando el trabajo es seguro, accesible y adecuado para una corrección práctica.",
  },
  {
    q: "¿Pueden arreglar un portón que roza?",
    a: "Sí. Podemos revisar bisagras, fijaciones, punto de roce y alineación para valorar si se puede mejorar con un ajuste básico.",
  },
  {
    q: "¿Hacen instalación completa de portones nuevos?",
    a: "Esta página está enfocada en ajuste y corrección de portones existentes, no en instalación completa de portones grandes o trabajos estructurales.",
  },
  {
    q: "¿Necesito comprar piezas antes?",
    a: "Depende del caso. Si falta una bisagra, tornillo, soporte o pieza compatible, puede ser necesario comprarla antes o después de revisar el problema.",
  },
  {
    q: "¿Pueden hacer varias tareas exteriores en una visita?",
    a: "Sí. Podemos combinar ajuste de portón con reparación de vallas, fijaciones, soportes, sellado, montaje exterior o pequeños herrajes.",
  },
  {
    q: "¿Qué necesito enviar para pedir presupuesto?",
    a: "Envíanos fotos del portón completo, bisagras, cierre, zona donde roza o falla y un vídeo corto abriendo y cerrando.",
  },
];

export default async function AjustePortonExteriorPage({
  params,
}: PageProps) {
  const { locale } = await params;
  const isEs = locale === "es";

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, quiero un presupuesto para ajuste de portón exterior."
      : "Hi, I would like a quote for gate alignment."
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappText}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: isEs ? "Ajuste de Portón Exterior" : "Gate Alignment",
    serviceType: "Gate alignment",
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
      "Ajuste de portones exteriores, cancelas, accesos exteriores, vallas, bisagras, fijaciones, herrajes exteriores y servicios handyman en Valencia.",
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
        name: "Exterior",
        item: `${siteUrl}/${locale}/services/exterior`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: isEs ? "Ajuste de Portón Exterior" : "Gate Alignment",
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
              Portones, cancelas y accesos exteriores en Valencia
            </div>

            <h1 className="text-4xl font-black tracking-tight md:text-6xl">
              Ajuste de portón exterior
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-700">
              Corrección básica de portones, cancelas y elementos de acceso
              exterior para mejorar apertura, cierre, alineación y uso diario de
              forma más práctica y cómoda.
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
                "Desde 49€",
                "Portón desalineado",
                "Cancela que roza",
                "Mejor apertura y cierre",
                "Corrección práctica",
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
              <Fence className="mb-6 h-12 w-12 text-black" />
              <p className="text-sm font-black uppercase tracking-widest">
                THEVULGO Valencia
              </p>
              <h2 className="mt-3 text-3xl font-black">
                Gate alignment. Better movement. Easier daily access.
              </h2>
              <p className="mt-4 font-medium leading-7 text-neutral-900">
                Revisamos bisagras, cierre, puntos de roce y alineación para
                mejorar el uso diario del acceso exterior.
              </p>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                ["Better opening", "Apertura más cómoda"],
                ["Cleaner closing", "Cierre más práctico"],
                ["Outdoor access", "Portones y cancelas exteriores"],
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
              title: "Corrección segura",
              text: "Revisamos si el portón puede mejorar con un ajuste básico y accesible.",
            },
            {
              icon: Wrench,
              title: "Ajuste práctico",
              text: "Comprobamos bisagras, fijaciones, cierre y puntos de roce visibles.",
            },
            {
              icon: Ruler,
              title: "Mejor alineación",
              text: "Buscamos que el portón abra y cierre con menos esfuerzo.",
            },
            {
              icon: Star,
              title: "Precio claro",
              text: "Desde 49€. Presupuesto según fotos, vídeo y dificultad.",
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
          Ajuste de portones y cancelas exteriores
        </h2>

        <div className="mt-6 space-y-5 text-lg leading-8 text-neutral-700">
          <p>
            En THEVULGO realizamos ajuste de portones exteriores y cancelas en
            Valencia para viviendas, patios, terrazas, entradas, accesos
            exteriores y propiedades de alquiler donde el cierre o la apertura ya
            no funcionan de forma cómoda.
          </p>

          <p>
            Antes de ajustar revisamos bisagras, fijaciones, marco, cierre,
            holguras, puntos de roce, nivel de desalineación y estabilidad. Esto
            ayuda a saber si el problema se puede corregir con un ajuste básico
            o si hacen falta piezas nuevas.
          </p>

          <p>
            También podemos combinar este trabajo con reparación de vallas,
            montaje exterior, fijación de soportes, sellado exterior, buzones,
            números de casa o pequeños trabajos de herrajes exteriores.
          </p>
        </div>
      </section>

      <section className="bg-yellow-50 py-16">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <h2 className="text-3xl font-black md:text-4xl">
            ¿Qué incluye el ajuste de portón?
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              "Revisión del portón o cancela",
              "Comprobación de bisagras",
              "Revisión de fijaciones visibles",
              "Detección de puntos de roce",
              "Comprobación del cierre",
              "Ajuste básico si es posible",
              "Prueba de apertura y cierre",
              "Recomendación si hacen falta piezas",
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
          Problemas de portón que podemos revisar
        </h2>

        <div className="grid gap-8 md:grid-cols-4">
          {[
            {
              title: "Portón desalineado",
              text: "Corrección básica cuando el portón no queda recto o no encaja bien.",
            },
            {
              title: "Cancela que roza",
              text: "Revisión de puntos de roce que dificultan apertura o cierre.",
            },
            {
              title: "Cierre incómodo",
              text: "Ajuste cuando el cierre necesita fuerza extra o no engancha bien.",
            },
            {
              title: "Bisagras o fijaciones",
              text: "Comprobación de piezas visibles que afectan al movimiento diario.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-yellow-300 bg-white p-7 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400">
                <Fence className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-2xl font-black">{item.title}</h3>
              <p className="mt-4 leading-7 text-neutral-700">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-16 md:px-8">
        <h2 className="text-3xl font-black">
          ¿Dónde ajustamos portones exteriores?
        </h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {[
            "Entradas de vivienda",
            "Patios y terrazas",
            "Accesos exteriores",
            "Cancelas sencillas",
            "Propiedades de alquiler",
            "Zonas exteriores visibles",
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
          Si el portón está muy dañado, caído, roto de forma estructural o
          necesita sustitución completa, puede requerir un trabajo mayor. Envíanos
          fotos y vídeo para revisar si encaja como ajuste práctico.
        </p>
      </section>

      <section className="bg-yellow-400 py-16 text-black">
        <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
          <p className="text-sm font-black uppercase tracking-widest">
            Desde 49€
          </p>
          <h2 className="mt-3 text-4xl font-black">
            Precio para ajustar un portón exterior
          </h2>
          <p className="mt-6 text-lg font-medium leading-8 text-neutral-900">
            El precio depende del tipo de portón, bisagras, cierre, acceso,
            nivel de desalineación, piezas necesarias y dificultad. Envíanos
            fotos y vídeo para darte un presupuesto claro.
          </p>

          <div className="mt-8 rounded-3xl border border-yellow-600/30 bg-white p-6 text-left shadow-xl">
            <h3 className="text-xl font-black">El precio depende de:</h3>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Tipo de portón",
                "Estado de bisagras",
                "Sistema de cierre",
                "Puntos de roce",
                "Nivel de desalineación",
                "Piezas necesarias",
                "Acceso exterior",
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
          Realizamos ajuste de portones exteriores en Valencia ciudad y
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
              title: "Servicios exteriores",
              href: `/${locale}/services/exterior`,
            },
            {
              title: "Reparación de vallas",
              href: `/${locale}/services/exterior/reparacion-ajuste-vallas`,
            },
            {
              title: "Montaje exterior en pared",
              href: `/${locale}/services/exterior/montaje-pared-exterior`,
            },
            {
              title: "Sellado exterior",
              href: `/${locale}/services/exterior/sellado-exterior`,
            },
            {
              title: "Instalación de buzón",
              href: `/${locale}/services/exterior/instalacion-buzon`,
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
            ¿Quieres ajustar un portón exterior?
          </h2>
          <p className="mt-5 text-lg font-medium text-neutral-900">
            Envíanos fotos del portón completo, bisagras, cierre, zona donde
            roza y un vídeo corto abriendo y cerrando. Te damos un presupuesto
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