import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductPageContent } from "./[slug]/ProductPageContent";
import { getProductById } from "@/data/products";

export function buildProductMetadata(productId: string): Metadata {
  const product = getProductById(productId);

  if (!product) {
    return {
      title: "产品未找到",
      description: "暂未找到对应的产品介绍。",
    };
  }

  return {
    title: `${product.name} - ${product.tagline}`,
    description: product.description,
  };
}

export function makeProductPage(productId: string) {
  return function ProductPage() {
    const product = getProductById(productId);

    if (!product) {
      notFound();
    }

    return <ProductPageContent product={product} />;
  };
}


