import type { Metadata } from "next";
import { buildProductMetadata } from "../productPageFactory";
import { XmcpPageContent } from "./XmcpPageContent";

export const metadata: Metadata = buildProductMetadata("xmcp");

export default function XmcpProductPage() {
  return <XmcpPageContent />;
}


