import { clicks, commissions, conversions, links, payouts, recentActivity } from "@/lib/fixtures"
import { computeCampaignPerformance } from "@/lib/analytics/computeCampaignPerformance"
import { computeTimeseries } from "@/lib/analytics/computeTimeseries"
import { computeTopSources } from "@/lib/analytics/computeTopSources"

export function getDashboardSummary() {
  const totalRevenue = conversions.reduce((sum, item) => sum + item.revenueAmount, 0)
  const pendingPayouts = commissions
    .filter((item) => item.status === "approved" || item.status === "pending")
    .reduce((sum, item) => sum + item.amount, 0)

  return {
    totalClicks: clicks.length,
    totalConversions: conversions.length,
    totalRevenue,
    pendingPayouts,
    totalLinks: links.length,
    payoutsScheduled: payouts.filter((item) => item.status === "scheduled").length,
  }
}

export function getTopLinks(limit = 8) {
  return links
    .map((link) => {
      const linkClicks = clicks.filter((item) => item.affiliateLinkId === link.id).length
      const linkConversions = conversions.filter((item) => item.affiliateLinkId === link.id).length
      const revenue = conversions
        .filter((item) => item.affiliateLinkId === link.id)
        .reduce((sum, item) => sum + item.revenueAmount, 0)

      return { ...link, clicks: linkClicks, conversions: linkConversions, revenue }
    })
    .sort((a, b) => b.revenue - a.revenue)
    .slice(0, limit)
}

export function getAnalyticsData() {
  return {
    timeseries: computeTimeseries(30),
    topSources: computeTopSources(),
    campaignPerformance: computeCampaignPerformance().slice(0, 8),
    recentActivity,
  }
}
