"use client"

import Select from "@/components/ui/Select"
import { campaigns } from "@/lib/fixtures"
import { useFilters } from "@/hooks/useFilters"

export default function CampaignFilter() {
  const { values, setFilter } = useFilters()
  return (
    <Select value={values.campaign ?? ""} onChange={(event) => setFilter("campaign", event.target.value)}>
      <option value="">All campaigns</option>
      {campaigns.map((campaign) => (
        <option key={campaign.id} value={campaign.id}>
          {campaign.code}
        </option>
      ))}
    </Select>
  )
}
