import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getNewsPost, getNewsPosts } from "@/lib/news";

type Params = { slug: string };

export function generateStaticParams() {
  const posts = getNewsPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const post = getNewsPost(params.slug);
  if (!post) return { title: "文章未找到" };
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.coverImage }]
    }
  };
}

export default function BlogPostPage({ params }: { params: Params }) {
  const post = getNewsPost(params.slug);
  
  if (!post) {
    notFound();
  }

  return (
    <article className="container mx-auto space-y-8 py-12 px-4">
      <header className="mx-auto max-w-3xl text-center">
        <p className="mb-3 text-sm font-medium uppercase tracking-wider text-slate-500">Company News</p>
        <h1 className="mb-4 text-4xl font-bold text-slate-900 lg:text-5xl">{post.title}</h1>
        <p className="text-slate-600">{post.date}</p>
      </header>
      <div className="mx-auto max-w-4xl">
        <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden border border-slate-200">
             <Image 
                src={post.coverImage} 
                alt={post.title} 
                fill
                style={{ objectFit: "cover" }}
            />
        </div>
        <div className="prose prose-slate max-w-none">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {post.content}
          </ReactMarkdown>
        </div>
      </div>
    </article>
  );
}

