    import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  SunMedium,
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
const pagePath = "/services/exterior/ajuste-accesorios-pergola-sombra";

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";

  return {
    title: isEs
      ? "Ajuste de Accesorios de Pérgola y Sombra | Desde 49€ | THEVULGO"
      : "Pergola / Shade Accessory Fitting | From €49 | THEVULGO",
    description: isEs
      ? "Ajuste de accesorios de pérgola y sombra desde 49€. Montaje y ajuste básico de accesorios compatibles, elementos de sombra y soportes exteriores sencillos."
      : "Pergola and shade accessory fitting from €49. Basic fitting and adjustment of compatible pergola accessories, shade elements and simple outdoor support items.",
    alternates: {
      canonical: `${siteUrl}/${locale}${pagePath}`,
      languages: {
        es: `${siteUrl}/es${pagePath}`,
        en: `${siteUrl}/en${pagePath}`,
      },
    },
    openGraph: {
      title: isEs
        ? "Ajuste de Accesorios de Pérgola y Sombra | THEVULGO"
        : "Pergola / Shade Accessory Fitting | THEVULGO",
      description: isEs
        ? "Montaje y ajuste básico de accesorios compatibles de pérgola y sombra."
        : "Basic fitting and adjustment of compatible pergola and shade accessories.",
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
    q: "¿Cuánto cuesta ajustar accesorios de pérgola o sombra?",
    a: "El ajuste de accesorios de pérgola y sombra empieza desde 49€. El precio depende del tipo de accesorio, superficie, altura, fijaciones, acceso, piezas disponibles y dificultad.",
  },
  {
    q: "¿Qué accesorios de pérgola pueden instalar o ajustar?",
    a: "Podemos revisar y ajustar accesorios compatibles de pérgola, elementos de sombra, soportes sencillos, piezas visibles y pequeños elementos exteriores de apoyo.",
  },
  {
    q: "¿Instalan pérgolas completas?",
    a: "No. Esta página está enfocada en accesorios, ajustes básicos y elementos compatibles de sombra, no en instalación completa de pérgolas grandes o trabajos estructurales.",
  },
  {
    q: "¿Pueden ajustar elementos de sombra en terraza o patio?",
    a: "Sí. Podemos revisar elementos de sombra sencillos en patios, terrazas y zonas exteriores cuando el acceso es seguro y el sistema es compatible.",
  },
  {
    q: "¿Necesito comprar las piezas antes?",
    a: "Sí, lo ideal es tener el accesorio o pieza compatible antes de la visita. Puedes enviarnos foto o enlace para revisar si parece adecuado.",
  },
  {
    q: "¿Pueden instalar soportes para sombra?",
    a: "Sí. Podemos instalar soportes exteriores sencillos cuando la superficie, el peso y el tipo de fijación son adecuados.",
  },
  {
    q: "¿Se puede combinar con otros trabajos exteriores?",
    a: "Sí. Podemos combinar este trabajo con instalación de soportes exteriores, montaje en pared exterior, sellado, reparación de herrajes o retoques exteriores.",
  },
  {
    q: "¿Qué necesito enviar para pedir presupuesto?",
    a: "Envíanos fotos de la pérgola o zona de sombra, foto del accesorio, superficie de fijación, altura, medidas aproximadas y un vídeo si hay movimiento o problema.",
  },
];

export default async function AjusteAccesoriosPergolaSombraPage({
  params,
}: PageProps) {
  const { locale } = await params;
  const isEs = locale === "es";

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, quiero un presupuesto para ajuste de accesorios de pérgola o sombra."
      : "Hi, I would like a quote for pergola or shade accessory fitting."
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappText}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: isEs
      ? "Ajuste de Accesorios de Pérgola y Sombra"
      : "Pergola / Shade Accessory Fitting",
    serviceType: "Pergola and shade accessory fitting",
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
      "Ajuste de accesorios de pérgola y sombra, soportes exteriores, montaje en pared exterior, herrajes, sellado y servicios handyman en Valencia.",
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
          ? "Ajuste de Accesorios de Pérgola y Sombra"
          : "Pergola / Shade Accessory Fitting",
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
              Pérgolas, sombra, terrazas y accesorios exteriores
            </div>

            <h1 className="text-4xl font-black tracking-tight md:text-6xl">
              Ajuste de accesorios de pérgola y sombra
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-700">
              Montaje y ajuste básico de accesorios compatibles para pérgolas,
              elementos de sombra, soportes sencillos y piezas exteriores
              prácticas para patios, terrazas y zonas exteriores.
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
                "Accesorios de pérgola",
                "Elementos de sombra",
                "Soportes exteriores",
                "Ajuste compatible",
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
              <SunMedium className="mb-6 h-12 w-12 text-black" />
              <p className="text-sm font-black uppercase tracking-widest">
                THEVULGO Valencia
              </p>
              <h2 className="mt-3 text-3xl font-black">
                Pergola accessories. Shade elements. Practical outdoor support.
              </h2>
              <p className="mt-4 font-medium leading-7 text-neutral-900">
                Revisamos piezas, soportes, fijaciones y superficie para ajustar
                o montar accesorios compatibles de exterior.
              </p>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                ["Shade setup", "Elementos de sombra"],
                ["Pergola accessories", "Accesorios compatibles"],
                ["Outdoor supports", "Soportes exteriores sencillos"],
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
              title: "Sistema compatible",
              text: "Revisamos si el accesorio, soporte o pieza encaja con la instalación.",
            },
            {
              icon: Wrench,
              title: "Ajuste práctico",
              text: "Correcciones básicas para mejorar uso, posición y estabilidad.",
            },
            {
              icon: Ruler,
              title: "Montaje limpio",
              text: "Buscamos una posición recta, práctica y visualmente ordenada.",
            },
            {
              icon: Star,
              title: "Precio claro",
              text: "Desde 49€. Presupuesto según fotos, piezas y dificultad.",
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
          Montaje y ajuste básico de accesorios de sombra
        </h2>

        <div className="mt-6 space-y-5 text-lg leading-8 text-neutral-700">
          <p>
            En THEVULGO realizamos ajuste de accesorios de pérgola y sombra en
            Valencia para patios, terrazas, entradas y zonas exteriores donde
            hacen falta pequeños montajes o correcciones prácticas.
          </p>

          <p>
            Antes de trabajar revisamos el accesorio, sistema de fijación,
            superficie, altura, acceso, peso, tensión, piezas disponibles y uso
            previsto. Esto ayuda a valorar si se puede ajustar o instalar de
            forma segura y compatible.
          </p>

          <p>
            Este servicio está pensado para accesorios y elementos sencillos, no
            para instalación completa de pérgolas grandes, estructuras pesadas o
            trabajos que requieran cálculo estructural.
          </p>
        </div>
      </section>

      <section className="bg-yellow-50 py-16">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <h2 className="text-3xl font-black md:text-4xl">
            ¿Qué puede incluir el servicio?
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              "Revisión del accesorio",
              "Comprobación de piezas",
              "Revisión de superficie",
              "Medición de posición",
              "Ajuste básico si procede",
              "Instalación de soporte compatible",
              "Comprobación de estabilidad",
              "Recomendación si faltan piezas",
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
          Elementos que podemos revisar
        </h2>

        <div className="grid gap-8 md:grid-cols-4">
          {[
            {
              title: "Accesorios de pérgola",
              text: "Ajuste de piezas compatibles, soportes y elementos visibles.",
            },
            {
              title: "Elementos de sombra",
              text: "Revisión de piezas sencillas para mejorar uso y posición.",
            },
            {
              title: "Soportes exteriores",
              text: "Montaje de soportes compatibles para accesorios de sombra.",
            },
            {
              title: "Piezas prácticas",
              text: "Corrección de elementos exteriores pequeños de uso diario.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-yellow-300 bg-white p-7 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400">
                <SunMedium className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-2xl font-black">{item.title}</h3>
              <p className="mt-4 leading-7 text-neutral-700">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-16 md:px-8">
        <h2 className="text-3xl font-black">
          ¿Dónde hacemos este tipo de ajuste?
        </h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {[
            "Patios y terrazas",
            "Zonas de sombra",
            "Entradas exteriores",
            "Pérgolas compatibles",
            "Espacios exteriores",
            "Propiedades de alquiler",
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
          Si el sistema está muy dañado, faltan piezas importantes o la
          estructura necesita reparación mayor, puede requerir un especialista.
          Envíanos fotos y vídeo para revisar si encaja como ajuste práctico.
        </p>
      </section>

      <section className="bg-yellow-400 py-16 text-black">
        <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
          <p className="text-sm font-black uppercase tracking-widest">
            Desde 49€
          </p>
          <h2 className="mt-3 text-4xl font-black">
            Precio para accesorios de pérgola y sombra
          </h2>
          <p className="mt-6 text-lg font-medium leading-8 text-neutral-900">
            El precio depende del tipo de accesorio, superficie, altura, piezas,
            soporte, nivel de ajuste, acceso y dificultad. Envíanos fotos para
            darte un presupuesto claro.
          </p>

          <div className="mt-8 rounded-3xl border border-yellow-600/30 bg-white p-6 text-left shadow-xl">
            <h3 className="text-xl font-black">El precio depende de:</h3>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Tipo de accesorio",
                "Piezas disponibles",
                "Superficie de fijación",
                "Altura y acceso",
                "Sistema de soporte",
                "Nivel de ajuste",
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
          Realizamos ajuste de accesorios de pérgola y sombra en Valencia ciudad
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
              title: "Servicios exteriores",
              href: `/${locale}/services/exterior`,
            },
            {
              title: "Instalación de soportes exteriores",
              href: `/${locale}/services/exterior/instalacion-soportes-exteriores`,
            },
            {
              title: "Montaje en pared exterior",
              href: `/${locale}/services/exterior/montaje-pared-exterior`,
            },
            {
              title: "Sellado impermeable exterior",
              href: `/${locale}/services/exterior/sellado-impermeable-exterior`,
            },
            {
              title: "Reparación de herrajes exteriores",
              href: `/${locale}/services/exterior/reparacion-herrajes-exterior`,
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
            ¿Quieres ajustar accesorios de pérgola o sombra?
          </h2>
          <p className="mt-5 text-lg font-medium text-neutral-900">
            Envíanos fotos de la zona, accesorio, piezas disponibles, soporte y
            un vídeo corto si hay movimiento o problema. Te damos un presupuesto
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