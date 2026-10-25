import type { MetadataRoute } from "next";

const siteUrl = "https://saifullahconnects.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/contact", "/privacy"];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.7,
  }));
}
