import type { Metadata } from "next";
import { buildProductMetadata } from "../productPageFactory";
import { MohaPageContent } from "./MohaPageContent";

export const metadata: Metadata = buildProductMetadata("moha");

export default function MohaProductPage() {
  return <MohaPageContent />;
}


