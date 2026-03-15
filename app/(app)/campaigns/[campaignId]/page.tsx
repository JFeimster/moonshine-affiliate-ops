import { notFound } from "next/navigation"
import Breadcrumbs from "@/components/app/Breadcrumbs"
import PageHeader from "@/components/app/PageHeader"
import MetadataCard from "@/components/cards/MetadataCard"
import StatCard from "@/components/cards/StatCard"
import TrendCard from "@/components/cards/TrendCard"
import LinksTable from "@/components/tables/LinksTable"
import TimeSeriesLineChart from "@/components/charts/TimeSeriesLineChart"
import BarChartRankedBreakdown from "@/components/charts/BarChartRankedBreakdown"
import Button from "@/components/ui/Button"
import { getCampaignById } from "@/lib/adapters/campaignAdapter"
import { getLinks } from "@/lib/adapters/linkAdapter"
import { clicks, conversions } from "@/lib/fixtures"
import { formatCurrency } from "@/lib/utils/format"

export default function CampaignDetailPage({ params }: { params: { campaignId: string } }) {
  const campaign = getCampaignById(params.campaignId)
  if (!campaign) return notFound()

  const campaignLinks = getLinks().filter((link) => link.campaignId === campaign.id)
  const ids = new Set(campaignLinks.map((link) => link.id))
  const campaignClicks = clicks.filter((item) => ids.has(item.affiliateLinkId))
  const campaignConversions = conversions.filter((item) => ids.has(item.affiliateLinkId))
  const revenue = campaignConversions.reduce((sum, item) => sum + item.revenueAmount, 0)

  const sourceBreakdown = Array.from(
    campaignClicks.reduce((map, item) => map.set(item.source, (map.get(item.source) ?? 0) + 1), new Map<string, number>())
  ).map(([label, value]) => ({ label, value }))

  const simpleSeries = Array.from({ length: 7 }).map((_, i) => ({
    date: `D${i + 1}`,
    clicks: Math.max(0, Math.round(campaignClicks.length / 7) + (i % 2 === 0 ? 3 : 0)),
    conversions: Math.max(0, Math.round(campaignConversions.length / 7) + (i % 3 === 0 ? 1 : 0)),
    revenue: Math.round(revenue / 7),
  }))

  return (
    <div className="space-y-6">
      <Breadcrumbs items={[{ label: "Campaigns", href: "/campaigns" }, { label: campaign.code }]} />
      <PageHeader
        title="Campaign Detail"
        description="Campaign metadata, trendline, source breakdown, and attached links."
        actions={<Button>Edit Campaign</Button>}
      />

      <div className="grid gap-4 md:grid-cols-4">
        <StatCard label="Links" value={String(campaign.linkCount)} />
        <StatCard label="Clicks" value={String(campaignClicks.length)} />
        <StatCard label="Conversions" value={String(campaignConversions.length)} />
        <StatCard label="Revenue" value={formatCurrency(revenue)} />
      </div>

      <MetadataCard
        title="Campaign Metadata"
        rows={[
          { label: "Code", value: campaign.code },
          { label: "Name", value: campaign.name },
          { label: "Partner", value: campaign.partner?.name ?? "—" },
          { label: "Channel", value: campaign.channel },
          { label: "Offer", value: campaign.offer },
          { label: "Audience", value: campaign.audience },
          { label: "Status", value: campaign.status },
          { label: "Default Source", value: campaign.defaultSource },
        ]}
      />

      <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <TrendCard title="Campaign Trend">
          <TimeSeriesLineChart data={simpleSeries} valueKey="clicks" />
        </TrendCard>
        <TrendCard title="Source Breakdown">
          <BarChartRankedBreakdown data={sourceBreakdown} />
        </TrendCard>
      </div>

      <div className="space-y-3">
        <h2 className="text-lg font-semibold">Campaign Links</h2>
        <LinksTable rows={campaignLinks} />
      </div>
    </div>
  )
}
