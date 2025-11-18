import type { Metadata } from "next";
import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "联系我们",
  description: "与成都破晓石科技团队取得联系，预约演示或咨询解决方案。"
};

export default function ContactPage() {
  return (
    <div className="container space-y-16 py-12">
      <header className="mx-auto max-w-3xl text-center">
        <p className="mb-3 text-sm font-medium uppercase tracking-wider text-slate-500">Contact</p>
        <h1 className="mb-4 text-4xl font-bold text-slate-900 lg:text-5xl">与我们对话未来云与 AI</h1>
        <p className="text-lg leading-relaxed text-slate-600">
          填写需求表单或通过邮箱、电话与我们联系，团队将在 1 个工作日内回复。欢迎预约线下 Workshop 或线上方案评审。
        </p>
      </header>
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <ContactForm />
        <div className="card-glow space-y-8 p-8">
          <div>
            <h2 className="mb-4 text-xl font-semibold text-slate-900">联系方式</h2>
            <ul className="space-y-3 text-sm text-slate-600">
              <li>邮箱：support@xiaoshiai.cn</li>
              <li>地址：四川省成都市高新区长虹科技大厦A座1403</li>
              <li>GitHub：<a href="https://github.com/poxiaoyun" className="text-slate-900 hover:underline">github.com/poxiaoyun</a></li>
            </ul>
          </div>
          <div>
            <h2 className="mb-4 text-xl font-semibold text-slate-900">地图</h2>
            <div className="overflow-hidden rounded-lg border border-slate-200">
              <Image src="/images/map-placeholder.png" alt="Map placeholder" width={800} height={450} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

