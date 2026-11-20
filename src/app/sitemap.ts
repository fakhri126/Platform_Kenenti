import type { MetadataRoute } from "next";
import { FIVE_UNIVERSES } from "@/lib/kenenti-data";
import { BOUTIQUE_CATALOG } from "@/lib/boutique-catalog";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://kenenti.com";
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, lastModified, changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/services`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/boutique`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/panier`, lastModified, changeFrequency: "monthly", priority: 0.5 },
  ];

  const universeRoutes: MetadataRoute.Sitemap = FIVE_UNIVERSES.map((u) => ({
    url: `${baseUrl}/services/${u.slug}`,
    lastModified,
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  const productRoutes: MetadataRoute.Sitemap = BOUTIQUE_CATALOG.map((p) => ({
    url: `${baseUrl}/boutique/${p.id}`,
    lastModified,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...universeRoutes, ...productRoutes];
}
