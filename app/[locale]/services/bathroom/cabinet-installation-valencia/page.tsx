import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  Bath,
  ShieldCheck,
  Home,
  HelpCircle,
  MapPin,
  Star,
  Ruler,
  Drill,
} from "lucide-react";

type PageProps = {
  params: Promise<{ locale: string }>;
};

const siteUrl = "https://www.thevulgo.es";
const phoneNumber = "34610076942";
const pagePath = "/services/bathroom/cabinet-installation-valencia";

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";

  return {
    title: isEs
      ? "Instalación de Mueble de Baño en Valencia | Desde 59€ | THEVULGO"
      : "Bathroom Cabinet Installation in Valencia | From €59 | THEVULGO",
    description: isEs
      ? "Instalación de muebles de baño en Valencia desde 59€. Montaje de armarios, muebles auxiliares y unidades de almacenaje con alineación limpia y fijación segura."
      : "Bathroom cabinet installation in Valencia from €59. Cabinets, storage units and bathroom furniture fitted with clean alignment and secure positioning.",
    alternates: {
      canonical: `${siteUrl}/${locale}${pagePath}`,
      languages: {
        es: `${siteUrl}/es${pagePath}`,
        en: `${siteUrl}/en${pagePath}`,
      },
    },
    openGraph: {
      title: isEs
        ? "Instalación de Mueble de Baño en Valencia | THEVULGO"
        : "Bathroom Cabinet Installation in Valencia | THEVULGO",
      description: isEs
        ? "Montaje limpio y seguro de muebles de baño, armarios y unidades de almacenaje en Valencia."
        : "Clean and secure bathroom cabinet, storage unit and bathroom furniture installation in Valencia.",
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
    q: "¿Cuánto cuesta instalar un mueble de baño en Valencia?",
    a: "La instalación de mueble de baño empieza desde 59€. El precio final depende del tipo de mueble, tamaño, pared, fijaciones, nivelación y si hay que montar una unidad completa o solo colocarla.",
  },
  {
    q: "¿Instalan armarios de baño suspendidos?",
    a: "Sí. Podemos instalar muebles y armarios de baño suspendidos siempre que la pared sea adecuada y el sistema de fijación sea compatible.",
  },
  {
    q: "¿Pueden montar muebles de baño de IKEA, Leroy Merlin o Amazon?",
    a: "Sí. Podemos montar e instalar muebles de baño de IKEA, Leroy Merlin, Amazon, Conforama y otras tiendas, siempre revisando las instrucciones y piezas disponibles.",
  },
  {
    q: "¿Necesito tener los tornillos y tacos?",
    a: "Si el mueble incluye fijaciones, las revisamos. Si no son adecuadas para la pared, podemos recomendar o usar fijaciones más apropiadas según el caso.",
  },
  {
    q: "¿También alinean puertas y cajones del mueble?",
    a: "Sí. Podemos ajustar puertas, cajones y separación visual para que el mueble quede más limpio, simétrico y cómodo de usar.",
  },
  {
    q: "¿Pueden instalar otros accesorios del baño en la misma visita?",
    a: "Sí. Podemos instalar espejo, estantes, toalleros, portarrollos, luz de baño, accesorios y otros pequeños trabajos en una sola visita.",
  },
  {
    q: "¿Qué necesito enviar para pedir presupuesto?",
    a: "Lo ideal es enviar fotos del baño, foto del mueble, medidas aproximadas, tipo de pared y decir si el mueble ya está montado o viene en caja.",
  },
  {
    q: "¿Trabajan fuera de Valencia ciudad?",
    a: "Sí. Trabajamos en Valencia y alrededores como Mislata, Burjassot, Paterna, Torrent, Sagunto, Cullera, Gandía y otras zonas cercanas.",
  },
];

export default async function BathroomCabinetInstallationValenciaPage({
  params,
}: PageProps) {
  const { locale } = await params;
  const isEs = locale === "es";

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, quiero un presupuesto para instalación de mueble de baño en Valencia."
      : "Hi, I would like a quote for bathroom cabinet installation in Valencia."
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappText}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: isEs
      ? "Instalación de Mueble de Baño en Valencia"
      : "Bathroom Cabinet Installation in Valencia",
    serviceType: "Bathroom cabinet installation",
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
      "Instalación de muebles de baño, armarios, espejos, estantes, accesorios, iluminación, montaje de TV, muebles y servicios handyman en Valencia.",
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
        name: isEs
          ? "Instalación de Mueble de Baño en Valencia"
          : "Bathroom Cabinet Installation in Valencia",
        item: `${siteUrl}/${locale}${pagePath}`,
      },
    ],
  };

  return (
    <main className="bg-white text-neutral-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <section className="relative overflow-hidden border-b border-yellow-200 bg-gradient-to-br from-yellow-50 via-white to-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-2 md:px-8 md:py-24">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-yellow-300 bg-yellow-100 px-4 py-2 text-sm font-black text-neutral-900 shadow-sm">
              <MapPin className="h-4 w-4 text-yellow-600" />
              Muebles de baño, armarios y almacenaje en Valencia
            </div>

            <h1 className="text-4xl font-black tracking-tight md:text-6xl">
              Instalación de mueble de baño{" "}
              <span className="text-yellow-500">en Valencia</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-700">
              Montaje e instalación de muebles de baño, armarios y unidades de
              almacenaje con atención a la alineación, separación, fijación y
              posición final más limpia.
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
                "Muebles de baño y armarios",
                "Alineación limpia",
                "Fijación segura",
                "Puertas y cajones ajustados",
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
              <Bath className="mb-6 h-12 w-12 text-black" />
              <p className="text-sm font-black uppercase tracking-widest">
                THEVULGO Valencia
              </p>
              <h2 className="mt-3 text-3xl font-black">
                Bathroom cabinet installation. Clean. Aligned. Ready to use.
              </h2>
              <p className="mt-4 font-medium leading-7 text-neutral-900">
                Revisamos la pared, colocamos el mueble, ajustamos la posición y
                dejamos el baño más práctico y ordenado.
              </p>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                ["Clean alignment", "Mueble nivelado y bien colocado"],
                ["Secure mounting", "Fijación adecuada según la pared"],
                ["Better storage", "Más orden para el baño"],
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
              title: "Fijación segura",
              text: "Revisamos pared, peso, puntos de fijación y estabilidad antes de instalar.",
            },
            {
              icon: Ruler,
              title: "Alineación limpia",
              text: "Buscamos una posición recta, simétrica y visualmente equilibrada.",
            },
            {
              icon: Drill,
              title: "Montaje práctico",
              text: "Instalamos armarios, muebles auxiliares y unidades de almacenaje.",
            },
            {
              icon: Star,
              title: "Precio claro",
              text: "Desde 59€. Presupuesto según fotos, medidas y dificultad.",
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
          Instalación de muebles de baño en Valencia
        </h2>

        <div className="mt-6 space-y-5 text-lg leading-8 text-neutral-700">
          <p>
            En THEVULGO realizamos instalación de muebles de baño en Valencia
            para pisos, apartamentos, viviendas, alquileres, reformas pequeñas y
            espacios que necesitan más orden y mejor acabado visual. Podemos
            ayudarte con armarios de baño, muebles auxiliares, unidades de
            almacenaje y muebles suspendidos compatibles.
          </p>

          <p>
            Antes de perforar o fijar el mueble revisamos el tipo de pared, la
            posición, la altura, el espacio disponible, la apertura de puertas y
            la relación con lavabo, espejo, enchufes, luces y otros elementos
            del baño. El objetivo es que el resultado quede práctico, estable y
            visualmente limpio.
          </p>

          <p>
            También podemos combinar esta instalación con otros trabajos del
            baño: espejo, mueble con espejo, estantes, toallero, portarrollos,
            accesorios, luz de tocador, sellado de juntas o pequeños ajustes de
            puertas y cajones.
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
              "Revisión del mueble y piezas",
              "Comprobación de pared y posición",
              "Medición de altura y separación",
              "Marcado de puntos de fijación",
              "Montaje o colocación del mueble",
              "Fijación segura según el caso",
              "Nivelación y alineación visual",
              "Ajuste básico de puertas o cajones",
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
          Tipos de muebles de baño que podemos instalar
        </h2>

        <div className="grid gap-8 md:grid-cols-4">
          {[
            {
              title: "Mueble de baño suspendido",
              text: "Instalación de muebles fijados a pared cuando la superficie y el sistema son adecuados.",
            },
            {
              title: "Armario de baño",
              text: "Montaje y colocación de armarios de baño para almacenamiento diario.",
            },
            {
              title: "Mueble auxiliar",
              text: "Instalación de columnas, unidades laterales y muebles pequeños de apoyo.",
            },
            {
              title: "Unidad de almacenaje",
              text: "Soluciones prácticas para ordenar cosméticos, toallas y artículos de baño.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-yellow-300 bg-white p-7 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400">
                <Bath className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-2xl font-black">{item.title}</h3>
              <p className="mt-4 leading-7 text-neutral-700">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-10 md:px-8">
        <div className="grid gap-6 md:grid-cols-4">
          {[
            {
              title: "Baños pequeños",
              text: "Ideal para ganar almacenaje sin perder demasiado espacio útil.",
            },
            {
              title: "Pisos de alquiler",
              text: "Una mejora rápida para dejar el baño más completo y práctico.",
            },
            {
              title: "Muebles nuevos",
              text: "Podemos instalar muebles comprados en tiendas como IKEA, Leroy Merlin o Amazon.",
            },
            {
              title: "También podemos ayudarte con",
              text: "Espejos, luces, estantes, toalleros, portarrollos y accesorios de baño.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-yellow-200 bg-yellow-50 p-6 shadow-sm"
            >
              <h2 className="text-xl font-black">{item.title}</h2>
              <p className="mt-4 leading-7 text-neutral-700">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-16 md:px-8">
        <h2 className="text-3xl font-black">
          ¿Dónde se puede instalar un mueble de baño?
        </h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {[
            "Baño principal",
            "Baño pequeño",
            "Aseo de invitados",
            "Apartamento de alquiler",
            "Vivienda recién amueblada",
            "Baño con poco almacenaje",
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
          Si no sabes cuál es la mejor altura o posición, envíanos fotos del
          baño y del mueble. Podemos ayudarte a elegir una ubicación más cómoda,
          limpia y práctica para el uso diario.
        </p>
      </section>

      <section className="bg-yellow-400 py-16 text-black">
        <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
          <p className="text-sm font-black uppercase tracking-widest">
            Desde 59€
          </p>
          <h2 className="mt-3 text-4xl font-black">
            Precio para instalar mueble de baño en Valencia
          </h2>
          <p className="mt-6 text-lg font-medium leading-8 text-neutral-900">
            El precio depende del tamaño del mueble, si viene montado o en caja,
            tipo de pared, fijaciones, nivelación y dificultad. Envíanos fotos y
            te damos un presupuesto claro antes de empezar.
          </p>

          <div className="mt-8 rounded-3xl border border-yellow-600/30 bg-white p-6 text-left shadow-xl">
            <h3 className="text-xl font-black">El precio depende de:</h3>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Tamaño del mueble",
                "Mueble montado o en caja",
                "Tipo de pared",
                "Sistema de fijación",
                "Puertas y cajones",
                "Altura y posición",
                "Otros accesorios del baño",
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
          Realizamos instalación de muebles de baño en Valencia ciudad y
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
              title: "Instalación de espejo de baño",
              href: `/${locale}/services/bathroom/mirror-installation-valencia`,
            },
            {
              title: "Instalación de estantería de baño",
              href: `/${locale}/services/bathroom/shelf-installation-valencia`,
            },
            {
              title: "Instalación de toallero",
              href: `/${locale}/services/bathroom/towel-holder-installation-valencia`,
            },
            {
              title: "Renovación de silicona",
              href: `/${locale}/services/bathroom/silicone-renewal-valencia`,
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
            ¿Quieres instalar un mueble de baño en Valencia?
          </h2>
          <p className="mt-5 text-lg font-medium text-neutral-900">
            Envíanos fotos del baño, del mueble, medidas aproximadas y dinos si
            el mueble viene montado o en caja. Te damos un presupuesto claro
            antes de empezar.
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