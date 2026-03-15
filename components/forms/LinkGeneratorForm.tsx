"use client"

import { useMemo, useState } from "react"
import Button from "@/components/ui/Button"
import Card from "@/components/ui/Card"
import Input from "@/components/ui/Input"
import Select from "@/components/ui/Select"
import OutputCard from "@/components/cards/OutputCard"
import { campaigns, destinations } from "@/lib/fixtures"
import { createPreviewLink } from "@/lib/adapters/linkAdapter"
import { CONTROLLED_SOURCES } from "@/constants/sources"
import { useDrawer } from "@/hooks/useDrawer"

export default function LinkGeneratorForm() {
  const { openDrawer } = useDrawer()

  const [destinationId, setDestinationId] = useState<string>(
    destinations[0]?.id ?? ""
  )
  const [campaignId, setCampaignId] = useState<string>(
    campaigns[0]?.id ?? ""
  )
  const [source, setSource] = useState<string>(CONTROLLED_SOURCES[0] ?? "")
  const [customSlug, setCustomSlug] = useState<string>("")
  const [utmContent, setUtmContent] = useState<string>("main")

  const preview = useMemo(() => {
    return (
      createPreviewLink({
        destinationId,
        campaignId,
        source,
        customSlug,
        utmContent,
      }) ?? null
    )
  }, [destinationId, campaignId, source, customSlug, utmContent])

  return (
    <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
      <Card className="space-y-4">
        <div>
          <h3 className="font-semibold">Create Affiliate Link</h3>
          <p className="text-sm text-slate-500">
            Controlled source values. Approved destinations only. UTM fields
            autofilled.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-1.5">
            <label className="text-sm font-medium">Destination</label>
            <Select
              value={destinationId}
              onChange={(event) => setDestinationId(event.target.value)}
            >
              {destinations
                .filter((item) => item.status === "active")
                .map((destination) => (
                  <option key={destination.id} value={destination.id}>
                    {destination.name}
                  </option>
                ))}
            </Select>
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-medium">Campaign</label>
            <div className="flex gap-2">
              <Select
                value={campaignId}
                onChange={(event) => setCampaignId(event.target.value)}
              >
                {campaigns
                  .filter((item) => item.status !== "archived")
                  .map((campaign) => (
                    <option key={campaign.id} value={campaign.id}>
                      {campaign.code}
                    </option>
                  ))}
              </Select>
              <Button
                type="button"
                variant="secondary"
                onClick={() => openDrawer("createCampaign")}
              >
                New
              </Button>
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-medium">Source</label>
            <Select
              value={source}
              onChange={(event) => setSource(event.target.value)}
            >
              {CONTROLLED_SOURCES.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </Select>
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-medium">UTM Content</label>
            <Input
              value={utmContent}
              onChange={(event) => setUtmContent(event.target.value)}
              placeholder="main"
            />
          </div>

          <div className="space-y-1.5 md:col-span-2">
            <label className="text-sm font-medium">Custom Slug</label>
            <Input
              value={customSlug}
              onChange={(event) => setCustomSlug(event.target.value)}
              placeholder="optional custom slug"
            />
          </div>
        </div>
      </Card>

      {preview ? (
        <OutputCard fullUrl={preview.fullUrl} shortUrl={preview.shortUrl} />
      ) : null}
    </div>
  )
}
