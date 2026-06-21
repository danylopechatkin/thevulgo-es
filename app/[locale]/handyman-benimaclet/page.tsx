import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Clock3,
  Euro,
  Hammer,
  Home,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Star,
  Wrench,
  Zap,
  Tv,
  Sofa,
  Lightbulb,
  Plug,
  DoorOpen,
  Drill,
  Bath,
  CookingPot,
  Building2,
  Hotel,
  Layers,
  Settings,
  Ruler,
  Sparkles,
  ClipboardCheck,
  CalendarCheck,
} from "lucide-react";

type Props = {
  params: Promise<{ locale: string }>;
};

const baseUrl = "https://www.thevulgo.es";
const phone = "34610076942";
const areaName = "Benimaclet";
const slug = "handyman-benimaclet";

const areas = [
  "Benimaclet",
  "Valencia",
  "Ruzafa",
  "Russafa",
  "Campanar",
  "Patraix",
  "El Carmen",
  "Extramurs",
  "Mislata",
  "Burjassot",
  "Paterna",
  "Torrent",
  "Alboraya",
  "Manises",
];

const areaPages = [
  { slug: "handyman-russafa", area: "Russafa / Ruzafa" },
  { slug: "handyman-campanar", area: "Campanar" },
  { slug: "handyman-patraix", area: "Patraix" },
  { slug: "handyman-mislata", area: "Mislata" },
  { slug: "handyman-paterna", area: "Paterna" },
  { slug: "handyman-valencia", area: "Valencia" },
];

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";

  const title = isEs
    ? "Manitas en Benimaclet Valencia | Reparaciones y Montaje | THEVULGO"
    : "Handyman in Benimaclet Valencia | Repairs & Installations | THEVULGO";

  const description = isEs
    ? "Servicio de manitas en Benimaclet Valencia. Montaje de TV, muebles IKEA, estanterías, lámparas, enchufes, pladur, pequeñas reparaciones y mantenimiento."
    : "Handyman service in Benimaclet Valencia. TV mounting, IKEA furniture assembly, shelves, lights, outlets, drywall, small repairs and maintenance.";

  return {
    title,
    description,
    keywords: isEs
      ? [
          "manitas benimaclet",
          "manitas benimaclet valencia",
          "handyman benimaclet",
          "reparaciones benimaclet",
          "montaje tv benimaclet",
          "montaje muebles benimaclet",
          "instalar lampara benimaclet",
          "pladur benimaclet",
          "manitas valencia",
        ]
      : [
          "handyman benimaclet",
          "handyman benimaclet valencia",
          "home repairs benimaclet",
          "tv mounting benimaclet",
          "furniture assembly benimaclet",
          "light installation benimaclet",
          "drywall repair benimaclet",
          "handyman valencia",
        ],
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
    alternates: {
      canonical: `${baseUrl}/${locale}/${slug}`,
      languages: {
        es: `${baseUrl}/es/${slug}`,
        en: `${baseUrl}/en/${slug}`,
        "x-default": `${baseUrl}/es/${slug}`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${baseUrl}/${locale}/${slug}`,
      siteName: "THEVULGO",
      locale: isEs ? "es_ES" : "en_GB",
      type: "website",
    },
  };
}

export default async function HandymanBenimacletPage({ params }: Props) {
  const { locale } = await params;
  const isEs = locale === "es";

  const pageUrl = `${baseUrl}/${locale}/${slug}`;
  const estimateHref = `/${locale}/estimate?category=handyman`;

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, necesito un manitas en Benimaclet Valencia. Quiero pedir presupuesto para una reparación, montaje o instalación."
      : "Hi, I need a handyman in Benimaclet Valencia. I’d like to request an estimate for a repair, assembly or installation."
  );

  const whatsappHref = `https://wa.me/${phone}?text=${whatsappText}`;

  const moneyLinks = [
    {
      title: isEs ? "Montaje de TV en Benimaclet" : "TV mounting in Benimaclet",
      desc: isEs
        ? "TV en pared, soportes, soundbar y ocultación de cables."
        : "Wall-mounted TVs, brackets, soundbars and cable concealment.",
      href: `/${locale}/montaje-tv-valencia`,
      icon: <Tv className="h-6 w-6" />,
    },
    {
      title: isEs ? "Montaje de muebles IKEA" : "IKEA furniture assembly",
      desc: isEs
        ? "Camas, armarios, cómodas, mesas y muebles auxiliares."
        : "Beds, wardrobes, drawers, tables and storage furniture.",
      href: `/${locale}/montaje-muebles-ikea-valencia`,
      icon: <Sofa className="h-6 w-6" />,
    },
    {
      title: isEs ? "Instalación de lámparas" : "Light installation",
      desc: isEs
        ? "Lámparas de techo, apliques y pequeñas instalaciones eléctricas."
        : "Ceiling lights, wall lights and small electrical installations.",
      href: `/${locale}/instalacion-lampara-valencia`,
      icon: <Lightbulb className="h-6 w-6" />,
    },
    {
      title: isEs ? "Cambio de enchufe" : "Outlet replacement",
      desc: isEs
        ? "Enchufes, interruptores, tapas y ajustes eléctricos básicos."
        : "Outlets, switches, covers and basic electrical adjustments.",
      href: `/${locale}/cambio-enchufe-valencia`,
      icon: <Plug className="h-6 w-6" />,
    },
    {
      title: isEs ? "Estanterías y accesorios" : "Shelves and accessories",
      desc: isEs
        ? "Estantes, espejos, cuadros, cortinas y accesorios de baño."
        : "Shelves, mirrors, pictures, curtains and bathroom accessories.",
      href: `/${locale}/montaje-estanterias-valencia`,
      icon: <Ruler className="h-6 w-6" />,
    },
    {
      title: isEs ? "Pladur y pared" : "Drywall and wall repairs",
      desc: isEs
        ? "Agujeros, parches, anclajes, lijado y preparación para pintar."
        : "Holes, patches, anchors, sanding and paint preparation.",
      href: `/${locale}/pladur-valencia`,
      icon: <Layers className="h-6 w-6" />,
    },
    {
      title: isEs ? "Ajuste de puertas" : "Door adjustment",
      desc: isEs
        ? "Puertas que rozan, manillas flojas, bisagras y cierres."
        : "Rubbing doors, loose handles, hinges and latches.",
      href: `/${locale}/services/doors`,
      icon: <DoorOpen className="h-6 w-6" />,
    },
    {
      title: isEs ? "Baño y cocina" : "Bathroom and kitchen",
      desc: isEs
        ? "Espejos, accesorios, silicona, muebles, extractores y pequeños arreglos."
        : "Mirrors, accessories, silicone, cabinets, extractors and small fixes.",
      href: `/${locale}/services/bathroom`,
      icon: <Bath className="h-6 w-6" />,
    },
    {
      title: isEs ? "Mantenimiento Airbnb" : "Airbnb maintenance",
      desc: isEs
        ? "Reparaciones rápidas para pisos turísticos y alquileres."
        : "Fast repairs for tourist apartments and rentals.",
      href: `/${locale}/handyman-valencia`,
      icon: <Hotel className="h-6 w-6" />,
    },
  ];

  const prices = isEs
    ? [
        ["Montaje de TV", "desde 49 €"],
        ["Montaje de muebles", "desde 45 €"],
        ["Cambio de enchufe / interruptor", "desde 35 €"],
        ["Instalación de lámpara", "desde 39 €"],
        ["Estanterías / accesorios", "desde 35 €"],
        ["Pequeñas reparaciones", "desde 35 €"],
        ["Reparación de pladur", "desde 35 €"],
        ["Visita / revisión", "desde 49 €"],
      ]
    : [
        ["TV mounting", "from €49"],
        ["Furniture assembly", "from €45"],
        ["Outlet / switch replacement", "from €35"],
        ["Light installation", "from €39"],
        ["Shelves / accessories", "from €35"],
        ["Small repairs", "from €35"],
        ["Drywall repair", "from €35"],
        ["Visit / inspection", "from €49"],
      ];

  const detailedServices = isEs
    ? [
        {
          title: "Montaje e instalación",
          items: [
            "Montaje de TV en pared",
            "Instalación de soportes",
            "Montaje de muebles IKEA",
            "Instalación de estanterías",
            "Colgar cuadros y espejos",
            "Accesorios de baño",
          ],
        },
        {
          title: "Reparaciones del hogar",
          items: [
            "Pequeños arreglos de pared",
            "Reparación de pladur",
            "Ajuste de puertas",
            "Manillas flojas",
            "Silicona y sellado",
            "Reparaciones para mudanza",
          ],
        },
        {
          title: "Electricidad básica",
          items: [
            "Cambio de enchufe",
            "Cambio de interruptor",
            "Instalación de lámparas",
            "Apliques de pared",
            "Luces de baño",
            "Pequeños ajustes eléctricos",
          ],
        },
        {
          title: "Pisos y alquileres",
          items: [
            "Preparación de apartamentos",
            "Reparaciones rápidas",
            "Mantenimiento entre huéspedes",
            "Montaje de muebles",
            "Ajustes de puertas",
            "Varios trabajos en una visita",
          ],
        },
      ]
    : [
        {
          title: "Assembly and installation",
          items: [
            "TV wall mounting",
            "Bracket installation",
            "IKEA furniture assembly",
            "Shelf installation",
            "Picture and mirror hanging",
            "Bathroom accessories",
          ],
        },
        {
          title: "Home repairs",
          items: [
            "Small wall fixes",
            "Drywall repair",
            "Door adjustment",
            "Loose handles",
            "Silicone and sealing",
            "Move-out touch-ups",
          ],
        },
        {
          title: "Basic electrical",
          items: [
            "Outlet replacement",
            "Switch replacement",
            "Light installation",
            "Wall lights",
            "Bathroom lights",
            "Small electrical adjustments",
          ],
        },
        {
          title: "Rentals and apartments",
          items: [
            "Apartment preparation",
            "Fast repairs",
            "Maintenance between guests",
            "Furniture assembly",
            "Door adjustments",
            "Several jobs in one visit",
          ],
        },
      ];

  const process = isEs
    ? [
        ["1. Envía fotos", "Muestra el trabajo por WhatsApp con fotos, medidas y ubicación en Benimaclet."],
        ["2. Recibe estimación", "Te damos una idea clara del precio, materiales y dificultad."],
        ["3. Confirmamos horario", "Elegimos día y hora según disponibilidad y urgencia."],
        ["4. Trabajo limpio", "Se realiza el montaje, reparación o instalación de forma ordenada."],
        ["5. Revisión final", "Comprobamos que todo queda recto, firme y funcionando correctamente."],
      ]
    : [
        ["1. Send photos", "Show the job by WhatsApp with photos, measurements and Benimaclet location."],
        ["2. Get estimate", "We give you a clear idea of price, materials and difficulty."],
        ["3. Confirm time", "We choose day and time depending on availability and urgency."],
        ["4. Clean work", "The assembly, repair or installation is done neatly."],
        ["5. Final check", "We check that everything is level, secure and working correctly."],
      ];

  const faqs = isEs
    ? [
        {
          q: "¿Cuánto cuesta un manitas en Benimaclet?",
          a: "Depende del trabajo, materiales, tiempo y dificultad. Los trabajos pequeños suelen empezar desde 35–49 €. Siempre confirmamos el precio antes de empezar.",
        },
        {
          q: "¿Puedo enviar fotos por WhatsApp?",
          a: "Sí. Envía fotos, medidas, ubicación en Benimaclet y una breve descripción. Así podemos preparar herramientas, materiales y una estimación más clara.",
        },
        {
          q: "¿Hacéis trabajos pequeños el mismo día?",
          a: "Cuando hay disponibilidad, sí. Para trabajos urgentes o rápidos en Benimaclet, envía fotos y ubicación por WhatsApp.",
        },
        {
          q: "¿Trabajáis con pisos de alquiler o Airbnb?",
          a: "Sí. Ayudamos con mantenimiento, montaje, reparaciones rápidas y preparación de apartamentos para huéspedes o nuevos inquilinos.",
        },
        {
          q: "¿Hacéis electricidad básica?",
          a: "Sí, trabajos no complejos como enchufes, interruptores, lámparas, apliques y pequeños ajustes eléctricos.",
        },
        {
          q: "¿Podéis hacer varios trabajos en una visita?",
          a: "Sí. Es recomendable enviar una lista completa: TV, estanterías, lámparas, muebles, puertas, baño o reparaciones.",
        },
        {
          q: "¿Montáis TV en pared en Benimaclet?",
          a: "Sí. Montamos TV en pared, soportes fijos, inclinables o articulados, soundbars y opciones de ocultación de cables.",
        },
        {
          q: "¿Reparáis pladur o agujeros en pared?",
          a: "Sí. Podemos reparar agujeros, marcas de soportes, daños por manillas, parches, lijado y preparación para pintar.",
        },
      ]
    : [
        {
          q: "How much does a handyman in Benimaclet cost?",
          a: "It depends on the job, materials, time and difficulty. Small jobs usually start from €35–49. We always confirm the price before starting.",
        },
        {
          q: "Can I send photos by WhatsApp?",
          a: "Yes. Send photos, measurements, Benimaclet location and a short description so we can prepare tools, materials and a clearer estimate.",
        },
        {
          q: "Do you do same-day small jobs?",
          a: "When availability allows, yes. For urgent or quick jobs in Benimaclet, send photos and location by WhatsApp.",
        },
        {
          q: "Do you work with rental or Airbnb apartments?",
          a: "Yes. We help with maintenance, assembly, quick repairs and apartment preparation for guests or new tenants.",
        },
        {
          q: "Do you do basic electrical work?",
          a: "Yes, non-complex jobs like outlets, switches, lights, wall lights and small electrical adjustments.",
        },
        {
          q: "Can you do several jobs in one visit?",
          a: "Yes. It is best to send a full list: TV, shelves, lights, furniture, doors, bathroom or repairs.",
        },
        {
          q: "Do you mount TVs on walls in Benimaclet?",
          a: "Yes. We mount TVs on walls, fixed, tilting or full-motion brackets, soundbars and cable concealment options.",
        },
        {
          q: "Do you repair drywall or wall holes?",
          a: "Yes. We can repair holes, bracket marks, handle damage, patches, sanding and preparation for painting.",
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
          addressRegion: "Valencia",
          addressCountry: "ES",
        },
      },
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: isEs ? "Manitas en Benimaclet Valencia" : "Handyman in Benimaclet Valencia",
        serviceType: isEs ? "Servicio de manitas" : "Handyman services",
        provider: {
          "@id": `${baseUrl}/#localbusiness`,
        },
        areaServed: ["Benimaclet", "Valencia"],
        url: pageUrl,
        description: isEs
          ? "Servicio de manitas en Benimaclet Valencia para montaje de TV, muebles, lámparas, enchufes, estanterías, pladur, pequeñas reparaciones, baño, cocina, Airbnb y mantenimiento."
          : "Handyman service in Benimaclet Valencia for TV mounting, furniture, lights, outlets, shelves, drywall, small repairs, bathroom, kitchen, Airbnb and maintenance.",
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: isEs ? "Servicios de manitas en Benimaclet" : "Handyman services in Benimaclet",
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
            name: isEs ? "Inicio" : "Home",
            item: `${baseUrl}/${locale}`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: isEs ? "Manitas Valencia" : "Handyman Valencia",
            item: `${baseUrl}/${locale}/handyman-valencia`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: isEs ? "Manitas Benimaclet" : "Handyman Benimaclet",
            item: pageUrl,
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
          <div className="max-w-5xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-white px-4 py-2 text-sm font-semibold shadow-sm">
              <MapPin className="h-4 w-4 text-yellow-500" />
              THEVULGO • Benimaclet Valencia
            </div>

            <h1 className="text-4xl font-black tracking-tight sm:text-6xl">
              {isEs
                ? "Manitas en Benimaclet Valencia para reparaciones, montaje e instalaciones"
                : "Handyman in Benimaclet Valencia for repairs, assembly and installations"}
            </h1>

            <p className="mt-6 max-w-4xl text-lg leading-8 text-neutral-700">
              {isEs
                ? "Servicio de manitas en Benimaclet para trabajos reales del día a día: montar una TV, instalar estanterías, montar muebles IKEA, cambiar un enchufe, colgar una lámpara, reparar pladur, ajustar puertas o resolver varias tareas pequeñas en una sola visita."
                : "Handyman service in Benimaclet for real everyday jobs: mounting a TV, installing shelves, assembling IKEA furniture, replacing an outlet, hanging a light, repairing drywall, adjusting doors or solving several small tasks in one visit."}
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
                  icon: Clock3,
                  title: isEs ? "Respuesta rápida" : "Fast response",
                  text: isEs ? "Envía fotos desde Benimaclet y recibe estimación." : "Send photos from Benimaclet and get an estimate.",
                },
                {
                  icon: ShieldCheck,
                  title: isEs ? "Acabado limpio" : "Clean finish",
                  text: isEs ? "Trabajo ordenado, nivelado y sin sorpresas." : "Neat, level work with no surprises.",
                },
                {
                  icon: BadgeCheck,
                  title: isEs ? "ES / EN" : "EN / ES",
                  text: isEs ? "Comunicación en español e inglés." : "Communication in English and Spanish.",
                },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl border border-yellow-300 bg-white p-5 shadow-md">
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
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-yellow-50 px-4 py-1 text-xs font-bold">
              <Wrench className="h-4 w-4" />
              {isEs ? "Servicios en Benimaclet" : "Services in Benimaclet"}
            </div>

            <h2 className="mt-4 text-3xl font-black sm:text-4xl">
              {isEs ? "Servicios de manitas en Benimaclet" : "Handyman services in Benimaclet"}
            </h2>

            <p className="mt-4 max-w-4xl text-neutral-700 leading-8">
              {isEs
                ? "Benimaclet tiene muchos pisos, apartamentos compartidos, viviendas en alquiler, pequeños negocios y espacios que necesitan mantenimiento práctico. THEVULGO ayuda con montaje, reparaciones, instalaciones y pequeños arreglos sin complicar el trabajo."
                : "Benimaclet has many apartments, shared flats, rental homes, small businesses and spaces that need practical maintenance. THEVULGO helps with assembly, repairs, installations and small fixes without overcomplicating the job."}
            </p>
          </div>

          <Link
            href={`/${locale}/handyman-valencia`}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-neutral-300 bg-white px-5 py-3 text-sm font-bold shadow-sm transition hover:scale-105"
          >
            {isEs ? "Manitas Valencia" : "Handyman Valencia"}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {moneyLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group rounded-2xl border border-yellow-300 bg-white p-6 shadow-md transition hover:scale-[1.02] hover:shadow-xl"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-400 text-black shadow-md">
                {item.icon}
              </div>

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
          <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-white px-4 py-1 text-xs font-bold">
                <Euro className="h-4 w-4 text-yellow-500" />
                {isEs ? "Precios orientativos" : "Guide prices"}
              </div>

              <h2 className="mt-4 text-3xl font-black sm:text-4xl">
                {isEs
                  ? "Presupuesto claro para trabajos en Benimaclet"
                  : "Clear estimate for jobs in Benimaclet"}
              </h2>

              <p className="mt-5 text-lg leading-8 text-neutral-700">
                {isEs
                  ? "Antes de empezar, revisamos fotos, medidas, tipo de pared, materiales disponibles y dificultad. Así evitamos sorpresas y el cliente sabe qué se puede hacer antes de confirmar la visita."
                  : "Before starting, we review photos, measurements, wall type, available materials and difficulty. This avoids surprises and helps the client know what can be done before confirming the visit."}
              </p>
            </div>

            <div className="rounded-3xl border border-yellow-300 bg-white p-6 shadow-xl">
              <h3 className="flex items-center gap-2 text-xl font-black">
                <Euro className="h-6 w-6 text-yellow-500" />
                {isEs ? "Precios desde" : "Prices from"}
              </h3>

              <div className="mt-5 space-y-3">
                {prices.map(([name, price]) => (
                  <div key={name} className="flex items-center justify-between gap-4 rounded-xl bg-yellow-50 p-4">
                    <span className="font-semibold">{name}</span>
                    <span className="shrink-0 font-black">{price}</span>
                  </div>
                ))}
              </div>

              <p className="mt-5 text-sm leading-6 text-neutral-600">
                {isEs
                  ? "El precio final depende del estado de la pared, dificultad, materiales, altura, acceso y tiempo necesario."
                  : "Final price depends on wall condition, difficulty, materials, height, access and time required."}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-yellow-50 px-4 py-1 text-xs font-bold">
            <ClipboardCheck className="h-4 w-4" />
            {isEs ? "Qué hacemos" : "What we do"}
          </div>

          <h2 className="mx-auto mt-4 max-w-5xl text-3xl font-black sm:text-4xl">
            {isEs
              ? "Trabajos de manitas para pisos, alquileres y negocios en Benimaclet"
              : "Handyman jobs for apartments, rentals and businesses in Benimaclet"}
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {detailedServices.map((group) => (
            <div key={group.title} className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-md">
              <h3 className="text-xl font-black">{group.title}</h3>

              <div className="mt-5 space-y-3">
                {group.items.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-yellow-500" />
                    <span className="text-sm leading-7 text-neutral-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-black text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-neutral-900 px-4 py-1 text-xs font-bold text-yellow-400">
                <Star className="h-4 w-4" />
                {isEs ? "Por qué THEVULGO" : "Why THEVULGO"}
              </div>

              <h2 className="mt-4 text-3xl font-black sm:text-4xl">
                {isEs ? "Por qué elegir THEVULGO en Benimaclet" : "Why choose THEVULGO in Benimaclet"}
              </h2>

              <p className="mt-5 text-lg leading-8 text-neutral-300">
                {isEs
                  ? "No se trata solo de montar algo rápido. Se trata de cuidar el espacio, usar fijaciones correctas, dejar líneas limpias, revisar el resultado y evitar sorpresas."
                  : "It is not just about doing something quickly. It is about respecting the space, using proper fixings, leaving clean lines, checking the result and avoiding surprises."}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                [Hammer, isEs ? "Experiencia práctica" : "Practical experience"],
                [Home, isEs ? "Trabajos del hogar" : "Home jobs"],
                [Zap, isEs ? "Soluciones rápidas" : "Fast solutions"],
                [Star, isEs ? "Acabado profesional" : "Professional finish"],
              ].map(([Icon, title]) => {
                const LucideIcon = Icon as typeof Hammer;
                return (
                  <div key={String(title)} className="rounded-2xl border border-yellow-400 bg-neutral-900 p-5">
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
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-yellow-50 px-4 py-1 text-xs font-bold">
            <CalendarCheck className="h-4 w-4" />
            {isEs ? "Cómo funciona" : "How it works"}
          </div>

          <h2 className="mx-auto mt-4 max-w-5xl text-3xl font-black sm:text-4xl">
            {isEs ? "De fotos por WhatsApp a trabajo terminado" : "From WhatsApp photos to finished job"}
          </h2>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-5">
          {process.map(([title, text]) => (
            <div key={title} className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-md">
              <h3 className="font-black">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-neutral-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-white px-4 py-1 text-xs font-bold">
                <Hotel className="h-4 w-4 text-yellow-500" />
                {isEs ? "Alquileres y pisos" : "Rentals and apartments"}
              </div>

              <h2 className="mt-4 text-3xl font-black sm:text-4xl">
                {isEs
                  ? "Mantenimiento para pisos de alquiler en Benimaclet"
                  : "Maintenance for rental apartments in Benimaclet"}
              </h2>

              <p className="mt-5 text-lg leading-8 text-neutral-700">
                {isEs
                  ? "Benimaclet tiene muchos pisos compartidos, alquileres y apartamentos que necesitan mantenimiento rápido: una puerta que no cierra, una lámpara suelta, un enchufe roto, una manilla floja, una balda caída o una pared dañada."
                  : "Benimaclet has many shared apartments, rentals and homes that need fast maintenance: a door that does not close, a loose light, a broken outlet, a loose handle, a fallen shelf or a damaged wall."}
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {(isEs
                ? [
                    "Reparaciones entre inquilinos",
                    "Montaje de muebles nuevos",
                    "Ajuste de puertas y manillas",
                    "Cambio de lámparas o enchufes",
                    "Reparación de pared o pladur",
                    "Silicona y pequeños sellados",
                    "Instalación de accesorios",
                    "Lista de trabajos acumulados",
                  ]
                : [
                    "Repairs between tenants",
                    "New furniture assembly",
                    "Door and handle adjustments",
                    "Light or outlet replacement",
                    "Wall or drywall repair",
                    "Silicone and small sealing",
                    "Accessory installation",
                    "List of accumulated small jobs",
                  ]).map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-yellow-500" />
                  <span className="text-sm leading-7 text-neutral-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-3xl border border-yellow-300 bg-white p-8 shadow-xl">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-400 text-black shadow-md">
              <Drill className="h-6 w-6" />
            </div>

            <h2 className="mt-5 text-3xl font-black">
              {isEs ? "Fijaciones seguras en paredes de Benimaclet" : "Secure fixings on Benimaclet walls"}
            </h2>

            <p className="mt-4 text-lg leading-8 text-neutral-700">
              {isEs
                ? "Muchos trabajos dependen de una buena fijación: TV, estanterías, espejos, accesorios de baño, cortinas o cuadros. Antes de perforar, se revisa el tipo de pared y el peso del elemento."
                : "Many jobs depend on good fixing: TVs, shelves, mirrors, bathroom accessories, curtains or pictures. Before drilling, the wall type and item weight are checked."}
            </p>
          </div>

          <div className="rounded-3xl border border-yellow-300 bg-white p-8 shadow-xl">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-400 text-black shadow-md">
              <Settings className="h-6 w-6" />
            </div>

            <h2 className="mt-5 text-3xl font-black">
              {isEs ? "Varias tareas en una sola visita" : "Several tasks in one visit"}
            </h2>

            <p className="mt-4 text-lg leading-8 text-neutral-700">
              {isEs
                ? "Si tienes varias cosas pendientes en Benimaclet, es mejor enviarlas todas juntas: una lámpara, una estantería, un mueble, una puerta, una reparación de pared o un accesorio de baño."
                : "If you have several pending jobs in Benimaclet, it is better to send them all together: a light, a shelf, furniture, a door, a wall repair or a bathroom accessory."}
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-white px-4 py-1 text-xs font-bold">
              <MapPin className="h-4 w-4 text-yellow-500" />
              {isEs ? "Zonas cercanas" : "Nearby areas"}
            </div>

            <h2 className="mx-auto mt-4 max-w-5xl text-3xl font-black sm:text-4xl">
              {isEs ? "Manitas cerca de Benimaclet" : "Handyman near Benimaclet"}
            </h2>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {areaPages.map((item) => (
              <Link
                key={item.slug}
                href={`/${locale}/${item.slug}`}
                className="group flex items-center justify-between rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm transition hover:border-yellow-400 hover:shadow-md"
              >
                <span className="text-sm font-black">
                  {isEs ? `Manitas en ${item.area}` : `Handyman in ${item.area}`}
                </span>
                <ArrowRight className="h-4 w-4 text-neutral-400 transition group-hover:text-yellow-500" />
              </Link>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {areas.map((area) => (
              <span key={area} className="rounded-full border border-yellow-300 bg-yellow-50 px-4 py-2 text-sm font-semibold">
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-yellow-50 px-4 py-1 text-xs font-bold">
              <Sparkles className="h-4 w-4" />
              SEO • handyman Benimaclet
            </div>

            <h2 className="mt-4 text-3xl font-black sm:text-4xl">
              {isEs
                ? "Servicio de manitas en Benimaclet Valencia"
                : "Handyman service in Benimaclet Valencia"}
            </h2>

            <div className="mt-6 space-y-5 text-lg leading-8 text-neutral-700">
              {isEs ? (
                <>
                  <p>
                    Si buscas <strong>manitas en Benimaclet Valencia</strong>,
                    THEVULGO ofrece ayuda práctica para trabajos pequeños y
                    medianos en viviendas, pisos compartidos, apartamentos de
                    alquiler, oficinas y pequeños negocios.
                  </p>

                  <p>
                    Los trabajos más habituales son montaje de TV, montaje de
                    muebles, instalación de estanterías, lámparas, enchufes,
                    accesorios de baño, pequeños arreglos de cocina, ajustes de
                    puertas, reparación de pladur y mantenimiento de pisos.
                  </p>

                  <p>
                    Para obtener un presupuesto más claro, lo mejor es enviar
                    fotos por WhatsApp. Con fotos, medidas y una descripción
                    breve se puede entender el trabajo, preparar herramientas y
                    confirmar si se necesitan materiales adicionales.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    If you are looking for a{" "}
                    <strong>handyman in Benimaclet Valencia</strong>, THEVULGO
                    offers practical help for small and medium jobs in homes,
                    shared apartments, rental apartments, offices and small
                    businesses.
                  </p>

                  <p>
                    Common jobs include TV mounting, furniture assembly, shelf
                    installation, lights, outlets, bathroom accessories, small
                    kitchen fixes, door adjustments, drywall repair and apartment
                    maintenance.
                  </p>

                  <p>
                    To get a clearer estimate, it is best to send photos by
                    WhatsApp. With photos, measurements and a short description,
                    the job can be understood, tools prepared and additional
                    materials confirmed.
                  </p>
                </>
              )}
            </div>
          </div>

          <div className="rounded-3xl border border-yellow-300 bg-yellow-50 p-8 shadow-xl">
            <h3 className="text-2xl font-black">
              {isEs ? "Antes de pedir presupuesto" : "Before requesting an estimate"}
            </h3>

            <div className="mt-6 space-y-4">
              {(isEs
                ? [
                    "Envía fotos claras del trabajo",
                    "Indica dirección o zona de Benimaclet",
                    "Explica si ya tienes materiales",
                    "Manda medidas aproximadas si es montaje",
                    "Di si hay varios trabajos en la misma visita",
                    "Confirma si hay parking, ascensor o acceso difícil",
                  ]
                : [
                    "Send clear photos of the job",
                    "Mention address or area in Benimaclet",
                    "Explain if you already have materials",
                    "Send approximate measurements if it is mounting",
                    "Say if there are several jobs in the same visit",
                    "Confirm if there is parking, lift or difficult access",
                  ]).map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-yellow-600" />
                  <span className="text-sm font-medium leading-7 text-neutral-800">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-white px-4 py-1 text-xs font-bold">
              <BadgeCheck className="h-4 w-4 text-yellow-500" />
              FAQ
            </div>

            <h2 className="mt-4 text-3xl font-black sm:text-4xl">
              {isEs ? "Preguntas frecuentes" : "Frequently asked questions"}
            </h2>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
                <h3 className="font-black">{faq.q}</h3>
                <p className="mt-3 leading-7 text-neutral-700">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="rounded-3xl border border-yellow-400 bg-yellow-400 p-8 shadow-2xl lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-center">
            <div>
              <h2 className="text-3xl font-black sm:text-4xl">
                {isEs ? "¿Necesitas un manitas en Benimaclet?" : "Need a handyman in Benimaclet?"}
              </h2>

              <p className="mt-4 max-w-3xl text-lg font-medium leading-8">
                {isEs
                  ? "Envía fotos por WhatsApp y te diremos qué se puede hacer, cuánto puede costar y cuándo podemos ir."
                  : "Send photos by WhatsApp and we will tell you what can be done, how much it may cost and when we can come."}
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a href={whatsappHref} className="inline-flex items-center justify-center gap-2 rounded-xl bg-black px-6 py-4 font-bold text-white shadow-lg transition hover:scale-105">
                <MessageCircle className="h-5 w-5" />
                WhatsApp
              </a>

              <Link href={estimateHref} className="inline-flex items-center justify-center gap-2 rounded-xl border border-black bg-white px-6 py-4 font-bold text-black shadow-sm transition hover:scale-105">
                {isEs ? "Pedir presupuesto" : "Request estimate"}
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}