import { SelectHTMLAttributes } from "react"
import { clsx } from "clsx"

export default function Select({ className, children, ...props }: SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      className={clsx("h-10 w-full rounded-lg border bg-white px-3 text-sm outline-none", className)}
      {...props}
    >
      {children}
    </select>
  )
}
