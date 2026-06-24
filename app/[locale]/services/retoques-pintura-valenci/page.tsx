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