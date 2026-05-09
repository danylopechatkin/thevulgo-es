"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import {
  ArrowRight,
  Zap,
  Lightbulb,
  Power,
  Plug,
  ShieldCheck,
  Clock3,
  CheckCircle2,
  BadgeCheck,
  LampCeiling,
  Wrench,
  BadgePlus,
  CircleOff,
} from "lucide-react";

export default function ElectricalPage() {
  const router = useRouter();
  const locale = useLocale();
  const isEs = locale === "es";

  const estimateHref = `/${locale}/estimate?category=electrical`;

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, me gustaría pedir presupuesto para servicios eléctricos en Valencia."
      : "Hi! I’d like an estimate for electrical services in Valencia."
  );

  const whatsappHref = `https://wa.me/14379074913?text=${whatsappText}`;

  const copy = {
    badge: "THEVULGO • Valencia",

    heroTitle: isEs ? "Servicios eléctricos" : "Electrical Services",
    heroSubtitle: isEs
      ? "Servicios eléctricos básicos en Valencia para luces, interruptores, enchufes, accesorios simples, sustituciones y mejoras limpias para casas y apartamentos."
      : "Basic electrical services in Valencia for lights, switches, sockets, simple fixtures, replacements and clean improvement jobs for homes and apartments.",

    ctaTitle: isEs ? "¿Necesitas un presupuesto exacto?" : "Need an exact estimate?",
    ctaText: isEs
      ? "Recibe un presupuesto rápido para luces, interruptores, enchufes, accesorios eléctricos simples o varios trabajos pequeños en una sola visita."
      : "Get a fast estimate for lights, switches, sockets, simple electrical fixtures or multiple small jobs in one visit.",
    estimateButton: isEs ? "Pedir presupuesto" : "Get estimate",

    seoBadge: isEs
      ? "Electricidad básica • Valencia"
      : "Basic electrical work • Valencia",
    seoTitle: isEs
      ? "Servicios eléctricos básicos en Valencia"
      : "Basic Electrical Services in Valencia",
    includedTitle: isEs ? "Qué está incluido" : "What is included",

    whyBadge: isEs
      ? "Por qué los clientes eligen este servicio"
      : "Why clients choose this service",
    whyTitle: isEs
      ? "Trabajos eléctricos simples, hechos de forma limpia y clara"
      : "Simple electrical jobs done cleanly and clearly",
    whyText: isEs
      ? "Este servicio está pensado para personas que necesitan ayuda eléctrica práctica sin complicaciones innecesarias: cambio de lámparas, interruptores, enchufes, pequeñas tareas de iluminación y acabado limpio en casas y apartamentos."
      : "This service is designed for people who need practical electrical help without unnecessary complexity: fixture replacement, switches, sockets, small lighting tasks and tidy finishing in homes and apartments.",

    faqTitle: isEs ? "Preguntas frecuentes sobre servicios eléctricos" : "Electrical Services FAQ",

    finalCtaTitle: isEs
      ? "¿Listo para reservar tu trabajo eléctrico?"
      : "Ready to book your electrical job?",
    finalCtaText: isEs
      ? "Envía tu solicitud ahora y recibe un presupuesto claro para luces, interruptores, enchufes, accesorios simples o varios trabajos eléctricos pequeños en Valencia."
      : "Send your request now and get a clear estimate for lights, switches, sockets, simple fixtures or multiple small electrical jobs in Valencia.",

    finalNote: isEs
      ? "El precio final depende del tipo de accesorio, cantidad, acceso y complejidad del trabajo."
      : "Final price depends on fixture type, quantity, access and job complexity.",
  };

  const trustPoints = [
    {
      title: isEs ? "Respuesta rápida" : "Fast response",
      text: isEs
        ? "Comunicación rápida y próximos pasos claros antes de la cita."
        : "Quick communication and clear next steps before the appointment.",
      icon: <Clock3 className="h-5 w-5" />,
    },
    {
      title: isEs ? "Trabajo limpio" : "Clean work",
      text: isEs
        ? "Instalación ordenada, montaje limpio y acabado final cuidado."
        : "Neat installation, tidy mounting and a clean final finish.",
      icon: <CheckCircle2 className="h-5 w-5" />,
    },
    {
      title: isEs ? "Precio transparente" : "Transparent pricing",
      text: isEs
        ? "Precios iniciales claros y lógica de presupuesto antes de empezar."
        : "Clear starting prices and estimate logic before work begins.",
      icon: <ShieldCheck className="h-5 w-5" />,
    },
  ];

  const serviceCards = [
    {
      title: isEs ? "Instalación de lámpara" : "Light fixture installation",
      desc: isEs
        ? "Luces de techo, lámparas y sustitución simple de iluminación para casas y apartamentos."
        : "Ceiling lights, lamps and simple lighting replacement for homes and apartments.",
      price: isEs ? "desde €35" : "from €35",
      icon: <Lightbulb className="h-5 w-5" />,
      className: "lg:col-span-2",
    },
    {
      title: isEs ? "Lámparas colgantes" : "Pendant lights",
      desc: isEs
        ? "Instalación de lámparas colgantes con posición cuidada y acabado limpio."
        : "Pendant light installation with careful positioning and clean finish.",
      price: isEs ? "desde €39" : "from €39",
      icon: <LampCeiling className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Apliques de pared" : "Wall lights & sconces",
      desc: isEs
        ? "Instalación limpia y segura de iluminación montada en pared."
        : "Wall-mounted lighting installed neatly and securely.",
      price: isEs ? "desde €35" : "from €35",
      icon: <Lightbulb className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Cambio de interruptor" : "Switch replacement",
      desc: isEs
        ? "Sustitución de interruptores dañados, antiguos o desgastados."
        : "Replacement of damaged or outdated light switches.",
      price: isEs ? "desde €29" : "from €29",
      icon: <Power className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Cambio de enchufe" : "Socket replacement",
      desc: isEs
        ? "Sustitución de enchufes y tapas para una instalación más limpia."
        : "Replacement of wall sockets and faceplates for a cleaner setup.",
      price: isEs ? "desde €29" : "from €29",
      icon: <Plug className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Montaje eléctrico básico" : "Basic electrical mounting",
      desc: isEs
        ? "Montaje y conexión de accesorios eléctricos simples con acabado ordenado."
        : "Mounting and connecting simple electrical fixtures with tidy final setup.",
      price: isEs ? "desde €35" : "from €35",
      icon: <Zap className="h-5 w-5" />,
      className: "lg:col-span-2",
    },
    {
      title: isEs ? "Instalación de tira LED" : "LED strip setup",
      desc: isEs
        ? "Instalación simple de tiras LED para estantes, escritorios o iluminación decorativa."
        : "Simple LED strip installation for shelves, desks or accent lighting.",
      price: isEs ? "desde €29" : "from €29",
      icon: <Lightbulb className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Cambio de extractor" : "Extractor fan replacement",
      desc: isEs
        ? "Sustitución de extractores compatibles de baño o cocina."
        : "Replacement of compatible bathroom or kitchen extractor fans.",
      price: isEs ? "desde €45" : "from €45",
      icon: <Wrench className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Cambio de luz de baño" : "Bathroom light replacement",
      desc: isEs
        ? "Sustitución simple de luces de espejo y accesorios de baño."
        : "Simple replacement of mirror lights and bathroom fixtures.",
      price: isEs ? "desde €35" : "from €35",
      icon: <Lightbulb className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Cambio de lámpara de techo" : "Ceiling lamp replacement",
      desc: isEs
        ? "Retirada de luz antigua e instalación limpia de una nueva lámpara compatible."
        : "Old ceiling light removed and new fixture installed cleanly.",
      price: isEs ? "desde €35" : "from €35",
      icon: <LampCeiling className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Cambio de regulador dimmer" : "Dimmer switch replacement",
      desc: isEs
        ? "Sustitución simple de regulador cuando la instalación existente es compatible."
        : "Simple dimmer replacement where the existing setup is compatible.",
      price: isEs ? "desde €35" : "from €35",
      icon: <BadgePlus className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Organización de regleta / cables" : "Power strip / cable tidy setup",
      desc: isEs
        ? "Ordenado simple de cables visibles y organización de accesorios eléctricos."
        : "Simple visible cable cleanup and power accessory organization.",
      price: isEs ? "desde €29" : "from €29",
      icon: <Plug className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Instalación de luz de espejo" : "Mirror light installation",
      desc: isEs
        ? "Instalación básica de iluminación compatible para espejo o zona de lavabo."
        : "Basic installation of compatible mirror and vanity lighting.",
      price: isEs ? "desde €35" : "from €35",
      icon: <Lightbulb className="h-5 w-5" />,
      className: "lg:col-span-2",
    },
    {
      title: isEs ? "Retirada y cambio de lámpara" : "Light removal & replacement",
      desc: isEs
        ? "Retirada de una lámpara antigua y sustitución por una nueva compatible."
        : "Old fixture taken down and replaced with a new compatible one.",
      price: isEs ? "desde €35" : "from €35",
      icon: <CircleOff className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Cambio de luz de cocina" : "Kitchen light replacement",
      desc: isEs
        ? "Sustitución simple de iluminación en cocinas y zonas de servicio."
        : "Simple lighting replacement in kitchens and utility areas.",
      price: isEs ? "desde €35" : "from €35",
      icon: <Lightbulb className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Varios trabajos eléctricos" : "Multi-item electrical jobs",
      desc: isEs
        ? "Presupuesto combinado para varias tareas eléctricas pequeñas en una sola visita."
        : "Combined estimate for several small electrical tasks in one visit.",
      price: isEs ? "presupuesto personalizado" : "custom quote",
      icon: <Zap className="h-5 w-5" />,
      className: "lg:col-span-2",
    },
  ];

  const whyChoose = isEs
    ? [
        "Adecuado para casas, apartamentos y propiedades en alquiler en Valencia",
        "Montaje limpio y acabado cuidado para accesorios visibles",
        "Sustituciones eléctricas simples realizadas de forma eficiente",
        "Buena opción para propietarios, mudanzas y mejoras de apartamentos",
        "Presupuesto claro antes de reservar con alcance transparente",
        "Varias tareas eléctricas pequeñas pueden combinarse en una sola visita",
      ]
    : [
        "Suitable for homes, apartments and rental properties in Valencia",
        "Clean mounting and neat finishing for visible fixtures",
        "Simple electrical replacement jobs handled efficiently",
        "Good option for landlords, move-ins and apartment refreshes",
        "Clear estimate before booking with transparent scope",
        "Several small electrical tasks can be combined in one visit",
      ];

  const includedItems = isEs
    ? [
        "Cambio e instalación de luces de techo",
        "Instalación de lámparas colgantes y apliques",
        "Cambio de enchufes e interruptores",
        "Instalación de tiras LED e iluminación decorativa",
        "Cambio de extractor",
        "Cambio de luces de baño y espejo",
        "Montaje eléctrico simple y acabado limpio",
        "Varios trabajos eléctricos en una sola visita",
      ]
    : [
        "Ceiling light replacement and installation",
        "Pendant and wall light installation",
        "Socket and switch replacement",
        "LED strip and accent lighting setup",
        "Extractor fan replacement",
        "Bathroom and mirror light replacement",
        "Simple electrical mounting and finishing",
        "Multi-item electrical jobs in one visit",
      ];

  const faqItems = [
    {
      q: isEs ? "¿Haces recableado completo?" : "Do you handle full rewiring?",
      a: isEs
        ? "No. Esta página está enfocada en electricidad básica como cambio de luces, interruptores, enchufes y accesorios simples. El recableado completo o trabajos grandes deben hacerlos electricistas autorizados."
        : "No. This page is focused on basic electrical work such as replacing lights, switches, sockets and simple fixtures. Full rewiring and larger electrical system work should be handled by a licensed electrician.",
    },
    {
      q: isEs
        ? "¿Se pueden hacer varios trabajos eléctricos pequeños en una visita?"
        : "Can several small electrical jobs be done in one visit?",
      a: isEs
        ? "Sí. Si tienes varias luces, interruptores, enchufes o tareas parecidas, se puede preparar un presupuesto combinado según el alcance total."
        : "Yes. If you have several lights, switches, sockets or similar small tasks, a combined quote can be provided based on the total scope.",
    },
    {
      q: isEs
        ? "¿Tengo que comprar yo la lámpara o el interruptor?"
        : "Do I need to buy the new light or switch myself?",
      a: isEs
        ? "Normalmente sí. Si ya tienes el accesorio o pieza de sustitución, se puede instalar. También puedes enviar fotos antes de reservar para confirmar compatibilidad."
        : "Usually yes. If you already have the replacement fixture or fitting, installation can be done. You can also send photos before booking to confirm compatibility.",
    },
    {
      q: isEs
        ? "¿Puedes cambiar enchufes e interruptores antiguos?"
        : "Can you replace old sockets and switches?",
      a: isEs
        ? "Sí. El cambio básico de enchufes e interruptores está incluido cuando la instalación existente permite una sustitución sencilla."
        : "Yes. Basic socket and switch replacement is included when the existing setup is suitable for straightforward replacement.",
    },
    {
      q: isEs ? "¿Instalas tiras LED?" : "Do you install LED strips?",
      a: isEs
        ? "Sí, para instalaciones simples como estantes, escritorios, zonas multimedia o iluminación decorativa cuando las condiciones son adecuadas."
        : "Yes, for simple setups such as shelves, desks, media areas or accent lighting where the installation conditions are straightforward.",
    },
    {
      q: isEs
        ? "¿Puedes cambiar luces de baño o luces de espejo?"
        : "Can you replace bathroom lights or mirror lights?",
      a: isEs
        ? "Sí. La sustitución simple de luces compatibles de baño, espejo o zona de lavabo puede incluirse en esta categoría."
        : "Yes. Simple replacement of compatible bathroom lights, vanity lights and mirror lights can be included in this service category.",
    },
    {
      q: isEs
        ? "¿En qué tipo de propiedades trabajas?"
        : "What kind of properties do you work in?",
      a: isEs
        ? "Estos servicios sirven para apartamentos, casas, propiedades en alquiler, oficinas y otros espacios que necesitan pequeñas sustituciones eléctricas y montajes."
        : "These services are suitable for apartments, homes, rental properties, offices and other spaces that need small electrical replacement and mounting tasks.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black font-sans">
      <section className="relative py-16 sm:py-20 px-4">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-white" />
          <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-yellow-200/35 blur-3xl" />
          <div className="absolute right-10 top-24 h-[320px] w-[320px] rounded-full bg-yellow-100/60 blur-3xl" />
        </div>

        <div className="w-full max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-white px-3 py-1 text-xs font-semibold text-black shadow-sm">
              <span className="h-2 w-2 rounded-full bg-yellow-400" />
              {copy.badge}
            </div>

            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-black">
              {copy.heroTitle}
            </h1>

            <p className="mt-4 max-w-3xl mx-auto text-gray-600 text-base sm:text-lg leading-8">
              {copy.heroSubtitle}
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {trustPoints.map((point) => (
              <div
                key={point.title}
                className="rounded-2xl border border-yellow-400 bg-white p-6 shadow-md transition-all duration-200 hover:shadow-xl hover:scale-[1.02]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-400 text-black shadow-md">
                  {point.icon}
                </div>
                <h3 className="mt-4 text-lg font-extrabold text-black">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600 leading-7">
                  {point.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr">
              {serviceCards.map((item) => (
                <div
                  key={item.title}
                  className={`rounded-2xl border border-yellow-400 bg-white p-7 text-left shadow-lg transition-all duration-200 hover:shadow-2xl hover:scale-[1.02] min-h-[210px] ${item.className}`}
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-400 text-black shadow-md">
                    {item.icon}
                  </div>

                  <h2 className="mt-4 text-xl font-extrabold text-black">
                    {item.title}
                  </h2>

                  <p className="mt-2 text-sm leading-7 text-gray-700">
                    {item.desc}
                  </p>

                  <div className="mt-4 text-sm font-extrabold text-yellow-500">
                    {item.price}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 rounded-3xl border border-yellow-400 bg-white p-6 sm:p-8 shadow-xl">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div className="max-w-2xl">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-black">
                  {copy.ctaTitle}
                </h2>

                <p className="mt-3 text-gray-600 leading-8">
                  {copy.ctaText}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => router.push(estimateHref)}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-yellow-400 px-6 py-3 text-sm font-extrabold text-black shadow-lg hover:scale-[1.02] transition"
                >
                  {copy.estimateButton} <ArrowRight className="h-4 w-4" />
                </button>

                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-black shadow-md hover:scale-[1.02] transition"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          <section className="mt-16">
            <div className="w-full rounded-3xl border border-yellow-400 bg-white p-8 sm:p-10 lg:p-12 shadow-xl">
              <div className="max-w-5xl mx-auto">
                <div className="flex justify-center mb-4">
                  <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-yellow-50 px-4 py-1 text-xs font-semibold text-black">
                    <span className="h-2 w-2 rounded-full bg-yellow-400" />
                    {copy.seoBadge}
                  </div>
                </div>

                <h2 className="text-center text-2xl sm:text-3xl font-extrabold text-black">
                  {copy.seoTitle}
                </h2>

                <div className="mt-6 space-y-5 text-gray-700 leading-8 text-[15px] sm:text-base text-center sm:text-left">
                  {isEs ? (
                    <>
                      <p>
                        Servicios profesionales de{" "}
                        <strong>electricidad básica en Valencia</strong> para
                        apartamentos, casas y propiedades en alquiler. THEVULGO
                        realiza tareas comunes de sustitución y montaje eléctrico
                        como luces, enchufes, interruptores y accesorios compatibles.
                      </p>

                      <p>
                        Muchos trabajos eléctricos pequeños parecen simples, pero
                        pueden ser incómodos, lentos o quedar mal si no se hacen
                        con las herramientas y el cuidado adecuados. Una instalación
                        limpia y un acabado ordenado marcan una gran diferencia.
                      </p>

                      <p>
                        Esta página está pensada para clientes que necesitan ayuda
                        eléctrica práctica sin recableado completo. Incluye cambios
                        de iluminación, sustitución de accesorios simples, enchufes,
                        interruptores, luces de espejo, extractores y trabajos
                        similares.
                      </p>
                    </>
                  ) : (
                    <>
                      <p>
                        Professional{" "}
                        <strong>basic electrical services in Valencia</strong> for
                        apartments, homes and rental properties. THEVULGO handles
                        common electrical replacement and mounting tasks such as lights,
                        sockets, switches and compatible fixtures.
                      </p>

                      <p>
                        Many small electrical jobs are simple in theory but messy,
                        time-consuming or risky when done without the right tools and care.
                        Clean installation, correct fitting and tidy finishing make a big
                        difference in the final result.
                      </p>

                      <p>
                        This page is designed for clients who need practical electrical help
                        without full rewiring. It includes lighting changes, simple fixture
                        replacement, switch and socket updates, mirror light replacement,
                        extractor fan replacement and similar straightforward jobs.
                      </p>
                    </>
                  )}
                </div>

                <div className="mt-8">
                  <h3 className="text-center sm:text-left text-lg font-extrabold text-black mb-4">
                    {copy.includedTitle}
                  </h3>

                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-gray-700 text-[15px] sm:text-base">
                    {includedItems.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-yellow-400 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 space-y-5 text-gray-700 leading-8 text-[15px] sm:text-base">
                  {isEs ? (
                    <>
                      <p>
                        Cada trabajo se realiza con atención al acabado, la posición
                        correcta y el aspecto final. En los trabajos eléctricos visibles,
                        el resultado no solo debe funcionar bien, también debe verse limpio.
                      </p>

                      <p>
                        THEVULGO trabaja principalmente en{" "}
                        <strong>Valencia y alrededores</strong>, con respuesta rápida
                        y comunicación clara antes de la cita. Es útil para propietarios,
                        mudanzas, mejoras de apartamentos y pequeños proyectos del hogar.
                      </p>

                      <p>
                        Antes de empezar, el cliente recibe un presupuesto transparente
                        basado en la cantidad de accesorios, dificultad y alcance total.
                        Varias tareas simples pueden agruparse en una sola visita.
                      </p>
                    </>
                  ) : (
                    <>
                      <p>
                        Each job is approached with care to ensure a neat finish,
                        correct positioning and clean final appearance. Good results in
                        electrical replacement work are not only about function, but also
                        about how clean and balanced the finished room looks.
                      </p>

                      <p>
                        THEVULGO works mainly in{" "}
                        <strong>Valencia and nearby areas</strong>, providing quick response
                        times and clear communication before the appointment. This makes the
                        service especially useful for landlords, move-ins, apartment refreshes
                        and home improvement projects.
                      </p>

                      <p>
                        Before work begins, clients receive a transparent estimate based on
                        the number of fixtures, complexity and total scope. Several simple
                        jobs can often be grouped into one efficient visit.
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>
          </section>

          <section className="mt-16">
            <div className="rounded-3xl border border-yellow-400 bg-white p-8 sm:p-10 shadow-xl">
              <div className="max-w-5xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-yellow-50 px-3 py-1 text-xs font-semibold text-black">
                  <BadgeCheck className="h-4 w-4" />
                  {copy.whyBadge}
                </div>

                <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-black">
                  {copy.whyTitle}
                </h2>

                <p className="mt-4 max-w-4xl text-gray-600 leading-8">
                  {copy.whyText}
                </p>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5 text-gray-700 text-[15px] sm:text-base">
                  {whyChoose.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-yellow-500 mt-[2px]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => router.push(estimateHref)}
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-yellow-400 px-6 py-3 text-sm font-extrabold text-black shadow-lg hover:scale-[1.02] transition"
                  >
                    {copy.estimateButton} <ArrowRight className="h-4 w-4" />
                  </button>

                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-black shadow-md hover:scale-[1.02] transition"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-16">
            <div className="rounded-3xl border border-yellow-400 bg-white p-8 sm:p-10 shadow-xl">
              <div className="max-w-5xl mx-auto">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-black mb-10 text-center sm:text-left">
                  {copy.faqTitle}
                </h2>

                <div className="space-y-8">
                  {faqItems.map((item, index) => (
                    <div
                      key={item.q}
                      className={index === 0 ? "" : "border-t border-gray-200 pt-6"}
                    >
                      <h3 className="font-extrabold text-black text-lg">
                        {item.q}
                      </h3>
                      <p className="mt-2 text-gray-600 leading-7 text-sm sm:text-base">
                        {item.a}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="mt-16">
            <div className="rounded-3xl border border-yellow-400 bg-white p-6 sm:p-8 shadow-xl">
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                <div className="max-w-2xl">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-black">
                    {copy.finalCtaTitle}
                  </h2>
                  <p className="mt-3 text-gray-600 leading-8">
                    {copy.finalCtaText}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => router.push(estimateHref)}
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-yellow-400 px-6 py-3 text-sm font-extrabold text-black shadow-lg hover:scale-[1.02] transition"
                  >
                    {copy.estimateButton} <ArrowRight className="h-4 w-4" />
                  </button>

                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-black shadow-md hover:scale-[1.02] transition"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </section>

          <div className="mt-10 text-center text-sm text-gray-500">
            {copy.finalNote}
          </div>
        </div>
      </section>
    </div>
  );
}