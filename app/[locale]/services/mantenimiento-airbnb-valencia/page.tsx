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
  Wrench,
} from "lucide-react";

type Props = {
  params: Promise<{ locale: string }>;
};

const baseUrl = "https://www.thevulgo.es";
const phone = "34610076942";
const slug = "services/mantenimiento-airbnb-valencia";

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
    slug: "reparacion-paredes-valencia",
    es: "Reparación de paredes",
    en: "Wall repair",
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
    ? "Mantenimiento Airbnb Valencia | Reparaciones para Apartamentos Turísticos | THEVULGO"
    : "Airbnb Maintenance Valencia | Repairs for Short-Term Rental Apartments | THEVULGO";

  const description = isEs
    ? "Mantenimiento para apartamentos Airbnb en Valencia. Pequeñas reparaciones, retoques de pintura, paredes, muebles, luces, grifos, accesorios y preparación entre huéspedes."
    : "Airbnb apartment maintenance in Valencia. Small repairs, paint touch-ups, walls, furniture, lights, taps, accessories and preparation between guests.";

  return {
    title,
    description,
    keywords: isEs
      ? [
          "mantenimiento airbnb valencia",
          "mantenimiento apartamentos turisticos valencia",
          "reparaciones airbnb valencia",
          "manitas airbnb valencia",
          "mantenimiento vivienda vacacional valencia",
          "reparaciones apartamento turistico valencia",
          "preparacion apartamento airbnb valencia",
          "handyman airbnb valencia",
        ]
      : [
          "airbnb maintenance valencia",
          "airbnb repairs valencia",
          "short term rental maintenance valencia",
          "holiday apartment maintenance valencia",
          "airbnb handyman valencia",
          "tourist apartment repairs valencia",
          "apartment maintenance valencia",
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

export default async function AirbnbMaintenanceValenciaPage({ params }: Props) {
  const { locale } = await params;
  const isEs = locale === "es";

  const pageUrl = `${baseUrl}/${locale}/${slug}`;
  const estimateHref = `/${locale}/estimate?category=repairs`;

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, necesito mantenimiento o pequeñas reparaciones para un apartamento Airbnb en Valencia. Puedo enviar fotos para pedir presupuesto."
      : "Hi, I need maintenance or small repairs for an Airbnb apartment in Valencia. I can send photos for an estimate."
  );

  const whatsappHref = `https://wa.me/${phone}?text=${whatsappText}`;

  const services = isEs
    ? [
        {
          title: "Reparaciones entre huéspedes",
          text: "Solución rápida de desperfectos antes del siguiente check-in.",
          icon: <CalendarCheck className="h-6 w-6" />,
        },
        {
          title: "Paredes y pintura",
          text: "Agujeros, golpes, manchas, retoques de pintura y preparación de paredes.",
          icon: <Paintbrush className="h-6 w-6" />,
        },
        {
          title: "Muebles y accesorios",
          text: "Ajuste de muebles, montaje, reparación de tiradores, bisagras, baldas y espejos.",
          icon: <Hammer className="h-6 w-6" />,
        },
        {
          title: "Luces y enchufes",
          text: "Cambio de lámparas, bombillas, interruptores, enchufes y pequeños ajustes eléctricos.",
          icon: <Lamp className="h-6 w-6" />,
        },
        {
          title: "Baño y cocina",
          text: "Cambio de alcachofa de ducha, accesorios, grifos simples y pequeños arreglos.",
          icon: <ShowerHead className="h-6 w-6" />,
        },
        {
          title: "Puertas y cerraduras",
          text: "Ajuste de puertas, manillas, bisagras, topes y pequeños problemas de uso diario.",
          icon: <DoorOpen className="h-6 w-6" />,
        },
      ]
    : [
        {
          title: "Repairs between guests",
          text: "Quick fixes before the next check-in.",
          icon: <CalendarCheck className="h-6 w-6" />,
        },
        {
          title: "Walls and paint",
          text: "Holes, dents, stains, paint touch-ups and wall preparation.",
          icon: <Paintbrush className="h-6 w-6" />,
        },
        {
          title: "Furniture and accessories",
          text: "Furniture adjustment, assembly, handles, hinges, shelves and mirrors.",
          icon: <Hammer className="h-6 w-6" />,
        },
        {
          title: "Lights and sockets",
          text: "Lamp replacement, bulbs, switches, sockets and small electrical adjustments.",
          icon: <Lamp className="h-6 w-6" />,
        },
        {
          title: "Bathroom and kitchen",
          text: "Shower head replacement, accessories, simple taps and small fixes.",
          icon: <ShowerHead className="h-6 w-6" />,
        },
        {
          title: "Doors and locks",
          text: "Door adjustment, handles, hinges, stops and small daily-use problems.",
          icon: <DoorOpen className="h-6 w-6" />,
        },
      ];

  const prices = isEs
    ? [
        ["Pequeña reparación Airbnb", "desde 35 €"],
        ["Visita / revisión", "desde 49 €"],
        ["Retoques de pintura", "desde 49 €"],
        ["Reparación de pared", "desde 35 €"],
        ["Montaje o ajuste de mueble", "desde 45 €"],
        ["Lámpara / enchufe simple", "desde 35 €"],
      ]
    : [
        ["Small Airbnb repair", "from €35"],
        ["Visit / inspection", "from €49"],
        ["Paint touch-ups", "from €49"],
        ["Wall repair", "from €35"],
        ["Furniture assembly or adjustment", "from €45"],
        ["Simple lamp / socket", "from €35"],
      ];

  const process = isEs
    ? [
        ["1. Fotos", "Envía fotos o vídeo del problema por WhatsApp."],
        ["2. Prioridad", "Revisamos si hace falta hacerlo antes del próximo check-in."],
        ["3. Presupuesto", "Confirmamos precio de trabajo y materiales."],
        ["4. Reparación", "Realizamos el arreglo de forma limpia y práctica."],
        ["5. Confirmación", "Puedes recibir fotos del trabajo terminado."],
      ]
    : [
        ["1. Photos", "Send photos or a video of the issue by WhatsApp."],
        ["2. Priority", "We check if it must be done before the next check-in."],
        ["3. Estimate", "We confirm labour and material price."],
        ["4. Repair", "We complete the fix in a clean and practical way."],
        ["5. Confirmation", "You can receive photos of the finished work."],
      ];

  const problems = isEs
    ? [
        "Agujeros en paredes",
        "Marcas de maletas o muebles",
        "Manillas sueltas",
        "Puertas que rozan",
        "Estanterías flojas",
        "Lámparas dañadas",
        "Enchufes o interruptores viejos",
        "Accesorios de baño sueltos",
        "Ducha o grifo con problemas",
        "Muebles que necesitan ajuste",
        "Retoques antes del check-in",
        "Preparación después del check-out",
      ]
    : [
        "Wall holes",
        "Marks from luggage or furniture",
        "Loose handles",
        "Doors rubbing",
        "Loose shelves",
        "Damaged lamps",
        "Old sockets or switches",
        "Loose bathroom accessories",
        "Shower or tap issues",
        "Furniture that needs adjustment",
        "Touch-ups before check-in",
        "Preparation after check-out",
      ];

  const faqs = isEs
    ? [
        {
          q: "¿Hacéis mantenimiento para apartamentos Airbnb en Valencia?",
          a: "Sí. Realizamos pequeñas reparaciones, ajustes, paredes, pintura, muebles, luces, accesorios y preparación práctica para apartamentos turísticos.",
        },
        {
          q: "¿Podéis trabajar entre check-out y check-in?",
          a: "Sí, si hay disponibilidad. Lo mejor es avisar lo antes posible y enviar fotos para preparar materiales y herramientas.",
        },
        {
          q: "¿Podéis enviar fotos del trabajo terminado?",
          a: "Sí. Para propietarios o gestores que no están en el piso, podemos enviar fotos o vídeo del resultado.",
        },
        {
          q: "¿Reparáis paredes dañadas por huéspedes?",
          a: "Sí. Tapamos agujeros, golpes, roces, marcas de muebles y preparamos la pared para pintar o retocar.",
        },
        {
          q: "¿También montáis muebles o accesorios?",
          a: "Sí. Podemos montar baldas, espejos, muebles pequeños, accesorios de baño, cortinas, lámparas y otros elementos.",
        },
        {
          q: "¿El precio incluye materiales?",
          a: "Normalmente el precio de trabajo y materiales se confirma por separado, según lo que haga falta comprar.",
        },
        {
          q: "¿Trabajáis con propietarios y gestores de apartamentos?",
          a: "Sí. Podemos ayudar tanto a propietarios como a gestores de apartamentos turísticos, alquileres temporales y viviendas preparadas para huéspedes.",
        },
        {
          q: "¿Cómo pido presupuesto?",
          a: "Envía fotos por WhatsApp, indica la zona de Valencia, el problema y cuándo entra el próximo huésped.",
        },
      ]
    : [
        {
          q: "Do you provide Airbnb apartment maintenance in Valencia?",
          a: "Yes. We handle small repairs, adjustments, walls, paint, furniture, lights, accessories and practical preparation for tourist apartments.",
        },
        {
          q: "Can you work between check-out and check-in?",
          a: "Yes, depending on availability. It is best to contact us early and send photos so tools and materials can be prepared.",
        },
        {
          q: "Can you send photos of the finished work?",
          a: "Yes. For owners or managers who are not at the apartment, we can send photos or video of the result.",
        },
        {
          q: "Do you repair walls damaged by guests?",
          a: "Yes. We fill holes, fix dents, scuffs, furniture marks and prepare the wall for paint or touch-up.",
        },
        {
          q: "Do you also assemble furniture or accessories?",
          a: "Yes. We can install shelves, mirrors, small furniture, bathroom accessories, curtains, lamps and other items.",
        },
        {
          q: "Are materials included?",
          a: "Usually labour and materials are confirmed separately depending on what must be purchased.",
        },
        {
          q: "Do you work with owners and apartment managers?",
          a: "Yes. We can help owners and managers of tourist apartments, temporary rentals and guest-ready homes.",
        },
        {
          q: "How do I request an estimate?",
          a: "Send photos by WhatsApp, mention the area of Valencia, the issue and when the next guest arrives.",
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
          ? "Mantenimiento para apartamentos Airbnb en Valencia"
          : "Airbnb apartment maintenance in Valencia",
        serviceType: isEs
          ? "Mantenimiento, pequeñas reparaciones y preparación de apartamentos turísticos"
          : "Maintenance, small repairs and preparation of short-term rental apartments",
        provider: {
          "@id": `${baseUrl}/#localbusiness`,
        },
        areaServed: areas,
        url: pageUrl,
        description: isEs
          ? "Servicio de mantenimiento para Airbnb en Valencia: pequeñas reparaciones, paredes, pintura, muebles, luces, baño, cocina, puertas y preparación entre huéspedes."
          : "Airbnb maintenance service in Valencia: small repairs, walls, paint, furniture, lights, bathroom, kitchen, doors and preparation between guests.",
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
            name: isEs ? "Mantenimiento Airbnb" : "Airbnb maintenance",
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
                ? "Mantenimiento para apartamentos Airbnb en Valencia"
                : "Airbnb apartment maintenance in Valencia"}
            </h1>

            <p className="mt-6 max-w-4xl text-lg leading-8 text-neutral-700">
              {isEs
                ? "Servicio práctico para propietarios y gestores de apartamentos Airbnb en Valencia. Pequeñas reparaciones, paredes, pintura, muebles, luces, baño, cocina, puertas, accesorios y preparación rápida antes del siguiente huésped."
                : "Practical service for Airbnb owners and apartment managers in Valencia. Small repairs, walls, paint, furniture, lights, bathroom, kitchen, doors, accessories and fast preparation before the next guest."}
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
                  text: isEs
                    ? "Ideal para problemas antes del check-in."
                    : "Ideal for issues before check-in.",
                },
                {
                  icon: KeyRound,
                  title: isEs ? "Para gestores" : "For managers",
                  text: isEs
                    ? "Propietarios, gestores y pisos turísticos."
                    : "Owners, managers and tourist apartments.",
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
              {isEs ? "Servicios para Airbnb" : "Airbnb services"}
            </div>

            <h2 className="mt-4 text-3xl font-black sm:text-4xl">
              {isEs
                ? "Pequeñas reparaciones para apartamentos turísticos"
                : "Small repairs for short-term rental apartments"}
            </h2>

            <p className="mt-4 max-w-4xl leading-8 text-neutral-700">
              {isEs
                ? "En un Airbnb, un pequeño desperfecto puede afectar la experiencia del huésped y la valoración. Ayudamos con arreglos rápidos y prácticos para que el apartamento esté presentable, funcional y preparado para la siguiente reserva."
                : "In an Airbnb, a small issue can affect guest experience and reviews. We help with fast and practical repairs so the apartment is presentable, functional and ready for the next booking."}
            </p>
          </div>

          <Link
            href={`/${locale}/services/reparaciones-antes-entrega-piso-valencia`}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-neutral-300 bg-white px-5 py-3 text-sm font-bold shadow-sm transition hover:scale-105"
          >
            {isEs ? "Reparaciones antes de entregar piso" : "Repairs before handover"}
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
                  ? "Precio de mantenimiento Airbnb"
                  : "Airbnb maintenance pricing"}
              </h2>

              <p className="mt-5 text-lg leading-8 text-neutral-700">
                {isEs
                  ? "El precio depende del tipo de reparación, urgencia, materiales, número de tareas y si hay que trabajar antes de un check-in. Para estimar rápido, envía fotos o vídeo por WhatsApp."
                  : "The price depends on repair type, urgency, materials, number of tasks and whether the job must be completed before a check-in. For a fast estimate, send photos or video by WhatsApp."}
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
                  ? "Materiales como pintura, masilla, accesorios, enchufes, lámparas, tornillos o piezas pueden calcularse aparte."
                  : "Materials such as paint, filler, accessories, sockets, lamps, screws or parts may be calculated separately."}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-yellow-50 px-4 py-1 text-xs font-bold">
            <CalendarCheck className="h-4 w-4" />
            {isEs ? "Proceso de trabajo" : "How it works"}
          </div>

          <h2 className="mx-auto mt-4 max-w-5xl text-3xl font-black sm:text-4xl">
            {isEs
              ? "Cómo organizamos el mantenimiento de tu Airbnb"
              : "How we organise your Airbnb maintenance"}
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
    </main>
  );
}