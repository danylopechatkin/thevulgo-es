import type { OrderEmailData } from "./emails";
import type { CalculatedService } from "./estimate";

type OrderRow = Record<string, unknown>;

export function orderRowToEmailData(
  order: OrderRow,
  source: "estimate" | "manual" = "manual",
): OrderEmailData {
  const services: CalculatedService[] = Array.isArray(order.services)
    ? order.services
        .filter(
          (service): service is Record<string, unknown> =>
            Boolean(service) && typeof service === "object",
        )
        .map((service) => ({
          id: String(service.id || "manual-service"),
          label: String(service.label || "Service"),
          price: Number(service.price || 0),
          qty: Number(service.qty || 1),
          subtotal: Number(service.subtotal || 0),
        }))
        .filter(
          (service) =>
            Number.isFinite(service.subtotal) && service.subtotal >= 0,
        )
    : [];

  return {
    id: String(order.id),
    orderNumber: Number(order.order_number),
    fullName: String(order.full_name || "Customer"),
    email: String(order.email || ""),
    phone: String(order.phone || ""),
    city: String(order.city || "Valencia"),
    area: String(order.area || ""),
    address: [order.address, order.apartment]
      .filter(Boolean)
      .map(String)
      .join(", "),
    postalCode: String(order.postal_code || ""),
    scheduledAt: String(order.scheduled_at),
    notes: String(order.notes || ""),
    quote: {
      category: String(order.category || "Handyman service"),
      services,
      subtotal: Number(order.subtotal || 0),
      tax: Number(order.tax || 0),
      total: Number(order.total || 0),
      currency: "EUR",
      taxRate: Number(order.tax_rate || 0),
      minimumVisitApplied: false,
    },
    depositRequired: Boolean(order.deposit_required),
    depositAmount: Number(order.deposit_amount || 0),
    source,
  };
}
