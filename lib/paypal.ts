import "server-only";

type PayPalEnvironment = "sandbox" | "live";

function paypalConfig() {
  const clientId = process.env.PAYPAL_CLIENT_ID;
  const clientSecret = process.env.PAYPAL_CLIENT_SECRET;
  const environment = (process.env.PAYPAL_ENVIRONMENT || "sandbox") as PayPalEnvironment;
  if (!clientId || !clientSecret) throw new Error("PayPal server configuration is missing");
  if (!["sandbox", "live"].includes(environment))
    throw new Error("PAYPAL_ENVIRONMENT must be sandbox or live");
  return {
    clientId,
    clientSecret,
    environment,
    baseUrl: environment === "live" ? "https://api-m.paypal.com" : "https://api-m.sandbox.paypal.com",
  };
}

async function accessToken() {
  const config = paypalConfig();
  const response = await fetch(`${config.baseUrl}/v1/oauth2/token`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${Buffer.from(`${config.clientId}:${config.clientSecret}`).toString("base64")}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials",
    cache: "no-store",
  });
  const body = await response.json();
  if (!response.ok || !body.access_token) throw new Error(`PayPal authentication failed: ${body.error_description || body.error || response.status}`);
  return { token: String(body.access_token), config };
}

async function paypalFetch(path: string, init: RequestInit) {
  const { token, config } = await accessToken();
  const response = await fetch(`${config.baseUrl}${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      ...(init.headers || {}),
    },
    cache: "no-store",
  });
  const body = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(`PayPal API error: ${body.message || body.name || response.status}`);
  return body;
}

export async function createPayPalOrder(input: {
  amount: number;
  currency: "EUR";
  requestId: string;
  paymentRequestId: string;
  orderLabel: string;
  description: string;
  returnUrl: string;
  cancelUrl: string;
}) {
  const body = await paypalFetch("/v2/checkout/orders", {
    method: "POST",
    headers: { "PayPal-Request-Id": input.requestId },
    body: JSON.stringify({
      intent: "CAPTURE",
      payment_source: {
        paypal: {
          experience_context: {
            brand_name: "THEVULGO",
            locale: "en-IE",
            landing_page: "GUEST_CHECKOUT",
            shipping_preference: "NO_SHIPPING",
            user_action: "PAY_NOW",
            return_url: input.returnUrl,
            cancel_url: input.cancelUrl,
          },
        },
      },
      purchase_units: [
        {
          reference_id: input.paymentRequestId,
          custom_id: input.paymentRequestId,
          invoice_id: `${input.orderLabel}-${input.paymentRequestId.slice(0, 8)}`,
          description: input.description.slice(0, 127),
          amount: { currency_code: input.currency, value: input.amount.toFixed(2) },
        },
      ],
    }),
  });
  const approvalUrl = body.links?.find((link: { rel?: string }) => ["payer-action", "approve"].includes(link.rel || ""))?.href;
  if (!body.id || !approvalUrl) throw new Error("PayPal did not return an approval link");
  return { id: String(body.id), status: String(body.status || "CREATED"), approvalUrl: String(approvalUrl) };
}

export async function capturePayPalOrder(paypalOrderId: string, requestId: string) {
  return paypalFetch(`/v2/checkout/orders/${encodeURIComponent(paypalOrderId)}/capture`, {
    method: "POST",
    headers: { "PayPal-Request-Id": requestId },
    body: "{}",
  });
}

type PayPalCapture = {
  id?: string;
  status?: string;
  amount?: { value?: string; currency_code?: string };
};

type PayPalOrder = {
  purchase_units?: Array<{
    payments?: { captures?: PayPalCapture[] };
  }>;
};

export function extractCapture(order: PayPalOrder) {
  const capture = order?.purchase_units?.flatMap(
    (unit) => unit?.payments?.captures || [],
  )[0];
  return capture
    ? {
        id: String(capture.id || ""),
        status: String(capture.status || ""),
        amount: Number(capture.amount?.value || 0),
        currency: String(capture.amount?.currency_code || ""),
      }
    : null;
}

export async function verifyPayPalWebhook(headers: Headers, webhookEvent: unknown) {
  const webhookId = process.env.PAYPAL_WEBHOOK_ID;
  if (!webhookId) throw new Error("PAYPAL_WEBHOOK_ID is missing");
  const required = {
    auth_algo: headers.get("paypal-auth-algo"),
    cert_url: headers.get("paypal-cert-url"),
    transmission_id: headers.get("paypal-transmission-id"),
    transmission_sig: headers.get("paypal-transmission-sig"),
    transmission_time: headers.get("paypal-transmission-time"),
  };
  if (Object.values(required).some((value) => !value)) return false;
  const result = await paypalFetch("/v1/notifications/verify-webhook-signature", {
    method: "POST",
    body: JSON.stringify({ ...required, webhook_id: webhookId, webhook_event: webhookEvent }),
  });
  return result.verification_status === "SUCCESS";
}
