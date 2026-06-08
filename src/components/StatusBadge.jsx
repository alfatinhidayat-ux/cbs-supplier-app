export default function StatusBadge({ status }) {
  const config = {
    pending: {
      label: 'Pending',
      className: 'bg-amber-50 text-amber-700 border border-amber-200',
      dot: 'bg-amber-400',
    },
    approved: {
      label: 'Disetujui',
      className: 'bg-green-50 text-green-700 border border-green-200',
      dot: 'bg-green-500',
    },
    rejected: {
      label: 'Ditolak',
      className: 'bg-red-50 text-red-700 border border-red-200',
      dot: 'bg-red-500',
    },
  }

  const { label, className, dot } = config[status] || config.pending

  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${className}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${dot}`} />
      {label}
    </span>
  )
}
