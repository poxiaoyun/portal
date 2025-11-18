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
    <div className="container space-y-16 py-12">
      <header className="mx-auto max-w-3xl text-center">
        <p className="mb-3 text-sm font-medium uppercase tracking-wider text-slate-500">Resources</p>
        <h1 className="mb-4 text-4xl font-bold text-slate-900 lg:text-5xl">博客 / 资源</h1>
        <p className="text-lg leading-relaxed text-slate-600">精选技术洞察、案例与白皮书，帮助团队快速掌握云原生与 AI 智算的最佳实践。</p>
      </header>
      <div className="grid gap-6 md:grid-cols-2">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="card-glow overflow-hidden transition-all hover:-translate-y-1">
            <Image src={post.image} alt={post.title} width={800} height={420} className="w-full" />
            <div className="p-6">
              <p className="mb-2 text-xs text-slate-500">
                {post.date} · {post.readingTime}
              </p>
              <h2 className="mb-2 text-xl font-semibold text-slate-900">{post.title}</h2>
              <p className="text-sm leading-relaxed text-slate-600">{post.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

