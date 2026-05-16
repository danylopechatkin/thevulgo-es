import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  Cable,
  ShieldCheck,
  Wrench,
  Home,
  HelpCircle,
  MapPin,
  Star,
  Tv,
  Plug,
  Route,
} from "lucide-react";

type PageProps = {
  params: Promise<{ locale: string }>;
};

const siteUrl = "https://www.thevulgo.es";
const phoneNumber = "34610076942";

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";

  return {
    title: isEs
      ? "Ocultar Cables en Valencia | TV, HDMI, Canaletas y Pared | THEVULGO"
      : "Cable Concealment in Valencia | TV, HDMI, Trunking & Wall Cables | THEVULGO",
    description: isEs
      ? "Servicio para ocultar cables en Valencia. Canaletas, cableado de TV, HDMI, enchufes, organización de cables, soluciones limpias para pared, oficina y home cinema."
      : "Cable concealment service in Valencia. Trunking, TV cables, HDMI, outlets, cable management and clean wall, office and home cinema solutions.",
    alternates: {
      canonical: `${siteUrl}/${locale}/ocultar-cables-valencia`,
      languages: {
        es: `${siteUrl}/es/ocultar-cables-valencia`,
      },
    },
    openGraph: {
      title: isEs
        ? "Ocultar Cables en Valencia | THEVULGO"
        : "Cable Concealment in Valencia | THEVULGO",
      description: isEs
        ? "Soluciones limpias para ocultar cables de TV, HDMI, internet, oficina y home cinema en Valencia."
        : "Clean solutions to hide TV, HDMI, internet, office and home cinema cables in Valencia.",
      url: `${siteUrl}/${locale}/ocultar-cables-valencia`,
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
    q: "¿Cuánto cuesta ocultar cables en Valencia?",
    a: "El precio depende del tipo de cable, distancia, tipo de pared, canaleta, número de dispositivos y dificultad. Envíanos fotos por WhatsApp y te damos un presupuesto claro antes de empezar.",
  },
  {
    q: "¿Pueden ocultar cables de una TV colgada en pared?",
    a: "Sí. Podemos ocultar cables de TV usando canaleta exterior, organización detrás del televisor o una solución más limpia según la pared, enchufes y dispositivos.",
  },
  {
    q: "¿Se pueden esconder cables dentro de la pared?",
    a: "Depende del tipo de pared, normativa, acceso y tipo de cable. Primero revisamos la pared y la ruta. Cuando no conviene abrir pared, usamos canaletas limpias y discretas.",
  },
  {
    q: "¿Instalan canaletas para cables?",
    a: "Sí. Instalamos canaletas blancas o negras para TV, HDMI, internet, alimentación, oficina, escritorios, proyectores y otros dispositivos.",
  },
  {
    q: "¿Pueden pasar cable HDMI largo?",
    a: "Sí. Podemos ayudarte con recorridos HDMI para TV, proyector, consola, rack, decodificador, Apple TV o sistema multimedia.",
  },
  {
    q: "¿Pueden organizar cables de oficina o escritorio?",
    a: "Sí. Podemos ordenar cables de escritorio, monitores, cargadores, routers, regletas, internet y equipos de trabajo.",
  },
  {
    q: "¿También pueden instalar un enchufe cerca de la TV?",
    a: "Sí, podemos revisar si es posible instalar o mover una toma eléctrica cerca de la TV para dejar menos cables visibles.",
  },
  {
    q: "¿Trabajan fuera de Valencia ciudad?",
    a: "Sí. Trabajamos en Valencia y alrededores como Mislata, Burjassot, Paterna, Torrent, Sagunto, Cullera, Gandía y otras zonas cercanas.",
  },
];

export default async function CableConcealmentValenciaPage({
  params,
}: PageProps) {
  const { locale } = await params;
  const isEs = locale === "es";

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, quiero un presupuesto para ocultar cables en Valencia."
      : "Hi, I would like a quote for cable concealment in Valencia."
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappText}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Ocultar Cables en Valencia",
    serviceType: "Cable concealment",
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
      "Ocultación de cables, montaje de TV, proyectores, enchufes, canaletas, cableado HDMI y servicios handyman en Valencia.",
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
        name: "Ocultar Cables en Valencia",
        item: `${siteUrl}/${locale}/ocultar-cables-valencia`,
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
              TV · HDMI · Canaletas · Oficina · Home cinema
            </div>

            <h1 className="text-4xl font-black tracking-tight md:text-6xl">
              Ocultar cables{" "}
              <span className="text-yellow-500">en Valencia</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-700">
              Soluciones limpias para ocultar cables de TV, HDMI, internet,
              proyectores, escritorios, routers y sistemas multimedia. Canaletas
              discretas, organización de cables y acabado ordenado sin sorpresas.
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
                "Ocultación de cables de TV",
                "Canaletas blancas o negras",
                "Cable HDMI y multimedia",
                "Organización de escritorio",
                "Proyectores y home cinema",
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
              <Cable className="mb-6 h-12 w-12 text-black" />
              <p className="text-sm font-black uppercase tracking-widest">
                THEVULGO Valencia
              </p>
              <h2 className="mt-3 text-3xl font-black">
                Clean cable management. Less mess. Better finish.
              </h2>
              <p className="mt-4 font-medium leading-7 text-neutral-900">
                Revisamos la ruta, elegimos la solución más limpia y dejamos los
                cables organizados, seguros y discretos.
              </p>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                ["TV cables", "Cables de TV más limpios"],
                ["HDMI routes", "Recorridos HDMI organizados"],
                ["Trunking", "Canaletas limpias y discretas"],
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
              icon: Cable,
              title: "Cables ocultos",
              text: "TV, HDMI, internet, alimentación, proyectores y oficina.",
            },
            {
              icon: Route,
              title: "Ruta limpia",
              text: "Buscamos el recorrido más discreto y práctico.",
            },
            {
              icon: Wrench,
              title: "Trabajo ordenado",
              text: "Instalación limpia, medida y con buen acabado visual.",
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
          Servicio para ocultar cables en Valencia
        </h2>

        <div className="mt-6 space-y-5 text-lg leading-8 text-neutral-700">
          <p>
            En THEVULGO hacemos ocultación de cables en Valencia para
            televisores, proyectores, escritorios, oficinas, routers, consolas,
            decodificadores, sistemas de sonido y home cinema. La idea es simple:
            menos cables visibles, mejor acabado y una instalación más limpia.
          </p>

          <p>
            Antes de empezar revisamos qué cables hay que ocultar, desde dónde
            salen, hasta dónde tienen que llegar, qué tipo de pared tienes y si
            conviene usar canaleta, reorganización detrás del mueble, recorrido
            exterior discreto o una solución más avanzada.
          </p>

          <p>
            Podemos trabajar con cables de alimentación, HDMI, internet,
            antena, audio, cargadores, regletas, cables de monitores, soundbar,
            proyectores y dispositivos multimedia. Si quieres ocultar cables de
            una TV colgada en pared, también podemos revisar si conviene instalar
            un enchufe cerca de la TV.
          </p>
        </div>
      </section>

      <section className="bg-yellow-50 py-16">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <h2 className="text-3xl font-black md:text-4xl">
            ¿Qué incluye el servicio?
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              "Revisión de cables y dispositivos",
              "Planificación de la ruta",
              "Medición del recorrido",
              "Instalación de canaleta si hace falta",
              "Organización detrás de TV o mueble",
              "Gestión de HDMI, internet y alimentación",
              "Sujeción y orden de cables",
              "Acabado visual más limpio",
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
          Tipos de ocultación de cables
        </h2>

        <div className="grid gap-8 md:grid-cols-4">
          {[
            {
              title: "Canaleta exterior",
              text: "La solución más rápida y económica. Ideal para TV, HDMI, internet y oficina.",
            },
            {
              title: "Detrás de TV o mueble",
              text: "Organizamos cables detrás del televisor, rack, consola, router o mueble multimedia.",
            },
            {
              title: "Recorrido HDMI largo",
              text: "Para proyectores, consolas, decodificadores, racks y dispositivos alejados.",
            },
            {
              title: "Solución más integrada",
              text: "Revisamos si se puede mejorar con enchufe, ruta más limpia o trabajo en pared.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-yellow-300 bg-white p-7 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400">
                <Cable className="h-8 w-8 text-black" />
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
              title: "Cables de TV",
              text: "Alimentación, HDMI, antena, consola, decodificador, Apple TV y soundbar.",
            },
            {
              title: "Cables de proyector",
              text: "HDMI largo, alimentación, canaleta, recorrido hasta rack o dispositivos.",
            },
            {
              title: "Cables de oficina",
              text: "Monitores, cargadores, regletas, escritorio, router e internet.",
            },
            {
              title: "También podemos ayudarte con",
              text: "Montaje de TV, enchufes, soundbar, proyectores y estanterías.",
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
          ¿Dónde podemos ocultar cables?
        </h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {[
            "TV en pared",
            "Proyector en techo",
            "Escritorio y oficina",
            "Mueble multimedia",
            "Router e internet",
            "Local comercial",
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
          Si no sabes qué solución conviene, envíanos fotos o vídeo por
          WhatsApp. Te diremos si es mejor usar canaleta, reorganizar cables,
          mover dispositivos o estudiar una solución más limpia cerca de la
          pared.
        </p>
      </section>

      <section className="bg-yellow-400 py-16 text-black">
        <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
          <p className="text-sm font-black uppercase tracking-widest">
            Precio claro
          </p>
          <h2 className="mt-3 text-4xl font-black">
            Presupuesto para ocultar cables en Valencia
          </h2>
          <p className="mt-6 text-lg font-medium leading-8 text-neutral-900">
            El precio depende de la distancia, tipo de cable, canaleta,
            dispositivos, pared y dificultad. Envíanos fotos y te damos un
            presupuesto claro antes de empezar.
          </p>

          <div className="mt-8 rounded-3xl border border-yellow-600/30 bg-white p-6 text-left shadow-xl">
            <h3 className="text-xl font-black">El precio depende de:</h3>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Cantidad de cables",
                "Distancia del recorrido",
                "Tipo de canaleta",
                "Tipo de pared",
                "TV, proyector u oficina",
                "HDMI o alimentación",
                "Instalar enchufe adicional",
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
          Realizamos ocultación de cables en Valencia ciudad y alrededores. Si
          estás fuera de Valencia, envíanos tu dirección y te confirmamos
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
              title: "Montaje de TV en Valencia",
              href: `/${locale}/montaje-tv-valencia`,
            },
            {
              title: "Montaje de proyector",
              href: `/${locale}/montaje-proyector-valencia`,
            },
            {
              title: "Instalar enchufe para TV",
              href: `/${locale}/instalar-enchufe-valencia`,
            },
            {
              title: "Instalar soundbar",
              href: `/${locale}/instalar-soundbar-valencia`,
            },
            {
              title: "Montaje de TV grande",
              href: `/${locale}/montaje-tv-grande-valencia`,
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
            ¿Quieres ocultar cables en Valencia?
          </h2>
          <p className="mt-5 text-lg font-medium text-neutral-900">
            Envíanos fotos de la TV, pared, escritorio, proyector o zona donde
            están los cables. Te damos un presupuesto claro antes de empezar.
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