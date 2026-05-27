import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.conceptrenovationprestige.com";
  const routes = [
    "",
    "/contact",
    "/politique-confidentialite",
    "/conditions-utilisation",
    "/politique-cookies",
    "/mentions-legales",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "monthly",
    priority: route === "" ? 1 : 0.5,
  }));
}
