export function buildTrackedUrl(baseUrl: string, params: Record<string, string>) {
  const url = new URL(baseUrl)

  Object.entries(params).forEach(([key, value]) => {
    if (value) {
      url.searchParams.set(key, value)
    }
  })

  return url.toString()
}
