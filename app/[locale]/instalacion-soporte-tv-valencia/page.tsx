import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Clock3,
  Euro,
  Hammer,
  Home,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Star,
  Wrench,
  Zap,
} from "lucide-react";

type Props = {
  params: Promise<{ locale: string }>;
};

const baseUrl = "https://www.thevulgo.es";
const phone = "34610076942";

const areas = [
  "Valencia",
  "Campanar",
  "Ruzafa",
  "Benimaclet",
  "Patraix",
  "El Carmen",
  "Extramurs",
  "Mislata",
  "Burjassot",
  "Paterna",
  "Torrent",
  "Sagunto",
  "Cullera",
  "Gandía",
];

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";

  const title = isEs
    ? "Instalación de Soporte TV en Valencia | Fijo, Inclinable y Articulado | THEVULGO"
    : "TV Bracket Installation in Valencia | Fixed, Tilting & Full Motion | THEVULGO";

  const description = isEs
    ? "Instalación de soporte TV en Valencia. Soportes fijos, inclinables, articulados y de brazo para televisores en pared. Montaje seguro y presupuesto por WhatsApp."
    : "TV bracket installation in Valencia. Fixed, tilting, full motion and arm brackets for wall-mounted TVs. Safe mounting and estimate by WhatsApp.";

  return {
    title,
    description,
    keywords: isEs
      ? [
          "instalacion soporte tv valencia",
          "instalación soporte tv valencia",
          "soporte tv valencia",
          "instalar soporte tv valencia",
          "instalar soporte television valencia",
          "soporte tv pared valencia",
          "soporte tv articulado valencia",
          "soporte tv inclinable valencia",
          "soporte tv fijo valencia",
          "montaje soporte tv valencia",
          "montaje tv valencia",
          "colgar tv valencia",
          "instalar tv pared valencia",
          "montador tv valencia",
        ]
      : [
          "tv bracket installation valencia",
          "tv wall bracket valencia",
          "install tv bracket valencia",
          "fixed tv bracket valencia",
          "tilting tv bracket valencia",
          "full motion tv bracket valencia",
          "tv mounting valencia",
          "wall mounted tv valencia",
          "tv installer valencia",
        ],
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `${baseUrl}/${locale}/instalacion-soporte-tv-valencia`,
      languages: {
        es: `${baseUrl}/es/instalacion-soporte-tv-valencia`,
        en: `${baseUrl}/en/instalacion-soporte-tv-valencia`,
        "x-default": `${baseUrl}/es/instalacion-soporte-tv-valencia`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${baseUrl}/${locale}/instalacion-soporte-tv-valencia`,
      siteName: "THEVULGO",
      locale: isEs ? "es_ES" : "en_GB",
      type: "website",
    },
  };
}

export default async function InstalacionSoporteTvValenciaPage({
  params,
}: Props) {
  const { locale } = await params;
  const isEs = locale === "es";

  const estimateHref = `/${locale}/estimate?category=tv`;

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, necesito instalación de soporte TV en Valencia. Quiero pedir presupuesto y puedo enviar fotos de la pared, TV y soporte."
      : "Hi, I need TV bracket installation in Valencia. I’d like to request an estimate and can send photos of the wall, TV and bracket."
  );

  const whatsappHref = `https://wa.me/${phone}?text=${whatsappText}`;

  const moneyLinks = [
    {
      title: isEs ? "Colgar TV" : "TV wall mounting",
      desc: isEs
        ? "TV en pared con soporte fijo, inclinable o articulado."
        : "Wall-mounted TV with fixed, tilting or full motion bracket.",
      href: `/${locale}/colgar-tv-valencia`,
    },
    {
      title: isEs ? "Montaje de TV" : "TV mounting",
      desc: isEs
        ? "Instalación de televisores en pared con acabado limpio."
        : "TV wall installation with clean finish.",
      href: `/${locale}/montaje-tv-valencia`,
    },
    {
      title: isEs ? "Ocultar cables TV" : "Hide TV cables",
      desc: isEs
        ? "Canaletas, organización de cables y acabado visual más limpio."
        : "Cable channels, cable organization and cleaner visual finish.",
      href: `/${locale}/ocultar-cables-tv-valencia`,
    },
    {
      title: isEs ? "Instalación de soundbar" : "Soundbar installation",
      desc: isEs
        ? "Montaje de barra de sonido bajo la TV o en pared."
        : "Soundbar mounting under the TV or on the wall.",
      href: `/${locale}/instalacion-soundbar-valencia`,
    },
    {
      title: isEs ? "Home cinema" : "Home cinema",
      desc: isEs
        ? "TV, proyector, pantalla, soundbar y cableado ordenado."
        : "TV, projector, screen, soundbar and tidy cabling.",
      href: `/${locale}/home-cinema-valencia`,
    },
    {
      title: isEs ? "Manitas en Valencia" : "Handyman in Valencia",
      desc: isEs
        ? "Montaje, reparaciones, instalaciones y mantenimiento del hogar."
        : "Assembly, repairs, installations and home maintenance.",
      href: `/${locale}/handyman-valencia`,
    },
  ];

  const prices = isEs
    ? [
        ["Instalación de soporte fijo", "desde 49 €"],
        ["Instalación de soporte inclinable", "desde 59 €"],
        ["Instalación de soporte articulado", "desde 79 €"],
        ["Instalación de soporte para TV grande", "desde 69 €"],
        ["Soundbar / cableado limpio", "según trabajo"],
        ["Visita / revisión", "desde 49 €"],
      ]
    : [
        ["Fixed bracket installation", "from €49"],
        ["Tilting bracket installation", "from €59"],
        ["Full motion bracket installation", "from €79"],
        ["Large TV bracket installation", "from €69"],
        ["Soundbar / clean cabling", "by job"],
        ["Visit / inspection", "from €49"],
      ];

  const faqs = isEs
    ? [
        {
          q: "¿Cuánto cuesta instalar un soporte TV en Valencia?",
          a: "Depende del tipo de soporte, tamaño y peso de la TV, tipo de pared, altura, dificultad y cableado. Un soporte fijo suele empezar desde 49 €, y un soporte articulado desde 79 €.",
        },
        {
          q: "¿Qué tipo de soporte TV podéis instalar?",
          a: "Instalamos soportes fijos, inclinables, articulados, de brazo y soportes compatibles con diferentes medidas VESA. Antes de instalar revisamos peso, tamaño y tipo de pared.",
        },
        {
          q: "¿Se puede instalar un soporte TV en pared de pladur?",
          a: "Sí, pero hay que revisar peso, tipo de soporte, estructura del pladur y puntos de fijación. En algunos casos se necesitan tacos específicos o refuerzos.",
        },
        {
          q: "¿Puedo comprar yo el soporte?",
          a: "Sí. Puedes comprar el soporte y nosotros lo instalamos. Lo ideal es enviar fotos del soporte, caja o modelo para confirmar compatibilidad con tu TV.",
        },
        {
          q: "¿También colgáis la TV después de instalar el soporte?",
          a: "Sí. Instalamos el soporte, colgamos la TV, revisamos nivelación, estabilidad, altura y dejamos el montaje listo para usar.",
        },
        {
          q: "¿Podéis dejar los cables más limpios?",
          a: "Sí. Podemos organizar cables, colocar canaletas y buscar una solución visual ordenada. Ocultar cables dentro de pared depende del tipo de pared e instalación existente.",
        },
      ]
    : [
        {
          q: "How much does TV bracket installation in Valencia cost?",
          a: "It depends on bracket type, TV size and weight, wall type, height, difficulty and cabling. A fixed bracket usually starts from €49, and a full motion bracket from €79.",
        },
        {
          q: "What type of TV bracket can you install?",
          a: "We install fixed, tilting, full motion, arm brackets and brackets compatible with different VESA sizes. Before installation we check weight, size and wall type.",
        },
        {
          q: "Can a TV bracket be installed on drywall?",
          a: "Yes, but weight, bracket type, drywall structure and fixing points must be checked. In some cases specific anchors or reinforcement are needed.",
        },
        {
          q: "Can I buy the bracket myself?",
          a: "Yes. You can buy the bracket and we install it. Ideally send photos of the bracket, box or model to confirm compatibility with your TV.",
        },
        {
          q: "Do you also mount the TV after installing the bracket?",
          a: "Yes. We install the bracket, mount the TV, check leveling, stability, height and leave everything ready to use.",
        },
        {
          q: "Can you make the cables look cleaner?",
          a: "Yes. We can organize cables, install cable channels and find a tidy visible solution. Hiding cables inside the wall depends on wall type and existing installation.",
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
          addressCountry: "ES",
        },
      },
      {
        "@type": "Service",
        "@id": `${baseUrl}/${locale}/instalacion-soporte-tv-valencia#service`,
        name: isEs
          ? "Instalación de soporte TV en Valencia"
          : "TV bracket installation in Valencia",
        serviceType: isEs
          ? "Instalación de soporte TV"
          : "TV bracket installation",
        provider: {
          "@id": `${baseUrl}/#localbusiness`,
        },
        areaServed: areas,
        url: `${baseUrl}/${locale}/instalacion-soporte-tv-valencia`,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: isEs
            ? "Servicios de instalación de soporte TV en Valencia"
            : "TV bracket installation services in Valencia",
          itemListElement: moneyLinks.map((item) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: item.title,
              url: `${baseUrl}${item.href}`,
            },
          })),
        },
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
            name: "Home",
            item: `${baseUrl}/${locale}`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: isEs
              ? "Instalación de soporte TV Valencia"
              : "TV bracket installation Valencia",
            item: `${baseUrl}/${locale}/instalacion-soporte-tv-valencia`,
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
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-white px-4 py-2 text-sm font-semibold shadow-sm">
              <MapPin className="h-4 w-4 text-yellow-500" />
              THEVULGO • Valencia & nearby
            </div>

            <h1 className="text-4xl font-black tracking-tight sm:text-6xl">
              {isEs
                ? "Instalación de soporte TV en Valencia para soportes fijos, inclinables y articulados"
                : "TV bracket installation in Valencia for fixed, tilting and full motion brackets"}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-700">
              {isEs
                ? "THEVULGO instala soportes TV en Valencia: soportes fijos, inclinables, articulados y de brazo para televisores en pared. Revisamos peso, VESA, tipo de pared, altura y cableado para dejar una instalación segura, nivelada y limpia."
                : "THEVULGO installs TV brackets in Valencia: fixed, tilting, full motion and arm brackets for wall-mounted TVs. We check weight, VESA, wall type, height and cabling to leave a safe, level and clean installation."}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappHref}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-yellow-400 px-6 py-4 font-bold text-black shadow-lg transition hover:scale-105"
              >
                <MessageCircle className="h-5 w-5" />
                {isEs
                  ? "Pedir presupuesto por WhatsApp"
                  : "Request estimate by WhatsApp"}
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
                  title: isEs ? "Respuesta rápida" : "Fast response",
                  text: isEs
                    ? "Envía fotos de TV, pared y soporte."
                    : "Send photos of TV, wall and bracket.",
                },
                {
                  icon: ShieldCheck,
                  title: isEs ? "Soporte seguro" : "Safe bracket",
                  text: isEs
                    ? "Revisamos peso, VESA, pared y fijación."
                    : "We check weight, VESA, wall and fixing.",
                },
                {
                  icon: BadgeCheck,
                  title: isEs ? "TV nivelada" : "Level TV",
                  text: isEs
                    ? "Altura, nivelación y estabilidad revisadas."
                    : "Height, leveling and stability checked.",
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
        <h2 className="text-3xl font-black">
          {isEs
            ? "Servicios relacionados con soportes TV"
            : "Related TV bracket services"}
        </h2>

        <p className="mt-4 max-w-3xl text-neutral-700">
          {isEs
            ? "Estas páginas internas ayudan a reforzar el SEO local y conectan la instalación de soporte TV con colgar TV, montaje, cableado, soundbar y home cinema."
            : "These internal pages strengthen local SEO and connect TV bracket installation with TV wall mounting, clean cabling, soundbar and home cinema."}
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {moneyLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group rounded-2xl border border-yellow-300 bg-white p-6 shadow-md transition hover:scale-105 hover:shadow-xl"
            >
              <Wrench className="mb-4 h-6 w-6 text-yellow-500" />
              <h3 className="text-xl font-black">{item.title}</h3>
              <p className="mt-3 leading-7 text-neutral-700">{item.desc}</p>
              <div className="mt-5 inline-flex items-center gap-2 font-bold text-neutral-950">
                {isEs ? "Ver servicio" : "View service"}
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr]">
            <div>
              <h2 className="text-3xl font-black">
                {isEs
                  ? "¿Qué revisamos antes de instalar un soporte TV?"
                  : "What do we check before installing a TV bracket?"}
              </h2>

              <p className="mt-5 text-lg leading-8 text-neutral-700">
                {isEs
                  ? "Antes de instalar un soporte TV revisamos el tamaño y peso del televisor, medida VESA, tipo de soporte, tipo de pared, altura ideal, puntos de fijación y distancia a enchufes. Esto ayuda a evitar una TV torcida, inestable o con una fijación incorrecta."
                  : "Before installing a TV bracket, we check TV size and weight, VESA size, bracket type, wall type, ideal height, fixing points and socket distance. This helps avoid a crooked, unstable or incorrectly fixed TV."}
              </p>

              <p className="mt-5 text-lg leading-8 text-neutral-700">
                {isEs
                  ? "Instalamos soportes para televisores Samsung, LG, Sony, Philips, TCL, Hisense, Xiaomi y otras marcas. Trabajamos con soportes fijos, inclinables, articulados y de brazo para salones, dormitorios, oficinas, apartamentos Airbnb y locales en Valencia."
                  : "We install brackets for Samsung, LG, Sony, Philips, TCL, Hisense, Xiaomi and other TV brands. We work with fixed, tilting, full motion and arm brackets for living rooms, bedrooms, offices, Airbnb apartments and commercial spaces in Valencia."}
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  isEs ? "Soporte fijo" : "Fixed bracket",
                  isEs ? "Soporte inclinable" : "Tilting bracket",
                  isEs ? "Soporte articulado" : "Full motion bracket",
                  isEs ? "Medida VESA" : "VESA size",
                  isEs ? "Pared de ladrillo o pladur" : "Brick or drywall wall",
                  isEs ? "Cableado más limpio" : "Cleaner cabling",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm"
                  >
                    <CheckCircle2 className="h-5 w-5 text-yellow-500" />
                    <span className="font-semibold">{item}</span>
                  </div>
                ))}
              </div>
            </div>
                        <div className="rounded-3xl border border-yellow-300 bg-white p-6 shadow-xl">
              <h3 className="flex items-center gap-2 text-xl font-black">
                <Euro className="h-6 w-6 text-yellow-500" />
                {isEs ? "Precios orientativos" : "Guide prices"}
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
                  ? "El precio final depende del tipo de soporte, tamaño de TV, peso, pared, altura, cableado, soundbar, dificultad y tiempo necesario."
                  : "Final price depends on bracket type, TV size, weight, wall, height, cabling, soundbar, difficulty and time required."}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <h2 className="text-3xl font-black">
          {isEs ? "Cómo funciona" : "How it works"}
        </h2>

        <div className="mt-10 grid gap-5 md:grid-cols-5">
          {[
            [
              isEs ? "1. Envía fotos" : "1. Send photos",
              isEs
                ? "Muestra TV, soporte y pared."
                : "Show TV, bracket and wall.",
            ],
            [
              isEs ? "2. Revisamos" : "2. We check",
              isEs
                ? "Peso, VESA, pared y altura."
                : "Weight, VESA, wall and height.",
            ],
            [
              isEs ? "3. Estimación" : "3. Estimate",
              isEs
                ? "Te damos precio antes de empezar."
                : "We give the price before starting.",
            ],
            [
              isEs ? "4. Instalación" : "4. Installation",
              isEs
                ? "Fijamos soporte y colgamos TV."
                : "We fix bracket and mount TV.",
            ],
            [
              isEs ? "5. Revisión final" : "5. Final check",
              isEs
                ? "Comprobamos nivel, estabilidad y cables."
                : "We check level, stability and cables.",
            ],
          ].map(([title, text]) => (
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
              <h2 className="text-3xl font-black">
                {isEs ? "Por qué elegir THEVULGO" : "Why choose THEVULGO"}
              </h2>
              <p className="mt-5 text-lg leading-8 text-neutral-300">
                {isEs
                  ? "Instalar un soporte TV parece sencillo, pero una mala fijación puede dejar la televisión torcida, inestable o demasiado alta. Cuidamos la pared, la nivelación, el soporte, la altura y el acabado final."
                  : "Installing a TV bracket can look simple, but poor fixing can leave the TV crooked, unstable or too high. We take care of the wall, leveling, bracket, height and final finish."}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                [Hammer, isEs ? "Montaje preciso" : "Precise mounting"],
                [Home, isEs ? "Casa y Airbnb" : "Homes and Airbnb"],
                [Zap, isEs ? "Respuesta rápida" : "Fast response"],
                [Star, isEs ? "Acabado profesional" : "Professional finish"],
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

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <h2 className="text-3xl font-black">
          {isEs ? "Zonas de servicio en Valencia" : "Service areas in Valencia"}
        </h2>

        <p className="mt-4 max-w-3xl text-neutral-700">
          {isEs
            ? "Trabajamos en Valencia ciudad y zonas cercanas. Si no estás seguro si cubrimos tu zona, envía tu ubicación por WhatsApp."
            : "We work in Valencia city and nearby areas. If you are not sure whether we cover your area, send your location by WhatsApp."}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {areas.map((area) => (
            <span
              key={area}
              className="rounded-full border border-yellow-300 bg-yellow-50 px-4 py-2 text-sm font-semibold"
            >
              {area}
            </span>
          ))}
        </div>
      </section>

      <section className="border-y border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <h2 className="text-3xl font-black">
            {isEs ? "Preguntas frecuentes" : "Frequently asked questions"}
          </h2>

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
          <h2 className="text-3xl font-black">
            {isEs
              ? "¿Necesitas instalar un soporte TV en Valencia?"
              : "Need TV bracket installation in Valencia?"}
          </h2>

          <p className="mt-4 max-w-3xl text-lg font-medium">
            {isEs
              ? "Envía fotos de la TV, soporte, pared y zona de instalación por WhatsApp. Te diremos qué se puede hacer, cuánto puede costar y cuándo podemos ir."
              : "Send photos of the TV, bracket, wall and installation area by WhatsApp. We will tell you what can be done, how much it may cost and when we can come."}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
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
      </section>
    </main>
  );
}