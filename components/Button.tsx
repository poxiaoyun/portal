"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full text-sm font-semibold transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-60",
  {
    variants: {
      variant: {
        default: "bg-brand text-white hover:bg-brand-light focus-visible:outline-brand-light shadow-lg shadow-brand/30",
        secondary:
          "bg-white/80 backdrop-blur-sm text-slate-900 hover:bg-white focus-visible:outline-slate-400 border border-slate-200/80 shadow-md",
        ghost: "bg-transparent text-brand hover:bg-brand/10 focus-visible:outline-brand/40"
      },
      size: {
        default: "h-11 px-6",
        sm: "h-9 px-4 text-xs",
        lg: "h-12 px-8 text-base",
        icon: "h-10 w-10"
      },
      loading: {
        true: "opacity-70 pointer-events-none"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, loading, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    // 当 asChild 为 true 时，Slot 只能接收单个子元素，所以不显示 loading spinner
    if (asChild) {
      return (
        <Comp className={cn(buttonVariants({ variant, size, loading: false, className }))} ref={ref} {...props}>
          {children}
        </Comp>
      );
    }
    return (
      <Comp className={cn(buttonVariants({ variant, size, loading, className }))} ref={ref} {...props}>
        {loading && (
          <span className="mr-2 inline-flex h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" aria-hidden="true" />
        )}
        {children}
      </Comp>
    );
  }
);
Button.displayName = "Button";

