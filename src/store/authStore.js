import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const DUMMY_USER = { username: 'supplier', password: 'supplier123', name: 'PT. Maju Bersama', avatar: 'MB' }

const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,

      login: (username, password) => {
        if (username === DUMMY_USER.username && password === DUMMY_USER.password) {
          set({ user: { username: DUMMY_USER.username, name: DUMMY_USER.name, avatar: DUMMY_USER.avatar }, isAuthenticated: true })
          return { success: true }
        }
        return { success: false, message: 'Username atau password salah' }
      },

      logout: () => {
        set({ user: null, isAuthenticated: false })
      },
    }),
    { name: 'supplier-erp-auth' }
  )
)

export default useAuthStore
