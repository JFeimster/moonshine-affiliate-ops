import { commissions, partners, payouts } from "@/lib/fixtures"

type PayoutStatus = "draft" | "processing" | "scheduled" | "paid"
type CommissionStatus = "pending" | "approved" | "paid" | "hold" | "rejected"

type PayoutRecord = {
  id: string
  partnerAccountId: string
  amount: number
  periodStart: string
  periodEnd: string
  status: PayoutStatus
  requestedAt: string
  paidAt: string
  referenceNumber: string
}

type CommissionRecord = {
  id: string
  conversionEventId: string
  partnerAccountId: string
  amount: number
  status: CommissionStatus
  earnedAt: string
  approvedAt: string
  payoutId: string
}

type PartnerRecord = {
  id: string
  name: string
  partnerCode: string
  status: string
  defaultPayoutMethod: string
  payoutTerms: string
  managerId: string
}

const payoutRows = payouts as ReadonlyArray<PayoutRecord>
const commissionRows = commissions as ReadonlyArray<CommissionRecord>
const partnerRows = partners as ReadonlyArray<PartnerRecord>

export function getPayoutOverview() {
  const totalPaid = payoutRows
    .filter((item) => item.status === "paid")
    .reduce((sum, item) => sum + item.amount, 0)

  const processing = payoutRows
    .filter((item) => item.status === "processing")
    .reduce((sum, item) => sum + item.amount, 0)

  const scheduled = payoutRows
    .filter((item) => item.status === "scheduled")
    .reduce((sum, item) => sum + item.amount, 0)

  const pendingCommissions = commissionRows
    .filter(
      (item) => item.status === "pending" || item.status === "approved"
    )
    .reduce((sum, item) => sum + item.amount, 0)

  return {
    totalPaid,
    processing,
    scheduled,
    pendingCommissions,
  }
}

export function getPayouts() {
  return payoutRows.map((payout) => ({
    ...payout,
    partner: partnerRows.find(
      (partner) => partner.id === payout.partnerAccountId
    ),
  }))
}

export function getCommissionRecords() {
  return commissionRows.map((commission) => ({
    ...commission,
    partner: partnerRows.find(
      (partner) => partner.id === commission.partnerAccountId
    ),
  }))
}
