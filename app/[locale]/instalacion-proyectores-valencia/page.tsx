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
    ? "Instalación de Proyectores en Valencia | Techo, Pared y Home Cinema | THEVULGO"
    : "Projector Installation in Valencia | Ceiling, Wall & Home Cinema | THEVULGO";

  const description = isEs
    ? "Instalación de proyectores en Valencia. Montaje en techo o pared, soporte, pantalla, cableado limpio, ajuste de imagen y home cinema. Presupuesto por WhatsApp."
    : "Projector installation in Valencia. Ceiling or wall mounting, bracket, screen, clean cabling, image adjustment and home cinema. Estimate by WhatsApp.";

  return {
    title,
    description,
    keywords: isEs
      ? [
          "instalacion proyectores valencia",
          "instalación de proyectores valencia",
          "instalar proyector valencia",
          "instalar proyector techo valencia",
          "montaje proyector valencia",
          "montaje de proyectores valencia",
          "instalador proyector valencia",
          "proyector techo valencia",
          "soporte proyector valencia",
          "home cinema valencia",
          "instalacion home cinema valencia",
        ]
      : [
          "projector installation valencia",
          "install projector valencia",
          "ceiling projector installation valencia",
          "projector mounting valencia",
          "projector installer valencia",
          "projector bracket valencia",
          "home cinema valencia",
          "home theater installation valencia",
        ],
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `${baseUrl}/${locale}/instalacion-proyectores-valencia`,
      languages: {
        es: `${baseUrl}/es/instalacion-proyectores-valencia`,
        en: `${baseUrl}/en/instalacion-proyectores-valencia`,
        "x-default": `${baseUrl}/es/instalacion-proyectores-valencia`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${baseUrl}/${locale}/instalacion-proyectores-valencia`,
      siteName: "THEVULGO",
      locale: isEs ? "es_ES" : "en_GB",
      type: "website",
    },
  };
}

export default async function InstalacionProyectoresValenciaPage({
  params,
}: Props) {
  const { locale } = await params;
  const isEs = locale === "es";

  const estimateHref = `/${locale}/estimate?category=tv`;

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, necesito instalación de proyector en Valencia. Quiero pedir presupuesto y puedo enviar fotos del techo, pared, proyector y soporte."
      : "Hi, I need projector installation in Valencia. I’d like to request an estimate and can send photos of the ceiling, wall, projector and bracket."
  );

  const whatsappHref = `https://wa.me/${phone}?text=${whatsappText}`;

  const moneyLinks = [
    {
      title: isEs ? "Montaje de proyector" : "Projector mounting",
      desc: isEs
        ? "Montaje de proyector en techo o pared con soporte seguro."
        : "Ceiling or wall projector mounting with a secure bracket.",
      href: `/${locale}/montaje-proyector-valencia`,
    },
    {
      title: isEs ? "Instalar proyector en techo" : "Ceiling projector installation",
      desc: isEs
        ? "Instalación en techo, alineación, altura y ajuste de imagen."
        : "Ceiling installation, alignment, height and image adjustment.",
      href: `/${locale}/instalar-proyector-techo-valencia`,
    },
    {
      title: isEs ? "Home cinema" : "Home cinema",
      desc: isEs
        ? "Instalación de proyector, pantalla, sonido y cables limpios."
        : "Projector, screen, sound and clean cable setup.",
      href: `/${locale}/home-cinema-valencia`,
    },
    {
      title: isEs ? "Montaje de TV" : "TV mounting",
      desc: isEs
        ? "TV en pared, soportes, soundbar y cableado ordenado."
        : "Wall-mounted TVs, brackets, soundbars and tidy cabling.",
      href: `/${locale}/montaje-tv-valencia`,
    },
    {
      title: isEs ? "Instalación de soporte TV" : "TV bracket installation",
      desc: isEs
        ? "Soportes fijos, inclinables o articulados para TV."
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
        ["Instalación básica de proyector", "desde 59 €"],
        ["Montaje en techo con soporte", "desde 79 €"],
        ["Montaje en pared con soporte", "desde 69 €"],
        ["Instalación de pantalla", "desde 49 €"],
        ["Ajuste de imagen / alineación", "desde 39 €"],
        ["Visita / revisión", "desde 49 €"],
      ]
    : [
        ["Basic projector installation", "from €59"],
        ["Ceiling mount with bracket", "from €79"],
        ["Wall mount with bracket", "from €69"],
        ["Screen installation", "from €49"],
        ["Image adjustment / alignment", "from €39"],
        ["Visit / inspection", "from €49"],
      ];

  const faqs = isEs
    ? [
        {
          q: "¿Cuánto cuesta instalar un proyector en Valencia?",
          a: "Depende del tipo de instalación, techo o pared, soporte, altura, cableado, distancia de proyección, pantalla y ajuste necesario. Una instalación básica suele empezar desde 59–79 €.",
        },
        {
          q: "¿Instaláis proyectores en techo?",
          a: "Sí. Podemos instalar proyectores en techo, revisar el tipo de superficie, fijar el soporte, orientar el proyector y ajustar la imagen para que quede centrada.",
        },
        {
          q: "¿Puedo instalar un proyector en pared de pladur?",
          a: "Sí, pero hay que revisar peso, soporte, puntos de fijación y tipo de pared. En algunos casos se necesitan tacos específicos o refuerzos para una instalación segura.",
        },
        {
          q: "¿También instaláis pantallas de proyector?",
          a: "Sí. Podemos instalar pantallas manuales, fijas o enrollables, revisar medidas, altura, alineación y tipo de pared o techo.",
        },
        {
          q: "¿Podéis ocultar cables?",
          a: "Podemos ayudar con cableado más limpio, canaletas, organización de cables y soluciones visibles ordenadas. El ocultamiento completo depende de la pared, techo e instalación existente.",
        },
        {
          q: "¿Puedo enviar fotos por WhatsApp?",
          a: "Sí. Envía fotos del proyector, soporte, techo, pared, distancia hasta la pantalla y ubicación. Así podemos darte una estimación más clara.",
        },
      ]
    : [
        {
          q: "How much does projector installation in Valencia cost?",
          a: "It depends on installation type, ceiling or wall, bracket, height, cabling, projection distance, screen and required adjustment. A basic installation usually starts from €59–79.",
        },
        {
          q: "Do you install projectors on ceilings?",
          a: "Yes. We can install ceiling projectors, check the surface type, fix the bracket, orient the projector and adjust the image so it is centered.",
        },
        {
          q: "Can a projector be installed on drywall?",
          a: "Yes, but weight, bracket, fixing points and wall type must be checked. In some cases, specific anchors or reinforcement are needed for safe installation.",
        },
        {
          q: "Do you also install projector screens?",
          a: "Yes. We can install manual, fixed or roll-up screens, checking measurements, height, alignment and wall or ceiling type.",
        },
        {
          q: "Can you hide cables?",
          a: "We can help with cleaner cabling, cable channels, cable organization and tidy visible solutions. Full concealment depends on the wall, ceiling and existing installation.",
        },
        {
          q: "Can I send photos by WhatsApp?",
          a: "Yes. Send photos of the projector, bracket, ceiling, wall, distance to the screen and location. This helps us give a clearer estimate.",
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
        "@id": `${baseUrl}/${locale}/instalacion-proyectores-valencia#service`,
        name: isEs
          ? "Instalación de proyectores en Valencia"
          : "Projector installation in Valencia",
        serviceType: isEs
          ? "Instalación de proyectores"
          : "Projector installation",
        provider: {
          "@id": `${baseUrl}/#localbusiness`,
        },
        areaServed: areas,
        url: `${baseUrl}/${locale}/instalacion-proyectores-valencia`,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: isEs
            ? "Servicios de instalación de proyectores en Valencia"
            : "Projector installation services in Valencia",
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
              ? "Instalación de proyectores Valencia"
              : "Projector installation Valencia",
            item: `${baseUrl}/${locale}/instalacion-proyectores-valencia`,
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
                ? "Instalación de proyectores en Valencia para techo, pared y home cinema"
                : "Projector installation in Valencia for ceiling, wall and home cinema"}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-700">
              {isEs
                ? "THEVULGO realiza instalación de proyectores en Valencia: montaje en techo o pared, soporte seguro, pantalla, ajuste de imagen, alineación, cableado más limpio y preparación para home cinema. Envía fotos por WhatsApp y recibe una estimación clara."
                : "THEVULGO handles projector installation in Valencia: ceiling or wall mounting, secure bracket, screen, image adjustment, alignment, cleaner cabling and home cinema setup. Send photos by WhatsApp and get a clear estimate."}
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
                    ? "Envía fotos, medidas y modelo del proyector."
                    : "Send photos, measurements and projector model.",
                },
                {
                  icon: ShieldCheck,
                  title: isEs ? "Soporte seguro" : "Secure bracket",
                  text: isEs
                    ? "Revisamos techo, pared, peso y fijación."
                    : "We check ceiling, wall, weight and fixing.",
                },
                {
                  icon: BadgeCheck,
                  title: isEs ? "Imagen ajustada" : "Adjusted image",
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
            ? "Servicios relacionados con proyectores"
            : "Related projector services"}
        </h2>

        <p className="mt-4 max-w-3xl text-neutral-700">
          {isEs
            ? "Estas páginas internas ayudan a reforzar el SEO local y conectan la instalación de proyectores con servicios de TV, home cinema, soportes y montaje."
            : "These internal pages strengthen local SEO and connect projector installation with TV, home cinema, bracket and mounting services."}
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
                  ? "¿Qué incluye la instalación de un proyector?"
                  : "What does projector installation include?"}
              </h2>

              <p className="mt-5 text-lg leading-8 text-neutral-700">
                {isEs
                  ? "La instalación de un proyector requiere revisar distancia de proyección, altura, tipo de techo o pared, soporte, peso, pantalla, orientación y cableado. No se trata solo de colgar el proyector: el objetivo es que la imagen quede centrada, estable y cómoda para usar."
                  : "Projector installation requires checking projection distance, height, ceiling or wall type, bracket, weight, screen, orientation and cabling. It is not just about hanging the projector: the goal is to keep the image centered, stable and comfortable to use."}
              </p>

              <p className="mt-5 text-lg leading-8 text-neutral-700">
                {isEs
                  ? "Trabajamos con proyectores para salones, dormitorios, oficinas, aulas, locales, apartamentos Airbnb y pequeños espacios de home cinema en Valencia. También podemos valorar la instalación de pantalla, soporte, canaletas y ajustes básicos de imagen."
                  : "We work with projectors for living rooms, bedrooms, offices, classrooms, commercial spaces, Airbnb apartments and small home cinema areas in Valencia. We can also assess screen installation, brackets, cable channels and basic image adjustments."}
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  isEs ? "Montaje en techo" : "Ceiling mounting",
                  isEs ? "Montaje en pared" : "Wall mounting",
                  isEs ? "Soporte de proyector" : "Projector bracket",
                  isEs ? "Pantalla de proyector" : "Projector screen",
                  isEs ? "Ajuste de imagen" : "Image adjustment",
                  isEs ? "Cableado limpio" : "Clean cabling",
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
                  ? "El precio final depende del soporte, altura, tipo de techo o pared, distancia, cableado, pantalla, dificultad y tiempo necesario."
                  : "Final price depends on bracket, height, ceiling or wall type, distance, cabling, screen, difficulty and time required."}
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
                ? "Muestra proyector, soporte, techo y pared."
                : "Show projector, bracket, ceiling and wall.",
            ],
            [
              isEs ? "2. Medidas" : "2. Measurements",
              isEs
                ? "Indica distancia, altura y pantalla."
                : "Share distance, height and screen details.",
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
                ? "Montamos soporte, proyector y pantalla."
                : "We mount bracket, projector and screen.",
            ],
            [
              isEs ? "5. Ajuste final" : "5. Final adjustment",
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
                  ? "Un proyector mal instalado puede quedar torcido, vibrar, proyectar fuera de la pantalla o tener cables desordenados. Cuidamos la fijación, la alineación, el acabado y la comodidad de uso."
                  : "A poorly installed projector can be crooked, vibrate, project outside the screen or leave messy cables. We take care of fixing, alignment, finish and ease of use."}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                [Hammer, isEs ? "Montaje práctico" : "Practical mounting"],
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
              ? "¿Necesitas instalación de proyector en Valencia?"
              : "Need projector installation in Valencia?"}
          </h2>

          <p className="mt-4 max-w-3xl text-lg font-medium">
            {isEs
              ? "Envía fotos del proyector, soporte, techo, pared y pantalla por WhatsApp. Te diremos qué se puede hacer, cuánto puede costar y cuándo podemos ir."
              : "Send photos of the projector, bracket, ceiling, wall and screen by WhatsApp. We will tell you what can be done, how much it may cost and when we can come."}
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