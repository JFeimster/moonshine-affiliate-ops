"use client"

import Drawer from "@/components/ui/Drawer"
import CampaignForm from "@/components/forms/CampaignForm"

export default function EditCampaignDrawer({
  open,
  onClose,
  campaign,
}: {
  open: boolean
  onClose: () => void
  campaign?: { code?: string }
}) {
  return (
    <Drawer open={open} title={`Edit Campaign${campaign?.code ? ` · ${campaign.code}` : ""}`} onClose={onClose}>
      <CampaignForm submitLabel="Save Changes" />
    </Drawer>
  )
}
