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
    ? "Manitas en Valencia | Reparaciones, Montaje y Mantenimiento | THEVULGO"
    : "Handyman in Valencia | Repairs, Installations & Home Maintenance | THEVULGO";

  const description = isEs
    ? "Manitas profesional en Valencia para montaje de TV, muebles IKEA, estanterías, lámparas, enchufes, pladur, pequeñas reparaciones, cocina, baño y mantenimiento de Airbnb."
    : "Professional handyman in Valencia for TV mounting, IKEA furniture assembly, shelves, lights, outlets, drywall, small repairs, kitchen, bathroom and Airbnb maintenance.";

  return {
    title,
    description,
    keywords: isEs
      ? [
          "manitas valencia",
          "servicio manitas valencia",
          "manitas a domicilio valencia",
          "reparaciones hogar valencia",
          "montaje muebles valencia",
          "montaje tv valencia",
          "electricidad basica valencia",
          "pladur valencia",
          "airbnb mantenimiento valencia",
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
        ],
    robots: {
      index: true,
      follow: true,
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

  const estimateHref = `/${locale}/estimate?category=handyman`;

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, necesito un manitas en Valencia. Quiero pedir presupuesto para una reparación o instalación."
      : "Hi, I need a handyman in Valencia. I’d like to request an estimate for a repair or installation."
  );

  const whatsappHref = `https://wa.me/${phone}?text=${whatsappText}`;

  const moneyLinks = [
    {
      title: isEs ? "Montaje de TV" : "TV mounting",
      desc: isEs ? "TV en pared, soportes, soundbar y cables limpios." : "Wall-mounted TVs, brackets, soundbars and clean cables.",
      href: `/${locale}/montaje-tv-valencia`,
    },
    {
      title: isEs ? "Montaje de muebles IKEA" : "IKEA furniture assembly",
      desc: isEs ? "Camas, armarios, cómodas, mesas y muebles auxiliares." : "Beds, wardrobes, drawers, tables and storage furniture.",
      href: `/${locale}/montaje-muebles-ikea-valencia`,
    },
    {
      title: isEs ? "Cambio de enchufe" : "Outlet replacement",
      desc: isEs ? "Sustitución de enchufes y pequeños trabajos eléctricos." : "Outlet replacement and small electrical jobs.",
      href: `/${locale}/cambio-enchufe-valencia`,
    },
    {
      title: isEs ? "Instalación de lámparas" : "Light installation",
      desc: isEs ? "Lámparas de techo, apliques y luminarias básicas." : "Ceiling lights, wall lights and basic fixtures.",
      href: `/${locale}/instalacion-lampara-valencia`,
    },
    {
      title: isEs ? "Instalación de estanterías" : "Shelf installation",
      desc: isEs ? "Estantes nivelados, fijación segura y acabado limpio." : "Level shelves, secure fixing and clean finish.",
      href: `/${locale}/montaje-estanterias-valencia`,
    },
    {
      title: isEs ? "Reparaciones de pladur" : "Drywall repairs",
      desc: isEs ? "Agujeros, anclajes, parches, lijado y preparación." : "Holes, anchors, patches, sanding and preparation.",
      href: `/${locale}/services/drywall`,
    },
  ];

  const prices = isEs
    ? [
        ["Montaje de TV", "desde 49 €"],
        ["Montaje de muebles", "desde 45 €"],
        ["Cambio de enchufe / interruptor", "desde 35 €"],
        ["Instalación de lámpara", "desde 39 €"],
        ["Pequeñas reparaciones", "desde 35 €"],
        ["Visita / revisión", "desde 49 €"],
      ]
    : [
        ["TV mounting", "from €49"],
        ["Furniture assembly", "from €45"],
        ["Outlet / switch replacement", "from €35"],
        ["Light installation", "from €39"],
        ["Small repairs", "from €35"],
        ["Visit / inspection", "from €49"],
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
          addressCountry: "ES",
        },
      },
      {
        "@type": "Service",
        "@id": `${baseUrl}/${locale}/handyman-valencia#service`,
        name: isEs ? "Manitas en Valencia" : "Handyman in Valencia",
        serviceType: isEs ? "Servicio de manitas" : "Handyman services",
        provider: {
          "@id": `${baseUrl}/#localbusiness`,
        },
        areaServed: areas,
        url: `${baseUrl}/${locale}/handyman-valencia`,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: isEs ? "Servicios de manitas en Valencia" : "Handyman services in Valencia",
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
            name: isEs ? "Manitas Valencia" : "Handyman Valencia",
            item: `${baseUrl}/${locale}/handyman-valencia`,
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
                ? "Manitas profesional en Valencia para reparaciones, montaje e instalaciones limpias"
                : "Professional handyman in Valencia for clean repairs, assembly and installations"}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-700">
              {isEs
                ? "THEVULGO ayuda con trabajos reales del día a día: montar una TV, instalar estanterías, montar muebles IKEA, cambiar un enchufe, colgar una lámpara, reparar pladur o preparar un apartamento Airbnb. Trabajo limpio, respuesta rápida y presupuesto claro por WhatsApp."
                : "THEVULGO helps with real everyday jobs: mounting a TV, installing shelves, assembling IKEA furniture, replacing an outlet, hanging a light, repairing drywall or preparing an Airbnb apartment. Clean work, fast response and clear estimate by WhatsApp."}
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
                  text: isEs ? "Envía fotos y recibe una estimación clara." : "Send photos and get a clear estimate.",
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
        <h2 className="text-3xl font-black">
          {isEs ? "Servicios principales" : "Main services"}
        </h2>
        <p className="mt-4 max-w-3xl text-neutral-700">
          {isEs
            ? "Estas páginas internas ayudan a Google a entender la estructura del sitio y también ayudan al cliente a encontrar exactamente el servicio que necesita."
            : "These internal pages help Google understand the site structure and help the client find the exact service they need."}
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
          <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr]">
            <div>
              <h2 className="text-3xl font-black">
                {isEs ? "¿Qué tipo de trabajos hacemos?" : "What kind of jobs do we do?"}
              </h2>
              <p className="mt-5 text-lg leading-8 text-neutral-700">
                {isEs
                  ? "Un servicio de manitas no es una reforma completa. Es la solución para esos trabajos pequeños y medianos que necesitas terminar bien: montar, fijar, ajustar, cambiar, reparar y dejar todo funcionando correctamente."
                  : "A handyman service is not a full renovation. It is the solution for small and medium jobs that need to be finished properly: assembling, fixing, adjusting, replacing, repairing and leaving everything working correctly."}
              </p>
              <p className="mt-5 text-lg leading-8 text-neutral-700">
                {isEs
                  ? "Trabajamos con viviendas, habitaciones, apartamentos turísticos, oficinas, bares, locales y pequeños negocios en Valencia. Antes de empezar, revisamos el trabajo, confirmamos materiales y explicamos la solución."
                  : "We work with homes, rooms, tourist apartments, offices, bars, commercial spaces and small businesses in Valencia. Before starting, we check the job, confirm materials and explain the solution."}
              </p>
            </div>

            <div className="rounded-3xl border border-yellow-300 bg-white p-6 shadow-xl">
              <h3 className="flex items-center gap-2 text-xl font-black">
                <Euro className="h-6 w-6 text-yellow-500" />
                {isEs ? "Precios orientativos" : "Guide prices"}
              </h3>

              <div className="mt-5 space-y-3">
                {prices.map(([name, price]) => (
                  <div key={name} className="flex items-center justify-between rounded-xl bg-yellow-50 p-4">
                    <span className="font-semibold">{name}</span>
                    <span className="font-black">{price}</span>
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
        <h2 className="text-3xl font-black">
          {isEs ? "Cómo funciona" : "How it works"}
        </h2>

        <div className="mt-10 grid gap-5 md:grid-cols-5">
          {[
            [isEs ? "1. Envía fotos" : "1. Send photos", isEs ? "Muestra el trabajo por WhatsApp." : "Show the job by WhatsApp."],
            [isEs ? "2. Recibe estimación" : "2. Get estimate", isEs ? "Precio claro antes de empezar." : "Clear price before starting."],
            [isEs ? "3. Confirmamos horario" : "3. Confirm time", isEs ? "Elegimos día y hora." : "We choose day and time."],
            [isEs ? "4. Trabajo limpio" : "4. Clean work", isEs ? "Instalación o reparación ordenada." : "Neat installation or repair."],
            [isEs ? "5. Revisión final" : "5. Final check", isEs ? "Comprobamos que todo queda bien." : "We check everything is correct."],
          ].map(([title, text]) => (
            <div key={title} className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-md">
              <h3 className="font-black">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-neutral-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-black text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-black">
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
            <span key={area} className="rounded-full border border-yellow-300 bg-yellow-50 px-4 py-2 text-sm font-semibold">
              {area}
            </span>
          ))}
        </div>
      </section>

      <section className="border-y border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <h2 className="text-3xl font-black">
            {isEs ? "Preguntas frecuentes" : "Frequently asked questions"}
          </h2>

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
          <h2 className="text-3xl font-black">
            {isEs ? "¿Necesitas un manitas en Valencia?" : "Need a handyman in Valencia?"}
          </h2>
          <p className="mt-4 max-w-3xl text-lg font-medium">
            {isEs
              ? "Envía fotos por WhatsApp y te diremos qué se puede hacer, cuánto puede costar y cuándo podemos ir."
              : "Send photos by WhatsApp and we will tell you what can be done, how much it may cost and when we can come."}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
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
      </section>
    </main>
  );
}