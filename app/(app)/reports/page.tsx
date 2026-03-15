import PageHeader from "@/components/app/PageHeader"
import Card from "@/components/ui/Card"
import Button from "@/components/ui/Button"
import Select from "@/components/ui/Select"
import ExportHistoryTable from "@/components/tables/ExportHistoryTable"
import { getExportJobs } from "@/lib/adapters/reportAdapter"

export default function ReportsPage() {
  const rows = getExportJobs()

  return (
    <div className="space-y-6">
      <PageHeader
        title="Reports / Exports"
        description="Build CSV exports for link, campaign, payout, and commission views."
      />

      <Card className="space-y-4">
        <h3 className="font-semibold">Export Builder</h3>
        <div className="grid gap-4 md:grid-cols-4">
          <Select defaultValue="links">
            <option value="links">Links</option>
            <option value="campaigns">Campaigns</option>
            <option value="commissions">Commissions</option>
            <option value="payouts">Payouts</option>
          </Select>
          <Select defaultValue="30d">
            <option value="7d">Last 7 days</option>
            <option value="30d">Last 30 days</option>
            <option value="90d">Last 90 days</option>
          </Select>
          <Select defaultValue="all">
            <option value="all">All statuses</option>
            <option value="active">Active only</option>
            <option value="paid">Paid only</option>
          </Select>
          <Button>Queue Export</Button>
        </div>
      </Card>

      <div className="space-y-3">
        <h2 className="text-lg font-semibold">Export History</h2>
        <ExportHistoryTable rows={rows} />
      </div>
    </div>
  )
}
