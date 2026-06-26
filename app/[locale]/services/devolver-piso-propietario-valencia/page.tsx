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
const slug = "devolver-piso-propietario-valencia";

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
    href: "fin-contrato-alquiler-valencia",
    es: "Reparaciones fin contrato alquiler",
    en: "End of rental contract repairs",
  },
  {
    href: "reparaciones-antes-entrega-piso-valencia",
    es: "Reparaciones antes de entregar piso",
    en: "Repairs before handing over apartment",
  },
  {
    href: "reparacion-paredes-valencia",
    es: "Reparación de paredes",
    en: "Wall repair",
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
  {
    href: "handyman-airbnb-valencia",
    es: "Handyman para Airbnb",
    en: "Airbnb handyman",
  },
];

const services = [
  {
    titleEs: "Tapar agujeros en paredes",
    titleEn: "Wall hole filling",
    textEs:
      "Tapamos agujeros de cuadros, tacos, estanterías, cortinas, soportes de TV y accesorios retirados antes de devolver el piso al propietario.",
    textEn:
      "We fill holes from pictures, wall plugs, shelves, curtains, TV brackets and removed accessories before returning the apartment to the owner.",
    icon: Drill,
  },
  {
    titleEs: "Retoques de pintura",
    titleEn: "Paint touch-ups",
    textEs:
      "Mejoramos marcas, rozaduras, manchas pequeñas y zonas dañadas para que la vivienda se vea más limpia en la revisión final.",
    textEn:
      "We improve marks, scratches, small stains and damaged areas so the property looks cleaner during the final inspection.",
    icon: Paintbrush,
  },
  {
    titleEs: "Pequeñas reparaciones",
    titleEn: "Small repairs",
    textEs:
      "Ajustamos manillas, bisagras, puertas, cajones, muebles, zócalos, accesorios de baño y detalles visibles.",
    textEn:
      "We adjust handles, hinges, doors, drawers, furniture, skirting boards, bathroom accessories and visible details.",
    icon: Wrench,
  },
  {
    titleEs: "Revisión antes de entregar llaves",
    titleEn: "Pre-handover check",
    textEs:
      "Revisamos los puntos más visibles para preparar el piso antes de entregar las llaves al propietario o agencia.",
    textEn:
      "We check the most visible points to prepare the apartment before handing the keys to the owner or agency.",
    icon: FileCheck2,
  },
  {
    titleEs: "Luces, enchufes y accesorios",
    titleEn: "Lights, sockets and fittings",
    textEs:
      "Cambiamos tapas, enchufes, interruptores, lámparas pequeñas, plafones y accesorios que pueden verse mal en la revisión.",
    textEn:
      "We replace covers, sockets, switches, small lamps, ceiling lights and fittings that may look bad during inspection.",
    icon: Plug,
  },
  {
    titleEs: "Preparación rápida del piso",
    titleEn: "Fast apartment preparation",
    textEs:
      "Servicio práctico para inquilinos que quieren devolver la vivienda en buen estado y evitar problemas por detalles pequeños.",
    textEn:
      "A practical service for tenants who want to return the property in good condition and avoid issues over small details.",
    icon: KeyRound,
  },
];

const issues = [
  {
    es: "Agujeros de tacos, cuadros o estanterías",
    en: "Holes from plugs, pictures or shelves",
  },
  {
    es: "Marcas negras detrás de muebles",
    en: "Black marks behind furniture",
  },
  {
    es: "Rozaduras en pasillos y esquinas",
    en: "Scratches in hallways and corners",
  },
  {
    es: "Golpes pequeños en paredes",
    en: "Small dents on walls",
  },
  {
    es: "Manillas flojas o puertas que rozan",
    en: "Loose handles or rubbing doors",
  },
  {
    es: "Accesorios de baño sueltos",
    en: "Loose bathroom accessories",
  },
  {
    es: "Tacos antiguos visibles",
    en: "Visible old wall plugs",
  },
  {
    es: "Enchufes o tapas dañadas",
    en: "Damaged sockets or covers",
  },
  {
    es: "Cajones y bisagras desajustadas",
    en: "Misaligned drawers and hinges",
  },
  {
    es: "Zócalos despegados o remates visibles",
    en: "Loose skirting boards or visible finishing issues",
  },
  {
    es: "Marcas por mudanza",
    en: "Moving marks",
  },
  {
    es: "Detalles que pueden afectar la fianza",
    en: "Details that may affect the deposit",
  },
];

const steps = [
  {
    titleEs: "Envías fotos",
    titleEn: "Send photos",
    textEs:
      "Manda fotos de paredes, agujeros, accesorios, puertas y desperfectos visibles.",
    textEn:
      "Send photos of walls, holes, fittings, doors and visible damage.",
  },
  {
    titleEs: "Calculamos el trabajo",
    titleEn: "We estimate the job",
    textEs:
      "Te damos precio orientativo, materiales necesarios y disponibilidad.",
    textEn:
      "We give you an estimated price, required materials and availability.",
  },
  {
    titleEs: "Reparamos el piso",
    titleEn: "We repair the apartment",
    textEs:
      "Hacemos los arreglos pequeños con cuidado para mejorar la presentación.",
    textEn:
      "We carry out small repairs carefully to improve the presentation.",
  },
  {
    titleEs: "Listo para devolver",
    titleEn: "Ready to return",
    textEs:
      "Dejas el piso mejor preparado antes de entregar las llaves al propietario.",
    textEn:
      "You leave the apartment better prepared before handing the keys to the owner.",
  },
];

const faqs = [
  {
    qEs: "¿Preparáis pisos para devolver al propietario en Valencia?",
    qEn: "Do you prepare apartments to return to the owner in Valencia?",
    aEs:
      "Sí. Ayudamos con agujeros, retoques de pintura, pequeñas reparaciones, accesorios sueltos y detalles visibles antes de entregar las llaves.",
    aEn:
      "Yes. We help with holes, paint touch-ups, small repairs, loose fittings and visible details before handing over the keys.",
  },
  {
    qEs: "¿Podéis ayudarme a recuperar la fianza?",
    qEn: "Can you help me recover my deposit?",
    aEs:
      "No podemos garantizar la devolución de la fianza, pero sí podemos mejorar los desperfectos visibles que suelen generar problemas en la revisión.",
    aEn:
      "We cannot guarantee the deposit return, but we can improve visible damage that often causes issues during inspection.",
  },
  {
    qEs: "¿Tapáis agujeros de soporte de TV o estanterías?",
    qEn: "Do you fill holes from TV brackets or shelves?",
    aEs:
      "Sí. Podemos retirar tacos, rellenar agujeros, lijar y preparar la zona para que quede más discreta.",
    aEn:
      "Yes. We can remove plugs, fill holes, sand and prepare the area so it looks more discreet.",
  },
  {
    qEs: "¿Hacéis retoques de pintura pequeños?",
    qEn: "Do you do small paint touch-ups?",
    aEs:
      "Sí. Para igualar mejor el color, lo ideal es tener la pintura original o una muestra. Si no, podemos valorar la mejor solución.",
    aEn:
      "Yes. To match the color better, it is ideal to have the original paint or a sample. Otherwise, we can assess the best solution.",
  },
  {
    qEs: "¿Cuánto cuesta preparar un piso para devolverlo?",
    qEn: "How much does it cost to prepare an apartment for return?",
    aEs:
      "Depende de la cantidad de trabajos, materiales, estado del piso y urgencia. Los trabajos pequeños pueden empezar desde 35 €.",
    aEn:
      "It depends on the number of tasks, materials, apartment condition and urgency. Small jobs can start from €35.",
  },
  {
    qEs: "¿Podéis venir rápido si entrego las llaves pronto?",
    qEn: "Can you come quickly if I need to return the keys soon?",
    aEs:
      "Depende de la disponibilidad. Envíanos fotos por WhatsApp y te diremos la opción más rápida.",
    aEn:
      "It depends on availability. Send us photos by WhatsApp and we will tell you the fastest option.",
  },
];

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";

  const title = isEs
    ? "Preparación del piso para devolver al propietario en Valencia"
    : "Apartment Preparation to Return to Owner in Valencia";

  const description = isEs
    ? "Preparación del piso para devolver al propietario en Valencia. Tapar agujeros, retoques de pintura, pequeñas reparaciones, paredes, accesorios y revisión antes de entregar llaves."
    : "Apartment preparation before returning it to the owner in Valencia. Hole filling, paint touch-ups, small repairs, walls, fittings and pre-handover check.";

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

export default async function DevolverPisoPropietarioValenciaPage({
  params,
}: Props) {
  const { locale } = await params;
  const isEs = locale === "es";

  const t = {
    badge: isEs
      ? "Preparación antes de devolver el piso"
      : "Preparation before returning the apartment",
    h1: isEs
      ? "Preparación del piso para devolver al propietario en Valencia"
      : "Apartment preparation to return to the owner in Valencia",
    heroText: isEs
      ? "Arreglamos agujeros, marcas, rozaduras, retoques de pintura, accesorios sueltos y pequeños desperfectos antes de entregar las llaves al propietario."
      : "We repair holes, marks, scratches, paint touch-ups, loose fittings and small visible damage before handing the keys back to the owner.",
    whatsapp: isEs ? "Pedir presupuesto por WhatsApp" : "Request estimate by WhatsApp",
    form: isEs ? "Abrir formulario" : "Open form",
    sendPhotos: isEs ? "Enviar fotos ahora" : "Send photos now",
    from: isEs ? "Desde 35 €" : "From €35",
    smallJobs: isEs ? "Pequeñas reparaciones" : "Small repairs",
    city: "Valencia",
    cityText: isEs ? "Centro y alrededores" : "City and nearby areas",
    photosFirst: isEs ? "Fotos primero" : "Photos first",
    clearPrice: isEs ? "Precio claro antes de ir" : "Clear price before visit",
    cardEyebrow: isEs ? "Antes de entregar llaves" : "Before handing over keys",
    cardTitle: isEs ? "Piso más presentable" : "Better-presented apartment",
    cardNote: isEs
      ? "Ideal para inquilinos que quieren devolver el piso en buen estado y propietarios que necesitan preparar la vivienda entre alquileres."
      : "Ideal for tenants who want to return the apartment in good condition and owners who need to prepare the property between rentals.",
    serviceEyebrow: isEs ? "Servicio" : "Service",
    serviceTitle: isEs
      ? "Arreglos prácticos antes de devolver la vivienda"
      : "Practical repairs before returning the property",
    serviceText: isEs
      ? "Cuando vas a devolver un piso al propietario, los detalles visibles importan. Una pared con agujeros, marcas o accesorios flojos puede crear problemas durante la revisión final."
      : "When returning an apartment to the owner, visible details matter. A wall with holes, marks or loose fittings can create problems during the final inspection.",
    issuesEyebrow: isEs ? "Problemas comunes" : "Common issues",
    issuesTitle: isEs
      ? "Lo que normalmente se revisa antes de devolver el piso"
      : "What is usually checked before returning the apartment",
    issuesText: isEs
      ? "Puedes enviarnos fotos de cada zona. Te diremos qué se puede reparar rápido, qué materiales hacen falta y cuánto puede costar."
      : "You can send us photos of each area. We will tell you what can be repaired quickly, what materials are needed and how much it may cost.",
    processEyebrow: isEs ? "Proceso" : "Process",
    processTitle: isEs
      ? "Cómo preparamos el piso para la entrega"
      : "How we prepare the apartment for handover",
    tenantsTitle: isEs
      ? "Para inquilinos que quieren devolver bien el piso"
      : "For tenants who want to return the apartment properly",
    tenantsText: isEs
      ? "Si vas a dejar una vivienda, podemos ayudarte con los detalles típicos: agujeros de cuadros, marcas en paredes, manillas flojas, accesorios retirados y pequeños daños visibles."
      : "If you are leaving a property, we can help with typical details: picture holes, wall marks, loose handles, removed fittings and small visible damage.",
    ownersTitle: isEs
      ? "Para propietarios y gestores"
      : "For owners and property managers",
    ownersText: isEs
      ? "También preparamos pisos entre inquilinos: arreglos rápidos, revisión visual, montaje de accesorios y pequeños retoques antes de volver a alquilar."
      : "We also prepare apartments between tenants: quick repairs, visual checks, fitting installation and small touch-ups before renting again.",
    linksEyebrow: isEs ? "Servicios relacionados" : "Related services",
    linksTitle: isEs
      ? "Perelinkovka SEO para captar más búsquedas"
      : "SEO internal linking for more search intent",
    linksText: isEs
      ? "Esta página conecta con servicios cercanos para cubrir búsquedas de entrega de piso, fin de contrato, paredes, pintura y agujeros."
      : "This page connects to related services covering apartment handover, rental contract end, walls, painting and holes.",
    zonesEyebrow: isEs ? "Zonas" : "Areas",
    zonesTitle: isEs
      ? "Preparación de pisos para devolver al propietario en Valencia"
      : "Apartment preparation to return to the owner in Valencia",
    zonesText: isEs
      ? "Trabajamos en Valencia ciudad y zonas cercanas. Para confirmar disponibilidad, envíanos ubicación aproximada y fotos del trabajo."
      : "We work in Valencia city and nearby areas. To confirm availability, send us the approximate location and photos of the job.",
    faqEyebrow: "FAQ",
    faqTitle: isEs ? "Preguntas frecuentes" : "Frequently asked questions",
    ctaTitle: isEs
      ? "¿Tienes que devolver el piso al propietario?"
      : "Do you need to return the apartment to the owner?",
    ctaText: isEs
      ? "Envíanos fotos de agujeros, paredes, accesorios y pequeños desperfectos. Te damos una estimación rápida para dejar el piso mejor preparado antes de entregar las llaves."
      : "Send us photos of holes, walls, fittings and small damage. We will give you a quick estimate to prepare the apartment before handing over the keys.",
  };

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, necesito preparar un piso para devolverlo al propietario en Valencia. Quiero enviar fotos para presupuesto."
      : "Hi, I need to prepare an apartment to return it to the owner in Valencia. I’d like to send photos for an estimate."
  );

  const whatsappHref = `https://wa.me/${phone}?text=${whatsappText}`;
  const estimateHref = `/${locale}/estimate?category=repairs`;

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: isEs
      ? "Preparación del piso para devolver al propietario en Valencia"
      : "Apartment preparation to return to owner in Valencia",
    serviceType: "Apartment handover repairs and preparation",
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
      ? "Preparación del piso para devolver al propietario en Valencia: tapar agujeros, retoques de pintura, pequeñas reparaciones, paredes, accesorios y revisión antes de entregar llaves."
      : "Apartment preparation before returning it to the owner in Valencia: hole filling, paint touch-ups, small repairs, walls, fittings and pre-handover check.",
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
        name: isEs
          ? "Preparación del piso para devolver al propietario"
          : "Apartment preparation to return to owner",
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
                [t.city, t.cityText],
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
                  <KeyRound className="h-7 w-7" />
                </div>
                <div>
                  <p className="text-sm text-neutral-400">{t.cardEyebrow}</p>
                  <h2 className="text-2xl font-semibold">{t.cardTitle}</h2>
                </div>
              </div>

              <div className="mt-8 space-y-4">
                {(isEs
                  ? [
                      "Tapar agujeros de tacos y tornillos",
                      "Retoques de pintura en paredes",
                      "Ajustar puertas, manillas y accesorios",
                      "Preparar el piso para la revisión final",
                      "Reducir problemas por detalles visibles",
                    ]
                  : [
                      "Fill holes from plugs and screws",
                      "Paint touch-ups on walls",
                      "Adjust doors, handles and fittings",
                      "Prepare the apartment for final inspection",
                      "Reduce issues from visible details",
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
                ? "Para los últimos días antes de devolver las llaves."
                : "For the last days before returning the keys.",
            },
            {
              icon: ShieldCheck,
              title: isEs ? "Limpio" : "Clean",
              text: isEs
                ? "Acabados cuidados en zonas visibles."
                : "Careful finish in visible areas.",
            },
            {
              icon: Euro,
              title: isEs ? "Claro" : "Clear",
              text: isEs
                ? "Estimación antes de empezar el trabajo."
                : "Estimate before starting the work.",
            },
            {
              icon: BadgeCheck,
              title: isEs ? "Práctico" : "Practical",
              text: isEs
                ? "Soluciones reales para desperfectos pequeños."
                : "Real solutions for small damage.",
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
            {t.issuesEyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
            {t.issuesTitle}
          </h2>
          <p className="mt-4 text-neutral-300">{t.issuesText}</p>

          <Link
            href={whatsappHref}
            className="mt-7 inline-flex items-center rounded-2xl bg-white px-6 py-4 font-semibold text-neutral-950 transition hover:bg-neutral-200"
          >
            {t.sendPhotos}
            <MessageCircle className="ml-2 h-5 w-5" />
          </Link>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {issues.map((item) => (
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
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8">
            <div className="mb-5 inline-flex rounded-2xl bg-amber-400/10 p-3 text-amber-300">
              <Home className="h-7 w-7" />
            </div>
            <h2 className="text-3xl font-semibold">{t.tenantsTitle}</h2>
            <p className="mt-4 text-neutral-300">{t.tenantsText}</p>
          </div>

          <div className="rounded-3xl border border-amber-400/20 bg-amber-400/10 p-8">
            <div className="mb-5 inline-flex rounded-2xl bg-amber-400 p-3 text-neutral-950">
              <DoorOpen className="h-7 w-7" />
            </div>
            <h2 className="text-3xl font-semibold">{t.ownersTitle}</h2>
            <p className="mt-4 text-amber-100">{t.ownersText}</p>
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
                  ? "Mejorar paredes antes de entregar la vivienda"
                  : "Improve walls before handing over the property"}
              </h2>
              <p className="mt-4 text-neutral-300">
                {isEs
                  ? "Los agujeros de tacos, soportes de TV, estanterías, cuadros o cortinas son una de las cosas más visibles al devolver un piso. Podemos rellenar, lijar y hacer retoques para que la pared quede mucho más presentable."
                  : "Holes from wall plugs, TV brackets, shelves, pictures or curtains are one of the most visible things when returning an apartment. We can fill, sand and touch up the area so the wall looks much more presentable."}
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
                    "Remates antes de revisión",
                  ]
                : [
                    "Wall plug holes",
                    "Furniture marks",
                    "Moving scratches",
                    "Small dents",
                    "Chipped paint",
                    "Finishing before inspection",
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
          <div className="grid gap-8 lg:grid-cols-3">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
                {isEs ? "Checklist" : "Checklist"}
              </p>
              <h2 className="mt-3 text-3xl font-semibold">
                {isEs
                  ? "Qué revisar antes de devolver el piso"
                  : "What to check before returning the apartment"}
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:col-span-2">
              {(isEs
                ? [
                    "Paredes donde había cuadros o estanterías",
                    "Zona de TV y soporte retirado",
                    "Pasillos y esquinas golpeadas",
                    "Puertas, manillas y bisagras",
                    "Baño: portarrollos, toalleros, estantes",
                    "Cocina: tiradores, enchufes, luces",
                    "Habitaciones: cabecero, armarios, mesitas",
                    "Salón: marcas de muebles y rozaduras",
                  ]
                : [
                    "Walls where pictures or shelves were installed",
                    "TV area and removed bracket",
                    "Hallways and damaged corners",
                    "Doors, handles and hinges",
                    "Bathroom: holders, towel bars, shelves",
                    "Kitchen: handles, sockets, lights",
                    "Bedrooms: headboard, wardrobes, bedside tables",
                    "Living room: furniture marks and scratches",
                  ]
              ).map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                >
                  <div className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-amber-300" />
                    <p className="text-sm leading-6 text-neutral-300">
                      {item}
                    </p>
                  </div>
                </div>
              ))}
            </div>
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
                {t.faqEyebrow}
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
              title: isEs ? "Trabajo pequeño" : "Small job",
              text: isEs
                ? "No necesitas una reforma grande para resolver desperfectos básicos antes de devolver la vivienda."
                : "You do not need a big renovation to fix basic damage before returning the property.",
            },
            {
              icon: Layers,
              title: isEs ? "Materiales básicos" : "Basic materials",
              text: isEs
                ? "Masilla, lija, herramientas y pequeños consumibles según el tipo de reparación."
                : "Filler, sandpaper, tools and small consumables depending on the repair type.",
            },
            {
              icon: CalendarCheck,
              title: isEs ? "Antes de la entrega" : "Before handover",
              text: isEs
                ? "Organizamos el trabajo según la fecha de revisión o entrega de llaves."
                : "We organize the job around the inspection or key handover date.",
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