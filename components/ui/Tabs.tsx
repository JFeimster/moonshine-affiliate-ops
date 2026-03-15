"use client"

import { ReactNode, useState } from "react"
import { clsx } from "clsx"

export default function Tabs({
  items,
}: {
  items: { label: string; content: ReactNode }[]
}) {
  const [active, setActive] = useState(items[0]?.label ?? "")
  return (
    <div className="space-y-4">
      <div className="flex gap-2 border-b">
        {items.map((item) => (
          <button
            key={item.label}
            className={clsx("border-b-2 px-3 py-2 text-sm", active === item.label ? "border-primary text-primary" : "border-transparent text-slate-500")}
            onClick={() => setActive(item.label)}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div>{items.find((item) => item.label === active)?.content}</div>
    </div>
  )
}
