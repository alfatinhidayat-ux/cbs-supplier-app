import { Bell } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function AppHeader({ title = 'Supplier ERP', user, unreadCount = 0 }) {
  const navigate = useNavigate()

  return (
    <header className="glass sticky top-0 z-40 border-b border-gray-100 shadow-sm safe-top">
      <div className="flex items-center justify-between px-4 py-3">
        {/* Logo & Title */}
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-blue-600 flex items-center justify-center shadow-sm">
            <span className="text-white text-xs font-bold">S</span>
          </div>
          <div>
            <h1 className="text-sm font-bold text-gray-900 leading-tight">{title}</h1>
            <p className="text-[10px] text-gray-400 leading-tight">Enterprise Portal</p>
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          {/* Notification Bell */}
          <button
            onClick={() => navigate('/notifications')}
            className="relative w-9 h-9 rounded-xl bg-gray-50 flex items-center justify-center active:bg-gray-100 transition-colors"
          >
            <Bell size={18} className="text-gray-600" />
            {unreadCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-[9px] font-bold text-white">
                  {unreadCount > 9 ? '9+' : unreadCount}
                </span>
              </span>
            )}
          </button>

          {/* Avatar */}
          {user && (
            <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center shadow-sm">
              <span className="text-white text-xs font-bold">{user.avatar}</span>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
