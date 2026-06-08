import { useLocation, useNavigate } from 'react-router-dom'
import { LayoutDashboard, Upload, History, Bell } from 'lucide-react'

const navItems = [
  { path: '/', label: 'Dashboard', icon: LayoutDashboard },
  { path: '/upload', label: 'Upload', icon: Upload },
  { path: '/history', label: 'Riwayat', icon: History },
  { path: '/notifications', label: 'Notifikasi', icon: Bell },
]

export default function BottomNavigation({ unreadCount = 0 }) {
  const location = useLocation()
  const navigate = useNavigate()

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 glass border-t border-gray-100 safe-bottom">
      <div className="flex items-center">
        {navItems.map(({ path, label, icon: Icon }) => {
          const isActive = location.pathname === path
          const showBadge = path === '/notifications' && unreadCount > 0

          return (
            <button
              key={path}
              onClick={() => navigate(path)}
              className="flex-1 flex flex-col items-center gap-1 py-3 relative transition-colors active:bg-gray-50"
            >
              <div className={`relative flex items-center justify-center w-10 h-7 rounded-xl transition-all duration-200 ${isActive ? 'bg-blue-50' : ''}`}>
                <Icon
                  size={20}
                  className={`transition-colors duration-200 ${isActive ? 'text-blue-600' : 'text-gray-400'}`}
                  strokeWidth={isActive ? 2.5 : 1.8}
                />
                {showBadge && (
                  <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-red-500 rounded-full flex items-center justify-center">
                    <span className="text-[8px] font-bold text-white">
                      {unreadCount > 9 ? '9+' : unreadCount}
                    </span>
                  </span>
                )}
              </div>
              <span className={`text-[10px] font-medium transition-colors duration-200 ${isActive ? 'text-blue-600' : 'text-gray-400'}`}>
                {label}
              </span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}
