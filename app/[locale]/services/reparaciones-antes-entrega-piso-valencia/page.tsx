import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Brush,
  CalendarCheck,
  CheckCircle2,
  ClipboardCheck,
  Clock3,
  Euro,
  Hammer,
  Home,
  Hotel,
  KeyRound,
  Layers,
  MapPin,
  MessageCircle,
  Paintbrush,
  ShieldCheck,
  Sparkles,
  Star,
  Wrench,
  Zap,
  DoorOpen,
  Plug,
  Lightbulb,
  Ruler,
  Settings,
  ClipboardList,
} from "lucide-react";

type Props = {
  params: Promise<{ locale: string }>;
};

const baseUrl = "https://www.thevulgo.es";
const phone = "34610076942";
const slug = "services/reparaciones-antes-entrega-piso-valencia";

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
    slug: "reparacion-paredes-valencia",
    es: "Reparación de paredes",
    en: "Wall repair",
  },
  {
    slug: "retoques-pintura-valencia",
    es: "Retoques de pintura",
    en: "Paint touch-ups",
  },
  {
    slug: "reparacion-agujeros-pared-valencia",
    es: "Reparación de agujeros en paredes",
    en: "Wall hole repair",
  },
  {
    slug: "tapar-agujeros-pared-valencia",
    es: "Tapar agujeros en paredes",
    en: "Fill wall holes",
  },
  {
    slug: "fin-contrato-alquiler-valencia",
    es: "Reparaciones antes del fin del contrato",
    en: "Repairs before rental contract ends",
  },
  {
    slug: "devolver-piso-propietario-valencia",
    es: "Preparar piso para devolver al propietario",
    en: "Prepare apartment to return to owner",
  },
  {
    slug: "puesta-a-punto-piso-valencia",
    es: "Puesta a punto de pisos",
    en: "Apartment preparation",
  },
  {
    slug: "pequenas-reparaciones-valencia",
    es: "Pequeñas reparaciones del hogar",
    en: "Small home repairs",
  },
  {
    slug: "mantenimiento-airbnb-valencia",
    es: "Mantenimiento para Airbnb",
    en: "Airbnb maintenance",
  },
  {
    slug: "reparaciones-airbnb-valencia",
    es: "Reparaciones rápidas para Airbnb",
    en: "Fast Airbnb repairs",
  },
  {
    slug: "preparacion-vivienda-alquiler-valencia",
    es: "Preparación de vivienda para alquiler",
    en: "Rental property preparation",
  },
];

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";

  const title = isEs
    ? "Reparaciones Antes de Entregar un Piso en Valencia | THEVULGO"
    : "Repairs Before Handing Over an Apartment in Valencia | THEVULGO";

  const description = isEs
    ? "Reparaciones antes de entregar un piso en Valencia. Paredes, agujeros, retoques de pintura, pequeños desperfectos, puertas, enchufes, lámparas y puesta a punto antes de devolver las llaves."
    : "Repairs before handing over an apartment in Valencia. Walls, holes, paint touch-ups, small damage, doors, outlets, lights and preparation before returning the keys.";

  return {
    title,
    description,
    keywords: isEs
      ? [
          "reparaciones antes de entregar un piso valencia",
          "reparar piso antes de entregar llaves",
          "arreglos antes de entregar piso",
          "preparar piso entrega propietario",
          "reparaciones piso alquiler valencia",
          "retoques pintura valencia",
          "reparacion paredes valencia",
          "tapar agujeros pared valencia",
          "puesta a punto piso valencia",
          "pequeñas reparaciones valencia",
        ]
      : [
          "repairs before handing over apartment valencia",
          "move out repairs valencia",
          "apartment handover repairs valencia",
          "rental apartment repair valencia",
          "wall repair valencia",
          "paint touch ups valencia",
          "fill wall holes valencia",
          "small home repairs valencia",
          "rental property preparation valencia",
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

export default async function RepairsBeforeHandoverPage({ params }: Props) {
  const { locale } = await params;
  const isEs = locale === "es";

  const pageUrl = `${baseUrl}/${locale}/${slug}`;
  const estimateHref = `/${locale}/estimate?category=repairs`;

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, necesito hacer reparaciones antes de entregar un piso en Valencia. Puedo enviar fotos para pedir presupuesto."
      : "Hi, I need repairs before handing over an apartment in Valencia. I can send photos for an estimate."
  );

  const whatsappHref = `https://wa.me/${phone}?text=${whatsappText}`;

  const services = isEs
    ? [
        {
          title: "Paredes y agujeros",
          text: "Tapar agujeros de cuadros, estanterías, soportes de TV, golpes de muebles y marcas visibles.",
          icon: <Layers className="h-6 w-6" />,
        },
        {
          title: "Retoques de pintura",
          text: "Pequeños retoques en zonas dañadas, manchas, roces, esquinas y diferencias visibles de color.",
          icon: <Paintbrush className="h-6 w-6" />,
        },
        {
          title: "Puertas y manillas",
          text: "Ajuste de puertas que rozan, manillas flojas, bisagras, cierres y pequeños detalles de uso.",
          icon: <DoorOpen className="h-6 w-6" />,
        },
        {
          title: "Enchufes y lámparas",
          text: "Cambio básico de enchufes, interruptores, tapas, lámparas y apliques antes de la entrega.",
          icon: <Plug className="h-6 w-6" />,
        },
        {
          title: "Baño y cocina",
          text: "Silicona, accesorios sueltos, pequeños ajustes, soportes, espejos y detalles visibles.",
          icon: <Wrench className="h-6 w-6" />,
        },
        {
          title: "Puesta a punto",
          text: "Lista de trabajos acumulados para dejar el piso más presentable antes de la revisión.",
          icon: <ClipboardCheck className="h-6 w-6" />,
        },
      ]
    : [
        {
          title: "Walls and holes",
          text: "Filling holes from pictures, shelves, TV brackets, furniture impacts and visible marks.",
          icon: <Layers className="h-6 w-6" />,
        },
        {
          title: "Paint touch-ups",
          text: "Small touch-ups on damaged areas, stains, scratches, corners and visible colour differences.",
          icon: <Paintbrush className="h-6 w-6" />,
        },
        {
          title: "Doors and handles",
          text: "Adjustment of rubbing doors, loose handles, hinges, latches and small wear details.",
          icon: <DoorOpen className="h-6 w-6" />,
        },
        {
          title: "Outlets and lights",
          text: "Basic replacement of outlets, switches, covers, lights and wall lamps before handover.",
          icon: <Plug className="h-6 w-6" />,
        },
        {
          title: "Bathroom and kitchen",
          text: "Silicone, loose accessories, small adjustments, holders, mirrors and visible details.",
          icon: <Wrench className="h-6 w-6" />,
        },
        {
          title: "Apartment preparation",
          text: "A list of accumulated jobs to make the apartment more presentable before inspection.",
          icon: <ClipboardCheck className="h-6 w-6" />,
        },
      ];

  const prices = isEs
    ? [
        ["Tapar agujeros pequeños", "desde 35 €"],
        ["Reparación de pared", "desde 35 €"],
        ["Retoques de pintura", "desde 49 €"],
        ["Ajuste de puerta / manilla", "desde 35 €"],
        ["Cambio de enchufe / interruptor", "desde 35 €"],
        ["Puesta a punto del piso", "desde 79 €"],
        ["Visita / revisión", "desde 49 €"],
      ]
    : [
        ["Fill small holes", "from €35"],
        ["Wall repair", "from €35"],
        ["Paint touch-ups", "from €49"],
        ["Door / handle adjustment", "from €35"],
        ["Outlet / switch replacement", "from €35"],
        ["Apartment preparation", "from €79"],
        ["Visit / inspection", "from €49"],
      ];

  const process = isEs
    ? [
        ["1. Envía fotos", "Manda fotos de paredes, agujeros, pintura, puertas y desperfectos visibles."],
        ["2. Hacemos lista", "Organizamos los trabajos por prioridad antes de entregar el piso."],
        ["3. Calculamos precio", "Confirmamos trabajo, materiales y tiempo aproximado."],
        ["4. Confirmamos visita", "Elegimos día y hora antes de la entrega de llaves."],
        ["5. Dejamos listo", "Reparamos, ajustamos, retocamos y revisamos los detalles importantes."],
      ]
    : [
        ["1. Send photos", "Send photos of walls, holes, paint, doors and visible damage."],
        ["2. We make a list", "We organise the jobs by priority before apartment handover."],
        ["3. We estimate price", "We confirm labour, materials and approximate time."],
        ["4. Confirm visit", "We choose a day and time before key handover."],
        ["5. Ready for handover", "We repair, adjust, touch up and check the important details."],
      ];

  const handoverChecklist = isEs
    ? [
        "Agujeros de cuadros, TV o estanterías",
        "Marcas de muebles en paredes",
        "Pintura levantada o manchada",
        "Golpes en esquinas",
        "Manillas flojas",
        "Puertas que rozan o no cierran bien",
        "Enchufes o interruptores dañados",
        "Lámparas mal fijadas",
        "Accesorios de baño sueltos",
        "Silicona vieja o deteriorada",
        "Pequeños desperfectos visibles",
        "Detalles que pueden afectar la fianza",
      ]
    : [
        "Holes from pictures, TV or shelves",
        "Furniture marks on walls",
        "Peeling or stained paint",
        "Dented corners",
        "Loose handles",
        "Doors rubbing or not closing well",
        "Damaged outlets or switches",
        "Poorly fixed lights",
        "Loose bathroom accessories",
        "Old or damaged silicone",
        "Small visible damage",
        "Details that can affect the deposit",
      ];

  const faqs = isEs
    ? [
        {
          q: "¿Qué debo reparar antes de entregar un piso?",
          a: "Lo más importante suele ser reparar agujeros, paredes dañadas, marcas visibles, pintura deteriorada, manillas flojas, puertas que rozan, accesorios sueltos y pequeños desperfectos que pueden afectar la revisión.",
        },
        {
          q: "¿Tapáis agujeros de cuadros, estanterías o soporte de TV?",
          a: "Sí. Podemos tapar agujeros, aplicar masilla, lijar y dejar la zona preparada para retoque de pintura si hace falta.",
        },
        {
          q: "¿Hacéis pequeños retoques de pintura?",
          a: "Sí. Revisamos el color y el estado de la pared. Si no tienes pintura, podemos indicar qué material comprar o calcularlo aparte.",
        },
        {
          q: "¿Podéis hacer varios trabajos en una visita?",
          a: "Sí. Es recomendable enviar una lista completa con fotos para organizar la visita y aprovechar mejor el tiempo.",
        },
        {
          q: "¿Cuánto cuesta preparar un piso para entregar?",
          a: "Depende del número de desperfectos, materiales, tiempo y urgencia. Los trabajos pequeños suelen empezar desde 35–49 €.",
        },
        {
          q: "¿Trabajáis con propietarios, inquilinos y agencias?",
          a: "Sí. Podemos ayudar a inquilinos antes de entregar llaves, propietarios antes de alquilar y agencias que necesitan una puesta a punto rápida.",
        },
        {
          q: "¿También trabajáis con Airbnb?",
          a: "Sí. Hacemos mantenimiento y reparaciones rápidas para apartamentos Airbnb, cambios de huésped y preparación entre reservas.",
        },
        {
          q: "¿Cuánto tardan normalmente estas reparaciones?",
          a: "Depende del trabajo. Muchos arreglos pequeños se pueden hacer en una visita, pero pintura, secado o materiales especiales pueden necesitar más tiempo.",
        },
      ]
    : [
        {
          q: "What should I repair before handing over an apartment?",
          a: "The most important items are usually holes, damaged walls, visible marks, damaged paint, loose handles, rubbing doors, loose accessories and small defects that may affect inspection.",
        },
        {
          q: "Do you fill holes from pictures, shelves or TV brackets?",
          a: "Yes. We can fill holes, apply filler, sand the area and prepare it for paint touch-up if needed.",
        },
        {
          q: "Do you do small paint touch-ups?",
          a: "Yes. We check the colour and wall condition. If you do not have paint, we can advise what to buy or calculate materials separately.",
        },
        {
          q: "Can you do several jobs in one visit?",
          a: "Yes. It is best to send a full list with photos so the visit can be organised efficiently.",
        },
        {
          q: "How much does it cost to prepare an apartment for handover?",
          a: "It depends on the number of issues, materials, time and urgency. Small jobs usually start from €35–49.",
        },
        {
          q: "Do you work with owners, tenants and agencies?",
          a: "Yes. We can help tenants before handing over keys, owners before renting and agencies that need fast preparation.",
        },
        {
          q: "Do you also work with Airbnb?",
          a: "Yes. We provide fast maintenance and repairs for Airbnb apartments, guest changes and preparation between bookings.",
        },
        {
          q: "How long do these repairs usually take?",
          a: "It depends on the job. Many small repairs can be done in one visit, but paint, drying time or special materials may require more time.",
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
          ? "Reparaciones antes de entregar un piso en Valencia"
          : "Repairs before handing over an apartment in Valencia",
        serviceType: isEs
          ? "Reparaciones y puesta a punto antes de entregar vivienda"
          : "Apartment handover repairs and preparation",
        provider: {
          "@id": `${baseUrl}/#localbusiness`,
        },
        areaServed: areas,
        url: pageUrl,
        description: isEs
          ? "Servicio de reparaciones antes de entregar un piso en Valencia: paredes, agujeros, retoques de pintura, puertas, enchufes, lámparas, accesorios y pequeños desperfectos."
          : "Repair service before handing over an apartment in Valencia: walls, holes, paint touch-ups, doors, outlets, lights, accessories and small damage.",
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
            name: isEs
              ? "Reparaciones antes de entregar un piso"
              : "Repairs before handing over an apartment",
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
                ? "Reparaciones antes de entregar un piso en Valencia"
                : "Repairs before handing over an apartment in Valencia"}
            </h1>

            <p className="mt-6 max-w-4xl text-lg leading-8 text-neutral-700">
              {isEs
                ? "Servicio para dejar el piso más presentable antes de devolver las llaves: tapar agujeros, reparar paredes, hacer retoques de pintura, ajustar puertas, cambiar pequeños accesorios y preparar la vivienda para la revisión del propietario, agencia o nuevo inquilino."
                : "Service to make the apartment more presentable before returning the keys: filling holes, repairing walls, paint touch-ups, adjusting doors, replacing small accessories and preparing the property for owner, agency or new tenant inspection."}
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
                  title: isEs ? "Antes de entregar llaves" : "Before key handover",
                  text: isEs
                    ? "Ideal para últimos arreglos antes de la revisión."
                    : "Ideal for final repairs before inspection.",
                },
                {
                  icon: ShieldCheck,
                  title: isEs ? "Piso más presentable" : "More presentable apartment",
                  text: isEs
                    ? "Paredes, pintura y detalles visibles mejorados."
                    : "Walls, paint and visible details improved.",
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
              {isEs ? "Reparaciones antes de entrega" : "Repairs before handover"}
            </div>

            <h2 className="mt-4 text-3xl font-black sm:text-4xl">
              {isEs
                ? "Qué arreglos conviene hacer antes de entregar un piso"
                : "What repairs are useful before handing over an apartment"}
            </h2>

            <p className="mt-4 max-w-4xl leading-8 text-neutral-700">
              {isEs
                ? "Antes de entregar las llaves, lo más importante es revisar los desperfectos visibles: paredes con agujeros, pintura marcada, puertas que rozan, accesorios sueltos, enchufes dañados o pequeños detalles que pueden llamar la atención durante la inspección."
                : "Before handing over the keys, the most important thing is to review visible damage: walls with holes, marked paint, doors that rub, loose accessories, damaged outlets or small details that can stand out during inspection."}
            </p>
          </div>

          <Link
            href={`/${locale}/services/reparacion-piso-alquiler-valencia`}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-neutral-300 bg-white px-5 py-3 text-sm font-bold shadow-sm transition hover:scale-105"
          >
            {isEs ? "Reparación piso alquiler" : "Rental apartment repair"}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-yellow-300 bg-white p-6 shadow-md"
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
                  ? "Precio claro antes de reparar el piso"
                  : "Clear price before repairing the apartment"}
              </h2>

              <p className="mt-5 text-lg leading-8 text-neutral-700">
                {isEs
                  ? "Cada piso es diferente. El precio depende de cuántos desperfectos hay, si hay que pintar, si se necesitan materiales, el estado de las paredes y la urgencia antes de la entrega. Por eso recomendamos enviar fotos por WhatsApp."
                  : "Every apartment is different. The price depends on how many issues there are, whether painting is needed, whether materials are required, the wall condition and the urgency before handover. That is why we recommend sending photos by WhatsApp."}
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
                  ? "Materiales no siempre incluidos. Pintura, masilla, lija, silicona o recambios se pueden calcular aparte después de ver fotos."
                  : "Materials are not always included. Paint, filler, sandpaper, silicone or replacement parts can be calculated separately after seeing photos."}
              </p>
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
            {isEs
              ? "De fotos por WhatsApp a piso preparado para la entrega"
              : "From WhatsApp photos to apartment ready for handover"}
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
                {isEs ? "Inspección del piso" : "Apartment inspection"}
              </div>

              <h2 className="mt-4 text-3xl font-black sm:text-4xl">
                {isEs
                  ? "Detalles pequeños que pueden crear problemas al entregar"
                  : "Small details that can create problems at handover"}
              </h2>

              <p className="mt-5 text-lg leading-8 text-neutral-300">
                {isEs
                  ? "Muchas veces el problema no es una gran reforma, sino detalles visibles: agujeros, manchas, roces, puertas mal ajustadas o accesorios sueltos. Arreglarlos antes de la revisión puede mejorar mucho la impresión general del piso."
                  : "Many times the problem is not a big renovation, but visible details: holes, stains, scratches, poorly adjusted doors or loose accessories. Fixing them before inspection can greatly improve the general impression of the apartment."}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                [Hammer, isEs ? "Arreglos prácticos" : "Practical repairs"],
                [Brush, isEs ? "Retoques limpios" : "Clean touch-ups"],
                [KeyRound, isEs ? "Antes de llaves" : "Before keys"],
                [ShieldCheck, isEs ? "Mejor presentación" : "Better presentation"],
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
              <ClipboardList className="h-4 w-4" />
              {isEs ? "Checklist de entrega" : "Handover checklist"}
            </div>

            <h2 className="mt-4 text-3xl font-black sm:text-4xl">
              {isEs
                ? "Checklist antes de entregar un piso"
                : "Checklist before handing over an apartment"}
            </h2>

            <p className="mt-5 text-lg leading-8 text-neutral-700">
              {isEs
                ? "Antes de llamar al propietario o a la agencia, revisa los puntos más visibles. Si tienes dudas, puedes enviar fotos y te diremos qué se puede reparar, qué se puede disimular y qué material puede hacer falta."
                : "Before calling the owner or agency, check the most visible points. If you are unsure, you can send photos and we will tell you what can be repaired, what can be improved and what material may be needed."}
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {handoverChecklist.map((item) => (
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
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="rounded-3xl border border-yellow-300 bg-white p-8 shadow-xl">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-400 text-black shadow-md">
                <Home className="h-6 w-6" />
              </div>

              <h2 className="mt-5 text-3xl font-black">
                {isEs
                  ? "Para inquilinos que quieren entregar bien"
                  : "For tenants who want a clean handover"}
              </h2>

              <p className="mt-4 text-lg leading-8 text-neutral-700">
                {isEs
                  ? "Si estás saliendo de un piso de alquiler, puedes preparar una lista de desperfectos antes de la revisión. Tapar agujeros, mejorar paredes y corregir detalles visibles puede ayudar a evitar discusiones innecesarias."
                  : "If you are leaving a rental apartment, you can prepare a list of issues before inspection. Filling holes, improving walls and fixing visible details can help avoid unnecessary discussions."}
              </p>
            </div>

            <div className="rounded-3xl border border-yellow-300 bg-white p-8 shadow-xl">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-400 text-black shadow-md">
                <Hotel className="h-6 w-6" />
              </div>

              <h2 className="mt-5 text-3xl font-black">
                {isEs
                  ? "Para propietarios, agencias y Airbnb"
                  : "For owners, agencies and Airbnb"}
              </h2>

              <p className="mt-4 text-lg leading-8 text-neutral-700">
                {isEs
                  ? "También podemos ayudar si necesitas preparar un piso para nuevos inquilinos, huéspedes de Airbnb o una visita de agencia. El objetivo es resolver los detalles que se ven rápido y mejorar la presentación general."
                  : "We can also help if you need to prepare an apartment for new tenants, Airbnb guests or an agency visit. The goal is to solve visible details quickly and improve the overall presentation."}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-yellow-50 px-4 py-1 text-xs font-bold">
              <Sparkles className="h-4 w-4" />
              SEO • apartment handover repairs Valencia
            </div>

            <h2 className="mt-4 text-3xl font-black sm:text-4xl">
              {isEs
                ? "Reparaciones antes de entregar un piso en Valencia"
                : "Repairs before handing over an apartment in Valencia"}
            </h2>

            <div className="mt-6 space-y-5 text-lg leading-8 text-neutral-700">
              {isEs ? (
                <>
                  <p>
                    Si necesitas{" "}
                    <strong>
                      reparaciones antes de entregar un piso en Valencia
                    </strong>
                    , THEVULGO puede ayudarte con trabajos prácticos para dejar
                    la vivienda más presentable antes de devolver las llaves al
                    propietario, agencia o administración.
                  </p>

                  <p>
                    Los trabajos más habituales antes de entregar un piso son
                    tapar agujeros en paredes, reparar desperfectos, hacer
                    pequeños retoques de pintura, ajustar puertas, revisar
                    manillas, cambiar enchufes o interruptores dañados, fijar
                    accesorios sueltos y mejorar detalles visibles en baño,
                    cocina, habitaciones y salón.
                  </p>

                  <p>
                    Este tipo de servicio es útil para inquilinos que terminan
                    un contrato de alquiler, propietarios que preparan una
                    vivienda para nuevos inquilinos, agencias inmobiliarias que
                    necesitan una puesta a punto rápida y apartamentos Airbnb
                    que deben estar listos entre huéspedes.
                  </p>

                  <p>
                    Para preparar un presupuesto, lo mejor es enviar fotos por
                    WhatsApp. Con imágenes claras de cada desperfecto se puede
                    valorar si hace falta masilla, pintura, silicona, tornillos,
                    tacos, recambios o una visita previa. También ayuda enviar
                    una lista de prioridades para resolver primero lo más
                    visible.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    If you need{" "}
                    <strong>
                      repairs before handing over an apartment in Valencia
                    </strong>
                    , THEVULGO can help with practical jobs to make the property
                    more presentable before returning the keys to the owner,
                    agency or property manager.
                  </p>

                  <p>
                    The most common jobs before apartment handover are filling
                    wall holes, repairing damage, small paint touch-ups,
                    adjusting doors, checking handles, replacing damaged outlets
                    or switches, fixing loose accessories and improving visible
                    details in the bathroom, kitchen, bedrooms and living room.
                  </p>

                  <p>
                    This service is useful for tenants ending a rental contract,
                    owners preparing a property for new tenants, real estate
                    agencies that need quick preparation and Airbnb apartments
                    that must be ready between guests.
                  </p>

                  <p>
                    To prepare an estimate, it is best to send photos by
                    WhatsApp. Clear images of each issue help determine whether
                    filler, paint, silicone, screws, plugs, replacement parts or
                    a prior visit are needed. It also helps to send a priority
                    list so the most visible issues can be solved first.
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
                    "Envía fotos claras de cada desperfecto",
                    "Indica si entregas el piso a propietario o agencia",
                    "Confirma la fecha límite de entrega",
                    "Explica si tienes pintura del piso",
                    "Manda una lista completa de trabajos",
                    "Indica la zona de Valencia",
                    "Di si hay parking, ascensor o acceso difícil",
                  ]
                : [
                    "Send clear photos of each issue",
                    "Mention if you hand over to owner or agency",
                    "Confirm the handover deadline",
                    "Explain if you have the apartment paint",
                    "Send a full list of jobs",
                    "Mention the area of Valencia",
                    "Say if there is parking, lift or difficult access",
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
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-white px-4 py-1 text-xs font-bold">
              <ArrowRight className="h-4 w-4 text-yellow-500" />
              {isEs ? "Servicios relacionados" : "Related services"}
            </div>

            <h2 className="mx-auto mt-4 max-w-5xl text-3xl font-black sm:text-4xl">
              {isEs
                ? "Más servicios para alquileres, paredes, pintura y Airbnb"
                : "More services for rentals, walls, paint and Airbnb"}
            </h2>

            <p className="mx-auto mt-4 max-w-3xl leading-8 text-neutral-700">
              {isEs
                ? "Estas páginas ayudan a encontrar el servicio exacto según el problema: paredes, pintura, agujeros, puesta a punto, Airbnb o cambio de inquilino."
                : "These pages help find the exact service depending on the issue: walls, paint, holes, preparation, Airbnb or tenant change."}
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
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

      <section className="border-y border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-yellow-50 px-4 py-1 text-xs font-bold">
              <MapPin className="h-4 w-4 text-yellow-500" />
              {isEs ? "Zonas de servicio" : "Service areas"}
            </div>

            <h2 className="mt-4 text-3xl font-black sm:text-4xl">
              {isEs
                ? "Reparaciones antes de entrega en Valencia y alrededores"
                : "Handover repairs in Valencia and nearby areas"}
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
                  ? "¿Necesitas reparar un piso antes de entregarlo?"
                  : "Need repairs before handing over an apartment?"}
              </h2>

              <p className="mt-4 max-w-3xl text-lg font-medium leading-8">
                {isEs
                  ? "Envía fotos por WhatsApp y te diremos qué se puede hacer, cuánto puede costar y si hacen falta materiales."
                  : "Send photos by WhatsApp and we will tell you what can be done, how much it may cost and whether materials are needed."}
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