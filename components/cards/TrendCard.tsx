import Card from "@/components/ui/Card"
import { ReactNode } from "react"

export default function TrendCard({
  title,
  actions,
  children,
}: {
  title: string
  actions?: ReactNode
  children: ReactNode
}) {
  return (
    <Card className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold">{title}</h3>
        {actions}
      </div>
      {children}
    </Card>
  )
}
