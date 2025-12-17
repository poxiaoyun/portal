// 案例相关类型定义和常量 - 可在客户端和服务端使用

export interface CaseChallenge {
  title: string;
  description: string;
}

export interface CaseSolution {
  icon?: string;
  title: string;
  points: string[];
}

export interface CaseResult {
  value: string;
  label: string;
}

export interface CaseAdvantage {
  icon?: string;
  title: string;
  description: string;
}

export interface CasePost {
  slug: string;
  title: string;
  date: string;
  coverImage: string;
  excerpt: string;
  content: string;
  industry: string;
  industryLabel: string;
  customer: string;
  goal: string;
  tags: string[];
  // 结构化内容
  challenges?: CaseChallenge[];
  solutions?: CaseSolution[];
  results?: CaseResult[];
  advantages?: CaseAdvantage[];
}

export type IndustryKey = 'all' | 'energy' | 'manufacturing' | 'education' | 'operator';

export const industryMap: Record<string, { key: IndustryKey; label: string }> = {
  energy: { key: 'energy', label: '能源' },
  manufacturing: { key: 'manufacturing', label: '制造设计' },
  education: { key: 'education', label: '高校' },
  operator: { key: 'operator', label: '运营商' },
};

export const industryTabs: { key: IndustryKey; label: string }[] = [
  { key: 'all', label: '全部案例' },
  { key: 'energy', label: '能源' },
  { key: 'manufacturing', label: '制造设计' },
  { key: 'education', label: '高校' },
  { key: 'operator', label: '运营商' },
];
