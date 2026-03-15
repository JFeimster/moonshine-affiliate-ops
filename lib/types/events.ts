export interface ClickEvent {
  id: string
  affiliateLinkId: string
  timestamp: string
  source: string
  deviceType: string
  geoCountry: string
  referrerDomain: string
}

export interface ConversionEvent {
  id: string
  affiliateLinkId: string
  campaignId: string
  timestamp: string
  conversionType: string
  revenueAmount: number
  commissionAmount: number
  status: "pending" | "approved" | "hold" | "rejected"
}

export interface CommissionRecord {
  id: string
  conversionEventId: string
  partnerAccountId: string
  amount: number
  status: "pending" | "approved" | "paid" | "hold" | "rejected"
  earnedAt: string
  approvedAt: string
  payoutId: string
}
