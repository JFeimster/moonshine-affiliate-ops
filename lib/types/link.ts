export interface AffiliateLink {
  id: string
  name: string
  shortUrl: string
  fullUrl: string
  destinationId: string
  campaignId: string
  customSlug: string
  utmSource: string
  utmMedium: string
  utmCampaign: string
  utmContent: string
  createdAt: string
  createdBy: string
  status: "active" | "archived"
}
