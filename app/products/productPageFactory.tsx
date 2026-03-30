import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductPageContent } from "./[slug]/ProductPageContent";
import { getProductById } from "@/data/products";
import { absoluteUrl, siteConfig } from "@/lib/site";
import { buildPageMetadata } from "@/lib/seo";

export function buildProductMetadata(productId: string): Metadata {
  const product = getProductById(productId);

  if (!product) {
    return {
      title: "产品未找到",
      description: "暂未找到对应的产品介绍。",
    };
  }

  return buildPageMetadata({
    title: product.name,
    description: product.description,
    path: `/products/${product.id}`,
    keywords: [product.name, product.badge, product.tagline, "产品介绍", "企业软件"]
  });
}

export function makeProductPage(productId: string) {
  return function ProductPage() {
    const product = getProductById(productId);

    if (!product) {
      notFound();
    }

    const productJsonLd = {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: product.name,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description: product.description,
      url: absoluteUrl(`/products/${product.id}`),
      brand: {
        "@type": "Brand",
        name: siteConfig.shortName
      },
      publisher: {
        "@type": "Organization",
        name: siteConfig.name
      }
    };

    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
        />
        <ProductPageContent product={product} />
      </>
    );
  };
}

