import type { Metadata } from "next";
import { ContactPageContent } from "./ContactPageContent";

export const metadata: Metadata = {
  title: "联系我们",
  description: "与成都破晓石科技团队取得联系，预约演示或咨询解决方案。"
};

export default function ContactPage() {
  return <ContactPageContent />;
}