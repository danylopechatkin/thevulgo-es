import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Wrench,
  Home,
  HelpCircle,
  MapPin,
  Star,
  Ruler,
  PackageCheck,
    BrickWall,
} from "lucide-react";

type PageProps = {
  params: Promise<{ locale: string }>;
};

const siteUrl = "https://thevulgo.es";
const phoneNumber = "34610076942";

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";

  return {
    title: isEs
      ? "Fijación de Muebles a la Pared en Valencia | Desde 29€ | THEVULGO"
      : "Furniture Wall Anchoring in Valencia | From €29 | THEVULGO",
    description: isEs
      ? "Fijación profesional anti-vuelco de muebles a la pared en Valencia desde 29€. Armarios, estanterías, muebles altos y almacenamiento con anclajes adecuados."
      : "Professional anti-tip furniture wall anchoring in Valencia from €29. Wardrobes, shelves, tall cabinets and storage units with suitable anchors.",
    alternates: {
      canonical: `${siteUrl}/${locale}/fijacion-muebles-pared-valencia`,
      languages: {
        es: `${siteUrl}/es/fijacion-muebles-pared-valencia`,
      },
    },
    openGraph: {
      title: isEs
        ? "Fijación de Muebles a la Pared en Valencia | THEVULGO"
        : "Furniture Wall Anchoring in Valencia | THEVULGO",
      description: isEs
        ? "Fijación anti-vuelco para armarios, estanterías y muebles altos en Valencia."
        : "Anti-tip anchoring for wardrobes, shelves and tall furniture in Valencia.",
      url: `${siteUrl}/${locale}/fijacion-muebles-pared-valencia`,
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
    q: "¿Cuánto cuesta fijar un mueble a la pared en Valencia?",
    a: "La fijación de muebles a la pared empieza desde 29€. El precio final depende del tipo de mueble, tipo de pared, altura, peso, número de anclajes y dificultad de acceso.",
  },
  {
    q: "¿Qué muebles se pueden fijar a la pared?",
    a: "Podemos fijar armarios, estanterías, muebles altos, zapateros, cómodas, librerías, muebles de entrada y unidades de almacenamiento alto.",
  },
  {
    q: "¿Es recomendable fijar muebles altos a la pared?",
    a: "Sí. En muchos casos es recomendable para mejorar la estabilidad y reducir el riesgo de vuelco, especialmente en muebles altos, estrechos o pesados.",
  },
  {
    q: "¿Qué anclajes usan?",
    a: "Usamos anclajes adecuados según el tipo de pared y mueble. Primero revisamos si es ladrillo, hormigón, pladur u otra superficie.",
  },
  {
    q: "¿Pueden fijar muebles en pladur?",
    a: "Sí, pero hay que revisar bien la pared y el peso del mueble. En pladur puede hacer falta usar fijaciones específicas o buscar estructura interna.",
  },
  {
    q: "¿Tengo que comprar los anclajes?",
    a: "Si el mueble incluye kit anti-vuelco, podemos instalarlo. Si no, podemos llevar fijaciones básicas o recomendar la mejor opción según la pared.",
  },
  {
    q: "¿Cuánto tarda fijar un mueble?",
    a: "Una fijación sencilla puede tardar entre 20 y 45 minutos. Varios muebles, paredes complicadas o muebles grandes pueden tardar más.",
  },
  {
    q: "¿Trabajan fuera de Valencia ciudad?",
    a: "Sí. Trabajamos en Valencia y alrededores como Mislata, Burjassot, Paterna, Torrent, Sagunto, Cullera, Gandía y otras zonas cercanas.",
  },
];

export default async function FurnitureWallAnchoringValenciaPage({
  params,
}: PageProps) {
  const { locale } = await params;
  const isEs = locale === "es";

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, quiero un presupuesto para fijar muebles a la pared en Valencia."
      : "Hi, I would like a quote for furniture wall anchoring in Valencia."
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappText}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Fijación de Muebles a la Pared en Valencia",
    serviceType: "Furniture wall anchoring",
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
      "Fijación anti-vuelco de muebles a la pared, montaje de armarios, estanterías, cómodas, muebles IKEA y servicios handyman en Valencia.",
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
        name: "Fijación de Muebles a la Pared en Valencia",
        item: `${siteUrl}/${locale}/fijacion-muebles-pared-valencia`,
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
              Anti-vuelco · Armarios · Estanterías · Muebles altos
            </div>

            <h1 className="text-4xl font-black tracking-tight md:text-6xl">
              Fijación de muebles a la pared{" "}
              <span className="text-yellow-500">en Valencia</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-700">
              Fijación profesional anti-vuelco desde{" "}
              <strong className="text-neutral-950">29€</strong> para armarios,
              muebles altos, estanterías y almacenamiento alto. Mejora la
              estabilidad y seguridad usando anclajes adecuados.
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
                "Fijación desde 29€",
                "Anti-vuelco",
                "Armarios y estanterías",
                "Muebles altos",
                "Anclajes adecuados",
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
              <ShieldCheck className="mb-6 h-12 w-12 text-black" />
              <p className="text-sm font-black uppercase tracking-widest">
                THEVULGO Valencia
              </p>
              <h2 className="mt-3 text-3xl font-black">
                Anti-tip anchoring. Safer. Stronger. Cleaner.
              </h2>
              <p className="mt-4 font-medium leading-7 text-neutral-900">
                Revisamos el mueble, la pared y la ubicación para elegir una
                fijación adecuada y mejorar la estabilidad.
              </p>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                ["Anti-tip safety", "Fijación para reducir riesgo de vuelco"],
                ["Wall check", "Revisión de ladrillo, hormigón o pladur"],
                ["Tall furniture", "Armarios, librerías y muebles altos"],
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
              icon: BrickWall,
              title: "Anclajes adecuados",
              text: "Elegimos fijación según pared, mueble y peso aproximado.",
            },
            {
              icon: ShieldCheck,
              title: "Mayor seguridad",
              text: "Ayuda a reducir el riesgo de vuelco en muebles altos.",
            },
            {
              icon: Wrench,
              title: "Trabajo limpio",
              text: "Medición, perforación cuidada y acabado ordenado.",
            },
            {
              icon: Star,
              title: "Precio claro",
              text: "Presupuesto antes del trabajo según fotos y dificultad.",
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
          Fijación profesional anti-vuelco de muebles en Valencia
        </h2>

        <div className="mt-6 space-y-5 text-lg leading-8 text-neutral-700">
          <p>
            En THEVULGO realizamos fijación de muebles a la pared en Valencia
            para mejorar la estabilidad de armarios, estanterías, librerías,
            cómodas, muebles altos, zapateros, muebles de entrada y unidades de
            almacenamiento.
          </p>

          <p>
            Muchos muebles altos o estrechos pueden moverse o volcar si no están
            correctamente fijados. Por eso revisamos el tipo de pared, el tipo de
            mueble, la posición y los puntos de anclaje antes de perforar. El
            objetivo es conseguir una fijación limpia, discreta y segura.
          </p>

          <p>
            Podemos instalar kits anti-vuelco incluidos con el mueble o usar
            fijaciones adecuadas según la pared. Trabajamos con ladrillo,
            hormigón y pladur con revisión previa.
          </p>
        </div>
      </section>

      <section className="bg-yellow-50 py-16">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <h2 className="text-3xl font-black md:text-4xl">
            ¿Qué incluye la fijación a pared?
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              "Revisión del mueble",
              "Revisión del tipo de pared",
              "Elección de puntos de anclaje",
              "Medición y marcado",
              "Instalación de tacos o fijaciones",
              "Fijación anti-vuelco",
              "Comprobación de estabilidad",
              "Acabado limpio y ordenado",
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
          Muebles que podemos fijar a la pared
        </h2>

        <div className="grid gap-8 md:grid-cols-4">
          {[
            {
              title: "Armarios altos",
              text: "Fijación anti-vuelco para armarios altos, estrechos o pesados.",
            },
            {
              title: "Estanterías",
              text: "Anclaje para librerías y estanterías altas o independientes.",
            },
            {
              title: "Cómodas y cajoneras",
              text: "Fijación recomendada para muebles con cajones y estructura alta.",
            },
            {
              title: "Muebles de entrada",
              text: "Zapateros, recibidores, consolas y almacenamiento alto.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-yellow-300 bg-white p-7 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400">
                <PackageCheck className="h-8 w-8 text-black" />
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
            Desde 29€
          </p>
          <h2 className="mt-3 text-4xl font-black">
            Presupuesto para fijar muebles a la pared en Valencia
          </h2>
          <p className="mt-6 text-lg font-medium leading-8 text-neutral-900">
            El precio depende del tipo de mueble, pared, número de anclajes,
            altura, peso, acceso y material necesario. Envíanos fotos y te damos
            un precio claro.
          </p>

          <div className="mt-8 rounded-3xl border border-yellow-600/30 bg-white p-6 text-left shadow-xl">
            <h3 className="text-xl font-black">El precio depende de:</h3>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Tipo de mueble",
                "Tipo de pared",
                "Número de anclajes",
                "Altura del mueble",
                "Peso aproximado",
                "Kit anti-vuelco incluido",
                "Material necesario",
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
          Realizamos fijación de muebles a la pared en Valencia ciudad y
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
              title: "Montaje de armario",
              href: `/${locale}/montaje-armario-valencia`,
            },
            {
              title: "Montaje de estanterías",
              href: `/${locale}/montaje-estanterias-valencia`,
            },
            {
              title: "Montaje de cómodas y cajoneras",
              href: `/${locale}/montaje-comodas-cajoneras-valencia`,
            },
            {
              title: "Montaje de muebles IKEA",
              href: `/${locale}/montaje-muebles-ikea-valencia`,
            },
            {
              title: "Instalación de estanterías en pared",
              href: `/${locale}/instalacion-estanterias-valencia`,
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
            ¿Quieres fijar un mueble a la pared en Valencia?
          </h2>
          <p className="mt-5 text-lg font-medium text-neutral-900">
            Envíanos fotos del mueble, pared y zona de instalación. Te damos un
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