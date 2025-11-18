"use client";

import type { Metadata } from "next";
import { Card } from "@/components/Card";
import { Typography, Row, Col } from "antd";

export const metadata: Metadata = {
  title: "解决方案",
  description: "覆盖云原生、AI 智算与数字化转型场景的行业解决方案。"
};

const solutionBlocks = [
  {
    title: "云原生架构",
    pains: ["多云资源割裂", "交付周期长", "缺乏可观测与治理"],
    plan: "以 XAMP + KubeGems 构建统一控制平面，纳管多集群与边缘节点，结合 GitOps / DevSecOps 实现敏捷交付。",
    value: "交付周期缩短 40%，平均故障恢复时间降低 60%，资源利用率提升 30%。"
  },
  {
    title: "AI 智算平台",
    pains: ["算力与数据孤岛", "模型上线路径复杂", "缺乏透明计费"],
    plan: "基于 XPAI 打造算力运营平台，提供 Notebook、训练、评测、部署、推理的一体化流水线与计量计费能力。",
    value: "算力利用率提升 5 倍，模型上线效率提升 3 倍，FinOps 可视化成本。"
  },
  {
    title: "企业数字化转型",
    pains: ["业务孤岛", "数据价值难以释放", "缺乏 AI 赋能场景"],
    plan: "构建云原生 + AI + 数据的统一中台，提供行业模板、低代码交付与 AI 助手，帮助业务快速创新。",
    value: "实现数据驱动决策，打造敏捷业务闭环，IT 成本整体下降 25%。"
  }
];

export default function SolutionsPage() {
  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 24px" }}>
      <header style={{ textAlign: "center", marginBottom: 48 }}>
        <Typography.Title level={1}>行业解决方案</Typography.Title>
        <Typography.Paragraph style={{ fontSize: 18, color: "var(--text-secondary)" }}>
          从底层基础设施到 AI 业务场景，形成可复制、可运营的数智化方法论。
        </Typography.Paragraph>
      </header>
      <Row gutter={[24, 24]}>
        {solutionBlocks.map((block) => (
          <Col xs={24} md={8} key={block.title}>
            <Card title={block.title}>
              <Typography.Paragraph type="secondary">痛点：{block.pains.join(" / ")}</Typography.Paragraph>
              <Typography.Paragraph type="secondary">方案：{block.plan}</Typography.Paragraph>
              <Typography.Text strong>价值：{block.value}</Typography.Text>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

