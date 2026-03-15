import { format, subDays } from "date-fns"
import { clicks, conversions } from "@/lib/fixtures"

export function computeTimeseries(days = 30) {
  const end = new Date("2025-06-30T00:00:00Z")
  const rows = Array.from({ length: days }).map((_, i) => {
    const key = format(subDays(end, days - 1 - i), "yyyy-MM-dd")
    return { date: format(subDays(end, days - 1 - i), "MMM d"), clicks: 0, conversions: 0, revenue: 0 }
  })

  const rowMap = new Map(rows.map((row) => [row.date, row]))

  clicks.forEach((event) => {
    const key = format(new Date(event.timestamp), "MMM d")
    const row = rowMap.get(key)
    if (row) row.clicks += 1
  })

  conversions.forEach((event) => {
    const key = format(new Date(event.timestamp), "MMM d")
    const row = rowMap.get(key)
    if (row) {
      row.conversions += 1
      row.revenue += event.revenueAmount
    }
  })

  return rows
}
