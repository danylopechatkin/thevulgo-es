import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Drill,
  Hammer,
  MapPin,
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
    ? "Pequeños Trabajos de Taladro en Valencia | Desde 25€ | THEVULGO"
    : "Small Drilling Jobs in Valencia | From €25 | THEVULGO";

  const description = isEs
    ? "Pequeños trabajos de taladro en Valencia desde 25€. Perforación limpia para accesorios, soportes, estantes ligeros, tacos y pequeñas fijaciones."
    : "Small drilling jobs in Valencia from €25. Clean drilling for accessories, brackets, light shelves, wall plugs and small fixings.";

  return {
    title,
    description,
    keywords: isEs
      ? [
          "pequeños trabajos taladro Valencia",
          "taladrar pared Valencia",
          "perforación limpia Valencia",
          "hacer agujeros pared Valencia",
          "instalar accesorios pared Valencia",
          "manitas taladro Valencia",
          "fijaciones pared Valencia",
          "taladro para accesorios Valencia",
          "instalar tacos pared Valencia",
        ]
      : [
          "small drilling jobs Valencia",
          "clean drilling Valencia",
          "drill wall Valencia",
          "wall drilling handyman Valencia",
          "minor installs Valencia",
          "accessory drilling Valencia",
          "wall fittings Valencia",
          "wall plug installation Valencia",
        ],
    alternates: {
      canonical: `${siteUrl}/${locale}/services/repairs/small-drilling-jobs`,
      languages: {
        es: `${siteUrl}/es/services/repairs/small-drilling-jobs`,
        en: `${siteUrl}/en/services/repairs/small-drilling-jobs`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${siteUrl}/${locale}/services/repairs/small-drilling-jobs`,
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

export default async function SmallDrillingJobsPage({ params }: PageProps) {
  const { locale } = await params;
  const isEs = locale === "es";

  const pageUrl = `${siteUrl}/${locale}/services/repairs/small-drilling-jobs`;

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, quiero pedir presupuesto para pequeños trabajos de taladro en Valencia."
      : "Hi, I would like an estimate for small drilling jobs in Valencia."
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
          q: "¿Qué incluye un pequeño trabajo de taladro?",
          a: "Incluye perforación limpia para pequeñas fijaciones, accesorios, soportes, estantes ligeros y pequeñas instalaciones del hogar cuando el alcance es sencillo.",
        },
        {
          q: "¿Cuánto cuesta un pequeño trabajo de taladro en Valencia?",
          a: "El servicio empieza desde 25€. El precio final depende del número de agujeros, tipo de pared, acceso, material necesario y objeto a fijar.",
        },
        {
          q: "¿Podéis taladrar para accesorios de baño, cocina o pared?",
          a: "Sí. Se pueden hacer pequeños trabajos para accesorios, soportes, colgadores, estantes ligeros, guías, placas y fijaciones visibles.",
        },
        {
          q: "¿Trabajáis con azulejo, ladrillo, hormigón o pladur?",
          a: "Sí, pero cada superficie se revisa antes. El tipo de pared afecta a la fijación, herramienta y material necesario.",
        },
        {
          q: "¿Qué fotos tengo que enviar?",
          a: "Envía una foto general de la zona, una foto del objeto que quieres fijar, medidas aproximadas y explica cuántos puntos de taladro necesitas.",
        },
        {
          q: "¿Podéis traer tacos y tornillos?",
          a: "En muchos casos sí, pero depende del objeto, peso y tipo de pared. Si el accesorio trae sus fijaciones, envía foto para revisarlas antes.",
        },
        {
          q: "¿Se puede taladrar una pared con azulejos?",
          a: "Sí, pero se revisa con más cuidado porque el azulejo puede romperse si no se usa la técnica o broca adecuada. Siempre conviene enviar fotos de la zona.",
        },
      ]
    : [
        {
          q: "What is included in a small drilling job?",
          a: "It includes clean drilling for small fixings, accessories, brackets, light shelves and minor home installations when the scope is straightforward.",
        },
        {
          q: "How much does a small drilling job cost in Valencia?",
          a: "The service starts from €25. Final price depends on the number of holes, wall type, access, required material and the item being fixed.",
        },
        {
          q: "Can you drill for bathroom, kitchen or wall accessories?",
          a: "Yes. Small jobs can include accessories, brackets, hooks, light shelves, rails, plates and visible wall fixings.",
        },
        {
          q: "Do you work with tile, brick, concrete or drywall?",
          a: "Yes, but each surface is checked first. Wall type affects the fixing, tool and material needed.",
        },
        {
          q: "What photos should I send?",
          a: "Send one general photo of the area, one photo of the item you want fixed, approximate measurements and explain how many drilling points you need.",
        },
        {
          q: "Can you bring wall plugs and screws?",
          a: "In many cases yes, but it depends on the item, weight and wall type. If the accessory includes its own fixings, send a photo so they can be checked first.",
        },
        {
          q: "Can you drill into tiled walls?",
          a: "Yes, but tiled walls need more care because tiles can crack if the wrong bit or method is used. It is always best to send photos of the area first.",
        },
      ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: isEs
      ? "Pequeños trabajos de taladro en Valencia"
      : "Small drilling jobs in Valencia",
    description: isEs
      ? "Perforación limpia para pequeñas fijaciones, accesorios, soportes, estantes ligeros, tacos y pequeñas instalaciones del hogar en Valencia."
      : "Clean drilling for simple home fixes, accessories, brackets, light shelves, wall plugs and minor installs in Valencia.",
    serviceType: isEs ? "Pequeños trabajos de taladro" : "Small drilling jobs",
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
    areaServed: areas.map((area) => ({
      "@type": "Place",
      name: area,
    })),
    offers: {
      "@type": "Offer",
      price: "25",
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
        name: isEs ? "Pequeños trabajos de taladro" : "Small drilling jobs",
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
        "Desde 25€",
        "Perforación limpia",
        "Accesorios y pequeñas fijaciones",
        "Baño, cocina y detalles de pared",
      ]
    : [
        "From €25",
        "Clean drilling",
        "Accessories and small fixings",
        "Bathroom, kitchen and wall details",
      ];

  const included = isEs
    ? [
        "Revisión básica de la zona y superficie",
        "Marcado de puntos de fijación cuando aplica",
        "Perforación limpia para trabajos pequeños",
        "Preparación para tacos, anclajes o tornillos",
        "Instalación de accesorios simples cuando es posible",
        "Presupuesto claro según fotos, medidas y alcance",
      ]
    : [
        "Basic check of the area and surface",
        "Marking of fixing points where needed",
        "Clean drilling for small jobs",
        "Preparation for plugs, anchors or screws",
        "Simple accessory installation where possible",
        "Clear estimate based on photos, measurements and scope",
      ];

  const drillingSituations = isEs
    ? [
        "Instalar accesorios pequeños de baño o cocina",
        "Hacer agujeros para colgadores, ganchos o placas",
        "Fijar soportes ligeros en pared",
        "Preparar puntos para tacos y tornillos",
        "Colocar guías, topes o detalles visibles",
        "Ayudar con pequeñas instalaciones después de mudanza",
      ]
    : [
        "Installing small bathroom or kitchen accessories",
        "Drilling holes for hooks, hangers or plates",
        "Fixing light brackets to the wall",
        "Preparing points for wall plugs and screws",
        "Installing rails, stops or visible details",
        "Helping with small installations after moving in",
      ];

  const surfaceTypes = isEs
    ? [
        {
          title: "Azulejo",
          text: "Requiere más cuidado para evitar roturas. Se revisa la zona y el tipo de accesorio antes de taladrar.",
        },
        {
          title: "Ladrillo u obra",
          text: "Suele permitir fijaciones firmes, pero hay que elegir taco y broca según el peso y el objeto.",
        },
        {
          title: "Hormigón",
          text: "Puede necesitar herramienta adecuada y más tiempo, especialmente en paredes duras o estructurales.",
        },
        {
          title: "Pladur",
          text: "Necesita fijaciones específicas para evitar que el accesorio quede débil o dañe la pared.",
        },
      ]
    : [
        {
          title: "Tile",
          text: "Needs extra care to avoid cracks. The area and accessory type are checked before drilling.",
        },
        {
          title: "Brick or masonry",
          text: "Often allows firm fixings, but the plug and drill bit must match the weight and item.",
        },
        {
          title: "Concrete",
          text: "May require suitable tools and more time, especially on hard or structural walls.",
        },
        {
          title: "Drywall",
          text: "Needs specific fixings to avoid weak installation or wall damage.",
        },
      ];

  const processSteps = isEs
    ? [
        "Envías fotos de la zona y del objeto",
        "Indicas medidas y número de puntos",
        "Revisamos superficie, peso y tipo de fijación",
        "Te damos presupuesto antes de empezar",
        "Realizamos la perforación e instalación acordada",
      ]
    : [
        "You send photos of the area and item",
        "You indicate measurements and number of points",
        "We check surface, weight and fixing type",
        "You receive an estimate before the work starts",
        "We carry out the agreed drilling and installation",
      ];

  const notIncluded = isEs
    ? [
        "Instalaciones pesadas sin revisión previa",
        "Trabajos eléctricos o fontanería dentro de pared",
        "Garantía sobre accesorios de baja calidad o fijaciones incorrectas del fabricante",
        "Perforación en zonas con riesgo oculto sin información previa",
      ]
    : [
        "Heavy installations without prior review",
        "Electrical or plumbing work inside the wall",
        "Guarantee on low-quality accessories or incorrect manufacturer fixings",
        "Drilling in hidden-risk areas without prior information",
      ];

  const related = isEs
    ? [
        {
          title: "Instalación de tacos y anclajes",
          href: `/${locale}/services/repairs/wall-anchor-installation`,
        },
        {
          title: "Reparaciones en Valencia",
          href: `/${locale}/services/repairs`,
        },
        {
          title: "Instalación de estantes",
          href: `/${locale}/services/shelf-installation`,
        },
        {
          title: "Servicios handyman",
          href: `/${locale}/services`,
        },
      ]
    : [
        {
          title: "Wall anchor installation",
          href: `/${locale}/services/repairs/wall-anchor-installation`,
        },
        {
          title: "Repairs in Valencia",
          href: `/${locale}/services/repairs`,
        },
        {
          title: "Shelf installation",
          href: `/${locale}/services/shelf-installation`,
        },
        {
          title: "Handyman services",
          href: `/${locale}/services`,
        },
      ];

  return (
    <main className="min-h-screen bg-white text-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

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
              {isEs ? "Pequeños trabajos de taladro" : "Small drilling jobs"}{" "}
              <span className="text-yellow-500">
                {isEs ? "en Valencia" : "in Valencia"}
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-700">
              {isEs
                ? "Perforación limpia para pequeñas reparaciones del hogar, accesorios, soportes, estantes ligeros y pequeñas instalaciones visibles."
                : "Clean drilling for simple home fixes, accessories, brackets, light shelves and minor visible installs."}
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
              <Drill className="mb-6 h-12 w-12 text-black" />
              <p className="text-sm font-black uppercase tracking-widest">
                {isEs ? "Desde 25€" : "From €25"}
              </p>
              <h2 className="mt-3 text-3xl font-black">
                {isEs
                  ? "Taladro limpio. Fijación correcta. Mejor acabado."
                  : "Clean drilling. Correct fixing. Better finish."}
              </h2>
              <p className="mt-4 font-medium leading-7 text-neutral-900">
                {isEs
                  ? "Revisamos la zona, superficie y objeto para hacer pequeños puntos de fijación de forma ordenada y práctica."
                  : "We check the area, surface and item to create small fixing points in a clean and practical way."}
              </p>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: isEs ? "Taladro" : "Drilling",
                  text: isEs ? "Puntos limpios" : "Clean points",
                  icon: Drill,
                },
                {
                  title: isEs ? "Fijaciones" : "Fixings",
                  text: isEs ? "Tacos y tornillos" : "Plugs and screws",
                  icon: Hammer,
                },
                {
                  title: isEs ? "Superficie" : "Surface",
                  text: isEs ? "Revisión básica" : "Basic check",
                  icon: ShieldCheck,
                },
                {
                  title: isEs ? "Instalación" : "Install",
                  text: isEs ? "Accesorios simples" : "Simple accessories",
                  icon: Sparkles,
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
              title: isEs ? "Perforación limpia" : "Clean drilling",
              text: isEs
                ? "Pequeños puntos de taladro para accesorios, soportes y fijaciones visibles."
                : "Small drilling points for accessories, brackets and visible fixings.",
            },
            {
              title: isEs ? "Paredes y superficies" : "Walls and surfaces",
              text: isEs
                ? "Se revisa el tipo de pared para elegir una fijación adecuada al objeto."
                : "The wall type is checked to choose a suitable fixing for the item.",
            },
            {
              title: isEs ? "Presupuesto claro" : "Clear estimate",
              text: isEs
                ? "Envía fotos, medidas y número de puntos para valorar material y tiempo."
                : "Send photos, measurements and number of points to estimate material and time.",
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
            ? "Taladro limpio para pequeños accesorios, soportes y reparaciones del hogar"
            : "Clean drilling for small accessories, brackets and home fixes"}
        </h2>

        <div className="mt-6 space-y-5 text-lg leading-8 text-neutral-700">
          <p>
            {isEs
              ? "Muchos pequeños trabajos del hogar necesitan una perforación limpia y una fijación correcta: accesorios de baño, pequeños soportes, estantes ligeros, colgadores, placas, guías o detalles visibles."
              : "Many small home jobs need clean drilling and correct fixing: bathroom accessories, small brackets, light shelves, hooks, plates, rails or visible details."}
          </p>

          <p>
            {isEs
              ? "THEVULGO realiza pequeños trabajos de taladro en Valencia para pisos, casas, apartamentos de alquiler, oficinas, mudanzas y pequeñas mejoras visibles del hogar."
              : "THEVULGO provides small drilling jobs in Valencia for apartments, homes, rental properties, offices, move-ins and small visible home improvements."}
          </p>

          <p>
            {isEs
              ? "Antes de confirmar, puedes enviar fotos de la zona y del objeto que quieres fijar. Así se puede valorar la superficie, el número de puntos, el acceso y el material necesario."
              : "Before confirming, you can send photos of the area and the item you want fixed. This helps review the surface, number of points, access and required material."}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-16 md:px-8">
        <h2 className="text-3xl font-black md:text-4xl">
          {isEs
            ? "Servicio de taladro para fijaciones pequeñas en Valencia"
            : "Drilling service for small fixings in Valencia"}
        </h2>

        <div className="mt-6 space-y-6 text-lg leading-8 text-neutral-700">
          <p>
            {isEs
              ? "Un agujero mal hecho puede dejar una pared marcada, una fijación débil o un accesorio mal alineado. Por eso, incluso en trabajos pequeños, conviene revisar primero la superficie, el peso del objeto, el tipo de taco y la posición exacta antes de taladrar."
              : "A poorly drilled hole can leave the wall marked, create a weak fixing or leave an accessory misaligned. That is why even small jobs should start by checking the surface, item weight, wall plug type and exact position before drilling."}
          </p>

          <p>
            {isEs
              ? "Este servicio está pensado para clientes que necesitan pocos puntos de taladro pero quieren un resultado limpio: accesorios de baño, pequeños soportes, colgadores, rieles, placas, topes, guías, estantes ligeros o fijaciones visibles en casa."
              : "This service is designed for clients who need only a few drilling points but want a clean result: bathroom accessories, small brackets, hooks, rails, plates, stops, guides, light shelves or visible home fixings."}
          </p>

          <p>
            {isEs
              ? "En Valencia trabajamos con pisos de alquiler, viviendas particulares, apartamentos turísticos, oficinas pequeñas y mudanzas donde hay que instalar detalles concretos sin convertirlo en una obra grande."
              : "In Valencia we work with rental apartments, private homes, tourist apartments, small offices and move-ins where specific details need to be installed without turning it into a large job."}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-yellow-200 bg-white p-7 shadow-md">
            <ShieldCheck className="h-10 w-10 text-yellow-500" />
            <h2 className="mt-4 text-3xl font-black">
              {isEs ? "Cuándo conviene este servicio" : "When this service is useful"}
            </h2>

            <div className="mt-6 space-y-4">
              {drillingSituations.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-yellow-500" />
                  <p className="font-semibold leading-7 text-neutral-800">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-yellow-200 bg-yellow-50 p-7 shadow-md">
            <Wrench className="h-10 w-10 text-yellow-500" />
            <h2 className="mt-4 text-3xl font-black">
              {isEs ? "Cómo funciona" : "How it works"}
            </h2>

            <div className="mt-6 space-y-4">
              {processSteps.map((step, index) => (
                <div key={step} className="flex items-start gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-yellow-400 font-black text-black">
                    {index + 1}
                  </span>
                  <p className="font-semibold leading-7 text-neutral-800">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <h2 className="text-3xl font-black md:text-4xl">
            {isEs ? "Superficies que revisamos antes de taladrar" : "Surfaces we check before drilling"}
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-4">
            {surfaceTypes.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-yellow-200 bg-yellow-50 p-6 shadow-sm"
              >
                <h3 className="text-xl font-black">{item.title}</h3>
                <p className="mt-3 leading-7 text-neutral-700">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="rounded-3xl border border-yellow-200 bg-white p-7 shadow-md md:p-10">
          <h2 className="text-3xl font-black md:text-4xl">
            {isEs ? "Qué no incluye este servicio" : "What this service does not include"}
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {notIncluded.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-2xl bg-yellow-50 p-5">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-yellow-500" />
                <p className="font-bold leading-7 text-neutral-800">{item}</p>
              </div>
            ))}
          </div>
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
            {isEs ? "Desde 25€" : "From €25"}
          </p>
          <h2 className="mt-3 text-4xl font-black">
            {isEs
              ? "Envía fotos para valorar el trabajo"
              : "Send photos to check the job"}
          </h2>
          <p className="mt-6 text-lg font-medium leading-8 text-neutral-900">
            {isEs
              ? "Para calcular el precio, envía una foto general, foto del objeto, medidas aproximadas y cuántos puntos de taladro necesitas."
              : "To estimate the price, send a general photo, photo of the item, approximate measurements and how many drilling points you need."}
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
              ? "¿Necesitas hacer pequeños agujeros limpios?"
              : "Need small clean drilling points?"}
          </h2>
          <p className="mt-5 text-lg font-medium text-neutral-900">
            {isEs
              ? "Envía fotos de la zona y del objeto. Te damos un presupuesto claro antes de empezar."
              : "Send photos of the area and item. Get a clear estimate before the work starts."}
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