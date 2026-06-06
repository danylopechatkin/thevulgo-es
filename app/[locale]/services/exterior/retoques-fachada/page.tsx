import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  Paintbrush,
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
const pagePath = "/services/exterior/retoques-fachada";

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";

  return {
    title: isEs
      ? "Retoques de Fachada | Desde 59€ | THEVULGO"
      : "Facade Touch-Up Work | From €59 | THEVULGO",
    description: isEs
      ? "Retoques de fachada desde 59€. Trabajos básicos de mejora visible en superficies exteriores accesibles para mejorar apariencia sin reforma completa."
      : "Facade touch-up work from €59. Basic visible touch-up work on accessible exterior surfaces for practical improvement rather than full renovation.",
    alternates: {
      canonical: `${siteUrl}/${locale}${pagePath}`,
      languages: {
        es: `${siteUrl}/es${pagePath}`,
        en: `${siteUrl}/en${pagePath}`,
      },
    },
    openGraph: {
      title: isEs
        ? "Retoques de Fachada | THEVULGO"
        : "Facade Touch-Up Work | THEVULGO",
      description: isEs
        ? "Mejoras visibles en fachadas y superficies exteriores accesibles."
        : "Visible improvement work on accessible exterior surfaces.",
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
    q: "¿Cuánto cuestan los retoques de fachada?",
    a: "Los retoques de fachada empiezan desde 59€. El precio depende del estado de la superficie, acceso, tamaño de la zona, material, preparación necesaria y dificultad del trabajo.",
  },
  {
    q: "¿Qué tipo de retoques exteriores pueden hacer?",
    a: "Podemos hacer mejoras visibles básicas en superficies exteriores accesibles, pequeñas correcciones estéticas, preparación ligera y trabajos prácticos de acabado cuando no se trata de una reforma completa.",
  },
  {
    q: "¿Esto es una reforma completa de fachada?",
    a: "No. Este servicio está pensado para retoques visibles y mejoras prácticas en zonas accesibles, no para rehabilitación completa de fachada, trabajos en altura o obra estructural.",
  },
  {
    q: "¿Pueden reparar pequeñas imperfecciones visibles?",
    a: "Sí. Podemos revisar pequeñas imperfecciones, marcas, zonas desgastadas o detalles visibles cuando el acceso y el estado de la superficie permiten una mejora práctica.",
  },
  {
    q: "¿Trabajan en paredes exteriores accesibles?",
    a: "Sí. Podemos trabajar en superficies exteriores accesibles como patios, terrazas, entradas, zonas bajas de fachada y detalles exteriores visibles.",
  },
  {
    q: "¿Necesito comprar material antes?",
    a: "Depende del caso. Si hace falta pintura, masilla, sellador u otro material específico, podemos indicarte qué preparar después de revisar fotos.",
  },
  {
    q: "¿Pueden combinarlo con otros trabajos exteriores?",
    a: "Sí. Podemos combinar retoques de fachada con sellado exterior, montaje en pared, reparación de herrajes, instalación de buzón o pequeñas mejoras exteriores.",
  },
  {
    q: "¿Qué necesito enviar para pedir presupuesto?",
    a: "Envíanos fotos de la zona completa, detalle del daño o imperfección, acceso, medidas aproximadas y una breve explicación de lo que quieres mejorar.",
  },
];

export default async function RetoquesFachadaPage({ params }: PageProps) {
  const { locale } = await params;
  const isEs = locale === "es";

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, quiero un presupuesto para retoques de fachada o superficie exterior."
      : "Hi, I would like a quote for facade touch-up work or exterior surface improvement."
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappText}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: isEs ? "Retoques de Fachada" : "Facade Touch-Up Work",
    serviceType: "Facade touch-up work",
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
      "Retoques de fachada, mejoras exteriores visibles, sellado, montaje exterior, reparación de herrajes, vallas, portones y servicios handyman en Valencia.",
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
        name: isEs ? "Retoques de Fachada" : "Facade Touch-Up Work",
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
              Fachadas, paredes exteriores y superficies accesibles
            </div>

            <h1 className="text-4xl font-black tracking-tight md:text-6xl">
              Retoques de fachada
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-700">
              Trabajos básicos de mejora visible en superficies exteriores
              accesibles cuando el objetivo es mejorar la apariencia y el
              acabado sin convertirlo en una reforma completa.
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
                "Superficies exteriores",
                "Mejora visual",
                "Zonas accesibles",
                "Acabado más limpio",
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
              <Paintbrush className="mb-6 h-12 w-12 text-black" />
              <p className="text-sm font-black uppercase tracking-widest">
                THEVULGO Valencia
              </p>
              <h2 className="mt-3 text-3xl font-black">
                Facade touch-up. Cleaner look. Practical exterior improvement.
              </h2>
              <p className="mt-4 font-medium leading-7 text-neutral-900">
                Revisamos la zona exterior, superficie, acceso y acabado visible
                para proponer una mejora práctica y realista.
              </p>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                ["Visible improvement", "Mejor aspecto exterior"],
                ["Accessible surfaces", "Trabajo en zonas accesibles"],
                ["Practical finish", "Acabado más limpio"],
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
              title: "Mejora práctica",
              text: "Pensado para retoques visibles y zonas exteriores accesibles.",
            },
            {
              icon: Wrench,
              title: "Sin reforma completa",
              text: "Trabajos básicos cuando no hace falta una obra grande.",
            },
            {
              icon: Ruler,
              title: "Acabado visual",
              text: "Buscamos que la zona exterior se vea más limpia y cuidada.",
            },
            {
              icon: Star,
              title: "Precio claro",
              text: "Desde 59€. Presupuesto según fotos, acceso y superficie.",
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
          Retoques visibles para fachadas y exteriores
        </h2>

        <div className="mt-6 space-y-5 text-lg leading-8 text-neutral-700">
          <p>
            En THEVULGO realizamos retoques de fachada en Valencia para zonas
            exteriores accesibles, entradas, patios, terrazas, superficies
            visibles y detalles que necesitan una mejora práctica sin hacer una
            reforma completa.
          </p>

          <p>
            Antes de empezar revisamos el estado de la superficie, acceso,
            tamaño de la zona, tipo de material, marcas visibles, desgaste,
            pequeñas imperfecciones y objetivo del acabado. Así podemos valorar
            si el trabajo encaja como retoque básico o requiere una intervención
            mayor.
          </p>

          <p>
            También podemos combinar este servicio con sellado exterior, montaje
            en pared exterior, reparación de herrajes, instalación de buzón,
            números de casa, soportes o pequeñas mejoras visibles del exterior.
          </p>
        </div>
      </section>

      <section className="bg-yellow-50 py-16">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <h2 className="text-3xl font-black md:text-4xl">
            ¿Qué puede incluir el retoque de fachada?
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              "Revisión de superficie exterior",
              "Comprobación de acceso",
              "Mejora visual básica",
              "Corrección de pequeñas imperfecciones",
              "Preparación ligera si procede",
              "Acabado visible más limpio",
              "Revisión de zonas desgastadas",
              "Recomendación de materiales si hace falta",
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
          Zonas exteriores que podemos revisar
        </h2>

        <div className="grid gap-8 md:grid-cols-4">
          {[
            {
              title: "Entrada de vivienda",
              text: "Retoques visibles en zonas de acceso que afectan la primera impresión.",
            },
            {
              title: "Patios y terrazas",
              text: "Mejoras prácticas en superficies exteriores accesibles y visibles.",
            },
            {
              title: "Zonas bajas de fachada",
              text: "Correcciones básicas donde el acceso es seguro y adecuado.",
            },
            {
              title: "Detalles exteriores",
              text: "Pequeños acabados que hacen que el exterior se vea más completo.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-yellow-300 bg-white p-7 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400">
                <Paintbrush className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-2xl font-black">{item.title}</h3>
              <p className="mt-4 leading-7 text-neutral-700">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-16 md:px-8">
        <h2 className="text-3xl font-black">
          ¿Cuándo conviene pedir este servicio?
        </h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {[
            "Fachada con marcas visibles",
            "Entrada poco cuidada",
            "Patio o terraza con desgaste",
            "Piso en alquiler",
            "Preparación para venta",
            "Mejora visual rápida",
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
          Si la superficie está muy dañada, hay humedad estructural, grietas
          importantes, desprendimientos o hace falta trabajo en altura, puede que
          no sea un retoque básico. Envíanos fotos para revisar el caso.
        </p>
      </section>

      <section className="bg-yellow-400 py-16 text-black">
        <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
          <p className="text-sm font-black uppercase tracking-widest">
            Desde 59€
          </p>
          <h2 className="mt-3 text-4xl font-black">
            Precio para retoques de fachada
          </h2>
          <p className="mt-6 text-lg font-medium leading-8 text-neutral-900">
            El precio depende del tamaño de la zona, acceso, estado de la
            superficie, material, preparación necesaria, tiempo estimado y
            dificultad. Envíanos fotos para darte un presupuesto claro.
          </p>

          <div className="mt-8 rounded-3xl border border-yellow-600/30 bg-white p-6 text-left shadow-xl">
            <h3 className="text-xl font-black">El precio depende de:</h3>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Tamaño de la zona",
                "Estado de la superficie",
                "Acceso exterior",
                "Material necesario",
                "Preparación previa",
                "Tipo de acabado",
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
          Realizamos retoques de fachada y mejoras exteriores visibles en
          Valencia ciudad y alrededores. Si estás fuera de Valencia, envíanos tu
          dirección y te confirmamos disponibilidad.
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
              title: "Sellado exterior",
              href: `/${locale}/services/exterior/sellado-exterior`,
            },
            {
              title: "Montaje exterior en pared",
              href: `/${locale}/services/exterior/montaje-pared-exterior`,
            },
            {
              title: "Reparación de herrajes exteriores",
              href: `/${locale}/services/exterior/reparacion-herrajes-exterior`,
            },
            {
              title: "Reparación de vallas",
              href: `/${locale}/services/exterior/reparacion-ajuste-vallas`,
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
            ¿Quieres hacer retoques de fachada?
          </h2>
          <p className="mt-5 text-lg font-medium text-neutral-900">
            Envíanos fotos de la zona exterior, superficie, acceso y detalle de
            lo que quieres mejorar. Te damos un presupuesto claro antes de
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