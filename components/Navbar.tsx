"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/Button";

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
    <header className="navbar">
      <div className="navbar__inner">
        <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
          <div>
            <div style={{ fontWeight: 600, fontSize: 18 }}>破晓石科技</div>
            <div style={{ fontSize: 12, color: "var(--text-secondary)" }}>Chengdu Poxiaoshi Technology</div>
          </div>
        </Link>
        <nav className="navbar__desktop">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                color: pathname === link.href ? "var(--text-primary)" : "var(--text-secondary)",
                fontWeight: pathname === link.href ? 600 : 400
              }}
            >
              {link.label}
            </Link>
          ))}
          <Button type="primary" href="https://github.com/poxiaoyun" target="_blank" rel="noreferrer">
              GitHub
          </Button>
        </nav>
        <Button className="navbar__mobileTrigger" type="text" onClick={() => setOpen(true)}>
          菜单
        </Button>
      </div>
      {open && (
        <div style={{ borderTop: "1px solid rgba(15,23,42,0.08)", background: "#fff", padding: 24 }}>
            {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{
                display: "block",
                marginBottom: 12,
                color: pathname === link.href ? "var(--text-primary)" : "var(--text-secondary)"
              }}
            >
                {link.label}
              </Link>
            ))}
          <Button type="default" href="https://github.com/poxiaoyun" target="_blank" rel="noreferrer" style={{ width: "100%" }}>
              GitHub
          </Button>
        </div>
      )}
    </header>
  );
}

