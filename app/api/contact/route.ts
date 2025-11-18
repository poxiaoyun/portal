import { NextResponse } from "next/server";
import { z } from "zod";
import { promises as fs } from "fs";
import path from "path";
import { sanitizeInput } from "@/lib/utils";

const schema = z.object({
  name: z.string().min(2),
  company: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(6),
  message: z.string().min(10)
});

const contactsPath = path.join(process.cwd(), "data", "contacts.json");

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const cleaned = {
      name: sanitizeInput(payload.name ?? ""),
      company: sanitizeInput(payload.company ?? ""),
      email: sanitizeInput(payload.email ?? ""),
      phone: sanitizeInput(payload.phone ?? ""),
      message: sanitizeInput(payload.message ?? "")
    };
    const result = schema.safeParse(cleaned);
    if (!result.success) {
      return NextResponse.json({ ok: false, error: "Invalid data" }, { status: 400 });
    }
    const entry = { ...result.data, timestamp: new Date().toISOString() };
    console.log("CONTACT_FORM", entry);
    let existing: unknown = [];
    try {
      const file = await fs.readFile(contactsPath, "utf-8");
      existing = JSON.parse(file);
    } catch {
      existing = [];
    }
    const list = Array.isArray(existing) ? [...existing, entry] : [entry];
    await fs.writeFile(contactsPath, JSON.stringify(list, null, 2));
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("CONTACT_API_ERROR", error);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}

