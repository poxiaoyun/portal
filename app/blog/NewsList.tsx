"use client";

import Link from "next/link";
import Image from "next/image";
import { Typography } from "antd";
import type { NewsPost } from "@/lib/news";

interface NewsListProps {
  posts: NewsPost[];
}

export function NewsList({ posts }: NewsListProps) {
  return (
    <div style={{ maxWidth: 1400, margin: "0 auto", padding: "80px 24px" }}>
      <header style={{ textAlign: "center", marginBottom: 48 }}>
        <Typography.Title level={1}>公司动态</Typography.Title>
        <Typography.Paragraph style={{ fontSize: 18, color: "var(--text-secondary)" }}>
          了解我们的最新进展、产品发布和行业洞察。
        </Typography.Paragraph>
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {posts.map((post) => (
          <div key={post.slug}>
            <Link href={`/blog/${post.slug}`} style={{ textDecoration: "none" }}>
              <div 
                className="card-glow bg-slate-100"
                style={{ 
                  position: 'relative', 
                  width: '100%', 
                  paddingTop: '75%', // 4:3 Aspect Ratio
                  borderRadius: 16,
                  overflow: 'hidden',
                  cursor: 'pointer'
                }}
              >
                <Image 
                  src={post.coverImage} 
                  alt={post.title} 
                  fill
                  style={{ objectFit: "cover" }} 
                />
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '30%',
                  padding: '0 24px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  background: 'rgba(255, 255, 255, 0.6)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  borderTop: '1px solid rgba(255, 255, 255, 0.4)'
                }}>
                  <Typography.Text type="secondary" style={{ fontSize: 14, display: 'block', marginBottom: 8 }}>
                    {post.date}
                  </Typography.Text>
                  <Typography.Title level={4} ellipsis={{ rows: 2 }} style={{ margin: 0, fontSize: 18 }}>
                    {post.title}
                  </Typography.Title>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
