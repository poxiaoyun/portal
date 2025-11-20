import type { Metadata } from "next";
import { buildProductMetadata } from "../productPageFactory";
import { RunePageContent } from "./RunePageContent";

export const metadata: Metadata = buildProductMetadata("rune");

export default function RuneProductPage() {
  return <RunePageContent />;
}


