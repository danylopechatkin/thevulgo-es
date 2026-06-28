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
  ShieldCheck,
  Sparkles,
  Store,
  Sun,
  Umbrella,
  Users,
  Wrench,
  Building2,
  ClipboardCheck,
  Zap,
  Star,
  Ruler,
  ThumbsUp,
} from "lucide-react";

type Props = {
  params: Promise<{ locale: string }>;
};

const baseUrl = "https://www.thevulgo.es";
const phone = "34610076942";
const slug = "services/instalador-toldos-valencia";

const whatsappTextEs =
  "Hola, busco un instalador de toldos en Valencia. Quiero pedir presupuesto.";
const whatsappTextEn =
  "Hello, I am looking for an awning installer in Valencia. I would like to request a quote.";

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
    titleEs: "Instalación de toldos en Valencia",
    titleEn: "Awning installation in Valencia",
    href: "/services/instalacion-toldos-valencia",
  },
  {
    titleEs: "Montaje de toldos en Valencia",
    titleEn: "Awning mounting in Valencia",
    href: "/services/montaje-toldos-valencia",
  },
  {
    titleEs: "Instalar un toldo en Valencia",
    titleEn: "Install an awning in Valencia",
    href: "/services/instalar-toldo-valencia",
  },
  {
    titleEs: "Manitas para instalar toldos",
    titleEn: "Handyman for awning installation",
    href: "/services/manitas-instalacion-toldos-valencia",
  },
];

const faqsEs = [
  {
    question: "¿Cuánto cuesta un instalador de toldos en Valencia?",
    answer:
      "El servicio de instalador de toldos en Valencia empieza desde 145 €. El precio final depende del tamaño del toldo, peso, tipo de pared, altura, acceso y si hace falta una segunda persona.",
  },
  {
    question: "¿Puedo contratar solo el instalador si ya tengo el toldo comprado?",
    answer:
      "Sí. Puede comprar el toldo por su cuenta y contratar solo la instalación. Trabajamos con toldos de Leroy Merlin, Naterial, Calima, Amazon y otros modelos similares.",
  },
  {
    question: "¿El instalador revisa la pared antes de perforar?",
    answer:
      "Sí. Antes de perforar revisamos visualmente la pared, la altura, los soportes, el acceso y posibles obstáculos para realizar una instalación segura.",
  },
  {
    question: "¿Instaláis toldos manuales?",
    answer:
      "Sí. Instalamos toldos manuales con manivela, brazos extensibles y soportes de pared para terraza, patio, balcón o fachada.",
  },
  {
    question: "¿Instaláis toldos eléctricos?",
    answer:
      "Sí. También instalamos toldos eléctricos. Si hace falta trabajo eléctrico adicional, se confirma antes de empezar.",
  },
];

const faqsEn = [
  {
    question: "How much does an awning installer cost in Valencia?",
    answer:
      "Awning installer service in Valencia starts from €145. The final price depends on awning size, weight, wall type, height, access and whether a second person is needed.",
  },
  {
    question: "Can I hire only the installer if I already bought the awning?",
    answer:
      "Yes. You can buy the awning yourself and hire only the installation. We work with Leroy Merlin, Naterial, Calima, Amazon and similar awning models.",
  },
  {
    question: "Does the installer check the wall before drilling?",
    answer:
      "Yes. Before drilling we visually check the wall, height, brackets, access and possible obstacles to perform a safe installation.",
  },
  {
    question: "Do you install manual awnings?",
    answer:
      "Yes. We install manual crank awnings, extendable arm awnings and wall-mounted awnings for terraces, patios, balconies and façades.",
  },
  {
    question: "Do you install electric awnings?",
    answer:
      "Yes. We also install electric awnings. If additional electrical work is needed, it is confirmed before starting.",
  },
];

function getContent(locale: string) {
  const isEs = locale === "es";

  return {
    isEs,
    title: isEs
      ? "Instalador de Toldos en Valencia | Desde 145€ | THEVULGO"
      : "Awning Installer in Valencia | From €145 | THEVULGO",
    description: isEs
      ? "Instalador de toldos en Valencia desde 145€. Instalación de toldos manuales, eléctricos, Leroy Merlin, Naterial y Calima. Presupuesto rápido por WhatsApp."
      : "Awning installer in Valencia from €145. Manual and electric awning installation, Leroy Merlin, Naterial and Calima models. Fast quote by WhatsApp.",
    h1: isEs
      ? "Instalador de Toldos en Valencia"
      : "Awning Installer in Valencia",
    heroText: isEs
      ? "¿Busca un instalador de toldos en Valencia? Instalamos toldos manuales y eléctricos en terrazas, patios, balcones y fachadas con precio claro antes de empezar."
      : "Looking for an awning installer in Valencia? We install manual and electric awnings on terraces, patios, balconies and façades with a clear price before starting.",
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

export default async function InstaladorToldosValenciaPage({ params }: Props) {
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
        ? "Instalador de toldos en Valencia"
        : "Awning installer in Valencia",
      serviceType: content.isEs
        ? "Instalador de toldos"
        : "Awning installer",
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
            ? "Instalador de toldos en Valencia"
            : "Awning installer in Valencia",
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
                  ? "Instalador profesional en Valencia"
                  : "Professional installer in Valencia"}
              </div>

              <h1 className="max-w-3xl text-5xl font-black leading-[0.95] tracking-tight text-neutral-950 md:text-7xl">
                {content.isEs ? (
                  <>
                    Instalador de Toldos{" "}
                    <span className="text-yellow-500">en Valencia</span>
                  </>
                ) : (
                  <>
                    Awning Installer{" "}
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
                    ? "Solicitar presupuesto"
                    : "Request a quote"}
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
                    ? "Instalador de toldos manuales"
                    : "Manual awning installer",
                  content.isEs
                    ? "Instalador de toldos eléctricos"
                    : "Electric awning installer",
                  "Leroy Merlin · Naterial · Calima",
                  content.isEs
                    ? "Valencia y alrededores"
                    : "Valencia and nearby areas",
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
                    ? "Su toldo instalado por un profesional."
                    : "Your awning installed by a professional."}
                </h2>
                <p className="mt-6 text-lg leading-8">
                  {content.isEs
                    ? "Envíe fotos, medidas y modelo. Confirmamos el precio, revisamos la instalación y acordamos el día y la hora."
                    : "Send photos, measurements and model. We confirm the price, review the installation and agree on the day and time."}
                </p>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {[
                  {
                    icon: Clock3,
                    title: content.isEs ? "Respuesta rápida" : "Fast reply",
                    text: content.isEs ? "Por WhatsApp" : "By WhatsApp",
                  },
                  {
                    icon: Euro,
                    title: content.isEs ? "Precio claro" : "Clear price",
                    text: content.isEs
                      ? "Antes de empezar"
                      : "Before starting",
                  },
                  {
                    icon: Drill,
                    title: content.isEs ? "Herramientas pro" : "Pro tools",
                    text: content.isEs
                      ? "Trabajo limpio"
                      : "Clean work",
                  },
                  {
                    icon: ShieldCheck,
                    title: content.isEs ? "Fijación segura" : "Safe fixing",
                    text: content.isEs
                      ? "Instalación nivelada"
                      : "Level installation",
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
                  {content.isEs ? "Precio del instalador" : "Installer price"}
                </p>
                <h2 className="mt-5 text-4xl font-black tracking-tight md:text-5xl">
                  {content.isEs
                    ? "Instalador de toldos desde 145€"
                    : "Awning installer from €145"}
                </h2>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-300">
                  {content.isEs
                    ? "El precio se confirma antes de empezar. Depende del tamaño del toldo, tipo de pared, altura, acceso, número de soportes y si hace falta una segunda persona."
                    : "The price is confirmed before starting. It depends on awning size, wall type, height, access, number of brackets and whether a second person is needed."}
                </p>
              </div>

              <div className="rounded-[2rem] border border-yellow-400/40 bg-white/5 p-6">
                <div className="rounded-3xl bg-yellow-400 p-7 text-neutral-950">
                  <p className="text-sm font-black uppercase tracking-[0.2em]">
                    {content.isEs ? "Desde" : "From"}
                  </p>
                  <div className="mt-3 flex items-end gap-2">
                    <span className="text-7xl font-black leading-none">145€</span>
                    <span className="mb-2 text-lg font-bold">
                      {content.isEs ? "instalador" : "installer"}
                    </span>
                  </div>
                  <p className="mt-5 text-base leading-7">
                    {content.isEs
                      ? "Para instalaciones sencillas con acceso cómodo y pared adecuada."
                      : "For simple installations with easy access and a suitable wall."}
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
                    ? "Instalador para toldos pequeños con fijación estándar."
                    : "Installer for small awnings with standard fixing.",
                  icon: Umbrella,
                },
                {
                  title: content.isEs ? "Toldo mediano" : "Medium awning",
                  price: "160€ - 200€",
                  text: content.isEs
                    ? "Instalación con varios soportes, nivelación y prueba."
                    : "Installation with several brackets, leveling and testing.",
                  icon: Sun,
                },
                {
                  title: content.isEs ? "Toldo grande" : "Large awning",
                  price: "200€ - 280€",
                  text: content.isEs
                    ? "Puede requerir segunda persona para levantar y fijar con seguridad."
                    : "May require a second person to lift and fix safely.",
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
                      ? "Contrate un instalador con precio claro"
                      : "Hire an installer with a clear price"}
                  </h3>
                  <p className="mt-2 max-w-3xl text-neutral-300">
                    {content.isEs
                      ? "Envíenos fotos, medidas del toldo y modelo. Le damos presupuesto por WhatsApp antes de organizar la visita."
                      : "Send photos, awning measurements and model. We provide a quote by WhatsApp before arranging the visit."}
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
                {content.isEs ? "Instalador especializado" : "Specialized installer"}
              </p>
              <h2 className="mt-5 text-4xl font-black tracking-tight md:text-5xl">
                {content.isEs
                  ? "Instalador para toldos manuales, eléctricos y de terraza"
                  : "Installer for manual, electric and terrace awnings"}
              </h2>
              <p className="mt-6 text-lg leading-8 text-neutral-600">
                {content.isEs
                  ? "Si ya compró el toldo, podemos revisar el modelo, preparar la instalación y fijarlo correctamente en la pared o fachada."
                  : "If you already bought the awning, we can review the model, prepare the installation and fix it correctly to the wall or façade."}
              </p>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: content.isEs
                    ? "Instalador de toldos manuales"
                    : "Manual awning installer",
                  text: content.isEs
                    ? "Instalación de toldos con manivela, brazos extensibles y soportes de pared."
                    : "Installation of crank awnings, extendable arms and wall brackets.",
                  icon: Wrench,
                },
                {
                  title: content.isEs
                    ? "Instalador de toldos eléctricos"
                    : "Electric awning installer",
                  text: content.isEs
                    ? "Instalación de toldos motorizados. La conexión eléctrica se revisa aparte si es necesaria."
                    : "Installation of motorized awnings. Electrical connection is checked separately if needed.",
                  icon: Zap,
                },
                {
                  title: content.isEs
                    ? "Instalador de toldos Leroy Merlin"
                    : "Leroy Merlin awning installer",
                  text: content.isEs
                    ? "Montamos toldos comprados en Leroy Merlin, Naterial, Calima y modelos similares."
                    : "We install awnings bought from Leroy Merlin, Naterial, Calima and similar models.",
                  icon: Store,
                },
                {
                  title: content.isEs
                    ? "Instalador de toldos terraza"
                    : "Terrace awning installer",
                  text: content.isEs
                    ? "Instalación en terrazas, patios, balcones y zonas exteriores de vivienda."
                    : "Installation on terraces, patios, balconies and outdoor home areas.",
                  icon: Home,
                },
                {
                  title: content.isEs
                    ? "Instalador de toldos grandes"
                    : "Large awning installer",
                  text: content.isEs
                    ? "Para toldos anchos o pesados organizamos el montaje con ayuda si hace falta."
                    : "For wide or heavy awnings, we organize the mounting with help if needed.",
                  icon: Users,
                },
                {
                  title: content.isEs
                    ? "Instalador de toldos en fachada"
                    : "Façade awning installer",
                  text: content.isEs
                    ? "Revisión de pared, marcado de soportes, perforación, fijación y nivelación."
                    : "Wall inspection, bracket marking, drilling, fixing and leveling.",
                  icon: Building2,
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
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-yellow-600">
                {content.isEs ? "Servicios relacionados" : "Related services"}
              </p>

              <h2 className="mt-5 text-4xl font-black tracking-tight md:text-5xl">
                {content.isEs
                  ? "Más páginas de toldos en Valencia"
                  : "More awning pages in Valencia"}
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
                  <h3 className="mt-5 text-xl font-black">
                    {content.isEs ? item.titleEs : item.titleEn}
                  </h3>
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
                  ? "Preguntas frecuentes sobre instaladores de toldos"
                  : "Frequently asked questions about awning installers"}
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
                    ? "¿El instalador puede venir el mismo día?"
                    : "Can the installer come the same day?",
                  answer: content.isEs
                    ? "A veces sí, dependiendo de la agenda, ubicación y dificultad del montaje. Lo mejor es enviar fotos por WhatsApp."
                    : "Sometimes yes, depending on schedule, location and installation difficulty. The best option is to send photos by WhatsApp.",
                },
                {
                  question: content.isEs
                    ? "¿Hace falta un segundo instalador?"
                    : "Is a second installer needed?",
                  answer: content.isEs
                    ? "Para toldos grandes o pesados puede hacer falta una segunda persona para levantar y sujetar el toldo con seguridad."
                    : "For large or heavy awnings, a second person may be needed to lift and hold the awning safely.",
                },
                {
                  question: content.isEs
                    ? "¿Qué pasa si la pared no sirve?"
                    : "What if the wall is not suitable?",
                  answer: content.isEs
                    ? "Si la pared no permite una instalación segura, se lo indicamos antes de continuar. En algunos casos puede hacer falta otro tipo de anclaje."
                    : "If the wall does not allow safe installation, we explain it before continuing. In some cases another type of anchor may be needed.",
                },
                {
                  question: content.isEs
                    ? "¿El instalador trae herramientas?"
                    : "Does the installer bring tools?",
                  answer: content.isEs
                    ? "Sí. Llevamos herramientas para medir, marcar, perforar, fijar y nivelar el toldo."
                    : "Yes. We bring tools to measure, mark, drill, fix and level the awning.",
                },
                {
                  question: content.isEs
                    ? "¿Puedo ayudar durante la instalación?"
                    : "Can I help during installation?",
                  answer: content.isEs
                    ? "En algunos casos, si el cliente puede ayudar a sujetar el toldo, se puede evitar traer una segunda persona y ajustar el precio."
                    : "In some cases, if the client can help hold the awning, it may avoid bringing a second person and adjust the price.",
                },
                {
                  question: content.isEs
                    ? "¿Instaláis toldos en terraza?"
                    : "Do you install terrace awnings?",
                  answer: content.isEs
                    ? "Sí. Instalamos toldos en terrazas, patios, balcones y fachadas siempre que haya acceso seguro."
                    : "Yes. We install awnings on terraces, patios, balconies and façades as long as there is safe access.",
                },
                {
                  question: content.isEs
                    ? "¿Instaláis modelos Naterial o Calima?"
                    : "Do you install Naterial or Calima models?",
                  answer: content.isEs
                    ? "Sí. Podemos instalar toldos Naterial, Calima y otros modelos vendidos en Leroy Merlin."
                    : "Yes. We can install Naterial, Calima and other models sold by Leroy Merlin.",
                },
                {
                  question: content.isEs
                    ? "¿El precio incluye materiales?"
                    : "Are materials included?",
                  answer: content.isEs
                    ? "El precio desde 145 € corresponde a la mano de obra. Si hacen falta tacos especiales, anclaje químico u otros materiales, se confirma antes."
                    : "The price from €145 is for labour. If special plugs, chemical anchors or other materials are needed, we confirm it first.",
                },
                {
                  question: content.isEs
                    ? "¿Qué datos necesita el instalador?"
                    : "What information does the installer need?",
                  answer: content.isEs
                    ? "Fotos del lugar, medidas del toldo, modelo o enlace del producto y ubicación aproximada."
                    : "Photos of the place, awning measurements, product model or link and approximate location.",
                },
                {
                  question: content.isEs
                    ? "¿Trabajáis fuera de Valencia ciudad?"
                    : "Do you work outside Valencia city?",
                  answer: content.isEs
                    ? "Sí. También trabajamos en zonas cercanas como Mislata, Burjassot, Paterna, Torrent, Alboraya y Xirivella."
                    : "Yes. We also work in nearby areas such as Mislata, Burjassot, Paterna, Torrent, Alboraya and Xirivella.",
                },
                {
                  question: content.isEs
                    ? "¿También hacéis otros trabajos de manitas?"
                    : "Do you also do other handyman jobs?",
                  answer: content.isEs
                    ? "Sí. También hacemos montaje de TV, muebles, lámparas, estanterías y pequeñas reparaciones del hogar."
                    : "Yes. We also do TV mounting, furniture assembly, light installation, shelves and small home repairs.",
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
                ? "Instalador de toldos en Valencia desde 145€"
                : "Awning installer in Valencia from €145"}
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-neutral-300">
              {content.isEs
                ? "Envíenos fotos del lugar, medidas y modelo del toldo. Le responderemos con presupuesto y disponibilidad."
                : "Send photos of the place, measurements and awning model. We will reply with quote and availability."}
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