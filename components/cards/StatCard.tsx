import Card from "@/components/ui/Card"

export default function StatCard({
  label,
  value,
  detail,
}: {
  label: string
  value: string
  detail?: string
}) {
  return (
    <Card className="space-y-2">
      <div className="text-sm text-slate-500">{label}</div>
      <div className="text-2xl font-semibold tracking-tight">{value}</div>
      {detail ? <div className="text-xs text-slate-500">{detail}</div> : null}
    </Card>
  )
}
