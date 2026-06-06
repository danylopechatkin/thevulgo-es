import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  Drill,
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
const pagePath = "/services/exterior/instalacion-soportes-exteriores";

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";

  return {
    title: isEs
      ? "Instalación de Soportes Exteriores | Desde 39€ | THEVULGO"
      : "Outdoor Shelf or Bracket Fitting | From €39 | THEVULGO",
    description: isEs
      ? "Instalación de soportes exteriores desde 39€. Montaje de escuadras, holders, soportes y pequeños elementos de apoyo para patios, terrazas y exteriores."
      : "Outdoor shelf or bracket fitting from €39. Installation of practical brackets, holders and small exterior support elements for organized outdoor use.",
    alternates: {
      canonical: `${siteUrl}/${locale}${pagePath}`,
      languages: {
        es: `${siteUrl}/es${pagePath}`,
        en: `${siteUrl}/en${pagePath}`,
      },
    },
    openGraph: {
      title: isEs
        ? "Instalación de Soportes Exteriores | THEVULGO"
        : "Outdoor Shelf or Bracket Fitting | THEVULGO",
      description: isEs
        ? "Montaje de soportes, escuadras y holders exteriores en superficies adecuadas."
        : "Installation of outdoor brackets, holders and small exterior support elements.",
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
    q: "¿Cuánto cuesta instalar soportes exteriores?",
    a: "La instalación de soportes exteriores empieza desde 39€. El precio depende del tipo de soporte, superficie, peso, altura, fijaciones, número de elementos y dificultad.",
  },
  {
    q: "¿Qué tipos de soportes exteriores pueden instalarse?",
    a: "Podemos instalar soportes, escuadras, holders, pequeños elementos de apoyo, brackets y sistemas sencillos de fijación exterior para uso práctico.",
  },
  {
    q: "¿Instaláis escuadras para almacenamiento exterior?",
    a: "Sí. Podemos montar escuadras y soportes para organizar mejor patios, terrazas, zonas exteriores o espacios de almacenamiento sencillo.",
  },
  {
    q: "¿Se pueden instalar varios soportes en una visita?",
    a: "Sí. Podemos instalar varios soportes, holders, brackets o pequeños elementos exteriores en una sola visita organizada.",
  },
  {
    q: "¿Qué superficie es adecuada para la instalación?",
    a: "Depende del peso y tipo de soporte. Podemos revisar pared exterior, muro, hormigón, ladrillo u otra superficie accesible para valorar la fijación.",
  },
  {
    q: "¿Necesito comprar el soporte antes?",
    a: "Sí, lo ideal es tener el soporte o bracket comprado antes de la visita. Puedes enviarnos foto o enlace para revisar medidas, peso y fijaciones.",
  },
  {
    q: "¿Pueden combinarlo con otros trabajos exteriores?",
    a: "Sí. Podemos combinar instalación de soportes con montaje exterior en pared, reparación de herrajes, sellado exterior, buzones, números de casa o accesorios.",
  },
  {
    q: "¿Qué necesito enviar para pedir presupuesto?",
    a: "Envíanos fotos de la superficie, foto del soporte o bracket, medidas aproximadas, altura deseada y explicación de qué quieres colocar o sostener.",
  },
];

export default async function InstalacionSoportesExterioresPage({
  params,
}: PageProps) {
  const { locale } = await params;
  const isEs = locale === "es";

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, quiero un presupuesto para instalación de soportes exteriores."
      : "Hi, I would like a quote for outdoor shelf or bracket fitting."
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappText}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: isEs
      ? "Instalación de Soportes Exteriores"
      : "Outdoor Shelf or Bracket Fitting",
    serviceType: "Outdoor shelf or bracket fitting",
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
      "Instalación de soportes exteriores, escuadras, holders, brackets, montaje exterior en pared, herrajes exteriores y servicios handyman en Valencia.",
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
          ? "Instalación de Soportes Exteriores"
          : "Outdoor Shelf or Bracket Fitting",
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
              Soportes, escuadras, holders y brackets exteriores
            </div>

            <h1 className="text-4xl font-black tracking-tight md:text-6xl">
              Instalación de soportes exteriores
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-700">
              Instalación de soportes prácticos, escuadras, holders, brackets y
              pequeños elementos de apoyo exterior para mejorar organización,
              almacenamiento y uso diario en patios, terrazas y exteriores.
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
                "Desde 39€",
                "Soportes exteriores",
                "Escuadras y brackets",
                "Holders prácticos",
                "Montaje limpio",
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
              <Drill className="mb-6 h-12 w-12 text-black" />
              <p className="text-sm font-black uppercase tracking-widest">
                THEVULGO Valencia
              </p>
              <h2 className="mt-3 text-3xl font-black">
                Outdoor brackets. Stronger support. More organized space.
              </h2>
              <p className="mt-4 font-medium leading-7 text-neutral-900">
                Revisamos superficie, peso, posición y fijaciones para instalar
                soportes exteriores de forma práctica, recta y segura.
              </p>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                ["Practical support", "Soportes útiles para exterior"],
                ["Clean fitting", "Montaje recto y ordenado"],
                ["Suitable surfaces", "Revisión de pared o muro"],
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
              title: "Fijación adecuada",
              text: "Revisamos superficie, peso y tipo de soporte antes de instalar.",
            },
            {
              icon: Drill,
              title: "Montaje práctico",
              text: "Instalación de soportes, brackets, escuadras y holders exteriores.",
            },
            {
              icon: Ruler,
              title: "Alineación limpia",
              text: "Buscamos una posición recta, útil y visualmente ordenada.",
            },
            {
              icon: Star,
              title: "Precio claro",
              text: "Desde 39€. Presupuesto según fotos, soporte y dificultad.",
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
          Montaje de soportes, escuadras y brackets exteriores
        </h2>

        <div className="mt-6 space-y-5 text-lg leading-8 text-neutral-700">
          <p>
            En THEVULGO realizamos instalación de soportes exteriores en
            Valencia para patios, terrazas, entradas, zonas exteriores,
            almacenamiento sencillo, accesorios prácticos y pequeños elementos de
            apoyo que necesitan una fijación limpia.
          </p>

          <p>
            Antes de instalar revisamos el tipo de soporte, peso, sistema de
            fijación, superficie, altura, exposición exterior y uso previsto.
            Esto ayuda a elegir una posición más práctica y evitar una instalación
            débil, torcida o poco útil.
          </p>

          <p>
            También podemos combinar este servicio con montaje en pared exterior,
            instalación de carteles, números de casa, buzones, herrajes
            exteriores, sellado exterior o pequeños arreglos visibles del
            exterior.
          </p>
        </div>
      </section>

      <section className="bg-yellow-50 py-16">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <h2 className="text-3xl font-black md:text-4xl">
            ¿Qué incluye la instalación?
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              "Revisión del soporte",
              "Comprobación de superficie",
              "Medición de posición",
              "Marcado de puntos",
              "Perforación si procede",
              "Instalación del soporte",
              "Alineación visual",
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
          Soportes exteriores que podemos instalar
        </h2>

        <div className="grid gap-8 md:grid-cols-4">
          {[
            {
              title: "Escuadras exteriores",
              text: "Montaje de escuadras para apoyo, organización o uso práctico.",
            },
            {
              title: "Brackets y holders",
              text: "Instalación de pequeños brackets, holders y soportes funcionales.",
            },
            {
              title: "Soportes de almacenamiento",
              text: "Elementos para ordenar patios, terrazas o zonas exteriores.",
            },
            {
              title: "Pequeños apoyos",
              text: "Fijación de elementos de apoyo exterior cuando la superficie es adecuada.",
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
          ¿Dónde instalamos soportes exteriores?
        </h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {[
            "Patios y terrazas",
            "Paredes exteriores",
            "Muros accesibles",
            "Zonas de entrada",
            "Espacios de almacenamiento",
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
          Si no sabes si la pared o superficie es adecuada, envíanos fotos del
          exterior y del soporte que quieres instalar. Te ayudamos a revisar si
          el montaje es viable y qué fijaciones pueden hacer falta.
        </p>
      </section>

      <section className="bg-yellow-400 py-16 text-black">
        <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
          <p className="text-sm font-black uppercase tracking-widest">
            Desde 39€
          </p>
          <h2 className="mt-3 text-4xl font-black">
            Precio para instalar soportes exteriores
          </h2>
          <p className="mt-6 text-lg font-medium leading-8 text-neutral-900">
            El precio depende del tipo de soporte, peso, superficie, altura,
            número de elementos, fijaciones necesarias y dificultad. Envíanos
            fotos para darte un presupuesto claro.
          </p>

          <div className="mt-8 rounded-3xl border border-yellow-600/30 bg-white p-6 text-left shadow-xl">
            <h3 className="text-xl font-black">El precio depende de:</h3>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Tipo de soporte",
                "Peso previsto",
                "Tipo de superficie",
                "Altura de montaje",
                "Número de elementos",
                "Fijaciones necesarias",
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
          Realizamos instalación de soportes exteriores en Valencia ciudad y
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
              title: "Montaje en pared exterior",
              href: `/${locale}/services/exterior/montaje-pared-exterior`,
            },
            {
              title: "Reparación de herrajes exteriores",
              href: `/${locale}/services/exterior/reparacion-herrajes-exterior`,
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
            ¿Quieres instalar soportes exteriores?
          </h2>
          <p className="mt-5 text-lg font-medium text-neutral-900">
            Envíanos fotos de la pared o superficie, foto del soporte, medidas
            aproximadas y altura deseada. Te damos un presupuesto claro antes de
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