import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: (string | undefined | boolean)[]): string {
  return twMerge(clsx(inputs));
}