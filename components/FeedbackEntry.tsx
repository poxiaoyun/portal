"use client";

import { ContactForm } from "@/components/ContactForm";
import { Typography, Button } from "antd";
import { MessageSquareHeart, Mail } from "lucide-react";
import { siteConfig } from "@/lib/site";

/**
 * 联系区反馈入口（静态导出站，无后端）：
 * - 配置了 NEXT_PUBLIC_TXC_PRODUCT_ID 时，渲染腾讯兔小巢反馈入口卡片（国内直连，支持微信/QQ 登录与回复推送）
 * - 未配置时保留原联系表单（Web3Forms，未配置 key 时降级 mailto）
 */

const TXC_PRODUCT_ID = process.env.NEXT_PUBLIC_TXC_PRODUCT_ID?.trim() ?? "";

export function FeedbackEntry() {
  if (!TXC_PRODUCT_ID) {
    return <ContactForm />;
  }

  const txcUrl = `https://support.qq.com/product/${encodeURIComponent(TXC_PRODUCT_ID)}`;

  return (
    <div
      className="card-glow"
      style={{
        padding: 32,
        display: "flex",
        flexDirection: "column",
        gap: 20,
        height: "100%",
        boxSizing: "border-box",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <MessageSquareHeart size={28} color="#0a7cff" />
        <Typography.Title level={4} style={{ margin: 0 }}>
          在线反馈与需求提交
        </Typography.Title>
      </div>

      <Typography.Paragraph style={{ marginBottom: 0 }}>
        点击下方按钮进入官方反馈平台（腾讯兔小巢），使用微信或 QQ 登录后即可提交需求与问题，
        我们回复后你将通过微信收到推送通知。
      </Typography.Paragraph>

      <ul style={{ margin: 0, paddingLeft: 20, color: "var(--text-secondary, #64748b)" }}>
        <li>支持提交需求描述、截图与日志附件</li>
        <li>反馈处理进度可在反馈页内跟踪</li>
        <li>紧急问题推荐直接邮件联系</li>
      </ul>

      <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: "auto" }}>
        <Button
          type="primary"
          size="large"
          href={txcUrl}
          target="_blank"
          rel="noopener noreferrer"
          icon={<MessageSquareHeart size={18} />}
          style={{ width: "100%" }}
        >
          进入反馈平台提交
        </Button>
        <Button
          size="large"
          href={`mailto:${siteConfig.contact.email}?subject=${encodeURIComponent("官网合作咨询")}`}
          icon={<Mail size={18} />}
          style={{ width: "100%" }}
        >
          邮件联系 {siteConfig.contact.email}
        </Button>
      </div>
    </div>
  );
}
