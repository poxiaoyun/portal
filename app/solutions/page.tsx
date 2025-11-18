import type { Metadata } from "next";
import { SolutionsPageContent } from "./SolutionsPageContent";

export const metadata: Metadata = {
  title: "解决方案",
  description: "覆盖云原生、AI 智算与数字化转型场景的行业解决方案。"
};

export default function SolutionsPage() {
  return <SolutionsPageContent />;
}
