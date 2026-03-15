"use client"

import Drawer from "@/components/ui/Drawer"
import CampaignForm from "@/components/forms/CampaignForm"

export default function CreateCampaignDrawer({
  open,
  onClose,
}: {
  open: boolean
  onClose: () => void
}) {
  return (
    <Drawer open={open} title="Create Campaign" onClose={onClose}>
      <CampaignForm submitLabel="Create Campaign" />
    </Drawer>
  )
}
