import { useEffect, useCallback } from 'react'
import { db } from '../database/db'
import useUploadStore from '../store/uploadStore'

export function useUploads() {
  const { uploads, notifications, unreadCount, isLoading, setUploads, setNotifications, setLoading, addUpload, updateUploadStatus, addNotification, markNotifRead, markAllRead } = useUploadStore()

  const fetchUploads = useCallback(async () => {
    setLoading(true)
    try {
      const data = await db.uploads.orderBy('createdAt').reverse().toArray()
      setUploads(data)
    } catch (err) {
      console.error('Error fetching uploads:', err)
    } finally {
      setLoading(false)
    }
  }, [setLoading, setUploads])

  const fetchNotifications = useCallback(async () => {
    try {
      const data = await db.notifications.orderBy('createdAt').reverse().toArray()
      setNotifications(data)
    } catch (err) {
      console.error('Error fetching notifications:', err)
    }
  }, [setNotifications])

  const submitUpload = useCallback(async (formData) => {
    const newUpload = {
      ...formData,
      status: 'pending',
      tanggalUpload: new Date().toISOString(),
      createdAt: new Date().toISOString(),
    }
    const id = await db.uploads.add(newUpload)
    const uploadWithId = { ...newUpload, id }
    addUpload(uploadWithId)

    const notif = {
      uploadId: id,
      sku: formData.sku,
      type: 'pending',
      message: `${formData.sku} sedang dalam proses review`,
      isRead: false,
      createdAt: new Date().toISOString(),
    }
    await db.notifications.add(notif)
    addNotification(notif)

    return id
  }, [addUpload, addNotification])

  const changeStatus = useCallback(async (id, status, sku) => {
    await db.uploads.update(id, { status })
    updateUploadStatus(id, status)

    const notif = {
      uploadId: id,
      sku,
      type: status,
      message: status === 'approved'
        ? `${sku} telah disetujui oleh tim reviewer`
        : `${sku} ditolak — dokumen perlu direvisi`,
      isRead: false,
      createdAt: new Date().toISOString(),
    }
    const notifId = await db.notifications.add(notif)
    addNotification({ ...notif, id: notifId })
  }, [updateUploadStatus, addNotification])

  const handleMarkRead = useCallback(async (id) => {
    await db.notifications.update(id, { isRead: true })
    markNotifRead(id)
  }, [markNotifRead])

  const handleMarkAllRead = useCallback(async () => {
    await db.notifications.toCollection().modify({ isRead: true })
    markAllRead()
  }, [markAllRead])

  return {
    uploads,
    notifications,
    unreadCount,
    isLoading,
    fetchUploads,
    fetchNotifications,
    submitUpload,
    changeStatus,
    handleMarkRead,
    handleMarkAllRead,
  }
}
