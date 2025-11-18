export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-slate-200/50 bg-white/70 backdrop-blur-xl backdrop-saturate-150">
      <div className="container grid gap-8 py-10 md:grid-cols-3">
        <div>
          <h4 className="text-lg font-semibold text-slate-900">成都破晓石科技有限公司</h4>
          <p className="mt-2 text-sm text-slate-600">原生无界，破晓时刻 · Chengdu Poxiaoshi Technology Co., Ltd.</p>
        </div>
        <div>
          <p className="text-sm text-slate-500">快速链接</p>
          <div className="mt-2 flex flex-col space-y-1 text-sm text-slate-700">
            <a href="/products" className="hover:text-brand">产品</a>
            <a href="/solutions" className="hover:text-brand">解决方案</a>
            <a href="/blog" className="hover:text-brand">博客 / 资源</a>
          </div>
        </div>
        <div>
          <p className="text-sm text-slate-500">联系我们</p>
          <p className="mt-2 text-sm text-slate-700">support@xiaoshiai.cn</p>
          <p className="text-sm text-slate-500">四川省成都市高新区长虹科技大厦A座1403</p>
        </div>
      </div>
      <div className="border-t border-slate-200/50">
        <div className="container flex flex-wrap items-center justify-between gap-4 py-4 text-xs text-slate-500">
          <span>© {year} 破晓石科技 · All rights reserved.</span>
          <span>蜀ICP备 · 备案号占位</span>
        </div>
      </div>
    </footer>
  );
}

