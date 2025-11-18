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
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-slate-900 hover:opacity-80 transition-opacity">
          <span className="text-xl font-semibold tracking-tight">破晓石科技</span>
          <span className="hidden text-xs text-slate-500 sm:inline">XIAOSHI AI</span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm lg:flex">
          {links.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className={`transition-colors ${
                pathname === link.href 
                  ? "text-slate-900 font-medium" 
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Button variant="ghost" size="sm" asChild>
            <a href="https://github.com/poxiaoyun" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </Button>
        </nav>

        <button
          className="lg:hidden p-2 text-slate-600 hover:text-slate-900 transition-colors"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="打开主导航"
          aria-expanded={open}
        >
          <span className="sr-only">菜单</span>
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-5 bg-current transition-all ${open ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 w-5 bg-current transition-all ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-5 bg-current transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-slate-200/80 bg-white">
          <div className="container space-y-1 py-4">
            {links.map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                  pathname === link.href 
                    ? "bg-slate-100 text-slate-900 font-medium" 
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a 
              href="https://github.com/poxiaoyun" 
              target="_blank" 
              rel="noreferrer" 
              className="block px-3 py-2 rounded-lg text-sm text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

