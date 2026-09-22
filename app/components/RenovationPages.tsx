import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Calculator,
  Check,
  ChevronRight,
  CircleAlert,
  ClipboardList,
  Euro,
  Hammer,
  Home,
  MessageCircle,
  Ruler,
  ShieldCheck,
} from "lucide-react";
import {
  formatRenovationPrice,
  localeKey,
  PROJECT_SCOPE_NOTE,
  RENOVATION_CATEGORIES,
  renovationHubPath,
  type RenovationCategory,
  type RenovationService,
} from "@/lib/renovationCatalog";

const phone = "34610076942";

function whatsapp(locale: string, subject: string) {
  const location = subject.toLocaleLowerCase().includes("valencia")
    ? ""
    : " en Valencia";
  const text =
    locale === "es"
      ? `Hola, necesito información sobre ${subject}${location}. Puedo enviar fotos y medidas.`
      : `Hi, I need information about ${subject}${location ? " in Valencia" : ""}. I can send photos and measurements.`;
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}

function EstimateCtas({
  locale,
  category,
  service,
}: {
  locale: string;
  category: RenovationCategory;
  service?: RenovationService;
}) {
  const key = localeKey(locale);
  const params = new URLSearchParams({ category: category.id });
  if (service) params.set("service", service.id);
  const subject = service?.title[key] ?? category.title[key];
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <Link
        href={`/${locale}/estimate?${params}`}
        className="inline-flex items-center justify-center gap-2 rounded-2xl bg-yellow-400 px-6 py-3.5 font-black text-black shadow-sm transition hover:bg-yellow-300"
      >
        <Calculator className="h-5 w-5" />
        {key === "es"
          ? "Calcular precio / Pedir presupuesto"
          : "Calculate price / Request a quote"}
      </Link>
      <a
        href={whatsapp(locale, subject)}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center justify-center gap-2 rounded-2xl border border-neutral-300 bg-white px-6 py-3.5 font-black text-black transition hover:border-neutral-500"
      >
        <MessageCircle className="h-5 w-5" />
        WhatsApp
      </a>
    </div>
  );
}

function Breadcrumbs({
  locale,
  category,
  service,
}: {
  locale: string;
  category?: RenovationCategory;
  service?: RenovationService;
}) {
  const key = localeKey(locale);
  const hub = renovationHubPath(locale);
  const items = [
    { label: key === "es" ? "Inicio" : "Home", href: `/${locale}` },
    { label: key === "es" ? "Reformas" : "Renovations", href: hub },
    ...(category
      ? [
          {
            label: category.shortTitle[key],
            href: `${hub}/${category.slug[key]}`,
          },
        ]
      : []),
    ...(service
      ? [
          {
            label: service.title[key],
            href: `${hub}/${category!.slug[key]}/${service.slug[key]}`,
          },
        ]
      : []),
  ];
  return (
    <nav
      aria-label={key === "es" ? "Migas de pan" : "Breadcrumbs"}
      className="flex flex-wrap items-center gap-1.5 text-sm font-semibold text-neutral-600"
    >
      {items.map((item, index) => (
        <span key={item.href} className="inline-flex items-center gap-1.5">
          {index > 0 && <ChevronRight className="h-3.5 w-3.5" />}
          <Link
            href={item.href}
            aria-current={index === items.length - 1 ? "page" : undefined}
            className="hover:text-black"
          >
            {item.label}
          </Link>
        </span>
      ))}
    </nav>
  );
}

export function RenovationHub({ locale }: { locale: string }) {
  const key = localeKey(locale);
  const hub = renovationHubPath(locale);
  return (
    <main className="bg-[#fffdf5] text-neutral-950">
      <section className="border-b border-yellow-100 bg-[radial-gradient(circle_at_top_right,#fde68a,transparent_35%),linear-gradient(#fff,#fffdf5)]">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-16">
          <Breadcrumbs locale={locale} />
          <div className="mt-8 max-w-4xl">
            <span className="inline-flex rounded-full border border-yellow-300 bg-yellow-100 px-3 py-1 text-xs font-black uppercase tracking-[.16em]">
              {key === "es"
                ? "Valencia · Reparación · Reforma"
                : "Valencia · Repair · Renovation"}
            </span>
            <h1 className="mt-5 text-4xl font-black tracking-tight sm:text-6xl">
              {key === "es"
                ? "Reformas y reparaciones en Valencia"
                : "Renovations and repairs in Valencia"}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-700">
              {key === "es"
                ? "Resolvemos tanto un grifo, una pared o una luminaria como baños, cocinas, terrazas y reformas completas. Un único catálogo conecta alcance, precio orientativo y solicitud de presupuesto."
                : "We handle a tap, wall or light fitting as well as bathrooms, kitchens, terraces and complete renovations. One catalogue connects scope, indicative pricing and quotation requests."}
            </p>
            <div className="mt-8">
              <EstimateCtas
                locale={locale}
                category={RENOVATION_CATEGORIES[0]}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {RENOVATION_CATEGORIES.map((category) => (
            <Link
              key={category.id}
              href={`${hub}/${category.slug[key]}`}
              className="group rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-yellow-400 hover:shadow-lg"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-yellow-100">
                  <Hammer className="h-5 w-5" />
                </div>
                <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
              </div>
              <h2 className="mt-5 text-xl font-black">
                {category.shortTitle[key]}
              </h2>
              <p className="mt-3 leading-7 text-neutral-600">
                {category.intro[key]}
              </p>
              <p className="mt-5 text-sm font-black text-neutral-900">
                {category.services.length}{" "}
                {key === "es" ? "servicios principales" : "core services"}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-neutral-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-black">
              {key === "es"
                ? "Dos formas claras de presupuestar"
                : "Two clear ways to price work"}
            </h2>
            <p className="mt-4 leading-7 text-neutral-600">
              {key === "es"
                ? "Las tareas predecibles muestran precio por unidad, hora, metro o m². Los proyectos con demoliciones, instalaciones ocultas o varios oficios pasan por fotos, medidas y visita cuando sea necesaria."
                : "Predictable tasks show unit, hourly, linear-metre or square-metre pricing. Projects involving strip-out, concealed services or several trades use photos, measurements and a site visit when needed."}
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-3xl bg-yellow-100 p-6">
              <Ruler className="h-6 w-6" />
              <h3 className="mt-4 font-black">
                {key === "es" ? "Servicio medible" : "Measurable service"}
              </h3>
              <p className="mt-2 text-sm leading-6">
                {key === "es"
                  ? "Alcance definido y cálculo coherente con el catálogo."
                  : "Defined scope and a calculation consistent with the catalogue."}
              </p>
            </div>
            <div className="rounded-3xl bg-neutral-950 p-6 text-white">
              <ShieldCheck className="h-6 w-6 text-yellow-400" />
              <h3 className="mt-4 font-black">
                {key === "es" ? "Proyecto a medida" : "Tailored project"}
              </h3>
              <p className="mt-2 text-sm leading-6 text-neutral-300">
                {PROJECT_SCOPE_NOTE[key]}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export function RenovationCategoryPage({
  locale,
  category,
}: {
  locale: string;
  category: RenovationCategory;
}) {
  const key = localeKey(locale);
  const hub = renovationHubPath(locale);
  const faqs =
    key === "es"
      ? [
          [
            "¿Cómo se prepara el presupuesto?",
            "Usamos fotos, medidas y el estado actual. Las tareas definidas conservan su modelo de precio; los proyectos complejos se valoran por alcance.",
          ],
          [
            "¿Se pueden combinar varios trabajos?",
            "Sí. Agrupar trabajos compatibles evita visitas repetidas y permite coordinar oficios y acabados.",
          ],
          [
            "¿Qué ocurre si aparece un problema oculto?",
            "Se documenta, se explica su efecto y se confirma cualquier cambio antes de ampliar el alcance.",
          ],
        ]
      : [
          [
            "How is the quotation prepared?",
            "We use photos, dimensions and the current condition. Defined tasks keep their pricing model; complex projects are scoped individually.",
          ],
          [
            "Can several jobs be combined?",
            "Yes. Combining compatible work avoids repeat visits and helps coordinate trades and finishes.",
          ],
          [
            "What if a concealed problem is found?",
            "It is documented, its impact is explained and any scope change is agreed before extra work begins.",
          ],
        ];
  const planning =
    key === "es"
      ? [
          [
            "Fotos generales y de detalle",
            "Incluye la estancia completa, el problema y los encuentros con paredes, suelo o instalaciones.",
          ],
          [
            "Medidas aproximadas",
            "Ancho, alto, superficie o unidades ayudan a preparar una primera valoración útil.",
          ],
          [
            "Prioridades y acabado",
            "Indica qué debe resolverse primero y el resultado visual o funcional esperado.",
          ],
          [
            "Acceso a la vivienda",
            "Ascensor, aparcamiento, horarios de comunidad y retirada de residuos pueden afectar la planificación.",
          ],
        ]
      : [
          [
            "Overview and detail photos",
            "Include the whole room, the issue and junctions with walls, floors or services.",
          ],
          [
            "Approximate dimensions",
            "Width, height, area or quantities help us prepare a useful first assessment.",
          ],
          [
            "Priorities and finish",
            "Explain what matters first and the visual or functional result you expect.",
          ],
          [
            "Property access",
            "Lift access, parking, building hours and waste removal may affect planning.",
          ],
        ];
  return (
    <main className="bg-[#fffdf5] text-neutral-950">
      <section className="border-b border-yellow-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-16">
          <Breadcrumbs locale={locale} category={category} />
          <div className="mt-8 max-w-4xl">
            <h1 className="text-4xl font-black tracking-tight sm:text-5xl">
              {category.title[key]}
            </h1>
            <p className="mt-5 text-lg leading-8 text-neutral-700">
              {category.intro[key]}
            </p>
            <div className="mt-8">
              <EstimateCtas locale={locale} category={category} />
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <h2 className="text-3xl font-black">
          {key === "es" ? "Servicios" : "Services"}
        </h2>
        <div className="mt-7 grid gap-4 md:grid-cols-2">
          {category.services.map((item) => (
            <Link
              key={item.id}
              href={
                item.existingPath
                  ? `/${locale}/${item.existingPath}`
                  : `${hub}/${category.slug[key]}/${item.slug[key]}`
              }
              className="group rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:border-yellow-400"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-black">{item.title[key]}</h3>
                  <p className="mt-2 leading-7 text-neutral-600">
                    {item.summary[key]}.
                  </p>
                </div>
                <ArrowRight className="h-5 w-5 shrink-0 transition group-hover:translate-x-1" />
              </div>
              <p className="mt-5 inline-flex rounded-full bg-yellow-100 px-3 py-1.5 text-sm font-black">
                {formatRenovationPrice(item, locale)}
              </p>
            </Link>
          ))}
        </div>
      </section>
      <section className="border-y border-neutral-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-black">
              {key === "es" ? "¿Reparar o renovar?" : "Repair or renew?"}
            </h2>
            <p className="mt-4 leading-7 text-neutral-600">
              {category.comparison[key]}
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-black">
              {key === "es" ? "Cómo trabajamos" : "How we work"}
            </h2>
            <ol className="mt-4 space-y-3">
              {(key === "es"
                ? [
                    "Solicitud con fotos y medidas",
                    "Confirmación del alcance",
                    "Ejecución coordinada",
                    "Comprobación y cierre",
                  ]
                : [
                    "Request with photos and dimensions",
                    "Scope confirmation",
                    "Coordinated execution",
                    "Final check and handover",
                  ]
              ).map((label, i) => (
                <li key={label} className="flex items-center gap-3">
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-yellow-400 text-sm font-black">
                    {i + 1}
                  </span>
                  {label}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr]">
          <div>
            <ClipboardList className="h-8 w-8" />
            <h2 className="mt-4 text-3xl font-black">
              {key === "es"
                ? "Qué enviar para valorar el proyecto"
                : "What to send for a useful assessment"}
            </h2>
            <p className="mt-4 leading-7 text-neutral-600">
              {key === "es"
                ? `Para trabajos de ${category.shortTitle.es.toLocaleLowerCase()} en Valencia, una solicitud completa reduce dudas y permite decidir si basta con fotos o conviene una visita técnica.`
                : `For ${category.shortTitle.en.toLocaleLowerCase()} work in Valencia, a complete request reduces uncertainty and shows whether photos are enough or a site visit is needed.`}
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {planning.map(([title, text]) => (
              <article
                key={title}
                className="rounded-2xl border border-neutral-200 bg-white p-5"
              >
                <h3 className="font-black">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-neutral-600">
                  {text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-neutral-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-3">
          <div>
            <Euro className="text-yellow-400" />
            <h2 className="mt-4 text-2xl font-black">
              {key === "es"
                ? "Qué cambia el presupuesto"
                : "What changes the quotation"}
            </h2>
          </div>
          <div className="lg:col-span-2 grid gap-3 sm:grid-cols-2">
            {(key === "es"
              ? [
                  "Estado del soporte y trabajos previos",
                  "Medidas, cantidades y complejidad",
                  "Materiales y nivel de acabado",
                  "Acceso, protección y retirada",
                ]
              : [
                  "Existing condition and preparation",
                  "Dimensions, quantities and complexity",
                  "Materials and finish level",
                  "Access, protection and removal",
                ]
            ).map((item) => (
              <div
                key={item}
                className="rounded-xl border border-white/15 bg-white/5 p-4 font-bold"
              >
                <Check className="mr-2 inline h-4 w-4 text-yellow-400" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="rounded-3xl border border-yellow-200 bg-yellow-50 p-7 sm:p-10">
          <Building2 />
          <h2 className="mt-4 text-3xl font-black">
            {key === "es"
              ? `${category.shortTitle.es} en Valencia y alrededores`
              : `${category.shortTitle.en} across Valencia and nearby areas`}
          </h2>
          <p className="mt-4 max-w-4xl leading-7 text-neutral-700">
            {key === "es"
              ? "Atendemos viviendas y pequeños locales en Valencia y municipios próximos según alcance, acceso y disponibilidad. Para proyectos fuera de la ciudad, confirma la ubicación al enviar fotos para calcular desplazamiento y planificación."
              : "We cover homes and small premises in Valencia and nearby municipalities depending on scope, access and availability. For projects outside the city, include the location with your photos so travel and planning can be confirmed."}
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
        <h2 className="text-3xl font-black">FAQ</h2>
        <div className="mt-6 space-y-3">
          {faqs.map(([q, a]) => (
            <details
              key={q}
              className="rounded-2xl border border-neutral-200 bg-white p-5"
            >
              <summary className="cursor-pointer font-black">{q}</summary>
              <p className="mt-3 leading-7 text-neutral-600">{a}</p>
            </details>
          ))}
        </div>
        <div className="mt-10">
          <EstimateCtas locale={locale} category={category} />
        </div>
      </section>
    </main>
  );
}

export function RenovationServicePage({
  locale,
  category,
  service,
}: {
  locale: string;
  category: RenovationCategory;
  service: RenovationService;
}) {
  const key = localeKey(locale);
  const hub = renovationHubPath(locale);
  const related = category.services
    .filter((item) => item.id !== service.id)
    .slice(0, 3);
  const faqs =
    key === "es"
      ? [
          [
            "¿Qué información necesitáis para valorar el trabajo?",
            `Fotos generales y de detalle, medidas aproximadas, acceso y una breve explicación de lo que ocurre. ${service.requiresSiteVisit ? "Este servicio suele requerir una visita antes del presupuesto final." : "Con esa información normalmente podemos definir el siguiente paso."}`,
          ],
          [
            "¿Los materiales están incluidos?",
            "El presupuesto especifica mano de obra, consumibles y piezas principales por separado cuando dependen de la elección del cliente.",
          ],
          [
            "¿Podéis coordinar trabajos relacionados?",
            `Sí. ${category.comparison.es}`,
          ],
        ]
      : [
          [
            "What information do you need?",
            `Overall and detail photos, approximate dimensions, access information and a short explanation. ${service.requiresSiteVisit ? "This service usually needs a site visit before the final quotation." : "That is usually enough to define the next step."}`,
          ],
          [
            "Are materials included?",
            "The quotation identifies labour, consumables and main products separately where the client's selection affects cost.",
          ],
          [
            "Can you coordinate related work?",
            `Yes. ${category.comparison.en}`,
          ],
        ];
  const costFactors =
    key === "es"
      ? [
          "Medidas y cantidad de trabajo",
          "Estado del soporte o instalación existente",
          "Materiales y acabado seleccionados",
          "Acceso, protección y gestión de residuos",
        ]
      : [
          "Dimensions and quantity of work",
          "Condition of the existing substrate or service",
          "Selected materials and finish",
          "Access, protection and waste handling",
        ];
  return (
    <main className="bg-[#fffdf5] text-neutral-950">
      <section className="border-b border-yellow-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-16">
          <Breadcrumbs locale={locale} category={category} service={service} />
          <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_360px]">
            <div>
              <span className="text-sm font-black uppercase tracking-[.14em] text-yellow-600">
                Valencia · {category.shortTitle[key]}
              </span>
              <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
                {service.title[key]}{" "}
                {key === "es" ? "en Valencia" : "in Valencia"}
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-neutral-700">
                {service.problem[key]}
              </p>
              <div className="mt-8">
                <EstimateCtas
                  locale={locale}
                  category={category}
                  service={service}
                />
              </div>
            </div>
            <aside className="rounded-3xl border border-yellow-200 bg-yellow-50 p-6">
              <p className="text-sm font-black uppercase tracking-[.14em]">
                {key === "es" ? "Modelo de precio" : "Pricing model"}
              </p>
              <p className="mt-3 text-2xl font-black">
                {formatRenovationPrice(service, locale)}
              </p>
              <p className="mt-4 text-sm leading-6 text-neutral-600">
                {service.priceModel === "quote" || service.priceCents == null
                  ? PROJECT_SCOPE_NOTE[key]
                  : key === "es"
                    ? "El alcance exacto y los materiales se confirman antes de empezar."
                    : "Exact scope and materials are confirmed before work begins."}
              </p>
            </aside>
          </div>
        </div>
      </section>
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-black">
            {key === "es" ? "Qué incluye" : "What is included"}
          </h2>
          <ul className="mt-6 space-y-4">
            {service.scope.map((scope) => (
              <li key={scope[key]} className="flex gap-3 leading-7">
                <Check className="mt-1 h-5 w-5 shrink-0 text-yellow-600" />
                {scope[key]}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl border border-neutral-200 bg-white p-7">
          <h2 className="text-2xl font-black">
            {key === "es" ? "Antes de intervenir" : "Before work starts"}
          </h2>
          <p className="mt-4 leading-7 text-neutral-600">
            {key === "es"
              ? "Confirmamos medidas, soporte, accesibilidad, estado de las instalaciones y acabado esperado. Daños ocultos, permisos, medios auxiliares especiales y materiales elegidos se documentan antes de ampliar el alcance."
              : "We confirm dimensions, substrate, access, service condition and expected finish. Concealed damage, permits, specialist access and selected materials are documented before the scope expands."}
          </p>
          {service.legalNote && (
            <div className="mt-5 flex gap-3 rounded-2xl bg-amber-50 p-4 text-sm leading-6">
              <CircleAlert className="h-5 w-5 shrink-0 text-amber-700" />
              {service.legalNote[key]}
            </div>
          )}
        </div>
      </section>
      <section className="border-y border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
          <h2 className="text-3xl font-black">
            {key === "es" ? "Proceso" : "Process"}
          </h2>
          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {(key === "es"
              ? [
                  "Envía detalles",
                  "Revisamos alcance",
                  "Realizamos el trabajo",
                  "Comprobación final",
                ]
              : [
                  "Send details",
                  "We review scope",
                  "Work is completed",
                  "Final check",
                ]
            ).map((label, i) => (
              <div key={label} className="rounded-2xl bg-[#fffdf5] p-5">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-yellow-400 font-black">
                  {i + 1}
                </span>
                <p className="mt-4 font-black">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-black">
              {key === "es"
                ? `Cuándo conviene ${service.title.es.toLocaleLowerCase()}`
                : `When ${service.title.en.toLocaleLowerCase()} is the right choice`}
            </h2>
            <p className="mt-4 leading-7 text-neutral-600">
              {service.summary[key]}.{" "}
              {key === "es"
                ? "Antes de recomendar una intervención comprobamos si el soporte y los elementos existentes permiten una solución duradera. Si una reparación sería temporal, explicamos la alternativa antes de presupuestar."
                : "Before recommending work, we check whether the substrate and existing elements allow a durable solution. If a repair would only be temporary, we explain the alternative before quoting."}
            </p>
          </div>
          <div className="rounded-3xl bg-neutral-950 p-7 text-white">
            <h2 className="text-2xl font-black">
              {key === "es" ? "Factores de coste" : "Cost factors"}
            </h2>
            <ul className="mt-5 space-y-3">
              {costFactors.map((item) => (
                <li key={item} className="flex gap-3 text-neutral-300">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-yellow-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_360px]">
        <div>
          <h2 className="text-3xl font-black">FAQ</h2>
          <div className="mt-6 space-y-3">
            {faqs.map(([q, a]) => (
              <details
                key={q}
                className="rounded-2xl border border-neutral-200 bg-white p-5"
              >
                <summary className="cursor-pointer font-black">{q}</summary>
                <p className="mt-3 leading-7 text-neutral-600">{a}</p>
              </details>
            ))}
          </div>
        </div>
        <aside>
          <h2 className="text-2xl font-black">
            {key === "es" ? "Servicios relacionados" : "Related services"}
          </h2>
          <div className="mt-5 space-y-3">
            {related.map((item) => (
              <Link
                key={item.id}
                href={
                  item.existingPath
                    ? `/${locale}/${item.existingPath}`
                    : `${hub}/${category.slug[key]}/${item.slug[key]}`
                }
                className="flex items-center justify-between rounded-2xl border border-neutral-200 bg-white p-4 font-bold hover:border-yellow-400"
              >
                {item.title[key]}
                <ArrowRight className="h-4 w-4" />
              </Link>
            ))}
          </div>
          <Link
            href={`${hub}/${category.slug[key]}`}
            className="mt-4 inline-flex items-center gap-2 font-black"
          >
            <Home className="h-4 w-4" />
            {category.title[key]}
          </Link>
        </aside>
      </section>
    </main>
  );
}
