import type { Metadata } from "next";
import Image from "next/image";

const posts = [
  {
    slug: "cloud-native-observability",
    title: "构建可观测的云原生基础设施",
    description: "通过统一的数据平面实现多集群与服务网格的可观测性。",
    date: "2025-01-15",
    content: [
      "可观测体系需要指标、日志、追踪三位一体，并结合 AI 驱动的异常检测。",
      "XAMP + KubeGems 在多集群环境下提供统一控制平面，自动采集 Prometheus / Loki / Tempo 数据。",
      "通过 SLO/SLA 管理、灰度发布与回滚策略，让运维团队即时定位问题并闭环优化。"
    ],
    image: "/images/blog/cloud-native.svg"
  },
  {
    slug: "ai-platform-landing",
    title: "AI 智算平台落地的关键要素",
    description: "分享 XPAI 在算力运营、模型治理与 FinOps 方面的实践。",
    date: "2025-02-02",
    content: [
      "AI 项目成功的核心在于算力调度、数据治理与模型运营的协同。",
      "XPAI 提供 Notebook、训练、部署、推理一体化流水线，并支持 GPU/昇腾/国产算力混合调度。",
      "FinOps 能力可视化成本，实现按项目、按业务维度的费用核算与优化。"
    ],
    image: "/images/blog/ai-platform.svg"
  }
];

type Params = { slug: string };

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return { title: "文章未找到" };
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: [{ url: "/og.png" }]
    }
  };
}

export default function BlogPostPage({ params }: { params: Params }) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) {
    return (
      <div className="space-y-4">
        <h1 className="text-3xl font-semibold text-slate-900">文章不存在</h1>
      </div>
    );
  }
  return (
    <article className="space-y-6">
      <p className="text-xs uppercase tracking-[0.4em] text-brand">Insights</p>
      <h1 className="text-4xl font-semibold text-slate-900">{post.title}</h1>
      <p className="text-slate-600">{post.date}</p>
      <Image src={post.image} alt={post.title} width={800} height={420} className="rounded-3xl border border-slate-200/50" />
      <div className="prose prose-slate max-w-none">
        {post.content.map((paragraph) => (
          <p key={paragraph} className="text-slate-700">{paragraph}</p>
        ))}
      </div>
    </article>
  );
}

