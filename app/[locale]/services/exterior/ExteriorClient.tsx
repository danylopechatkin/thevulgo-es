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
  House,
  Wrench,
  Drill,
  Hammer,
  Ruler,
  Fence,
  TreePine,
  Package,
  Paintbrush,
  Shield,
  DoorOpen,
} from "lucide-react";

export default function ExteriorClient() {
  const router = useRouter();
  const locale = useLocale();
  const isEs = locale === "es";

  const estimateHref = `/${locale}/estimate?category=exterior`;

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, me gustaría pedir presupuesto para trabajos exteriores en Valencia."
      : "Hi! I’d like an estimate for house exterior and outdoor work in Valencia."
  );

  const whatsappHref = `https://wa.me/34610076942?text=${whatsappText}`;

  const copy = {
    badge: "THEVULGO • Valencia",

    heroTitle: isEs
      ? "Trabajos exteriores y de exterior"
      : "House Exterior & Outdoor Work",
    heroSubtitle: isEs
      ? "Vallas, puertas exteriores, fachadas, patios, accesorios exteriores, reparaciones al aire libre y trabajos prácticos de exterior en Valencia."
      : "Fences, gates, facades, patio setup, exterior accessories, outdoor repairs and practical house exterior work in Valencia.",

    ctaTitle: isEs
      ? "¿Necesitas un presupuesto exacto para trabajos exteriores?"
      : "Need an exact exterior work estimate?",
    ctaText: isEs
      ? "Envía tu solicitud ahora y recibe un presupuesto claro para vallas, puertas exteriores, accesorios, patio o varias tareas exteriores en una sola visita."
      : "Send your request now and get a clear estimate for fences, gates, outdoor accessories, patio setup or several exterior tasks in one visit.",
    estimateButton: isEs ? "Pedir presupuesto" : "Get estimate",

    seoBadge: isEs
      ? "Trabajos exteriores y preparación exterior • Valencia"
      : "Exterior work & outdoor setup • Valencia",
    seoTitle: isEs
      ? "Servicios de trabajos exteriores en Valencia"
      : "Exterior Work Services in Valencia",
    includedTitle: isEs ? "Qué está incluido" : "What is included",

    whyBadge: isEs
      ? "Por qué los clientes eligen este servicio"
      : "Why clients choose this service",
    whyTitle: isEs
      ? "Detalles exteriores que hacen que toda la propiedad se vea más completa"
      : "Exterior details that make the whole property look more complete",
    whyText: isEs
      ? "Este servicio es ideal cuando el exterior de la propiedad necesita trabajo práctico, mejor presentación y acabados visibles más limpios sin convertir el proyecto en una obra grande."
      : "This service is ideal when the outside of the property needs practical work, cleaner presentation and better visible finishing without turning the project into major construction.",

    faqTitle: isEs
      ? "Preguntas frecuentes sobre trabajos exteriores"
      : "Exterior & Outdoor Work FAQ",

    finalCtaTitle: isEs
      ? "¿Listo para reservar tu trabajo exterior?"
      : "Ready to book your exterior work?",
    finalCtaText: isEs
      ? "Envía tu solicitud ahora y recibe un presupuesto claro para vallas, puertas exteriores, patio, accesorios o varias tareas exteriores en Valencia."
      : "Send your request now and get a clear estimate for fences, gates, patio setup, outdoor accessories or grouped exterior tasks in Valencia.",

    finalNote: isEs
      ? "El precio final depende del acceso exterior, número de tareas, superficies de montaje y alcance total del trabajo."
      : "Final price depends on outdoor access, number of tasks, mounting surfaces and total work scope.",
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
      title: isEs ? "Trabajo exterior limpio" : "Clean exterior work",
      text: isEs
        ? "Arreglos exteriores prácticos con montaje más limpio y acabado final ordenado."
        : "Practical outdoor fixes with cleaner fitting and a tidy final look.",
      icon: <CheckCircle2 className="h-5 w-5" />,
    },
    {
      title: isEs ? "Precio transparente" : "Transparent pricing",
      text: isEs
        ? "Estimación clara antes de empezar, según el alcance exterior y el acceso."
        : "Clear estimate logic before work begins, based on outdoor scope and access.",
      icon: <ShieldCheck className="h-5 w-5" />,
    },
  ];

  const services = [
    {
      title: isEs ? "Reparación y ajuste de vallas" : "Fence repair & adjustment",
      desc: isEs
        ? "Reparación y ajuste de vallas, secciones visibles y límites exteriores para mejorar estabilidad, uso y aspecto general."
        : "Repair and adjustment of fences, fence sections and visible outdoor boundaries to improve stability, function and overall exterior appearance.",
      price: isEs ? "desde €59" : "from €59",
      icon: <Fence className="h-5 w-5" />,
      className: "lg:col-span-2",
    },
    {
      title: isEs ? "Alineación de puerta exterior" : "Gate alignment",
      desc: isEs
        ? "Corrección básica de puertas exteriores y accesos para mejorar apertura, cierre y uso diario."
        : "Basic correction of gates and outdoor access elements to improve opening, closing and practical daily use.",
      price: isEs ? "desde €49" : "from €49",
      icon: <DoorOpen className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Arreglo de herrajes exteriores" : "Outdoor hardware fixing",
      desc: isEs
        ? "Pequeñas reparaciones y ajustes de soportes, manillas, fijaciones y elementos visibles exteriores."
        : "Small repairs and tightening of visible outdoor fittings, brackets, handles and practical hardware elements.",
      price: isEs ? "desde €35" : "from €35",
      icon: <Wrench className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Retoques visibles de fachada" : "Facade touch-up work",
      desc: isEs
        ? "Retoques básicos en superficies exteriores accesibles cuando el trabajo es de mejora práctica y no reforma completa."
        : "Basic visible touch-up work on accessible exterior surfaces where the job is suitable for practical improvement rather than full renovation.",
      price: isEs ? "desde €59" : "from €59",
      icon: <Paintbrush className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Montaje en pared exterior" : "Outdoor wall mounting",
      desc: isEs
        ? "Montaje de accesorios, carteles, soportes, pequeños elementos y piezas prácticas exteriores en superficies adecuadas."
        : "Mounting of exterior accessories, signs, holders, small fixtures and practical outdoor items on suitable surfaces.",
      price: isEs ? "desde €39" : "from €39",
      icon: <Drill className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Instalación de soporte exterior" : "Outdoor shelf or bracket fitting",
      desc: isEs
        ? "Instalación de soportes, fijaciones y elementos pequeños de apoyo para un uso exterior más organizado."
        : "Installation of practical brackets, holders and small exterior support elements for organized outdoor use.",
      price: isEs ? "desde €39" : "from €39",
      icon: <Hammer className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Sellado exterior impermeable" : "Outdoor waterproof sealing",
      desc: isEs
        ? "Sellado de pequeños huecos, juntas y zonas expuestas para ayudar a proteger superficies de humedad y mejorar durabilidad."
        : "Sealing of small exterior gaps, joints and exposed areas to help protect surfaces from moisture and improve durability of outdoor elements.",
      price: isEs ? "desde €49" : "from €49",
      icon: <ShieldCheck className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs
        ? "Ajuste de accesorios de pérgola / sombra"
        : "Pergola / shade accessory fitting",
      desc: isEs
        ? "Montaje y ajuste básico de accesorios compatibles para pérgolas, sombra o soportes exteriores simples."
        : "Basic fitting and adjustment of compatible pergola accessories, shade elements or simple outdoor support items.",
      price: isEs ? "desde €49" : "from €49",
      icon: <House className="h-5 w-5" />,
      className: "lg:col-span-2",
    },
    {
      title: isEs ? "Montaje de almacenamiento exterior" : "Outdoor storage setup",
      desc: isEs
        ? "Montaje o preparación de piezas simples de almacenamiento exterior para patios, terrazas o zonas exteriores."
        : "Assembly or setup of simple outdoor storage pieces and utility elements for patios, terraces or house exteriors.",
      price: isEs ? "desde €49" : "from €49",
      icon: <Package className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Cambio de accesorio exterior" : "Exterior fixture replacement",
      desc: isEs
        ? "Sustitución de accesorios exteriores desgastados o dañados como soportes, fijaciones y elementos prácticos visibles."
        : "Replacement of worn or damaged outdoor fixtures such as holders, brackets, visible fittings and practical exterior utility elements to improve both function and presentation.",
      price: isEs ? "desde €39" : "from €39",
      icon: <Wrench className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Montaje de muebles de patio" : "Patio furniture assembly",
      desc: isEs
        ? "Montaje y preparación de mesas, sillas, bancos y muebles exteriores para espacios más limpios y útiles."
        : "Assembly and setup of outdoor tables, chairs, benches and patio furniture for cleaner, more usable exterior spaces around the home.",
      price: isEs ? "desde €49" : "from €49",
      icon: <Package className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Mejora y acabado exterior" : "Outdoor refresh & finishing",
      desc: isEs
        ? "Servicio práctico para mejoras exteriores visibles como recolocación, pequeños arreglos, accesorios y detalles finales."
        : "A practical service for visible exterior improvements such as repositioning, small fixes, accessory fitting and finishing details that make the property look more complete.",
      price: isEs ? "presupuesto personalizado" : "custom quote",
      icon: <Paintbrush className="h-5 w-5" />,
      className: "lg:col-span-2",
    },
    {
      title: isEs ? "Instalación de buzón" : "Mailbox installation",
      desc: isEs
        ? "Instalación y colocación de buzones o accesorios de entrada con alineación limpia y posición práctica."
        : "Installation and positioning of mailboxes or exterior entry accessories with cleaner alignment and practical placement.",
      price: isEs ? "desde €35" : "from €35",
      icon: <Package className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Montaje de número / cartel de casa" : "House number / sign mounting",
      desc: isEs
        ? "Montaje de números de casa, carteles de nombre y pequeños detalles visibles de entrada."
        : "Mounting of house numbers, name signs and small visible entry details to improve exterior presentation.",
      price: isEs ? "desde €29" : "from €29",
      icon: <Ruler className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Instalación de luz exterior" : "Outdoor light fitting",
      desc: isEs
        ? "Instalación de luces exteriores compatibles cuando la instalación es adecuada y el alcance es sencillo."
        : "Installation of compatible exterior light fixtures where the setup is suitable and the scope is straightforward.",
      price: isEs ? "desde €49" : "from €49",
      icon: <Shield className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Instalación de accesorio de jardín" : "Garden accessory installation",
      desc: isEs
        ? "Instalación de pequeños accesorios de jardín o patio como ganchos, soportes y fijaciones simples."
        : "Installation of small garden or patio accessories such as hooks, holders, decorative supports and simple outdoor fittings.",
      price: isEs ? "desde €35" : "from €35",
      icon: <TreePine className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Ayuda con terraza / patio" : "Terrace / patio setup help",
      desc: isEs
        ? "Preparación práctica de elementos de terraza o patio, pequeños montajes, organización y detalles visibles."
        : "Practical setup of outdoor terrace or patio items including small fittings, arrangement help and visible finishing tasks.",
      price: isEs ? "desde €49" : "from €49",
      icon: <House className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs
        ? "Revisión visible de bordes exteriores"
        : "Roof edge / visible exterior checks",
      desc: isEs
        ? "Correcciones básicas en bordes exteriores accesibles y detalles de superficie cuando el trabajo es seguro y menor."
        : "Basic visible correction work around accessible exterior edges and surface details where the job is suitable for safe minor improvement.",
      price: isEs ? "desde €59" : "from €59",
      icon: <ShieldCheck className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Arreglos de balcón y barandilla" : "Balcony & railing fixes",
      desc: isEs
        ? "Ajuste y apriete de elementos de balcón, barandillas y piezas visibles para mejorar estabilidad y alineación."
        : "Adjustment and tightening of balcony elements, railings and visible safety parts to improve stability, alignment and overall exterior feel.",
      price: isEs ? "desde €59" : "from €59",
      icon: <Ruler className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Pack de reparaciones exteriores" : "Outdoor repair bundle",
      desc: isEs
        ? "La mejor opción si necesitas varias tareas exteriores pequeñas en una sola visita organizada, con mejor eficiencia y resultado."
        : "Best option if you need several small exterior and outdoor tasks completed in one organized visit, with cleaner results and better efficiency around the property.",
      price: isEs ? "presupuesto personalizado" : "custom quote",
      icon: <House className="h-5 w-5" />,
      className: "lg:col-span-2",
    },
  ];

  const whyChoose = isEs
    ? [
        "Bueno para casas, villas, patios y propiedades en alquiler",
        "Útil para mejoras exteriores, reparaciones visibles y trabajos prácticos",
        "Varias tareas exteriores pueden agruparse en una sola visita",
        "Resultado visual más limpio en vallas, puertas y accesorios exteriores",
        "Servicio práctico para trabajos exteriores visibles sin reforma completa",
        "Presupuesto claro antes de reservar con alcance definido",
      ]
    : [
        "Good for houses, villas, patios and rental properties",
        "Useful for outdoor refreshes, visible repairs and practical improvements",
        "Several exterior tasks can be grouped into one visit",
        "Cleaner visual result around fences, gates and outdoor fittings",
        "Practical service for visible exterior work without full renovation",
        "Clear estimate before booking with defined scope",
      ];

  const includedItems = isEs
    ? [
        "Reparación de vallas y correcciones visibles de límites exteriores",
        "Alineación de puertas exteriores y mejoras de acceso",
        "Instalación de accesorios exteriores y elementos de pared",
        "Buzones, carteles y montaje de número de casa",
        "Preparación de patio, terraza y almacenamiento exterior",
        "Instalación de luces exteriores y detalles prácticos",
        "Retoques visibles de fachada y correcciones exteriores accesibles",
        "Varias tareas exteriores en una sola visita",
      ]
    : [
        "Fence repair and visible boundary corrections",
        "Gate alignment and outdoor access improvements",
        "Exterior accessory and wall-mounted item installation",
        "Mailboxes, signs and house number mounting",
        "Patio, terrace and outdoor storage setup",
        "Outdoor light fitting and practical exterior details",
        "Visible facade touch-ups and accessible exterior correction work",
        "Multiple exterior and outdoor tasks in one visit",
      ];

  const faqItems = [
    {
      q: isEs
        ? "¿Qué tipo de trabajos exteriores incluye esta página?"
        : "What kind of exterior work is included on this page?",
      a: isEs
        ? "Esta página incluye trabajos exteriores prácticos como reparación de vallas, ajuste de puertas exteriores, montaje exterior, instalación de accesorios, ayuda con patios, retoques visibles de fachada y varias reparaciones pequeñas."
        : "This page covers practical exterior and outdoor work such as fence repair, gate adjustment, exterior mounting, outdoor accessory installation, patio setup help, visible facade touch-ups and grouped outdoor repair tasks.",
    },
    {
      q: isEs
        ? "¿Haces cambio completo de tejado o reforma grande de fachada?"
        : "Do you do full roof replacement or major facade renovation?",
      a: isEs
        ? "No. Esta página está enfocada en tareas exteriores accesibles y mejoras prácticas visibles, no en grandes obras de tejado o fachada."
        : "No. This page is mainly for accessible, practical exterior tasks and visible outdoor improvement work rather than large-scale roof or facade construction projects.",
    },
    {
      q: isEs
        ? "¿Se pueden hacer varias tareas exteriores en una sola visita?"
        : "Can several outdoor tasks be done in one visit?",
      a: isEs
        ? "Sí. Es una de las mejores formas de usar este servicio. Vallas, montajes exteriores, carteles, herrajes, luces y otras tareas pequeñas pueden agruparse en una cita."
        : "Yes. This is one of the best uses of this service. Fence corrections, outdoor mounting, signs, hardware, lights and other small exterior tasks can often be grouped into one organized appointment.",
    },
    {
      q: isEs
        ? "¿Sirve para patios y terrazas?"
        : "Is this service suitable for patios and terraces?",
      a: isEs
        ? "Sí. Preparación de patios y terrazas, instalación de accesorios y mejoras visibles exteriores encajan bien en esta página."
        : "Yes. Patio and terrace setup, small accessory fitting and visible exterior improvements are a good fit for this page.",
    },
    {
      q: isEs
        ? "¿Instalas accesorios exteriores y números de casa?"
        : "Do you install exterior accessories and house number signs?",
      a: isEs
        ? "Sí. La instalación de accesorios exteriores, buzones, carteles y números de casa está incluida cuando la superficie es adecuada."
        : "Yes. Exterior accessory installation, mailboxes, signs and house number mounting are included where the surface and setup are suitable.",
    },
    {
      q: isEs
        ? "¿Puedes mejorar el aspecto exterior sin hacer una reforma grande?"
        : "Can you help improve the look of the exterior without big renovation work?",
      a: isEs
        ? "Sí. Para eso está esta página: mejoras exteriores visibles, montaje limpio y pequeñas reparaciones agrupadas que hacen que la casa se vea más terminada."
        : "Yes. That is exactly what this page is for — practical visible exterior improvements, cleaner mounting and grouped small repairs that make the house look more finished.",
    },
    {
      q: isEs
        ? "¿Sirve para casas de alquiler o propiedades vacacionales?"
        : "Is this useful for rental houses or holiday properties?",
      a: isEs
        ? "Sí. Los trabajos exteriores son muy útiles para casas de alquiler, propiedades vacacionales y viviendas que necesitan verse más limpias y cuidadas."
        : "Yes. Exterior and outdoor work is especially useful for rental homes, holiday properties and houses that need to look cleaner, more presentable and better maintained.",
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
                        <strong>trabajos exteriores en Valencia</strong> para casas,
                        villas, patios y propiedades en alquiler. THEVULGO ayuda con
                        trabajos prácticos como reparación de vallas, ajuste de puertas
                        exteriores, instalación de accesorios, preparación de patios,
                        retoques visibles de fachada y pequeños arreglos agrupados.
                      </p>

                      <p>
                        Las zonas exteriores influyen mucho en la primera impresión de una
                        propiedad. Fijaciones sueltas, vallas desgastadas, carteles mal
                        colocados o detalles de patio sin terminar pueden hacer que toda la
                        casa parezca menos cuidada.
                      </p>

                      <p>
                        Esta página está pensada para mejoras exteriores prácticas: vallas,
                        puertas exteriores, detalles visibles de fachada, montaje exterior,
                        patios, terrazas, accesorios y varias tareas agrupadas.
                      </p>
                    </>
                  ) : (
                    <>
                      <p>
                        Professional{" "}
                        <strong>house exterior and outdoor work services in Valencia</strong>
                        for houses, villas, patios and rental properties. THEVULGO helps with
                        practical outdoor work such as fence repair, gate adjustment, exterior
                        accessory installation, patio setup, visible facade touch-ups and small
                        grouped outdoor fixes.
                      </p>

                      <p>
                        Exterior areas strongly affect the first impression of a property.
                        Loose fittings, worn fence sections, badly placed signs, unfinished patio
                        details or visible outdoor issues can make the whole house look less
                        maintained than it really is.
                      </p>

                      <p>
                        This page is designed for practical outdoor improvement work: fences,
                        gates, visible facade details, exterior mounting, patio and terrace
                        preparation, outdoor accessories and grouped exterior tasks.
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
                        Un buen trabajo exterior no consiste solo en arreglar algo suelto
                        o dañado. También mejora la presentación de la propiedad y hace que
                        las zonas exteriores se vean más completas y cuidadas.
                      </p>

                      <p>
                        THEVULGO trabaja principalmente en{" "}
                        <strong>Valencia y alrededores</strong>, ayudando a mejorar espacios
                        exteriores con reparaciones prácticas, mejor colocación de elementos
                        y acabados más organizados.
                      </p>

                      <p>
                        Antes de empezar, el cliente recibe un presupuesto transparente basado
                        en el número de tareas, condiciones de acceso, materiales y alcance total.
                        Cuando es posible, varias tareas exteriores se agrupan en una sola cita.
                      </p>
                    </>
                  ) : (
                    <>
                      <p>
                        Good exterior work is not only about fixing what is loose or damaged.
                        It is also about improving the visual presentation of the property,
                        making outdoor areas feel more complete and creating a cleaner result
                        around the home.
                      </p>

                      <p>
                        THEVULGO works mainly in{" "}
                        <strong>Valencia and nearby areas</strong>, helping clients improve
                        exterior spaces with practical repair work, better positioning of outdoor
                        elements and more organized finishing details.
                      </p>

                      <p>
                        Before work begins, clients receive a transparent estimate based on
                        the number of tasks, outdoor access conditions, materials and total scope.
                        When possible, several outdoor tasks can be grouped into one efficient
                        appointment.
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