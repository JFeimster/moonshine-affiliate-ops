import { eachDayOfInterval, format, subDays } from "date-fns"

export function defaultDateRange() {
  const end = new Date("2025-06-30T00:00:00Z")
  const start = subDays(end, 29)
  return { start, end }
}

export function dateRangeDays(start: Date, end: Date) {
  return eachDayOfInterval({ start, end }).map((d) => format(d, "yyyy-MM-dd"))
}
