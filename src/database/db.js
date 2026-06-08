import Dexie from 'dexie'

export const db = new Dexie('SupplierERPDB')

db.version(1).stores({
  uploads: '++id, sku, status, createdAt',
  notifications: '++id, uploadId, type, isRead, createdAt',
})

// Seed dummy data if empty
export async function seedDummyData() {
  const count = await db.uploads.count()
  if (count > 0) return

  const uploads = [
    {
      sku: 'SKU-12345',
      nota: null,
      suratJalan: null,
      fakturPajak: null,
      gambarProduk: [],
      catatan: 'Produk elektronik batch Q1',
      tanggalUpload: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      status: 'approved',
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
    },
    {
      sku: 'SKU-99812',
      nota: null,
      suratJalan: null,
      fakturPajak: null,
      gambarProduk: [],
      catatan: 'Spare parts mesin',
      tanggalUpload: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
      status: 'pending',
      createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
    },
    {
      sku: 'SKU-88771',
      nota: null,
      suratJalan: null,
      fakturPajak: null,
      gambarProduk: [],
      catatan: 'Material bangunan',
      tanggalUpload: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
      status: 'rejected',
      createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
    },
    {
      sku: 'SKU-11223',
      nota: null,
      suratJalan: null,
      fakturPajak: null,
      gambarProduk: [],
      catatan: 'Alat tulis kantor',
      tanggalUpload: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
      status: 'pending',
      createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    },
  ]

  const ids = await db.uploads.bulkAdd(uploads, { allKeys: true })

  const notifications = [
    {
      uploadId: ids[0],
      sku: 'SKU-12345',
      type: 'approved',
      message: 'SKU-12345 telah disetujui oleh tim reviewer',
      isRead: false,
      createdAt: new Date(Date.now() - 1 * 60 * 60 * 1000).toISOString(),
    },
    {
      uploadId: ids[1],
      sku: 'SKU-99812',
      type: 'pending',
      message: 'SKU-99812 sedang dalam proses review',
      isRead: true,
      createdAt: new Date(Date.now() - 20 * 60 * 60 * 1000).toISOString(),
    },
    {
      uploadId: ids[2],
      sku: 'SKU-88771',
      type: 'rejected',
      message: 'SKU-88771 ditolak — dokumen tidak lengkap',
      isRead: false,
      createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    },
    {
      uploadId: ids[3],
      sku: 'SKU-11223',
      type: 'pending',
      message: 'SKU-11223 sedang dalam proses review',
      isRead: true,
      createdAt: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString(),
    },
  ]
  await db.notifications.bulkAdd(notifications)
}
