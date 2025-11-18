"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-lg text-sm font-medium transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-slate-900 text-white hover:bg-slate-800 focus-visible:outline-slate-900 shadow-sm hover:shadow",
        secondary:
          "bg-white text-slate-900 hover:bg-slate-50 focus-visible:outline-slate-400 border border-slate-200 shadow-sm hover:shadow",
        ghost: "bg-transparent text-slate-600 hover:bg-slate-100 hover:text-slate-900 focus-visible:outline-slate-400"
      },
      size: {
        default: "h-10 px-4",
        sm: "h-8 px-3 text-xs",
        lg: "h-12 px-6 text-base",
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

