import type { Metadata } from "next";
import { buildProductMetadata } from "../productPageFactory";
import { KubeGemsPageContent } from "./KubeGemsPageContent";

export const metadata: Metadata = buildProductMetadata("kubegems");

export default function KubeGemsProductPage() {
  return <KubeGemsPageContent />;
}


