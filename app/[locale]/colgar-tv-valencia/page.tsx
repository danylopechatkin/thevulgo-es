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
    ? "Colgar TV en Valencia | Instalación de Televisores en Pared | THEVULGO"
    : "TV Wall Mounting in Valencia | Professional Installation | THEVULGO";

  const description = isEs
    ? "Servicio para colgar TV en Valencia. Instalación de televisores en pared, soportes fijos, inclinables y articulados, soundbar y cableado limpio. Presupuesto por WhatsApp."
    : "TV wall mounting service in Valencia. Fixed, tilting and full motion TV brackets, soundbar and clean cabling. Estimate by WhatsApp.";

  return {
    title,
    description,
    keywords: isEs
      ? [
          "colgar tv valencia",
          "colgar television valencia",
          "colgar televisor valencia",
          "colgar tv en pared valencia",
          "instalar tv pared valencia",
          "instalar television pared valencia",
          "montaje tv valencia",
          "montaje television valencia",
          "instalacion tv valencia",
          "soporte tv valencia",
          "instalacion soporte tv valencia",
          "colgar smart tv valencia",
          "montador tv valencia",
          "ocultar cables tv valencia",
        ]
      : [
          "tv wall mounting valencia",
          "tv mounting valencia",
          "wall mounted tv valencia",
          "tv installation valencia",
          "tv bracket installation valencia",
          "smart tv mounting valencia",
          "full motion tv bracket valencia",
          "hide tv cables valencia",
        ],
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `${baseUrl}/${locale}/colgar-tv-valencia`,
      languages: {
        es: `${baseUrl}/es/colgar-tv-valencia`,
        en: `${baseUrl}/en/colgar-tv-valencia`,
        "x-default": `${baseUrl}/es/colgar-tv-valencia`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${baseUrl}/${locale}/colgar-tv-valencia`,
      siteName: "THEVULGO",
      locale: isEs ? "es_ES" : "en_GB",
      type: "website",
    },
  };
}

export default async function ColgarTvValenciaPage({ params }: Props) {
  const { locale } = await params;
  const isEs = locale === "es";

  const estimateHref = `/${locale}/estimate?category=tv`;

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, necesito colgar una TV en Valencia. Quiero pedir presupuesto y puedo enviar fotos de la pared, TV y soporte."
      : "Hi, I need to mount a TV on the wall in Valencia. I’d like to request an estimate and can send photos of the wall, TV and bracket."
  );

  const whatsappHref = `https://wa.me/${phone}?text=${whatsappText}`;

  const moneyLinks = [
    {
      title: isEs ? "Montaje de TV" : "TV mounting",
      desc: isEs
        ? "Instalación de TV en pared con soporte fijo, inclinable o articulado."
        : "TV wall installation with fixed, tilting or full motion bracket.",
      href: `/${locale}/montaje-tv-valencia`,
    },
    {
      title: isEs ? "Instalación de soporte TV" : "TV bracket installation",
      desc: isEs
        ? "Soportes de TV fijos, inclinables, articulados y de brazo."
        : "Fixed, tilting, articulated and arm TV brackets.",
      href: `/${locale}/instalacion-soporte-tv-valencia`,
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
        ["Colgar TV pequeña", "desde 49 €"],
        ["Colgar TV mediana", "desde 59 €"],
        ["Colgar TV grande", "desde 69 €"],
        ["Soporte articulado / brazo", "desde 79 €"],
        ["Soundbar / cableado limpio", "según trabajo"],
        ["Visita / revisión", "desde 49 €"],
      ]
    : [
        ["Small TV mounting", "from €49"],
        ["Medium TV mounting", "from €59"],
        ["Large TV mounting", "from €69"],
        ["Full motion / arm bracket", "from €79"],
        ["Soundbar / clean cabling", "by job"],
        ["Visit / inspection", "from €49"],
      ];

  const faqs = isEs
    ? [
        {
          q: "¿Cuánto cuesta colgar una TV en Valencia?",
          a: "Depende del tamaño de la TV, tipo de pared, soporte, altura, cableado y dificultad. Una instalación básica suele empezar desde 49–69 €.",
        },
        {
          q: "¿Se puede colgar una TV en pared de pladur?",
          a: "Sí, pero hay que revisar peso, soporte, tipo de pladur y puntos de fijación. En algunos casos usamos tacos específicos o refuerzos para una instalación segura.",
        },
        {
          q: "¿Instaláis soportes articulados?",
          a: "Sí. Instalamos soportes fijos, inclinables, articulados y de brazo. Antes de instalar revisamos peso, VESA, distancia a la pared y tipo de superficie.",
        },
        {
          q: "¿Podéis ocultar los cables de la TV?",
          a: "Podemos organizar cables, colocar canaletas y buscar un acabado visual más limpio. Ocultar cables dentro de pared depende del tipo de pared e instalación existente.",
        },
        {
          q: "¿Montáis soundbar junto con la TV?",
          a: "Sí. Podemos instalar soundbar bajo la TV, en pared o con soporte compatible, dejando la zona más ordenada.",
        },
        {
          q: "¿Qué tamaño de TV podéis instalar?",
          a: "Podemos instalar televisores pequeños, medianos y grandes. Para TVs grandes o pesadas, pedimos fotos, modelo, peso aproximado y tipo de soporte antes de confirmar.",
        },
      ]
    : [
        {
          q: "How much does TV wall mounting in Valencia cost?",
          a: "It depends on TV size, wall type, bracket, height, cabling and difficulty. A basic installation usually starts from €49–69.",
        },
        {
          q: "Can a TV be mounted on drywall?",
          a: "Yes, but weight, bracket, drywall type and fixing points must be checked. In some cases we use specific anchors or reinforcement for safe installation.",
        },
        {
          q: "Do you install full motion brackets?",
          a: "Yes. We install fixed, tilting, full motion and arm brackets. Before installation we check weight, VESA, wall distance and surface type.",
        },
        {
          q: "Can you hide TV cables?",
          a: "We can organize cables, install cable channels and create a cleaner visual finish. Hiding cables inside the wall depends on wall type and existing installation.",
        },
        {
          q: "Do you mount soundbars with the TV?",
          a: "Yes. We can install a soundbar under the TV, on the wall or with a compatible bracket, leaving the area tidier.",
        },
        {
          q: "What TV sizes can you install?",
          a: "We can install small, medium and large TVs. For large or heavy TVs, we ask for photos, model, approximate weight and bracket type before confirming.",
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
        "@id": `${baseUrl}/${locale}/colgar-tv-valencia#service`,
        name: isEs ? "Colgar TV en Valencia" : "TV wall mounting in Valencia",
        serviceType: isEs ? "Colgar TV en pared" : "TV wall mounting",
        provider: {
          "@id": `${baseUrl}/#localbusiness`,
        },
        areaServed: areas,
        url: `${baseUrl}/${locale}/colgar-tv-valencia`,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: isEs
            ? "Servicios para colgar TV en Valencia"
            : "TV wall mounting services in Valencia",
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
            name: isEs ? "Colgar TV Valencia" : "TV wall mounting Valencia",
            item: `${baseUrl}/${locale}/colgar-tv-valencia`,
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
                ? "Colgar TV en Valencia con instalación segura y acabado limpio"
                : "TV wall mounting in Valencia with safe installation and clean finish"}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-700">
              {isEs
                ? "THEVULGO cuelga televisores en pared en Valencia: Smart TV, soportes fijos, inclinables o articulados, instalación de soundbar, cableado más limpio y revisión de pared para una fijación segura. Envía fotos por WhatsApp y recibe una estimación clara."
                : "THEVULGO mounts TVs on walls in Valencia: Smart TVs, fixed, tilting or full motion brackets, soundbar installation, cleaner cabling and wall checking for safe fixing. Send photos by WhatsApp and get a clear estimate."}
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
                  title: isEs ? "Fijación segura" : "Safe fixing",
                  text: isEs
                    ? "Revisamos pared, peso, soporte y VESA."
                    : "We check wall, weight, bracket and VESA.",
                },
                {
                  icon: BadgeCheck,
                  title: isEs ? "Acabado limpio" : "Clean finish",
                  text: isEs
                    ? "TV nivelada y cables más ordenados."
                    : "Level TV and tidier cables.",
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
          {isEs ? "Servicios relacionados con TV" : "Related TV services"}
        </h2>

        <p className="mt-4 max-w-3xl text-neutral-700">
          {isEs
            ? "Estas páginas internas ayudan a reforzar el SEO local y conectan el servicio de colgar TV con montaje, soportes, cableado, soundbar y home cinema."
            : "These internal pages strengthen local SEO and connect TV wall mounting with mounting, brackets, cabling, soundbars and home cinema."}
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
                  ? "¿Qué incluye el servicio para colgar una TV?"
                  : "What does TV wall mounting include?"}
              </h2>

              <p className="mt-5 text-lg leading-8 text-neutral-700">
                {isEs
                  ? "Antes de colgar una TV revisamos el tipo de pared, peso del televisor, tamaño, soporte, altura ideal, puntos de fijación, distancia a enchufes y cableado. El objetivo es dejar la televisión nivelada, estable y cómoda para ver desde el sofá, cama u oficina."
                  : "Before mounting a TV, we check wall type, TV weight, size, bracket, ideal height, fixing points, socket distance and cabling. The goal is to leave the TV level, stable and comfortable to watch from the sofa, bed or office."}
              </p>

              <p className="mt-5 text-lg leading-8 text-neutral-700">
                {isEs
                  ? "Trabajamos con televisores Samsung, LG, Sony, Philips, TCL, Hisense, Xiaomi y otras marcas. Instalamos Smart TV pequeñas, medianas y grandes en salones, dormitorios, apartamentos Airbnb, oficinas, locales y habitaciones en Valencia."
                  : "We work with Samsung, LG, Sony, Philips, TCL, Hisense, Xiaomi and other TV brands. We install small, medium and large Smart TVs in living rooms, bedrooms, Airbnb apartments, offices, commercial spaces and rooms in Valencia."}
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  isEs ? "TV Smart" : "Smart TV",
                  isEs ? "Soporte fijo" : "Fixed bracket",
                  isEs ? "Soporte articulado" : "Full motion bracket",
                  isEs ? "Pared de ladrillo o pladur" : "Brick or drywall wall",
                  isEs ? "Soundbar" : "Soundbar",
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
                  ? "El precio final depende del tamaño de TV, peso, tipo de soporte, pared, altura, cableado, soundbar, dificultad y tiempo necesario."
                  : "Final price depends on TV size, weight, bracket type, wall, height, cabling, soundbar, difficulty and time required."}
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
                ? "Muestra TV, pared y soporte."
                : "Show TV, wall and bracket.",
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
                  ? "Colgar una TV parece fácil, pero una mala instalación puede dejar la televisión torcida, inestable o con cables desordenados. Cuidamos la fijación, nivelación, altura, soporte y acabado visual."
                  : "Mounting a TV can look simple, but poor installation can leave the TV crooked, unstable or with messy cables. We take care of fixing, leveling, height, bracket and visual finish."}
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
              ? "¿Necesitas colgar una TV en Valencia?"
              : "Need TV wall mounting in Valencia?"}
          </h2>

          <p className="mt-4 max-w-3xl text-lg font-medium">
            {isEs
              ? "Envía fotos de la TV, pared, soporte y zona de instalación por WhatsApp. Te diremos qué se puede hacer, cuánto puede costar y cuándo podemos ir."
              : "Send photos of the TV, wall, bracket and installation area by WhatsApp. We will tell you what can be done, how much it may cost and when we can come."}
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