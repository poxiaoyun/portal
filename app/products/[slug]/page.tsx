import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProductById, products } from "@/data/products";
import { ProductPageContent } from "./ProductPageContent";
import { absoluteUrl, siteConfig } from "@/lib/site";
import { buildPageMetadata } from "@/lib/seo";

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.id,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const product = getProductById(params.slug);
  
  if (!product) {
    return {
      title: "产品未找到",
    };
  }

  return buildPageMetadata({
    title: product.name,
    description: product.description,
    path: `/products/${product.id}`,
    keywords: [product.name, product.badge, product.tagline, "产品介绍", "企业软件"]
  });
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProductById(params.slug);

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
}
