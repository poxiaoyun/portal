import { Avatar, Card, Space, Typography } from "antd";
import Image from "next/image";

interface TeamMemberCardProps {
  name: string;
  role: string;
  bio: string;
  avatar: string;
}

export function TeamMemberCard({ name, role, bio, avatar }: TeamMemberCardProps) {
  return (
    <Card bordered={false} style={{ borderRadius: 16, boxShadow: "0 12px 24px rgba(15,23,42,0.08)" }}>
      <Space align="center" size={16}>
        <Avatar size={64} src={<Image src={avatar} alt={name} width={64} height={64} />} />
        <Space direction="vertical" size={0}>
          <Typography.Text strong>{name}</Typography.Text>
          <Typography.Text type="secondary">{role}</Typography.Text>
        </Space>
      </Space>
      <Typography.Paragraph style={{ marginTop: 16 }} type="secondary">
        {bio}
      </Typography.Paragraph>
    </Card>
  );
}

