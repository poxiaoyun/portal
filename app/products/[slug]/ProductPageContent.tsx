"use client";

import Image from "next/image";
import { Typography, Tag, Space } from "antd";
import { Button } from "@/components/Button";
import { Product } from "@/data/products";

interface ProductPageContentProps {
  product: Product;
}

// 产品特性接口
interface ProductFeature {
  title: string;
  description: string;
  image: string;
}

// 获取产品图片路径
function getProductImage(productId: string): string | null {
  const imageMap: Record<string, string> = {
    rune: "/images/products/rune/model-engineering.jpg",
    xmcp: "/images/products/rune/model-engineering.jpg", // 占位，后续可替换
    moha: "/images/products/rune/model-engineering.jpg", // 占位，后续可替换
    kubegems: "/images/products/rune/model-engineering.jpg", // 占位，后续可替换
    "ai-router": "/images/products/rune/model-engineering.jpg", // 占位，后续可替换
    chatbox: "/images/products/rune/model-engineering.jpg", // 占位，后续可替换
  };
  return imageMap[productId] || null;
}

// 获取产品特性列表
function getProductFeatures(productId: string): ProductFeature[] {
  const featuresMap: Record<string, ProductFeature[]> = {
    rune: [
      {
        title: "模型工程",
        description: "提供完整的模型开发、训练、调优工具链，支持多种深度学习框架，实现从数据到模型的端到端工程化。",
        image: "/images/products/rune/model-engineering.jpg",
      },
      {
        title: "模型管理",
        description: "统一的模型版本管理、元数据管理、模型注册中心，支持模型生命周期全流程管理。",
        image: "/images/products/rune/model-management.jpg",
      },
      {
        title: "模型推理",
        description: "高性能推理服务，支持批量推理、在线推理、边缘推理等多种场景，提供弹性扩缩容能力。",
        image: "/images/products/rune/model-inference.jpg",
      },
      {
        title: "异构计算",
        description: "支持 GPU、NPU、TPU 等多种计算资源，实现算力资源的统一调度和优化利用。",
        image: "/images/products/rune/heterogeneous-computing.jpg",
      },
      {
        title: "多租户管理",
        description: "完善的多租户隔离机制，支持资源配额、权限控制、成本分摊等企业级能力。",
        image: "/images/products/rune/multi-tenant.jpg",
      },
      {
        title: "多应用管理",
        description: "统一的应用管理平台，支持多应用部署、监控、运维，提供应用间的资源隔离和调度。",
        image: "/images/products/rune/multi-app-management.jpg",
      },
    ],
    xmcp: [
      {
        title: "多云互联",
        description: "自动识别与接入 Kubernetes、vCenter、OpenStack、华为云等多种云平台，实现统一纳管。",
        image: "/images/products/rune/model-engineering.jpg", // 占位
      },
      {
        title: "网络编排",
        description: "中心化策略、零信任访问与跨域服务网格，构建安全可靠的云间网络。",
        image: "/images/products/rune/model-management.jpg", // 占位
      },
    ],
    moha: [
      {
        title: "私有化存储",
        description: "支持数据加密，帮助企业实现模型、数据集的私有化管理与安全存储。",
        image: "/images/products/rune/model-engineering.jpg", // 占位
      },
    ],
    kubegems: [
      {
        title: "多集群管理",
        description: "跨地域集群统一纳管与巡检，提供统一的集群视图和管理能力。",
        image: "/images/products/rune/model-engineering.jpg", // 占位
      },
    ],
    "ai-router": [
      {
        title: "API 网关",
        description: "高性能的 AI API 访问控制网关，提供企业级权限治理、限流、审计与可观测能力。",
        image: "/images/products/rune/model-engineering.jpg", // 占位
      },
    ],
    chatbox: [
      {
        title: "多模态体验",
        description: "功能强大的多模态模型体验平台，支持文本、图像、语音等多种模态交互。",
        image: "/images/products/rune/model-engineering.jpg", // 占位
      },
    ],
  };
  return featuresMap[productId] || [];
}

export function ProductPageContent({ product }: ProductPageContentProps) {
  const productImage = getProductImage(product.id);
  const features = getProductFeatures(product.id);

  return (
    <div style={{ maxWidth: 1400, margin: "0 auto", padding: "80px 24px" }}>
      <div style={{ textAlign: "center", marginBottom: 64 }}>
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

      {/* 产品介绍卡片：左文字（毛玻璃）右图片 */}
      <div
        style={{
          display: "flex",
          borderRadius: "24px",
          overflow: "hidden",
          boxShadow: "0 16px 40px rgba(15, 23, 42, 0.08)",
          marginBottom: 64,
          minHeight: "400px",
          position: "relative",
        }}
      >
        {/* 文字部分 - 毛玻璃特效 */}
        <div
          style={{
            flex: "1",
            padding: "64px 48px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            background: "rgba(255, 255, 255, 0.7)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            borderRight: "1px solid rgba(255, 255, 255, 0.2)",
          }}
        >
          <Typography.Title level={2} style={{ marginBottom: 24, color: "var(--text-primary)" }}>
            产品介绍
          </Typography.Title>
          <Typography.Paragraph
            style={{
              fontSize: 18,
              lineHeight: 1.8,
              color: "var(--text-secondary)",
              marginBottom: 0,
            }}
          >
            {product.description}
          </Typography.Paragraph>
        </div>

        {/* 图片部分 */}
        {productImage && (
          <div
            style={{
              flex: "1",
              position: "relative",
              minHeight: "400px",
              background: "var(--bg-page)",
            }}
          >
            <Image
              src={productImage}
              alt={`${product.name} 产品展示`}
              fill
              style={{
                objectFit: "cover",
              }}
              priority
            />
          </div>
        )}
      </div>

      {/* 产品特性卡片列表 */}
      {features.length > 0 && (
        <div style={{ marginBottom: 64 }}>
          <Typography.Title level={2} style={{ textAlign: "center", marginBottom: 48 }}>
            核心特性
          </Typography.Title>
          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            {features.map((feature, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  borderRadius: "24px",
                  overflow: "hidden",
                  boxShadow: "0 16px 40px rgba(15, 23, 42, 0.08)",
                  minHeight: "350px",
                  position: "relative",
                }}
              >
                {/* 文字部分 - 毛玻璃特效 */}
                <div
                  style={{
                    flex: "1",
                    padding: "48px 40px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    background: "rgba(255, 255, 255, 0.7)",
                    backdropFilter: "blur(20px)",
                    WebkitBackdropFilter: "blur(20px)",
                    borderRight: "1px solid rgba(255, 255, 255, 0.2)",
                  }}
                >
                  <Typography.Title level={3} style={{ marginBottom: 16, color: "var(--text-primary)" }}>
                    {feature.title}
                  </Typography.Title>
                  <Typography.Paragraph
                    style={{
                      fontSize: 16,
                      lineHeight: 1.8,
                      color: "var(--text-secondary)",
                      marginBottom: 0,
                    }}
                  >
                    {feature.description}
                  </Typography.Paragraph>
                </div>

                {/* 图片部分 */}
                <div
                  style={{
                    flex: "1",
                    position: "relative",
                    minHeight: "350px",
                    background: "var(--bg-page)",
                  }}
                >
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    style={{
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div style={{ textAlign: "center", marginTop: 48 }}>
        <Space size="large">
          <Button type="primary" size="large" href="/contact">
            立即咨询
          </Button>
          <Button type="default" size="large" href="/">
            返回首页
          </Button>
        </Space>
      </div>
    </div>
  );
}

