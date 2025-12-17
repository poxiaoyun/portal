import type { Metadata } from "next";
import { CasesPageContent } from "./CasesPageContent";
import { getCasePosts } from "@/lib/cases";

export const metadata: Metadata = {
  title: "案例中心 - 晓石云",
  description: "覆盖能源、制造、教育、运营商等行业的数智化转型案例，展示我们在云原生和 AI 智算领域的实践成果。",
};

export default function CasesPage() {
  const cases = getCasePosts();
  return <CasesPageContent cases={cases} />;
}
