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
    <section className={cn("relative overflow-hidden", className)}>
      <div className="container py-20 lg:py-32">
        <div className="mx-auto max-w-4xl text-center">
          {badge && <div className="mb-6">{badge}</div>}
          <p className="mb-4 text-sm font-medium uppercase tracking-wider text-slate-500">{subtitle}</p>
          <h1 className="mb-6 text-5xl font-bold tracking-tight text-slate-900 lg:text-6xl">{title}</h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-slate-600">{description}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <Link href={ctaPrimary.href}>{ctaPrimary.label}</Link>
            </Button>
            {ctaSecondary && (
              <Button variant="secondary" size="lg" asChild>
                <Link href={ctaSecondary.href}>{ctaSecondary.label}</Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

