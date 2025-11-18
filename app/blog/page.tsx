import type { Metadata } from "next";
import { BlogPageContent } from "./BlogPageContent";

export const metadata: Metadata = {
  title: "博客与资源",
  description: "洞察云原生、AI 智算与企业数字化的技术文章与案例。"
};

export default function BlogPage() {
  return <BlogPageContent />;
}

