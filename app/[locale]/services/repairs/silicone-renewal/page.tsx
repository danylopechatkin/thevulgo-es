import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Bath,
  CheckCircle2,
  Home,
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
    ? "Cambio de Silicona en Valencia | Baños, Cocinas y Juntas | THEVULGO"
    : "Silicone Renewal in Valencia | Bathrooms, Kitchens & Fixtures | THEVULGO";

  const description = isEs
    ? "Cambio y renovación de silicona vieja en Valencia para baños, cocinas, duchas, lavabos, encimeras y juntas alrededor de accesorios. Acabado limpio y presupuesto claro."
    : "Old silicone replacement in Valencia for bathrooms, kitchens, showers, sinks, worktops and fixture joints. Clean finish and clear estimate by WhatsApp.";

  return {
    title,
    description,
    keywords: isEs
      ? [
          "cambio silicona Valencia",
          "renovar silicona baño Valencia",
          "silicona cocina Valencia",
          "reemplazar silicona ducha Valencia",
          "sellado baño Valencia",
          "sellado cocina Valencia",
          "juntas silicona Valencia",
          "manitas Valencia silicona",
        ]
      : [
          "silicone renewal Valencia",
          "old silicone replacement Valencia",
          "bathroom silicone Valencia",
          "kitchen silicone Valencia",
          "shower sealant replacement Valencia",
          "sink silicone replacement Valencia",
          "handyman silicone Valencia",
        ],
    alternates: {
      canonical: `${siteUrl}/${locale}/services/repairs/silicone-renewal`,
      languages: {
        es: `${siteUrl}/es/services/repairs/silicone-renewal`,
        en: `${siteUrl}/en/services/repairs/silicone-renewal`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${siteUrl}/${locale}/services/repairs/silicone-renewal`,
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

export default async function SiliconeRenewalPage({ params }: PageProps) {
  const { locale } = await params;
  const isEs = locale === "es";

  const pageUrl = `${siteUrl}/${locale}/services/repairs/silicone-renewal`;

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, quiero pedir presupuesto para cambiar silicona vieja en baño o cocina en Valencia."
      : "Hi, I would like an estimate for old silicone replacement in a bathroom or kitchen in Valencia."
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
          q: "¿Cuándo hay que cambiar la silicona vieja?",
          a: "Conviene cambiarla cuando está oscura, levantada, agrietada, con moho visible o cuando ya no sella correctamente alrededor de ducha, lavabo, fregadero, encimera o bañera.",
        },
        {
          q: "¿Retiráis la silicona antigua antes de aplicar la nueva?",
          a: "Sí. El trabajo incluye retirar la silicona vieja en la zona acordada, limpiar la superficie lo mejor posible y aplicar nueva silicona compatible.",
        },
        {
          q: "¿Se puede renovar silicona en baño y cocina en la misma visita?",
          a: "Sí. Se pueden agrupar varias zonas en una sola visita: ducha, bañera, lavabo, fregadero, encimera y juntas alrededor de accesorios.",
        },
        {
          q: "¿Cuánto cuesta renovar silicona en Valencia?",
          a: "El precio depende de la longitud de las juntas, el estado de la silicona antigua, el acceso y el número de zonas. Puedes enviar fotos por WhatsApp para recibir un presupuesto claro.",
        },
        {
          q: "¿La nueva silicona queda limpia y recta?",
          a: "El objetivo es dejar un acabado limpio, uniforme y práctico. El resultado final depende también del estado de la superficie, humedad previa y restos antiguos.",
        },
      ]
    : [
        {
          q: "When should old silicone be replaced?",
          a: "It should usually be replaced when it is dark, lifted, cracked, visibly mouldy or no longer sealing properly around a shower, sink, worktop, bath or fixture.",
        },
        {
          q: "Do you remove the old silicone first?",
          a: "Yes. The job includes removing old silicone in the agreed area, cleaning the surface as well as possible and applying compatible new silicone.",
        },
        {
          q: "Can bathroom and kitchen silicone be renewed in one visit?",
          a: "Yes. Several areas can be grouped into one visit, including shower, bath, sink, worktop and joints around fixtures.",
        },
        {
          q: "How much does silicone renewal cost in Valencia?",
          a: "The price depends on joint length, condition of the old silicone, access and number of areas. You can send photos by WhatsApp for a clear estimate.",
        },
        {
          q: "Will the new silicone look clean and straight?",
          a: "The goal is a clean, even and practical finish. Final results also depend on surface condition, previous moisture and old residue.",
        },
      ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: isEs
      ? "Cambio de silicona en Valencia"
      : "Silicone renewal in Valencia",
    description: isEs
      ? "Cambio y renovación de silicona vieja en cocinas, baños, duchas, lavabos, fregaderos, encimeras y juntas alrededor de accesorios en Valencia."
      : "Old silicone replacement for kitchens, bathrooms, showers, sinks, worktops and joints around fixtures in Valencia.",
    serviceType: isEs ? "Renovación de silicona" : "Silicone renewal",
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
        name: isEs ? "Cambio de silicona" : "Silicone renewal",
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
        "Silicona vieja retirada",
        "Baños, cocinas y duchas",
        "Acabado limpio y uniforme",
        "Presupuesto claro por WhatsApp",
      ]
    : [
        "Old silicone removed",
        "Bathrooms, kitchens and showers",
        "Clean and even finish",
        "Clear estimate by WhatsApp",
      ];

  const included = isEs
    ? [
        "Retirada de silicona antigua en la zona acordada",
        "Limpieza básica de la superficie antes de aplicar",
        "Aplicación de nueva silicona compatible",
        "Sellado alrededor de ducha, bañera, lavabo o fregadero",
        "Sellado en encimeras, juntas y accesorios",
        "Acabado visual más limpio para baño o cocina",
      ]
    : [
        "Removal of old silicone in the agreed area",
        "Basic surface cleaning before application",
        "Application of compatible new silicone",
        "Sealing around shower, bath, sink or basin",
        "Sealing on worktops, joints and fixtures",
        "Cleaner visible finish for bathroom or kitchen",
      ];

  const related = isEs
    ? [
        { title: "Reparaciones en Valencia", href: `/${locale}/services/repairs` },
        { title: "Servicios de baño", href: `/${locale}/services/bathroom` },
        { title: "Instalaciones de cocina", href: `/${locale}/services/kitchen` },
        { title: "Fontanería básica", href: `/${locale}/services/plumbing` },
      ]
    : [
        { title: "Repairs in Valencia", href: `/${locale}/services/repairs` },
        { title: "Bathroom services", href: `/${locale}/services/bathroom` },
        { title: "Kitchen installations", href: `/${locale}/services/kitchen` },
        { title: "Basic plumbing", href: `/${locale}/services/plumbing` },
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
              {isEs ? "Cambio de silicona" : "Silicone renewal"}{" "}
              <span className="text-yellow-500">
                {isEs ? "en Valencia" : "in Valencia"}
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-700">
              {isEs
                ? "Renovación de silicona vieja en cocinas, baños, duchas, lavabos, fregaderos, encimeras y alrededor de accesorios. Trabajo limpio, práctico y con presupuesto claro."
                : "Replacement of old silicone in kitchens, bathrooms, showers, sinks, worktops and around fixtures. Clean, practical work with a clear estimate."}
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
              <Sparkles className="mb-6 h-12 w-12 text-black" />
              <p className="text-sm font-black uppercase tracking-widest">
                {isEs ? "Acabado limpio" : "Clean finish"}
              </p>
              <h2 className="mt-3 text-3xl font-black">
                {isEs
                  ? "Silicona nueva. Juntas más limpias. Mejor aspecto."
                  : "New silicone. Cleaner joints. Better look."}
              </h2>
              <p className="mt-4 font-medium leading-7 text-neutral-900">
                {isEs
                  ? "Retiramos la silicona deteriorada, preparamos la zona y aplicamos nuevo sellado para mejorar el aspecto y el uso diario."
                  : "We remove damaged silicone, prepare the area and apply new sealing to improve appearance and everyday use."}
              </p>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: isEs ? "Baños" : "Bathrooms",
                  text: isEs ? "Ducha, bañera, lavabo" : "Shower, bath, basin",
                  icon: Bath,
                },
                {
                  title: isEs ? "Cocinas" : "Kitchens",
                  text: isEs ? "Fregadero, encimera" : "Sink, worktop",
                  icon: Home,
                },
                {
                  title: isEs ? "Juntas" : "Joints",
                  text: isEs ? "Sellado visible limpio" : "Clean visible sealing",
                  icon: ShieldCheck,
                },
                {
                  title: isEs ? "Reparación" : "Repair",
                  text: isEs ? "Práctico y rápido" : "Practical and fast",
                  icon: Wrench,
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
              title: isEs ? "Retirada cuidadosa" : "Careful removal",
              text: isEs
                ? "Se retira la silicona vieja en la zona acordada antes de aplicar el nuevo sellado."
                : "Old silicone is removed in the agreed area before applying the new seal.",
            },
            {
              title: isEs ? "Aplicación limpia" : "Clean application",
              text: isEs
                ? "Se busca un cordón uniforme, limpio y práctico para uso diario."
                : "The goal is an even, clean and practical bead for everyday use.",
            },
            {
              title: isEs ? "Baños y cocinas" : "Bathrooms and kitchens",
              text: isEs
                ? "Ideal para duchas, bañeras, lavabos, fregaderos, encimeras y accesorios."
                : "Ideal for showers, baths, basins, sinks, worktops and fixtures.",
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
            ? "Renovación de silicona vieja en baños, cocinas y accesorios"
            : "Old silicone replacement for bathrooms, kitchens and fixtures"}
        </h2>

        <div className="mt-6 space-y-5 text-lg leading-8 text-neutral-700">
          <p>
            {isEs
              ? "La silicona vieja puede oscurecerse, despegarse, agrietarse o perder su función de sellado. En zonas como ducha, bañera, lavabo, fregadero o encimera, una junta deteriorada puede hacer que todo el espacio se vea descuidado."
              : "Old silicone can become dark, lifted, cracked or lose its sealing function. Around showers, baths, basins, sinks or worktops, damaged joints can make the whole space look unfinished."}
          </p>

          <p>
            {isEs
              ? "THEVULGO ofrece un servicio práctico de cambio de silicona en Valencia para mejorar el acabado visible de baños, cocinas y zonas alrededor de accesorios. Es una reparación pequeña, pero con un impacto visual muy grande."
              : "THEVULGO provides practical silicone renewal in Valencia to improve the visible finish of bathrooms, kitchens and areas around fixtures. It is a small repair with a strong visual impact."}
          </p>

          <p>
            {isEs
              ? "Antes de confirmar el trabajo, puedes enviar fotos por WhatsApp para valorar la longitud de las juntas, el estado actual, el acceso y el número de zonas."
              : "Before confirming the job, you can send photos by WhatsApp so the joint length, current condition, access and number of areas can be reviewed."}
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
            THEVULGO Valencia
          </p>
          <h2 className="mt-3 text-4xl font-black">
            {isEs
              ? "Envía fotos y recibe un presupuesto claro"
              : "Send photos and get a clear estimate"}
          </h2>
          <p className="mt-6 text-lg font-medium leading-8 text-neutral-900">
            {isEs
              ? "Para calcular mejor el precio, envía fotos de la silicona actual, la zona completa y la longitud aproximada de las juntas."
              : "To estimate the price better, send photos of the current silicone, the full area and the approximate joint length."}
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
              ? "¿Quieres cambiar la silicona vieja?"
              : "Need old silicone replaced?"}
          </h2>
          <p className="mt-5 text-lg font-medium text-neutral-900">
            {isEs
              ? "Envía fotos de la zona y te damos un presupuesto claro antes de empezar."
              : "Send photos of the area and get a clear estimate before the work starts."}
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