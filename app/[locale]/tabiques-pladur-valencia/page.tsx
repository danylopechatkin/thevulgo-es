import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  Euro,
  Hammer,
  Home,
  MapPin,
  MessageCircle,
  Paintbrush,
  Ruler,
  ShieldCheck,
  Sparkles,
  Store,
  Users,
  Wrench,
} from "lucide-react";

type Props = {
  params: Promise<{ locale: string }>;
};

const baseUrl = "https://www.thevulgo.es";
const phone = "34610076942";
const pagePath = "/tabiques-pladur-valencia";

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
    ? "Tabiques de Pladur en Valencia | Instalación y Presupuesto | THEVULGO"
    : "Drywall Partitions in Valencia | Installation & Quote | THEVULGO";

  const description = isEs
    ? "Instalación de tabiques de pladur en Valencia. Paredes de pladur, divisiones interiores, separaciones para viviendas, oficinas y locales. Presupuesto por WhatsApp."
    : "Drywall partition installation in Valencia. Plasterboard walls, interior divisions and separations for homes, offices and commercial spaces. WhatsApp quote.";

  return {
    title,
    description,
    keywords: isEs
      ? [
          "tabiques pladur valencia",
          "tabique pladur valencia",
          "tabiques de pladur valencia",
          "instalar tabique pladur valencia",
          "instalacion tabique pladur valencia",
          "precio tabique pladur valencia",
          "presupuesto tabique pladur valencia",
          "pared pladur valencia",
          "paredes pladur valencia",
          "divisiones pladur valencia",
          "separacion oficinas pladur valencia",
          "separación oficinas pladur valencia",
          "tabiques yeso laminado valencia",
          "pladur valencia",
          "empresa pladur valencia",
          "reformas pladur valencia",
          "presupuesto pladur valencia",
        ]
      : [
          "drywall partitions valencia",
          "plasterboard partitions valencia",
          "drywall wall valencia",
          "plasterboard wall valencia",
          "drywall partition installation valencia",
          "drywall partition price valencia",
          "office drywall partitions valencia",
          "interior drywall divisions valencia",
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

export default async function TabiquesPladurValenciaPage({ params }: Props) {
  const { locale } = await params;
  const isEs = locale === "es";

  const estimateHref = `/${locale}/estimate?category=handyman`;

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, necesito presupuesto para tabiques de pladur en Valencia. Puedo enviar fotos, medidas y detalles del trabajo."
      : "Hi, I need a quote for drywall partitions in Valencia. I can send photos, measurements and job details."
  );

  const whatsappHref = `https://wa.me/${phone}?text=${whatsappText}`;

  const services = isEs
    ? [
        "Instalación de tabiques de pladur",
        "Paredes de pladur interiores",
        "Divisiones para viviendas",
        "Separación de oficinas",
        "Tabiques para locales comerciales",
        "Cierre de espacios interiores",
        "Estructura metálica para pladur",
        "Placas de yeso laminado",
        "Preparación para pintura",
        "Masilla, juntas y lijado",
        "Reparación de tabiques existentes",
        "Presupuesto por fotos o visita",
      ]
    : [
        "Drywall partition installation",
        "Interior plasterboard walls",
        "Divisions for homes",
        "Office separation",
        "Partitions for commercial spaces",
        "Interior space closure",
        "Metal framing for drywall",
        "Plasterboard panels",
        "Preparation for painting",
        "Filler, joints and sanding",
        "Existing partition repair",
        "Quote by photos or visit",
      ];

  const prices = isEs
    ? [
        ["Visita / revisión", "desde 49 €"],
        ["Tabique pequeño de pladur", "presupuesto"],
        ["Pared de pladur interior", "presupuesto"],
        ["Separación para oficina", "presupuesto"],
        ["Cierre de hueco con pladur", "presupuesto"],
        ["Preparación para pintura", "desde 49 €"],
        ["Reparación de tabique", "desde 45 €"],
        ["Trabajo para local comercial", "presupuesto"],
      ]
    : [
        ["Visit / inspection", "from €49"],
        ["Small drywall partition", "quote"],
        ["Interior drywall wall", "quote"],
        ["Office separation", "quote"],
        ["Closing opening with drywall", "quote"],
        ["Preparation for painting", "from €49"],
        ["Partition repair", "from €45"],
        ["Commercial space work", "quote"],
      ];

  const factors = isEs
    ? [
        "Largo y alto del tabique",
        "Tipo de placa de pladur",
        "Estructura metálica necesaria",
        "Si requiere aislamiento",
        "Puertas, huecos o cortes",
        "Acabado y preparación para pintura",
        "Altura y acceso",
        "Estado del suelo, pared y techo",
        "Tiempo y materiales necesarios",
      ]
    : [
        "Partition length and height",
        "Type of plasterboard panel",
        "Required metal framing",
        "Whether insulation is needed",
        "Doors, openings or cutouts",
        "Finish and paint preparation",
        "Height and access",
        "Floor, wall and ceiling condition",
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
      title: isEs ? "Falso Techo Pladur Valencia" : "Plasterboard False Ceiling Valencia",
      desc: isEs
        ? "Instalación y reparación de falsos techos de pladur."
        : "Installation and repair of plasterboard false ceilings.",
      href: `/${locale}/falso-techo-pladur-valencia`,
    },
    {
      title: isEs ? "Reparación Pladur Valencia" : "Drywall Repair Valencia",
      desc: isEs
        ? "Reparación de agujeros, grietas, golpes y zonas dañadas."
        : "Repair of holes, cracks, impact damage and damaged areas.",
      href: `/${locale}/reparacion-pladur-valencia`,
    },
    {
      title: isEs ? "Pintar Pladur Valencia" : "Paint Drywall Valencia",
      desc: isEs
        ? "Preparación, lijado y pintura de paredes o techos de pladur."
        : "Preparation, sanding and painting of drywall walls or ceilings.",
      href: `/${locale}/pintar-pladur-valencia`,
    },
    {
      title: isEs ? "Techo Registrable Valencia" : "Suspended Ceiling Valencia",
      desc: isEs
        ? "Techos desmontables para oficinas, locales y negocios."
        : "Removable ceilings for offices, shops and businesses.",
      href: `/${locale}/techo-registrable-valencia`,
    },
  ];

  const useCases = [
    {
      icon: Home,
      title: isEs ? "Viviendas y pisos" : "Homes and apartments",
      text: isEs
        ? "Tabiques de pladur para dividir habitaciones, cerrar espacios, crear zonas nuevas o mejorar la distribución interior."
        : "Drywall partitions to divide rooms, close spaces, create new areas or improve interior layout.",
    },
    {
      icon: Building2,
      title: isEs ? "Oficinas" : "Offices",
      text: isEs
        ? "Separaciones de pladur para despachos, salas de trabajo, zonas privadas y divisiones interiores de oficina."
        : "Drywall separations for offices, work rooms, private areas and interior office divisions.",
    },
    {
      icon: Store,
      title: isEs ? "Locales comerciales" : "Commercial spaces",
      text: isEs
        ? "Tabiques para tiendas, bares, restaurantes, pequeños negocios, almacenes y zonas de atención al cliente."
        : "Partitions for shops, bars, restaurants, small businesses, storage areas and customer spaces.",
    },
  ];

  const faqs = isEs
    ? [
        {
          q: "¿Cuánto cuesta hacer un tabique de pladur en Valencia?",
          a: "Depende de largo, alto, tipo de placa, estructura, aislamiento, huecos, puertas, acabado y dificultad. Normalmente se valora con fotos, medidas o visita.",
        },
        {
          q: "¿Podéis instalar tabiques de pladur en una vivienda?",
          a: "Sí. Podemos valorar tabiques de pladur para pisos, casas, viviendas de alquiler y pequeñas reformas interiores.",
        },
        {
          q: "¿Hacéis separaciones de pladur para oficinas?",
          a: "Sí. Hacemos separaciones interiores, divisiones de espacios, paredes de pladur y cierres para oficinas y zonas de trabajo.",
        },
        {
          q: "¿Instaláis tabiques de pladur en locales comerciales?",
          a: "Sí. Trabajamos en tiendas, bares, restaurantes, oficinas, locales y pequeños negocios en Valencia y alrededores.",
        },
        {
          q: "¿El tabique de pladur incluye pintura?",
          a: "Depende del presupuesto. Podemos dejar el tabique preparado con juntas, masilla y lijado. La pintura se puede valorar aparte.",
        },
        {
          q: "¿Se puede poner aislamiento dentro del tabique?",
          a: "Sí. Según el uso del espacio, se puede valorar aislamiento dentro del tabique para mejorar confort acústico o térmico.",
        },
        {
          q: "¿Puedo pedir presupuesto por WhatsApp?",
          a: "Sí. Envía fotos, medidas aproximadas, altura, ubicación y explica qué espacio quieres dividir o cerrar.",
        },
        {
          q: "¿Cuándo hace falta una visita?",
          a: "Si el tabique es grande, tiene puertas, requiere aislamiento, hay instalaciones cerca o no se puede valorar bien por fotos, recomendamos visita.",
        },
      ]
    : [
        {
          q: "How much does a drywall partition cost in Valencia?",
          a: "It depends on length, height, board type, framing, insulation, openings, doors, finish and difficulty. It is usually estimated with photos, measurements or a visit.",
        },
        {
          q: "Can you install drywall partitions in a home?",
          a: "Yes. We can quote drywall partitions for apartments, houses, rental properties and small interior renovations.",
        },
        {
          q: "Do you make drywall separations for offices?",
          a: "Yes. We build interior separations, space divisions, drywall walls and closures for offices and work areas.",
        },
        {
          q: "Do you install drywall partitions in commercial spaces?",
          a: "Yes. We work in shops, bars, restaurants, offices, commercial spaces and small businesses in Valencia and nearby areas.",
        },
        {
          q: "Does the drywall partition include painting?",
          a: "It depends on the quote. We can leave the partition prepared with joints, filler and sanding. Painting can be quoted separately.",
        },
        {
          q: "Can insulation be added inside the partition?",
          a: "Yes. Depending on the use of the space, insulation can be considered inside the partition to improve acoustic or thermal comfort.",
        },
        {
          q: "Can I request a quote by WhatsApp?",
          a: "Yes. Send photos, approximate measurements, height, location and explain which space you want to divide or close.",
        },
        {
          q: "When is a visit needed?",
          a: "If the partition is large, has doors, needs insulation, has installations nearby or cannot be estimated properly from photos, we recommend a visit.",
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
          ? "Tabiques de pladur en Valencia"
          : "Drywall partitions in Valencia",
        serviceType: isEs
          ? "Instalación de tabiques, paredes y divisiones de pladur"
          : "Installation of drywall partitions, walls and interior divisions",
        provider: {
          "@id": `${baseUrl}/#localbusiness`,
        },
        areaServed: areas,
        url: `${baseUrl}/${locale}${pagePath}`,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: isEs
            ? "Servicios de tabiques de pladur en Valencia"
            : "Drywall partition services in Valencia",
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
            name: isEs ? "Tabiques Pladur Valencia" : "Drywall Partitions Valencia",
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
                ? "Tabiques de pladur en Valencia"
                : "Drywall partitions in Valencia"}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-700">
              {isEs
                ? "Instalación de tabiques de pladur en Valencia para viviendas, oficinas y locales. Hacemos paredes de pladur, divisiones interiores, cierres de espacios, separaciones, estructura, placas, juntas, lijado y preparación para pintura."
                : "Drywall partition installation in Valencia for homes, offices and commercial spaces. We build plasterboard walls, interior divisions, space closures, separations, framing, boards, joints, sanding and preparation for painting."}
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
                  icon: Ruler,
                  title: isEs ? "Medidas y estructura" : "Measurements and frame",
                  text: isEs
                    ? "Revisamos largo, alto, acceso y soporte."
                    : "We check length, height, access and support.",
                },
                {
                  icon: Users,
                  title: isEs ? "Separar espacios" : "Divide spaces",
                  text: isEs
                    ? "Habitaciones, oficinas, locales y zonas interiores."
                    : "Rooms, offices, shops and interior areas.",
                },
                {
                  icon: BadgeCheck,
                  title: isEs ? "Acabado limpio" : "Clean finish",
                  text: isEs
                    ? "Juntas, masilla, lijado y preparación."
                    : "Joints, filler, sanding and preparation.",
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
          {isEs ? "Servicios de tabiques de pladur" : "Drywall partition services"}
        </h2>

        <p className="mt-4 max-w-3xl text-neutral-700">
          {isEs
            ? "Los tabiques de pladur sirven para dividir espacios, crear paredes interiores, cerrar zonas, separar oficinas o reorganizar una vivienda o local sin una obra pesada tradicional."
            : "Drywall partitions are used to divide spaces, create interior walls, close areas, separate offices or reorganize a home or commercial space without heavy traditional construction."}
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
                  ? "¿Cuánto cuesta un tabique de pladur?"
                  : "How much does a drywall partition cost?"}
              </h2>

              <p className="mt-5 text-lg leading-8 text-neutral-700">
                {isEs
                  ? "El precio de un tabique de pladur en Valencia depende de las medidas, tipo de placa, estructura metálica, aislamiento, altura, si hay puertas o huecos, acabado, pintura y dificultad de acceso."
                  : "The price of a drywall partition in Valencia depends on measurements, board type, metal framing, insulation, height, doors or openings, finish, painting and access difficulty."}
              </p>

              <p className="mt-5 text-lg leading-8 text-neutral-700">
                {isEs
                  ? "Para dar presupuesto necesitamos fotos del espacio, medidas aproximadas, altura, ubicación y saber si quieres solo montar el tabique, dejarlo preparado para pintar o incluir acabado completo."
                  : "To give a quote, we need photos of the space, approximate measurements, height, location and whether you only want the partition built, prepared for painting or fully finished."}
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  isEs ? "Largo y alto" : "Length and height",
                  isEs ? "Tipo de placa" : "Board type",
                  isEs ? "Estructura metálica" : "Metal framing",
                  isEs ? "Aislamiento" : "Insulation",
                  isEs ? "Puertas o huecos" : "Doors or openings",
                  isEs ? "Acabado final" : "Final finish",
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
                  ? "Los precios son orientativos. El precio final depende de medidas, materiales, estructura, aislamiento, acabado y tiempo necesario."
                  : "Prices are indicative. Final price depends on measurements, materials, framing, insulation, finish and required time."}
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
            ? "Un tabique de pladur puede ser simple o más completo según el uso del espacio, aislamiento, puertas, instalaciones y acabado final."
            : "A drywall partition can be simple or more complete depending on the use of the space, insulation, doors, installations and final finish."}
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
                  ? "Tabiques de pladur para viviendas, oficinas y locales"
                  : "Drywall partitions for homes, offices and shops"}
              </h2>

              <p className="mt-5 text-lg leading-8 text-neutral-300">
                {isEs
                  ? "El pladur permite crear nuevas divisiones interiores de forma rápida y limpia. Es una solución práctica para separar habitaciones, crear despachos, cerrar zonas de almacenaje o reorganizar un local comercial."
                  : "Drywall makes it possible to create new interior divisions quickly and cleanly. It is a practical solution to separate rooms, create offices, close storage areas or reorganize a commercial space."}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                [Home, isEs ? "Viviendas" : "Homes"],
                [Building2, isEs ? "Oficinas" : "Offices"],
                [Store, isEs ? "Locales" : "Shops"],
                [ShieldCheck, isEs ? "Solución práctica" : "Practical solution"],
              ].map(([Icon, title]) => {
                const LucideIcon = Icon as typeof Home;
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
          {isEs ? "Usos habituales de tabiques de pladur" : "Common uses of drywall partitions"}
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
                  ? "Fotos generales del espacio donde quieres el tabique."
                  : "General photos of the space where you want the partition.",
              ],
              [
                isEs ? "2. Indica medidas" : "2. Share measurements",
                isEs
                  ? "Largo, alto, ubicación y zona exacta."
                  : "Length, height, location and exact area.",
              ],
              [
                isEs ? "3. Explica el uso" : "3. Explain the use",
                isEs
                  ? "Habitación, oficina, local, cierre o separación."
                  : "Room, office, shop, closure or separation.",
              ],
              [
                isEs ? "4. Revisamos" : "4. We review",
                isEs
                  ? "Estructura, acceso, aislamiento y acabado."
                  : "Frame, access, insulation and finish.",
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
                  ? "Montamos el tabique y dejamos la zona limpia."
                  : "We build the partition and leave the area clean.",
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
            ? "Este cluster conecta búsquedas de pladur en Valencia: tabiques, presupuesto, empresa, reformas, reparación, pintura, falso techo y techo registrable."
            : "This cluster connects drywall searches in Valencia: partitions, quote, company, renovation, repair, painting, false ceiling and suspended ceiling."}
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
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
              ? "¿Necesitas tabiques de pladur en Valencia?"
              : "Need drywall partitions in Valencia?"}
          </h2>

          <p className="mt-4 max-w-3xl text-lg font-medium">
            {isEs
              ? "Envía fotos del espacio, medidas aproximadas, altura y explica qué zona quieres separar o cerrar. Te diremos qué datos faltan, cuánto puede costar y cuándo podemos ir."
              : "Send photos of the space, approximate measurements, height and explain which area you want to separate or close. We will tell you what details are missing, how much it may cost and when we can come."}
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