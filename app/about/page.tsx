import type { Metadata } from "next";
import { AboutPageContent } from "./AboutPageContent";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "关于我们",
  description: "了解成都破晓石科技有限公司的使命、团队、发展历程与开源生态。",
  path: "/about",
  keywords: ["公司介绍", "企业资质", "开源生态", "成都科技公司"]
});

export default function AboutPage() {
  return <AboutPageContent />;
}
