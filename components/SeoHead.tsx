interface SeoHeadProps {
  title: string;
  description: string;
  url: string;
  image?: string;
}

export function SeoHead({ title, description, url, image = "/og.png" }: SeoHeadProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "成都破晓石科技有限公司",
    url,
    sameAs: ["https://github.com/poxiaoyun"],
    logo: "/og.png",
    description
  };
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta name="twitter:card" content="summary_large_image" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}

