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
  Archive,
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
      ? "Montaje de Cómodas y Cajoneras en Valencia | Desde 45€ | THEVULGO"
      : "Dresser & Drawer Assembly in Valencia | From €45 | THEVULGO",
    description: isEs
      ? "Montaje profesional de cómodas y cajoneras en Valencia desde 45€. Cajones, guías, alineación, ajuste correcto y estructura estable para uso diario."
      : "Professional dresser and drawer assembly in Valencia from €45. Drawers, runners, alignment, correct adjustment and stable structure for daily use.",
    alternates: {
      canonical: `${siteUrl}/${locale}/montaje-comodas-cajoneras-valencia`,
      languages: {
        es: `${siteUrl}/es/montaje-comodas-cajoneras-valencia`,
      },
    },
    openGraph: {
      title: isEs
        ? "Montaje de Cómodas y Cajoneras en Valencia | THEVULGO"
        : "Dresser & Drawer Assembly in Valencia | THEVULGO",
      description: isEs
        ? "Montaje limpio de cajoneras con guías y ajuste correcto de cajones en Valencia."
        : "Clean drawer unit assembly with correct runner and drawer adjustment in Valencia.",
      url: `${siteUrl}/${locale}/montaje-comodas-cajoneras-valencia`,
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
    q: "¿Cuánto cuesta montar una cómoda o cajonera en Valencia?",
    a: "El montaje de cómodas y cajoneras empieza desde 45€. El precio final depende del tamaño, número de cajones, tipo de guías, dificultad y si hay que fijar el mueble a la pared.",
  },
  {
    q: "¿Montan cajoneras IKEA?",
    a: "Sí. Montamos cajoneras IKEA y muebles tipo flat-pack de Leroy Merlin, Amazon, JYSK, Conforama, Bauhaus, Carrefour y otras tiendas.",
  },
  {
    q: "¿Ajustan las guías de los cajones?",
    a: "Sí. Revisamos guías, cajones, frentes, alineación y apertura/cierre para que el mueble funcione correctamente.",
  },
  {
    q: "¿Pueden fijar la cómoda a la pared?",
    a: "Sí. En muchos casos es recomendable fijar cómodas y cajoneras a la pared por seguridad, especialmente si son altas o estrechas.",
  },
  {
    q: "¿Tengo que tener herramientas?",
    a: "No. Llevamos herramientas profesionales. Solo necesitas tener las piezas, tornillos, accesorios e instrucciones disponibles.",
  },
  {
    q: "¿Pueden montar varios muebles en una visita?",
    a: "Sí. Podemos montar varias cómodas, cajoneras, armarios, camas o estanterías en la misma visita.",
  },
  {
    q: "¿Cuánto tarda montar una cajonera?",
    a: "Depende del número de cajones y la dificultad. Una cajonera sencilla puede tardar alrededor de una hora, mientras que una cómoda grande puede tardar más.",
  },
  {
    q: "¿Trabajan fuera de Valencia ciudad?",
    a: "Sí. Trabajamos en Valencia y alrededores como Mislata, Burjassot, Paterna, Torrent, Sagunto, Cullera, Gandía y otras zonas cercanas.",
  },
];

export default async function DrawerAssemblyValenciaPage({ params }: PageProps) {
  const { locale } = await params;
  const isEs = locale === "es";

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, quiero un presupuesto para montaje de cómoda o cajonera en Valencia."
      : "Hi, I would like a quote for dresser or drawer assembly in Valencia."
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappText}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Montaje de Cómodas y Cajoneras en Valencia",
    serviceType: "Dresser and drawer assembly",
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
      price: "45",
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
      "Montaje de cómodas, cajoneras, muebles IKEA, armarios, camas, estanterías, muebles flat-pack y servicios handyman en Valencia.",
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
        name: "Montaje de Cómodas y Cajoneras en Valencia",
        item: `${siteUrl}/${locale}/montaje-comodas-cajoneras-valencia`,
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
              Cómodas · Cajoneras · IKEA · Guías · Cajones
            </div>

            <h1 className="text-4xl font-black tracking-tight md:text-6xl">
              Montaje de cómodas y cajoneras{" "}
              <span className="text-yellow-500">en Valencia</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-700">
              Montaje limpio de cajoneras desde{" "}
              <strong className="text-neutral-950">45€</strong>, con guías y
              ajuste correcto de cajones. Montamos cómodas, cajoneras IKEA,
              muebles flat-pack y revisamos alineación, estabilidad y seguridad.
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
                "Montaje desde 45€",
                "Cómodas y cajoneras",
                "Guías y cajones",
                "Ajuste de frentes",
                "Fijación a pared si hace falta",
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
              <Archive className="mb-6 h-12 w-12 text-black" />
              <p className="text-sm font-black uppercase tracking-widest">
                THEVULGO Valencia
              </p>
              <h2 className="mt-3 text-3xl font-black">
                Drawer assembly. Smooth. Aligned. Stable.
              </h2>
              <p className="mt-4 font-medium leading-7 text-neutral-900">
                Montamos la estructura, instalamos guías, ajustamos cajones y
                dejamos la cómoda estable y lista para uso diario.
              </p>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                ["Drawer runners", "Guías instaladas correctamente"],
                ["Clean alignment", "Frentes y cajones alineados"],
                ["Stable structure", "Estructura firme y segura"],
                ["Fast replies", "Respuesta rápida por WhatsApp"],
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
              icon: Wrench,
              title: "Montaje completo",
              text: "Estructura, cajones, guías, frentes y accesorios.",
            },
            {
              icon: Ruler,
              title: "Alineación correcta",
              text: "Ajustamos cajones y frentes para buen cierre.",
            },
            {
              icon: ShieldCheck,
              title: "Estructura estable",
              text: "Revisamos firmeza, patas, tornillos y seguridad.",
            },
            {
              icon: Star,
              title: "Precio claro",
              text: "Presupuesto antes del trabajo según fotos y dificultad.",
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
          Montaje profesional de cómodas y cajoneras en Valencia
        </h2>

        <div className="mt-6 space-y-5 text-lg leading-8 text-neutral-700">
          <p>
            En THEVULGO realizamos montaje de cómodas y cajoneras en Valencia
            para pisos, casas, apartamentos, habitaciones, oficinas y propiedades
            de alquiler. Montamos cajoneras IKEA, cómodas tipo flat-pack, muebles
            con guías, cajones, patas, tiradores y sistemas de almacenamiento.
          </p>

          <p>
            Una cajonera bien montada debe abrir y cerrar correctamente, tener
            los frentes alineados y una estructura estable. Revisamos guías,
            tornillos, uniones, cajones, patas y nivelación para evitar roces,
            desajustes o movimientos innecesarios.
          </p>

          <p>
            También podemos fijar cómodas o cajoneras a la pared cuando sea
            recomendable por seguridad. Esto es especialmente importante en
            muebles altos, estrechos o con muchos cajones. Si tienes el modelo o
            fotos de las cajas, envíanos la información antes de la visita.
          </p>
        </div>
      </section>

      <section className="bg-yellow-50 py-16">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <h2 className="text-3xl font-black md:text-4xl">
            ¿Qué incluye el montaje de cajoneras?
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              "Revisión de piezas e instrucciones",
              "Montaje de estructura principal",
              "Instalación de guías",
              "Montaje de cajones",
              "Ajuste de frentes y tiradores",
              "Revisión de apertura y cierre",
              "Fijación a pared si hace falta",
              "Comprobación final de estabilidad",
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
          Tipos de muebles que montamos
        </h2>

        <div className="grid gap-8 md:grid-cols-4">
          {[
            {
              title: "Cajoneras IKEA",
              text: "Montaje de cajoneras flat-pack con guías, cajones y tiradores.",
            },
            {
              title: "Cómodas grandes",
              text: "Estructura, cajones, patas, frentes y revisión de estabilidad.",
            },
            {
              title: "Muebles con guías",
              text: "Instalación y ajuste de guías para apertura y cierre correcto.",
            },
            {
              title: "Almacenamiento",
              text: "Muebles para dormitorio, oficina, vestidor o habitación infantil.",
            },
          ].map((item) => (
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
            Desde 45€
          </p>
          <h2 className="mt-3 text-4xl font-black">
            Presupuesto para montar cómoda o cajonera en Valencia
          </h2>
          <p className="mt-6 text-lg font-medium leading-8 text-neutral-900">
            El precio depende del tamaño, número de cajones, tipo de guías,
            dificultad, fijación a pared y si hay varios muebles en una visita.
            Envíanos fotos o modelo y te damos un precio claro.
          </p>

          <div className="mt-8 rounded-3xl border border-yellow-600/30 bg-white p-6 text-left shadow-xl">
            <h3 className="text-xl font-black">El precio depende de:</h3>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Tipo de mueble",
                "Número de cajones",
                "Tipo de guías",
                "Tamaño y peso",
                "Tiradores y frentes",
                "Fijación a pared",
                "Varios muebles",
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
          Realizamos montaje de cómodas y cajoneras en Valencia ciudad y
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
              title: "Montaje de muebles IKEA",
              href: `/${locale}/montaje-muebles-ikea-valencia`,
            },
            {
              title: "Montaje de armario",
              href: `/${locale}/montaje-armario-valencia`,
            },
            {
              title: "Montaje de cama",
              href: `/${locale}/montaje-cama-valencia`,
            },
            {
              title: "Montaje de muebles en Valencia",
              href: `/${locale}/montaje-muebles-valencia`,
            },
            {
              title: "Instalación de estanterías",
              href: `/${locale}/instalacion-estanterias-valencia`,
            },
            {
              title: "Servicios handyman Valencia",
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
            ¿Quieres montar una cómoda o cajonera en Valencia?
          </h2>
          <p className="mt-5 text-lg font-medium text-neutral-900">
            Envíanos fotos del mueble, cajas o modelo. Te damos un presupuesto
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