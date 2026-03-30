import type { Metadata } from "next";
import { CasesPageContent } from "./CasesPageContent";
import { getCasePosts } from "@/lib/cases";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "案例中心",
  description:
    "覆盖能源、制造、教育、运营商等行业的数智化转型案例，展示我们在云原生、混合云与 AI 智算领域的实践成果。",
  path: "/cases",
  keywords: ["客户案例", "行业案例", "数智化转型", "AI 智算案例", "混合云案例"]
});

export default function CasesPage() {
  const cases = getCasePosts();
  return <CasesPageContent cases={cases} />;
}
