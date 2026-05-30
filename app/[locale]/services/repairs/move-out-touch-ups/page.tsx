import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Home,
  KeyRound,
  MapPin,
  Paintbrush,
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
    ? "Retoques Antes de Entregar Piso en Valencia | Desde 39€ | THEVULGO"
    : "Move-Out Touch-Ups in Valencia | From €39 | THEVULGO";

  const description = isEs
    ? "Retoques antes de entregar un piso en Valencia desde 39€. Marcas de pared, pequeños agujeros, detalles visibles, accesorios sueltos y preparación para entrega."
    : "Move-out touch-ups in Valencia from €39. Wall marks, small holes, visible details, loose fittings and room preparation before rental handover.";

  return {
    title,
    description,
    keywords: isEs
      ? [
          "retoques antes de entregar piso Valencia",
          "arreglos mudanza Valencia",
          "preparar piso entrega Valencia",
          "reparaciones pequeñas alquiler Valencia",
          "marcas pared Valencia",
          "handover piso Valencia",
          "manitas mudanza Valencia",
          "retoques alquiler Valencia",
          "arreglar piso antes de entregar Valencia",
        ]
      : [
          "move out touch ups Valencia",
          "rental handover repairs Valencia",
          "small move out repairs Valencia",
          "wall marks repair Valencia",
          "apartment handover Valencia",
          "move out handyman Valencia",
          "visible room corrections Valencia",
          "rental apartment touch ups Valencia",
        ],
    alternates: {
      canonical: `${siteUrl}/${locale}/services/repairs/move-out-touch-ups`,
      languages: {
        es: `${siteUrl}/es/services/repairs/move-out-touch-ups`,
        en: `${siteUrl}/en/services/repairs/move-out-touch-ups`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${siteUrl}/${locale}/services/repairs/move-out-touch-ups`,
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

export default async function MoveOutTouchUpsPage({ params }: PageProps) {
  const { locale } = await params;
  const isEs = locale === "es";

  const pageUrl = `${siteUrl}/${locale}/services/repairs/move-out-touch-ups`;

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, quiero pedir presupuesto para retoques antes de entregar un piso en Valencia."
      : "Hi, I would like an estimate for move-out touch-ups before handover in Valencia."
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
          q: "¿Qué incluye un retoque antes de entregar un piso?",
          a: "Incluye pequeñas correcciones visibles como marcas de pared, pequeños agujeros, tornillos retirados, accesorios sueltos, detalles mal alineados y zonas que necesitan mejorar visualmente antes de la entrega.",
        },
        {
          q: "¿Cuánto cuestan los retoques de move-out en Valencia?",
          a: "El servicio empieza desde 39€. El precio final depende del número de zonas, tipo de correcciones, estado de la habitación, material necesario y tiempo estimado.",
        },
        {
          q: "¿Sirve para entregar un piso de alquiler?",
          a: "Sí. Este servicio está pensado para mejorar detalles visibles antes de entregar llaves, mudarse, hacer fotos, recibir visitas o preparar una inspección del propietario.",
        },
        {
          q: "¿Podéis tapar marcas de tornillos o pequeños agujeros?",
          a: "Sí. Las marcas de tornillos y pequeños agujeros pueden incluirse si el alcance es sencillo. Si hace falta pintura exacta, ayuda mucho que el cliente tenga el color original.",
        },
        {
          q: "¿Qué fotos tengo que enviar?",
          a: "Envía fotos generales de cada habitación, fotos de cerca de las zonas dañadas y una lista corta de lo que quieres corregir antes de la entrega.",
        },
        {
          q: "¿Este servicio garantiza recuperar la fianza?",
          a: "No podemos garantizar decisiones del propietario o agencia, pero sí ayuda a mejorar detalles visibles que suelen llamar la atención durante una revisión.",
        },
      ]
    : [
        {
          q: "What is included in move-out touch-ups?",
          a: "It includes small visible corrections such as wall marks, small holes, removed screws, loose accessories, misaligned details and areas that need a cleaner look before handover.",
        },
        {
          q: "How much do move-out touch-ups cost in Valencia?",
          a: "The service starts from €39. Final price depends on the number of areas, correction type, room condition, required material and estimated time.",
        },
        {
          q: "Is this useful before handing over a rental apartment?",
          a: "Yes. This service is designed to improve visible details before key handover, moving out, property photos, viewings or landlord inspection.",
        },
        {
          q: "Can you cover screw marks or small holes?",
          a: "Yes. Screw marks and small holes can be included when the scope is simple. If exact paint is needed, it helps a lot if the client has the original paint.",
        },
        {
          q: "What photos should I send?",
          a: "Send general photos of each room, close-up photos of damaged areas and a short list of what you want corrected before handover.",
        },
        {
          q: "Does this service guarantee my deposit back?",
          a: "We cannot guarantee a landlord or agency decision, but the service helps improve visible details that usually stand out during an inspection.",
        },
      ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: isEs
      ? "Retoques antes de entregar piso en Valencia"
      : "Move-out touch-ups in Valencia",
    description: isEs
      ? "Pequeñas correcciones visibles para mejorar una habitación o vivienda antes de mudanza, entrega de llaves o inspección en Valencia."
      : "Small visible corrections to improve a room or property before move-out, key handover or inspection in Valencia.",
    serviceType: isEs ? "Retoques antes de entrega" : "Move-out touch-ups",
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
    areaServed: areas.map((area) => ({
      "@type": "Place",
      name: area,
    })),
    offers: {
      "@type": "Offer",
      price: "39",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      url: pageUrl,
    },
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
        name: isEs ? "Retoques antes de entrega" : "Move-out touch-ups",
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
        "Desde 39€",
        "Antes de entregar llaves",
        "Marcas, agujeros y detalles visibles",
        "Mejor aspecto para inspección",
      ]
    : [
        "From €39",
        "Before key handover",
        "Marks, holes and visible details",
        "Cleaner look for inspection",
      ];

  const included = isEs
    ? [
        "Revisión de pequeños detalles visibles",
        "Corrección de marcas simples de pared",
        "Pequeños agujeros o marcas de tornillos",
        "Ajuste de accesorios sueltos o mal alineados",
        "Mejora visual antes de entrega o inspección",
        "Presupuesto claro según fotos, lista y alcance",
      ]
    : [
        "Review of small visible details",
        "Correction of simple wall marks",
        "Small holes or screw marks",
        "Adjustment of loose or misaligned accessories",
        "Cleaner look before handover or inspection",
        "Clear estimate based on photos, list and scope",
      ];

  const inspectionPoints = isEs
    ? [
        "Marcas visibles en paredes por cuadros, estanterías o muebles",
        "Agujeros pequeños de tacos, tornillos o soportes retirados",
        "Accesorios sueltos como topes, ganchos, tapas o piezas pequeñas",
        "Zonas con aspecto descuidado antes de fotos, visita o revisión",
        "Detalles que pueden llamar la atención en una inspección rápida",
        "Pequeños desperfectos acumulados durante el uso diario del piso",
      ]
    : [
        "Visible wall marks from pictures, shelves or furniture",
        "Small holes from plugs, screws or removed brackets",
        "Loose fittings such as stops, hooks, covers or small parts",
        "Areas that look neglected before photos, viewing or inspection",
        "Details that may stand out during a quick property check",
        "Small defects accumulated during everyday use of the apartment",
      ];

  const commonProblems = isEs
    ? [
        {
          title: "Marcas en pared",
          text: "Revisamos roces, señales de muebles, marcas de cuadros y zonas visibles que empeoran el aspecto de la habitación.",
        },
        {
          title: "Agujeros pequeños",
          text: "Tapamos o preparamos pequeños agujeros de tornillos, tacos o soportes retirados cuando el alcance es sencillo.",
        },
        {
          title: "Accesorios sueltos",
          text: "Ajustamos pequeños elementos visibles como ganchos, topes, tapas, manillas o piezas que se han aflojado.",
        },
        {
          title: "Detalles de entrega",
          text: "Ayudamos a dejar la vivienda más presentable antes de entregar llaves, recibir visita o hacer revisión.",
        },
      ]
    : [
        {
          title: "Wall marks",
          text: "We check scuffs, furniture marks, picture marks and visible areas that make the room look less cared for.",
        },
        {
          title: "Small holes",
          text: "We fill or prepare small holes from screws, wall plugs or removed brackets when the scope is simple.",
        },
        {
          title: "Loose fittings",
          text: "We adjust small visible elements such as hooks, stops, covers, handles or pieces that have become loose.",
        },
        {
          title: "Handover details",
          text: "We help make the property look more presentable before key handover, viewing or inspection.",
        },
      ];

  const processSteps = isEs
    ? [
        "Envías fotos generales y fotos de cerca",
        "Preparas una lista corta de los detalles a corregir",
        "Revisamos el alcance, materiales y tiempo estimado",
        "Te damos un presupuesto claro antes de empezar",
        "Realizamos los retoques acordados para mejorar el aspecto",
      ]
    : [
        "You send general photos and close-up photos",
        "You prepare a short list of details to correct",
        "We check the scope, materials and estimated time",
        "You receive a clear estimate before the work starts",
        "We carry out the agreed touch-ups to improve the look",
      ];

  const rentalUseCases = isEs
    ? [
        {
          title: "Pisos de alquiler",
          text: "Útil antes de devolver llaves, especialmente si hay marcas de muebles, cuadros, tornillos o pequeños accesorios retirados.",
        },
        {
          title: "Apartamentos turísticos",
          text: "Ayuda a mejorar el aspecto visual antes de nuevas fotos, visitas o preparación rápida entre estancias.",
        },
        {
          title: "Habitaciones compartidas",
          text: "Ideal para corregir detalles visibles en habitaciones antes de cambio de inquilino o revisión del propietario.",
        },
      ]
    : [
        {
          title: "Rental apartments",
          text: "Useful before returning keys, especially when there are furniture marks, picture marks, screws or removed small fittings.",
        },
        {
          title: "Tourist apartments",
          text: "Helps improve the visual condition before new photos, viewings or quick preparation between stays.",
        },
        {
          title: "Shared rooms",
          text: "Ideal for correcting visible room details before a tenant change or landlord check.",
        },
      ];

  const notIncluded = isEs
    ? [
        "Reformas completas o trabajos grandes de pintura",
        "Garantía de recuperación de fianza",
        "Reparaciones estructurales o daños graves",
        "Igualación perfecta de pintura si no existe el color original",
      ]
    : [
        "Full renovations or large painting jobs",
        "Deposit return guarantee",
        "Structural repairs or serious damage",
        "Perfect paint matching if the original colour is not available",
      ];

  const related = isEs
    ? [
        {
          title: "Pequeños arreglos de pared",
          href: `/${locale}/services/repairs/minor-wall-fixes`,
        },
        {
          title: "Sellado de juntas y huecos",
          href: `/${locale}/services/repairs/sealing-gap-filling`,
        },
        {
          title: "Reparaciones en Valencia",
          href: `/${locale}/services/repairs`,
        },
        {
          title: "Servicios handyman",
          href: `/${locale}/services`,
        },
      ]
    : [
        {
          title: "Minor wall fixes",
          href: `/${locale}/services/repairs/minor-wall-fixes`,
        },
        {
          title: "Sealing & gap filling",
          href: `/${locale}/services/repairs/sealing-gap-filling`,
        },
        {
          title: "Repairs in Valencia",
          href: `/${locale}/services/repairs`,
        },
        {
          title: "Handyman services",
          href: `/${locale}/services`,
        },
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
              {isEs ? "Retoques antes de entregar piso" : "Move-out touch-ups"}{" "}
              <span className="text-yellow-500">
                {isEs ? "en Valencia" : "in Valencia"}
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-700">
              {isEs
                ? "Pequeñas correcciones visibles para mejorar una habitación antes de mudarte, entregar llaves o preparar una inspección."
                : "Small visible corrections to improve a room before moving out, key handover or property inspection."}
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
              <KeyRound className="mb-6 h-12 w-12 text-black" />
              <p className="text-sm font-black uppercase tracking-widest">
                {isEs ? "Desde 39€" : "From €39"}
              </p>
              <h2 className="mt-3 text-3xl font-black">
                {isEs
                  ? "Mejor aspecto. Menos marcas. Entrega más tranquila."
                  : "Cleaner look. Fewer marks. Easier handover."}
              </h2>
              <p className="mt-4 font-medium leading-7 text-neutral-900">
                {isEs
                  ? "Corregimos detalles visibles para que la habitación o vivienda se vea más cuidada antes de entregar."
                  : "We correct visible details so the room or property looks better before handover."}
              </p>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: isEs ? "Paredes" : "Walls",
                  text: isEs ? "Marcas y agujeros pequeños" : "Marks and small holes",
                  icon: Paintbrush,
                },
                {
                  title: isEs ? "Entrega" : "Handover",
                  text: isEs ? "Antes de llaves" : "Before keys",
                  icon: KeyRound,
                },
                {
                  title: isEs ? "Detalles" : "Details",
                  text: isEs ? "Accesorios visibles" : "Visible accessories",
                  icon: Wrench,
                },
                {
                  title: isEs ? "Resultado" : "Result",
                  text: isEs ? "Más limpio y cuidado" : "Cleaner and neater",
                  icon: Sparkles,
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
              title: isEs ? "Antes de entregar" : "Before handover",
              text: isEs
                ? "Ideal para pisos de alquiler, mudanzas, inspecciones y preparación antes de devolver llaves."
                : "Ideal for rental apartments, move-outs, inspections and preparation before returning keys.",
            },
            {
              title: isEs ? "Correcciones visibles" : "Visible corrections",
              text: isEs
                ? "Pequeñas marcas, agujeros, accesorios sueltos y detalles que afectan al aspecto general."
                : "Small marks, holes, loose accessories and details that affect the overall look.",
            },
            {
              title: isEs ? "Presupuesto claro" : "Clear estimate",
              text: isEs
                ? "Envía fotos y una lista corta para valorar tiempo, material y alcance."
                : "Send photos and a short list to estimate time, material and scope.",
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
            ? "Pequeños retoques para mejorar una habitación antes de mudanza o entrega"
            : "Small touch-ups to improve a room before move-out or handover"}
        </h2>

        <div className="mt-6 space-y-5 text-lg leading-8 text-neutral-700">
          <p>
            {isEs
              ? "Antes de entregar un piso, los detalles visibles importan: marcas de tornillos, pequeños agujeros, roces, accesorios sueltos o zonas que se ven descuidadas pueden llamar mucho la atención durante una revisión."
              : "Before handing over a property, visible details matter: screw marks, small holes, scuffs, loose accessories or areas that look neglected can stand out during an inspection."}
          </p>

          <p>
            {isEs
              ? "THEVULGO realiza retoques de move-out en Valencia para habitaciones, pisos de alquiler, apartamentos, oficinas pequeñas y viviendas que necesitan verse más cuidadas antes de entrega o visita."
              : "THEVULGO provides move-out touch-ups in Valencia for rooms, rental apartments, flats, small offices and homes that need a cleaner look before handover or viewing."}
          </p>

          <p>
            {isEs
              ? "Este servicio no sustituye una reforma completa ni garantiza condiciones de depósito, pero ayuda a corregir detalles visibles y mejorar la presentación general del espacio."
              : "This service does not replace a full renovation or guarantee deposit conditions, but it helps correct visible details and improve the overall presentation of the space."}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-16 md:px-8">
        <h2 className="text-3xl font-black md:text-4xl">
          {isEs
            ? "Retoques para alquileres, mudanzas y entregas de llaves en Valencia"
            : "Touch-ups for rentals, move-outs and key handovers in Valencia"}
        </h2>

        <div className="mt-6 space-y-6 text-lg leading-8 text-neutral-700">
          <p>
            {isEs
              ? "Cuando una vivienda se entrega después de meses o años de uso, suelen aparecer pequeños desperfectos que no requieren una reforma, pero sí un repaso práctico. Las paredes pueden tener marcas de muebles, los tornillos retirados pueden dejar agujeros visibles y algunos accesorios pueden quedar sueltos o mal alineados."
              : "When a property is handed over after months or years of use, small defects often appear that do not require renovation but do need practical touch-ups. Walls may have furniture marks, removed screws may leave visible holes and some fittings may become loose or misaligned."}
          </p>

          <p>
            {isEs
              ? "Este servicio está pensado para resolver esos detalles antes de una revisión del propietario, una visita de agencia, una sesión de fotos o la devolución de llaves. El objetivo es que el espacio se vea más limpio, ordenado y cuidado, sin convertir un trabajo pequeño en una obra grande."
              : "This service is designed to resolve those details before a landlord check, agency visit, photo session or key return. The goal is to make the space look cleaner, tidier and better cared for without turning a small job into a large project."}
          </p>

          <p>
            {isEs
              ? "En Valencia trabajamos con inquilinos, propietarios, apartamentos turísticos y pequeñas oficinas que necesitan corregir detalles concretos antes de una entrega. Para valorar el trabajo, lo más útil es enviar fotos generales, imágenes de cerca y una lista breve de los puntos que quieres mejorar."
              : "In Valencia we work with tenants, owners, tourist apartments and small offices that need specific visible details corrected before handover. To assess the job, the most useful approach is to send general photos, close-up images and a short list of the points you want improved."}
          </p>

          <p>
            {isEs
              ? "Si hay que igualar pintura, el resultado depende mucho de tener el color original o una referencia clara. Si no existe el mismo color, se puede valorar una solución visual razonable, pero siempre avisamos antes para evitar expectativas incorrectas."
              : "If paint matching is needed, the result depends heavily on having the original paint or a clear reference. If the same colour is not available, a reasonable visual solution can be considered, but we always explain this in advance to avoid wrong expectations."}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-yellow-200 bg-white p-7 shadow-md">
            <ShieldCheck className="h-10 w-10 text-yellow-500" />
            <h2 className="mt-4 text-3xl font-black">
              {isEs ? "Qué revisamos antes de presupuestar" : "What we check before estimating"}
            </h2>

            <div className="mt-6 space-y-4">
              {inspectionPoints.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-yellow-500" />
                  <p className="font-semibold leading-7 text-neutral-800">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-yellow-200 bg-yellow-50 p-7 shadow-md">
            <Wrench className="h-10 w-10 text-yellow-500" />
            <h2 className="mt-4 text-3xl font-black">
              {isEs ? "Proceso de trabajo" : "Work process"}
            </h2>

            <div className="mt-6 space-y-4">
              {processSteps.map((item, index) => (
                <div key={item} className="flex items-start gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-yellow-400 font-black text-black">
                    {index + 1}
                  </span>
                  <p className="font-semibold leading-7 text-neutral-800">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <h2 className="text-3xl font-black md:text-4xl">
            {isEs ? "Problemas habituales que corregimos" : "Common problems we correct"}
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-4">
            {commonProblems.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-yellow-200 bg-yellow-50 p-6 shadow-sm"
              >
                <h3 className="text-xl font-black">{item.title}</h3>
                <p className="mt-3 leading-7 text-neutral-700">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-yellow-50 py-16">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <h2 className="text-3xl font-black md:text-4xl">
            {isEs ? "Para qué casos es útil" : "Where this service is useful"}
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {rentalUseCases.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-yellow-200 bg-white p-7 shadow-sm"
              >
                <Home className="h-8 w-8 text-yellow-500" />
                <h3 className="mt-4 text-xl font-black">{item.title}</h3>
                <p className="mt-3 leading-7 text-neutral-700">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="rounded-3xl border border-yellow-200 bg-white p-7 shadow-md md:p-10">
          <h2 className="text-3xl font-black md:text-4xl">
            {isEs ? "Qué no incluye este servicio" : "What this service does not include"}
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {notIncluded.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-2xl bg-yellow-50 p-5">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-yellow-500" />
                <p className="font-bold leading-7 text-neutral-800">{item}</p>
              </div>
            ))}
          </div>
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
            {isEs ? "Desde 39€" : "From €39"}
          </p>
          <h2 className="mt-3 text-4xl font-black">
            {isEs
              ? "Envía fotos y lista de retoques"
              : "Send photos and a touch-up list"}
          </h2>
          <p className="mt-6 text-lg font-medium leading-8 text-neutral-900">
            {isEs
              ? "Para calcular el precio, envía fotos generales, fotos de cerca y una lista de las zonas que quieres corregir antes de entregar."
              : "To estimate the price, send general photos, close-up photos and a list of the areas you want corrected before handover."}
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
              ? "¿Necesitas preparar una habitación antes de entregar?"
              : "Need to prepare a room before handover?"}
          </h2>
          <p className="mt-5 text-lg font-medium text-neutral-900">
            {isEs
              ? "Envía fotos y una lista corta. Te damos un presupuesto claro antes de empezar."
              : "Send photos and a short list. Get a clear estimate before the work starts."}
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