"use client"

import Input from "@/components/ui/Input"
import { useDateRange } from "@/hooks/useDateRange"

export default function DateRangeFilter() {
  const { start, end, setStart, setEnd } = useDateRange()
  return (
    <div className="grid grid-cols-2 gap-2">
      <Input type="date" value={start} onChange={(event) => setStart(event.target.value)} />
      <Input type="date" value={end} onChange={(event) => setEnd(event.target.value)} />
    </div>
  )
}
