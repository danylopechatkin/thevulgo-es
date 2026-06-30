import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Drill,
  Euro,
  Hammer,
  Home,
  MapPin,
  MessageCircle,
  PackageCheck,
  Ruler,
  ShieldCheck,
  Store,
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
const slug = "services/montaje-toldo-leroy-merlin-valencia";

const whatsappTextEs =
  "Hola, he comprado un toldo en Leroy Merlin y necesito montarlo en Valencia. Quiero solicitar presupuesto.";
const whatsappTextEn =
  "Hello, I bought an awning at Leroy Merlin and need it mounted in Valencia. I would like to request a quote.";

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
    question: "¿Hacéis montaje de toldos comprados en Leroy Merlin?",
    answer:
      "Sí. Realizamos montaje de toldos comprados en Leroy Merlin en Valencia, siempre que el producto esté completo y sea adecuado para la pared, terraza, patio o balcón donde se va a montar.",
  },
  {
    question: "¿Podéis montar un toldo Leroy Merlin que ya tengo en casa?",
    answer:
      "Sí. Si ya tienes el toldo en casa, puedes enviarnos fotos de la caja, modelo, instrucciones, soportes y zona de montaje para revisar el trabajo antes de confirmar el precio.",
  },
  {
    question: "¿Montáis toldos manuales y eléctricos de Leroy Merlin?",
    answer:
      "Sí. Podemos montar toldos manuales, extensibles y motorizados. En toldos eléctricos revisamos también el punto de corriente, cableado y conexión.",
  },
  {
    question: "¿Cuánto cuesta el montaje de un toldo Leroy Merlin en Valencia?",
    answer:
      "El precio empieza desde 79 €. El coste final depende del tamaño del toldo, peso, altura, tipo de pared, soportes incluidos y si hay que desmontar un toldo antiguo.",
  },
  {
    question: "¿Qué fotos necesitáis para dar presupuesto?",
    answer:
      "Necesitamos fotos del toldo o caja, enlace del producto si lo tienes, medidas aproximadas, fotos de la pared y confirmar si el toldo es manual o eléctrico.",
  },
  {
    question: "¿Podéis revisar si el toldo es adecuado antes de comprarlo?",
    answer:
      "Sí. Puedes enviarnos el enlace del toldo de Leroy Merlin y fotos del lugar de montaje. Te diremos si parece adecuado antes de comprarlo.",
  },
];

const faqEn = [
  {
    question: "Do you mount awnings bought at Leroy Merlin?",
    answer:
      "Yes. We mount awnings purchased at Leroy Merlin in Valencia, as long as the product is complete and suitable for the wall, terrace, patio or balcony where it will be mounted.",
  },
  {
    question: "Can you mount a Leroy Merlin awning I already have at home?",
    answer:
      "Yes. If you already have the awning at home, you can send us photos of the box, model, instructions, brackets and mounting area so we can review the work before confirming the price.",
  },
  {
    question: "Do you mount manual and electric Leroy Merlin awnings?",
    answer:
      "Yes. We can mount manual, extendable and motorized awnings. For electric awnings, we also check the power point, wiring and connection.",
  },
  {
    question: "How much does Leroy Merlin awning mounting cost in Valencia?",
    answer:
      "Prices start from €79. The final cost depends on awning size, weight, height, wall type, included brackets and whether an old awning needs to be removed.",
  },
  {
    question: "What photos do you need for a quote?",
    answer:
      "We need photos of the awning or box, the product link if you have it, approximate measurements, photos of the wall and confirmation of whether the awning is manual or electric.",
  },
  {
    question: "Can you check if the awning is suitable before I buy it?",
    answer:
      "Yes. You can send us the Leroy Merlin awning link and photos of the mounting area. We will tell you if it looks suitable before you buy it.",
  },
];

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";

  const title = isEs
    ? "Montaje de Toldo Leroy Merlin en Valencia | Desde 79 € | THEVULGO"
    : "Leroy Merlin Awning Mounting in Valencia | From €79 | THEVULGO";

  const description = isEs
    ? "Montaje de toldos comprados en Leroy Merlin en Valencia. Montamos toldos manuales y eléctricos para patio, terraza, balcón o fachada. Presupuesto por WhatsApp."
    : "Mounting of awnings bought at Leroy Merlin in Valencia. We mount manual and electric awnings for patios, terraces, balconies and façades. Quote by WhatsApp.";

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

export default async function MontajeToldoLeroyMerlinValenciaPage({
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
        ? "Montaje de toldos Leroy Merlin en Valencia"
        : "Leroy Merlin awning mounting in Valencia",
      serviceType: isEs
        ? "Montaje de toldos comprados en Leroy Merlin"
        : "Mounting of awnings purchased at Leroy Merlin",
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
            ? "Montaje de toldo Leroy Merlin"
            : "Leroy Merlin awning mounting",
          item: pageUrl,
        },
      ],
    },
  ];

  const benefits = isEs
    ? [
        "Montaje de toldos comprados en Leroy Merlin",
        "Servicio para patio, terraza, balcón o fachada",
        "Toldos manuales, extensibles y eléctricos",
        "Revisión de soportes y pared antes del montaje",
        "Precio claro antes de empezar",
        "Servicio en Valencia y alrededores",
      ]
    : [
        "Mounting of awnings bought at Leroy Merlin",
        "Service for patio, terrace, balcony or façade",
        "Manual, extendable and electric awnings",
        "Bracket and wall check before mounting",
        "Clear price before starting",
        "Service in Valencia and nearby areas",
      ];

  const services = isEs
    ? [
        {
          icon: Store,
          title: "Montaje de toldos Leroy Merlin",
          text: "Montamos toldos que has comprado en Leroy Merlin, tanto si ya lo tienes en casa como si todavía estás eligiendo modelo.",
        },
        {
          icon: Umbrella,
          title: "Patio, terraza o balcón",
          text: "Montaje de toldos para zonas exteriores de viviendas, patios interiores, terrazas privadas y balcones.",
        },
        {
          icon: Drill,
          title: "Fijación y nivelación",
          text: "Colocamos los soportes, nivelamos el toldo y revisamos que la fijación sea estable según la pared.",
        },
        {
          icon: Zap,
          title: "Toldos manuales y eléctricos",
          text: "Podemos montar toldos manuales y modelos motorizados con revisión básica del punto eléctrico.",
        },
      ]
    : [
        {
          icon: Store,
          title: "Leroy Merlin awning mounting",
          text: "We mount awnings bought at Leroy Merlin, whether you already have it at home or are still choosing the model.",
        },
        {
          icon: Umbrella,
          title: "Patio, terrace or balcony",
          text: "Awning mounting for outdoor home areas, private patios, terraces and balconies.",
        },
        {
          icon: Drill,
          title: "Fixing and leveling",
          text: "We place the brackets, level the awning and check that the fixing is stable for the wall.",
        },
        {
          icon: Zap,
          title: "Manual and electric awnings",
          text: "We can mount manual awnings and motorized models with a basic power point check.",
        },
      ];

  const steps = isEs
    ? [
        "Envíanos foto o enlace del toldo de Leroy Merlin.",
        "Manda fotos de la pared, patio, terraza o balcón.",
        "Revisamos modelo, medidas, soportes y tipo de pared.",
        "Confirmamos precio aproximado y disponibilidad.",
        "Realizamos el montaje con nivelación y fijación segura.",
      ]
    : [
        "Send us the Leroy Merlin awning photo or link.",
        "Send photos of the wall, patio, terrace or balcony.",
        "We check model, measurements, brackets and wall type.",
        "We confirm approximate price and availability.",
        "We mount it with leveling and secure fixing.",
      ];

  const checks = isEs
    ? [
        "Modelo de Leroy Merlin",
        "Medidas del toldo",
        "Peso aproximado",
        "Tipo de pared",
        "Altura de montaje",
        "Soportes incluidos",
        "Tornillería incluida",
        "Manual o eléctrico",
        "Salida del toldo",
        "Espacio libre alrededor",
      ]
    : [
        "Leroy Merlin model",
        "Awning measurements",
        "Approximate weight",
        "Wall type",
        "Mounting height",
        "Included brackets",
        "Included screws",
        "Manual or electric",
        "Awning projection",
        "Free space around",
      ];

  const relatedLinks = [
    {
      href: `/${locale}/services/instalacion-toldo-leroy-merlin-valencia`,
      label: isEs
        ? "Instalación de toldo Leroy Merlin"
        : "Leroy Merlin awning installation",
    },
    {
      href: `/${locale}/services/instalar-toldo-valencia`,
      label: isEs ? "Instalar toldo en Valencia" : "Awning installation Valencia",
    },
    {
      href: `/${locale}/services/instalacion-toldo-patio-valencia`,
      label: isEs ? "Toldo para patio" : "Patio awning installation",
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
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.20),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.14),transparent_35%)]" />

          <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
            <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
              <div>
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-2 text-sm font-medium text-amber-200">
                  <Store className="h-4 w-4" />
                  {isEs
                    ? "Montaje de toldos comprados en Leroy Merlin"
                    : "Mounting of awnings bought at Leroy Merlin"}
                </div>

                <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                  {isEs
                    ? "Montaje de Toldo Leroy Merlin en Valencia"
                    : "Leroy Merlin Awning Mounting in Valencia"}
                </h1>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-300">
                  {isEs
                    ? "¿Compraste un toldo en Leroy Merlin y necesitas montarlo? Realizamos montaje de toldos manuales y eléctricos para patio, terraza, balcón o fachada en Valencia."
                    : "Bought an awning at Leroy Merlin and need it mounted? We mount manual and electric awnings for patios, terraces, balconies and façades in Valencia."}
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <a
                    href={whatsappUrl}
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-amber-400 px-6 py-4 font-semibold text-neutral-950 transition hover:bg-amber-300"
                  >
                    <MessageCircle className="h-5 w-5" />
                    {isEs
                      ? "Pedir presupuesto por WhatsApp"
                      : "Request quote on WhatsApp"}
                  </a>

                  <Link
                    href={`/${locale}/services`}
                    className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 px-6 py-4 font-semibold text-white transition hover:bg-white/10"
                  >
                    {isEs ? "Ver otros servicios" : "See other services"}
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </div>

                <div className="mt-8 flex flex-wrap gap-3 text-sm text-neutral-300">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
                    <Euro className="h-4 w-4 text-amber-300" />
                    {isEs ? "Desde 79 €" : "From €79"}
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
                    <PackageCheck className="h-4 w-4 text-amber-300" />
                    {isEs ? "Producto del cliente" : "Customer product"}
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
                      <p className="text-3xl font-bold">
                        {isEs ? "Desde 79 €" : "From €79"}
                      </p>
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
                  {isEs ? "Cómo trabajamos" : "How we work"}
                </div>

                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  {isEs
                    ? "Compraste el toldo en Leroy Merlin, nosotros hacemos el montaje"
                    : "You bought the awning at Leroy Merlin, we handle the mounting"}
                </h2>

                <p className="mt-5 text-neutral-300">
                  {isEs
                    ? "Muchos toldos se venden listos para montar, pero el trabajo requiere medir, nivelar, perforar correctamente y fijar bien los soportes. Revisamos todo antes de confirmar."
                    : "Many awnings are sold ready to mount, but the work requires measuring, leveling, drilling correctly and fixing brackets properly. We check everything before confirming."}
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
                {isEs ? "Antes del montaje" : "Before mounting"}
              </div>

              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                {isEs
                  ? "Qué revisamos antes de montar un toldo Leroy Merlin"
                  : "What we check before mounting a Leroy Merlin awning"}
              </h2>

              <p className="mt-5 text-neutral-300">
                {isEs
                  ? "El montaje depende del modelo, tamaño, pared, altura y soportes incluidos. Una revisión previa ayuda a evitar problemas durante la instalación."
                  : "Mounting depends on model, size, wall, height and included brackets. A prior check helps avoid problems during installation."}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {checks.map((item) => (
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
                    ? "Montaje en patio, terraza, balcón o fachada"
                    : "Mounting on patio, terrace, balcony or façade"}
                </h2>
                <p className="mt-4 text-neutral-300">
                  {isEs
                    ? "Podemos montar toldos Leroy Merlin en diferentes zonas exteriores, siempre que haya una superficie segura para fijar los soportes."
                    : "We can mount Leroy Merlin awnings in different outdoor areas, as long as there is a safe surface for the brackets."}
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:col-span-2">
                {[
                  {
                    icon: Home,
                    title: isEs ? "Patios privados" : "Private patios",
                    text: isEs
                      ? "Montaje para patios interiores, bajos y zonas exteriores de viviendas."
                      : "Mounting for private patios, ground-floor homes and outdoor areas.",
                  },
                  {
                    icon: Sun,
                    title: isEs ? "Terrazas" : "Terraces",
                    text: isEs
                      ? "Toldos para terrazas donde se necesita sombra y protección solar."
                      : "Awnings for terraces where shade and sun protection are needed.",
                  },
                  {
                    icon: Umbrella,
                    title: isEs ? "Balcones" : "Balconies",
                    text: isEs
                      ? "Montaje de toldos pequeños o medianos para balcones de vivienda."
                      : "Mounting of small or medium awnings for home balconies.",
                  },
                  {
                    icon: Wrench,
                    title: isEs ? "Fachadas" : "Façades",
                    text: isEs
                      ? "Revisión de pared, anclajes y soportes antes de perforar."
                      : "Wall, anchor and bracket check before drilling.",
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="rounded-3xl border border-white/10 bg-neutral-950 p-6"
                    >
                      <div className="mb-4 inline-flex rounded-2xl bg-amber-400/10 p-3 text-amber-300">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="mt-3 text-sm leading-6 text-neutral-400">
                        {item.text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-neutral-300">
                <PackageCheck className="h-4 w-4 text-amber-300" />
                {isEs ? "Información necesaria" : "Required information"}
              </div>

              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                {isEs
                  ? "Qué enviar por WhatsApp para calcular el montaje"
                  : "What to send by WhatsApp to estimate the mounting"}
              </h2>

              <p className="mt-5 text-neutral-300">
                {isEs
                  ? "Para darte un precio más claro, envía fotos del toldo, modelo y lugar exacto donde quieres montarlo."
                  : "To give you a clearer price, send photos of the awning, model and exact place where you want it mounted."}
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
              <div className="space-y-4">
                {[
                  isEs
                    ? "Foto del toldo o de la caja de Leroy Merlin"
                    : "Photo of the awning or Leroy Merlin box",
                  isEs
                    ? "Enlace del producto si lo tienes"
                    : "Product link if you have it",
                  isEs
                    ? "Fotos de la pared donde irá montado"
                    : "Photos of the wall where it will be mounted",
                  isEs
                    ? "Medidas aproximadas de ancho y salida"
                    : "Approximate width and projection measurements",
                  isEs
                    ? "Confirmar si es manual o eléctrico"
                    : "Confirm whether it is manual or electric",
                  isEs
                    ? "Indicar si hay que retirar un toldo antiguo"
                    : "Tell us if an old awning must be removed",
                ].map((item) => (
                  <div key={item} className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-amber-300" />
                    <span className="text-neutral-300">{item}</span>
                  </div>
                ))}
              </div>

              <a
                href={whatsappUrl}
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-amber-400 px-5 py-4 font-semibold text-neutral-950 transition hover:bg-amber-300"
              >
                <MessageCircle className="h-5 w-5" />
                {isEs ? "Enviar fotos por WhatsApp" : "Send photos by WhatsApp"}
              </a>
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/[0.03]">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-3">
              <div className="lg:col-span-1">
                <h2 className="text-3xl font-bold">
                  {isEs
                    ? "Servicio de montaje en Valencia"
                    : "Mounting service in Valencia"}
                </h2>
                <p className="mt-4 text-neutral-300">
                  {isEs
                    ? "Trabajamos en Valencia ciudad y zonas cercanas. Para confirmar disponibilidad, envíanos fotos del toldo y del lugar de montaje."
                    : "We work in Valencia city and nearby areas. To confirm availability, send us photos of the awning and mounting area."}
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
                  ? "Dudas habituales sobre montaje de toldos comprados en Leroy Merlin."
                  : "Common questions about mounting awnings bought at Leroy Merlin."}
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
                      ? "¿Necesitas montar un toldo Leroy Merlin?"
                      : "Need to mount a Leroy Merlin awning?"}
                  </h2>
                  <p className="mt-4 max-w-2xl text-neutral-300">
                    {isEs
                      ? "Envíanos fotos del toldo, del modelo y de la pared donde quieres montarlo. Te diremos si podemos hacerlo y el precio aproximado."
                      : "Send us photos of the awning, model and wall where you want it mounted. We will tell you if we can do it and the approximate price."}
                  </p>
                </div>

                <a
                  href={whatsappUrl}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-amber-400 px-6 py-4 font-semibold text-neutral-950 transition hover:bg-amber-300"
                >
                  <MessageCircle className="h-5 w-5" />
                  {isEs
                    ? "Pedir presupuesto por WhatsApp"
                    : "Request quote on WhatsApp"}
                </a>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="mb-4 text-lg font-semibold">
                {isEs ? "Servicios relacionados" : "Related services"}
              </h3>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
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