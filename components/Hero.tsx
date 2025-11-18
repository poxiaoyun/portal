"use client";

import { Button } from "@/components/Button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ReactNode } from "react";

interface HeroProps {
  title: string;
  subtitle: string;
  description: string;
  ctaPrimary: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
  badge?: ReactNode;
  className?: string;
}

export function Hero({ title, subtitle, description, ctaPrimary, ctaSecondary, badge, className }: HeroProps) {
  return (
    <section className={cn("relative isolate overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 p-10 shadow-2xl backdrop-blur", className)}>
      <div className="absolute inset-0 bg-hero-glow opacity-80" aria-hidden="true" />
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          {badge}
          <p className="text-base font-semibold uppercase tracking-[0.3em] text-brand-light">{subtitle}</p>
          <h1 className="text-4xl font-semibold text-white md:text-5xl">{title}</h1>
          <p className="max-w-2xl text-lg text-slate-200/80">{description}</p>
          <div className="flex flex-wrap gap-4">
            <Button asChild>
              <Link href={ctaPrimary.href}>{ctaPrimary.label}</Link>
            </Button>
            {ctaSecondary && (
              <Button variant="secondary" asChild>
                <Link href={ctaSecondary.href}>{ctaSecondary.label}</Link>
              </Button>
            )}
          </div>
        </div>
        <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-brand/30 to-slate-900 p-8">
          <div className="grid-pattern absolute inset-1 rounded-3xl opacity-60" />
          <div className="relative space-y-4 text-sm text-slate-200/80">
            <p className="text-brand-light">原生无界，破晓时刻</p>
            <p>以云原生为统一基座，打造面向未来的 AI 原生基础设施。</p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-white/90">
                <span className="h-2 w-2 rounded-full bg-brand" />
                原生节点部署，5 倍资源利用率
              </li>
              <li className="flex items-center gap-2 text-white/90">
                <span className="h-2 w-2 rounded-full bg-brand" />
                企业级虚拟化与全栈安全
              </li>
              <li className="flex items-center gap-2 text-white/90">
                <span className="h-2 w-2 rounded-full bg-brand" />
                AI 智算服务与国产化支持
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

