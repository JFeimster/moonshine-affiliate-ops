import Badge from "@/components/ui/Badge"
import { Table, TBody, TD, TH, THead } from "@/components/ui/Table"

export default function CommissionRecordsTable({
  rows,
}: {
  rows: Array<{
    id: string
    amount: number
    status: string
    partner?: { name: string }
    earnedAt: string
  }>
}) {
  return (
    <div className="overflow-hidden rounded-2xl border bg-white shadow-soft">
      <div className="overflow-x-auto">
        <Table>
          <THead>
            <tr>
              <TH>Commission</TH>
              <TH>Partner</TH>
              <TH>Status</TH>
              <TH>Earned</TH>
            </tr>
          </THead>
          <TBody>
            {rows.slice(0, 20).map((row) => (
              <tr key={row.id}>
                <TD>${row.amount.toFixed(2)}</TD>
                <TD>{row.partner?.name ?? "—"}</TD>
                <TD>
                  <Badge tone={row.status === "paid" ? "green" : row.status === "approved" ? "blue" : row.status === "pending" ? "amber" : "red"}>
                    {row.status}
                  </Badge>
                </TD>
                <TD>{row.earnedAt.slice(0, 10)}</TD>
              </tr>
            ))}
          </TBody>
        </Table>
      </div>
    </div>
  )
}
