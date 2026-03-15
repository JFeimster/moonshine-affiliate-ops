import { notFound } from "next/navigation"
import Breadcrumbs from "@/components/app/Breadcrumbs"
import PageHeader from "@/components/app/PageHeader"
import MetadataCard from "@/components/cards/MetadataCard"
import StatCard from "@/components/cards/StatCard"
import TrendCard from "@/components/cards/TrendCard"
import StatusSummaryCard from "@/components/cards/StatusSummaryCard"
import TimeSeriesLineChart from "@/components/charts/TimeSeriesLineChart"
import BarChartRankedBreakdown from "@/components/charts/BarChartRankedBreakdown"
import Button from "@/components/ui/Button"
import { getLinkById } from "@/lib/adapters/linkAdapter"
import { clicks, conversions } from "@/lib/fixtures"
import { formatCurrency } from "@/lib/utils/format"

export default function LinkDetailPage({ params }: { params: { linkId: string } }) {
  const link = getLinkById(params.linkId)
  if (!link) return notFound()

  const linkClicks = clicks.filter((item) => item.affiliateLinkId === link.id)
  const linkConversions = conversions.filter((item) => item.affiliateLinkId === link.id)
  const revenue = linkConversions.reduce((sum, item) => sum + item.revenueAmount, 0)
  const commissions = linkConversions.reduce((sum, item) => sum + item.commissionAmount, 0)

  const sourceBreakdown = Array.from(
    linkClicks.reduce((map, item) => map.set(item.source, (map.get(item.source) ?? 0) + 1), new Map<string, number>())
  ).map(([label, value]) => ({ label, value }))

  const simpleSeries = Array.from({ length: 7 }).map((_, i) => ({
    date: `D${i + 1}`,
    clicks: Math.max(0, Math.round(linkClicks.length / 7) + ((i % 2) * 2)),
    conversions: Math.max(0, Math.round(linkConversions.length / 7) + (i % 3 === 0 ? 1 : 0)),
    revenue: Math.round(revenue / 7),
  }))

  return (
    <div className="space-y-6">
      <Breadcrumbs items={[{ label: "Links", href: "/links" }, { label: link.name }]} />
      <PageHeader
        title="Link Detail"
        description="Metadata, performance, payout visibility, and utility actions."
        actions={<Button>Copy Short URL</Button>}
      />

      <div className="grid gap-4 md:grid-cols-3">
        <StatCard label="Clicks" value={String(linkClicks.length)} />
        <StatCard label="Conversions" value={String(linkConversions.length)} />
        <StatCard label="Revenue" value={formatCurrency(revenue)} />
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <MetadataCard
          title="Link Metadata"
          rows={[
            { label: "Name", value: link.name },
            { label: "Campaign", value: link.campaign?.code ?? "—" },
            { label: "Destination", value: link.destination?.name ?? "—" },
            { label: "Source", value: link.utmSource },
            { label: "Short URL", value: link.shortUrl },
            { label: "Status", value: link.status },
          ]}
        />

        <StatusSummaryCard
          title="Payout Summary"
          items={[
            { label: "Commissions", value: formatCurrency(commissions) },
            { label: "Approved", value: String(linkConversions.filter((item) => item.status === "approved").length) },
            { label: "Pending", value: String(linkConversions.filter((item) => item.status === "pending").length) },
            { label: "Hold", value: String(linkConversions.filter((item) => item.status === "hold").length) },
          ]}
        />
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <TrendCard title="Performance Trend">
          <TimeSeriesLineChart data={simpleSeries} valueKey="clicks" />
        </TrendCard>

        <TrendCard title="Top Sources">
          <BarChartRankedBreakdown data={sourceBreakdown} />
        </TrendCard>
      </div>
    </div>
  )
}
