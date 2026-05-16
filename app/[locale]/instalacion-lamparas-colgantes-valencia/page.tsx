import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  Lightbulb,
  ShieldCheck,
  Wrench,
  Home,
  HelpCircle,
  MapPin,
  Star,
  Ruler,
  Cable,
  LampCeiling,
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
      ? "Instalación de Lámparas Colgantes en Valencia | Desde 39€ | THEVULGO"
      : "Pendant Lamp Installation in Valencia | From €39 | THEVULGO",
    description: isEs
      ? "Instalación de lámparas colgantes en Valencia desde 39€. Posición cuidada, altura correcta, fijación segura y acabado limpio para casas y apartamentos."
      : "Pendant lamp installation in Valencia from €39. Careful positioning, correct height, secure fixing and clean finish for homes and apartments.",
    alternates: {
      canonical: `${siteUrl}/${locale}/instalacion-lamparas-colgantes-valencia`,
      languages: {
        es: `${siteUrl}/es/instalacion-lamparas-colgantes-valencia`,
      },
    },
    openGraph: {
      title: isEs
        ? "Instalación de Lámparas Colgantes en Valencia | THEVULGO"
        : "Pendant Lamp Installation in Valencia | THEVULGO",
      description: isEs
        ? "Lámparas colgantes con posición cuidada y acabado limpio en Valencia."
        : "Pendant lamps with careful positioning and clean finish in Valencia.",
      url: `${siteUrl}/${locale}/instalacion-lamparas-colgantes-valencia`,
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
    q: "¿Cuánto cuesta instalar una lámpara colgante en Valencia?",
    a: "La instalación de lámpara colgante empieza desde 39€. El precio final depende del tipo de lámpara, peso, altura, techo, punto de luz y dificultad de instalación.",
  },
  {
    q: "¿Pueden ajustar la altura de la lámpara colgante?",
    a: "Sí. Podemos ajustar la altura cuando el modelo lo permite, especialmente en lámparas sobre mesa de comedor, cocina, isla o zona de salón.",
  },
  {
    q: "¿Pueden sustituir una lámpara antigua por una colgante?",
    a: "Sí. Podemos retirar una lámpara antigua e instalar una nueva lámpara colgante si el punto de luz existente está preparado.",
  },
  {
    q: "¿Instalan lámparas colgantes pesadas?",
    a: "Depende del peso, tipo de techo y fijación necesaria. Para lámparas pesadas conviene enviar fotos y datos del modelo antes.",
  },
  {
    q: "¿Se puede instalar en techo de pladur?",
    a: "Sí, pero hay que revisar peso y fijación. En pladur puede hacer falta una fijación especial o buscar una estructura adecuada.",
  },
  {
    q: "¿Pueden instalar varias lámparas colgantes?",
    a: "Sí. Podemos instalar varias lámparas colgantes en cocina, comedor, barra, isla, pasillo o habitaciones con presupuesto combinado.",
  },
  {
    q: "¿Qué necesito enviar para presupuesto?",
    a: "Lo ideal es enviar fotos del techo, punto de luz, lámpara, altura aproximada y ubicación donde quieres instalarla.",
  },
  {
    q: "¿Trabajan fuera de Valencia ciudad?",
    a: "Sí. Trabajamos en Valencia y alrededores como Mislata, Burjassot, Paterna, Torrent, Sagunto, Cullera, Gandía y otras zonas cercanas.",
  },
];

export default async function PendantLampInstallationValenciaPage({
  params,
}: PageProps) {
  const { locale } = await params;
  const isEs = locale === "es";

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, quiero un presupuesto para instalación de lámpara colgante en Valencia."
      : "Hi, I would like a quote for pendant lamp installation in Valencia."
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappText}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Instalación de Lámparas Colgantes en Valencia",
    serviceType: "Pendant lamp installation",
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
      "Instalación de lámparas colgantes, luces de techo, plafones, sustitución simple de iluminación, enchufes, interruptores y servicios handyman en Valencia.",
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
        name: "Instalación de Lámparas Colgantes en Valencia",
        item: `${siteUrl}/${locale}/instalacion-lamparas-colgantes-valencia`,
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
              Lámparas colgantes · Comedor · Cocina · Salón
            </div>

            <h1 className="text-4xl font-black tracking-tight md:text-6xl">
              Instalación de lámparas colgantes{" "}
              <span className="text-yellow-500">en Valencia</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-700">
              Instalación de lámparas colgantes desde{" "}
              <strong className="text-neutral-950">39€</strong>, con posición
              cuidada, altura correcta, fijación segura y acabado limpio para
              casas, apartamentos, cocinas y salones.
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
                "Instalación desde 39€",
                "Lámparas colgantes",
                "Altura y posición cuidada",
                "Comedor, cocina y salón",
                "Sustitución simple",
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
              <LampCeiling className="mb-6 h-12 w-12 text-black" />
              <p className="text-sm font-black uppercase tracking-widest">
                THEVULGO Valencia
              </p>
              <h2 className="mt-3 text-3xl font-black">
                Pendant lamp installation. Aligned. Clean. Ready to use.
              </h2>
              <p className="mt-4 font-medium leading-7 text-neutral-900">
                Revisamos el punto de luz, ajustamos posición y altura, fijamos
                la lámpara y comprobamos el funcionamiento.
              </p>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                ["Pendant lights", "Lámparas colgantes decorativas"],
                ["Correct height", "Altura cuidada sobre mesa o isla"],
                ["Clean finish", "Cableado y acabado ordenado"],
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
              icon: LampCeiling,
              title: "Lámparas colgantes",
              text: "Instalación para comedor, cocina, isla, salón o dormitorio.",
            },
            {
              icon: Ruler,
              title: "Altura correcta",
              text: "Ajustamos la altura cuando el modelo lo permite.",
            },
            {
              icon: ShieldCheck,
              title: "Fijación segura",
              text: "Revisamos techo, peso, soporte y puntos de fijación.",
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
          Instalación profesional de lámparas colgantes en Valencia
        </h2>

        <div className="mt-6 space-y-5 text-lg leading-8 text-neutral-700">
          <p>
            En THEVULGO realizamos instalación de lámparas colgantes en Valencia
            para casas, apartamentos, cocinas, salones, comedores, dormitorios y
            pisos de alquiler. Instalamos lámparas sobre mesa de comedor, isla de
            cocina, barra, zona de salón o punto central de habitación.
          </p>

          <p>
            Antes de empezar revisamos el punto de luz, el tipo de techo, el peso
            de la lámpara, la altura deseada, el sistema de fijación y el
            cableado disponible. El objetivo es dejar una instalación limpia,
            centrada, estable y funcional.
          </p>

          <p>
            También podemos ayudarte si necesitas sustituir una lámpara antigua,
            instalar varias lámparas colgantes en una visita o confirmar si hace
            falta material adicional como tacos, tornillos, conectores o soporte
            específico.
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
              "Revisión del punto de luz",
              "Revisión del tipo de techo",
              "Retirada de lámpara antigua si aplica",
              "Ajuste de altura si el modelo lo permite",
              "Montaje del soporte",
              "Conexión de la lámpara",
              "Fijación y alineación",
              "Comprobación de funcionamiento",
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
          Dónde instalamos lámparas colgantes
        </h2>

        <div className="grid gap-8 md:grid-cols-4">
          {[
            {
              title: "Comedor",
              text: "Lámparas colgantes sobre mesa con altura y posición cuidada.",
            },
            {
              title: "Cocina o isla",
              text: "Instalación sobre barra, isla de cocina o zona de trabajo.",
            },
            {
              title: "Salón",
              text: "Lámparas decorativas para zona central o área de estar.",
            },
            {
              title: "Dormitorio",
              text: "Lámparas colgantes laterales o punto central de habitación.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-yellow-300 bg-white p-7 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400">
                <Home className="h-8 w-8 text-black" />
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
            Desde 39€
          </p>
          <h2 className="mt-3 text-4xl font-black">
            Presupuesto para instalar lámpara colgante en Valencia
          </h2>
          <p className="mt-6 text-lg font-medium leading-8 text-neutral-900">
            El precio depende del tipo de lámpara, techo, altura, peso, punto de
            luz, material necesario y si hay que retirar una lámpara anterior.
            Envíanos fotos y te damos un precio claro.
          </p>

          <div className="mt-8 rounded-3xl border border-yellow-600/30 bg-white p-6 text-left shadow-xl">
            <h3 className="text-xl font-black">El precio depende de:</h3>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Tipo de lámpara",
                "Tipo de techo",
                "Peso de la lámpara",
                "Altura deseada",
                "Punto de luz existente",
                "Retirada de lámpara antigua",
                "Material adicional",
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
          Realizamos instalación de lámparas colgantes en Valencia ciudad y
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
              title: "Instalación de lámpara",
              href: `/${locale}/instalacion-lampara-valencia`,
            },
            {
              title: "Instalación de enchufes",
              href: `/${locale}/instalacion-enchufes-valencia`,
            },
            {
              title: "Instalación de interruptores",
              href: `/${locale}/instalacion-interruptores-valencia`,
            },
            {
              title: "Ocultar cables en Valencia",
              href: `/${locale}/ocultar-cables-valencia`,
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
            ¿Quieres instalar una lámpara colgante en Valencia?
          </h2>
          <p className="mt-5 text-lg font-medium text-neutral-900">
            Envíanos fotos de la lámpara, techo y punto de luz. Te damos un
            presupuesto claro antes de empezar.
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