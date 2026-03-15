import PageHeader from "@/components/app/PageHeader"
import StatCard from "@/components/cards/StatCard"
import TrendCard from "@/components/cards/TrendCard"
import StatusSummaryCard from "@/components/cards/StatusSummaryCard"
import TimeSeriesLineChart from "@/components/charts/TimeSeriesLineChart"
import TopPerformersTable from "@/components/tables/TopPerformersTable"
import Card from "@/components/ui/Card"
import { getAnalyticsData, getDashboardSummary, getTopLinks } from "@/lib/adapters/analyticsAdapter"
import { formatCurrency, formatNumber } from "@/lib/utils/format"

export default function DashboardPage() {
  const summary = getDashboardSummary()
  const analytics = getAnalyticsData()
  const topLinks = getTopLinks()

  return (
    <div className="space-y-6">
      <PageHeader
        title="Dashboard"
        description="Operational overview across links, campaigns, payouts, and recent activity."
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Total Clicks" value={formatNumber(summary.totalClicks)} detail="Last 60 days of mock event data" />
        <StatCard label="Conversions" value={formatNumber(summary.totalConversions)} detail="Lead + qualified lead + application" />
        <StatCard label="Revenue" value={formatCurrency(summary.totalRevenue)} detail="Visibility only in MVP" />
        <StatCard label="Pending Payouts" value={formatCurrency(summary.pendingPayouts)} detail="Approved + pending commissions" />
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.4fr_0.8fr]">
        <TrendCard title="Clicks Trend">
          <TimeSeriesLineChart data={analytics.timeseries} valueKey="clicks" />
        </TrendCard>

        <StatusSummaryCard
          title="Payout Snapshot"
          items={[
            { label: "Scheduled", value: String(summary.payoutsScheduled) },
            { label: "Total Links", value: String(summary.totalLinks) },
            { label: "Top Source", value: analytics.topSources[0]?.label ?? "—" },
            { label: "Top Campaign", value: analytics.campaignPerformance[0]?.label ?? "—" },
          ]}
        />
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.4fr_0.8fr]">
        <div className="space-y-3">
          <h2 className="text-lg font-semibold">Top Links</h2>
          <TopPerformersTable rows={topLinks} />
        </div>

        <Card className="space-y-4">
          <h2 className="text-lg font-semibold">Recent Activity</h2>
          <div className="space-y-3">
            {analytics.recentActivity.map((item) => (
              <div key={item.id} className="rounded-xl bg-slate-50 p-3">
                <div className="text-sm font-medium">{item.label}</div>
                <div className="text-sm text-slate-500">{item.detail}</div>
                <div className="mt-1 text-xs text-slate-400">{item.timestamp.slice(0, 16).replace("T", " ")}</div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}
