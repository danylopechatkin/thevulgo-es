export type AcSeoPage = {
  path: string;
  titleEs: string;
  titleEn: string;
  descriptionEs: string;
  descriptionEn: string;
  category: "service" | "issue" | "installation" | "ducted" | "brand" | "commercial" | "guide";
};

const make = (path: string, titleEs: string, titleEn: string, category: AcSeoPage["category"]): AcSeoPage => ({
  path, titleEs, titleEn, category,
  descriptionEs: `${titleEs}. Servicio técnico independiente en Valencia con diagnóstico claro, comunicación rápida y presupuesto antes de empezar.`,
  descriptionEn: `${titleEn}. Independent service in Valencia with clear diagnostics, fast communication and a quote before work begins.`,
});

export const AC_SEO_PAGES: AcSeoPage[] = [
  make("aire-acondicionado-valencia", "Aire acondicionado en Valencia", "Air conditioning in Valencia", "service"),
  make("aire-acondicionado-valencia/instalacion", "Instalación de aire acondicionado en Valencia", "Air conditioning installation in Valencia", "installation"),
  make("aire-acondicionado-valencia/reparacion", "Reparación de aire acondicionado en Valencia", "Air conditioning repair in Valencia", "issue"),
  make("aire-acondicionado-valencia/mantenimiento", "Mantenimiento de aire acondicionado en Valencia", "Air conditioning maintenance in Valencia", "service"),
  make("aire-acondicionado-valencia/limpieza", "Limpieza de aire acondicionado en Valencia", "Air conditioning cleaning in Valencia", "service"),
  make("aire-acondicionado-valencia/recarga-gas", "Recarga de gas de aire acondicionado en Valencia", "Air conditioning refrigerant recharge in Valencia", "service"),
  make("aire-acondicionado-valencia/urgente", "Reparación urgente de aire acondicionado en Valencia", "Emergency air conditioning repair in Valencia", "issue"),
  make("aire-acondicionado-valencia/conductos", "Aire acondicionado por conductos en Valencia", "Ducted air conditioning in Valencia", "ducted"),
  make("aire-acondicionado-valencia/comercial", "Aire acondicionado comercial en Valencia", "Commercial air conditioning in Valencia", "commercial"),
  ...[
    ["no-enfria", "Aire acondicionado no enfría en Valencia", "Air conditioner not cooling in Valencia"], ["pierde-agua", "Aire acondicionado pierde agua en Valencia", "Air conditioner leaking water in Valencia"], ["no-enciende", "Aire acondicionado no enciende en Valencia", "Air conditioner not turning on in Valencia"], ["hace-ruido", "Aire acondicionado hace ruido en Valencia", "Noisy air conditioner repair in Valencia"], ["huele-mal", "Aire acondicionado huele mal en Valencia", "Bad smell from air conditioner in Valencia"], ["se-apaga-solo", "Aire acondicionado se apaga solo", "Air conditioner switches off by itself"], ["no-calienta", "Aire acondicionado no calienta", "Air conditioner not heating in Valencia"], ["se-congela", "Aire acondicionado se congela o forma hielo", "Air conditioner freezing or forming ice"], ["codigo-error", "Códigos de error de aire acondicionado", "Air conditioning error codes"], ["fuga-refrigerante", "Fuga de refrigerante en aire acondicionado", "Air conditioner refrigerant leak"],
  ].map(([slug, es, en]) => make(`aire-acondicionado-valencia/reparacion/${slug}`, es, en, "issue")),
  ...[
    ["split", "Instalación de aire acondicionado Split 1x1 en Valencia", "Split 1x1 air conditioning installation in Valencia"], ["multisplit", "Instalación de aire acondicionado Multisplit en Valencia", "Multi-split air conditioning installation in Valencia"], ["cassette", "Instalación de aire acondicionado Cassette en Valencia", "Cassette air conditioning installation in Valencia"], ["suelo-techo", "Instalación de aire acondicionado suelo-techo en Valencia", "Floor-ceiling air conditioning installation in Valencia"], ["sustitucion", "Sustitución de aire acondicionado en Valencia", "Air conditioning replacement in Valencia"], ["preinstalacion", "Preinstalación de aire acondicionado en Valencia", "Air conditioning pre-installation in Valencia"], ["bomba-de-calor", "Instalación de bomba de calor en Valencia", "Heat pump installation in Valencia"],
  ].map(([slug, es, en]) => make(`aire-acondicionado-valencia/instalacion/${slug}`, es, en, "installation")),
  ...[
    ["instalacion", "Instalación de aire acondicionado por conductos en Valencia", "Ducted air conditioning installation in Valencia"], ["reparacion", "Reparación de aire acondicionado por conductos en Valencia", "Ducted air conditioning repair in Valencia"], ["mantenimiento", "Mantenimiento de aire acondicionado por conductos en Valencia", "Ducted air conditioning maintenance in Valencia"], ["limpieza", "Limpieza de aire acondicionado por conductos en Valencia", "Ducted air conditioning cleaning in Valencia"],
  ].map(([slug, es, en]) => make(`aire-acondicionado-valencia/conductos/${slug}`, es, en, "ducted")),
  ...[["daikin", "Daikin"], ["mitsubishi-electric", "Mitsubishi Electric"], ["fujitsu", "Fujitsu"], ["lg", "LG"], ["samsung", "Samsung"], ["panasonic", "Panasonic"], ["toshiba", "Toshiba"], ["haier", "Haier"], ["gree", "Gree"], ["hisense", "Hisense"]].map(([slug, brand]) => make(`aire-acondicionado-valencia/marcas/${slug}`, `Reparación de aire acondicionado ${brand} en Valencia`, `${brand} air conditioning repair in Valencia`, "brand")),
  ...[["restaurantes", "Aire acondicionado para restaurantes en Valencia", "Air conditioning for restaurants in Valencia"], ["oficinas", "Aire acondicionado para oficinas en Valencia", "Air conditioning for offices in Valencia"], ["locales-comerciales", "Aire acondicionado para locales comerciales y tiendas en Valencia", "Air conditioning for shops and commercial premises in Valencia"], ["airbnb", "Mantenimiento de aire acondicionado para Airbnb y apartamentos turísticos", "Air conditioning maintenance for Airbnb and tourist apartments"]].map(([slug, es, en]) => make(`aire-acondicionado-valencia/comercial/${slug}`, es, en, "commercial")),
  ...[
    ["calcular-frigorias-aire-acondicionado", "¿Qué potencia de aire acondicionado necesito? Calculadora de frigorías", "What air conditioning capacity do I need? BTU calculator"], ["split-vs-multisplit", "Aire acondicionado Split vs Multisplit: ¿cuál elegir?", "Split vs multi-split air conditioning: which should you choose?"], ["split-vs-conductos", "Aire acondicionado Split vs conductos: ¿cuál es mejor?", "Split vs ducted air conditioning: which is better?"], ["cada-cuanto-limpiar-aire-acondicionado", "¿Cada cuánto hay que limpiar el aire acondicionado?", "How often should air conditioning be cleaned?"], ["cuanto-consume-aire-acondicionado", "¿Cuánto consume un aire acondicionado?", "How much electricity does air conditioning use?"], ["temperatura-ideal-aire-acondicionado-verano", "Temperatura ideal del aire acondicionado en verano", "Ideal air conditioning temperature in summer"], ["r32-vs-r410a", "Gas R32 vs R410A: diferencias y refrigerante", "R32 vs R410A: refrigerant differences"], ["tipos-de-aire-acondicionado", "Tipos de aire acondicionado: Split, Multisplit, conductos y Cassette", "Types of air conditioning: split, multi-split, ducted and cassette"], ["cuanto-dura-aire-acondicionado", "¿Cuántos años dura un aire acondicionado? Reparar o sustituir", "How long does an air conditioner last? Repair or replace"],
  ].map(([slug, es, en]) => make(`blog/${slug}`, es, en, "guide")),
];

export function getAcSeoPage(path: string) { return AC_SEO_PAGES.find((page) => page.path === path); }
