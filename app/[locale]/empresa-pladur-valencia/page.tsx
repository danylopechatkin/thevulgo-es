import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  Clock3,
  Euro,
  Hammer,
  Home,
  MapPin,
  MessageCircle,
  Paintbrush,
  Ruler,
  ShieldCheck,
  Sparkles,
  Star,
  Store,
  Users,
  Wrench,
  Zap,
} from "lucide-react";

type Props = {
  params: Promise<{ locale: string }>;
};

const baseUrl = "https://www.thevulgo.es";
const phone = "34610076942";
const pagePath = "/empresa-pladur-valencia";

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
    ? "Empresa de Pladur en Valencia | Instalación, Techos y Reparaciones | THEVULGO"
    : "Drywall Company in Valencia | Installation, Ceilings & Repairs | THEVULGO";

  const description = isEs
    ? "Empresa de pladur en Valencia para viviendas, oficinas y locales. Instalación de pladur, falsos techos, tabiques, reparaciones y presupuestos por WhatsApp."
    : "Drywall and plasterboard company in Valencia for homes, offices and commercial spaces. Drywall installation, false ceilings, partitions, repairs and WhatsApp estimates.";

  return {
    title,
    description,
    keywords: isEs
      ? [
          "empresa pladur valencia",
          "empresa de pladur valencia",
          "empresa de pladur en valencia",
          "empresas de pladur valencia",
          "empresa instaladora de pladur valencia",
          "pladur valencia",
          "pladur en valencia",
          "instalacion pladur valencia",
          "instalación pladur valencia",
          "instalador pladur valencia",
          "instaladores de pladur en valencia",
          "profesionales pladur valencia",
          "especialistas pladur valencia",
          "presupuesto pladur valencia",
          "reformas pladur valencia",
          "tabiques pladur valencia",
          "falso techo pladur valencia",
          "reparacion pladur valencia",
        ]
      : [
          "drywall company valencia",
          "plasterboard company valencia",
          "drywall contractor valencia",
          "plasterboard installer valencia",
          "drywall installation valencia",
          "plasterboard installation valencia",
          "drywall repair valencia",
          "false ceiling valencia",
          "drywall partitions valencia",
          "drywall quote valencia",
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

export default async function EmpresaPladurValenciaPage({ params }: Props) {
  const { locale } = await params;
  const isEs = locale === "es";

  const estimateHref = `/${locale}/estimate?category=handyman`;

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, busco una empresa de pladur en Valencia. Necesito presupuesto para un trabajo de pladur. Puedo enviar fotos, medidas y detalles."
      : "Hi, I am looking for a drywall / plasterboard company in Valencia. I need an estimate for a plasterboard job. I can send photos, measurements and details."
  );

  const whatsappHref = `https://wa.me/${phone}?text=${whatsappText}`;

  const companyServices = isEs
    ? [
        "Instalación de pladur en viviendas",
        "Instalación de pladur en locales",
        "Trabajos de pladur para oficinas",
        "Falsos techos de pladur",
        "Tabiques de pladur",
        "Reparación de pladur dañado",
        "Cierre de huecos y rozas",
        "Preparación para pintura",
        "Parches, masilla y lijado",
        "Reparación de esquinas",
        "Preparación para focos",
        "Revisión y presupuesto por WhatsApp",
      ]
    : [
        "Drywall installation in homes",
        "Drywall installation in shops",
        "Drywall work for offices",
        "Plasterboard false ceilings",
        "Drywall partitions",
        "Damaged drywall repair",
        "Closing openings and channels",
        "Preparation for painting",
        "Patches, filler and sanding",
        "Corner repair",
        "Preparation for spotlights",
        "Review and estimate by WhatsApp",
      ];

  const clientTypes = [
    {
      icon: Home,
      title: isEs ? "Particulares" : "Private clients",
      text: isEs
        ? "Trabajos de pladur en pisos, viviendas, apartamentos de alquiler y reformas pequeñas."
        : "Drywall work in apartments, homes, rental flats and small renovation projects.",
    },
    {
      icon: Store,
      title: isEs ? "Locales comerciales" : "Commercial spaces",
      text: isEs
        ? "Pladur para locales, tiendas, bares, restaurantes, pequeños negocios y reformas interiores."
        : "Drywall for shops, bars, restaurants, small businesses and interior renovations.",
    },
    {
      icon: BriefcaseBusiness,
      title: isEs ? "Oficinas" : "Offices",
      text: isEs
        ? "Tabiques, techos, reparaciones visibles, preparación de zonas y mantenimiento puntual."
        : "Partitions, ceilings, visible repairs, area preparation and occasional maintenance.",
    },
    {
      icon: Building2,
      title: isEs ? "Comunidades" : "Communities",
      text: isEs
        ? "Reparaciones de paredes, techos, zonas comunes y pequeños trabajos de mantenimiento."
        : "Wall repairs, ceiling repairs, common areas and small maintenance work.",
    },
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
      title: isEs ? "Reformas Pladur Valencia" : "Plasterboard Renovations Valencia",
      desc: isEs
        ? "Reformas interiores con pladur para pisos, locales y oficinas."
        : "Interior drywall renovations for homes, shops and offices.",
      href: `/${locale}/reformas-pladur-valencia`,
    },
    {
      title: isEs ? "Presupuesto Pladur Valencia" : "Drywall Quote Valencia",
      desc: isEs
        ? "Pide presupuesto de pladur según fotos, medidas y tipo de acabado."
        : "Request a drywall quote based on photos, measurements and finish.",
      href: `/${locale}/presupuesto-pladur-valencia`,
    },
    {
      title: isEs ? "Falso Techo Pladur Valencia" : "Plasterboard False Ceiling Valencia",
      desc: isEs
        ? "Instalación y reparación de falsos techos de pladur."
        : "Installation and repair of plasterboard false ceilings.",
      href: `/${locale}/falso-techo-pladur-valencia`,
    },
    {
      title: isEs ? "Reparación Pladur Valencia" : "Drywall Repair Valencia",
      desc: isEs
        ? "Agujeros, grietas, golpes, cortes, esquinas y zonas dañadas."
        : "Holes, cracks, impact damage, cutouts, corners and damaged areas.",
      href: `/${locale}/reparacion-pladur-valencia`,
    },
    {
      title: isEs ? "Tabiques Pladur Valencia" : "Drywall Partitions Valencia",
      desc: isEs
        ? "Divisiones interiores, cierres y paredes de pladur."
        : "Interior divisions, closures and plasterboard walls.",
      href: `/${locale}/tabiques-pladur-valencia`,
    },
  ];

  const prices = isEs
    ? [
        ["Visita / revisión", "desde 49 €"],
        ["Reparación pequeña", "desde 35 €"],
        ["Parche + lijado básico", "desde 45 €"],
        ["Reparación de techo", "desde 49 €"],
        ["Instalación básica de pladur", "desde 79 €"],
        ["Tabique de pladur", "presupuesto"],
        ["Falso techo de pladur", "presupuesto"],
        ["Trabajo para local u oficina", "presupuesto"],
      ]
    : [
        ["Visit / inspection", "from €49"],
        ["Small repair", "from €35"],
        ["Patch + basic sanding", "from €45"],
        ["Ceiling repair", "from €49"],
        ["Basic drywall installation", "from €79"],
        ["Drywall partition", "quote"],
        ["Plasterboard false ceiling", "quote"],
        ["Shop or office work", "quote"],
      ];

  const process = isEs
    ? [
        ["1. Contacto", "Envía fotos, vídeo, medidas y ubicación por WhatsApp."],
        ["2. Revisión", "Analizamos pared, techo, daño, altura, acceso y acabado."],
        ["3. Estimación", "Damos precio orientativo o recomendamos visita."],
        ["4. Materiales", "Confirmamos si hace falta pladur, perfiles, masilla o pintura."],
        ["5. Trabajo", "Realizamos instalación, reparación o preparación."],
        ["6. Acabado", "Dejamos la zona revisada, limpia y lista para el siguiente paso."],
      ]
    : [
        ["1. Contact", "Send photos, video, measurements and location by WhatsApp."],
        ["2. Review", "We check wall, ceiling, damage, height, access and finish."],
        ["3. Estimate", "We give an approximate price or recommend a visit."],
        ["4. Materials", "We confirm whether plasterboard, profiles, filler or paint are needed."],
        ["5. Work", "We complete installation, repair or preparation."],
        ["6. Finish", "We leave the area checked, clean and ready for the next step."],
      ];

  const faqs = isEs
    ? [
        {
          q: "¿Busco una empresa de pladur en Valencia, podéis ayudar?",
          a: "Sí. THEVULGO realiza trabajos de pladur en Valencia para particulares, viviendas, oficinas, locales y pequeños negocios. Puedes enviar fotos y medidas por WhatsApp para valorar el trabajo.",
        },
        {
          q: "¿Cuánto cobra una empresa de pladur en Valencia?",
          a: "Depende de metros, materiales, altura, estructura, acabado y dificultad. Las reparaciones pequeñas pueden empezar desde 35 €, pero tabiques, techos y reformas necesitan presupuesto.",
        },
        {
          q: "¿Trabajáis con particulares?",
          a: "Sí. Hacemos trabajos de pladur para pisos, casas, apartamentos de alquiler, viviendas turísticas y pequeñas reformas interiores.",
        },
        {
          q: "¿Trabajáis con negocios, oficinas y locales?",
          a: "Sí. Podemos valorar trabajos de pladur para locales comerciales, bares, restaurantes, oficinas, tiendas y pequeños negocios en Valencia.",
        },
        {
          q: "¿Podéis visitar la obra antes de dar precio?",
          a: "Sí. Si el trabajo no se puede valorar bien por fotos, podemos hacer una visita para revisar medidas, acceso, estado de la pared o techo y materiales necesarios.",
        },
        {
          q: "¿Hacéis presupuestos por WhatsApp?",
          a: "Sí. Puedes enviar fotos, vídeo corto, medidas aproximadas, altura, ubicación y explicar qué necesitas. Así podemos dar una estimación más clara.",
        },
        {
          q: "¿Instaláis falsos techos de pladur?",
          a: "Sí. Podemos valorar falsos techos de pladur, reparaciones de techo, preparación para focos, cierres, registros y remates.",
        },
        {
          q: "¿Hacéis reparaciones pequeñas de pladur?",
          a: "Sí. Reparamos agujeros, grietas, esquinas dañadas, daños por soportes de TV, estanterías, golpes, cortes y zonas abiertas.",
        },
      ]
    : [
        {
          q: "I am looking for a drywall company in Valencia. Can you help?",
          a: "Yes. THEVULGO provides drywall and plasterboard work in Valencia for private clients, homes, offices, shops and small businesses. You can send photos and measurements by WhatsApp.",
        },
        {
          q: "How much does a drywall company in Valencia charge?",
          a: "It depends on measurements, materials, height, framing, finish and difficulty. Small repairs can start from €35, but partitions, ceilings and renovations require a quote.",
        },
        {
          q: "Do you work with private clients?",
          a: "Yes. We do drywall work for apartments, houses, rental properties, tourist apartments and small interior renovations.",
        },
        {
          q: "Do you work with businesses, offices and shops?",
          a: "Yes. We can quote drywall work for commercial spaces, bars, restaurants, offices, shops and small businesses in Valencia.",
        },
        {
          q: "Can you visit the property before quoting?",
          a: "Yes. If the work cannot be estimated properly from photos, we can visit to check measurements, access, wall or ceiling condition and required materials.",
        },
        {
          q: "Do you give estimates by WhatsApp?",
          a: "Yes. Send photos, a short video, approximate measurements, height, location and explain what you need. This helps us give a clearer estimate.",
        },
        {
          q: "Do you install plasterboard false ceilings?",
          a: "Yes. We can quote plasterboard false ceilings, ceiling repairs, spotlight preparation, closures, access panels and finishing details.",
        },
        {
          q: "Do you do small drywall repairs?",
          a: "Yes. We repair holes, cracks, damaged corners, TV bracket damage, shelf damage, impact damage, cutouts and open areas.",
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
          ? "Empresa de pladur en Valencia"
          : "Drywall and plasterboard company in Valencia",
        serviceType: isEs
          ? "Empresa de pladur, instalación, falsos techos, tabiques y reparaciones"
          : "Drywall company, installation, false ceilings, partitions and repairs",
        provider: {
          "@id": `${baseUrl}/#localbusiness`,
        },
        areaServed: areas,
        url: `${baseUrl}/${locale}${pagePath}`,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: isEs
            ? "Servicios de empresa de pladur en Valencia"
            : "Drywall company services in Valencia",
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
            name: isEs ? "Empresa Pladur Valencia" : "Drywall Company Valencia",
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
                ? "Empresa de pladur en Valencia para viviendas, locales y oficinas"
                : "Drywall company in Valencia for homes, shops and offices"}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-700">
              {isEs
                ? "THEVULGO ofrece servicios de pladur en Valencia para particulares y negocios: instalación de pladur, tabiques, falsos techos, reparaciones, parches, preparación para pintura y pequeños trabajos de reforma interior."
                : "THEVULGO provides drywall and plasterboard services in Valencia for private clients and businesses: drywall installation, partitions, false ceilings, repairs, patches, preparation for painting and small interior renovation work."}
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
                  icon: Building2,
                  title: isEs ? "Particulares y negocios" : "Homes and businesses",
                  text: isEs
                    ? "Pisos, viviendas, oficinas, locales y pequeños negocios."
                    : "Apartments, homes, offices, shops and small businesses.",
                },
                {
                  icon: ShieldCheck,
                  title: isEs ? "Trabajo seguro" : "Safe work",
                  text: isEs
                    ? "Revisamos pared, techo, estructura, humedad y acceso."
                    : "We check wall, ceiling, structure, moisture and access.",
                },
                {
                  icon: BadgeCheck,
                  title: isEs ? "Acabado limpio" : "Clean finish",
                  text: isEs
                    ? "Pladur, reparación, lijado y preparación correcta."
                    : "Drywall, repair, sanding and correct preparation.",
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
          {isEs ? "Servicios de empresa de pladur" : "Drywall company services"}
        </h2>

        <p className="mt-4 max-w-3xl text-neutral-700">
          {isEs
            ? "Trabajamos pladur para reparar, dividir, cerrar, renovar o preparar espacios interiores. Podemos valorar trabajos pequeños y reformas más completas según fotos, medidas, altura, acceso y acabado necesario."
            : "We work with drywall to repair, divide, close, renovate or prepare interior spaces. We can quote small jobs and more complete renovations based on photos, measurements, height, access and required finish."}
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {companyServices.map((item) => (
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
          <h2 className="text-3xl font-black">
            {isEs ? "Trabajamos con particulares y empresas" : "We work with private clients and businesses"}
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {clientTypes.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-md"
              >
                <item.icon className="mb-4 h-7 w-7 text-yellow-500" />
                <h3 className="text-xl font-black">{item.title}</h3>
                <p className="mt-4 leading-7 text-neutral-700">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <h2 className="text-3xl font-black">
              {isEs
                ? "¿Por qué elegir una empresa de pladur?"
                : "Why choose a drywall company?"}
            </h2>

            <p className="mt-5 text-lg leading-8 text-neutral-700">
              {isEs
                ? "El pladur parece simple, pero un mal trabajo puede dejar grietas, juntas visibles, paredes débiles, techos desnivelados o acabados difíciles de pintar. Una empresa de pladur debe revisar medidas, materiales, estructura, estado de la superficie y acabado antes de empezar."
                : "Drywall may look simple, but poor work can leave cracks, visible joints, weak walls, uneven ceilings or finishes that are difficult to paint. A drywall company should check measurements, materials, framing, surface condition and finish before starting."}
            </p>

            <p className="mt-5 text-lg leading-8 text-neutral-700">
              {isEs
                ? "En THEVULGO buscamos una solución práctica: reparar si se puede reparar, instalar si hace falta instalar, preparar correctamente si luego se va a pintar y explicar el trabajo antes de confirmar el presupuesto."
                : "At THEVULGO we look for a practical solution: repair if it can be repaired, install if installation is needed, prepare properly if it will be painted later and explain the work before confirming the quote."}
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                isEs ? "Revisión antes del trabajo" : "Review before work",
                isEs ? "Solución según la zona" : "Solution based on the area",
                isEs ? "Materiales adecuados" : "Suitable materials",
                isEs ? "Preparación correcta" : "Correct preparation",
                isEs ? "Acabado más limpio" : "Cleaner finish",
                isEs ? "Presupuesto claro" : "Clear estimate",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl bg-yellow-50 p-4 shadow-sm"
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
                ? "El precio final depende de metros, materiales, altura, acceso, estructura, acabado, pintura y tiempo necesario."
                : "Final price depends on measurements, materials, height, access, framing, finish, painting and time required."}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-black text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-black">
                {isEs
                  ? "Empresa de pladur para trabajos pequeños y reformas interiores"
                  : "Drywall company for small jobs and interior renovations"}
              </h2>

              <p className="mt-5 text-lg leading-8 text-neutral-300">
                {isEs
                  ? "No todos los trabajos de pladur son grandes obras. Muchas veces el cliente necesita reparar una zona, cerrar un hueco, preparar una pared, hacer un tabique pequeño o dejar listo un techo para focos. THEVULGO puede valorar estos trabajos de forma rápida por WhatsApp."
                  : "Not every drywall job is a large construction project. Often the client needs to repair an area, close an opening, prepare a wall, build a small partition or make a ceiling ready for spotlights. THEVULGO can review these jobs quickly by WhatsApp."}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                [Hammer, isEs ? "Instalación" : "Installation"],
                [Wrench, isEs ? "Reparación" : "Repair"],
                [Paintbrush, isEs ? "Preparación" : "Preparation"],
                [Sparkles, isEs ? "Acabado limpio" : "Clean finish"],
              ].map(([Icon, title]) => {
                const LucideIcon = Icon as typeof Hammer;
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
          {isEs ? "Páginas relacionadas de pladur" : "Related drywall pages"}
        </h2>

        <p className="mt-4 max-w-3xl text-neutral-700">
          {isEs
            ? "Este cluster ayuda a posicionar THEVULGO para diferentes búsquedas de pladur en Valencia: empresa, presupuesto, reformas, reparación, tabiques y falsos techos."
            : "This cluster helps position THEVULGO for different drywall searches in Valencia: company, quote, renovation, repair, partitions and false ceilings."}
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
            {isEs ? "Cómo funciona" : "How it works"}
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {process.map(([title, text]) => (
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
          {isEs ? "Trabajos habituales de una empresa de pladur" : "Common jobs for a drywall company"}
        </h2>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {[
            {
              icon: Ruler,
              title: isEs ? "Tabiques y divisiones" : "Partitions and divisions",
              text: isEs
                ? "Divisiones interiores, cierres de espacios, paredes de pladur y soluciones para separar zonas en viviendas, locales u oficinas."
                : "Interior divisions, space closures, drywall walls and solutions for separating areas in homes, shops or offices.",
            },
            {
              icon: Zap,
              title: isEs ? "Techos y focos" : "Ceilings and spotlights",
              text: isEs
                ? "Falsos techos de pladur, reparación de techos, preparación para focos, registros y remates."
                : "Plasterboard false ceilings, ceiling repairs, spotlight preparation, access panels and finishing details.",
            },
            {
              icon: Star,
              title: isEs ? "Reparaciones y acabados" : "Repairs and finishes",
              text: isEs
                ? "Agujeros, grietas, golpes, esquinas dañadas, zonas abiertas, masilla, lijado y preparación para pintura."
                : "Holes, cracks, impact damage, damaged corners, open areas, filler, sanding and preparation for painting.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-md"
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
            {isEs ? "Zonas de servicio en Valencia" : "Service areas in Valencia"}
          </h2>

          <p className="mt-4 max-w-3xl text-neutral-700">
            {isEs
              ? "Trabajamos en Valencia ciudad y zonas cercanas. Si no sabes si cubrimos tu zona, envía tu ubicación por WhatsApp."
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
              ? "¿Buscas una empresa de pladur en Valencia?"
              : "Looking for a drywall company in Valencia?"}
          </h2>

          <p className="mt-4 max-w-3xl text-lg font-medium">
            {isEs
              ? "Envía fotos de la pared, techo, local, oficina o zona que quieres reparar o reformar. Te diremos qué se puede hacer, qué datos faltan, cuánto puede costar y cuándo podemos ir."
              : "Send photos of the wall, ceiling, shop, office or area you want to repair or renovate. We will tell you what can be done, what details are missing, how much it may cost and when we can come."}
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