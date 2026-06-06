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
const pagePath = "/services/exterior/sellado-impermeable-exterior";

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";

  return {
    title: isEs
      ? "Sellado Impermeable Exterior | Desde 49€ | THEVULGO"
      : "Outdoor Waterproof Sealing | From €49 | THEVULGO",
    description: isEs
      ? "Sellado impermeable exterior desde 49€. Sellado de pequeños huecos, juntas y zonas expuestas para ayudar a proteger superficies de humedad."
      : "Outdoor waterproof sealing from €49. Sealing of small exterior gaps, joints and exposed areas to help protect surfaces from moisture.",
    alternates: {
      canonical: `${siteUrl}/${locale}${pagePath}`,
      languages: {
        es: `${siteUrl}/es${pagePath}`,
        en: `${siteUrl}/en${pagePath}`,
      },
    },
    openGraph: {
      title: isEs
        ? "Sellado Impermeable Exterior | THEVULGO"
        : "Outdoor Waterproof Sealing | THEVULGO",
      description: isEs
        ? "Sellado exterior de juntas, huecos y zonas expuestas contra humedad."
        : "Exterior sealing of gaps, joints and exposed areas against moisture.",
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
    q: "¿Cuánto cuesta el sellado impermeable exterior?",
    a: "El sellado impermeable exterior empieza desde 49€. El precio depende del tamaño de la zona, tipo de junta, acceso, estado de la superficie, material necesario y dificultad.",
  },
  {
    q: "¿Qué zonas exteriores se pueden sellar?",
    a: "Podemos sellar pequeños huecos, juntas visibles, uniones, zonas expuestas, bordes exteriores y puntos donde conviene mejorar la protección frente a humedad.",
  },
  {
    q: "¿Esto soluciona filtraciones grandes?",
    a: "No. Este servicio está pensado para sellados pequeños y mejoras prácticas. Filtraciones importantes, humedad estructural o problemas grandes pueden requerir un especialista.",
  },
  {
    q: "¿Puede ayudar a proteger contra humedad?",
    a: "Sí. Un sellado adecuado puede ayudar a reducir entrada de humedad en pequeñas zonas expuestas y mejorar la durabilidad de elementos exteriores.",
  },
  {
    q: "¿Necesito comprar el sellador antes?",
    a: "Depende del caso. Podemos indicarte qué material conviene preparar después de revisar fotos de la zona, superficie y tipo de hueco o junta.",
  },
  {
    q: "¿Trabajan en terrazas, patios y entradas?",
    a: "Sí. Podemos revisar zonas exteriores accesibles como patios, terrazas, entradas, muros bajos, bordes, juntas y detalles exteriores visibles.",
  },
  {
    q: "¿Se puede combinar con otros trabajos exteriores?",
    a: "Sí. Podemos combinar sellado exterior con montaje en pared, reparación de herrajes, instalación de soportes, buzones, números de casa o retoques exteriores.",
  },
  {
    q: "¿Qué necesito enviar para pedir presupuesto?",
    a: "Envíanos fotos de la zona completa, detalle del hueco o junta, acceso, medidas aproximadas y explica si hay humedad visible o solo prevención.",
  },
];

export default async function SelladoImpermeableExteriorPage({
  params,
}: PageProps) {
  const { locale } = await params;
  const isEs = locale === "es";

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, quiero un presupuesto para sellado impermeable exterior."
      : "Hi, I would like a quote for outdoor waterproof sealing."
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappText}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: isEs ? "Sellado Impermeable Exterior" : "Outdoor Waterproof Sealing",
    serviceType: "Outdoor waterproof sealing",
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
      "Sellado impermeable exterior, sellado de juntas, huecos, zonas expuestas, montaje exterior, soportes, herrajes y servicios handyman en Valencia.",
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
          ? "Sellado Impermeable Exterior"
          : "Outdoor Waterproof Sealing",
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
              Sellado exterior, juntas, huecos y zonas expuestas
            </div>

            <h1 className="text-4xl font-black tracking-tight md:text-6xl">
              Sellado impermeable exterior
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-700">
              Sellado de pequeños huecos exteriores, juntas y zonas expuestas
              para ayudar a proteger superficies contra humedad y mejorar la
              durabilidad de elementos exteriores.
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
                "Juntas exteriores",
                "Pequeños huecos",
                "Zonas expuestas",
                "Protección frente a humedad",
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
                Outdoor sealing. Cleaner joints. Better moisture protection.
              </h2>
              <p className="mt-4 font-medium leading-7 text-neutral-900">
                Revisamos huecos, juntas, bordes y superficies expuestas para
                aplicar un sellado práctico y adecuado al exterior.
              </p>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                ["Small gaps", "Huecos exteriores pequeños"],
                ["Outdoor joints", "Juntas y uniones visibles"],
                ["Moisture protection", "Ayuda frente a humedad"],
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
              title: "Protección práctica",
              text: "Sellado de zonas expuestas para ayudar a reducir entrada de humedad.",
            },
            {
              icon: Wrench,
              title: "Trabajo limpio",
              text: "Aplicación en pequeños huecos, juntas y bordes accesibles.",
            },
            {
              icon: Ruler,
              title: "Revisión previa",
              text: "Comprobamos superficie, acceso y alcance antes de empezar.",
            },
            {
              icon: Star,
              title: "Precio claro",
              text: "Desde 49€. Presupuesto según fotos, zona y dificultad.",
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
          Sellado exterior para juntas, huecos y zonas expuestas
        </h2>

        <div className="mt-6 space-y-5 text-lg leading-8 text-neutral-700">
          <p>
            En THEVULGO realizamos sellado impermeable exterior en Valencia para
            pequeños huecos, juntas visibles, uniones, bordes, zonas expuestas y
            puntos donde conviene mejorar la protección frente a humedad.
          </p>

          <p>
            Antes de aplicar sellador revisamos el tipo de superficie, estado de
            la junta, tamaño del hueco, acceso, humedad visible, exposición al
            agua y material necesario. Esto ayuda a elegir una solución práctica
            y evitar un acabado débil o poco duradero.
          </p>

          <p>
            Este servicio está pensado para mejoras pequeñas y visibles, no para
            filtraciones graves, humedad estructural, terrazas completas o
            impermeabilización profesional de gran superficie.
          </p>
        </div>
      </section>

      <section className="bg-yellow-50 py-16">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <h2 className="text-3xl font-black md:text-4xl">
            ¿Qué incluye el sellado exterior?
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              "Revisión de la zona",
              "Comprobación de superficie",
              "Limpieza básica si procede",
              "Evaluación del hueco o junta",
              "Aplicación de sellado adecuado",
              "Acabado visible más limpio",
              "Revisión de bordes expuestos",
              "Recomendación si hace falta material",
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
          Zonas exteriores que podemos sellar
        </h2>

        <div className="grid gap-8 md:grid-cols-4">
          {[
            {
              title: "Juntas exteriores",
              text: "Sellado de juntas visibles en zonas accesibles y expuestas.",
            },
            {
              title: "Pequeños huecos",
              text: "Cierre de huecos pequeños donde conviene mejorar protección.",
            },
            {
              title: "Bordes expuestos",
              text: "Sellado de bordes y uniones exteriores para un acabado más protegido.",
            },
            {
              title: "Patios y terrazas",
              text: "Mejoras puntuales en zonas exteriores accesibles de uso diario.",
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
          ¿Dónde hacemos sellado impermeable exterior?
        </h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {[
            "Patios y terrazas",
            "Entradas exteriores",
            "Muros accesibles",
            "Bordes y juntas visibles",
            "Zonas expuestas a humedad",
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
          Si hay una filtración fuerte, humedad interna, grietas grandes o
          entrada de agua constante, puede hacer falta una evaluación técnica más
          especializada. Envíanos fotos para revisar si encaja como sellado
          práctico.
        </p>
      </section>

      <section className="bg-yellow-400 py-16 text-black">
        <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
          <p className="text-sm font-black uppercase tracking-widest">
            Desde 49€
          </p>
          <h2 className="mt-3 text-4xl font-black">
            Precio para sellado impermeable exterior
          </h2>
          <p className="mt-6 text-lg font-medium leading-8 text-neutral-900">
            El precio depende del tamaño de la zona, tipo de superficie, material
            necesario, acceso, humedad visible, preparación y dificultad.
            Envíanos fotos para darte un presupuesto claro.
          </p>

          <div className="mt-8 rounded-3xl border border-yellow-600/30 bg-white p-6 text-left shadow-xl">
            <h3 className="text-xl font-black">El precio depende de:</h3>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Tamaño de la zona",
                "Tipo de junta o hueco",
                "Estado de la superficie",
                "Material necesario",
                "Acceso exterior",
                "Preparación previa",
                "Nivel de humedad",
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
          Realizamos sellado impermeable exterior en Valencia ciudad y
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
              title: "Instalación de soportes exteriores",
              href: `/${locale}/services/exterior/instalacion-soportes-exteriores`,
            },
            {
              title: "Retoques de fachada",
              href: `/${locale}/services/exterior/retoques-fachada`,
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
            ¿Quieres sellar una zona exterior?
          </h2>
          <p className="mt-5 text-lg font-medium text-neutral-900">
            Envíanos fotos de la junta, hueco, borde o zona expuesta, medidas
            aproximadas y explica si hay humedad visible. Te damos un presupuesto
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