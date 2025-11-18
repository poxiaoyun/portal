import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface CardProps {
  title: string;
  description?: string;
  icon?: ReactNode;
  children?: ReactNode;
  className?: string;
}

export function Card({ title, description, icon, children, className }: CardProps) {
  return (
    <div className={cn("card-glow relative overflow-hidden rounded-2xl p-6 transition hover:-translate-y-1 hover:border-brand/40", className)}>
      <div className="mb-4 flex items-center gap-3 text-brand-light">
        {icon}
        <h3 className="text-lg font-semibold text-white">{title}</h3>
      </div>
      {description && <p className="text-sm text-slate-200/80">{description}</p>}
      {children && <div className="mt-4 space-y-2 text-sm text-slate-200">{children}</div>}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 transition hover:opacity-100" />
    </div>
  );
}

