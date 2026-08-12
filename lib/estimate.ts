import { z } from "zod";
import {
  getCatalogServices,
  MINIMUM_SERVICE_VISIT_EUR,
} from "./serviceCatalog";
import { requiresTravelDeposit, travelDepositAmount } from "./coverage";

export const CATEGORY_MAP = {
  handyman: "Handyman",
  "tv-mounting": "TV Mounting",
  electrical: "Electrical",
  plumbing: "Plumbing",
  furniture: "Furniture Assembly",
  drywall: "Drywall",
  repairs: "Repairs",
  doors: "Doors & Hardware",
  "smart-home": "Smart Home",
  kitchen: "Kitchen",
  bathroom: "Bathroom",
  "move-in": "Move-In Setup",
  exterior: "Exterior",
} as const;

export type CategoryKey = keyof typeof CATEGORY_MAP;

export const categoryKeys = Object.keys(CATEGORY_MAP) as CategoryKey[];
export const appointmentTimes = Array.from(
  { length: 14 },
  (_, index) => `${String(index + 9).padStart(2, "0")}:00`,
) as [string, ...string[]];

const serviceSelectionSchema = z.object({
  id: z.string().min(1).max(100),
  qty: z.number().int().min(1).max(20),
});

export const estimateSubmissionSchema = z.object({
  idempotencyKey: z.string().uuid(),
  fullName: z.string().trim().min(2).max(120),
  email: z.union([z.string().trim().email().max(200), z.literal("")]),
  phone: z.string().trim().min(7).max(40),
  city: z.string().trim().min(2).max(100),
  area: z.string().trim().min(2).max(120),
  postalCode: z
    .string()
    .trim()
    .regex(
      /^\d{5}$/,
      "Invalid Spanish postal code",
    ),
  address: z.string().trim().min(3).max(240),
  apartment: z.string().trim().max(60).default(""),
  addressDetails: z.string().trim().max(500).default(""),
  preferredDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  preferredTime: z.enum(appointmentTimes),
  category: z.enum(categoryKeys as [CategoryKey, ...CategoryKey[]]),
  services: z.array(serviceSelectionSchema).min(1).max(40),
  notes: z.string().trim().max(2000).default(""),
  attributionSource: z.string().trim().min(1).max(100).optional(),
  attributionService: z.string().trim().max(160).optional(),
  attributionPagePath: z.string().trim().regex(/^\//).max(300).optional(),
  analyticsSessionId: z.string().uuid().optional(),
  utmSource: z.string().trim().max(120).optional(),
  utmMedium: z.string().trim().max(120).optional(),
  utmCampaign: z.string().trim().max(160).optional(),
  utmTerm: z.string().trim().max(160).optional(),
  utmContent: z.string().trim().max(160).optional(),
  landingPage: z.string().trim().regex(/^\//).max(300).optional(),
});

export type EstimateSubmission = z.infer<typeof estimateSubmissionSchema>;

export type CalculatedService = {
  id: string;
  label: string;
  price: number;
  qty: number;
  subtotal: number;
};

export type CalculatedQuote = {
  category: string;
  services: CalculatedService[];
  subtotal: number;
  tax: number;
  total: number;
  currency: "EUR";
  taxRate: number;
  minimumVisitApplied: boolean;
};

export class EstimateValidationError extends Error {}

export function getTaxRate() {
  const value = Number(process.env.SPAIN_TAX_RATE || "0");
  if (!Number.isFinite(value) || value < 0 || value > 1) {
    throw new Error("SPAIN_TAX_RATE must be a number between 0 and 1");
  }
  return value;
}

export function calculateQuote(
  categoryKey: CategoryKey,
  selections: Array<{ id: string; qty: number }>,
  taxRate = getTaxRate(),
): CalculatedQuote {
  const category = CATEGORY_MAP[categoryKey];
  if (!category) throw new EstimateValidationError("Invalid service category");
  if (!Array.isArray(selections) || selections.length === 0) {
    throw new EstimateValidationError("Select at least one service");
  }

  const catalog = getCatalogServices(category);
  const seen = new Set<string>();
  const services = selections.map((selection) => {
    if (
      !Number.isInteger(selection.qty) ||
      selection.qty < 1 ||
      selection.qty > 20
    ) {
      throw new EstimateValidationError("Invalid service quantity");
    }
    if (seen.has(selection.id))
      throw new EstimateValidationError("Duplicate service selection");
    seen.add(selection.id);
    const service = catalog.find((candidate) => candidate.id === selection.id);
    if (!service)
      throw new EstimateValidationError(`Invalid service ID: ${selection.id}`);
    return {
      id: service.id,
      label: service.label,
      price: service.price,
      qty: selection.qty,
      subtotal: service.price * selection.qty,
    };
  });

  const servicesSubtotal = services.reduce(
    (sum, service) => sum + service.subtotal,
    0,
  );
  const minimumVisitApplied = servicesSubtotal < MINIMUM_SERVICE_VISIT_EUR;
  const subtotal = Math.max(servicesSubtotal, MINIMUM_SERVICE_VISIT_EUR);
  const tax = Math.round(subtotal * taxRate * 100) / 100;
  return {
    category,
    services,
    subtotal,
    tax,
    total: subtotal + tax,
    currency: "EUR",
    taxRate,
    minimumVisitApplied,
  };
}

export function calculateTravelDeposit(total: number, city: string) {
  return {
    required: requiresTravelDeposit(city),
    amount: travelDepositAmount(total, city),
  };
}

export function assertNoCeilingFanCatalog() {
  const text = JSON.stringify({
    categories: CATEGORY_MAP,
    catalog: categoryKeys.flatMap((key) =>
      getCatalogServices(CATEGORY_MAP[key]),
    ),
  });
  if (/ceiling.?fans?|ventilador/i.test(text))
    throw new Error("Ceiling fan service found in Spanish catalog");
}
