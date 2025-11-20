import type { Product } from "./products";

export interface OpenSourceProject extends Product {
  externalUrl?: string;
}

export const openSourceProjects: OpenSourceProject[] = [
  {
    id: "kubegems",
    logo: "/images/nav/kubegems-logo.svg",
    name: "KubeGems · 开源容器云",
    badge: "开源容器云",
    tagline: "云原生开源容器应用管理平台",
    description: "KubeGems 一款功能强大的开源容器管理平台，具备多集群、容器应用的统一管理、编排、可观测性等能力。",
    externalUrl: "https://kubegems.io"
  }
];

