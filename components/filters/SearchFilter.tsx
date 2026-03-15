"use client"

import Input from "@/components/ui/Input"
import { useFilters } from "@/hooks/useFilters"

export default function SearchFilter() {
  const { values, setFilter } = useFilters()
  return (
    <Input
      placeholder="Search"
      value={values.q ?? ""}
      onChange={(event) => setFilter("q", event.target.value)}
    />
  )
}
