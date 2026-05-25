import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  ChefHat,
  MapPin,
  Package,
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
    ? "Pequeños Arreglos de Cocina en Valencia | Desde 35€ | THEVULGO"
    : "Kitchen Minor Fixes in Valencia | From €35 | THEVULGO";

  const description = isEs
    ? "Pequeños arreglos de cocina en Valencia desde 35€. Ajustes simples, correcciones visibles, puertas de muebles, tiradores, juntas y mejoras de uso diario."
    : "Kitchen minor fixes in Valencia from €35. Small kitchen adjustments, visible repair work, cabinet doors, handles, joints and daily usability improvements.";

  return {
    title,
    description,
    keywords: isEs
      ? [
          "pequeños arreglos cocina Valencia",
          "reparaciones cocina Valencia",
          "ajustes cocina Valencia",
          "arreglar mueble cocina Valencia",
          "tiradores cocina Valencia",
          "puertas cocina desalineadas Valencia",
          "manitas cocina Valencia",
        ]
      : [
          "kitchen minor fixes Valencia",
          "small kitchen repairs Valencia",
          "kitchen adjustments Valencia",
          "kitchen cabinet repair Valencia",
          "kitchen handles Valencia",
          "cabinet door alignment Valencia",
          "kitchen handyman Valencia",
        ],
    alternates: {
      canonical: `${siteUrl}/${locale}/services/repairs/kitchen-minor-fixes`,
      languages: {
        es: `${siteUrl}/es/services/repairs/kitchen-minor-fixes`,
        en: `${siteUrl}/en/services/repairs/kitchen-minor-fixes`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${siteUrl}/${locale}/services/repairs/kitchen-minor-fixes`,
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

export default async function KitchenMinorFixesPage({ params }: PageProps) {
  const { locale } = await params;
  const isEs = locale === "es";

  const pageUrl = `${siteUrl}/${locale}/services/repairs/kitchen-minor-fixes`;

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, quiero pedir presupuesto para pequeños arreglos de cocina en Valencia."
      : "Hi, I would like an estimate for kitchen minor fixes in Valencia."
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
          q: "¿Qué incluyen los pequeños arreglos de cocina?",
          a: "Incluyen ajustes simples de muebles, puertas, bisagras, tiradores, accesorios, juntas visibles y pequeñas correcciones que mejoran el uso diario de la cocina.",
        },
        {
          q: "¿Cuánto cuestan los pequeños arreglos de cocina en Valencia?",
          a: "El servicio empieza desde 35€. El precio final depende del número de tareas, tipo de mueble, accesorios, material necesario y tiempo estimado.",
        },
        {
          q: "¿Podéis ajustar puertas de muebles de cocina?",
          a: "Sí. Se pueden ajustar puertas de cocina, bisagras, frentes desalineados y pequeños problemas de cierre cuando el sistema lo permite.",
        },
        {
          q: "¿También arregláis tiradores o accesorios sueltos?",
          a: "Sí. Los tiradores, pomos, pequeños soportes, accesorios visibles y piezas sueltas pueden incluirse si el alcance es sencillo.",
        },
        {
          q: "¿Qué fotos tengo que enviar?",
          a: "Envía fotos generales de la cocina, fotos de cerca de cada problema y una lista corta de las tareas que quieres corregir.",
        },
      ]
    : [
        {
          q: "What is included in kitchen minor fixes?",
          a: "It includes simple adjustments of cabinets, doors, hinges, handles, accessories, visible joints and small corrections that improve daily kitchen usability.",
        },
        {
          q: "How much do kitchen minor fixes cost in Valencia?",
          a: "The service starts from €35. Final price depends on the number of tasks, cabinet type, fittings, required material and estimated time.",
        },
        {
          q: "Can you adjust kitchen cabinet doors?",
          a: "Yes. Kitchen cabinet doors, hinges, misaligned fronts and small closing issues can often be adjusted when the system allows it.",
        },
        {
          q: "Do you also fix loose handles or accessories?",
          a: "Yes. Handles, knobs, small holders, visible accessories and loose parts can be included when the scope is straightforward.",
        },
        {
          q: "What photos should I send?",
          a: "Send general kitchen photos, close-up photos of each issue and a short list of the tasks you want corrected.",
        },
      ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: isEs
      ? "Pequeños arreglos de cocina en Valencia"
      : "Kitchen minor fixes in Valencia",
    description: isEs
      ? "Ajustes simples y pequeñas correcciones visibles para muebles, puertas, bisagras, tiradores, accesorios y detalles de cocina en Valencia."
      : "Small kitchen adjustments and visible repair work for cabinets, doors, hinges, handles, fittings and daily usability in Valencia.",
    serviceType: isEs ? "Pequeños arreglos de cocina" : "Kitchen minor fixes",
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
        name: isEs ? "Pequeños arreglos de cocina" : "Kitchen minor fixes",
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
        "Muebles, puertas y tiradores",
        "Ajustes visibles de cocina",
        "Mejor uso diario",
      ]
    : [
        "From €35",
        "Cabinets, doors and handles",
        "Visible kitchen adjustments",
        "Better daily usability",
      ];

  const included = isEs
    ? [
        "Revisión de pequeños problemas visibles de cocina",
        "Ajuste simple de puertas, bisagras o frentes",
        "Reapriete de tiradores, pomos o accesorios",
        "Corrección de pequeñas piezas sueltas o desalineadas",
        "Mejora práctica del uso diario de la cocina",
        "Presupuesto claro según fotos, lista y alcance",
      ]
    : [
        "Review of small visible kitchen issues",
        "Simple adjustment of doors, hinges or fronts",
        "Tightening of handles, knobs or accessories",
        "Correction of small loose or misaligned parts",
        "Practical improvement of daily kitchen use",
        "Clear estimate based on photos, list and scope",
      ];

  const related = isEs
    ? [
        {
          title: "Instalaciones de cocina",
          href: `/${locale}/services/kitchen`,
        },
        {
          title: "Alineación de puertas de armario",
          href: `/${locale}/services/repairs/cabinet-door-alignment`,
        },
        {
          title: "Reparación de tiradores sueltos",
          href: `/${locale}/services/repairs/loose-handle-fixing`,
        },
        {
          title: "Reparaciones en Valencia",
          href: `/${locale}/services/repairs`,
        },
      ]
    : [
        {
          title: "Kitchen installations",
          href: `/${locale}/services/kitchen`,
        },
        {
          title: "Cabinet door alignment",
          href: `/${locale}/services/repairs/cabinet-door-alignment`,
        },
        {
          title: "Loose handle fixing",
          href: `/${locale}/services/repairs/loose-handle-fixing`,
        },
        {
          title: "Repairs in Valencia",
          href: `/${locale}/services/repairs`,
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
              {isEs ? "Pequeños arreglos de cocina" : "Kitchen minor fixes"}{" "}
              <span className="text-yellow-500">
                {isEs ? "en Valencia" : "in Valencia"}
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-700">
              {isEs
                ? "Ajustes simples y pequeñas reparaciones visibles para mejorar muebles, puertas, tiradores, accesorios y el uso diario de la cocina."
                : "Small kitchen adjustments and visible repair work to improve cabinets, doors, handles, fittings and daily usability."}
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
              <ChefHat className="mb-6 h-12 w-12 text-black" />
              <p className="text-sm font-black uppercase tracking-widest">
                {isEs ? "Desde 35€" : "From €35"}
              </p>
              <h2 className="mt-3 text-3xl font-black">
                {isEs
                  ? "Cocina más cómoda. Detalles más limpios. Mejor uso diario."
                  : "Easier kitchen use. Cleaner details. Better daily function."}
              </h2>
              <p className="mt-4 font-medium leading-7 text-neutral-900">
                {isEs
                  ? "Revisamos pequeños problemas visibles para corregir lo que molesta en el día a día sin convertirlo en una reforma grande."
                  : "We check small visible issues to correct what is annoying in everyday use without turning it into a large renovation."}
              </p>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: isEs ? "Muebles" : "Cabinets",
                  text: isEs ? "Ajustes simples" : "Simple adjustments",
                  icon: Package,
                },
                {
                  title: isEs ? "Tiradores" : "Handles",
                  text: isEs ? "Piezas sueltas" : "Loose fittings",
                  icon: Wrench,
                },
                {
                  title: isEs ? "Cocina" : "Kitchen",
                  text: isEs ? "Uso diario" : "Daily usability",
                  icon: ChefHat,
                },
                {
                  title: isEs ? "Acabado" : "Finish",
                  text: isEs ? "Más limpio y práctico" : "Cleaner and practical",
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
              title: isEs ? "Ajustes pequeños" : "Small adjustments",
              text: isEs
                ? "Correcciones de muebles, puertas, tiradores y accesorios que afectan al uso diario."
                : "Corrections for cabinets, doors, handles and fittings that affect daily use.",
            },
            {
              title: isEs ? "Mejor acabado visible" : "Better visible finish",
              text: isEs
                ? "Pequeños detalles pueden hacer que la cocina se vea más cuidada y funcional."
                : "Small details can make the kitchen look more cared for and functional.",
            },
            {
              title: isEs ? "Presupuesto claro" : "Clear estimate",
              text: isEs
                ? "Envía fotos y una lista corta para valorar tareas, material y tiempo."
                : "Send photos and a short list to estimate tasks, material and time.",
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
            ? "Pequeñas reparaciones visibles para mejorar la cocina sin reforma grande"
            : "Small visible repairs to improve the kitchen without a large renovation"}
        </h2>

        <div className="mt-6 space-y-5 text-lg leading-8 text-neutral-700">
          <p>
            {isEs
              ? "Una cocina no siempre necesita una reforma completa para sentirse mejor. A veces basta con ajustar puertas, apretar tiradores, corregir accesorios sueltos, mejorar pequeñas juntas visibles o resolver detalles que molestan cada día."
              : "A kitchen does not always need a full renovation to feel better. Sometimes adjusting doors, tightening handles, correcting loose fittings, improving small visible joints or solving daily annoyances is enough."}
          </p>

          <p>
            {isEs
              ? "THEVULGO realiza pequeños arreglos de cocina en Valencia para pisos, casas, apartamentos de alquiler, mudanzas, cocinas usadas y espacios que necesitan mejorar el uso diario."
              : "THEVULGO provides kitchen minor fixes in Valencia for apartments, homes, rental properties, move-ins, used kitchens and spaces that need better daily usability."}
          </p>

          <p>
            {isEs
              ? "Antes de confirmar, puedes enviar fotos de cada problema y una lista corta de tareas. Así se puede valorar si conviene hacer una visita combinada con varias correcciones en una sola cita."
              : "Before confirming, you can send photos of each issue and a short task list. This helps check whether several corrections can be grouped into one visit."}
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
              ? "Envía fotos y lista de tareas"
              : "Send photos and a task list"}
          </h2>
          <p className="mt-6 text-lg font-medium leading-8 text-neutral-900">
            {isEs
              ? "Para calcular el precio, envía fotos generales, fotos de cerca y una lista corta de los ajustes o reparaciones que quieres hacer."
              : "To estimate the price, send general photos, close-up photos and a short list of the adjustments or repairs you need."}
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
              ? "¿Necesitas pequeños arreglos en la cocina?"
              : "Need small kitchen fixes?"}
          </h2>
          <p className="mt-5 text-lg font-medium text-neutral-900">
            {isEs
              ? "Envía fotos y una lista corta. Te damos un presupuesto claro antes de empezar."
              : "Send photos and a short list. Get a clear estimate before the work starts."}
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