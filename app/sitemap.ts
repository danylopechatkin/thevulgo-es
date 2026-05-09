import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.thevulgo.es";

  const locales = ["es", "en"];

  const services = [
    "tv-mounting",
    "furniture",
    "electrical",
    "plumbing",
    "drywall",
    "repairs",
    "doors",
    "smart-home",
    "kitchen",
    "bathroom",
    "move-in",
    "exterior",
  ];

  const pages: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    pages.push({
      url: `${baseUrl}/${locale}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: locale === "es" ? 1 : 0.9,
    });

    pages.push({
      url: `${baseUrl}/${locale}/services`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    });

    for (const service of services) {
      pages.push({
        url: `${baseUrl}/${locale}/services/${service}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.8,
      });
    }
  }

  return pages;
}