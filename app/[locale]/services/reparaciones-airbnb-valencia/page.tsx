import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BedDouble,
  CalendarCheck,
  CheckCircle2,
  Clock3,
  DoorOpen,
  Euro,
  Hammer,
  Home,
  Hotel,
  KeyRound,
  Lamp,
  Layers,
  MapPin,
  MessageCircle,
  Paintbrush,
  Plug,
  ShieldCheck,
  ShowerHead,
  Sparkles,
  Star,
  TimerReset,
  Wrench,
  Drill,
  Sofa,
  ClipboardCheck,
  AlertTriangle,
} from "lucide-react";

type Props = {
  params: Promise<{ locale: string }>;
};

const baseUrl = "https://www.thevulgo.es";
const phone = "34610076942";
const slug = "services/reparaciones-airbnb-valencia";

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
  "Algiros",
  "Mislata",
  "Burjassot",
  "Paterna",
  "Torrent",
  "Alboraya",
  "Manises",
];

const clusterLinks = [
  {
    slug: "mantenimiento-airbnb-valencia",
    es: "Mantenimiento para Airbnb",
    en: "Airbnb maintenance",
  },
  {
    slug: "reparacion-piso-alquiler-valencia",
    es: "Reparación de piso de alquiler",
    en: "Rental apartment repair",
  },
  {
    slug: "reparaciones-antes-entrega-piso-valencia",
    es: "Reparaciones antes de entregar un piso",
    en: "Repairs before apartment handover",
  },
  {
    slug: "reparacion-agujeros-pared-valencia",
    es: "Reparación de agujeros en paredes",
    en: "Wall hole repair",
  },
  {
    slug: "retoques-pintura-valencia",
    es: "Retoques de pintura",
    en: "Paint touch-ups",
  },
  {
    slug: "pequenas-reparaciones-valencia",
    es: "Pequeñas reparaciones",
    en: "Small repairs",
  },
];

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";

  const title = isEs
    ? "Reparaciones Airbnb Valencia | Reparaciones Rápidas para Apartamentos Turísticos | THEVULGO"
    : "Airbnb Repairs Valencia | Fast Repairs for Short-Term Rental Apartments | THEVULGO";

  const description = isEs
    ? "Reparaciones rápidas para Airbnb en Valencia. Paredes, pintura, muebles, luces, enchufes, baño, cocina, puertas y pequeños arreglos antes del próximo huésped."
    : "Fast Airbnb repairs in Valencia. Walls, paint, furniture, lights, sockets, bathroom, kitchen, doors and small fixes before the next guest.";

  return {
    title,
    description,
    keywords: isEs
      ? [
          "reparaciones airbnb valencia",
          "reparaciones rapidas airbnb valencia",
          "arreglos airbnb valencia",
          "manitas airbnb valencia",
          "reparaciones apartamento turistico valencia",
          "mantenimiento airbnb valencia",
          "reparacion urgente airbnb valencia",
          "reparaciones antes check in valencia",
          "reparaciones vivienda vacacional valencia",
        ]
      : [
          "airbnb repairs valencia",
          "fast airbnb repairs valencia",
          "airbnb handyman valencia",
          "short term rental repairs valencia",
          "tourist apartment repairs valencia",
          "urgent airbnb repairs valencia",
          "repairs before check in valencia",
          "holiday apartment repairs valencia",
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

export default async function AirbnbRepairsValenciaPage({ params }: Props) {
  const { locale } = await params;
  const isEs = locale === "es";

  const pageUrl = `${baseUrl}/${locale}/${slug}`;
  const estimateHref = `/${locale}/estimate?category=repairs`;

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, necesito reparaciones rápidas para un Airbnb en Valencia. Puedo enviar fotos o vídeo para pedir presupuesto."
      : "Hi, I need fast repairs for an Airbnb in Valencia. I can send photos or video for an estimate."
  );

  const whatsappHref = `https://wa.me/${phone}?text=${whatsappText}`;

  const services = isEs
    ? [
        {
          title: "Reparaciones antes del check-in",
          text: "Arreglos rápidos cuando hay poco tiempo entre la salida de un huésped y la llegada del siguiente.",
          icon: <TimerReset className="h-6 w-6" />,
        },
        {
          title: "Paredes dañadas",
          text: "Agujeros, roces, golpes, marcas de maletas, manchas y pequeñas reparaciones de pared.",
          icon: <Layers className="h-6 w-6" />,
        },
        {
          title: "Retoques de pintura",
          text: "Retoques visibles en zonas dañadas para que el apartamento se vea más cuidado.",
          icon: <Paintbrush className="h-6 w-6" />,
        },
        {
          title: "Muebles rotos o flojos",
          text: "Ajuste de camas, sillas, mesas, armarios, tiradores, bisagras, cajones y baldas.",
          icon: <Sofa className="h-6 w-6" />,
        },
        {
          title: "Luces, enchufes y detalles",
          text: "Cambio de bombillas, lámparas, interruptores, enchufes y pequeños elementos eléctricos.",
          icon: <Plug className="h-6 w-6" />,
        },
        {
          title: "Baño y cocina",
          text: "Ducha, grifo, accesorios, soportes, toalleros, portarrollos y pequeños arreglos funcionales.",
          icon: <ShowerHead className="h-6 w-6" />,
        },
      ]
    : [
        {
          title: "Repairs before check-in",
          text: "Fast fixes when there is little time between one guest leaving and the next guest arriving.",
          icon: <TimerReset className="h-6 w-6" />,
        },
        {
          title: "Damaged walls",
          text: "Holes, scuffs, dents, luggage marks, stains and small wall repairs.",
          icon: <Layers className="h-6 w-6" />,
        },
        {
          title: "Paint touch-ups",
          text: "Visible touch-ups in damaged areas so the apartment looks better maintained.",
          icon: <Paintbrush className="h-6 w-6" />,
        },
        {
          title: "Broken or loose furniture",
          text: "Adjustment of beds, chairs, tables, wardrobes, handles, hinges, drawers and shelves.",
          icon: <Sofa className="h-6 w-6" />,
        },
        {
          title: "Lights, sockets and details",
          text: "Bulbs, lamps, switches, sockets and small electrical elements.",
          icon: <Plug className="h-6 w-6" />,
        },
        {
          title: "Bathroom and kitchen",
          text: "Shower, tap, accessories, holders, towel rails, toilet roll holders and small functional repairs.",
          icon: <ShowerHead className="h-6 w-6" />,
        },
      ];

  const prices = isEs
    ? [
        ["Reparación rápida Airbnb", "desde 35 €"],
        ["Visita / revisión", "desde 49 €"],
        ["Paredes y agujeros", "desde 35 €"],
        ["Retoques de pintura", "desde 49 €"],
        ["Mueble / bisagra / tirador", "desde 35 €"],
        ["Lámpara / enchufe simple", "desde 35 €"],
      ]
    : [
        ["Fast Airbnb repair", "from €35"],
        ["Visit / inspection", "from €49"],
        ["Walls and holes", "from €35"],
        ["Paint touch-ups", "from €49"],
        ["Furniture / hinge / handle", "from €35"],
        ["Simple lamp / socket", "from €35"],
      ];

  const process = isEs
    ? [
        ["1. Envía fotos", "Manda fotos o vídeo del desperfecto por WhatsApp."],
        ["2. Indica urgencia", "Dinos si hay check-in hoy, mañana o esta semana."],
        ["3. Revisamos solución", "Valoramos si se puede reparar rápido o si necesita material especial."],
        ["4. Precio claro", "Confirmamos trabajo, materiales y disponibilidad."],
        ["5. Reparación", "Realizamos el arreglo y podemos enviar fotos finales."],
      ]
    : [
        ["1. Send photos", "Send photos or video of the damage by WhatsApp."],
        ["2. Mention urgency", "Tell us if check-in is today, tomorrow or this week."],
        ["3. Check solution", "We assess if it can be fixed quickly or needs special material."],
        ["4. Clear price", "We confirm labour, materials and availability."],
        ["5. Repair", "We complete the fix and can send final photos."],
      ];

  const problems = isEs
    ? [
        "Agujeros en paredes después de huéspedes",
        "Manchas o roces visibles",
        "Golpes de maletas en paredes",
        "Tiradores sueltos",
        "Bisagras dañadas",
        "Cajones que no cierran bien",
        "Sillas o mesas inestables",
        "Luces que no funcionan",
        "Enchufes o interruptores viejos",
        "Accesorios de baño flojos",
        "Puertas que rozan",
        "Preparación rápida antes del check-in",
      ]
    : [
        "Wall holes after guests",
        "Visible stains or scuffs",
        "Luggage dents on walls",
        "Loose handles",
        "Damaged hinges",
        "Drawers that do not close properly",
        "Unstable chairs or tables",
        "Lights not working",
        "Old sockets or switches",
        "Loose bathroom accessories",
        "Doors rubbing",
        "Fast preparation before check-in",
      ];

  const faqs = isEs
    ? [
        {
          q: "¿Hacéis reparaciones rápidas para Airbnb en Valencia?",
          a: "Sí. Ayudamos con pequeñas reparaciones en apartamentos Airbnb, turísticos y alquileres temporales en Valencia.",
        },
        {
          q: "¿Podéis reparar antes del próximo check-in?",
          a: "Depende de la disponibilidad y del tipo de daño. Lo mejor es enviar fotos, ubicación y hora del próximo check-in.",
        },
        {
          q: "¿Qué tipo de reparaciones hacéis?",
          a: "Paredes, pintura, muebles, tiradores, bisagras, luces, enchufes, accesorios de baño, puertas y pequeños arreglos funcionales.",
        },
        {
          q: "¿Podéis enviar fotos del resultado?",
          a: "Sí. Si eres propietario o gestor y no estás en el piso, podemos enviar fotos o vídeo después del trabajo.",
        },
        {
          q: "¿Trabajáis con gestores de apartamentos turísticos?",
          a: "Sí. Podemos ayudar a propietarios, gestores de Airbnb, apartamentos turísticos y viviendas de alquiler temporal.",
        },
        {
          q: "¿El precio incluye materiales?",
          a: "Normalmente el trabajo y los materiales se confirman por separado según lo que haya que comprar.",
        },
        {
          q: "¿Reparáis paredes dañadas por huéspedes?",
          a: "Sí. Tapamos agujeros, reparamos golpes, roces, marcas y podemos preparar o retocar pintura.",
        },
        {
          q: "¿Cómo pido presupuesto rápido?",
          a: "Envía fotos por WhatsApp, indica dirección aproximada, tipo de reparación y cuándo llega el próximo huésped.",
        },
      ]
    : [
        {
          q: "Do you provide fast Airbnb repairs in Valencia?",
          a: "Yes. We help with small repairs in Airbnb apartments, tourist apartments and temporary rentals in Valencia.",
        },
        {
          q: "Can you repair before the next check-in?",
          a: "It depends on availability and the type of damage. It is best to send photos, location and the next check-in time.",
        },
        {
          q: "What type of repairs do you do?",
          a: "Walls, paint, furniture, handles, hinges, lights, sockets, bathroom accessories, doors and small functional fixes.",
        },
        {
          q: "Can you send photos of the result?",
          a: "Yes. If you are an owner or manager and are not at the apartment, we can send photos or video after the work.",
        },
        {
          q: "Do you work with short-term rental managers?",
          a: "Yes. We can help owners, Airbnb managers, tourist apartments and temporary rental properties.",
        },
        {
          q: "Are materials included?",
          a: "Usually labour and materials are confirmed separately depending on what needs to be purchased.",
        },
        {
          q: "Do you repair walls damaged by guests?",
          a: "Yes. We fill holes, repair dents, scuffs, marks and can prepare or touch up paint.",
        },
        {
          q: "How do I request a quick estimate?",
          a: "Send photos by WhatsApp, mention the approximate address, repair type and when the next guest arrives.",
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
        name: isEs
          ? "Reparaciones rápidas para Airbnb en Valencia"
          : "Fast Airbnb repairs in Valencia",
        serviceType: isEs
          ? "Reparaciones rápidas para apartamentos Airbnb y turísticos"
          : "Fast repairs for Airbnb and short-term rental apartments",
        provider: {
          "@id": `${baseUrl}/#localbusiness`,
        },
        areaServed: areas,
        url: pageUrl,
        description: isEs
          ? "Reparaciones rápidas para Airbnb en Valencia: paredes, pintura, muebles, luces, enchufes, baño, cocina, puertas y pequeños arreglos antes del próximo huésped."
          : "Fast Airbnb repairs in Valencia: walls, paint, furniture, lights, sockets, bathroom, kitchen, doors and small fixes before the next guest.",
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
            name: isEs ? "Servicios" : "Services",
            item: `${baseUrl}/${locale}/services`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: isEs ? "Reparaciones Airbnb" : "Airbnb repairs",
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
              THEVULGO • Valencia
            </div>

            <h1 className="text-4xl font-black tracking-tight sm:text-6xl">
              {isEs
                ? "Reparaciones rápidas para Airbnb en Valencia"
                : "Fast Airbnb repairs in Valencia"}
            </h1>

            <p className="mt-6 max-w-4xl text-lg leading-8 text-neutral-700">
              {isEs
                ? "Reparaciones rápidas para apartamentos Airbnb, turísticos y alquileres temporales en Valencia. Arreglamos paredes, pintura, muebles, luces, enchufes, baño, cocina, puertas y pequeños desperfectos antes del próximo huésped."
                : "Fast repairs for Airbnb apartments, tourist apartments and temporary rentals in Valencia. We fix walls, paint, furniture, lights, sockets, bathroom, kitchen, doors and small issues before the next guest."}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappHref}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-yellow-400 px-6 py-4 font-bold text-black shadow-lg transition hover:scale-105"
              >
                <MessageCircle className="h-5 w-5" />
                {isEs
                  ? "Pedir reparación por WhatsApp"
                  : "Request repair by WhatsApp"}
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
                  icon: TimerReset,
                  title: isEs ? "Rápido antes del check-in" : "Fast before check-in",
                  text: isEs
                    ? "Para arreglos urgentes entre huéspedes."
                    : "For urgent fixes between guests.",
                },
                {
                  icon: Hotel,
                  title: isEs ? "Airbnb y apartamentos" : "Airbnb apartments",
                  text: isEs
                    ? "Para propietarios y gestores."
                    : "For owners and managers.",
                },
                {
                  icon: ClipboardCheck,
                  title: isEs ? "Fotos del resultado" : "Result photos",
                  text: isEs
                    ? "Podemos enviar confirmación del trabajo."
                    : "We can send confirmation of the work.",
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
              <AlertTriangle className="h-4 w-4" />
              {isEs ? "Reparaciones rápidas" : "Fast repairs"}
            </div>

            <h2 className="mt-4 text-3xl font-black sm:text-4xl">
              {isEs
                ? "Cuando el apartamento tiene que estar listo pronto"
                : "When the apartment must be ready soon"}
            </h2>

            <p className="mt-4 max-w-4xl leading-8 text-neutral-700">
              {isEs
                ? "En Airbnb no siempre hay tiempo para esperar. Si un huésped deja una pared dañada, una manilla suelta, una lámpara rota o un mueble flojo, intentamos buscar una solución práctica para que el apartamento esté presentable y funcional antes de la siguiente entrada."
                : "With Airbnb there is not always time to wait. If a guest leaves a damaged wall, loose handle, broken lamp or unstable furniture, we try to find a practical solution so the apartment is presentable and functional before the next arrival."}
            </p>
          </div>

          <Link
            href={`/${locale}/services/mantenimiento-airbnb-valencia`}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-neutral-300 bg-white px-5 py-3 text-sm font-bold shadow-sm transition hover:scale-105"
          >
            {isEs ? "Ver mantenimiento Airbnb" : "View Airbnb maintenance"}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-yellow-300 bg-white p-6 shadow-md transition hover:shadow-xl"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-400 text-black shadow-md">
                {item.icon}
              </div>

              <h3 className="text-xl font-black">{item.title}</h3>

              <p className="mt-3 leading-7 text-neutral-700">{item.text}</p>
            </div>
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
                  ? "Precio de reparaciones rápidas para Airbnb"
                  : "Fast Airbnb repair pricing"}
              </h2>

              <p className="mt-5 text-lg leading-8 text-neutral-700">
                {isEs
                  ? "El precio depende del tipo de reparación, urgencia, número de tareas, materiales y tiempo disponible antes del check-in. Para estimar rápido, envía fotos o vídeo del problema."
                  : "The price depends on the repair type, urgency, number of tasks, materials and time available before check-in. For a quick estimate, send photos or video of the issue."}
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
                    <span className="font-black">{price}</span>
                  </div>
                ))}
              </div>

              <p className="mt-5 text-sm leading-6 text-neutral-600">
                {isEs
                  ? "Materiales como pintura, masilla, enchufes, accesorios, lámparas, tornillos, tacos o piezas pueden calcularse aparte."
                  : "Materials such as paint, filler, sockets, accessories, lamps, screws, plugs or parts may be calculated separately."}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-yellow-50 px-4 py-1 text-xs font-bold">
            <CalendarCheck className="h-4 w-4" />
            {isEs ? "Proceso rápido" : "Fast process"}
          </div>

          <h2 className="mx-auto mt-4 max-w-5xl text-3xl font-black sm:text-4xl">
            {isEs
              ? "Cómo gestionamos una reparación rápida para Airbnb"
              : "How we handle a fast Airbnb repair"}
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

      <section className="bg-black text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-neutral-900 px-4 py-1 text-xs font-bold text-yellow-400">
                <Star className="h-4 w-4" />
                {isEs ? "Menos problemas con huéspedes" : "Fewer guest issues"}
              </div>

              <h2 className="mt-4 text-3xl font-black sm:text-4xl">
                {isEs
                  ? "Un pequeño desperfecto puede afectar una reseña"
                  : "A small issue can affect a review"}
              </h2>

              <p className="mt-5 text-lg leading-8 text-neutral-300">
                {isEs
                  ? "En apartamentos turísticos, los detalles importan. Una puerta que roza, una lámpara rota, una pared con agujeros o un mueble inestable pueden crear mala impresión. Una reparación rápida ayuda a mantener el apartamento listo para recibir huéspedes."
                  : "In short-term rentals, details matter. A rubbing door, broken lamp, wall holes or unstable furniture can create a bad impression. A fast repair helps keep the apartment ready for guests."}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                [BedDouble, isEs ? "Antes del huésped" : "Before the guest"],
                [ShieldCheck, isEs ? "Mejor presentación" : "Better presentation"],
                [Hammer, isEs ? "Solución práctica" : "Practical solution"],
                [KeyRound, isEs ? "Para gestores" : "For managers"],
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
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-yellow-50 px-4 py-1 text-xs font-bold">
              <Wrench className="h-4 w-4" />
              {isEs ? "Problemas comunes" : "Common problems"}
            </div>

            <h2 className="mt-4 text-3xl font-black sm:text-4xl">
              {isEs
                ? "Arreglos habituales en apartamentos Airbnb"
                : "Common fixes in Airbnb apartments"}
            </h2>

            <p className="mt-5 text-lg leading-8 text-neutral-700">
              {isEs
                ? "Después de cada estancia pueden aparecer pequeños daños. Muchos no requieren una reforma completa, pero sí una reparación rápida para que el piso se vea limpio, cuidado y funcional."
                : "After each stay, small damage may appear. Many issues do not need a full renovation, but they do need a quick repair so the apartment looks clean, maintained and functional."}
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {problems.map((item) => (
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
      </section>

      <section className="border-y border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-white px-4 py-1 text-xs font-bold">
                <Sparkles className="h-4 w-4" />
                SEO • Airbnb repairs Valencia
              </div>

              <h2 className="mt-4 text-3xl font-black sm:text-4xl">
                {isEs
                  ? "Reparaciones Airbnb en Valencia"
                  : "Airbnb repairs in Valencia"}
              </h2>

              <div className="mt-6 space-y-5 text-lg leading-8 text-neutral-700">
                {isEs ? (
                  <>
                    <p>
                      Si necesitas <strong>reparaciones Airbnb en Valencia</strong>,
                      THEVULGO puede ayudarte con arreglos rápidos para
                      apartamentos turísticos, alquileres temporales y viviendas
                      preparadas para huéspedes.
                    </p>

                    <p>
                      Este servicio está pensado para situaciones donde hay que
                      actuar rápido: una pared dañada después del check-out, una
                      manilla suelta, una lámpara que no funciona, un mueble
                      inestable, un accesorio de baño roto o un detalle visible
                      que puede afectar la experiencia del próximo huésped.
                    </p>

                    <p>
                      Trabajamos con pequeñas reparaciones de pared, pintura,
                      muebles, luces, enchufes, accesorios de baño, puertas,
                      cocina y detalles generales del apartamento. Para valorar
                      el trabajo, lo mejor es enviar fotos o vídeo por WhatsApp,
                      indicar la zona de Valencia y decir cuándo llega el
                      siguiente huésped.
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      If you need <strong>Airbnb repairs in Valencia</strong>,
                      THEVULGO can help with fast fixes for tourist apartments,
                      temporary rentals and guest-ready homes.
                    </p>

                    <p>
                      This service is designed for situations where action is
                      needed quickly: a damaged wall after check-out, a loose
                      handle, a lamp not working, unstable furniture, a broken
                      bathroom accessory or a visible detail that can affect the
                      next guest experience.
                    </p>

                    <p>
                      We work with small wall repairs, paint, furniture, lights,
                      sockets, bathroom accessories, doors, kitchen and general
                      apartment details. To assess the job, it is best to send
                      photos or video by WhatsApp, mention the area of Valencia
                      and say when the next guest arrives.
                    </p>
                  </>
                )}
              </div>
            </div>

            <div className="rounded-3xl border border-yellow-300 bg-yellow-50 p-8 shadow-xl">
              <h3 className="text-2xl font-black">
                {isEs
                  ? "Para presupuesto rápido"
                  : "For a quick estimate"}
              </h3>

              <div className="mt-6 space-y-4">
                {(isEs
                  ? [
                      "Envía fotos claras del problema",
                      "Manda vídeo si el daño se mueve o falla",
                      "Indica si hay check-in próximo",
                      "Explica si tienes materiales o piezas",
                      "Manda la zona de Valencia",
                      "Di si necesitas fotos finales del trabajo",
                    ]
                  : [
                      "Send clear photos of the problem",
                      "Send video if the issue moves or fails",
                      "Mention if there is an upcoming check-in",
                      "Explain if you have materials or parts",
                      "Send the area of Valencia",
                      "Say if you need final photos of the work",
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
        </div>
      </section>

      <section className="border-y border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-yellow-50 px-4 py-1 text-xs font-bold">
              <ArrowRight className="h-4 w-4 text-yellow-500" />
              {isEs ? "Servicios relacionados" : "Related services"}
            </div>

            <h2 className="mx-auto mt-4 max-w-5xl text-3xl font-black sm:text-4xl">
              {isEs
                ? "Más servicios para Airbnb, alquileres y reparaciones"
                : "More services for Airbnb, rentals and repairs"}
            </h2>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {clusterLinks.map((item) => (
              <Link
                key={item.slug}
                href={`/${locale}/services/${item.slug}`}
                className="group flex min-h-28 flex-col justify-between rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm transition hover:border-yellow-400 hover:shadow-md"
              >
                <span className="text-sm font-black">
                  {isEs ? item.es : item.en}
                </span>

                <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-neutral-600">
                  {isEs ? "Ver página" : "View page"}
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1 group-hover:text-yellow-500" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-white px-4 py-1 text-xs font-bold">
              <MapPin className="h-4 w-4 text-yellow-500" />
              {isEs ? "Zonas de servicio" : "Service areas"}
            </div>

            <h2 className="mt-4 text-3xl font-black sm:text-4xl">
              {isEs
                ? "Reparaciones Airbnb en Valencia y alrededores"
                : "Airbnb repairs in Valencia and nearby areas"}
            </h2>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
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

      <section className="border-y border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-yellow-50 px-4 py-1 text-xs font-bold">
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
                  ? "¿Necesitas una reparación rápida para tu Airbnb?"
                  : "Need a fast repair for your Airbnb?"}
              </h2>

              <p className="mt-4 max-w-3xl text-lg font-medium leading-8">
                {isEs
                  ? "Envía fotos por WhatsApp, indica cuándo llega el próximo huésped y te diremos qué se puede hacer, cuánto puede costar y qué materiales pueden hacer falta."
                  : "Send photos by WhatsApp, mention when the next guest arrives and we will tell you what can be done, how much it may cost and what materials may be needed."}
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