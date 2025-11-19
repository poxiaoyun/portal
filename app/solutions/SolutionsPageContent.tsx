"use client";

import { Card } from "@/components/Card";
import { Typography, Row, Col } from "antd";

const solutions = [
  {
    title: "云原生架构",
    pain: "多集群、跨云资源分散，交付效率与可观测性不足。",
    solution: "基于 XAMP + KubeGems 的统一控制平面，实现多云一体化调度与应用交付。",
    value: "交付周期缩短 40%，资源利用率提升至 85%。"
  },
  {
    title: "AI 智算平台",
    pain: "训练、调优、上线MCP ，算力与数据无法高效协同。",
    solution: "XPAI 智算平台提供模型全生命周期管理与算力自治调度。",
    value: "算力利用率提升 5 倍，AI 项目从研发到上线缩短 60%。"
  },
  {
    title: "企业数字化转型",
    pain: "业务系统烟囱林立，缺乏统一的数据与智能中台。",
    solution: "提供云原生底座 + AI 赋能的业务中台架构，构建可持续演进的数智底座。",
    value: "IT 成本可控、数据驱动决策、打造敏捷业务闭环。"
  }
];

export function SolutionsPageContent() {
  return (
    <div style={{ maxWidth: 1400, margin: "0 auto", padding: "80px 24px" }}>
      <header style={{ textAlign: "center", marginBottom: 48 }}>
        <Typography.Title level={1}>案例中心</Typography.Title>
        <Typography.Paragraph style={{ fontSize: 18, color: "var(--text-secondary)" }}>
          从底层基础设施到 AI 业务场景，形成可复制、可运营的数智化方法论。
        </Typography.Paragraph>
      </header>

      <section style={{ marginBottom: 80 }}>
        <Typography.Title level={2} style={{ textAlign: "center", marginBottom: 24 }}>
          解决方案
        </Typography.Title>
        <Row gutter={[24, 24]}>
          {solutions.map((item) => (
            <Col xs={24} md={8} key={item.title}>
              <Card title={item.title}>
                <Typography.Paragraph type="secondary">痛点：{item.pain}</Typography.Paragraph>
                <Typography.Paragraph type="secondary">方案：{item.solution}</Typography.Paragraph>
                <Typography.Text strong>价值：{item.value}</Typography.Text>
              </Card>
            </Col>
          ))}
        </Row>
      </section>
    </div>
  );
}

