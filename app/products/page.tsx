import type { Metadata } from "next";
import { ProductsPageContent } from "./ProductsPageContent";

export const metadata: Metadata = {
  title: "产品矩阵",
  description: "XAMP 混合云、XPAI 智算、KubeGems 开源产品，全栈支撑云原生与 AI 场景。"
};

export default function ProductsPage() {
  return <ProductsPageContent />;
}

