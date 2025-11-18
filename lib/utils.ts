import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const sanitizePattern = /[^\\w\\u4e00-\\u9fa5@.\\-\\s,!?]/g;

export function sanitizeInput(value: string) {
  return value.replace(sanitizePattern, "").trim();
}

