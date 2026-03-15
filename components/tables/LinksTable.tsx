"use client"

import Link from "next/link"
import Badge from "@/components/ui/Badge"
import Button from "@/components/ui/Button"
import Pagination from "@/components/ui/Pagination"
import { Table, TBody, TD, TH, THead } from "@/components/ui/Table"
import { useModal } from "@/hooks/useModal"

export default function LinksTable({
  rows,
}: {
  rows: Array<{
    id: string
    name: string
    campaign?: { code: string }
    utmSource: string
    shortUrl: string
    status: string
  }>
}) {
  const { openModal } = useModal()

  return (
    <div className="overflow-hidden rounded-2xl border bg-white shadow-soft">
      <div className="overflow-x-auto">
        <Table>
          <THead>
            <tr>
              <TH>Link</TH>
              <TH>Campaign</TH>
              <TH>Source</TH>
              <TH>Short URL</TH>
              <TH>Status</TH>
              <TH>Actions</TH>
            </tr>
          </THead>
          <TBody>
            {rows.map((row) => (
              <tr key={row.id}>
                <TD>
                  <div className="font-medium">{row.name}</div>
                </TD>
                <TD>{row.campaign?.code ?? "—"}</TD>
                <TD>{row.utmSource}</TD>
                <TD className="max-w-[180px] truncate">{row.shortUrl}</TD>
                <TD>
                  <Badge tone={row.status === "active" ? "green" : "neutral"}>{row.status}</Badge>
                </TD>
                <TD>
                  <div className="flex gap-2">
                    <Link href={`/links/${row.id}`} className="text-sm text-primary">View</Link>
                    <Button type="button" variant="ghost" onClick={() => navigator.clipboard.writeText(row.shortUrl)}>
                      Copy
                    </Button>
                    <Button type="button" variant="ghost" onClick={() => openModal("archive", { label: row.name })}>
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
