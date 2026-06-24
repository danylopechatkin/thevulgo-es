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
} from "lucide-react";

type Props = {
  params: Promise<{ locale: string }>;
};

const baseUrl = "https://www.thevulgo.es";
const phone = "34610076942";
const slug = "services/reparacion-piso-alquiler-valencia";

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
];

const clusterLinks = [
  {
    slug: "reparaciones-antes-entrega-piso-valencia",
    es: "Reparaciones antes de entregar un piso",
    en: "Repairs before handing over an apartment",
  },
  {
    slug: "reparacion-paredes-valencia",
    es: "Reparación de paredes en Valencia",
    en: "Wall repair in Valencia",
  },
  {
    slug: "retoques-pintura-valencia",
    es: "Retoques de pintura en Valencia",
    en: "Paint touch-ups in Valencia",
  },
  {
    slug: "reparacion-agujeros-pared-valencia",
    es: "Reparación de agujeros en paredes",
    en: "Wall hole repair",
  },
  {
    slug: "fin-contrato-alquiler-valencia",
    es: "Reparaciones antes del fin del contrato",
    en: "Repairs before the end of a rental contract",
  },
  {
    slug: "devolver-piso-propietario-valencia",
    es: "Preparar piso para devolver al propietario",
    en: "Prepare apartment to return to the owner",
  },
  {
    slug: "mantenimiento-airbnb-valencia",
    es: "Mantenimiento para Airbnb",
    en: "Airbnb maintenance",
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
    ? "Reparación de Piso de Alquiler en Valencia | Antes de Entregar Llaves | THEVULGO"
    : "Rental Apartment Repair in Valencia | Before Key Handover | THEVULGO";

  const description = isEs
    ? "Reparación de piso de alquiler en Valencia antes de entregar las llaves: paredes, agujeros, retoques de pintura, pequeños desperfectos, puesta a punto y preparación para propietario o Airbnb."
    : "Rental apartment repair in Valencia before handing over keys: walls, holes, paint touch-ups, small damage, move-out preparation and Airbnb property maintenance.";

  return {
    title,
    description,
    keywords: isEs
      ? [
          "reparacion piso alquiler valencia",
          "reparaciones antes entrega piso valencia",
          "arreglos antes devolver piso valencia",
          "reparacion paredes valencia",
          "retoques pintura valencia",
          "tapar agujeros pared valencia",
          "mantenimiento airbnb valencia",
          "puesta a punto piso valencia",
        ]
      : [
          "rental apartment repair valencia",
          "move out repairs valencia",
          "wall repair valencia",
          "paint touch ups valencia",
          "wall holes repair valencia",
          "airbnb maintenance valencia",
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

export default async function RentalApartmentRepairPage({ params }: Props) {
  const { locale } = await params;
  const isEs = locale === "es";

  const pageUrl = `${baseUrl}/${locale}/${slug}`;
  const estimateHref = `/${locale}/estimate?category=repairs`;

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, necesito reparar un piso de alquiler en Valencia antes de entregar las llaves. Puedo enviar fotos para pedir presupuesto."
      : "Hi, I need to repair a rental apartment in Valencia before handing over the keys. I can send photos for an estimate."
  );

  const whatsappHref = `https://wa.me/${phone}?text=${whatsappText}`;

  const services = isEs
    ? [
        {
          title: "Reparación de paredes",
          text: "Agujeros, golpes, marcas de muebles, daños por soportes de TV, estanterías o cuadros.",
          icon: <Layers className="h-6 w-6" />,
        },
        {
          title: "Retoques de pintura",
          text: "Pequeñas zonas dañadas, manchas, diferencias de color y acabado antes de entregar el piso.",
          icon: <Paintbrush className="h-6 w-6" />,
        },
        {
          title: "Preparación para entrega",
          text: "Revisión rápida del piso para dejarlo más presentable antes de devolverlo al propietario.",
          icon: <KeyRound className="h-6 w-6" />,
        },
        {
          title: "Pequeñas reparaciones",
          text: "Manillas, puertas, silicona, accesorios, agujeros, enchufes, lámparas y detalles visibles.",
          icon: <Wrench className="h-6 w-6" />,
        },
        {
          title: "Airbnb y alquileres",
          text: "Puesta a punto entre huéspedes, cambios de inquilino y mantenimiento rápido de apartamentos.",
          icon: <Hotel className="h-6 w-6" />,
        },
        {
          title: "Lista de trabajos",
          text: "Puedes enviar varias fotos y preparar una lista para resolver todo en una sola visita.",
          icon: <ClipboardCheck className="h-6 w-6" />,
        },
      ]
    : [
        {
          title: "Wall repairs",
          text: "Holes, dents, furniture marks, damage from TV brackets, shelves or pictures.",
          icon: <Layers className="h-6 w-6" />,
        },
        {
          title: "Paint touch-ups",
          text: "Small damaged areas, stains, colour differences and finishing before handover.",
          icon: <Paintbrush className="h-6 w-6" />,
        },
        {
          title: "Move-out preparation",
          text: "Quick apartment check to make it more presentable before returning it to the owner.",
          icon: <KeyRound className="h-6 w-6" />,
        },
        {
          title: "Small repairs",
          text: "Handles, doors, silicone, accessories, holes, outlets, lights and visible details.",
          icon: <Wrench className="h-6 w-6" />,
        },
        {
          title: "Airbnb and rentals",
          text: "Turnover preparation, tenant change repairs and fast apartment maintenance.",
          icon: <Hotel className="h-6 w-6" />,
        },
        {
          title: "Job list",
          text: "You can send several photos and prepare a list to solve everything in one visit.",
          icon: <ClipboardCheck className="h-6 w-6" />,
        },
      ];

  const prices = isEs
    ? [
        ["Reparación pequeña de pared", "desde 35 €"],
        ["Tapar agujeros / marcas", "desde 35 €"],
        ["Retoques de pintura", "desde 49 €"],
        ["Pequeñas reparaciones", "desde 35 €"],
        ["Puesta a punto del piso", "desde 79 €"],
        ["Visita / revisión", "desde 49 €"],
      ]
    : [
        ["Small wall repair", "from €35"],
        ["Fill holes / marks", "from €35"],
        ["Paint touch-ups", "from €49"],
        ["Small repairs", "from €35"],
        ["Apartment preparation", "from €79"],
        ["Visit / inspection", "from €49"],
      ];

  const process = isEs
    ? [
        ["1. Envía fotos", "Manda fotos de paredes, agujeros, pintura y desperfectos visibles."],
        ["2. Revisamos daños", "Valoramos qué se puede reparar, pintar o disimular antes de la entrega."],
        ["3. Presupuesto claro", "Confirmamos precio de trabajo y materiales si hacen falta."],
        ["4. Elegimos horario", "Buscamos un día cómodo antes de entregar las llaves."],
        ["5. Trabajo limpio", "Reparamos, lijamos, retocamos y dejamos el piso más presentable."],
      ]
    : [
        ["1. Send photos", "Send photos of walls, holes, paint and visible damage."],
        ["2. We check damage", "We assess what can be repaired, painted or improved before handover."],
        ["3. Clear estimate", "We confirm labour price and materials if needed."],
        ["4. Choose time", "We find a suitable time before key handover."],
        ["5. Clean work", "We repair, sand, touch up and leave the apartment more presentable."],
      ];

  const faqs = isEs
    ? [
        {
          q: "¿Reparáis pisos de alquiler antes de entregar las llaves?",
          a: "Sí. Podemos ayudar con paredes, agujeros, retoques de pintura, pequeños desperfectos, accesorios y puesta a punto antes de devolver el piso.",
        },
        {
          q: "¿Podéis tapar agujeros de cuadros, estanterías o soporte de TV?",
          a: "Sí. Se pueden tapar agujeros, lijar y preparar la zona para que quede más limpia visualmente.",
        },
        {
          q: "¿Hacéis retoques de pintura?",
          a: "Sí. Para retoques pequeños se revisa el color, el estado de la pared y si hace falta comprar pintura igual o parecida.",
        },
        {
          q: "¿El precio incluye materiales?",
          a: "Normalmente el precio de trabajo y materiales se separa. Podemos estimar materiales después de ver fotos.",
        },
        {
          q: "¿Trabajáis con propietarios y Airbnb?",
          a: "Sí. También hacemos mantenimiento para apartamentos de alquiler, Airbnb y cambios de inquilino.",
        },
        {
          q: "¿Puedo enviar una lista de varios trabajos?",
          a: "Sí. Es lo mejor. Envía fotos de cada desperfecto y así se puede preparar una visita más eficiente.",
        },
      ]
    : [
        {
          q: "Do you repair rental apartments before key handover?",
          a: "Yes. We can help with walls, holes, paint touch-ups, small damage, accessories and apartment preparation before returning it.",
        },
        {
          q: "Can you fill holes from pictures, shelves or TV brackets?",
          a: "Yes. Holes can be filled, sanded and prepared so the area looks cleaner.",
        },
        {
          q: "Do you do paint touch-ups?",
          a: "Yes. For small touch-ups, we check the colour, wall condition and whether matching paint is needed.",
        },
        {
          q: "Are materials included?",
          a: "Usually labour and materials are calculated separately. We can estimate materials after seeing photos.",
        },
        {
          q: "Do you work with landlords and Airbnb apartments?",
          a: "Yes. We also provide maintenance for rental apartments, Airbnb units and tenant changes.",
        },
        {
          q: "Can I send a list of several jobs?",
          a: "Yes. That is best. Send photos of each issue so we can prepare a more efficient visit.",
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
          ? "Reparación de piso de alquiler en Valencia"
          : "Rental apartment repair in Valencia",
        serviceType: isEs
          ? "Reparación y puesta a punto de pisos de alquiler"
          : "Rental apartment repair and preparation",
        provider: {
          "@id": `${baseUrl}/#localbusiness`,
        },
        areaServed: areas,
        url: pageUrl,
        description: isEs
          ? "Servicio de reparación de piso de alquiler en Valencia antes de entregar llaves: paredes, agujeros, retoques de pintura, pequeños desperfectos, Airbnb y puesta a punto."
          : "Rental apartment repair service in Valencia before key handover: walls, holes, paint touch-ups, small damage, Airbnb and property preparation.",
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
              ? "Reparación piso alquiler Valencia"
              : "Rental apartment repair Valencia",
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
                ? "Reparación de piso de alquiler en Valencia antes de entregar las llaves"
                : "Rental apartment repair in Valencia before handing over the keys"}
            </h1>

            <p className="mt-6 max-w-4xl text-lg leading-8 text-neutral-700">
              {isEs
                ? "Ayudamos a dejar tu piso más presentable antes de devolverlo al propietario: tapar agujeros, reparar paredes, hacer retoques de pintura, arreglar pequeños desperfectos y preparar la vivienda para la entrega, cambio de inquilino o Airbnb."
                : "We help make your apartment more presentable before returning it to the owner: filling holes, repairing walls, paint touch-ups, fixing small damage and preparing the property for handover, tenant change or Airbnb."}
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
                  title: isEs ? "Rápido antes de entrega" : "Fast before handover",
                  text: isEs
                    ? "Ideal antes de entregar llaves o recibir nuevos huéspedes."
                    : "Ideal before key handover or new guests.",
                },
                {
                  icon: ShieldCheck,
                  title: isEs ? "Acabado limpio" : "Clean finish",
                  text: isEs
                    ? "Paredes, pintura y pequeños detalles más presentables."
                    : "Walls, paint and small details made more presentable.",
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
              {isEs ? "Servicios para pisos de alquiler" : "Rental apartment services"}
            </div>

            <h2 className="mt-4 text-3xl font-black sm:text-4xl">
              {isEs
                ? "Qué podemos reparar antes de entregar el piso"
                : "What we can repair before handing over the apartment"}
            </h2>

            <p className="mt-4 max-w-4xl leading-8 text-neutral-700">
              {isEs
                ? "Cuando termina un contrato de alquiler, los pequeños desperfectos pueden crear problemas con la fianza. THEVULGO ayuda con arreglos visibles y prácticos para que la vivienda quede más limpia, ordenada y lista para revisión."
                : "When a rental contract ends, small damage can create problems with the deposit. THEVULGO helps with visible and practical fixes so the apartment looks cleaner, tidier and ready for inspection."}
            </p>
          </div>

          <Link
            href={`/${locale}/services/pequenas-reparaciones-valencia`}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-neutral-300 bg-white px-5 py-3 text-sm font-bold shadow-sm transition hover:scale-105"
          >
            {isEs ? "Pequeñas reparaciones" : "Small repairs"}
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
                  ? "Presupuesto claro para reparar un piso de alquiler"
                  : "Clear estimate for rental apartment repairs"}
              </h2>

              <p className="mt-5 text-lg leading-8 text-neutral-700">
                {isEs
                  ? "El precio depende del número de desperfectos, estado de la pared, pintura, materiales, tiempo y urgencia. Lo más rápido es enviar fotos por WhatsApp para calcular trabajo y materiales."
                  : "The price depends on the number of issues, wall condition, paint, materials, time and urgency. The fastest way is to send photos by WhatsApp so labour and materials can be estimated."}
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
                  ? "Materiales no siempre incluidos. Si hace falta pintura, masilla, lija o silicona, se confirma antes de comprar."
                  : "Materials are not always included. If paint, filler, sandpaper or silicone are needed, this is confirmed before purchase."}
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
              ? "De fotos por WhatsApp a piso listo para entregar"
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
                {isEs ? "Antes de devolver el piso" : "Before returning the apartment"}
              </div>

              <h2 className="mt-4 text-3xl font-black sm:text-4xl">
                {isEs
                  ? "Pequeños detalles que pueden afectar la fianza"
                  : "Small details that can affect the deposit"}
              </h2>

              <p className="mt-5 text-lg leading-8 text-neutral-300">
                {isEs
                  ? "Agujeros de cuadros, marcas de muebles, pintura dañada, esquinas golpeadas, silicona vieja o accesorios sueltos pueden dar mala impresión durante la revisión del propietario."
                  : "Picture holes, furniture marks, damaged paint, dented corners, old silicone or loose accessories can give a poor impression during the owner inspection."}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                [Hammer, isEs ? "Arreglos rápidos" : "Fast fixes"],
                [Brush, isEs ? "Retoques limpios" : "Clean touch-ups"],
                [Home, isEs ? "Pisos de alquiler" : "Rental apartments"],
                [Sparkles, isEs ? "Mejor presentación" : "Better presentation"],
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

      <section className="border-y border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-white px-4 py-1 text-xs font-bold">
              <ArrowRight className="h-4 w-4 text-yellow-500" />
              {isEs ? "Servicios relacionados" : "Related services"}
            </div>

            <h2 className="mx-auto mt-4 max-w-5xl text-3xl font-black sm:text-4xl">
              {isEs
                ? "Páginas relacionadas para reparación, alquiler y Airbnb"
                : "Related pages for repairs, rentals and Airbnb"}
            </h2>
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

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-yellow-50 px-4 py-1 text-xs font-bold">
              <Sparkles className="h-4 w-4" />
              SEO • rental apartment repair Valencia
            </div>

            <h2 className="mt-4 text-3xl font-black sm:text-4xl">
              {isEs
                ? "Reparación de piso de alquiler en Valencia"
                : "Rental apartment repair in Valencia"}
            </h2>

            <div className="mt-6 space-y-5 text-lg leading-8 text-neutral-700">
              {isEs ? (
                <>
                  <p>
                    Si necesitas <strong>reparación de piso de alquiler en Valencia</strong>,
                    THEVULGO puede ayudarte con arreglos prácticos antes de entregar las
                    llaves, recibir nuevos inquilinos o preparar una vivienda para alquiler.
                  </p>

                  <p>
                    Los trabajos más habituales son tapar agujeros en paredes, reparar
                    desperfectos, hacer pequeños retoques de pintura, ajustar puertas,
                    cambiar accesorios, mejorar detalles visibles y dejar el piso más
                    presentable para la revisión.
                  </p>

                  <p>
                    Para dar un presupuesto más claro, lo mejor es enviar fotos de cada
                    desperfecto por WhatsApp. Con fotos y una lista de trabajos se puede
                    calcular mejor el tiempo, los materiales y la visita.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    If you need <strong>rental apartment repair in Valencia</strong>,
                    THEVULGO can help with practical fixes before handing over keys,
                    receiving new tenants or preparing a property for rent.
                  </p>

                  <p>
                    Common jobs include filling wall holes, repairing damage, small
                    paint touch-ups, door adjustments, accessory replacement, improving
                    visible details and making the apartment more presentable for inspection.
                  </p>

                  <p>
                    To provide a clearer estimate, it is best to send photos of each
                    issue by WhatsApp. With photos and a job list, time, materials and
                    the visit can be calculated more accurately.
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
                    "Indica si es antes de entregar llaves",
                    "Explica si necesitas pintura o solo reparación",
                    "Manda una lista completa de trabajos",
                    "Indica la zona de Valencia",
                    "Confirma si hay fecha límite de entrega",
                  ]
                : [
                    "Send clear photos of each issue",
                    "Mention if it is before key handover",
                    "Explain if you need paint or only repair",
                    "Send a full list of jobs",
                    "Mention the area of Valencia",
                    "Confirm if there is a handover deadline",
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
                  ? "¿Necesitas reparar un piso de alquiler en Valencia?"
                  : "Need to repair a rental apartment in Valencia?"}
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