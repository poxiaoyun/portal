"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { Hero } from "@/components/Hero";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Tag, Typography, Row, Col, Space, Collapse } from "antd";
import { getProductById } from "@/data/products";
import Image from "next/image";
import { withBasePath } from "@/lib/withBasePath";
import { Cloud, Network, Shield, Settings, Server, Layers, Globe, Zap, Lock, BarChart } from "lucide-react";

export function XmcpPageContent() {
  const product = getProductById("xmcp");

  const productFeatures = useMemo(
    () => [
      {
        title: "多云互联",
        description: "自动识别与接入 Kubernetes、vCenter、OpenStack、华为云等多种云平台，采用零信任 Mesh 网络实现跨地域服务接入，构建安全可靠的云间基础设施互联。",
        images: ["/images/products/xcmp/cluster1.png", "/images/products/xcmp/cluster2.png"],
        icon: Cloud,
        iconColor: "#0a7cff",
        iconBg: "rgba(10, 124, 255, 0.1)",
        titleColor: "#0a7cff"
      },
      {
        title: "应用市场",
        description: "支持应用模板的集中化管理与分发，提供应用打包、审核、发布、运维等全生命周期管理能力。提供 license 管理能力，支持商业应用管理。",
        images: ["/images/products/xcmp/marketplace1.png", "/images/products/xcmp/marketplace2.png"],
        icon: Network,
        iconColor: "#06b6d4",
        iconBg: "rgba(6, 182, 212, 0.1)",
        titleColor: "#06b6d4"
      },
      {
        title: "数据服务",
        description: "提供包含 MySQL、Redis、MongoDB 和对象存储等多种数据库的SAAS服务，提供自动发现、集群管理、注册、监控、备份运维能力。",
        images: ["/images/products/xcmp/database.png", "/images/products/xcmp/mysql-metrics.png"],
        icon: Layers,
        iconColor: "#f59e0b",
        iconBg: "rgba(245, 158, 11, 0.1)",
        titleColor: "#f59e0b"
      },
      {
        title: "计量计费",
        description: "多维度的资源使用统计和成本分析，支持按资源类型、租户、项目等维度进行计费。提供详细的账单和成本优化建议。",
        images: ["/images/products/xcmp/metrics.png","/images/products/xcmp/bill.png"],
        icon: BarChart,
        iconColor: "#10b981",
        iconBg: "rgba(16, 185, 129, 0.1)",
        titleColor: "#10b981"
      }
    ],
    []
  );

  const advantages = [
    {
      title: "统一纳管",
      description: "支持多种云平台的统一接入和管理，无需切换多个控制台，实现真正的多云统一管理。",
      icon: Globe
    },
    {
      title: "安全可靠",
      description: "基于零信任架构和 Mesh 网络技术，确保跨云通信的安全性和可靠性。",
      icon: Shield
    },
    {
      title: "智能调度",
      description: "智能的资源调度算法，根据业务需求和资源状况，自动优化资源分配。",
      icon: Zap
    },
    {
      title: "灵活扩展",
      description: "模块化架构设计，支持按需扩展功能模块，满足不同规模企业的需求。",
      icon: Server
    },
    {
      title: "成本优化",
      description: "全面的成本分析和优化建议，帮助企业降低多云环境下的运营成本。",
      icon: BarChart
    },
    {
      title: "易于运维",
      description: "简化的运维流程和自动化管理能力，降低运维复杂度，提升运维效率。",
      icon: Settings
    }
  ];

  const faqs = [
    {
      key: "1",
      question: "XMCP 支持哪些云平台？",
      answer: "XMCP 支持 Kubernetes、vCenter、OpenStack、华为云、阿里云、腾讯云、AWS、Azure 等多种主流云平台，并持续扩展支持范围。"
    },
    {
      key: "2",
      question: "XMCP 如何保证跨云网络的安全性？",
      answer: "XMCP 采用零信任架构和 Mesh 网络技术，所有跨云通信都经过加密和身份验证，确保数据传输的安全性。"
    },
    {
      key: "3",
      question: "XMCP 是否支持私有化部署？",
      answer: "支持。XMCP 可以完全私有化部署，满足企业对数据安全和合规性的要求。"
    },
    {
      key: "4",
      question: "XMCP 的计费模式是什么？",
      answer: "XMCP 支持多种计费模式，包括按资源使用量、按租户、按项目等维度计费，可根据企业需求灵活选择。"
    }
  ];

  return (
    <>
      <Hero
        title={product?.name || "XMCP · 多云纳管"}
        description={product?.description || "基于Mesh网络的多云纳管平台"}
        ctaPrimary={{ label: "商业版咨询", href: "/contact" }}
        className="rune-hero-aurora"
      />

      <section style={{ maxWidth: 1400, margin: "0 auto", padding: "40px 24px" }}>
        <Typography.Title level={1} style={{ textAlign: "center", marginBottom: 12, fontSize: 42 }}>
          产品特性介绍
        </Typography.Title>
        <Typography.Paragraph style={{ textAlign: "center", fontSize: 16, color: "var(--text-secondary)", marginBottom: 48 }}>
          为企业提供覆盖多云接入、网络编排、应用管理、计量计费的全流程能力
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
                  <div
                    style={{
                      marginBottom: 20,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      width: "100%",
                    }}
                  >
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
                <FeatureImage images={feature.images} alt={feature.title} />
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
          为什么选择 XMCP?
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
          关于 XMCP 的常见问题解答
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
              联系我们开始您的多云管理之旅
            </Typography.Title>
            <Typography.Paragraph style={{ color: "rgba(15,23,42,0.7)", fontSize: 18 }}>
              XMCP 基于Mesh网络的多云纳管平台。
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

function FeatureImage({ images, alt }: { images: string | string[]; alt: string }) {
  const imageList = useMemo(() => (Array.isArray(images) ? images : [images]), [images]);
  const hasMultiple = imageList.length > 1;
  const extendedImages = useMemo(() => {
    if (!hasMultiple) {
      return imageList;
    }
    return [imageList[imageList.length - 1], ...imageList, imageList[0]];
  }, [imageList, hasMultiple]);
  const [currentIndex, setCurrentIndex] = useState(hasMultiple ? 1 : 0);
  const [isInstant, setIsInstant] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setCurrentIndex(hasMultiple ? 1 : 0);
  }, [hasMultiple, imageList]);

  const goToNext = useCallback(() => {
    if (!hasMultiple) return;
    setCurrentIndex((prev) => prev + 1);
  }, [hasMultiple]);

  const goToPrev = useCallback(() => {
    if (!hasMultiple) return;
    setCurrentIndex((prev) => prev - 1);
  }, [hasMultiple]);

  useEffect(() => {
    if (!hasMultiple || isHovered) {
      return;
    }
    const stayDuration = 5000;
    const animationDuration = 1000;
    const interval = setInterval(goToNext, stayDuration + animationDuration);

    return () => clearInterval(interval);
  }, [goToNext, hasMultiple, isHovered]);

  useEffect(() => {
    if (!hasMultiple) {
      return;
    }
    const animationDuration = 1000;
    if (currentIndex === extendedImages.length - 1) {
      const timeout = setTimeout(() => {
        setIsInstant(true);
        setCurrentIndex(1);
      }, animationDuration);
      return () => clearTimeout(timeout);
    }
    if (currentIndex === 0) {
      const timeout = setTimeout(() => {
        setIsInstant(true);
        setCurrentIndex(extendedImages.length - 2);
      }, animationDuration);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, extendedImages.length, hasMultiple]);

  useEffect(() => {
    if (isInstant) {
      const raf = requestAnimationFrame(() => {
        setIsInstant(false);
      });
      return () => cancelAnimationFrame(raf);
    }
  }, [isInstant]);

  return (
    <div
      style={{ position: "absolute", inset: 0 }}
      onMouseEnter={() => hasMultiple && setIsHovered(true)}
      onMouseLeave={() => hasMultiple && setIsHovered(false)}
    >
      <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
        <div
          style={{
            display: "flex",
            height: "100%",
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: hasMultiple ? (isInstant ? "none" : "transform 1s ease") : "none",
          }}
        >
          {extendedImages.map((src, index) => (
            <div key={`${src}-${index}`} style={{ position: "relative", width: "100%", flex: "0 0 100%", flexShrink: 0 }}>
              <Image
                src={withBasePath(src)}
                alt={alt}
                fill
                style={{
                  objectFit: "cover",
                  objectPosition: "left top",
                }}
                unoptimized
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                  if (target.parentElement) {
                    target.parentElement.style.background = "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
                  }
                }}
              />
            </div>
          ))}
        </div>
      </div>
      {hasMultiple && (
        <>
          <button
            type="button"
            aria-label="上一张"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              goToPrev();
            }}
            style={{
              position: "absolute",
              top: "50%",
              left: 24,
              transform: "translateY(-50%)",
              width: 44,
              height: 44,
              borderRadius: "50%",
              border: "1px solid rgba(255,255,255,0.6)",
              background: "rgba(15,23,42,0.35)",
              color: "#fff",
              backdropFilter: "blur(6px)",
              cursor: "pointer",
              opacity: isHovered ? 1 : 0,
              transition: "opacity 0.2s ease",
            }}
          >
            ‹
          </button>
          <button
            type="button"
            aria-label="下一张"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              goToNext();
            }}
            style={{
              position: "absolute",
              top: "50%",
              right: 24,
              transform: "translateY(-50%)",
              width: 44,
              height: 44,
              borderRadius: "50%",
              border: "1px solid rgba(255,255,255,0.6)",
              background: "rgba(15,23,42,0.35)",
              color: "#fff",
              backdropFilter: "blur(6px)",
              cursor: "pointer",
              opacity: isHovered ? 1 : 0,
              transition: "opacity 0.2s ease",
            }}
          >
            ›
          </button>
        </>
      )}
    </div>
  );
}

