"use client"

import Drawer from "@/components/ui/Drawer"
import Card from "@/components/ui/Card"

export default function LinkQRDrawer({
  open,
  onClose,
  link,
}: {
  open: boolean
  onClose: () => void
  link?: { shortUrl?: string; name?: string }
}) {
  return (
    <Drawer open={open} title="Link QR" onClose={onClose}>
      <div className="space-y-4">
        <Card className="space-y-2">
          <div className="text-sm font-medium">{link?.name ?? "Selected link"}</div>
          <div className="text-sm text-slate-500">{link?.shortUrl ?? "No URL selected"}</div>
        </Card>
        <div className="flex aspect-square items-center justify-center rounded-2xl border bg-slate-50 text-sm text-slate-400">
          QR Placeholder
        </div>
      </div>
    </Drawer>
  )
}
