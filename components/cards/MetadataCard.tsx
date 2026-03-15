import Card from "@/components/ui/Card"

export default function MetadataCard({
  title,
  rows,
}: {
  title: string
  rows: { label: string; value: string }[]
}) {
  return (
    <Card className="space-y-4">
      <h3 className="font-semibold">{title}</h3>
      <div className="grid gap-3 md:grid-cols-2">
        {rows.map((row) => (
          <div key={row.label}>
            <div className="text-xs uppercase tracking-wide text-slate-400">{row.label}</div>
            <div className="mt-1 text-sm text-slate-800">{row.value}</div>
          </div>
        ))}
      </div>
    </Card>
  )
}
