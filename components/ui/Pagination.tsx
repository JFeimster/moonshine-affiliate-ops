export default function Pagination({ total, page = 1 }: { total: number; page?: number }) {
  return (
    <div className="flex items-center justify-between border-t px-4 py-3 text-sm text-slate-500">
      <span>Page {page}</span>
      <span>{total} records</span>
    </div>
  )
}
