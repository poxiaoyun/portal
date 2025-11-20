import type { Metadata } from "next";
import { buildProductMetadata } from "../productPageFactory";
import { MapiPageContent } from "./MapiPageContent";

export const metadata: Metadata = buildProductMetadata("ai-router");

export default function MapiProductPage() {
  return <MapiPageContent />;
}


