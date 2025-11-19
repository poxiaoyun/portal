const RAW_BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH?.trim() ?? "";
const NORMALIZED_BASE_PATH = RAW_BASE_PATH
  ? `/${RAW_BASE_PATH.replace(/^\/|\/$/g, "")}`
  : "";

export function withBasePath(path: string) {
  if (!path) return path;
  if (!NORMALIZED_BASE_PATH) return path;
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${NORMALIZED_BASE_PATH}${normalizedPath}`;
}

