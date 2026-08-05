import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin", "/admin/", "/admin-login", "/api/admin/"],
    },
    sitemap: "https://www.thevulgo.es/sitemap.xml",
  };
}
