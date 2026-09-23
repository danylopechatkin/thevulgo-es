import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  PackageCheck,
  ShieldCheck,
  Wrench,
  Home,
  HelpCircle,
  MapPin,
  Star,
  Ruler,
  LibraryBig,
} from "lucide-react";

type PageProps = {
  params: Promise<{ locale: string }>;
};

const siteUrl = "https://www.thevulgo.es";
const phoneNumber = "34610076942";

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";

  return {
    title: isEs
      ? "Montaje de Estanterías en Valencia | 39 € | THEVULGO"
      : "Shelf & Bookcase Assembly in Valencia | €39 | THEVULGO",
    description: isEs
      ? "Montaje profesional de estanterías, librerías y unidades independientes en Valencia por 39 €. Alineación correcta, estructura estable y fijación a pared si hace falta."
      : "Professional shelf, bookcase and freestanding unit assembly in Valencia for €39. Correct alignment, stable structure and wall fixing if needed.",
    alternates: {
      canonical: `${siteUrl}${locale === "es" ? "/es" : ""}/services/furniture/montaje-estanterias-valencia`,
      languages: {
        es: `${siteUrl}/es/services/furniture/montaje-estanterias-valencia`,
        en: `${siteUrl}/services/furniture/montaje-estanterias-valencia`,
        "x-default": `${siteUrl}/es/services/furniture/montaje-estanterias-valencia`,
      },
    },
    openGraph: {
      title: isEs
        ? "Montaje de Estanterías en Valencia | THEVULGO"
        : "Shelf & Bookcase Assembly in Valencia | THEVULGO",
      description: isEs
        ? "Montaje de estanterías, librerías y unidades independientes en Valencia."
        : "Shelf, bookcase and freestanding unit assembly in Valencia.",
      url: `${siteUrl}${locale === "es" ? "/es" : ""}/services/furniture/montaje-estanterias-valencia`,
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
    q: "¿Cuánto cuesta montar una estantería en Valencia?",
    a: "El montaje de estanterías cuesta 39 €. El precio final depende del tamaño, número de piezas, tipo de estantería, altura, peso y si hace falta fijarla a la pared.",
  },
  {
    q: "¿Montan librerías grandes?",
    a: "Sí. Montamos librerías pequeñas, medianas y grandes, revisando estructura, nivelación, estabilidad y fijación a pared cuando sea recomendable.",
  },
  {
    q: "¿Pueden fijar la estantería a la pared?",
    a: "Sí. En muchas estanterías altas o estrechas es recomendable fijarlas a la pared por seguridad. Podemos hacerlo si la pared lo permite.",
  },
  {
    q: "¿Montan estanterías IKEA?",
    a: "Sí. Montamos estanterías IKEA y muebles tipo flat-pack de Leroy Merlin, Amazon, JYSK, Conforama, Bauhaus, Carrefour y otras tiendas.",
  },
  {
    q: "¿Montan unidades independientes?",
    a: "Sí. Montamos unidades independientes, librerías, módulos de almacenamiento, cubos, estanterías abiertas y muebles auxiliares.",
  },
  {
    q: "¿Tengo que tener herramientas?",
    a: "No. Llevamos herramientas profesionales. Solo necesitas tener las piezas, tornillos, accesorios e instrucciones disponibles.",
  },
  {
    q: "¿Cuánto tarda montar una estantería?",
    a: "Depende del tamaño y dificultad. Una estantería sencilla puede tardar menos de una hora, mientras que una librería grande o varios módulos pueden tardar más.",
  },
  {
    q: "¿Trabajan fuera de Valencia ciudad?",
    a: "Sí. Trabajamos en Valencia y alrededores como Mislata, Burjassot, Paterna, Torrent, Sagunto, Cullera, Gandía y otras zonas cercanas.",
  },
];

export default async function ShelvingAssemblyValenciaPage({
  params,
}: PageProps) {
  const { locale } = await params;
  const isEs = locale === "es";
  const t = (es: string, en: string) => (isEs ? es : en);

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, quiero un presupuesto para montaje de estanterías en Valencia."
      : "Hi, I would like a quote for shelf or bookcase assembly in Valencia."
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappText}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Montaje de Estanterías en Valencia",
    serviceType: "Shelf and bookcase assembly",
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
      "Montaje de estanterías, librerías, unidades independientes, muebles IKEA, armarios, camas, cómodas y servicios handyman en Valencia.",
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
        item: `${siteUrl}${locale === "es" ? "/es" : ""}/services`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Montaje de Estanterías en Valencia",
        item: `${siteUrl}${locale === "es" ? "/es" : ""}/services/furniture/montaje-estanterias-valencia`,
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
              {t("Estanterías · Librerías · Módulos · IKEA · Flat-pack", "Shelves · Bookcases · Storage units · IKEA · Flat-pack")}
            </div>

            <h1 className="text-4xl font-black tracking-tight md:text-6xl">
              {t("Montaje de estanterías", "Shelf and bookcase assembly")} <span className="text-yellow-500">{t("en Valencia", "in Valencia")}</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-700">
              {t("Montaje de estanterías, librerías y unidades independientes por ", "Shelf, bookcase and freestanding storage assembly for ")}<strong className="text-neutral-950">{t("39 €", "€39")}</strong>. {t("Alineación correcta, estructura estable y fijación a pared si hace falta para mayor seguridad.", "Correct alignment, a stable structure and wall fixing when needed for safety.")}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappUrl}
                className="inline-flex items-center justify-center rounded-xl bg-yellow-400 px-6 py-4 font-black text-black shadow-md transition hover:scale-105 hover:bg-yellow-300"
              >
                {t("Pedir presupuesto por WhatsApp", "Request a quote on WhatsApp")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>

              <a
                href={`tel:+${phoneNumber}`}
                className="inline-flex items-center justify-center rounded-xl border border-neutral-300 bg-white px-6 py-4 font-black text-neutral-950 shadow-sm transition hover:scale-105 hover:border-yellow-400"
              >
                {t("Llamar ahora", "Call now")}
              </a>
            </div>

            <div className="mt-8 grid gap-3 text-sm font-semibold text-neutral-700 sm:grid-cols-2">
              {(isEs ? [
                "Montaje por 39 €",
                "Estanterías y librerías",
                "Unidades independientes",
                "Alineación correcta",
                "Fijación a pared si hace falta",
                "Valencia y alrededores",
              ] : ["Assembly for €39", "Shelves and bookcases", "Freestanding units", "Correct alignment", "Wall fixing when needed", "Valencia and nearby areas"]).map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-yellow-500" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-yellow-300 bg-white p-4 shadow-2xl md:p-6">
            <div className="rounded-2xl bg-yellow-400 p-8 text-black shadow-md">
              <LibraryBig className="mb-6 h-12 w-12 text-black" />
              <p className="text-sm font-black uppercase tracking-widest">
                THEVULGO Valencia
              </p>
              <h2 className="mt-3 text-3xl font-black">
                Shelving assembly. Straight. Stable. Clean.
              </h2>
              <p className="mt-4 font-medium leading-7 text-neutral-900">
                {t("Montamos la estructura, alineamos módulos, revisamos estabilidad y fijamos a la pared cuando es recomendable.", "We assemble the structure, align modules, check stability and fix it to the wall when recommended.")}
              </p>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {(isEs ? [
                ["Bookcases", "Librerías y estanterías grandes"],
                ["Freestanding units", "Módulos independientes"],
                ["Wall safety", "Fijación a pared si conviene"],
                ["Fast replies", "Respuesta rápida por WhatsApp"],
              ] : [["Bookcases", "Large bookcases and shelving units"], ["Freestanding units", "Independent storage modules"], ["Wall safety", "Wall fixing when appropriate"], ["Fast replies", "Quick replies on WhatsApp"]]).map(([title, text]) => (
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
          {(isEs ? [
            {
              icon: Wrench,
              title: "Montaje completo",
              text: "Estructura, baldas, módulos, trasera y accesorios.",
            },
            {
              icon: Ruler,
              title: "Alineación correcta",
              text: "Revisamos nivelación, verticalidad y encaje de piezas.",
            },
            {
              icon: ShieldCheck,
              title: "Estructura estable",
              text: "Comprobamos firmeza y fijación para uso diario.",
            },
            {
              icon: Star,
              title: "Precio claro",
              text: "Presupuesto antes del trabajo según fotos y dificultad.",
            },
          ] : [
            { icon: Wrench, title: "Complete assembly", text: "Frame, shelves, modules, back panel and accessories." },
            { icon: Ruler, title: "Correct alignment", text: "We check level, vertical alignment and the fit of each part." },
            { icon: ShieldCheck, title: "Stable structure", text: "We check firmness and fixing for everyday use." },
            { icon: Star, title: "Clear price", text: "A quote before the work based on photos and difficulty." },
          ]).map((item) => (
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
          {t("Montaje profesional de estanterías y librerías en Valencia", "Professional shelf and bookcase assembly in Valencia")}
        </h2>

        <div className="mt-6 space-y-5 text-lg leading-8 text-neutral-700">
          {(isEs ? ["En THEVULGO realizamos montaje de estanterías en Valencia para pisos, casas, apartamentos, oficinas, locales y propiedades de alquiler. Montamos librerías, estanterías independientes, módulos de almacenamiento, cubos, muebles auxiliares y unidades tipo flat-pack.", "Una estantería bien montada debe quedar recta, estable y segura. Por eso revisamos la estructura, baldas, uniones, trasera, patas, nivelación y verticalidad. En estanterías altas o estrechas, recomendamos fijación a pared cuando sea necesario.", "También montamos estanterías IKEA, Leroy Merlin, Amazon, JYSK, Conforama, Bauhaus, Carrefour y otros muebles similares. Si tienes una librería grande o varios módulos, envíanos fotos o modelo para calcular mejor el tiempo y el presupuesto."] : ["THEVULGO assembles shelving in Valencia for homes, apartments, offices, commercial spaces and rental properties. We assemble bookcases, freestanding shelves, storage units, cubes, occasional furniture and flat-pack units.", "A properly assembled shelving unit should be straight, stable and safe. We check the structure, shelves, joints, back panel, feet, level and vertical alignment. For tall or narrow units, we recommend wall fixing when needed.", "We also assemble shelving from IKEA, Leroy Merlin, Amazon, JYSK, Conforama, Bauhaus, Carrefour and similar brands. Send the model or photos of large bookcases or multiple units for an accurate quote."]).map((p) => <p key={p}>{p}</p>)}
        </div>
      </section>

      <section className="bg-yellow-50 py-16">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <h2 className="text-3xl font-black md:text-4xl">
            {t("¿Qué incluye el montaje de estanterías?", "What does shelf assembly include?")}
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {(isEs ? [
              "Revisión de piezas e instrucciones",
              "Montaje de estructura principal",
              "Instalación de baldas",
              "Montaje de módulos independientes",
              "Revisión de nivelación",
              "Ajuste de trasera y uniones",
              "Fijación a pared si hace falta",
              "Comprobación final de estabilidad",
              "Presupuesto claro antes del trabajo",
            ] : ["Parts and instructions check", "Main frame assembly", "Shelf installation", "Freestanding module assembly", "Level check", "Back panel and joint adjustment", "Wall fixing when needed", "Final stability check", "Clear quote before work"]).map((item) => (
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
          {t("Tipos de estanterías que montamos", "Types of shelving we assemble")}
        </h2>

        <div className="grid gap-8 md:grid-cols-4">
          {(isEs ? [
            {
              title: "Librerías",
              text: "Montaje de librerías pequeñas, medianas y grandes para salón u oficina.",
            },
            {
              title: "Estanterías abiertas",
              text: "Unidades abiertas para decoración, libros, cajas y almacenamiento.",
            },
            {
              title: "Módulos independientes",
              text: "Cubos, unidades auxiliares, separadores y módulos de almacenaje.",
            },
            {
              title: "Estanterías altas",
              text: "Revisión de estabilidad y fijación a pared cuando sea recomendable.",
            },
          ] : [{ title: "Bookcases", text: "Small, medium and large bookcases for living rooms or offices." }, { title: "Open shelving", text: "Open units for decoration, books, boxes and storage." }, { title: "Freestanding units", text: "Cubes, occasional units, room dividers and storage modules." }, { title: "Tall shelving", text: "Stability review and wall fixing when recommended." }]).map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-yellow-300 bg-white p-7 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400">
                <PackageCheck className="h-8 w-8 text-black" />
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
            39 €
          </p>
          <h2 className="mt-3 text-4xl font-black">
            {t("Presupuesto para montar estanterías en Valencia", "Quote for shelf assembly in Valencia")}
          </h2>
          <p className="mt-6 text-lg font-medium leading-8 text-neutral-900">
            {t("El precio depende del tamaño, número de módulos, altura, peso, dificultad, fijación a pared y si hay varios muebles en una visita. Envíanos fotos o modelo y te damos un precio claro.", "The price depends on size, number of modules, height, weight, difficulty, wall fixing and whether several items are assembled in one visit. Send photos or the model for a clear quote.")}
          </p>

          <div className="mt-8 rounded-3xl border border-yellow-600/30 bg-white p-6 text-left shadow-xl">
            <h3 className="text-xl font-black">{t("El precio depende de:", "The price depends on:")}</h3>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {(isEs ? [
                "Tipo de estantería",
                "Tamaño y altura",
                "Número de módulos",
                "Cantidad de baldas",
                "Fijación a pared",
                "Peso y estabilidad",
                "Varios muebles",
                "Distancia fuera de Valencia",
              ] : ["Type of shelving", "Size and height", "Number of modules", "Number of shelves", "Wall fixing", "Weight and stability", "Several furniture items", "Distance outside Valencia"]).map((item) => (
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
            {t("Enviar fotos y pedir precio", "Send photos and request a price")}
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <h2 className="text-3xl font-black md:text-4xl">
          {t("Zonas donde trabajamos", "Areas we cover")}
        </h2>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-neutral-700">
          {t("Realizamos montaje de estanterías y librerías en Valencia ciudad y alrededores. Si estás fuera de Valencia, envíanos tu dirección y te confirmamos disponibilidad.", "We assemble shelving and bookcases in Valencia city and nearby areas. If you are outside Valencia, send us your address so we can confirm coverage.")}
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
            {t("Preguntas frecuentes", "Frequently asked questions")}
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
          {t("Servicios relacionados", "Related services")}
        </h2>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {(isEs ? [
            {
              title: "Instalación de estanterías en pared",
              href: `/${locale}/services/furniture/instalacion-estanterias-valencia`,
            },
            {
              title: "Montaje de muebles IKEA",
              href: `/${locale}/montaje-muebles-ikea-valencia`,
            },
            {
              title: "Montaje de armario",
              href: `/${locale}/montaje-armario-valencia`,
            },
            {
              title: "Montaje de cómodas y cajoneras",
              href: `/${locale}/services/furniture/montaje-comodas-cajoneras-valencia`,
            },
            {
              title: "Montaje de TV en Valencia",
              href: `/${locale}/montaje-tv-valencia`,
            },
            {
              title: "Servicios handyman Valencia",
              href: `/${locale}/handyman-valencia`,
            },
          ] : [{ title: "Wall shelf installation", href: `/${locale}/services/furniture/instalacion-estanterias-valencia` }, { title: "IKEA furniture assembly", href: `/${locale}/montaje-muebles-ikea-valencia` }, { title: "Wardrobe assembly", href: `/${locale}/montaje-armario-valencia` }, { title: "Chest of drawers assembly", href: `/${locale}/services/furniture/montaje-comodas-cajoneras-valencia` }, { title: "TV mounting in Valencia", href: `/${locale}/montaje-tv-valencia` }, { title: "Handyman in Valencia", href: `/${locale}/handyman-valencia` }]).map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group rounded-2xl border border-yellow-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-yellow-400 hover:shadow-md"
            >
              <p className="text-xl font-black">{item.title}</p>
              <p className="mt-3 inline-flex items-center font-bold text-neutral-700 group-hover:text-black">
                {t("Ver servicio", "View service")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-yellow-400 py-16">
        <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
          <h2 className="text-4xl font-black tracking-tight">
            {t("¿Quieres montar una estantería en Valencia?", "Need a shelving unit assembled in Valencia?")}
          </h2>
          <p className="mt-5 text-lg font-medium text-neutral-900">
            {t("Envíanos fotos de la estantería, cajas o modelo. Te damos un presupuesto claro antes de empezar.", "Send photos of the shelving, boxes or model. We will provide a clear quote before work begins.")}
          </p>

          <a
            href={whatsappUrl}
            className="mt-8 inline-flex items-center justify-center rounded-xl bg-black px-8 py-4 font-black text-white shadow-xl transition hover:scale-105"
          >
            {t("Pedir presupuesto ahora", "Request a quote now")}
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>
    </main>
  );
}
