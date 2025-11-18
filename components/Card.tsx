import { Card as AntCard, Space, Typography } from "antd";
import type { ReactNode } from "react";

interface CardProps {
  title: string;
  description?: string;
  icon?: ReactNode;
  children?: ReactNode;
  className?: string;
}

export function Card({ title, description, icon, children, className }: CardProps) {
  return (
    <AntCard hoverable className={className} style={{ borderRadius: 16 }}>
      <Space direction="vertical" size={12} style={{ width: "100%" }}>
        {icon && <div>{icon}</div>}
        <Typography.Title level={4} style={{ margin: 0 }}>
          {title}
        </Typography.Title>
        {description && (
          <Typography.Paragraph type="secondary" style={{ marginBottom: 0 }}>
            {description}
          </Typography.Paragraph>
        )}
        {children}
      </Space>
    </AntCard>
  );
}

