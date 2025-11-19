"use client";

import Image from "next/image";
import { Typography, Tag, Space } from "antd";
import { Button } from "@/components/Button";
import { Product } from "@/data/products";

interface ProductPageContentProps {
  product: Product;
}

export function ProductPageContent({ product }: ProductPageContentProps) {
  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 24px" }}>
      <div style={{ textAlign: "center", marginBottom: 48 }}>
        <div style={{ marginBottom: 24 }}>
          <Image
            src={product.logo}
            alt={`${product.name} logo`}
            width={120}
            height={120}
            style={{ objectFit: "contain" }}
          />
        </div>
        <Tag color="blue" style={{ fontSize: 16, padding: "4px 16px", marginBottom: 16 }}>
          {product.badge}
        </Tag>
        <Typography.Title level={1} style={{ marginTop: 16, marginBottom: 12 }}>
          {product.name}
        </Typography.Title>
        <Typography.Paragraph style={{ fontSize: 20, color: "var(--text-secondary)", maxWidth: 600, margin: "0 auto" }}>
          {product.tagline}
        </Typography.Paragraph>
      </div>

      <div className="card-glow" style={{ padding: 48, marginBottom: 32 }}>
        <Typography.Title level={2}>产品介绍</Typography.Title>
        <Typography.Paragraph style={{ fontSize: 16, lineHeight: 1.8, color: "var(--text-secondary)" }}>
          {product.description}
        </Typography.Paragraph>
      </div>

      <div style={{ textAlign: "center", marginTop: 48 }}>
        <Space size="large">
          <Button type="primary" size="large" href="/contact">
            立即咨询
          </Button>
          <Button type="default" size="large" href="/products">
            返回产品列表
          </Button>
        </Space>
      </div>
    </div>
  );
}

