import type { Metadata } from "next";
import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "联系我们",
  description: "与成都破晓石科技团队取得联系，预约演示或咨询解决方案。"
};

export default function ContactPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-4">
        <p className="text-sm uppercase tracking-[0.4em] text-brand-light">Contact</p>
        <h1 className="text-4xl font-semibold text-white">与我们对话未来云与 AI</h1>
        <p className="text-slate-200/80">
          填写需求表单或通过邮箱、电话与我们联系，团队将在 1 个工作日内回复。欢迎预约线下 Workshop 或线上方案评审。
        </p>
      </header>
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <ContactForm />
        <div className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-6">
          <div>
            <h2 className="text-xl font-semibold text-white">联系方式</h2>
            <ul className="mt-4 space-y-2 text-sm text-slate-200">
              <li>邮箱：support@xiaoshiai.cn</li>
              <li>地址：四川省成都市高新区长虹科技大厦A座1403</li>
              <li>GitHub：github.com/poxiaoyun</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-white">地图</h2>
            <div className="mt-4 overflow-hidden rounded-2xl border border-white/10">
              <Image src="/images/map-placeholder.png" alt="Map placeholder" width={800} height={450} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

