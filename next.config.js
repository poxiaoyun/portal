/** @type {import('next').NextConfig} */
const rawBasePath = process.env.NEXT_PUBLIC_BASE_PATH?.trim() || "";
const normalizedBasePath =
  rawBasePath === ""
    ? ""
    : `/${rawBasePath.replace(/^\/|\/$/g, "")}`;
const isGitHubPages = normalizedBasePath !== "";

const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@lobehub/ui", "antd", "antd-style"],
  output: "export",
  images: {
    unoptimized: true
  },
  basePath: isGitHubPages ? normalizedBasePath : undefined,
  assetPrefix: isGitHubPages ? `${normalizedBasePath}/` : undefined,
  trailingSlash: true
};

module.exports = nextConfig;

