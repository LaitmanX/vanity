import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function computeDifficulty(
  prefix: string,
  suffix: string,
  isChecksum: boolean
): number {
  const pattern = prefix + suffix;
  const ret = Math.pow(16, pattern.length);
  return isChecksum
    ? ret * Math.pow(2, pattern.replace(/[^a-f]/gi, "").length)
    : ret;
}

export function computeProbability(
  difficulty: number,
  attempts: number
): number {
  return 1 - Math.pow(1 - 1 / difficulty, attempts);
}
