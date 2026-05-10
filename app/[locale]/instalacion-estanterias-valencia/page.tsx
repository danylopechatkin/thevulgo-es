import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  Hammer,
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

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";

  return {
    title: isEs
      ? "Instalación de Estanterías en Valencia | Montaje en Pared | THEVULGO"
      : "Shelf Installation in Valencia | Wall Shelf Mounting | THEVULGO",
    description: isEs
      ? "Instalación profesional de estanterías en Valencia. Montaje de baldas, estantes flotantes, repisas y muebles de pared con nivelación precisa y acabado limpio."
      : "Professional shelf installation in Valencia. Wall shelves, floating shelves, ledges and wall-mounted storage with precise leveling and clean finish.",
    alternates: {
      canonical: `${siteUrl}/${locale}/instalacion-estanterias-valencia`,
      languages: {
        es: `${siteUrl}/es/instalacion-estanterias-valencia`,
      },
    },
    openGraph: {
      title: isEs
        ? "Instalación de Estanterías en Valencia | THEVULGO"
        : "Shelf Installation in Valencia | THEVULGO",
      description: isEs
        ? "Montaje limpio y seguro de estanterías, baldas y estantes flotantes en Valencia."
        : "Clean and safe shelf mounting in Valencia.",
      url: `${siteUrl}/${locale}/instalacion-estanterias-valencia`,
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
    q: "¿Cuánto cuesta instalar estanterías en Valencia?",
    a: "El precio depende del número de estanterías, tamaño, peso, tipo de pared y dificultad de instalación. Envíanos fotos por WhatsApp y te damos un presupuesto claro antes de empezar.",
  },
  {
    q: "¿Instalan estanterías flotantes?",
    a: "Sí. Instalamos estanterías flotantes, baldas, repisas, estantes decorativos y muebles pequeños de pared.",
  },
  {
    q: "¿Pueden instalar estanterías en pladur?",
    a: "Sí, pero revisamos el peso y el tipo de fijación. En pladur es importante usar tacos adecuados o buscar estructura interna cuando sea necesario.",
  },
  {
    q: "¿Qué necesito preparar antes de la visita?",
    a: "Solo necesitas tener las estanterías, soportes y tornillería si vienen incluidos. Si no sabes si sirven, envíanos fotos y te orientamos.",
  },
  {
    q: "¿Pueden comprar los tacos o tornillos necesarios?",
    a: "Sí. Podemos llevar fijaciones básicas o recomendar/comprar el material adecuado según la pared y el peso.",
  },
  {
    q: "¿Instalan estanterías de IKEA, Leroy Merlin o Amazon?",
    a: "Sí. Instalamos estanterías y baldas compradas en IKEA, Leroy Merlin, Amazon, Bauhaus, Carrefour y otras tiendas.",
  },
  {
    q: "¿Cuánto tarda instalar una estantería?",
    a: "Una instalación sencilla puede tardar entre 30 y 60 minutos. Varias estanterías, pared complicada o medición precisa pueden requerir más tiempo.",
  },
  {
    q: "¿Trabajan fuera de Valencia ciudad?",
    a: "Sí. Trabajamos en Valencia y alrededores como Mislata, Burjassot, Paterna, Torrent, Sagunto, Cullera, Gandía y otras zonas cercanas.",
  },
];

export default async function ShelfInstallationValenciaPage({
  params,
}: PageProps) {
  const { locale } = await params;
  const isEs = locale === "es";

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, quiero un presupuesto para instalación de estanterías en Valencia."
      : "Hi, I would like a quote for shelf installation in Valencia."
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappText}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Instalación de Estanterías en Valencia",
    serviceType: "Shelf installation",
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
      "Instalación de estanterías, baldas, muebles de pared, montaje de TV, pequeños trabajos y servicios handyman en Valencia.",
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
        name: "Instalación de Estanterías en Valencia",
        item: `${siteUrl}/${locale}/instalacion-estanterias-valencia`,
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
              Estanterías, baldas y repisas en Valencia
            </div>

            <h1 className="text-4xl font-black tracking-tight md:text-6xl">
              Instalación de estanterías{" "}
              <span className="text-yellow-500">en Valencia</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-700">
              Montaje limpio y seguro de estanterías, baldas, repisas y estantes
              flotantes. Nivelación precisa, fijaciones adecuadas y acabado
              ordenado para casas, apartamentos, oficinas y locales.
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
                "Estanterías flotantes",
                "Baldas y repisas",
                "Nivelación precisa",
                "Instalación en pladur con revisión",
                "Fijaciones adecuadas",
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
              <Hammer className="mb-6 h-12 w-12 text-black" />
              <p className="text-sm font-black uppercase tracking-widest">
                THEVULGO Valencia
              </p>
              <h2 className="mt-3 text-3xl font-black">
                Shelf installation. Straight. Strong. Clean.
              </h2>
              <p className="mt-4 font-medium leading-7 text-neutral-900">
                Medimos, nivelamos, elegimos la fijación correcta y dejamos la
                estantería recta, estable y limpia.
              </p>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                ["Precise leveling", "Estantes rectos y alineados"],
                ["Safe fixing", "Tacos adecuados para la pared"],
                ["Clean work", "Perforación cuidada y ordenada"],
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
              icon: ShieldCheck,
              title: "Instalación segura",
              text: "Usamos fijaciones adecuadas según pared y peso.",
            },
            {
              icon: Ruler,
              title: "Nivelación precisa",
              text: "La estantería queda recta, centrada y alineada.",
            },
            {
              icon: Wrench,
              title: "Trabajo limpio",
              text: "Perforación cuidada, acabado ordenado y sin sorpresas.",
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
          Montaje profesional de estanterías en Valencia
        </h2>

        <div className="mt-6 space-y-5 text-lg leading-8 text-neutral-700">
          <p>
            En THEVULGO realizamos instalación de estanterías en Valencia para
            hogares, apartamentos, oficinas, locales, habitaciones, cocinas,
            baños y espacios de almacenamiento. Instalamos baldas, repisas,
            estantes flotantes, estanterías decorativas y pequeños muebles de
            pared.
          </p>

          <p>
            Antes de perforar revisamos la altura, alineación, tipo de pared,
            peso aproximado que va a soportar la estantería y el sistema de
            fijación. El objetivo es que el estante quede recto, estable y
            visualmente limpio.
          </p>

          <p>
            Podemos trabajar en ladrillo, hormigón y pladur con revisión previa.
            Si la estantería va a soportar peso importante, recomendamos revisar
            bien la pared y usar fijaciones adecuadas. Para estantes decorativos
            o ligeros, el montaje suele ser rápido y sencillo.
          </p>
        </div>
      </section>

      <section className="bg-yellow-50 py-16">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <h2 className="text-3xl font-black md:text-4xl">
            ¿Qué incluye la instalación de estanterías?
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              "Revisión del tipo de pared",
              "Medición de altura y posición",
              "Nivelación precisa",
              "Marcado de puntos de perforación",
              "Instalación de tacos y tornillos",
              "Montaje de soportes o escuadras",
              "Colocación de baldas o estantes",
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
          Tipos de estanterías que instalamos
        </h2>

        <div className="grid gap-8 md:grid-cols-4">
          {[
            {
              title: "Estantes flotantes",
              text: "Instalación limpia para salones, dormitorios, oficinas y decoración.",
            },
            {
              title: "Baldas de pared",
              text: "Montaje de baldas para libros, decoración, cocina, baño o almacenamiento.",
            },
            {
              title: "Repisas pequeñas",
              text: "Ideal para cuadros, plantas, routers, altavoces o pequeños objetos.",
            },
            {
              title: "Muebles de pared",
              text: "Instalación de pequeños módulos, cubos y muebles ligeros de pared.",
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

      <section className="mx-auto max-w-7xl px-5 py-10 md:px-8">
        <div className="grid gap-6 md:grid-cols-4">
          {[
            {
              title: "IKEA, Leroy Merlin, Amazon",
              text: "Instalamos estanterías compradas en tiendas comunes de España.",
            },
            {
              title: "Pladur con revisión",
              text: "Usamos fijaciones adecuadas y revisamos si soportará el peso.",
            },
            {
              title: "Alineación perfecta",
              text: "Medimos para que varias baldas queden rectas y simétricas.",
            },
            {
              title: "También podemos ayudarte con",
              text: "Cuadros, espejos, TV, muebles, barras, soportes y pequeños montajes.",
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
          ¿En qué tipo de pared instalamos estanterías?
        </h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {[
            "Ladrillo",
            "Hormigón",
            "Pladur con revisión",
            "Paredes interiores",
            "Cocinas y baños",
            "Oficinas y locales",
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
          Si no sabes qué tipo de pared tienes, envíanos una foto o vídeo por
          WhatsApp. Te diremos si la instalación parece sencilla o si conviene
          revisar la pared antes de montar la estantería.
        </p>
      </section>

      <section className="bg-yellow-400 py-16 text-black">
        <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
          <p className="text-sm font-black uppercase tracking-widest">
            Precio claro
          </p>
          <h2 className="mt-3 text-4xl font-black">
            Presupuesto para instalar estanterías en Valencia
          </h2>
          <p className="mt-6 text-lg font-medium leading-8 text-neutral-900">
            El precio depende del número de estanterías, tipo de pared, tamaño,
            peso y dificultad. Envíanos fotos y te damos un presupuesto claro
            antes de empezar.
          </p>

          <div className="mt-8 rounded-3xl border border-yellow-600/30 bg-white p-6 text-left shadow-xl">
            <h3 className="text-xl font-black">El precio depende de:</h3>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Número de estanterías",
                "Tipo de pared",
                "Tamaño y peso",
                "Altura de instalación",
                "Tipo de fijación",
                "Material incluido o no",
                "Alineación de varias baldas",
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
          Realizamos instalación de estanterías en Valencia ciudad y alrededores.
          Si estás fuera de Valencia, envíanos tu dirección y te confirmamos
          disponibilidad.
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
              title: "Montaje de muebles en Valencia",
              href: `/${locale}/montaje-muebles-valencia`,
            },
            {
              title: "Colgar cuadros en Valencia",
              href: `/${locale}/colgar-cuadros-valencia`,
            },
            {
              title: "Instalar espejo en pared",
              href: `/${locale}/instalar-espejo-valencia`,
            },
            {
              title: "Montaje de TV en Valencia",
              href: `/${locale}/montaje-tv-valencia`,
            },
            {
              title: "Instalar barra de cortina",
              href: `/${locale}/instalar-barra-cortina-valencia`,
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
            ¿Quieres instalar estanterías en Valencia?
          </h2>
          <p className="mt-5 text-lg font-medium text-neutral-900">
            Envíanos fotos de la pared, las estanterías y la zona donde quieres
            instalarlas. Te damos un presupuesto claro antes de empezar.
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