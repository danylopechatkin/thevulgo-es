import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  Volume2,
  ShieldCheck,
  Wrench,
  Cable,
  Home,
  HelpCircle,
  MapPin,
  Star,
  Speaker,
  Music,
  Tv,
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
      ? "Instalar Soundbar en Valencia | Soportes, 5.1 y Sonido Home Cinema | THEVULGO"
      : "Soundbar Mounting in Valencia | Brackets, 5.1 & Home Cinema Audio | THEVULGO",
    description: isEs
      ? "Instalación de soundbar y sistemas de sonido en Valencia. Montaje bajo TV, pared, soportes, altavoces 5.1, Dolby, home cinema, cableado y configuración básica."
      : "Soundbar and home audio installation in Valencia. Under-TV mounting, wall brackets, 5.1 speakers, Dolby, home cinema, cable management and basic setup.",
    alternates: {
      canonical: `${siteUrl}/${locale}/instalar-soundbar-valencia`,
      languages: {
        es: `${siteUrl}/es/instalar-soundbar-valencia`,
      },
    },
    openGraph: {
      title: isEs
        ? "Instalar Soundbar y Sonido Home Cinema en Valencia | THEVULGO"
        : "Soundbar & Home Cinema Audio Installation in Valencia | THEVULGO",
      description: isEs
        ? "Montaje limpio de soundbar, altavoces, cableado y sistemas de sonido en Valencia."
        : "Clean soundbar, speaker, cable and home audio installation in Valencia.",
      url: `${siteUrl}/${locale}/instalar-soundbar-valencia`,
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
    q: "¿Cuánto cuesta instalar una soundbar en Valencia?",
    a: "El precio depende del tipo de soundbar, soporte, ubicación, pared, TV, cableado y si hay subwoofer o altavoces traseros. Envíanos fotos y te damos un presupuesto claro antes de empezar.",
  },
  {
    q: "¿Pueden montar una soundbar debajo de la TV?",
    a: "Sí. Podemos instalar la soundbar debajo de la TV, fijada a la pared o al soporte del televisor, según el modelo, peso y espacio disponible.",
  },
  {
    q: "¿Instalan sistemas de sonido 5.1 o Dolby?",
    a: "Sí. Podemos ayudarte con instalación de sistemas 5.1, Dolby, altavoces traseros, subwoofer, barra de sonido, receptor AV y organización de cables.",
  },
  {
    q: "¿Pueden ocultar los cables de la soundbar?",
    a: "Sí. Podemos organizar cables con canaleta, recorrido discreto, detrás del mueble o junto con la ocultación de cables de TV.",
  },
  {
    q: "¿Instalan altavoces en pared o techo?",
    a: "Sí. Podemos instalar altavoces en pared o soportes, siempre revisando el peso, la ubicación y el tipo de superficie.",
  },
  {
    q: "¿Trabajan en casas, oficinas, bares y cafés?",
    a: "Sí. Podemos instalar sonido en viviendas, apartamentos, oficinas, bares, cafés, salas pequeñas y locales comerciales.",
  },
  {
    q: "¿Pueden configurar el sonido después de instalar?",
    a: "Podemos hacer una configuración básica: conexión HDMI ARC/eARC, óptico, Bluetooth, subwoofer, prueba de sonido y orientación inicial.",
  },
  {
    q: "¿Trabajan fuera de Valencia ciudad?",
    a: "Sí. Trabajamos en Valencia y alrededores como Mislata, Burjassot, Paterna, Torrent, Sagunto, Cullera, Gandía y otras zonas cercanas.",
  },
];

export default async function SoundbarMountingValenciaPage({
  params,
}: PageProps) {
  const { locale } = await params;
  const isEs = locale === "es";

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, quiero un presupuesto para instalar una soundbar o sistema de sonido en Valencia."
      : "Hi, I would like a quote for soundbar or audio system installation in Valencia."
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappText}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Instalar Soundbar y Sistema de Sonido en Valencia",
    serviceType: "Soundbar mounting and home audio installation",
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
      "Instalación de soundbar, sistemas de sonido, home cinema, altavoces 5.1, montaje de TV, cableado y servicios handyman en Valencia.",
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
        name: "Instalar Soundbar en Valencia",
        item: `${siteUrl}/${locale}/instalar-soundbar-valencia`,
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
              Soundbar · 5.1 · Dolby · Home cinema · Oficina · Bar
            </div>

            <h1 className="text-4xl font-black tracking-tight md:text-6xl">
              Instalar soundbar{" "}
              <span className="text-yellow-500">en Valencia</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-700">
              Montaje limpio de soundbar, altavoces y sistemas de sonido para
              casa, apartamento, oficina, bar o café. Instalación bajo TV,
              soportes de pared, 5.1, Dolby, subwoofer, cableado y configuración
              básica.
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
                "Soundbar bajo TV",
                "Soportes de pared",
                "Altavoces 5.1 y Dolby",
                "Subwoofer y altavoces traseros",
                "Cableado y canaletas",
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
              <Volume2 className="mb-6 h-12 w-12 text-black" />
              <p className="text-sm font-black uppercase tracking-widest">
                THEVULGO Valencia
              </p>
              <h2 className="mt-3 text-3xl font-black">
                Clean audio setup. Better sound. Better finish.
              </h2>
              <p className="mt-4 font-medium leading-7 text-neutral-900">
                Instalamos la barra, organizamos cables, conectamos dispositivos
                y dejamos el sistema listo para probar.
              </p>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                ["Soundbar mounting", "Montaje bajo TV o en pared"],
                ["5.1 audio", "Altavoces traseros y subwoofer"],
                ["Cable management", "HDMI ARC/eARC, óptico y canaleta"],
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
              title: "Montaje seguro",
              text: "Revisamos peso, soporte, pared y posición antes de perforar.",
            },
            {
              icon: Speaker,
              title: "Sonido 5.1 / Dolby",
              text: "Instalación de altavoces, subwoofer y sistemas home cinema.",
            },
            {
              icon: Cable,
              title: "Cables organizados",
              text: "HDMI ARC/eARC, óptico, alimentación, canaleta y rutas limpias.",
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
          Instalación de soundbar y sistemas de sonido en Valencia
        </h2>

        <div className="mt-6 space-y-5 text-lg leading-8 text-neutral-700">
          <p>
            En THEVULGO realizamos instalación de soundbar en Valencia y montaje
            de sistemas de sonido para viviendas, apartamentos, oficinas, bares,
            cafés, locales comerciales y salas pequeñas. Podemos instalar una
            barra de sonido debajo de la TV, fijarla a la pared, colocarla en un
            soporte compatible o integrarla con tu televisor.
          </p>

          <p>
            También podemos ayudarte con sistemas de sonido 5.1, Dolby, home
            cinema, altavoces traseros, subwoofer, altavoces de pared, cableado
            HDMI ARC/eARC, cable óptico, canaletas, organización de cables y
            configuración básica para que todo funcione correctamente.
          </p>

          <p>
            Antes de perforar revisamos la posición de la TV, altura de la
            soundbar, tipo de pared, cables necesarios, ubicación del subwoofer y
            posición de altavoces traseros. El objetivo es conseguir mejor
            sonido, instalación limpia y una apariencia ordenada.
          </p>
        </div>
      </section>

      <section className="bg-yellow-50 py-16">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <h2 className="text-3xl font-black md:text-4xl">
            ¿Qué incluye la instalación de sonido?
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              "Revisión de TV, pared y ubicación",
              "Montaje de soundbar bajo TV o en pared",
              "Instalación de soportes adecuados",
              "Organización de cables visibles",
              "Conexión HDMI ARC/eARC u óptica",
              "Colocación de subwoofer",
              "Ubicación de altavoces traseros",
              "Prueba básica de sonido",
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
          Tipos de instalación de audio
        </h2>

        <div className="grid gap-8 md:grid-cols-4">
          {[
            {
              title: "Soundbar bajo TV",
              text: "Instalación limpia debajo de la TV, fijada a pared o compatible con soporte.",
            },
            {
              title: "Sistema 5.1",
              text: "Colocación de altavoces frontales, traseros, central y subwoofer.",
            },
            {
              title: "Home cinema",
              text: "Instalación para salón, habitación, sala de cine o zona multimedia.",
            },
            {
              title: "Audio para local",
              text: "Soluciones para oficina, bar, café, recepción o pequeño comercio.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-yellow-300 bg-white p-7 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400">
                <Music className="h-8 w-8 text-black" />
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
              title: "Soportes para soundbar",
              text: "Instalamos soportes de pared o sistemas compatibles con soporte de TV.",
            },
            {
              title: "Dolby y 5.1",
              text: "Ayuda con colocación de altavoces para mejor experiencia de sonido.",
            },
            {
              title: "Cableado limpio",
              text: "Canaletas, HDMI, óptico, alimentación y organización detrás del mueble.",
            },
            {
              title: "También podemos ayudarte con",
              text: "TV, proyectores, enchufes, cables, estanterías y home cinema.",
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
          ¿Dónde instalamos sistemas de sonido?
        </h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {[
            "Salón y home cinema",
            "Dormitorio",
            "Apartamento",
            "Oficina",
            "Bar o café",
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
          Si no sabes dónde colocar la soundbar, subwoofer o altavoces traseros,
          envíanos fotos o vídeo de la habitación. Podemos orientarte según la
          posición de la TV, sofá, enchufes, muebles y recorrido de cables.
        </p>
      </section>

      <section className="bg-yellow-400 py-16 text-black">
        <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
          <p className="text-sm font-black uppercase tracking-widest">
            Precio claro
          </p>
          <h2 className="mt-3 text-4xl font-black">
            Presupuesto para instalar soundbar en Valencia
          </h2>
          <p className="mt-6 text-lg font-medium leading-8 text-neutral-900">
            El precio depende del tipo de soundbar, soporte, pared, cableado,
            subwoofer, altavoces traseros y dificultad. Envíanos fotos y te
            damos un presupuesto claro antes de empezar.
          </p>

          <div className="mt-8 rounded-3xl border border-yellow-600/30 bg-white p-6 text-left shadow-xl">
            <h3 className="text-xl font-black">El precio depende de:</h3>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Tipo de soundbar",
                "Soporte de pared o TV",
                "Tipo de pared",
                "Cable HDMI ARC/eARC",
                "Cable óptico o alimentación",
                "Subwoofer y altavoces traseros",
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
          Realizamos instalación de soundbar y sistemas de sonido en Valencia
          ciudad y alrededores. Si estás fuera de Valencia, envíanos tu
          dirección y te confirmamos disponibilidad.
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
              title: "Ocultar cables en Valencia",
              href: `/${locale}/ocultar-cables-valencia`,
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
            ¿Quieres instalar una soundbar o sonido en Valencia?
          </h2>
          <p className="mt-5 text-lg font-medium text-neutral-900">
            Envíanos fotos de la TV, pared, soundbar, altavoces y zona de
            instalación. Te damos un presupuesto claro antes de empezar.
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