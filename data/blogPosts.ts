export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  date: string;
  readingTime: string;
  image: string;
  content: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "cloud-native-observability",
    title: "构建可观测的云原生基础设施",
    description: "通过统一的数据平面实现多集群与服务网格的可观测性。",
    excerpt: "从多集群到服务网格，如何通过统一的指标、日志与追踪体系打造企业级可观测能力。",
    date: "2025-01-15",
    readingTime: "8 min",
    image: "/images/blog/cloud-native.svg",
    content: [
      "可观测体系需要指标、日志、追踪三位一体，并结合 AI 驱动的异常检测。",
      "XAMP + KubeGems 在多集群环境下提供统一控制平面，自动采集 Prometheus / Loki / Tempo 数据。",
      "通过 SLO/SLA 管理、灰度发布与回滚策略，让运维团队即时定位问题并闭环优化。"
    ]
  },
  {
    slug: "ai-platform-landing",
    title: "AI 智算平台落地的关键要素",
    description: "分享 XPAI 在算力运营、模型治理与 FinOps 方面的实践。",
    excerpt: "以 XPAI 为例，分享模型生命周期治理、算力调度与 FinOps 的实践方法。",
    date: "2025-02-02",
    readingTime: "10 min",
    image: "/images/blog/ai-platform.svg",
    content: [
      "AI 项目成功的核心在于算力调度、数据治理与模型运营的协同。",
      "XPAI 提供 Notebook、训练、部署、推理一体化流水线，并支持 GPU/昇腾/国产算力混合调度。",
      "FinOps 能力可视化成本，实现按项目、按业务维度的费用核算与优化。"
    ]
  }
];


