import type { Metadata } from "next";
import "antd/dist/reset.css";
import "@/styles/globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Inter } from "next/font/google";
import { AntdProvider } from "@/components/AntdProvider";
import { siteConfig } from "@/lib/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.shortName}`
  },
  description: siteConfig.defaultDescription,
  keywords: [...siteConfig.defaultKeywords],
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: siteConfig.url
  },
  applicationName: siteConfig.shortName,
  category: "technology",
  classification: "云原生, 混合云, AI 智算, 企业数字化",
  referrer: "origin-when-cross-origin",
  creator: siteConfig.name,
  publisher: siteConfig.name,
  authors: [{ name: siteConfig.name }],
  formatDetection: {
    email: false,
    telephone: false,
    address: false
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.defaultDescription,
    type: "website",
    url: siteConfig.url,
    siteName: siteConfig.shortName,
    locale: siteConfig.locale,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630 }]
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.defaultDescription,
    images: [siteConfig.ogImage]
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },
  other: {
    "geo.region": siteConfig.region,
    "geo.placename": `${siteConfig.city}, China`,
    ICBM: `${siteConfig.coordinates.latitude}, ${siteConfig.coordinates.longitude}`,
    "distribution": "global",
    "rating": "general",
    "content-language": siteConfig.language,
    "applicable-device": "pc,mobile"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN" className={inter.variable}>
      <body className="site-shell critical-shell">
        <AntdProvider>
          <Navbar />
          <main className="site-main">{children}</main>
          <Footer />
        </AntdProvider>
      </body>
    </html>
  );
}
