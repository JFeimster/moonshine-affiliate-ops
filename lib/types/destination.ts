export interface Destination {
  id: string
  name: string
  url: string
  status: "active" | "paused" | "archived"
  category: string
  allowCustomSlug: boolean
}
