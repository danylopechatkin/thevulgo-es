"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import {
  ArrowRight,
  Clock3,
  CheckCircle2,
  ShieldCheck,
  BadgeCheck,
  ChefHat,
  Wrench,
  Drill,
  Lightbulb,
  House,
  Ruler,
  Hammer,
  Package,
  DoorOpen,
} from "lucide-react";

export default function KitchenClient() {
  const router = useRouter();
  const locale = useLocale();
  const isEs = locale === "es";

  const estimateHref = `/${locale}/estimate?category=kitchen`;

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, me gustaría pedir presupuesto para instalaciones de cocina en Valencia."
      : "Hi! I’d like an estimate for kitchen installations in Valencia."
  );

  const whatsappHref = `https://wa.me/34610076942?text=${whatsappText}`;

  const copy = {
    badge: "THEVULGO • Valencia",

    heroTitle: isEs ? "Instalaciones de cocina" : "Kitchen Installations",
    heroSubtitle: isEs
      ? "Instalación de muebles de cocina, tiradores, estantes, iluminación, ajustes de alineación y mejoras prácticas de cocina en Valencia."
      : "Kitchen cabinet installation, handle fitting, shelves, lighting, alignment corrections and practical kitchen improvement work in Valencia.",

    ctaTitle: isEs
      ? "¿Necesitas un presupuesto exacto para instalación de cocina?"
      : "Need an exact kitchen installation estimate?",
    ctaText: isEs
      ? "Envía tu solicitud ahora y recibe un presupuesto claro para muebles, tiradores, iluminación de cocina, estantes o varias tareas de instalación en una sola visita."
      : "Send your request now and get a clear estimate for cabinets, handles, kitchen lighting, shelves or several installation tasks in one visit.",
    estimateButton: isEs ? "Pedir presupuesto" : "Get estimate",

    seoBadge: isEs
      ? "Instalación y montaje de cocina • Valencia"
      : "Kitchen fitting & setup • Valencia",
    seoTitle: isEs
      ? "Servicios de instalación de cocina en Valencia"
      : "Kitchen Installation Services in Valencia",
    includedTitle: isEs ? "Qué está incluido" : "What is included",

    whyBadge: isEs
      ? "Por qué los clientes eligen este servicio"
      : "Why clients choose this service",
    whyTitle: isEs
      ? "Detalles de cocina que hacen que todo el espacio se vea más terminado"
      : "Kitchen details that make the whole space feel more finished",
    whyText: isEs
      ? "Este servicio es ideal cuando la cocina necesita instalaciones prácticas, mejor alineación y un acabado visible más limpio sin convertir el trabajo en una reforma completa."
      : "This service is ideal when the kitchen needs practical installation work, cleaner alignment and better visible finishing without turning the job into a full renovation.",

    faqTitle: isEs
      ? "Preguntas frecuentes sobre instalaciones de cocina"
      : "Kitchen Installations FAQ",

    finalCtaTitle: isEs
      ? "¿Listo para reservar tu instalación de cocina?"
      : "Ready to book your kitchen installation?",
    finalCtaText: isEs
      ? "Envía tu solicitud ahora y recibe un presupuesto claro para muebles, iluminación de cocina, estantes, tiradores o varias tareas de cocina en Valencia."
      : "Send your request now and get a clear estimate for cabinets, kitchen lighting, shelves, handles or multiple kitchen setup tasks in Valencia.",

    finalNote: isEs
      ? "El precio final depende del tipo de mueble, accesorios, número de unidades, acceso y alcance total de la instalación."
      : "Final price depends on cabinet type, fittings, number of units, access and total installation scope.",
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
      title: isEs ? "Acabado limpio" : "Clean finish",
      text: isEs
        ? "Montaje limpio, alineación recta y mejor aspecto final de la cocina."
        : "Neat fitting, straight alignment and a cleaner final kitchen look.",
      icon: <CheckCircle2 className="h-5 w-5" />,
    },
    {
      title: isEs ? "Precio transparente" : "Transparent pricing",
      text: isEs
        ? "Estimación clara antes de empezar, según el alcance y los accesorios."
        : "Clear estimate logic before work begins, based on scope and fittings.",
      icon: <ShieldCheck className="h-5 w-5" />,
    },
  ];

  const services = [
    {
      title: isEs ? "Instalación de muebles de cocina" : "Kitchen cabinet installation",
      desc: isEs
        ? "Instalación de muebles y unidades compatibles de cocina con atención a la alineación, separación y posición final limpia."
        : "Installation of compatible kitchen cabinets and storage units with attention to alignment, spacing and cleaner final positioning.",
      price: isEs ? "desde €79" : "from €79",
      icon: <ChefHat className="h-5 w-5" />,
      className: "lg:col-span-2",
    },
    {
      title: isEs ? "Montaje de muebles altos" : "Wall cabinet mounting",
      desc: isEs
        ? "Montaje seguro de muebles altos de cocina en paredes adecuadas con alineación y separación práctica."
        : "Secure mounting of upper kitchen cabinets in suitable wall types with practical alignment and spacing.",
      price: isEs ? "desde €59" : "from €59",
      icon: <Drill className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Instalación de muebles bajos" : "Base unit installation",
      desc: isEs
        ? "Instalación y posicionamiento de muebles bajos de cocina para una distribución práctica y mejor estabilidad."
        : "Installation and positioning of lower kitchen cabinet units for practical layout and better stability.",
      price: isEs ? "desde €59" : "from €59",
      icon: <Package className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Alineación de puertas de cocina" : "Cabinet door alignment",
      desc: isEs
        ? "Ajuste de puertas de muebles de cocina para mejorar huecos, líneas y uso diario."
        : "Adjustment of kitchen cabinet doors to improve gaps, lines and everyday usability.",
      price: isEs ? "desde €35" : "from €35",
      icon: <DoorOpen className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Instalación de tiradores" : "Handle installation",
      desc: isEs
        ? "Instalación de tiradores y pomos de cocina con simetría y separación limpia en los frentes."
        : "Installation of kitchen handles and knobs with cleaner symmetry and spacing across cabinet fronts.",
      price: isEs ? "desde €29" : "from €29",
      icon: <Hammer className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Ajuste de cierre suave" : "Soft-close adjustment",
      desc: isEs
        ? "Ajuste básico de bisagras y accesorios compatibles para mejorar el movimiento y cierre de puertas."
        : "Basic adjustment of compatible hinges and fittings to improve cabinet door movement and closing feel.",
      price: isEs ? "desde €35" : "from €35",
      icon: <Wrench className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Instalación de estantes" : "Shelf installation",
      desc: isEs
        ? "Instalación de estantes interiores o abiertos para almacenamiento, decoración u organización diaria."
        : "Installation of interior or open kitchen shelves for storage, display or daily-use organization.",
      price: isEs ? "desde €35" : "from €35",
      icon: <Ruler className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Instalación de iluminación de cocina" : "Kitchen lighting installation",
      desc: isEs
        ? "Instalación de luces simples de cocina, luces bajo mueble o elementos compatibles para mejor visibilidad."
        : "Installation of simple kitchen lights, under-cabinet lights or compatible lighting elements for better visibility.",
      price: isEs ? "desde €39" : "from €39",
      icon: <Lightbulb className="h-5 w-5" />,
      className: "lg:col-span-2",
    },
    {
      title: isEs ? "Luces bajo mueble" : "Under-cabinet light setup",
      desc: isEs
        ? "Montaje y configuración básica de iluminación bajo mueble para mejor visibilidad de encimera y ambiente."
        : "Basic mounting and setup of under-cabinet lighting for cleaner worktop visibility and kitchen atmosphere.",
      price: isEs ? "desde €35" : "from €35",
      icon: <Lightbulb className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Instalación de barra de cocina" : "Kitchen rail installation",
      desc: isEs
        ? "Instalación de barras de pared y accesorios prácticos para utensilios, almacenamiento o sistemas colgantes."
        : "Installation of wall rails and practical kitchen accessories for utensils, storage or small hanging systems.",
      price: isEs ? "desde €29" : "from €29",
      icon: <Drill className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Instalación de panel trasero" : "Back panel fitting",
      desc: isEs
        ? "Colocación básica de paneles traseros y piezas de acabado compatibles cuando el trabajo es adecuado."
        : "Basic fitting and positioning of compatible kitchen back panels and finishing pieces where suitable.",
      price: isEs ? "desde €45" : "from €45",
      icon: <Package className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Remates y paneles de relleno" : "Trim & filler panel fitting",
      desc: isEs
        ? "Instalación de tiras de relleno, remates y piezas visibles para mejorar el acabado final."
        : "Installation of filler strips, trim pieces and visible finishing parts to improve the final kitchen look.",
      price: isEs ? "desde €39" : "from €39",
      icon: <Ruler className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Preparación de soporte para encimera" : "Worktop support prep",
      desc: isEs
        ? "Preparación básica y ajuste de soporte para secciones compatibles de encimera cuando el alcance es sencillo."
        : "Basic prep and support fitting for compatible worktop sections where the installation scope is straightforward.",
      price: isEs ? "desde €49" : "from €49",
      icon: <ShieldCheck className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Ajuste de mueble para electrodoméstico" : "Appliance housing fitting",
      desc: isEs
        ? "Ajuste y posicionamiento de muebles o unidades para electrodomésticos integrados cuando el trabajo es adecuado."
        : "Fitting and positioning of cabinets or surrounding units intended for built-in kitchen appliances where suitable.",
      price: isEs ? "desde €49" : "from €49",
      icon: <House className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Instalación de accesorios de cocina" : "Kitchen accessory installation",
      desc: isEs
        ? "Instalación de pequeños accesorios prácticos como soportes, barras, organizadores y elementos visibles."
        : "Installation of small practical kitchen accessories such as holders, rails, organizers and visible utility fittings.",
      price: isEs ? "desde €29" : "from €29",
      icon: <Wrench className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Instalación y ajuste de encimera" : "Worktop installation & fitting",
      desc: isEs
        ? "Colocación y ajuste de encimeras compatibles con alineación cuidada, soporte correcto y acabado final limpio."
        : "Positioning and fitting of compatible kitchen worktops with careful alignment, support adjustment and cleaner final finish for everyday kitchen use.",
      price: isEs ? "desde €89" : "from €89",
      icon: <Ruler className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs
        ? "Varias tareas de instalación de cocina"
        : "Multiple kitchen installation tasks",
      desc: isEs
        ? "La mejor opción si necesitas varios muebles, accesorios, luces, tiradores o pequeñas instalaciones en una sola visita organizada."
        : "Best option if you need several kitchen units, fittings, lights, handles or small installation tasks completed in one organized visit.",
      price: isEs ? "presupuesto personalizado" : "custom quote",
      icon: <ChefHat className="h-5 w-5" />,
      className: "lg:col-span-2",
    },
  ];

  const whyChoose = isEs
    ? [
        "Ideal para cocinas de pisos, casas y propiedades en alquiler",
        "Útil para mejoras, actualizaciones y preparación al mudarse",
        "Varias instalaciones de cocina pueden agruparse en una sola visita",
        "Resultado visual más limpio con mejor alineación de muebles",
        "Servicio práctico para mejoras visibles de cocina",
        "Presupuesto claro antes de reservar con alcance definido",
      ]
    : [
        "Good for apartments, homes and rental property kitchens",
        "Useful for kitchen refreshes, upgrades and move-in setup",
        "Several kitchen fittings can be grouped into one visit",
        "Cleaner visual result with better cabinet alignment",
        "Practical service for visible kitchen improvement work",
        "Clear estimate before booking with defined scope",
      ];

  const includedItems = isEs
    ? [
        "Instalación de muebles de cocina y muebles bajos",
        "Montaje y alineación de muebles altos",
        "Instalación de tiradores y ajuste de cierre suave",
        "Instalación de estantes y almacenamiento visible",
        "Iluminación de cocina y luces bajo mueble",
        "Remates, paneles de relleno y piezas de acabado",
        "Preparación de mueble para electrodomésticos y soportes",
        "Varias tareas de cocina en una sola visita",
      ]
    : [
        "Kitchen cabinet and base unit installation",
        "Wall cabinet mounting and alignment",
        "Handle fitting and soft-close adjustments",
        "Shelf installation and visible storage fittings",
        "Kitchen and under-cabinet lighting installation",
        "Trim, filler panel and finishing piece fitting",
        "Appliance housing preparation and support fitting",
        "Multiple kitchen installation tasks in one visit",
      ];

  const faqItems = [
    {
      q: isEs
        ? "¿Qué tipo de trabajos de cocina incluye esta página?"
        : "What kind of kitchen work is included on this page?",
      a: isEs
        ? "Esta página incluye trabajos prácticos de instalación de cocina como montaje de muebles, instalación de tiradores, estantes, iluminación bajo mueble, ajustes de alineación, remates y pequeñas mejoras visibles."
        : "This page covers practical kitchen installation work such as cabinet fitting, handle installation, shelf mounting, under-cabinet lighting, alignment corrections, trim fitting and small visible kitchen improvement tasks.",
    },
    {
      q: isEs
        ? "¿Instalas cocinas completas a medida?"
        : "Do you install full custom kitchens?",
      a: isEs
        ? "Esta página está enfocada principalmente en instalación práctica y acabados visibles, no en grandes obras completas de cocina ni proyectos especializados exclusivos de otros gremios."
        : "This page is mainly for practical kitchen installation and visible fitting work rather than full large-scale kitchen construction or specialized trade-only projects.",
    },
    {
      q: isEs
        ? "¿Se pueden hacer varias tareas de cocina en una sola visita?"
        : "Can several kitchen tasks be done in one visit?",
      a: isEs
        ? "Sí. Es una de las mejores formas de usar este servicio. Muebles, tiradores, estantes, iluminación y pequeños ajustes se pueden agrupar en una cita organizada."
        : "Yes. This is one of the best uses of this service. Cabinets, handles, shelves, lighting and small fitting tasks can often be grouped into one organized appointment.",
    },
    {
      q: isEs
        ? "¿Trabajas con módulos de cocina IKEA o sistemas similares?"
        : "Do you work with IKEA kitchen units or similar systems?",
      a: isEs
        ? "Sí. Se pueden instalar muebles compatibles y sistemas modulares de cocina cuando el alcance es adecuado para montaje y ajuste."
        : "Yes, compatible kitchen cabinets and modular kitchen systems can be included where the scope is suitable for installation and fitting work.",
    },
    {
      q: isEs
        ? "¿Puedes alinear puertas de muebles y tiradores?"
        : "Can you align cabinet doors and handles?",
      a: isEs
        ? "Sí. La alineación de puertas, colocación de tiradores y detalles visibles de acabado son trabajos comunes de esta página."
        : "Yes. Cabinet door alignment, handle placement and visible finishing details are common kitchen tasks on this page.",
    },
    {
      q: isEs
        ? "¿Instalas iluminación bajo mueble?"
        : "Do you install under-cabinet lighting?",
      a: isEs
        ? "Sí. La instalación simple de iluminación bajo mueble y luces compatibles de cocina está incluida cuando las condiciones son adecuadas."
        : "Yes. Simple under-cabinet lighting installation and compatible kitchen light setup are included where conditions are suitable.",
    },
    {
      q: isEs
        ? "¿Este servicio sirve para pisos de alquiler o mejoras rápidas?"
        : "Is this service useful for rental apartments or kitchen refreshes?",
      a: isEs
        ? "Sí. Las instalaciones y ajustes de cocina son muy útiles para mejoras de pisos, mudanzas, propiedades en alquiler y mejora visual general de la cocina."
        : "Yes. Kitchen installation and fitting work is very useful for apartment upgrades, move-ins, rental refreshes and general visual improvement of the kitchen area.",
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
                  className={`rounded-2xl border border-yellow-400 bg-white p-7 text-left shadow-lg transition-all duration-200 hover:shadow-2xl hover:scale-[1.02] min-h-[220px] ${s.className || ""}`}
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
                        <strong>instalación de cocina en Valencia</strong> para pisos,
                        casas y propiedades en alquiler. THEVULGO ayuda con trabajos
                        prácticos como instalación de muebles, estantes, tiradores,
                        iluminación de cocina, ajustes de alineación y acabados visibles.
                      </p>

                      <p>
                        La cocina es uno de los espacios más importantes y visibles de una casa,
                        por eso incluso los pequeños detalles importan. Puertas desalineadas,
                        tiradores mal colocados, poca iluminación o remates sin terminar pueden
                        hacer que toda la cocina se vea menos completa.
                      </p>

                      <p>
                        Esta página está pensada para mejoras prácticas de cocina:
                        montaje de muebles, acabados visibles, preparación de soportes,
                        instalación de accesorios y varias tareas agrupadas en una sola visita.
                      </p>
                    </>
                  ) : (
                    <>
                      <p>
                        Professional{" "}
                        <strong>kitchen installation services in Valencia</strong>
                        for apartments, homes and rental properties. THEVULGO helps with
                        practical kitchen fitting work such as cabinet installation, shelving,
                        handle fitting, kitchen lighting, alignment correction and visible finishing details.
                      </p>

                      <p>
                        Kitchens are one of the most important and most visible spaces in a home,
                        so even small installation details matter. Uneven cabinet lines, misaligned doors,
                        missing handles, poor lighting or unfinished trim can make the whole kitchen
                        feel less complete than it should.
                      </p>

                      <p>
                        This page is designed for practical kitchen improvement work:
                        cabinet fitting, visible finishing, support prep, accessory installation
                        and grouped kitchen setup tasks.
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
                        Una buena instalación de cocina no consiste solo en hacer que las piezas encajen.
                        También se trata de mejorar la línea visual, facilitar el uso diario y crear un
                        resultado más limpio y terminado en todo el espacio.
                      </p>

                      <p>
                        THEVULGO trabaja principalmente en{" "}
                        <strong>Valencia y alrededores</strong>, ayudando a completar trabajos
                        prácticos de cocina con mejor ajuste, instalación más organizada y mejor uso diario.
                      </p>

                      <p>
                        Antes de empezar, el cliente recibe un presupuesto transparente basado en
                        el número de unidades, accesorios, fijaciones y alcance total.
                      </p>
                    </>
                  ) : (
                    <>
                      <p>
                        Good kitchen installation work is not only about making pieces fit.
                        It is also about improving the visual line of the kitchen, making
                        daily use easier and creating a cleaner, more finished result across the whole space.
                      </p>

                      <p>
                        THEVULGO works mainly in{" "}
                        <strong>Valencia and nearby areas</strong>, helping clients complete
                        practical kitchen setup work with cleaner fitting, more organized installation
                        and better everyday usability.
                      </p>

                      <p>
                        Before work begins, clients receive a transparent estimate based on
                        the number of units, accessories, fittings and total scope.
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