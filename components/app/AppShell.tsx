import { ReactNode } from "react"
import SidebarNav from "./SidebarNav"
import Topbar from "./Topbar"
import GlobalOverlays from "./GlobalOverlays"

export default function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen bg-surface">
      <SidebarNav />
      <div className="flex min-h-screen flex-1 flex-col">
        <Topbar />
        <main className="flex-1 p-4 lg:p-6">
          <div className="mx-auto max-w-7xl space-y-6">{children}</div>
        </main>
      </div>
      <GlobalOverlays />
    </div>
  )
}
