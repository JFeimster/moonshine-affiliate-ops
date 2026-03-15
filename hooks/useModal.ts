"use client"

import { useUIStore } from "@/store/uiStore"

export function useModal() {
  const modal = useUIStore((state) => state.modal)
  const modalPayload = useUIStore((state) => state.modalPayload)
  const openModal = useUIStore((state) => state.openModal)
  const closeModal = useUIStore((state) => state.closeModal)

  return { modal, modalPayload, openModal, closeModal }
}
