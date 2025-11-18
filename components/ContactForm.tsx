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
    <form onSubmit={onSubmit} className={cn("card-glow space-y-5 p-6", className)}>
      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-900">
          姓名 *
        </label>
        <input id="name" name="name" required className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-slate-900 placeholder:text-slate-400 focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200" />
      </div>
      <div>
        <label htmlFor="company" className="mb-2 block text-sm font-medium text-slate-900">
          公司 *
        </label>
        <input id="company" name="company" required className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-slate-900 placeholder:text-slate-400 focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200" />
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-900">
            邮箱 *
          </label>
          <input id="email" name="email" type="email" required className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-slate-900 placeholder:text-slate-400 focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200" />
        </div>
        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-medium text-slate-900">
            电话 *
          </label>
          <input id="phone" name="phone" required className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-slate-900 placeholder:text-slate-400 focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200" />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-900">
          需求描述 *
        </label>
        <textarea id="message" name="message" rows={4} required className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-slate-900 placeholder:text-slate-400 focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200" />
      </div>
      {error && <p className="text-sm text-red-400">{error}</p>}
      {status === "success" && <p className="text-sm text-emerald-400">提交成功，我们会尽快联系您。</p>}
      <Button type="submit" loading={status === "loading"} className="w-full">
        提交
      </Button>
    </form>
  );
}

