import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CalendarCheck,
  CheckCircle2,
  Clock3,
  Euro,
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
  DoorOpen,
  Drill,
} from "lucide-react";

type Props = {
  params: Promise<{ locale: string }>;
};

const baseUrl = "https://www.thevulgo.es";
const phone = "34610076942";
const slug = "services/pequenas-reparaciones-valencia";

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
];

const relatedLinks = [
  {
    href: "/handyman-valencia",
    es: "Handyman en Valencia",
    en: "Handyman in Valencia",
  },
  {
    href: "/reparacion-paredes-valencia",
    es: "Reparación de paredes",
    en: "Wall repair",
  },
  {
    href: "/retoques-pintura-valencia",
    es: "Retoques de pintura",
    en: "Paint touch-ups",
  },
  {
    href: "/reparacion-agujeros-pared-valencia",
    es: "Reparación de agujeros",
    en: "Wall hole repair",
  },
  {
    href: "/puesta-a-punto-vivienda-valencia",
    es: "Puesta a punto de vivienda",
    en: "Home preparation service",
  },
  {
    href: "/reparaciones-antes-entrega-piso-valencia",
    es: "Reparaciones antes de entregar un piso",
    en: "Repairs before handing over a flat",
  },
  {
    href: "/preparacion-piso-airbnb-valencia",
    es: "Preparación de piso para Airbnb",
    en: "Airbnb apartment preparation",
  },
  {
    href: "/montaje-muebles-valencia",
    es: "Montaje de muebles",
    en: "Furniture assembly",
  },
  {
    href: "/instalar-lampara-valencia",
    es: "Instalación de lámparas",
    en: "Light installation",
  },
  {
    href: "/electricista-valencia",
    es: "Pequeños trabajos eléctricos",
    en: "Small electrical jobs",
  },
  {
    href: "/colgar-cuadros-valencia",
    es: "Colgar cuadros y espejos",
    en: "Picture and mirror hanging",
  },
  {
    href: "/instalacion-estanterias-valencia",
    es: "Instalación de estanterías",
    en: "Shelf installation",
  },
];

const services = [
  {
    icon: Hammer,
    esTitle: "Arreglos generales del hogar",
    enTitle: "General home fixes",
    esText:
      "Pequeñas reparaciones en pisos, apartamentos, viviendas alquiladas, locales y habitaciones.",
    enText:
      "Small repairs in flats, apartments, rental homes, rooms and small premises.",
  },
  {
    icon: Paintbrush,
    esTitle: "Retoques de pared y pintura",
    enTitle: "Wall and paint touch-ups",
    esText:
      "Arañazos, marcas, agujeros pequeños, desconchones y zonas dañadas antes de entregar o alquilar.",
    enText:
      "Scratches, marks, small holes, chips and damaged areas before handover or rental.",
  },
  {
    icon: DoorOpen,
    esTitle: "Puertas, manillas y bisagras",
    enTitle: "Doors, handles and hinges",
    esText:
      "Ajuste de puertas, manillas sueltas, bisagras, topes, cierres y pequeños problemas de uso diario.",
    enText:
      "Door adjustment, loose handles, hinges, stoppers, latches and everyday small issues.",
  },
  {
    icon: Plug,
    esTitle: "Enchufes, interruptores y lámparas",
    enTitle: "Sockets, switches and lights",
    esText:
      "Cambio de accesorios eléctricos sencillos, lámparas, plafones, interruptores y enchufes.",
    enText:
      "Simple electrical accessory replacement, lights, ceiling lamps, switches and sockets.",
  },
  {
    icon: Layers,
    esTitle: "Muebles, cajones y accesorios",
    enTitle: "Furniture, drawers and accessories",
    esText:
      "Cajones que rozan, puertas de armario, tiradores, pequeñas piezas, estanterías y accesorios.",
    enText:
      "Drawers that rub, cabinet doors, handles, small parts, shelves and accessories.",
  },
  {
    icon: KeyRound,
    esTitle: "Puesta a punto para alquiler",
    enTitle: "Rental preparation",
    esText:
      "Reparaciones rápidas antes de entregar una vivienda, recibir inquilinos o publicar en Airbnb.",
    enText:
      "Quick repairs before handing over a property, receiving tenants or listing on Airbnb.",
  },
];

const repairItems = [
  "Agujeros pequeños en paredes",
  "Arañazos y marcas en pintura",
  "Retoques de pintura",
  "Desconchones",
  "Silicona en baño o cocina",
  "Manillas sueltas",
  "Bisagras flojas",
  "Puertas que rozan",
  "Cajones desalineados",
  "Tiradores de muebles",
  "Estanterías",
  "Cuadros",
  "Espejos",
  "Barras de cortina",
  "Accesorios de baño",
  "Soportes",
  "Pequeños ajustes eléctricos",
  "Cambio de enchufe",
  "Cambio de interruptor",
  "Instalación de lámpara",
  "Sellado de juntas",
  "Pequeñas reparaciones antes de mudanza",
  "Reparaciones para propietarios",
  "Reparaciones para inquilinos",
];

const prices = [
  {
    esName: "Visita / pequeña reparación simple",
    enName: "Visit / simple small repair",
    price: "desde 35 €",
  },
  {
    esName: "Retoques de pintura o pared",
    enName: "Paint or wall touch-ups",
    price: "desde 45 €",
  },
  {
    esName: "Pack varias reparaciones",
    enName: "Multiple repair package",
    price: "desde 60 €",
  },
  {
    esName: "Puesta a punto antes de entregar piso",
    enName: "Flat preparation before handover",
    price: "desde 80 €",
  },
];

const steps = [
  {
    esTitle: "Envías fotos por WhatsApp",
    enTitle: "Send photos by WhatsApp",
    esText:
      "Mándame fotos o vídeo corto de lo que necesitas reparar para darte una orientación clara.",
    enText:
      "Send photos or a short video of what needs to be fixed so I can give you clear guidance.",
  },
  {
    esTitle: "Te doy precio orientativo",
    enTitle: "You get an estimate",
    esText:
      "Antes de ir, te explico el precio de mano de obra y si hacen falta materiales.",
    enText:
      "Before coming, I explain the labor price and whether materials are needed.",
  },
  {
    esTitle: "Vamos y lo reparamos",
    enTitle: "We come and fix it",
    esText:
      "Realizamos el trabajo de forma limpia, práctica y cuidando el acabado final.",
    enText:
      "We do the work cleanly and practically, paying attention to the final finish.",
  },
];

const faqs = [
  {
    esQ: "¿Haces pequeñas reparaciones del hogar en Valencia?",
    esA: "Sí. Realizo pequeñas reparaciones del hogar en Valencia: paredes, pintura, puertas, cajones, muebles, accesorios, enchufes, lámparas y puesta a punto general.",
    enQ: "Do you do small home repairs in Valencia?",
    enA: "Yes. I do small home repairs in Valencia: walls, paint, doors, drawers, furniture, accessories, sockets, lights and general home preparation.",
  },
  {
    esQ: "¿Cuál es el precio mínimo?",
    esA: "Normalmente las pequeñas reparaciones empiezan desde 35 €, dependiendo del tipo de trabajo, zona, materiales y tiempo necesario.",
    enQ: "What is the minimum price?",
    enA: "Small repairs usually start from €35, depending on the type of job, area, materials and time required.",
  },
  {
    esQ: "¿Puedes hacer varias reparaciones en una sola visita?",
    esA: "Sí. Es lo más recomendable. Puedes juntar varias tareas pequeñas y hacerlas en una sola visita para aprovechar mejor el desplazamiento.",
    enQ: "Can you do several repairs in one visit?",
    enA: "Yes. This is usually the best option. You can group several small tasks in one visit to make better use of the call-out.",
  },
  {
    esQ: "¿Trabajas para pisos de alquiler o Airbnb?",
    esA: "Sí. Puedo hacer reparaciones rápidas antes de entregar un piso, recibir nuevos inquilinos o preparar un apartamento para Airbnb.",
    enQ: "Do you work for rental flats or Airbnb?",
    enA: "Yes. I can do quick repairs before handing over a flat, receiving new tenants or preparing an Airbnb apartment.",
  },
  {
    esQ: "¿Incluyes materiales?",
    esA: "Depende del trabajo. Algunas reparaciones pueden hacerse con materiales básicos, pero si hace falta pintura, silicona, tornillería o piezas especiales, se calcula aparte.",
    enQ: "Are materials included?",
    enA: "It depends on the job. Some repairs can be done with basic materials, but if paint, silicone, screws or special parts are needed, they are calculated separately.",
  },
  {
    esQ: "¿Puedes reparar agujeros pequeños en la pared?",
    esA: "Sí. Puedo tapar agujeros pequeños, lijar, preparar la zona y hacer retoques de pintura cuando sea posible.",
    enQ: "Can you repair small holes in the wall?",
    enA: "Yes. I can fill small holes, sand, prepare the area and do paint touch-ups when possible.",
  },
  {
    esQ: "¿Puedes cambiar enchufes o interruptores?",
    esA: "Sí, realizo cambios sencillos de enchufes, interruptores, lámparas y accesorios eléctricos básicos.",
    enQ: "Can you replace sockets or switches?",
    enA: "Yes, I do simple replacements of sockets, switches, lights and basic electrical accessories.",
  },
  {
    esQ: "¿Trabajas fines de semana?",
    esA: "Según disponibilidad. Puedes escribirme por WhatsApp y vemos una hora que te venga bien.",
    enQ: "Do you work on weekends?",
    enA: "Depending on availability. You can message me on WhatsApp and we can find a suitable time.",
  },
];

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";

  const title = isEs
    ? "Pequeñas reparaciones del hogar en Valencia | THEVULGO"
    : "Small Home Repairs in Valencia | THEVULGO";

  const description = isEs
    ? "Servicio de pequeñas reparaciones del hogar en Valencia. Arreglos de pared, pintura, puertas, cajones, muebles, enchufes, lámparas y puesta a punto de viviendas."
    : "Small home repair service in Valencia. Wall fixes, paint touch-ups, doors, drawers, furniture, sockets, lights and home preparation.";

  const canonical = `${baseUrl}/${locale}/${slug}`;

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        es: `${baseUrl}/es/${slug}`,
        en: `${baseUrl}/en/${slug}`,
      },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "THEVULGO",
      locale: isEs ? "es_ES" : "en_US",
      type: "website",
    },
  };
}

export default async function PequenasReparacionesValenciaPage({
  params,
}: Props) {
  const { locale } = await params;
  const isEs = locale === "es";

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, necesito presupuesto para pequeñas reparaciones del hogar en Valencia. Puedo enviar fotos."
      : "Hi, I need an estimate for small home repairs in Valencia. I can send photos."
  );

  const whatsappHref = `https://wa.me/${phone}?text=${whatsappText}`;
  const estimateHref = `/${locale}/estimate?category=repairs`;

  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "THEVULGO",
    url: `${baseUrl}/${locale}/${slug}`,
    telephone: `+${phone}`,
    areaServed: areas,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Valencia",
      addressCountry: "ES",
    },
    priceRange: "€€",
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: isEs
      ? "Pequeñas reparaciones del hogar en Valencia"
      : "Small home repairs in Valencia",
    provider: {
      "@type": "LocalBusiness",
      name: "THEVULGO",
    },
    areaServed: areas,
    serviceType: isEs
      ? "Pequeñas reparaciones del hogar"
      : "Small home repairs",
    offers: {
      "@type": "Offer",
      priceCurrency: "EUR",
      price: "35",
      availability: "https://schema.org/InStock",
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: isEs ? faq.esQ : faq.enQ,
      acceptedAnswer: {
        "@type": "Answer",
        text: isEs ? faq.esA : faq.enA,
      },
    })),
  };

  const breadcrumbJsonLd = {
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
          ? "Pequeñas reparaciones Valencia"
          : "Small repairs Valencia",
        item: `${baseUrl}/${locale}/${slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />

      <main className="min-h-screen bg-neutral-950 text-white">
        <section className="relative overflow-hidden border-b border-white/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(245,158,11,0.22),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.18),transparent_35%)]" />

          <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-28">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-2 text-sm font-medium text-amber-200">
                <Sparkles className="h-4 w-4" />
                {isEs
                  ? "Servicio rápido en Valencia"
                  : "Fast service in Valencia"}
              </div>

              <h1 className="max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
                {isEs
                  ? "Pequeñas reparaciones del hogar en Valencia"
                  : "Small home repairs in Valencia"}
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-300">
                {isEs
                  ? "Arreglos rápidos y limpios para pisos, apartamentos, viviendas de alquiler y Airbnb: paredes, pintura, puertas, cajones, accesorios, enchufes, lámparas y puesta a punto general."
                  : "Fast and clean fixes for flats, apartments, rental homes and Airbnb properties: walls, paint, doors, drawers, accessories, sockets, lights and general preparation."}
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href={whatsappHref}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-amber-400 px-6 py-4 font-semibold text-neutral-950 transition hover:bg-amber-300"
                >
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp
                  <ArrowRight className="h-5 w-5" />
                </a>

                <Link
                  href={estimateHref}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-6 py-4 font-semibold text-white transition hover:bg-white/15"
                >
                  {isEs ? "Pedir presupuesto" : "Get estimate"}
                </Link>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {[
                  {
                    icon: Euro,
                    text: isEs ? "Desde 35 €" : "From €35",
                  },
                  {
                    icon: Clock3,
                    text: isEs ? "Citas flexibles" : "Flexible slots",
                  },
                  {
                    icon: ShieldCheck,
                    text: isEs ? "Trabajo limpio" : "Clean work",
                  },
                ].map((item) => (
                  <div
                    key={item.text}
                    className="rounded-2xl border border-white/10 bg-white/[0.06] p-4"
                  >
                    <item.icon className="mb-3 h-6 w-6 text-amber-300" />
                    <p className="font-semibold">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 shadow-2xl">
              <div className="rounded-2xl bg-neutral-900 p-6">
                <div className="mb-6 flex items-center gap-3">
                  <div className="rounded-2xl bg-amber-400 p-3 text-neutral-950">
                    <Wrench className="h-7 w-7" />
                  </div>
                  <div>
                    <p className="font-semibold">
                      {isEs ? "THEVULGO Repairs" : "THEVULGO Repairs"}
                    </p>
                    <p className="text-sm text-neutral-400">
                      {isEs ? "Valencia y alrededores" : "Valencia area"}
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  {[
                    isEs
                      ? "Reparaciones pequeñas en una visita"
                      : "Small repairs in one visit",
                    isEs
                      ? "Ideal para pisos de alquiler"
                      : "Ideal for rental flats",
                    isEs
                      ? "Fotos por WhatsApp para presupuesto"
                      : "Photos by WhatsApp for estimate",
                    isEs
                      ? "Paredes, pintura, puertas, muebles y accesorios"
                      : "Walls, paint, doors, furniture and accessories",
                  ].map((text) => (
                    <div
                      key={text}
                      className="flex items-start gap-3 rounded-xl bg-white/[0.05] p-4"
                    >
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-amber-300" />
                      <p className="text-neutral-200">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-amber-300">
              {isEs ? "Servicios incluidos" : "Included services"}
            </p>
            <h2 className="text-3xl font-bold md:text-4xl">
              {isEs
                ? "Arreglos pequeños que mejoran mucho una vivienda"
                : "Small fixes that make a home feel much better"}
            </h2>
            <p className="mt-4 text-neutral-300">
              {isEs
                ? "No siempre hace falta una reforma grande. Muchas veces una vivienda solo necesita una puesta a punto rápida, limpia y bien hecha."
                : "A full renovation is not always needed. Many homes only need a quick, clean and well-done refresh."}
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={isEs ? service.esTitle : service.enTitle}
                className="rounded-3xl border border-white/10 bg-white/[0.05] p-6"
              >
                <service.icon className="mb-5 h-8 w-8 text-amber-300" />
                <h3 className="text-xl font-semibold">
                  {isEs ? service.esTitle : service.enTitle}
                </h3>
                <p className="mt-3 text-neutral-300">
                  {isEs ? service.esText : service.enText}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/[0.03]">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
            <div className="mb-10 max-w-3xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-amber-300">
                {isEs ? "Lista de trabajos" : "Repair list"}
              </p>
              <h2 className="text-3xl font-bold md:text-4xl">
                {isEs
                  ? "Más de 20 tipos de pequeñas reparaciones"
                  : "More than 20 types of small repairs"}
              </h2>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {repairItems.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-neutral-950/70 p-4"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-amber-300" />
                  <span className="text-neutral-200">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-amber-300">
              {isEs ? "Precios orientativos" : "Guide prices"}
            </p>
            <h2 className="text-3xl font-bold md:text-4xl">
              {isEs
                ? "Precio claro antes de empezar"
                : "Clear price before starting"}
            </h2>
            <p className="mt-4 text-neutral-300">
              {isEs
                ? "El precio final depende del número de reparaciones, materiales, tiempo y zona. Puedes enviar fotos por WhatsApp para una orientación rápida."
                : "The final price depends on the number of repairs, materials, time and area. You can send photos by WhatsApp for a quick estimate."}
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {prices.map((item) => (
              <div
                key={item.price + item.esName}
                className="rounded-3xl border border-white/10 bg-white/[0.05] p-6"
              >
                <Euro className="mb-5 h-8 w-8 text-amber-300" />
                <h3 className="font-semibold">
                  {isEs ? item.esName : item.enName}
                </h3>
                <p className="mt-4 text-2xl font-bold text-amber-300">
                  {item.price}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/[0.03]">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-amber-300">
                  {isEs ? "Cómo trabajamos" : "How it works"}
                </p>
                <h2 className="text-3xl font-bold md:text-4xl">
                  {isEs
                    ? "Proceso simple por WhatsApp"
                    : "Simple WhatsApp process"}
                </h2>
                <p className="mt-4 text-neutral-300">
                  {isEs
                    ? "Para pequeñas reparaciones lo más rápido es enviar fotos, confirmar el tipo de trabajo y cerrar una hora cómoda."
                    : "For small repairs, the fastest way is to send photos, confirm the type of work and book a convenient time."}
                </p>
              </div>

              <div className="grid gap-5">
                {steps.map((step, index) => (
                  <div
                    key={isEs ? step.esTitle : step.enTitle}
                    className="rounded-3xl border border-white/10 bg-neutral-950/70 p-6"
                  >
                    <div className="mb-4 flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-400 font-bold text-neutral-950">
                        {index + 1}
                      </div>
                      <h3 className="text-xl font-semibold">
                        {isEs ? step.esTitle : step.enTitle}
                      </h3>
                    </div>
                    <p className="text-neutral-300">
                      {isEs ? step.esText : step.enText}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-amber-300">
              {isEs ? "Zonas" : "Areas"}
            </p>
            <h2 className="text-3xl font-bold md:text-4xl">
              {isEs
                ? "Pequeñas reparaciones en Valencia y alrededores"
                : "Small repairs in Valencia and nearby areas"}
            </h2>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {areas.map((area) => (
              <div
                key={area}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.05] p-4"
              >
                <MapPin className="h-5 w-5 text-amber-300" />
                <span>{area}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/[0.03]">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
            <div className="mb-10 max-w-3xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-amber-300">
                {isEs ? "Ideal para" : "Ideal for"}
              </p>
              <h2 className="text-3xl font-bold md:text-4xl">
                {isEs
                  ? "Propietarios, inquilinos y pisos turísticos"
                  : "Owners, tenants and short-term rentals"}
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {[
                {
                  icon: Home,
                  title: isEs ? "Viviendas particulares" : "Private homes",
                  text: isEs
                    ? "Para arreglar detalles molestos del día a día sin hacer una reforma grande."
                    : "To fix annoying everyday details without doing a big renovation.",
                },
                {
                  icon: KeyRound,
                  title: isEs ? "Pisos de alquiler" : "Rental flats",
                  text: isEs
                    ? "Antes de entregar, alquilar, vender o recibir nuevos inquilinos."
                    : "Before handover, renting, selling or receiving new tenants.",
                },
                {
                  icon: BadgeCheck,
                  title: isEs ? "Airbnb y apartamentos" : "Airbnb and apartments",
                  text: isEs
                    ? "Puesta a punto rápida para que el alojamiento se vea limpio y cuidado."
                    : "Quick preparation so the property looks clean and well maintained.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-white/10 bg-neutral-950/70 p-6"
                >
                  <item.icon className="mb-5 h-8 w-8 text-amber-300" />
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 text-neutral-300">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-amber-300">
              FAQ
            </p>
            <h2 className="text-3xl font-bold md:text-4xl">
              {isEs ? "Preguntas frecuentes" : "Frequently asked questions"}
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {faqs.map((faq) => (
              <div
                key={isEs ? faq.esQ : faq.enQ}
                className="rounded-3xl border border-white/10 bg-white/[0.05] p-6"
              >
                <h3 className="text-lg font-semibold">
                  {isEs ? faq.esQ : faq.enQ}
                </h3>
                <p className="mt-3 text-neutral-300">
                  {isEs ? faq.esA : faq.enA}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/[0.03]">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
            <div className="mb-10 max-w-3xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-amber-300">
                {isEs ? "Servicios relacionados" : "Related services"}
              </p>
              <h2 className="text-3xl font-bold md:text-4xl">
                {isEs
                  ? "También puedo ayudarte con estos trabajos"
                  : "I can also help with these jobs"}
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {relatedLinks.map((link) => (
                <Link
                  key={link.href}
                  href={`/${locale}${link.href}`}
                  className="group flex items-center justify-between rounded-2xl border border-white/10 bg-neutral-950/70 p-5 transition hover:border-amber-300/50 hover:bg-white/[0.08]"
                >
                  <span className="font-medium">
                    {isEs ? link.es : link.en}
                  </span>
                  <ArrowRight className="h-5 w-5 text-amber-300 transition group-hover:translate-x-1" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="rounded-3xl border border-amber-400/30 bg-amber-400 p-8 text-neutral-950 md:p-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <div className="mb-4 flex items-center gap-2 font-semibold">
                  <Star className="h-5 w-5" />
                  THEVULGO Valencia
                </div>
                <h2 className="text-3xl font-bold md:text-4xl">
                  {isEs
                    ? "¿Necesitas reparar varias cosas pequeñas en casa?"
                    : "Need to fix several small things at home?"}
                </h2>
                <p className="mt-4 max-w-2xl text-neutral-800">
                  {isEs
                    ? "Envíame fotos por WhatsApp y te digo qué se puede hacer, cuánto puede costar y qué materiales serían necesarios."
                    : "Send me photos by WhatsApp and I will tell you what can be done, what it may cost and what materials may be needed."}
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <a
                  href={whatsappHref}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-neutral-950 px-6 py-4 font-semibold text-white transition hover:bg-neutral-800"
                >
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp
                </a>

                <Link
                  href={estimateHref}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-neutral-950/20 bg-white/50 px-6 py-4 font-semibold text-neutral-950 transition hover:bg-white"
                >
                  {isEs ? "Formulario" : "Estimate form"}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}