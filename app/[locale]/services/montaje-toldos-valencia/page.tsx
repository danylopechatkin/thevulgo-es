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
  Star,
  Store,
  Sun,
  Umbrella,
  Users,
  Wind,
  Wrench,
  Building2,
  ClipboardCheck,
  HelpCircle,
  Layers,
  Phone,
  ThumbsUp,
  Zap,
} from "lucide-react";

type Props = {
  params: Promise<{ locale: string }>;
};

const baseUrl = "https://www.thevulgo.es";
const phone = "34610076942";
const slug = "services/montaje-toldos-valencia";

const whatsappTextEs =
  "Hola, necesito montar un toldo en Valencia. Quiero pedir presupuesto.";
const whatsappTextEn =
  "Hello, I need awning installation in Valencia. I would like to request a quote.";

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
  "Alboraya",
  "Xirivella",
];

const relatedPages = [
  {
    title: "Instalación de toldos en Valencia",
    href: "/services/instalacion-toldos-valencia",
  },
  {
    title: "Instalar un toldo en Valencia",
    href: "/services/instalar-toldo-valencia",
  },
  {
    title: "Instalador de toldos en Valencia",
    href: "/services/instalador-toldos-valencia",
  },
  {
    title: "Manitas para instalar toldos",
    href: "/services/manitas-instalacion-toldos-valencia",
  },
];

const faqsEs = [
  {
    question: "¿Cuánto cuesta el montaje de un toldo en Valencia?",
    answer:
      "El montaje de toldos en Valencia empieza desde 145 €. El precio final depende del tamaño del toldo, tipo de pared, altura, acceso, número de soportes y si se necesita una segunda persona.",
  },
  {
    question: "¿Montáis toldos comprados en Leroy Merlin?",
    answer:
      "Sí. Podemos montar toldos comprados en Leroy Merlin, Naterial, Calima, Amazon y otras tiendas. Es recomendable enviar el enlace o el manual del modelo antes de confirmar el presupuesto.",
  },
  {
    question: "¿El precio incluye materiales?",
    answer:
      "El precio desde 145 € corresponde a la mano de obra. Si hacen falta tacos especiales, anclaje químico, tornillería adicional u otros materiales, se confirma antes de instalarlos.",
  },
  {
    question: "¿Se puede hacer presupuesto por WhatsApp?",
    answer:
      "Sí. Puede enviar fotos del lugar, medidas del toldo y modelo o enlace del producto. Con esa información podemos dar un presupuesto orientativo o exacto según el caso.",
  },
  {
    question: "¿Hace falta trabajar entre dos personas?",
    answer:
      "Para toldos grandes o pesados normalmente es recomendable trabajar entre dos personas para sujetar el toldo y realizar una instalación segura.",
  },
];

const faqsEn = [
  {
    question: "How much does awning mounting cost in Valencia?",
    answer:
      "Awning mounting in Valencia starts from €145. The final price depends on the size of the awning, wall type, height, access, number of brackets and whether a second person is needed.",
  },
  {
    question: "Do you install awnings bought from Leroy Merlin?",
    answer:
      "Yes. We can install awnings bought from Leroy Merlin, Naterial, Calima, Amazon and other stores. It is useful to send the product link or manual before confirming the quote.",
  },
  {
    question: "Are materials included in the price?",
    answer:
      "The price from €145 is for labour. If special wall plugs, chemical anchors, additional screws or other materials are needed, we confirm this before installing them.",
  },
  {
    question: "Can I get a quote by WhatsApp?",
    answer:
      "Yes. You can send photos of the place, awning measurements and the model or product link. With that information we can provide a fast quote.",
  },
  {
    question: "Is a second person needed?",
    answer:
      "For large or heavy awnings it is usually recommended to work with two people to hold the awning and complete the installation safely.",
  },
];

function getContent(locale: string) {
  const isEs = locale === "es";

  return {
    isEs,
    title: isEs
      ? "Montaje de Toldos en Valencia | Desde 145€ | THEVULGO"
      : "Awning Mounting in Valencia | From €145 | THEVULGO",
    description: isEs
      ? "Montaje de toldos en Valencia desde 145€. Instalamos toldos manuales, eléctricos, Leroy Merlin, Naterial y Calima. Presupuesto rápido por WhatsApp."
      : "Awning mounting in Valencia from €145. Manual and electric awnings, Leroy Merlin, Naterial and Calima models. Fast quote by WhatsApp.",
    h1: isEs ? "Montaje de Toldos en Valencia" : "Awning Mounting in Valencia",
    heroText: isEs
      ? "Montamos toldos manuales y eléctricos en terrazas, patios, balcones y fachadas. Instalación segura, nivelada y con precio claro antes de empezar."
      : "We mount manual and electric awnings on terraces, patios, balconies and façades. Safe, level installation with a clear price before starting.",
    whatsappText: isEs ? whatsappTextEs : whatsappTextEn,
    faqs: isEs ? faqsEs : faqsEn,
  };
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { locale } = await params;
  const content = getContent(locale);

  return {
    title: content.title,
    description: content.description,
    alternates: {
      canonical: `${baseUrl}/${locale}/${slug}`,
      languages: {
        es: `${baseUrl}/es/${slug}`,
        en: `${baseUrl}/en/${slug}`,
      },
    },
    openGraph: {
      title: content.title,
      description: content.description,
      url: `${baseUrl}/${locale}/${slug}`,
      siteName: "THEVULGO Valencia",
      locale: locale === "es" ? "es_ES" : "en_US",
      type: "website",
    },
  };
}

export default async function MontajeToldosValenciaPage({ params }: Props) {
  const { locale } = await params;
  const content = getContent(locale);

  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(
    content.whatsappText
  )}`;

  const pageUrl = `${baseUrl}/${locale}/${slug}`;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "THEVULGO Valencia",
      url: baseUrl,
      telephone: `+${phone}`,
      priceRange: "€€",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Valencia",
        addressRegion: "Valencia",
        addressCountry: "ES",
      },
      areaServed: areas.map((area) => ({
        "@type": "City",
        name: area,
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: content.isEs
        ? "Montaje de toldos en Valencia"
        : "Awning mounting in Valencia",
      serviceType: content.isEs ? "Montaje de toldos" : "Awning mounting",
      provider: {
        "@type": "LocalBusiness",
        name: "THEVULGO Valencia",
      },
      areaServed: {
        "@type": "City",
        name: "Valencia",
      },
      offers: {
        "@type": "Offer",
        price: "145",
        priceCurrency: "EUR",
        availability: "https://schema.org/InStock",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: content.faqs.map((faq) => ({
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
          name: content.isEs ? "Inicio" : "Home",
          item: `${baseUrl}/${locale}`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: content.isEs ? "Servicios" : "Services",
          item: `${baseUrl}/${locale}/services`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: content.isEs
            ? "Montaje de toldos en Valencia"
            : "Awning mounting in Valencia",
          item: pageUrl,
        },
      ],
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="bg-white text-neutral-950">
        <section className="relative overflow-hidden bg-gradient-to-br from-white via-yellow-50/60 to-white">
          <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-yellow-300/30 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-yellow-200/40 blur-3xl" />

          <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-20 md:px-10 lg:grid-cols-2 lg:items-center lg:py-28">
            <div>
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-yellow-50 px-5 py-3 text-sm font-black text-neutral-900 shadow-sm">
                <MapPin className="h-4 w-4 text-yellow-600" />
                {content.isEs
                  ? "Montaje profesional en Valencia"
                  : "Professional mounting in Valencia"}
              </div>

              <h1 className="max-w-3xl text-5xl font-black leading-[0.95] tracking-tight text-neutral-950 md:text-7xl">
                {content.isEs ? (
                  <>
                    Montaje de Toldos{" "}
                    <span className="text-yellow-500">en Valencia</span>
                  </>
                ) : (
                  <>
                    Awning Mounting{" "}
                    <span className="text-yellow-500">in Valencia</span>
                  </>
                )}
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-700 md:text-xl">
                {content.heroText}
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href={whatsappUrl}
                  className="inline-flex items-center justify-center gap-3 rounded-xl bg-yellow-400 px-8 py-4 text-base font-black text-neutral-950 shadow-lg shadow-yellow-400/30 transition hover:bg-yellow-300"
                >
                  {content.isEs
                    ? "Pedir presupuesto por WhatsApp"
                    : "Request quote by WhatsApp"}
                  <ArrowRight className="h-5 w-5" />
                </a>

                <a
                  href={`tel:+${phone}`}
                  className="inline-flex items-center justify-center rounded-xl border border-neutral-300 bg-white px-8 py-4 text-base font-black text-neutral-950 shadow-sm transition hover:border-neutral-950"
                >
                  {content.isEs ? "Llamar ahora" : "Call now"}
                </a>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {[
                  content.isEs ? "Desde 145€" : "From €145",
                  content.isEs
                    ? "Toldos manuales y eléctricos"
                    : "Manual and electric awnings",
                  content.isEs
                    ? "Leroy Merlin, Naterial, Calima"
                    : "Leroy Merlin, Naterial, Calima",
                  content.isEs
                    ? "Valencia y alrededores"
                    : "Valencia and nearby areas",
                  content.isEs
                    ? "Instalación segura y nivelada"
                    : "Safe and level installation",
                  content.isEs
                    ? "Presupuesto rápido por WhatsApp"
                    : "Fast quote by WhatsApp",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm font-bold text-neutral-700"
                  >
                    <CheckCircle2 className="h-5 w-5 text-yellow-500" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-yellow-400 bg-white p-6 shadow-2xl shadow-neutral-900/10">
              <div className="rounded-3xl bg-yellow-400 p-8 text-neutral-950 shadow-lg">
                <Umbrella className="h-12 w-12" />
                <p className="mt-8 text-sm font-black uppercase tracking-[0.2em]">
                  THEVULGO VALENCIA
                </p>
                <h2 className="mt-5 text-3xl font-black leading-tight md:text-4xl">
                  {content.isEs
                    ? "Toldo montado, sombra lista y fachada cuidada."
                    : "Awning mounted, shade ready and façade protected."}
                </h2>
                <p className="mt-6 text-lg leading-8">
                  {content.isEs
                    ? "Revisamos la pared, marcamos los soportes, perforamos, nivelamos y probamos el toldo antes de terminar."
                    : "We check the wall, mark the brackets, drill, level and test the awning before finishing."}
                </p>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {[
                  {
                    icon: Clock3,
                    title: content.isEs ? "Respuesta rápida" : "Fast replies",
                    text: content.isEs
                      ? "Por WhatsApp"
                      : "By WhatsApp",
                  },
                  {
                    icon: Euro,
                    title: content.isEs ? "Precio claro" : "Clear price",
                    text: content.isEs
                      ? "Antes del trabajo"
                      : "Before the job",
                  },
                  {
                    icon: Drill,
                    title: content.isEs ? "Herramientas pro" : "Pro tools",
                    text: content.isEs
                      ? "Montaje limpio"
                      : "Clean mounting",
                  },
                  {
                    icon: ShieldCheck,
                    title: content.isEs ? "Fijación segura" : "Safe fixing",
                    text: content.isEs
                      ? "Soportes nivelados"
                      : "Level brackets",
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-yellow-300 bg-yellow-50/70 p-5"
                    >
                      <Icon className="mb-4 h-6 w-6 text-yellow-600" />
                      <h3 className="font-black">{item.title}</h3>
                      <p className="mt-2 text-sm text-neutral-600">
                        {item.text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
                <section className="bg-neutral-950 py-20 text-white">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.25em] text-yellow-400">
                  {content.isEs ? "Precio de montaje" : "Mounting price"}
                </p>
                <h2 className="mt-5 text-4xl font-black tracking-tight md:text-5xl">
                  {content.isEs
                    ? "Montaje de toldos desde 145€"
                    : "Awning mounting from €145"}
                </h2>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-300">
                  {content.isEs
                    ? "El precio depende del tamaño, peso, altura, tipo de pared y número de soportes. Para toldos grandes puede ser necesaria una segunda persona."
                    : "The price depends on size, weight, height, wall type and number of brackets. Large awnings may require a second person."}
                </p>
              </div>

              <div className="rounded-[2rem] border border-yellow-400/40 bg-white/5 p-6">
                <div className="rounded-3xl bg-yellow-400 p-7 text-neutral-950">
                  <p className="text-sm font-black uppercase tracking-[0.2em]">
                    {content.isEs ? "Desde" : "From"}
                  </p>
                  <div className="mt-3 flex items-end gap-2">
                    <span className="text-7xl font-black leading-none">
                      145€
                    </span>
                    <span className="mb-2 text-lg font-bold">
                      {content.isEs ? "mano de obra" : "labour"}
                    </span>
                  </div>
                  <p className="mt-5 text-base leading-7">
                    {content.isEs
                      ? "Presupuesto confirmado antes de empezar. Sin sorpresas."
                      : "Quote confirmed before starting. No surprises."}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {[
                {
                  title: content.isEs ? "Toldo pequeño" : "Small awning",
                  price: content.isEs ? "desde 145€" : "from €145",
                  text: content.isEs
                    ? "Montaje sencillo en pared adecuada y con acceso cómodo."
                    : "Simple mounting on a suitable wall with easy access.",
                  icon: Umbrella,
                },
                {
                  title: content.isEs ? "Toldo mediano" : "Medium awning",
                  price: "160€ - 200€",
                  text: content.isEs
                    ? "Instalación con varios soportes, nivelación y prueba final."
                    : "Installation with several brackets, leveling and final test.",
                  icon: Sun,
                },
                {
                  title: content.isEs ? "Toldo grande" : "Large awning",
                  price: "200€ - 280€",
                  text: content.isEs
                    ? "Modelos anchos o pesados que pueden requerir dos personas."
                    : "Wide or heavy models that may require two people.",
                  icon: Users,
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-3xl border border-white/10 bg-white/[0.04] p-7"
                  >
                    <Icon className="h-9 w-9 text-yellow-400" />
                    <h3 className="mt-6 text-2xl font-black">{item.title}</h3>
                    <p className="mt-3 text-3xl font-black text-yellow-400">
                      {item.price}
                    </p>
                    <p className="mt-4 leading-7 text-neutral-300">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.04] p-6 md:p-8">
              <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-2xl font-black">
                    {content.isEs
                      ? "Presupuesto rápido por WhatsApp"
                      : "Fast quote by WhatsApp"}
                  </h3>
                  <p className="mt-2 max-w-3xl text-neutral-300">
                    {content.isEs
                      ? "Envíenos fotos del lugar, medidas del toldo y modelo o enlace del producto. Le responderemos con una estimación clara."
                      : "Send photos of the place, awning measurements and product model or link. We will reply with a clear estimate."}
                  </p>
                </div>

                <a
                  href={whatsappUrl}
                  className="inline-flex shrink-0 items-center justify-center gap-3 rounded-xl bg-yellow-400 px-7 py-4 font-black text-neutral-950 transition hover:bg-yellow-300"
                >
                  {content.isEs ? "Enviar fotos" : "Send photos"}
                  <MessageCircle className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-yellow-500">
                {content.isEs ? "Qué montamos" : "What we mount"}
              </p>
              <h2 className="mt-5 text-4xl font-black tracking-tight md:text-5xl">
                {content.isEs
                  ? "Montaje de toldos manuales, eléctricos y de terraza"
                  : "Manual, electric and terrace awning mounting"}
              </h2>
              <p className="mt-6 text-lg leading-8 text-neutral-600">
                {content.isEs
                  ? "Trabajamos con toldos de pared, modelos de brazos extensibles, toldos para patio y productos comprados en tiendas como Leroy Merlin."
                  : "We work with wall-mounted awnings, extendable arm models, patio awnings and products bought from stores like Leroy Merlin."}
              </p>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: content.isEs ? "Toldos manuales" : "Manual awnings",
                  text: content.isEs
                    ? "Montaje de toldos con manivela, soportes de pared y prueba de apertura."
                    : "Mounting of crank awnings, wall brackets and opening test.",
                  icon: Wrench,
                },
                {
                  title: content.isEs ? "Toldos eléctricos" : "Electric awnings",
                  text: content.isEs
                    ? "Instalación de toldos motorizados. La conexión eléctrica se revisa aparte."
                    : "Installation of motorized awnings. Electrical connection is checked separately.",
                  icon: Zap,
                },
                {
                  title: content.isEs ? "Toldos de terraza" : "Terrace awnings",
                  text: content.isEs
                    ? "Montaje para terrazas privadas, patios y zonas exteriores de vivienda."
                    : "Mounting for private terraces, patios and outdoor home areas.",
                  icon: Home,
                },
                {
                  title: content.isEs ? "Toldos de balcón" : "Balcony awnings",
                  text: content.isEs
                    ? "Instalación compacta para balcones, ventanas y pequeñas fachadas."
                    : "Compact installation for balconies, windows and small façades.",
                  icon: Building2,
                },
                {
                  title: content.isEs
                    ? "Toldos Leroy Merlin"
                    : "Leroy Merlin awnings",
                  text: content.isEs
                    ? "Montamos modelos comprados en Leroy Merlin, Naterial, Calima y similares."
                    : "We mount models bought from Leroy Merlin, Naterial, Calima and similar brands.",
                  icon: Store,
                },
                {
                  title: content.isEs ? "Toldos grandes" : "Large awnings",
                  text: content.isEs
                    ? "Para toldos pesados o de gran anchura organizamos la instalación con ayuda."
                    : "For heavy or wide awnings we organize the installation with assistance.",
                  icon: Users,
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-3xl border border-neutral-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-100">
                      <Icon className="h-7 w-7 text-yellow-600" />
                    </div>
                    <h3 className="mt-6 text-2xl font-black">{item.title}</h3>
                    <p className="mt-4 leading-7 text-neutral-600">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-yellow-50/70 py-20">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 md:px-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-yellow-600">
                {content.isEs
                  ? "Montaje correcto"
                  : "Correct mounting"}
              </p>
              <h2 className="mt-5 text-4xl font-black tracking-tight md:text-5xl">
                {content.isEs
                  ? "Antes de perforar revisamos pared, altura y soportes"
                  : "Before drilling we check wall, height and brackets"}
              </h2>
              <p className="mt-6 text-lg leading-8 text-neutral-700">
                {content.isEs
                  ? "Un toldo necesita una fijación segura. Revisamos si la pared permite el montaje, si hay obstáculos, si la altura es adecuada y si hacen falta materiales especiales."
                  : "An awning needs secure fixing. We check whether the wall allows mounting, whether there are obstacles, whether the height is suitable and whether special materials are needed."}
              </p>

              <div className="mt-8 grid gap-4">
                {[
                  content.isEs
                    ? "Comprobación de pared y zona de montaje"
                    : "Wall and mounting area check",
                  content.isEs
                    ? "Medición y marcado de soportes"
                    : "Measurement and bracket marking",
                  content.isEs
                    ? "Perforación con herramienta adecuada"
                    : "Drilling with suitable tools",
                  content.isEs
                    ? "Nivelación del toldo"
                    : "Awning leveling",
                  content.isEs
                    ? "Prueba de apertura y cierre"
                    : "Opening and closing test",
                  content.isEs
                    ? "Recomendaciones de uso"
                    : "Usage recommendations",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl bg-white p-4 shadow-sm"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-yellow-500" />
                    <span className="font-bold text-neutral-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-yellow-300 bg-white p-7 shadow-xl">
              <div className="rounded-3xl bg-neutral-950 p-8 text-white">
                <ClipboardCheck className="h-12 w-12 text-yellow-400" />
                <h3 className="mt-7 text-3xl font-black">
                  {content.isEs
                    ? "Información para preparar el montaje"
                    : "Information to prepare the mounting"}
                </h3>
                <p className="mt-5 leading-8 text-neutral-300">
                  {content.isEs
                    ? "Con unas fotos podemos entender mejor la instalación y evitar sorpresas el día del trabajo."
                    : "With a few photos we can better understand the installation and avoid surprises on the job day."}
                </p>
              </div>

              <div className="mt-6 grid gap-4">
                {[
                  {
                    label: content.isEs ? "Fotos del lugar" : "Place photos",
                    text: content.isEs
                      ? "Una foto frontal y otra lateral de la pared donde irá el toldo."
                      : "One front photo and one side photo of the wall where the awning will go.",
                  },
                  {
                    label: content.isEs
                      ? "Medidas del toldo"
                      : "Awning measurements",
                    text: content.isEs
                      ? "Ancho y salida aproximada. Por ejemplo: 3,95 m x 3 m."
                      : "Width and projection. For example: 3.95 m x 3 m.",
                  },
                  {
                    label: content.isEs ? "Modelo o enlace" : "Model or link",
                    text: content.isEs
                      ? "Nombre del producto, manual o enlace de la tienda."
                      : "Product name, manual or store link.",
                  },
                  {
                    label: content.isEs ? "Ubicación" : "Location",
                    text: content.isEs
                      ? "Barrio o zona para organizar la visita."
                      : "Neighbourhood or area to organize the visit.",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-neutral-200 p-5"
                  >
                    <h4 className="font-black">{item.label}</h4>
                    <p className="mt-2 text-sm leading-6 text-neutral-600">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

            <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.25em] text-yellow-500">
                  {content.isEs ? "Proceso" : "Process"}
                </p>
                <h2 className="mt-5 text-4xl font-black tracking-tight md:text-5xl">
                  {content.isEs
                    ? "Cómo hacemos el montaje del toldo"
                    : "How we mount the awning"}
                </h2>
                <p className="mt-6 text-lg leading-8 text-neutral-600">
                  {content.isEs
                    ? "Organizamos el trabajo para que el montaje sea seguro, limpio y claro desde el primer mensaje hasta la prueba final."
                    : "We organize the job so the mounting is safe, clean and clear from the first message to the final test."}
                </p>

                <div className="mt-8 rounded-3xl bg-neutral-950 p-7 text-white">
                  <ShieldCheck className="h-10 w-10 text-yellow-400" />
                  <h3 className="mt-5 text-2xl font-black">
                    {content.isEs ? "Montaje seguro" : "Safe mounting"}
                  </h3>
                  <p className="mt-4 leading-7 text-neutral-300">
                    {content.isEs
                      ? "Un toldo grande puede hacer mucha fuerza sobre la pared. Por eso es importante fijar bien los soportes y comprobar todo antes de usarlo."
                      : "A large awning can place strong force on the wall. That is why it is important to fix the brackets correctly and check everything before use."}
                  </p>
                </div>
              </div>

              <div className="grid gap-5">
                {[
                  {
                    step: "01",
                    title: content.isEs ? "Fotos por WhatsApp" : "Photos by WhatsApp",
                    text: content.isEs
                      ? "Nos envía fotos del lugar, medidas y modelo del toldo."
                      : "You send photos of the place, measurements and awning model.",
                  },
                  {
                    step: "02",
                    title: content.isEs ? "Precio confirmado" : "Confirmed price",
                    text: content.isEs
                      ? "Le confirmamos el precio antes de empezar el trabajo."
                      : "We confirm the price before starting the work.",
                  },
                  {
                    step: "03",
                    title: content.isEs ? "Revisión de pared" : "Wall check",
                    text: content.isEs
                      ? "Comprobamos pared, altura, acceso y obstáculos."
                      : "We check the wall, height, access and obstacles.",
                  },
                  {
                    step: "04",
                    title: content.isEs ? "Marcado y perforación" : "Marking and drilling",
                    text: content.isEs
                      ? "Marcamos los soportes y perforamos con herramienta adecuada."
                      : "We mark the brackets and drill with suitable tools.",
                  },
                  {
                    step: "05",
                    title: content.isEs ? "Fijación y nivelación" : "Fixing and leveling",
                    text: content.isEs
                      ? "Fijamos el toldo, nivelamos y comprobamos la posición."
                      : "We fix the awning, level it and check the position.",
                  },
                  {
                    step: "06",
                    title: content.isEs ? "Prueba final" : "Final test",
                    text: content.isEs
                      ? "Probamos apertura, cierre y estabilidad general."
                      : "We test opening, closing and general stability.",
                  },
                ].map((item) => (
                  <div
                    key={item.step}
                    className="grid gap-4 rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm md:grid-cols-[80px_1fr]"
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-400 text-2xl font-black">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-xl font-black">{item.title}</h3>
                      <p className="mt-2 leading-7 text-neutral-600">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-neutral-950 py-20 text-white">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-yellow-400">
                {content.isEs ? "Zonas" : "Areas"}
              </p>
              <h2 className="mt-5 text-4xl font-black tracking-tight md:text-5xl">
                {content.isEs
                  ? "Montaje de toldos en Valencia y alrededores"
                  : "Awning mounting in Valencia and nearby areas"}
              </h2>
              <p className="mt-6 text-lg leading-8 text-neutral-300">
                {content.isEs
                  ? "Trabajamos en Valencia ciudad y zonas cercanas. Envíenos su ubicación y le confirmamos disponibilidad."
                  : "We work in Valencia city and nearby areas. Send us your location and we will confirm availability."}
              </p>
            </div>

            <div className="mt-12 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {areas.map((area) => (
                <div
                  key={area}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                >
                  <MapPin className="h-5 w-5 text-yellow-400" />
                  <span className="font-bold">{area}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 rounded-[2rem] bg-yellow-400 p-8 text-neutral-950 md:p-10">
              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <h3 className="text-3xl font-black md:text-4xl">
                    {content.isEs
                      ? "¿Quiere montar un toldo esta semana?"
                      : "Do you want to mount an awning this week?"}
                  </h3>
                  <p className="mt-4 max-w-3xl text-lg leading-8">
                    {content.isEs
                      ? "Envíenos fotos, medidas y ubicación. Le responderemos con presupuesto y disponibilidad."
                      : "Send photos, measurements and location. We will reply with quote and availability."}
                  </p>
                </div>

                <a
                  href={whatsappUrl}
                  className="inline-flex items-center justify-center gap-3 rounded-xl bg-neutral-950 px-8 py-4 font-black text-white transition hover:bg-neutral-800"
                >
                  {content.isEs ? "Solicitar presupuesto" : "Request quote"}
                  <ArrowRight className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-yellow-50/70 py-20">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-yellow-600">
                {content.isEs ? "Páginas relacionadas" : "Related pages"}
              </p>
              <h2 className="mt-5 text-4xl font-black tracking-tight md:text-5xl">
                {content.isEs
                  ? "Más servicios de toldos en Valencia"
                  : "More awning services in Valencia"}
              </h2>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {relatedPages.map((item) => (
                <Link
                  key={item.href}
                  href={`/${locale}${item.href}`}
                  className="group rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <Umbrella className="h-8 w-8 text-yellow-500" />
                  <h3 className="mt-5 text-xl font-black">{item.title}</h3>
                  <div className="mt-5 inline-flex items-center gap-2 text-sm font-black text-neutral-950">
                    {content.isEs ? "Ver servicio" : "View service"}
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-4xl px-6 md:px-10">
            <div className="text-center">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-yellow-500">
                FAQ
              </p>
              <h2 className="mt-5 text-4xl font-black tracking-tight md:text-5xl">
                {content.isEs
                  ? "Preguntas frecuentes sobre montaje de toldos"
                  : "Frequently asked questions about awning mounting"}
              </h2>
            </div>

            <div className="mt-12 grid gap-5">
              {content.faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="rounded-3xl border border-neutral-200 bg-neutral-50 p-6"
                >
                  <h3 className="text-xl font-black">{faq.question}</h3>
                  <p className="mt-4 leading-7 text-neutral-600">
                    {faq.answer}
                  </p>
                </div>
              ))}

              {[
                {
                  question: content.isEs
                    ? "¿Cuánto tarda montar un toldo?"
                    : "How long does awning mounting take?",
                  answer: content.isEs
                    ? "Depende del tamaño, altura y tipo de pared. Un toldo pequeño puede ser más rápido, mientras que uno grande puede requerir más tiempo."
                    : "It depends on size, height and wall type. A small awning can be faster, while a large one may take longer.",
                },
                {
                  question: content.isEs
                    ? "¿Montáis toldos en patios interiores?"
                    : "Do you mount awnings in inner patios?",
                  answer: content.isEs
                    ? "Sí, siempre que haya acceso seguro y una pared adecuada para fijar los soportes."
                    : "Yes, as long as there is safe access and a suitable wall to fix the brackets.",
                },
                {
                  question: content.isEs
                    ? "¿Puedo ayudar en el montaje?"
                    : "Can I help during mounting?",
                  answer: content.isEs
                    ? "En algunos toldos grandes, si el cliente puede ayudar a sujetar el toldo, puede evitarse traer una segunda persona y ajustar el precio."
                    : "For some large awnings, if the client can help hold the awning, it may avoid bringing a second person and adjust the price.",
                },
                {
                  question: content.isEs
                    ? "¿Qué pasa si hace viento?"
                    : "What happens if it is windy?",
                  answer: content.isEs
                    ? "Si el viento puede afectar la seguridad del montaje, es mejor cambiar la cita. La seguridad es prioridad."
                    : "If wind can affect installation safety, it is better to reschedule. Safety comes first.",
                },
                {
                  question: content.isEs
                    ? "¿También hacéis otros trabajos de manitas?"
                    : "Do you also do other handyman jobs?",
                  answer: content.isEs
                    ? "Sí. También hacemos montaje de TV, muebles, lámparas, estanterías y pequeñas reparaciones del hogar."
                    : "Yes. We also do TV mounting, furniture assembly, lights, shelves and small home repairs.",
                },
              ].map((faq) => (
                <div
                  key={faq.question}
                  className="rounded-3xl border border-neutral-200 bg-neutral-50 p-6"
                >
                  <h3 className="text-xl font-black">{faq.question}</h3>
                  <p className="mt-4 leading-7 text-neutral-600">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-neutral-950 py-20 text-white">
          <div className="mx-auto max-w-5xl px-6 text-center md:px-10">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-yellow-400">
              <Umbrella className="h-10 w-10 text-neutral-950" />
            </div>

            <h2 className="mt-8 text-4xl font-black tracking-tight md:text-6xl">
              {content.isEs
                ? "Montaje de toldos en Valencia desde 145€"
                : "Awning mounting in Valencia from €145"}
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-neutral-300">
              {content.isEs
                ? "Envíenos fotos del lugar, medidas y modelo del toldo. Le responderemos con un presupuesto claro."
                : "Send photos of the place, measurements and awning model. We will reply with a clear quote."}
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href={whatsappUrl}
                className="inline-flex items-center justify-center gap-3 rounded-xl bg-yellow-400 px-8 py-4 font-black text-neutral-950 transition hover:bg-yellow-300"
              >
                {content.isEs ? "WhatsApp presupuesto" : "WhatsApp quote"}
                <MessageCircle className="h-5 w-5" />
              </a>

              <a
                href={`tel:+${phone}`}
                className="inline-flex items-center justify-center rounded-xl border border-white/20 px-8 py-4 font-black text-white transition hover:border-yellow-400"
              >
                {content.isEs ? "Llamar ahora" : "Call now"}
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}