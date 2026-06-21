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

  Paintbrush,

  DoorOpen,

  Drill,

  Bath,

  Kitchen,

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

const areas = [

  "Valencia",

  "Campanar",

  "Ruzafa",

  "Russafa",

  "Benimaclet",

  "Patraix",

  "El Carmen",

  "Extramurs",

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

const areaPages = [

  {

    slug: "handyman-benimaclet",

    area: "Benimaclet",

  },

  {

    slug: "handyman-russafa",

    area: "Russafa / Ruzafa",

  },

  {

    slug: "handyman-campanar",

    area: "Campanar",

  },

  {

    slug: "handyman-patraix",

    area: "Patraix",

  },

  {

    slug: "handyman-mislata",

    area: "Mislata",

  },

  {

    slug: "handyman-paterna",

    area: "Paterna",

  },

];

export async function generateMetadata({ params }: Props): Promise<Metadata> {

  const { locale } = await params;

  const isEs = locale === "es";

  const title = isEs

    ? "Manitas en Valencia | Reparaciones, Montaje y Mantenimiento | THEVULGO"

    : "Handyman in Valencia | Repairs, Installations & Home Maintenance | THEVULGO";

  const description = isEs

    ? "Manitas profesional en Valencia para montaje de TV, muebles IKEA, estanterías, lámparas, enchufes, pladur, pequeñas reparaciones, cocina, baño, Airbnb, oficinas y mantenimiento."

    : "Professional handyman in Valencia for TV mounting, IKEA furniture assembly, shelves, lights, outlets, drywall, small repairs, kitchen, bathroom, Airbnb, offices and maintenance.";

  return {

    title,

    description,

    keywords: isEs

      ? [

          "manitas valencia",

          "servicio manitas valencia",

          "manitas a domicilio valencia",

          "handyman valencia",

          "reparaciones hogar valencia",

          "montaje muebles valencia",

          "montaje tv valencia",

          "electricidad basica valencia",

          "pladur valencia",

          "mantenimiento airbnb valencia",

          "manitas ruzafa",

          "manitas benimaclet",

          "manitas campanar",

          "manitas patraix",

          "manitas mislata",

          "manitas paterna",

        ]

      : [

          "handyman valencia",

          "handyman in valencia",

          "home repairs valencia",

          "furniture assembly valencia",

          "tv mounting valencia",

          "drywall repair valencia",

          "basic electrical valencia",

          "airbnb maintenance valencia",

          "handyman ruzafa",

          "handyman benimaclet",

          "handyman campanar",

          "handyman patraix",

          "handyman mislata",

          "handyman paterna",

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

      canonical: `${baseUrl}/${locale}/handyman-valencia`,

      languages: {

        es: `${baseUrl}/es/handyman-valencia`,

        en: `${baseUrl}/en/handyman-valencia`,

        "x-default": `${baseUrl}/es/handyman-valencia`,

      },

    },

    openGraph: {

      title,

      description,

      url: `${baseUrl}/${locale}/handyman-valencia`,

      siteName: "THEVULGO",

      locale: isEs ? "es_ES" : "en_GB",

      type: "website",

    },

  };

}

export default async function HandymanValenciaPage({ params }: Props) {

  const { locale } = await params;

  const isEs = locale === "es";

  const pageUrl = `${baseUrl}/${locale}/handyman-valencia`;

  const estimateHref = `/${locale}/estimate?category=handyman`;

  const whatsappText = encodeURIComponent(

    isEs

      ? "Hola, necesito un manitas en Valencia. Quiero pedir presupuesto para una reparación, montaje o instalación."

      : "Hi, I need a handyman in Valencia. I’d like to request an estimate for a repair, assembly or installation."

  );

  const whatsappHref = `https://wa.me/${phone}?text=${whatsappText}`;

  const moneyLinks = [

    {

      title: isEs ? "Montaje de TV" : "TV mounting",

      desc: isEs

        ? "TV en pared, soportes fijos, inclinables, articulados, soundbar y cables limpios."

        : "Wall-mounted TVs, fixed, tilting and full-motion brackets, soundbars and clean cables.",

      href: `/${locale}/montaje-tv-valencia`,

      icon: <Tv className="h-6 w-6" />,

    },

    {

      title: isEs ? "Montaje de muebles IKEA" : "IKEA furniture assembly",

      desc: isEs

        ? "Camas, armarios, cómodas, mesas, estanterías, muebles de TV y muebles auxiliares."

        : "Beds, wardrobes, drawers, tables, shelves, TV units and storage furniture.",

      href: `/${locale}/montaje-muebles-ikea-valencia`,

      icon: <Sofa className="h-6 w-6" />,

    },

    {

      title: isEs ? "Instalación de lámparas" : "Light installation",

      desc: isEs

        ? "Lámparas de techo, apliques de pared, luces de baño, luminarias y pequeños ajustes."

        : "Ceiling lights, wall lights, bathroom lights, fixtures and small adjustments.",

      href: `/${locale}/instalacion-lampara-valencia`,

      icon: <Lightbulb className="h-6 w-6" />,

    },

    {

      title: isEs ? "Cambio de enchufe" : "Outlet replacement",

      desc: isEs

        ? "Sustitución de enchufes, interruptores, tapas y pequeños trabajos eléctricos básicos."

        : "Outlet, switch and cover replacement plus basic small electrical jobs.",

      href: `/${locale}/cambio-enchufe-valencia`,

      icon: <Plug className="h-6 w-6" />,

    },

    {

      title: isEs ? "Instalación de estanterías" : "Shelf installation",

      desc: isEs

        ? "Estantes nivelados, fijación segura, anclajes correctos y acabado limpio."

        : "Level shelves, secure fixing, correct anchors and clean finish.",

      href: `/${locale}/montaje-estanterias-valencia`,

      icon: <Ruler className="h-6 w-6" />,

    },

    {

      title: isEs ? "Pladur y reparaciones de pared" : "Drywall and wall repairs",

      desc: isEs

        ? "Agujeros, anclajes, parches, lijado, preparación para pintar y pequeños daños."

        : "Holes, anchors, patches, sanding, paint preparation and small wall damage.",

      href: `/${locale}/pladur-valencia`,

      icon: <Layers className="h-6 w-6" />,

    },

    {

      title: isEs ? "Ajuste de puertas" : "Door adjustment",

      desc: isEs

        ? "Puertas que rozan, manillas flojas, bisagras, cierres, topes y pequeños ajustes."

        : "Rubbing doors, loose handles, hinges, latches, door stops and small adjustments.",

      href: `/${locale}/services/doors`,

      icon: <DoorOpen className="h-6 w-6" />,

    },

    {

      title: isEs ? "Trabajos de baño" : "Bathroom jobs",

      desc: isEs

        ? "Espejos, muebles de baño, accesorios, silicona, estantes y pequeños arreglos."

        : "Mirrors, bathroom cabinets, accessories, silicone, shelves and small fixes.",

      href: `/${locale}/services/bathroom`,

      icon: <Bath className="h-6 w-6" />,

    },

    {

      title: isEs ? "Trabajos de cocina" : "Kitchen jobs",

      desc: isEs

        ? "Pequeños arreglos, muebles, extractores, silicona, ajustes y accesorios."

        : "Small fixes, cabinets, extractors, silicone, adjustments and accessories.",

      href: `/${locale}/services/kitchen`,

      icon: <Kitchen className="h-6 w-6" />,

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

  const clientTypes = [

    {

      title: isEs ? "Pisos y casas" : "Apartments and houses",

      text: isEs

        ? "Montaje, reparaciones, ajustes, instalaciones y preparación de espacios para vivir mejor."

        : "Assembly, repairs, adjustments, installations and preparation of spaces for better living.",

      icon: <Home className="h-6 w-6" />,

    },

    {

      title: isEs ? "Airbnb y alquileres" : "Airbnb and rentals",

      text: isEs

        ? "Mantenimiento rápido, preparación de apartamentos, reparaciones entre huéspedes y pequeños arreglos."

        : "Fast maintenance, apartment preparation, repairs between guests and small fixes.",

      icon: <Hotel className="h-6 w-6" />,

    },

    {

      title: isEs ? "Oficinas y locales" : "Offices and units",

      text: isEs

        ? "TV, estanterías, lámparas, muebles, pequeños arreglos, paredes y mantenimiento."

        : "TVs, shelves, lights, furniture, small repairs, walls and maintenance.",

      icon: <Building2 className="h-6 w-6" />,

    },

  ];

  const handymanAreaLinks = areaPages.map((area) => ({

    title: isEs

      ? `Manitas en ${area.area}`

      : `Handyman in ${area.area}`,

    href: `/${locale}/${area.slug}`,

  }));

  const process = isEs

    ? [

        ["1. Envía fotos", "Muestra el trabajo por WhatsApp con fotos, medidas y ubicación."],

        ["2. Recibe estimación", "Te damos una idea clara del precio, materiales y dificultad."],

        ["3. Confirmamos horario", "Elegimos día y hora según disponibilidad y urgencia."],

        ["4. Trabajo limpio", "Se realiza el montaje, reparación o instalación de forma ordenada."],

        ["5. Revisión final", "Comprobamos que todo queda recto, firme y funcionando correctamente."],

      ]

    : [

        ["1. Send photos", "Show the job by WhatsApp with photos, measurements and location."],

        ["2. Get estimate", "We give you a clear idea of price, materials and difficulty."],

        ["3. Confirm time", "We choose day and time depending on availability and urgency."],

        ["4. Clean work", "The assembly, repair or installation is done neatly."],

        ["5. Final check", "We check that everything is level, secure and working correctly."],

      ];

        const whyChoose = isEs
    ? [
        "Presupuesto claro antes de empezar",
        "Respuesta rápida por WhatsApp",
        "Trabajo limpio y ordenado",
        "Montaje nivelado y fijación segura",
        "Soluciones para viviendas, Airbnb, oficinas y locales",
        "Comunicación en español e inglés",
        "Ayuda con varios trabajos en una sola visita",
        "Experiencia práctica en montaje, reparaciones y mantenimiento",
      ]
    : [
        "Clear estimate before starting",
        "Fast response by WhatsApp",
        "Clean and tidy work",
        "Level mounting and secure fixing",
        "Solutions for homes, Airbnb, offices and units",
        "Communication in English and Spanish",
        "Help with multiple jobs in one visit",
        "Practical experience in assembly, repairs and maintenance",
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
            "Instalación de accesorios de baño",
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
          title: "Airbnb y mantenimiento",
          items: [
            "Preparación de apartamentos",
            "Reparaciones rápidas",
            "Mantenimiento entre huéspedes",
            "Montaje de muebles",
            "Ajustes de puertas",
            "Pequeños trabajos acumulados",
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
            "Bathroom accessory installation",
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
          title: "Airbnb and maintenance",
          items: [
            "Apartment preparation",
            "Fast repairs",
            "Maintenance between guests",
            "Furniture assembly",
            "Door adjustments",
            "Multiple small jobs",
          ],
        },
      ];

  const faqs = isEs
    ? [
        {
          q: "¿Cuánto cuesta un manitas en Valencia?",
          a: "Depende del trabajo, materiales, tiempo y zona. Los trabajos pequeños suelen empezar desde 35–49 €. Siempre confirmamos el precio antes de empezar.",
        },
        {
          q: "¿Puedo enviar fotos por WhatsApp?",
          a: "Sí. Lo mejor es enviar fotos, medidas y una breve descripción. Así podemos preparar herramientas, materiales y una estimación más clara.",
        },
        {
          q: "¿Hacéis trabajos pequeños el mismo día?",
          a: "Cuando hay disponibilidad, sí. Para trabajos urgentes o rápidos, envía fotos y ubicación por WhatsApp.",
        },
        {
          q: "¿Trabajáis con apartamentos Airbnb?",
          a: "Sí. Ayudamos con mantenimiento, montaje, reparaciones rápidas y preparación de apartamentos para huéspedes.",
        },
        {
          q: "¿Hacéis electricidad básica?",
          a: "Sí, trabajos no complejos como enchufes, interruptores, lámparas, apliques y pequeños ajustes eléctricos.",
        },
        {
          q: "¿Podéis hacer varios trabajos en una visita?",
          a: "Sí. Es recomendable enviar una lista completa: TV, estanterías, lámparas, muebles, puertas, baño o reparaciones. Así se puede organizar mejor el tiempo.",
        },
        {
          q: "¿Montáis muebles IKEA?",
          a: "Sí. Montamos camas, armarios, cómodas, mesas, estanterías, muebles de TV y otros muebles de hogar u oficina.",
        },
        {
          q: "¿Instaláis TV en pared?",
          a: "Sí. Montamos TV en pared, soportes fijos, inclinables o articulados, soundbars y opciones de ocultación de cables.",
        },
        {
          q: "¿Reparáis pladur o agujeros en pared?",
          a: "Sí. Podemos reparar agujeros, marcas de soportes, daños por manillas, parches, lijado y preparación para pintar.",
        },
        {
          q: "¿En qué zonas trabajáis?",
          a: "Trabajamos en Valencia ciudad y zonas cercanas como Campanar, Ruzafa, Benimaclet, Mislata, Burjassot, Paterna, Torrent, Sagunto, Cullera y Gandía.",
        },
      ]
    : [
        {
          q: "How much does a handyman in Valencia cost?",
          a: "It depends on the job, materials, time and area. Small jobs usually start from €35–49. We always confirm the price before starting.",
        },
        {
          q: "Can I send photos by WhatsApp?",
          a: "Yes. Send photos, measurements and a short description so we can prepare tools, materials and a clearer estimate.",
        },
        {
          q: "Do you do same-day small jobs?",
          a: "When availability allows, yes. For urgent or quick jobs, send photos and location by WhatsApp.",
        },
        {
          q: "Do you work with Airbnb apartments?",
          a: "Yes. We help with maintenance, assembly, quick repairs and apartment preparation for guests.",
        },
        {
          q: "Do you do basic electrical work?",
          a: "Yes, non-complex jobs like outlets, switches, lights, wall lights and small electrical adjustments.",
        },
        {
          q: "Can you do several jobs in one visit?",
          a: "Yes. It is best to send a full list: TV, shelves, lights, furniture, doors, bathroom or repairs. This helps organize time better.",
        },
        {
          q: "Do you assemble IKEA furniture?",
          a: "Yes. We assemble beds, wardrobes, drawers, tables, shelves, TV units and other home or office furniture.",
        },
        {
          q: "Do you install TVs on walls?",
          a: "Yes. We mount TVs on walls, fixed, tilting or full-motion brackets, soundbars and cable concealment options.",
        },
        {
          q: "Do you repair drywall or wall holes?",
          a: "Yes. We can repair holes, bracket marks, handle damage, patches, sanding and preparation for painting.",
        },
        {
          q: "Which areas do you cover?",
          a: "We work in Valencia city and nearby areas including Campanar, Ruzafa, Benimaclet, Mislata, Burjassot, Paterna, Torrent, Sagunto, Cullera and Gandía.",
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
        name: isEs ? "Manitas en Valencia" : "Handyman in Valencia",
        serviceType: isEs ? "Servicio de manitas" : "Handyman services",
        provider: {
          "@id": `${baseUrl}/#localbusiness`,
        },
        areaServed: areas,
        url: pageUrl,
        description: isEs
          ? "Servicio de manitas en Valencia para montaje de TV, muebles, lámparas, enchufes, estanterías, pladur, pequeñas reparaciones, baño, cocina, Airbnb, oficinas y mantenimiento."
          : "Handyman service in Valencia for TV mounting, furniture, lights, outlets, shelves, drywall, small repairs, bathroom, kitchen, Airbnb, offices and maintenance.",
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: isEs
            ? "Servicios de manitas en Valencia"
            : "Handyman services in Valencia",
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
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-yellow-200/40 blur-3xl" />
          <div className="absolute right-10 top-20 h-[320px] w-[320px] rounded-full bg-yellow-100/70 blur-3xl" />
        </div>

        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-5xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-white px-4 py-2 text-sm font-semibold shadow-sm">
              <MapPin className="h-4 w-4 text-yellow-500" />
              THEVULGO • Valencia & nearby
            </div>

            <h1 className="text-4xl font-black tracking-tight sm:text-6xl">
              {isEs
                ? "Manitas profesional en Valencia para reparaciones, montaje e instalaciones limpias"
                : "Professional handyman in Valencia for clean repairs, assembly and installations"}
            </h1>

            <p className="mt-6 max-w-4xl text-lg leading-8 text-neutral-700">
              {isEs
                ? "THEVULGO ayuda con trabajos reales del día a día: montar una TV, instalar estanterías, montar muebles IKEA, cambiar un enchufe, colgar una lámpara, reparar pladur, ajustar puertas, preparar un apartamento Airbnb o resolver varias tareas pequeñas en una sola visita."
                : "THEVULGO helps with real everyday jobs: mounting a TV, installing shelves, assembling IKEA furniture, replacing an outlet, hanging a light, repairing drywall, adjusting doors, preparing an Airbnb apartment or solving several small tasks in one visit."}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappHref}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-yellow-400 px-6 py-4 font-bold text-black shadow-lg transition hover:scale-105"
              >
                <MessageCircle className="h-5 w-5" />
                {isEs
                  ? "Pedir presupuesto por WhatsApp"
                  : "Request estimate by WhatsApp"}
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
                  text: isEs
                    ? "Envía fotos y recibe una estimación clara."
                    : "Send photos and get a clear estimate.",
                },
                {
                  icon: ShieldCheck,
                  title: isEs ? "Acabado limpio" : "Clean finish",
                  text: isEs
                    ? "Trabajo ordenado, nivelado y sin sorpresas."
                    : "Neat, level work with no surprises.",
                },
                {
                  icon: BadgeCheck,
                  title: isEs ? "ES / EN" : "EN / ES",
                  text: isEs
                    ? "Comunicación en español e inglés."
                    : "Communication in English and Spanish.",
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
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-yellow-50 px-4 py-1 text-xs font-bold">
              <Wrench className="h-4 w-4" />
              {isEs ? "Servicios principales" : "Main services"}
            </div>

            <h2 className="mt-4 text-3xl font-black sm:text-4xl">
              {isEs
                ? "Servicios de manitas en Valencia"
                : "Handyman services in Valencia"}
            </h2>

            <p className="mt-4 max-w-4xl text-neutral-700 leading-8">
              {isEs
                ? "Estas páginas internas ayudan a Google a entender la estructura del sitio y también ayudan al cliente a encontrar exactamente el servicio que necesita: TV, muebles, electricidad básica, pladur, baño, cocina, puertas y mantenimiento."
                : "These internal pages help Google understand the site structure and help the client find the exact service they need: TV, furniture, basic electrical, drywall, bathroom, kitchen, doors and maintenance."}
            </p>
          </div>

          <Link
            href={`/${locale}/services`}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-neutral-300 bg-white px-5 py-3 text-sm font-bold shadow-sm transition hover:scale-105"
          >
            {isEs ? "Ver todos los servicios" : "View all services"}
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
                  ? "Presupuesto claro para trabajos pequeños y medianos"
                  : "Clear estimate for small and medium jobs"}
              </h2>

              <p className="mt-5 text-lg leading-8 text-neutral-700">
                {isEs
                  ? "Un servicio de manitas no es una reforma completa. Es la solución para esos trabajos pequeños y medianos que necesitas terminar bien: montar, fijar, ajustar, cambiar, reparar y dejar todo funcionando correctamente."
                  : "A handyman service is not a full renovation. It is the solution for small and medium jobs that need to be finished properly: assembling, fixing, adjusting, replacing, repairing and leaving everything working correctly."}
              </p>

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
                  <div
                    key={name}
                    className="flex items-center justify-between gap-4 rounded-xl bg-yellow-50 p-4"
                  >
                    <span className="font-semibold">{name}</span>
                    <span className="shrink-0 font-black">{price}</span>
                  </div>
                ))}
              </div>

              <p className="mt-5 text-sm leading-6 text-neutral-600">
                {isEs
                  ? "El precio final depende del estado de la pared, dificultad, materiales, altura, acceso, desplazamiento y tiempo necesario."
                  : "Final price depends on wall condition, difficulty, materials, height, access, travel and time required."}
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
              ? "Trabajos de manitas para viviendas, alquileres, oficinas y locales"
              : "Handyman jobs for homes, rentals, offices and commercial units"}
          </h2>

          <p className="mx-auto mt-4 max-w-4xl text-neutral-700 leading-8">
            {isEs
              ? "La mayoría de clientes no necesita una empresa grande de reformas. Necesita alguien que llegue preparado, entienda el problema, use herramientas correctas y termine el trabajo de forma limpia."
              : "Most clients do not need a big renovation company. They need someone who arrives prepared, understands the problem, uses the right tools and finishes the job cleanly."}
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {detailedServices.map((group) => (
            <div
              key={group.title}
              className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-md"
            >
              <h3 className="text-xl font-black">{group.title}</h3>

              <div className="mt-5 space-y-3">
                {group.items.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-yellow-500" />
                    <span className="text-sm leading-7 text-neutral-700">
                      {item}
                    </span>
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
                {isEs ? "Por qué elegir THEVULGO" : "Why choose THEVULGO"}
              </h2>

              <p className="mt-5 text-lg leading-8 text-neutral-300">
                {isEs
                  ? "No se trata solo de montar algo rápido. Se trata de cuidar el espacio, usar fijaciones correctas, dejar líneas limpias, revisar el resultado y evitar sorpresas."
                  : "It is not just about doing something quickly. It is about respecting the space, using proper fixings, leaving clean lines, checking the result and avoiding surprises."}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  icon: Hammer,
                  title: isEs ? "Experiencia práctica" : "Practical experience",
                  text: isEs
                    ? "Trabajos reales de montaje, reparación y mantenimiento."
                    : "Real assembly, repair and maintenance work.",
                },
                {
                  icon: Home,
                  title: isEs ? "Trabajos del hogar" : "Home jobs",
                  text: isEs
                    ? "Soluciones para pisos, casas, alquileres y habitaciones."
                    : "Solutions for apartments, houses, rentals and rooms.",
                },
                {
                  icon: Zap,
                  title: isEs ? "Soluciones rápidas" : "Fast solutions",
                  text: isEs
                    ? "Diagnóstico por fotos y visita organizada."
                    : "Diagnosis by photos and organized visit.",
                },
                {
                  icon: Star,
                  title: isEs ? "Acabado profesional" : "Professional finish",
                  text: isEs
                    ? "Nivelado, firme, limpio y visualmente correcto."
                    : "Level, secure, clean and visually correct.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-yellow-400 bg-neutral-900 p-5"
                >
                  <item.icon className="mb-4 h-6 w-6 text-yellow-400" />
                  <h3 className="font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-neutral-300">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {whyChoose.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-neutral-700 bg-neutral-950 p-5"
              >
                <CheckCircle2 className="mb-3 h-5 w-5 text-yellow-400" />
                <p className="text-sm font-semibold leading-6">{item}</p>
              </div>
            ))}
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
            {isEs
              ? "De fotos por WhatsApp a trabajo terminado"
              : "From WhatsApp photos to finished job"}
          </h2>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-5">
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
      </section>
            <section className="border-y border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-white px-4 py-1 text-xs font-bold">
                <Hotel className="h-4 w-4 text-yellow-500" />
                {isEs ? "Airbnb y alquileres" : "Airbnb and rentals"}
              </div>

              <h2 className="mt-4 text-3xl font-black sm:text-4xl">
                {isEs
                  ? "Mantenimiento para Airbnb, alquileres y pisos turísticos"
                  : "Maintenance for Airbnb, rentals and tourist apartments"}
              </h2>

              <p className="mt-5 text-lg leading-8 text-neutral-700">
                {isEs
                  ? "Para apartamentos Airbnb o pisos en alquiler, los pequeños problemas se convierten rápido en malas reseñas: una puerta que no cierra, una lámpara suelta, un enchufe roto, una manilla floja, una balda caída o una pared dañada."
                  : "For Airbnb apartments or rental homes, small issues can quickly become bad reviews: a door that does not close, a loose light, a broken outlet, a loose handle, a fallen shelf or a damaged wall."}
              </p>

              <p className="mt-5 text-lg leading-8 text-neutral-700">
                {isEs
                  ? "THEVULGO puede ayudar con mantenimiento rápido, reparaciones entre huéspedes, montaje de muebles, pequeños arreglos y preparación visual del apartamento antes de una nueva entrada."
                  : "THEVULGO can help with fast maintenance, repairs between guests, furniture assembly, small fixes and visual preparation of the apartment before a new check-in."}
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {(isEs
                ? [
                    "Reparaciones entre huéspedes",
                    "Montaje de muebles nuevos",
                    "Ajuste de puertas y manillas",
                    "Cambio de lámparas o enchufes",
                    "Reparación de pared o pladur",
                    "Silicona y pequeños sellados",
                    "Instalación de accesorios",
                    "Lista de trabajos acumulados",
                  ]
                : [
                    "Repairs between guests",
                    "New furniture assembly",
                    "Door and handle adjustments",
                    "Light or outlet replacement",
                    "Wall or drywall repair",
                    "Silicone and small sealing",
                    "Accessory installation",
                    "List of accumulated small jobs",
                  ]).map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm"
                >
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-yellow-500" />
                  <span className="text-sm leading-7 text-neutral-700">
                    {item}
                  </span>
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
              {isEs
                ? "Para trabajos con pared, fijaciones y montaje"
                : "For wall, fixing and mounting jobs"}
            </h2>

            <p className="mt-4 text-lg leading-8 text-neutral-700">
              {isEs
                ? "Muchos trabajos de manitas dependen de una buena fijación: TV, estanterías, espejos, muebles suspendidos, accesorios de baño, cortinas o cuadros. Antes de perforar, se revisa el tipo de pared y el peso del elemento."
                : "Many handyman jobs depend on good fixing: TVs, shelves, mirrors, wall-mounted furniture, bathroom accessories, curtains or pictures. Before drilling, the wall type and item weight are checked."}
            </p>

            <div className="mt-6 space-y-3">
              {(isEs
                ? [
                    "Pared de ladrillo",
                    "Pared de hormigón",
                    "Pladur revisado",
                    "Anclajes adecuados",
                    "Nivelación antes de perforar",
                  ]
                : [
                    "Brick wall",
                    "Concrete wall",
                    "Checked drywall",
                    "Suitable anchors",
                    "Levelling before drilling",
                  ]).map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-yellow-500" />
                  <span className="text-sm leading-7 text-neutral-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-yellow-300 bg-white p-8 shadow-xl">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-400 text-black shadow-md">
              <Settings className="h-6 w-6" />
            </div>

            <h2 className="mt-5 text-3xl font-black">
              {isEs
                ? "Para varias tareas en una sola visita"
                : "For several tasks in one visit"}
            </h2>

            <p className="mt-4 text-lg leading-8 text-neutral-700">
              {isEs
                ? "Si tienes varias cosas pendientes, es mejor enviarlas todas juntas: una lámpara, una estantería, un mueble, una puerta, una reparación de pared o un accesorio de baño. Así se preparan herramientas y materiales."
                : "If you have several pending jobs, it is better to send them all together: a light, a shelf, furniture, a door, a wall repair or a bathroom accessory. This helps prepare tools and materials."}
            </p>

            <div className="mt-6 space-y-3">
              {(isEs
                ? [
                    "Lista completa de tareas",
                    "Fotos de cada zona",
                    "Medidas aproximadas",
                    "Materiales ya comprados",
                    "Prioridad de cada trabajo",
                  ]
                : [
                    "Full task list",
                    "Photos of each area",
                    "Approximate measurements",
                    "Materials already purchased",
                    "Priority of each job",
                  ]).map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-yellow-500" />
                  <span className="text-sm leading-7 text-neutral-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-white px-4 py-1 text-xs font-bold">
              <MapPin className="h-4 w-4 text-yellow-500" />
              {isEs ? "Zonas principales" : "Main areas"}
            </div>

            <h2 className="mx-auto mt-4 max-w-5xl text-3xl font-black sm:text-4xl">
              {isEs
                ? "Manitas por barrios y zonas de Valencia"
                : "Handyman by Valencia districts and areas"}
            </h2>

            <p className="mx-auto mt-4 max-w-4xl text-neutral-700 leading-8">
              {isEs
                ? "Además de la página principal de manitas en Valencia, también preparamos páginas específicas por zona para mejorar la visibilidad local y facilitar que el cliente encuentre servicio cerca."
                : "In addition to the main handyman Valencia page, we also prepare specific area pages to improve local visibility and help clients find service nearby."}
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {handymanAreaLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex items-center justify-between rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm transition hover:border-yellow-400 hover:shadow-md"
              >
                <span className="text-sm font-black">{item.title}</span>
                <ArrowRight className="h-4 w-4 text-neutral-400 transition group-hover:text-yellow-500" />
              </Link>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
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
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-yellow-50 px-4 py-1 text-xs font-bold">
              <Sparkles className="h-4 w-4" />
              SEO • handyman valencia
            </div>

            <h2 className="mt-4 text-3xl font-black sm:text-4xl">
              {isEs
                ? "Servicio de manitas en Valencia para trabajos reales del hogar"
                : "Handyman service in Valencia for real home jobs"}
            </h2>

            <div className="mt-6 space-y-5 text-lg leading-8 text-neutral-700">
              {isEs ? (
                <>
                  <p>
                    Si buscas <strong>manitas en Valencia</strong>, THEVULGO
                    ofrece ayuda práctica para trabajos pequeños y medianos en
                    viviendas, apartamentos turísticos, oficinas y locales. El
                    servicio está pensado para resolver tareas concretas sin
                    convertir cada trabajo en una reforma grande.
                  </p>

                  <p>
                    Los trabajos más habituales son montaje de TV, montaje de
                    muebles, instalación de estanterías, lámparas, enchufes,
                    accesorios de baño, pequeños arreglos de cocina, ajustes de
                    puertas, reparación de pladur y mantenimiento de pisos en
                    alquiler.
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
                    <strong>handyman in Valencia</strong>, THEVULGO offers
                    practical help for small and medium jobs in homes, tourist
                    apartments, offices and commercial units. The service is
                    designed to solve specific tasks without turning every job
                    into a large renovation.
                  </p>

                  <p>
                    Common jobs include TV mounting, furniture assembly, shelf
                    installation, lights, outlets, bathroom accessories, small
                    kitchen fixes, door adjustments, drywall repair and rental
                    apartment maintenance.
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
              {isEs
                ? "Antes de pedir presupuesto"
                : "Before requesting an estimate"}
            </h3>

            <div className="mt-6 space-y-4">
              {(isEs
                ? [
                    "Envía fotos claras del trabajo",
                    "Indica barrio o zona de Valencia",
                    "Explica si ya tienes materiales",
                    "Manda medidas aproximadas si es montaje",
                    "Di si hay varios trabajos en la misma visita",
                    "Confirma si hay parking, ascensor o acceso difícil",
                  ]
                : [
                    "Send clear photos of the job",
                    "Mention district or area in Valencia",
                    "Explain if you already have materials",
                    "Send approximate measurements if it is mounting",
                    "Say if there are several jobs in the same visit",
                    "Confirm if there is parking, lift or difficult access",
                  ]).map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-yellow-600" />
                  <span className="text-sm font-medium leading-7 text-neutral-800">
                    {item}
                  </span>
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
              <div
                key={faq.q}
                className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm"
              >
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
                {isEs
                  ? "¿Necesitas un manitas en Valencia?"
                  : "Need a handyman in Valencia?"}
              </h2>

              <p className="mt-4 max-w-3xl text-lg font-medium leading-8">
                {isEs
                  ? "Envía fotos por WhatsApp y te diremos qué se puede hacer, cuánto puede costar y cuándo podemos ir. Para varios trabajos, manda una lista completa y organizamos la visita."
                  : "Send photos by WhatsApp and we will tell you what can be done, how much it may cost and when we can come. For several jobs, send a full list and we will organize the visit."}
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
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
        </div>
      </section>
    </main>
  );
}