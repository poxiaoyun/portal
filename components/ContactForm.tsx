"use client";

import { useState } from "react";
import { Form, Input, message, Row, Col } from "antd";
import { Button } from "@/components/Button";
import { siteConfig } from "@/lib/site";

/**
 * 联系表单提交（静态导出站，无后端）：
 * - 配置了 NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY 时，通过 Web3Forms API 提交（免费，直达 siteConfig.contact.email）
 * - 未配置时降级为 mailto，拉起用户邮件客户端
 */

const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY?.trim() ?? "";
const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

export function ContactForm() {
  const [form] = Form.useForm();
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (values: Record<string, string>) => {
    const subject = `官网合作咨询 - ${values.company} ${values.name}`;

    // 静态导出站点不支持 API 路由；未配置 Web3Forms 时降级为 mailto
    if (!ACCESS_KEY) {
      const body = [
        `姓名：${values.name}`,
        `公司：${values.company}`,
        `邮箱：${values.email}`,
        `电话：${values.phone}`,
        "",
        "需求描述：",
        values.message
      ].join("\n");

      window.location.href = `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;

      message.success("已为您打开邮件客户端，请在邮件中确认发送。");
      form.resetFields();
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject,
          from_name: "破晓石科技官网联系表单",
          name: values.name,
          company: values.company,
          email: values.email,
          phone: values.phone,
          message: values.message
        })
      });
      const data = await res.json();
      if (!data.success) throw new Error(data.message || "提交失败");
      message.success("提交成功，我们将在 1 个工作日内与您联系。");
      form.resetFields();
    } catch {
      message.error(
        `提交失败，请稍后重试，或直接发送邮件至 ${siteConfig.contact.email}`
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={handleSubmit}
      className="card-glow"
      style={{ padding: 32 }}
      size="large"
    >
      {/* Web3Forms 蜜罐字段，用于拦截机器人提交 */}
      <input type="checkbox" name="botcheck" style={{ display: "none" }} />

      <Form.Item name="name" label="姓名" rules={[{ required: true, message: "请输入姓名" }]}>
        <Input placeholder="如：李雷" />
      </Form.Item>

      <Form.Item name="company" label="公司" rules={[{ required: true, message: "请输入公司名称" }]}>
        <Input placeholder="如：成都破晓石科技有限公司" />
      </Form.Item>

      <Row gutter={16}>
        <Col xs={24} md={12}>
          <Form.Item name="email" label="邮箱" rules={[{ required: true, type: "email", message: "请输入有效邮箱" }]}>
            <Input placeholder="name@example.com" />
          </Form.Item>
        </Col>
        <Col xs={24} md={12}>
          <Form.Item name="phone" label="电话" rules={[{ required: true, message: "请输入联系电话" }]}>
            <Input placeholder="如：138****8888" />
          </Form.Item>
        </Col>
      </Row>

      <Form.Item name="message" label="需求描述" rules={[{ required: true, message: "请填写需求描述" }]}>
        <Input.TextArea rows={4} placeholder="请描述您的云原生 / AI 相关诉求" />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" loading={submitting} style={{ width: "100%" }}>
          提交
        </Button>
      </Form.Item>
    </Form>
  );
}
