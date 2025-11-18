"use client";

import { TeamMemberCard } from "@/components/TeamMemberCard";
import { Typography, Row, Col, Card as AntCard, Timeline } from "antd";

const team = [
  {
    name: "马青",
    role: "创始人 · KubeGems 发起人",
    bio: "曾任达闼机器人云平台负责人，主导云平台与 AI 平台建设及模型训练项目，拥有十余年云计算经验。",
    avatar: "/images/team/maqing.svg"
  },
  {
    name: "张李昆",
    role: "联合创始人 · KubeGems 架构师",
    bio: "主攻云基础设施方向，取得多项专利，擅长多云与 AI 基础平台设计与落地。",
    avatar: "/images/team/zhanglikun.svg"
  },
  {
    name: "邓宇",
    role: "AI 架构师",
    bio: "丰富的大模型训练、推理工程化经验，负责 AI 平台架构设计与算力生态合作。",
    avatar: "/images/team/dengyu.svg"
  }
];

const timeline = [
  { year: "2019", event: "成立破晓石科技，启动 KubeGems 开源社区。" },
  { year: "2020", event: "发布 XAMP 混合云平台，落地大型工业集团。" },
  { year: "2022", event: "推出 XPAI 智算平台，构建模型全生命周期能力。" },
  { year: "2024", event: "与高校、科研机构共建 AI 原生数智基础设施。" }
];

export function AboutPageContent() {
  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 24px" }}>
      <header style={{ textAlign: "center", marginBottom: 48 }}>
        <Typography.Title level={1}>以技术驱动成长</Typography.Title>
        <Typography.Paragraph style={{ fontSize: 18, color: "var(--text-secondary)" }}>
          成都破晓石科技有限公司致力于云原生、开源产品与 AI 智算平台的自主研发。我们为企业提供覆盖容器云、混合云、AI 智算云及 AI 能力应用的全栈解决方案。
        </Typography.Paragraph>
      </header>

      <Row gutter={24} style={{ marginBottom: 48 }}>
        <Col xs={24} md={12}>
          <AntCard bordered={false} style={{ borderRadius: 16, boxShadow: "0 12px 24px rgba(15,23,42,0.08)" }}>
            <Typography.Title level={3}>使命与愿景</Typography.Title>
            <Typography.Paragraph type="secondary">
              以云原生为统一基座，打造面向未来的 AI 原生基础设施。使命：让企业以最短路径拥抱云原生与 AI；愿景：成为企业数智化进程中的长期技术伙伴。
            </Typography.Paragraph>
          </AntCard>
        </Col>
        <Col xs={24} md={12}>
          <AntCard bordered={false} style={{ borderRadius: 16, boxShadow: "0 12px 24px rgba(15,23,42,0.08)" }}>
            <Typography.Title level={3}>开源生态</Typography.Title>
            <Typography.Paragraph type="secondary">
              KubeGems 等自研开源项目已在多个行业落地，构建完善的社区、培训与联合创新机制。GitHub：github.com/poxiaoyun。
            </Typography.Paragraph>
          </AntCard>
        </Col>
      </Row>

      <section style={{ marginBottom: 48 }}>
        <Typography.Title level={2} style={{ textAlign: "center", marginBottom: 24 }}>
          核心团队
        </Typography.Title>
        <Row gutter={[24, 24]}>
          {team.map((member) => (
            <Col xs={24} md={8} key={member.name}>
              <TeamMemberCard {...member} />
            </Col>
          ))}
        </Row>
      </section>

      <section>
        <Typography.Title level={2} style={{ textAlign: "center", marginBottom: 24 }}>
          发展历程
        </Typography.Title>
        <Timeline
          items={timeline.map((item) => ({
            color: "blue",
            label: item.year,
            children: item.event
          }))}
        />
      </section>
    </div>
  );
}

