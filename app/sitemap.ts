import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site.data";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
