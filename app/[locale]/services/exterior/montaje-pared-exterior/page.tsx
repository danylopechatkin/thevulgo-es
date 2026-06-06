import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  Drill,
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
const pagePath = "/services/exterior/montaje-pared-exterior";

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";

  return {
    title: isEs
      ? "Montaje en Pared Exterior | Desde 39€ | THEVULGO"
      : "Outdoor Wall Mounting | From €39 | THEVULGO",
    description: isEs
      ? "Montaje en pared exterior desde 39€. Instalación de accesorios exteriores, carteles, soportes, pequeños dispositivos y elementos prácticos en superficies adecuadas."
      : "Outdoor wall mounting from €39. Mounting of exterior accessories, signs, holders, small fixtures and practical outdoor items on suitable surfaces.",
    alternates: {
      canonical: `${siteUrl}/${locale}${pagePath}`,
      languages: {
        es: `${siteUrl}/es${pagePath}`,
        en: `${siteUrl}/en${pagePath}`,
      },
    },
    openGraph: {
      title: isEs
        ? "Montaje en Pared Exterior | THEVULGO"
        : "Outdoor Wall Mounting | THEVULGO",
      description: isEs
        ? "Instalación de accesorios, carteles, soportes y elementos exteriores en pared."
        : "Mounting exterior accessories, signs, holders and practical outdoor items.",
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
    q: "¿Cuánto cuesta el montaje en pared exterior?",
    a: "El montaje en pared exterior empieza desde 39€. El precio depende del tipo de accesorio, superficie, altura, fijaciones, acceso, peso del elemento y dificultad del montaje.",
  },
  {
    q: "¿Qué elementos exteriores pueden instalarse?",
    a: "Podemos montar accesorios exteriores, carteles, soportes, pequeños dispositivos, números de casa, elementos decorativos, holders y accesorios prácticos en superficies adecuadas.",
  },
  {
    q: "¿Instalan carteles o señales exteriores?",
    a: "Sí. Podemos instalar carteles, señales pequeñas y elementos visibles en pared exterior cuando la superficie y las fijaciones son adecuadas.",
  },
  {
    q: "¿Pueden instalar números de casa?",
    a: "Sí. Podemos montar números de casa, placas, señales de entrada y pequeños detalles exteriores con alineación limpia y posición práctica.",
  },
  {
    q: "¿Qué superficies son adecuadas?",
    a: "Depende del elemento. Podemos revisar pared exterior, ladrillo, hormigón, fachada accesible, muro o superficie similar para valorar si permite una fijación segura.",
  },
  {
    q: "¿Necesito comprar el accesorio antes?",
    a: "Sí, lo ideal es tener el accesorio comprado antes de la visita. Puedes enviarnos fotos o enlace para revisar medidas, peso y tipo de fijación.",
  },
  {
    q: "¿Pueden instalar varios elementos exteriores en una visita?",
    a: "Sí. Podemos agrupar varios montajes exteriores, soportes, números, accesorios, carteles, buzones o pequeños elementos en una sola visita.",
  },
  {
    q: "¿Qué necesito enviar para pedir presupuesto?",
    a: "Envíanos fotos de la pared o superficie, foto del accesorio, medidas aproximadas, altura de instalación y explicación de dónde quieres colocarlo.",
  },
];

export default async function MontajeParedExteriorPage({
  params,
}: PageProps) {
  const { locale } = await params;
  const isEs = locale === "es";

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, quiero un presupuesto para montaje en pared exterior."
      : "Hi, I would like a quote for outdoor wall mounting."
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappText}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: isEs ? "Montaje en Pared Exterior" : "Outdoor Wall Mounting",
    serviceType: "Outdoor wall mounting",
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
      "Montaje en pared exterior, instalación de carteles, soportes, números de casa, accesorios exteriores, buzones, herrajes y servicios handyman en Valencia.",
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
        name: "Exterior",
        item: `${siteUrl}/${locale}/services/exterior`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: isEs ? "Montaje en Pared Exterior" : "Outdoor Wall Mounting",
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
              Accesorios, carteles, soportes y elementos exteriores
            </div>

            <h1 className="text-4xl font-black tracking-tight md:text-6xl">
              Montaje en pared exterior
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-700">
              Montaje de accesorios exteriores, carteles, soportes, pequeños
              dispositivos, holders y elementos prácticos de exterior en
              superficies adecuadas y accesibles.
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
                "Desde 39€",
                "Carteles y señales",
                "Soportes exteriores",
                "Números de casa",
                "Montaje limpio",
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
              <Drill className="mb-6 h-12 w-12 text-black" />
              <p className="text-sm font-black uppercase tracking-widest">
                THEVULGO Valencia
              </p>
              <h2 className="mt-3 text-3xl font-black">
                Outdoor wall mounting. Secure. Straight. Practical.
              </h2>
              <p className="mt-4 font-medium leading-7 text-neutral-900">
                Revisamos superficie, peso, fijaciones y posición para montar el
                elemento exterior de forma limpia y práctica.
              </p>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                ["Exterior accessories", "Accesorios exteriores"],
                ["Suitable surfaces", "Revisión de pared o muro"],
                ["Clean alignment", "Alineación limpia"],
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
              text: "Revisamos superficie, peso y tipo de fijación antes de montar.",
            },
            {
              icon: Drill,
              title: "Montaje limpio",
              text: "Instalación ordenada de accesorios, carteles y elementos exteriores.",
            },
            {
              icon: Ruler,
              title: "Alineación correcta",
              text: "Buscamos una posición recta, práctica y visualmente limpia.",
            },
            {
              icon: Star,
              title: "Precio claro",
              text: "Desde 39€. Presupuesto según fotos, accesorio y dificultad.",
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
          Montaje exterior en pared, muro o superficie adecuada
        </h2>

        <div className="mt-6 space-y-5 text-lg leading-8 text-neutral-700">
          <p>
            En THEVULGO realizamos montaje en pared exterior en Valencia para
            accesorios, carteles, soportes, números de casa, pequeños
            dispositivos, holders y elementos prácticos que necesitan una
            fijación limpia en zonas exteriores.
          </p>

          <p>
            Antes de perforar o fijar revisamos el tipo de superficie, peso del
            elemento, posición, altura, exposición exterior, tornillos, tacos y
            sistema de montaje. Esto ayuda a evitar una instalación torcida,
            débil o poco práctica.
          </p>

          <p>
            También podemos combinar este servicio con instalación de buzón,
            montaje de número de casa, reparación de herrajes exteriores,
            sellado exterior, pequeños soportes, accesorios de jardín o detalles
            de entrada.
          </p>
        </div>
      </section>

      <section className="bg-yellow-50 py-16">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <h2 className="text-3xl font-black md:text-4xl">
            ¿Qué incluye el montaje en pared exterior?
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              "Revisión del accesorio",
              "Comprobación de superficie",
              "Medición de posición",
              "Marcado de puntos",
              "Perforación si procede",
              "Montaje del elemento exterior",
              "Alineación visual",
              "Comprobación de estabilidad",
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
          Elementos exteriores que podemos montar
        </h2>

        <div className="grid gap-8 md:grid-cols-4">
          {[
            {
              title: "Carteles y señales",
              text: "Montaje de señales pequeñas, placas o carteles exteriores en zonas visibles.",
            },
            {
              title: "Números de casa",
              text: "Instalación de números, placas de entrada y detalles visibles de fachada.",
            },
            {
              title: "Soportes exteriores",
              text: "Montaje de soportes, holders, escuadras o elementos prácticos.",
            },
            {
              title: "Accesorios decorativos",
              text: "Instalación de pequeños elementos exteriores para mejorar presentación.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-yellow-300 bg-white p-7 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400">
                <Drill className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-2xl font-black">{item.title}</h3>
              <p className="mt-4 leading-7 text-neutral-700">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-16 md:px-8">
        <h2 className="text-3xl font-black">
          ¿Dónde hacemos montaje exterior?
        </h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {[
            "Entradas de vivienda",
            "Paredes exteriores",
            "Muros accesibles",
            "Patios y terrazas",
            "Fachadas accesibles",
            "Propiedades de alquiler",
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
          Si no sabes si la superficie es adecuada, envíanos fotos de la pared,
          muro o fachada, junto con una foto del elemento que quieres montar. Te
          ayudamos a revisar si el trabajo es viable y qué fijaciones pueden
          hacer falta.
        </p>
      </section>

      <section className="bg-yellow-400 py-16 text-black">
        <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
          <p className="text-sm font-black uppercase tracking-widest">
            Desde 39€
          </p>
          <h2 className="mt-3 text-4xl font-black">
            Precio para montaje en pared exterior
          </h2>
          <p className="mt-6 text-lg font-medium leading-8 text-neutral-900">
            El precio depende del tipo de elemento, peso, superficie, altura,
            fijaciones, acceso y dificultad. Envíanos fotos y te damos un
            presupuesto claro antes de empezar.
          </p>

          <div className="mt-8 rounded-3xl border border-yellow-600/30 bg-white p-6 text-left shadow-xl">
            <h3 className="text-xl font-black">El precio depende de:</h3>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Tipo de accesorio",
                "Peso del elemento",
                "Tipo de superficie",
                "Altura de montaje",
                "Fijaciones necesarias",
                "Número de elementos",
                "Acceso exterior",
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
          Realizamos montaje en pared exterior en Valencia ciudad y alrededores.
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
              title: "Servicios exteriores",
              href: `/${locale}/services/exterior`,
            },
            {
              title: "Instalación de buzón",
              href: `/${locale}/services/exterior/instalacion-buzon`,
            },
            {
              title: "Números de casa y señales",
              href: `/${locale}/services/exterior/instalacion-numero-casa`,
            },
            {
              title: "Reparación de herrajes exteriores",
              href: `/${locale}/services/exterior/reparacion-herrajes-exterior`,
            },
            {
              title: "Sellado exterior",
              href: `/${locale}/services/exterior/sellado-exterior`,
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
            ¿Quieres montar algo en pared exterior?
          </h2>
          <p className="mt-5 text-lg font-medium text-neutral-900">
            Envíanos fotos de la pared, superficie o fachada, foto del accesorio,
            medidas aproximadas y altura deseada. Te damos un presupuesto claro
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