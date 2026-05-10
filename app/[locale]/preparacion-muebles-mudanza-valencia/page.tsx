import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  PackageOpen,
  ShieldCheck,
  Wrench,
  Home,
  HelpCircle,
  MapPin,
  Star,
  Ruler,
  PackageCheck,
} from "lucide-react";

type PageProps = {
  params: Promise<{ locale: string }>;
};

const siteUrl = "https://thevulgo.es";
const phoneNumber = "34610076942";

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";

  return {
    title: isEs
      ? "Preparación de Muebles al Mudarse en Valencia | THEVULGO"
      : "Move-In Furniture Setup in Valencia | THEVULGO",
    description: isEs
      ? "Preparación de muebles al mudarse en Valencia. Montaje de varias piezas para habitaciones, pisos, alquileres, mudanzas y home setup. Presupuesto personalizado."
      : "Move-in furniture setup in Valencia. Assembly of multiple pieces for rooms, apartments, rentals, moving days and home setup. Custom quote.",
    alternates: {
      canonical: `${siteUrl}/${locale}/preparacion-muebles-mudanza-valencia`,
      languages: {
        es: `${siteUrl}/es/preparacion-muebles-mudanza-valencia`,
      },
    },
    openGraph: {
      title: isEs
        ? "Preparación de Muebles al Mudarse en Valencia | THEVULGO"
        : "Move-In Furniture Setup in Valencia | THEVULGO",
      description: isEs
        ? "Montaje de varias piezas durante la preparación de una habitación o piso en Valencia."
        : "Assembly of multiple furniture pieces during room or apartment setup in Valencia.",
      url: `${siteUrl}/${locale}/preparacion-muebles-mudanza-valencia`,
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
    q: "¿Cuánto cuesta preparar muebles al mudarse en Valencia?",
    a: "Este servicio tiene presupuesto personalizado. El precio depende del número de muebles, tamaño, dificultad, tiempo necesario, si hay que fijar piezas a la pared y la zona de trabajo.",
  },
  {
    q: "¿Qué muebles pueden montar durante una mudanza?",
    a: "Podemos montar camas, armarios, escritorios, estanterías, cómodas, cajoneras, mesas, muebles TV, muebles de entrada y otras piezas tipo flat-pack.",
  },
  {
    q: "¿Pueden montar varios muebles en una sola visita?",
    a: "Sí. Este servicio está pensado para montar varias piezas durante la preparación de una habitación, piso o apartamento.",
  },
  {
    q: "¿Trabajan con muebles IKEA?",
    a: "Sí. Montamos muebles IKEA y también muebles de Leroy Merlin, Amazon, JYSK, Conforama, Bauhaus, Carrefour y otras tiendas.",
  },
  {
    q: "¿Pueden fijar muebles a la pared?",
    a: "Sí. Podemos fijar muebles altos, armarios, estanterías o unidades de almacenamiento si la pared lo permite y es recomendable por seguridad.",
  },
  {
    q: "¿Pueden organizar el orden del trabajo?",
    a: "Sí. Podemos priorizar primero cama, armario, escritorio o lo más urgente para que la habitación o piso quede funcional lo antes posible.",
  },
  {
    q: "¿Tengo que tener herramientas?",
    a: "No. Llevamos herramientas profesionales. Solo necesitas tener las cajas, piezas, tornillos, instrucciones y espacio libre para trabajar.",
  },
  {
    q: "¿Trabajan fuera de Valencia ciudad?",
    a: "Sí. Trabajamos en Valencia y alrededores como Mislata, Burjassot, Paterna, Torrent, Sagunto, Cullera, Gandía y otras zonas cercanas.",
  },
];

export default async function MoveInFurnitureSetupValenciaPage({
  params,
}: PageProps) {
  const { locale } = await params;
  const isEs = locale === "es";

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, quiero un presupuesto para preparar/montar muebles durante una mudanza en Valencia."
      : "Hi, I would like a quote for move-in furniture setup in Valencia."
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappText}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Preparación de Muebles al Mudarse en Valencia",
    serviceType: "Move-in furniture setup",
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
      "Preparación de muebles al mudarse, montaje de varias piezas, muebles IKEA, camas, armarios, escritorios, estanterías y servicios handyman en Valencia.",
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
        name: "Preparación de Muebles al Mudarse en Valencia",
        item: `${siteUrl}/${locale}/preparacion-muebles-mudanza-valencia`,
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
              Mudanza · Habitación · Piso · IKEA · Home setup
            </div>

            <h1 className="text-4xl font-black tracking-tight md:text-6xl">
              Preparación de muebles al mudarse{" "}
              <span className="text-yellow-500">en Valencia</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-700">
              Montaje de varias piezas durante la preparación de una habitación,
              piso o apartamento. Camas, armarios, escritorios, estanterías,
              cómodas y muebles IKEA con{" "}
              <strong className="text-neutral-950">presupuesto personalizado</strong>.
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
                "Presupuesto personalizado",
                "Montaje de varias piezas",
                "Habitaciones y pisos completos",
                "Muebles IKEA y flat-pack",
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
              <PackageOpen className="mb-6 h-12 w-12 text-black" />
              <p className="text-sm font-black uppercase tracking-widest">
                THEVULGO Valencia
              </p>
              <h2 className="mt-3 text-3xl font-black">
                Move-in furniture setup. Faster. Cleaner. Ready to live.
              </h2>
              <p className="mt-4 font-medium leading-7 text-neutral-900">
                Organizamos el montaje por prioridad para que tu habitación o
                piso quede funcional lo antes posible.
              </p>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                ["Multiple items", "Montaje de varias piezas"],
                ["Room setup", "Habitación o piso listo para usar"],
                ["IKEA furniture", "Muebles IKEA y flat-pack"],
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
              title: "Montaje por prioridad",
              text: "Primero lo urgente: cama, armario, escritorio o almacenamiento.",
            },
            {
              icon: Ruler,
              title: "Orden y alineación",
              text: "Revisamos estabilidad, ajuste y posición final.",
            },
            {
              icon: ShieldCheck,
              title: "Fijación si hace falta",
              text: "Anclaje de muebles altos o estanterías cuando conviene.",
            },
            {
              icon: Star,
              title: "Presupuesto claro",
              text: "Precio personalizado según cantidad de muebles y tiempo.",
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
          Preparación de muebles para mudanza en Valencia
        </h2>

        <div className="mt-6 space-y-5 text-lg leading-8 text-neutral-700">
          <p>
            En THEVULGO ayudamos con la preparación de muebles al mudarse en
            Valencia. Este servicio está pensado para personas que acaban de
            entrar en un piso, habitación, apartamento, oficina o propiedad de
            alquiler y necesitan montar varias piezas el mismo día.
          </p>

          <p>
            Podemos montar camas, armarios, escritorios, cómodas, cajoneras,
            estanterías, mesas, muebles TV, muebles de entrada y otras piezas
            tipo flat-pack. También podemos organizar el orden del trabajo para
            que primero quede lista la parte más importante del espacio.
          </p>

          <p>
            Si tienes muchas cajas o muebles, envíanos fotos, modelos o una lista
            de piezas por WhatsApp. Así podemos calcular tiempo, prioridad,
            herramientas necesarias y presupuesto personalizado.
          </p>
        </div>
      </section>

      <section className="bg-yellow-50 py-16">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <h2 className="text-3xl font-black md:text-4xl">
            ¿Qué puede incluir este servicio?
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              "Montaje de cama",
              "Montaje de armario",
              "Montaje de escritorio",
              "Montaje de estanterías",
              "Montaje de cómodas y cajoneras",
              "Montaje de muebles TV",
              "Fijación a pared si hace falta",
              "Organización por prioridad",
              "Presupuesto personalizado",
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
          Ideal para diferentes situaciones
        </h2>

        <div className="grid gap-8 md:grid-cols-4">
          {[
            {
              title: "Mudanza a piso",
              text: "Montaje de varias piezas para dejar el piso funcional rápido.",
            },
            {
              title: "Habitación nueva",
              text: "Cama, armario, escritorio, estantería y muebles básicos.",
            },
            {
              title: "Piso de alquiler",
              text: "Preparación rápida para inquilinos, Airbnb o vivienda turística.",
            },
            {
              title: "Home office",
              text: "Escritorio, cajonera, estantería y zona de trabajo compacta.",
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
            Presupuesto personalizado
          </p>
          <h2 className="mt-3 text-4xl font-black">
            Presupuesto para preparar muebles al mudarse en Valencia
          </h2>
          <p className="mt-6 text-lg font-medium leading-8 text-neutral-900">
            El precio depende del número de muebles, tamaño, dificultad, tiempo
            necesario, fijación a pared, transporte interno y zona. Envíanos una
            lista o fotos y te damos un precio claro.
          </p>

          <div className="mt-8 rounded-3xl border border-yellow-600/30 bg-white p-6 text-left shadow-xl">
            <h3 className="text-xl font-black">El precio depende de:</h3>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Número de muebles",
                "Tipo de piezas",
                "Tamaño y peso",
                "Cantidad de cajas",
                "Fijación a pared",
                "Orden de prioridad",
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
            Enviar lista y pedir precio
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <h2 className="text-3xl font-black md:text-4xl">
          Zonas donde trabajamos
        </h2>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-neutral-700">
          Realizamos preparación de muebles para mudanzas en Valencia ciudad y
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
              title: "Montaje de cama",
              href: `/${locale}/montaje-cama-valencia`,
            },
            {
              title: "Montaje de armario",
              href: `/${locale}/montaje-armario-valencia`,
            },
            {
              title: "Montaje de escritorios",
              href: `/${locale}/montaje-escritorios-valencia`,
            },
            {
              title: "Fijación de muebles a la pared",
              href: `/${locale}/fijacion-muebles-pared-valencia`,
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
            ¿Quieres preparar muebles al mudarte en Valencia?
          </h2>
          <p className="mt-5 text-lg font-medium text-neutral-900">
            Envíanos lista de muebles, fotos de cajas o modelos. Te damos un
            presupuesto personalizado antes de empezar.
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