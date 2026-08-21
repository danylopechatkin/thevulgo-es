import type { Metadata } from "next";

export const SITE_ORIGIN = "https://www.thevulgo.es";

export function absoluteUrl(path = "") {
  const normalizedPath = path ? `/${path.replace(/^\/+/, "")}` : "";
  return `${SITE_ORIGIN}${normalizedPath}`;
}

export const noindexMetadata: Metadata = {
  robots: { index: false, follow: false, nocache: true },
};
