import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  PackageCheck,
  ShieldCheck,
  Wrench,
  Home,
  HelpCircle,
  MapPin,
  Star,
  Ruler,
  BedDouble,
} from "lucide-react";

type PageProps = {
  params: Promise<{ locale: string }>;
};

const siteUrl = "https://thevulgo.es";
const phoneNumber = "34610076942";

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";

  return {
    title: isEs
      ? "Montaje de Muebles IKEA en Valencia | Desde 39€ | THEVULGO"
      : "IKEA Furniture Assembly in Valencia | From €39 | THEVULGO",
    description: isEs
      ? "Montaje profesional de muebles IKEA en Valencia desde 39€. Armarios, camas, cómodas, estanterías, muebles flat-pack, ajuste cuidadoso y estructura estable."
      : "Professional IKEA furniture assembly in Valencia from €39. Wardrobes, beds, dressers, shelves, flat-pack furniture, careful alignment and stable structure.",
    alternates: {
      canonical: `${siteUrl}/${locale}/montaje-muebles-ikea-valencia`,
      languages: {
        es: `${siteUrl}/es/montaje-muebles-ikea-valencia`,
      },
    },
    openGraph: {
      title: isEs
        ? "Montaje de Muebles IKEA en Valencia | THEVULGO"
        : "IKEA Furniture Assembly in Valencia | THEVULGO",
      description: isEs
        ? "Montaje limpio y profesional de muebles IKEA tipo flat-pack en Valencia."
        : "Clean and professional IKEA flat-pack furniture assembly in Valencia.",
      url: `${siteUrl}/${locale}/montaje-muebles-ikea-valencia`,
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
    q: "¿Cuánto cuesta el montaje de muebles IKEA en Valencia?",
    a: "El montaje de muebles IKEA empieza desde 39€. El precio final depende del tipo de mueble, tamaño, número de piezas, dificultad, si hay que fijar a pared y distancia fuera de Valencia.",
  },
  {
    q: "¿Montan armarios IKEA?",
    a: "Sí. Montamos armarios IKEA, incluyendo estructuras, puertas, cajones, baldas y ajustes básicos. Para armarios grandes recomendamos enviar fotos o modelo antes.",
  },
  {
    q: "¿Montan camas, cómodas y estanterías?",
    a: "Sí. Montamos camas, cómodas, estanterías, mesas, escritorios, muebles de TV, zapateros, muebles de baño y otros muebles tipo flat-pack.",
  },
  {
    q: "¿Pueden fijar muebles a la pared?",
    a: "Sí. Podemos fijar muebles a la pared cuando sea necesario por seguridad, especialmente estanterías, armarios altos o muebles que puedan volcar.",
  },
  {
    q: "¿Tengo que tener herramientas?",
    a: "No. Llevamos herramientas profesionales. Solo necesitas tener el mueble, piezas, tornillos e instrucciones disponibles.",
  },
  {
    q: "¿Pueden montar muebles que no son de IKEA?",
    a: "Sí. También montamos muebles de Leroy Merlin, Amazon, Conforama, JYSK, Bauhaus, Carrefour y otras tiendas.",
  },
  {
    q: "¿Cuánto tarda montar un mueble IKEA?",
    a: "Depende del mueble. Una pieza sencilla puede tardar menos de una hora, mientras que armarios, camas con cajones o varios muebles pueden requerir más tiempo.",
  },
  {
    q: "¿Trabajan fuera de Valencia ciudad?",
    a: "Sí. Trabajamos en Valencia y alrededores como Mislata, Burjassot, Paterna, Torrent, Sagunto, Cullera, Gandía y otras zonas cercanas.",
  },
];

export default async function IkeaFurnitureAssemblyValenciaPage({
  params,
}: PageProps) {
  const { locale } = await params;
  const isEs = locale === "es";

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, quiero un presupuesto para montaje de muebles IKEA en Valencia."
      : "Hi, I would like a quote for IKEA furniture assembly in Valencia."
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappText}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Montaje de Muebles IKEA en Valencia",
    serviceType: "IKEA furniture assembly",
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
      "Montaje de muebles IKEA, flat-pack, armarios, camas, cómodas, estanterías, montaje de TV y servicios handyman en Valencia.",
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
        name: "Montaje de Muebles IKEA en Valencia",
        item: `${siteUrl}/${locale}/montaje-muebles-ikea-valencia`,
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
              IKEA · Flat-pack · Armarios · Camas · Estanterías
            </div>

            <h1 className="text-4xl font-black tracking-tight md:text-6xl">
              Montaje de muebles IKEA{" "}
              <span className="text-yellow-500">en Valencia</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-700">
              Montaje profesional de muebles IKEA tipo flat-pack desde{" "}
              <strong className="text-neutral-950">39€</strong>: armarios,
              camas, cómodas, muebles, estanterías y más. Ajuste cuidadoso,
              alineación correcta y estructura estable para uso diario.
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
                "Montaje desde 39€",
                "Armarios, camas y cómodas",
                "Estanterías y muebles de TV",
                "Ajuste y alineación correcta",
                "Fijación a pared si hace falta",
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
              <PackageCheck className="mb-6 h-12 w-12 text-black" />
              <p className="text-sm font-black uppercase tracking-widest">
                THEVULGO Valencia
              </p>
              <h2 className="mt-3 text-3xl font-black">
                IKEA furniture assembly. Straight. Stable. Clean.
              </h2>
              <p className="mt-4 font-medium leading-7 text-neutral-900">
                Montamos piezas flat-pack con cuidado, revisamos alineación,
                ajustamos puertas y dejamos una estructura estable para uso
                diario.
              </p>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                ["Flat-pack assembly", "Montaje de muebles desmontados"],
                ["Careful alignment", "Puertas, cajones y estructura recta"],
                ["Wall fixing", "Fijación a pared cuando conviene"],
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
              icon: Wrench,
              title: "Montaje cuidadoso",
              text: "Montamos pieza por pieza siguiendo estructura e instrucciones.",
            },
            {
              icon: Ruler,
              title: "Alineación correcta",
              text: "Ajustamos puertas, cajones, baldas y nivelación.",
            },
            {
              icon: ShieldCheck,
              title: "Estructura estable",
              text: "Revisamos estabilidad y fijación para uso diario.",
            },
            {
              icon: Star,
              title: "Precio claro",
              text: "Presupuesto antes del trabajo según mueble y dificultad.",
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
          Montaje profesional de muebles IKEA en Valencia
        </h2>

        <div className="mt-6 space-y-5 text-lg leading-8 text-neutral-700">
          <p>
            En THEVULGO realizamos montaje de muebles IKEA en Valencia para
            pisos, casas, apartamentos, oficinas y propiedades de alquiler.
            Montamos muebles tipo flat-pack como armarios, camas, cómodas,
            estanterías, mesas, escritorios, muebles de TV, zapateros y muebles
            de almacenamiento.
          </p>

          <p>
            Un buen montaje no es solo apretar tornillos. Revisamos la estructura,
            alineación, cajones, puertas, bisagras, baldas y estabilidad general.
            El objetivo es que el mueble quede recto, estable y cómodo para uso
            diario.
          </p>

          <p>
            También podemos ayudarte con fijación a pared, especialmente en
            armarios altos, estanterías, muebles estrechos o piezas que puedan
            volcar. Si el mueble es grande o pesado, envíanos fotos o el modelo
            antes de la visita para calcular mejor el tiempo y el precio.
          </p>
        </div>
      </section>

      <section className="bg-yellow-50 py-16">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <h2 className="text-3xl font-black md:text-4xl">
            ¿Qué incluye el montaje?
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              "Revisión de piezas e instrucciones",
              "Montaje de estructura principal",
              "Instalación de puertas y cajones",
              "Ajuste de bisagras y guías",
              "Nivelación y alineación básica",
              "Montaje de baldas y accesorios",
              "Fijación a pared si hace falta",
              "Comprobación final de estabilidad",
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
          Tipos de muebles IKEA que montamos
        </h2>

        <div className="grid gap-8 md:grid-cols-4">
          {[
            {
              title: "Armarios",
              text: "Estructuras, puertas, baldas, cajones y ajuste básico para uso diario.",
            },
            {
              title: "Camas",
              text: "Camas simples, dobles, con cajones, cabeceros y estructuras flat-pack.",
            },
            {
              title: "Cómodas",
              text: "Montaje de cajones, guías, alineación frontal y estabilidad.",
            },
            {
              title: "Estanterías",
              text: "Estanterías, muebles de pared, baldas y fijación si hace falta.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-yellow-300 bg-white p-7 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400">
                <BedDouble className="h-8 w-8 text-black" />
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
            Presupuesto para montar muebles IKEA en Valencia
          </h2>
          <p className="mt-6 text-lg font-medium leading-8 text-neutral-900">
            El precio depende del tipo de mueble, número de piezas, tamaño,
            dificultad, tiempo de montaje y si hace falta fijación a pared.
            Envíanos fotos o el modelo y te damos un precio claro.
          </p>

          <div className="mt-8 rounded-3xl border border-yellow-600/30 bg-white p-6 text-left shadow-xl">
            <h3 className="text-xl font-black">El precio depende de:</h3>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Tipo de mueble",
                "Número de piezas",
                "Tamaño y peso",
                "Puertas y cajones",
                "Fijación a pared",
                "Ajustes necesarios",
                "Varios muebles en una visita",
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
          Realizamos montaje de muebles IKEA en Valencia ciudad y alrededores.
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
              title: "Montaje de muebles en Valencia",
              href: `/${locale}/montaje-muebles-valencia`,
            },
            {
              title: "Instalación de estanterías",
              href: `/${locale}/instalacion-estanterias-valencia`,
            },
            {
              title: "Colgar cuadros en Valencia",
              href: `/${locale}/colgar-cuadros-valencia`,
            },
            {
              title: "Instalar espejo en pared",
              href: `/${locale}/instalar-espejo-valencia`,
            },
            {
              title: "Montaje de TV en Valencia",
              href: `/${locale}/montaje-tv-valencia`,
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
            ¿Quieres montar muebles IKEA en Valencia?
          </h2>
          <p className="mt-5 text-lg font-medium text-neutral-900">
            Envíanos fotos del mueble, cajas o modelo IKEA. Te damos un
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