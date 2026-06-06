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
const pagePath = "/services/doors/reparacion-puertas-varios";

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";

  return {
    title: isEs
      ? "Reparación de Puertas y Herrajes | Presupuesto | THEVULGO"
      : "Multiple Door & Hardware Tasks | Custom Quote | THEVULGO",
    description: isEs
      ? "Varios trabajos de puertas y herrajes en una visita. Manillas, bisagras, pestillos, cerraderos, alineación y pequeños ajustes."
      : "Multiple door and hardware tasks in one visit. Handles, hinges, latches, alignment and minor adjustments completed efficiently.",
    alternates: {
      canonical: `${siteUrl}/${locale}${pagePath}`,
      languages: {
        es: `${siteUrl}/es${pagePath}`,
        en: `${siteUrl}/en${pagePath}`,
      },
    },
    openGraph: {
      title: isEs
        ? "Reparación de Puertas y Herrajes | THEVULGO"
        : "Multiple Door & Hardware Tasks | THEVULGO",
      description: isEs
        ? "Varias reparaciones pequeñas de puertas en una sola visita organizada."
        : "Several small door and hardware problems fixed in one efficient session.",
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
    q: "¿Cuánto cuesta reparar varias puertas o herrajes?",
    a: "El precio se calcula con presupuesto personalizado. Depende del número de puertas, tipo de problema, piezas necesarias, tiempo estimado y dificultad de los ajustes.",
  },
  {
    q: "¿Qué trabajos se pueden agrupar?",
    a: "Podemos agrupar ajustes de puertas, manillas, bisagras, pestillos, cerraderos, topes, bombines, burletes y pequeños herrajes visibles.",
  },
  {
    q: "¿Es mejor hacer varias reparaciones en una visita?",
    a: "Sí. Normalmente es más rápido, cómodo y rentable agrupar varios problemas pequeños en una sola visita en lugar de hacer reservas separadas.",
  },
  {
    q: "¿Pueden revisar varias puertas interiores?",
    a: "Sí. Podemos revisar varias puertas interiores, puertas de habitación, baño, cocina, armarios y puertas auxiliares.",
  },
  {
    q: "¿Necesito comprar piezas antes?",
    a: "Depende del trabajo. Para cambios de manillas, bisagras, bombines o topes, lo ideal es tener piezas compatibles compradas antes de la visita.",
  },
  {
    q: "¿Pueden arreglar puertas que rozan y manillas sueltas en la misma visita?",
    a: "Sí. Podemos combinar ajuste de puerta, apriete de bisagras, reparación de manilla suelta, ajuste de pestillo y otros pequeños trabajos.",
  },
  {
    q: "¿Qué necesito enviar para pedir presupuesto?",
    a: "Envíanos una lista de problemas, fotos de cada puerta o herraje y vídeos cortos mostrando cómo abre, cierra o falla cada elemento.",
  },
  {
    q: "¿Trabajan fuera de Valencia ciudad?",
    a: "Sí. Trabajamos en Valencia y alrededores como Mislata, Burjassot, Paterna, Torrent, Sagunto, Cullera, Gandía y otras zonas cercanas.",
  },
];

export default async function ReparacionPuertasVariosPage({
  params,
}: PageProps) {
  const { locale } = await params;
  const isEs = locale === "es";

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, quiero un presupuesto para varios trabajos de puertas y herrajes."
      : "Hi, I would like a quote for multiple door and hardware tasks."
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappText}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: isEs
      ? "Reparación de Puertas y Herrajes"
      : "Multiple Door & Hardware Tasks",
    serviceType: "Multiple door and hardware tasks",
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
      "Reparación de puertas y herrajes, manillas, bisagras, pestillos, cerraderos, bombines, burletes, topes y servicios handyman en Valencia.",
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
        name: isEs
          ? "Reparación de Puertas y Herrajes"
          : "Multiple Door & Hardware Tasks",
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
              Varias reparaciones de puertas en una sola visita
            </div>

            <h1 className="text-4xl font-black tracking-tight md:text-6xl">
              Reparación de puertas y herrajes
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-700">
              Ideal si tienes varios problemas pequeños de puertas o herrajes.
              En una sola visita podemos revisar manillas, bisagras, pestillos,
              cerraderos, alineación, topes, bombines y pequeños ajustes.
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
                "Presupuesto personalizado",
                "Manillas y bisagras",
                "Pestillos y cerraderos",
                "Alineación de puertas",
                "Varios trabajos juntos",
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
                Multiple door tasks. One visit. Faster and cleaner.
              </h2>
              <p className="mt-4 font-medium leading-7 text-neutral-900">
                Organizamos la lista de problemas y hacemos varios ajustes
                pequeños de puertas y herrajes de forma más eficiente.
              </p>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                ["One efficient session", "Varios trabajos en una visita"],
                ["Hardware fixes", "Manillas, bisagras y pestillos"],
                ["Better daily use", "Puertas más cómodas de usar"],
                ["Custom quote", "Presupuesto según lista y fotos"],
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
              title: "Trabajo organizado",
              text: "Agrupamos varios problemas pequeños para resolverlos en una visita.",
            },
            {
              icon: Wrench,
              title: "Herrajes y ajustes",
              text: "Revisamos manillas, bisagras, pestillos, cerraderos y piezas visibles.",
            },
            {
              icon: Ruler,
              title: "Mejor funcionamiento",
              text: "Buscamos que las puertas cierren, abran y se alineen mejor.",
            },
            {
              icon: Star,
              title: "Presupuesto claro",
              text: "Precio personalizado según fotos, lista de tareas y dificultad.",
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
          Varios trabajos de puertas y herrajes en una visita
        </h2>

        <div className="mt-6 space-y-5 text-lg leading-8 text-neutral-700">
          <p>
            En THEVULGO realizamos varios trabajos pequeños de puertas y herrajes
            en una sola visita para viviendas, apartamentos, pisos de alquiler,
            locales, oficinas y puertas interiores de uso diario.
          </p>

          <p>
            En lugar de reservar visitas separadas, podemos revisar y corregir
            manillas sueltas, bisagras flojas, pestillos que no enganchan,
            cerraderos desalineados, puertas que rozan, topes, bombines,
            burletes y pequeños mecanismos visibles.
          </p>

          <p>
            Antes de confirmar el presupuesto revisamos fotos, vídeos, lista de
            problemas, número de puertas, piezas disponibles y dificultad. Así
            podemos organizar una visita más rápida, práctica y normalmente más
            rentable.
          </p>
        </div>
      </section>

      <section className="bg-yellow-50 py-16">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <h2 className="text-3xl font-black md:text-4xl">
            ¿Qué puede incluir el servicio?
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              "Ajuste de puertas desalineadas",
              "Cambio o ajuste de manillas",
              "Reparación de manillas sueltas",
              "Apriete o cambio de bisagras",
              "Ajuste de pestillos",
              "Ajuste de cerraderos",
              "Instalación de topes",
              "Cambio de bombines compatibles",
              "Presupuesto según lista completa",
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
          Ejemplos de problemas que podemos agrupar
        </h2>

        <div className="grid gap-8 md:grid-cols-4">
          {[
            {
              title: "Manilla + pestillo",
              text: "Reparación de manilla suelta y ajuste de cierre en la misma puerta.",
            },
            {
              title: "Bisagras + alineación",
              text: "Apriete de bisagras y corrección de puertas que rozan o bajan.",
            },
            {
              title: "Cerradero + cierre",
              text: "Ajuste de placa, pestillo y punto de cierre para mejor funcionamiento.",
            },
            {
              title: "Varias puertas",
              text: "Revisión de varias puertas interiores con pequeños fallos acumulados.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-yellow-300 bg-white p-7 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400">
                <Wrench className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-2xl font-black">{item.title}</h3>
              <p className="mt-4 leading-7 text-neutral-700">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-16 md:px-8">
        <h2 className="text-3xl font-black">
          ¿Cuándo conviene elegir este servicio?
        </h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {[
            "Varias puertas con fallos",
            "Piso de alquiler",
            "Apartamento recién ocupado",
            "Airbnb o vivienda rental-ready",
            "Herrajes sueltos",
            "Una visita organizada",
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
          Si tienes varios pequeños problemas acumulados, envíanos una lista con
          fotos y vídeos. Te ayudamos a organizar qué se puede hacer en una sola
          visita y qué piezas conviene preparar antes.
        </p>
      </section>

      <section className="bg-yellow-400 py-16 text-black">
        <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
          <p className="text-sm font-black uppercase tracking-widest">
            Presupuesto personalizado
          </p>
          <h2 className="mt-3 text-4xl font-black">
            Precio para varios trabajos de puertas
          </h2>
          <p className="mt-6 text-lg font-medium leading-8 text-neutral-900">
            El precio depende del número de puertas, tipo de problemas, piezas
            necesarias, tiempo estimado, dificultad y distancia. Envíanos fotos,
            vídeos y lista completa para recibir un presupuesto claro.
          </p>

          <div className="mt-8 rounded-3xl border border-yellow-600/30 bg-white p-6 text-left shadow-xl">
            <h3 className="text-xl font-black">El presupuesto depende de:</h3>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Número de puertas",
                "Manillas o bisagras",
                "Pestillos y cerraderos",
                "Alineación de puertas",
                "Piezas disponibles",
                "Tiempo estimado",
                "Dificultad de ajustes",
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
            Enviar lista y pedir presupuesto
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <h2 className="text-3xl font-black md:text-4xl">
          Zonas donde trabajamos
        </h2>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-neutral-700">
          Realizamos reparación de puertas y herrajes en Valencia ciudad y
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
              title: "Cambio de manilla",
              href: `/${locale}/services/doors/handle-replacement`,
            },
            {
              title: "Apriete de bisagras",
              href: `/${locale}/services/doors/hinge-tightening`,
            },
            {
              title: "Ajuste de pestillo",
              href: `/${locale}/services/doors/latch-adjustment`,
            },
            {
              title: "Herrajes interiores",
              href: `/${locale}/services/doors/herrajes-puertas-interiores`,
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
            ¿Quieres reparar varias puertas o herrajes?
          </h2>
          <p className="mt-5 text-lg font-medium text-neutral-900">
            Envíanos una lista de problemas, fotos de cada puerta y vídeos
            cortos mostrando qué falla. Te damos un presupuesto claro antes de
            empezar.
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