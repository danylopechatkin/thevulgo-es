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
const pagePath = "/services/bathroom/shelf-installation-valencia";

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";

  return {
    title: isEs
      ? "Instalación de Estantería de Baño en Valencia | Desde 35€ | THEVULGO"
      : "Bathroom Shelf Installation in Valencia | From €35 | THEVULGO",
    description: isEs
      ? "Instalación de estanterías de baño en Valencia desde 35€. Montaje de baldas para almacenaje, cosméticos, decoración y objetos de uso diario."
      : "Bathroom shelf installation in Valencia from €35. Shelves for storage, cosmetics, décor and everyday items with clean wall alignment.",
    alternates: {
      canonical: `${siteUrl}/${locale}${pagePath}`,
      languages: {
        es: `${siteUrl}/es${pagePath}`,
        en: `${siteUrl}/en${pagePath}`,
      },
    },
    openGraph: {
      title: isEs
        ? "Instalación de Estantería de Baño en Valencia | THEVULGO"
        : "Bathroom Shelf Installation in Valencia | THEVULGO",
      description: isEs
        ? "Montaje limpio y seguro de estanterías, baldas y accesorios de almacenaje para baño."
        : "Clean and secure bathroom shelf mounting for storage, cosmetics and everyday use.",
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
    q: "¿Cuánto cuesta instalar una estantería de baño en Valencia?",
    a: "La instalación de estantería de baño empieza desde 35€. El precio depende del tamaño, número de baldas, tipo de pared, fijaciones, peso previsto y dificultad del montaje.",
  },
  {
    q: "¿Instalan estanterías en azulejo?",
    a: "Sí. Podemos instalar estanterías en azulejo si la superficie es adecuada. Revisamos la zona antes de perforar para evitar problemas innecesarios.",
  },
  {
    q: "¿Pueden instalar baldas de cristal?",
    a: "Sí. Podemos instalar baldas de cristal, madera, metal o plástico siempre que el sistema de fijación sea compatible y seguro.",
  },
  {
    q: "¿Sirve para cosméticos y productos de baño?",
    a: "Sí. Instalamos estanterías para cosméticos, champús, toallas pequeñas, decoración y objetos de uso diario.",
  },
  {
    q: "¿Necesito tener tornillos y tacos?",
    a: "Si la estantería incluye fijaciones, las revisamos. Si no son adecuadas para la pared, podemos recomendar o usar fijaciones más apropiadas según el caso.",
  },
  {
    q: "¿Pueden instalar varios accesorios en la misma visita?",
    a: "Sí. Podemos instalar estanterías, portarrollos, toalleros, espejos, ganchos, muebles de baño y otros accesorios en una sola visita.",
  },
  {
    q: "¿Qué necesito enviar para pedir presupuesto?",
    a: "Lo ideal es enviar fotos del baño, foto de la estantería o balda, medidas aproximadas, tipo de pared y decir cuántas piezas quieres instalar.",
  },
  {
    q: "¿Trabajan fuera de Valencia ciudad?",
    a: "Sí. Trabajamos en Valencia y alrededores como Mislata, Burjassot, Paterna, Torrent, Sagunto, Cullera, Gandía y otras zonas cercanas.",
  },
];

export default async function BathroomShelfInstallationValenciaPage({
  params,
}: PageProps) {
  const { locale } = await params;
  const isEs = locale === "es";

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, quiero un presupuesto para instalación de estantería de baño en Valencia."
      : "Hi, I would like a quote for bathroom shelf installation in Valencia."
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappText}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: isEs
      ? "Instalación de Estantería de Baño en Valencia"
      : "Bathroom Shelf Installation in Valencia",
    serviceType: "Bathroom shelf installation",
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
      "Instalación de estanterías de baño, baldas, espejos, muebles, portarrollos, toalleros, accesorios y servicios handyman en Valencia.",
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
          ? "Instalación de Estantería de Baño en Valencia"
          : "Bathroom Shelf Installation in Valencia",
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
              Estanterías, baldas y almacenaje de baño en Valencia
            </div>

            <h1 className="text-4xl font-black tracking-tight md:text-6xl">
              Instalación de estantería de baño{" "}
              <span className="text-yellow-500">en Valencia</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-700">
              Instalación de estanterías y baldas de baño para almacenaje,
              cosméticos, decoración y objetos de uso diario con alineación
              limpia en pared.
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
                "Desde 35€",
                "Estanterías y baldas",
                "Para cosméticos y almacenaje",
                "Alineación limpia",
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
                Bathroom shelf installation. Storage. Clean alignment. Ready to use.
              </h2>
              <p className="mt-4 font-medium leading-7 text-neutral-900">
                Revisamos la pared, marcamos la posición, instalamos la balda y
                dejamos el baño más práctico y ordenado.
              </p>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                ["Better storage", "Más espacio para cosméticos y objetos"],
                ["Clean alignment", "Baldas rectas y visualmente limpias"],
                ["Secure fixing", "Fijación adecuada según pared"],
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
              text: "Revisamos pared, azulejo, peso previsto y fijaciones antes de instalar.",
            },
            {
              icon: Ruler,
              title: "Alineación limpia",
              text: "Buscamos altura, separación y posición equilibrada para el baño.",
            },
            {
              icon: Drill,
              title: "Montaje práctico",
              text: "Instalamos baldas, estantes y pequeños sistemas de almacenaje.",
            },
            {
              icon: Star,
              title: "Precio claro",
              text: "Desde 35€. Presupuesto según fotos, piezas y dificultad.",
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
          Instalación de estanterías de baño en Valencia
        </h2>

        <div className="mt-6 space-y-5 text-lg leading-8 text-neutral-700">
          <p>
            En THEVULGO realizamos instalación de estanterías de baño en
            Valencia para viviendas, apartamentos, pisos de alquiler, baños
            pequeños y espacios que necesitan más organización para cosméticos,
            toallas pequeñas, decoración o productos de uso diario.
          </p>

          <p>
            Antes de perforar revisamos el tipo de pared, azulejo, peso previsto,
            sistema de fijación, altura, distancia con lavabo, ducha, bañera,
            espejo o muebles cercanos. Esto ayuda a conseguir una instalación
            más cómoda, recta y visualmente limpia.
          </p>

          <p>
            También podemos instalar otros accesorios de baño en la misma visita:
            espejo, portarrollos, toallero, ganchos, armario con espejo, mueble
            de baño y pequeños soportes de pared.
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
              "Revisión de estantería y piezas",
              "Comprobación de pared o azulejo",
              "Medición de altura y separación",
              "Marcado de puntos de fijación",
              "Perforación si hace falta",
              "Montaje de balda o estante",
              "Nivelación y alineación visual",
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
          Tipos de estanterías de baño que podemos instalar
        </h2>

        <div className="grid gap-8 md:grid-cols-4">
          {[
            {
              title: "Balda de baño",
              text: "Instalación de baldas simples para cosméticos y objetos diarios.",
            },
            {
              title: "Estantería de pared",
              text: "Montaje de estantes pequeños o medianos con alineación limpia.",
            },
            {
              title: "Balda de cristal",
              text: "Instalación de baldas de cristal cuando el sistema es compatible.",
            },
            {
              title: "Almacenaje decorativo",
              text: "Soluciones prácticas para baños pequeños, decoración y orden visual.",
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
            Desde 35€
          </p>
          <h2 className="mt-3 text-4xl font-black">
            Precio para instalar estantería de baño en Valencia
          </h2>
          <p className="mt-6 text-lg font-medium leading-8 text-neutral-900">
            El precio depende del número de baldas, tamaño, material, pared,
            azulejo, fijaciones, peso previsto y dificultad. Envíanos fotos y te
            damos un presupuesto claro antes de empezar.
          </p>

          <div className="mt-8 rounded-3xl border border-yellow-600/30 bg-white p-6 text-left shadow-xl">
            <h3 className="text-xl font-black">El precio depende de:</h3>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Número de baldas",
                "Tamaño y material",
                "Pared o azulejo",
                "Sistema de fijación",
                "Peso previsto",
                "Altura y posición",
                "Otros accesorios",
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
          Realizamos instalación de estanterías de baño en Valencia ciudad y
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
              title: "Instalación de espejo de baño",
              href: `/${locale}/services/bathroom/mirror-installation-valencia`,
            },
            {
              title: "Instalación de portarrollos",
              href: `/${locale}/services/bathroom/toilet-paper-holder-installation-valencia`,
            },
            {
              title: "Instalación de toallero",
              href: `/${locale}/services/bathroom/towel-holder-installation-valencia`,
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
            ¿Quieres instalar una estantería de baño en Valencia?
          </h2>
          <p className="mt-5 text-lg font-medium text-neutral-900">
            Envíanos fotos del baño, de la estantería o balda, medidas
            aproximadas y tipo de pared. Te damos un presupuesto claro antes de
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