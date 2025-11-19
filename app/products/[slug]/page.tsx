import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProductById, products } from "@/data/products";
import { ProductPageContent } from "./ProductPageContent";

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

  return {
    title: `${product.name} - ${product.tagline}`,
    description: product.description,
  };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProductById(params.slug);

  if (!product) {
    notFound();
  }

  return <ProductPageContent product={product} />;
}

