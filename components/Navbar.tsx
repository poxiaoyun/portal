"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/Button";
import { cn } from "@/lib/utils";
import Logo from "@/public/images/nav/logo.png";
import { products } from "@/data/products";
import { ChevronDown } from "lucide-react";

const links = [
  { href: "/", label: "首页" },
  { href: "/products", label: "产品", hasDropdown: true },
  { href: "/solutions", label: "解决方案" },
  { href: "/about", label: "关于我们" },
  { href: "/blog", label: "博客/资源" },
  { href: "/contact", label: "联系我们" }
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const productsDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (productsDropdownRef.current && !productsDropdownRef.current.contains(event.target as Node)) {
        setProductsDropdownOpen(false);
      }
    };

    if (productsDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [productsDropdownOpen]);

  return (
    <header className={cn("navbar", { "navbar--scrolled": scrolled })}>
      <div className="navbar__inner">
        <div className="navbar__group">
          <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
            <div className="navbar__brand">
              <Image src={Logo} alt="破晓石科技 Logo" width={50} height={50} priority />
              <span>晓石云</span>
            </div>
          </Link>
          <nav className="navbar__desktop">
            {links.map((link) => {
              if (link.hasDropdown) {
                return (
                  <div
                    key={link.href}
                    ref={productsDropdownRef}
                    className="navbar__dropdown"
                    onMouseLeave={() => setProductsDropdownOpen(false)}
                  >
                    <button
                      onClick={() => setProductsDropdownOpen(!productsDropdownOpen)}
                      className="navbar__link"
                      style={{
                        border: "none",
                        cursor: "pointer",
                        color: pathname?.startsWith("/products") ? "var(--text-primary)" : "var(--text-secondary)",
                        fontWeight: pathname?.startsWith("/products") ? 600 : 400,
                        fontFamily: "inherit",
                        fontSize: "18px",
                        marginLeft: "12px",
                        lineHeight: "1.5",
                        textDecoration: "none",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "4px",
                        verticalAlign: "middle"
                      }}
                    >
                      {link.label}
                      <ChevronDown 
                        size={16} 
                        style={{ 
                          transition: "transform 0.2s",
                          transform: productsDropdownOpen ? "rotate(180deg)" : "rotate(0deg)"
                        }} 
                      />
                    </button>
                    {productsDropdownOpen && (
                      <div 
                        className="navbar__dropdownMenu"
                        onMouseEnter={() => setProductsDropdownOpen(true)}
                      >
                        {products.map((product) => (
                          <Link
                            key={product.id}
                            href={`/products/${product.id}`}
                            className="navbar__dropdownItem"
                            onClick={() => setProductsDropdownOpen(false)}
                          >
                            <div className="navbar__dropdownItemIcon">
                              <Image
                                src={product.logo}
                                alt={`${product.name} logo`}
                                width={32}
                                height={32}
                                style={{ objectFit: "contain" }}
                              />
                            </div>
                            <div className="navbar__dropdownItemContent">
                              <div className="navbar__dropdownItemName">{product.name}</div>
                              <div className="navbar__dropdownItemTagline">{product.description}</div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="navbar__link"
                  style={{
                    color: pathname === link.href ? "var(--text-primary)" : "var(--text-secondary)",
                    fontWeight: pathname === link.href ? 600 : 400
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
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
              <div key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="navbar__link"
                  style={{
                    display: "block",
                    marginBottom: 12,
                    color: pathname === link.href ? "var(--text-primary)" : "var(--text-secondary)"
                  }}
                >
                  {link.label}
                </Link>
                {link.hasDropdown && (
                  <div style={{ marginLeft: 16, marginBottom: 12 }}>
                    {products.map((product) => (
                      <Link
                        key={product.id}
                        href={`/products/${product.id}`}
                        onClick={() => setOpen(false)}
                        className="navbar__link"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 8,
                          marginBottom: 8,
                          color: pathname === `/products/${product.id}` ? "var(--text-primary)" : "var(--text-secondary)"
                        }}
                      >
                        <Image
                          src={product.logo}
                          alt={`${product.name} logo`}
                          width={24}
                          height={24}
                          style={{ objectFit: "contain" }}
                        />
                        <div>
                          <div style={{ fontWeight: 500 }}>{product.name}</div>
                          <div style={{ fontSize: 12, color: "var(--text-secondary)" }}>{product.description}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
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

