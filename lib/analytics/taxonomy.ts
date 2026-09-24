export const SERVICE_CATEGORIES = [
  "tv", "handyman", "furniture", "kitchen", "walls_painting",
  "electrical", "plumbing", "ac", "doors", "airbnb_rental", "other",
] as const;
export type ServiceCategory = (typeof SERVICE_CATEGORIES)[number];

export type ServiceTaxonomy = { category: ServiceCategory; serviceId: string };

const rules: Array<[RegExp, ServiceTaxonomy]> = [
  [/aire-acondicionado.*limpieza|air-condition.*clean/i, { category: "ac", serviceId: "ac_deep_clean" }],
  [/montaje-tv-grande|large-tv-mount/i, { category: "tv", serviceId: "tv_large_mount" }],
  [/montaje-tv|colgar-tv|instalar-tv|tv-mount/i, { category: "tv", serviceId: "tv_standard_mount" }],
  [/cocina|kitchen/i, { category: "kitchen", serviceId: "kitchen_assembly" }],
  [/armario|wardrobe/i, { category: "furniture", serviceId: "furniture_wardrobe" }],
  [/ikea/i, { category: "furniture", serviceId: "furniture_ikea" }],
  [/mueble|furniture|estanter|shelf|escritorio|desk/i, { category: "furniture", serviceId: "furniture_assembly" }],
  [/pared|pladur|pintura|wall|drywall|paint/i, { category: "walls_painting", serviceId: "wall_repair" }],
  [/electric|enchufe|interruptor|lampara|luz/i, { category: "electrical", serviceId: "electrical_general" }],
  [/fontaner|plumb/i, { category: "plumbing", serviceId: "plumbing_general" }],
  [/puerta|door/i, { category: "doors", serviceId: "doors_general" }],
  [/airbnb|alquiler|rental/i, { category: "airbnb_rental", serviceId: "rental_handyman" }],
  [/handyman|manitas|reparacion|repair/i, { category: "handyman", serviceId: "handyman_general" }],
  [/aire-acondicionado|air-condition/i, { category: "ac", serviceId: "ac_general" }],
];

export function resolveServiceTaxonomy(path = "", hint = ""): ServiceTaxonomy {
  const input = `${path} ${hint}`;
  return rules.find(([pattern]) => pattern.test(input))?.[1] || { category: "other", serviceId: "other" };
}

export function localeFromPath(path: string): "es" | "en" | "unknown" {
  if (/^\/es(?:\/|$)/.test(path)) return "es";
  if (/^\/en(?:\/|$)/.test(path)) return "en";
  return "unknown";
}
