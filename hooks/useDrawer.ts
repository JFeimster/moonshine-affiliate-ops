"use client"

import { useUIStore } from "@/store/uiStore"

export function useDrawer() {
  const drawer = useUIStore((state) => state.drawer)
  const drawerPayload = useUIStore((state) => state.drawerPayload)
  const openDrawer = useUIStore((state) => state.openDrawer)
  const closeDrawer = useUIStore((state) => state.closeDrawer)

  return { drawer, drawerPayload, openDrawer, closeDrawer }
}
