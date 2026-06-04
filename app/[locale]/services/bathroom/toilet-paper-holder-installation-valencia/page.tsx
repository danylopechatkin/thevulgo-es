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
const pagePath = "/services/bathroom/toilet-paper-holder-installation-valencia";

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";

  return {
    title: isEs
      ? "Instalación de Portarrollos en Valencia | Desde 25€ | THEVULGO"
      : "Toilet Paper Holder Installation in Valencia | From €25 | THEVULGO",
    description: isEs
      ? "Instalación de portarrollos en Valencia desde 25€. Montaje de soportes para papel higiénico y pequeños accesorios de baño en posiciones cómodas."
      : "Toilet paper holder installation in Valencia from €25. Wall-mounted bathroom accessories fitted in convenient everyday positions.",
    alternates: {
      canonical: `${siteUrl}/${locale}${pagePath}`,
      languages: {
        es: `${siteUrl}/es${pagePath}`,
        en: `${siteUrl}/en${pagePath}`,
      },
    },
    openGraph: {
      title: isEs
        ? "Instalación de Portarrollos en Valencia | THEVULGO"
        : "Toilet Paper Holder Installation in Valencia | THEVULGO",
      description: isEs
        ? "Montaje limpio de portarrollos y pequeños accesorios de baño en Valencia."
        : "Clean mounting of toilet paper holders and small bathroom accessories in Valencia.",
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
    q: "¿Cuánto cuesta instalar un portarrollos en Valencia?",
    a: "La instalación de portarrollos empieza desde 25€. El precio depende del tipo de soporte, pared, azulejo, fijaciones y si hay más accesorios para instalar en la misma visita.",
  },
  {
    q: "¿Instalan portarrollos en azulejo?",
    a: "Sí. Podemos instalar portarrollos en azulejo si la superficie es adecuada. Revisamos la zona antes de perforar para evitar problemas innecesarios.",
  },
  {
    q: "¿Pueden instalar portarrollos adhesivo?",
    a: "Sí. Podemos colocar portarrollos adhesivos o atornillados según el producto, la superficie y el uso esperado.",
  },
  {
    q: "¿Pueden instalar otros accesorios pequeños de baño?",
    a: "Sí. Podemos instalar ganchos, toalleros, estantes, soportes, espejos, accesorios de pared y pequeños elementos de baño en una sola visita.",
  },
  {
    q: "¿Dónde conviene colocar el portarrollos?",
    a: "Depende del inodoro, pared lateral, mueble, espacio libre y comodidad de uso. Podemos ayudarte a elegir una posición práctica y visualmente limpia.",
  },
  {
    q: "¿Necesito tener tornillos y tacos?",
    a: "Si el producto incluye fijaciones, las revisamos. Si no son adecuadas para la pared, podemos recomendar o usar fijaciones más apropiadas según el caso.",
  },
  {
    q: "¿Qué necesito enviar para pedir presupuesto?",
    a: "Lo ideal es enviar fotos del baño, foto del portarrollos, tipo de pared o azulejo y decir si quieres instalar uno o varios accesorios.",
  },
  {
    q: "¿Trabajan fuera de Valencia ciudad?",
    a: "Sí. Trabajamos en Valencia y alrededores como Mislata, Burjassot, Paterna, Torrent, Sagunto, Cullera, Gandía y otras zonas cercanas.",
  },
];

export default async function ToiletPaperHolderInstallationValenciaPage({
  params,
}: PageProps) {
  const { locale } = await params;
  const isEs = locale === "es";

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, quiero un presupuesto para instalación de portarrollos en Valencia."
      : "Hi, I would like a quote for toilet paper holder installation in Valencia."
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappText}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: isEs
      ? "Instalación de Portarrollos en Valencia"
      : "Toilet Paper Holder Installation in Valencia",
    serviceType: "Toilet paper holder installation",
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
      price: "25",
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
      "Instalación de portarrollos, toalleros, ganchos, estantes, espejos, muebles de baño, accesorios y servicios handyman en Valencia.",
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
          ? "Instalación de Portarrollos en Valencia"
          : "Toilet Paper Holder Installation in Valencia",
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
              Portarrollos y accesorios pequeños de baño en Valencia
            </div>

            <h1 className="text-4xl font-black tracking-tight md:text-6xl">
              Instalación de portarrollos{" "}
              <span className="text-yellow-500">en Valencia</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-700">
              Instalación de portarrollos y pequeños accesorios de baño en pared
              con posición cómoda, separación limpia y fijación adecuada para el
              uso diario.
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
                "Desde 25€",
                "Portarrollos de baño",
                "Accesorios pequeños",
                "Posición cómoda",
                "Fijación segura",
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
                Toilet paper holder installation. Simple. Clean. Practical.
              </h2>
              <p className="mt-4 font-medium leading-7 text-neutral-900">
                Revisamos la pared, marcamos la posición, instalamos el soporte
                y dejamos el baño más cómodo y ordenado.
              </p>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                ["Convenient position", "Colocación cómoda para uso diario"],
                ["Clean spacing", "Separación visual más ordenada"],
                ["Secure fixing", "Fijación adecuada según superficie"],
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
              text: "Revisamos pared, azulejo, soporte y fijaciones antes de instalar.",
            },
            {
              icon: Ruler,
              title: "Posición práctica",
              text: "Buscamos una ubicación cómoda junto al inodoro y sin molestias.",
            },
            {
              icon: Drill,
              title: "Montaje limpio",
              text: "Marcado, perforación o colocación adhesiva según el producto.",
            },
            {
              icon: Star,
              title: "Precio claro",
              text: "Desde 25€. Presupuesto según fotos, pieza y dificultad.",
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
          Instalación de portarrollos y accesorios de baño en Valencia
        </h2>

        <div className="mt-6 space-y-5 text-lg leading-8 text-neutral-700">
          <p>
            En THEVULGO realizamos instalación de portarrollos en Valencia para
            baños principales, aseos, apartamentos, viviendas de alquiler y
            espacios donde se necesita una colocación cómoda, limpia y práctica.
          </p>

          <p>
            Antes de instalar revisamos el tipo de pared, azulejo, sistema de
            fijación, altura, distancia con el inodoro, muebles cercanos y
            comodidad de uso. Esto ayuda a evitar posiciones incómodas o
            accesorios mal alineados.
          </p>

          <p>
            También podemos instalar otros pequeños accesorios de baño en la
            misma visita: toalleros, ganchos, estantes, espejos, armarios con
            espejo, muebles de baño y soportes de pared.
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
              "Revisión del portarrollos y piezas",
              "Comprobación de pared o azulejo",
              "Medición de altura y distancia",
              "Marcado de posición cómoda",
              "Perforación si hace falta",
              "Montaje atornillado o adhesivo",
              "Alineación visual",
              "Revisión de estabilidad",
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
          Tipos de portarrollos que podemos instalar
        </h2>

        <div className="grid gap-8 md:grid-cols-4">
          {[
            {
              title: "Portarrollos de pared",
              text: "Montaje clásico en pared o azulejo con posición cómoda.",
            },
            {
              title: "Portarrollos adhesivo",
              text: "Colocación sin perforar cuando el producto y la superficie son adecuados.",
            },
            {
              title: "Soporte con tapa",
              text: "Instalación de modelos con tapa o diseño decorativo para baño.",
            },
            {
              title: "Accesorios pequeños",
              text: "Instalación de varios accesorios de baño en una visita organizada.",
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

      <section className="bg-yellow-400 py-16 text-black">
        <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
          <p className="text-sm font-black uppercase tracking-widest">
            Desde 25€
          </p>
          <h2 className="mt-3 text-4xl font-black">
            Precio para instalar portarrollos en Valencia
          </h2>
          <p className="mt-6 text-lg font-medium leading-8 text-neutral-900">
            El precio depende del tipo de portarrollos, superficie, fijaciones,
            si requiere perforación y si quieres instalar más accesorios en la
            misma visita. Envíanos fotos y te damos un presupuesto claro.
          </p>

          <div className="mt-8 rounded-3xl border border-yellow-600/30 bg-white p-6 text-left shadow-xl">
            <h3 className="text-xl font-black">El precio depende de:</h3>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Tipo de portarrollos",
                "Pared o azulejo",
                "Sistema adhesivo o atornillado",
                "Número de piezas",
                "Altura y posición",
                "Otros accesorios",
                "Tiempo de instalación",
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
          Realizamos instalación de portarrollos en Valencia ciudad y
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
              title: "Instalación de toallero",
              href: `/${locale}/services/bathroom/towel-holder-installation-valencia`,
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
              title: "Instalación de mueble de baño",
              href: `/${locale}/services/bathroom/cabinet-installation-valencia`,
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
            ¿Quieres instalar un portarrollos en Valencia?
          </h2>
          <p className="mt-5 text-lg font-medium text-neutral-900">
            Envíanos fotos del baño, del portarrollos, tipo de pared o azulejo y
            si quieres instalar más accesorios. Te damos un presupuesto claro
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