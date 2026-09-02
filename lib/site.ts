export const siteConfig = {
  name: "成都破晓石科技有限公司",
  shortName: "破晓石科技",
  domain: "www.poxiaoshi.cn",
  url: "https://www.poxiaoshi.cn",
  title: "成都破晓石科技官网 | 云原生·混合云·AI智算平台",
  defaultDescription:
    "成都破晓石科技有限公司专注云原生、混合云与 AI 智算平台，提供多云纳管、AI 智算平台、AI 数据资产管理与 AI 网关等全栈解决方案。",
  defaultKeywords: [
    "成都破晓石科技",
    "破晓石科技",
    "云原生",
    "混合云",
    "多云管理",
    "多云纳管",
    "智算平台",
    "AI智算",
    "AI算力平台",
    "企业AI平台",
    "AI网关",
    "数据资产管理",
    "大模型平台",
    "成都AI公司",
    "四川AI公司"
  ],
  locale: "zh_CN",
  language: "zh-CN",
  country: "CN",
  region: "CN-SC",
  city: "Chengdu",
  address: {
    streetAddress: "四川省成都市高新区银泰悦坊17号楼9层",
    addressLocality: "成都市",
    addressRegion: "四川省",
    postalCode: "610000",
    addressCountry: "CN"
  },
  coordinates: {
    // 成都银泰城悦坊（益州大道中段1999号），GCJ-02 坐标
    latitude: "30.540905",
    longitude: "104.05972"
  },
  contact: {
    email: "support@xiaoshiai.cn"
  },
  socialProfiles: ["https://github.com/poxiaoyun"],
  ogImage: "/og.png"
} as const;

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}
