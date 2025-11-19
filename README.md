# 成都破晓石科技有限公司官网

基于 Next.js 14 + TypeScript + Tailwind CSS + shadcn/ui 的企业官网，聚焦云原生与 AI 智算解决方案，契合 Fit2Cloud 科技蓝调风格。

## 技术栈
- Next.js 14（App Router）
- TypeScript、ESLint、Prettier（可自行添加）
- Tailwind CSS、tailwindcss-animate、shadcn/ui 工具集
- Zod 表单校验

## 快速开始
```bash
pnpm install   # 或 npm/yarn
pnpm dev       # http://localhost:3000
```

## 常用脚本
- `pnpm dev`：开发模式
- `pnpm build`：生产构建
- `pnpm start`：预览生产包
- `pnpm lint`：运行 ESLint

## 结构概览
- `app/`：使用 App Router 的页面、布局、API
- `components/`：复用组件（Navbar、Footer、Card、ContactForm 等）
- `styles/`：全局样式、Tailwind 基础
- `public/`：静态资源、logo/地图/og 占位
- `data/contacts.json`：Contact API 追加写入的开发数据
- `lib/`：工具方法（输入清洗、格式化）

## 环境变量
当前示例未启用外部服务，如需接入第三方 API，请在 `.env.local` 中配置并在代码中引用 `process.env`。

## Contact API
- 路径：`POST /api/contact`
- 请求体：`{ name, company, email, phone, message }`
- 逻辑：基础清洗与校验 → 追加写入 `data/contacts.json` → 返回 `{ ok: true }`
- 可根据实际需求替换为外部邮件/工单服务，只需在 `app/api/contact/route.ts` 中更新处理逻辑。

## 自定义与品牌替换
- 文案：在 `app/` 页面或 `components/` 文案变量中直接修改
- Logo/图片：替换 `public/images` 下占位图；Hero 背景可在 `styles/globals.css` 中调整渐变
- SEO：在 `components/SeoHead.tsx` 与各页面 `metadata` 字段更新 title/description/og 信息

## Lighthouse & 性能
代码内包含基础动画与懒加载优化建议，若需进一步优化，可：
- 使用 Next/Image 管理所有图片
- 启用 edge runtime（针对只读页面）
- 引入分析工具监控 Core Web Vitals

## 部署
### Vercel
1. 在 Vercel 中导入仓库
2. 设置框架为 Next.js（自动识别）
3. 部署后生成的域名即生产环境

### 其他平台
1. `pnpm build`
2. 将 `.next`, `package.json`, `node_modules` 上传至服务器
3. `pnpm start`（默认端口 3000，可使用 `PORT` 环境变量）

### Docker
1. 构建镜像（在仓库根目录）：`docker build -t chengdu-site:latest .`
2. 运行容器：`docker run -d -p 3000:80 --name chengdu-site chengdu-site:latest`
3. 网站将通过 `http://localhost:3000` 访问（容器内由 Nginx 提供静态文件）

## 地图与图像占位
- `public/images/map-placeholder.png` 用于联系页地图
- `public/images/partner/*.svg` 用于合作伙伴 Logo
- `public/og.png` 作为默认分享图，可在设计完成后替换

## 贡献指南
1. Fork 仓库并创建新分支
2. 提交前运行 `pnpm lint`
3. 提交 PR 并描述变更用途

---
如需扩展产品或增加语言版本，可按照 Next.js App Router 的约定创建新 route group，并在 Navbar 中补充导航链接。欢迎针对 UI/UX、性能优化等提出改进建议。

