# portal 项目规范与索引

> 成都破晓石科技官网（package name: `chengdu-poxiaoshi-site`）。
> 本文件是本仓的开发索引；同时受上级 `/Users/linkma/Project/Rune/AGENTS.md` 工作区规范约束（冲突时以本文件为先）。
> 索引日期：2026-09-01，基于 main @ 05c0511。

## 1. 项目定位

企业官网（纯静态营销站），展示产品、案例、公司动态，收集联系表单。**不是** Console/BOSS 等应用前端，无登录、无租户上下文。

- 远端：`git@github.com:poxiaoyun/portal.git`，单人开发，直接在 main 分支开发。
- 语言：全站 zh-CN，与用户交流一律使用中文（见 `.github/prompts/language.prompt.md`）。

## 2. 技术栈与关键配置

- Next.js 14.2（App Router）+ TypeScript strict + React 18.3
- 样式：Tailwind CSS 3（品牌色 `#0a7cff`，见 tailwind.config.js）+ `styles/globals.css` 自定义类（`navbar__*`、`card-glow`、`site-shell` 等）
- UI 库：Ant Design 5 + @lobehub/ui + antd-style（`transpilePackages` 已配置）+ lucide-react 图标
- 内容：gray-matter 解析 `content/` 下 Markdown front matter
- **静态导出**：`next.config.js` 中 `output: "export"`、`images.unoptimized: true`、`trailingSlash: true`。产物为 `out/`，由 Nginx 容器提供。**因此不能使用 API 路由、SSR、动态路由服务端逻辑**（动态路由 `[slug]` 靠 `generateStaticParams` 在构建期展开）。
- basePath：通过 `NEXT_PUBLIC_BASE_PATH` 环境变量支持子路径部署（GitHub Pages），运行时用 `lib/withBasePath.ts` 的 `withBasePath()` 拼接静态资源 URL。
- 路径别名：`@/*` → 仓库根。
- 包管理器：**pnpm**（Dockerfile/Makefile/README 均用 pnpm），锁文件为 `pnpm-lock.yaml`，勿用 npm 安装。

## 3. 常用命令

```bash
pnpm install
pnpm dev      # 先跑 scripts/generate-seo-files.mjs 再 next dev
pnpm build    # 同上先跑 SEO 生成，再静态导出到 out/
pnpm start    # 预览（注意：output:export 下 start 仅适用于 next start 兼容场景）
pnpm lint     # next lint（ESLint）
make docker-build / docker-run / docker-stop   # PORT=3000 映射容器 80
```

`scripts/generate-seo-files.mjs` 在每次 dev/build 前生成 `public/sitemap.xml` 和 `public/robots.txt`：静态路由硬编码在脚本 `staticRoutes` 中，新闻/案例路由扫描 `content/news`、`content/cases` 的 front matter `date` 作为 lastmod。**新增页面后必须同步更新脚本里的 staticRoutes**。

## 4. 目录索引

```
app/
  layout.tsx                  # 根布局：AntdProvider + Navbar + Footer，全站 metadata
  page.tsx                    # 首页（330 行，Hero/产品/案例/伙伴/评价）
  manifest.ts                 # PWA manifest
  about/ contact/             # 静态页 + 各自 *PageContent.tsx
  blog/ (+[slug]/)            # 公司动态：lib/news.ts 读 content/news/*.md
  cases/ (+[slug]/)           # 案例中心：lib/cases.ts 读 content/cases/*.md，按行业筛选
  products/
    productPageFactory.tsx    # makeProductPage/buildProductMetadata 工厂
    [slug]/                   # 通用产品详情兜底页
    xmcp| rune | moha | ai-router | chatbox /   # 各产品独立页 + 独立 PageContent
components/                   # Navbar/Footer/Hero/Button/Card/OfficeMap(腾讯地图)/ContactForm(Web3Forms 提交，未配置 key 时降级 mailto)/TeamMemberCard/AntdProvider/InitialRenderStyles
content/news/*.md             # 动态文章（front matter: title/date/coverImage/excerpt）
content/cases/*.md            # 案例（front matter: title/date/industry/customer/goal/tags/challenges/solutions/results/advantages）
data/products.ts              # 5 个产品卡片元数据（导航与产品页的数据源）
data/openSourceProjects.ts    # 开源项目（KubeGems，外链）
lib/site.ts                   # siteConfig：公司名/域名/地址/联系方式/关键词
lib/seo.ts                    # buildPageMetadata + Organization/WebSite JSON-LD
lib/news.ts / lib/cases.ts    # Markdown 加载器（fs + gray-matter，构建期执行）
public/images/                # nav|products|cases|news|partner|team|honors 等静态图
docker/nginx.conf             # 容器 Nginx 配置
```

## 5. 数据接线（改哪里）

| 想改什么 | 改哪里 |
| --- | --- |
| 公司信息/SEO 关键词/地址 | `lib/site.ts`（siteConfig 单一来源） |
| 导航栏菜单 | `components/Navbar.tsx` 的 `links` 数组 |
| 产品列表（导航下拉+首页卡片） | `data/products.ts` |
| 开源项目下拉 | `data/openSourceProjects.ts` |
| 新闻/动态 | 新增 `content/news/YYYY-MM-DD-slug.md` |
| 客户案例 | 新增 `content/cases/slug.md`（front matter 结构见 lib/cases.types.ts） |
| 全站样式/主题色 | `styles/globals.css` + `tailwind.config.js` |

**新增产品页 checklist**：
1. `data/products.ts` 加条目（含 logo 图片放 `public/images/nav/`）。
2. `app/products/<id>/` 建页：简单页用 `makeProductPage(id)` + `buildProductMetadata(id)`（见 `app/products/xmcp/page.tsx`）；复杂页写独立 `<Id>PageContent.tsx`（参考 rune/moha）。
3. `scripts/generate-seo-files.mjs` 的 `staticRoutes` 加 `/products/<id>/`。
4. 如需导航徽标等图片，补 `public/images/`。

## 6. 组件约定

- 服务端组件优先，仅交互组件标 `"use client"`（Navbar、ContactForm、各 `*PageContent.tsx` 中含 hooks 的部分）。
- 复用 UI 走 `components/`；产品页内容组件放在对应路由目录内，不提升为全局组件。
- 图片：静态导出下 `next/image` 一律 `unoptimized`（logo 已配置），背景图走 CSS。

## 7. 已知问题与漂移（2026-09-01 更新）

以下问题已于 2026-09-01 修复：联系表单改为 mailto 提交（收件人见 siteConfig.contact.email）；删除 package-lock.json（pnpm 单一锁文件）；tsconfig.tsbuildinfo 移出 git 并加入 .gitignore；清理死代码（app/head.tsx、app/blog/BlogPageContent.tsx、data/blogPosts.ts、components/SeoHead.tsx、data/contacts.json、app/api/）与未使用的 next-sitemap 依赖。

仍遗留：

1. 本仓不在 Rune 工作区 `repositories.json` / PROJECT_MEMORY.md 的 15 仓索引内（独立远端 poxiaoyun/portal），工作区治理文件未覆盖。
2. 表单收集已改用 Web3Forms（key 走 Secret `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`，见 .env.example）；key 未配置或服务不可用时降级为 mailto。2026-09-02 更新。

## 8. 验证要求（改动后的最低门禁）

```bash
pnpm lint
pnpm build        # 必须通过：SEO 生成 + tsc + 静态导出
git status --short --branch   # 确认无意外生成物被提交（out/ 已忽略）
```

涉及页面新增时，本地 `pnpm dev` 检查导航、面包屑与移动端菜单；涉及 Docker 交付时跑 `make docker-build` 并验证容器内路由（trailingSlash 下 `/about/` 形式）。

## 9. 分支与提交

单人开发，直接在 main 提交。提交信息沿用现有风格（中文描述或 `feat:/fix:` 前缀均可，见 git log）。push 前确认 `git pull --rebase` 后无冲突。
