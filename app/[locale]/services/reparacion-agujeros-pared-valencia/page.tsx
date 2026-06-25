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
  Layers,
  MapPin,
  MessageCircle,
  Paintbrush,
  ShieldCheck,
  Sparkles,
  Star,
  Wrench,
  Drill,
  PanelsTopLeft,
  Construction,
  House,
} from "lucide-react";

type Props = {
  params: Promise<{ locale: string }>;
};

const baseUrl = "https://www.thevulgo.es";
const phone = "34610076942";
const slug = "services/reparacion-agujeros-pared-valencia";

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
    slug: "reparacion-paredes-valencia",
    es: "Reparación de paredes",
    en: "Wall repair",
  },
  {
    slug: "tapar-agujeros-pared-valencia",
    es: "Tapar agujeros en paredes",
    en: "Fill wall holes",
  },
  {
    slug: "retoques-pintura-valencia",
    es: "Retoques de pintura",
    en: "Paint touch-ups",
  },
  {
    slug: "reparacion-desperfectos-paredes-valencia",
    es: "Reparación de desperfectos",
    en: "Wall damage repair",
  },
  {
    slug: "reparacion-piso-alquiler-valencia",
    es: "Reparación de piso de alquiler",
    en: "Rental apartment repair",
  },
  {
    slug: "reparaciones-antes-entrega-piso-valencia",
    es: "Reparaciones antes de entregar un piso",
    en: "Repairs before handover",
  },
];

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";

  const title = isEs
    ? "Reparación de Agujeros en Paredes Valencia | Tacos, TV y Estanterías | THEVULGO"
    : "Wall Hole Repair in Valencia | Plugs, TV Brackets & Shelves | THEVULGO";

  const description = isEs
    ? "Reparación de agujeros en paredes en Valencia. Tapar agujeros de tacos, tornillos, cuadros, soportes de TV, estanterías y preparar la pared para pintar."
    : "Wall hole repair in Valencia. Fill holes from plugs, screws, pictures, TV brackets, shelves and prepare the wall for painting.";

  return {
    title,
    description,
    keywords: isEs
      ? [
          "reparacion agujeros pared valencia",
          "tapar agujeros pared valencia",
          "arreglar agujeros pared valencia",
          "tapar agujeros tacos valencia",
          "agujeros soporte tv pared valencia",
          "reparar agujeros pladur valencia",
          "masilla pared valencia",
          "manitas reparar pared valencia",
        ]
      : [
          "wall hole repair valencia",
          "fill wall holes valencia",
          "repair screw holes valencia",
          "tv bracket wall holes valencia",
          "drywall hole repair valencia",
          "handyman wall repair valencia",
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

export default async function WallHoleRepairValenciaPage({ params }: Props) {
  const { locale } = await params;
  const isEs = locale === "es";

  const pageUrl = `${baseUrl}/${locale}/${slug}`;
  const estimateHref = `/${locale}/estimate?category=repairs`;

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, necesito reparar agujeros en una pared en Valencia. Puedo enviar fotos para pedir presupuesto."
      : "Hi, I need wall hole repair in Valencia. I can send photos for an estimate."
  );

  const whatsappHref = `https://wa.me/${phone}?text=${whatsappText}`;

  const services = isEs
    ? [
        {
          title: "Agujeros de tacos y tornillos",
          text: "Tapamos agujeros pequeños de tacos, tornillos, clavos, cuadros, perchas y fijaciones antiguas.",
          icon: <Drill className="h-6 w-6" />,
        },
        {
          title: "Agujeros de soporte de TV",
          text: "Reparamos marcas y agujeros después de quitar soportes de TV fijos, inclinables o articulados.",
          icon: <PanelsTopLeft className="h-6 w-6" />,
        },
        {
          title: "Agujeros de estanterías",
          text: "Solucionamos daños de baldas, muebles colgados, espejos, barras, cortinas y accesorios de pared.",
          icon: <Hammer className="h-6 w-6" />,
        },
        {
          title: "Agujeros en pladur",
          text: "Reparación de agujeros en pladur con parche, pasta, lijado y preparación para acabado.",
          icon: <Layers className="h-6 w-6" />,
        },
        {
          title: "Masilla y lijado",
          text: "Aplicamos masilla, nivelamos la superficie, lijamos y dejamos la pared lista para pintar.",
          icon: <Construction className="h-6 w-6" />,
        },
        {
          title: "Retoque de pintura",
          text: "Si tienes pintura del mismo color, podemos hacer un retoque para disimular la reparación.",
          icon: <Paintbrush className="h-6 w-6" />,
        },
      ]
    : [
        {
          title: "Plug and screw holes",
          text: "We fill small holes from plugs, screws, nails, pictures, hooks and old wall fixings.",
          icon: <Drill className="h-6 w-6" />,
        },
        {
          title: "TV bracket holes",
          text: "We repair marks and holes after removing fixed, tilting or articulated TV brackets.",
          icon: <PanelsTopLeft className="h-6 w-6" />,
        },
        {
          title: "Shelf holes",
          text: "We fix damage from shelves, wall furniture, mirrors, bars, curtains and wall accessories.",
          icon: <Hammer className="h-6 w-6" />,
        },
        {
          title: "Drywall holes",
          text: "Drywall hole repair with patch, compound, sanding and preparation for finishing.",
          icon: <Layers className="h-6 w-6" />,
        },
        {
          title: "Filler and sanding",
          text: "We apply filler, level the surface, sand it and leave the wall ready for paint.",
          icon: <Construction className="h-6 w-6" />,
        },
        {
          title: "Paint touch-up",
          text: "If you have matching paint, we can touch up the area to make the repair more discreet.",
          icon: <Paintbrush className="h-6 w-6" />,
        },
      ];

  const prices = isEs
    ? [
        ["Agujeros pequeños de tacos", "desde 35 €"],
        ["Varios agujeros en una pared", "desde 39 €"],
        ["Agujeros de soporte de TV", "desde 45 €"],
        ["Agujero en pladur", "desde 49 €"],
        ["Lijado y preparación", "desde 35 €"],
        ["Retoque de pintura", "desde 49 €"],
      ]
    : [
        ["Small plug holes", "from €35"],
        ["Several holes on one wall", "from €39"],
        ["TV bracket holes", "from €45"],
        ["Drywall hole", "from €49"],
        ["Sanding and preparation", "from €35"],
        ["Paint touch-up", "from €49"],
      ];

  const process = isEs
    ? [
        ["1. Fotos", "Envía foto cercana y foto general de la pared."],
        ["2. Revisión", "Vemos tamaño, profundidad y tipo de pared."],
        ["3. Precio", "Confirmamos trabajo y materiales antes de empezar."],
        ["4. Reparación", "Rellenamos, nivelamos, lijamos y limpiamos la zona."],
        ["5. Acabado", "Dejamos listo para pintar o retocamos si es posible."],
      ]
    : [
        ["1. Photos", "Send a close-up and a general photo of the wall."],
        ["2. Check", "We assess size, depth and wall type."],
        ["3. Price", "We confirm labour and materials before starting."],
        ["4. Repair", "We fill, level, sand and clean the area."],
        ["5. Finish", "We leave it ready for paint or touch it up when possible."],
      ];

  const problems = isEs
    ? [
        "Agujeros de cuadros",
        "Agujeros de tacos",
        "Tornillos antiguos",
        "Marcas de soporte de TV",
        "Estanterías retiradas",
        "Daños en pladur",
        "Pared lista para pintar",
        "Entrega de piso de alquiler",
        "Preparación para Airbnb",
        "Golpes pequeños alrededor del agujero",
      ]
    : [
        "Picture holes",
        "Wall plug holes",
        "Old screw holes",
        "TV bracket marks",
        "Removed shelves",
        "Drywall damage",
        "Wall ready for paint",
        "Rental handover",
        "Airbnb preparation",
        "Small dents around holes",
      ];

  const faqs = isEs
    ? [
        {
          q: "¿Cuánto cuesta reparar agujeros en una pared?",
          a: "Las reparaciones pequeñas suelen empezar desde 35 €. El precio depende del número de agujeros, tamaño, tipo de pared y si hace falta pintar.",
        },
        {
          q: "¿Podéis tapar agujeros de un soporte de TV?",
          a: "Sí. Tapamos agujeros y marcas después de quitar soportes de TV, estanterías, cuadros, espejos o muebles colgados.",
        },
        {
          q: "¿Reparáis agujeros en pladur?",
          a: "Sí. En pladur puede hacer falta parche, pasta, cinta, refuerzo, lijado y preparación para pintura.",
        },
        {
          q: "¿Se notará después de reparar?",
          a: "Intentamos dejarlo lo más discreto posible. El resultado depende del color, textura, luz y si hay pintura igual.",
        },
        {
          q: "¿También pintáis la zona?",
          a: "Sí, si tienes pintura del mismo color podemos hacer retoque. Si no, se puede calcular pintura aparte.",
        },
        {
          q: "¿Sirve para entregar un piso de alquiler?",
          a: "Sí. Es uno de los trabajos más comunes antes de entregar llaves o preparar una vivienda para nuevos inquilinos.",
        },
        {
          q: "¿Puedo enviar fotos por WhatsApp?",
          a: "Sí. Con fotos podemos valorar mejor el daño, preparar herramientas y dar una estimación rápida.",
        },
        {
          q: "¿Cuánto tarda el trabajo?",
          a: "Muchos agujeros pequeños se reparan en una visita. Si hay secado, pintura o daños más grandes, puede tardar más.",
        },
      ]
    : [
        {
          q: "How much does wall hole repair cost?",
          a: "Small repairs usually start from €35. The price depends on the number of holes, size, wall type and whether painting is needed.",
        },
        {
          q: "Can you fill holes from a TV bracket?",
          a: "Yes. We fill holes and marks after removing TV brackets, shelves, pictures, mirrors or wall-mounted furniture.",
        },
        {
          q: "Do you repair drywall holes?",
          a: "Yes. Drywall may require patching, compound, tape, reinforcement, sanding and preparation for paint.",
        },
        {
          q: "Will it be visible after repair?",
          a: "We try to make it as discreet as possible. The result depends on colour, texture, light and matching paint.",
        },
        {
          q: "Do you also paint the area?",
          a: "Yes, if you have matching paint we can touch it up. If not, paint can be calculated separately.",
        },
        {
          q: "Is this useful before rental handover?",
          a: "Yes. This is one of the most common jobs before returning keys or preparing a property for new tenants.",
        },
        {
          q: "Can I send photos by WhatsApp?",
          a: "Yes. Photos help us assess the damage, prepare tools and provide a quick estimate.",
        },
        {
          q: "How long does the job take?",
          a: "Many small holes are repaired in one visit. If drying, painting or larger damage is involved, it can take longer.",
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
          ? "Reparación de agujeros en paredes en Valencia"
          : "Wall hole repair in Valencia",
        serviceType: isEs
          ? "Tapar agujeros de tacos, tornillos, TV y estanterías"
          : "Fill holes from plugs, screws, TV brackets and shelves",
        provider: {
          "@id": `${baseUrl}/#localbusiness`,
        },
        areaServed: areas,
        url: pageUrl,
        description: isEs
          ? "Servicio de reparación de agujeros en paredes en Valencia: tacos, tornillos, soportes de TV, estanterías, pladur, masilla, lijado y preparación para pintura."
          : "Wall hole repair service in Valencia: plugs, screws,TV brackets, shelves, drywall, filler, sanding and paint preparation.",
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
            name: isEs ? "Reparación de agujeros en paredes" : "Wall hole repair",
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
                ? "Reparación de agujeros en paredes en Valencia"
                : "Wall hole repair in Valencia"}
            </h1>

            <p className="mt-6 max-w-4xl text-lg leading-8 text-neutral-700">
              {isEs
                ? "Tapamos y reparamos agujeros en paredes de tacos, tornillos, cuadros, soportes de TV, estanterías, espejos y muebles colgados. Servicio ideal para pisos de alquiler, entrega de llaves, Airbnb y paredes que necesitan quedar listas para pintar."
                : "We fill and repair wall holes from plugs, screws, pictures, TV brackets, shelves, mirrors and wall-mounted furniture. Ideal for rental apartments, key handover, Airbnb and walls that need to be ready for painting."}
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
                  title: isEs ? "Rápido por fotos" : "Fast by photos",
                  text: isEs
                    ? "Envía fotos y recibe una estimación."
                    : "Send photos and get an estimate.",
                },
                {
                  icon: ShieldCheck,
                  title: isEs ? "Trabajo limpio" : "Clean work",
                  text: isEs
                    ? "Masilla, lijado y preparación."
                    : "Filler, sanding and preparation.",
                },
                {
                  icon: BadgeCheck,
                  title: isEs ? "Para alquileres" : "For rentals",
                  text: isEs
                    ? "Ideal antes de entregar un piso."
                    : "Ideal before apartment handover.",
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
              {isEs ? "Servicio específico" : "Specific service"}
            </div>

            <h2 className="mt-4 text-3xl font-black sm:text-4xl">
              {isEs
                ? "Tapar agujeros de pared sin reforma completa"
                : "Fill wall holes without a full renovation"}
            </h2>

            <p className="mt-4 max-w-4xl leading-8 text-neutral-700">
              {isEs
                ? "No siempre hace falta pintar toda la habitación. En muchos casos se puede reparar la zona dañada, aplicar masilla, lijar y dejar la pared preparada para un retoque o para pintar después."
                : "You do not always need to repaint the whole room. In many cases we can repair the damaged area, apply filler, sand it and leave the wall ready for touch-up or painting later."}
            </p>
          </div>

          <Link
            href={`/${locale}/services/reparacion-paredes-valencia`}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-neutral-300 bg-white px-5 py-3 text-sm font-bold shadow-sm transition hover:scale-105"
          >
            {isEs ? "Ver reparación de paredes" : "View wall repair"}
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

              <p className="mt-3 leading-7 text-neutral-700">
                {item.text}
              </p>
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
                  ? "Precio para reparar agujeros en paredes"
                  : "Wall hole repair pricing"}
              </h2>

              <p className="mt-5 text-lg leading-8 text-neutral-700">
                {isEs
                  ? "El precio depende del número de agujeros, profundidad, tipo de pared, si es yeso o pladur, si hay que lijar, pintar o hacer varias capas. Lo más rápido es enviar fotos por WhatsApp."
                  : "The price depends on the number of holes, depth, wall type, whether it is plaster or drywall, and whether sanding, painting or several layers are needed. The fastest way is to send photos by WhatsApp."}
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
                  ? "Materiales como masilla, lija, pintura, imprimación o parches de pladur pueden calcularse aparte."
                  : "Materials such as filler, sandpaper, paint, primer or drywall patches may be calculated separately."}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-yellow-50 px-4 py-1 text-xs font-bold">
            <CalendarCheck className="h-4 w-4" />
            {isEs ? "Proceso" : "Process"}
          </div>

          <h2 className="mx-auto mt-4 max-w-5xl text-3xl font-black sm:text-4xl">
            {isEs
              ? "Cómo reparamos agujeros en paredes"
              : "How we repair wall holes"}
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
                {isEs ? "Alquileres y entrega de piso" : "Rentals and handover"}
              </div>

              <h2 className="mt-4 text-3xl font-black sm:text-4xl">
                {isEs
                  ? "Perfecto antes de entregar llaves"
                  : "Perfect before returning keys"}
              </h2>

              <p className="mt-5 text-lg leading-8 text-neutral-300">
                {isEs
                  ? "Los agujeros en paredes son una de las cosas que más se ven al entregar un piso. Taparlos bien ayuda a que la vivienda se vea más cuidada, limpia y preparada para propietarios, inmobiliarias, nuevos inquilinos o huéspedes de Airbnb."
                  : "Wall holes are one of the most visible details when handing over an apartment. Repairing them properly helps the property look cleaner, better maintained and ready for owners, agencies, new tenants or Airbnb guests."}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                [Home, isEs ? "Pisos de alquiler" : "Rental apartments"],
                [House, isEs ? "Airbnb" : "Airbnb"],
                [Hammer, isEs ? "Agujeros de TV" : "TV holes"],
                [Paintbrush, isEs ? "Listo para pintar" : "Ready for paint"],
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
              <PanelsTopLeft className="h-4 w-4" />
              {isEs ? "Casos habituales" : "Common cases"}
            </div>

            <h2 className="mt-4 text-3xl font-black sm:text-4xl">
              {isEs
                ? "Agujeros y marcas que podemos reparar"
                : "Holes and marks we can repair"}
            </h2>

            <p className="mt-5 text-lg leading-8 text-neutral-700">
              {isEs
                ? "Los daños suelen aparecer después de quitar decoración, desmontar muebles, retirar una televisión de la pared o preparar un piso para mudanza. Muchas reparaciones pequeñas se pueden resolver sin obra grande."
                : "Damage often appears after removing decoration, taking down furniture, removing a TV from the wall or preparing an apartment for moving out. Many small repairs can be solved without major work."}
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
                SEO • wall hole repair Valencia
              </div>

              <h2 className="mt-4 text-3xl font-black sm:text-4xl">
                {isEs
                  ? "Reparación de agujeros en paredes en Valencia"
                  : "Wall hole repair in Valencia"}
              </h2>

              <div className="mt-6 space-y-5 text-lg leading-8 text-neutral-700">
                {isEs ? (
                  <>
                    <p>
                      Si necesitas <strong>reparación de agujeros en paredes en Valencia</strong>,
                      THEVULGO puede ayudarte a tapar agujeros de tacos,
                      tornillos, cuadros, estanterías, soportes de TV, espejos,
                      barras de cortina y accesorios de pared.
                    </p>

                    <p>
                      Este servicio es muy útil antes de entregar un piso de
                      alquiler, preparar una vivienda para nuevos inquilinos,
                      mejorar un apartamento Airbnb o dejar una habitación lista
                      para pintar. Una pared con agujeros visibles puede dar una
                      imagen descuidada aunque el resto del piso esté limpio.
                    </p>

                    <p>
                      Para calcular bien el trabajo, revisamos el número de
                      agujeros, el tamaño, la profundidad, el tipo de pared, si
                      hay pladur o yeso y si después será necesario hacer retoque
                      de pintura. Con fotos podemos preparar mejor las
                      herramientas y materiales.
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      If you need <strong>wall hole repair in Valencia</strong>,
                      THEVULGO can help fill holes from plugs, screws, pictures,
                      shelves, TV brackets, mirrors, curtain bars and wall
                      accessories.
                    </p>

                    <p>
                      This service is useful before rental handover, preparing a
                      property for new tenants, improving an Airbnb apartment or
                      leaving a room ready for painting. A wall with visible
                      holes can make a property look poorly maintained even when
                      everything else is clean.
                    </p>

                    <p>
                      To calculate the job properly, we check the number of
                      holes, size, depth, wall type, whether it is drywall or
                      plaster and whether paint touch-up is needed afterwards.
                      Photos help us prepare tools and materials better.
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
                      "Envía una foto cercana de los agujeros",
                      "Envía una foto general de la pared",
                      "Indica cuántos agujeros hay",
                      "Di si eran de TV, estantería o cuadros",
                      "Indica si tienes pintura del mismo color",
                      "Manda tu zona de Valencia",
                    ]
                  : [
                      "Send a close-up photo of the holes",
                      "Send a general photo of the wall",
                      "Mention how many holes there are",
                      "Say if they came from TV, shelves or pictures",
                      "Mention if you have matching paint",
                      "Send your area in Valencia",
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
                ? "Más servicios para paredes, pintura y alquileres"
                : "More services for walls, painting and rentals"}
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
                ? "Reparación de agujeros en paredes en Valencia y alrededores"
                : "Wall hole repair in Valencia and nearby areas"}
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
                  ? "¿Necesitas tapar agujeros en una pared?"
                  : "Need to fill holes in a wall?"}
              </h2>

              <p className="mt-4 max-w-3xl text-lg font-medium leading-8">
                {isEs
                  ? "Envía fotos por WhatsApp y te diremos qué se puede hacer, cuánto puede costar y qué materiales pueden hacer falta."
                  : "Send photos by WhatsApp and we will tell you what can be done, how much it may cost and what materials may be needed."}
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