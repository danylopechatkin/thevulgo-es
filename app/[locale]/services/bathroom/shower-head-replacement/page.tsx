import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  Droplets,
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
const pagePath = "/services/bathroom/shower-head-replacement";

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";

  return {
    title: isEs
      ? "Instalación y Cambio de Alcachofa de Ducha | Desde 29€ | THEVULGO"
      : "Shower Head Replacement | From €29 | THEVULGO",
    description: isEs
      ? "Sustitución de alcachofas de ducha y accesorios compatibles desde 29€. Mejora la comodidad, el aspecto del baño y el uso diario de la ducha."
      : "Shower head replacement from €29. Replacement of shower heads and compatible fittings for a cleaner look and better everyday comfort.",
    alternates: {
      canonical: `${siteUrl}/${locale}${pagePath}`,
      languages: {
        es: `${siteUrl}/es${pagePath}`,
        en: `${siteUrl}/en${pagePath}`,
      },
    },
    openGraph: {
      title: isEs
        ? "Cambio de Alcachofa de Ducha | THEVULGO"
        : "Shower Head Replacement | THEVULGO",
      description: isEs
        ? "Cambio de alcachofas, duchas de mano y accesorios compatibles para baño."
        : "Replacement of shower heads, hand showers and compatible bathroom fittings.",
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
    q: "¿Cuánto cuesta cambiar una alcachofa de ducha?",
    a: "El cambio de alcachofa de ducha empieza desde 29€. El precio depende del tipo de alcachofa, conexión, soporte, accesorios compatibles y si hay que sustituir alguna pieza adicional.",
  },
  {
    q: "¿Pueden sustituir una alcachofa antigua?",
    a: "Sí. Podemos retirar una alcachofa antigua e instalar una nueva compatible, revisando la conexión y el ajuste para un uso cómodo.",
  },
  {
    q: "¿Instalan duchas de mano?",
    a: "Sí. Podemos instalar duchas de mano, cabezales de ducha, alcachofas modernas y accesorios compatibles según el modelo.",
  },
  {
    q: "¿Pueden cambiar soporte de ducha?",
    a: "Sí. Podemos sustituir o ajustar soportes de ducha compatibles si las piezas y la superficie permiten una instalación sencilla.",
  },
  {
    q: "¿Instalan cabezales de ducha modernos?",
    a: "Sí. Podemos instalar cabezales modernos, alcachofas de ahorro de agua, duchas de mano y modelos compatibles con la conexión existente.",
  },
  {
    q: "¿Necesito comprar la alcachofa antes?",
    a: "Sí, lo ideal es tener la alcachofa o cabezal comprado antes de la visita. Puedes enviarnos foto o enlace para revisar si parece compatible.",
  },
  {
    q: "¿Pueden hacer otros trabajos de baño en la misma visita?",
    a: "Sí. Podemos cambiar manguera de ducha, instalar accesorios, estantes, toalleros, portarrollos, espejo, luz de baño y otros pequeños trabajos.",
  },
  {
    q: "¿Trabajan fuera de Valencia ciudad?",
    a: "Sí. Trabajamos en Valencia y alrededores como Mislata, Burjassot, Paterna, Torrent, Sagunto, Cullera, Gandía y otras zonas cercanas.",
  },
];

export default async function ShowerHeadReplacementPage({
  params,
}: PageProps) {
  const { locale } = await params;
  const isEs = locale === "es";

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, quiero un presupuesto para cambio de alcachofa de ducha."
      : "Hi, I would like a quote for shower head replacement."
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappText}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: isEs
      ? "Cambio de Alcachofa de Ducha"
      : "Shower Head Replacement",
    serviceType: "Shower head replacement",
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
      "Cambio de alcachofas de ducha, mangueras, accesorios de baño, espejos, muebles, luces, estantes y servicios handyman en Valencia.",
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
        name: isEs ? "Cambio de Alcachofa de Ducha" : "Shower Head Replacement",
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
              Alcachofas de ducha, cabezales y accesorios compatibles
            </div>

            <h1 className="text-4xl font-black tracking-tight md:text-6xl">
              Cambio de alcachofa de ducha
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-700">
              Sustitución de alcachofas de ducha, duchas de mano y accesorios
              compatibles para mejorar el aspecto del baño, la comodidad y el
              uso diario de la ducha.
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
                "Alcachofa de ducha",
                "Ducha de mano",
                "Cabezales modernos",
                "Mejor comodidad diaria",
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
              <Droplets className="mb-6 h-12 w-12 text-black" />
              <p className="text-sm font-black uppercase tracking-widest">
                THEVULGO Valencia
              </p>
              <h2 className="mt-3 text-3xl font-black">
                Shower head replacement. Cleaner look. Better comfort.
              </h2>
              <p className="mt-4 font-medium leading-7 text-neutral-900">
                Revisamos la conexión, sustituimos la alcachofa compatible y
                dejamos la ducha lista para uso diario.
              </p>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                ["Cleaner look", "Mejor aspecto visible del baño"],
                ["Better comfort", "Uso diario más cómodo"],
                ["Compatible fittings", "Revisión de conexión y piezas"],
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
              title: "Cambio seguro",
              text: "Revisamos conexión, rosca, soporte y compatibilidad antes de instalar.",
            },
            {
              icon: Wrench,
              title: "Sustitución práctica",
              text: "Retiramos la alcachofa antigua e instalamos una nueva compatible.",
            },
            {
              icon: Ruler,
              title: "Ajuste correcto",
              text: "Comprobamos el encaje, el soporte y el uso cómodo de la ducha.",
            },
            {
              icon: Star,
              title: "Precio claro",
              text: "Desde 29€. Presupuesto según fotos, modelo y dificultad.",
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
          Sustitución de alcachofas de ducha y cabezales
        </h2>

        <div className="mt-6 space-y-5 text-lg leading-8 text-neutral-700">
          <p>
            En THEVULGO realizamos cambio de alcachofas de ducha, duchas de
            mano, cabezales modernos y accesorios compatibles para baños,
            apartamentos, pisos de alquiler y viviendas que necesitan una mejora
            rápida y práctica.
          </p>

          <p>
            Antes de instalar revisamos el tipo de conexión, la rosca, el soporte
            existente, la manguera, el estado de las piezas y la compatibilidad
            del nuevo modelo. Esto ayuda a evitar problemas de ajuste y mejora la
            comodidad de uso.
          </p>

          <p>
            También podemos combinar este trabajo con cambio de manguera de
            ducha, soporte, estantería de baño, toallero, portarrollos, espejo,
            luz de baño y otros pequeños accesorios.
          </p>
        </div>
      </section>

      <section className="bg-yellow-50 py-16">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <h2 className="text-3xl font-black md:text-4xl">
            ¿Qué incluye el cambio?
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              "Revisión de alcachofa nueva",
              "Comprobación de conexión",
              "Retirada de alcachofa antigua",
              "Instalación de pieza compatible",
              "Revisión de soporte de ducha",
              "Comprobación de ajuste",
              "Prueba básica de funcionamiento",
              "Revisión visual del resultado",
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
          Tipos de alcachofas que podemos cambiar
        </h2>

        <div className="grid gap-8 md:grid-cols-4">
          {[
            {
              title: "Alcachofa estándar",
              text: "Cambio de cabezales sencillos y modelos compatibles para uso diario.",
            },
            {
              title: "Ducha de mano",
              text: "Sustitución de duchas de mano con revisión de manguera y soporte.",
            },
            {
              title: "Cabezal moderno",
              text: "Instalación de cabezales modernos, de ahorro de agua o mayor comodidad.",
            },
            {
              title: "Accesorios compatibles",
              text: "Cambio o ajuste de soporte, manguera y piezas visibles compatibles.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-yellow-300 bg-white p-7 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400">
                <Droplets className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-2xl font-black">{item.title}</h3>
              <p className="mt-4 leading-7 text-neutral-700">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-16 md:px-8">
        <h2 className="text-3xl font-black">
          ¿Dónde se puede cambiar la alcachofa?
        </h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {[
            "Ducha principal",
            "Baño pequeño",
            "Aseo con ducha",
            "Apartamento de alquiler",
            "Vivienda recién equipada",
            "Baño con accesorios antiguos",
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
          Si no sabes si la nueva alcachofa es compatible, envíanos fotos del
          modelo antiguo, la conexión, la manguera y el producto nuevo. Te
          ayudamos a revisar el caso antes de confirmar la visita.
        </p>
      </section>

      <section className="bg-yellow-400 py-16 text-black">
        <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
          <p className="text-sm font-black uppercase tracking-widest">
            Desde 29€
          </p>
          <h2 className="mt-3 text-4xl font-black">
            Precio para cambiar alcachofa de ducha
          </h2>
          <p className="mt-6 text-lg font-medium leading-8 text-neutral-900">
            El precio depende del tipo de alcachofa, compatibilidad, conexión,
            soporte, manguera y si quieres cambiar más piezas. Envíanos fotos y
            te damos un presupuesto claro antes de empezar.
          </p>

          <div className="mt-8 rounded-3xl border border-yellow-600/30 bg-white p-6 text-left shadow-xl">
            <h3 className="text-xl font-black">El precio depende de:</h3>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Tipo de alcachofa",
                "Conexión existente",
                "Manguera de ducha",
                "Soporte de ducha",
                "Compatibilidad",
                "Piezas adicionales",
                "Tiempo de instalación",
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
          Realizamos cambio de alcachofas de ducha en Valencia ciudad y
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
              title: "Cambio de manguera de ducha",
              href: `/${locale}/services/bathroom/shower-hose-replacement`,
            },
            {
              title: "Instalación de mueble bajo lavabo",
              href: `/${locale}/services/bathroom/vanity-unit-installation`,
            },
            {
              title: "Instalación de espejo de baño",
              href: `/${locale}/services/bathroom/mirror-installation`,
            },
            {
              title: "Renovación de silicona",
              href: `/${locale}/services/bathroom/silicone-renewal`,
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
            ¿Quieres cambiar una alcachofa de ducha?
          </h2>
          <p className="mt-5 text-lg font-medium text-neutral-900">
            Envíanos fotos de la alcachofa actual, la manguera, la conexión y el
            producto nuevo. Te damos un presupuesto claro antes de empezar.
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