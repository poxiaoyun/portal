"use client";

import { Button } from "@/components/Button";
import { cn } from "@/lib/utils";
import { AuroraBackground } from "@lobehub/ui/awesome";
import { ReactNode } from "react";

interface HeroProps {
  title: string;
  subtitle?: string;
  description: string;
  ctaPrimary: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
  badge?: ReactNode;
  className?: string;
  auroraColors?: {
    baseColor?: string;
    highlightColor?: string;
  };
}

export function Hero({ title, subtitle, description, ctaPrimary, ctaSecondary, badge, className, auroraColors }: HeroProps) {
  const customStyle = auroraColors 
    ? {
        width: "100vw",
        marginLeft: "calc(-50vw + 50%)",
        ...(auroraColors.baseColor && {
          "--aurora-base": auroraColors.baseColor,
        }),
        ...(auroraColors.highlightColor && {
          "--aurora-highlight": auroraColors.highlightColor,
        }),
      } as React.CSSProperties
    : { width: "100vw", marginLeft: "calc(-50vw + 50%)" };

  return (
    <AuroraBackground
      className={cn("relative overflow-hidden", className)}
      paddingInline={0}
      paddingBlock={120}
      style={customStyle}
    >
      <div className="container py-16 lg:py-28 px-6">
        <div className="mx-auto max-w-5xl text-center">
          {badge && <div className="mb-8">{badge}</div>}
          {subtitle && <p className="mb-6 text-base font-medium uppercase tracking-wider text-slate-500">{subtitle}</p>}
          <h1 className="mb-8 text-6xl font-bold tracking-tight text-slate-900 lg:text-7xl">
            {title.includes("内核") ? (
              <>
                {title.split("内核")[0]}
                <span className="gradient-text">内核</span>
                {title.split("内核")[1]}
              </>
            ) : title.includes("Rune") ? (
              <>
                <span className="gradient-text">Rune</span>
                {title.split("Rune")[1]}
              </>
            ) : title.includes("XMCP") ? (
              <>
                {title.split("XMCP")[0]}
                <span className="gradient-text">XMCP</span>
                {title.split("XMCP")[1]}
              </>
            ) : title.includes("XCMP") ? (
              <>
                {title.split("XCMP")[0]}
                <span className="gradient-text">XCMP</span>
                {title.split("XCMP")[1]}
              </>
            ) : title.includes("魔哈") ? (
              (() => {
                const [before, ...rest] = title.split("魔哈");
                const after = rest.join("魔哈");
                return (
                  <>
                    {before}
                    <span className="gradient-text">魔哈</span>
                    {after}
                  </>
                );
              })()
            ) : (
              title
            )}
          </h1>
          <p className="mx-auto mb-12 max-w-3xl text-xl leading-relaxed text-slate-600">{description}</p>
          <div className="flex flex-wrap justify-center gap-6">
            <Button 
              type="primary" 
              size="large" 
              href={ctaPrimary.href}
              style={{ 
                height: 50, 
                fontSize: 18, 
                padding: "0 32px",
                fontWeight: 600,
                background: "transparent",
                border: "1px solid rgba(15, 23, 42, 0.2)",
                color: "#0f172a"
              }}
            >
              {ctaPrimary.label}
            </Button>
            {ctaSecondary && (
              <Button type="default" size="large" href={ctaSecondary.href}>
                {ctaSecondary.label}
              </Button>
            )}
          </div>
        </div>
      </div>
    </AuroraBackground>
  );
}

