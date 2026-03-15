import { Suspense } from "react"
import PageHeader from "@/components/app/PageHeader"
import LinksTable from "@/components/tables/LinksTable"
import SearchFilter from "@/components/filters/SearchFilter"
import CampaignFilter from "@/components/filters/CampaignFilter"
import SourceFilter from "@/components/filters/SourceFilter"
import StatusFilter from "@/components/filters/StatusFilter"
import DateRangeFilter from "@/components/filters/DateRangeFilter"
import ClearAllFilters from "@/components/filters/ClearAllFilters"
import Card from "@/components/ui/Card"
import Button from "@/components/ui/Button"
import Link from "next/link"
import { getLinks } from "@/lib/adapters/linkAdapter"

function LinksFilters() {
  return (
    <Card className="grid gap-3 md:grid-cols-2 xl:grid-cols-6">
      <SearchFilter />
      <CampaignFilter />
      <SourceFilter />
      <StatusFilter />
      <DateRangeFilter />
      <div className="flex items-center justify-end">
        <ClearAllFilters />
      </div>
    </Card>
  )
}

function LinksFiltersFallback() {
  return (
    <Card className="h-24 animate-pulse">
      <div />
    </Card>
  )
}

export default function LinksPage() {
  const rows = getLinks()

  return (
    <div className="space-y-6">
      <PageHeader
        title="Link Library"
        description="Search, filter, inspect, archive, and export affiliate links."
        actions={
          <>
            <Button type="button" variant="secondary">
              Export Current View
            </Button>
            <Link href="/links/new">
              <Button type="button">Create Link</Button>
            </Link>
          </>
        }
      />

      <Suspense fallback={<LinksFiltersFallback />}>
        <LinksFilters />
      </Suspense>

      <LinksTable rows={rows} />
    </div>
  )
}
