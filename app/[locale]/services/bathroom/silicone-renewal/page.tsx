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
const pagePath = "/services/bathroom/silicone-renewal";

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";

  return {
    title: isEs
      ? "Renovación de Silicona en Baño | Desde 39€ | THEVULGO"
      : "Bathroom Silicone Renewal | From €39 | THEVULGO",
    description: isEs
      ? "Renovación de silicona en baño desde 39€. Retirada y sustitución de silicona antigua alrededor de lavabos, muebles, bañeras y zonas de ducha."
      : "Bathroom silicone renewal from €39. Removal and replacement of old silicone around sinks, vanities, bathtubs and shower areas for a cleaner finish.",
    alternates: {
      canonical: `${siteUrl}/${locale}${pagePath}`,
      languages: {
        es: `${siteUrl}/es${pagePath}`,
        en: `${siteUrl}/en${pagePath}`,
      },
    },
    openGraph: {
      title: isEs
        ? "Renovación de Silicona en Baño | THEVULGO"
        : "Bathroom Silicone Renewal | THEVULGO",
      description: isEs
        ? "Sustitución limpia de silicona antigua en lavabos, bañeras, duchas y muebles de baño."
        : "Clean replacement of old silicone around sinks, bathtubs, showers and bathroom furniture.",
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
    q: "¿Cuánto cuesta renovar la silicona del baño?",
    a: "La renovación de silicona empieza desde 39€. El precio depende de la longitud de la junta, estado de la silicona antigua, zona de trabajo, limpieza necesaria y dificultad de acceso.",
  },
  {
    q: "¿Retiran la silicona antigua antes de aplicar la nueva?",
    a: "Sí. Retiramos la silicona antigua cuando es necesario, limpiamos la zona y aplicamos nueva silicona para un acabado más limpio.",
  },
  {
    q: "¿Pueden renovar silicona alrededor de la ducha?",
    a: "Sí. Podemos renovar silicona en zonas de ducha, bañera, lavabo, mueble bajo lavabo, encimeras y juntas visibles del baño.",
  },
  {
    q: "¿Sirve para mejorar el aspecto del baño?",
    a: "Sí. Cambiar silicona vieja, oscura o deteriorada ayuda a que el baño se vea más limpio, cuidado y acabado.",
  },
  {
    q: "¿Pueden sellar pequeños huecos visibles?",
    a: "Sí. Podemos sellar pequeños huecos visibles alrededor de elementos de baño cuando el trabajo es sencillo y adecuado para silicona.",
  },
  {
    q: "¿Cuánto tarda renovar silicona?",
    a: "Una renovación sencilla puede tardar entre 30 y 90 minutos. Depende de la cantidad de silicona antigua, limpieza necesaria y longitud de las juntas.",
  },
  {
    q: "¿Qué necesito enviar para pedir presupuesto?",
    a: "Envíanos fotos de las juntas, lavabo, ducha, bañera o zona donde quieres renovar la silicona. Si puedes, envía también un vídeo corto del área completa.",
  },
  {
    q: "¿Trabajan fuera de Valencia ciudad?",
    a: "Sí. Trabajamos en Valencia y alrededores como Mislata, Burjassot, Paterna, Torrent, Sagunto, Cullera, Gandía y otras zonas cercanas.",
  },
];

export default async function SiliconeRenewalPage({ params }: PageProps) {
  const { locale } = await params;
  const isEs = locale === "es";

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, quiero un presupuesto para renovación de silicona en baño."
      : "Hi, I would like a quote for bathroom silicone renewal."
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappText}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: isEs ? "Renovación de Silicona en Baño" : "Bathroom Silicone Renewal",
    serviceType: "Bathroom silicone renewal",
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
      "Renovación de silicona en baño, sellado de juntas, lavabos, duchas, bañeras, muebles de baño, accesorios y servicios handyman en Valencia.",
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
        name: isEs ? "Renovación de Silicona en Baño" : "Bathroom Silicone Renewal",
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
              Silicona para lavabos, duchas, bañeras y muebles de baño
            </div>

            <h1 className="text-4xl font-black tracking-tight md:text-6xl">
              Renovación de silicona en baño
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-700">
              Retirada y sustitución de silicona antigua alrededor de lavabos,
              muebles bajo lavabo, bañeras y zonas de ducha para conseguir un
              acabado más limpio, ordenado y cuidado.
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
                "Retirada de silicona vieja",
                "Nueva silicona limpia",
                "Lavabo, ducha y bañera",
                "Acabado más cuidado",
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
                Silicone renewal. Cleaner joints. Better bathroom finish.
              </h2>
              <p className="mt-4 font-medium leading-7 text-neutral-900">
                Retiramos silicona deteriorada, preparamos la zona y aplicamos
                nueva silicona para mejorar el acabado visible del baño.
              </p>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                ["Cleaner finish", "Juntas con aspecto más limpio"],
                ["Old silicone removal", "Retirada de silicona deteriorada"],
                ["Visible sealing", "Sellado de zonas visibles"],
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
              title: "Acabado protegido",
              text: "Sellamos juntas visibles alrededor de zonas habituales del baño.",
            },
            {
              icon: Wrench,
              title: "Retirada previa",
              text: "Quitamos silicona vieja cuando es necesario para mejorar el resultado.",
            },
            {
              icon: Ruler,
              title: "Línea más limpia",
              text: "Buscamos un acabado recto, ordenado y visualmente más cuidado.",
            },
            {
              icon: Star,
              title: "Precio claro",
              text: "Desde 39€. Presupuesto según fotos, longitud y dificultad.",
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
          Sustitución de silicona vieja en baños
        </h2>

        <div className="mt-6 space-y-5 text-lg leading-8 text-neutral-700">
          <p>
            En THEVULGO realizamos renovación de silicona en baños para lavabos,
            muebles bajo lavabo, bañeras, platos de ducha, mamparas, encimeras y
            juntas visibles que han perdido su aspecto limpio con el tiempo.
          </p>

          <p>
            Antes de aplicar nueva silicona revisamos el estado de la junta, la
            longitud, el acceso, la humedad visible, el material alrededor y el
            nivel de limpieza necesario. Esto ayuda a conseguir un acabado más
            uniforme y duradero.
          </p>

          <p>
            También podemos combinar este trabajo con otros pequeños servicios
            de baño: cambio de alcachofa, manguera de ducha, instalación de
            accesorios, estantes, espejo, luz vanity o mueble bajo lavabo.
          </p>
        </div>
      </section>

      <section className="bg-yellow-50 py-16">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <h2 className="text-3xl font-black md:text-4xl">
            ¿Qué incluye la renovación?
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              "Revisión de la junta existente",
              "Retirada de silicona antigua",
              "Limpieza básica de la zona",
              "Preparación de la superficie",
              "Aplicación de nueva silicona",
              "Acabado visual más limpio",
              "Sellado de pequeños huecos",
              "Revisión final del resultado",
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
          Zonas donde podemos renovar silicona
        </h2>

        <div className="grid gap-8 md:grid-cols-4">
          {[
            {
              title: "Lavabos",
              text: "Sustitución de silicona alrededor del lavabo y zonas visibles cercanas.",
            },
            {
              title: "Duchas",
              text: "Renovación de silicona en platos de ducha, juntas y zonas húmedas visibles.",
            },
            {
              title: "Bañeras",
              text: "Retirada y aplicación de silicona nueva alrededor de bañeras.",
            },
            {
              title: "Muebles de baño",
              text: "Sellado y acabado alrededor de muebles, vanities y encimeras de baño.",
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
          ¿Cuándo conviene cambiar la silicona?
        </h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {[
            "Silicona oscura o deteriorada",
            "Juntas con mal acabado",
            "Baño recién mejorado",
            "Zona de ducha o bañera",
            "Lavabo con junta visible",
            "Piso de alquiler o Airbnb",
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
          Si no sabes si conviene renovar la silicona o solo limpiar la zona,
          envíanos fotos claras de las juntas. Te ayudamos a revisar el caso
          antes de confirmar el trabajo.
        </p>
      </section>

      <section className="bg-yellow-400 py-16 text-black">
        <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
          <p className="text-sm font-black uppercase tracking-widest">
            Desde 39€
          </p>
          <h2 className="mt-3 text-4xl font-black">
            Precio para renovar silicona de baño
          </h2>
          <p className="mt-6 text-lg font-medium leading-8 text-neutral-900">
            El precio depende de la longitud de las juntas, estado de la silicona
            antigua, limpieza necesaria, acceso y cantidad de zonas. Envíanos
            fotos y te damos un presupuesto claro antes de empezar.
          </p>

          <div className="mt-8 rounded-3xl border border-yellow-600/30 bg-white p-6 text-left shadow-xl">
            <h3 className="text-xl font-black">El precio depende de:</h3>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Longitud de la junta",
                "Estado de la silicona vieja",
                "Lavabo, ducha o bañera",
                "Limpieza necesaria",
                "Acceso a la zona",
                "Número de zonas",
                "Tipo de acabado",
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
          Realizamos renovación de silicona en Valencia ciudad y alrededores. Si
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
              title: "Servicios de baño",
              href: `/${locale}/services/bathroom`,
            },
            {
              title: "Cambio de alcachofa de ducha",
              href: `/${locale}/services/bathroom/shower-head-replacement`,
            },
            {
              title: "Cambio de manguera de ducha",
              href: `/${locale}/services/bathroom/shower-hose-replacement`,
            },
            {
              title: "Instalación de mueble bajo lavabo",
              href: `/${locale}/services/bathroom/vanity-unit-installation`,
            },
            {
              title: "Sellado de huecos",
              href: `/${locale}/services/bathroom/seal-gap-fixing`,
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
            ¿Quieres renovar la silicona del baño?
          </h2>
          <p className="mt-5 text-lg font-medium text-neutral-900">
            Envíanos fotos de las juntas, lavabo, ducha, bañera o zona afectada.
            Te damos un presupuesto claro antes de empezar.
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