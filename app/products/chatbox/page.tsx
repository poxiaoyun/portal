import type { Metadata } from "next";
import { buildProductMetadata } from "../productPageFactory";
import { ChatBoxPageContent } from "./ChatBoxPageContent";

export const metadata: Metadata = buildProductMetadata("chatbox");

export default function ChatBoxProductPage() {
  return <ChatBoxPageContent />;
}


