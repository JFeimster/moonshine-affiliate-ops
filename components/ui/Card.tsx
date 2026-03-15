import { ReactNode } from "react"
import { clsx } from "clsx"

export default function Card({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return <div className={clsx("rounded-2xl border bg-white p-5 shadow-soft", className)}>{children}</div>
}
