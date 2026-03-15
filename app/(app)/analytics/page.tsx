import PageHeader from "@/components/app/PageHeader"
import DateRangeFilter from "@/components/filters/DateRangeFilter"
import Card from "@/components/ui/Card"
import TrendCard from "@/components/cards/TrendCard"
import TimeSeriesLineChart from "@/components/charts/TimeSeriesLineChart"
import BarChartRankedBreakdown from "@/components/charts/BarChartRankedBreakdown"
import { getAnalyticsData } from "@/lib/adapters/analyticsAdapter"

export default function AnalyticsPage() {
  const data = getAnalyticsData()

  return (
    <div className="space-y-6">
      <PageHeader
        title="Analytics"
        description="Decision-first reporting across clicks, conversions, sources, and campaign output."
        actions={<DateRangeFilter />}
      />

      <div className="grid gap-6 xl:grid-cols-2">
        <TrendCard title="Clicks Over Time">
          <TimeSeriesLineChart data={data.timeseries} valueKey="clicks" />
        </TrendCard>

        <TrendCard title="Conversions Over Time">
          <TimeSeriesLineChart data={data.timeseries} valueKey="conversions" />
        </TrendCard>

        <TrendCard title="Top Sources">
          <BarChartRankedBreakdown data={data.topSources} />
        </TrendCard>

        <Card className="space-y-4">
          <h3 className="font-semibold">Top Campaigns</h3>
          <div className="space-y-3">
            {data.campaignPerformance.slice(0, 8).map((item) => (
              <div key={item.campaignId} className="flex items-center justify-between rounded-xl bg-slate-50 p-4">
                <div>
                  <div className="text-sm font-medium">{item.label}</div>
                  <div className="text-xs text-slate-500">{item.links} links • {item.conversions} conversions</div>
                </div>
                <div className="text-sm font-semibold">${item.revenue.toLocaleString()}</div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}
