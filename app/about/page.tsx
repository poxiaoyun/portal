import type { Metadata } from "next";
import { AboutPageContent } from "./AboutPageContent";

export const metadata: Metadata = {
  title: "关于我们",
  description: "了解成都破晓石科技有限公司的使命、团队、发展历程与开源生态。"
};

export default function AboutPage() {
  return <AboutPageContent />;
}

