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
const slug = "services/instalacion-toldo-manual-valencia";

const whatsappTextEs =
  "Hola, necesito instalar un toldo manual en Valencia. Quiero pedir presupuesto.";
const whatsappTextEn =
  "Hello, I need to install a manual awning in Valencia. I would like to request a quote.";

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
  "Instalación de toldo manual en terraza",
  "Instalación de toldo manual en balcón",
  "Montaje de toldo de brazo articulado",
  "Instalación de toldos comprados en Leroy Merlin, Bauhaus o online",
  "Desmontaje de toldo antiguo",
  "Revisión de pared, nivelación y fijación segura",
  "Instalación con tacos, tornillos o anclaje reforzado según pared",
  "Ajuste básico de apertura y cierre manual",
];

const included = [
  "Revisión del punto de instalación",
  "Medición y marcado de soportes",
  "Taladro y fijación de soportes",
  "Colocación del toldo manual",
  "Nivelación del conjunto",
  "Comprobación de apertura y cierre",
  "Limpieza básica de la zona de trabajo",
];

const notIncluded = [
  "El toldo y sus accesorios",
  "Trabajo eléctrico o motorización",
  "Reparación de fachada en mal estado",
  "Trabajos en altura sin acceso seguro",
  "Permisos de comunidad si son necesarios",
];

const faqs = [
  {
    question: "¿Cuánto cuesta instalar un toldo manual en Valencia?",
    answer:
      "La instalación de un toldo manual en Valencia suele empezar desde 79 €. El precio final depende del tamaño del toldo, tipo de pared, altura, accesibilidad y si hay que desmontar un toldo antiguo.",
  },
  {
    question: "¿Instaláis toldos manuales comprados en Leroy Merlin o Bauhaus?",
    answer:
      "Sí. Podemos instalar toldos manuales comprados en Leroy Merlin, Bauhaus, Amazon u otra tienda. Lo ideal es enviar fotos del producto, medidas y zona donde se quiere instalar.",
  },
  {
    question: "¿Qué incluye el servicio de instalación?",
    answer:
      "Incluye revisión del punto de instalación, marcado, taladro, fijación de soportes, colocación del toldo, nivelación y comprobación de apertura y cierre manual.",
  },
  {
    question: "¿Cuánto tarda la instalación de un toldo manual?",
    answer:
      "Normalmente tarda entre 1,5 y 3 horas, según tamaño del toldo, tipo de pared, altura y dificultad de acceso.",
  },
  {
    question: "¿Podéis desmontar el toldo antiguo?",
    answer:
      "Sí. Podemos desmontar el toldo antiguo antes de instalar el nuevo. Es recomendable enviar fotos para calcular el tiempo y el coste.",
  },
  {
    question: "¿Instaláis toldos en terraza y balcón?",
    answer:
      "Sí. Instalamos toldos manuales en terrazas, balcones, patios y fachadas, siempre que exista una superficie segura para fijar los soportes.",
  },
];

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";

  const title = isEs
    ? "Instalación de toldo manual en Valencia | Desde 79€"
    : "Manual awning installation in Valencia | From €79";

  const description = isEs
    ? "Instalamos toldos manuales en Valencia. Montaje seguro en terraza, balcón y fachada. Presupuesto por WhatsApp."
    : "Manual awning installation in Valencia. Safe mounting on terraces, balconies and façades. Quote by WhatsApp.";

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

export default async function ManualAwningPage({ params }: Props) {
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
        ? "Instalación de toldo manual en Valencia"
        : "Manual awning installation in Valencia",
      serviceType: "Manual awning installation",
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
            ? "Instalación de toldo manual"
            : "Manual awning installation",
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
                ? "Instalación de toldos manuales en Valencia"
                : "Manual awning installation in Valencia"}
            </div>

            <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              {isEs
                ? "Instalación de toldo manual en Valencia"
                : "Manual awning installation in Valencia"}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
              {isEs
                ? "Montamos toldos manuales en terrazas, balcones, patios y fachadas. Instalación segura, nivelada y adaptada al tipo de pared: ladrillo, hormigón, bloque o fachada."
                : "We install manual awnings on terraces, balconies, patios and façades. Safe, level installation adapted to the wall type: brick, concrete, block or façade."}
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
                href={`/${locale}/handyman-valencia`}
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-6 py-4 text-base font-semibold text-slate-950 shadow-sm transition hover:bg-slate-50"
              >
                {isEs ? "Ver otros servicios" : "See other services"}
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
                <p className="font-semibold">1,5–3h</p>
                <p className="text-sm text-slate-600">
                  {isEs ? "Tiempo habitual de montaje" : "Typical installation time"}
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <ShieldCheck className="mb-2 h-5 w-5 text-orange-600" />
                <p className="font-semibold">{isEs ? "Fijación segura" : "Safe fixing"}</p>
                <p className="text-sm text-slate-600">
                  {isEs ? "Según tipo de pared" : "Based on wall type"}
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
                  {isEs ? "Foto del toldo o enlace del producto" : "Photo or link of the awning"}
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-orange-300" />
                  {isEs ? "Medidas aproximadas del toldo" : "Approximate awning measurements"}
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-orange-300" />
                  {isEs ? "Foto de la pared o fachada" : "Photo of the wall or façade"}
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-orange-300" />
                  {isEs ? "Altura y acceso al punto de montaje" : "Height and access to the mounting point"}
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
              title: isEs ? "Montaje profesional" : "Professional mounting",
              text: isEs
                ? "Instalamos los soportes correctamente, alineamos el toldo y comprobamos que abre y cierra bien."
                : "We install the brackets correctly, align the awning and check smooth opening and closing.",
            },
            {
              icon: Ruler,
              title: isEs ? "Nivelado y centrado" : "Level and centered",
              text: isEs
                ? "Marcamos los puntos de fijación con cuidado para que el toldo quede recto y bien colocado."
                : "We carefully mark fixing points so the awning sits straight and properly positioned.",
            },
            {
              icon: ShieldCheck,
              title: isEs ? "Fijación segura" : "Secure fixing",
              text: isEs
                ? "Usamos la fijación adecuada según pared: ladrillo, bloque, hormigón o fachada."
                : "We use the right fixing method depending on wall type: brick, block, concrete or façade.",
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
                ? "Instalamos toldos manuales de diferentes tipos"
                : "We install different types of manual awnings"}
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-700">
              {isEs
                ? "Puedes enviarnos fotos por WhatsApp y te diremos si la instalación es posible, qué material puede hacer falta y el precio aproximado."
                : "You can send us photos by WhatsApp and we will tell you if the installation is possible, what materials may be needed and the approximate price."}
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
            <h2 className="text-3xl font-bold tracking-tight">
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
            <h2 className="text-3xl font-bold tracking-tight">
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
                  ? "Precio desde 79€ para instalación de toldo manual"
                  : "From €79 for manual awning installation"}
              </h2>
              <p className="mt-4 leading-8 text-slate-300">
                {isEs
                  ? "El precio puede cambiar según tamaño del toldo, altura, tipo de pared, accesibilidad y si hay que desmontar un toldo antiguo."
                  : "The price may change depending on awning size, height, wall type, accessibility and whether an old awning needs to be removed."}
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
                  title: isEs ? "Instalación básica" : "Basic installation",
                  price: "desde 79€",
                  text: isEs
                    ? "Para toldo manual pequeño o medio, con acceso sencillo y pared adecuada."
                    : "For small or medium manual awning with easy access and suitable wall.",
                },
                {
                  title: isEs ? "Toldo grande" : "Large awning",
                  price: isEs ? "según caso" : "case by case",
                  text: isEs
                    ? "Para toldos más pesados o largos, puede hacer falta ayuda extra o fijación reforzada."
                    : "For heavier or longer awnings, extra help or reinforced fixing may be needed.",
                },
                {
                  title: isEs ? "Desmontaje antiguo" : "Old awning removal",
                  price: isEs ? "extra" : "extra",
                  text: isEs
                    ? "Si hay que retirar un toldo anterior antes de instalar el nuevo."
                    : "If an old awning must be removed before installing the new one.",
                },
                {
                  title: isEs ? "Anclaje reforzado" : "Reinforced anchors",
                  price: isEs ? "extra" : "extra",
                  text: isEs
                    ? "Cuando la pared requiere tacos especiales, químico o solución más fuerte."
                    : "When the wall requires special plugs, chemical anchors or stronger fixing.",
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
          </div>

          <div className="space-y-5">
            {[
              {
                icon: MessageCircle,
                title: isEs ? "1. Envías fotos" : "1. Send photos",
                text: isEs
                  ? "Envíanos fotos del toldo, la pared, la terraza o balcón y las medidas aproximadas."
                  : "Send photos of the awning, wall, terrace or balcony and approximate measurements.",
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
                title: isEs ? "4. Instalamos el toldo" : "4. We install the awning",
                text: isEs
                  ? "Fijamos, nivelamos y comprobamos que el toldo manual funcione correctamente."
                  : "We fix, level and check that the manual awning works correctly.",
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
                  ? "Instalación de toldos manuales en Valencia y alrededores"
                  : "Manual awning installation in Valencia and nearby areas"}
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
                    ? "También podemos ayudarte con otros trabajos"
                    : "We can also help with other jobs"}
                </h2>
                <p className="mt-4 leading-8 text-slate-700">
                  {isEs
                    ? "Si además del toldo necesitas montar muebles, instalar lámparas, colgar TV, reparar pared o hacer pequeños trabajos de handyman, podemos verlo en la misma visita."
                    : "If besides the awning you need furniture assembly, light installation, TV mounting, wall repair or small handyman jobs, we can check it during the same visit."}
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
                    href: `/${locale}/handyman-valencia`,
                    label: isEs ? "Handyman Valencia" : "Handyman Valencia",
                  },
                  {
                    href: `/${locale}/services/montaje-tv-valencia`,
                    label: isEs ? "Montaje TV Valencia" : "TV mounting Valencia",
                  },
                  {
                    href: `/${locale}/services/montaje-muebles-valencia`,
                    label: isEs
                      ? "Montaje de muebles Valencia"
                      : "Furniture assembly Valencia",
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

      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <Home className="mx-auto mb-6 h-12 w-12 text-orange-300" />
          <h2 className="mx-auto max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
            {isEs
              ? "¿Necesitas instalar un toldo manual en Valencia?"
              : "Need to install a manual awning in Valencia?"}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-8 text-slate-300">
            {isEs
              ? "Envíanos fotos del toldo, la pared y la zona de instalación. Te responderemos con el precio y disponibilidad."
              : "Send us photos of the awning, wall and installation area. We will reply with price and availability."}
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