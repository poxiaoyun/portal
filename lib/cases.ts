import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// 从 types 文件重新导出类型和常量，供服务端组件使用
export type { CasePost, IndustryKey } from './cases.types';
export { industryMap, industryTabs } from './cases.types';

import type { CasePost, IndustryKey } from './cases.types';

const casesDirectory = path.join(process.cwd(), 'content/cases');

function sanitizeMarkdownFileContents(input: string): string {
  return input.replace(/\u0000/g, '').replace(/\r\n/g, '\n');
}

function parseMatterWithFallback(fileContents: string) {
  const sanitized = sanitizeMarkdownFileContents(fileContents);

  try {
    return matter(sanitized);
  } catch (error) {
    // YAML is strict: tabs are invalid indentation. Some editors may insert tabs.
    // Attempt a conservative fix: replace tabs with spaces *only* inside front matter.
    if (sanitized.startsWith('---')) {
      const match = sanitized.match(/^---\s*\n([\s\S]*?)\n---\s*\n?/);
      if (match) {
        const frontMatter = match[1];
        const rest = sanitized.slice(match[0].length);
        const fixedFrontMatter = frontMatter.replace(/\t/g, '  ');
        const fixed = `---\n${fixedFrontMatter}\n---\n${rest}`;
        return matter(fixed);
      }
    }

    throw error;
  }
}

function normalizeDate(value: unknown): string {
  if (!value) return '';
  if (value instanceof Date && !Number.isNaN(value.getTime())) {
    return value.toISOString().slice(0, 10);
  }
  if (typeof value === 'string') {
    return value;
  }
  return String(value);
}

function normalizeStringArray(value: unknown): string[] {
  if (!value) return [];
  if (Array.isArray(value)) {
    return value
      .map((v) => (typeof v === 'string' ? v : String(v)))
      .filter((v) => v.trim().length > 0);
  }
  if (typeof value === 'string') {
    return value
      .split(',')
      .map((v) => v.trim())
      .filter(Boolean);
  }
  return [String(value)].filter(Boolean);
}

function normalizeFrontMatter(
  slug: string,
  content: string,
  data: Record<string, unknown>
): CasePost {
  const tags = normalizeStringArray(data.tags);

  return {
    slug,
    content,
    title: typeof data.title === 'string' ? data.title : slug,
    date: normalizeDate(data.date),
    coverImage: typeof data.coverImage === 'string' ? data.coverImage : '',
    excerpt: typeof data.excerpt === 'string' ? data.excerpt : '',
    industry: typeof data.industry === 'string' ? data.industry : 'all',
    industryLabel: typeof data.industryLabel === 'string' ? data.industryLabel : '',
    customer: typeof data.customer === 'string' ? data.customer : '',
    goal: typeof data.goal === 'string' ? data.goal : '',
    tags,
    challenges: Array.isArray(data.challenges) ? (data.challenges as any) : [],
    solutions: Array.isArray(data.solutions) ? (data.solutions as any) : [],
    results: Array.isArray(data.results) ? (data.results as any) : [],
    advantages: Array.isArray(data.advantages) ? (data.advantages as any) : [],
  };
}

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
      const { data, content } = parseMatterWithFallback(fileContents);

      return normalizeFrontMatter(
        slug,
        content,
        (data || {}) as Record<string, unknown>
      );
    });

  // Sort cases by date (newest first)
  return allCases.sort((a, b) => {
    const aTime = a.date ? new Date(a.date).getTime() : 0;
    const bTime = b.date ? new Date(b.date).getTime() : 0;
    return bTime - aTime;
  });
}

export function getCasePost(slug: string): CasePost | null {
  const fullPath = path.join(casesDirectory, `${slug}.md`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = parseMatterWithFallback(fileContents);

  return normalizeFrontMatter(slug, content, (data || {}) as Record<string, unknown>);
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
