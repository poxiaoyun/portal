"use client";

import { Hero } from "@/components/Hero";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import Image from "next/image";
import { Tag, Typography, Row, Col, Statistic, Space } from "antd";

const productHighlights = [
  {
    title: "XAMP 混合云管理平台",
    description: "基于 XHCMP 智能多云网络，统一管理 Kubernetes、vCenter、华为云等环境。",
    bullets: ["全域连接编排", "智能算力调度", "一键多云纳管", "可观测与审计", "多租户隔离", "弹性计费模型"]
  },
  {
    title: "XPAI 智算平台",
    description: "覆盖模型开发、训练、部署、运维的全流程工具集。",
    bullets: ["算力池统一调度", "数据资产治理", "模型版本管理", "流水线自动化", "推理服务路由", "监控与预警"]
  },
  {
    title: "KubeGems 开源产品",
    description: "赋能企业自研云平台，实现弹性、安全、可信赖的生产级云原生体系。",
    bullets: ["多集群管理", "应用市场", "SLO/SLA 保障", "服务网格集成", "安全策略控制", "企业级支持"]
  }
];

const solutions = [
  {
    title: "云原生架构",
    pain: "多集群、跨云资源分散，交付效率与可观测性不足。",
    solution: "基于 XAMP + KubeGems 的统一控制平面，实现多云一体化调度与应用交付。",
    value: "交付周期缩短 40%，资源利用率提升至 85%。"
  },
  {
    title: "AI 智算平台",
    pain: "训练、调优、上线流程割裂，算力与数据无法高效协同。",
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

const partners = [
  { name: "anton", logo: "/images/partner/anton.svg" },
  { name: "basra", logo: "/images/partner/basra-oil-company.svg" },
  { name: "中国移动", logo: "/images/partner/china-mobile.svg" },
  { name: "云控智行", logo: "/images/partner/yunkong.svg" },
  { name: "派兹", logo: "/images/partner/paizi.svg" },
  { name: "英伟达", logo: "/images/partner/nvidia.svg" },
  { name: "中国地震台网中心", logo: "/images/partner/cese.svg" },
  { name: "西南财经大学", logo: "/images/partner/swufe.svg" },
  { name: "西南交通大学", logo: "/images/partner/swjtu.svg" },
  { name: "万物智联", logo: "/images/partner/wanwuzhilian.svg" },
  { name: "达闼机器人", logo: "/images/partner/cloudminds.svg" },
  { name: "津安达", logo: "/images/partner/jianzanda.svg" },
  { name: "云易捷", logo: "/images/partner/yunyijie.svg" }
];

const testimonials = [
  {
    author: "Zeng Jun · 客户研发经理",
    content:
      "他们在定制开发上非常专业，沟通顺畅、响应快。我们提出新需求都能被迅速理解并落地，节省了大量协作成本。"
  },
  {
    author: "某运营商用户",
    content: "团队专业、响应及时，AI 领域实力深厚。无论遇到何种问题，都能第一时间跟进并解决。"
  },
  {
    author: "某海外客户技术总监",
    content: "平台让我们的云原生架构更稳定灵活，资源调度、服务弹性全面升级，关键场景得到明显优化。"
  }
];

export default function HomePage() {
  return (
    <>
      <Hero
        title="为 AI 云原生时代创造好基座"
        description="专注云原生开源、混合云与 AI 智算平台，为企业提供覆盖容器云、混合云、智算云及 AI 能力的全栈解决方案。"
        ctaPrimary={{ label: "预约演示", href: "/contact" }}
        ctaSecondary={{ label: "了解产品矩阵", href: "/products" }}
        badge={<Tag color="blue">原生无界 · 破晓时刻</Tag>}
      />

      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 24px" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <Typography.Title level={2}>企业级云服务与AI解决方案</Typography.Title>
          <Typography.Paragraph style={{ fontSize: 18, color: "var(--text-secondary)" }}>
            破晓石科技专注云原生与 AI 智算领域，聚焦核心场景：混合云基础设施、AI 模型全生命周期治理、开源生态落地。
            依托自主可控的产品体系，帮助企业在安全合规的前提下实现资源统一调度、业务敏捷迭代与智能创新。
          </Typography.Paragraph>
        </div>
        <Row gutter={32}>
          <Col xs={24} md={8}>
            <Statistic title="算力利用率提升" value="5x" valueStyle={{ fontSize: 48 }} />
          </Col>
          <Col xs={24} md={8}>
            <Statistic title="行业解决方案" value={5} suffix="+" valueStyle={{ fontSize: 48 }} />
          </Col>
          <Col xs={24} md={8}>
            <Statistic title="国产化适配覆盖" value="100%" valueStyle={{ fontSize: 48 }} />
          </Col>
        </Row>
      </section>

      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "40px 24px" }}>
        <Typography.Title level={2} style={{ textAlign: "center", marginBottom: 24 }}>
          产品矩阵
        </Typography.Title>
        <Row gutter={[24, 24]}>
          {productHighlights.map((product) => (
            <Col xs={24} md={8} key={product.title}>
              <Card title={product.title} description={product.description}>
                <Space direction="vertical" size={6}>
                {product.bullets.map((item) => (
                    <Typography.Text key={item} type="secondary">
                      • {item}
                    </Typography.Text>
                ))}
                </Space>
            </Card>
            </Col>
          ))}
        </Row>
        <div style={{ textAlign: "center", marginTop: 24 }}>
          <Button type="link" href="/products">
            查看全部 →
          </Button>
        </div>
      </section>

      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "40px 24px" }}>
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
        <div style={{ textAlign: "center", marginTop: 24 }}>
          <Button type="link" href="/solutions">
            深入了解 →
          </Button>
        </div>
      </section>

      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "40px 24px" }}>
        <Typography.Title level={2} style={{ textAlign: "center", marginBottom: 24 }}>
          生态合作
        </Typography.Title>
        <Row gutter={[16, 16]}>
          {partners.map((partner) => (
            <Col xs={12} sm={8} md={6} lg={4} key={partner.logo}>
              <div
                style={{
                  borderRadius: 12,
                  background: "#fff",
                  boxShadow: "0 12px 24px rgba(15,23,42,0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: 96
                }}
              >
                <Image src={partner.logo} alt={partner.name} width={120} height={50} style={{ objectFit: "contain", opacity: 0.7 }} />
            </div>
            </Col>
          ))}
        </Row>
      </section>

      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "40px 24px" }}>
        <Typography.Title level={2} style={{ textAlign: "center", marginBottom: 24 }}>
          客户评价
        </Typography.Title>
        <Row gutter={[24, 24]}>
          {testimonials.map((item) => (
            <Col xs={24} md={8} key={item.author}>
              <Card title={item.author} description={item.content} />
            </Col>
          ))}
        </Row>
      </section>

      <section style={{ maxWidth: 800, margin: "0 auto", padding: "60px 24px" }}>
        <div className="card-glow" style={{ padding: 48, textAlign: "center" }}>
          <Typography.Title level={2}>准备好共建原生无界的云与 AI 基座？</Typography.Title>
          <Typography.Paragraph type="secondary">访问我们的 GitHub，或与顾问团队预约一场深入交流。</Typography.Paragraph>
          <Space size="large" style={{ marginTop: 24 }}>
            <Button type="primary" size="large" href="https://github.com/poxiaoyun" target="_blank" rel="noreferrer">
              访问 GitHub
          </Button>
            <Button type="default" size="large" href="/contact">
              立即联系
          </Button>
          </Space>
        </div>
      </section>
    </>
  );
}

