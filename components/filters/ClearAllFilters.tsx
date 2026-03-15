"use client"

import Button from "@/components/ui/Button"
import { useFilters } from "@/hooks/useFilters"

export default function ClearAllFilters() {
  const { clearAll } = useFilters()
  return (
    <Button type="button" variant="ghost" onClick={clearAll}>
      Clear
    </Button>
  )
}
