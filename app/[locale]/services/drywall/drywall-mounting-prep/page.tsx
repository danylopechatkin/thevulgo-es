import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Drill,
  Hammer,
  Layers3,
  MapPin,
  Ruler,
  ShieldCheck,
  Sparkles,
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
    ? "Preparación de Pladur para Montaje en Valencia | Desde 35€ | THEVULGO"
    : "Drywall Mounting Prep in Valencia | From €35 | THEVULGO";

  const description = isEs
    ? "Preparación de zonas de pladur para montaje en pared en Valencia desde 35€. Revisión, marcado y preparación para una instalación más segura y limpia."
    : "Drywall mounting prep in Valencia from €35. Preparation of drywall areas for safer and cleaner wall mounting.";

  return {
    title,
    description,
    keywords: isEs
      ? [
          "preparación pladur montaje Valencia",
          "montaje en pladur Valencia",
          "preparar pared pladur Valencia",
          "fijación pladur Valencia",
          "soportes en pladur Valencia",
          "anclajes pladur Valencia",
          "manitas pladur Valencia",
        ]
      : [
          "drywall mounting prep Valencia",
          "drywall wall mounting Valencia",
          "prepare drywall for mounting Valencia",
          "drywall fixing Valencia",
          "drywall anchors Valencia",
          "mounting on drywall Valencia",
          "handyman drywall Valencia",
        ],
    alternates: {
      canonical: `${siteUrl}/${locale}/services/drywall/drywall-mounting-prep`,
      languages: {
        es: `${siteUrl}/es/services/drywall/drywall-mounting-prep`,
        en: `${siteUrl}/en/services/drywall/drywall-mounting-prep`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${siteUrl}/${locale}/services/drywall/drywall-mounting-prep`,
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

export default async function DrywallMountingPrepPage({ params }: PageProps) {
  const { locale } = await params;
  const isEs = locale === "es";

  const pageUrl = `${siteUrl}/${locale}/services/drywall/drywall-mounting-prep`;

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, quiero pedir presupuesto para preparar una zona de pladur para montaje en pared en Valencia."
      : "Hi, I would like an estimate for drywall mounting prep in Valencia."
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
          q: "¿Qué incluye la preparación de pladur para montaje?",
          a: "Incluye revisión básica de la zona, valoración visual de la superficie, marcado cuando aplica y preparación para una fijación más limpia y adecuada según el tipo de objeto.",
        },
        {
          q: "¿Cuánto cuesta preparar pladur para montaje en Valencia?",
          a: "El servicio empieza desde 35€. El precio final depende del tipo de pared, objeto a montar, número de puntos, acceso, peso aproximado y material necesario.",
        },
        {
          q: "¿Sirve para montar estantes, espejos o accesorios?",
          a: "Sí. Es útil para preparar zonas de pladur antes de montar estantes ligeros, espejos, accesorios, soportes o pequeños elementos de pared.",
        },
        {
          q: "¿Se puede montar cualquier cosa en pladur?",
          a: "No siempre. Depende del peso, tipo de pladur, estructura detrás, tipo de anclaje y estado de la pared. Antes de confirmar se revisa el caso.",
        },
        {
          q: "¿Incluye los anclajes o tacos?",
          a: "Depende del trabajo. Se puede valorar el material necesario según fotos, tipo de pared y objeto que quieres montar.",
        },
        {
          q: "¿Qué fotos tengo que enviar?",
          a: "Envía una foto general de la pared, una foto del objeto que quieres montar, medidas aproximadas y peso aproximado si lo sabes.",
        },
      ]
    : [
        {
          q: "What is included in drywall mounting prep?",
          a: "It includes a basic check of the area, visual review of the surface, marking where needed and preparation for a cleaner and more suitable fixing based on the item.",
        },
        {
          q: "How much does drywall mounting prep cost in Valencia?",
          a: "The service starts from €35. Final price depends on wall type, item being mounted, number of points, access, approximate weight and required material.",
        },
        {
          q: "Is this suitable for shelves, mirrors or accessories?",
          a: "Yes. It is useful for preparing drywall areas before mounting light shelves, mirrors, accessories, brackets or small wall items.",
        },
        {
          q: "Can anything be mounted on drywall?",
          a: "Not always. It depends on weight, drywall type, structure behind it, anchor type and wall condition. The case is reviewed before confirming.",
        },
        {
          q: "Are anchors or plugs included?",
          a: "It depends on the job. Required material can be reviewed based on photos, wall type and the item you want mounted.",
        },
        {
          q: "What photos should I send?",
          a: "Send one general photo of the wall, one photo of the item you want mounted, approximate measurements and approximate weight if you know it.",
        },
      ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: isEs
      ? "Preparación de pladur para montaje en Valencia"
      : "Drywall mounting prep in Valencia",
    description: isEs
      ? "Preparación de zonas de pladur para montaje más seguro y limpio de accesorios, soportes y elementos de pared en Valencia."
      : "Preparation of drywall areas for safer and cleaner mounting of accessories, brackets and wall items in Valencia.",
    serviceType: isEs ? "Preparación de pladur para montaje" : "Drywall mounting prep",
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
      { "@type": "ListItem", position: 1, name: isEs ? "Inicio" : "Home", item: `${siteUrl}/${locale}` },
      { "@type": "ListItem", position: 2, name: isEs ? "Servicios" : "Services", item: `${siteUrl}/${locale}/services` },
      { "@type": "ListItem", position: 3, name: isEs ? "Pladur y paredes" : "Drywall and walls", item: `${siteUrl}/${locale}/services/drywall` },
      { "@type": "ListItem", position: 4, name: isEs ? "Preparación de pladur para montaje" : "Drywall mounting prep", item: pageUrl },
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
    ? ["Desde 35€", "Preparación para montaje", "Pladur y paredes ligeras", "Según peso y superficie"]
    : ["From €35", "Mounting preparation", "Drywall and light walls", "Based on weight and surface"];

  const included = isEs
    ? [
        "Revisión básica de la zona de pladur",
        "Valoración visual de superficie y puntos de montaje",
        "Marcado de posición cuando aplica",
        "Preparación para fijaciones más limpias",
        "Revisión del tipo de objeto y alcance",
        "Presupuesto claro según fotos, puntos y material",
      ]
    : [
        "Basic check of the drywall area",
        "Visual review of surface and mounting points",
        "Position marking where needed",
        "Preparation for cleaner fixings",
        "Review of item type and scope",
        "Clear estimate based on photos, points and material",
      ];

  const related = isEs
    ? [
        { title: "Instalación de tacos y anclajes", href: `/${locale}/services/repairs/wall-anchor-installation` },
        { title: "Servicio de taladro en pared", href: `/${locale}/services/drywall/wall-drilling-service` },
        { title: "Reparación de agujeros de tacos", href: `/${locale}/services/drywall/anchor-hole-repair` },
        { title: "Pladur y paredes", href: `/${locale}/services/drywall` },
      ]
    : [
        { title: "Wall anchor installation", href: `/${locale}/services/repairs/wall-anchor-installation` },
        { title: "Wall drilling service", href: `/${locale}/services/drywall/wall-drilling-service` },
        { title: "Anchor hole repair", href: `/${locale}/services/drywall/anchor-hole-repair` },
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
              {isEs ? "THEVULGO • Pladur en Valencia" : "THEVULGO • Drywall in Valencia"}
            </div>

            <h1 className="text-4xl font-black tracking-tight md:text-6xl">
              {isEs ? "Preparación de pladur para montaje" : "Drywall mounting prep"}{" "}
              <span className="text-yellow-500">{isEs ? "en Valencia" : "in Valencia"}</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-700">
              {isEs
                ? "Preparación de zonas de pladur para un montaje más seguro, limpio y adecuado de accesorios, soportes o elementos de pared."
                : "Preparation of drywall areas for safer, cleaner and more suitable wall mounting of accessories, brackets or wall items."}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={whatsappUrl} className="inline-flex items-center justify-center rounded-xl bg-yellow-400 px-6 py-4 font-black text-black shadow-md transition hover:scale-105 hover:bg-yellow-300">
                {isEs ? "Pedir presupuesto por WhatsApp" : "Get estimate by WhatsApp"}
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>

              <Link href={`/${locale}/services/drywall`} className="inline-flex items-center justify-center rounded-xl border border-neutral-300 bg-white px-6 py-4 font-black text-neutral-950 shadow-sm transition hover:scale-105 hover:border-yellow-400">
                {isEs ? "Ver pladur y paredes" : "View drywall services"}
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
              <Layers3 className="mb-6 h-12 w-12 text-black" />
              <p className="text-sm font-black uppercase tracking-widest">
                {isEs ? "Desde 35€" : "From €35"}
              </p>
              <h2 className="mt-3 text-3xl font-black">
                {isEs ? "Zona revisada. Montaje más limpio. Mejor preparación." : "Area checked. Cleaner mounting. Better preparation."}
              </h2>
              <p className="mt-4 font-medium leading-7 text-neutral-900">
                {isEs
                  ? "Ideal antes de instalar accesorios, estantes ligeros, espejos, soportes o elementos visibles en pladur."
                  : "Ideal before installing accessories, light shelves, mirrors, brackets or visible items on drywall."}
              </p>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                { title: isEs ? "Pladur" : "Drywall", text: isEs ? "Zona ligera" : "Light wall area", icon: Layers3 },
                { title: isEs ? "Montaje" : "Mounting", text: isEs ? "Preparación" : "Preparation", icon: Hammer },
                { title: isEs ? "Marcado" : "Marking", text: isEs ? "Cuando aplica" : "Where needed", icon: Ruler },
                { title: isEs ? "Fijación" : "Fixing", text: isEs ? "Según peso" : "Based on weight", icon: ShieldCheck },
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
              title: isEs ? "Antes de montar" : "Before mounting",
              text: isEs
                ? "Preparación de zona para accesorios, soportes, espejos o elementos ligeros."
                : "Area preparation for accessories, brackets, mirrors or light wall items.",
            },
            {
              title: isEs ? "Según peso y pared" : "Based on weight and wall",
              text: isEs
                ? "El tipo de pladur, objeto y peso influyen en el material y el alcance."
                : "Drywall type, item and weight affect material and scope.",
            },
            {
              title: isEs ? "Presupuesto claro" : "Clear estimate",
              text: isEs
                ? "Envía fotos del objeto y pared para valorar puntos, anclajes y dificultad."
                : "Send photos of the item and wall to review points, anchors and difficulty.",
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
            ? "Preparación de pladur para una instalación más limpia y adecuada"
            : "Drywall preparation for cleaner and more suitable mounting"}
        </h2>

        <div className="mt-6 space-y-5 text-lg leading-8 text-neutral-700">
          <p>
            {isEs
              ? "Montar objetos en pladur requiere revisar bien el tipo de superficie, el peso del elemento y los puntos de fijación. No siempre se puede montar cualquier cosa de la misma forma que en ladrillo u hormigón."
              : "Mounting items on drywall requires checking the surface type, item weight and fixing points. Not everything can be mounted the same way as on brick or concrete."}
          </p>

          <p>
            {isEs
              ? "THEVULGO ofrece preparación de pladur para montaje en Valencia para pisos, casas, alquileres, oficinas, mudanzas y pequeñas instalaciones donde se necesita una fijación más cuidada."
              : "THEVULGO provides drywall mounting prep in Valencia for apartments, homes, rentals, offices, move-ins and small installations where a more careful fixing is needed."}
          </p>

          <p>
            {isEs
              ? "Antes de confirmar, puedes enviar fotos de la pared, del objeto y medidas aproximadas. Así se puede valorar si la instalación es adecuada y qué tipo de material puede hacer falta."
              : "Before confirming, you can send photos of the wall, item and approximate measurements. This helps review whether the installation is suitable and what material may be needed."}
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
            {isEs ? "Desde 35€" : "From €35"}
          </p>
          <h2 className="mt-3 text-4xl font-black">
            {isEs ? "Envía fotos de la pared y del objeto" : "Send photos of the wall and item"}
          </h2>
          <p className="mt-6 text-lg font-medium leading-8 text-neutral-900">
            {isEs
              ? "Para calcular el precio, envía una foto general, foto del objeto, medidas aproximadas y peso si lo sabes."
              : "To estimate the price, send a general photo, photo of the item, approximate measurements and weight if known."}
          </p>

          <a href={whatsappUrl} className="mt-8 inline-flex items-center justify-center rounded-xl bg-black px-7 py-4 font-black text-white shadow-md transition hover:scale-105">
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
            {isEs ? "¿Necesitas preparar pladur para montaje?" : "Need drywall prepared for mounting?"}
          </h2>
          <p className="mt-5 text-lg font-medium text-neutral-900">
            {isEs
              ? "Envía fotos de la pared y del objeto. Te damos un presupuesto claro antes de empezar."
              : "Send photos of the wall and item. Get a clear estimate before the work starts."}
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