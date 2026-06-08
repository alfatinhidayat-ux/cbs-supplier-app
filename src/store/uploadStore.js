import { create } from 'zustand'

const useUploadStore = create((set) => ({
  uploads: [],
  notifications: [],
  unreadCount: 0,
  isLoading: false,

  setUploads: (uploads) => set({ uploads }),
  setNotifications: (notifications) => {
    const unread = notifications.filter((n) => !n.isRead).length
    set({ notifications, unreadCount: unread })
  },
  setLoading: (isLoading) => set({ isLoading }),

  addUpload: (upload) =>
    set((state) => ({ uploads: [upload, ...state.uploads] })),

  updateUploadStatus: (id, status) =>
    set((state) => ({
      uploads: state.uploads.map((u) => (u.id === id ? { ...u, status } : u)),
    })),

  addNotification: (notif) =>
    set((state) => ({
      notifications: [notif, ...state.notifications],
      unreadCount: state.unreadCount + 1,
    })),

  markNotifRead: (id) =>
    set((state) => {
      const notif = state.notifications.find((n) => n.id === id)
      if (!notif || notif.isRead) return state
      return {
        notifications: state.notifications.map((n) => n.id === id ? { ...n, isRead: true } : n),
        unreadCount: Math.max(0, state.unreadCount - 1),
      }
    }),

  markAllRead: () =>
    set((state) => ({
      notifications: state.notifications.map((n) => ({ ...n, isRead: true })),
      unreadCount: 0,
    })),
}))

export default useUploadStore
