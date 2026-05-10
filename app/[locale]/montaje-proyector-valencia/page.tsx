import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  Video,
  ShieldCheck,
  Wrench,
  Cable,
  Home,
  HelpCircle,
  MapPin,
  Star,
  Ruler,
  MonitorPlay,
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
      ? "Montaje de Proyector en Valencia | Instalación en Techo | THEVULGO"
      : "Projector Mounting in Valencia | Ceiling Installation | THEVULGO",
    description: isEs
      ? "Montaje profesional de proyectores en Valencia. Instalación en techo o pared, nivelación precisa, gestión de cables HDMI, soportes y ajuste básico de imagen."
      : "Professional projector mounting in Valencia. Ceiling or wall installation, precise alignment, HDMI cable management, brackets and basic image setup.",
    alternates: {
      canonical: `${siteUrl}/${locale}/montaje-proyector-valencia`,
      languages: {
        es: `${siteUrl}/es/montaje-proyector-valencia`,
      },
    },
    openGraph: {
      title: isEs
        ? "Montaje de Proyector en Valencia | THEVULGO"
        : "Projector Mounting in Valencia | THEVULGO",
      description: isEs
        ? "Instalación limpia y segura de proyectores en Valencia y alrededores."
        : "Clean and safe projector installation in Valencia and nearby areas.",
      url: `${siteUrl}/${locale}/montaje-proyector-valencia`,
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
    q: "¿Cuánto cuesta montar un proyector en Valencia?",
    a: "El precio depende del tipo de proyector, soporte, techo o pared, distancia de proyección, cableado HDMI y dificultad de instalación. Envíanos fotos y te damos un presupuesto claro antes de empezar.",
  },
  {
    q: "¿Instalan proyectores en techo?",
    a: "Sí. Instalamos proyectores en techo con soporte adecuado, medición de distancia, nivelación y orientación hacia la pantalla o pared.",
  },
  {
    q: "¿Pueden pasar cable HDMI para el proyector?",
    a: "Sí. Podemos ayudarte con cable HDMI, canaleta exterior, organización de cables o planificación del recorrido desde el rack, consola, portátil o decodificador.",
  },
  {
    q: "¿Instalan proyectores de corta distancia o ultra short throw?",
    a: "Sí. Podemos instalar proyectores normales, de corta distancia y ultra short throw, revisando la posición correcta según el modelo y la pantalla.",
  },
  {
    q: "¿Pueden instalar pantalla de proyector?",
    a: "Sí. También podemos instalar pantalla de proyector manual, fija o enrollable, dependiendo del tipo de pared o techo.",
  },
  {
    q: "¿Qué necesito preparar antes de la visita?",
    a: "Lo ideal es enviar fotos del techo o pared, modelo del proyector, soporte si ya lo tienes, distancia aproximada y dónde estarán los dispositivos conectados.",
  },
  {
    q: "¿Cuánto tarda instalar un proyector?",
    a: "Una instalación sencilla puede tardar entre 60 y 120 minutos. Si hay cableado largo, canaletas, pantalla o techo complicado, puede tardar más.",
  },
  {
    q: "¿Trabajan fuera de Valencia ciudad?",
    a: "Sí. Trabajamos en Valencia y alrededores como Mislata, Burjassot, Paterna, Torrent, Sagunto, Cullera, Gandía y otras zonas cercanas.",
  },
];

export default async function ProjectorMountingValenciaPage({
  params,
}: PageProps) {
  const { locale } = await params;
  const isEs = locale === "es";

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, quiero un presupuesto para montaje de proyector en Valencia."
      : "Hi, I would like a quote for projector mounting in Valencia."
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappText}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Montaje de Proyector en Valencia",
    serviceType: "Projector mounting",
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
      "Montaje de proyectores, pantallas, cableado HDMI, instalación de TV, soportes, estanterías y servicios handyman en Valencia.",
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
        name: "Montaje de Proyector en Valencia",
        item: `${siteUrl}/${locale}/montaje-proyector-valencia`,
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
              Proyectores en techo, pared y home cinema en Valencia
            </div>

            <h1 className="text-4xl font-black tracking-tight md:text-6xl">
              Montaje de proyector{" "}
              <span className="text-yellow-500">en Valencia</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-700">
              Instalación limpia y segura de proyectores en techo o pared.
              Medición, nivelación, orientación, soporte adecuado y gestión de
              cables HDMI para home cinema, oficinas, aulas y locales.
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
                "Instalación en techo o pared",
                "Soportes para proyector",
                "Cable HDMI y canaletas",
                "Pantalla de proyector",
                "Ajuste básico de imagen",
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
              <Video className="mb-6 h-12 w-12 text-black" />
              <p className="text-sm font-black uppercase tracking-widest">
                THEVULGO Valencia
              </p>
              <h2 className="mt-3 text-3xl font-black">
                Projector installation. Aligned. Clean. Ready to watch.
              </h2>
              <p className="mt-4 font-medium leading-7 text-neutral-900">
                Calculamos la posición, instalamos el soporte, orientamos el
                proyector y dejamos los cables organizados.
              </p>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                ["Precise position", "Distancia y altura correctas"],
                ["Clean cables", "HDMI y alimentación organizados"],
                ["Safe fixing", "Soporte adecuado para techo o pared"],
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
              text: "Revisamos techo, pared, peso y soporte antes de perforar.",
            },
            {
              icon: Ruler,
              title: "Alineación precisa",
              text: "Buscamos buena altura, distancia y orientación de imagen.",
            },
            {
              icon: Cable,
              title: "Cables organizados",
              text: "HDMI, alimentación, canaleta y recorrido limpio.",
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
          Instalación profesional de proyectores en Valencia
        </h2>

        <div className="mt-6 space-y-5 text-lg leading-8 text-neutral-700">
          <p>
            En THEVULGO realizamos montaje de proyector en Valencia para
            viviendas, salones, home cinema, oficinas, aulas, locales
            comerciales y espacios de presentación. Podemos instalar proyectores
            en techo o pared, revisar el soporte, calcular la posición y dejar
            el cableado lo más limpio posible.
          </p>

          <p>
            Antes de perforar revisamos la distancia de proyección, la altura, el
            tipo de techo o pared, el punto donde estará la pantalla y la
            ubicación de los dispositivos conectados. Esto ayuda a evitar una
            imagen torcida, mal centrada o con cables visibles innecesarios.
          </p>

          <p>
            También podemos ayudarte con canaletas para HDMI, instalación de
            pantalla de proyector, soporte para proyector, organización de
            cables, conexión con consola, portátil, decodificador, Apple TV,
            router o sistema de sonido.
          </p>
        </div>
      </section>

      <section className="bg-yellow-50 py-16">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <h2 className="text-3xl font-black md:text-4xl">
            ¿Qué incluye el montaje de proyector?
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              "Revisión de techo o pared",
              "Medición de distancia de proyección",
              "Marcado de posición correcta",
              "Instalación del soporte",
              "Nivelación y orientación del proyector",
              "Gestión básica de cables",
              "Canaleta HDMI si hace falta",
              "Ajuste básico de imagen",
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
          Tipos de instalación de proyector
        </h2>

        <div className="grid gap-8 md:grid-cols-4">
          {[
            {
              title: "Proyector en techo",
              text: "Instalación clásica para home cinema, salas, oficinas y aulas.",
            },
            {
              title: "Proyector en pared",
              text: "Opción práctica cuando el techo no es ideal o el espacio lo permite.",
            },
            {
              title: "Ultra short throw",
              text: "Revisión de distancia y posición para proyectores de tiro ultracorto.",
            },
            {
              title: "Pantalla de proyector",
              text: "Instalación de pantalla manual, fija o enrollable según el espacio.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-yellow-300 bg-white p-7 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400">
                <MonitorPlay className="h-8 w-8 text-black" />
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
              title: "HDMI y canaletas",
              text: "Podemos organizar el recorrido del cable desde tus dispositivos hasta el proyector.",
            },
            {
              title: "Home cinema",
              text: "Ideal para salón, dormitorio, sala de cine o zona de entretenimiento.",
            },
            {
              title: "Oficinas y locales",
              text: "Instalación para salas de reuniones, aulas, academias y espacios comerciales.",
            },
            {
              title: "También podemos ayudarte con",
              text: "TV, soundbar, estanterías, enchufes, soportes, pantallas y cableado.",
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
          ¿Dónde podemos instalar el proyector?
        </h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {[
            "Techo de vivienda",
            "Pared interior",
            "Salón o dormitorio",
            "Oficina o aula",
            "Local comercial",
            "Home cinema",
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
          Si no sabes dónde conviene instalar el proyector, envíanos fotos o un
          vídeo de la habitación. Podemos ayudarte a elegir la posición según la
          pantalla, distancia, enchufes y recorrido de cable.
        </p>
      </section>

      <section className="bg-yellow-400 py-16 text-black">
        <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
          <p className="text-sm font-black uppercase tracking-widest">
            Precio claro
          </p>
          <h2 className="mt-3 text-4xl font-black">
            Presupuesto para montar proyector en Valencia
          </h2>
          <p className="mt-6 text-lg font-medium leading-8 text-neutral-900">
            El precio depende del tipo de proyector, soporte, techo, pared,
            cableado HDMI, pantalla y dificultad. Envíanos fotos y te damos un
            presupuesto claro antes de empezar.
          </p>

          <div className="mt-8 rounded-3xl border border-yellow-600/30 bg-white p-6 text-left shadow-xl">
            <h3 className="text-xl font-black">El precio depende de:</h3>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Tipo de proyector",
                "Techo o pared",
                "Tipo de soporte",
                "Distancia de proyección",
                "Cable HDMI",
                "Pantalla de proyector",
                "Canaleta o cableado",
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
          Realizamos montaje de proyectores en Valencia ciudad y alrededores. Si
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
              title: "Ocultar cables de TV",
              href: `/${locale}/ocultar-cables-tv-valencia`,
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
            ¿Quieres montar un proyector en Valencia?
          </h2>
          <p className="mt-5 text-lg font-medium text-neutral-900">
            Envíanos fotos del techo o pared, modelo del proyector, soporte y
            distancia aproximada. Te damos un presupuesto claro antes de empezar.
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