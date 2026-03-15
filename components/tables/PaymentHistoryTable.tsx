import Badge from "@/components/ui/Badge"
import { Table, TBody, TD, TH, THead } from "@/components/ui/Table"

export default function PaymentHistoryTable({
  rows,
}: {
  rows: Array<{
    id: string
    referenceNumber: string
    amount: number
    status: string
    partner?: { name: string }
    paidAt: string
  }>
}) {
  return (
    <div className="overflow-hidden rounded-2xl border bg-white shadow-soft">
      <div className="overflow-x-auto">
        <Table>
          <THead>
            <tr>
              <TH>Reference</TH>
              <TH>Partner</TH>
              <TH>Amount</TH>
              <TH>Status</TH>
              <TH>Paid At</TH>
            </tr>
          </THead>
          <TBody>
            {rows.map((row) => (
              <tr key={row.id}>
                <TD>{row.referenceNumber}</TD>
                <TD>{row.partner?.name ?? "—"}</TD>
                <TD>${row.amount.toLocaleString()}</TD>
                <TD>
                  <Badge tone={row.status === "paid" ? "green" : row.status === "scheduled" ? "blue" : "amber"}>
                    {row.status}
                  </Badge>
                </TD>
                <TD>{row.paidAt ? row.paidAt.slice(0, 10) : "—"}</TD>
              </tr>
            ))}
          </TBody>
        </Table>
      </div>
    </div>
  )
}
