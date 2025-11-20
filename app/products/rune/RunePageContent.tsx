"use client";

import { Hero } from "@/components/Hero";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Tag, Typography, Row, Col, Space, Collapse } from "antd";
import { getProductById } from "@/data/products";
import Image from "next/image";
import { withBasePath } from "@/lib/withBasePath";
import { Cpu, Code, Zap, Database, Users, Layers, Settings, Server, DollarSign, Wrench, Shield } from "lucide-react";

export function RunePageContent() {
  const product = getProductById("rune");

  const productFeatures = [
    {
      title: "AI 云原生架构",
      description: "云原生架构，支持英伟达、华为等国产GPU，兼容异构GPU资源池管理，多维度调度，满足多云算力中心集中接入和治理。支持虚拟化能力，灵活匹配不同任务的差异化需求。",
      image: "/images/products/rune/heterogeneous-computing.png",
      icon: Cpu,
      iconColor: "#0a7cff",
      iconBg: "rgba(10, 124, 255, 0.1)",
      titleColor: "#0a7cff"
    },
    {
      title: "模型工程管理",
      description: "内置丰富AI开发，调优和数据管理工具，提供集成IDE和桌面仿真环境。满足用户一键开发、训练、调优、推理、部署全流程需求",
      image: "/images/products/rune/model-engineering.png",
      icon: Code,
      iconColor: "#06b6d4",
      iconBg: "rgba(6, 182, 212, 0.1)",
      titleColor: "#06b6d4"
    },
    {
      title: "高性能模型推理",
      description: "基于分布式并行推理，计算与存储分离、PD分离实现请求的智能调度与算力动态扩容，确保高并发下仍能提供低延迟服务，保障用户体验与业务连续性。推理实例实施监控，异常告警。",
      image: "/images/products/rune/model-inference.png",
      icon: Zap,
      iconColor: "#f59e0b",
      iconBg: "rgba(245, 158, 11, 0.1)",
      titleColor: "#f59e0b"
    },
    {
      title: "多租户运营",
      description: "租户资源隔离，支持算力、模型、存储的多维配额定制，可为租户设定独立的资源、规格配额，并提供按资源与时长等灵活计费模式，实现精细化运营。",
      image: "/images/products/rune/multi-tenant.png",
      icon: Users,
      iconColor: "#10b981",
      iconBg: "rgba(16, 185, 129, 0.1)",
      titleColor: "#10b981"
    }
  ];

  const advantages = [
    {
      title: "基础架构可扩展",
      description: "随着业务需求的增长，灵活可扩展的基础设施能够兼顾AI 模型训练和应用推理变的尤其重要，特别是在数据中心智算和超算不同区域的管理和训推一体化架构下传统集群难以同时支撑。",
      icon: Server
    },
    {
      title: "模块化功能",
      description: "采用模块化设计，核心组件可独立部署交付。功能从模型的开发和部署涉及到多个步骤。",
      icon: Layers
    },
    {
      title: "异构调度和管理资源",
      description: "底层的计算资源是有限和异构的，在AI 模型开发和推理过程中不同的类型有不同的资源需求。平台支持高效地管理和调度算力资源，以满足不同任务的需求。",
      icon: Settings
    },
    {
      title: "低维护成本",
      description: "提供多样化训练框架。极大降低服务器的管理和维护成本，通过自动化资源管理和调度，减少技术人员的工作量，节省人力成本。",
      icon: DollarSign
    },
    {
      title: "多种大模型调优框架",
      description: "多种大模型调优框架，满足各个类型调优需求",
      icon: Wrench
    },
    {
      title: "全信创支持",
      description: "完美支持国产化服务器、操作系统和国产化算力芯片。平台全栈采用 Golang 语言，具有广泛的兼容性和可移植性",
      icon: Shield
    }
  ];

  const faqs = [
    {
      key: "1",
      question: "Rune 是否有开源版本？",
      answer: "Rune 目前没有开源版本，但我们会持续关注市场动态，并根据市场需求，适时推出开源版本。"
    },
    {
      key: "2",
      question: "Rune 是否支持在离线环境下部署和使用？",
      answer: "用户可预先下载离线包，包含Rune所需的全部依赖和组件，实现离线部署和使用。"
    },
    {
      key: "3",
      question: "Rune 支持多集群、多租户管理吗？",
      answer: "支持。Rune 支持异地多集群、多租户管理，支持集群、租户等资源的隔离和调度。"
    },
    {
      key: "4",
      question: "私有化场景下Rune能帮助我加密数据吗？",
      answer: "如果您是模型服务提供商，有需要私有化交付的场景。我们提供加密SDK，您可以加密模型数据后上传到Rune平台，平台在推理时会自动对加密模型进行解密(不落盘)，以保证您的模型数据安全。"
    }
  ];

  return (
    <>
      <Hero
        title={product?.name || "Rune · AI智算平台"}
        description={product?.description || "现代化 AI 训推一体化平台"}
        ctaPrimary={{ label: "商业版咨询", href: "/contact" }}
        className="rune-hero-aurora"
      />

      <section style={{ maxWidth: 1400, margin: "0 auto", padding: "40px 24px" }}>
        <Typography.Title level={1} style={{ textAlign: "center", marginBottom: 12, fontSize: 42 }}>
          产品特性介绍
        </Typography.Title>
        <Typography.Paragraph style={{ textAlign: "center", fontSize: 16, color: "var(--text-secondary)", marginBottom: 48 }}>
          为企业提供覆盖模型开发、训练、推理、部署的全流程能力
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
          为什么选择 Rune?
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
          关于 Rune 的常见问题解答
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
              联系我们开始您的AI基础设施建设
            </Typography.Title>
            <Typography.Paragraph style={{ color: "rgba(15,23,42,0.7)", fontSize: 18 }}>
              Rune现代化AI训推一体平台。
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

