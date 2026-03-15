import { campaigns, destinations, links } from "@/lib/fixtures"
import { buildTrackedUrl } from "@/lib/utils/utm"
import { makeShortCode } from "@/lib/utils/slug"

export function getLinks() {
  return links.map((link) => ({
    ...link,
    campaign: campaigns.find((campaign) => campaign.id === link.campaignId),
    destination: destinations.find((destination) => destination.id === link.destinationId),
  }))
}

export function getLinkById(linkId: string) {
  return getLinks().find((link) => link.id === linkId)
}

export function createPreviewLink(input: {
  destinationId: string
  campaignId: string
  source: string
  customSlug?: string
  utmContent?: string
}) {
  const destination = destinations.find((item) => item.id === input.destinationId)
  const campaign = campaigns.find((item) => item.id === input.campaignId)
  if (!destination || !campaign) return null

  const shortCode = input.customSlug || makeShortCode()
  const fullUrl = buildTrackedUrl(destination.url, {
    utm_source: input.source,
    utm_medium: "affiliate",
    utm_campaign: campaign.code,
    utm_content: input.utmContent || "main",
  })

  return {
    fullUrl,
    shortUrl: `https://mscap.link/${shortCode}`,
    shortCode,
    destination,
    campaign,
  }
}
