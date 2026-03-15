export interface User {
  id: string
  name: string
  email: string
  role: "manager" | "partner" | "admin"
  partnerAccountId: string
  permissions: string[]
}
