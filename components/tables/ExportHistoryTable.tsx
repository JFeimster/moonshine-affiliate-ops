import Badge from "@/components/ui/Badge"
import Button from "@/components/ui/Button"
import { Table, TBody, TD, TH, THead } from "@/components/ui/Table"

type ExportHistoryRow = {
  id: string
  fileName: string
  type: string
  status: string
  createdAt: string
  fileUrl: string
}

export default function ExportHistoryTable({
  rows,
}: {
  rows: ReadonlyArray<ExportHistoryRow>
}) {
  return (
    <div className="overflow-hidden rounded-2xl border bg-white shadow-soft">
      <div className="overflow-x-auto">
        <Table>
          <THead>
            <tr>
              <TH>File</TH>
              <TH>Type</TH>
              <TH>Status</TH>
              <TH>Created</TH>
              <TH>Action</TH>
            </tr>
          </THead>
          <TBody>
            {rows.map((row) => (
              <tr key={row.id}>
                <TD>{row.fileName}</TD>
                <TD>{row.type}</TD>
                <TD>
                  <Badge
                    tone={
                      row.status === "completed"
                        ? "green"
                        : row.status === "processing"
                          ? "blue"
                          : "red"
                    }
                  >
                    {row.status}
                  </Badge>
                </TD>
                <TD>{row.createdAt.slice(0, 10)}</TD>
                <TD>
                  <Button
                    type="button"
                    variant="secondary"
                    disabled={row.status !== "completed"}
                  >
                    Download
                  </Button>
                </TD>
              </tr>
            ))}
          </TBody>
        </Table>
      </div>
    </div>
  )
}
