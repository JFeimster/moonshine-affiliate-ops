export interface PartnerAccount {
  id: string
  name: string
  partnerCode: string
  status: "active" | "paused" | "archived"
  defaultPayoutMethod: string
  payoutTerms: string
  managerId: string
}
