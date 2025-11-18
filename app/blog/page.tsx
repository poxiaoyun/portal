import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "博客与资源",
  description: "洞察云原生、AI 智算与企业数字化的技术文章与案例。"
};

const posts = [
  {
    slug: "cloud-native-observability",
    title: "构建可观测的云原生基础设施",
    excerpt: "从多集群到服务网格，如何通过统一的指标、日志与追踪体系打造企业级可观测能力。",
    date: "2025-01-15",
    readingTime: "8 min",
    image: "/images/blog/cloud-native.svg"
  },
  {
    slug: "ai-platform-landing",
    title: "AI 智算平台落地的关键要素",
    excerpt: "以 XPAI 为例，分享模型生命周期治理、算力调度与 FinOps 的实践方法。",
    date: "2025-02-02",
    readingTime: "10 min",
    image: "/images/blog/ai-platform.svg"
  }
];

export default function BlogPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-4">
        <p className="text-sm uppercase tracking-[0.4em] text-brand-light">Resources</p>
        <h1 className="text-4xl font-semibold text-white">博客 / 资源</h1>
        <p className="text-slate-200/80">精选技术洞察、案例与白皮书，帮助团队快速掌握云原生与 AI 智算的最佳实践。</p>
      </header>
      <div className="grid gap-6 md:grid-cols-2">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="rounded-3xl border border-white/10 bg-white/5 p-4 transition hover:-translate-y-1">
            <Image src={post.image} alt={post.title} width={800} height={420} className="rounded-2xl" />
            <div className="mt-4 space-y-2">
              <p className="text-xs text-slate-400">
                {post.date} · {post.readingTime}
              </p>
              <h2 className="text-2xl font-semibold text-white">{post.title}</h2>
              <p className="text-sm text-slate-200/80">{post.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

