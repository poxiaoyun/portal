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
    <div className={cn("card-glow relative overflow-hidden p-6", className)}>
      {icon && (
        <div className="mb-3 flex items-center gap-2 text-brand">
          {icon}
        </div>
      )}
      <h3 className="text-base font-semibold text-slate-900 mb-2">{title}</h3>
      {description && <p className="text-sm text-slate-600 leading-relaxed mb-4">{description}</p>}
      {children && <div className="space-y-2 text-sm text-slate-600">{children}</div>}
    </div>
  );
}

