/** @type {import('next').NextConfig} */
const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@lobehub/ui", "antd", "antd-style"],
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**"
      }
    ]
  },
  basePath: isGitHubPages ? "/portal" : undefined,
  assetPrefix: isGitHubPages ? "/portal/" : undefined,
  trailingSlash: true
};

module.exports = nextConfig;

