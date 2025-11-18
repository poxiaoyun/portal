import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.poxiaoshi.com";
  const pages = ["", "/products", "/solutions", "/about", "/contact", "/blog", "/blog/cloud-native-observability", "/blog/ai-platform-landing"];
  return pages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7
  }));
}

