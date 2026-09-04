import type { MetadataRoute } from "next";
import { sitemapPaths, siteUrl } from "@/data/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return sitemapPaths.map((item) => ({
    url: item.path === "/" ? siteUrl : `${siteUrl}${item.path}`,
    lastModified: new Date(),
    changeFrequency: item.changeFrequency,
    priority: item.priority,
  }));
}
