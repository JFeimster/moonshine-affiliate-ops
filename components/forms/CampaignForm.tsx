"use client"

import Button from "@/components/ui/Button"
import Input from "@/components/ui/Input"
import Select from "@/components/ui/Select"
import { partners } from "@/lib/fixtures"

export default function CampaignForm({ submitLabel = "Save" }: { submitLabel?: string }) {
  return (
    <form className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-1.5">
          <label className="text-sm font-medium">Name</label>
          <Input placeholder="Campaign name" />
        </div>
        <div className="space-y-1.5">
          <label className="text-sm font-medium">Partner</label>
          <Select defaultValue={partners[0]?.id}>
            {partners.map((partner) => (
              <option key={partner.id} value={partner.id}>{partner.name}</option>
            ))}
          </Select>
        </div>
        <div className="space-y-1.5">
          <label className="text-sm font-medium">Channel</label>
          <Input placeholder="email / paid_social / search" />
        </div>
        <div className="space-y-1.5">
          <label className="text-sm font-medium">Offer</label>
          <Input placeholder="Offer" />
        </div>
        <div className="space-y-1.5">
          <label className="text-sm font-medium">Audience</label>
          <Input placeholder="Audience" />
        </div>
        <div className="space-y-1.5">
          <label className="text-sm font-medium">Default Source</label>
          <Input placeholder="partner_site" />
        </div>
      </div>

      <div className="flex justify-end gap-2">
        <Button type="button" variant="secondary">Cancel</Button>
        <Button type="submit">{submitLabel}</Button>
      </div>
    </form>
  )
}
