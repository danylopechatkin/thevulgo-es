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
const pagePath = "/services/exterior/reparacion-ajuste-vallas";

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";

  return {
    title: isEs
      ? "Reparación y Ajuste de Vallas | Desde 59€ | THEVULGO"
      : "Fence Repair & Adjustment | From €59 | THEVULGO",
    description: isEs
      ? "Reparación y ajuste de vallas desde 59€. Corrección de secciones de valla, límites exteriores visibles y elementos exteriores para mejorar estabilidad, función y aspecto."
      : "Fence repair and adjustment from €59. Repair and adjustment of fences, fence sections and visible outdoor boundaries to improve stability, function and appearance.",
    alternates: {
      canonical: `${siteUrl}/${locale}${pagePath}`,
      languages: {
        es: `${siteUrl}/es${pagePath}`,
        en: `${siteUrl}/en${pagePath}`,
      },
    },
    openGraph: {
      title: isEs
        ? "Reparación y Ajuste de Vallas | THEVULGO"
        : "Fence Repair & Adjustment | THEVULGO",
      description: isEs
        ? "Ajustes y pequeñas reparaciones de vallas y límites exteriores visibles."
        : "Small fence repairs and adjustments for visible outdoor boundaries.",
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
    q: "¿Cuánto cuesta reparar o ajustar una valla?",
    a: "La reparación y ajuste de vallas empieza desde 59€. El precio depende del tipo de valla, estado, acceso, piezas necesarias, estabilidad y alcance del trabajo.",
  },
  {
    q: "¿Qué tipo de vallas pueden revisar?",
    a: "Podemos revisar vallas sencillas, secciones visibles, límites exteriores, pequeños elementos de separación y partes accesibles donde el trabajo sea seguro y práctico.",
  },
  {
    q: "¿Pueden mejorar la estabilidad de una valla?",
    a: "Sí. Podemos hacer ajustes básicos y pequeñas correcciones para mejorar la estabilidad cuando la estructura y el acceso lo permiten.",
  },
  {
    q: "¿Hacen instalación completa de vallas nuevas?",
    a: "Esta página está enfocada en reparación, ajuste y mejoras visibles de vallas existentes, no en instalación completa de vallado grande o trabajo estructural mayor.",
  },
  {
    q: "¿Pueden reparar una sección suelta o desalineada?",
    a: "Sí. Podemos revisar secciones sueltas, piezas movidas, fijaciones visibles y zonas desalineadas para valorar una corrección práctica.",
  },
  {
    q: "¿Necesito comprar piezas antes?",
    a: "Depende del caso. Si falta una pieza, fijación o soporte compatible, puede ser necesario comprarla antes o después de revisar el problema.",
  },
  {
    q: "¿Pueden hacer varias tareas exteriores en una visita?",
    a: "Sí. Podemos combinar reparación de vallas con ajustes de puertas exteriores, soportes, pequeños herrajes, sellado o montaje exterior.",
  },
  {
    q: "¿Qué necesito enviar para pedir presupuesto?",
    a: "Envíanos fotos de la valla completa, zona dañada, fijaciones, acceso, medidas aproximadas y un vídeo corto mostrando el movimiento o problema.",
  },
];

export default async function ReparacionAjusteVallasPage({
  params,
}: PageProps) {
  const { locale } = await params;
  const isEs = locale === "es";

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, quiero un presupuesto para reparación o ajuste de valla exterior."
      : "Hi, I would like a quote for fence repair or adjustment."
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappText}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: isEs ? "Reparación y Ajuste de Vallas" : "Fence Repair & Adjustment",
    serviceType: "Fence repair and adjustment",
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
      price: "59",
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
      "Reparación y ajuste de vallas, límites exteriores, soportes, fijaciones, herrajes exteriores, montaje exterior y servicios handyman en Valencia.",
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
        name: isEs
          ? "Reparación y Ajuste de Vallas"
          : "Fence Repair & Adjustment",
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
              Vallas, límites exteriores y pequeñas reparaciones visibles
            </div>

            <h1 className="text-4xl font-black tracking-tight md:text-6xl">
              Reparación y ajuste de vallas
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-700">
              Reparación y ajuste de vallas, secciones de valla y límites
              exteriores visibles para mejorar estabilidad, función y aspecto
              general del exterior de la propiedad.
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
                "Desde 59€",
                "Vallas y secciones visibles",
                "Mejor estabilidad",
                "Ajustes exteriores",
                "Reparación práctica",
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
                Fence repair. Better stability. Cleaner exterior look.
              </h2>
              <p className="mt-4 font-medium leading-7 text-neutral-900">
                Revisamos la zona exterior, fijaciones, secciones y puntos
                visibles para proponer una corrección práctica y segura.
              </p>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                ["Outdoor boundary", "Vallas y límites exteriores"],
                ["Better stability", "Más firmeza cuando es posible"],
                ["Visible repairs", "Correcciones limpias y prácticas"],
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
              text: "Revisamos si la valla puede mejorar con ajustes y fijaciones visibles.",
            },
            {
              icon: Wrench,
              title: "Ajustes exteriores",
              text: "Correcciones de secciones, piezas, soportes y puntos accesibles.",
            },
            {
              icon: Ruler,
              title: "Mejor aspecto",
              text: "Buscamos que el exterior se vea más ordenado, recto y estable.",
            },
            {
              icon: Star,
              title: "Precio claro",
              text: "Desde 59€. Presupuesto según fotos, acceso y dificultad.",
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
          Reparación de vallas y límites exteriores
        </h2>

        <div className="mt-6 space-y-5 text-lg leading-8 text-neutral-700">
          <p>
            En THEVULGO realizamos reparación y ajuste de vallas en Valencia
            para patios, terrazas, entradas, zonas exteriores, propiedades de
            alquiler y espacios donde una sección visible necesita mejora
            práctica.
          </p>

          <p>
            Antes de trabajar revisamos el tipo de valla, estado de las
            fijaciones, piezas sueltas, estabilidad, acceso, superficie y nivel
            de daño. Esto ayuda a saber si es un ajuste sencillo, una reparación
            visible o si hacen falta piezas adicionales.
          </p>

          <p>
            También podemos combinar este trabajo con ajustes de puerta exterior,
            soportes, fijaciones, sellado, montaje de accesorios exteriores,
            buzones, números de casa o pequeñas mejoras visibles del exterior.
          </p>
        </div>
      </section>

      <section className="bg-yellow-50 py-16">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <h2 className="text-3xl font-black md:text-4xl">
            ¿Qué incluye la reparación o ajuste?
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              "Revisión de la valla",
              "Comprobación de secciones",
              "Revisión de fijaciones visibles",
              "Detección de piezas sueltas",
              "Ajuste básico si es posible",
              "Mejora de estabilidad",
              "Corrección visual del exterior",
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
          Problemas de vallas que podemos revisar
        </h2>

        <div className="grid gap-8 md:grid-cols-4">
          {[
            {
              title: "Sección suelta",
              text: "Ajuste de partes visibles que se han movido o perdido firmeza.",
            },
            {
              title: "Valla desalineada",
              text: "Corrección práctica para mejorar la línea visual y el encaje.",
            },
            {
              title: "Fijaciones visibles",
              text: "Revisión de tornillos, soportes y puntos accesibles de sujeción.",
            },
            {
              title: "Límite exterior",
              text: "Mejoras en zonas visibles que afectan la presentación del exterior.",
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
          ¿Dónde hacemos reparación de vallas?
        </h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {[
            "Patios y terrazas",
            "Zonas exteriores",
            "Entradas de vivienda",
            "Propiedades de alquiler",
            "Límites visibles",
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
          Si la valla está muy dañada, caída, rota de forma estructural o
          requiere sustitución completa, puede ser necesario un trabajo mayor.
          Envíanos fotos y vídeo para revisar si encaja como reparación práctica.
        </p>
      </section>

      <section className="bg-yellow-400 py-16 text-black">
        <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
          <p className="text-sm font-black uppercase tracking-widest">
            Desde 59€
          </p>
          <h2 className="mt-3 text-4xl font-black">
            Precio para reparar o ajustar una valla
          </h2>
          <p className="mt-6 text-lg font-medium leading-8 text-neutral-900">
            El precio depende del tipo de valla, daño visible, piezas, acceso,
            estabilidad, tiempo estimado y dificultad. Envíanos fotos y vídeo
            para darte un presupuesto claro.
          </p>

          <div className="mt-8 rounded-3xl border border-yellow-600/30 bg-white p-6 text-left shadow-xl">
            <h3 className="text-xl font-black">El precio depende de:</h3>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Tipo de valla",
                "Estado de la sección",
                "Fijaciones necesarias",
                "Acceso exterior",
                "Nivel de estabilidad",
                "Piezas disponibles",
                "Tiempo estimado",
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
          Realizamos reparación y ajuste de vallas en Valencia ciudad y
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
              title: "Ajuste de puerta exterior",
              href: `/${locale}/services/exterior/ajuste-puerta-exterior`,
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
            ¿Quieres reparar o ajustar una valla?
          </h2>
          <p className="mt-5 text-lg font-medium text-neutral-900">
            Envíanos fotos de la valla completa, zona dañada, fijaciones y un
            vídeo corto mostrando el movimiento o problema. Te damos un
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
