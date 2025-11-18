import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GridProps {
  children: ReactNode;
  cols?: string;
  className?: string;
}

export function Grid({ children, cols = "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3", className }: GridProps) {
  return <div className={cn("grid gap-6", cols, className)}>{children}</div>;
}

