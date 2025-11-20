import type { Metadata } from "next";
import Image from "next/image";
import { blogPosts } from "@/data/blogPosts";

type Params = { slug: string };

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const post = blogPosts.find((p) => p.slug === params.slug);
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
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) {
    return (
      <div className="space-y-4">
        <h1 className="text-3xl font-semibold text-slate-900">文章不存在</h1>
      </div>
    );
  }
  return (
    <article className="container space-y-8 py-12">
      <header className="mx-auto max-w-3xl">
        <p className="mb-3 text-sm font-medium uppercase tracking-wider text-slate-500">Insights</p>
        <h1 className="mb-4 text-4xl font-bold text-slate-900 lg:text-5xl">{post.title}</h1>
        <p className="text-slate-600">{post.date}</p>
      </header>
      <div className="mx-auto max-w-4xl">
        <Image src={post.image} alt={post.title} width={800} height={420} className="mb-8 w-full rounded-lg border border-slate-200" />
        <div className="prose prose-slate max-w-none">
          {post.content.map((paragraph, index) => (
            <p key={index} className="mb-4 text-base leading-relaxed text-slate-700">{paragraph}</p>
          ))}
        </div>
      </div>
    </article>
  );
}

