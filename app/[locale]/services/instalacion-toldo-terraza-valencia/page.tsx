import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CalendarCheck,
  CheckCircle2,
  Clock3,
  Drill,
  Euro,
  Hammer,
  Home,
  MapPin,
  MessageCircle,
  PackageCheck,
  Ruler,
  ShieldCheck,
  Sparkles,
  Sun,
  Umbrella,
  Wrench,
} from "lucide-react";

type Props = {
  params: Promise<{ locale: string }>;
};

const baseUrl = "https://www.thevulgo.es";
const phone = "34610076942";
const slug = "services/instalacion-toldo-terraza-valencia";

const whatsappTextEs =
  "Hola, necesito instalar un toldo para terraza en Valencia. Quiero pedir presupuesto.";
const whatsappTextEn =
  "Hello, I need to install an awning for a terrace in Valencia. I would like to request a quote.";

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
  "Cabanyal",
  "Mislata",
  "Burjassot",
  "Paterna",
  "Torrent",
];

const services = [
  "Instalación de toldo para terraza",
  "Montaje de toldo manual en terraza",
  "Montaje de toldo eléctrico en terraza",
  "Instalación de toldo en ático",
  "Instalación de toldo en patio",
  "Instalación de toldo en vivienda unifamiliar",
  "Montaje de toldo de brazo articulado",
  "Desmontaje de toldo antiguo",
  "Revisión de pared, fachada y puntos de fijación",
  "Instalación de toldos comprados en Leroy Merlin, Bauhaus o online",
];

const included = [
  "Revisión del punto de instalación",
  "Medición y marcado de soportes",
  "Taladro y fijación de soportes",
  "Colocación del toldo en la terraza",
  "Nivelación del conjunto",
  "Comprobación de apertura y cierre",
  "Ajuste básico del toldo",
  "Limpieza básica de la zona de trabajo",
];

const notIncluded = [
  "El toldo y sus accesorios",
  "Trabajo eléctrico si el toldo es motorizado",
  "Creación de nueva línea eléctrica",
  "Reparación de fachada en mal estado",
  "Trabajos en altura sin acceso seguro",
  "Permisos de comunidad si son necesarios",
  "Andamios o medios especiales de elevación",
];

const faqs = [
  {
    question: "¿Cuánto cuesta instalar un toldo para terraza en Valencia?",
    answer:
      "La instalación de un toldo para terraza en Valencia suele empezar desde 79 €. El precio final depende del tamaño del toldo, tipo de pared, altura, accesibilidad, tipo de toldo y si hay que desmontar un toldo antiguo.",
  },
  {
    question: "¿Instaláis toldos en áticos?",
    answer:
      "Sí. Podemos instalar toldos en áticos si existe acceso seguro y una pared o superficie adecuada para la fijación. Es recomendable enviar fotos antes para confirmar.",
  },
  {
    question: "¿Podéis instalar un toldo en un patio?",
    answer:
      "Sí. Instalamos toldos en patios, terrazas interiores y zonas exteriores de viviendas, siempre que se pueda fijar el sistema de forma segura.",
  },
  {
    question: "¿Instaláis toldos manuales y eléctricos para terrazas?",
    answer:
      "Sí. Podemos instalar toldos manuales y toldos eléctricos para terrazas. Si el toldo es eléctrico, revisamos también el punto de conexión disponible.",
  },
  {
    question: "¿Qué tipo de pared necesitáis para instalar el toldo?",
    answer:
      "Lo ideal es una pared resistente de ladrillo, hormigón o bloque. Si la fachada está en mal estado o hay dudas sobre la resistencia, hay que revisarlo antes.",
  },
  {
    question: "¿Cuánto tarda la instalación de un toldo en terraza?",
    answer:
      "Normalmente tarda entre 1,5 y 4 horas, dependiendo del tamaño del toldo, tipo de pared, altura, accesibilidad y si es manual o eléctrico.",
  },
  {
    question: "¿Podéis desmontar el toldo antiguo?",
    answer:
      "Sí. Podemos desmontar el toldo antiguo antes de instalar el nuevo. Para calcular el precio, envíanos fotos del toldo existente.",
  },
  {
    question: "¿Instaláis toldos comprados por Internet?",
    answer:
      "Sí. Podemos instalar toldos comprados por Internet, Leroy Merlin, Bauhaus, Amazon u otra tienda. Envíanos el enlace del producto y fotos de la terraza.",
  },
];

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";

  const title = isEs
    ? "Instalación de toldo para terraza en Valencia | Desde 79€"
    : "Terrace awning installation in Valencia | From €79";

  const description = isEs
    ? "Instalación de toldos para terrazas en Valencia. Montaje profesional en viviendas, áticos y patios. Presupuesto rápido por WhatsApp."
    : "Terrace awning installation in Valencia. Professional installation for homes, penthouses and patios. Fast quote by WhatsApp.";

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
      siteName: "THEVULGO",
      locale: isEs ? "es_ES" : "en_US",
      type: "website",
    },
  };
}

export default async function TerraceAwningPage({ params }: Props) {
  const { locale } = await params;
  const isEs = locale === "es";

  const whatsappText = isEs ? whatsappTextEs : whatsappTextEn;
  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(
    whatsappText
  )}`;

  const pageUrl = `${baseUrl}/${locale}/${slug}`;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "THEVULGO",
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
      "@context": "https://schema.org",
      "@type": "Service",
      name: isEs
        ? "Instalación de toldo para terraza en Valencia"
        : "Terrace awning installation in Valencia",
      serviceType: "Terrace awning installation",
      provider: {
        "@type": "LocalBusiness",
        name: "THEVULGO",
      },
      areaServed: areas,
      url: pageUrl,
      offers: {
        "@type": "Offer",
        priceCurrency: "EUR",
        price: "79",
        availability: "https://schema.org/InStock",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
    {
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
            ? "Instalación de toldo para terraza"
            : "Terrace awning installation",
          item: pageUrl,
        },
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-white text-slate-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-slate-50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(251,146,60,0.16),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.08),transparent_35%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white px-4 py-2 text-sm font-medium text-orange-700 shadow-sm">
              <Sun className="h-4 w-4" />
              {isEs
                ? "Instalación de toldos para terrazas en Valencia"
                : "Terrace awning installation in Valencia"}
            </div>

            <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              {isEs
                ? "Instalación de toldo para terraza en Valencia"
                : "Terrace awning installation in Valencia"}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
              {isEs
                ? "Instalamos toldos para terrazas, áticos, patios y zonas exteriores. Montaje seguro, nivelado y adaptado al tipo de pared, altura y acceso de tu vivienda."
                : "We install awnings for terraces, penthouses, patios and outdoor areas. Safe, level installation adapted to your wall type, height and access."}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappUrl}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-950 px-6 py-4 text-base font-semibold text-white shadow-lg transition hover:bg-slate-800"
              >
                <MessageCircle className="h-5 w-5" />
                {isEs ? "Pedir presupuesto por WhatsApp" : "Request quote"}
              </a>

              <Link
                href={`/${locale}/services/instalacion-toldo-manual-valencia`}
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-6 py-4 text-base font-semibold text-slate-950 shadow-sm transition hover:bg-slate-50"
              >
                {isEs ? "Ver toldo manual" : "See manual awning"}
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
                        <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <Euro className="mb-2 h-5 w-5 text-orange-600" />
                <p className="font-semibold">{isEs ? "Desde 79€" : "From €79"}</p>
                <p className="text-sm text-slate-600">
                  {isEs ? "Precio claro antes de empezar" : "Clear price before work"}
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <Clock3 className="mb-2 h-5 w-5 text-orange-600" />
                <p className="font-semibold">1,5–4h</p>
                <p className="text-sm text-slate-600">
                  {isEs ? "Tiempo habitual de montaje" : "Typical installation time"}
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <ShieldCheck className="mb-2 h-5 w-5 text-orange-600" />
                <p className="font-semibold">{isEs ? "Fijación segura" : "Safe fixing"}</p>
                <p className="text-sm text-slate-600">
                  {isEs ? "Para terraza, ático o patio" : "For terrace, penthouse or patio"}
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl">
            <div className="rounded-[1.5rem] bg-slate-950 p-6 text-white">
              <Umbrella className="mb-6 h-12 w-12 text-orange-300" />
              <h2 className="text-2xl font-bold">
                {isEs ? "¿Qué necesitamos para darte precio?" : "What do we need for a quote?"}
              </h2>

              <ul className="mt-6 space-y-4 text-sm leading-6 text-slate-200">
                <li className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-orange-300" />
                  {isEs ? "Foto o enlace del toldo" : "Photo or link of the awning"}
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-orange-300" />
                  {isEs ? "Medidas aproximadas del toldo" : "Approximate awning measurements"}
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-orange-300" />
                  {isEs ? "Foto de la terraza o zona exterior" : "Photo of the terrace or outdoor area"}
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-orange-300" />
                  {isEs
                    ? "Foto de la pared o fachada donde irá fijado"
                    : "Photo of the wall or façade where it will be fixed"}
                </li>
              </ul>

              <a
                href={whatsappUrl}
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-orange-400 px-5 py-4 font-semibold text-slate-950 transition hover:bg-orange-300"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {[
            {
              icon: Drill,
              title: isEs ? "Montaje en terraza" : "Terrace mounting",
              text: isEs
                ? "Instalamos el toldo en terrazas, áticos, patios y zonas exteriores con una fijación adaptada a la pared."
                : "We install the awning on terraces, penthouses, patios and outdoor areas with fixing adapted to the wall.",
            },
            {
              icon: Ruler,
              title: isEs ? "Nivelado y centrado" : "Level and centered",
              text: isEs
                ? "Marcamos los soportes con cuidado para que el toldo quede recto, alineado y cómodo de usar."
                : "We carefully mark the brackets so the awning sits straight, aligned and easy to use.",
            },
            {
              icon: ShieldCheck,
              title: isEs ? "Instalación segura" : "Safe installation",
              text: isEs
                ? "Revisamos pared, altura, acceso y tipo de toldo antes de confirmar la instalación."
                : "We check wall, height, access and awning type before confirming the installation.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
            >
              <item.icon className="mb-5 h-10 w-10 text-orange-600" />
              <h2 className="text-xl font-bold">{item.title}</h2>
              <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-orange-600">
              {isEs ? "Servicio" : "Service"}
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              {isEs
                ? "Instalamos toldos para terrazas, áticos y patios"
                : "We install awnings for terraces, penthouses and patios"}
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-700">
              {isEs
                ? "Puedes enviarnos fotos por WhatsApp y revisaremos el tipo de toldo, acceso, altura, pared, fachada y si hay que desmontar un toldo anterior."
                : "You can send us photos by WhatsApp and we will check the awning type, access, height, wall, façade and whether an old awning needs to be removed."}
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {services.map((service) => (
              <div
                key={service}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <CheckCircle2 className="mb-3 h-5 w-5 text-orange-600" />
                <p className="font-medium text-slate-900">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
            <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-orange-600">
              {isEs ? "Incluido" : "Included"}
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight">
              {isEs ? "Qué incluye la instalación" : "What is included"}
            </h2>

            <div className="mt-8 space-y-4">
              {included.map((item) => (
                <div
                  key={item}
                  className="flex gap-3 rounded-2xl border border-slate-200 bg-white p-4"
                >
                  <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              {isEs ? "No incluido" : "Not included"}
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight">
              {isEs ? "No incluido por defecto" : "Not included by default"}
            </h2>

            <div className="mt-8 space-y-4">
              {notIncluded.map((item) => (
                <div
                  key={item}
                  className="flex gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4"
                >
                  <PackageCheck className="mt-0.5 h-5 w-5 shrink-0 text-slate-500" />
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-orange-300">
                {isEs ? "Precio" : "Price"}
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                {isEs
                  ? "Precio desde 79€ para instalar un toldo en terraza"
                  : "From €79 to install an awning on a terrace"}
              </h2>
              <p className="mt-4 leading-8 text-slate-300">
                {isEs
                  ? "El precio final depende del tamaño del toldo, tipo de pared, altura, acceso, si es manual o eléctrico y si hay que retirar un toldo antiguo."
                  : "The final price depends on awning size, wall type, height, access, whether it is manual or electric and whether an old awning needs to be removed."}
              </p>

              <a
                href={whatsappUrl}
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-2xl bg-orange-400 px-6 py-4 font-semibold text-slate-950 transition hover:bg-orange-300"
              >
                <MessageCircle className="h-5 w-5" />
                {isEs ? "Enviar fotos por WhatsApp" : "Send photos by WhatsApp"}
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: isEs ? "Toldo manual terraza" : "Manual terrace awning",
                  price: isEs ? "desde 79€" : "from €79",
                  text: isEs
                    ? "Para toldos manuales pequeños o medianos con acceso sencillo y pared adecuada."
                    : "For small or medium manual awnings with easy access and suitable wall.",
                },
                {
                  title: isEs ? "Toldo eléctrico terraza" : "Electric terrace awning",
                  price: isEs ? "desde 99€" : "from €99",
                  text: isEs
                    ? "Para toldos motorizados con punto eléctrico preparado o cercano."
                    : "For motorized awnings with a prepared or nearby electrical point.",
                },
                {
                  title: isEs ? "Toldo grande o pesado" : "Large or heavy awning",
                  price: isEs ? "según caso" : "case by case",
                  text: isEs
                    ? "Para toldos largos, pesados o de difícil acceso puede hacer falta más tiempo o ayuda extra."
                    : "Long, heavy or hard-to-access awnings may require more time or extra help.",
                },
                {
                  title: isEs ? "Desmontaje antiguo" : "Old awning removal",
                  price: isEs ? "extra" : "extra",
                  text: isEs
                    ? "Si hay que retirar un toldo anterior antes de instalar el nuevo, se calcula aparte."
                    : "If an old awning must be removed before installing the new one, it is calculated separately.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-white/10 bg-white/5 p-6"
                >
                  <p className="text-sm text-orange-300">{item.price}</p>
                  <h3 className="mt-2 text-xl font-bold">{item.title}</h3>
                  <p className="mt-3 leading-7 text-slate-300">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
            <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-orange-600">
              {isEs ? "Proceso" : "Process"}
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              {isEs ? "Cómo trabajamos" : "How we work"}
            </h2>
            <p className="mt-4 leading-8 text-slate-700">
              {isEs
                ? "Antes de confirmar la visita revisamos fotos para entender el tipo de toldo, terraza, acceso, altura, pared y si existe un toldo antiguo."
                : "Before confirming the visit, we check photos to understand the awning type, terrace, access, height, wall and whether there is an old awning."}
            </p>
          </div>

          <div className="space-y-5">
            {[
              {
                icon: MessageCircle,
                title: isEs ? "1. Envías fotos" : "1. Send photos",
                text: isEs
                  ? "Envíanos fotos del toldo, la terraza, la pared o fachada y las medidas aproximadas."
                  : "Send photos of the awning, terrace, wall or façade and approximate measurements.",
              },
              {
                icon: Euro,
                title: isEs ? "2. Te damos precio" : "2. We give a price",
                text: isEs
                  ? "Te damos un precio orientativo o cerrado según la información disponible."
                  : "We give an approximate or fixed price depending on the information available.",
              },
              {
                icon: CalendarCheck,
                title: isEs ? "3. Acordamos día y hora" : "3. We arrange time",
                text: isEs
                  ? "Elegimos una hora cómoda para realizar la instalación."
                  : "We choose a convenient time for the installation.",
              },
              {
                icon: Hammer,
                title: isEs ? "4. Instalamos y probamos" : "4. We install and test",
                text: isEs
                  ? "Fijamos el toldo, lo nivelamos y comprobamos que abre y cierra correctamente."
                  : "We fix the awning, level it and check that it opens and closes correctly.",
              },
            ].map((step) => (
              <div
                key={step.title}
                className="flex gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <step.icon className="mt-1 h-7 w-7 shrink-0 text-orange-600" />
                <div>
                  <h3 className="font-bold">{step.title}</h3>
                  <p className="mt-2 leading-7 text-slate-600">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-orange-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-orange-700">
                {isEs ? "Zonas" : "Areas"}
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                {isEs
                  ? "Instalación de toldos para terrazas en Valencia y alrededores"
                  : "Terrace awning installation in Valencia and nearby areas"}
              </h2>
              <p className="mt-4 leading-8 text-slate-700">
                {isEs
                  ? "Trabajamos en Valencia capital y zonas cercanas. Para confirmar disponibilidad, envía ubicación aproximada por WhatsApp."
                  : "We work in Valencia city and nearby areas. To confirm availability, send approximate location by WhatsApp."}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {areas.map((area) => (
                <div
                  key={area}
                  className="flex items-center gap-2 rounded-2xl border border-orange-100 bg-white px-4 py-3 text-sm font-medium text-slate-800 shadow-sm"
                >
                  <MapPin className="h-4 w-4 text-orange-600" />
                  {area}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-orange-600">
            FAQ
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            {isEs ? "Preguntas frecuentes" : "Frequently asked questions"}
          </h2>
          <p className="mt-4 leading-8 text-slate-700">
            {isEs
              ? "Estas son las dudas más comunes antes de instalar un toldo en terraza, ático o patio."
              : "These are the most common questions before installing an awning on a terrace, penthouse or patio."}
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-bold">{faq.question}</h3>
              <p className="mt-3 leading-7 text-slate-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm lg:p-10">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <Sparkles className="mb-5 h-10 w-10 text-orange-600" />
                <h2 className="text-3xl font-bold tracking-tight">
                  {isEs
                    ? "También instalamos otros tipos de toldos"
                    : "We also install other types of awnings"}
                </h2>
                <p className="mt-4 leading-8 text-slate-700">
                  {isEs
                    ? "Si no estás seguro de qué página encaja mejor con tu caso, puedes enviarnos fotos por WhatsApp. Te diremos si necesitas instalación de toldo manual, eléctrico, balcón, terraza o reparación."
                    : "If you are not sure which page fits your case best, send us photos by WhatsApp. We will tell you if you need manual awning, electric awning, balcony, terrace or repair service."}
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  {
                    href: `/${locale}/services/instalar-toldo-valencia`,
                    label: isEs
                      ? "Instalar toldo en Valencia"
                      : "Awning installation in Valencia",
                  },
                  {
                    href: `/${locale}/services/instalacion-toldo-manual-valencia`,
                    label: isEs
                      ? "Instalación de toldo manual"
                      : "Manual awning installation",
                  },
                  {
                    href: `/${locale}/services/instalacion-toldo-electrico-valencia`,
                    label: isEs
                      ? "Instalación de toldo eléctrico"
                      : "Electric awning installation",
                  },
                  {
                    href: `/${locale}/services/instalacion-toldo-balcon-valencia`,
                    label: isEs
                      ? "Instalación de toldo para balcón"
                      : "Balcony awning installation",
                  },
                  {
                    href: `/${locale}/services/instalacion-toldo-brazo-articulado-valencia`,
                    label: isEs
                      ? "Toldo de brazo articulado"
                      : "Folding arm awning",
                  },
                  {
                    href: `/${locale}/services/reparacion-toldo-valencia`,
                    label: isEs
                      ? "Reparación de toldo"
                      : "Awning repair",
                  },
                  {
                    href: `/${locale}/services/montaje-tv-valencia`,
                    label: isEs ? "Montaje TV Valencia" : "TV mounting Valencia",
                  },
                  {
                    href: `/${locale}/handyman-valencia`,
                    label: isEs ? "Handyman Valencia" : "Handyman Valencia",
                  },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 font-semibold text-slate-900 transition hover:bg-white"
                  >
                    {link.label}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {[
              {
                icon: Umbrella,
                title: isEs ? "Toldos para terraza" : "Terrace awnings",
                text: isEs
                  ? "Instalación de toldos para terrazas, áticos, patios y zonas exteriores."
                  : "Awning installation for terraces, penthouses, patios and outdoor areas.",
              },
              {
                icon: Wrench,
                title: isEs ? "Manual o eléctrico" : "Manual or electric",
                text: isEs
                  ? "Podemos instalar toldos manuales o eléctricos según el producto y punto de instalación."
                  : "We can install manual or electric awnings depending on the product and installation point.",
              },
              {
                icon: ShieldCheck,
                title: isEs ? "Trabajo seguro" : "Safe work",
                text: isEs
                  ? "Revisamos acceso, altura y pared antes de confirmar el montaje del toldo."
                  : "We check access, height and wall before confirming the awning installation.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
              >
                <item.icon className="mb-5 h-10 w-10 text-orange-600" />
                <h2 className="text-xl font-bold">{item.title}</h2>
                <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <Home className="mx-auto mb-6 h-12 w-12 text-orange-300" />
          <h2 className="mx-auto max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
            {isEs
              ? "¿Necesitas instalar un toldo en tu terraza?"
              : "Need to install an awning on your terrace?"}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-8 text-slate-300">
            {isEs
              ? "Envíanos fotos del toldo, la terraza, la pared y la zona de instalación. Te responderemos con precio y disponibilidad."
              : "Send us photos of the awning, terrace, wall and installation area. We will reply with price and availability."}
          </p>

          <a
            href={whatsappUrl}
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-2xl bg-orange-400 px-8 py-4 text-base font-semibold text-slate-950 shadow-lg transition hover:bg-orange-300"
          >
            <MessageCircle className="h-5 w-5" />
            {isEs ? "Pedir presupuesto ahora" : "Request a quote now"}
          </a>
        </div>
      </section>
    </main>
  );
}