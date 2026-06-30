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
  Ruler,
  ShieldCheck,
  Sparkles,
  Sun,
  Umbrella,
  Wrench,
  Zap,
} from "lucide-react";

type Props = {
  params: Promise<{ locale: string }>;
};

const baseUrl = "https://www.thevulgo.es";
const phone = "34610076942";
const slug = "services/instalacion-toldo-patio-valencia";

const whatsappTextEs =
  "Hola, necesito instalar un toldo en el patio de mi vivienda en Valencia. Quiero solicitar un presupuesto.";
const whatsappTextEn =
  "Hello, I need an awning installed in my patio in Valencia. I would like to request a quote.";

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
  "Mislata",
  "Burjassot",
  "Paterna",
  "Torrent",
  "Sagunto",
  "Cullera",
  "Gandía",
];

const faqEs = [
  {
    question: "¿Instalan toldos que ya he comprado?",
    answer:
      "Sí. Podemos instalar toldos comprados por el cliente, siempre que el producto esté completo y sea adecuado para la pared, fachada o estructura donde se va a fijar.",
  },
  {
    question: "¿Pueden instalar un toldo en un patio?",
    answer:
      "Sí. Instalamos toldos para patios en viviendas, bajos, terrazas interiores, chalets y zonas exteriores. Revisamos el tipo de pared, altura, espacio disponible y sistema de anclaje.",
  },
  {
    question: "¿Instalan toldos manuales y eléctricos?",
    answer:
      "Sí. Podemos instalar toldos manuales y toldos motorizados. En el caso de toldos eléctricos, también revisamos la conexión, el cableado y el punto de alimentación.",
  },
  {
    question: "¿Cuánto cuesta instalar un toldo de patio en Valencia?",
    answer:
      "El precio empieza desde 79 €. El coste final depende del tamaño del toldo, tipo de pared, altura, peso, número de soportes y si hay que retirar un toldo antiguo.",
  },
  {
    question: "¿Qué información necesitan para dar presupuesto?",
    answer:
      "Normalmente necesitamos fotos del patio, fotos de la pared donde irá el toldo, medidas aproximadas, tipo de toldo y si ya tiene soportes o instrucciones de montaje.",
  },
];

const faqEn = [
  {
    question: "Can you install an awning I already bought?",
    answer:
      "Yes. We can install customer-supplied awnings as long as the product is complete and suitable for the wall, façade or structure where it will be fixed.",
  },
  {
    question: "Can you install an awning in a patio?",
    answer:
      "Yes. We install patio awnings for homes, ground-floor patios, outdoor areas, townhouses and private terraces. We check the wall type, height, available space and fixing system.",
  },
  {
    question: "Do you install manual and electric awnings?",
    answer:
      "Yes. We can install both manual and motorized awnings. For electric awnings, we also check the power point, cable route and connection.",
  },
  {
    question: "How much does patio awning installation cost in Valencia?",
    answer:
      "Prices start from €79. The final price depends on awning size, wall type, height, weight, number of brackets and whether an old awning needs to be removed.",
  },
  {
    question: "What information do you need for a quote?",
    answer:
      "We usually need photos of the patio, photos of the wall where the awning will be installed, approximate measurements, awning type and whether you already have brackets or instructions.",
  },
];

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";

  const title = isEs
    ? "Instalación de Toldos para Patios en Valencia | Desde 79 € | THEVULGO"
    : "Patio Awning Installation in Valencia | From €79 | THEVULGO";

  const description = isEs
    ? "Instalación profesional de toldos para patios en Valencia. Montaje seguro en ladrillo, hormigón o fachada. Presupuesto por WhatsApp."
    : "Professional patio awning installation in Valencia. Secure mounting on brick, concrete or façade. Quote by WhatsApp.";

  const url = `${baseUrl}/${locale}/${slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        es: `${baseUrl}/es/${slug}`,
        en: `${baseUrl}/en/${slug}`,
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "THEVULGO",
      locale: isEs ? "es_ES" : "en_US",
      type: "website",
    },
  };
}

export default async function InstalacionToldoPatioValenciaPage({
  params,
}: Props) {
  const { locale } = await params;
  const isEs = locale === "es";

  const whatsappText = isEs ? whatsappTextEs : whatsappTextEn;
  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(
    whatsappText
  )}`;

  const faq = isEs ? faqEs : faqEn;

  const pageUrl = `${baseUrl}/${locale}/${slug}`;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "THEVULGO",
      url: `${baseUrl}/${locale}`,
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
        ? "Instalación de toldos para patios en Valencia"
        : "Patio awning installation in Valencia",
      serviceType: isEs
        ? "Instalación de toldos para patios"
        : "Patio awning installation",
      provider: {
        "@type": "LocalBusiness",
        name: "THEVULGO",
      },
      areaServed: areas,
      offers: {
        "@type": "Offer",
        price: "79",
        priceCurrency: "EUR",
        availability: "https://schema.org/InStock",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
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
            ? "Instalación de toldos para patios"
            : "Patio awning installation",
          item: pageUrl,
        },
      ],
    },
  ];

  const content = {
    badge: isEs ? "Servicio en Valencia" : "Service in Valencia",
    h1: isEs
      ? "Instalación de Toldos para Patios en Valencia"
      : "Patio Awning Installation in Valencia",
    intro: isEs
      ? "Instalamos toldos para patios, terrazas interiores y zonas exteriores en Valencia. Montaje seguro, nivelado y adaptado al tipo de pared."
      : "We install awnings for patios, private terraces and outdoor areas in Valencia. Secure, level and adapted to the wall type.",
    price: isEs ? "Desde 79 €" : "From €79",
    cta: isEs ? "Pedir presupuesto por WhatsApp" : "Request quote on WhatsApp",
    secondaryCta: isEs ? "Ver otros servicios" : "See other services",
  };

  const benefits = isEs
    ? [
        "Montaje de toldos para patios y terrazas",
        "Instalación en ladrillo, hormigón o fachada",
        "Nivelación y fijación segura",
        "Toldos manuales y eléctricos",
        "Presupuesto rápido por WhatsApp",
        "Servicio en Valencia y alrededores",
      ]
    : [
        "Awning mounting for patios and terraces",
        "Installation on brick, concrete or façade",
        "Secure and level fixing",
        "Manual and electric awnings",
        "Fast quote by WhatsApp",
        "Service in Valencia and nearby areas",
      ];

  const services = isEs
    ? [
        {
          icon: Umbrella,
          title: "Instalación de toldos de patio",
          text: "Montamos toldos para patios privados, bajos, terrazas interiores y zonas exteriores de viviendas.",
        },
        {
          icon: Drill,
          title: "Fijación segura",
          text: "Revisamos la pared y usamos anclajes adecuados según el peso, soporte y material.",
        },
        {
          icon: Sun,
          title: "Sombra para exterior",
          text: "Instalación pensada para mejorar la sombra, proteger del sol y hacer el patio más cómodo.",
        },
        {
          icon: Zap,
          title: "Toldos eléctricos",
          text: "También podemos instalar toldos motorizados y revisar el punto eléctrico disponible.",
        },
      ]
    : [
        {
          icon: Umbrella,
          title: "Patio awning installation",
          text: "We install awnings for private patios, outdoor areas, ground-floor patios and terraces.",
        },
        {
          icon: Drill,
          title: "Secure fixing",
          text: "We check the wall and use suitable anchors depending on weight, bracket and material.",
        },
        {
          icon: Sun,
          title: "Outdoor shade",
          text: "Installation designed to improve shade, sun protection and patio comfort.",
        },
        {
          icon: Zap,
          title: "Electric awnings",
          text: "We can also install motorized awnings and check the available power point.",
        },
      ];

  const steps = isEs
    ? [
        "Envíanos fotos del patio y de la pared.",
        "Indica medidas aproximadas y tipo de toldo.",
        "Confirmamos precio y disponibilidad.",
        "Realizamos el montaje con fijación segura.",
      ]
    : [
        "Send us photos of the patio and wall.",
        "Share approximate measurements and awning type.",
        "We confirm price and availability.",
        "We install it with secure fixing.",
      ];

  const relatedLinks = [
    {
      href: `/${locale}/services/instalar-toldo-valencia`,
      label: isEs ? "Instalar toldo en Valencia" : "Awning installation Valencia",
    },
    {
      href: `/${locale}/services/instalacion-toldo-balcon-valencia`,
      label: isEs ? "Toldo para balcón" : "Balcony awning installation",
    },
    {
      href: `/${locale}/services/instalacion-toldo-electrico-valencia`,
      label: isEs ? "Toldo eléctrico" : "Electric awning installation",
    },
    {
      href: `/${locale}/services/instalacion-toldo-manual-valencia`,
      label: isEs ? "Toldo manual" : "Manual awning installation",
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-neutral-950 text-white">
        <section className="relative overflow-hidden border-b border-white/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.14),transparent_35%)]" />

          <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
            <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
              <div>
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-2 text-sm font-medium text-amber-200">
                  <Sparkles className="h-4 w-4" />
                  {content.badge}
                </div>

                <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                  {content.h1}
                </h1>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-300">
                  {content.intro}
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <a
                    href={whatsappUrl}
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-amber-400 px-6 py-4 font-semibold text-neutral-950 transition hover:bg-amber-300"
                  >
                    <MessageCircle className="h-5 w-5" />
                    {content.cta}
                  </a>

                  <Link
                    href={`/${locale}/services`}
                    className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 px-6 py-4 font-semibold text-white transition hover:bg-white/10"
                  >
                    {content.secondaryCta}
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </div>

                <div className="mt-8 flex flex-wrap gap-3 text-sm text-neutral-300">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
                    <Euro className="h-4 w-4 text-amber-300" />
                    {content.price}
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
                    <Clock3 className="h-4 w-4 text-amber-300" />
                    {isEs ? "Servicio rápido" : "Fast service"}
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
                    <ShieldCheck className="h-4 w-4 text-amber-300" />
                    {isEs ? "Montaje seguro" : "Secure mounting"}
                  </span>
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl">
                <div className="rounded-2xl bg-neutral-900 p-6">
                  <div className="flex items-center gap-3">
                    <div className="rounded-2xl bg-amber-400 p-3 text-neutral-950">
                      <Umbrella className="h-7 w-7" />
                    </div>
                    <div>
                      <p className="text-sm text-neutral-400">
                        {isEs ? "Precio inicial" : "Starting price"}
                      </p>
                      <p className="text-3xl font-bold">{content.price}</p>
                    </div>
                  </div>

                  <div className="mt-6 space-y-4">
                    {benefits.map((item) => (
                      <div key={item} className="flex gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-amber-300" />
                        <span className="text-neutral-300">{item}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href={whatsappUrl}
                    className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-5 py-4 font-semibold text-neutral-950 transition hover:bg-neutral-200"
                  >
                    <MessageCircle className="h-5 w-5" />
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"
                >
                  <div className="mb-5 inline-flex rounded-2xl bg-amber-400/10 p-3 text-amber-300">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h2 className="text-xl font-semibold">{item.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-neutral-400">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/[0.03]">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-neutral-300">
                  <Hammer className="h-4 w-4 text-amber-300" />
                  {isEs ? "Proceso de trabajo" : "Work process"}
                </div>

                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  {isEs
                    ? "Montaje de toldos para patios con fijación segura"
                    : "Patio awning mounting with secure fixing"}
                </h2>

                <p className="mt-5 text-neutral-300">
                  {isEs
                    ? "Antes de instalar revisamos el tipo de superficie, la altura, el peso del toldo y los soportes. Así evitamos una instalación débil o mal nivelada."
                    : "Before installation, we check the surface type, height, awning weight and brackets. This helps avoid weak or uneven mounting."}
                </p>
              </div>

              <div className="space-y-4">
                {steps.map((step, index) => (
                  <div
                    key={step}
                    className="flex gap-4 rounded-3xl border border-white/10 bg-neutral-950 p-5"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-400 font-bold text-neutral-950">
                      {index + 1}
                    </div>
                    <p className="pt-2 text-neutral-300">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-neutral-300">
                <Ruler className="h-4 w-4 text-amber-300" />
                {isEs ? "Qué revisamos" : "What we check"}
              </div>

              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                {isEs
                  ? "Cada patio necesita una instalación diferente"
                  : "Every patio needs a different installation"}
              </h2>

              <p className="mt-5 text-neutral-300">
                {isEs
                  ? "No todos los toldos se instalan igual. El montaje depende del tamaño del toldo, pared disponible, tipo de soporte y condiciones del patio."
                  : "Not all awnings are installed the same way. The work depends on awning size, available wall, bracket type and patio conditions."}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                isEs ? "Tipo de pared" : "Wall type",
                isEs ? "Peso del toldo" : "Awning weight",
                isEs ? "Altura de trabajo" : "Working height",
                isEs ? "Número de soportes" : "Number of brackets",
                isEs ? "Medidas del patio" : "Patio measurements",
                isEs ? "Toldo manual o eléctrico" : "Manual or electric awning",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                >
                  <BadgeCheck className="h-5 w-5 shrink-0 text-amber-300" />
                  <span className="text-neutral-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/[0.03]">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-3">
              <div className="lg:col-span-1">
                <h2 className="text-3xl font-bold">
                  {isEs
                    ? "Servicio en Valencia y alrededores"
                    : "Service in Valencia and nearby areas"}
                </h2>
                <p className="mt-4 text-neutral-300">
                  {isEs
                    ? "Trabajamos en Valencia ciudad y zonas cercanas. Puedes enviarnos fotos por WhatsApp para confirmar disponibilidad."
                    : "We work in Valencia city and nearby areas. You can send photos by WhatsApp to confirm availability."}
                </p>
              </div>

              <div className="lg:col-span-2">
                <div className="flex flex-wrap gap-3">
                  {areas.map((area) => (
                    <span
                      key={area}
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-neutral-950 px-4 py-2 text-sm text-neutral-300"
                    >
                      <MapPin className="h-4 w-4 text-amber-300" />
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold">
                {isEs ? "Preguntas frecuentes" : "Frequently asked questions"}
              </h2>
              <p className="mt-4 text-neutral-300">
                {isEs
                  ? "Respuestas rápidas sobre instalación de toldos para patios en Valencia."
                  : "Quick answers about patio awning installation in Valencia."}
              </p>
            </div>

            <div className="space-y-4">
              {faq.map((item) => (
                <div
                  key={item.question}
                  className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"
                >
                  <h3 className="font-semibold">{item.question}</h3>
                  <p className="mt-3 text-sm leading-6 text-neutral-400">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 bg-neutral-900">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
            <div className="rounded-3xl border border-amber-400/20 bg-amber-400/10 p-8 lg:p-10">
              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <h2 className="text-3xl font-bold">
                    {isEs
                      ? "¿Necesitas instalar un toldo en tu patio?"
                      : "Need to install an awning in your patio?"}
                  </h2>
                  <p className="mt-4 max-w-2xl text-neutral-300">
                    {isEs
                      ? "Envíanos fotos, medidas aproximadas y el modelo del toldo. Te diremos si podemos instalarlo y el precio aproximado."
                      : "Send us photos, approximate measurements and the awning model. We will confirm if we can install it and the approximate price."}
                  </p>
                </div>

                <a
                  href={whatsappUrl}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-amber-400 px-6 py-4 font-semibold text-neutral-950 transition hover:bg-amber-300"
                >
                  <MessageCircle className="h-5 w-5" />
                  {content.cta}
                </a>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="mb-4 text-lg font-semibold">
                {isEs ? "Servicios relacionados" : "Related services"}
              </h3>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {relatedLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-sm text-neutral-300 transition hover:bg-white/10 hover:text-white"
                  >
                    {link.label}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}