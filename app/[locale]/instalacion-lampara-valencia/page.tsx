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
  Cable,
  Zap,
  Plug,
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
      ? "Instalación de Lámparas en Valencia | Desde 35€ | THEVULGO"
      : "Lamp Installation in Valencia | From €35 | THEVULGO",
    description: isEs
      ? "Instalación de lámparas en Valencia desde 35€. Luces de techo, lámparas colgantes y sustitución simple de iluminación para casas y apartamentos."
      : "Lamp installation in Valencia from €35. Ceiling lights, pendant lamps and simple light replacement for homes and apartments.",
    alternates: {
      canonical: `${siteUrl}/${locale}/instalacion-lampara-valencia`,
      languages: {
        es: `${siteUrl}/es/instalacion-lampara-valencia`,
      },
    },
    openGraph: {
      title: isEs
        ? "Instalación de Lámparas en Valencia | THEVULGO"
        : "Lamp Installation in Valencia | THEVULGO",
      description: isEs
        ? "Luces de techo, lámparas y sustitución simple de iluminación en Valencia."
        : "Ceiling lights, lamps and simple lighting replacement in Valencia.",
      url: `${siteUrl}/${locale}/instalacion-lampara-valencia`,
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
    q: "¿Cuánto cuesta instalar una lámpara en Valencia?",
    a: "La instalación de lámpara empieza desde 35€. El precio final depende del tipo de lámpara, altura, techo, peso, cableado existente y dificultad.",
  },
  {
    q: "¿Instalan lámparas de techo?",
    a: "Sí. Instalamos luces de techo, plafones, lámparas colgantes y sustituciones simples de iluminación.",
  },
  {
    q: "¿Pueden sustituir una lámpara antigua por una nueva?",
    a: "Sí. Podemos retirar una lámpara antigua y conectar una nueva si el punto de luz existente está en buen estado.",
  },
  {
    q: "¿Instalan lámparas pesadas?",
    a: "Depende del peso, tipo de techo y fijación necesaria. Para lámparas pesadas conviene enviar fotos y datos del modelo antes.",
  },
  {
    q: "¿Trabajan con techos de pladur?",
    a: "Sí, pero hay que revisar el peso de la lámpara y el tipo de fijación. En pladur puede hacer falta una fijación especial.",
  },
  {
    q: "¿Pueden instalar varias lámparas en una visita?",
    a: "Sí. Podemos instalar varias lámparas, plafones o luces en una misma visita con presupuesto combinado.",
  },
  {
    q: "¿Incluye material eléctrico?",
    a: "La instalación estándar no siempre incluye material adicional. Si hace falta taco, tornillo, conector, cable o soporte especial, se confirma antes.",
  },
  {
    q: "¿Trabajan fuera de Valencia ciudad?",
    a: "Sí. Trabajamos en Valencia y alrededores como Mislata, Burjassot, Paterna, Torrent, Sagunto, Cullera, Gandía y otras zonas cercanas.",
  },
];

export default async function LampInstallationValenciaPage({
  params,
}: PageProps) {
  const { locale } = await params;
  const isEs = locale === "es";

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, quiero un presupuesto para instalación de lámpara en Valencia."
      : "Hi, I would like a quote for lamp installation in Valencia."
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappText}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Instalación de Lámparas en Valencia",
    serviceType: "Lamp installation",
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
      price: "35",
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
      "Instalación de lámparas, luces de techo, sustitución simple de iluminación, enchufes, interruptores y servicios handyman en Valencia.",
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
        name: "Instalación de Lámparas en Valencia",
        item: `${siteUrl}/${locale}/instalacion-lampara-valencia`,
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
              Luces de techo · Lámparas · Plafones · Valencia
            </div>

            <h1 className="text-4xl font-black tracking-tight md:text-6xl">
              Instalación de lámpara{" "}
              <span className="text-yellow-500">en Valencia</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-700">
              Instalación de luces de techo, lámparas y sustitución simple de
              iluminación desde <strong className="text-neutral-950">35€</strong>{" "}
              para casas, apartamentos, oficinas y pisos en Valencia.
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
                "Instalación desde 35€",
                "Lámparas de techo",
                "Plafones y luces colgantes",
                "Sustitución simple",
                "Revisión de fijación",
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
              <Lightbulb className="mb-6 h-12 w-12 text-black" />
              <p className="text-sm font-black uppercase tracking-widest">
                THEVULGO Valencia
              </p>
              <h2 className="mt-3 text-3xl font-black">
                Lamp installation. Clean. Safe. Ready to use.
              </h2>
              <p className="mt-4 font-medium leading-7 text-neutral-900">
                Revisamos el punto de luz, fijamos la lámpara, conectamos de
                forma ordenada y comprobamos el funcionamiento.
              </p>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                ["Ceiling lights", "Luces de techo y plafones"],
                ["Lamp replacement", "Sustitución de lámpara antigua"],
                ["Clean wiring", "Conexión limpia y ordenada"],
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
              icon: Lightbulb,
              title: "Lámparas y plafones",
              text: "Instalación de luces de techo, lámparas colgantes y plafones.",
            },
            {
              icon: Zap,
              title: "Sustitución simple",
              text: "Cambio de lámpara antigua por una nueva si el punto está listo.",
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
          Instalación profesional de lámparas en Valencia
        </h2>

        <div className="mt-6 space-y-5 text-lg leading-8 text-neutral-700">
          <p>
            En THEVULGO realizamos instalación de lámparas en Valencia para
            casas, apartamentos, oficinas y pisos de alquiler. Instalamos luces
            de techo, lámparas colgantes, plafones y sustituciones simples de
            iluminación cuando el punto eléctrico existente está preparado.
          </p>

          <p>
            Antes de empezar revisamos el punto de luz, el tipo de techo, el peso
            de la lámpara, el sistema de fijación y el cableado disponible. El
            objetivo es dejar una instalación limpia, estable y funcional.
          </p>

          <p>
            También podemos ayudarte si necesitas cambiar una lámpara antigua,
            instalar varias luces en una visita o revisar si hace falta material
            adicional como tacos, tornillos, conectores o soporte específico.
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
              "Montaje del soporte",
              "Conexión de la lámpara",
              "Fijación y alineación",
              "Comprobación de funcionamiento",
              "Acabado limpio y ordenado",
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
          Tipos de iluminación que instalamos
        </h2>

        <div className="grid gap-8 md:grid-cols-4">
          {[
            {
              title: "Lámparas de techo",
              text: "Instalación de lámparas colgantes, decorativas y de salón.",
            },
            {
              title: "Plafones",
              text: "Luces de techo compactas para habitaciones, pasillos y baños.",
            },
            {
              title: "Sustitución simple",
              text: "Cambio de lámpara antigua por una nueva en punto existente.",
            },
            {
              title: "Varias luces",
              text: "Instalación de varias lámparas o plafones en una misma visita.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-yellow-300 bg-white p-7 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400">
                <Lightbulb className="h-8 w-8 text-black" />
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
            Desde 35€
          </p>
          <h2 className="mt-3 text-4xl font-black">
            Presupuesto para instalar lámpara en Valencia
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
                "Altura de instalación",
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
          Realizamos instalación de lámparas en Valencia ciudad y alrededores.
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
              title: "Instalación de enchufes",
              href: `/${locale}/instalacion-enchufes-valencia`,
            },
            {
              title: "Instalación de interruptores",
              href: `/${locale}/instalacion-interruptores-valencia`,
            },
            {
              title: "Montaje de TV en Valencia",
              href: `/${locale}/montaje-tv-valencia`,
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
            ¿Quieres instalar una lámpara en Valencia?
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