export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/10 bg-slate-950/80">
      <div className="container grid gap-8 py-10 md:grid-cols-3">
        <div>
          <h4 className="text-lg font-semibold text-white">成都破晓石科技有限公司</h4>
          <p className="mt-2 text-sm text-slate-300">原生无界，破晓时刻 · Chengdu Poxiaoshi Technology Co., Ltd.</p>
        </div>
        <div>
          <p className="text-sm text-slate-400">快速链接</p>
          <div className="mt-2 flex flex-col space-y-1 text-sm text-slate-200">
            <a href="/products">产品</a>
            <a href="/solutions">解决方案</a>
            <a href="/blog">博客 / 资源</a>
          </div>
        </div>
        <div>
          <p className="text-sm text-slate-400">联系我们</p>
          <p className="mt-2 text-sm text-slate-200">support@xiaoshiai.cn</p>
          <p className="text-sm text-slate-400">四川省成都市高新区长虹科技大厦A座1403</p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container flex flex-wrap items-center justify-between gap-4 py-4 text-xs text-slate-500">
          <span>© {year} 破晓石科技 · All rights reserved.</span>
          <span>蜀ICP备 · 备案号占位</span>
        </div>
      </div>
    </footer>
  );
}

