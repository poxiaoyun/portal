import type { Metadata } from "next";
import { NewsList } from "./NewsList";
import { getNewsPosts } from "@/lib/news";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "公司动态",
  description: "浏览成都破晓石科技的公司动态、行业观察、技术文章与 AI 智算实践内容。",
  path: "/blog",
  keywords: ["公司动态", "技术文章", "AI 智算", "云原生资讯"]
});

export default function BlogPage() {
  const posts = getNewsPosts();
  return <NewsList posts={posts} />;
}
