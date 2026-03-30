import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.shortName,
    description: siteConfig.defaultDescription,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0a7cff",
    lang: siteConfig.language,
    icons: [
      {
        src: siteConfig.ogImage,
        sizes: "1200x630",
        type: "image/png"
      }
    ]
  };
}
