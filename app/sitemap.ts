import type { MetadataRoute } from "next";
import { products } from "@/data/products";
import { blogPosts } from "@/data/blogPosts";

interface RouteConfig {
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  lastModified?: Date;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.poxiaoshi.com";
  const now = new Date();

  const staticRoutes: RouteConfig[] = [
    { path: "", priority: 1, changeFrequency: "weekly", lastModified: now },
    { path: "/solutions", priority: 0.8, changeFrequency: "monthly", lastModified: now },
    { path: "/about", priority: 0.6, changeFrequency: "yearly", lastModified: now },
    { path: "/contact", priority: 0.6, changeFrequency: "yearly", lastModified: now },
    { path: "/blog", priority: 0.7, changeFrequency: "weekly", lastModified: now }
  ];

  const productRoutes: RouteConfig[] = products.map((product) => ({
    path: `/products/${product.id}`,
    priority: 0.8,
    changeFrequency: "monthly",
    lastModified: now
  }));

  const blogRoutes: RouteConfig[] = blogPosts.map((post) => ({
    path: `/blog/${post.slug}`,
    priority: 0.7,
    changeFrequency: "monthly",
    lastModified: new Date(post.date)
  }));

  const routes = [...staticRoutes, ...productRoutes, ...blogRoutes];

  return routes.map(({ path, ...rest }) => ({
    url: `${baseUrl}${path}`,
    lastModified: rest.lastModified ?? now,
    changeFrequency: rest.changeFrequency,
    priority: rest.priority
  }));
}

