import { InitialRenderStyles } from "@/components/InitialRenderStyles";
import { SeoHead } from "@/components/SeoHead";

export default function Head() {
  return (
    <>
      <SeoHead
        title="成都破晓石科技有限公司官网 | 云原生 · AI 智算"
        description="成都破晓石科技有限公司专注云原生、混合云与 AI 智算平台，提供 XAMP、XPAI、KubeGems 等全栈解决方案，助力企业原生无界。"
        url="https://www.poxiaoshi.com"
      />
      <InitialRenderStyles />
    </>
  );
}

