import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  Wrench,
  ShieldCheck,
  Home,
  HelpCircle,
  MapPin,
  Star,
  Ruler,
  Hammer,
} from "lucide-react";

type PageProps = {
  params: Promise<{ locale: string }>;
};

const siteUrl = "https://www.thevulgo.es";
const phoneNumber = "34610076942";
const pagePath = "/services/exterior/reparacion-herrajes-exterior";

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";

  return {
    title: isEs
      ? "Reparación de Herrajes Exteriores | Desde 35€ | THEVULGO"
      : "Outdoor Hardware Fixing | From €35 | THEVULGO",
    description: isEs
      ? "Reparación de herrajes exteriores desde 35€. Ajuste de soportes, manillas, escuadras, fijaciones y elementos exteriores visibles."
      : "Outdoor hardware fixing from €35. Small repairs and tightening of visible outdoor fittings, brackets, handles and practical hardware elements.",
    alternates: {
      canonical: `${siteUrl}/${locale}${pagePath}`,
      languages: {
        es: `${siteUrl}/es${pagePath}`,
        en: `${siteUrl}/en${pagePath}`,
      },
    },
    openGraph: {
      title: isEs
        ? "Reparación de Herrajes Exteriores | THEVULGO"
        : "Outdoor Hardware Fixing | THEVULGO",
      description: isEs
        ? "Pequeñas reparaciones y ajustes de herrajes exteriores visibles."
        : "Small repairs and tightening of visible outdoor hardware elements.",
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
    q: "¿Cuánto cuesta reparar herrajes exteriores?",
    a: "La reparación de herrajes exteriores empieza desde 35€. El precio depende del tipo de pieza, estado, acceso, fijaciones, tornillos, número de elementos y dificultad del trabajo.",
  },
  {
    q: "¿Qué tipo de herrajes exteriores pueden revisar?",
    a: "Podemos revisar soportes, escuadras, manillas, fijaciones visibles, piezas sueltas, pequeños mecanismos exteriores y elementos prácticos accesibles.",
  },
  {
    q: "¿Pueden apretar soportes o escuadras exteriores?",
    a: "Sí. Podemos apretar, ajustar o revisar soportes y escuadras exteriores cuando la superficie, fijación y acceso son adecuados.",
  },
  {
    q: "¿Pueden reparar una manilla exterior suelta?",
    a: "Sí. Podemos revisar manillas exteriores, tiradores, piezas visibles y herrajes que se han aflojado con el uso.",
  },
  {
    q: "¿Necesito comprar piezas nuevas?",
    a: "No siempre. Primero revisamos si se puede ajustar o apretar. Si la pieza está rota, oxidada o incompleta, puede hacer falta comprar un repuesto compatible.",
  },
  {
    q: "¿Hacen trabajos estructurales grandes?",
    a: "No. Este servicio está enfocado en pequeñas reparaciones visibles, ajustes y fijaciones exteriores prácticas, no en obras estructurales mayores.",
  },
  {
    q: "¿Pueden hacer varias tareas exteriores en una visita?",
    a: "Sí. Podemos combinar herrajes exteriores con reparación de vallas, ajuste de portón, montaje en pared, sellado exterior o instalación de accesorios.",
  },
  {
    q: "¿Qué necesito enviar para pedir presupuesto?",
    a: "Envíanos fotos del herraje, soporte o pieza exterior, zona de fijación, tornillos, superficie y un vídeo corto mostrando el movimiento o problema.",
  },
];

export default async function ReparacionHerrajesExteriorPage({
  params,
}: PageProps) {
  const { locale } = await params;
  const isEs = locale === "es";

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, quiero un presupuesto para reparación de herrajes exteriores."
      : "Hi, I would like a quote for outdoor hardware fixing."
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappText}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: isEs
      ? "Reparación de Herrajes Exteriores"
      : "Outdoor Hardware Fixing",
    serviceType: "Outdoor hardware fixing",
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
      price: "35",
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
      "Reparación de herrajes exteriores, soportes, escuadras, manillas, fijaciones, portones, vallas, montaje exterior y servicios handyman en Valencia.",
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
          ? "Reparación de Herrajes Exteriores"
          : "Outdoor Hardware Fixing",
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
              Herrajes, soportes y fijaciones exteriores en Valencia
            </div>

            <h1 className="text-4xl font-black tracking-tight md:text-6xl">
              Reparación de herrajes exteriores
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-700">
              Pequeñas reparaciones, apriete y ajuste de herrajes exteriores
              visibles, soportes, escuadras, manillas, fijaciones y elementos
              prácticos para mejorar estabilidad, uso y aspecto exterior.
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
                "Desde 35€",
                "Soportes exteriores",
                "Manillas y tiradores",
                "Fijaciones visibles",
                "Ajuste práctico",
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
              <Wrench className="mb-6 h-12 w-12 text-black" />
              <p className="text-sm font-black uppercase tracking-widest">
                THEVULGO Valencia
              </p>
              <h2 className="mt-3 text-3xl font-black">
                Outdoor hardware fixing. Tightened. Adjusted. Ready to use.
              </h2>
              <p className="mt-4 font-medium leading-7 text-neutral-900">
                Revisamos piezas visibles, tornillos, soportes y superficies
                exteriores para hacer una corrección práctica y limpia.
              </p>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                ["Visible fittings", "Herrajes exteriores visibles"],
                ["Better stability", "Más firmeza cuando es posible"],
                ["Practical repair", "Ajuste pequeño y útil"],
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
              title: "Ajuste seguro",
              text: "Revisamos si el herraje puede mejorar con apriete o corrección básica.",
            },
            {
              icon: Hammer,
              title: "Fijaciones visibles",
              text: "Trabajamos con soportes, tornillos, manillas y piezas accesibles.",
            },
            {
              icon: Ruler,
              title: "Mejor uso diario",
              text: "Buscamos que el elemento exterior quede más firme y práctico.",
            },
            {
              icon: Star,
              title: "Precio claro",
              text: "Desde 35€. Presupuesto según fotos, piezas y dificultad.",
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
          Ajuste de herrajes y elementos exteriores visibles
        </h2>

        <div className="mt-6 space-y-5 text-lg leading-8 text-neutral-700">
          <p>
            En THEVULGO realizamos pequeñas reparaciones de herrajes exteriores
            en Valencia para patios, terrazas, entradas, vallas, portones,
            zonas exteriores y propiedades de alquiler.
          </p>

          <p>
            Antes de trabajar revisamos el tipo de herraje, estado de la pieza,
            tornillos, superficie, acceso, estabilidad, oxidación visible y si
            hace falta una pieza compatible. Esto ayuda a saber si es un ajuste
            sencillo o una sustitución.
          </p>

          <p>
            También podemos combinar este trabajo con reparación de vallas,
            ajuste de portón exterior, montaje en pared exterior, sellado,
            buzones, números de casa o pequeños trabajos de acabado exterior.
          </p>
        </div>
      </section>

      <section className="bg-yellow-50 py-16">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <h2 className="text-3xl font-black md:text-4xl">
            ¿Qué incluye la reparación de herrajes exteriores?
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              "Revisión del herraje visible",
              "Comprobación de tornillos",
              "Revisión de soporte o escuadra",
              "Detección de piezas sueltas",
              "Apriete o ajuste básico",
              "Comprobación de estabilidad",
              "Revisión del funcionamiento",
              "Recomendación si hace falta pieza",
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
          Herrajes exteriores que podemos revisar
        </h2>

        <div className="grid gap-8 md:grid-cols-4">
          {[
            {
              title: "Soportes exteriores",
              text: "Ajuste y apriete de soportes visibles en zonas exteriores accesibles.",
            },
            {
              title: "Escuadras y fijaciones",
              text: "Revisión de escuadras, tornillos y puntos de sujeción.",
            },
            {
              title: "Manillas exteriores",
              text: "Corrección de tiradores, manillas y piezas que se han aflojado.",
            },
            {
              title: "Elementos prácticos",
              text: "Pequeños herrajes de uso diario en patios, accesos o terrazas.",
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
          ¿Dónde reparamos herrajes exteriores?
        </h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {[
            "Patios y terrazas",
            "Entradas exteriores",
            "Vallas y portones",
            "Balcones accesibles",
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
          Si el herraje está muy oxidado, roto, falta una pieza o la superficie
          está dañada, puede hacer falta una sustitución o reparación adicional.
          Envíanos fotos y vídeo para revisar el caso.
        </p>
      </section>

      <section className="bg-yellow-400 py-16 text-black">
        <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
          <p className="text-sm font-black uppercase tracking-widest">
            Desde 35€
          </p>
          <h2 className="mt-3 text-4xl font-black">
            Precio para reparar herrajes exteriores
          </h2>
          <p className="mt-6 text-lg font-medium leading-8 text-neutral-900">
            El precio depende del tipo de herraje, estado de la pieza,
            tornillos, acceso exterior, superficie, piezas necesarias y
            dificultad. Envíanos fotos para darte un presupuesto claro.
          </p>

          <div className="mt-8 rounded-3xl border border-yellow-600/30 bg-white p-6 text-left shadow-xl">
            <h3 className="text-xl font-black">El precio depende de:</h3>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Tipo de herraje",
                "Estado de la pieza",
                "Tornillos y fijaciones",
                "Superficie exterior",
                "Acceso a la zona",
                "Piezas necesarias",
                "Número de elementos",
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
          Realizamos reparación de herrajes exteriores en Valencia ciudad y
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
              title: "Ajuste de portón exterior",
              href: `/${locale}/services/exterior/ajuste-porton-exterior`,
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
            ¿Quieres reparar herrajes exteriores?
          </h2>
          <p className="mt-5 text-lg font-medium text-neutral-900">
            Envíanos fotos del herraje, soporte, manilla, fijación o elemento
            exterior y un vídeo corto mostrando el problema. Te damos un
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