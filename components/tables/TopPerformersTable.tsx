import Link from "next/link"
import { Table, TBody, TD, TH, THead } from "@/components/ui/Table"

export default function TopPerformersTable({
  rows,
}: {
  rows: Array<{ id: string; name: string; clicks: number; conversions: number; revenue: number }>
}) {
  return (
    <div className="overflow-hidden rounded-2xl border bg-white shadow-soft">
      <div className="overflow-x-auto">
        <Table>
          <THead>
            <tr>
              <TH>Link</TH>
              <TH>Clicks</TH>
              <TH>Conversions</TH>
              <TH>Revenue</TH>
            </tr>
          </THead>
          <TBody>
            {rows.map((row) => (
              <tr key={row.id}>
                <TD><Link href={`/links/${row.id}`} className="text-primary">{row.name}</Link></TD>
                <TD>{row.clicks}</TD>
                <TD>{row.conversions}</TD>
                <TD>${row.revenue.toLocaleString()}</TD>
              </tr>
            ))}
          </TBody>
        </Table>
      </div>
    </div>
  )
}
