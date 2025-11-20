"use client";

import Link from "next/link";
import Image from "next/image";
import { Card, Typography, Row, Col } from "antd";
import { blogPosts } from "@/data/blogPosts";

export function BlogPageContent() {
  return (
    <div style={{ maxWidth: 1400, margin: "0 auto", padding: "80px 24px" }}>
      <header style={{ textAlign: "center", marginBottom: 48 }}>
        <Typography.Title level={1}>博客 / 资源</Typography.Title>
        <Typography.Paragraph style={{ fontSize: 18, color: "var(--text-secondary)" }}>
          精选技术洞察、案例与白皮书，帮助团队快速掌握云原生与 AI 智算的最佳实践。
        </Typography.Paragraph>
      </header>
      <Row gutter={[24, 24]}>
        {blogPosts.map((post) => (
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

