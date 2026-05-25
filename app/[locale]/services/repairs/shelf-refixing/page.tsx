import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Drill,
  MapPin,
  Package,
  Ruler,
  ShieldCheck,
  Sparkles,
  Wrench,
} from "lucide-react";

type PageProps = {
  params: Promise<{ locale: string }>;
};

const siteUrl = "https://www.thevulgo.es";
const phoneNumber = "34610076942";

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";

  const title = isEs
    ? "Reajuste de Estantes en Valencia | Desde 35€ | THEVULGO"
    : "Shelf Re-fixing in Valencia | From €35 | THEVULGO";

  const description = isEs
    ? "Reajuste de estantes flojos o inestables en Valencia desde 35€. Reapriete, reposicionamiento y pequeñas correcciones para estantes pequeños."
    : "Shelf re-fixing in Valencia from €35. Re-tightening, repositioning and small corrections for loose or unstable small shelves.";

  return {
    title,
    description,
    keywords: isEs
      ? [
          "reajuste estante Valencia",
          "arreglar estante flojo Valencia",
          "estante inestable Valencia",
          "reparar estante pared Valencia",
          "recolocar estante Valencia",
          "manitas estantes Valencia",
          "reparación estantería Valencia",
        ]
      : [
          "shelf refixing Valencia",
          "fix loose shelf Valencia",
          "unstable shelf repair Valencia",
          "wall shelf repair Valencia",
          "reposition shelf Valencia",
          "handyman shelf repair Valencia",
          "small shelf fix Valencia",
        ],
    alternates: {
      canonical: `${siteUrl}/${locale}/services/repairs/shelf-refixing`,
      languages: {
        es: `${siteUrl}/es/services/repairs/shelf-refixing`,
        en: `${siteUrl}/en/services/repairs/shelf-refixing`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${siteUrl}/${locale}/services/repairs/shelf-refixing`,
      siteName: "THEVULGO",
      locale: isEs ? "es_ES" : "en_US",
      type: "website",
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function ShelfRefixingPage({ params }: PageProps) {
  const { locale } = await params;
  const isEs = locale === "es";

  const pageUrl = `${siteUrl}/${locale}/services/repairs/shelf-refixing`;

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, quiero pedir presupuesto para reajuste de un estante flojo o inestable en Valencia."
      : "Hi, I would like an estimate for re-fixing a loose or unstable shelf in Valencia."
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappText}`;

  const areas = [
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

  const faqItems = isEs
    ? [
        {
          q: "¿Qué incluye el reajuste de un estante?",
          a: "Incluye revisión del estante, soportes, tornillos, tacos o anclajes existentes, reapriete, pequeñas correcciones y reposicionamiento simple cuando el caso lo permite.",
        },
        {
          q: "¿Cuánto cuesta arreglar un estante flojo en Valencia?",
          a: "El servicio empieza desde 35€. El precio final depende del tipo de estante, pared, peso, número de soportes, estado de los anclajes y si hace falta material adicional.",
        },
        {
          q: "¿Podéis arreglar un estante que se mueve?",
          a: "Sí. En muchos casos se puede reapretar, reforzar o corregir la fijación si el problema es menor y la pared sigue permitiendo una instalación segura.",
        },
        {
          q: "¿Se puede reposicionar un estante?",
          a: "Sí, cuando el alcance es sencillo. Si los agujeros anteriores están dañados o la posición nueva requiere otros anclajes, se valora antes de confirmar.",
        },
        {
          q: "¿Trabajáis con estantes en pladur?",
          a: "Sí, pero depende del peso, tipo de soporte y fijación existente. En pladur puede hacer falta usar anclajes específicos.",
        },
        {
          q: "¿Qué fotos tengo que enviar?",
          a: "Envía una foto general del estante, fotos de los soportes, una foto de la pared y un vídeo corto mostrando el movimiento o inestabilidad.",
        },
      ]
    : [
        {
          q: "What is included in shelf re-fixing?",
          a: "It includes checking the shelf, brackets, screws, wall plugs or existing anchors, re-tightening, small corrections and simple repositioning where suitable.",
        },
        {
          q: "How much does fixing a loose shelf cost in Valencia?",
          a: "The service starts from €35. Final price depends on shelf type, wall type, weight, number of brackets, anchor condition and whether extra material is needed.",
        },
        {
          q: "Can you fix a shelf that moves?",
          a: "Yes. In many cases the shelf can be tightened, reinforced or corrected if the issue is minor and the wall still allows safe installation.",
        },
        {
          q: "Can a shelf be repositioned?",
          a: "Yes, when the scope is simple. If old holes are damaged or the new position needs different anchors, it is reviewed before confirming.",
        },
        {
          q: "Do you work with drywall shelves?",
          a: "Yes, but it depends on weight, bracket type and existing fixing. Drywall may require specific anchors.",
        },
        {
          q: "What photos should I send?",
          a: "Send one general photo of the shelf, photos of the brackets, one photo of the wall and a short video showing the movement or instability.",
        },
      ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: isEs ? "Reajuste de estantes en Valencia" : "Shelf re-fixing in Valencia",
    description: isEs
      ? "Reapriete, reposicionamiento y pequeñas correcciones para estantes flojos o inestables en Valencia."
      : "Re-tightening, repositioning and small corrections for loose or unstable shelves in Valencia.",
    serviceType: isEs ? "Reajuste de estantes" : "Shelf re-fixing",
    url: pageUrl,
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: "THEVULGO",
      url: siteUrl,
      telephone: "+34610076942",
      priceRange: "€€",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Valencia",
        addressRegion: "Valencia",
        addressCountry: "ES",
      },
    },
    areaServed: areas,
    offers: {
      "@type": "Offer",
      price: "35",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      url: pageUrl,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: isEs ? "Inicio" : "Home",
        item: `${siteUrl}/${locale}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: isEs ? "Servicios" : "Services",
        item: `${siteUrl}/${locale}/services`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: isEs ? "Reparaciones" : "Repairs",
        item: `${siteUrl}/${locale}/services/repairs`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: isEs ? "Reajuste de estantes" : "Shelf re-fixing",
        item: pageUrl,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  const heroPoints = isEs
    ? [
        "Desde 35€",
        "Estantes flojos o inestables",
        "Reapriete y reposicionamiento",
        "Mejor estabilidad y uso diario",
      ]
    : [
        "From €35",
        "Loose or unstable shelves",
        "Re-tightening and repositioning",
        "Better stability and everyday use",
      ];

  const included = isEs
    ? [
        "Revisión básica del estante y soportes",
        "Comprobación de tornillos, tacos o anclajes",
        "Reapriete de fijaciones cuando es posible",
        "Reposicionamiento simple si el caso lo permite",
        "Corrección de pequeñas inestabilidades",
        "Presupuesto claro según fotos, vídeo y alcance",
      ]
    : [
        "Basic check of shelf and brackets",
        "Inspection of screws, plugs or anchors",
        "Re-tightening of fixings where possible",
        "Simple repositioning if suitable",
        "Correction of small stability issues",
        "Clear estimate based on photos, video and scope",
      ];

  const related = isEs
    ? [
        { title: "Instalación de estantes", href: `/${locale}/services/shelf-installation` },
        { title: "Instalación de tacos y anclajes", href: `/${locale}/services/repairs/wall-anchor-installation` },
        { title: "Reparaciones en Valencia", href: `/${locale}/services/repairs` },
        { title: "Pladur y paredes", href: `/${locale}/services/drywall` },
      ]
    : [
        { title: "Shelf installation", href: `/${locale}/services/shelf-installation` },
        { title: "Wall anchor installation", href: `/${locale}/services/repairs/wall-anchor-installation` },
        { title: "Repairs in Valencia", href: `/${locale}/services/repairs` },
        { title: "Drywall and walls", href: `/${locale}/services/drywall` },
      ];

  return (
    <main className="min-h-screen bg-white text-black">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="relative overflow-hidden border-b border-yellow-200 bg-gradient-to-br from-yellow-50 via-white to-white">
        <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-yellow-200/40 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-2 md:px-8 md:py-24">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-yellow-300 bg-white px-4 py-2 text-sm font-black text-neutral-900 shadow-sm">
              <MapPin className="h-4 w-4 text-yellow-600" />
              {isEs
                ? "THEVULGO • Reparaciones en Valencia"
                : "THEVULGO • Repairs in Valencia"}
            </div>

            <h1 className="text-4xl font-black tracking-tight md:text-6xl">
              {isEs ? "Reajuste de estantes" : "Shelf re-fixing"}{" "}
              <span className="text-yellow-500">
                {isEs ? "en Valencia" : "in Valencia"}
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-700">
              {isEs
                ? "Reapriete o reposicionamiento de estantes pequeños flojos o inestables. Ideal para mejorar estabilidad, seguridad y uso diario sin cambiar todo el sistema."
                : "Re-tightening or repositioning of loose or unstable small shelves. Ideal for improving stability, safety and everyday use without replacing the full setup."}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappUrl}
                className="inline-flex items-center justify-center rounded-xl bg-yellow-400 px-6 py-4 font-black text-black shadow-md transition hover:scale-105 hover:bg-yellow-300"
              >
                {isEs ? "Pedir presupuesto por WhatsApp" : "Get estimate by WhatsApp"}
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>

              <Link
                href={`/${locale}/services/repairs`}
                className="inline-flex items-center justify-center rounded-xl border border-neutral-300 bg-white px-6 py-4 font-black text-neutral-950 shadow-sm transition hover:scale-105 hover:border-yellow-400"
              >
                {isEs ? "Ver reparaciones" : "View repairs"}
              </Link>
            </div>

            <div className="mt-8 grid gap-3 text-sm font-semibold text-neutral-700 sm:grid-cols-2">
              {heroPoints.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-yellow-500" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-yellow-300 bg-white p-4 shadow-2xl md:p-6">
            <div className="rounded-2xl bg-yellow-400 p-8 text-black shadow-md">
              <Package className="mb-6 h-12 w-12 text-black" />
              <p className="text-sm font-black uppercase tracking-widest">
                {isEs ? "Desde 35€" : "From €35"}
              </p>
              <h2 className="mt-3 text-3xl font-black">
                {isEs
                  ? "Estante más firme. Mejor fijación. Uso más seguro."
                  : "Firmer shelf. Better fixing. Safer everyday use."}
              </h2>
              <p className="mt-4 font-medium leading-7 text-neutral-900">
                {isEs
                  ? "Revisamos soportes, pared y anclajes para corregir estantes pequeños que se han aflojado con el tiempo."
                  : "We check brackets, wall and anchors to correct small shelves that have become loose over time."}
              </p>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: isEs ? "Estantes" : "Shelves",
                  text: isEs ? "Pequeños y medianos" : "Small and medium",
                  icon: Package,
                },
                {
                  title: isEs ? "Anclajes" : "Anchors",
                  text: isEs ? "Revisión básica" : "Basic check",
                  icon: ShieldCheck,
                },
                {
                  title: isEs ? "Ajuste" : "Adjustment",
                  text: isEs ? "Reapriete simple" : "Simple tightening",
                  icon: Wrench,
                },
                {
                  title: isEs ? "Alineación" : "Alignment",
                  text: isEs ? "Mejor posición" : "Better position",
                  icon: Ruler,
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-yellow-200 bg-yellow-50 p-4 shadow-sm"
                >
                  <item.icon className="h-6 w-6 text-yellow-500" />
                  <p className="mt-3 font-black">{item.title}</p>
                  <p className="mt-1 text-sm text-neutral-700">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: isEs ? "Estante flojo" : "Loose shelf",
              text: isEs
                ? "Revisión de estantes que se mueven, vibran, bajan o no quedan firmes."
                : "Checking shelves that move, vibrate, sag or do not stay firmly fixed.",
            },
            {
              title: isEs ? "Mejor estabilidad" : "Better stability",
              text: isEs
                ? "Pequeñas correcciones para mejorar la fijación y reducir el movimiento."
                : "Small corrections to improve the fixing and reduce movement.",
            },
            {
              title: isEs ? "Presupuesto claro" : "Clear estimate",
              text: isEs
                ? "Envía fotos y vídeo para valorar pared, soportes, peso y estado del estante."
                : "Send photos and video to review the wall, brackets, weight and shelf condition.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-yellow-300 bg-white p-7 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
            >
              <BadgeCheck className="h-8 w-8 text-yellow-500" />
              <h2 className="mt-4 text-xl font-black">{item.title}</h2>
              <p className="mt-3 leading-7 text-neutral-700">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-10 md:px-8">
        <h2 className="text-3xl font-black tracking-tight md:text-4xl">
          {isEs
            ? "Reapriete y reposicionamiento de estantes pequeños flojos o inestables"
            : "Re-tightening and repositioning loose or unstable small shelves"}
        </h2>

        <div className="mt-6 space-y-5 text-lg leading-8 text-neutral-700">
          <p>
            {isEs
              ? "Un estante flojo puede parecer un problema pequeño, pero si se mueve, baja o no está bien fijado, puede dañar la pared o terminar cayendo. Muchas veces se puede mejorar con un reapriete, nuevos tacos o una pequeña corrección de posición."
              : "A loose shelf can seem like a small issue, but if it moves, sags or is not fixed correctly, it can damage the wall or eventually fall. In many cases it can be improved with re-tightening, new plugs or a small position correction."}
          </p>

          <p>
            {isEs
              ? "THEVULGO realiza reajuste de estantes en Valencia para pisos, casas, apartamentos de alquiler, cocinas, baños, salones, oficinas y pequeñas mejoras del hogar."
              : "THEVULGO provides shelf re-fixing in Valencia for apartments, homes, rental properties, kitchens, bathrooms, living rooms, offices and small home improvements."}
          </p>

          <p>
            {isEs
              ? "Antes de confirmar, puedes enviar fotos del estante, los soportes, la pared y un vídeo corto mostrando el movimiento. Así se puede valorar si basta con ajustar o si hace falta reinstalar con otros anclajes."
              : "Before confirming, you can send photos of the shelf, brackets, wall and a short video showing the movement. This helps check whether tightening is enough or if reinstallation with different anchors is needed."}
          </p>
        </div>
      </section>

      <section className="bg-yellow-50 py-16">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <h2 className="text-3xl font-black md:text-4xl">
            {isEs ? "Qué incluye el servicio" : "What is included"}
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {included.map((item) => (
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

      <section className="bg-yellow-400 py-16 text-black">
        <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
          <p className="text-sm font-black uppercase tracking-widest">
            {isEs ? "Desde 35€" : "From €35"}
          </p>
          <h2 className="mt-3 text-4xl font-black">
            {isEs
              ? "Envía fotos y vídeo para valorar el estante"
              : "Send photos and video to check the shelf"}
          </h2>
          <p className="mt-6 text-lg font-medium leading-8 text-neutral-900">
            {isEs
              ? "Para calcular el precio, envía una foto general, fotos de los soportes y un vídeo corto mostrando cómo se mueve el estante."
              : "To estimate the price, send a general photo, photos of the brackets and a short video showing how the shelf moves."}
          </p>

          <a
            href={whatsappUrl}
            className="mt-8 inline-flex items-center justify-center rounded-xl bg-black px-7 py-4 font-black text-white shadow-md transition hover:scale-105"
          >
            {isEs ? "Pedir precio por WhatsApp" : "Request price by WhatsApp"}
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <h2 className="text-3xl font-black md:text-4xl">
          {isEs ? "Zonas donde trabajamos" : "Areas we serve"}
        </h2>

        <div className="mt-8 flex flex-wrap gap-3">
          {areas.map((area) => (
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
            {faqItems.map((item) => (
              <details
                key={item.q}
                className="group rounded-2xl border border-yellow-200 bg-white p-6 shadow-sm"
              >
                <summary className="cursor-pointer list-none font-black">
                  {item.q}
                </summary>
                <p className="mt-4 leading-7 text-neutral-700">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <h2 className="text-3xl font-black md:text-4xl">
          {isEs ? "Servicios relacionados" : "Related services"}
        </h2>

        <div className="mt-8 grid gap-5 md:grid-cols-4">
          {related.map((item) => (
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

      <section className="bg-yellow-400 py-16">
        <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
          <h2 className="text-4xl font-black tracking-tight">
            {isEs
              ? "¿Tienes un estante flojo o inestable?"
              : "Do you have a loose or unstable shelf?"}
          </h2>
          <p className="mt-5 text-lg font-medium text-neutral-900">
            {isEs
              ? "Envía fotos y un vídeo corto. Te damos un presupuesto claro antes de empezar."
              : "Send photos and a short video. Get a clear estimate before the work starts."}
          </p>

          <a
            href={whatsappUrl}
            className="mt-8 inline-flex items-center justify-center rounded-xl bg-black px-8 py-4 font-black text-white shadow-xl transition hover:scale-105"
          >
            {isEs ? "Pedir presupuesto ahora" : "Get estimate now"}
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>
    </main>
  );
}