import type { Metadata } from "next";
import { NewsList } from "./NewsList";
import { getNewsPosts } from "@/lib/news";

export const metadata: Metadata = {
  title: "公司动态",
  description: "洞察云原生、AI 智算与企业数字化的技术文章与案例。"
};

export default function BlogPage() {
  const posts = getNewsPosts();
  return <NewsList posts={posts} />;
}

