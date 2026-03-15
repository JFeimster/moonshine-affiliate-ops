import { campaigns, links, partners } from "@/lib/fixtures"
import { conversions } from "@/lib/fixtures"

export function getCampaigns() {
  return campaigns.map((campaign) => {
    const partner = partners.find((partner) => partner.id === campaign.partnerAccountId)
    const campaignLinks = links.filter((link) => link.campaignId === campaign.id)
    const linkIds = new Set(campaignLinks.map((link) => link.id))
    const campaignConversions = conversions.filter((event) => linkIds.has(event.affiliateLinkId))
    const revenue = campaignConversions.reduce((sum, item) => sum + item.revenueAmount, 0)
    return {
      ...campaign,
      partner,
      linkCount: campaignLinks.length,
      conversionCount: campaignConversions.length,
      revenue,
    }
  })
}

export function getCampaignById(campaignId: string) {
  return getCampaigns().find((campaign) => campaign.id === campaignId)
}
