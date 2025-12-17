import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getCasePost, getCasePosts } from "@/lib/cases";
import { ArrowLeft } from "lucide-react";

type Params = { slug: string };

export function generateStaticParams() {
  const cases = getCasePosts();
  return cases.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const casePost = getCasePost(params.slug);
  if (!casePost) return { title: "案例未找到" };
  return {
    title: `${casePost.title} - 案例中心 - 晓石云`,
    description: casePost.excerpt,
    openGraph: {
      title: casePost.title,
      description: casePost.excerpt,
      images: [{ url: casePost.coverImage }],
    },
  };
}

export default function CaseDetailPage({ params }: { params: Params }) {
  const casePost = getCasePost(params.slug);

  if (!casePost) {
    return notFound();
  }

  return (
    <article className="container mx-auto space-y-8 py-12 px-4">
      {/* Header */}
      <header className="mx-auto max-w-4xl">
        {/* Back Link */}
        <Link
          href="/cases"
          className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-700 transition-colors mb-8"
        >
          <ArrowLeft size={18} />
          <span>返回案例中心</span>
        </Link>

        {/* Meta Info */}
        <div className="flex items-center gap-3 mb-4">
          <span
            className="px-3 py-1 rounded-full text-sm font-medium"
            style={{ background: "#f0f5ff", color: "#0a7cff" }}
          >
            {casePost.industryLabel}
          </span>
          <span className="text-slate-400">·</span>
          <span className="text-slate-500 text-sm">{casePost.customer}</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
          {casePost.title}
        </h1>

        {/* Goal */}
        <p className="text-lg text-slate-600">
          项目目标：{casePost.goal}
        </p>
      </header>

      {/* Cover Image */}
      <div className="mx-auto max-w-4xl">
        <div className="relative w-full h-[400px] rounded-xl overflow-hidden border border-slate-200">
          <Image
            src={casePost.coverImage}
            alt={casePost.title}
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
      </div>

      {/* Tags */}
      <div className="mx-auto max-w-4xl">
        <div className="flex flex-wrap gap-2">
          {casePost.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full text-sm"
              style={{
                background: "#f5f5f5",
                color: "#666",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Markdown Content */}
      <div className="mx-auto max-w-4xl">
        <div className="prose prose-slate prose-lg max-w-none prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4 prose-p:text-slate-600 prose-p:leading-relaxed prose-li:text-slate-600 prose-strong:text-slate-900 prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:bg-slate-50 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-blockquote:not-italic prose-table:border-collapse prose-th:bg-slate-100 prose-th:p-3 prose-td:p-3 prose-td:border prose-td:border-slate-200">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {casePost.content}
          </ReactMarkdown>
        </div>
      </div>

      {/* CTA Section */}
      <div className="mx-auto max-w-4xl">
        <div
          className="p-8 rounded-2xl text-center"
          style={{ background: "#f8fafc" }}
        >
          <h3 className="text-xl font-bold text-slate-900 mb-3">
            对此案例感兴趣？
          </h3>
          <p className="text-slate-600 mb-6">
            联系我们，了解如何为您的企业定制数智化解决方案
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-white font-medium transition-colors hover:opacity-90"
            style={{ background: "var(--brand)" }}
          >
            立即咨询
          </Link>
        </div>
      </div>
    </article>
  );
}
