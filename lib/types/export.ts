export interface ExportJob {
  id: string
  type: string
  status: "completed" | "processing" | "failed"
  requestedBy: string
  createdAt: string
  filtersApplied: Record<string, unknown>
  fileName: string
  fileUrl: string
}
