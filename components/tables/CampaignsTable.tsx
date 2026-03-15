"use client"

import Link from "next/link"
import Badge from "@/components/ui/Badge"
import Button from "@/components/ui/Button"
import Pagination from "@/components/ui/Pagination"
import { Table, TBody, TD, TH, THead } from "@/components/ui/Table"
import { useDrawer } from "@/hooks/useDrawer"
import { useModal } from "@/hooks/useModal"

export default function CampaignsTable({
  rows,
}: {
  rows: Array<{
    id: string
    code: string
    name: string
    status: string
    linkCount: number
    conversionCount: number
    revenue: number
  }>
}) {
  const { openDrawer } = useDrawer()
  const { openModal } = useModal()

  return (
    <div className="overflow-hidden rounded-2xl border bg-white shadow-soft">
      <div className="overflow-x-auto">
        <Table>
          <THead>
            <tr>
              <TH>Campaign</TH>
              <TH>Status</TH>
              <TH>Links</TH>
              <TH>Conversions</TH>
              <TH>Revenue</TH>
              <TH>Actions</TH>
            </tr>
          </THead>
          <TBody>
            {rows.map((row) => (
              <tr key={row.id}>
                <TD>
                  <div className="font-medium">{row.code}</div>
                  <div className="text-xs text-slate-500">{row.name}</div>
                </TD>
                <TD>
                  <Badge tone={row.status === "active" ? "green" : row.status === "paused" ? "amber" : "neutral"}>
                    {row.status}
                  </Badge>
                </TD>
                <TD>{row.linkCount}</TD>
                <TD>{row.conversionCount}</TD>
                <TD>${row.revenue.toLocaleString()}</TD>
                <TD>
                  <div className="flex gap-2">
                    <Link href={`/campaigns/${row.id}`} className="text-sm text-primary">View</Link>
                    <Button type="button" variant="ghost" onClick={() => openDrawer("editCampaign", { campaignId: row.id })}>
                      Edit
                    </Button>
                    <Button type="button" variant="ghost" onClick={() => openModal("archive", { label: row.code })}>
                      Archive
                    </Button>
                  </div>
                </TD>
              </tr>
            ))}
          </TBody>
        </Table>
      </div>
      <Pagination total={rows.length} />
    </div>
  )
}
