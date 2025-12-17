"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Typography, Tabs, Tag, Space } from "antd";
import type { CasePost, IndustryKey } from "@/lib/cases";
import { industryTabs } from "@/lib/cases";

interface CasesPageContentProps {
  cases: CasePost[];
}

export function CasesPageContent({ cases }: CasesPageContentProps) {
  const [activeIndustry, setActiveIndustry] = useState<IndustryKey>("all");

  const filteredCases =
    activeIndustry === "all"
      ? cases
      : cases.filter((c) => c.industry === activeIndustry);

  const tabItems = industryTabs.map((tab) => ({
    key: tab.key,
    label: (
      <span style={{ fontSize: 16 }}>
        {tab.label}
        <span
          style={{
            marginLeft: 8,
            fontSize: 12,
            color: "var(--text-secondary)",
          }}
        >
          (
          {tab.key === "all"
            ? cases.length
            : cases.filter((c) => c.industry === tab.key).length}
          )
        </span>
      </span>
    ),
  }));

  return (
    <div style={{ maxWidth: 1400, margin: "0 auto", padding: "80px 24px" }}>
      {/* Header */}
      <header style={{ textAlign: "center", marginBottom: 48 }}>
        <Typography.Title level={1}>案例中心</Typography.Title>
        <Typography.Paragraph
          style={{ fontSize: 18, color: "var(--text-secondary)", maxWidth: 700, margin: "0 auto" }}
        >
          覆盖能源、制造、教育、运营商等行业的数智化转型案例，展示我们在云原生和
          AI 智算领域的实践成果。
        </Typography.Paragraph>
      </header>

      {/* Industry Tabs */}
      <div style={{ marginBottom: 40 }}>
        <Tabs
          activeKey={activeIndustry}
          onChange={(key) => setActiveIndustry(key as IndustryKey)}
          items={tabItems}
          centered
          size="large"
        />
      </div>

      {/* Case Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredCases.map((caseItem) => (
          <CaseCard key={caseItem.slug} caseItem={caseItem} />
        ))}
      </div>

      {/* Empty State */}
      {filteredCases.length === 0 && (
        <div style={{ textAlign: "center", padding: "80px 0" }}>
          <Typography.Text type="secondary" style={{ fontSize: 16 }}>
            该行业暂无案例，敬请期待
          </Typography.Text>
        </div>
      )}
    </div>
  );
}

interface CaseCardProps {
  caseItem: CasePost;
}

function CaseCard({ caseItem }: CaseCardProps) {
  return (
    <Link href={`/cases/${caseItem.slug}`} style={{ textDecoration: "none" }}>
      <div
        className="card-glow"
        style={{
          background: "#fff",
          borderRadius: 16,
          overflow: "hidden",
          cursor: "pointer",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-4px)";
          e.currentTarget.style.boxShadow = "0 12px 40px rgba(0, 0, 0, 0.12)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "none";
        }}
      >
        {/* Cover Image */}
        <div
          style={{
            position: "relative",
            width: "100%",
            paddingTop: "60%", // 5:3 Aspect Ratio
            backgroundColor: "#f0f2f5",
          }}
        >
          <Image
            src={caseItem.coverImage}
            alt={caseItem.title}
            fill
            style={{ objectFit: "cover" }}
          />
          {/* Industry Badge */}
          <div
            style={{
              position: "absolute",
              top: 12,
              left: 12,
            }}
          >
            <Tag
              color="blue"
              style={{
                borderRadius: 4,
                fontSize: 12,
                padding: "2px 8px",
              }}
            >
              {caseItem.industryLabel}
            </Tag>
          </div>
        </div>

        {/* Content */}
        <div style={{ padding: "20px 20px 24px" }}>
          {/* Customer & Goal */}
          <Space size={8} style={{ marginBottom: 8 }}>
            <Typography.Text
              strong
              style={{ color: "var(--brand)", fontSize: 14 }}
            >
              {caseItem.customer}
            </Typography.Text>
            <Typography.Text type="secondary" style={{ fontSize: 13 }}>
              · {caseItem.goal}
            </Typography.Text>
          </Space>

          {/* Title */}
          <Typography.Title
            level={4}
            ellipsis={{ rows: 2 }}
            style={{ margin: "8px 0 12px", fontSize: 18, lineHeight: 1.4 }}
          >
            {caseItem.title}
          </Typography.Title>

          {/* Excerpt */}
          <Typography.Paragraph
            ellipsis={{ rows: 2 }}
            type="secondary"
            style={{ margin: 0, fontSize: 14, lineHeight: 1.6 }}
          >
            {caseItem.excerpt}
          </Typography.Paragraph>

          {/* Tags */}
          <div style={{ marginTop: 16 }}>
            <Space size={4} wrap>
              {caseItem.tags.slice(0, 3).map((tag) => (
                <Tag
                  key={tag}
                  style={{
                    borderRadius: 4,
                    fontSize: 12,
                    background: "#f5f5f5",
                    border: "none",
                    color: "var(--text-secondary)",
                  }}
                >
                  {tag}
                </Tag>
              ))}
            </Space>
          </div>
        </div>
      </div>
    </Link>
  );
}
