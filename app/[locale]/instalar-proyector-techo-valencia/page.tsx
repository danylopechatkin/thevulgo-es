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
    ? "Instalar Proyector en Techo en Valencia | Soporte y Ajuste | THEVULGO"
    : "Ceiling Projector Installation in Valencia | Bracket & Setup | THEVULGO";

  const description = isEs
    ? "Instalar proyector en techo en Valencia. Montaje con soporte, fijación segura, alineación, distancia de proyección, pantalla y cableado limpio. Presupuesto por WhatsApp."
    : "Ceiling projector installation in Valencia. Bracket mounting, secure fixing, alignment, projection distance, screen and clean cabling. Estimate by WhatsApp.";

  return {
    title,
    description,
    keywords: isEs
      ? [
          "instalar proyector techo valencia",
          "instalar proyector en techo valencia",
          "instalacion proyector techo valencia",
          "montaje proyector techo valencia",
          "soporte proyector techo valencia",
          "instalacion proyectores valencia",
          "montaje proyector valencia",
          "proyector techo valencia",
          "instalador proyector valencia",
          "home cinema valencia",
        ]
      : [
          "ceiling projector installation valencia",
          "install projector on ceiling valencia",
          "projector ceiling mount valencia",
          "projector bracket installation valencia",
          "projector installer valencia",
          "projector installation valencia",
          "home cinema valencia",
        ],
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `${baseUrl}/${locale}/instalar-proyector-techo-valencia`,
      languages: {
        es: `${baseUrl}/es/instalar-proyector-techo-valencia`,
        en: `${baseUrl}/en/instalar-proyector-techo-valencia`,
        "x-default": `${baseUrl}/es/instalar-proyector-techo-valencia`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${baseUrl}/${locale}/instalar-proyector-techo-valencia`,
      siteName: "THEVULGO",
      locale: isEs ? "es_ES" : "en_GB",
      type: "website",
    },
  };
}

export default async function InstalarProyectorTechoValenciaPage({
  params,
}: Props) {
  const { locale } = await params;
  const isEs = locale === "es";

  const estimateHref = `/${locale}/estimate?category=tv`;

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, necesito instalar un proyector en techo en Valencia. Quiero pedir presupuesto y puedo enviar fotos del techo, soporte, proyector y pantalla."
      : "Hi, I need to install a projector on the ceiling in Valencia. I’d like to request an estimate and can send photos of the ceiling, bracket, projector and screen."
  );

  const whatsappHref = `https://wa.me/${phone}?text=${whatsappText}`;

  const moneyLinks = [
    {
      title: isEs ? "Instalación de proyectores" : "Projector installation",
      desc: isEs
        ? "Instalación de proyectores en techo, pared, pantalla y ajustes."
        : "Projector installation on ceiling, wall, screen and adjustments.",
      href: `/${locale}/instalacion-proyectores-valencia`,
    },
    {
      title: isEs ? "Montaje de proyector" : "Projector mounting",
      desc: isEs
        ? "Montaje con soporte seguro, alineación y ajuste de imagen."
        : "Mounting with secure bracket, alignment and image adjustment.",
      href: `/${locale}/montaje-proyector-valencia`,
    },
    {
      title: isEs ? "Home cinema" : "Home cinema",
      desc: isEs
        ? "Proyector, pantalla, sonido, soporte y cables ordenados."
        : "Projector, screen, sound, bracket and tidy cables.",
      href: `/${locale}/home-cinema-valencia`,
    },
    {
      title: isEs ? "Montaje de TV" : "TV mounting",
      desc: isEs
        ? "TV en pared, soporte, soundbar y cableado limpio."
        : "Wall-mounted TV, bracket, soundbar and clean cabling.",
      href: `/${locale}/montaje-tv-valencia`,
    },
    {
      title: isEs ? "Instalación de soporte TV" : "TV bracket installation",
      desc: isEs
        ? "Soportes fijos, inclinables o articulados para televisión."
        : "Fixed, tilting or articulated TV brackets.",
      href: `/${locale}/instalacion-soporte-tv-valencia`,
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
        ["Instalar proyector en techo", "desde 79 €"],
        ["Montaje de soporte de proyector", "desde 59 €"],
        ["Instalación de pantalla", "desde 49 €"],
        ["Ajuste de imagen y alineación", "desde 39 €"],
        ["Canaleta / cableado visible limpio", "según trabajo"],
        ["Visita / revisión", "desde 49 €"],
      ]
    : [
        ["Ceiling projector installation", "from €79"],
        ["Projector bracket mounting", "from €59"],
        ["Screen installation", "from €49"],
        ["Image adjustment and alignment", "from €39"],
        ["Cable channel / tidy visible cabling", "by job"],
        ["Visit / inspection", "from €49"],
      ];

  const faqs = isEs
    ? [
        {
          q: "¿Cuánto cuesta instalar un proyector en techo en Valencia?",
          a: "Depende del tipo de techo, altura, soporte, peso del proyector, distancia a la pantalla, cableado y ajuste necesario. Una instalación en techo suele empezar desde 79 €.",
        },
        {
          q: "¿Qué necesitáis para instalar el proyector en techo?",
          a: "Lo ideal es enviar fotos del techo, soporte, proyector, pantalla o pared donde se proyectará, distancia aproximada y altura. Así podemos valorar fijación, posición y materiales.",
        },
        {
          q: "¿Se puede instalar un proyector en techo de pladur?",
          a: "Sí, pero hay que revisar el peso, tipo de soporte, estructura del techo y puntos de fijación. En algunos casos hacen falta tacos específicos, refuerzos o una solución adaptada.",
        },
        {
          q: "¿También instaláis la pantalla del proyector?",
          a: "Sí. Podemos instalar pantallas manuales, fijas o enrollables, revisar medidas, altura, alineación y tipo de pared o techo.",
        },
        {
          q: "¿Podéis dejar los cables más limpios?",
          a: "Sí. Podemos organizar cables, instalar canaletas y buscar una solución visual ordenada. Ocultar cables completamente depende del techo, pared e instalación existente.",
        },
        {
          q: "¿Ajustáis la imagen después del montaje?",
          a: "Sí. Revisamos orientación, altura, enfoque, tamaño de imagen y alineación básica para que el proyector quede cómodo para usar.",
        },
      ]
    : [
        {
          q: "How much does ceiling projector installation in Valencia cost?",
          a: "It depends on ceiling type, height, bracket, projector weight, distance to the screen, cabling and required adjustment. Ceiling installation usually starts from €79.",
        },
        {
          q: "What do you need to install the projector on the ceiling?",
          a: "Ideally send photos of the ceiling, bracket, projector, screen or projection wall, approximate distance and height. This helps us assess fixing, position and materials.",
        },
        {
          q: "Can a projector be installed on a drywall ceiling?",
          a: "Yes, but weight, bracket type, ceiling structure and fixing points must be checked. In some cases, specific anchors, reinforcement or an adapted solution are needed.",
        },
        {
          q: "Do you also install the projector screen?",
          a: "Yes. We can install manual, fixed or roll-up screens, checking measurements, height, alignment and wall or ceiling type.",
        },
        {
          q: "Can you make the cables look cleaner?",
          a: "Yes. We can organize cables, install cable channels and find a tidy visible solution. Full cable concealment depends on the ceiling, wall and existing installation.",
        },
        {
          q: "Do you adjust the image after mounting?",
          a: "Yes. We check orientation, height, focus, image size and basic alignment so the projector is comfortable to use.",
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
        "@id": `${baseUrl}/${locale}/instalar-proyector-techo-valencia#service`,
        name: isEs
          ? "Instalar proyector en techo en Valencia"
          : "Ceiling projector installation in Valencia",
        serviceType: isEs
          ? "Instalación de proyector en techo"
          : "Ceiling projector installation",
        provider: {
          "@id": `${baseUrl}/#localbusiness`,
        },
        areaServed: areas,
        url: `${baseUrl}/${locale}/instalar-proyector-techo-valencia`,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: isEs
            ? "Servicios de instalación de proyector en techo en Valencia"
            : "Ceiling projector installation services in Valencia",
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
              ? "Instalar proyector en techo Valencia"
              : "Ceiling projector installation Valencia",
            item: `${baseUrl}/${locale}/instalar-proyector-techo-valencia`,
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
                ? "Instalar proyector en techo en Valencia con soporte seguro y ajuste de imagen"
                : "Ceiling projector installation in Valencia with secure bracket and image setup"}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-700">
              {isEs
                ? "THEVULGO instala proyectores en techo en Valencia: soporte, fijación segura, alineación, distancia de proyección, pantalla, cableado visible limpio y ajuste básico de imagen. Envía fotos por WhatsApp y recibe una estimación clara."
                : "THEVULGO installs ceiling projectors in Valencia: bracket, secure fixing, alignment, projection distance, screen, tidy visible cabling and basic image adjustment. Send photos by WhatsApp and get a clear estimate."}
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
                    ? "Envía fotos del techo, soporte y proyector."
                    : "Send photos of ceiling, bracket and projector.",
                },
                {
                  icon: ShieldCheck,
                  title: isEs ? "Fijación segura" : "Safe fixing",
                  text: isEs
                    ? "Revisamos techo, peso, tacos y soporte."
                    : "We check ceiling, weight, anchors and bracket.",
                },
                {
                  icon: BadgeCheck,
                  title: isEs ? "Imagen centrada" : "Centered image",
                  text: isEs
                    ? "Alineación, altura y enfoque revisados."
                    : "Alignment, height and focus checked.",
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
            ? "Servicios relacionados con proyector y home cinema"
            : "Related projector and home cinema services"}
        </h2>

        <p className="mt-4 max-w-3xl text-neutral-700">
          {isEs
            ? "Estas páginas internas refuerzan el SEO local y conectan la instalación de proyector en techo con otros servicios de montaje, soporte, TV y home cinema."
            : "These internal pages strengthen local SEO and connect ceiling projector installation with other mounting, bracket, TV and home cinema services."}
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
                  ? "¿Qué revisamos antes de instalar un proyector en techo?"
                  : "What do we check before installing a projector on the ceiling?"}
              </h2>

              <p className="mt-5 text-lg leading-8 text-neutral-700">
                {isEs
                  ? "Antes de instalar un proyector en techo revisamos el tipo de techo, altura, peso del proyector, soporte, distancia de proyección, posición de la pantalla y recorrido de cables. Esto ayuda a evitar una imagen torcida, vibraciones o una fijación insegura."
                  : "Before installing a projector on the ceiling, we check the ceiling type, height, projector weight, bracket, projection distance, screen position and cable path. This helps avoid a crooked image, vibration or unsafe fixing."}
              </p>

              <p className="mt-5 text-lg leading-8 text-neutral-700">
                {isEs
                  ? "Trabajamos en salones, dormitorios, oficinas, aulas, locales, apartamentos Airbnb y espacios de home cinema en Valencia. También podemos valorar pantalla, canaletas, soporte, orientación y ajuste básico de imagen."
                  : "We work in living rooms, bedrooms, offices, classrooms, commercial spaces, Airbnb apartments and home cinema areas in Valencia. We can also assess screen, cable channels, bracket, orientation and basic image setup."}
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  isEs ? "Tipo de techo" : "Ceiling type",
                  isEs ? "Peso del proyector" : "Projector weight",
                  isEs ? "Soporte compatible" : "Compatible bracket",
                  isEs ? "Distancia de proyección" : "Projection distance",
                  isEs ? "Alineación con pantalla" : "Screen alignment",
                  isEs ? "Cableado ordenado" : "Tidy cabling",
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
                  ? "El precio final depende de altura, soporte, tipo de techo, peso, pantalla, cableado, dificultad y tiempo necesario."
                  : "Final price depends on height, bracket, ceiling type, weight, screen, cabling, difficulty and time required."}
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
                ? "Muestra techo, proyector, soporte y pantalla."
                : "Show ceiling, projector, bracket and screen.",
            ],
            [
              isEs ? "2. Medidas" : "2. Measurements",
              isEs
                ? "Indica altura y distancia de proyección."
                : "Share height and projection distance.",
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
                ? "Fijamos soporte y montamos proyector."
                : "We fix the bracket and mount the projector.",
            ],
            [
              isEs ? "5. Ajuste final" : "5. Final setup",
              isEs
                ? "Comprobamos imagen, enfoque y estabilidad."
                : "We check image, focus and stability.",
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
                  ? "Instalar un proyector en techo exige precisión. Si el soporte queda mal colocado, la imagen puede quedar descentrada, el proyector puede vibrar o los cables pueden quedar desordenados. Cuidamos la fijación, la alineación y el acabado."
                  : "Installing a projector on the ceiling requires precision. If the bracket is placed incorrectly, the image can be off-center, the projector can vibrate or cables can look messy. We take care of fixing, alignment and finish."}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                [Hammer, isEs ? "Montaje preciso" : "Precise mounting"],
                [Home, isEs ? "Casa y oficinas" : "Homes and offices"],
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
              ? "¿Necesitas instalar un proyector en techo en Valencia?"
              : "Need to install a projector on the ceiling in Valencia?"}
          </h2>

          <p className="mt-4 max-w-3xl text-lg font-medium">
            {isEs
              ? "Envía fotos del techo, proyector, soporte y pantalla por WhatsApp. Te diremos qué se puede hacer, cuánto puede costar y cuándo podemos ir."
              : "Send photos of the ceiling, projector, bracket and screen by WhatsApp. We will tell you what can be done, how much it may cost and when we can come."}
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