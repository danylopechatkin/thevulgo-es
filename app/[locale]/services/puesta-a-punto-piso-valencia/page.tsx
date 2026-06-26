import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Brush,
  CalendarCheck,
  CheckCircle2,
  Clock3,
  DoorOpen,
  Drill,
  Euro,
  FileCheck2,
  Hammer,
  Home,
  KeyRound,
  Layers,
  MapPin,
  MessageCircle,
  Paintbrush,
  Plug,
  ShieldCheck,
  Sparkles,
  Star,
  Wrench,
} from "lucide-react";

type Props = {
  params: Promise<{ locale: string }>;
};

const baseUrl = "https://www.thevulgo.es";
const phone = "34610076942";
const slug = "puesta-a-punto-piso-valencia";

const areas = [
  "Valencia",
  "Ruzafa",
  "Russafa",
  "Benimaclet",
  "Campanar",
  "Patraix",
  "El Carmen",
  "Extramurs",
  "Mestalla",
  "Algirós",
  "Malvarrosa",
  "Mislata",
  "Burjassot",
  "Paterna",
  "Torrent",
  "Alboraya",
];

const serviceLinks = [
  {
    href: "handyman-airbnb-valencia",
    es: "Handyman para Airbnb",
    en: "Airbnb handyman",
  },
  {
    href: "fin-contrato-alquiler-valencia",
    es: "Reparaciones fin contrato alquiler",
    en: "End of rental contract repairs",
  },
  {
    href: "devolver-piso-propietario-valencia",
    es: "Preparar piso para devolver al propietario",
    en: "Prepare apartment to return to owner",
  },
  {
    href: "reparaciones-antes-entrega-piso-valencia",
    es: "Reparaciones antes de entregar piso",
    en: "Repairs before handing over apartment",
  },
  {
    href: "retoques-pintura-valencia",
    es: "Retoques de pintura",
    en: "Paint touch-ups",
  },
  {
    href: "reparacion-agujeros-pared-valencia",
    es: "Reparación de agujeros en pared",
    en: "Wall hole repair",
  },
];

const services = [
  {
    titleEs: "Reparaciones pequeñas",
    titleEn: "Small repairs",
    textEs:
      "Solucionamos desperfectos visibles: manillas, bisagras, puertas, cajones, zócalos, accesorios sueltos y detalles del día a día.",
    textEn:
      "We fix visible damage: handles, hinges, doors, drawers, skirting boards, loose fittings and everyday details.",
    icon: Wrench,
  },
  {
    titleEs: "Paredes y agujeros",
    titleEn: "Walls and holes",
    textEs:
      "Tapamos agujeros de tacos, cuadros, estanterías, soportes de TV, cortinas y accesorios retirados.",
    textEn:
      "We fill holes from plugs, pictures, shelves, TV brackets, curtains and removed accessories.",
    icon: Drill,
  },
  {
    titleEs: "Retoques de pintura",
    titleEn: "Paint touch-ups",
    textEs:
      "Mejoramos rozaduras, marcas, golpes pequeños y zonas con pintura dañada para que el piso se vea más limpio.",
    textEn:
      "We improve scratches, marks, small dents and damaged paint areas so the apartment looks cleaner.",
    icon: Paintbrush,
  },
  {
    titleEs: "Montaje de accesorios",
    titleEn: "Fitting installation",
    textEs:
      "Instalamos estantes, espejos, cuadros, barras de cortina, accesorios de baño, percheros y pequeños elementos.",
    textEn:
      "We install shelves, mirrors, pictures, curtain rods, bathroom accessories, hooks and small fittings.",
    icon: Hammer,
  },
  {
    titleEs: "Luces y electricidad básica",
    titleEn: "Lights and basic electrical work",
    textEs:
      "Cambiamos enchufes, interruptores, tapas, lámparas, plafones y pequeños elementos eléctricos visibles.",
    textEn:
      "We replace sockets, switches, covers, lamps, ceiling lights and small visible electrical elements.",
    icon: Plug,
  },
  {
    titleEs: "Revisión general del piso",
    titleEn: "General apartment check",
    textEs:
      "Revisamos puntos visibles para preparar la vivienda antes de alquilar, vender, recibir huéspedes o mudarse.",
    textEn:
      "We check visible points to prepare the property before renting, selling, receiving guests or moving in.",
    icon: FileCheck2,
  },
];

const useCases = [
  {
    es: "Antes de alquilar una vivienda",
    en: "Before renting out a property",
  },
  {
    es: "Antes de recibir nuevos inquilinos",
    en: "Before receiving new tenants",
  },
  {
    es: "Antes de publicar fotos del piso",
    en: "Before publishing apartment photos",
  },
  {
    es: "Antes de vender una vivienda",
    en: "Before selling a property",
  },
  {
    es: "Antes de recibir huéspedes Airbnb",
    en: "Before receiving Airbnb guests",
  },
  {
    es: "Después de una mudanza",
    en: "After a move",
  },
  {
    es: "Después de sacar muebles antiguos",
    en: "After removing old furniture",
  },
  {
    es: "Antes de entregar llaves",
    en: "Before handing over keys",
  },
  {
    es: "Entre un inquilino y otro",
    en: "Between one tenant and another",
  },
  {
    es: "Para mejorar detalles visibles",
    en: "To improve visible details",
  },
  {
    es: "Para evitar mala primera impresión",
    en: "To avoid a bad first impression",
  },
  {
    es: "Para dejar el piso más presentable",
    en: "To make the apartment more presentable",
  },
];

const checklist = [
  {
    es: "Paredes con agujeros o marcas",
    en: "Walls with holes or marks",
  },
  {
    es: "Rozaduras en pasillos y esquinas",
    en: "Scratches in hallways and corners",
  },
  {
    es: "Puertas que rozan o cierran mal",
    en: "Doors that rub or do not close well",
  },
  {
    es: "Manillas, bisagras y tiradores",
    en: "Handles, hinges and pulls",
  },
  {
    es: "Enchufes, tapas e interruptores",
    en: "Sockets, covers and switches",
  },
  {
    es: "Lámparas y plafones",
    en: "Lamps and ceiling lights",
  },
  {
    es: "Accesorios de baño sueltos",
    en: "Loose bathroom accessories",
  },
  {
    es: "Estantes, cuadros y espejos",
    en: "Shelves, pictures and mirrors",
  },
  {
    es: "Cajones y muebles desajustados",
    en: "Misaligned drawers and furniture",
  },
  {
    es: "Zócalos y pequeños remates",
    en: "Skirting boards and small finishing details",
  },
];

const steps = [
  {
    titleEs: "Envías fotos o lista",
    titleEn: "Send photos or a list",
    textEs:
      "Manda fotos del piso y una lista de lo que quieres mejorar o revisar.",
    textEn:
      "Send photos of the apartment and a list of what you want to improve or check.",
  },
  {
    titleEs: "Organizamos prioridades",
    titleEn: "We organize priorities",
    textEs:
      "Separamos lo urgente, lo visible y lo que puede resolverse rápido.",
    textEn:
      "We separate what is urgent, visible and can be solved quickly.",
  },
  {
    titleEs: "Hacemos la puesta a punto",
    titleEn: "We prepare the property",
    textEs:
      "Reparamos, ajustamos, montamos accesorios y mejoramos detalles visibles.",
    textEn:
      "We repair, adjust, install fittings and improve visible details.",
  },
  {
    titleEs: "Piso más presentable",
    titleEn: "More presentable apartment",
    textEs:
      "La vivienda queda mejor preparada para alquiler, venta, huéspedes o entrega.",
    textEn:
      "The property is better prepared for rent, sale, guests or handover.",
  },
];

const faqs = [
  {
    qEs: "¿Qué incluye la puesta a punto de una vivienda?",
    qEn: "What does apartment preparation include?",
    aEs:
      "Puede incluir pequeñas reparaciones, retoques de pintura, tapar agujeros, ajustar puertas, cambiar accesorios, montar elementos y revisar detalles visibles.",
    aEn:
      "It can include small repairs, paint touch-ups, filling holes, adjusting doors, replacing fittings, installing items and checking visible details.",
  },
  {
    qEs: "¿Trabajáis para propietarios, inquilinos y gestores?",
    qEn: "Do you work for owners, tenants and property managers?",
    aEs:
      "Sí. Ayudamos a propietarios, inquilinos, gestores de alquiler, Airbnb y personas que quieren mejorar una vivienda antes de usarla o entregarla.",
    aEn:
      "Yes. We help owners, tenants, rental managers, Airbnb hosts and people who want to improve a property before using or handing it over.",
  },
  {
    qEs: "¿Podéis hacer varias pequeñas tareas en una visita?",
    qEn: "Can you do several small tasks in one visit?",
    aEs:
      "Sí. Lo ideal es enviar una lista con fotos para organizar el trabajo y estimar el tiempo necesario.",
    aEn:
      "Yes. The best option is to send a list with photos so we can organize the work and estimate the time needed.",
  },
  {
    qEs: "¿Hacéis retoques de pintura?",
    qEn: "Do you do paint touch-ups?",
    aEs:
      "Sí. Hacemos retoques pequeños. Para igualar color, lo ideal es tener la pintura original o una muestra.",
    aEn:
      "Yes. We do small touch-ups. To match the color, it is ideal to have the original paint or a sample.",
  },
  {
    qEs: "¿Cuánto cuesta una puesta a punto de piso en Valencia?",
    qEn: "How much does apartment preparation cost in Valencia?",
    aEs:
      "Depende de la lista de trabajos, materiales, estado del piso y urgencia. Los trabajos pequeños pueden empezar desde 35 €.",
    aEn:
      "It depends on the task list, materials, apartment condition and urgency. Small jobs can start from €35.",
  },
  {
    qEs: "¿Podéis venir rápido?",
    qEn: "Can you come quickly?",
    aEs:
      "Depende de la disponibilidad y la zona. Envíanos fotos por WhatsApp y te diremos la opción más rápida.",
    aEn:
      "It depends on availability and area. Send photos by WhatsApp and we will tell you the fastest option.",
  },
];

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";

  const title = isEs
    ? "Puesta a punto de viviendas en Valencia | Reparaciones rápidas"
    : "Apartment Preparation in Valencia | Fast Repairs";

  const description = isEs
    ? "Puesta a punto de viviendas en Valencia. Reparaciones pequeñas, retoques de pintura, tapar agujeros, accesorios, luces, puertas y revisión antes de alquilar, vender o entregar."
    : "Apartment preparation in Valencia. Small repairs, paint touch-ups, hole filling, fittings, lights, doors and checks before renting, selling or handover.";

  return {
    title,
    description,
    alternates: {
      canonical: `${baseUrl}/${locale}/${slug}`,
      languages: {
        es: `${baseUrl}/es/${slug}`,
        en: `${baseUrl}/en/${slug}`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${baseUrl}/${locale}/${slug}`,
      type: "website",
    },
  };
}

export default async function PuestaAPuntoPisoValenciaPage({ params }: Props) {
  const { locale } = await params;
  const isEs = locale === "es";

  const t = {
    badge: isEs ? "Puesta a punto de viviendas" : "Apartment preparation",
    h1: isEs
      ? "Puesta a punto de viviendas en Valencia"
      : "Apartment preparation in Valencia",
    heroText: isEs
      ? "Preparamos pisos y viviendas con reparaciones pequeñas, retoques de pintura, montaje de accesorios, revisión visual y arreglos rápidos antes de alquilar, vender, recibir huéspedes o entregar llaves."
      : "We prepare apartments and homes with small repairs, paint touch-ups, fitting installation, visual checks and quick fixes before renting, selling, receiving guests or handing over keys.",
    whatsapp: isEs ? "Pedir presupuesto por WhatsApp" : "Request estimate by WhatsApp",
    form: isEs ? "Abrir formulario" : "Open form",
    from: isEs ? "Desde 35 €" : "From €35",
    smallJobs: isEs ? "Trabajos pequeños" : "Small jobs",
    cityText: isEs ? "Valencia y alrededores" : "Valencia and nearby areas",
    photosFirst: isEs ? "Fotos primero" : "Photos first",
    clearPrice: isEs ? "Precio claro antes de ir" : "Clear price before visit",
    cardEyebrow: isEs ? "Vivienda lista" : "Property ready",
    cardTitle: isEs ? "Más presentable y cuidada" : "More presentable and cared for",
    cardNote: isEs
      ? "Ideal para propietarios, inquilinos, gestores, Airbnb, pisos de alquiler, viviendas en venta y mudanzas."
      : "Ideal for owners, tenants, managers, Airbnb, rental apartments, properties for sale and moves.",
    serviceEyebrow: isEs ? "Servicio" : "Service",
    serviceTitle: isEs
      ? "Todo lo pequeño que mejora una vivienda"
      : "All the small things that improve a home",
    serviceText: isEs
      ? "Una puesta a punto no siempre es una reforma. Muchas veces son pequeños detalles visibles que hacen que el piso se vea más limpio, cuidado y preparado."
      : "Apartment preparation is not always a renovation. Often it is small visible details that make the property look cleaner, better cared for and ready.",
    useCasesEyebrow: isEs ? "Cuándo conviene" : "When it helps",
    useCasesTitle: isEs
      ? "Puesta a punto antes de alquilar, vender o entregar"
      : "Preparation before renting, selling or handover",
    useCasesText: isEs
      ? "Este servicio encaja cuando necesitas mejorar la vivienda rápido, sin hacer una reforma grande."
      : "This service is useful when you need to improve the property quickly without a large renovation.",
    processEyebrow: isEs ? "Proceso" : "Process",
    processTitle: isEs
      ? "Cómo hacemos la puesta a punto"
      : "How we prepare the property",
    linksEyebrow: isEs ? "Servicios relacionados" : "Related services",
    linksTitle: isEs ? "Perelinkovka SEO" : "SEO internal linking",
    linksText: isEs
      ? "Conectamos esta página con servicios cercanos para cubrir búsquedas de alquiler, entrega de piso, Airbnb, paredes, pintura y agujeros."
      : "This page connects with related services covering rentals, apartment handover, Airbnb, walls, painting and holes.",
    zonesEyebrow: isEs ? "Zonas" : "Areas",
    zonesTitle: isEs
      ? "Puesta a punto de pisos en Valencia y alrededores"
      : "Apartment preparation in Valencia and nearby areas",
    zonesText: isEs
      ? "Trabajamos en Valencia ciudad y zonas cercanas. Para confirmar disponibilidad, envíanos ubicación aproximada y fotos del trabajo."
      : "We work in Valencia city and nearby areas. To confirm availability, send us the approximate location and photos of the job.",
    faqTitle: isEs ? "Preguntas frecuentes" : "Frequently asked questions",
    ctaTitle: isEs
      ? "¿Necesitas poner a punto una vivienda?"
      : "Do you need to prepare a property?",
    ctaText: isEs
      ? "Envíanos fotos o una lista de tareas. Te damos una estimación rápida para reparar, ajustar y mejorar los detalles visibles del piso."
      : "Send us photos or a task list. We will give you a quick estimate to repair, adjust and improve visible details in the apartment.",
  };

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, necesito una puesta a punto de una vivienda en Valencia. Quiero enviar fotos para presupuesto."
      : "Hi, I need apartment preparation in Valencia. I’d like to send photos for an estimate."
  );

  const whatsappHref = `https://wa.me/${phone}?text=${whatsappText}`;
  const estimateHref = `/${locale}/estimate?category=repairs`;

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: isEs
      ? "Puesta a punto de viviendas en Valencia"
      : "Apartment preparation in Valencia",
    serviceType: "Apartment preparation and small repairs",
    areaServed: areas.map((area) => ({
      "@type": "City",
      name: area,
    })),
    provider: {
      "@type": "LocalBusiness",
      name: "THEVULGO",
      url: baseUrl,
      telephone: `+${phone}`,
      areaServed: "Valencia",
    },
    description: isEs
      ? "Puesta a punto de viviendas en Valencia: reparaciones pequeñas, retoques de pintura, tapar agujeros, accesorios, luces, puertas y revisión antes de alquilar, vender o entregar."
      : "Apartment preparation in Valencia: small repairs, paint touch-ups, hole filling, fittings, lights, doors and checks before renting, selling or handover.",
    offers: {
      "@type": "Offer",
      priceCurrency: "EUR",
      price: "35",
      availability: "https://schema.org/InStock",
    },
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: isEs ? faq.qEs : faq.qEn,
      acceptedAnswer: {
        "@type": "Answer",
        text: isEs ? faq.aEs : faq.aEn,
      },
    })),
  };

  const breadcrumbLd = {
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
        name: isEs ? "Puesta a punto de viviendas" : "Apartment preparation",
        item: `${baseUrl}/${locale}/${slug}`,
      },
    ],
  };

  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(245,158,11,0.24),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.16),transparent_36%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:py-28">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-2 text-sm text-amber-200">
              <Sparkles className="h-4 w-4" />
              {t.badge}
            </div>

            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {t.h1}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-300">
              {t.heroText}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href={whatsappHref}
                className="inline-flex items-center justify-center rounded-2xl bg-amber-400 px-6 py-4 font-semibold text-neutral-950 transition hover:bg-amber-300"
              >
                {t.whatsapp}
                <MessageCircle className="ml-2 h-5 w-5" />
              </Link>

              <Link
                href={estimateHref}
                className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-6 py-4 font-semibold text-white transition hover:bg-white/10"
              >
                {t.form}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                [t.from, t.smallJobs],
                ["Valencia", t.cityText],
                [t.photosFirst, t.clearPrice],
              ].map(([title, text]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-5"
                >
                  <div className="text-xl font-semibold text-white">
                    {title}
                  </div>
                  <div className="mt-1 text-sm text-neutral-400">{text}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl">
            <div className="rounded-[1.5rem] bg-neutral-900 p-6">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-amber-400 p-3 text-neutral-950">
                  <Home className="h-7 w-7" />
                </div>
                <div>
                  <p className="text-sm text-neutral-400">{t.cardEyebrow}</p>
                  <h2 className="text-2xl font-semibold">{t.cardTitle}</h2>
                </div>
              </div>

              <div className="mt-8 space-y-4">
                {(isEs
                  ? [
                      "Reparaciones pequeñas en una visita",
                      "Paredes, agujeros y retoques de pintura",
                      "Accesorios, luces, puertas y detalles",
                      "Preparación antes de alquilar o vender",
                      "Precio claro con fotos antes de ir",
                    ]
                  : [
                      "Small repairs in one visit",
                      "Walls, holes and paint touch-ups",
                      "Fittings, lights, doors and details",
                      "Preparation before renting or selling",
                      "Clear price with photos before visit",
                    ]
                ).map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                  >
                    <CheckCircle2 className="h-5 w-5 text-amber-300" />
                    <span className="text-neutral-200">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl bg-amber-400/10 p-5 text-amber-100">
                {t.cardNote}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-5 md:grid-cols-4">
          {[
            {
              icon: Clock3,
              title: isEs ? "Rápido" : "Fast",
              text: isEs
                ? "Para preparar una vivienda sin esperar una reforma grande."
                : "To prepare a property without waiting for a large renovation.",
            },
            {
              icon: ShieldCheck,
              title: isEs ? "Limpio" : "Clean",
              text: isEs
                ? "Trabajos cuidados en zonas visibles del piso."
                : "Careful work in visible areas of the apartment.",
            },
            {
              icon: Euro,
              title: isEs ? "Claro" : "Clear",
              text: isEs
                ? "Estimación con fotos antes de desplazarnos."
                : "Estimate with photos before we visit.",
            },
            {
              icon: BadgeCheck,
              title: isEs ? "Práctico" : "Practical",
              text: isEs
                ? "Varias tareas pequeñas organizadas en una visita."
                : "Several small tasks organized in one visit.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"
            >
              <item.icon className="h-7 w-7 text-amber-300" />
              <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-neutral-400">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
              {t.serviceEyebrow}
            </p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              {t.serviceTitle}
            </h2>
            <p className="mt-4 text-neutral-300">{t.serviceText}</p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={isEs ? service.titleEs : service.titleEn}
                className="rounded-3xl border border-white/10 bg-neutral-950 p-6"
              >
                <div className="mb-5 inline-flex rounded-2xl bg-amber-400/10 p-3 text-amber-300">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold">
                  {isEs ? service.titleEs : service.titleEn}
                </h3>
                <p className="mt-3 text-sm leading-6 text-neutral-400">
                  {isEs ? service.textEs : service.textEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
            {t.useCasesEyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
            {t.useCasesTitle}
          </h2>
          <p className="mt-4 text-neutral-300">{t.useCasesText}</p>

          <Link
            href={whatsappHref}
            className="mt-7 inline-flex items-center rounded-2xl bg-white px-6 py-4 font-semibold text-neutral-950 transition hover:bg-neutral-200"
          >
            {isEs ? "Enviar fotos ahora" : "Send photos now"}
            <MessageCircle className="ml-2 h-5 w-5" />
          </Link>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {useCases.map((item) => (
            <div
              key={isEs ? item.es : item.en}
              className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4"
            >
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-amber-300" />
              <span className="text-neutral-300">
                {isEs ? item.es : item.en}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-neutral-900/70">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
                {isEs ? "Checklist" : "Checklist"}
              </p>
              <h2 className="mt-3 text-3xl font-semibold">
                {isEs
                  ? "Qué revisar en una puesta a punto"
                  : "What to check during apartment preparation"}
              </h2>
              <p className="mt-4 text-neutral-300">
                {isEs
                  ? "Esta lista ayuda a organizar el trabajo antes de alquilar, vender, recibir huéspedes o entregar la vivienda."
                  : "This list helps organize the work before renting, selling, receiving guests or handing over the property."}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:col-span-2">
              {checklist.map((item) => (
                <div
                  key={isEs ? item.es : item.en}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                >
                  <div className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-amber-300" />
                    <p className="text-sm leading-6 text-neutral-300">
                      {isEs ? item.es : item.en}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8">
            <div className="mb-5 inline-flex rounded-2xl bg-amber-400/10 p-3 text-amber-300">
              <Home className="h-7 w-7" />
            </div>
            <h2 className="text-3xl font-semibold">
              {isEs
                ? "Para propietarios y gestores"
                : "For owners and property managers"}
            </h2>
            <p className="mt-4 text-neutral-300">
              {isEs
                ? "Si tienes un piso para alquilar, vender o preparar entre inquilinos, podemos resolver tareas pequeñas que mejoran la primera impresión de la vivienda."
                : "If you have an apartment to rent, sell or prepare between tenants, we can handle small tasks that improve the first impression of the property."}
            </p>
          </div>

          <div className="rounded-3xl border border-amber-400/20 bg-amber-400/10 p-8">
            <div className="mb-5 inline-flex rounded-2xl bg-amber-400 p-3 text-neutral-950">
              <DoorOpen className="h-7 w-7" />
            </div>
            <h2 className="text-3xl font-semibold">
              {isEs
                ? "Para inquilinos y mudanzas"
                : "For tenants and moves"}
            </h2>
            <p className="mt-4 text-amber-100">
              {isEs
                ? "También ayudamos cuando vas a entrar, salir o devolver un piso: agujeros, paredes, accesorios, luces y pequeños detalles que conviene dejar listos."
                : "We also help when you are moving in, moving out or returning an apartment: holes, walls, fittings, lights and small details that should be ready."}
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
                {t.linksEyebrow}
              </p>
              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
                {t.linksTitle}
              </h2>
              <p className="mt-4 text-neutral-300">{t.linksText}</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {serviceLinks.map((link) => (
                <Link
                  key={link.href}
                  href={`/${locale}/${link.href}`}
                  className="group rounded-3xl border border-white/10 bg-neutral-950 p-6 transition hover:border-amber-400/40 hover:bg-white/[0.04]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-lg font-semibold text-white">
                        {isEs ? link.es : link.en}
                      </p>
                      <p className="mt-2 text-sm text-neutral-400">
                        {isEs
                          ? "Ver servicio relacionado"
                          : "View related service"}
                      </p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-amber-300 transition group-hover:translate-x-1" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
                {isEs ? "Paredes y pintura" : "Walls and paint"}
              </p>
              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
                {isEs
                  ? "Detalles que hacen que el piso se vea más cuidado"
                  : "Details that make the apartment look better cared for"}
              </h2>
              <p className="mt-4 text-neutral-300">
                {isEs
                  ? "Una pared con agujeros, marcas de muebles o pintura dañada puede cambiar mucho la percepción de una vivienda. Podemos mejorar esos puntos visibles sin hacer una reforma completa."
                  : "A wall with holes, furniture marks or damaged paint can strongly affect how a property is perceived. We can improve those visible points without doing a full renovation."}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {(isEs
                ? [
                    "Agujeros de tacos",
                    "Marcas de muebles",
                    "Rozaduras de mudanza",
                    "Pequeños golpes",
                    "Pintura saltada",
                    "Remates visibles",
                  ]
                : [
                    "Wall plug holes",
                    "Furniture marks",
                    "Moving scratches",
                    "Small dents",
                    "Chipped paint",
                    "Visible finishing details",
                  ]
              ).map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-neutral-950 p-4"
                >
                  <Brush className="h-5 w-5 text-amber-300" />
                  <span className="text-sm text-neutral-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-neutral-900/70">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
              {t.processEyebrow}
            </p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              {t.processTitle}
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-4">
            {steps.map((step, index) => (
              <div
                key={isEs ? step.titleEs : step.titleEn}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"
              >
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-amber-400 font-bold text-neutral-950">
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold">
                  {isEs ? step.titleEs : step.titleEn}
                </h3>
                <p className="mt-3 text-sm leading-6 text-neutral-400">
                  {isEs ? step.textEs : step.textEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
            {t.zonesEyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
            {t.zonesTitle}
          </h2>
          <p className="mt-4 text-neutral-300">{t.zonesText}</p>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {areas.map((area) => (
            <span
              key={area}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-neutral-300"
            >
              <MapPin className="h-4 w-4 text-amber-300" />
              {area}
            </span>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
                FAQ
              </p>
              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
                {t.faqTitle}
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq) => (
                <div
                  key={isEs ? faq.qEs : faq.qEn}
                  className="rounded-3xl border border-white/10 bg-neutral-950 p-6"
                >
                  <h3 className="text-lg font-semibold">
                    {isEs ? faq.qEs : faq.qEn}
                  </h3>
                  <p className="mt-3 text-neutral-400">
                    {isEs ? faq.aEs : faq.aEn}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              icon: Hammer,
              title: isEs ? "Sin reforma grande" : "No big renovation",
              text: isEs
                ? "Solucionamos tareas pequeñas que mejoran mucho la vivienda."
                : "We solve small tasks that greatly improve the property.",
            },
            {
              icon: Layers,
              title: isEs ? "Materiales básicos" : "Basic materials",
              text: isEs
                ? "Masilla, lija, herramientas y pequeños consumibles según el trabajo."
                : "Filler, sandpaper, tools and small consumables depending on the job.",
            },
            {
              icon: CalendarCheck,
              title: isEs ? "Según tu fecha" : "Around your date",
              text: isEs
                ? "Organizamos la visita según alquiler, entrega, venta o llegada de huéspedes."
                : "We organize the visit around rental, handover, sale or guest arrival.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"
            >
              <item.icon className="h-7 w-7 text-amber-300" />
              <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-neutral-400">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-amber-400 p-8 text-neutral-950 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="text-3xl font-semibold sm:text-4xl">
                {t.ctaTitle}
              </h2>
              <p className="mt-4 max-w-2xl text-neutral-800">{t.ctaText}</p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link
                href={whatsappHref}
                className="inline-flex items-center justify-center rounded-2xl bg-neutral-950 px-6 py-4 font-semibold text-white transition hover:bg-neutral-800"
              >
                WhatsApp
                <MessageCircle className="ml-2 h-5 w-5" />
              </Link>

              <Link
                href={estimateHref}
                className="inline-flex items-center justify-center rounded-2xl border border-neutral-950/20 bg-white/40 px-6 py-4 font-semibold text-neutral-950 transition hover:bg-white/60"
              >
                {t.form}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

