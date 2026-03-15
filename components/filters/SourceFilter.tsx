"use client"

import Select from "@/components/ui/Select"
import { CONTROLLED_SOURCES } from "@/constants/sources"
import { useFilters } from "@/hooks/useFilters"

export default function SourceFilter() {
  const { values, setFilter } = useFilters()
  return (
    <Select value={values.source ?? ""} onChange={(event) => setFilter("source", event.target.value)}>
      <option value="">All sources</option>
      {CONTROLLED_SOURCES.map((source) => (
        <option key={source} value={source}>
          {source}
        </option>
      ))}
    </Select>
  )
}
