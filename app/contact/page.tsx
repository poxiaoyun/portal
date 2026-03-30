import type { Metadata } from "next";
import { ContactPageContent } from "./ContactPageContent";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "联系我们",
  description: "联系成都破晓石科技团队，预约演示、产品咨询、PoC 方案评审或项目合作。",
  path: "/contact",
  keywords: ["联系方式", "预约演示", "方案咨询", "PoC", "成都"]
});

export default function ContactPage() {
  return <ContactPageContent />;
}
