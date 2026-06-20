import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  Clock3,
  Euro,
  Grid3X3,
  Hammer,
  Home,
  MapPin,
  MessageCircle,
  PanelTop,
  Ruler,
  ShieldCheck,
  Sparkles,
  Star,
  Store,
  Wrench,
  Zap,
} from "lucide-react";

type Props = {
  params: Promise<{ locale: string }>;
};

const baseUrl = "https://www.thevulgo.es";
const phone = "34610076942";
const pagePath = "/techo-registrable-valencia";

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

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";

  const title = isEs
    ? "Techo Registrable en Valencia | Instalación y Presupuesto | THEVULGO"
    : "Suspended Ceiling in Valencia | Installation & Quote | THEVULGO";

  const description = isEs
    ? "Instalación y reparación de techo registrable en Valencia. Techos desmontables para oficinas, locales, negocios, placas registrables, estructura, remates y presupuesto por WhatsApp."
    : "Installation and repair of suspended ceilings in Valencia. Removable ceilings for offices, shops and businesses, ceiling tiles, grid structure, finishing and WhatsApp quote.";

  return {
    title,
    description,
    keywords: isEs
      ? [
          "techo registrable valencia",
          "techos registrables valencia",
          "instalar techo registrable valencia",
          "instalacion techo registrable valencia",
          "instalación techo registrable valencia",
          "techo desmontable valencia",
          "techos desmontables valencia",
          "falso techo registrable valencia",
          "precio techo registrable valencia",
          "presupuesto techo registrable valencia",
          "techo registrable oficina valencia",
          "techo registrable local valencia",
          "placas techo registrable valencia",
          "pladur valencia",
          "falso techo pladur valencia",
          "empresa pladur valencia",
          "presupuesto pladur valencia",
        ]
      : [
          "suspended ceiling valencia",
          "removable ceiling valencia",
          "drop ceiling valencia",
          "suspended ceiling installation valencia",
          "ceiling tiles valencia",
          "office suspended ceiling valencia",
          "shop suspended ceiling valencia",
          "suspended ceiling quote valencia",
          "false ceiling valencia",
        ],
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `${baseUrl}/${locale}${pagePath}`,
      languages: {
        es: `${baseUrl}/es${pagePath}`,
        en: `${baseUrl}/en${pagePath}`,
        "x-default": `${baseUrl}/es${pagePath}`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${baseUrl}/${locale}${pagePath}`,
      siteName: "THEVULGO",
      locale: isEs ? "es_ES" : "en_GB",
      type: "website",
    },
  };
}

export default async function TechoRegistrableValenciaPage({ params }: Props) {
  const { locale } = await params;
  const isEs = locale === "es";

  const estimateHref = `/${locale}/estimate?category=handyman`;

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, necesito presupuesto para un techo registrable en Valencia. Puedo enviar fotos, medidas y detalles del local u oficina."
      : "Hi, I need a quote for a suspended ceiling in Valencia. I can send photos, measurements and details of the shop or office."
  );

  const whatsappHref = `https://wa.me/${phone}?text=${whatsappText}`;

  const services = isEs
    ? [
        "Instalación de techo registrable",
        "Reparación de techo registrable",
        "Techo desmontable para oficina",
        "Techo registrable para local",
        "Cambio de placas dañadas",
        "Revisión de estructura",
        "Ajuste de perfilería",
        "Remates perimetrales",
        "Preparación para iluminación",
        "Acceso a instalaciones",
        "Revisión de altura y nivel",
        "Presupuesto por fotos o visita",
      ]
    : [
        "Suspended ceiling installation",
        "Suspended ceiling repair",
        "Removable ceiling for offices",
        "Suspended ceiling for shops",
        "Replacement of damaged tiles",
        "Grid structure inspection",
        "Profile adjustment",
        "Perimeter finishing",
        "Preparation for lighting",
        "Access to installations",
        "Height and level inspection",
        "Quote by photos or visit",
      ];

  const prices = isEs
    ? [
        ["Visita / revisión", "desde 49 €"],
        ["Cambio de placa dañada", "desde 35 €"],
        ["Reparación pequeña", "desde 45 €"],
        ["Ajuste de perfilería", "presupuesto"],
        ["Techo registrable pequeño", "presupuesto"],
        ["Techo registrable completo", "presupuesto"],
        ["Trabajo para oficina", "presupuesto"],
        ["Trabajo para local comercial", "presupuesto"],
      ]
    : [
        ["Visit / inspection", "from €49"],
        ["Damaged tile replacement", "from €35"],
        ["Small repair", "from €45"],
        ["Profile adjustment", "quote"],
        ["Small suspended ceiling", "quote"],
        ["Complete suspended ceiling", "quote"],
        ["Office work", "quote"],
        ["Commercial space work", "quote"],
      ];

  const factors = isEs
    ? [
        "Metros cuadrados del techo",
        "Altura del local u oficina",
        "Estado del techo actual",
        "Tipo de placa registrable",
        "Tipo de perfilería",
        "Iluminación existente",
        "Acceso a instalaciones",
        "Nivelación y remates",
        "Tiempo y materiales necesarios",
      ]
    : [
        "Ceiling square meters",
        "Shop or office height",
        "Current ceiling condition",
        "Type of ceiling tile",
        "Type of grid profiles",
        "Existing lighting",
        "Access to installations",
        "Leveling and finishing",
        "Required time and materials",
      ];

  const moneyLinks = [
    {
      title: isEs ? "Pladur Valencia" : "Drywall Valencia",
      desc: isEs
        ? "Página principal del servicio de pladur en Valencia."
        : "Main drywall and plasterboard service page in Valencia.",
      href: `/${locale}/pladur-valencia`,
    },
    {
      title: isEs ? "Falso Techo Pladur Valencia" : "Plasterboard False Ceiling Valencia",
      desc: isEs
        ? "Instalación y reparación de falsos techos de pladur."
        : "Installation and repair of plasterboard false ceilings.",
      href: `/${locale}/falso-techo-pladur-valencia`,
    },
    {
      title: isEs ? "Presupuesto Pladur Valencia" : "Drywall Quote Valencia",
      desc: isEs
        ? "Pide precio según fotos, medidas, altura y acabado."
        : "Request a price based on photos, measurements, height and finish.",
      href: `/${locale}/presupuesto-pladur-valencia`,
    },
    {
      title: isEs ? "Empresa Pladur Valencia" : "Drywall Company Valencia",
      desc: isEs
        ? "Servicio de pladur para viviendas, locales, oficinas y negocios."
        : "Drywall service for homes, shops, offices and businesses.",
      href: `/${locale}/empresa-pladur-valencia`,
    },
    {
      title: isEs ? "Reformas Pladur Valencia" : "Plasterboard Renovations Valencia",
      desc: isEs
        ? "Reformas interiores con pladur, techos, tabiques y reparaciones."
        : "Interior drywall renovations, ceilings, partitions and repairs.",
      href: `/${locale}/reformas-pladur-valencia`,
    },
    {
      title: isEs ? "Reparación Pladur Valencia" : "Drywall Repair Valencia",
      desc: isEs
        ? "Reparación de agujeros, grietas, golpes y zonas dañadas."
        : "Repair of holes, cracks, impact damage and damaged areas.",
      href: `/${locale}/reparacion-pladur-valencia`,
    },
  ];

  const useCases = [
    {
      icon: Building2,
      title: isEs ? "Oficinas" : "Offices",
      text: isEs
        ? "Techos registrables para oficinas donde se necesita acceso a cableado, climatización, iluminación o instalaciones."
        : "Suspended ceilings for offices where access to wiring, air conditioning, lighting or installations is needed.",
    },
    {
      icon: Store,
      title: isEs ? "Locales comerciales" : "Commercial spaces",
      text: isEs
        ? "Solución práctica para tiendas, bares, restaurantes, pequeños negocios, salas de trabajo y espacios comerciales."
        : "Practical solution for shops, bars, restaurants, small businesses, work rooms and commercial spaces.",
    },
    {
      icon: Grid3X3,
      title: isEs ? "Placas registrables" : "Removable tiles",
      text: isEs
        ? "Permiten acceder al falso techo para mantenimiento, cables, máquinas, tubos, luces o revisiones futuras."
        : "They allow access above the ceiling for maintenance, cables, machines, pipes, lighting or future inspections.",
    },
  ];

  const faqs = isEs
    ? [
        {
          q: "¿Cuánto cuesta instalar un techo registrable en Valencia?",
          a: "Depende de metros cuadrados, altura, tipo de placa, perfilería, estado del espacio, iluminación, remates y dificultad. Normalmente se valora con fotos, medidas o visita.",
        },
        {
          q: "¿Qué es un techo registrable?",
          a: "Es un falso techo desmontable formado por perfilería y placas que se pueden retirar para acceder a instalaciones, cables, climatización o iluminación.",
        },
        {
          q: "¿Instaláis techos registrables en oficinas?",
          a: "Sí. Podemos valorar instalación o reparación de techos registrables en oficinas, salas de trabajo, despachos y espacios profesionales.",
        },
        {
          q: "¿Instaláis techos registrables en locales comerciales?",
          a: "Sí. Trabajamos en locales, tiendas, bares, restaurantes y pequeños negocios en Valencia y alrededores.",
        },
        {
          q: "¿Se pueden cambiar solo algunas placas dañadas?",
          a: "Sí. Si la estructura está bien, podemos valorar cambio de placas dañadas, manchadas o rotas según disponibilidad del material compatible.",
        },
        {
          q: "¿El techo registrable sirve para acceder a instalaciones?",
          a: "Sí. Es una de sus ventajas principales. Permite acceder a cableado, iluminación, climatización, tuberías o zonas técnicas sin romper el techo.",
        },
        {
          q: "¿Puedo pedir presupuesto por WhatsApp?",
          a: "Sí. Envía fotos del techo o local, medidas aproximadas, altura, estado actual y explica si necesitas instalación nueva, reparación o cambio de placas.",
        },
        {
          q: "¿Trabajáis cerca de Valencia?",
          a: "Sí. Trabajamos en Valencia ciudad y zonas cercanas como Mislata, Burjassot, Paterna, Torrent, Sagunto, Cullera y Gandía según disponibilidad.",
        },
      ]
    : [
        {
          q: "How much does it cost to install a suspended ceiling in Valencia?",
          a: "It depends on square meters, height, tile type, grid profiles, space condition, lighting, finishing and difficulty. It is usually estimated with photos, measurements or a visit.",
        },
        {
          q: "What is a suspended ceiling?",
          a: "It is a removable false ceiling made of profiles and tiles that can be removed to access installations, cables, air conditioning or lighting.",
        },
        {
          q: "Do you install suspended ceilings in offices?",
          a: "Yes. We can quote installation or repair of suspended ceilings in offices, work rooms, private offices and professional spaces.",
        },
        {
          q: "Do you install suspended ceilings in commercial spaces?",
          a: "Yes. We work in shops, bars, restaurants and small businesses in Valencia and nearby areas.",
        },
        {
          q: "Can only some damaged tiles be replaced?",
          a: "Yes. If the structure is in good condition, we can quote replacement of damaged, stained or broken tiles depending on compatible material availability.",
        },
        {
          q: "Does a suspended ceiling allow access to installations?",
          a: "Yes. This is one of its main advantages. It allows access to wiring, lighting, air conditioning, pipes or technical areas without breaking the ceiling.",
        },
        {
          q: "Can I request a quote by WhatsApp?",
          a: "Yes. Send photos of the ceiling or space, approximate measurements, height, current condition and explain whether you need new installation, repair or tile replacement.",
        },
        {
          q: "Do you work near Valencia?",
          a: "Yes. We work in Valencia city and nearby areas such as Mislata, Burjassot, Paterna, Torrent, Sagunto, Cullera and Gandía depending on availability.",
        },
      ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `${baseUrl}/#localbusiness`,
        name: "THEVULGO",
        url: baseUrl,
        telephone: `+${phone}`,
        priceRange: "€€",
        areaServed: areas,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Valencia",
          addressCountry: "ES",
        },
      },
      {
        "@type": "Service",
        "@id": `${baseUrl}/${locale}${pagePath}#service`,
        name: isEs
          ? "Techo registrable en Valencia"
          : "Suspended ceiling in Valencia",
        serviceType: isEs
          ? "Instalación y reparación de techos registrables"
          : "Installation and repair of suspended ceilings",
        provider: {
          "@id": `${baseUrl}/#localbusiness`,
        },
        areaServed: areas,
        url: `${baseUrl}/${locale}${pagePath}`,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: isEs
            ? "Servicios de techo registrable en Valencia"
            : "Suspended ceiling services in Valencia",
          itemListElement: moneyLinks.map((item) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: item.title,
              url: `${baseUrl}${item.href}`,
            },
          })),
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.a,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: `${baseUrl}/${locale}`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: isEs ? "Techo Registrable Valencia" : "Suspended Ceiling Valencia",
            item: `${baseUrl}/${locale}${pagePath}`,
          },
        ],
      },
    ],
  };

  return (
    <main className="bg-white text-neutral-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="relative overflow-hidden border-b border-yellow-200 bg-gradient-to-b from-yellow-50 via-white to-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-white px-4 py-2 text-sm font-semibold shadow-sm">
              <MapPin className="h-4 w-4 text-yellow-500" />
              THEVULGO • Valencia & nearby
            </div>

            <h1 className="text-4xl font-black tracking-tight sm:text-6xl">
              {isEs
                ? "Techo registrable en Valencia"
                : "Suspended ceiling in Valencia"}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-700">
              {isEs
                ? "Instalación y reparación de techos registrables en Valencia para oficinas, locales comerciales, tiendas, bares, restaurantes y pequeños negocios. Techo desmontable con placas, perfilería, acceso técnico, remates y presupuesto por WhatsApp."
                : "Installation and repair of suspended ceilings in Valencia for offices, commercial spaces, shops, bars, restaurants and small businesses. Removable ceiling with tiles, grid profiles, technical access, finishing and WhatsApp quote."}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappHref}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-yellow-400 px-6 py-4 font-bold text-black shadow-lg transition hover:scale-105"
              >
                <MessageCircle className="h-5 w-5" />
                {isEs ? "Pedir presupuesto por WhatsApp" : "Request estimate by WhatsApp"}
              </a>

              <Link
                href={estimateHref}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-neutral-300 bg-white px-6 py-4 font-bold shadow-sm transition hover:scale-105"
              >
                {isEs ? "Abrir formulario" : "Open estimate form"}
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                {
                  icon: Grid3X3,
                  title: isEs ? "Techo desmontable" : "Removable ceiling",
                  text: isEs
                    ? "Placas registrables para acceso técnico."
                    : "Removable tiles for technical access.",
                },
                {
                  icon: Building2,
                  title: isEs ? "Oficinas y locales" : "Offices and shops",
                  text: isEs
                    ? "Solución práctica para negocios."
                    : "Practical solution for businesses.",
                },
                {
                  icon: BadgeCheck,
                  title: isEs ? "Acabado limpio" : "Clean finish",
                  text: isEs
                    ? "Perfilería, nivelación y remates."
                    : "Profiles, leveling and finishing.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-yellow-300 bg-white p-5 shadow-md"
                >
                  <item.icon className="mb-3 h-6 w-6 text-yellow-500" />
                  <h3 className="font-bold">{item.title}</h3>
                  <p className="mt-1 text-sm text-neutral-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <h2 className="text-3xl font-black">
          {isEs ? "Servicios de techo registrable" : "Suspended ceiling services"}
        </h2>

        <p className="mt-4 max-w-3xl text-neutral-700">
          {isEs
            ? "El techo registrable es una solución práctica cuando necesitas un falso techo desmontable con acceso a instalaciones. Es muy habitual en oficinas, locales comerciales, negocios y espacios donde hay cableado, climatización o iluminación técnica."
            : "A suspended ceiling is a practical solution when you need a removable false ceiling with access to installations. It is very common in offices, commercial spaces, businesses and areas with wiring, air conditioning or technical lighting."}
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 rounded-2xl border border-yellow-300 bg-white p-5 shadow-md"
            >
              <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-yellow-500" />
              <span className="font-semibold leading-7">{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr]">
            <div>
              <h2 className="text-3xl font-black">
                {isEs
                  ? "¿Cuánto cuesta un techo registrable?"
                  : "How much does a suspended ceiling cost?"}
              </h2>

              <p className="mt-5 text-lg leading-8 text-neutral-700">
                {isEs
                  ? "El precio de un techo registrable en Valencia depende de los metros cuadrados, altura del local, tipo de placa, tipo de perfilería, estado del techo actual, iluminación, remates y dificultad de acceso."
                  : "The price of a suspended ceiling in Valencia depends on square meters, space height, tile type, profile type, current ceiling condition, lighting, finishing and access difficulty."}
              </p>

              <p className="mt-5 text-lg leading-8 text-neutral-700">
                {isEs
                  ? "Para dar presupuesto necesitamos fotos del espacio, medidas aproximadas, altura, estado actual y saber si necesitas instalación completa, reparación, cambio de placas o ajuste de estructura."
                  : "To give a quote, we need photos of the space, approximate measurements, height, current condition and whether you need full installation, repair, tile replacement or grid adjustment."}
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  isEs ? "Metros cuadrados" : "Square meters",
                  isEs ? "Altura del techo" : "Ceiling height",
                  isEs ? "Tipo de placa" : "Tile type",
                  isEs ? "Perfilería" : "Grid profiles",
                  isEs ? "Iluminación" : "Lighting",
                  isEs ? "Acceso técnico" : "Technical access",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm"
                  >
                    <CheckCircle2 className="h-5 w-5 text-yellow-500" />
                    <span className="font-semibold">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-yellow-300 bg-white p-6 shadow-xl">
              <h3 className="flex items-center gap-2 text-xl font-black">
                <Euro className="h-6 w-6 text-yellow-500" />
                {isEs ? "Precios orientativos" : "Guide prices"}
              </h3>

              <div className="mt-5 space-y-3">
                {prices.map(([name, price]) => (
                  <div
                    key={name}
                    className="flex items-center justify-between gap-4 rounded-xl bg-yellow-50 p-4"
                  >
                    <span className="font-semibold">{name}</span>
                    <span className="text-right font-black">{price}</span>
                  </div>
                ))}
              </div>

              <p className="mt-5 text-sm leading-6 text-neutral-600">
                {isEs
                  ? "Los precios son orientativos. El precio final depende de medidas, materiales, altura, acceso, estructura, placas y tiempo necesario."
                  : "Prices are indicative. Final price depends on measurements, materials, height, access, structure, tiles and required time."}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <h2 className="text-3xl font-black">
          {isEs ? "Factores que influyen en el presupuesto" : "Factors that affect the quote"}
        </h2>

        <p className="mt-4 max-w-3xl text-neutral-700">
          {isEs
            ? "Un techo registrable puede variar mucho de precio según el tamaño del espacio, el tipo de placa, la perfilería, el estado del techo y las instalaciones que deben quedar accesibles."
            : "A suspended ceiling can vary greatly in price depending on space size, tile type, grid profiles, ceiling condition and installations that must remain accessible."}
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {factors.map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 rounded-2xl border border-neutral-200 bg-white p-5 shadow-md"
            >
              <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-yellow-500" />
              <span className="font-semibold leading-7">{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-black text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-black">
                {isEs
                  ? "Techos registrables para oficinas y negocios"
                  : "Suspended ceilings for offices and businesses"}
              </h2>

              <p className="mt-5 text-lg leading-8 text-neutral-300">
                {isEs
                  ? "El techo registrable es muy útil cuando necesitas una solución limpia, desmontable y práctica. Permite acceder al espacio superior para revisar cables, luminarias, climatización, máquinas o instalaciones sin romper el techo."
                  : "A suspended ceiling is very useful when you need a clean, removable and practical solution. It allows access to the space above to inspect cables, lights, air conditioning, machines or installations without breaking the ceiling."}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                [Building2, isEs ? "Oficinas" : "Offices"],
                [Store, isEs ? "Locales" : "Shops"],
                [Grid3X3, isEs ? "Placas" : "Tiles"],
                [PanelTop, isEs ? "Acceso técnico" : "Technical access"],
              ].map(([Icon, title]) => {
                const LucideIcon = Icon as typeof Building2;
                return (
                  <div
                    key={String(title)}
                    className="rounded-2xl border border-yellow-400 bg-neutral-900 p-5"
                  >
                    <LucideIcon className="mb-4 h-6 w-6 text-yellow-400" />
                    <h3 className="font-bold">{String(title)}</h3>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <h2 className="text-3xl font-black">
          {isEs ? "Usos habituales del techo registrable" : "Common uses of suspended ceilings"}
        </h2>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {useCases.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-yellow-300 bg-white p-6 shadow-md"
            >
              <item.icon className="mb-4 h-7 w-7 text-yellow-500" />
              <h3 className="text-xl font-black">{item.title}</h3>
              <p className="mt-4 leading-7 text-neutral-700">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <h2 className="text-3xl font-black">
            {isEs ? "Cómo funciona" : "How it works"}
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              [
                isEs ? "1. Envía fotos" : "1. Send photos",
                isEs
                  ? "Fotos generales del local, oficina o techo actual."
                  : "General photos of the shop, office or current ceiling.",
              ],
              [
                isEs ? "2. Indica medidas" : "2. Share measurements",
                isEs
                  ? "Ancho, largo, altura y zona exacta."
                  : "Width, length, height and exact area.",
              ],
              [
                isEs ? "3. Explica necesidad" : "3. Explain the need",
                isEs
                  ? "Instalación nueva, reparación, placas o perfilería."
                  : "New installation, repair, tiles or profiles.",
              ],
              [
                isEs ? "4. Revisamos" : "4. We review",
                isEs
                  ? "Vemos acceso, estructura, iluminación y materiales."
                  : "We check access, structure, lighting and materials.",
              ],
              [
                isEs ? "5. Presupuesto" : "5. Quote",
                isEs
                  ? "Damos orientación o recomendamos visita."
                  : "We give guidance or recommend a visit.",
              ],
              [
                isEs ? "6. Instalación" : "6. Installation",
                isEs
                  ? "Realizamos el trabajo y dejamos la zona limpia."
                  : "We complete the work and leave the area clean.",
              ],
            ].map(([title, text]) => (
              <div
                key={title}
                className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-md"
              >
                <h3 className="font-black">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-neutral-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <h2 className="text-3xl font-black">
          {isEs ? "Páginas relacionadas de pladur" : "Related drywall pages"}
        </h2>

        <p className="mt-4 max-w-3xl text-neutral-700">
          {isEs
            ? "Este cluster conecta búsquedas de pladur y techos en Valencia: falso techo, techo registrable, presupuesto, empresa, reformas y reparación."
            : "This cluster connects drywall and ceiling searches in Valencia: false ceiling, suspended ceiling, quote, company, renovation and repair."}
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {moneyLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group rounded-2xl border border-yellow-300 bg-white p-6 shadow-md transition hover:scale-105 hover:shadow-xl"
            >
              <Wrench className="mb-4 h-6 w-6 text-yellow-500" />
              <h3 className="text-xl font-black">{item.title}</h3>
              <p className="mt-3 leading-7 text-neutral-700">{item.desc}</p>
              <div className="mt-5 inline-flex items-center gap-2 font-bold text-neutral-950">
                {isEs ? "Ver servicio" : "View service"}
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <h2 className="text-3xl font-black">
            {isEs ? "Zonas de servicio en Valencia" : "Service areas in Valencia"}
          </h2>

          <p className="mt-4 max-w-3xl text-neutral-700">
            {isEs
              ? "Trabajamos en Valencia ciudad y zonas cercanas. Si no estás seguro si cubrimos tu zona, envía tu ubicación por WhatsApp."
              : "We work in Valencia city and nearby areas. If you are not sure whether we cover your area, send your location by WhatsApp."}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {areas.map((area) => (
              <span
                key={area}
                className="rounded-full border border-yellow-300 bg-yellow-50 px-4 py-2 text-sm font-semibold"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <h2 className="text-3xl font-black">
          {isEs ? "Preguntas frecuentes" : "Frequently asked questions"}
        </h2>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {faqs.map((faq) => (
            <div
              key={faq.q}
              className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm"
            >
              <h3 className="font-black">{faq.q}</h3>
              <p className="mt-3 leading-7 text-neutral-700">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="rounded-3xl border border-yellow-400 bg-yellow-400 p-8 shadow-2xl lg:p-12">
          <h2 className="text-3xl font-black">
            {isEs
              ? "¿Necesitas un techo registrable en Valencia?"
              : "Need a suspended ceiling in Valencia?"}
          </h2>

          <p className="mt-4 max-w-3xl text-lg font-medium">
            {isEs
              ? "Envía fotos del local, oficina o techo actual, medidas aproximadas, altura y detalles del trabajo. Te diremos qué se puede hacer, qué datos faltan, cuánto puede costar y cuándo podemos ir."
              : "Send photos of the shop, office or current ceiling, approximate measurements, height and job details. We will tell you what can be done, what information is missing, how much it may cost and when we can come."}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappHref}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-black px-6 py-4 font-bold text-white shadow-lg transition hover:scale-105"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp
            </a>

            <Link
              href={estimateHref}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-black bg-white px-6 py-4 font-bold text-black shadow-sm transition hover:scale-105"
            >
              {isEs ? "Pedir presupuesto" : "Request estimate"}
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}