"use client";

import Link from "next/link";
import Image from "next/image";
import { Card, Typography, Row, Col } from "antd";

const posts = [
  {
    slug: "cloud-native-observability",
    title: "构建可观测的云原生基础设施",
    excerpt: "从多集群到服务网格，如何通过统一的指标、日志与追踪体系打造企业级可观测能力。",
    date: "2025-01-15",
    readingTime: "8 min",
    image: "/images/blog/cloud-native.svg"
  },
  {
    slug: "ai-platform-landing",
    title: "AI 智算平台落地的关键要素",
    excerpt: "以 XPAI 为例，分享模型生命周期治理、算力调度与 FinOps 的实践方法。",
    date: "2025-02-02",
    readingTime: "10 min",
    image: "/images/blog/ai-platform.svg"
  }
];

export function BlogPageContent() {
  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 24px" }}>
      <header style={{ textAlign: "center", marginBottom: 48 }}>
        <Typography.Title level={1}>博客 / 资源</Typography.Title>
        <Typography.Paragraph style={{ fontSize: 18, color: "var(--text-secondary)" }}>
          精选技术洞察、案例与白皮书，帮助团队快速掌握云原生与 AI 智算的最佳实践。
        </Typography.Paragraph>
      </header>
      <Row gutter={[24, 24]}>
        {posts.map((post) => (
          <Col xs={24} md={12} key={post.slug}>
            <Link href={`/blog/${post.slug}`} style={{ textDecoration: "none" }}>
              <Card
                hoverable
                cover={<Image src={post.image} alt={post.title} width={800} height={420} style={{ width: "100%" }} />}
                style={{ borderRadius: 16 }}
              >
                <Typography.Text type="secondary">
                  {post.date} · {post.readingTime}
                </Typography.Text>
                <Typography.Title level={3}>{post.title}</Typography.Title>
                <Typography.Paragraph type="secondary">{post.excerpt}</Typography.Paragraph>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
}

