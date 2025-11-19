export interface Product {
  id: string;
  logo: string;
  name: string;
  badge: string;
  tagline: string;
  description: string;
}

export const products: Product[] = [
  {
    id: "xmcp",
    logo: "/images/nav/xmcp-logo.png",
    name: "XMCP",
    badge: "多云纳管",
    tagline: "基于Mesh网络的多云纳管平台",
    description: "XMCP 端到端智能连接的多云管理平台，帮助企业实现多云互联、应用管理、计量计费等场景。"
  },
  {
    id: "rune",
    logo: "/images/nav/rune-logo.png",
    name: "Rune",
    badge: "AI智算",
    tagline: "现代化AI训推一体平台",
    description: "RUNE 是企业级的 AI 训推一体化平台，广泛用于 AI 场景下的模型开发、训练、模型推理、智能体全流程。"
  },
  {
    id: "moha",
    logo: "/images/nav/moha-logo.svg",
    name: "魔哈·Moha",
    badge: "AI资产",
    tagline: "私有化AI模型、数据集仓库",
    description: "魔哈·Moha私有化的AI资产仓库服务，支持数据加密，帮助企业实现模型、数据集的私有化管理与安全存储。"
  },
  {
    id: "kubegems",
    logo: "/images/nav/kubegems-logo.svg",
    name: "KubeGems",
    badge: "容器云",
    tagline: "云原生开源容器应用管理平台",
    description: "KubeGems 一款功能强大的开源容器管理平台，具备多集群、容器应用的统一管理、编排、可观测性等能力。"
  },
  {
    id: "ai-router",
    logo: "/images/nav/logo.png",
    name: "AI Router",
    badge: "API 网关",
    tagline: "功能强大的 AI API 网关",
    description: "AI Router 是一款高性能的 AI API 访问控制网关，提供企业级权限治理、限流、审计与可观测能力"
  },
  {
    id: "chatbox",
    logo: "/images/nav/logo.png",
    name: "ChatBox",
    badge: "AI 应用",
    tagline: "功能强大的多模态模型体验平台",
    description: "ChatBox 是一款功能强大的多模态模型体验平台，提供企业级权限治理、限流、审计与可观测能力"
  }
];

export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id);
}

