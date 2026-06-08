import StatusBadge from './StatusBadge'
import { FileText, Calendar, Package } from 'lucide-react'

function formatDate(dateStr) {
  const date = new Date(dateStr)
  return date.toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' })
}

function docCount(upload) {
  let count = 0
  if (upload.nota) count++
  if (upload.suratJalan) count++
  if (upload.fakturPajak) count++
  if (upload.gambarProduk?.length) count += upload.gambarProduk.length
  return count
}

export default function UploadCard({ upload, onClick }) {
  const docs = docCount(upload)

  return (
    <div
      onClick={onClick}
      className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 card-hover active:scale-[0.98] transition-all cursor-pointer animate-fadeIn"
    >
      {/* Top Row */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
            <Package size={18} className="text-blue-600" />
          </div>
          <div>
            <p className="font-bold text-gray-900 text-sm leading-tight">{upload.sku}</p>
            <p className="text-xs text-gray-400 mt-0.5">Barcode SKU</p>
          </div>
        </div>
        <StatusBadge status={upload.status} />
      </div>

      {/* Divider */}
      <div className="h-px bg-gray-50 mb-3" />

      {/* Bottom Row */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5 text-gray-400">
          <Calendar size={12} />
          <span className="text-xs">{formatDate(upload.createdAt)}</span>
        </div>
        <div className="flex items-center gap-1.5 text-gray-400">
          <FileText size={12} />
          <span className="text-xs">{docs} dokumen</span>
        </div>
      </div>
    </div>
  )
}
