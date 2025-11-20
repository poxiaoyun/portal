"use client";

import { useState } from "react";
import { Hero } from "@/components/Hero";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import Link from "next/link";
import Image from "next/image";
import { Tag, Typography, Row, Col, Space } from "antd";
import { SpotlightCard } from "@lobehub/ui/awesome";
import { products } from "@/data/products";
import { openSourceProjects } from "@/data/openSourceProjects";
import { withBasePath } from "@/lib/withBasePath";

const partners = [
  { name: "anton", logo: "/images/partner/anton.png" },
  { name: "basra", logo: "/images/partner/basra-oil-company.png" },
  { name: "中国移动", logo: "/images/partner/china-mobile.png" },
  { name: "云控智行", logo: "/images/partner/yunkong.png" },
  { name: "派兹", logo: "/images/partner/paizi.png" },
  { name: "英伟达", logo: "/images/partner/nvidia.png" },
  { name: "中国地震台网中心", logo: "/images/partner/cenc.png" },
  { name: "西南财经大学", logo: "/images/partner/swufe.png" },
  { name: "西南交通大学", logo: "/images/partner/swjtu.png" },
  { name: "万物智联", logo: "/images/partner/wanwuzhilian.png" },
  { name: "达闼机器人", logo: "/images/partner/cloudminds.png" },
  { name: "津安达", logo: "/images/partner/jianzanda.svg" },
  { name: "云易捷", logo: "/images/partner/yunyijie.svg" }
];

const scenarios = [
  {
    id: 0,
    title: "混合云",
    description: "统一管理多云资源，实现跨云应用部署与数据同步",
    image: "/images/scenarios/hybrid-cloud.jpg",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    hasButton: true
  },
  {
    id: 1,
    title: "智算中心",
    description: "实现智算中心的高效运行，提高计算资源利用率",
    image: "/images/scenarios/intelligent-computing.jpg",
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    hasButton: true
  },
  {
    id: 2,
    title: "教育行业",
    description: "实现教育行业的数字化转型，提高教学效率和教学质量",
    image: "/images/scenarios/education.jpg",
    gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    hasButton: true
  },
  {
    id: 3,
    title: "能源制造",
    description: "实现能源行业的数字化转型，提高生产效率和能源利用率",
    image: "/images/scenarios/energy-manufacturing.webp",
    gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    hasButton: true
  },
  {
    id: 4,
    title: "AI 应用",
    description: "实现AI应用的快速开发与部署，提高开发效率和部署效率",
    image: "/images/scenarios/ai-application.jpg",
    gradient: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)",
    hasButton: true
  }
];

export default function HomePage() {
  const [expandedScenario, setExpandedScenario] = useState(0);
  const productMatrixItems = (() => {
    const items = [...products];
    const mohaIndex = items.findIndex((item) => item.id === "moha");
    if (mohaIndex >= 0) {
      items.splice(mohaIndex + 1, 0, ...openSourceProjects);
    } else {
      items.push(...openSourceProjects);
    }
    return items;
  })();

  return (
    <>
      <Hero
        title="为 AI 云原生创造好内核"
        description="专注云原生开源、混合云与 AI 智算平台，为企业提供覆盖容器云、混合云、智算云及 AI 能力的全栈解决方案。"
        ctaPrimary={{ label: "预约演示", href: "/contact" }}
        badge={<Tag color="black">Powered by GPT-5.1</Tag>}
      />

      <section style={{ maxWidth: 1400, margin: "0 auto", padding: "40px 24px" }}>
        <Typography.Title level={2} style={{ textAlign: "center", marginBottom: 24 }}>
          产品矩阵
        </Typography.Title>
        <SpotlightCard
          items={productMatrixItems}
          columns={4}
          gap="2rem"
          size={1400}
          borderRadius={20}
          maxItemWidth={300}
          renderItem={(product: any) => (
            (() => {
              const isExternal = Boolean("externalUrl" in product && product.externalUrl);
              const href = isExternal ? product.externalUrl : `/products/${product.id}`;
              const card = (
                <div className="product-card">
                  <div className="product-card__top">
                    <span className="product-card__badge">{product.badge}</span>
                    <div className="product-card__logo">
                      {product.logo ? (
                        <img 
                          src={withBasePath(product.logo)} 
                          style={{ objectFit: "contain" ,height: '80px',width: '160px'}} 
                        />
                      ) : (
                        <span>{product.name.charAt(0)}</span>
                      )}
                    </div>
                    <Typography.Text className="product-card__tagline" type="secondary">
                      {product.tagline}
                    </Typography.Text>
                  </div>
                  <div className="product-card__bottom">
                    <Typography.Paragraph className="product-card__description">
                      {product.description}
                    </Typography.Paragraph>
                  </div>
                </div>
              );

              if (isExternal) {
                return (
                  <a href={href} target="_blank" rel="noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
                    {card}
                  </a>
                );
              }

              return (
                <Link href={href} style={{ textDecoration: "none", color: "inherit" }}>
                  {card}
                </Link>
              );
            })()
          )}
        />
      </section>

      <section style={{ maxWidth: 1400, margin: "0 auto", padding: "40px 24px" }}>
        <Typography.Title level={2} style={{ textAlign: "center", marginBottom: 12 }}>
          应用场景
        </Typography.Title>
        <Typography.Paragraph style={{ textAlign: "center", fontSize: 16, color: "var(--text-secondary)", marginBottom: 32 }}>
          针对行业特征及细分业务场景深度定制，打造一站式解决方案
        </Typography.Paragraph>
        <div className="scenario-container">
          {scenarios.map((scenario) => {
            const isExpanded = expandedScenario === scenario.id;
            return (
              <div
                key={scenario.id}
                className={`scenario-card ${isExpanded ? "scenario-card--expanded" : "scenario-card--collapsed"}`}
                onMouseEnter={() => setExpandedScenario(scenario.id)}
                style={{
                  flex: isExpanded ? "1 1 58%" : "1 1 10%",
                  minWidth: isExpanded ? "58%" : "10%",
                  maxWidth: isExpanded ? "58%" : "10%",
                  transition: "flex 0.5s ease, min-width 0.5s ease, max-width 0.5s ease"
                }}
              >
                <div 
                  className="scenario-card__image" 
                  style={{ 
                    backgroundImage: scenario.image 
                      ? `url(${withBasePath(scenario.image)})`
                      : "none",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundColor: scenario.image ? "transparent" : "#f0f0f0"
                  }}
                >
                  <div className="scenario-card__content">
                    <Typography.Title 
                      level={isExpanded ? 3 : 4} 
                      style={{ 
                        color: "#fff",
                        marginBottom: isExpanded && scenario.description ? 12 : 0,
                        transition: "all 0.3s ease"
                      }}
                    >
                      {scenario.title}
                    </Typography.Title>
                    {isExpanded && scenario.description && (
                      <Typography.Paragraph 
                        style={{ 
                          color: "#fff", 
                          marginBottom: 16, 
                          fontSize: 14,
                          opacity: isExpanded ? 1 : 0,
                          transition: "opacity 0.3s ease"
                        }}
                      >
                        {scenario.description}
                      </Typography.Paragraph>
                    )}
                    {isExpanded && scenario.hasButton && (
                      <Button 
                        type="primary" 
                        size="small" 
                        href="/solutions" 
                        style={{ 
                          background: "transparent", 
                          borderColor: "#fff",
                          color: "#fff",
                          opacity: isExpanded ? 1 : 0,
                          transition: "opacity 0.3s ease"
                        }}
                      >
                        了解更多 →
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <div style={{ background: "#fff", width: "100%" }}>
        <section style={{ maxWidth: 1400, margin: "0 auto", padding: "40px 24px" }}>
          <Typography.Title level={2} style={{ textAlign: "center", marginBottom: 24 }}>
            典型客户
          </Typography.Title>
          <Row gutter={[16, 16]}>
            {partners.map((partner) => (
              <Col xs={12} sm={8} md={6} lg={4} key={partner.logo}>
                <div
                  style={{
                    borderRadius: 8,
                    background: "#fff",
                    border: "1px solid rgba(15, 23, 42, 0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: 140,
                    padding: "16px"
                  }}
                >
                  <Image 
                    src={withBasePath(partner.logo)} 
                    alt={partner.name} 
                    width={200} 
                    height={100} 
                    style={{ 
                      objectFit: "contain", 
                      opacity: 0.8,
                      maxWidth: "100%",
                      maxHeight: "100%",
                      width: "auto",
                      height: "auto"
                    }} 
                    unoptimized
                  />
                </div>
              </Col>
            ))}
          </Row>
        </section>

        <section
          style={{
            width: "100%",
            margin: 0,
            padding: "80px 0 0",
            background: "#f5f7fb"
          }}
        >
          <div
            style={{
              maxWidth: 900,
              margin: "0 auto",
              textAlign: "center",
              padding: "48px 32px",
              background: "rgba(255, 255, 255, 0.4)",
              borderRadius: 28,
              border: "1px solid rgba(255,255,255,0.6)",
              boxShadow: "0 15px 40px rgba(10,124,255,0.15)",
              color: "#0f172a",
              backdropFilter: "blur(18px)",
              WebkitBackdropFilter: "blur(18px)"
            }}
          >
            <Typography.Title level={2} style={{ color: "#0f172a" }}>
              即刻开启您的云原生与 AI 之旅？
            </Typography.Title>
            <Typography.Paragraph style={{ color: "rgba(15,23,42,0.7)", fontSize: 18 }}>
              联系我们专家团开展一场深入交流。
            </Typography.Paragraph>
            <Space size="large" style={{ marginTop: 24 }}>
              <Button
                type="default"
                size="large"
                href="/contact"
                style={{
                  background: "transparent",
                  borderColor: "rgba(15,23,42,0.2)",
                  color: "#0f172a"
                }}
              >
                预约咨询 
            </Button>
            </Space>
          </div>
        </section>
      </div>
    </>
  );
}

