export interface Payout {
  id: string
  partnerAccountId: string
  amount: number
  periodStart: string
  periodEnd: string
  status: "draft" | "processing" | "scheduled" | "paid"
  requestedAt: string
  paidAt: string
  referenceNumber: string
}
