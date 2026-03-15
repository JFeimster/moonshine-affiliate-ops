import PageHeader from "@/components/app/PageHeader"
import StatusSummaryCard from "@/components/cards/StatusSummaryCard"
import CommissionRecordsTable from "@/components/tables/CommissionRecordsTable"
import PaymentHistoryTable from "@/components/tables/PaymentHistoryTable"
import { getCommissionRecords, getPayoutOverview, getPayouts } from "@/lib/adapters/payoutAdapter"
import { formatCurrency } from "@/lib/utils/format"

export default function PayoutsPage() {
  const overview = getPayoutOverview()
  const payouts = getPayouts()
  const commissions = getCommissionRecords()

  return (
    <div className="space-y-6">
      <PageHeader
        title="Payouts"
        description="Visibility-first payout operations with commission status, payment history, and export readiness."
      />

      <StatusSummaryCard
        title="Summary Totals"
        items={[
          { label: "Total Paid", value: formatCurrency(overview.totalPaid) },
          { label: "Processing", value: formatCurrency(overview.processing) },
          { label: "Scheduled", value: formatCurrency(overview.scheduled) },
          { label: "Pending Commissions", value: formatCurrency(overview.pendingCommissions) },
        ]}
      />

      <div className="space-y-3">
        <h2 className="text-lg font-semibold">Commission Records</h2>
        <CommissionRecordsTable rows={commissions} />
      </div>

      <div className="space-y-3">
        <h2 className="text-lg font-semibold">Payment History</h2>
        <PaymentHistoryTable rows={payouts} />
      </div>
    </div>
  )
}
