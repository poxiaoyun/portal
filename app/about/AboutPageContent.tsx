"use client";

import { useState, type CSSProperties } from "react";
import Image from "next/image";

import { TeamMemberCard } from "@/components/TeamMemberCard";
import { withBasePath } from "@/lib/withBasePath";
import { Typography, Row, Col, Card as AntCard, Timeline, Modal } from "antd";

const team = [
  {
    name: "马青",
    role: "创始人 · KubeGems 发起人",
    bio: "曾任达闼机器人云平台负责人，主导云平台与 AI 平台建设及模型训练项目，拥有十余年云计算经验。",
    avatar: "/images/team/maqing.svg"
  },
  {
    name: "张李昆",
    role: "联合创始人 · KubeGems 架构师",
    bio: "主攻云基础设施方向，取得多项专利，擅长多云与 AI 基础平台设计与落地。",
    avatar: "/images/team/zhanglikun.svg"
  },
  {
    name: "邓宇",
    role: "AI 架构师",
    bio: "丰富的大模型训练、推理工程化经验，负责 AI 平台架构设计与算力生态合作。",
    avatar: "/images/team/dengyu.svg"
  }
];

const timeline = [
  { year: "2019", event: "成立破晓石科技，启动 KubeGems 开源社区。" },
  { year: "2020", event: "发布 XAMP 混合云平台，落地大型工业集团。" },
  { year: "2022", event: "推出 XPAI 智算平台，构建模型全生命周期能力。" },
  { year: "2024", event: "与高校、科研机构共建 AI 原生数智基础设施。" }
];

const honors = [
  {
    title: "ISO/IEC 27001 信息安全管理体系",
    issuer: "BSI 英国标准协会",
    year: "2024",
    description: "覆盖算力调度与多云控制面，通过 120+ 项安全条目审查。",
    badge: "信息安全",
    image: "/images/honors/iso27001.svg",
    accent: "#0ea5e9",
    accentSoft: "rgba(14,165,233,0.15)"
  },
  {
    title: "中国信通院 云管平台能力认证（高级）",
    issuer: "中国信通院 CAICT",
    year: "2023",
    description: "混合云治理、资源编排与可信 AI 运营三大能力满分通过。",
    badge: "云管平台",
    image: "/images/honors/caict.svg",
    accent: "#8b5cf6",
    accentSoft: "rgba(139,92,246,0.18)"
  },
  {
    title: "国家级高新技术企业",
    issuer: "成都市科技局",
    year: "2022",
    description: "在 AI 智算、云原生安全、分布式调度三项核心技术获批。",
    badge: "高新技术",
    image: "/images/honors/hightech.svg",
    accent: "#f97316",
    accentSoft: "rgba(249,115,22,0.18)"
  }
];
const showHonorHighlights = false;

const certificateGallery = [
  { title: "晓石 AI 平台", issuer: "中华人民共和国国家版权局", year: "2024", image: "/images/honors/gallery/cert-01.png" },
  { title: "晓石容器云平台", issuer: "中华人民共和国国家版权局", year: "2024", image: "/images/honors/gallery/cert-02.png" },
  { title: "魔哈 AI 仓库平台", issuer: "中华人民共和国国家版权局", year: "2024", image: "/images/honors/gallery/cert-03.png" },
  { title: "晓石云模型服务平台", issuer: "中华人民共和国国家版权局", year: "2025", image: "/images/honors/gallery/cert-04.png" },
  { title: "晓石混合云管理平台", issuer: "中华人民共和国国家版权局", year: "2025", image: "/images/honors/gallery/cert-05.png" },
  { title: "晓石应用管理平台", issuer: "中华人民共和国国家版权局", year: "2025", image: "/images/honors/gallery/cert-06.png" },
  { title: "晓石云平台网关中间件", issuer: "中华人民共和国国家版权局", year: "2025", image: "/images/honors/gallery/cert-07.png" },
  { title: "晓石云应用实时监控插件", issuer: "中华人民共和国国家版权局", year: "2025", image: "/images/honors/gallery/cert-08.png" },
  { title: "晓石应用商店平台", issuer: "中华人民共和国国家版权局", year: "2025", image: "/images/honors/gallery/cert-09.png" },
  { title: "晓石数据库管理平台", issuer: "中华人民共和国国家版权局", year: "2025", image: "/images/honors/gallery/cert-10.png" },
  { title: "晓石多云运营管理平台", issuer: "中华人民共和国国家版权局", year: "2025", image: "/images/honors/gallery/cert-11.png" },
  { title: "晓石多租户应用运维平台", issuer: "中华人民共和国国家版权局", year: "2025", image: "/images/honors/gallery/cert-12.png" },
  { title: "晓石 XMOP 安卓版APP", issuer: "中华人民共和国国家版权局", year: "2025", image: "/images/honors/gallery/cert-13.png" },
  { title: "晓石 MPOP 安卓版APP", issuer: "中华人民共和国国家版权局", year: "2025", image: "/images/honors/gallery/cert-14.png" },
  { title: "晓石 XMOP 苹果版APP", issuer: "中华人民共和国国家版权局", year: "2025", image: "/images/honors/gallery/cert-15.png" },
  { title: "晓石 MPOP 苹果版APP", issuer: "中华人民共和国国家版权局", year: "2025", image: "/images/honors/gallery/cert-16.png" }
];

export function AboutPageContent() {
  const [previewIndex, setPreviewIndex] = useState<number | null>(null);
  const previewCertificate = previewIndex !== null ? certificateGallery[previewIndex] : null;

  return (
    <>
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "80px 24px" }}>
        <header style={{ textAlign: "center", marginBottom: 48 }}>
          <Typography.Title level={1}>以技术驱动成长</Typography.Title>
          <Typography.Paragraph style={{ fontSize: 18, color: "var(--text-secondary)" }}>
            成都破晓石科技有限公司致力于云原生、开源产品与 AI 智算平台的自主研发。我们为企业提供覆盖容器云、混合云、AI 智算云及 AI 能力应用的全栈解决方案。
          </Typography.Paragraph>
        </header>

        <Row gutter={24} style={{ marginBottom: 48 }}>
          <Col xs={24} md={12}>
            <AntCard bordered={false} style={{ borderRadius: 16, boxShadow: "0 12px 24px rgba(15,23,42,0.08)" }}>
              <Typography.Title level={3}>使命与愿景</Typography.Title>
              <Typography.Paragraph type="secondary">
                以云原生为统一基座，打造面向未来的 AI 原生基础设施。使命：让企业以最短路径拥抱云原生与 AI；愿景：成为企业数智化进程中的长期技术伙伴。
              </Typography.Paragraph>
            </AntCard>
          </Col>
          <Col xs={24} md={12}>
            <AntCard bordered={false} style={{ borderRadius: 16, boxShadow: "0 12px 24px rgba(15,23,42,0.08)" }}>
              <Typography.Title level={3}>开源生态</Typography.Title>
              <Typography.Paragraph type="secondary">
                KubeGems 等自研开源项目已在多个行业落地，构建完善的社区、培训与联合创新机制。GitHub：github.com/poxiaoyun。
              </Typography.Paragraph>
            </AntCard>
          </Col>
        </Row>

        <section style={{ marginBottom: 48 }}>
          <Typography.Title level={2} style={{ textAlign: "center", marginBottom: 24 }}>
            核心团队
          </Typography.Title>
          <Row gutter={[24, 24]}>
            {team.map((member) => (
              <Col xs={24} md={8} key={member.name}>
                <TeamMemberCard {...member} />
              </Col>
            ))}
          </Row>
        </section>

        <section style={{ marginBottom: 64 }}>
          <Typography.Title level={2} style={{ textAlign: "center", marginBottom: 16 }}>
            公司荣誉
          </Typography.Title>
          <Typography.Paragraph style={{ textAlign: "center", marginBottom: 32, color: "var(--text-secondary)" }}>
            认证证书由官方单位颁发，我们用一组“荣誉星环”展示每一次技术与信任的跃迁。
          </Typography.Paragraph>
          {showHonorHighlights && (
            <div className="honor-gallery">
              {honors.map((honor) => (
                <div
                  key={honor.title}
                  className="honor-card"
                  style={
                    {
                      "--accent": honor.accent,
                      "--accent-soft": honor.accentSoft
                    } as CSSProperties
                  }
                >
                  <div className="honor-card__halo" />
                  <div className="honor-card__image">
                    <Image
                      src={withBasePath(honor.image)}
                      alt={honor.title}
                      width={360}
                      height={240}
                      style={{ objectFit: "contain" }}
                      sizes="(max-width: 768px) 90vw, 360px"
                      unoptimized
                    />
                  </div>
                  <div className="honor-card__meta">
                    <span className="honor-card__badge">{honor.badge}</span>
                    <Typography.Title level={4} style={{ marginTop: 8, marginBottom: 8 }}>
                      {honor.title}
                    </Typography.Title>
                    <Typography.Paragraph style={{ marginBottom: 12 }}>{honor.description}</Typography.Paragraph>
                    <div className="honor-card__footer">
                      <span>{honor.issuer}</span>
                      <span>{honor.year}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          <div className="certificate-gallery">
            {certificateGallery.map((certificate, index) => (
              <button
                key={certificate.title}
                className="certificate-item"
                onClick={() => setPreviewIndex(index)}
                type="button"
              >
                <div className="certificate-item__image">
                  <Image
                    src={withBasePath(certificate.image)}
                    alt={`${certificate.title} - ${certificate.issuer}`}
                    width={320}
                    height={220}
                    style={{ objectFit: "contain" }}
                    sizes="(max-width: 768px) 90vw, 320px"
                    unoptimized
                  />
                </div>
                <div className="certificate-item__meta">
                  <Typography.Text strong>{certificate.title}</Typography.Text>
                  <Typography.Text type="secondary" style={{ fontSize: 12 }}>
                    {certificate.issuer} · {certificate.year}
                  </Typography.Text>
                </div>
              </button>
            ))}
          </div>
        </section>

        <section>
          <Typography.Title level={2} style={{ textAlign: "center", marginBottom: 24 }}>
            发展历程
          </Typography.Title>
          <Timeline
            items={timeline.map((item) => ({
              color: "blue",
              label: item.year,
              children: item.event
            }))}
          />
        </section>
      </div>

      <style jsx>{`
        .honor-gallery {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
        }

        .honor-card {
          position: relative;
          border-radius: 28px;
          padding: 28px 24px 24px;
          background: radial-gradient(circle at 15% 20%, var(--accent-soft), rgba(255, 255, 255, 0.9) 55%);
          box-shadow: 0 25px 50px rgba(15, 23, 42, 0.14);
          overflow: hidden;
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }

        .honor-card::after {
          content: "";
          position: absolute;
          inset: 8px;
          border-radius: 24px;
          border: 1px solid rgba(255, 255, 255, 0.6);
          pointer-events: none;
        }

        .honor-card:hover {
          transform: translateY(-8px) rotate3d(1, -1, 0, 4deg);
          box-shadow: 0 35px 70px rgba(15, 23, 42, 0.2);
        }

        .honor-card__halo {
          position: absolute;
          width: 220px;
          height: 220px;
          top: -40px;
          right: -60px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.8), transparent 60%);
          filter: blur(6px);
          opacity: 0.8;
        }

        .honor-card__image {
          position: relative;
          padding: 12px;
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.75);
          border: 1px solid rgba(255, 255, 255, 0.8);
          margin-bottom: 16px;
          min-height: 190px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .honor-card__meta {
          position: relative;
          z-index: 1;
        }

        .honor-card__badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 4px 10px;
          border-radius: 999px;
          font-size: 12px;
          letter-spacing: 0.02em;
          font-weight: 600;
          background: rgba(255, 255, 255, 0.65);
          color: #0f172a;
          border: 1px solid rgba(255, 255, 255, 0.8);
          box-shadow: inset 0 0 0 1px var(--accent-soft);
          position: relative;
        }

        .honor-card__badge::before {
          content: "";
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--accent);
          box-shadow: 0 0 10px var(--accent);
        }

        .honor-card__footer {
          display: flex;
          justify-content: space-between;
          font-weight: 600;
          color: #0f172a;
        }

        .certificate-gallery {
          margin-top: 32px;
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 16px;
        }

        .certificate-item {
          border: 0;
          border-radius: 18px;
          background: #fff;
          padding: 16px;
          cursor: pointer;
          text-align: left;
          display: flex;
          flex-direction: column;
          gap: 12px;
          box-shadow: 0 12px 22px rgba(15, 23, 42, 0.08);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .certificate-item:hover {
          transform: translateY(-4px);
          box-shadow: 0 18px 30px rgba(15, 23, 42, 0.12);
        }

        .certificate-item__image {
          height: 160px;
          border-radius: 12px;
          background: linear-gradient(135deg, rgba(15, 23, 42, 0.04), rgba(14, 165, 233, 0.06));
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .certificate-item__meta {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        @media (max-width: 768px) {
          .honor-card {
            padding: 24px 20px;
          }

          .certificate-gallery {
            grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
          }

          .certificate-item__image {
            height: 120px;
          }
        }
      `}</style>

      <Modal
        open={Boolean(previewCertificate)}
        centered
        footer={null}
        onCancel={() => setPreviewIndex(null)}
        width={720}
        bodyStyle={{ padding: 0, borderRadius: 20, overflow: "hidden", background: "#fff" }}
      >
        {previewCertificate && (
          <div style={{ background: "#fff", padding: 32 }}>
            <Image
              src={withBasePath(previewCertificate.image)}
              alt={previewCertificate.title}
              width={672}
              height={420}
              style={{ width: "100%", height: "auto", borderRadius: 12 }}
              sizes="90vw"
              unoptimized
            />
            <div style={{ marginTop: 16, color: "#0f172a" }}>
              <Typography.Title level={4} style={{ color: "#0f172a", marginBottom: 4 }}>
                {previewCertificate.title}
              </Typography.Title>
              <Typography.Text style={{ color: "rgba(15,23,42,0.65)" }}>
                {previewCertificate.issuer} · {previewCertificate.year}
              </Typography.Text>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
}

