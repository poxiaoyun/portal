"use client";

import { Hero } from "@/components/Hero";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Tag, Typography, Row, Col, Space, Collapse } from "antd";
import { getProductById } from "@/data/products";
import Image from "next/image";
import { withBasePath } from "@/lib/withBasePath";
import { Shield, Zap, BarChart, Settings, Network, Lock, Eye, Users, Globe, Server, Layers } from "lucide-react";

export function MapiPageContent() {
  const product = getProductById("ai-router");

  const productFeatures = [
    {
      title: "API 网关",
      description: "高性能的 AI API 访问控制网关，提供统一的 API 入口和管理能力。支持多种 AI 服务的接入和管理，实现统一的 API 访问控制。",
      image: "/images/products/rune/model-engineering.jpg",
      icon: Network,
      iconColor: "#0a7cff",
      iconBg: "rgba(10, 124, 255, 0.1)",
      titleColor: "#0a7cff"
    },
    {
      title: "权限治理",
      description: "企业级权限治理能力，支持细粒度的权限控制、角色管理、API 访问策略等。提供完善的权限管理机制，确保 API 访问的安全性。",
      image: "/images/products/rune/model-management.jpg",
      icon: Shield,
      iconColor: "#06b6d4",
      iconBg: "rgba(6, 182, 212, 0.1)",
      titleColor: "#06b6d4"
    },
    {
      title: "限流与熔断",
      description: "强大的限流和熔断能力，支持多种限流策略和熔断机制。提供灵活的限流配置，保护后端服务免受高并发冲击。",
      image: "/images/products/rune/model-inference.jpg",
      icon: Zap,
      iconColor: "#f59e0b",
      iconBg: "rgba(245, 158, 11, 0.1)",
      titleColor: "#f59e0b"
    },
    {
      title: "审计与可观测",
      description: "完善的审计和可观测能力，提供详细的访问日志、性能监控、告警通知等。支持多维度数据分析和报表生成。",
      image: "/images/products/rune/multi-tenant.jpg",
      icon: Eye,
      iconColor: "#10b981",
      iconBg: "rgba(16, 185, 129, 0.1)",
      titleColor: "#10b981"
    }
  ];

  const advantages = [
    {
      title: "高性能",
      description: "优化的网关架构，支持高并发访问，提供低延迟的 API 响应能力。",
      icon: Zap
    },
    {
      title: "安全可靠",
      description: "企业级安全能力，支持多种认证方式、加密传输、访问控制等安全功能。",
      icon: Shield
    },
    {
      title: "易于管理",
      description: "直观的管理界面，简化 API 网关的配置和管理，降低运维复杂度。",
      icon: Settings
    },
    {
      title: "灵活扩展",
      description: "支持多种 AI 服务接入，易于扩展和定制，满足不同业务需求。",
      icon: Layers
    },
    {
      title: "可观测性",
      description: "全面的监控和审计能力，提供详细的访问日志和性能指标。",
      icon: Eye
    },
    {
      title: "成本优化",
      description: "智能的限流和资源调度，帮助企业优化 API 调用成本。",
      icon: BarChart
    }
  ];

  const faqs = [
    {
      key: "1",
      question: "MAPI 支持哪些 AI 服务？",
      answer: "MAPI 支持多种主流的 AI 服务，包括 OpenAI、Anthropic、Google、百度、阿里云等，并持续扩展支持范围。"
    },
    {
      key: "2",
      question: "MAPI 如何保证 API 访问的安全性？",
      answer: "MAPI 采用多层安全防护机制，包括 API 密钥管理、访问控制、加密传输、审计日志等，确保 API 访问的安全性。"
    },
    {
      key: "3",
      question: "MAPI 是否支持私有化部署？",
      answer: "支持。MAPI 可以完全私有化部署，满足企业对数据安全和合规性的要求。"
    },
    {
      key: "4",
      question: "MAPI 的限流策略有哪些？",
      answer: "MAPI 支持多种限流策略，包括基于 IP、用户、API 的限流，支持令牌桶、漏桶等算法，可根据业务需求灵活配置。"
    }
  ];

  return (
    <>
      <Hero
        title={product?.name || "MAPI · 智能 AI 网关"}
        description={product?.description || "功能强大的 AI API 网关"}
        ctaPrimary={{ label: "商业版咨询", href: "/contact" }}
        className="rune-hero-aurora"
      />

      <section style={{ maxWidth: 1400, margin: "0 auto", padding: "40px 24px" }}>
        <Typography.Title level={1} style={{ textAlign: "center", marginBottom: 12, fontSize: 42 }}>
          产品特性介绍
        </Typography.Title>
        <Typography.Paragraph style={{ textAlign: "center", fontSize: 16, color: "var(--text-secondary)", marginBottom: 48 }}>
          为企业提供覆盖 API 网关、权限治理、限流熔断、审计可观测的全流程能力
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
          为什么选择 MAPI?
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
          关于 MAPI 的常见问题解答
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
              联系我们开始您的 AI 网关建设
            </Typography.Title>
            <Typography.Paragraph style={{ color: "rgba(15,23,42,0.7)", fontSize: 18 }}>
              MAPI 功能强大的 AI API 网关。
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

