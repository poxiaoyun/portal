"use client";

import { Layout, Row, Col, Typography, Space } from "antd";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <Layout.Footer style={{ background: "#fff", borderTop: "1px solid rgba(15,23,42,0.08)" }}>
      <div style={{ maxWidth: 1400, margin: "0 auto" }}>
        <Row gutter={[32, 24]}>
          <Col xs={24} md={12} lg={10}>
            <Typography.Title level={5}>成都破晓石科技有限公司</Typography.Title>
            <Typography.Paragraph type="secondary">
              原生无界，破晓时刻 · Chengdu Poxiaoshi Technology Co., Ltd.
            </Typography.Paragraph>
          </Col>
          <Col xs={24} md={6} lg={7}>
            <Typography.Title level={5}>快速链接</Typography.Title>
            <Space direction="vertical">
            <a href="/products">产品</a>
            <a href="/solutions">解决方案</a>
            <a href="/blog">博客 / 资源</a>
            </Space>
          </Col>
          <Col xs={24} md={6} lg={7}>
            <Typography.Title level={5}>联系我们</Typography.Title>
            <Typography.Paragraph type="secondary" style={{ marginBottom: 4 }}>
              support@xiaoshiai.cn
            </Typography.Paragraph>
            <Typography.Paragraph type="secondary">
              四川省成都市高新区长虹科技大厦A座1403
            </Typography.Paragraph>
          </Col>
        </Row>
        <Row style={{ marginTop: 32, borderTop: "1px solid rgba(15,23,42,0.08)", paddingTop: 24 }}>
          <Col span={12}>
            <Typography.Text type="secondary">© {year} 破晓石科技 · All rights reserved.</Typography.Text>
          </Col>
          <Col span={12} style={{ textAlign: "right" }}>
            <Typography.Text type="secondary">蜀ICP备 · 备案号占位</Typography.Text>
          </Col>
        </Row>
      </div>
    </Layout.Footer>
  );
}

