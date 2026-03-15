"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { clsx } from "clsx"
import { BarChart3, CircleDollarSign, Link2, Megaphone, QrCode, FileSpreadsheet, LayoutDashboard } from "lucide-react"

const items = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/links", label: "Link Library", icon: Link2 },
  { href: "/links/new", label: "Link Generator", icon: Link2 },
  { href: "/campaigns", label: "Campaigns", icon: Megaphone },
  { href: "/analytics", label: "Analytics", icon: BarChart3 },
  { href: "/payouts", label: "Payouts", icon: CircleDollarSign },
  { href: "/reports", label: "Reports", icon: FileSpreadsheet },
  { href: "/sharing", label: "Sharing Tools", icon: QrCode },
]

export default function SidebarNav() {
  const pathname = usePathname()

  return (
    <aside className="hidden w-72 shrink-0 border-r bg-white p-5 lg:block">
      <div className="mb-8">
        <div className="text-lg font-semibold">Moonshine Capital</div>
        <div className="text-sm text-slate-500">Internal partner operations</div>
      </div>

      <nav className="space-y-1">
        {items.map((item) => {
          const Icon = item.icon
          const active = pathname === item.href || (item.href !== "/dashboard" && pathname.startsWith(item.href))
          return (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm",
                active ? "bg-slate-100 text-slate-900" : "text-slate-600 hover:bg-slate-50"
              )}
            >
              <Icon size={16} />
              {item.label}
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}
