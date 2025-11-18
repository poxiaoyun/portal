"use client";

import { Button } from "@/components/Button";
import { cn, sanitizeInput } from "@/lib/utils";
import { z } from "zod";
import { useState } from "react";

const schema = z.object({
  name: z.string().min(2),
  company: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(6),
  message: z.string().min(10)
});

export function ContactForm({ className }: { className?: string }) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setStatus("loading");

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: sanitizeInput(formData.get("name") as string),
      company: sanitizeInput(formData.get("company") as string),
      email: sanitizeInput(formData.get("email") as string),
      phone: sanitizeInput(formData.get("phone") as string),
      message: sanitizeInput(formData.get("message") as string)
    };

    const parseResult = schema.safeParse(payload);
    if (!parseResult.success) {
      setStatus("error");
      setError("请完整填写表单并确保格式正确。");
      return;
    }

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(parseResult.data)
    });

    if (response.ok) {
      setStatus("success");
      event.currentTarget.reset();
    } else {
      setStatus("error");
      setError("提交失败，请稍后再试。");
    }
  }

  return (
    <form onSubmit={onSubmit} className={cn("space-y-4 rounded-2xl border border-white/10 bg-slate-900/60 p-6", className)}>
      <div>
        <label htmlFor="name" className="text-sm text-slate-200">
          姓名 *
        </label>
        <input id="name" name="name" required className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white focus:border-brand focus:outline-none" />
      </div>
      <div>
        <label htmlFor="company" className="text-sm text-slate-200">
          公司 *
        </label>
        <input id="company" name="company" required className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white focus:border-brand focus:outline-none" />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label htmlFor="email" className="text-sm text-slate-200">
            邮箱 *
          </label>
          <input id="email" name="email" type="email" required className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white focus:border-brand focus:outline-none" />
        </div>
        <div>
          <label htmlFor="phone" className="text-sm text-slate-200">
            电话 *
          </label>
          <input id="phone" name="phone" required className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white focus:border-brand focus:outline-none" />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="text-sm text-slate-200">
          需求描述 *
        </label>
        <textarea id="message" name="message" rows={4} required className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white focus:border-brand focus:outline-none" />
      </div>
      {error && <p className="text-sm text-red-400">{error}</p>}
      {status === "success" && <p className="text-sm text-emerald-400">提交成功，我们会尽快联系您。</p>}
      <Button type="submit" loading={status === "loading"} className="w-full">
        提交
      </Button>
    </form>
  );
}

