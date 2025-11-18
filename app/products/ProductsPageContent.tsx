"use client";

import { Card } from "@/components/Card";
import { Typography, Row, Col } from "antd";

const products = [
  {
    title: "XAMP 混合云管理平台",
    intro: "基于 XHCMP 智能多云网络，统一纳管公有云、私有云及边缘节点。",
    features: [
      "多云互联：自动识别与接入 Kubernetes、vCenter、OpenStack、华为云",
      "网络编排：中心化策略、零信任访问与跨域服务网格",
      "算力池化：CPU/GPU/Ascend 统一资源池与弹性调度",
      "FinOps 能力：计量计费、成本分析、预算预警",
      "智能运维：AIOps 事件关联、自动修复与容量预测",
      "安全合规：多租户隔离、敏感数据保护与审计日志"
    ]
  },
  {
    title: "XPAI 智算平台",
    intro: "连接算法、数据、算力与业务，提供全生命周期 AI 工程平台。",
    features: [
      "模型工厂：Notebook、AutoML、MLOps 流水线一体化",
      "智能调度：支持多类型 GPU/国产算力，自动分片与混部",
      "数据资产治理：数据版本、标签、权限、冷热分层管理",
      "推理服务：灰度发布、弹性扩缩、服务质量保障",
      "可观测：训练/推理指标、Tracing、异常报警",
      "生态集成：对接 Kubeflow、HuggingFace、自研 KubeGems Operator"
    ]
  },
  {
    title: "KubeGems 开源产品",
    intro: "企业级云原生管理套件，助力用户构建可控云平台。",
    features: [
      "多集群视图：跨地域集群统一纳管与巡检",
      "应用市场：Helm/Operator/自定义模版统一发布",
      "DevSecOps：安全扫描、合规策略与镜像签名",
      "SLO 管理：自动化指标采集与告警闭环",
      "服务网格：Istio 集成、零信任策略、可观测增强",
      "企业支持：专业服务、培训、联合研发与社区运营"
    ]
  }
];

export function ProductsPageContent() {
  return (
    <div style={{ maxWidth: 1400, margin: "0 auto", padding: "80px 24px" }}>
      <header style={{ textAlign: "center", marginBottom: 48 }}>
        <Typography.Title level={1}>全栈产品矩阵</Typography.Title>
        <Typography.Paragraph style={{ fontSize: 18, color: "var(--text-secondary)" }}>
          以云原生为统一基座，面向不同阶段的企业提供从基础设施到 AI 智算的产品组合。
        </Typography.Paragraph>
      </header>

      {products.map((product) => (
        <section key={product.title} style={{ marginBottom: 48 }}>
          <div className="card-glow" style={{ padding: 32 }}>
            <Typography.Title level={2}>{product.title}</Typography.Title>
            <Typography.Paragraph type="secondary">{product.intro}</Typography.Paragraph>
            <Row gutter={[16, 16]}>
              {product.features.map((feature) => (
                <Col xs={24} md={12} key={feature}>
                  <Card title={feature.split("：")[0]} description={feature.split("：")[1] ?? ""} />
                </Col>
              ))}
            </Row>
          </div>
        </section>
      ))}
    </div>
  );
}

