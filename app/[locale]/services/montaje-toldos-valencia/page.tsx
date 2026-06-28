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