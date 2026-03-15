import { clicks } from "@/lib/fixtures"

export function computeTopSources() {
  const counts = new Map<string, number>()
  clicks.forEach((event) => {
    counts.set(event.source, (counts.get(event.source) ?? 0) + 1)
  })

  return Array.from(counts.entries())
    .map(([label, value]) => ({ label, value }))
    .sort((a, b) => b.value - a.value)
    .slice(0, 8)
}
