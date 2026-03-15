"use client"

import Modal from "@/components/ui/Modal"
import Button from "@/components/ui/Button"

export default function ArchiveConfirmModal({
  open,
  onClose,
  itemLabel,
}: {
  open: boolean
  onClose: () => void
  itemLabel: string
}) {
  return (
    <Modal open={open} title="Archive Item" onClose={onClose}>
      <div className="space-y-4">
        <p className="text-sm text-slate-600">
          Archive <span className="font-medium">{itemLabel}</span>? This preserves history and removes it from active management views.
        </p>
        <div className="flex justify-end gap-2">
          <Button type="button" variant="secondary" onClick={onClose}>Cancel</Button>
          <Button type="button" variant="danger" onClick={onClose}>Archive</Button>
        </div>
      </div>
    </Modal>
  )
}
