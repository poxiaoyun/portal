"use client";

import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";
import { Typography, Row, Col, Card } from "antd";
import { withBasePath } from "@/lib/withBasePath";

export function ContactPageContent() {
  return (
    <div style={{ maxWidth: 1400, margin: "0 auto", padding: "80px 24px" }}>
      <header style={{ textAlign: "center", marginBottom: 48 }}>
        <Typography.Title level={1}>与我们对话未来云与 AI</Typography.Title>
        <Typography.Paragraph style={{ fontSize: 18, color: "var(--text-secondary)" }}>
          填写需求表单或通过邮箱、电话与我们联系，团队将在 1 个工作日内回复。欢迎预约线下 Workshop 或线上方案评审。
        </Typography.Paragraph>
      </header>
      <Row gutter={32}>
        <Col xs={24} md={14}>
          <ContactForm />
        </Col>
        <Col xs={24} md={10}>
          <Card bordered={false} style={{ borderRadius: 16, boxShadow: "0 12px 24px rgba(15,23,42,0.08)" }}>
            <Typography.Title level={4}>联系方式</Typography.Title>
            <Typography.Paragraph type="secondary">邮箱：support@xiaoshiai.cn</Typography.Paragraph>
            <Typography.Paragraph type="secondary">地址：四川省成都市高新区长虹科技大厦A座1403</Typography.Paragraph>
            <Typography.Paragraph type="secondary">GitHub：github.com/poxiaoyun</Typography.Paragraph>
            <div style={{ marginTop: 24 }}>
              <Image src={withBasePath("/images/map-placeholder.png")} alt="Map placeholder" width={600} height={360} style={{ borderRadius: 12 }} unoptimized />
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

