export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="container grid gap-12 py-16 md:grid-cols-3">
        <div>
          <h4 className="mb-3 text-base font-semibold text-slate-900">成都破晓石科技有限公司</h4>
          <p className="text-sm leading-relaxed text-slate-600">原生无界，破晓时刻 · Chengdu Poxiaoshi Technology Co., Ltd.</p>
        </div>
        <div>
          <p className="mb-4 text-sm font-medium text-slate-900">快速链接</p>
          <div className="flex flex-col space-y-2 text-sm">
            <a href="/products" className="text-slate-600 hover:text-slate-900 transition-colors">产品</a>
            <a href="/solutions" className="text-slate-600 hover:text-slate-900 transition-colors">解决方案</a>
            <a href="/blog" className="text-slate-600 hover:text-slate-900 transition-colors">博客 / 资源</a>
          </div>
        </div>
        <div>
          <p className="mb-4 text-sm font-medium text-slate-900">联系我们</p>
          <p className="mb-2 text-sm text-slate-600">support@xiaoshiai.cn</p>
          <p className="text-sm text-slate-600">四川省成都市高新区长虹科技大厦A座1403</p>
        </div>
      </div>
      <div className="border-t border-slate-200">
        <div className="container flex flex-wrap items-center justify-between gap-4 py-6 text-sm text-slate-500">
          <span>© {year} 破晓石科技 · All rights reserved.</span>
          <span>蜀ICP备 · 备案号占位</span>
        </div>
      </div>
    </footer>
  );
}

