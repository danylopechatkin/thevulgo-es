import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  Tv,
  ShieldCheck,
  Wrench,
  Cable,
  Home,
  HelpCircle,
  MapPin,
  Star,
} from "lucide-react";

type PageProps = {
  params: Promise<{ locale: string }>;
};

const siteUrl = "https://thevulgo.es";

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";

  return {
    title: isEs
      ? "Montaje de TV en Valencia | Desde 49€ | THEVULGO"
      : "TV Mounting in Valencia | From €49 | THEVULGO",
    description: isEs
      ? "Montaje profesional de TV en Valencia desde 49€. Instalación limpia, soportes fijos o articulados, ocultación de cables, Samsung Frame y TVs grandes."
      : "Professional TV mounting in Valencia from €49. Clean installation, fixed or full-motion brackets, cable management, Samsung Frame and large TVs.",
    alternates: {
      canonical: `${siteUrl}/${locale}/montaje-tv-valencia`,
      languages: {
        es: `${siteUrl}/es/montaje-tv-valencia`,
        en: `${siteUrl}/en/tv-mounting-valencia`,
      },
    },
    openGraph: {
      title: isEs
        ? "Montaje de TV en Valencia | Desde 49€"
        : "TV Mounting in Valencia | From €49",
      description: isEs
        ? "Instalación limpia, rápida y profesional de televisores en Valencia y alrededores."
        : "Clean, fast and professional TV mounting in Valencia and nearby areas.",
      url: `${siteUrl}/${locale}/montaje-tv-valencia`,
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
    q: "¿Cuánto cuesta montar una TV en Valencia?",
    a: "El montaje estándar de TV en Valencia empieza desde 49€. El precio final depende del tamaño del televisor, tipo de soporte, tipo de pared, ocultación de cables y si hace falta instalar una toma eléctrica.",
  },
  {
    q: "¿Pueden instalar televisores grandes de 65, 75, 85 o 98 pulgadas?",
    a: "Sí. Instalamos televisores grandes, siempre revisando el tipo de pared, peso del televisor, soporte adecuado y seguridad de la instalación.",
  },
  {
    q: "¿Instalan TV en pared de pladur?",
    a: "Sí. Podemos instalar TV en pladur usando fijaciones adecuadas o buscando estructura interna cuando sea necesario. Antes de perforar revisamos la pared.",
  },
  {
    q: "¿Pueden ocultar los cables de la TV?",
    a: "Sí. Podemos organizar cables con canaleta exterior o estudiar una solución más limpia según la pared, ubicación de enchufes y distancia hasta los dispositivos.",
  },
  {
    q: "¿Instalan Samsung Frame TV?",
    a: "Sí. Podemos instalar Samsung Frame TV, incluyendo soporte, nivelación precisa y planificación del cable One Connect según el espacio disponible.",
  },
  {
    q: "¿Pueden traer el soporte de TV?",
    a: "Sí. Podemos ayudarte a elegir un soporte fijo, inclinable o articulado. También podemos comprarlo y llevarlo el día de la instalación.",
  },
  {
    q: "¿Cuánto tarda una instalación de TV?",
    a: "Una instalación estándar suele tardar entre 45 y 90 minutos. Si hay ocultación de cables, pared complicada o trabajo eléctrico, puede tardar más.",
  },
  {
    q: "¿Trabajan fuera de Valencia ciudad?",
    a: "Sí. Trabajamos en Valencia y alrededores como Mislata, Burjassot, Paterna, Torrent, Sagunto, Cullera, Gandía y otras zonas cercanas.",
  },
];

export default async function TvMountingValenciaPage({ params }: PageProps) {
  const { locale } = await params;
  const isEs = locale === "es";

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, quiero un presupuesto para montaje de TV en Valencia."
      : "Hi, I would like a quote for TV mounting in Valencia."
  );

  const whatsappUrl = `https://wa.me/34610076942?text=${whatsappText}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Montaje de TV en Valencia",
    serviceType: "TV mounting",
    provider: {
      "@type": "LocalBusiness",
      name: "THEVULGO",
      url: siteUrl,
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
    areaServed: "Valencia",
    priceRange: "€€",
    description:
      "Servicios de montaje de TV, instalaciones limpias, pequeños trabajos eléctricos, montaje de muebles y handyman services en Valencia.",
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
        name: "Montaje de TV en Valencia",
        item: `${siteUrl}/${locale}/montaje-tv-valencia`,
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
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-yellow-300 bg-white px-4 py-2 text-sm font-semibold shadow-sm">
              <MapPin className="h-4 w-4 text-yellow-500" />
              Valencia & nearby · Clean finish · Fast response
            </div>

            <h1 className="text-4xl font-black tracking-tight md:text-6xl">
              Montaje de TV en Valencia
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-700">
              Instalación profesional de televisores en pared desde{" "}
              <strong className="text-neutral-950">49€</strong>. Soportes fijos,
              inclinables o articulados, gestión de cables, montaje de TVs
              grandes y acabado limpio sin sorpresas.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappUrl}
                className="inline-flex items-center justify-center rounded-xl bg-yellow-400 px-6 py-4 font-bold text-black shadow-md transition hover:scale-105 hover:bg-yellow-300"
              >
                Pedir presupuesto por WhatsApp
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>

              <Link
                href={`/${locale}/services`}
                className="inline-flex items-center justify-center rounded-xl border border-neutral-300 bg-white px-6 py-4 font-bold text-neutral-950 shadow-sm transition hover:scale-105"
              >
                Ver otros servicios
              </Link>
            </div>

            <div className="mt-8 grid gap-3 text-sm font-medium text-neutral-700 sm:grid-cols-2">
              {[
                "Instalación desde 49€",
                "Soportes fijos o articulados",
                "Ocultación de cables",
                "TVs grandes y Samsung Frame",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-yellow-300 bg-white p-6 shadow-2xl">
            <div className="rounded-2xl bg-neutral-950 p-8 text-white">
              <Tv className="mb-6 h-12 w-12 text-yellow-400" />
              <p className="text-sm font-bold uppercase tracking-widest text-yellow-400">
                THEVULGO Valencia
              </p>
              <h2 className="mt-3 text-3xl font-black">
                Clean TV installation. No mess. No stress.
              </h2>
              <p className="mt-4 text-neutral-300">
                Revisamos la pared, nivelamos la TV, usamos herramientas
                profesionales y dejamos la zona limpia.
              </p>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                ["Fast replies", "Respuesta rápida por WhatsApp"],
                ["Clear price", "Precio claro antes de perforar"],
                ["Pro tools", "Herramientas profesionales"],
                ["Clean finish", "Acabado limpio y ordenado"],
              ].map(([title, text]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-neutral-200 bg-yellow-50 p-4"
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
              text: "Elegimos fijaciones adecuadas según pared y peso.",
            },
            {
              icon: Wrench,
              title: "Trabajo limpio",
              text: "Nivelado preciso, perforación cuidada y acabado ordenado.",
            },
            {
              icon: Cable,
              title: "Cables organizados",
              text: "Canaleta, gestión de cables o solución personalizada.",
            },
            {
              icon: Star,
              title: "Precio claro",
              text: "Presupuesto antes del trabajo. Sin sorpresas.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm"
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
          Montaje profesional de televisores en Valencia
        </h2>

        <div className="mt-6 space-y-5 text-lg leading-8 text-neutral-700">
          <p>
            En THEVULGO realizamos montaje de TV en Valencia para viviendas,
            apartamentos, oficinas, locales comerciales y alquileres turísticos.
            Si necesitas colgar una TV en pared, instalar un soporte, organizar
            cables o dejar una instalación más limpia, podemos ayudarte con un
            trabajo rápido, seguro y bien terminado.
          </p>

          <p>
            Antes de perforar, revisamos el tipo de pared, la altura ideal, el
            tamaño del televisor, el tipo de soporte y la posición de enchufes o
            dispositivos. El objetivo es que la TV quede centrada, nivelada,
            segura y cómoda para ver desde el sofá, la cama, una sala de espera
            o una zona comercial.
          </p>

          <p>
            Trabajamos con soportes fijos, inclinables y articulados. También
            hacemos instalaciones de Samsung Frame TV, televisores grandes,
            montaje sobre pladur, cable management, canaletas exteriores y
            preparación para consolas, decodificadores, routers, soundbars o
            sistemas multimedia.
          </p>
        </div>
      </section>

      <section className="bg-neutral-950 py-16 text-white">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <h2 className="text-3xl font-black md:text-4xl">
            ¿Qué incluye nuestro servicio?
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              "Revisión de pared y ubicación",
              "Medición y nivelación precisa",
              "Instalación del soporte",
              "Montaje seguro del televisor",
              "Organización básica de cables",
              "Comprobación final de estabilidad",
              "Limpieza básica de la zona",
              "Consejo sobre altura ideal",
              "Presupuesto claro antes del trabajo",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-yellow-400" />
                <p className="font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              title: "Soporte fijo",
              text: "La opción más limpia y económica. Ideal si quieres la TV cerca de la pared y no necesitas moverla.",
            },
            {
              title: "Soporte inclinable",
              text: "Buena opción para dormitorios o instalaciones un poco más altas, porque permite inclinar la pantalla.",
            },
            {
              title: "Soporte articulado",
              text: "Permite mover, girar y separar la TV de la pared. Ideal para esquinas, salones y zonas con varios ángulos.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-yellow-300 bg-yellow-50 p-7 shadow-md"
            >
              <h2 className="text-2xl font-black">{item.title}</h2>
              <p className="mt-4 leading-7 text-neutral-700">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-10 md:px-8">
        <h2 className="text-3xl font-black">
          Ocultación de cables y enchufes para TV
        </h2>

        <p className="mt-6 text-lg leading-8 text-neutral-700">
          Si quieres una instalación más limpia, podemos ayudarte con la
          ocultación de cables. La solución más rápida suele ser una canaleta
          exterior blanca o negra. Para acabados más avanzados, podemos revisar
          si es posible mover una toma eléctrica, preparar una salida detrás de
          la TV o planificar una instalación más discreta según la pared y el
          espacio disponible.
        </p>

        <div className="mt-8 rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-black">También podemos ayudarte con:</h3>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {[
              "Instalar enchufe para TV",
              "Ocultar cable HDMI",
              "Instalar soundbar",
              "Pasar cable por canaleta",
              "Preparar TV para consola",
              "Organizar router o decodificador",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600" />
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-yellow-50 py-16">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-black md:text-4xl">
                Instalación Samsung Frame TV
              </h2>
              <p className="mt-6 text-lg leading-8 text-neutral-700">
                Samsung Frame necesita una instalación especialmente cuidada:
                altura exacta, nivelación precisa, planificación del cable One
                Connect y una colocación limpia para conseguir ese efecto de
                cuadro en la pared. Podemos instalar Samsung Frame en Valencia
                y ayudarte a decidir la mejor posición antes de perforar.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-black md:text-4xl">
                TVs grandes: 65”, 75”, 85” y más
              </h2>
              <p className="mt-6 text-lg leading-8 text-neutral-700">
                Para televisores grandes revisamos con más cuidado el peso, el
                soporte, la pared y los puntos de fijación. Una TV grande debe
                quedar segura, nivelada y bien centrada. Si tienes una pantalla
                de gran formato, envíanos fotos de la zona y te diremos qué
                soporte y qué instalación conviene.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-16 md:px-8">
        <h2 className="text-3xl font-black">
          ¿En qué tipo de pared instalamos?
        </h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {[
            "Ladrillo",
            "Hormigón",
            "Pladur",
            "Paredes interiores",
            "Paredes de apartamento",
            "Locales comerciales",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm"
            >
              <Home className="h-7 w-7 text-yellow-500" />
              <p className="mt-3 font-bold">{item}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-lg leading-8 text-neutral-700">
          Si no sabes qué tipo de pared tienes, puedes enviarnos una foto o un
          vídeo por WhatsApp. También podemos revisar la pared en persona antes
          de elegir la mejor solución.
        </p>
      </section>

      <section className="bg-neutral-950 py-16 text-white">
        <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
          <p className="text-sm font-black uppercase tracking-widest text-yellow-400">
            Precio claro
          </p>
          <h2 className="mt-3 text-4xl font-black">
            Montaje de TV desde 49€
          </h2>
          <p className="mt-6 text-lg leading-8 text-neutral-300">
            El precio estándar empieza desde 49€. El coste final puede variar si
            necesitas soporte incluido, instalación de TV grande, ocultación de
            cables, trabajo eléctrico, canaleta o montaje especial.
          </p>

          <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6 text-left">
            <h3 className="text-xl font-black">El precio depende de:</h3>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Tamaño del televisor",
                "Tipo de soporte",
                "Tipo de pared",
                "Altura de instalación",
                "Ocultación de cables",
                "Nueva toma eléctrica",
                "Samsung Frame",
                "Distancia fuera de Valencia",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-yellow-400" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <a
            href={whatsappUrl}
            className="mt-8 inline-flex items-center justify-center rounded-xl bg-yellow-400 px-7 py-4 font-black text-black shadow-md transition hover:scale-105 hover:bg-yellow-300"
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
          Realizamos montaje de TV en Valencia ciudad y alrededores. Si estás
          fuera de Valencia, envíanos tu dirección y te confirmamos
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

      <section className="bg-neutral-50 py-16">
        <div className="mx-auto max-w-4xl px-5 md:px-8">
          <h2 className="text-3xl font-black md:text-4xl">
            Preguntas frecuentes
          </h2>

          <div className="mt-8 space-y-4">
            {faqs.map((item) => (
              <details
                key={item.q}
                className="group rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm"
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
              title: "Instalar enchufe para TV",
              href: `/${locale}/instalar-enchufe-valencia`,
            },
            {
              title: "Ocultar cables de TV",
              href: `/${locale}/ocultar-cables-tv-valencia`,
            },
            {
              title: "Montaje de proyector",
              href: `/${locale}/montaje-proyector-valencia`,
            },
            {
              title: "Instalar soundbar",
              href: `/${locale}/instalar-soundbar-valencia`,
            },
            {
              title: "Montaje de muebles",
              href: `/${locale}/montaje-muebles-valencia`,
            },
            {
              title: "Servicios handyman Valencia",
              href: `/${locale}/services`,
            },
          ].map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-yellow-400 hover:shadow-md"
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
            ¿Quieres montar tu TV en Valencia?
          </h2>
          <p className="mt-5 text-lg font-medium text-neutral-900">
            Envíanos una foto de la pared, el tamaño de la TV y tu zona. Te
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