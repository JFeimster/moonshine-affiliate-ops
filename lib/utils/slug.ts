import { nanoid } from "nanoid"

export function makeSlug(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
}

export function makeShortCode() {
  return nanoid(7).toLowerCase()
}
