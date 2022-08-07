export function isCssColor(v: string): boolean {
  return /^(#|var\(--|(rgb|hsl)a?\()/.test(v);
}
