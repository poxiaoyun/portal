import type { Metadata } from "next";
import { TeamMemberCard } from "@/components/TeamMemberCard";
import { Grid } from "@/components/Grid";

export const metadata: Metadata = {
  title: "关于我们",
  description: "了解成都破晓石科技有限公司的使命、团队、发展历程与开源生态。"
};

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

export default function AboutPage() {
  return (
    <div className="container space-y-16 py-12">
      <header className="mx-auto max-w-3xl text-center">
        <p className="mb-3 text-sm font-medium uppercase tracking-wider text-slate-500">About</p>
        <h1 className="mb-4 text-4xl font-bold text-slate-900 lg:text-5xl">以技术驱动成长</h1>
        <p className="text-lg leading-relaxed text-slate-600">
          成都破晓石科技有限公司（Chengdu Poxiaoshi Technology Co., Ltd.）致力于云原生、开源产品与 AI 智算平台的自主研发。
          我们为企业提供覆盖容器云、混合云、AI 智算云及 AI 能力应用的全栈解决方案，帮助客户打造弹性、安全、可信赖的数字底座。
        </p>
      </header>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="card-glow p-8">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">使命与愿景</h2>
          <p className="mb-4 text-slate-600">以云原生为统一基座，打造面向未来的 AI 原生基础设施。</p>
          <ul className="space-y-2 text-sm leading-relaxed text-slate-600">
            <li>使命：让企业以最短路径拥抱云原生与 AI。</li>
            <li>愿景：成为企业数智化进程中的长期技术伙伴。</li>
            <li>价值观：开放、可信、共创，持续投入开源生态。</li>
          </ul>
        </div>
        <div className="card-glow p-8">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">开源生态</h2>
          <p className="mb-4 text-slate-600">KubeGems 等自研开源项目已在多个行业落地，构建完善的社区、培训与联合创新机制。</p>
          <ul className="space-y-2 text-sm leading-relaxed text-slate-600">
            <li>GitHub：<a href="https://github.com/poxiaoyun" className="text-slate-900 hover:underline font-medium">https://github.com/poxiaoyun</a></li>
            <li>贡献指南：欢迎 Issue、PR、企业共建计划。</li>
            <li>社区活动：线上技术直播、线下工作坊、联合黑客松。</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="mb-8 text-center text-3xl font-bold text-slate-900">核心团队</h2>
        <Grid cols="grid-cols-1 md:grid-cols-3" className="gap-6">
          {team.map((member) => (
            <TeamMemberCard key={member.name} {...member} />
          ))}
        </Grid>
      </section>

      <section>
        <h2 className="mb-8 text-center text-3xl font-bold text-slate-900">发展历程</h2>
        <div className="mx-auto max-w-2xl space-y-4">
          {timeline.map((item) => (
            <div key={item.year} className="card-glow flex items-start gap-6 p-6">
              <div className="text-2xl font-bold text-slate-900">{item.year}</div>
              <p className="flex-1 text-slate-600">{item.event}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

