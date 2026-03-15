"use client"

import { campaigns, links } from "@/lib/fixtures"
import { useDrawer } from "@/hooks/useDrawer"
import { useModal } from "@/hooks/useModal"
import CreateCampaignDrawer from "@/components/drawers/CreateCampaignDrawer"
import EditCampaignDrawer from "@/components/drawers/EditCampaignDrawer"
import LinkQRDrawer from "@/components/drawers/LinkQRDrawer"
import ArchiveConfirmModal from "@/components/modals/ArchiveConfirmModal"

export default function GlobalOverlays() {
  const { drawer, drawerPayload, closeDrawer } = useDrawer()
  const { modal, modalPayload, closeModal } = useModal()

  const campaign = campaigns.find((item) => item.id === drawerPayload?.campaignId)
  const link = links.find((item) => item.id === drawerPayload?.linkId)

  return (
    <>
      <CreateCampaignDrawer open={drawer === "createCampaign"} onClose={closeDrawer} />
      <EditCampaignDrawer open={drawer === "editCampaign"} campaign={campaign} onClose={closeDrawer} />
      <LinkQRDrawer open={drawer === "linkQR"} link={link} onClose={closeDrawer} />
      <ArchiveConfirmModal open={modal === "archive"} itemLabel={modalPayload?.label ?? "this item"} onClose={closeModal} />
    </>
  )
}
