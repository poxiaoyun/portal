import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCasePost, getCasePosts } from "@/lib/cases";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { absoluteUrl, siteConfig } from "@/lib/site";

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

  const canonical = absoluteUrl(`/cases/${casePost.slug}`);

  return {
    title: `${casePost.title} - 案例中心`,
    description: casePost.excerpt,
    alternates: {
      canonical
    },
    keywords: [...siteConfig.defaultKeywords, ...casePost.tags, casePost.industryLabel || "行业案例"],
    openGraph: {
      title: casePost.title,
      description: casePost.excerpt,
      type: "article",
      url: canonical,
      images: [{ url: casePost.coverImage }],
    },
    twitter: {
      card: "summary_large_image",
      title: casePost.title,
      description: casePost.excerpt,
      images: [casePost.coverImage]
    },
  };
}

export default function CaseDetailPage({ params }: { params: Params }) {
  const casePost = getCasePost(params.slug);

  if (!casePost) {
    return notFound();
  }

  const caseJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: casePost.title,
    description: casePost.excerpt,
    image: casePost.coverImage ? [absoluteUrl(casePost.coverImage)] : undefined,
    datePublished: casePost.date,
    dateModified: casePost.date,
    inLanguage: siteConfig.language,
    mainEntityOfPage: absoluteUrl(`/cases/${casePost.slug}`),
    about: [
      casePost.industryLabel || casePost.industry,
      ...casePost.tags
    ],
    author: {
      "@type": "Organization",
      name: siteConfig.name
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl(siteConfig.ogImage)
      }
    }
  };

  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseJsonLd) }}
      />
      {/* Hero Section with Cover Image Background */}
      <section className="relative w-full py-24 md:py-32 min-h-[400px] md:min-h-[480px] flex items-center">
        {/* Background Image */}
        {casePost.coverImage && (
          <Image
            src={casePost.coverImage}
            alt={casePost.title}
            fill
            style={{ objectFit: "cover" }}
            priority
            className="z-0"
          />
        )}
        {/* Dark Overlay for contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70 z-[1]" />

        {/* Back Button */}
        <div className="absolute top-6 left-6 z-10">
          <Link
            href="/cases"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/30 transition-all text-sm border border-white/30"
          >
            <ArrowLeft size={16} />
            <span>返回案例中心</span>
          </Link>
        </div>

        <div className="container mx-auto px-4 relative z-[2]">
          <div className="max-w-4xl mx-auto text-center">
            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
              {casePost.title}
            </h1>

            {/* Excerpt */}
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto drop-shadow">
              {casePost.excerpt}
            </p>

            {/* CTA Buttons */}
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white font-medium transition-all hover:opacity-90 shadow-lg"
                style={{ background: "var(--brand)" }}
              >
                <MessageCircle size={18} />
                咨询专家
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      {casePost.challenges && casePost.challenges.length > 0 && (
        <section className="py-16 md:py-24 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-12">
                挑战和痛点
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {casePost.challenges.map((challenge, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-shadow"
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-lg mb-4"
                      style={{ background: "var(--brand)" }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <h3 className="font-semibold text-slate-900 text-lg mb-2">
                      {challenge.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {challenge.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Solutions Section */}
      {casePost.solutions && casePost.solutions.length > 0 && (
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-12">
                解决方案
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {casePost.solutions.map((solution, index) => (
                  <div
                    key={index}
                    className="bg-slate-50 rounded-xl p-6 hover:bg-slate-100 transition-colors"
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                      style={{ background: "rgba(10, 124, 255, 0.1)" }}
                    >
                      <span style={{ color: "var(--brand)", fontSize: 24 }}>
                        {solution.icon || "🚀"}
                      </span>
                    </div>
                    <h3 className="font-semibold text-slate-900 text-lg mb-3">
                      {solution.title}
                    </h3>
                    <ul className="space-y-2">
                      {solution.points.map((point, pointIndex) => (
                        <li
                          key={pointIndex}
                          className="text-slate-600 text-sm leading-relaxed flex items-start gap-2"
                        >
                          <span className="text-blue-500 mt-1">•</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Results Section */}
      {casePost.results && casePost.results.length > 0 && (
        <section className="py-16 md:py-24 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-12">
                项目成效
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {casePost.results.map((result, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-6 text-center border border-slate-200"
                  >
                    <p
                      className="text-3xl md:text-4xl font-bold mb-2"
                      style={{ color: "var(--brand)" }}
                    >
                      {result.value}
                    </p>
                    <p className="text-slate-600 text-sm">{result.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Advantages Section */}
      {casePost.advantages && casePost.advantages.length > 0 && (
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-12">
                方案优势
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {casePost.advantages.map((advantage, index) => (
                  <div key={index} className="text-center">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
                      style={{ background: "rgba(10, 124, 255, 0.1)" }}
                    >
                      <span style={{ fontSize: 28 }}>{advantage.icon || "✨"}</span>
                    </div>
                    <h3 className="font-semibold text-slate-900 text-lg mb-2">
                      {advantage.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {advantage.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Tags */}
      <section className="py-8 bg-white border-t border-slate-200">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto flex items-center gap-4 flex-wrap">
            <span className="text-slate-500 text-sm">相关标签：</span>
            {casePost.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-sm"
                style={{ background: "#f0f5ff", color: "#0a7cff" }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-20"
        style={{
          background:
            "linear-gradient(135deg, rgb(var(--brand-rgb) / 0.10) 0%, rgb(var(--brand-rgb) / 0.04) 60%, rgb(var(--brand-rgb) / 0.08) 100%)",
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              立刻开启数智化转型
            </h2>
            <p className="text-slate-600 mb-8">
              强大、全面、专业的云原生与 AI 智算服务，加速业务创新之旅！
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-lg text-white font-medium transition-all hover:opacity-90"
                style={{ background: "var(--brand)" }}
              >
                立即咨询
              </Link>
              <Link
                href="/cases"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-lg font-medium transition-all border border-slate-300 text-slate-700 hover:bg-white/60"
              >
                查看更多案例
              </Link>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
