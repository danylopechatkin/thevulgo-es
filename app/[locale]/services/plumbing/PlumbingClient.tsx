"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import {
  ArrowRight,
  Droplets,
  Wrench,
  ShowerHead,
  Bath,
  ShieldCheck,
  Clock3,
  CheckCircle2,
  BadgeCheck,
  CircleOff,
  Waves,
} from "lucide-react";

export default function PlumbingClient() {
  const router = useRouter();
  const locale = useLocale();
  const isEs = locale === "es";

  const estimateHref = `/${locale}/estimate?category=plumbing`;

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, me gustaría pedir presupuesto para servicios de fontanería en Valencia."
      : "Hi! I’d like an estimate for plumbing services in Valencia."
  );

  const whatsappHref = `https://wa.me/34610076942?text=${whatsappText}`;

  const copy = {
    badge: "THEVULGO • Valencia",

    heroTitle: isEs ? "Servicios de fontanería" : "Plumbing Services",
    heroSubtitle: isEs
      ? "Servicios básicos de fontanería en Valencia: cambio de grifos, instalación de lavabos, conexión de electrodomésticos, pequeñas fugas visibles y mejoras sencillas."
      : "Basic plumbing services in Valencia including faucet replacement, sink installation, appliance connections, visible leak fixing and simple fixture upgrades.",

    ctaTitle: isEs
      ? "¿Necesitas un presupuesto exacto de fontanería?"
      : "Need an exact plumbing estimate?",
    ctaText: isEs
      ? "Envía tu solicitud ahora y recibe un presupuesto claro para cambio de grifo, instalación de lavabo, conexión de electrodomésticos o varias tareas pequeñas de fontanería en una sola visita."
      : "Send a request now and get a clear estimate for faucet replacement, sink installation, appliance connections or several small plumbing tasks in one visit.",
    estimateButton: isEs ? "Pedir presupuesto" : "Get estimate",

    seoBadge: isEs ? "Fontanería básica • Valencia" : "Basic plumbing work • Valencia",
    seoTitle: isEs
      ? "Servicios básicos de fontanería en Valencia"
      : "Basic Plumbing Services in Valencia",
    includedTitle: isEs ? "Qué está incluido" : "What is included",

    whyBadge: isEs
      ? "Por qué los clientes eligen este servicio"
      : "Why clients choose this service",
    whyTitle: isEs
      ? "Ayuda limpia de fontanería para trabajos sencillos que importan"
      : "Clean plumbing help for simple jobs that matter",
    whyText: isEs
      ? "Este servicio está pensado para clientes que necesitan ayuda práctica sin trabajos grandes de fontanería: cambio de piezas, conexiones, pequeñas fugas visibles y acabado limpio en cocina, baño o zona de lavado."
      : "This service is designed for clients who need practical plumbing help without full-scale plumbing work: fixture replacement, appliance connections, simple visible leaks and neat finishing in kitchens, bathrooms and utility spaces.",

    faqTitle: isEs ? "Preguntas frecuentes de fontanería" : "Plumbing FAQ",

    finalCtaTitle: isEs
      ? "¿Listo para reservar tu trabajo de fontanería?"
      : "Ready to book your plumbing job?",
    finalCtaText: isEs
      ? "Envía tu solicitud ahora y recibe un presupuesto claro para cambio de grifo, instalación de lavabo, conexión de electrodomésticos o varias tareas pequeñas de fontanería en Valencia."
      : "Send your request now and get a clear estimate for faucet replacement, sink installation, appliance connections or several small plumbing tasks in Valencia.",

    finalNote: isEs
      ? "El precio final depende del tipo de pieza, cantidad, acceso y complejidad del trabajo."
      : "Final price depends on fixture type, quantity, access and task complexity.",
  };

  const trustPoints = [
    {
      title: isEs ? "Respuesta rápida" : "Fast response",
      text: isEs
        ? "Comunicación rápida y planificación clara de la cita."
        : "Quick communication and clear appointment scheduling.",
      icon: <Clock3 className="h-5 w-5" />,
    },
    {
      title: isEs ? "Trabajo limpio" : "Clean work",
      text: isEs
        ? "Instalación cuidadosa y acabado limpio en piezas visibles."
        : "Careful installation and tidy finishing for visible fixtures.",
      icon: <CheckCircle2 className="h-5 w-5" />,
    },
    {
      title: isEs ? "Precio transparente" : "Transparent pricing",
      text: isEs
        ? "Precios iniciales claros y estimación antes de empezar."
        : "Clear starting prices and estimate logic before work begins.",
      icon: <ShieldCheck className="h-5 w-5" />,
    },
  ];

  const services = [
    {
      title: isEs ? "Cambio de grifo" : "Faucet replacement",
      desc: isEs
        ? "Cambio e instalación de grifo de cocina o baño con alineación cuidadosa y revisión de fugas."
        : "Kitchen or bathroom faucet replacement and fitting with careful alignment and leak check.",
      price: isEs ? "desde €39" : "from €39",
      icon: <Droplets className="h-5 w-5" />,
      className: "lg:col-span-2",
    },
    {
      title: isEs ? "Instalación de lavabo" : "Sink installation",
      desc: isEs
        ? "Instalación sencilla de lavabo y conexión para baño o zona de servicio."
        : "Simple sink installation and connection for bathrooms or utility areas.",
      price: isEs ? "desde €59" : "from €59",
      icon: <Bath className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Cambio de alcachofa de ducha" : "Shower head replacement",
      desc: isEs
        ? "Cambio de alcachofas, soportes y piezas compatibles de ducha."
        : "Replacement of shower heads, holders and compatible fittings.",
      price: isEs ? "desde €29" : "from €29",
      icon: <ShowerHead className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Cambio de tapa de inodoro" : "Toilet seat replacement",
      desc: isEs
        ? "Instalación de nueva tapa de inodoro con ajuste correcto."
        : "Installation of new toilet seat fittings with proper adjustment.",
      price: isEs ? "desde €29" : "from €29",
      icon: <Bath className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Conexión de lavadora" : "Washing machine connection",
      desc: isEs
        ? "Conexión de lavadora a toma de agua y desagüe existentes."
        : "Connection of washing machines to water supply and drain points.",
      price: isEs ? "desde €35" : "from €35",
      icon: <Droplets className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Conexión de lavavajillas" : "Dishwasher connection",
      desc: isEs
        ? "Conexión de lavavajillas y configuración sencilla en espacios compatibles."
        : "Dishwasher water connection and simple setup for compatible spaces.",
      price: isEs ? "desde €35" : "from €35",
      icon: <Droplets className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Reparación de pequeña fuga" : "Leak fixing",
      desc: isEs
        ? "Pequeñas fugas visibles, ajuste de piezas y correcciones simples de conexión."
        : "Minor visible leak fixes, tightening fittings and simple connection corrections.",
      price: isEs ? "desde €39" : "from €39",
      icon: <Waves className="h-5 w-5" />,
      className: "lg:col-span-2",
    },
    {
      title: isEs ? "Ajustes bajo fregadero" : "Under sink adjustments",
      desc: isEs
        ? "Pequeños ajustes bajo fregadero de cocina o lavabo para mejor encaje y estabilidad."
        : "Small adjustments under kitchen or bathroom sinks for better fit and stability.",
      price: isEs ? "desde €35" : "from €35",
      icon: <Wrench className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Cambio de manguera de ducha" : "Shower hose replacement",
      desc: isEs
        ? "Cambio de manguera de ducha y conectores compatibles."
        : "Replacement of shower hose and connector fittings.",
      price: isEs ? "desde €29" : "from €29",
      icon: <ShowerHead className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Instalación de grifo de baño" : "Bathroom tap installation",
      desc: isEs
        ? "Instalación de grifos de baño compatibles y piezas básicas."
        : "Installation of compatible bathroom taps and basic fittings.",
      price: isEs ? "desde €39" : "from €39",
      icon: <Droplets className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Instalación de filtro de agua" : "Water filter installation",
      desc: isEs
        ? "Instalación básica de filtros compatibles bajo fregadero o en grifo."
        : "Basic installation of compatible under-sink or tap filter units.",
      price: isEs ? "desde €39" : "from €39",
      icon: <Droplets className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Cambio de conectores de tubería" : "Pipe connector replacement",
      desc: isEs
        ? "Cambio de conectores y piezas visibles simples de tubería."
        : "Replacement of simple visible pipe connectors and fittings.",
      price: isEs ? "desde €35" : "from €35",
      icon: <Wrench className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Instalación de manguera bidé" : "Bidet hose installation",
      desc: isEs
        ? "Instalación sencilla de manguera bidé y conectores compatibles."
        : "Simple installation of bidet hoses and compatible connectors.",
      price: isEs ? "desde €29" : "from €29",
      icon: <Bath className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Cambio de llave de paso" : "Stop valve replacement",
      desc: isEs
        ? "Cambio de pequeñas llaves de paso accesibles cuando las condiciones son adecuadas."
        : "Replacement of accessible small shut-off valves where suitable.",
      price: isEs ? "desde €35" : "from €35",
      icon: <CircleOff className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Varias tareas de fontanería" : "Multiple plumbing tasks",
      desc: isEs
        ? "Presupuesto combinado para varias tareas básicas de fontanería en una sola visita."
        : "Combined estimate for several basic plumbing tasks completed in one visit.",
      price: isEs ? "presupuesto personalizado" : "custom quote",
      icon: <Wrench className="h-5 w-5" />,
      className: "lg:col-span-2",
    },
  ];

  const whyChoose = isEs
    ? [
        "Adecuado para pisos, casas y propiedades en alquiler",
        "Útil para mudanzas, mejoras y cambio de piezas",
        "Trabajos visibles de fontanería con acabado limpio",
        "Varias tareas básicas se pueden combinar en una visita",
        "Presupuesto claro antes de reservar con alcance definido",
        "Servicio práctico para necesidades comunes del hogar",
      ]
    : [
        "Suitable for apartments, homes and rental properties",
        "Useful for move-ins, upgrades and fixture replacement",
        "Visible plumbing jobs completed cleanly and neatly",
        "Several basic tasks can often be combined in one visit",
        "Clear estimate before booking with defined scope",
        "Practical service for common household plumbing needs",
      ];

  const includedItems = isEs
    ? [
        "Cambio de grifos e instalación de piezas",
        "Instalación de lavabo y conexión sencilla",
        "Conexión de lavadora y lavavajillas",
        "Cambio de alcachofa y manguera de ducha",
        "Cambio de tapa de inodoro y accesorios simples",
        "Pequeñas fugas visibles y ajustes de piezas",
        "Ajustes de desagüe y cambio de conectores",
        "Varias tareas básicas agrupadas en una visita",
      ]
    : [
        "Faucet replacement and tap installation",
        "Sink installation and simple connection",
        "Washing machine and dishwasher connections",
        "Shower head and shower hose replacement",
        "Toilet seat and simple bathroom fitting replacement",
        "Minor visible leak fixing and fitting adjustments",
        "Drain pipe adjustment and connector replacement",
        "Several basic plumbing tasks grouped into one visit",
      ];

  const faq = [
    {
      q: isEs
        ? "¿Haces instalaciones completas de fontanería?"
        : "Do you handle full plumbing system installation?",
      a: isEs
        ? "No. Esta página está enfocada en fontanería básica: cambio de grifos, instalación de lavabos, conexión de electrodomésticos y pequeñas fugas visibles."
        : "No. This page is focused on basic plumbing services such as faucet replacement, sink installation, appliance connections and simple visible leak fixes.",
    },
    {
      q: isEs
        ? "¿Se pueden hacer varias tareas de fontanería en una visita?"
        : "Can several plumbing tasks be done in one visit?",
      a: isEs
        ? "Sí. Muchas tareas pequeñas se pueden agrupar en una sola cita, normalmente de forma más eficiente."
        : "Yes. Many small plumbing tasks can be grouped together in one appointment, which is often more efficient and cost-effective.",
    },
    {
      q: isEs
        ? "¿Tengo que comprar yo el grifo o la pieza?"
        : "Do I need to buy the faucet or fixture myself?",
      a: isEs
        ? "Normalmente sí. El cliente suele proporcionar la pieza nueva y se realiza la instalación en el sitio."
        : "Usually yes. Clients normally provide the new fixture or fitting, and installation is then completed on site.",
    },
    {
      q: isEs
        ? "¿Puedes conectar lavadoras o lavavajillas?"
        : "Can you connect washing machines or dishwashers?",
      a: isEs
        ? "Sí. La conexión básica de lavadora y lavavajillas está incluida cuando las tomas existentes son adecuadas."
        : "Yes. Basic washing machine and dishwasher connections are included when the connection points are already suitable.",
    },
    {
      q: isEs ? "¿Arreglas grifos con fuga?" : "Do you fix leaking faucets?",
      a: isEs
        ? "Sí. Pequeñas fugas visibles, ajustes de piezas y correcciones simples se pueden resolver normalmente rápido."
        : "Yes. Minor visible leak fixes, tightening fittings and simple corrections can often be completed quickly.",
    },
    {
      q: isEs ? "¿Trabajas en pisos de alquiler?" : "Do you work in rental apartments?",
      a: isEs
        ? "Sí. Estos servicios son muy útiles para pisos de alquiler, mudanzas, mejoras de baño y cocina."
        : "Yes. These services are very suitable for rental apartments, move-ins, bathroom updates and kitchen refresh jobs.",
    },
    {
      q: isEs
        ? "¿Puedes cambiar mangueras y alcachofas de ducha?"
        : "Can you replace shower hoses and shower heads?",
      a: isEs
        ? "Sí. El cambio de manguera, alcachofa y piezas compatibles de ducha está incluido."
        : "Yes. Simple shower hose, shower head and compatible fitting replacement is included in this category.",
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
              {services.map((s, index) => (
                <div
                  key={`${s.title}-${index}`}
                  className={`rounded-2xl border border-yellow-400 bg-white p-7 text-left shadow-lg transition-all duration-200 hover:shadow-2xl hover:scale-[1.02] min-h-[210px] ${s.className || ""}`}
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-400 text-black shadow-md">
                    {s.icon}
                  </div>

                  <h3 className="mt-4 text-xl font-extrabold text-black">
                    {s.title}
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-gray-700">
                    {s.desc}
                  </p>

                  <div className="mt-4 text-sm font-extrabold text-yellow-500">
                    {s.price}
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
                        <strong>fontanería básica en Valencia</strong> para pisos,
                        casas y propiedades en alquiler. THEVULGO realiza tareas visibles
                        como cambio de grifos, instalación de lavabos, conexión de lavadora,
                        lavavajillas, cambio de ducha y pequeñas fugas.
                      </p>

                      <p>
                        Muchos trabajos pequeños de fontanería parecen sencillos, pero pueden
                        volverse incómodos o sucios sin las herramientas y experiencia adecuadas.
                        El ajuste limpio y el acabado final importan especialmente cuando el trabajo
                        queda visible en cocina, baño o zona de lavado.
                      </p>

                      <p>
                        Esta categoría es ideal para mejoras simples, cambio de piezas, arreglos
                        de mudanza y tareas domésticas directas. No está pensada para instalaciones
                        completas de fontanería ni tuberías ocultas grandes.
                      </p>
                    </>
                  ) : (
                    <>
                      <p>
                        Professional{" "}
                        <strong>basic plumbing services in Valencia</strong>
                        for apartments, homes and rental properties. THEVULGO handles
                        common visible plumbing tasks such as faucet replacement,
                        sink installation, washing machine connections, dishwasher setup,
                        shower fitting replacement and simple leak correction.
                      </p>

                      <p>
                        Many small plumbing jobs are simple in theory but become messy,
                        inconvenient or frustrating without the right tools and experience.
                        Clean fitting, proper alignment and tidy final finishing matter,
                        especially when the work is visible in kitchens, bathrooms and utility areas.
                      </p>

                      <p>
                        This service category is ideal for simple plumbing improvements,
                        fixture replacement, move-in fixes and straightforward household plumbing tasks.
                        It is not intended for full plumbing system installation or large hidden pipe work.
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
                        Cada trabajo se hace con cuidado para conseguir un resultado práctico,
                        limpio y estable. Un buen servicio de fontanería básica no solo corrige
                        fugas: también deja una instalación más ordenada y fiable para el uso diario.
                      </p>

                      <p>
                        THEVULGO trabaja principalmente en{" "}
                        <strong>Valencia y alrededores</strong>, con respuesta rápida y comunicación clara
                        antes de la cita. Es útil para pisos de alquiler, mudanzas, mejoras de baño y cocina.
                      </p>

                      <p>
                        Antes de empezar, el cliente recibe un presupuesto transparente según
                        el número de piezas, tipo de tarea y complejidad total.
                      </p>
                    </>
                  ) : (
                    <>
                      <p>
                        Each job is approached with care to ensure a practical result,
                        clean finish and stable visible installation. Good plumbing service
                        for this kind of work is not only about stopping leaks — it is also
                        about how tidy and reliable the final setup looks in daily use.
                      </p>

                      <p>
                        THEVULGO works mainly in{" "}
                        <strong>Valencia and nearby areas</strong>,
                        providing quick response times and clear communication before the appointment.
                        These services are especially useful for rental apartments, move-ins,
                        bathroom refreshes and kitchen upgrades.
                      </p>

                      <p>
                        Before work begins, clients receive a transparent estimate based on
                        the number of fixtures, type of task and total complexity.
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
                  {faq.map((item, index) => (
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