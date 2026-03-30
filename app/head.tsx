import { InitialRenderStyles } from "@/components/InitialRenderStyles";
import { getOrganizationJsonLd, getWebsiteJsonLd } from "@/lib/seo";

const structuredData = [getOrganizationJsonLd(), getWebsiteJsonLd()];

export default function Head() {
  return (
    <>
      <meta httpEquiv="content-language" content="zh-CN" />
      <meta name="author" content="成都破晓石科技有限公司" />
      <meta
        name="copyright"
        content={`Copyright ${new Date().getFullYear()} 成都破晓石科技有限公司`}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <InitialRenderStyles />
    </>
  );
}
