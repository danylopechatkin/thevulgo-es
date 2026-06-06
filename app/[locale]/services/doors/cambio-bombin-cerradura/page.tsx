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
  KeyRound,
} from "lucide-react";

type PageProps = {
  params: Promise<{ locale: string }>;
};

const siteUrl = "https://www.thevulgo.es";
const phoneNumber = "34610076942";
const pagePath = "/services/doors/cambio-bombin-cerradura";

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";

  return {
    title: isEs
      ? "Cambio de Bombín de Cerradura | Desde 39€ | THEVULGO"
      : "Lock Cylinder Replacement | From €39 | THEVULGO",
    description: isEs
      ? "Cambio de bombín de cerradura desde 39€. Sustitución de cilindros visibles compatibles cuando la pieza nueva ya está disponible y el trabajo es sencillo."
      : "Lock cylinder replacement from €39. Replacement of compatible visible lock cylinders when the new part is available and the setup is suitable.",
    alternates: {
      canonical: `${siteUrl}/${locale}${pagePath}`,
      languages: {
        es: `${siteUrl}/es${pagePath}`,
        en: `${siteUrl}/en${pagePath}`,
      },
    },
    openGraph: {
      title: isEs
        ? "Cambio de Bombín de Cerradura | THEVULGO"
        : "Lock Cylinder Replacement | THEVULGO",
      description: isEs
        ? "Sustitución de bombines y cilindros visibles compatibles para puertas."
        : "Replacement of compatible visible lock cylinders for doors.",
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
    q: "¿Cuánto cuesta cambiar un bombín de cerradura?",
    a: "El cambio de bombín empieza desde 39€. El precio depende del tipo de puerta, cilindro, tornillos, acceso, compatibilidad de la pieza nueva y dificultad del trabajo.",
  },
  {
    q: "¿Pueden cambiar un bombín si ya tengo la pieza nueva?",
    a: "Sí. Podemos sustituir bombines visibles compatibles cuando el bombín nuevo ya está disponible y el montaje es sencillo.",
  },
  {
    q: "¿Necesito comprar el bombín antes?",
    a: "Sí, lo ideal es tener el bombín compatible comprado antes de la visita. Puedes enviarnos fotos o enlace para revisar si parece adecuado.",
  },
  {
    q: "¿Cambian bombines de puertas interiores o de entrada?",
    a: "Podemos revisar puertas interiores, puertas de acceso y cerraduras visibles cuando el sistema es compatible y el trabajo es adecuado para una sustitución sencilla.",
  },
  {
    q: "¿Incluye apertura de puertas cerradas?",
    a: "No. Este servicio es para sustitución sencilla de bombines compatibles, no para apertura urgente de puertas bloqueadas o servicios de cerrajería de emergencia.",
  },
  {
    q: "¿Pueden cambiar varios bombines en una visita?",
    a: "Sí. Podemos revisar y cambiar varios bombines compatibles en una sola visita si las piezas están disponibles.",
  },
  {
    q: "¿Qué pasa si el bombín no es compatible?",
    a: "Si la pieza nueva no encaja, puede ser necesario comprar otro bombín compatible o revisar la cerradura completa antes de continuar.",
  },
  {
    q: "¿Qué necesito enviar para pedir presupuesto?",
    a: "Envíanos fotos de la puerta, cerradura, bombín actual, canto de la puerta, llaves si procede y foto del bombín nuevo si ya lo tienes.",
  },
];

export default async function CambioBombinCerraduraPage({
  params,
}: PageProps) {
  const { locale } = await params;
  const isEs = locale === "es";

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, quiero un presupuesto para cambio de bombín de cerradura."
      : "Hi, I would like a quote for lock cylinder replacement."
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappText}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: isEs ? "Cambio de Bombín de Cerradura" : "Lock Cylinder Replacement",
    serviceType: "Lock cylinder replacement",
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
      "Cambio de bombines de cerradura, cilindros visibles, manillas, pestillos, cerraderos, bisagras, puertas interiores y servicios handyman en Valencia.",
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
          ? "Cambio de Bombín de Cerradura"
          : "Lock Cylinder Replacement",
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
              Bombines, cilindros visibles y cerraduras compatibles
            </div>

            <h1 className="text-4xl font-black tracking-tight md:text-6xl">
              Cambio de bombín de cerradura
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-700">
              Sustitución de bombines y cilindros visibles compatibles cuando la
              pieza nueva ya está disponible y la puerta permite un trabajo
              sencillo, limpio y directo.
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
                "Bombín compatible",
                "Cilindro visible",
                "Pieza nueva disponible",
                "Cambio sencillo",
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
              <KeyRound className="mb-6 h-12 w-12 text-black" />
              <p className="text-sm font-black uppercase tracking-widest">
                THEVULGO Valencia
              </p>
              <h2 className="mt-3 text-3xl font-black">
                Lock cylinder replacement. Compatible part. Cleaner setup.
              </h2>
              <p className="mt-4 font-medium leading-7 text-neutral-900">
                Revisamos el bombín actual, la puerta, el canto y la pieza nueva
                para comprobar si el cambio es compatible y directo.
              </p>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                ["Compatible cylinder", "Revisión de pieza nueva"],
                ["Visible lock part", "Cambio de bombín accesible"],
                ["Straightforward work", "Trabajo sencillo si encaja"],
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
              title: "Cambio compatible",
              text: "Revisamos si el bombín nuevo encaja con la puerta y cerradura.",
            },
            {
              icon: Wrench,
              title: "Trabajo sencillo",
              text: "Sustitución directa cuando el cilindro es visible y accesible.",
            },
            {
              icon: Ruler,
              title: "Revisión previa",
              text: "Comprobamos puerta, canto, tornillos y pieza nueva antes de empezar.",
            },
            {
              icon: Star,
              title: "Precio claro",
              text: "Desde 39€. Presupuesto según fotos, pieza y dificultad.",
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
          Sustitución de bombines visibles compatibles
        </h2>

        <div className="mt-6 space-y-5 text-lg leading-8 text-neutral-700">
          <p>
            En THEVULGO realizamos cambio de bombines de cerradura cuando el
            cilindro es visible, la pieza nueva ya está disponible y el sistema
            permite una sustitución sencilla sin trabajo de cerrajería urgente.
          </p>

          <p>
            Antes de cambiar el bombín revisamos la puerta, el canto, tornillos,
            cerradura, cilindro actual, medidas visibles y compatibilidad de la
            pieza nueva. Esto ayuda a evitar problemas de encaje y pérdida de
            tiempo en la visita.
          </p>

          <p>
            También podemos combinar este trabajo con cambio de manilla, ajuste
            de pestillo, ajuste de cerradero, reparación de manilla suelta,
            apriete de bisagras o pequeños trabajos de herrajes visibles.
          </p>
        </div>
      </section>

      <section className="bg-yellow-50 py-16">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <h2 className="text-3xl font-black md:text-4xl">
            ¿Qué incluye el cambio de bombín?
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              "Revisión del bombín actual",
              "Comprobación de pieza nueva",
              "Revisión de puerta y canto",
              "Comprobación de tornillos",
              "Retirada del cilindro antiguo",
              "Instalación del bombín compatible",
              "Prueba básica con llave",
              "Revisión final del funcionamiento",
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
          Cuándo conviene cambiar el bombín
        </h2>

        <div className="grid gap-8 md:grid-cols-4">
          {[
            {
              title: "Bombín desgastado",
              text: "Sustitución cuando el cilindro visible está viejo, duro o incómodo de usar.",
            },
            {
              title: "Cambio de llaves",
              text: "Cambio práctico si quieres usar un bombín nuevo con nuevas llaves.",
            },
            {
              title: "Cilindro compatible",
              text: "Trabajo sencillo cuando la pieza nueva encaja con la cerradura existente.",
            },
            {
              title: "Herraje visible",
              text: "Revisión de bombines accesibles en puertas con cilindro visible.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-yellow-300 bg-white p-7 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400">
                <KeyRound className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-2xl font-black">{item.title}</h3>
              <p className="mt-4 leading-7 text-neutral-700">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-16 md:px-8">
        <h2 className="text-3xl font-black">
          ¿Dónde cambiamos bombines de cerradura?
        </h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {[
            "Puertas interiores",
            "Puertas de acceso",
            "Puertas de vivienda",
            "Apartamentos",
            "Pisos de alquiler",
            "Puertas con cilindro visible",
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
          Este servicio no es apertura urgente de puertas ni cerrajería de
          emergencia. Es para sustitución sencilla de bombines compatibles cuando
          la pieza nueva está disponible y el sistema permite el cambio.
        </p>
      </section>

      <section className="bg-yellow-400 py-16 text-black">
        <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
          <p className="text-sm font-black uppercase tracking-widest">
            Desde 39€
          </p>
          <h2 className="mt-3 text-4xl font-black">
            Precio para cambiar bombín de cerradura
          </h2>
          <p className="mt-6 text-lg font-medium leading-8 text-neutral-900">
            El precio depende del tipo de bombín, compatibilidad, estado de la
            puerta, tornillos, acceso, pieza nueva y dificultad. Envíanos fotos
            para darte un presupuesto claro.
          </p>

          <div className="mt-8 rounded-3xl border border-yellow-600/30 bg-white p-6 text-left shadow-xl">
            <h3 className="text-xl font-black">El precio depende de:</h3>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Tipo de bombín",
                "Pieza nueva compatible",
                "Estado de la puerta",
                "Cerradura existente",
                "Tornillos y acceso",
                "Número de bombines",
                "Dificultad del cambio",
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
          Realizamos cambio de bombines de cerradura en Valencia ciudad y
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
              title: "Cambio de manilla",
              href: `/${locale}/services/doors/handle-replacement`,
            },
            {
              title: "Ajuste de pestillo",
              href: `/${locale}/services/doors/latch-adjustment`,
            },
            {
              title: "Ajuste de cerradero",
              href: `/${locale}/services/doors/strike-plate-adjustment`,
            },
            {
              title: "Reparar manilla suelta",
              href: `/${locale}/services/doors/loose-handle-fixing`,
            },
            {
              title: "Ajuste de puerta desalineada",
              href: `/${locale}/services/doors/door-alignment-adjustment`,
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
            ¿Quieres cambiar un bombín de cerradura?
          </h2>
          <p className="mt-5 text-lg font-medium text-neutral-900">
            Envíanos fotos de la puerta, bombín actual, cerradura, canto de la
            puerta y bombín nuevo si ya lo tienes. Te damos un presupuesto claro
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