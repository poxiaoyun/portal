"use client";

import { Hero } from "@/components/Hero";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Tag, Typography, Row, Col, Space, Collapse } from "antd";
import { getProductById } from "@/data/products";
import Image from "next/image";
import { withBasePath } from "@/lib/withBasePath";
import { Server, Network, Layers, Settings, Shield, Zap, BarChart, Globe, Monitor, Database, Cloud } from "lucide-react";

export function KubeGemsPageContent() {
  const product = getProductById("kubegems");

  const productFeatures = [
    {
      title: "多集群管理",
      description: "跨地域集群统一纳管与巡检，提供统一的集群视图和管理能力。支持Kubernetes集群的自动发现、注册、监控和运维，实现多集群的统一管理。",
      image: "/images/products/rune/model-engineering.jpg",
      icon: Server,
      iconColor: "#0a7cff",
      iconBg: "rgba(10, 124, 255, 0.1)",
      titleColor: "#0a7cff"
    },
    {
      title: "容器应用管理",
      description: "统一的容器应用生命周期管理，支持应用的部署、扩缩容、更新、回滚等操作。提供应用模板、配置管理、密钥管理等丰富的应用管理功能。",
      image: "/images/products/rune/model-management.jpg",
      icon: Layers,
      iconColor: "#06b6d4",
      iconBg: "rgba(6, 182, 212, 0.1)",
      titleColor: "#06b6d4"
    },
    {
      title: "可观测性",
      description: "全面的可观测性能力，包括监控、日志、链路追踪等。提供丰富的监控指标和告警规则，帮助运维人员快速定位和解决问题。",
      image: "/images/products/rune/model-inference.jpg",
      icon: Monitor,
      iconColor: "#f59e0b",
      iconBg: "rgba(245, 158, 11, 0.1)",
      titleColor: "#f59e0b"
    },
    {
      title: "网络与存储",
      description: "强大的网络和存储管理能力，支持多种网络插件和存储类型。提供网络策略、存储类、持久卷等丰富的资源管理功能。",
      image: "/images/products/rune/multi-tenant.jpg",
      icon: Network,
      iconColor: "#10b981",
      iconBg: "rgba(16, 185, 129, 0.1)",
      titleColor: "#10b981"
    }
  ];

  const advantages = [
    {
      title: "开源免费",
      description: "完全开源，免费使用，社区活跃，持续更新迭代。",
      icon: Globe
    },
    {
      title: "多集群支持",
      description: "支持多集群统一管理，跨地域、跨云平台的集群纳管能力。",
      icon: Server
    },
    {
      title: "易于使用",
      description: "直观的Web界面，简化Kubernetes的复杂性，降低使用门槛。",
      icon: Settings
    },
    {
      title: "功能丰富",
      description: "提供应用管理、监控告警、日志查询、网络存储等完整的容器云能力。",
      icon: Layers
    },
    {
      title: "安全可靠",
      description: "企业级安全能力，支持RBAC、网络策略、资源配额等多层安全防护。",
      icon: Shield
    },
    {
      title: "高性能",
      description: "优化的架构设计，支持大规模集群和应用的稳定运行。",
      icon: Zap
    }
  ];

  const faqs = [
    {
      key: "1",
      question: "KubeGems 是否完全开源？",
      answer: "是的，KubeGems 是完全开源的项目，遵循 Apache 2.0 许可证，可以免费使用和修改。"
    },
    {
      key: "2",
      question: "KubeGems 支持哪些 Kubernetes 版本？",
      answer: "KubeGems 支持 Kubernetes 1.20 及以上版本，并持续跟进最新版本的 Kubernetes。"
    },
    {
      key: "3",
      question: "KubeGems 是否支持私有化部署？",
      answer: "支持。KubeGems 可以完全私有化部署，支持离线安装，满足企业对数据安全和合规性的要求。"
    },
    {
      key: "4",
      question: "KubeGems 如何管理多集群？",
      answer: "KubeGems 通过统一的控制平面管理多个集群，支持集群的自动发现、注册、监控和运维，提供统一的集群视图。"
    }
  ];

  return (
    <>
      <Hero
        title={product?.name || "KubeGems · 开源容器云"}
        description={product?.description || "云原生开源容器应用管理平台"}
        ctaPrimary={{ label: "商业版咨询", href: "/contact" }}
        className="rune-hero-aurora"
      />

      <section style={{ maxWidth: 1400, margin: "0 auto", padding: "40px 24px" }}>
        <Typography.Title level={1} style={{ textAlign: "center", marginBottom: 12, fontSize: 42 }}>
          产品特性介绍
        </Typography.Title>
        <Typography.Paragraph style={{ textAlign: "center", fontSize: 16, color: "var(--text-secondary)", marginBottom: 48 }}>
          为企业提供覆盖多集群管理、容器应用管理、可观测性、网络存储的全流程能力
        </Typography.Paragraph>
        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          {productFeatures.map((feature, index) => (
            <div
              key={index}
              className="card-glow rune-feature-card"
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 0,
                padding: 0,
                overflow: "hidden",
                minHeight: 500,
                borderRadius: "24px",
                backgroundColor: "#fff",
                boxShadow: "none",
                border: "1px solid rgba(15, 23, 42, 0.06)"
              }}
            >
              {/* 文字部分 - 左侧，白色背景 + 毛玻璃特效 */}
              <div
                style={{
                  flex: "0 0 40%",
                  padding: "48px 40px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  background: "rgba(255, 255, 255, 0.8)",
                  backdropFilter: "blur(30px) saturate(180%)",
                  WebkitBackdropFilter: "blur(30px) saturate(180%)",
                  borderRight: "1px solid rgba(15, 23, 42, 0.08)",
                  position: "relative"
                }}
              >
                {/* 白色背景层，让毛玻璃效果有背景可模糊 */}
                <div
                  style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0,
                    background: "#fff",
                    zIndex: -1
                  }}
                />
                {feature.icon && (
                  <div style={{ marginBottom: 20, display: "flex", alignItems: "center" }}>
                    <div
                      style={{
                        width: 64,
                        height: 64,
                        borderRadius: "16px",
                        background: feature.iconBg || "rgba(10, 124, 255, 0.1)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                      }}
                    >
                      <feature.icon size={32} style={{ color: feature.iconColor || "var(--brand)" }} />
                    </div>
                  </div>
                )}
                <Typography.Title level={3} style={{ marginBottom: 16, fontSize: 28, color: feature.titleColor || "var(--text-primary)" }}>
                  {feature.title}
                </Typography.Title>
                <Typography.Paragraph
                  style={{
                    fontSize: 16,
                    lineHeight: 1.8,
                    color: "var(--text-secondary)",
                    margin: 0
                  }}
                >
                  {feature.description}
                </Typography.Paragraph>
              </div>

              {/* 图片部分 - 右侧，仅显示图片 */}
              <div
                style={{
                  flex: "0 0 60%",
                  position: "relative",
                  minHeight: 500,
                  backgroundColor: "#f5f7fb"
                }}
              >
                <Image
                  src={withBasePath(feature.image)}
                  alt={feature.title}
                  fill
                  style={{
                    objectFit: "cover"
                  }}
                  unoptimized
                  onError={(e) => {
                    // 如果图片加载失败，显示占位符
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                    if (target.parentElement) {
                      target.parentElement.style.background = "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
                    }
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ maxWidth: 1400, margin: "0 auto", padding: "80px 24px", background: "transparent" }}>
        <Typography.Title level={1} style={{ textAlign: "center", marginBottom: 12, color: "var(--text-primary)", fontSize: 42 }}>
          优势
        </Typography.Title>
        <Typography.Paragraph style={{ textAlign: "center", fontSize: 18, color: "var(--text-secondary)", marginBottom: 48 }}>
          为什么选择 KubeGems?
        </Typography.Paragraph>
        <Row gutter={[24, 24]}>
          {advantages.map((advantage, index) => (
            <Col xs={24} sm={12} lg={8} key={index}>
              <div
                style={{
                  background: "#fff",
                  border: "1px solid rgba(15, 23, 42, 0.1)",
                  borderRadius: "16px",
                  padding: "32px",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.2s, border-color 0.2s",
                  cursor: "pointer"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.borderColor = "rgba(15, 23, 42, 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.borderColor = "rgba(15, 23, 42, 0.1)";
                }}
              >
                {advantage.icon && (
                  <div style={{ marginBottom: 20, display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <advantage.icon size={42} style={{ color: "var(--brand)" }} />
                  </div>
                )}
                <Typography.Title level={4} style={{ color: "var(--text-primary)", marginBottom: 12, fontSize: 22, textAlign: "center" }}>
                  {advantage.title}
                </Typography.Title>
                <Typography.Paragraph style={{ color: "var(--text-secondary)", fontSize: 14, lineHeight: 1.6, margin: 0 }}>
                  {advantage.description}
                </Typography.Paragraph>
              </div>
            </Col>
          ))}
        </Row>
      </section>

      {/* 常见问题板块 */}
      <section style={{ maxWidth: 1400, margin: "0 auto", padding: "80px 24px", background: "transparent" }}>
        <Typography.Title level={1} style={{ textAlign: "center", marginBottom: 12, color: "var(--text-primary)", fontSize: 42 }}>
          常见问题
        </Typography.Title>
        <Typography.Paragraph style={{ textAlign: "center", fontSize: 18, color: "var(--text-secondary)", marginBottom: 48 }}>
          关于 KubeGems 的常见问题解答
        </Typography.Paragraph>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <style dangerouslySetInnerHTML={{
            __html: `
              .rune-faq-item {
                background: rgba(255, 255, 255, 0.6) !important;
                backdrop-filter: blur(20px) !important;
                -webkit-backdrop-filter: blur(20px) !important;
                border-radius: 12px !important;
                margin-bottom: 16px !important;
                border: none !important;
                border-top: none !important;
                border-bottom: none !important;
                border-left: none !important;
                border-right: none !important;
                overflow: hidden;
              }
              .rune-faq-item .ant-collapse-header {
                padding: 20px !important;
                background: transparent !important;
                border: none !important;
                border-bottom: none !important;
              }
              .rune-faq-item .ant-collapse-content {
                border: none !important;
                border-top: none !important;
              }
              .rune-faq-item .ant-collapse-content-box {
                padding: 0 20px 20px 20px !important;
                background: transparent !important;
                border: none !important;
              }
              .rune-faq-item + .rune-faq-item {
                border-top: none !important;
              }
              .rune-faq-wrapper .ant-collapse-item {
                border: none !important;
                border-bottom: none !important;
              }
              .rune-faq-wrapper .ant-collapse-item-active {
                border: none !important;
              }
            `
          }} />
          <div className="rune-faq-wrapper">
            <Collapse
              items={faqs.map((faq) => ({
                key: faq.key,
                label: (
                  <Typography.Text style={{ color: "var(--text-primary)", fontSize: 18, fontWeight: 500 }}>
                    {faq.question}
                  </Typography.Text>
                ),
                children: (
                  <Typography.Paragraph style={{ color: "var(--text-secondary)", fontSize: 16, lineHeight: 1.8, margin: 0 }}>
                    {faq.answer}
                  </Typography.Paragraph>
                ),
                className: "rune-faq-item",
              }))}
              style={{
                background: "transparent",
                border: "none",
              }}
            expandIcon={({ isActive }) => (
              <span style={{ color: "var(--text-primary)", fontSize: 24, fontWeight: 300, transition: "transform 0.3s", transform: isActive ? "rotate(0deg)" : "rotate(0deg)", display: "inline-block", width: 24, textAlign: "center" }}>
                {isActive ? "−" : "+"}
              </span>
            )}
            expandIconPosition="end"
            ghost={false}
          />
          </div>
        </div>
      </section>

      <div style={{ background: "#fff", width: "100%" }}>
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
              联系我们开始您的容器云管理之旅
            </Typography.Title>
            <Typography.Paragraph style={{ color: "rgba(15,23,42,0.7)", fontSize: 18 }}>
              KubeGems 云原生开源容器应用管理平台。
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

