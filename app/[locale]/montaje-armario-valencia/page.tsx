import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  PackageCheck,
  ShieldCheck,
  Wrench,
  HelpCircle,
  MapPin,
  Star,
  Ruler,
  DoorOpen,
} from "lucide-react";

type PageProps = {
  params: Promise<{ locale: string }>;
};

const siteUrl = "https://www.thevulgo.es";
const phoneNumber = "34610076942";
const pagePath = "/montaje-armario-valencia";

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

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";

  return {
    title: isEs
      ? "Montaje de Armario en Valencia | Desde 69€ | THEVULGO"
      : "Wardrobe Assembly in Valencia | From €69 | THEVULGO",
    description: isEs
      ? "Montaje de armarios en Valencia desde 69€. Armarios correderos, armarios IKEA, puertas, cajones, baldas, alineación y fijación a pared."
      : "Wardrobe assembly in Valencia from €69. Sliding wardrobes, IKEA wardrobes, doors, drawers, shelves, alignment and wall fixing.",
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `${siteUrl}/${locale}${pagePath}`,
      languages: {
        es: `${siteUrl}/es${pagePath}`,
        en: `${siteUrl}/en${pagePath}`,
        "x-default": `${siteUrl}/es${pagePath}`,
      },
    },
    openGraph: {
      title: isEs
        ? "Montaje de Armario en Valencia | THEVULGO"
        : "Wardrobe Assembly in Valencia | THEVULGO",
      description: isEs
        ? "Montaje y alineación de armarios correderos, estándar e IKEA en Valencia."
        : "Assembly and alignment of sliding, standard and IKEA wardrobes in Valencia.",
      url: `${siteUrl}/${locale}${pagePath}`,
      siteName: "THEVULGO",
      locale: isEs ? "es_ES" : "en_GB",
      type: "website",
    },
  };
}

export default async function WardrobeAssemblyValenciaPage({
  params,
}: PageProps) {
  const { locale } = await params;
  const isEs = locale === "es";

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, quiero un presupuesto para montaje de armario en Valencia."
      : "Hi, I would like a quote for wardrobe assembly in Valencia."
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappText}`;

  const faqs = isEs
    ? [
        {
          q: "¿Cuánto cuesta montar un armario en Valencia?",
          a: "El montaje de armario empieza desde 69€. El precio final depende del tamaño, número de puertas, cajones, tipo de armario, si es corredero o estándar y si hace falta fijarlo a la pared.",
        },
        {
          q: "¿Montan armarios correderos?",
          a: "Sí. Montamos armarios con puertas correderas, revisando guías, ruedas, alineación, cierre y estabilidad de la estructura.",
        },
        {
          q: "¿Montan armarios IKEA o de otras tiendas?",
          a: "Sí. Montamos armarios IKEA, Leroy Merlin, Amazon, Conforama, JYSK, Bauhaus, Carrefour y otros muebles tipo flat-pack.",
        },
        {
          q: "¿Pueden ajustar puertas y cajones?",
          a: "Sí. Hacemos ajuste básico de puertas, bisagras, cajones, guías, baldas y alineación general del armario.",
        },
        {
          q: "¿Hay que fijar el armario a la pared?",
          a: "En muchos casos es recomendable por seguridad, especialmente armarios altos, estrechos o pesados. Podemos fijarlo si la pared lo permite.",
        },
        {
          q: "¿Qué necesito enviar para pedir presupuesto?",
          a: "Envíanos fotos del armario, modelo, medidas aproximadas, número de cajas y ubicación. Así podemos darte un presupuesto más claro.",
        },
      ]
    : [
        {
          q: "How much does wardrobe assembly in Valencia cost?",
          a: "Wardrobe assembly starts from €69. The final price depends on size, number of doors, drawers, wardrobe type, whether it is sliding or standard, and whether wall fixing is needed.",
        },
        {
          q: "Do you assemble sliding wardrobes?",
          a: "Yes. We assemble sliding wardrobes, checking rails, wheels, alignment, closing and overall structure stability.",
        },
        {
          q: "Do you assemble IKEA wardrobes or other brands?",
          a: "Yes. We assemble IKEA, Leroy Merlin, Amazon, Conforama, JYSK, Bauhaus, Carrefour and other flat-pack wardrobes and furniture.",
        },
        {
          q: "Can you adjust doors and drawers?",
          a: "Yes. We can adjust doors, hinges, drawers, rails, shelves and general wardrobe alignment.",
        },
        {
          q: "Does the wardrobe need to be fixed to the wall?",
          a: "In many cases it is recommended for safety, especially for tall, narrow or heavy wardrobes. We can fix it if the wall allows it.",
        },
        {
          q: "What should I send for a quote?",
          a: "Send photos of the wardrobe, model, approximate measurements, number of boxes and location. This helps us give a clearer estimate.",
        },
      ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: isEs
      ? "Montaje de Armario en Valencia"
      : "Wardrobe Assembly in Valencia",
    serviceType: isEs ? "Montaje de armario" : "Wardrobe assembly",
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
      price: "69",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
    },
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
        name: isEs ? "Montaje de Armario en Valencia" : "Wardrobe Assembly in Valencia",
        item: `${siteUrl}/${locale}${pagePath}`,
      },
    ],
  };

  return (
    <main className="bg-white text-neutral-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="relative overflow-hidden border-b border-yellow-200 bg-gradient-to-br from-yellow-50 via-white to-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-2 md:px-8 md:py-24">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-yellow-300 bg-yellow-100 px-4 py-2 text-sm font-black text-neutral-900 shadow-sm">
              <MapPin className="h-4 w-4 text-yellow-600" />
              {isEs
                ? "Armarios correderos · Estándar · IKEA · Flat-pack"
                : "Sliding wardrobes · Standard · IKEA · Flat-pack"}
            </div>

            <h1 className="text-4xl font-black tracking-tight md:text-6xl">
              {isEs ? (
                <>
                  Montaje de armario{" "}
                  <span className="text-yellow-500">en Valencia</span>
                </>
              ) : (
                <>
                  Wardrobe assembly{" "}
                  <span className="text-yellow-500">in Valencia</span>
                </>
              )}
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-700">
              {isEs
                ? "Montaje y alineación de armarios correderos, estándar e IKEA desde 69€. Instalamos estructura, puertas, cajones, baldas y revisamos la estabilidad para uso diario."
                : "Assembly and alignment of sliding, standard and IKEA wardrobes from €69. We install the structure, doors, drawers, shelves and check stability for everyday use."}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappUrl}
                className="inline-flex items-center justify-center rounded-xl bg-yellow-400 px-6 py-4 font-black text-black shadow-md transition hover:scale-105 hover:bg-yellow-300"
              >
                {isEs ? "Pedir presupuesto por WhatsApp" : "Request estimate by WhatsApp"}
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>

              <a
                href={`tel:+${phoneNumber}`}
                className="inline-flex items-center justify-center rounded-xl border border-neutral-300 bg-white px-6 py-4 font-black text-neutral-950 shadow-sm transition hover:scale-105 hover:border-yellow-400"
              >
                {isEs ? "Llamar ahora" : "Call now"}
              </a>
            </div>

            <div className="mt-8 grid gap-3 text-sm font-semibold text-neutral-700 sm:grid-cols-2">
              {(isEs
                ? [
                    "Montaje desde 69€",
                    "Armarios correderos",
                    "Armarios estándar",
                    "Ajuste de puertas y cajones",
                    "Fijación a pared si hace falta",
                    "Valencia y alrededores",
                  ]
                : [
                    "Assembly from €69",
                    "Sliding wardrobes",
                    "Standard wardrobes",
                    "Door and drawer adjustment",
                    "Wall fixing if needed",
                    "Valencia and nearby areas",
                  ]
              ).map((item) => (
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
                {isEs
                  ? "Armario montado, alineado y estable."
                  : "Wardrobe assembled, aligned and stable."}
              </h2>
              <p className="mt-4 font-medium leading-7 text-neutral-900">
                {isEs
                  ? "Montamos la estructura, alineamos puertas, ajustamos cajones y dejamos el armario listo para uso diario."
                  : "We assemble the structure, align doors, adjust drawers and leave the wardrobe ready for everyday use."}
              </p>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {(isEs
                ? [
                    ["Puertas correderas", "Guías y puertas correderas"],
                    ["Alineación", "Bisagras, cajones y cierre"],
                    ["Estructura estable", "Fijación si es necesario"],
                    ["Presupuesto rápido", "Respuesta por WhatsApp"],
                  ]
                : [
                    ["Sliding doors", "Rails and sliding doors"],
                    ["Alignment", "Hinges, drawers and closing"],
                    ["Stable structure", "Fixing if needed"],
                    ["Fast estimate", "Reply by WhatsApp"],
                  ]
              ).map(([title, text]) => (
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
          {(isEs
            ? [
                {
                  icon: Wrench,
                  title: "Montaje completo",
                  text: "Estructura, puertas, cajones, baldas y accesorios.",
                },
                {
                  icon: Ruler,
                  title: "Alineación correcta",
                  text: "Ajustamos puertas correderas, bisagras y cajones.",
                },
                {
                  icon: ShieldCheck,
                  title: "Estructura estable",
                  text: "Revisamos estabilidad y fijación para uso diario.",
                },
                {
                  icon: Star,
                  title: "Precio claro",
                  text: "Presupuesto antes del trabajo según fotos y dificultad.",
                },
              ]
            : [
                {
                  icon: Wrench,
                  title: "Full assembly",
                  text: "Structure, doors, drawers, shelves and accessories.",
                },
                {
                  icon: Ruler,
                  title: "Correct alignment",
                  text: "We adjust sliding doors, hinges and drawers.",
                },
                {
                  icon: ShieldCheck,
                  title: "Stable structure",
                  text: "We check stability and fixing for everyday use.",
                },
                {
                  icon: Star,
                  title: "Clear price",
                  text: "Estimate before the job based on photos and difficulty.",
                },
              ]
          ).map((item) => (
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
          {isEs
            ? "Montaje profesional de armarios en Valencia"
            : "Professional wardrobe assembly in Valencia"}
        </h2>

        <div className="mt-6 space-y-5 text-lg leading-8 text-neutral-700">
          <p>
            {isEs
              ? "En THEVULGO realizamos montaje de armarios en Valencia para pisos, casas, apartamentos, oficinas y propiedades de alquiler. Montamos armarios correderos, armarios estándar, armarios tipo flat-pack, armarios IKEA y muebles de almacenamiento de diferentes marcas."
              : "At THEVULGO, we provide wardrobe assembly in Valencia for flats, houses, apartments, offices and rental properties. We assemble sliding wardrobes, standard wardrobes, flat-pack wardrobes, IKEA wardrobes and storage furniture from different brands."}
          </p>

          <p>
            {isEs
              ? "Un armario necesita quedar bien alineado, estable y cómodo para uso diario. Revisamos la estructura, puertas, bisagras, guías, cajones, baldas y cierre."
              : "A wardrobe needs to be well aligned, stable and comfortable for everyday use. We check the structure, doors, hinges, rails, drawers, shelves and closing."}
          </p>

          <p>
            {isEs
              ? "También podemos fijar el armario a la pared cuando sea recomendable por seguridad. Esto es importante en armarios altos, estrechos, pesados o en habitaciones con uso frecuente."
              : "We can also fix the wardrobe to the wall when it is recommended for safety. This is important for tall, narrow or heavy wardrobes, or rooms with frequent use."}
          </p>
        </div>
      </section>

      <section className="bg-yellow-50 py-16">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <h2 className="text-3xl font-black md:text-4xl">
            {isEs ? "¿Qué incluye el montaje?" : "What does the assembly include?"}
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {(isEs
              ? [
                  "Revisión de piezas e instrucciones",
                  "Montaje de estructura principal",
                  "Instalación de puertas estándar",
                  "Instalación de puertas correderas",
                  "Ajuste de cajones y guías",
                  "Montaje de baldas y accesorios",
                  "Fijación a pared si hace falta",
                  "Comprobación final de estabilidad",
                  "Presupuesto claro antes del trabajo",
                ]
              : [
                  "Checking parts and instructions",
                  "Main structure assembly",
                  "Standard door installation",
                  "Sliding door installation",
                  "Drawer and rail adjustment",
                  "Shelves and accessories assembly",
                  "Wall fixing if needed",
                  "Final stability check",
                  "Clear estimate before the job",
                ]
            ).map((item) => (
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
          {isEs ? "Servicios relacionados" : "Related services"}
        </h2>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {(isEs
            ? [
                {
                  title: "Montaje de muebles IKEA",
                  href: `/${locale}/montaje-muebles-ikea-valencia`,
                },
                {
                  title: "Montaje de muebles en Valencia",
                  href: `/${locale}/montaje-muebles-valencia`,
                },
                {
                  title: "Instalación de armarios",
                  href: `/${locale}/instalacion-armarios-valencia`,
                },
                {
                  title: "Montaje de estanterías",
                  href: `/${locale}/montaje-estanterias-valencia`,
                },
                {
                  title: "Preparación muebles mudanza",
                  href: `/${locale}/preparacion-muebles-mudanza-valencia`,
                },
                {
                  title: "Servicios handyman",
                  href: `/${locale}/services`,
                },
              ]
            : [
                {
                  title: "IKEA furniture assembly",
                  href: `/${locale}/montaje-muebles-ikea-valencia`,
                },
                {
                  title: "Furniture assembly in Valencia",
                  href: `/${locale}/montaje-muebles-valencia`,
                },
                {
                  title: "Wardrobe installation",
                  href: `/${locale}/instalacion-armarios-valencia`,
                },
                {
                  title: "Shelf assembly",
                  href: `/${locale}/montaje-estanterias-valencia`,
                },
                {
                  title: "Furniture moving preparation",
                  href: `/${locale}/preparacion-muebles-mudanza-valencia`,
                },
                {
                  title: "Handyman services",
                  href: `/${locale}/services`,
                },
              ]
          ).map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group rounded-2xl border border-yellow-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-yellow-400 hover:shadow-md"
            >
              <p className="text-xl font-black">{item.title}</p>
              <p className="mt-3 inline-flex items-center font-bold text-neutral-700 group-hover:text-black">
                {isEs ? "Ver servicio" : "View service"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-yellow-400 py-16 text-black">
        <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
          <p className="text-sm font-black uppercase tracking-widest">
            {isEs ? "Desde 69€" : "From €69"}
          </p>
          <h2 className="mt-3 text-4xl font-black">
            {isEs
              ? "Presupuesto para montar armario en Valencia"
              : "Wardrobe assembly estimate in Valencia"}
          </h2>
          <p className="mt-6 text-lg font-medium leading-8 text-neutral-900">
            {isEs
              ? "El precio depende del tipo de armario, tamaño, número de puertas, cajones, accesorios, dificultad y si hace falta fijación a pared."
              : "The price depends on wardrobe type, size, number of doors, drawers, accessories, difficulty and whether wall fixing is needed."}
          </p>

          <a
            href={whatsappUrl}
            className="mt-8 inline-flex items-center justify-center rounded-xl bg-black px-7 py-4 font-black text-white shadow-md transition hover:scale-105"
          >
            {isEs ? "Enviar fotos y pedir precio" : "Send photos and request price"}
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <h2 className="text-3xl font-black md:text-4xl">
          {isEs ? "Zonas donde trabajamos" : "Service areas"}
        </h2>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-neutral-700">
          {isEs
            ? "Realizamos montaje de armarios en Valencia ciudad y alrededores."
            : "We provide wardrobe assembly in Valencia city and nearby areas."}
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
            {isEs ? "Preguntas frecuentes" : "Frequently asked questions"}
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

      <section className="bg-yellow-400 py-16">
        <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
          <h2 className="text-4xl font-black tracking-tight">
            {isEs
              ? "¿Quieres montar un armario en Valencia?"
              : "Need wardrobe assembly in Valencia?"}
          </h2>
          <p className="mt-5 text-lg font-medium text-neutral-900">
            {isEs
              ? "Envíanos fotos del armario, cajas o modelo. Te damos un presupuesto claro antes de empezar."
              : "Send us photos of the wardrobe, boxes or model. We will give you a clear estimate before starting."}
          </p>

          <a
            href={whatsappUrl}
            className="mt-8 inline-flex items-center justify-center rounded-xl bg-black px-8 py-4 font-black text-white shadow-xl transition hover:scale-105"
          >
            {isEs ? "Pedir presupuesto ahora" : "Request estimate now"}
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>
    </main>
  );
}