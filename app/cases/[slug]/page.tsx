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
    <article className="min-h-screen bg-white">
      {/* Hero Section */}
      <div
        className="relative w-full"
        style={{
          height: "400px",
          background: "linear-gradient(135deg, #0a7cff 0%, #0052cc 100%)",
        }}
      >
        {/* Back Button */}
        <div className="absolute top-6 left-6 z-10">
          <Link
            href="/cases"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors"
          >
            <ArrowLeft size={18} />
            <span>返回案例中心</span>
          </Link>
        </div>

        {/* Hero Content */}
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ padding: "0 24px" }}
        >
          <div className="text-center text-white max-w-4xl">
            {/* Industry Badge */}
            <span
              className="inline-block px-4 py-1 rounded-full text-sm font-medium mb-4"
              style={{ background: "rgba(255, 255, 255, 0.2)" }}
            >
              {casePost.industryLabel}
            </span>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              {casePost.title}
            </h1>

            {/* Meta Info */}
            <div className="flex items-center justify-center gap-4 text-white/80">
              <span>客户：{casePost.customer}</span>
              <span>·</span>
              <span>目标：{casePost.goal}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Cover Image */}
          <div
            className="relative w-full mb-12 rounded-xl overflow-hidden shadow-lg"
            style={{ height: "450px", marginTop: "-80px" }}
          >
            <Image
              src={casePost.coverImage}
              alt={casePost.title}
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {casePost.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-sm"
                style={{
                  background: "#f0f5ff",
                  color: "#0a7cff",
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Markdown Content */}
          <div className="prose prose-slate prose-lg max-w-none prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4 prose-p:text-slate-600 prose-p:leading-relaxed prose-li:text-slate-600 prose-strong:text-slate-900 prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:bg-slate-50 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-blockquote:not-italic prose-table:border-collapse prose-th:bg-slate-100 prose-th:p-3 prose-td:p-3 prose-td:border prose-td:border-slate-200">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {casePost.content}
            </ReactMarkdown>
          </div>

          {/* CTA Section */}
          <div
            className="mt-16 p-8 rounded-2xl text-center"
            style={{
              background: "linear-gradient(135deg, #f0f5ff 0%, #e6f0ff 100%)",
            }}
          >
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              对此案例感兴趣？
            </h3>
            <p className="text-slate-600 mb-6">
              联系我们，了解如何为您的企业定制数智化解决方案
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-white font-medium transition-colors"
              style={{ background: "#0a7cff" }}
            >
              立即咨询
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
