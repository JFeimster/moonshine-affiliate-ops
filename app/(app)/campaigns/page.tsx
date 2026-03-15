import { Suspense } from "react"
import PageHeader from "@/components/app/PageHeader"
import CampaignsTable from "@/components/tables/CampaignsTable"
import Button from "@/components/ui/Button"
import SearchFilter from "@/components/filters/SearchFilter"
import StatusFilter from "@/components/filters/StatusFilter"
import DateRangeFilter from "@/components/filters/DateRangeFilter"
import ClearAllFilters from "@/components/filters/ClearAllFilters"
import Card from "@/components/ui/Card"
import { getCampaigns } from "@/lib/adapters/campaignAdapter"

function CampaignFilters() {
  return (
    <Card className="grid gap-3 md:grid-cols-4">
      <SearchFilter />
      <StatusFilter />
      <DateRangeFilter />
      <div className="flex items-center justify-end">
        <ClearAllFilters />
      </div>
    </Card>
  )
}

function CampaignFiltersFallback() {
  return (
    <Card className="h-24 animate-pulse">
      <div />
    </Card>
  )
}

export default function CampaignsPage() {
  const rows = getCampaigns()

  return (
    <div className="space-y-6">
      <PageHeader
        title="Campaigns"
        description="Group link performance by campaign, manage metadata, and archive inactive efforts."
        actions={<Button type="button">Create Campaign</Button>}
      />

      <Suspense fallback={<CampaignFiltersFallback />}>
        <CampaignFilters />
      </Suspense>

      <CampaignsTable rows={rows} />
    </div>
  )
}
