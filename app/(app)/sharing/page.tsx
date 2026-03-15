import PageHeader from "@/components/app/PageHeader"
import Card from "@/components/ui/Card"
import Button from "@/components/ui/Button"
import Select from "@/components/ui/Select"
import { links } from "@/lib/fixtures"

export default function SharingPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Sharing Tools"
        description="Launch utility page for link picking, share copy presets, and QR access."
      />

      <div className="grid gap-6 xl:grid-cols-3">
        <Card className="space-y-4">
          <h3 className="font-semibold">Link Picker</h3>
          <Select defaultValue={links[0]?.id}>
            {links.slice(0, 12).map((link) => (
              <option key={link.id} value={link.id}>{link.name}</option>
            ))}
          </Select>
          <Button>Open QR</Button>
        </Card>

        <Card className="space-y-4">
          <h3 className="font-semibold">Share Copy Presets</h3>
          <div className="rounded-xl bg-slate-50 p-4 text-sm text-slate-600">
            Check your rate options in under 2 minutes. No impact to your credit score.
          </div>
          <Button variant="secondary">Copy Preset</Button>
        </Card>

        <Card className="space-y-4">
          <h3 className="font-semibold">QR Utility</h3>
          <div className="flex aspect-square items-center justify-center rounded-2xl border bg-slate-50 text-sm text-slate-400">
            QR Preview
          </div>
        </Card>
      </div>
    </div>
  )
}
