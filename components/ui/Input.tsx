import { InputHTMLAttributes } from "react"
import { clsx } from "clsx"

export default function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={clsx("h-10 w-full rounded-lg border bg-white px-3 text-sm outline-none ring-0 placeholder:text-slate-400", className)}
      {...props}
    />
  )
}
