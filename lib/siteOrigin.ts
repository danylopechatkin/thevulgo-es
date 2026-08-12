export function isAllowedSiteOrigin(origin: string | null) {
  if (!origin) return true;
  try {
    const url = new URL(origin);
    if (process.env.NODE_ENV !== "production" && ["localhost", "127.0.0.1"].includes(url.hostname)) {
      return true;
    }
    const configured = new URL(
      process.env.NEXT_PUBLIC_SITE_URL || "https://www.thevulgo.es",
    );
    const normalize = (host: string) => host.toLowerCase().replace(/^www\./, "");
    return url.protocol === "https:" && normalize(url.hostname) === normalize(configured.hostname);
  } catch {
    return false;
  }
}
