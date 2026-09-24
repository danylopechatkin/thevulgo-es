export function contactReference(serviceId: string, clickId: string) {
  const prefix = serviceId.startsWith("tv_") ? "TV" : serviceId.startsWith("ac_") ? "AC" : "TVG";
  return `${prefix}-${clickId.replaceAll("-", "").slice(0, 6).toUpperCase()}`;
}

export function appendWhatsAppReference(href: string, reference: string) {
  try {
    const url = new URL(href);
    const text = url.searchParams.get("text") || "";
    if (!/\bRef:\s*[A-Z0-9-]+/i.test(text)) url.searchParams.set("text", `${text}${text ? "\n\n" : ""}Ref: ${reference}`);
    return url.toString();
  } catch { return href; }
}

export function createWhatsAppIdentity(serviceId: string, uuid: () => string = () => crypto.randomUUID()) {
  const clickId = uuid();
  return { clickId, eventId: clickId, contactReference: contactReference(serviceId, clickId) };
}
