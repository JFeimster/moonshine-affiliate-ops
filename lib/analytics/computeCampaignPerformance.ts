import { campaigns, conversions, links } from "@/lib/fixtures"

export function computeCampaignPerformance() {
  return campaigns.map((campaign) => {
    const campaignLinks = links.filter((link) => link.campaignId === campaign.id)
    const campaignLinkIds = new Set(campaignLinks.map((link) => link.id))
    const campaignConversions = conversions.filter((event) => campaignLinkIds.has(event.affiliateLinkId))
    const revenue = campaignConversions.reduce((sum, item) => sum + item.revenueAmount, 0)
    const commissions = campaignConversions.reduce((sum, item) => sum + item.commissionAmount, 0)

    return {
      campaignId: campaign.id,
      label: campaign.code,
      links: campaignLinks.length,
      conversions: campaignConversions.length,
      revenue,
      commissions,
    }
  }).sort((a, b) => b.revenue - a.revenue)
}
