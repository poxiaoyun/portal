import { Hero } from "@/components/Hero";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Grid } from "@/components/Grid";
import Image from "next/image";
import Link from "next/link";

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
    <div className="space-y-16">
      <Hero
        title="云原生与 AI 智算，一体化企业级底座"
        subtitle="Chengdu Poxiaoshi Technology Co., Ltd."
        description="专注自研开源产品、混合云与 AI 智算平台，为企业提供覆盖容器云、混合云、智算云及 AI 能力的全栈解决方案。"
        ctaPrimary={{ label: "预约演示", href: "/contact" }}
        ctaSecondary={{ label: "了解产品矩阵", href: "/products" }}
        badge={<span className="inline-flex items-center rounded-full bg-brand/15 px-3 py-1 text-xs text-brand-light">原生无界 · 破晓时刻</span>}
      />

      <section className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.4em] text-brand-light">About us</p>
          <h2 className="text-3xl font-semibold text-white">技术驱动，服务企业级云与 AI</h2>
          <p className="text-slate-200/80">
            成都破晓石科技有限公司专注云原生与 AI 智算领域，聚焦核心场景：混合云基础设施、AI 模型全生命周期治理、开源生态落地。
            依托自主可控的产品体系，帮助企业在安全合规的前提下实现资源统一调度、业务敏捷迭代与智能创新。
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            <div>
              <p className="text-3xl font-bold text-brand-light">5x</p>
              <p className="text-sm text-slate-300">算力利用率提升</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-brand-light">30+</p>
              <p className="text-sm text-slate-300">行业解决方案</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-brand-light">100%</p>
              <p className="text-sm text-slate-300">国产化适配覆盖</p>
            </div>
          </div>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-xl font-semibold text-white">核心优势</h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-200">
            <li>稳定：原生节点部署，支持数千节点并发运行。</li>
            <li>安全：企业级虚拟化技术与自动负载均衡，消除单点故障。</li>
            <li>AI 能力：大模型训练 / 调优 / 推理一体化，兼容国产与国际算力平台。</li>
          </ul>
        </div>
      </section>

      <section>
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-brand-light">Products</p>
            <h2 className="text-3xl font-semibold text-white">产品矩阵</h2>
          </div>
          <Button variant="secondary" asChild>
            <Link href="/products">查看全部</Link>
          </Button>
        </div>
        <Grid>
          {productHighlights.map((product) => (
            <Card key={product.title} title={product.title} description={product.description}>
              <ul className="space-y-1 text-xs text-slate-200/90">
                {product.bullets.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </Card>
          ))}
        </Grid>
      </section>

      <section>
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-brand-light">Solutions</p>
            <h2 className="text-3xl font-semibold text-white">解决方案</h2>
          </div>
          <Button variant="secondary" asChild>
            <Link href="/solutions">深入了解</Link>
          </Button>
        </div>
        <Grid cols="grid-cols-1 md:grid-cols-3">
          {solutions.map((item) => (
            <Card key={item.title} title={item.title}>
              <p className="text-xs text-slate-300">痛点：{item.pain}</p>
              <p className="text-xs text-slate-300">方案：{item.solution}</p>
              <p className="text-xs text-emerald-300">价值：{item.value}</p>
            </Card>
          ))}
        </Grid>
      </section>

      <section>
        <p className="text-sm uppercase tracking-[0.4em] text-brand-light">Partners</p>
        <h2 className="text-3xl font-semibold text-white">生态合作</h2>
        <div className="mt-6 grid grid-cols-2 gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 sm:grid-cols-3 lg:grid-cols-6">
          {partners.map((partner) => (
            <div key={partner.logo} className="flex h-20 items-center justify-center rounded-2xl bg-slate-900/40 p-4">
              <Image src={partner.logo} alt={partner.name} width={140} height={60} />
            </div>
          ))}
        </div>
      </section>

      <section>
        <p className="text-sm uppercase tracking-[0.4em] text-brand-light">Testimonials</p>
        <h2 className="text-3xl font-semibold text-white">客户评价</h2>
        <Grid cols="grid-cols-1 md:grid-cols-3" className="mt-6">
          {testimonials.map((item) => (
            <Card key={item.author} title={item.author} description={item.content} />
          ))}
        </Grid>
      </section>

      <section className="rounded-3xl border border-brand/20 bg-brand/10 p-10 text-center">
        <h2 className="text-3xl font-semibold text-white">准备好共建原生无界的云与 AI 基座？</h2>
        <p className="mt-4 text-slate-200/80">访问我们的 GitHub，或与顾问团队预约一场深入交流。</p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <Button asChild>
            <a href="https://github.com/poxiaoyun" target="_blank" rel="noreferrer">
              访问 GitHub
            </a>
          </Button>
          <Button variant="secondary" asChild>
            <Link href="/contact">立即联系</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

