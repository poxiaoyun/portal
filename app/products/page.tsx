import type { Metadata } from "next";
import { Card } from "@/components/Card";
import { Grid } from "@/components/Grid";

export const metadata: Metadata = {
  title: "产品矩阵",
  description: "XAMP 混合云、XPAI 智算、KubeGems 开源产品，全栈支撑云原生与 AI 场景。"
};

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

export default function ProductsPage() {
  return (
    <div className="container space-y-16 py-12">
      <header className="mx-auto max-w-3xl text-center">
        <p className="mb-3 text-sm font-medium uppercase tracking-wider text-slate-500">Products</p>
        <h1 className="mb-4 text-4xl font-bold text-slate-900 lg:text-5xl">全栈产品矩阵</h1>
        <p className="text-lg leading-relaxed text-slate-600">以云原生为统一基座，面向不同阶段的企业提供从基础设施到 AI 智算的产品组合。</p>
      </header>

      <div className="space-y-12">
        {products.map((product) => (
          <section key={product.title} className="card-glow p-8">
            <h2 className="mb-3 text-2xl font-bold text-slate-900">{product.title}</h2>
            <p className="mb-6 text-slate-600">{product.intro}</p>
            <Grid cols="grid-cols-1 md:grid-cols-2" className="gap-4">
              {product.features.map((feature) => (
                <Card key={feature} title={feature.split("：")[0]} description={feature.split("：")[1] ?? ""} />
              ))}
            </Grid>
          </section>
        ))}
      </div>
    </div>
  );
}

