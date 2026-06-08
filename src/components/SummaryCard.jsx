export default function SummaryCard({ label, value, icon: Icon, color, bgColor, isLoading }) {
  if (isLoading) {
    return (
      <div className="min-w-[130px] bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex-shrink-0">
        <div className="skeleton h-9 w-9 rounded-xl mb-3" />
        <div className="skeleton h-7 w-12 rounded-lg mb-1.5" />
        <div className="skeleton h-3.5 w-20 rounded" />
      </div>
    )
  }

  return (
    <div className="min-w-[130px] bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex-shrink-0 card-hover active:scale-95 transition-transform">
      <div className={`w-9 h-9 ${bgColor} rounded-xl flex items-center justify-center mb-3`}>
        <Icon size={18} className={color} />
      </div>
      <p className="text-2xl font-bold text-gray-900">{value}</p>
      <p className="text-xs text-gray-500 mt-0.5 font-medium">{label}</p>
    </div>
  )
}
