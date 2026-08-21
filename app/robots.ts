import { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin", "/admin/", "/admin-login", "/api/", "/worker", "/worker/", "/pay/"],
    },
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}
