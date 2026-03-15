"use client"

import { useFilters } from "@/hooks/useFilters"

export function useDateRange() {
  const { values, setFilter } = useFilters()
  return {
    start: values.start || "2025-06-01",
    end: values.end || "2025-06-30",
    setStart: (value: string) => setFilter("start", value),
    setEnd: (value: string) => setFilter("end", value),
  }
}
