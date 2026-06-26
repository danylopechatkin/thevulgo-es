import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Drill,
  Euro,
  FileCheck2,
  Hammer,
  Home,
  MapPin,
  MessageCircle,
  Paintbrush,
  Plug,
  ShieldCheck,
  Sparkles,
  Wrench,
} from "lucide-react";

type Props = {
  params: Promise<{ locale: string }>;
};

const baseUrl = "https://www.thevulgo.es";
const phone = "34610076942";
const slug = "puesta-a-punto-vivienda-valencia";

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

const services = [
  {
    titleEs: "Reparaciones rápidas en vivienda",
    titleEn: "Fast home repairs",
    textEs:
      "Solucionamos pequeños desperfectos visibles en casas y pisos: puertas, manillas, bisagras, cajones, zócalos y accesorios.",
    textEn:
      "We fix small visible issues in homes and apartments: doors, handles, hinges, drawers, skirting boards and fittings.",
    icon: Wrench,
  },
  {
    titleEs: "Paredes, agujeros y marcas",
    titleEn: "Walls, holes and marks",
    textEs:
      "Tapamos agujeros de tacos, cuadros, cortinas, estanterías, soportes de TV y marcas visibles en paredes.",
    textEn:
      "We fill holes from plugs, pictures, curtains, shelves, TV brackets and visible marks on walls.",
    icon: Drill,
  },
  {
    titleEs: "Retoques de pintura",
    titleEn: "Paint touch-ups",
    textEs:
      "Mejoramos rozaduras, golpes pequeños, pintura saltada y zonas dañadas para que la vivienda se vea más cuidada.",
    textEn:
      "We improve scratches, small dents, chipped paint and damaged areas so the home looks better cared for.",
    icon: Paintbrush,
  },
  {
    titleEs: "Montaje de accesorios",
    titleEn: "Fitting installation",
    textEs:
      "Instalamos espejos, cuadros, estantes, barras de cortina, accesorios de baño, percheros y pequeños elementos.",
    textEn:
      "We install mirrors, pictures, shelves, curtain rods, bathroom accessories, hooks and small items.",
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
    titleEs: "Revisión visual de la vivienda",
    titleEn: "Visual home check",
    textEs:
      "Revisamos puntos importantes para preparar una vivienda antes de alquilar, vender, mudarse o recibir visitas.",
    textEn:
      "We check key points to prepare a home before renting, selling, moving or receiving visitors.",
    icon: FileCheck2,
  },
];

const situations = [
  {
    titleEs: "Antes de alquilar o publicar la vivienda",
    titleEn: "Before renting or publishing the home",
    textEs:
      "Dejamos el piso presentable para fotos, visitas, Airbnb, Booking o nuevos inquilinos.",
    textEn:
      "We make the apartment presentable for photos, visits, Airbnb, Booking or new tenants.",
  },
  {
    titleEs: "Después de una mudanza",
    titleEn: "After a move",
    textEs:
      "Reparamos marcas, agujeros, roces, pequeños daños y detalles visibles después de sacar muebles.",
    textEn:
      "We repair marks, holes, scratches, small damage and visible details after removing furniture.",
  },
  {
    titleEs: "Antes de entregar las llaves",
    titleEn: "Before handing over keys",
    textEs:
      "Ayudamos a que la vivienda se vea cuidada y lista para revisión del propietario o agencia.",
    textEn:
      "We help the home look cared for and ready for inspection by the owner or agency.",
  },
  {
    titleEs: "Piso parado o con desgaste",
    titleEn: "Empty or worn apartment",
    textEs:
      "Revisamos detalles básicos para que no dé sensación de abandono: paredes, luces, tiradores y ajustes.",
    textEn:
      "We check basic details so it does not feel neglected: walls, lights, handles and adjustments.",
  },
];

const included = [
  {
    es: "Reparación de pequeños agujeros en paredes",
    en: "Repair of small holes in walls",
  },
  {
    es: "Retoques de pintura en zonas visibles",
    en: "Paint touch-ups in visible areas",
  },
  {
    es: "Masilla, lijado y acabado limpio",
    en: "Filler, sanding and clean finish",
  },
  {
    es: "Ajuste de puertas, tiradores y bisagras",
    en: "Adjustment of doors, handles and hinges",
  },
  {
    es: "Colocación o revisión de accesorios básicos",
    en: "Installation or check of basic fittings",
  },
  {
    es: "Cambio o revisión de enchufes y mecanismos simples",
    en: "Replacement or check of sockets and simple switches",
  },
  {
    es: "Montaje de pequeños elementos si hace falta",
    en: "Assembly of small items if needed",
  },
  {
    es: "Revisión visual general antes de fotos o entrega",
    en: "General visual check before photos or handover",
  },
];

const notIncluded = [
  {
    es: "Reformas completas",
    en: "Full renovations",
  },
  {
    es: "Pintura integral de toda la vivienda",
    en: "Full painting of the whole home",
  },
  {
    es: "Trabajos eléctricos complejos",
    en: "Complex electrical work",
  },
  {
    es: "Fontanería grande o fugas ocultas",
    en: "Large plumbing work or hidden leaks",
  },
  {
    es: "Limpieza profunda profesional",
    en: "Professional deep cleaning",
  },
  {
    es: "Trabajos estructurales o de albañilería grande",
    en: "Structural work or large masonry jobs",
  },
];

const process = [
  {
    step: "01",
    titleEs: "Envíame fotos o vídeo",
    titleEn: "Send photos or video",
    textEs:
      "Vemos las paredes, daños, detalles y zonas que quieres dejar listas.",
    textEn:
      "We check the walls, damage, details and areas you want to prepare.",
  },
  {
    step: "02",
    titleEs: "Te digo qué se puede hacer",
    titleEn: "We explain what can be done",
    textEs:
      "Doy una estimación clara de trabajo, materiales y tiempo aproximado.",
    textEn:
      "We give a clear estimate for work, materials and approximate time.",
  },
  {
    step: "03",
    titleEs: "Preparamos la vivienda",
    titleEn: "We prepare the home",
    textEs:
      "Hacemos retoques, reparaciones pequeñas, ajustes y acabados necesarios.",
    textEn:
      "We do touch-ups, small repairs, adjustments and necessary finishes.",
  },
  {
    step: "04",
    titleEs: "Revisión final",
    titleEn: "Final check",
    textEs:
      "Comprobamos que el piso queda presentable para entrega, fotos o alquiler.",
    textEn:
      "We check that the apartment is presentable for handover, photos or renting.",
  },
];

const faqs = [
  {
    qEs: "¿Qué es un servicio de puesta a punto de vivienda?",
    qEn: "What is a home preparation service?",
    aEs:
      "Es un servicio de pequeñas reparaciones, retoques, montaje de accesorios y revisión visual para dejar una vivienda más presentable sin hacer una reforma grande.",
    aEn:
      "It is a service for small repairs, touch-ups, fitting installation and visual checks to make a home more presentable without a large renovation.",
  },
  {
    qEs: "¿Podéis hacerlo antes de entregar un piso de alquiler?",
    qEn: "Can you do it before handing over a rental apartment?",
    aEs:
      "Sí. Es uno de los casos más habituales: tapar agujeros, reparar roces, ajustar detalles y dejar la vivienda más presentable antes de la revisión.",
    aEn:
      "Yes. This is one of the most common cases: filling holes, repairing marks, adjusting details and making the home more presentable before inspection.",
  },
  {
    qEs: "¿Podéis hacer varias tareas pequeñas en una visita?",
    qEn: "Can you do several small tasks in one visit?",
    aEs:
      "Sí. Lo ideal es enviar fotos y una lista para calcular el tiempo y organizar el trabajo.",
    aEn:
      "Yes. The best option is to send photos and a list so we can estimate the time and organize the work.",
  },
  {
    qEs: "¿Incluye pintura?",
    qEn: "Does it include painting?",
    aEs:
      "Incluye retoques pequeños de pintura cuando es posible. Para igualar color, es mejor tener pintura original o una muestra.",
    aEn:
      "It can include small paint touch-ups when possible. For color matching, it is best to have the original paint or a sample.",
  },
  {
    qEs: "¿Cuánto cuesta una puesta a punto de vivienda?",
    qEn: "How much does home preparation cost?",
    aEs:
      "Depende de la lista de trabajos, materiales, estado de la vivienda y urgencia. Los trabajos pequeños pueden empezar desde 49 €.",
    aEn:
      "It depends on the task list, materials, property condition and urgency. Small jobs can start from €49.",
  },
  {
    qEs: "¿Trabajáis en toda Valencia?",
    qEn: "Do you work across Valencia?",
    aEs:
      "Sí, trabajamos en Valencia ciudad y zonas cercanas como Ruzafa, Benimaclet, Campanar, Patraix, El Carmen, Extramurs, Mestalla y alrededores.",
    aEn:
      "Yes, we work in Valencia city and nearby areas such as Ruzafa, Benimaclet, Campanar, Patraix, El Carmen, Extramurs, Mestalla and surrounding areas.",
  },
];

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";

  const title = isEs
    ? "Servicio de puesta a punto de viviendas en Valencia"
    : "Home Preparation Service in Valencia";

  const description = isEs
    ? "Servicio de puesta a punto de viviendas en Valencia. Reparaciones rápidas, retoques de pintura, paredes, agujeros, accesorios, luces, puertas y revisión antes de alquilar, vender o entregar."
    : "Home preparation service in Valencia. Fast repairs, paint touch-ups, walls, holes, fittings, lights, doors and checks before renting, selling or handover.";

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
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": `${baseUrl}/#business`,
      name: "TheVulgo",
      url: baseUrl,
      telephone: `+${phone}`,
      areaServed: areas,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Valencia",
        addressCountry: "ES",
      },
      priceRange: "€€",
    },
    {
      "@type": "Service",
      "@id": `${baseUrl}/es/${slug}#service`,
      name: "Puesta a punto de vivienda en Valencia",
      serviceType: "Handyman, pequeñas reparaciones y preparación de vivienda",
      provider: {
        "@id": `${baseUrl}/#business`,
      },
      areaServed: areas,
      url: `${baseUrl}/es/${slug}`,
      offers: {
        "@type": "Offer",
        priceCurrency: "EUR",
        price: "49",
        availability: "https://schema.org/InStock",
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${baseUrl}/es/${slug}#faq`,
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.qEs,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.aEs,
        },
      })),
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${baseUrl}/es/${slug}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Inicio",
          item: `${baseUrl}/es`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Servicios",
          item: `${baseUrl}/es/services`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Puesta a punto de vivienda",
          item: `${baseUrl}/es/${slug}`,
        },
      ],
    },
  ],
};

export default async function PuestaAPuntoViviendaPage({ params }: Props) {
  const { locale } = await params;
  const isEs = locale === "es";

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, quiero pedir presupuesto para puesta a punto de una vivienda en Valencia. Puedo enviar fotos o vídeo."
      : "Hi, I would like an estimate to prepare an apartment/home in Valencia. I can send photos or a video."
  );

  const whatsappHref = `https://wa.me/${phone}?text=${whatsappText}`;
  const estimateHref = `/${locale}/estimate?category=repairs`;

  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.18),transparent_32%),radial-gradient(circle_at_top_right,rgba(59,130,246,0.13),transparent_34%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-28">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-300/30 bg-amber-300/10 px-4 py-2 text-sm text-amber-100">
              <Sparkles className="h-4 w-4" />
              {isEs
                ? "Servicio de puesta a punto en Valencia"
                : "Home preparation service in Valencia"}
            </div>

            <h1 className="max-w-4xl text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              {isEs
                ? "Puesta a punto de vivienda en Valencia"
                : "Home preparation service in Valencia"}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-300">
              {isEs
                ? "Preparamos pisos, apartamentos y viviendas antes de alquilar, entregar llaves, recibir huéspedes o hacer fotos. Pequeñas reparaciones, retoques de pintura, ajustes y detalles para que el espacio se vea limpio, cuidado y presentable."
                : "We prepare apartments, homes and rental properties before renting, handover, receiving guests or taking photos. Small repairs, paint touch-ups, adjustments and details so the space looks clean, cared for and presentable."}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappHref}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-amber-300 px-6 py-4 font-bold text-neutral-950 transition hover:bg-amber-200"
              >
                <MessageCircle className="h-5 w-5" />
                {isEs ? "Pedir presupuesto por WhatsApp" : "Request estimate on WhatsApp"}
              </a>

              <Link
                href={estimateHref}
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-6 py-4 font-bold text-white transition hover:bg-white/10"
              >
                {isEs ? "Abrir formulario" : "Open estimate form"}
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                [isEs ? "Desde 49 €" : "From €49", Euro],
                [
                  isEs ? "Fotos para presupuesto" : "Photos for estimate",
                  FileCheck2,
                ],
                [
                  isEs ? "Valencia y alrededores" : "Valencia and nearby areas",
                  MapPin,
                ],
              ].map(([text, Icon]) => (
                <div
                  key={text as string}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                >
                  <Icon className="mb-3 h-5 w-5 text-amber-300" />
                  <p className="text-sm font-semibold text-neutral-100">
                    {text as string}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 shadow-2xl">
            <div className="rounded-[1.5rem] bg-neutral-900 p-6">
              <div className="flex items-center gap-3 border-b border-white/10 pb-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-300 text-neutral-950">
                  <Home className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-bold">
                    {isEs
                      ? "Ideal para pisos de alquiler"
                      : "Ideal for rental apartments"}
                  </p>
                  <p className="text-sm text-neutral-400">
                    {isEs
                      ? "Entrega, Airbnb, fotos o nuevos inquilinos"
                      : "Handover, Airbnb, photos or new tenants"}
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                {included.slice(0, 6).map((item) => (
                  <div key={item.es} className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-amber-300" />
                    <p className="text-sm leading-6 text-neutral-300">
                      {isEs ? item.es : item.en}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-amber-300/20 bg-amber-300/10 p-4">
                <p className="text-sm font-semibold text-amber-100">
                  {isEs
                    ? "Envía fotos de las zonas dañadas y te digo una estimación clara antes de ir."
                    : "Send photos of the damaged areas and we will give you a clear estimate before visiting."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
            <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {situations.map((item) => (
            <div
              key={item.titleEs}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"
            >
              <BadgeCheck className="mb-4 h-7 w-7 text-amber-300" />
              <h2 className="text-lg font-bold">
                {isEs ? item.titleEs : item.titleEn}
              </h2>
              <p className="mt-3 text-sm leading-6 text-neutral-400">
                {isEs ? item.textEs : item.textEn}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-300">
              {isEs ? "Qué podemos hacer" : "What we can do"}
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              {isEs
                ? "Detalles pequeños que cambian la impresión del piso"
                : "Small details that make a big difference"}
            </h2>

            <p className="mt-5 text-neutral-300">
              {isEs
                ? "Una vivienda puede verse mucho mejor con reparaciones simples: tapar agujeros, retocar pintura, ajustar una puerta, cambiar un tirador o dejar una pared más limpia para fotos."
                : "A property can look much better with simple repairs such as filling holes, paint touch-ups, adjusting doors and replacing damaged fittings."}
            </p>

            <div className="mt-8 grid gap-3">
              {included.map((item) => (
                <div
                  key={item.es}
                  className="flex items-start gap-3 rounded-2xl border border-white/10 bg-neutral-950/50 p-4"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-amber-300" />
                  <span className="text-sm text-neutral-300">
                    {isEs ? item.es : item.en}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-neutral-950 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-neutral-500">
              {isEs ? "Límites del servicio" : "Service limits"}
            </p>

            <h3 className="mt-3 text-2xl font-black">
              {isEs
                ? "No es una reforma completa"
                : "This is not a full renovation"}
            </h3>

            <p className="mt-4 text-neutral-400">
              {isEs
                ? "Este servicio está pensado para dejar el piso presentable con trabajos rápidos y concretos."
                : "This service is designed to improve the appearance of a property through fast and practical repairs."}
            </p>

            <div className="mt-8 space-y-3">
              {notIncluded.map((item) => (
                <div
                  key={item.es}
                  className="flex items-start gap-3 rounded-2xl bg-white/[0.04] p-4"
                >
                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-neutral-500" />
                  <span className="text-sm text-neutral-300">
                    {isEs ? item.es : item.en}
                  </span>
                </div>
              ))}
            </div>

            <a
              href={whatsappHref}
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-6 py-4 font-bold text-neutral-950 transition hover:bg-neutral-200"
            >
              {isEs ? "Consultar mi caso" : "Ask about your project"}
              <MessageCircle className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-300">
            {isEs ? "Proceso" : "Process"}
          </p>

          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
            {isEs
              ? "Cómo funciona la puesta a punto"
              : "How the preparation service works"}
          </h2>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {process.map((item) => (
            <div
              key={item.step}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"
            >
              <div className="mb-5 text-4xl font-black text-amber-300">
                {item.step}
              </div>

              <h3 className="text-lg font-bold">
                {isEs ? item.titleEs : item.titleEn}
              </h3>

              <p className="mt-3 text-sm leading-6 text-neutral-400">
                {isEs ? item.textEs : item.textEn}
              </p>
            </div>
          ))}
        </div>
      </section>
            <section className="border-y border-white/10 bg-neutral-900/60">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-300">
              {isEs ? "Zonas" : "Areas"}
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight">
              {isEs
                ? "Servicio en Valencia y alrededores"
                : "Service in Valencia and nearby areas"}
            </h2>

            <p className="mt-5 text-neutral-300">
              {isEs
                ? "Trabajamos en Valencia ciudad y barrios cercanos. Para zonas fuera de Valencia, envía ubicación y fotos para confirmar disponibilidad."
                : "We work in Valencia city and nearby neighborhoods. For areas outside Valencia, send the location and photos to confirm availability."}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {areas.map((area) => (
              <span
                key={area}
                className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-neutral-300"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-300">
            {isEs ? "Preguntas frecuentes" : "FAQ"}
          </p>

          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
            {isEs
              ? "Dudas sobre preparar una vivienda"
              : "Questions about preparing a home"}
          </h2>
        </div>

        <div className="mt-10 space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.qEs}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"
            >
              <h3 className="font-bold">{isEs ? faq.qEs : faq.qEn}</h3>

              <p className="mt-3 text-sm leading-6 text-neutral-400">
                {isEs ? faq.aEs : faq.aEn}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <div className="rounded-[2rem] border border-amber-300/20 bg-amber-300 p-8 text-neutral-950 md:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
                {isEs
                  ? "¿Quieres dejar tu vivienda lista?"
                  : "Want to prepare your home?"}
              </h2>

              <p className="mt-4 max-w-2xl text-neutral-800">
                {isEs
                  ? "Envíame fotos o vídeo de las zonas que quieres arreglar y te digo qué se puede hacer, cuánto costaría y cuándo podemos ir."
                  : "Send photos or a video of the areas you want to fix and we will tell you what can be done, how much it may cost and when we can come."}
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a
                href={whatsappHref}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-neutral-950 px-6 py-4 font-bold text-white transition hover:bg-neutral-800"
              >
                WhatsApp
                <MessageCircle className="h-5 w-5" />
              </a>

              <Link
                href={estimateHref}
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-neutral-950/20 bg-white/40 px-6 py-4 font-bold text-neutral-950 transition hover:bg-white/60"
              >
                {isEs ? "Formulario" : "Estimate form"}
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}