"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import type { RefObject } from "react";
import { Button } from "@/components/Button";
import { cn } from "@/lib/utils";
import Logo from "@/public/images/nav/logo.png";
import type { Product } from "@/data/products";
import { products } from "@/data/products";
import type { OpenSourceProject } from "@/data/openSourceProjects";
import { openSourceProjects } from "@/data/openSourceProjects";
import { ChevronDown, Phone } from "lucide-react";
import { withBasePath } from "@/lib/withBasePath";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [openSourceDropdownOpen, setOpenSourceDropdownOpen] = useState(false);
  const productsDropdownRef = useRef<HTMLDivElement>(null);
  const openSourceDropdownRef = useRef<HTMLDivElement>(null);
  const defaultProductHref = products.length ? `/products/${products[0].id}` : "/";
  const defaultOpenSourceHref = openSourceProjects.length ? openSourceProjects[0]?.externalUrl ?? "/" : "/";
  const links = [
    { href: "/", label: "首页" },
    { href: defaultProductHref, label: "产品", hasDropdown: true, dropdownKey: "products" },
    { href: "/solutions", label: "案例中心" },
    { href: "/blog", label: "公司动态" },
    { href: "/about", label: "关于我们" },
    {
      href: defaultOpenSourceHref,
      label: "开源项目",
      hasDropdown: true,
      dropdownKey: "openSource",
      external: Boolean(openSourceProjects[0]?.externalUrl)
    }
  ];

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
      const target = event.target as Node;
      const clickedInsideProducts = productsDropdownRef.current?.contains(target);
      const clickedInsideOpenSource = openSourceDropdownRef.current?.contains(target);
      if (!clickedInsideProducts && !clickedInsideOpenSource) {
        setProductsDropdownOpen(false);
        setOpenSourceDropdownOpen(false);
      }
    };

    if (productsDropdownOpen || openSourceDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [productsDropdownOpen, openSourceDropdownOpen]);

  type DropdownItem = Product | OpenSourceProject;
  type DropdownConfig = {
    isOpen: boolean;
    setOpen: (value: boolean) => void;
    ref: RefObject<HTMLDivElement>;
    items: DropdownItem[];
    basePath?: string;
  };

  const isExternalProject = (item: DropdownItem): item is OpenSourceProject & { externalUrl: string } => {
    return "externalUrl" in item && Boolean(item.externalUrl);
  };

  const dropdownConfigs: Record<string, DropdownConfig> = {
    products: {
      isOpen: productsDropdownOpen,
      setOpen: (value: boolean) => {
        setProductsDropdownOpen(value);
        if (value) {
          setOpenSourceDropdownOpen(false);
        }
      },
      ref: productsDropdownRef,
      items: products,
      basePath: "/products"
    },
    openSource: {
      isOpen: openSourceDropdownOpen,
      setOpen: (value: boolean) => {
        setOpenSourceDropdownOpen(value);
        if (value) {
          setProductsDropdownOpen(false);
        }
      },
      ref: openSourceDropdownRef,
      items: openSourceProjects,
      basePath: "/open-source"
    }
  };

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
              if (link.hasDropdown && link.dropdownKey) {
                const dropdown = dropdownConfigs[link.dropdownKey];
                if (!dropdown) {
                  return null;
                }
                const dropdownBasePath = dropdown.basePath ?? "";
                return (
                  <div
                    key={link.href}
                    ref={dropdown.ref}
                    className="navbar__dropdown"
                    onMouseLeave={() => dropdown.setOpen(false)}
                  >
                    <button
                      onClick={() => dropdown.setOpen(!dropdown.isOpen)}
                      className="navbar__link"
                      style={{
                        border: "none",
                        cursor: "pointer",
                        color: pathname?.startsWith(dropdownBasePath) ? "var(--text-primary)" : "var(--text-secondary)",
                        fontWeight: pathname?.startsWith(dropdownBasePath) ? 600 : 400,
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
                          transform: dropdown.isOpen ? "rotate(180deg)" : "rotate(0deg)"
                        }} 
                      />
                    </button>
                    {dropdown.isOpen && dropdown.items.length > 0 && (
                      <div 
                        className="navbar__dropdownMenu"
                        onMouseEnter={() => dropdown.setOpen(true)}
                      >
                        {dropdown.items.map((item) => {
                          const isExternal = isExternalProject(item);
                          const href = isExternal ? item.externalUrl : `${dropdown.basePath}/${item.id}`;
                          const content = (
                            <>
                              <div className="navbar__dropdownItemIcon">
                                <Image
                                  src={withBasePath(item.logo)}
                                  alt={`${item.name} logo`}
                                  width={32}
                                  height={32}
                                  style={{ objectFit: "contain" }}
                                  unoptimized
                                />
                              </div>
                              <div className="navbar__dropdownItemContent">
                                <div className="navbar__dropdownItemName">{item.name}</div>
                                <div className="navbar__dropdownItemTagline">{item.description}</div>
                              </div>
                            </>
                          );
                          if (!href) {
                            return null;
                          }
                          return isExternal ? (
                            <a
                              key={item.id}
                              href={href}
                              target="_blank"
                              rel="noreferrer"
                              className="navbar__dropdownItem"
                              onClick={() => dropdown.setOpen(false)}
                            >
                              {content}
                            </a>
                          ) : (
                            <Link
                              key={item.id}
                              href={href}
                              className="navbar__dropdownItem"
                              onClick={() => dropdown.setOpen(false)}
                            >
                              {content}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              }
              const isActive = link.hasDropdown
                ? pathname?.startsWith(link.dropdownKey === "openSource" ? "/open-source" : "/products")
                : pathname === link.href;
              const isExternal = Boolean(link.external);
              const linkStyle = {
                color: isActive ? "var(--text-primary)" : "var(--text-secondary)",
                fontWeight: isActive ? 600 : 400,
                textDecoration: "none"
              } as const;
              if (isExternal) {
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="navbar__link"
                    style={linkStyle}
                  >
                    {link.label}
                  </a>
                );
              }
              return (
                <Link key={link.href} href={link.href} className="navbar__link" style={linkStyle}>
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
        <div className="navbar__actions">
          <Link
            href="/contact"
            className="navbar__desktopCta"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: 40,
              height: 40,
              borderRadius: "8px",
              background: "transparent",
              color: "var(--text-primary)",
              textDecoration: "none",
              transition: "background-color 0.3s ease"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(15,23,42,0.08)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
            }}
          >
            <Phone size={20} />
          </Link>
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
            {links.map((link) => {
              const dropdown = link.hasDropdown && link.dropdownKey ? dropdownConfigs[link.dropdownKey] : null;
              const basePath = dropdown?.basePath;
              const isActive = link.hasDropdown ? pathname?.startsWith(basePath || "") : pathname === link.href;
              const isExternalTopLink = Boolean(link.external);
              return (
              <div key={link.href}>
                {isExternalTopLink ? (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => setOpen(false)}
                    className="navbar__link"
                    style={{
                      display: "block",
                      marginBottom: 12,
                      color: isActive ? "var(--text-primary)" : "var(--text-secondary)"
                    }}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="navbar__link"
                    style={{
                      display: "block",
                      marginBottom: 12,
                        color: isActive ? "var(--text-primary)" : "var(--text-secondary)"
                    }}
                  >
                    {link.label}
                  </Link>
                )}
                {link.hasDropdown && dropdown && dropdown.items.length > 0 && (
                  <div style={{ marginLeft: 16, marginBottom: 12 }}>
                    {dropdown.items.map((item) => {
                      const isExternal = isExternalProject(item);
                      const href = isExternal ? item.externalUrl : `${dropdown.basePath}/${item.id}`;
                      if (!href) {
                        return null;
                      }
                      const content = (
                        <>
                          <Image
                            src={withBasePath(item.logo)}
                            alt={`${item.name} logo`}
                            width={24}
                            height={24}
                            style={{ objectFit: "contain" }}
                            unoptimized
                          />
                          <div>
                            <div style={{ fontWeight: 500 }}>{item.name}</div>
                            <div style={{ fontSize: 12, color: "var(--text-secondary)" }}>{item.description}</div>
                          </div>
                        </>
                      );
                      const commonStyle = {
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        marginBottom: 8,
                        color: pathname === `${dropdown.basePath}/${item.id}` ? "var(--text-primary)" : "var(--text-secondary)"
                      } as const;
                      return isExternal ? (
                        <a
                          key={item.id}
                          href={href}
                          target="_blank"
                          rel="noreferrer"
                          onClick={() => setOpen(false)}
                          className="navbar__link"
                          style={commonStyle}
                        >
                          {content}
                        </a>
                      ) : (
                        <Link
                          key={item.id}
                          href={href}
                          onClick={() => setOpen(false)}
                          className="navbar__link"
                          style={commonStyle}
                        >
                          {content}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
              );
            })}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              marginBottom: 12,
              padding: "8px 16px",
              borderRadius: "8px",
              background: "rgba(15,23,42,0.06)",
              color: "var(--text-primary)",
              textDecoration: "none"
            }}
          >
            <Phone size={18} />
            <span>联系我们</span>
          </Link>
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

