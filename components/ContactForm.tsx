"use client";

import { useState } from "react";
import { Form, Input, message, Row, Col } from "antd";
import { Button } from "@/components/Button";
import { sanitizeInput } from "@/lib/utils";

export function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  const handleSubmit = async (values: Record<string, string>) => {
    setLoading(true);
    try {
      const payload = Object.fromEntries(
        Object.entries(values).map(([key, value]) => [key, sanitizeInput(value)])
      );

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
    });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      message.success("提交成功，我们会尽快联系您。");
      form.resetFields();
    } catch (error) {
      console.error(error);
      message.error("提交失败，请稍后再试。");
    } finally {
      setLoading(false);
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
        <Button type="primary" htmlType="submit" loading={loading} style={{ width: "100%" }}>
        提交
      </Button>
      </Form.Item>
    </Form>
  );
}

