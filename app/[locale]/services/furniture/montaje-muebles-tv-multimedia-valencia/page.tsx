import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  Tv,
  ShieldCheck,
  Wrench,
  Home,
  HelpCircle,
  MapPin,
  Star,
  Ruler,
  Cable,
  MonitorPlay,
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
      ? "Montaje de Muebles TV y Multimedia en Valencia | Desde 45€ | THEVULGO"
      : "TV & Media Furniture Assembly in Valencia | From €45 | THEVULGO",
    description: isEs
      ? "Montaje de muebles TV, consolas multimedia y unidades de entretenimiento en Valencia desde 45€. Alineación cuidada, posición estable y organización de cables."
      : "TV stands, media consoles and entertainment unit assembly in Valencia from €45. Careful alignment, stable positioning and cable organization.",
    alternates: {
      canonical: `${siteUrl}/${locale}/montaje-muebles-tv-multimedia-valencia`,
      languages: {
        es: `${siteUrl}/es/montaje-muebles-tv-multimedia-valencia`,
      },
    },
    openGraph: {
      title: isEs
        ? "Montaje de Muebles TV y Multimedia en Valencia | THEVULGO"
        : "TV & Media Furniture Assembly in Valencia | THEVULGO",
      description: isEs
        ? "Montaje limpio de muebles TV, consolas multimedia y unidades de entretenimiento en Valencia."
        : "Clean assembly of TV stands, media consoles and entertainment units in Valencia.",
      url: `${siteUrl}/${locale}/montaje-muebles-tv-multimedia-valencia`,
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
    q: "¿Cuánto cuesta montar un mueble TV en Valencia?",
    a: "El montaje de muebles TV y multimedia empieza desde 45€. El precio final depende del tamaño, número de piezas, cajones, puertas, módulos, fijación a pared y organización de cables.",
  },
  {
    q: "¿Montan muebles TV de IKEA?",
    a: "Sí. Montamos muebles TV y consolas multimedia de IKEA, Leroy Merlin, Amazon, JYSK, Conforama, Bauhaus, Carrefour y otras tiendas.",
  },
  {
    q: "¿Pueden organizar los cables detrás del mueble TV?",
    a: "Sí. Podemos ayudarte con organización básica de cables, HDMI, alimentación, regletas, router, consola, decodificador y soundbar.",
  },
  {
    q: "¿Pueden fijar el mueble TV a la pared?",
    a: "Sí. Si el mueble lo permite y la pared es adecuada, podemos fijarlo para mejorar estabilidad o seguridad.",
  },
  {
    q: "¿Montan unidades de entretenimiento grandes?",
    a: "Sí. Montamos muebles multimedia pequeños, medianos y grandes, incluyendo módulos, estantes, cajones, puertas y unidades combinadas.",
  },
  {
    q: "¿También pueden montar la TV encima del mueble?",
    a: "Sí. También hacemos montaje de TV en pared, instalación de soundbar, ocultación de cables y configuración básica del área multimedia.",
  },
  {
    q: "¿Cuánto tarda montar un mueble multimedia?",
    a: "Depende del tamaño y dificultad. Un mueble TV sencillo puede tardar alrededor de una hora, mientras que una unidad grande con varios módulos puede tardar más.",
  },
  {
    q: "¿Trabajan fuera de Valencia ciudad?",
    a: "Sí. Trabajamos en Valencia y alrededores como Mislata, Burjassot, Paterna, Torrent, Sagunto, Cullera, Gandía y otras zonas cercanas.",
  },
];

export default async function TvMediaFurnitureAssemblyValenciaPage({
  params,
}: PageProps) {
  const { locale } = await params;
  const isEs = locale === "es";

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, quiero un presupuesto para montaje de mueble TV o multimedia en Valencia."
      : "Hi, I would like a quote for TV or media furniture assembly in Valencia."
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappText}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Montaje de Muebles TV y Multimedia en Valencia",
    serviceType: "TV and media furniture assembly",
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
      "Montaje de muebles TV, consolas multimedia, unidades de entretenimiento, montaje de TV, soundbar, ocultación de cables y servicios handyman en Valencia.",
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
        name: "Montaje de Muebles TV y Multimedia en Valencia",
        item: `${siteUrl}/${locale}/montaje-muebles-tv-multimedia-valencia`,
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
              Muebles TV · Multimedia · Consolas · Home cinema
            </div>

            <h1 className="text-4xl font-black tracking-tight md:text-6xl">
              Montaje de muebles TV y multimedia{" "}
              <span className="text-yellow-500">en Valencia</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-700">
              Montaje de muebles TV, consolas multimedia y unidades de
              entretenimiento desde{" "}
              <strong className="text-neutral-950">45€</strong>. Alineación
              cuidada, posición estable y organización de cables para un acabado
              limpio.
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
                "Muebles TV y consolas",
                "Unidades multimedia",
                "Ajuste de puertas y cajones",
                "Organización básica de cables",
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
              <MonitorPlay className="mb-6 h-12 w-12 text-black" />
              <p className="text-sm font-black uppercase tracking-widest">
                THEVULGO Valencia
              </p>
              <h2 className="mt-3 text-3xl font-black">
                Media furniture assembly. Clean. Stable. Ready for your setup.
              </h2>
              <p className="mt-4 font-medium leading-7 text-neutral-900">
                Montamos el mueble, alineamos módulos, revisamos estabilidad y
                organizamos cables para TV, consola, router o soundbar.
              </p>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                ["TV stands", "Muebles TV y consolas multimedia"],
                ["Cable routing", "HDMI, router, consola y regletas"],
                ["Stable position", "Mueble alineado y estable"],
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
              text: "Estructura, módulos, puertas, cajones, patas y baldas.",
            },
            {
              icon: Ruler,
              title: "Alineación cuidada",
              text: "Revisamos nivelación, posición y encaje de piezas.",
            },
            {
              icon: Cable,
              title: "Cables organizados",
              text: "Ayuda con HDMI, regletas, consola, router y soundbar.",
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
          Montaje profesional de muebles TV y multimedia en Valencia
        </h2>

        <div className="mt-6 space-y-5 text-lg leading-8 text-neutral-700">
          <p>
            En THEVULGO realizamos montaje de muebles TV y multimedia en
            Valencia para salones, dormitorios, oficinas, apartamentos y
            propiedades de alquiler. Montamos consolas multimedia, muebles de TV,
            unidades de entretenimiento, módulos bajos, estantes, cajones y
            muebles tipo flat-pack.
          </p>

          <p>
            Un mueble multimedia debe quedar estable, alineado y preparado para
            el uso diario con televisión, consola, router, decodificador,
            soundbar, Apple TV, sistemas de sonido o dispositivos de streaming.
            Revisamos la estructura, puertas, cajones, patas, baldas y posición
            final.
          </p>

          <p>
            También podemos ayudarte con organización básica de cables, canaletas,
            montaje de TV en pared, instalación de soundbar, ocultación de HDMI
            o preparación del área multimedia para que el resultado se vea limpio
            y profesional.
          </p>
        </div>
      </section>

      <section className="bg-yellow-50 py-16">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <h2 className="text-3xl font-black md:text-4xl">
            ¿Qué incluye el montaje de muebles multimedia?
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              "Revisión de piezas e instrucciones",
              "Montaje de estructura principal",
              "Instalación de puertas y cajones",
              "Montaje de baldas y módulos",
              "Ajuste de patas y nivelación",
              "Organización básica de cables",
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
          Tipos de muebles multimedia que montamos
        </h2>

        <div className="grid gap-8 md:grid-cols-4">
          {[
            {
              title: "Muebles TV",
              text: "Montaje de muebles bajos para TV, salones y zonas multimedia.",
            },
            {
              title: "Consolas multimedia",
              text: "Muebles para consolas, routers, decodificadores y dispositivos.",
            },
            {
              title: "Unidades de entretenimiento",
              text: "Módulos combinados, estantes, cajones, puertas y almacenamiento.",
            },
            {
              title: "Media wall setup",
              text: "Ayuda con mueble, TV, soundbar, cables y posición final.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-yellow-300 bg-white p-7 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400">
                <Tv className="h-8 w-8 text-black" />
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
            Presupuesto para montar muebles TV en Valencia
          </h2>
          <p className="mt-6 text-lg font-medium leading-8 text-neutral-900">
            El precio depende del tamaño, número de módulos, cajones, puertas,
            fijación a pared, organización de cables y si hay otros trabajos
            multimedia. Envíanos fotos o modelo y te damos un precio claro.
          </p>

          <div className="mt-8 rounded-3xl border border-yellow-600/30 bg-white p-6 text-left shadow-xl">
            <h3 className="text-xl font-black">El precio depende de:</h3>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Tipo de mueble TV",
                "Número de módulos",
                "Puertas y cajones",
                "Tamaño y peso",
                "Organización de cables",
                "Fijación a pared",
                "Montaje de TV o soundbar",
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
          Realizamos montaje de muebles TV y multimedia en Valencia ciudad y
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
              title: "Montaje de TV en Valencia",
              href: `/${locale}/montaje-tv-valencia`,
            },
            {
              title: "Instalar soundbar",
              href: `/${locale}/instalar-soundbar-valencia`,
            },
            {
              title: "Ocultar cables en Valencia",
              href: `/${locale}/ocultar-cables-valencia`,
            },
            {
              title: "Montaje de muebles IKEA",
              href: `/${locale}/montaje-muebles-ikea-valencia`,
            },
            {
              title: "Montaje de estanterías",
              href: `/${locale}/montaje-estanterias-valencia`,
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
            ¿Quieres montar un mueble TV o multimedia en Valencia?
          </h2>
          <p className="mt-5 text-lg font-medium text-neutral-900">
            Envíanos fotos del mueble, cajas, modelo y zona de instalación. Te
            damos un presupuesto claro antes de empezar.
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