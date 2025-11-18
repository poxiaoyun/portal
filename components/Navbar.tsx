"use client";

import { Button } from "@/components/Button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "首页" },
  { href: "/products", label: "产品" },
  { href: "/solutions", label: "解决方案" },
  { href: "/about", label: "关于我们" },
  { href: "/blog", label: "博客/资源" },
  { href: "/contact", label: "联系我们" }
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/50 bg-white/70 backdrop-blur-xl backdrop-saturate-150">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-slate-900">
          <span className="text-2xl font-extrabold tracking-tight">破晓石科技</span>
          <span className="hidden text-xs uppercase tracking-[0.4em] text-brand sm:inline">XIAOSHI AI</span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-slate-700 lg:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className={pathname === link.href ? "text-brand font-medium" : "text-slate-700 hover:text-slate-900"}>
              {link.label}
            </Link>
          ))}
          <Button variant="secondary" asChild>
            <a href="https://github.com/poxiaoyun" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </Button>
        </nav>

        <button
          className="lg:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="打开主导航"
          aria-expanded={open}
        >
          <span className="sr-only">菜单</span>
          <div className="space-y-1">
            <span className="block h-0.5 w-6 bg-slate-900" />
            <span className="block h-0.5 w-6 bg-slate-900" />
            <span className="block h-0.5 w-6 bg-slate-900" />
          </div>
        </button>
      </div>
      {open && (
        <div className="lg:hidden">
          <div className="container space-y-4 border-t border-slate-200/50 bg-white/80 backdrop-blur-xl py-4">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="block text-slate-700 hover:text-slate-900" onClick={() => setOpen(false)}>
                {link.label}
              </Link>
            ))}
            <a href="https://github.com/poxiaoyun" target="_blank" rel="noreferrer" className="block text-brand">
              GitHub
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

