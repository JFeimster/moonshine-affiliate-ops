import { ReactNode } from "react"

export function Table({ children }: { children: ReactNode }) {
  return <table className="w-full text-sm">{children}</table>
}

export function THead({ children }: { children: ReactNode }) {
  return <thead className="bg-slate-50 text-slate-600">{children}</thead>
}

export function TBody({ children }: { children: ReactNode }) {
  return <tbody>{children}</tbody>
}

export function TH({ children }: { children: ReactNode }) {
  return <th className="px-4 py-3 text-left font-medium">{children}</th>
}

export function TD({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <td className={`border-t px-4 py-3 align-top ${className}`}>{children}</td>
}
