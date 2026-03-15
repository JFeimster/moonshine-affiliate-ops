import Card from "@/components/ui/Card"

export default function StatusSummaryCard({
  title,
  items,
}: {
  title: string
  items: { label: string; value: string }[]
}) {
  return (
    <Card className="space-y-4">
      <h3 className="font-semibold">{title}</h3>
      <div className="grid gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <div key={item.label} className="rounded-xl bg-slate-50 p-4">
            <div className="text-xs uppercase tracking-wide text-slate-400">{item.label}</div>
            <div className="mt-2 text-xl font-semibold">{item.value}</div>
          </div>
        ))}
      </div>
    </Card>
  )
}
