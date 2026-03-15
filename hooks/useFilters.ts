"use client"

import { useMemo } from "react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

export function useFilters() {
  const params = useSearchParams()
  const pathname = usePathname()
  const router = useRouter()

  const values = useMemo(() => Object.fromEntries(params.entries()), [params])

  function setFilter(key: string, value: string) {
    const next = new URLSearchParams(params.toString())
    if (!value) next.delete(key)
    else next.set(key, value)
    router.push(`${pathname}?${next.toString()}`)
  }

  function clearAll() {
    router.push(pathname)
  }

  return { values, setFilter, clearAll }
}
