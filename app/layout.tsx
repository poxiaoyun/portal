import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const baseDescription =
  "成都破晓石科技有限公司专注云原生、混合云与 AI 智算领域，提供 XAMP 混合云平台、XPAI 智算平台与 KubeGems 开源方案。";

export const metadata: Metadata = {
  title: {
    default: "成都破晓石科技 | 云原生与 AI 智算官网",
    template: "%s | 成都破晓石科技"
  },
  description: baseDescription,
  metadataBase: new URL("https://www.poxiaoshi.com"),
  openGraph: {
    title: "成都破晓石科技 | 云原生与 AI 智算官网",
    description: baseDescription,
    type: "website",
    url: "https://www.poxiaoshi.com",
    images: [{ url: "/og.png", width: 1200, height: 630 }]
  },
  twitter: {
    card: "summary_large_image",
    title: "成都破晓石科技 | 云原生与 AI 智算官网",
    description: baseDescription,
    images: ["/og.png"]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN" className={inter.variable}>
      <body className="min-h-screen bg-slate-950 text-white font-sans">
        <Navbar />
        <main className="container py-12">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

