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
  Wrench,
} from "lucide-react";

type PageProps = {
  params: Promise<{ locale: string }>;
};

const siteUrl = "https://www.thevulgo.es";
const phoneNumber = "34610076942";
const pagePath = "/services/bathroom/multiple-installation-tasks";

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";

  return {
    title: isEs
      ? "Instalación de Varios Accesorios de Baño | Presupuesto | THEVULGO"
      : "Multiple Bathroom Installation Tasks | Custom Quote | THEVULGO",
    description: isEs
      ? "Instalación de varios accesorios de baño en una visita. Espejos, muebles, estantes, toalleros, portarrollos, luces y pequeños montajes organizados."
      : "Multiple bathroom installation tasks in one visit. Mirrors, cabinets, shelves, holders, lights and small bathroom fittings completed efficiently.",
    alternates: {
      canonical: `${siteUrl}/${locale}${pagePath}`,
      languages: {
        es: `${siteUrl}/es${pagePath}`,
        en: `${siteUrl}/en${pagePath}`,
      },
    },
    openGraph: {
      title: isEs
        ? "Instalación de Varios Accesorios de Baño | THEVULGO"
        : "Multiple Bathroom Installation Tasks | THEVULGO",
      description: isEs
        ? "Varios trabajos pequeños de baño en una sola visita organizada."
        : "Several small bathroom installation tasks completed in one organized visit.",
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
    q: "¿Cuánto cuesta hacer varios trabajos de baño en una visita?",
    a: "El precio se calcula con presupuesto personalizado. Depende del número de tareas, tipo de piezas, pared, fijaciones, tiempo necesario, dificultad y si hay que instalar muebles, espejos, estantes, luces o accesorios.",
  },
  {
    q: "¿Qué trabajos se pueden agrupar?",
    a: "Podemos agrupar instalación de espejo, mueble de baño, armario con espejo, estantes, toalleros, portarrollos, ganchos, luces, accesorios y pequeños ajustes.",
  },
  {
    q: "¿Es mejor hacer varias tareas juntas?",
    a: "Sí. Normalmente es más práctico y eficiente agrupar varios trabajos pequeños en una sola visita en lugar de reservar visitas separadas.",
  },
  {
    q: "¿Pueden instalar accesorios comprados en IKEA, Leroy Merlin o Amazon?",
    a: "Sí. Podemos instalar accesorios, muebles, espejos, estantes y pequeños elementos comprados en IKEA, Leroy Merlin, Amazon, Conforama y otras tiendas.",
  },
  {
    q: "¿Pueden trabajar sobre azulejo?",
    a: "Sí. Podemos montar accesorios en azulejo cuando la superficie es adecuada. Revisamos la zona antes de perforar para evitar problemas innecesarios.",
  },
  {
    q: "¿También pueden hacer ajustes y pequeños arreglos?",
    a: "Sí. Podemos incluir pequeños ajustes como puertas de mueble desalineadas, silicona, sellado de huecos, soportes sueltos o accesorios mal colocados.",
  },
  {
    q: "¿Qué necesito enviar para pedir presupuesto?",
    a: "Envíanos fotos del baño, fotos de cada accesorio o mueble, lista de tareas, medidas aproximadas y zona donde quieres instalar cada cosa.",
  },
  {
    q: "¿Trabajan fuera de Valencia ciudad?",
    a: "Sí. Trabajamos en Valencia y alrededores como Mislata, Burjassot, Paterna, Torrent, Sagunto, Cullera, Gandía y otras zonas cercanas.",
  },
];

export default async function MultipleBathroomInstallationTasksPage({
  params,
}: PageProps) {
  const { locale } = await params;
  const isEs = locale === "es";

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, quiero un presupuesto para varios trabajos de instalación en baño."
      : "Hi, I would like a quote for multiple bathroom installation tasks."
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappText}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: isEs
      ? "Instalación de Varios Accesorios de Baño"
      : "Multiple Bathroom Installation Tasks",
    serviceType: "Multiple bathroom installation tasks",
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
      "Instalación de varios accesorios de baño, espejos, muebles, estantes, toalleros, portarrollos, luces, sellado, ajustes y servicios handyman en Valencia.",
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
          ? "Instalación de Varios Accesorios de Baño"
          : "Multiple Bathroom Installation Tasks",
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
              Varios trabajos de baño en una sola visita
            </div>

            <h1 className="text-4xl font-black tracking-tight md:text-6xl">
              Instalación de varios accesorios de baño
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-700">
              La mejor opción si necesitas instalar varios elementos de baño en
              una sola visita: espejos, muebles, estantes, toalleros,
              portarrollos, luces, accesorios y pequeños ajustes.
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
                "Varios trabajos en una visita",
                "Espejos, muebles y estantes",
                "Toalleros y portarrollos",
                "Luces y accesorios",
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
                Multiple bathroom tasks. One visit. Cleaner result.
              </h2>
              <p className="mt-4 font-medium leading-7 text-neutral-900">
                Organizamos la lista de tareas, revisamos cada pieza y
                completamos varios montajes pequeños de forma más eficiente.
              </p>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                ["One organized visit", "Varias tareas juntas"],
                ["Better efficiency", "Menos visitas separadas"],
                ["Clean result", "Baño más completo y ordenado"],
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
              text: "Agrupamos varias tareas pequeñas para hacerlas en una visita eficiente.",
            },
            {
              icon: Wrench,
              title: "Montaje y ajustes",
              text: "Instalamos accesorios, muebles, espejos y hacemos pequeños ajustes.",
            },
            {
              icon: Ruler,
              title: "Alineación limpia",
              text: "Buscamos altura, separación y resultado visual equilibrado.",
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
          Varios trabajos de instalación de baño en una visita
        </h2>

        <div className="mt-6 space-y-5 text-lg leading-8 text-neutral-700">
          <p>
            En THEVULGO realizamos varios trabajos de instalación de baño en una
            sola visita para viviendas, apartamentos, pisos de alquiler, Airbnb,
            baños recién equipados y espacios que necesitan quedar listos sin
            organizar muchas citas diferentes.
          </p>

          <p>
            Podemos ayudarte con instalación de espejo, armario con espejo,
            mueble bajo lavabo, estantes, baldas de cristal, toalleros,
            portarrollos, ganchos, luces para espejo, accesorios de pared,
            sellado de huecos y pequeños ajustes de muebles.
          </p>

          <p>
            Antes de confirmar el presupuesto revisamos tu lista de tareas,
            fotos de cada pieza, tipo de pared o azulejo, dificultad, tiempo
            estimado y si conviene agrupar todo en una visita organizada.
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
              "Instalación de espejos",
              "Montaje de muebles de baño",
              "Armarios con espejo",
              "Estantes y baldas de cristal",
              "Toalleros y portarrollos",
              "Ganchos y soportes",
              "Luces para espejo",
              "Sellado y pequeños ajustes",
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
          Ejemplos de tareas que podemos agrupar
        </h2>

        <div className="grid gap-8 md:grid-cols-4">
          {[
            {
              title: "Espejo + luz",
              text: "Instalación de espejo de baño y luz compatible en la zona del lavabo.",
            },
            {
              title: "Mueble + accesorios",
              text: "Montaje de mueble, portarrollos, toallero y ganchos en una visita.",
            },
            {
              title: "Estantes + soportes",
              text: "Instalación de baldas, estantes de cristal y pequeños soportes.",
            },
            {
              title: "Acabado final",
              text: "Sellado, pequeños ajustes, alineación de puertas y detalles visibles.",
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

      <section className="mx-auto max-w-4xl px-5 py-16 md:px-8">
        <h2 className="text-3xl font-black">
          ¿Cuándo conviene elegir este servicio?
        </h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {[
            "Baño recién equipado",
            "Piso nuevo o alquiler",
            "Airbnb o rental-ready",
            "Varios accesorios pendientes",
            "Una sola visita organizada",
            "Acabado final del baño",
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
          Si tienes varias piezas compradas y no sabes por dónde empezar,
          envíanos una lista simple con fotos. Te ayudamos a organizar el orden
          de instalación y el presupuesto antes de la visita.
        </p>
      </section>

      <section className="bg-yellow-400 py-16 text-black">
        <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
          <p className="text-sm font-black uppercase tracking-widest">
            Presupuesto personalizado
          </p>
          <h2 className="mt-3 text-4xl font-black">
            Precio para varios trabajos de baño
          </h2>
          <p className="mt-6 text-lg font-medium leading-8 text-neutral-900">
            El precio depende del número de tareas, piezas, pared, azulejo,
            dificultad, tiempo estimado y distancia. Envíanos fotos y lista de
            trabajos para recibir un presupuesto claro.
          </p>

          <div className="mt-8 rounded-3xl border border-yellow-600/30 bg-white p-6 text-left shadow-xl">
            <h3 className="text-xl font-black">El presupuesto depende de:</h3>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Número de tareas",
                "Tipo de piezas",
                "Pared o azulejo",
                "Muebles o accesorios",
                "Fijaciones necesarias",
                "Tiempo estimado",
                "Dificultad de instalación",
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
          Realizamos varios trabajos de instalación de baño en Valencia ciudad y
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
              title: "Instalación de accesorios de baño",
              href: `/${locale}/services/bathroom/accessory-installation`,
            },
            {
              title: "Montaje en pared para baño",
              href: `/${locale}/services/bathroom/wall-mounting`,
            },
            {
              title: "Instalación de espejo de baño",
              href: `/${locale}/services/bathroom/mirror-installation`,
            },
            {
              title: "Instalación de mueble de baño",
              href: `/${locale}/services/bathroom/cabinet-installation`,
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
            ¿Quieres hacer varios trabajos de baño en una visita?
          </h2>
          <p className="mt-5 text-lg font-medium text-neutral-900">
            Envíanos fotos del baño, lista de tareas, fotos de cada pieza y zona
            donde quieres instalar todo. Te damos un presupuesto claro antes de
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