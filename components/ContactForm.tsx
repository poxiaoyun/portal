"use client";

import { Form, Input, message, Row, Col } from "antd";
import { Button } from "@/components/Button";
import { siteConfig } from "@/lib/site";

export function ContactForm() {
  const [form] = Form.useForm();

  const handleSubmit = (values: Record<string, string>) => {
    const subject = `官网合作咨询 - ${values.company} ${values.name}`;
    const body = [
      `姓名：${values.name}`,
      `公司：${values.company}`,
      `邮箱：${values.email}`,
      `电话：${values.phone}`,
      "",
      "需求描述：",
      values.message
    ].join("\n");

    // 静态导出站点不支持 API 路由，通过 mailto 拉起用户邮件客户端发送
    window.location.href = `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    message.success("已为您打开邮件客户端，请在邮件中确认发送。");
    form.resetFields();
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
        <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
          提交
        </Button>
      </Form.Item>
    </Form>
  );
}
