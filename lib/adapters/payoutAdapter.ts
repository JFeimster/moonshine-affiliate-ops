import { commissions, partners, payouts } from "@/lib/fixtures"

export function getPayoutOverview() {
  const totalPaid = payouts.filter((item) => item.status === "paid").reduce((sum, item) => sum + item.amount, 0)
  const processing = payouts.filter((item) => item.status === "processing").reduce((sum, item) => sum + item.amount, 0)
  const scheduled = payouts.filter((item) => item.status === "scheduled").reduce((sum, item) => sum + item.amount, 0)
  const pendingCommissions = commissions
    .filter((item) => item.status === "pending" || item.status === "approved")
    .reduce((sum, item) => sum + item.amount, 0)

  return { totalPaid, processing, scheduled, pendingCommissions }
}

export function getPayouts() {
  return payouts.map((payout) => ({
    ...payout,
    partner: partners.find((partner) => partner.id === payout.partnerAccountId),
  }))
}

export function getCommissionRecords() {
  return commissions.map((commission) => ({
    ...commission,
    partner: partners.find((partner) => partner.id === commission.partnerAccountId),
  }))
}
