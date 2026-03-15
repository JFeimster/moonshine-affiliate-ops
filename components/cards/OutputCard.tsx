import Card from "@/components/ui/Card"
import Button from "@/components/ui/Button"

export default function OutputCard({
  fullUrl,
  shortUrl,
}: {
  fullUrl: string
  shortUrl: string
}) {
  return (
    <Card className="space-y-4">
      <div>
        <div className="text-sm font-semibold">Generated Output</div>
        <div className="text-xs text-slate-500">Preview only for MVP. Wire to an adapter later.</div>
      </div>

      <div className="space-y-3 rounded-xl bg-slate-50 p-4">
        <div>
          <div className="text-xs uppercase tracking-wide text-slate-400">Full URL</div>
          <div className="mt-1 break-all text-sm">{fullUrl}</div>
        </div>
        <div>
          <div className="text-xs uppercase tracking-wide text-slate-400">Short URL</div>
          <div className="mt-1 break-all text-sm">{shortUrl}</div>
        </div>
      </div>

      <div className="flex gap-2">
        <Button type="button">Copy Full URL</Button>
        <Button type="button" variant="secondary">Copy Short URL</Button>
      </div>
    </Card>
  )
}
