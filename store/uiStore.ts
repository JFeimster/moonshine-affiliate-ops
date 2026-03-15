"use client"

import { create } from "zustand"

type DrawerType = "createCampaign" | "editCampaign" | "linkQR" | null
type ModalType = "archive" | null
type Payload = Record<string, string> | null

interface UIState {
  drawer: DrawerType
  drawerPayload: Payload
  modal: ModalType
  modalPayload: Payload
  openDrawer: (drawer: DrawerType, payload?: Payload) => void
  closeDrawer: () => void
  openModal: (modal: ModalType, payload?: Payload) => void
  closeModal: () => void
}

export const useUIStore = create<UIState>((set) => ({
  drawer: null,
  drawerPayload: null,
  modal: null,
  modalPayload: null,

  openDrawer: (drawer, payload = null) =>
    set({
      drawer,
      drawerPayload: payload,
    }),

  closeDrawer: () =>
    set({
      drawer: null,
      drawerPayload: null,
    }),

  openModal: (modal, payload = null) =>
    set({
      modal,
      modalPayload: payload,
    }),

  closeModal: () =>
    set({
      modal: null,
      modalPayload: null,
    }),
}))
