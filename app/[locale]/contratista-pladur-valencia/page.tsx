import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  Clock3,
  Drill,
  Hammer,
  Home,
  Layers,
  MapPin,
  MessageCircle,
  Paintbrush,
  Ruler,
  ShieldCheck,
  Sparkles,
  Star,
  Thermometer,
  Volume2,
  Warehouse,
  Wrench,
  Zap,
} from "lucide-react";

type Props = {
  params: Promise<{ locale: string }>;
};

const baseUrl = "https://www.thevulgo.es";
const phone = "+34 610 07 69 42";
const whatsappPhone = "34610076942";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";

  const title = isEs
    ? "Contratista de Pladur en Valencia | Tabiques, Techos y Reformas | THEVULGO"
    : "Drywall Contractor in Valencia | Partitions, Ceilings & Renovations | THEVULGO";

  const description = isEs
    ? "Contratista de pladur en Valencia para viviendas, locales, oficinas y obra nueva. Tabiques, techos de pladur, falsos techos, aislamiento acústico, trasdosados, reformas y acabados limpios."
    : "Drywall contractor in Valencia for homes, commercial units, offices and new builds. Drywall partitions, plasterboard ceilings, suspended ceilings, acoustic insulation, wall linings, renovations and clean finishes.";

  const url = `${baseUrl}/${locale}/contratista-pladur-valencia`;

  return {
    title,
    description,
    keywords: isEs
      ? [
          "contratista pladur valencia",
          "empresa pladur valencia",
          "instalador pladur valencia",
          "pladur valencia",
          "tabiques pladur valencia",
          "techos pladur valencia",
          "falsos techos valencia",
          "reformas pladur valencia",
          "aislamiento acústico valencia",
          "pladur obra nueva valencia",
          "pladur oficinas valencia",
          "pladur locales comerciales valencia",
          "paredes pladur valencia",
          "trasdosados pladur valencia",
        ]
      : [
          "drywall contractor valencia",
          "drywall company valencia",
          "drywall installation valencia",
          "plasterboard contractor valencia",
          "drywall partitions valencia",
          "drywall ceilings valencia",
          "suspended ceilings valencia",
          "acoustic insulation valencia",
          "commercial drywall valencia",
          "new build drywall valencia",
          "office drywall valencia",
          "apartment renovation drywall valencia",
        ],
    alternates: {
      canonical: url,
      languages: {
        es: `${baseUrl}/es/contratista-pladur-valencia`,
        en: `${baseUrl}/en/contratista-pladur-valencia`,
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "THEVULGO",
      type: "website",
      locale: isEs ? "es_ES" : "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}

export default async function Page({ params }: Props) {
  const { locale } = await params;
  const isEs = locale === "es";

  const pageUrl = `${baseUrl}/${locale}/contratista-pladur-valencia`;
  const estimateHref = `/${locale}/estimate?category=drywall`;

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, necesito presupuesto para un trabajo de pladur en Valencia. Puede ser tabiques, techos, reforma o local."
      : "Hi! I need an estimate for a drywall/plasterboard project in Valencia. It may include partitions, ceilings, renovation or a commercial unit."
  );

  const whatsappHref = `https://wa.me/${whatsappPhone}?text=${whatsappText}`;

  const serviceAreas = [
    "Valencia",
    "Ruzafa",
    "Benimaclet",
    "Campanar",
    "Patraix",
    "El Carmen",
    "Extramurs",
    "Cabanyal",
    "Malvarrosa",
    "Mislata",
    "Burjassot",
    "Paterna",
    "Torrent",
    "Alboraya",
    "Manises",
    "Xirivella",
    "Sagunto",
    "Cullera",
    "Gandía",
  ];

  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${baseUrl}/#localbusiness`,
    name: "THEVULGO",
    url: baseUrl,
    telephone: phone,
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Valencia",
      addressRegion: "Valencia",
      addressCountry: "ES",
    },
    areaServed: serviceAreas,
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${pageUrl}#service`,
    name: isEs
      ? "Contratista de pladur en Valencia"
      : "Drywall contractor in Valencia",
    serviceType: isEs
      ? "Pladur, tabiques, techos, falsos techos y reformas"
      : "Drywall, partitions, ceilings, suspended ceilings and renovations",
    provider: {
      "@id": `${baseUrl}/#localbusiness`,
    },
    areaServed: serviceAreas,
    url: pageUrl,
    description: isEs
      ? "Servicio profesional de pladur para viviendas, locales, oficinas, obra nueva, reformas, tabiques, techos, falsos techos, trasdosados y aislamiento acústico."
      : "Professional drywall service for homes, commercial units, offices, new builds, renovations, partitions, ceilings, suspended ceilings, wall linings and acoustic insulation.",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: isEs
        ? "Servicios de pladur en Valencia"
        : "Drywall services in Valencia",
      itemListElement: [
        isEs ? "Tabiques de pladur" : "Drywall partitions",
        isEs ? "Techos de pladur" : "Drywall ceilings",
        isEs ? "Falsos techos" : "Suspended ceilings",
        isEs ? "Trasdosados" : "Wall linings",
        isEs ? "Aislamiento acústico" : "Acoustic insulation",
        isEs ? "Reformas con pladur" : "Drywall renovations",
        isEs ? "Pladur para locales" : "Commercial drywall",
        isEs ? "Pladur para obra nueva" : "New build drywall",
      ].map((name) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name,
          areaServed: "Valencia",
        },
      })),
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: isEs ? "Inicio" : "Home",
        item: `${baseUrl}/${locale}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: isEs ? "Servicios" : "Services",
        item: `${baseUrl}/${locale}/services`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: isEs
          ? "Contratista de Pladur Valencia"
          : "Drywall Contractor Valencia",
        item: pageUrl,
      },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: isEs
          ? "¿Qué trabajos de pladur se pueden hacer en Valencia?"
          : "What drywall jobs can be done in Valencia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: isEs
            ? "Se pueden hacer tabiques de pladur, techos continuos, falsos techos, trasdosados, aislamiento acústico, aislamiento térmico, reparaciones, reformas de pisos, locales, oficinas y trabajos para obra nueva."
            : "Drywall partitions, continuous ceilings, suspended ceilings, wall linings, acoustic insulation, thermal insulation, repairs, apartment renovations, commercial units, offices and new-build work can be done.",
        },
      },
      {
        "@type": "Question",
        name: isEs
          ? "¿Trabajáis para reformas completas y obra nueva?"
          : "Do you work on full renovations and new builds?",
        acceptedAnswer: {
          "@type": "Answer",
          text: isEs
            ? "Sí. El servicio puede ser para pequeñas reparaciones, reformas de pisos, división de habitaciones, locales comerciales, oficinas y proyectos de obra nueva."
            : "Yes. The service can be for small repairs, apartment renovations, room divisions, commercial units, offices and new-build projects.",
        },
      },
      {
        "@type": "Question",
        name: isEs
          ? "¿Cómo se calcula un presupuesto de pladur?"
          : "How is a drywall estimate calculated?",
        acceptedAnswer: {
          "@type": "Answer",
          text: isEs
            ? "El presupuesto depende de metros, tipo de placa, perfilería, aislamiento, altura, accesos, acabado, pintura, complejidad y si se trata de vivienda, local u obra nueva."
            : "The estimate depends on square meters, board type, metal framing, insulation, height, access, finish, painting, complexity and whether it is a home, commercial unit or new build.",
        },
      },
    ],
  };

  const copy = {
    badge: isEs
      ? "THEVULGO • Contratista de Pladur Valencia"
      : "THEVULGO • Drywall Contractor Valencia",

    heroTitle: isEs
      ? "Contratista de Pladur en Valencia"
      : "Drywall Contractor in Valencia",

    heroSubtitle: isEs
      ? "Trabajos de pladur para viviendas, locales, oficinas y obra nueva: tabiques, techos, falsos techos, trasdosados, aislamiento acústico, reformas y acabados limpios. Presupuesto claro antes de empezar."
      : "Drywall and plasterboard work for homes, commercial units, offices and new builds: partitions, ceilings, suspended ceilings, wall linings, acoustic insulation, renovations and clean finishes. Clear estimate before starting.",

    primaryCta: isEs ? "Pedir presupuesto" : "Get estimate",
    whatsappCta: isEs ? "WhatsApp directo" : "Direct WhatsApp",

    heroNote: isEs
      ? "Ideal para reformas de pisos, locales, oficinas, habitaciones nuevas y obra nueva."
      : "Ideal for apartment renovations, commercial units, offices, new rooms and new builds.",

    servicesBadge: isEs
      ? "Servicios de pladur"
      : "Drywall services",

    servicesTitle: isEs
      ? "Pladur para reformas, obra nueva y locales"
      : "Drywall for renovations, new builds and commercial units",

    seoBadge: isEs
      ? "SEO • Pladur Valencia"
      : "SEO • Drywall Valencia",

    seoTitle: isEs
      ? "Empresa y contratista de pladur en Valencia"
      : "Drywall company and contractor in Valencia",

    finalTitle: isEs
      ? "¿Tienes un proyecto de pladur?"
      : "Do you have a drywall project?",

    finalText: isEs
      ? "Envía fotos, medidas, planos o una descripción del trabajo por WhatsApp para preparar una estimación clara."
      : "Send photos, measurements, plans or a description of the job by WhatsApp to prepare a clear estimate.",
  };

  const trustPoints = [
    {
      title: isEs ? "Para obra pequeña y grande" : "Small and large projects",
      text: isEs
        ? "Desde una reparación o tabique hasta techos, locales y reformas completas."
        : "From a repair or partition to ceilings, commercial units and full renovations.",
      icon: <Building2 className="h-5 w-5" />,
    },
    {
      title: isEs ? "Acabado limpio" : "Clean finish",
      text: isEs
        ? "Perfilería, placas, juntas, lijado y preparación para pintar con acabado cuidado."
        : "Metal framing, boards, joints, sanding and paint preparation with careful finish.",
      icon: <Paintbrush className="h-5 w-5" />,
    },
    {
      title: isEs ? "Presupuesto claro" : "Clear estimate",
      text: isEs
        ? "Estimación según metros, tipo de placa, aislamiento, altura y dificultad."
        : "Estimate based on meters, board type, insulation, height and difficulty.",
      icon: <ShieldCheck className="h-5 w-5" />,
    },
  ];

  const mainServices = [
    {
      title: isEs ? "Tabiques de pladur" : "Drywall partitions",
      desc: isEs
        ? "División de habitaciones, creación de nuevos espacios, paredes interiores y separaciones limpias."
        : "Room division, new spaces, interior walls and clean separations.",
      icon: <Layers className="h-5 w-5" />,
      href: `/${locale}/tabiques-pladur-valencia`,
    },
    {
      title: isEs ? "Techos de pladur" : "Drywall ceilings",
      desc: isEs
        ? "Techos continuos, bajadas de techo, foseados, iluminación LED y acabado moderno."
        : "Continuous ceilings, lowered ceilings, recessed details, LED lighting and modern finish.",
      icon: <Home className="h-5 w-5" />,
      href: `/${locale}/techos-pladur-valencia`,
    },
    {
      title: isEs ? "Falsos techos" : "Suspended ceilings",
      desc: isEs
        ? "Falsos techos para viviendas, oficinas, locales comerciales, bares y reformas."
        : "Suspended ceilings for homes, offices, commercial units, bars and renovations.",
      icon: <SquareIcon />,
      href: `/${locale}/falsos-techos-valencia`,
    },
    {
      title: isEs ? "Reformas con pladur" : "Drywall renovations",
      desc: isEs
        ? "Soluciones de pladur para reformar pisos, locales, habitaciones, pasillos y oficinas."
        : "Drywall solutions for apartment, unit, room, corridor and office renovations.",
      icon: <Hammer className="h-5 w-5" />,
      href: `/${locale}/reformas-pladur-valencia`,
    },
    {
      title: isEs ? "Instalación de pladur" : "Drywall installation",
      desc: isEs
        ? "Montaje de estructura metálica, placas, tornillería, juntas, masilla y preparación final."
        : "Metal framing, boards, screws, joints, compound and final preparation.",
      icon: <Drill className="h-5 w-5" />,
      href: `/${locale}/instalacion-pladur-valencia`,
    },
    {
      title: isEs ? "Presupuesto de pladur" : "Drywall estimate",
      desc: isEs
        ? "Presupuesto para trabajos de pladur según medidas, materiales, acabados y complejidad."
        : "Estimate for drywall work based on measurements, materials, finishes and complexity.",
      icon: <Ruler className="h-5 w-5" />,
      href: `/${locale}/presupuesto-pladur-valencia`,
    },
  ];

  function SquareIcon() {
    return <Warehouse className="h-5 w-5" />;
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="min-h-screen bg-white text-black font-sans">
        <section className="relative overflow-hidden px-4 py-16 sm:py-20">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-white" />
            <div className="absolute left-1/2 top-0 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-yellow-200/40 blur-3xl" />
            <div className="absolute right-8 top-28 h-[320px] w-[320px] rounded-full bg-yellow-100/70 blur-3xl" />
          </div>

          <div className="mx-auto w-full max-w-7xl">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-white px-4 py-1.5 text-xs font-extrabold text-black shadow-sm">
                <span className="h-2 w-2 rounded-full bg-yellow-400" />
                {copy.badge}
              </div>

              <h1 className="mx-auto mt-5 max-w-6xl text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
                {copy.heroTitle}
              </h1>

              <p className="mx-auto mt-5 max-w-4xl text-base leading-8 text-gray-600 sm:text-lg">
                {copy.heroSubtitle}
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  href={estimateHref}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-yellow-400 px-7 py-4 text-sm font-black text-black shadow-lg transition hover:scale-[1.02]"
                >
                  {copy.primaryCta}
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-gray-300 bg-white px-7 py-4 text-sm font-bold text-black shadow-md transition hover:scale-[1.02]"
                >
                  <MessageCircle className="h-4 w-4" />
                  {copy.whatsappCta}
                </a>
              </div>

              <p className="mt-5 text-sm font-medium text-gray-500">
                {copy.heroNote}
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
              {trustPoints.map((point) => (
                <div
                  key={point.title}
                  className="rounded-2xl border border-yellow-400 bg-white p-6 shadow-md transition hover:scale-[1.02] hover:shadow-xl"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-400 text-black shadow-md">
                    {point.icon}
                  </div>
                  <h2 className="mt-4 text-lg font-black">{point.title}</h2>
                  <p className="mt-2 text-sm leading-7 text-gray-600">
                    {point.text}
                  </p>
                </div>
              ))}
            </div>

            <section className="mt-16">
              <div className="rounded-3xl border border-yellow-400 bg-white p-8 shadow-xl sm:p-10">
                <div className="text-center">
                  <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-yellow-50 px-4 py-1 text-xs font-bold">
                    <BadgeCheck className="h-4 w-4" />
                    {copy.servicesBadge}
                  </div>

                  <h2 className="mx-auto mt-4 max-w-5xl text-3xl font-black sm:text-4xl">
                    {copy.servicesTitle}
                  </h2>

                  <p className="mx-auto mt-4 max-w-4xl text-base leading-8 text-gray-600">
                    {isEs
                      ? "El pladur permite construir rápido, limpio y con muchas posibilidades: paredes interiores, techos, trasdosados, aislamiento, zonas técnicas, locales comerciales y reformas completas."
                      : "Drywall allows fast, clean and flexible construction: interior walls, ceilings, wall linings, insulation, technical areas, commercial units and full renovations."}
                  </p>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {mainServices.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="group rounded-2xl border border-yellow-400 bg-white p-6 shadow-md transition hover:scale-[1.02] hover:shadow-xl"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-400 text-black shadow-md">
                        {service.icon}
                      </div>

                      <h3 className="mt-5 text-lg font-black">
                        {service.title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-gray-600">
                        {service.desc}
                      </p>

                      <div className="mt-5 inline-flex items-center gap-2 text-sm font-black text-black opacity-0 transition group-hover:opacity-100">
                        {isEs ? "Ver servicio" : "Open service"}
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
                        <section className="mt-16">

              <div className="rounded-3xl border border-yellow-400 bg-white p-8 shadow-xl sm:p-10 lg:p-12">

                <div className="mx-auto max-w-5xl">

                  <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-yellow-50 px-4 py-1 text-xs font-bold">

                    <Star className="h-4 w-4" />

                    {copy.seoBadge}

                  </div>

                  <h2 className="mt-5 text-3xl font-black sm:text-4xl">

                    {copy.seoTitle}

                  </h2>

                  <div className="mt-7 space-y-5 text-[15px] leading-8 text-gray-700 sm:text-base">

                    {isEs ? (

                      <>

                        <p>

                          Si buscas un{" "}

                          <strong>contratista de pladur en Valencia</strong>,

                          THEVULGO puede ayudarte con trabajos de construcción

                          seca para viviendas, locales comerciales, oficinas,

                          reformas de pisos y proyectos de obra nueva. El pladur

                          es una solución rápida, limpia y flexible para crear

                          paredes, techos, divisiones, trasdosados y zonas

                          técnicas sin necesidad de obra pesada tradicional.

                        </p>

                        <p>

                          Este servicio está pensado para clientes que necesitan

                          algo más que una pequeña reparación. También es útil

                          para propietarios, inversores, negocios, arquitectos,

                          interioristas, promotores pequeños y empresas que

                          necesitan preparar espacios nuevos, dividir estancias o

                          renovar interiores con un sistema práctico y moderno.

                        </p>

                        <p>

                          Trabajamos con tabiques de pladur, techos continuos,

                          falsos techos, trasdosados, aislamiento acústico,

                          aislamiento térmico, cierres de habitaciones,

                          distribución de oficinas, reformas de locales,

                          preparación de paredes para pintura y soluciones

                          interiores para proyectos residenciales y comerciales.

                        </p>

                        <p>

                          El objetivo no es solo colocar placas. Un buen trabajo

                          de pladur debe tener estructura correcta, perfilería

                          bien fijada, placas adecuadas, juntas bien tratadas,

                          esquinas limpias, superficie preparada y un acabado que

                          permita pintar o continuar con la siguiente fase de la

                          reforma sin problemas.

                        </p>

                      </>

                    ) : (

                      <>

                        <p>

                          If you are looking for a{" "}

                          <strong>drywall contractor in Valencia</strong>,

                          THEVULGO can help with dry construction work for

                          homes, commercial units, offices, apartment renovations

                          and new-build projects. Drywall is a fast, clean and

                          flexible solution to create walls, ceilings,

                          partitions, wall linings and technical areas without

                          heavy traditional construction.

                        </p>

                        <p>

                          This service is designed for clients who need more than

                          a small repair. It is also useful for property owners,

                          investors, businesses, architects, interior designers,

                          small developers and companies that need to prepare new

                          spaces, divide rooms or renovate interiors with a

                          practical modern system.

                        </p>

                        <p>

                          We work with drywall partitions, continuous ceilings,

                          suspended ceilings, wall linings, acoustic insulation,

                          thermal insulation, room closures, office layouts,

                          commercial unit renovations, wall preparation for

                          painting and interior solutions for residential and

                          commercial projects.

                        </p>

                        <p>

                          The goal is not just installing boards. Good drywall

                          work needs correct structure, well-fixed metal framing,

                          suitable boards, properly treated joints, clean corners,

                          prepared surface and a finish that allows painting or

                          the next renovation stage to continue smoothly.

                        </p>

                      </>

                    )}

                  </div>

                </div>

              </div>

            </section>

            <section className="mt-16">

              <div className="rounded-3xl border border-yellow-400 bg-white p-8 shadow-xl sm:p-10">

                <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr]">

                  <div>

                    <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-yellow-50 px-4 py-1 text-xs font-bold">

                      <Layers className="h-4 w-4" />

                      {isEs ? "Tabiques y divisiones" : "Partitions and room division"}

                    </div>

                    <h2 className="mt-5 text-3xl font-black sm:text-4xl">

                      {isEs

                        ? "Tabiques de pladur para crear nuevas estancias"

                        : "Drywall partitions to create new spaces"}

                    </h2>

                    <p className="mt-4 text-base leading-8 text-gray-600">

                      {isEs

                        ? "Los tabiques de pladur son una solución rápida para dividir espacios, crear habitaciones, cerrar zonas abiertas, preparar oficinas o modificar la distribución de una vivienda."

                        : "Drywall partitions are a fast solution to divide spaces, create rooms, close open areas, prepare offices or change the layout of a home."}

                    </p>

                    <div className="mt-6">

                      <Link

                        href={`/${locale}/tabiques-pladur-valencia`}

                        className="inline-flex items-center justify-center gap-2 rounded-2xl bg-yellow-400 px-6 py-3 text-sm font-black text-black shadow-lg transition hover:scale-[1.02]"

                      >

                        {isEs

                          ? "Ver tabiques de pladur"

                          : "Open drywall partitions"}

                        <ArrowRight className="h-4 w-4" />

                      </Link>

                    </div>

                  </div>

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

                    {(isEs

                      ? [

                          "Separar salón y dormitorio",

                          "Crear una habitación nueva",

                          "Cerrar una zona de oficina",

                          "Dividir un local comercial",

                          "Crear almacén o zona técnica",

                          "Preparar distribución para alquiler",

                          "Paredes interiores ligeras",

                          "Tabiques con aislamiento acústico",

                        ]

                      : [

                          "Separate living room and bedroom",

                          "Create a new room",

                          "Close an office area",

                          "Divide a commercial unit",

                          "Create storage or technical area",

                          "Prepare layout for rental",

                          "Lightweight interior walls",

                          "Partitions with acoustic insulation",

                        ]).map((item) => (

                      <div

                        key={item}

                        className="flex items-start gap-3 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm"

                      >

                        <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-yellow-500" />

                        <span className="text-sm leading-7 text-gray-700">

                          {item}

                        </span>

                      </div>

                    ))}

                  </div>

                </div>

              </div>

            </section>

            <section className="mt-16">

              <div className="rounded-3xl border border-yellow-400 bg-white p-8 shadow-xl sm:p-10">

                <div className="text-center">

                  <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-yellow-50 px-4 py-1 text-xs font-bold">

                    <Home className="h-4 w-4" />

                    {isEs ? "Techos y falsos techos" : "Ceilings and suspended ceilings"}

                  </div>

                  <h2 className="mx-auto mt-4 max-w-5xl text-3xl font-black sm:text-4xl">

                    {isEs

                      ? "Techos de pladur, falsos techos y soluciones decorativas"

                      : "Drywall ceilings, suspended ceilings and decorative solutions"}

                  </h2>

                  <p className="mx-auto mt-4 max-w-4xl text-base leading-8 text-gray-600">

                    {isEs

                      ? "Los techos de pladur permiten ocultar instalaciones, mejorar la estética, bajar alturas, integrar iluminación LED y renovar espacios sin una obra pesada."

                      : "Drywall ceilings allow you to hide installations, improve aesthetics, lower ceiling height, integrate LED lighting and renovate spaces without heavy work."}

                  </p>

                </div>

                <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">

                  {[

                    {

                      title: isEs ? "Techo continuo" : "Continuous ceiling",

                      text: isEs

                        ? "Acabado liso y moderno para viviendas, salones, pasillos y habitaciones."

                        : "Smooth modern finish for homes, living rooms, corridors and bedrooms.",

                      href: `/${locale}/techos-pladur-valencia`,

                      icon: <Home className="h-5 w-5" />,

                    },

                    {

                      title: isEs ? "Falso techo" : "Suspended ceiling",

                      text: isEs

                        ? "Ideal para ocultar instalaciones, cables, conductos o mejorar el aspecto del local."

                        : "Ideal to hide installations, cables, ducts or improve the look of a unit.",

                      href: `/${locale}/falsos-techos-valencia`,

                      icon: <Warehouse className="h-5 w-5" />,

                    },

                    {

                      title: isEs ? "Foseado LED" : "LED ceiling detail",

                      text: isEs

                        ? "Soluciones decorativas con iluminación indirecta para salones, locales y oficinas."

                        : "Decorative solutions with indirect lighting for living rooms, units and offices.",

                      href: `/${locale}/falso-techo-pladur-valencia`,

                      icon: <Zap className="h-5 w-5" />,

                    },

                  ].map((item) => (

                    <Link

                      key={item.href}

                      href={item.href}

                      className="group rounded-2xl border border-yellow-400 bg-white p-6 shadow-md transition hover:scale-[1.02] hover:shadow-xl"

                    >

                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-400 text-black shadow-md">

                        {item.icon}

                      </div>

                      <h3 className="mt-5 text-lg font-black">{item.title}</h3>

                      <p className="mt-3 text-sm leading-7 text-gray-600">

                        {item.text}

                      </p>

                      <div className="mt-5 inline-flex items-center gap-2 text-sm font-black opacity-0 transition group-hover:opacity-100">

                        {isEs ? "Ver servicio" : "Open service"}

                        <ArrowRight className="h-4 w-4" />

                      </div>

                    </Link>

                  ))}

                </div>

              </div>

            </section>

            <section className="mt-16">

              <div className="rounded-3xl border border-yellow-400 bg-white p-8 shadow-xl sm:p-10">

                <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1fr]">

                  <div>

                    <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-yellow-50 px-4 py-1 text-xs font-bold">

                      <Volume2 className="h-4 w-4" />

                      {isEs ? "Aislamiento acústico" : "Acoustic insulation"}

                    </div>

                    <h2 className="mt-5 text-3xl font-black sm:text-4xl">

                      {isEs

                        ? "Pladur con aislamiento acústico para viviendas y locales"

                        : "Drywall with acoustic insulation for homes and units"}

                    </h2>

                    <div className="mt-6 space-y-5 text-[15px] leading-8 text-gray-700 sm:text-base">

                      {isEs ? (

                        <>

                          <p>

                            El aislamiento acústico es una de las razones más

                            importantes para usar pladur en viviendas, oficinas y

                            locales. Un sistema bien planteado puede ayudar a

                            reducir ruido entre habitaciones, mejorar privacidad,

                            separar zonas de trabajo o preparar un local con más

                            confort.

                          </p>

                          <p>

                            La solución depende del tipo de pared, cámara,

                            perfilería, tipo de placa, lana mineral, espesor y

                            nivel de aislamiento esperado. No todos los trabajos

                            necesitan la misma composición, por eso conviene

                            revisar fotos, medidas y objetivo antes de

                            presupuestar.

                          </p>

                        </>

                      ) : (

                        <>

                          <p>

                            Acoustic insulation is one of the most important

                            reasons to use drywall in homes, offices and

                            commercial units. A properly designed system can help

                            reduce noise between rooms, improve privacy, separate

                            work areas or make a unit more comfortable.

                          </p>

                          <p>

                            The solution depends on wall type, cavity, metal

                            framing, board type, mineral wool, thickness and

                            expected insulation level. Not every job needs the

                            same build-up, so photos, measurements and goals

                            should be reviewed before estimating.

                          </p>

                        </>

                      )}

                    </div>

                  </div>

                  <div className="rounded-3xl border border-gray-200 bg-yellow-50 p-6">

                    <h3 className="text-xl font-black">

                      {isEs

                        ? "Aplicaciones habituales"

                        : "Common applications"}

                    </h3>

                    <div className="mt-5 space-y-4">

                      {(isEs

                        ? [

                            "Dormitorios con más privacidad",

                            "Separación entre viviendas o habitaciones",

                            "Oficinas y salas de reunión",

                            "Locales comerciales y estudios",

                            "Paredes dobles con lana mineral",

                            "Techos con mejora acústica",

                            "Zonas de trabajo en casa",

                            "Espacios para música o contenido",

                          ]

                        : [

                            "Bedrooms with more privacy",

                            "Separation between homes or rooms",

                            "Offices and meeting rooms",

                            "Commercial units and studios",

                            "Double walls with mineral wool",

                            "Ceilings with acoustic improvement",

                            "Home work areas",

                            "Music or content spaces",

                          ]).map((item) => (

                        <div key={item} className="flex items-start gap-3">

                          <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-yellow-500" />

                          <span className="text-sm leading-7 text-gray-700">

                            {item}

                          </span>

                        </div>

                      ))}

                    </div>

                  </div>

                </div>

              </div>

            </section>

            <section className="mt-16">

              <div className="rounded-3xl border border-yellow-400 bg-white p-8 shadow-xl sm:p-10">

                <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1fr]">

                  <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-400 text-black shadow-md">

                      <Thermometer className="h-5 w-5" />

                    </div>

                    <h2 className="mt-5 text-2xl font-black sm:text-3xl">

                      {isEs

                        ? "Aislamiento térmico y trasdosados"

                        : "Thermal insulation and wall linings"}

                    </h2>

                    <p className="mt-4 text-base leading-8 text-gray-600">

                      {isEs

                        ? "Los trasdosados de pladur pueden ayudar a mejorar paredes interiores, ocultar irregularidades, crear cámara técnica o añadir aislamiento térmico y acústico según el caso."

                        : "Drywall wall linings can help improve interior walls, hide irregularities, create a technical cavity or add thermal and acoustic insulation depending on the case."}

                    </p>

                    <div className="mt-5 space-y-3">

                      {(isEs

                        ? [

                            "Mejora de paredes antiguas",

                            "Cámara para instalaciones",

                            "Aislamiento térmico interior",

                            "Preparación para pintura",

                          ]

                        : [

                            "Improvement of old walls",

                            "Cavity for installations",

                            "Interior thermal insulation",

                            "Preparation for painting",

                          ]).map((item) => (

                        <div key={item} className="flex items-start gap-3">

                          <CheckCircle2 className="mt-1 h-5 w-5 text-yellow-500" />

                          <span className="text-sm leading-7 text-gray-700">

                            {item}

                          </span>

                        </div>

                      ))}

                    </div>

                  </div>

                  <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-400 text-black shadow-md">

                      <Sparkles className="h-5 w-5" />

                    </div>

                    <h2 className="mt-5 text-2xl font-black sm:text-3xl">

                      {isEs

                        ? "Acabados para pintar"

                        : "Finishes ready for painting"}

                    </h2>

                    <p className="mt-4 text-base leading-8 text-gray-600">

                      {isEs

                        ? "Después del montaje, el acabado de juntas, esquinas y superficie es clave. Una buena preparación facilita la pintura y evita que se noten uniones, tornillos o irregularidades."

                        : "After installation, joint, corner and surface finishing is key. Good preparation makes painting easier and prevents joints, screws or uneven areas from showing."}

                    </p>

                    <div className="mt-5 space-y-3">

                      {(isEs

                        ? [

                            "Tratamiento de juntas",

                            "Esquinas limpias",

                            "Lijado y preparación",

                            "Pintura o preparación para pintar",

                          ]

                        : [

                            "Joint treatment",

                            "Clean corners",

                            "Sanding and preparation",

                            "Painting or paint-ready preparation",

                          ]).map((item) => (

                        <div key={item} className="flex items-start gap-3">

                          <CheckCircle2 className="mt-1 h-5 w-5 text-yellow-500" />

                          <span className="text-sm leading-7 text-gray-700">

                            {item}

                          </span>

                        </div>

                      ))}

                    </div>

                  </div>

                </div>

              </div>

            </section>

                        <section className="mt-16">
              <div className="rounded-3xl border border-yellow-400 bg-white p-8 shadow-xl sm:p-10">
                <div className="text-center">
                  <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-yellow-50 px-4 py-1 text-xs font-bold">
                    <Building2 className="h-4 w-4" />
                    {isEs ? "Para viviendas" : "For homes"}
                  </div>

                  <h2 className="mx-auto mt-4 max-w-5xl text-3xl font-black sm:text-4xl">
                    {isEs
                      ? "Pladur para reformas de pisos, casas y habitaciones"
                      : "Drywall for apartment, house and room renovations"}
                  </h2>

                  <p className="mx-auto mt-4 max-w-4xl text-base leading-8 text-gray-600">
                    {isEs
                      ? "El pladur es una solución muy práctica para cambiar la distribución de una vivienda, crear nuevas habitaciones, mejorar paredes, bajar techos, preparar iluminación o renovar un piso sin obra pesada."
                      : "Drywall is a very practical solution to change a home layout, create new rooms, improve walls, lower ceilings, prepare lighting or renovate an apartment without heavy construction."}
                  </p>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                  {[
                    {
                      title: isEs ? "Reforma de piso" : "Apartment renovation",
                      text: isEs
                        ? "Tabiques, techos, paredes nuevas y preparación de interiores."
                        : "Partitions, ceilings, new walls and interior preparation.",
                      icon: <Home className="h-5 w-5" />,
                    },
                    {
                      title: isEs ? "Nuevas habitaciones" : "New rooms",
                      text: isEs
                        ? "Creación de dormitorios, despachos, vestidores o trasteros."
                        : "Creation of bedrooms, offices, dressing rooms or storage rooms.",
                      icon: <Layers className="h-5 w-5" />,
                    },
                    {
                      title: isEs ? "Salones modernos" : "Modern living rooms",
                      text: isEs
                        ? "Techos, foseados, paredes multimedia y zonas decorativas."
                        : "Ceilings, recessed details, media walls and decorative areas.",
                      icon: <Sparkles className="h-5 w-5" />,
                    },
                    {
                      title: isEs ? "Paredes listas para pintar" : "Paint-ready walls",
                      text: isEs
                        ? "Acabado de juntas, lijado y preparación para pintura."
                        : "Joint finishing, sanding and preparation for painting.",
                      icon: <Paintbrush className="h-5 w-5" />,
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-yellow-400 bg-white p-6 shadow-md"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-400 text-black shadow-md">
                        {item.icon}
                      </div>
                      <h3 className="mt-5 text-lg font-black">{item.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-gray-600">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="mt-16">
              <div className="rounded-3xl border border-yellow-400 bg-white p-8 shadow-xl sm:p-10">
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr]">
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-yellow-50 px-4 py-1 text-xs font-bold">
                      <Warehouse className="h-4 w-4" />
                      {isEs ? "Locales y negocios" : "Commercial units"}
                    </div>

                    <h2 className="mt-5 text-3xl font-black sm:text-4xl">
                      {isEs
                        ? "Pladur para locales comerciales, bares, restaurantes y oficinas"
                        : "Drywall for commercial units, bars, restaurants and offices"}
                    </h2>

                    <div className="mt-6 space-y-5 text-[15px] leading-8 text-gray-700 sm:text-base">
                      {isEs ? (
                        <>
                          <p>
                            Muchos locales comerciales necesitan una distribución
                            rápida, limpia y flexible. El pladur permite crear
                            almacenes, baños, zonas de atención, despachos,
                            separaciones interiores, techos técnicos y paredes
                            preparadas para pintura o decoración.
                          </p>

                          <p>
                            Para bares, restaurantes, oficinas, tiendas,
                            academias, clínicas o estudios, se puede trabajar con
                            tabiques, falsos techos, trasdosados, aislamiento y
                            soluciones para ocultar instalaciones.
                          </p>
                        </>
                      ) : (
                        <>
                          <p>
                            Many commercial units need a fast, clean and flexible
                            layout. Drywall makes it possible to create storage
                            rooms, bathrooms, reception areas, offices, interior
                            divisions, technical ceilings and walls ready for
                            painting or decoration.
                          </p>

                          <p>
                            For bars, restaurants, offices, shops, academies,
                            clinics or studios, work can include partitions,
                            suspended ceilings, wall linings, insulation and
                            solutions to hide installations.
                          </p>
                        </>
                      )}
                    </div>

                    <div className="mt-6">
                      <Link
                        href={`/${locale}/empresa-pladur-valencia`}
                        className="inline-flex items-center justify-center gap-2 rounded-2xl bg-yellow-400 px-6 py-3 text-sm font-black text-black shadow-lg transition hover:scale-[1.02]"
                      >
                        {isEs
                          ? "Ver empresa de pladur"
                          : "Open drywall company"}
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    {(isEs
                      ? [
                          "Locales comerciales",
                          "Bares y cafeterías",
                          "Restaurantes",
                          "Oficinas",
                          "Clínicas y centros estéticos",
                          "Tiendas y showrooms",
                          "Salas técnicas",
                          "Almacenes interiores",
                          "Recepciones",
                          "Separaciones de trabajo",
                        ]
                      : [
                          "Commercial units",
                          "Bars and cafés",
                          "Restaurants",
                          "Offices",
                          "Clinics and beauty centers",
                          "Shops and showrooms",
                          "Technical rooms",
                          "Interior storage rooms",
                          "Reception areas",
                          "Work separations",
                        ]).map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-3 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm"
                      >
                        <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-yellow-500" />
                        <span className="text-sm leading-7 text-gray-700">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section className="mt-16">
              <div className="rounded-3xl border border-yellow-400 bg-white p-8 shadow-xl sm:p-10">
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1fr]">
                  <div className="rounded-3xl border border-gray-200 bg-yellow-50 p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-400 text-black shadow-md">
                      <Building2 className="h-5 w-5" />
                    </div>

                    <h2 className="mt-5 text-2xl font-black sm:text-3xl">
                      {isEs
                        ? "Pladur para obra nueva y promociones"
                        : "Drywall for new builds and developments"}
                    </h2>

                    <p className="mt-4 text-base leading-8 text-gray-700">
                      {isEs
                        ? "En obra nueva, el pladur ayuda a avanzar rápido en interiores, crear divisiones, techos, zonas técnicas y acabados listos para pintura. También puede ser útil para promotores pequeños, reformas de viviendas completas o preparación de pisos para alquiler."
                        : "In new builds, drywall helps move interiors forward quickly, creating divisions, ceilings, technical zones and paint-ready finishes. It can also help small developers, full home renovations or rental apartment preparation."}
                    </p>

                    <div className="mt-5 space-y-3">
                      {(isEs
                        ? [
                            "Distribución interior",
                            "Techos y zonas técnicas",
                            "Paredes listas para pintar",
                            "Reformas para alquiler",
                            "Preparación de viviendas nuevas",
                          ]
                        : [
                            "Interior layout",
                            "Ceilings and technical zones",
                            "Paint-ready walls",
                            "Renovations for rental",
                            "Preparation of new homes",
                          ]).map((item) => (
                        <div key={item} className="flex items-start gap-3">
                          <CheckCircle2 className="mt-1 h-5 w-5 text-yellow-500" />
                          <span className="text-sm leading-7 text-gray-700">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-400 text-black shadow-md">
                      <Clock3 className="h-5 w-5" />
                    </div>

                    <h2 className="mt-5 text-2xl font-black sm:text-3xl">
                      {isEs
                        ? "Planificación del trabajo"
                        : "Work planning"}
                    </h2>

                    <p className="mt-4 text-base leading-8 text-gray-600">
                      {isEs
                        ? "Para trabajos grandes conviene preparar fotos, medidas, planos o una descripción clara. Así se puede valorar el alcance, materiales, tiempos, acceso, acabados y fases del proyecto."
                        : "For larger jobs, it is best to prepare photos, measurements, plans or a clear description. This helps evaluate scope, materials, timing, access, finishes and project phases."}
                    </p>

                    <div className="mt-5 space-y-3">
                      {(isEs
                        ? [
                            "Fotos del espacio",
                            "Medidas aproximadas",
                            "Planos si existen",
                            "Tipo de acabado esperado",
                            "Plazos deseados",
                          ]
                        : [
                            "Photos of the space",
                            "Approximate measurements",
                            "Plans if available",
                            "Expected finish type",
                            "Desired timing",
                          ]).map((item) => (
                        <div key={item} className="flex items-start gap-3">
                          <CheckCircle2 className="mt-1 h-5 w-5 text-yellow-500" />
                          <span className="text-sm leading-7 text-gray-700">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="mt-16">
              <div className="rounded-3xl border border-yellow-400 bg-white p-8 shadow-xl sm:p-10">
                <div className="text-center">
                  <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-yellow-50 px-4 py-1 text-xs font-bold">
                    <Wrench className="h-4 w-4" />
                    {isEs ? "Tipos de trabajo" : "Types of work"}
                  </div>

                  <h2 className="mx-auto mt-4 max-w-5xl text-3xl font-black sm:text-4xl">
                    {isEs
                      ? "Trabajos de pladur que se pueden preparar"
                      : "Drywall work that can be prepared"}
                  </h2>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {(isEs
                    ? [
                        {
                          title: "Paredes interiores",
                          text: "Paredes de pladur para dividir viviendas, locales u oficinas.",
                        },
                        {
                          title: "Cierre de habitaciones",
                          text: "Cerrar espacios abiertos y crear nuevas estancias funcionales.",
                        },
                        {
                          title: "Techos continuos",
                          text: "Techos lisos con acabado moderno para viviendas y locales.",
                        },
                        {
                          title: "Falsos techos técnicos",
                          text: "Ocultar cables, conductos, instalaciones o mejorar estética.",
                        },
                        {
                          title: "Trasdosados",
                          text: "Forrar paredes existentes y mejorar acabado o aislamiento.",
                        },
                        {
                          title: "Aislamiento acústico",
                          text: "Soluciones para reducir ruido y mejorar privacidad.",
                        },
                        {
                          title: "Aislamiento térmico",
                          text: "Mejorar confort interior con cámara y materiales adecuados.",
                        },
                        {
                          title: "Reparación de pladur",
                          text: "Reparación de agujeros, golpes, juntas o zonas dañadas.",
                        },
                        {
                          title: "Pintura y acabado",
                          text: "Preparación de superficies y acabado listo para pintar.",
                        },
                      ]
                    : [
                        {
                          title: "Interior walls",
                          text: "Drywall walls to divide homes, units or offices.",
                        },
                        {
                          title: "Room closures",
                          text: "Close open spaces and create new functional rooms.",
                        },
                        {
                          title: "Continuous ceilings",
                          text: "Smooth ceilings with modern finish for homes and units.",
                        },
                        {
                          title: "Technical suspended ceilings",
                          text: "Hide cables, ducts, installations or improve aesthetics.",
                        },
                        {
                          title: "Wall linings",
                          text: "Cover existing walls and improve finish or insulation.",
                        },
                        {
                          title: "Acoustic insulation",
                          text: "Solutions to reduce noise and improve privacy.",
                        },
                        {
                          title: "Thermal insulation",
                          text: "Improve indoor comfort with cavity and suitable materials.",
                        },
                        {
                          title: "Drywall repair",
                          text: "Repair holes, impacts, joints or damaged areas.",
                        },
                        {
                          title: "Painting and finish",
                          text: "Surface preparation and finish ready for painting.",
                        },
                      ]).map((item) => (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
                    >
                      <h3 className="text-lg font-black text-black">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-gray-600">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="mt-16">
              <div className="rounded-3xl border border-yellow-400 bg-white p-8 shadow-xl sm:p-10">
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr]">
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-yellow-50 px-4 py-1 text-xs font-bold">
                      <Ruler className="h-4 w-4" />
                      {isEs ? "Presupuesto" : "Estimate"}
                    </div>

                    <h2 className="mt-5 text-3xl font-black sm:text-4xl">
                      {isEs
                        ? "Cómo se calcula un presupuesto de pladur"
                        : "How a drywall estimate is calculated"}
                    </h2>

                    <p className="mt-4 text-base leading-8 text-gray-600">
                      {isEs
                        ? "Cada proyecto de pladur cambia según medidas, materiales, altura, accesos, aislamiento y acabado. Por eso es mejor enviar fotos, medidas y una descripción antes de confirmar precio."
                        : "Every drywall project changes depending on measurements, materials, height, access, insulation and finish. That is why it is best to send photos, measurements and a description before confirming the price."}
                    </p>

                    <div className="mt-6">
                      <Link
                        href={`/${locale}/presupuesto-pladur-valencia`}
                        className="inline-flex items-center justify-center gap-2 rounded-2xl bg-yellow-400 px-6 py-3 text-sm font-black text-black shadow-lg transition hover:scale-[1.02]"
                      >
                        {isEs
                          ? "Ver presupuesto de pladur"
                          : "Open drywall estimate"}
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    {(isEs
                      ? [
                          "Metros lineales o m²",
                          "Tipo de placa",
                          "Perfilería y estructura",
                          "Aislamiento interior",
                          "Altura de trabajo",
                          "Acceso al espacio",
                          "Nivel de acabado",
                          "Pintura o preparación",
                          "Complejidad de esquinas",
                          "Plazos y fases",
                        ]
                      : [
                          "Linear meters or m²",
                          "Board type",
                          "Framing and structure",
                          "Internal insulation",
                          "Working height",
                          "Access to the space",
                          "Finish level",
                          "Painting or preparation",
                          "Corner complexity",
                          "Timing and phases",
                        ]).map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-3 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm"
                      >
                        <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-yellow-500" />
                        <span className="text-sm leading-7 text-gray-700">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
                        <section className="mt-16">
              <div className="rounded-3xl border border-yellow-400 bg-white p-8 shadow-xl sm:p-10">
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.2fr]">
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-yellow-50 px-4 py-1 text-xs font-bold">
                      <MapPin className="h-4 w-4" />
                      {isEs ? "Zonas de trabajo" : "Service areas"}
                    </div>

                    <h2 className="mt-5 text-3xl font-black sm:text-4xl">
                      {isEs
                        ? "Pladur en Valencia y alrededores"
                        : "Drywall in Valencia and nearby areas"}
                    </h2>

                    <p className="mt-4 text-base leading-8 text-gray-600">
                      {isEs
                        ? "Trabajamos en Valencia ciudad y zonas cercanas. Para proyectos grandes, locales, oficinas u obra nueva, envía ubicación, fotos y medidas por WhatsApp."
                        : "We work in Valencia city and nearby areas. For larger projects, commercial units, offices or new builds, send location, photos and measurements by WhatsApp."}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
                    {serviceAreas.map((area) => (
                      <div
                        key={area}
                        className="rounded-2xl border border-gray-200 bg-white px-4 py-3 text-center text-sm font-bold text-gray-700 shadow-sm"
                      >
                        {area}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section className="mt-16">
              <div className="rounded-3xl border border-yellow-400 bg-white p-8 shadow-xl sm:p-10">
                <div className="text-center">
                  <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-yellow-50 px-4 py-1 text-xs font-bold">
                    <ArrowRight className="h-4 w-4" />
                    {isEs ? "Servicios relacionados" : "Related services"}
                  </div>

                  <h2 className="mx-auto mt-4 max-w-5xl text-3xl font-black sm:text-4xl">
                    {isEs
                      ? "Más páginas de pladur y reformas"
                      : "More drywall and renovation pages"}
                  </h2>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
                  {[
                    {
                      label: isEs ? "Pladur Valencia" : "Drywall Valencia",
                      href: `/${locale}/pladur-valencia`,
                    },
                    {
                      label: isEs
                        ? "Empresa Pladur Valencia"
                        : "Drywall Company Valencia",
                      href: `/${locale}/empresa-pladur-valencia`,
                    },
                    {
                      label: isEs
                        ? "Instalador Pladur Valencia"
                        : "Drywall Installer Valencia",
                      href: `/${locale}/instalador-pladur-valencia`,
                    },
                    {
                      label: isEs
                        ? "Instalación Pladur Valencia"
                        : "Drywall Installation Valencia",
                      href: `/${locale}/instalacion-pladur-valencia`,
                    },
                    {
                      label: isEs
                        ? "Reformas Pladur Valencia"
                        : "Drywall Renovations Valencia",
                      href: `/${locale}/reformas-pladur-valencia`,
                    },
                    {
                      label: isEs
                        ? "Reparación Pladur Valencia"
                        : "Drywall Repair Valencia",
                      href: `/${locale}/reparacion-pladur-valencia`,
                    },
                    {
                      label: isEs
                        ? "Tabiques Pladur Valencia"
                        : "Drywall Partitions Valencia",
                      href: `/${locale}/tabiques-pladur-valencia`,
                    },
                    {
                      label: isEs
                        ? "Techos Pladur Valencia"
                        : "Drywall Ceilings Valencia",
                      href: `/${locale}/techos-pladur-valencia`,
                    },
                    {
                      label: isEs
                        ? "Falsos Techos Valencia"
                        : "Suspended Ceilings Valencia",
                      href: `/${locale}/falsos-techos-valencia`,
                    },
                    {
                      label: isEs
                        ? "Presupuesto Pladur Valencia"
                        : "Drywall Estimate Valencia",
                      href: `/${locale}/presupuesto-pladur-valencia`,
                    },
                  ].map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="group flex items-center justify-between rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:border-yellow-400 hover:shadow-md"
                    >
                      <span className="text-sm font-black">{link.label}</span>
                      <ArrowRight className="h-4 w-4 text-gray-400 transition group-hover:text-yellow-500" />
                    </Link>
                  ))}
                </div>
              </div>
            </section>

            <section className="mt-16">
              <div className="rounded-3xl border border-yellow-400 bg-white p-8 shadow-xl sm:p-10">
                <div className="mx-auto max-w-5xl">
                  <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-yellow-50 px-4 py-1 text-xs font-bold">
                    <BadgeCheck className="h-4 w-4" />
                    FAQ
                  </div>

                  <h2 className="mt-5 text-3xl font-black sm:text-4xl">
                    {isEs
                      ? "Preguntas frecuentes sobre pladur en Valencia"
                      : "Drywall FAQ in Valencia"}
                  </h2>

                  <div className="mt-10 space-y-7">
                    {(isEs
                      ? [
                          {
                            q: "¿Qué trabajos de pladur podéis hacer?",
                            a: "Tabiques, techos, falsos techos, trasdosados, aislamiento acústico, reparaciones, reformas de pisos, locales, oficinas y preparación para pintura.",
                          },
                          {
                            q: "¿Hacéis trabajos grandes de pladur?",
                            a: "Sí. Podemos valorar reformas completas, locales, oficinas, divisiones interiores, techos y trabajos para obra nueva o viviendas en preparación.",
                          },
                          {
                            q: "¿También hacéis pequeños trabajos?",
                            a: "Sí. También se pueden hacer reparaciones, agujeros, parches, zonas dañadas, pequeños tabiques o ajustes de pladur.",
                          },
                          {
                            q: "¿El pladur sirve para dividir habitaciones?",
                            a: "Sí. Es una de las aplicaciones más habituales. Permite crear dormitorios, despachos, vestidores, almacenes o nuevas zonas interiores.",
                          },
                          {
                            q: "¿Se puede hacer aislamiento acústico con pladur?",
                            a: "Sí. Se puede preparar una solución con perfilería, placas y lana mineral según el nivel de aislamiento que se necesite.",
                          },
                          {
                            q: "¿Qué necesito enviar para un presupuesto?",
                            a: "Fotos del espacio, medidas aproximadas, altura, tipo de trabajo, acabado esperado y si tienes planos o idea de distribución.",
                          },
                          {
                            q: "¿Trabajáis para locales comerciales?",
                            a: "Sí. Se pueden preparar tabiques, falsos techos, zonas técnicas, separaciones, almacenes, oficinas y paredes listas para pintar.",
                          },
                          {
                            q: "¿El precio depende de los metros?",
                            a: "Sí, pero también depende del tipo de placa, perfilería, aislamiento, altura, acceso, acabado y dificultad.",
                          },
                          {
                            q: "¿Podéis dejar el pladur listo para pintar?",
                            a: "Sí. Se puede preparar con tratamiento de juntas, masilla, esquinas y lijado según el acabado requerido.",
                          },
                          {
                            q: "¿Trabajáis en Valencia y alrededores?",
                            a: "Sí. Valencia ciudad y zonas cercanas como Ruzafa, Benimaclet, Campanar, Patraix, Mislata, Paterna, Torrent y alrededores.",
                          },
                        ]
                      : [
                          {
                            q: "What drywall work can you do?",
                            a: "Partitions, ceilings, suspended ceilings, wall linings, acoustic insulation, repairs, apartment renovations, commercial units, offices and paint preparation.",
                          },
                          {
                            q: "Do you handle larger drywall projects?",
                            a: "Yes. Full renovations, commercial units, offices, interior divisions, ceilings and new-build preparation can be reviewed.",
                          },
                          {
                            q: "Do you also do small jobs?",
                            a: "Yes. Repairs, holes, patches, damaged areas, small partitions or drywall adjustments can also be done.",
                          },
                          {
                            q: "Can drywall be used to divide rooms?",
                            a: "Yes. It is one of the most common uses. It can create bedrooms, offices, dressing rooms, storage areas or new interior zones.",
                          },
                          {
                            q: "Can drywall improve acoustic insulation?",
                            a: "Yes. A solution can be prepared with framing, boards and mineral wool depending on the insulation level needed.",
                          },
                          {
                            q: "What should I send for an estimate?",
                            a: "Photos of the space, approximate measurements, height, job type, expected finish and any plans or layout ideas.",
                          },
                          {
                            q: "Do you work with commercial units?",
                            a: "Yes. Partitions, suspended ceilings, technical areas, separations, storage rooms, offices and paint-ready walls can be prepared.",
                          },
                          {
                            q: "Does price depend on meters?",
                            a: "Yes, but also on board type, framing, insulation, height, access, finish and difficulty.",
                          },
                          {
                            q: "Can you leave drywall ready for painting?",
                            a: "Yes. It can be prepared with joint treatment, compound, corners and sanding depending on the required finish.",
                          },
                          {
                            q: "Do you work in Valencia and nearby areas?",
                            a: "Yes. Valencia city and nearby areas such as Ruzafa, Benimaclet, Campanar, Patraix, Mislata, Paterna, Torrent and surrounding areas.",
                          },
                        ]).map((item, index) => (
                      <div
                        key={item.q}
                        className={
                          index === 0 ? "" : "border-t border-gray-200 pt-7"
                        }
                      >
                        <h3 className="text-lg font-black">{item.q}</h3>
                        <p className="mt-2 text-sm leading-7 text-gray-600 sm:text-base">
                          {item.a}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section className="mt-16">
              <div className="rounded-3xl border border-yellow-400 bg-white p-8 shadow-xl sm:p-10">
                <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
                  <div className="max-w-3xl">
                    <h2 className="text-3xl font-black sm:text-4xl">
                      {copy.finalTitle}
                    </h2>
                    <p className="mt-4 text-base leading-8 text-gray-600">
                      {copy.finalText}
                    </p>
                  </div>

                  <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                    <Link
                      href={estimateHref}
                      className="inline-flex items-center justify-center gap-2 rounded-2xl bg-yellow-400 px-7 py-4 text-sm font-black text-black shadow-lg transition hover:scale-[1.02]"
                    >
                      {copy.primaryCta}
                      <ArrowRight className="h-4 w-4" />
                    </Link>

                    <a
                      href={whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-2xl border border-gray-300 bg-white px-7 py-4 text-sm font-bold text-black shadow-md transition hover:scale-[1.02]"
                    >
                      <MessageCircle className="h-4 w-4" />
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </section>

            <div className="mt-10 text-center text-sm text-gray-500">
              {isEs
                ? "THEVULGO • Contratista de pladur Valencia • Tabiques • Techos • Falsos techos • Reformas"
                : "THEVULGO • Drywall contractor Valencia • Partitions • Ceilings • Suspended ceilings • Renovations"}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}