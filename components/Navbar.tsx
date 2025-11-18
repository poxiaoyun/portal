"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/Button";
import { cn } from "@/lib/utils";

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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={cn("navbar", { "navbar--scrolled": scrolled })}>
      <div className="navbar__inner">
        <div className="navbar__group">
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
          </nav>
        </div>
        <div className="navbar__actions">
          <Button
            className="navbar__desktopCta"
            type="default"
            href="https://github.com/poxiaoyun"
            target="_blank"
            rel="noreferrer"
            style={{
              background: "rgba(15,23,42,0.06)",
              borderColor: "transparent",
              color: "var(--text-primary)"
            }}
          >
            GitHub
          </Button>
          <Button className="navbar__mobileTrigger" type="text" onClick={() => setOpen(true)}>
            菜单
          </Button>
        </div>
      </div>
      {open && (
        <div className="navbar__mobileMenu">
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
          <Button
            type="default"
            href="https://github.com/poxiaoyun"
            target="_blank"
            rel="noreferrer"
            style={{
              width: "100%",
              background: "rgba(15,23,42,0.06)",
              borderColor: "transparent",
              color: "var(--text-primary)"
            }}
          >
              GitHub
          </Button>
        </div>
      )}
    </header>
  );
}

