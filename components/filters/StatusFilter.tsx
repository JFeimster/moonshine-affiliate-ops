"use client"

import Select from "@/components/ui/Select"
import { useFilters } from "@/hooks/useFilters"

export default function StatusFilter() {
  const { values, setFilter } = useFilters()
  return (
    <Select value={values.status ?? ""} onChange={(event) => setFilter("status", event.target.value)}>
      <option value="">All statuses</option>
      <option value="active">Active</option>
      <option value="archived">Archived</option>
      <option value="paused">Paused</option>
      <option value="paid">Paid</option>
      <option value="approved">Approved</option>
      <option value="pending">Pending</option>
    </Select>
  )
}
