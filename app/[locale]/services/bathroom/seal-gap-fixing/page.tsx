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
const pagePath = "/services/bathroom/seal-gap-fixing";

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";

  return {
    title: isEs
      ? "Sellado de Huecos en Baño | Desde 29€ | THEVULGO"
      : "Bathroom Seal & Gap Fixing | From €29 | THEVULGO",
    description: isEs
      ? "Sellado de pequeños huecos visibles en baño desde 29€. Sellado alrededor de elementos, juntas, accesorios y zonas visibles para un acabado más limpio."
      : "Bathroom seal and gap fixing from €29. Sealing small visible gaps around fixtures and bathroom elements for a tidier look and better protection.",
    alternates: {
      canonical: `${siteUrl}/${locale}${pagePath}`,
      languages: {
        es: `${siteUrl}/es${pagePath}`,
        en: `${siteUrl}/en${pagePath}`,
      },
    },
    openGraph: {
      title: isEs
        ? "Sellado de Huecos en Baño | THEVULGO"
        : "Bathroom Seal & Gap Fixing | THEVULGO",
      description: isEs
        ? "Sellado de pequeños huecos visibles alrededor de elementos de baño para un acabado más limpio."
        : "Sealing small visible bathroom gaps around fixtures and bathroom elements.",
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
    q: "¿Cuánto cuesta sellar pequeños huecos en el baño?",
    a: "El sellado de pequeños huecos en baño empieza desde 29€. El precio depende del tamaño del hueco, ubicación, material necesario, acceso y cantidad de zonas a sellar.",
  },
  {
    q: "¿Qué tipo de huecos pueden sellar?",
    a: "Podemos sellar pequeños huecos visibles alrededor de lavabos, muebles, accesorios, juntas, encimeras, bañeras, duchas y elementos de baño cuando el trabajo es sencillo y adecuado.",
  },
  {
    q: "¿Es lo mismo que renovar silicona?",
    a: "No exactamente. La renovación de silicona suele implicar retirar silicona antigua y aplicar nueva. El sellado de huecos se enfoca en pequeños espacios visibles que necesitan un acabado más limpio o protección básica.",
  },
  {
    q: "¿Pueden sellar huecos alrededor del lavabo?",
    a: "Sí. Podemos sellar pequeños huecos alrededor de lavabos, muebles bajo lavabo, encimeras y zonas visibles cercanas.",
  },
  {
    q: "¿Pueden sellar huecos en zona de ducha o bañera?",
    a: "Sí. Podemos revisar pequeños huecos en zonas de ducha o bañera y sellarlos si el trabajo es adecuado para silicona o sellador compatible.",
  },
  {
    q: "¿Sirve para mejorar el aspecto del baño?",
    a: "Sí. Sellar pequeños huecos visibles ayuda a que el baño se vea más ordenado, terminado y cuidado.",
  },
  {
    q: "¿Qué necesito enviar para pedir presupuesto?",
    a: "Envíanos fotos claras del hueco o zona visible, una foto general del baño y, si puedes, un vídeo corto para entender mejor el tamaño y la ubicación.",
  },
  {
    q: "¿Trabajan fuera de Valencia ciudad?",
    a: "Sí. Trabajamos en Valencia y alrededores como Mislata, Burjassot, Paterna, Torrent, Sagunto, Cullera, Gandía y otras zonas cercanas.",
  },
];

export default async function SealGapFixingPage({ params }: PageProps) {
  const { locale } = await params;
  const isEs = locale === "es";

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, quiero un presupuesto para sellado de pequeños huecos en baño."
      : "Hi, I would like a quote for bathroom seal and gap fixing."
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappText}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: isEs ? "Sellado de Huecos en Baño" : "Bathroom Seal & Gap Fixing",
    serviceType: "Bathroom seal and gap fixing",
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
      "Sellado de huecos en baño, renovación de silicona, sellado de juntas, lavabos, duchas, bañeras, muebles de baño, accesorios y servicios handyman en Valencia.",
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
        name: isEs ? "Sellado de Huecos en Baño" : "Bathroom Seal & Gap Fixing",
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
              Sellado de huecos, juntas y zonas visibles de baño
            </div>

            <h1 className="text-4xl font-black tracking-tight md:text-6xl">
              Sellado de huecos en baño
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-700">
              Sellado de pequeños huecos visibles alrededor de accesorios,
              lavabos, muebles, bañeras, duchas y elementos de baño para un
              acabado más limpio, ordenado y protegido.
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
                "Huecos visibles",
                "Juntas pequeñas",
                "Lavabos y duchas",
                "Acabado más limpio",
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
                Seal & gap fixing. Tidier look. Better protection.
              </h2>
              <p className="mt-4 font-medium leading-7 text-neutral-900">
                Revisamos los huecos visibles, preparamos la zona y sellamos con
                un acabado más limpio para mejorar el aspecto del baño.
              </p>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                ["Tidier look", "Baño con aspecto más terminado"],
                ["Small gaps", "Sellado de huecos visibles"],
                ["Better protection", "Protección básica en zonas adecuadas"],
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
              title: "Protección básica",
              text: "Sellamos pequeños huecos visibles cuando el material y la zona son adecuados.",
            },
            {
              icon: Wrench,
              title: "Corrección práctica",
              text: "Mejoramos juntas, bordes y separaciones visibles en elementos de baño.",
            },
            {
              icon: Ruler,
              title: "Acabado limpio",
              text: "Buscamos una línea más ordenada y un resultado visual más cuidado.",
            },
            {
              icon: Star,
              title: "Precio claro",
              text: "Desde 29€. Presupuesto según fotos, tamaño y dificultad.",
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
          Sellado de pequeños huecos visibles en baños
        </h2>

        <div className="mt-6 space-y-5 text-lg leading-8 text-neutral-700">
          <p>
            En THEVULGO realizamos sellado de pequeños huecos visibles en baños,
            aseos, lavabos, muebles bajo lavabo, bañeras, platos de ducha,
            encimeras, accesorios y elementos de pared que necesitan un acabado
            más limpio.
          </p>

          <p>
            Antes de sellar revisamos el tamaño del hueco, la superficie, la
            humedad visible, el acceso, el tipo de material y si el trabajo es
            adecuado para silicona o sellador compatible. Esto ayuda a conseguir
            un resultado más ordenado y útil.
          </p>

          <p>
            Este servicio es ideal cuando no necesitas una reforma, sino una
            pequeña mejora visible: cerrar separaciones, mejorar juntas, tapar
            espacios pequeños y dejar el baño con un aspecto más acabado.
          </p>
        </div>
      </section>

      <section className="bg-yellow-50 py-16">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <h2 className="text-3xl font-black md:text-4xl">
            ¿Qué incluye el sellado?
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              "Revisión del hueco visible",
              "Comprobación de la superficie",
              "Limpieza básica de la zona",
              "Preparación del borde",
              "Aplicación de sellador compatible",
              "Corrección visual del acabado",
              "Sellado de pequeños espacios",
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
          Zonas donde podemos sellar huecos
        </h2>

        <div className="grid gap-8 md:grid-cols-4">
          {[
            {
              title: "Alrededor del lavabo",
              text: "Sellado de pequeños huecos visibles junto a lavabos y encimeras.",
            },
            {
              title: "Zona de ducha",
              text: "Corrección de huecos pequeños en zonas visibles de ducha o plato.",
            },
            {
              title: "Bañera y juntas",
              text: "Sellado básico de pequeñas separaciones alrededor de bañeras.",
            },
            {
              title: "Muebles y accesorios",
              text: "Mejora de huecos alrededor de muebles, soportes y elementos de baño.",
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
          ¿Cuándo conviene sellar un hueco?
        </h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {[
            "Pequeña separación visible",
            "Borde mal acabado",
            "Hueco cerca del lavabo",
            "Junta alrededor de ducha",
            "Baño de alquiler o Airbnb",
            "Acabado final más limpio",
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
          Si no sabes si tu caso necesita sellado, renovación de silicona o una
          reparación diferente, envíanos fotos claras del hueco y una foto
          general del baño. Te damos una respuesta más precisa antes de la visita.
        </p>
      </section>

      <section className="bg-yellow-400 py-16 text-black">
        <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
          <p className="text-sm font-black uppercase tracking-widest">
            Desde 29€
          </p>
          <h2 className="mt-3 text-4xl font-black">
            Precio para sellar pequeños huecos de baño
          </h2>
          <p className="mt-6 text-lg font-medium leading-8 text-neutral-900">
            El precio depende del tamaño del hueco, número de zonas, acceso,
            superficie, material necesario y acabado esperado. Envíanos fotos y
            te damos un presupuesto claro antes de empezar.
          </p>

          <div className="mt-8 rounded-3xl border border-yellow-600/30 bg-white p-6 text-left shadow-xl">
            <h3 className="text-xl font-black">El precio depende de:</h3>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Tamaño del hueco",
                "Número de zonas",
                "Lavabo, ducha o bañera",
                "Superficie y material",
                "Acceso a la zona",
                "Limpieza necesaria",
                "Tipo de sellador",
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
          Realizamos sellado de huecos en baños en Valencia ciudad y alrededores.
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
              title: "Servicios de baño",
              href: `/${locale}/services/bathroom`,
            },
            {
              title: "Renovación de silicona",
              href: `/${locale}/services/bathroom/silicone-renewal`,
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
              title: "Instalación de accesorios de baño",
              href: `/${locale}/services/bathroom/accessory-installation`,
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
            ¿Quieres sellar un hueco visible en el baño?
          </h2>
          <p className="mt-5 text-lg font-medium text-neutral-900">
            Envíanos fotos del hueco, una foto general del baño y la zona donde
            quieres mejorar el acabado. Te damos un presupuesto claro antes de
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