import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const casesDirectory = path.join(process.cwd(), 'content/cases');

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

export function getCasePosts(): CasePost[] {
  // Ensure directory exists
  if (!fs.existsSync(casesDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(casesDirectory);
  const allCases = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(casesDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug,
        content,
        ...(data as Omit<CasePost, 'slug' | 'content'>),
      };
    });

  // Sort cases by date (newest first)
  return allCases.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getCasePost(slug: string): CasePost | null {
  const fullPath = path.join(casesDirectory, `${slug}.md`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug,
    content,
    ...(data as Omit<CasePost, 'slug' | 'content'>),
  };
}

export function getCasesByIndustry(industry: IndustryKey): CasePost[] {
  const allCases = getCasePosts();
  
  if (industry === 'all') {
    return allCases;
  }
  
  return allCases.filter((casePost) => casePost.industry === industry);
}

export function getAllIndustries(): string[] {
  const allCases = getCasePosts();
  const industries = new Set(allCases.map((c) => c.industry));
  return Array.from(industries);
}
