import assert from "node:assert/strict";
import test from "node:test";

import {
  renderCompletedOrderEmail,
  renderCustomerOrderConfirmation,
} from "../lib/emails";

const spanishOrder = {
  id: "test-order",
  orderNumber: 10001,
  fullName: "Prueba Madrid",
  email: "test@example.com",
  phone: "+34600000123",
  city: "Madrid",
  area: "Centro",
  address: "Calle de Alcalá 100",
  postalCode: "",
  scheduledAt: "2026-08-15T10:00:00.000Z",
  notes: "Pedido de prueba",
  quote: {
    category: "Instalación de TV",
    services: [
      {
        id: "tv",
        label: "Instalación de TV hasta 65”",
        price: 49,
        qty: 1,
        subtotal: 49,
      },
    ],
    subtotal: 49,
    tax: 0,
    total: 49,
    currency: "EUR" as const,
    taxRate: 0,
    minimumVisitApplied: false,
  },
  source: "manual" as const,
  locale: "es",
};

test("Spanish CRM confirmation uses Spanish copy and a real Madrid timestamp", () => {
  const rendered = renderCustomerOrderConfirmation(
    spanishOrder,
    "info@thevulgo.es",
  );

  assert.match(rendered.subject, /Confirmación de reserva THEVULGO/);
  assert.match(rendered.html, /Tu solicitud de servicio está confirmada/);
  assert.match(rendered.html, /15 ago 2026, 12:00/);
  assert.doesNotMatch(rendered.html, /\[object Object\]/);
  assert.match(rendered.html, /Responder sobre este pedido/);
});

test("Spanish completed email is localized and uses a real Madrid timestamp", () => {
  const rendered = renderCompletedOrderEmail(
    {
      ...spanishOrder,
      referralCode: "MADRID10-10001",
      referralLink:
        "https://www.thevulgo.es/es/estimate?ref=MADRID10-10001&market=madrid",
    },
    "info@thevulgo.es",
  );

  assert.match(rendered.subject, /Tu servicio THEVULGO está completado/);
  assert.match(rendered.html, /Tu servicio está completado/);
  assert.match(rendered.html, /15 ago 2026, 12:00/);
  assert.doesNotMatch(rendered.html, /\[object Object\]/);
  assert.match(rendered.html, /TVG-ES-10001/);
  assert.match(rendered.html, /Responder sobre este servicio/);
  assert.match(rendered.html, /MADRID10-10001/);
  assert.match(rendered.html, /10%/);
});
