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
  Layers,
  MapPin,
  MessageCircle,
  Paintbrush,
  Palette,
  ShieldCheck,
  Sparkles,
  Star,
  Wrench,
  Droplets,
  ClipboardList,
  Ruler,
} from "lucide-react";

type Props = {
  params: Promise<{ locale: string }>;
};

const baseUrl = "https://www.thevulgo.es";
const phone = "34610076942";
const slug = "services/retoques-pintura-valencia";

const areas = [
  "Valencia",
  "Ruzafa",
  "Russaffа",
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
    slug: "reparacion-desperfectos-paredes-valencia",
    es: "Reparación de desperfectos en paredes",
    en: "Wall damage repair",
  },
  {
    slug: "arreglar-paredes-valencia",
    es: "Arreglar paredes",
    en: "Fix walls",
  },
  {
    slug: "pintura-pequenos-arreglos-valencia",
    es: "Pintura y pequeños arreglos",
    en: "Painting and small repairs",
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
    slug: "fin-contrato-alquiler-valencia",
    es: "Reparaciones antes del fin del contrato",
    en: "Repairs before rental contract ends",
  },
  {
    slug: "preparacion-vivienda-alquiler-valencia",
    es: "Preparación de vivienda para alquiler",
    en: "Rental property preparation",
  },
  {
    slug: "mantenimiento-airbnb-valencia",
    es: "Mantenimiento para Airbnb",
    en: "Airbnb maintenance",
  },
  {
    slug: "handyman-valencia",
    es: "Manitas en Valencia",
    en: "Handyman in Valencia",
  },
];

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";

  const title = isEs
    ? "Retoques de Pintura en Valencia | Reparación y Pintura Local | THEVULGO"
    : "Paint Touch-Ups in Valencia | Small Wall Painting Repairs | THEVULGO";

  const description = isEs
    ? "Retoques de pintura en Valencia para paredes con manchas, agujeros reparados, desconchones, roces, marcas y pequeños desperfectos. Pintura localizada para pisos, alquileres y Airbnb."
    : "Paint touch-ups in Valencia for walls with stains, repaired holes, chips, scratches, marks and small damage. Local painting for apartments, rentals and Airbnb.";

  return {
    title,
    description,
    keywords: isEs
      ? [
          "retoques pintura valencia",
          "retoque pintura pared valencia",
          "pintura pequeños arreglos valencia",
          "retocar pared valencia",
          "igualar pintura pared valencia",
          "pintar agujeros pared valencia",
          "pintura localizada valencia",
          "pintar una pared valencia",
          "retoques pintura piso alquiler valencia",
          "pintura airbnb valencia",
        ]
      : [
          "paint touch ups valencia",
          "wall paint touch up valencia",
          "small painting repairs valencia",
          "retouch wall paint valencia",
          "match wall paint valencia",
          "paint repaired wall holes valencia",
          "local painting valencia",
          "paint one wall valencia",
          "rental apartment paint touch ups valencia",
          "airbnb painting valencia",
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

export default async function PaintTouchUpsValenciaPage({ params }: Props) {
  const { locale } = await params;
  const isEs = locale === "es";

  const pageUrl = `${baseUrl}/${locale}/${slug}`;
  const estimateHref = `/${locale}/estimate?category=painting`;

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, necesito retoques de pintura en Valencia. Puedo enviar fotos de la pared, manchas o zonas dañadas para pedir presupuesto."
      : "Hi, I need paint touch-ups in Valencia. I can send photos of the wall, stains or damaged areas for an estimate."
  );

  const whatsappHref = `https://wa.me/${phone}?text=${whatsappText}`;

  const services = isEs
    ? [
        {
          title: "Retoques pequeños",
          text: "Zonas concretas con manchas, roces, marcas, pintura saltada o pequeñas diferencias visibles.",
          icon: <Paintbrush className="h-6 w-6" />,
        },
        {
          title: "Después de tapar agujeros",
          text: "Pintura localizada después de reparar agujeros de cuadros, TV, estanterías o tacos antiguos.",
          icon: <Layers className="h-6 w-6" />,
        },
        {
          title: "Igualar pintura",
          text: "Revisión del color, acabado, brillo y estado de la pared para intentar igualar el retoque.",
          icon: <Palette className="h-6 w-6" />,
        },
        {
          title: "Una pared o zona",
          text: "Pintura de una pared, una esquina, una zona dañada o un área concreta sin pintar todo el piso.",
          icon: <Ruler className="h-6 w-6" />,
        },
        {
          title: "Alquiler y entrega",
          text: "Retoques antes de entregar llaves, devolver el piso o preparar una vivienda para nuevos inquilinos.",
          icon: <Home className="h-6 w-6" />,
        },
        {
          title: "Airbnb y mantenimiento",
          text: "Retoques rápidos entre huéspedes para mejorar la presentación del apartamento.",
          icon: <Hotel className="h-6 w-6" />,
        },
      ]
    : [
        {
          title: "Small touch-ups",
          text: "Specific areas with stains, scratches, marks, chipped paint or small visible differences.",
          icon: <Paintbrush className="h-6 w-6" />,
        },
        {
          title: "After filling holes",
          text: "Local painting after repairing holes from pictures, TVs, shelves or old wall plugs.",
          icon: <Layers className="h-6 w-6" />,
        },
        {
          title: "Paint matching",
          text: "Checking colour, finish, sheen and wall condition to make the touch-up as close as possible.",
          icon: <Palette className="h-6 w-6" />,
        },
        {
          title: "One wall or area",
          text: "Painting one wall, one corner, a damaged area or a specific zone without painting the whole apartment.",
          icon: <Ruler className="h-6 w-6" />,
        },
        {
          title: "Rental handover",
          text: "Touch-ups before handing over keys, returning the apartment or preparing it for new tenants.",
          icon: <Home className="h-6 w-6" />,
        },
        {
          title: "Airbnb maintenance",
          text: "Fast touch-ups between guests to improve apartment presentation.",
          icon: <Hotel className="h-6 w-6" />,
        },
      ];

  const prices = isEs
    ? [
        ["Retoque pequeño", "desde 49 €"],
        ["Preparación de pared", "desde 35 €"],
        ["Pintar una zona", "desde 49 €"],
        ["Pintar una pared", "desde 69 €"],
        ["Después de reparar agujeros", "desde 49 €"],
        ["Visita / revisión", "desde 49 €"],
      ]
    : [
        ["Small touch-up", "from €49"],
        ["Wall preparation", "from €35"],
        ["Paint one area", "from €49"],
        ["Paint one wall", "from €69"],
        ["After filling holes", "from €49"],
        ["Visit / inspection", "from €49"],
      ];

  const process = isEs
    ? [
        ["1. Envía fotos", "Manda fotos de la pared, manchas, roces o zonas dañadas."],
        ["2. Revisamos pintura", "Valoramos color, brillo, estado de la pared y si hay pintura disponible."],
        ["3. Preparamos zona", "Si hace falta, aplicamos masilla, lijado o limpieza antes de pintar."],
        ["4. Retocamos", "Pintamos la zona concreta intentando que el acabado quede discreto."],
        ["5. Revisión final", "Comprobamos cobertura, bordes, luz y aspecto general del retoque."],
      ]
    : [
        ["1. Send photos", "Send photos of the wall, stains, scratches or damaged areas."],
        ["2. Check paint", "We check colour, sheen, wall condition and whether paint is available."],
        ["3. Prepare area", "If needed, we apply filler, sanding or cleaning before painting."],
        ["4. Touch up", "We paint the specific area trying to keep the finish discreet."],
        ["5. Final check", "We check coverage, edges, light and the general appearance of the touch-up."],
      ];

  const paintProblems = isEs
    ? [
        "Manchas visibles en pared",
        "Roce de muebles",
        "Pintura levantada",
        "Desconchones pequeños",
        "Agujeros ya reparados",
        "Marcas de cuadros o TV",
        "Esquinas sucias o golpeadas",
        "Pared preparada para entrega",
        "Diferencia de color",
        "Zona reparada con masilla",
        "Pintura vieja o apagada",
        "Retoques antes de alquilar",
      ]
    : [
        "Visible wall stains",
        "Furniture scratches",
        "Peeling paint",
        "Small chips",
        "Already repaired holes",
        "Picture or TV marks",
        "Dirty or damaged corners",
        "Wall prepared for handover",
        "Colour difference",
        "Area repaired with filler",
        "Old or faded paint",
        "Touch-ups before renting",
      ];

  const paintTypes = isEs
    ? [
        {
          title: "Pintura mate",
          text: "Muy común en viviendas. Ayuda a disimular imperfecciones, pero el color puede variar si la pintura antigua está envejecida.",
        },
        {
          title: "Pintura satinada",
          text: "Tiene más brillo y puede mostrar diferencias de tono si se retoca solo una zona pequeña.",
        },
        {
          title: "Pintura blanca",
          text: "No todos los blancos son iguales. Conviene revisar si es blanco puro, roto, cálido o frío.",
        },
        {
          title: "Pintura existente",
          text: "Si tienes el bote original, el retoque puede ser más fácil, aunque la pared puede haber cambiado con el tiempo.",
        },
      ]
    : [
        {
          title: "Matte paint",
          text: "Very common in homes. It helps hide imperfections, but colour can vary if the old paint has aged.",
        },
        {
          title: "Satin paint",
          text: "It has more sheen and can show tone differences if only a small area is touched up.",
        },
        {
          title: "White paint",
          text: "Not all whites are the same. It is useful to check whether it is pure, off-white, warm or cool.",
        },
        {
          title: "Existing paint",
          text: "If you have the original bucket, the touch-up can be easier, although the wall may have changed over time.",
        },
      ];

  const faqs = isEs
    ? [
        {
          q: "¿Hacéis pequeños retoques de pintura?",
          a: "Sí. Hacemos retoques localizados en paredes con manchas, roces, agujeros reparados, pintura saltada o pequeños desperfectos visibles.",
        },
        {
          q: "¿Pintáis solo una pared?",
          a: "Sí. Podemos pintar una pared, una zona concreta, una esquina o una parte dañada sin pintar todo el piso.",
        },
        {
          q: "¿Podéis igualar el color de la pared?",
          a: "Intentamos igualar el color lo mejor posible, pero el resultado depende de la pintura original, antigüedad, luz, textura y acabado.",
        },
        {
          q: "¿Hace falta comprar pintura nueva?",
          a: "Depende. Si tienes la pintura original, mejor. Si no, se puede buscar un color parecido o consultar en tienda con una muestra.",
        },
        {
          q: "¿Se notará el retoque?",
          a: "Puede notarse si la pintura antigua está envejecida, si hay mucha luz lateral o si el acabado no coincide. Siempre buscamos que quede lo más discreto posible.",
        },
        {
          q: "¿Preparáis la pared antes de pintar?",
          a: "Sí. Si hace falta, se puede aplicar masilla, lijar, limpiar la zona y preparar la superficie antes del retoque.",
        },
        {
          q: "¿Pintáis después de reparar agujeros?",
          a: "Sí. Es habitual pintar después de tapar agujeros de cuadros, estanterías, TV o tacos antiguos.",
        },
        {
          q: "¿Trabajáis en pisos de alquiler?",
          a: "Sí. Los retoques de pintura son muy útiles antes de entregar llaves, preparar un piso para alquiler o recibir nuevos inquilinos.",
        },
        {
          q: "¿También trabajáis con Airbnb?",
          a: "Sí. Hacemos retoques rápidos para apartamentos Airbnb entre huéspedes o antes de nuevas reservas.",
        },
        {
          q: "¿Cuánto cuesta un retoque de pintura?",
          a: "Depende del tamaño, pintura, preparación y dificultad. Los retoques pequeños suelen empezar desde 49 €.",
        },
      ]
    : [
        {
          q: "Do you do small paint touch-ups?",
          a: "Yes. We do local touch-ups on walls with stains, scratches, repaired holes, chipped paint or small visible damage.",
        },
        {
          q: "Can you paint only one wall?",
          a: "Yes. We can paint one wall, one specific area, one corner or a damaged section without painting the whole apartment.",
        },
        {
          q: "Can you match the wall colour?",
          a: "We try to match the colour as closely as possible, but the result depends on original paint, age, light, texture and finish.",
        },
        {
          q: "Do I need to buy new paint?",
          a: "It depends. If you have the original paint, that is better. If not, a similar colour can be found or checked in store with a sample.",
        },
        {
          q: "Will the touch-up be visible?",
          a: "It may be visible if the old paint has aged, there is strong side light or the finish does not match. We always aim for the most discreet result possible.",
        },
        {
          q: "Do you prepare the wall before painting?",
          a: "Yes. If needed, filler, sanding, cleaning and surface preparation can be done before the touch-up.",
        },
        {
          q: "Do you paint after repairing holes?",
          a: "Yes. It is common to paint after filling holes from pictures, shelves, TVs or old wall plugs.",
        },
        {
          q: "Do you work in rental apartments?",
          a: "Yes. Paint touch-ups are very useful before handing over keys, preparing an apartment for rent or receiving new tenants.",
        },
        {
          q: "Do you also work with Airbnb?",
          a: "Yes. We do fast touch-ups for Airbnb apartments between guests or before new bookings.",
        },
        {
          q: "How much does a paint touch-up cost?",
          a: "It depends on size, paint, preparation and difficulty. Small touch-ups usually start from €49.",
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
          ? "Retoques de pintura en Valencia"
          : "Paint touch-ups in Valencia",
        serviceType: isEs
          ? "Retoques de pintura y pintura localizada"
          : "Paint touch-ups and local painting",
        provider: {
          "@id": `${baseUrl}/#localbusiness`,
        },
        areaServed: areas,
        url: pageUrl,
        description: isEs
          ? "Servicio de retoques de pintura en Valencia para manchas, roces, agujeros reparados, desconchones, paredes dañadas, alquileres y Airbnb."
          : "Paint touch-up service in Valencia for stains, scratches, repaired holes, chipped paint, damaged walls, rentals and Airbnb.",
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
            name: isEs ? "Retoques de pintura" : "Paint touch-ups",
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
                ? "Retoques de pintura en Valencia"
                : "Paint touch-ups in Valencia"}
            </h1>

            <p className="mt-6 max-w-4xl text-lg leading-8 text-neutral-700">
              {isEs
                ? "Retoques de pintura para paredes con manchas, roces, agujeros reparados, desconchones, marcas de muebles o pequeñas zonas dañadas. Ideal para pisos de alquiler, Airbnb, preparación antes de entregar llaves y pintura localizada sin pintar todo el piso."
                : "Paint touch-ups for walls with stains, scratches, repaired holes, chips, furniture marks or small damaged areas. Ideal for rental apartments, Airbnb, preparation before key handover and local painting without painting the whole apartment."}
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
                  title: isEs ? "Rápido y localizado" : "Fast and local",
                  text: isEs
                    ? "Retoques concretos sin pintar toda la vivienda."
                    : "Specific touch-ups without painting the whole property.",
                },
                {
                  icon: ShieldCheck,
                  title: isEs ? "Acabado discreto" : "Discreet finish",
                  text: isEs
                    ? "Preparación, lijado y aplicación cuidada."
                    : "Preparation, sanding and careful application.",
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
              <Paintbrush className="h-4 w-4" />
              {isEs ? "Pintura localizada" : "Local painting"}
            </div>

            <h2 className="mt-4 text-3xl font-black sm:text-4xl">
              {isEs
                ? "Retoques de pintura sin pintar todo el piso"
                : "Paint touch-ups without painting the whole apartment"}
            </h2>

            <p className="mt-4 max-w-4xl leading-8 text-neutral-700">
              {isEs
                ? "No siempre hace falta pintar toda la vivienda. Muchas veces basta con preparar una zona, reparar pequeños desperfectos y retocar una pared, una esquina o una parte dañada para mejorar mucho la presentación."
                : "It is not always necessary to paint the whole property. Many times it is enough to prepare one area, repair small damage and touch up one wall, one corner or one damaged section to greatly improve presentation."}
            </p>
          </div>

          <Link
            href={`/${locale}/services/reparacion-paredes-valencia`}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-neutral-300 bg-white px-5 py-3 text-sm font-bold shadow-sm transition hover:scale-105"
          >
            {isEs ? "Reparación de paredes" : "Wall repair"}
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
                  ? "Precio de retoques de pintura en Valencia"
                  : "Paint touch-up prices in Valencia"}
              </h2>

              <p className="mt-5 text-lg leading-8 text-neutral-700">
                {isEs
                  ? "El precio depende del tamaño de la zona, estado de la pared, preparación necesaria, tipo de pintura, color, acceso y si ya tienes pintura disponible. Para calcular mejor, envía fotos por WhatsApp."
                  : "The price depends on the size of the area, wall condition, required preparation, paint type, colour, access and whether you already have paint available. To estimate better, send photos by WhatsApp."}
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
                    className="flex items-center justify-between rounded-xl bg-yellow-50 p-4"
                  >
                    <span className="font-semibold">{name}</span>
                    <span className="font-black">{price}</span>
                  </div>
                ))}
              </div>

              <p className="mt-5 text-sm leading-6 text-neutral-600">
                {isEs
                  ? "La pintura y materiales pueden calcularse aparte si no los tienes. Si tienes el bote original, envía una foto de la etiqueta."
                  : "Paint and materials can be calculated separately if you do not have them. If you have the original bucket, send a photo of the label."}
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
              ? "Cómo hacemos un retoque de pintura"
              : "How we do a paint touch-up"}
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
                {isEs ? "Por qué retocar" : "Why touch up"}
              </div>

              <h2 className="mt-4 text-3xl font-black sm:text-4xl">
                {isEs
                  ? "Un retoque de pintura puede cambiar toda la impresión"
                  : "A paint touch-up can change the whole impression"}
              </h2>

              <p className="mt-5 text-lg leading-8 text-neutral-300">
                {isEs
                  ? "Una pared con manchas, roces o parches sin pintar puede hacer que el piso parezca descuidado. Un retoque bien preparado ayuda a mejorar la imagen antes de una visita, una entrega de llaves, un nuevo huésped o una publicación de alquiler."
                  : "A wall with stains, scratches or unpainted patches can make the apartment look neglected. A well-prepared touch-up helps improve the appearance before a visit, key handover, a new guest or a rental listing."}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                [Brush, isEs ? "Pintura localizada" : "Local painting"],
                [ShieldCheck, isEs ? "Acabado discreto" : "Discreet finish"],
                [Home, isEs ? "Pisos y alquileres" : "Homes & rentals"],
                [Palette, isEs ? "Color y acabado" : "Colour & finish"],
              ].map(([Icon, title]) => {
                const LucideIcon = Icon as typeof Brush;

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
              {isEs ? "Problemas habituales" : "Common paint issues"}
            </div>

            <h2 className="mt-4 text-3xl font-black sm:text-4xl">
              {isEs
                ? "Zonas donde un retoque de pintura ayuda mucho"
                : "Areas where a paint touch-up helps a lot"}
            </h2>

            <p className="mt-5 text-lg leading-8 text-neutral-700">
              {isEs
                ? "Los retoques de pintura son útiles cuando el daño está localizado. En vez de pintar toda la vivienda, se puede mejorar una pared, una esquina, una zona reparada o un área visible que afecta la presentación general."
                : "Paint touch-ups are useful when the damage is localised. Instead of painting the whole property, one wall, one corner, one repaired area or one visible section can be improved."}
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {paintProblems.map((item) => (
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
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-white px-4 py-1 text-xs font-bold">
              <Droplets className="h-4 w-4" />
              {isEs ? "Tipos de pintura" : "Paint types"}
            </div>

            <h2 className="mt-4 text-3xl font-black sm:text-4xl">
              {isEs
                ? "Color, brillo y acabado importan mucho"
                : "Colour, sheen and finish matter a lot"}
            </h2>

            <p className="mx-auto mt-4 max-w-3xl leading-8 text-neutral-700">
              {isEs
                ? "El retoque perfecto depende de la pintura original, la luz, la edad de la pared y el tipo de acabado. Por eso siempre es mejor ver fotos antes de confirmar."
                : "A perfect touch-up depends on the original paint, light, wall age and finish type. That is why it is always better to see photos before confirming."}
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {paintTypes.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-md"
              >
                <h3 className="text-xl font-black">{item.title}</h3>
                <p className="mt-4 leading-7 text-neutral-700">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-yellow-50 px-4 py-1 text-xs font-bold">
              <Sparkles className="h-4 w-4" />
              SEO • paint touch-ups Valencia
            </div>

            <h2 className="mt-4 text-3xl font-black sm:text-4xl">
              {isEs
                ? "Retoques de pintura en Valencia"
                : "Paint touch-ups in Valencia"}
            </h2>

            <div className="mt-6 space-y-5 text-lg leading-8 text-neutral-700">
              {isEs ? (
                <>
                  <p>
                    Si necesitas <strong>retoques de pintura en Valencia</strong>,
                    THEVULGO puede ayudarte con pintura localizada para paredes
                    con manchas, roces, agujeros reparados, desconchones, marcas
                    de muebles o pequeñas zonas dañadas.
                  </p>

                  <p>
                    Este servicio es ideal cuando no quieres pintar todo el piso,
                    pero hay una pared, una esquina o una zona concreta que se ve
                    mal. También es muy útil antes de entregar un piso de alquiler,
                    preparar una vivienda para nuevos inquilinos, mejorar un Airbnb
                    entre huéspedes o dejar una habitación más presentable.
                  </p>

                  <p>
                    Los retoques de pintura suelen requerir preparación previa.
                    Si hay agujeros, golpes o zonas irregulares, primero puede
                    hacer falta aplicar masilla, lijar, limpiar la superficie y
                    después pintar. El objetivo es que el resultado quede lo más
                    discreto posible.
                  </p>

                  <p>
                    Para calcular un presupuesto, envía fotos por WhatsApp.
                    Una foto cercana de la zona dañada y otra general de la pared
                    ayudan a revisar el color, acabado, luz, textura y tamaño del
                    trabajo. Si tienes el bote de pintura original, también puedes
                    enviar una foto de la etiqueta.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    If you need <strong>paint touch-ups in Valencia</strong>,
                    THEVULGO can help with local painting for walls with stains,
                    scratches, repaired holes, chips, furniture marks or small
                    damaged areas.
                  </p>

                  <p>
                    This service is ideal when you do not want to paint the whole
                    apartment, but one wall, one corner or one specific area looks
                    bad. It is also useful before handing over a rental apartment,
                    preparing a property for new tenants, improving an Airbnb
                    between guests or making a room more presentable.
                  </p>

                  <p>
                    Paint touch-ups often require previous preparation. If there
                    are holes, dents or uneven areas, filler, sanding, cleaning and
                    then painting may be needed first. The goal is to make the
                    result as discreet as possible.
                  </p>

                  <p>
                    To calculate an estimate, send photos by WhatsApp. One close-up
                    photo of the damaged area and one general photo of the wall help
                    check colour, finish, light, texture and job size. If you have
                    the original paint bucket, you can also send a photo of the
                    label.
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
                    "Envía una foto cercana de la zona dañada",
                    "Envía una foto general de la pared",
                    "Indica si tienes pintura original",
                    "Manda foto de la etiqueta del bote si la tienes",
                    "Explica si hay agujeros o solo pintura",
                    "Indica si es antes de entregar un piso",
                    "Confirma la zona de Valencia",
                  ]
                : [
                    "Send a close-up photo of the damaged area",
                    "Send a general photo of the wall",
                    "Say if you have original paint",
                    "Send a photo of the paint bucket label if available",
                    "Explain if there are holes or only paint",
                    "Mention if it is before apartment handover",
                    "Confirm the area of Valencia",
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
                ? "Más servicios para paredes, agujeros, alquileres y Airbnb"
                : "More services for walls, holes, rentals and Airbnb"}
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

      <section className="border-y border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-yellow-50 px-4 py-1 text-xs font-bold">
              <MapPin className="h-4 w-4 text-yellow-500" />
              {isEs ? "Zonas de servicio" : "Service areas"}
            </div>

            <h2 className="mt-4 text-3xl font-black sm:text-4xl">
              {isEs
                ? "Retoques de pintura en Valencia y alrededores"
                : "Paint touch-ups in Valencia and nearby areas"}
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
                  ? "¿Necesitas retoques de pintura en Valencia?"
                  : "Need paint touch-ups in Valencia?"}
              </h2>

              <p className="mt-4 max-w-3xl text-lg font-medium leading-8">
                {isEs
                  ? "Envía fotos por WhatsApp y te diremos qué se puede hacer, si hace falta pintura nueva y cuánto puede costar."
                  : "Send photos by WhatsApp and we will tell you what can be done, whether new paint is needed and how much it may cost."}
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