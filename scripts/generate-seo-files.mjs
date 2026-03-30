import fs from "fs";
import path from "path";
import matter from "gray-matter";

const site = {
  url: "https://www.poxiaoshi.cn",
  domain: "www.poxiaoshi.cn"
};

const rootDir = process.cwd();
const publicDir = path.join(rootDir, "public");
const newsDir = path.join(rootDir, "content", "news");
const casesDir = path.join(rootDir, "content", "cases");

const staticRoutes = [
  { path: "/", priority: "1.0", changeFrequency: "weekly", lastModified: new Date().toISOString() },
  { path: "/about/", priority: "0.6", changeFrequency: "yearly", lastModified: new Date().toISOString() },
  { path: "/blog/", priority: "0.7", changeFrequency: "weekly", lastModified: new Date().toISOString() },
  { path: "/cases/", priority: "0.8", changeFrequency: "weekly", lastModified: new Date().toISOString() },
  { path: "/contact/", priority: "0.6", changeFrequency: "yearly", lastModified: new Date().toISOString() },
  { path: "/products/xmcp/", priority: "0.8", changeFrequency: "monthly", lastModified: new Date().toISOString() },
  { path: "/products/rune/", priority: "0.8", changeFrequency: "monthly", lastModified: new Date().toISOString() },
  { path: "/products/moha/", priority: "0.8", changeFrequency: "monthly", lastModified: new Date().toISOString() },
  { path: "/products/ai-router/", priority: "0.8", changeFrequency: "monthly", lastModified: new Date().toISOString() },
  { path: "/products/chatbox/", priority: "0.8", changeFrequency: "monthly", lastModified: new Date().toISOString() }
];

function readMarkdownRoutes(dirPath, routePrefix, priority) {
  if (!fs.existsSync(dirPath)) {
    return [];
  }

  return fs
    .readdirSync(dirPath)
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const slug = file.replace(/\.md$/, "");
      const fullPath = path.join(dirPath, file);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);
      const lastModified = typeof data.date === "string" ? new Date(data.date).toISOString() : new Date().toISOString();

      return {
        path: `${routePrefix}/${slug}/`,
        priority,
        changeFrequency: "monthly",
        lastModified
      };
    });
}

function xmlEscape(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function writeSitemap(routes) {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>
    <loc>${xmlEscape(`${site.url}${route.path === "/" ? "/" : route.path}`)}</loc>
    <lastmod>${route.lastModified}</lastmod>
    <changefreq>${route.changeFrequency}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>
`;

  fs.writeFileSync(path.join(publicDir, "sitemap.xml"), xml, "utf8");
}

function writeRobots() {
  const content = `User-agent: *
Allow: /
Disallow: /api/
Disallow: /_next/
Disallow: /private/

Host: ${site.domain}
Sitemap: ${site.url}/sitemap.xml
`;

  fs.writeFileSync(path.join(publicDir, "robots.txt"), content, "utf8");
}

fs.mkdirSync(publicDir, { recursive: true });

const routes = [
  ...staticRoutes,
  ...readMarkdownRoutes(newsDir, "/blog", "0.7"),
  ...readMarkdownRoutes(casesDir, "/cases", "0.75")
];

writeSitemap(routes);
writeRobots();

console.log(`Generated public/sitemap.xml with ${routes.length} URLs`);
console.log("Generated public/robots.txt");
