import type { Metadata } from "next";
import { absoluteUrl, siteConfig } from "@/lib/site";

type PageMetadataInput = {
  title?: string;
  description: string;
  path?: string;
  keywords?: string[];
  images?: string[];
  type?: "website" | "article";
};

export function buildPageMetadata({
  title,
  description,
  path = "/",
  keywords = [],
  images = [siteConfig.ogImage],
  type = "website"
}: PageMetadataInput): Metadata {
  const url = absoluteUrl(path);
  const fullTitle = title ? `${title} | ${siteConfig.shortName}` : siteConfig.title;

  return {
    title,
    description,
    keywords: [...siteConfig.defaultKeywords, ...keywords],
    alternates: {
      canonical: url
    },
    openGraph: {
      title: fullTitle,
      description,
      type,
      url,
      siteName: siteConfig.shortName,
      locale: siteConfig.locale,
      images: images.map((image) => ({ url: image }))
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images
    }
  };
}

export function getOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    url: siteConfig.url,
    logo: absoluteUrl(siteConfig.ogImage),
    image: absoluteUrl(siteConfig.ogImage),
    description: siteConfig.defaultDescription,
    email: siteConfig.contact.email,
    address: {
      "@type": "PostalAddress",
      ...siteConfig.address
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.coordinates.latitude,
      longitude: siteConfig.coordinates.longitude
    },
    areaServed: [
      {
        "@type": "Country",
        name: "China"
      },
      {
        "@type": "City",
        name: "Chengdu"
      }
    ],
    sameAs: siteConfig.socialProfiles,
    knowsAbout: [
      "Cloud Native",
      "Hybrid Cloud",
      "AI Computing Platform",
      "Model Training",
      "Model Inference",
      "Enterprise AI"
    ]
  };
}

export function getWebsiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.shortName,
    description: siteConfig.defaultDescription,
    inLanguage: siteConfig.language,
    publisher: {
      "@id": `${siteConfig.url}/#organization`
    }
  };
}
