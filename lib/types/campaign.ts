export interface Campaign {
  id: string
  code: string
  name: string
  partnerAccountId: string
  channel: string
  offer: string
  audience: string
  startDate: string
  endDate: string
  status: "active" | "paused" | "archived"
  defaultSource: string
  notes: string
}
