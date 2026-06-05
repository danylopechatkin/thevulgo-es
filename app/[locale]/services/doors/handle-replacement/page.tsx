import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  DoorOpen,
  ShieldCheck,
  Home,
  HelpCircle,
  MapPin,
  Star,
  Ruler,
  Wrench,
} from "lucide-react";

type PageProps = {
  params: Promise<{ locale: string }>;
};

const siteUrl = "https://www.thevulgo.es";
const phoneNumber = "34610076942";
const pagePath = "/services/doors/handle-replacement";

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";

  return {
    title: isEs
      ? "Cambio de Manilla de Puerta | Desde 29€ | THEVULGO"
      : "Door Handle Replacement | From €29 | THEVULGO",
    description: isEs
      ? "Cambio de manillas de puerta desde 29€. Sustitución de manillas gastadas, rotas o antiguas por herrajes más limpios y modernos para puertas interiores."
      : "Door handle replacement from €29. Replace worn, damaged or outdated door handles with cleaner, better-looking hardware for interior doors.",
    alternates: {
      canonical: `${siteUrl}/${locale}${pagePath}`,
      languages: {
        es: `${siteUrl}/es${pagePath}`,
        en: `${siteUrl}/en${pagePath}`,
      },
    },
    openGraph: {
      title: isEs
        ? "Cambio de Manilla de Puerta | THEVULGO"
        : "Door Handle Replacement | THEVULGO",
      description: isEs
        ? "Sustitución de manillas, pomos y herrajes de puertas interiores."
        : "Replacement of door handles, knobs and interior door hardware.",
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
    q: "¿Cuánto cuesta cambiar una manilla de puerta?",
    a: "El cambio de manilla de puerta empieza desde 29€. El precio depende del tipo de manilla, puerta, herraje, tornillos, compatibilidad y si hay que ajustar el cierre.",
  },
  {
    q: "¿Pueden cambiar una manilla rota?",
    a: "Sí. Podemos sustituir manillas rotas, gastadas, antiguas o dañadas por una nueva compatible.",
  },
  {
    q: "¿Instalan manillas compradas en Amazon, IKEA o Leroy Merlin?",
    a: "Sí. Podemos instalar manillas compradas en Amazon, IKEA, Leroy Merlin, ferreterías u otras tiendas si son compatibles con la puerta.",
  },
  {
    q: "¿Cambian manillas de puertas interiores?",
    a: "Sí. Trabajamos principalmente con puertas interiores de viviendas, habitaciones, baños, cocinas, apartamentos y pisos de alquiler.",
  },
  {
    q: "¿Pueden cambiar pomos y manillas tipo palanca?",
    a: "Sí. Podemos sustituir pomos, manillas tipo palanca y herrajes comunes de puertas interiores cuando el sistema es compatible.",
  },
  {
    q: "¿Necesito tener la manilla nueva?",
    a: "Sí, lo ideal es tener la manilla nueva comprada antes de la visita. Puedes enviarnos foto o enlace para revisar si parece compatible.",
  },
  {
    q: "¿Pueden cambiar varias manillas en una visita?",
    a: "Sí. Podemos cambiar varias manillas en una sola visita y normalmente es más eficiente que hacer visitas separadas.",
  },
  {
    q: "¿Qué necesito enviar para pedir presupuesto?",
    a: "Envíanos fotos de la manilla actual, ambos lados de la puerta, canto de la puerta, cierre y la manilla nueva si ya la tienes.",
  },
];

export default async function HandleReplacementPage({ params }: PageProps) {
  const { locale } = await params;
  const isEs = locale === "es";

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, quiero un presupuesto para cambio de manilla de puerta."
      : "Hi, I would like a quote for door handle replacement."
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappText}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: isEs ? "Cambio de Manilla de Puerta" : "Door Handle Replacement",
    serviceType: "Door handle replacement",
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
      price: "29",
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
      "Cambio de manillas de puerta, pomos, herrajes, puertas interiores, ajustes de pestillo, bisagras y servicios handyman en Valencia.",
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
        name: "Doors",
        item: `${siteUrl}/${locale}/services/doors`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: isEs ? "Cambio de Manilla de Puerta" : "Door Handle Replacement",
        item: `${siteUrl}/${locale}${pagePath}`,
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
              Manillas, pomos y herrajes para puertas interiores
            </div>

            <h1 className="text-4xl font-black tracking-tight md:text-6xl">
              Cambio de manilla de puerta
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-700">
              Sustitución de manillas gastadas, rotas, dañadas o antiguas por
              herrajes más limpios y modernos. Servicio práctico para puertas
              interiores y setups comunes de vivienda.
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
                "Desde 29€",
                "Manillas gastadas o rotas",
                "Pomos y manillas interiores",
                "Herrajes más limpios",
                "Mejor aspecto de la puerta",
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
              <DoorOpen className="mb-6 h-12 w-12 text-black" />
              <p className="text-sm font-black uppercase tracking-widest">
                THEVULGO Valencia
              </p>
              <h2 className="mt-3 text-3xl font-black">
                Door handle replacement. Cleaner hardware. Better look.
              </h2>
              <p className="mt-4 font-medium leading-7 text-neutral-900">
                Revisamos la manilla actual, comprobamos compatibilidad e
                instalamos el nuevo herraje para mejorar uso y aspecto.
              </p>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                ["Cleaner hardware", "Herraje más limpio y moderno"],
                ["Interior doors", "Puertas comunes de vivienda"],
                ["Better appearance", "Mejor imagen de la puerta"],
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
              title: "Instalación segura",
              text: "Revisamos compatibilidad, tornillos, cierre y estado de la puerta.",
            },
            {
              icon: Wrench,
              title: "Cambio práctico",
              text: "Retiramos la manilla antigua e instalamos la nueva si es compatible.",
            },
            {
              icon: Ruler,
              title: "Mejor acabado",
              text: "Buscamos una colocación limpia y un resultado visual más cuidado.",
            },
            {
              icon: Star,
              title: "Precio claro",
              text: "Desde 29€. Presupuesto según fotos, manilla y dificultad.",
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
          Sustitución de manillas y pomos de puerta
        </h2>

        <div className="mt-6 space-y-5 text-lg leading-8 text-neutral-700">
          <p>
            En THEVULGO realizamos cambio de manillas de puerta, pomos y
            herrajes interiores para viviendas, apartamentos, habitaciones,
            baños, cocinas, pisos de alquiler y setups comunes de hogar.
          </p>

          <p>
            Antes de instalar revisamos la manilla existente, el tipo de puerta,
            la medida, el cierre, el canto, los tornillos, el embellecedor y la
            compatibilidad con la manilla nueva. Esto ayuda a evitar problemas de
            encaje y mejora el resultado final.
          </p>

          <p>
            También podemos combinar este trabajo con otros servicios de puertas:
            reparar manilla suelta, ajuste de pestillo, ajuste de cerradero,
            alineación de puerta, apriete de bisagras o cambio de cilindro.
          </p>
        </div>
      </section>

      <section className="bg-yellow-50 py-16">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <h2 className="text-3xl font-black md:text-4xl">
            ¿Qué incluye el cambio de manilla?
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              "Revisión de manilla actual",
              "Comprobación de puerta y cierre",
              "Retirada del herraje antiguo",
              "Revisión de compatibilidad",
              "Instalación de nueva manilla",
              "Ajuste básico de tornillos",
              "Comprobación de apertura",
              "Prueba final de cierre",
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
          Tipos de manillas que podemos cambiar
        </h2>

        <div className="grid gap-8 md:grid-cols-4">
          {[
            {
              title: "Manilla interior",
              text: "Sustitución de manillas comunes para habitaciones, baños y cocinas.",
            },
            {
              title: "Pomo de puerta",
              text: "Cambio de pomos antiguos, dañados o incómodos por modelos compatibles.",
            },
            {
              title: "Manilla tipo palanca",
              text: "Instalación de manillas modernas tipo palanca para puertas interiores.",
            },
            {
              title: "Herrajes compatibles",
              text: "Cambio de herrajes visibles cuando el sistema de puerta lo permite.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-yellow-300 bg-white p-7 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400">
                <DoorOpen className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-2xl font-black">{item.title}</h3>
              <p className="mt-4 leading-7 text-neutral-700">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-16 md:px-8">
        <h2 className="text-3xl font-black">
          ¿Dónde cambiamos manillas?
        </h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {[
            "Puertas interiores",
            "Puertas de habitación",
            "Puertas de baño",
            "Puertas de cocina",
            "Pisos de alquiler",
            "Viviendas y apartamentos",
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
          Si la puerta está dañada, el cierre no encaja o la manilla nueva no es
          compatible, puede hacer falta una pieza diferente o un ajuste adicional.
          Envíanos fotos para revisar el caso antes de confirmar la visita.
        </p>
      </section>

      <section className="bg-yellow-400 py-16 text-black">
        <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
          <p className="text-sm font-black uppercase tracking-widest">
            Desde 29€
          </p>
          <h2 className="mt-3 text-4xl font-black">
            Precio para cambiar manilla de puerta
          </h2>
          <p className="mt-6 text-lg font-medium leading-8 text-neutral-900">
            El precio depende del tipo de manilla, compatibilidad, estado de la
            puerta, tornillos, cierre, número de manillas y dificultad. Envíanos
            fotos para darte un presupuesto claro.
          </p>

          <div className="mt-8 rounded-3xl border border-yellow-600/30 bg-white p-6 text-left shadow-xl">
            <h3 className="text-xl font-black">El precio depende de:</h3>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Tipo de manilla",
                "Pomo o palanca",
                "Puerta interior",
                "Compatibilidad",
                "Estado del cierre",
                "Número de manillas",
                "Piezas necesarias",
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
          Realizamos cambio de manillas de puerta en Valencia ciudad y
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
              title: "Servicios de puertas",
              href: `/${locale}/services/doors`,
            },
            {
              title: "Ajuste de puerta desalineada",
              href: `/${locale}/services/doors/door-alignment-adjustment`,
            },
            {
              title: "Reparar manilla suelta",
              href: `/${locale}/services/doors/loose-handle-fixing`,
            },
            {
              title: "Ajuste de pestillo",
              href: `/${locale}/services/doors/latch-adjustment`,
            },
            {
              title: "Cambio de cilindro",
              href: `/${locale}/services/doors/lock-cylinder-replacement`,
            },
            {
              title: "Servicios handyman",
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
            ¿Quieres cambiar una manilla de puerta?
          </h2>
          <p className="mt-5 text-lg font-medium text-neutral-900">
            Envíanos fotos de la manilla actual, ambos lados de la puerta, canto,
            cierre y la manilla nueva si ya la tienes. Te damos un presupuesto
            claro antes de empezar.
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