"use client"

import { RefreshCw } from "lucide-react"

export default function Topbar() {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-4 lg:px-6">
      <div>
        <div className="text-sm font-semibold">Affiliate Link Generator & Tracker</div>
        <div className="text-xs text-slate-500">Near-real-time refresh • approved destinations only</div>
      </div>

      <div className="flex items-center gap-3 text-sm text-slate-600">
        <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1">
          <RefreshCw size={14} />
          Data refreshed 2m ago
        </span>
        <span className="rounded-full bg-blue-100 px-3 py-1 text-blue-700">Manager</span>
      </div>
    </header>
  )
}
