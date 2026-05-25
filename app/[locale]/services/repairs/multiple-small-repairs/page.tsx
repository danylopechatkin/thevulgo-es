import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  ClipboardList,
  Home,
  MapPin,
  PackageCheck,
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
    ? "Varias Reparaciones Pequeñas en Valencia | Presupuesto Combinado | THEVULGO"
    : "Multiple Small Repairs in Valencia | Combined Quote | THEVULGO";

  const description = isEs
    ? "Presupuesto combinado para varias reparaciones pequeñas en Valencia. Agrupa ajustes, fijaciones, retoques, accesorios sueltos y pequeñas correcciones en una sola visita."
    : "Combined estimate for several minor home repair tasks in Valencia. Group adjustments, fixings, touch-ups, loose accessories and small corrections in one visit.";

  return {
    title,
    description,
    keywords: isEs
      ? [
          "varias reparaciones pequeñas Valencia",
          "manitas varias tareas Valencia",
          "pequeños arreglos casa Valencia",
          "reparaciones hogar Valencia",
          "presupuesto combinado reparaciones Valencia",
          "arreglos pequeños piso Valencia",
          "handyman Valencia",
        ]
      : [
          "multiple small repairs Valencia",
          "handyman multiple tasks Valencia",
          "minor home repairs Valencia",
          "combined repair quote Valencia",
          "small apartment fixes Valencia",
          "home repair tasks Valencia",
          "handyman Valencia",
        ],
    alternates: {
      canonical: `${siteUrl}/${locale}/services/repairs/multiple-small-repairs`,
      languages: {
        es: `${siteUrl}/es/services/repairs/multiple-small-repairs`,
        en: `${siteUrl}/en/services/repairs/multiple-small-repairs`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${siteUrl}/${locale}/services/repairs/multiple-small-repairs`,
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

export default async function MultipleSmallRepairsPage({ params }: PageProps) {
  const { locale } = await params;
  const isEs = locale === "es";

  const pageUrl = `${siteUrl}/${locale}/services/repairs/multiple-small-repairs`;

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, quiero pedir presupuesto para varias reparaciones pequeñas en una sola visita en Valencia."
      : "Hi, I would like a combined estimate for several small repair tasks in one visit in Valencia."
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
          q: "¿Qué incluye el servicio de varias reparaciones pequeñas?",
          a: "Incluye la posibilidad de agrupar varias tareas menores en una sola visita: ajustes, fijaciones, retoques de pared, accesorios sueltos, estantes, tiradores, sellado, pequeños trabajos de taladro y correcciones visibles.",
        },
        {
          q: "¿Cómo se calcula el presupuesto combinado?",
          a: "El precio se calcula según la lista de tareas, dificultad, tiempo estimado, materiales necesarios, acceso y zona. Por eso se prepara un presupuesto personalizado.",
        },
        {
          q: "¿Es mejor agrupar varias tareas en una sola visita?",
          a: "Sí. Normalmente es más práctico y eficiente agrupar varias pequeñas reparaciones en una visita organizada en lugar de reservar cada tarea por separado.",
        },
        {
          q: "¿Qué tipo de tareas puedo enviar?",
          a: "Puedes enviar fotos y una lista de tareas como estantes flojos, tiradores sueltos, marcas de pared, accesorios de baño, tapas torcidas, pequeños sellados o ajustes de puertas.",
        },
        {
          q: "¿Qué necesito enviar para recibir presupuesto?",
          a: "Envía fotos claras de cada tarea, una lista numerada, dirección aproximada o zona, y explica qué quieres corregir en cada punto.",
        },
      ]
    : [
        {
          q: "What is included in multiple small repairs?",
          a: "It allows several minor tasks to be grouped into one visit: adjustments, fixings, wall touch-ups, loose accessories, shelves, handles, sealing, small drilling jobs and visible corrections.",
        },
        {
          q: "How is the combined estimate calculated?",
          a: "The price is calculated based on the task list, difficulty, estimated time, required materials, access and area. That is why this service uses a custom quote.",
        },
        {
          q: "Is it better to group several tasks into one visit?",
          a: "Yes. It is usually more practical and efficient to group several small repairs into one organized visit instead of booking each task separately.",
        },
        {
          q: "What kind of tasks can I send?",
          a: "You can send photos and a task list such as loose shelves, loose handles, wall marks, bathroom accessories, crooked covers, small sealing or door adjustments.",
        },
        {
          q: "What should I send to get an estimate?",
          a: "Send clear photos of each task, a numbered list, approximate address or area, and explain what you want corrected in each point.",
        },
      ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: isEs
      ? "Varias reparaciones pequeñas en Valencia"
      : "Multiple small repairs in Valencia",
    description: isEs
      ? "Presupuesto combinado para varias reparaciones pequeñas, ajustes, fijaciones, retoques y correcciones visibles en una sola visita en Valencia."
      : "Combined estimate for several minor home repair tasks, adjustments, fixings, touch-ups and visible corrections in one visit in Valencia.",
    serviceType: isEs ? "Varias reparaciones pequeñas" : "Multiple small repairs",
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
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: isEs ? "Inicio" : "Home", item: `${siteUrl}/${locale}` },
      { "@type": "ListItem", position: 2, name: isEs ? "Servicios" : "Services", item: `${siteUrl}/${locale}/services` },
      { "@type": "ListItem", position: 3, name: isEs ? "Reparaciones" : "Repairs", item: `${siteUrl}/${locale}/services/repairs` },
      { "@type": "ListItem", position: 4, name: isEs ? "Varias reparaciones pequeñas" : "Multiple small repairs", item: pageUrl },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  const heroPoints = isEs
    ? [
        "Presupuesto personalizado",
        "Varias tareas en una visita",
        "Ajustes, fijaciones y retoques",
        "Ideal para pisos y viviendas",
      ]
    : [
        "Custom quote",
        "Several tasks in one visit",
        "Adjustments, fixings and touch-ups",
        "Ideal for apartments and homes",
      ];

  const included = isEs
    ? [
        "Revisión de lista completa de pequeñas tareas",
        "Agrupación de reparaciones en una sola visita",
        "Ajustes de puertas, muebles, tiradores y accesorios",
        "Pequeños retoques de pared, sellado y fijaciones",
        "Estimación clara según fotos, tiempo y materiales",
        "Organización práctica para ahorrar visitas separadas",
      ]
    : [
        "Review of the full small task list",
        "Grouping of repairs into one visit",
        "Adjustments for doors, furniture, handles and accessories",
        "Small wall touch-ups, sealing and fixings",
        "Clear estimate based on photos, time and materials",
        "Practical organization to avoid separate visits",
      ];

  const related = isEs
    ? [
        { title: "Pequeños arreglos de pared", href: `/${locale}/services/repairs/minor-wall-fixes` },
        { title: "Pequeños arreglos de cocina", href: `/${locale}/services/repairs/kitchen-minor-fixes` },
        { title: "Ajuste de puertas", href: `/${locale}/services/repairs/door-adjustment` },
        { title: "Reparaciones en Valencia", href: `/${locale}/services/repairs` },
      ]
    : [
        { title: "Minor wall fixes", href: `/${locale}/services/repairs/minor-wall-fixes` },
        { title: "Kitchen minor fixes", href: `/${locale}/services/repairs/kitchen-minor-fixes` },
        { title: "Door adjustment", href: `/${locale}/services/repairs/door-adjustment` },
        { title: "Repairs in Valencia", href: `/${locale}/services/repairs` },
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
              {isEs ? "THEVULGO • Reparaciones en Valencia" : "THEVULGO • Repairs in Valencia"}
            </div>

            <h1 className="text-4xl font-black tracking-tight md:text-6xl">
              {isEs ? "Varias reparaciones pequeñas" : "Multiple small repairs"}{" "}
              <span className="text-yellow-500">
                {isEs ? "en Valencia" : "in Valencia"}
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-700">
              {isEs
                ? "Presupuesto combinado para varias tareas menores del hogar en una sola visita: ajustes, fijaciones, retoques y pequeñas correcciones visibles."
                : "Combined estimate for several minor home repair tasks in one visit: adjustments, fixings, touch-ups and small visible corrections."}
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
              <ClipboardList className="mb-6 h-12 w-12 text-black" />
              <p className="text-sm font-black uppercase tracking-widest">
                {isEs ? "Presupuesto personalizado" : "Custom quote"}
              </p>
              <h2 className="mt-3 text-3xl font-black">
                {isEs
                  ? "Una visita. Varias tareas. Casa más cuidada."
                  : "One visit. Several tasks. A better-finished home."}
              </h2>
              <p className="mt-4 font-medium leading-7 text-neutral-900">
                {isEs
                  ? "Agrupa pequeñas reparaciones para organizar mejor el tiempo y resolver varios detalles juntos."
                  : "Group small repairs to organize time better and solve several details together."}
              </p>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: isEs ? "Lista de tareas" : "Task list",
                  text: isEs ? "Todo organizado" : "Everything organized",
                  icon: ClipboardList,
                },
                {
                  title: isEs ? "Reparaciones" : "Repairs",
                  text: isEs ? "Pequeños arreglos" : "Small fixes",
                  icon: Wrench,
                },
                {
                  title: isEs ? "Hogar" : "Home",
                  text: isEs ? "Pisos y casas" : "Apartments and homes",
                  icon: Home,
                },
                {
                  title: isEs ? "Resultado" : "Result",
                  text: isEs ? "Más limpio y práctico" : "Cleaner and practical",
                  icon: Sparkles,
                },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl border border-yellow-200 bg-yellow-50 p-4 shadow-sm">
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
              title: isEs ? "Varias tareas juntas" : "Several tasks together",
              text: isEs
                ? "Ideal cuando tienes muchos pequeños detalles pendientes en casa."
                : "Ideal when you have several small pending details at home.",
            },
            {
              title: isEs ? "Una visita organizada" : "One organized visit",
              text: isEs
                ? "Se revisa la lista completa para preparar un presupuesto combinado."
                : "The full list is reviewed to prepare a combined estimate.",
            },
            {
              title: isEs ? "Presupuesto personalizado" : "Custom estimate",
              text: isEs
                ? "El precio depende del número de tareas, dificultad, materiales y tiempo."
                : "Price depends on number of tasks, difficulty, materials and time.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-yellow-300 bg-white p-7 shadow-md transition hover:-translate-y-1 hover:shadow-xl">
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
            ? "Presupuesto combinado para varias reparaciones pequeñas en una sola visita"
            : "Combined estimate for several small repair tasks in one visit"}
        </h2>

        <div className="mt-6 space-y-5 text-lg leading-8 text-neutral-700">
          <p>
            {isEs
              ? "Cuando hay muchos detalles pequeños en casa, reservar cada reparación por separado no siempre tiene sentido. Es más práctico agrupar tareas como tiradores sueltos, pequeños agujeros, accesorios de baño, estantes flojos, sellado o ajustes de puertas en una sola visita."
              : "When there are many small details at home, booking each repair separately does not always make sense. It is more practical to group tasks like loose handles, small holes, bathroom accessories, loose shelves, sealing or door adjustments into one visit."}
          </p>

          <p>
            {isEs
              ? "THEVULGO organiza reparaciones pequeñas en Valencia para pisos, casas, alquileres, mudanzas, preparación de entrega, mejoras visibles y tareas pendientes del hogar."
              : "THEVULGO organizes small repairs in Valencia for apartments, homes, rental properties, move-outs, handover preparation, visible improvements and pending home tasks."}
          </p>

          <p>
            {isEs
              ? "Envía una lista numerada con fotos de cada tarea. Así se puede calcular una estimación clara y decidir qué se puede resolver en una sola visita."
              : "Send a numbered list with photos of each task. This makes it easier to calculate a clear estimate and decide what can be completed in one visit."}
          </p>
        </div>
      </section>

      <section className="bg-yellow-50 py-16">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <h2 className="text-3xl font-black md:text-4xl">
            {isEs ? "Qué puede incluir" : "What can be included"}
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {included.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-2xl border border-yellow-200 bg-white p-5 shadow-sm">
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
            {isEs ? "Presupuesto personalizado" : "Custom quote"}
          </p>
          <h2 className="mt-3 text-4xl font-black">
            {isEs ? "Envía tu lista de reparaciones" : "Send your repair list"}
          </h2>
          <p className="mt-6 text-lg font-medium leading-8 text-neutral-900">
            {isEs
              ? "Para calcular el precio, envía una lista numerada, fotos de cada tarea y tu zona en Valencia."
              : "To estimate the price, send a numbered list, photos of each task and your area in Valencia."}
          </p>

          <a href={whatsappUrl} className="mt-8 inline-flex items-center justify-center rounded-xl bg-black px-7 py-4 font-black text-white shadow-md transition hover:scale-105">
            {isEs ? "Pedir presupuesto combinado" : "Request combined estimate"}
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
            <span key={area} className="rounded-full border border-yellow-300 bg-yellow-50 px-4 py-2 font-bold text-neutral-900">
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
              <details key={item.q} className="group rounded-2xl border border-yellow-200 bg-white p-6 shadow-sm">
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
            <Link key={item.title} href={item.href} className="group rounded-2xl border border-yellow-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-yellow-400 hover:shadow-md">
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
              ? "¿Tienes varias pequeñas reparaciones pendientes?"
              : "Do you have several small repairs pending?"}
          </h2>
          <p className="mt-5 text-lg font-medium text-neutral-900">
            {isEs
              ? "Envía fotos y una lista. Te damos un presupuesto combinado antes de empezar."
              : "Send photos and a list. Get a combined estimate before the work starts."}
          </p>

          <a href={whatsappUrl} className="mt-8 inline-flex items-center justify-center rounded-xl bg-black px-8 py-4 font-black text-white shadow-xl transition hover:scale-105">
            {isEs ? "Pedir presupuesto ahora" : "Get estimate now"}
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>
    </main>
  );
}