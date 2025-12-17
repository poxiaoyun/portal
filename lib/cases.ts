import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// 从 types 文件重新导出类型和常量，供服务端组件使用
export type { CasePost, IndustryKey } from './cases.types';
export { industryMap, industryTabs } from './cases.types';

import type { CasePost, IndustryKey } from './cases.types';

const casesDirectory = path.join(process.cwd(), 'content/cases');

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
