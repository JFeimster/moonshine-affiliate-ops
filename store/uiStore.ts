"use client"

import { create } from "zustand"

type DrawerType = "createCampaign" | "editCampaign" | "linkQR" | null
type ModalType = "archive" | null

interface UIState {
  drawer: DrawerType
  drawerPayload: Record<string, string> | null
  modal: ModalType
  modalPayload: Record<string, string> | null
  openDrawer: (drawer: DrawerType, payload?: Record<string, string>) => void
  closeDrawer: () => void
  openModal: (modal: ModalType, payload?: Record<string, string>) => void
  closeModal: () => void
}

export const useUIStore = create<UIState>((set) => ({
  drawer: null,
  drawerPayload: null,
  modal: null,
  modalPayload: null,
  openDrawer: (drawer, payload = null) => set({ drawer, drawerPayload: payload }),
  closeDrawer: () => set({ drawer: null, drawerPayload: null }),
  openModal: (modal, payload = null) => set({ modal, modalPayload: payload }),
  closeModal: () => set({ modal: null, modalPayload: null }),
}))
