# 📦 Supplier ERP — Mobile PWA

Aplikasi Progressive Web App (PWA) mobile-first untuk manajemen dokumen supplier/vendor. Dibangun menggunakan **React 18 + Vite + Tailwind CSS** dengan dukungan offline penuh melalui IndexedDB.

---

## ✨ Fitur Utama

| Fitur | Keterangan |
|-------|-----------|
| 🔐 Autentikasi | Login dengan session tersimpan di localStorage |
| 📤 Upload Dokumen | Nota, Surat Jalan, Faktur Pajak, Foto Produk |
| 📋 Riwayat | Filter & cari berdasarkan SKU dan status |
| 🔔 Notifikasi | Inbox status approval real-time |
| 📊 Dashboard | Summary card, quick action, activity timeline |
| 📴 Offline First | Semua data tersimpan di IndexedDB (Dexie.js) |
| 📱 PWA | Installable di Android & iOS |

---

## 🚀 Cara Penggunaan

### 1. Clone Repository

```bash
git clone https://github.com/alfatinhidayat-ux/cbs-supplier-app.git
cd cbs-supplier-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Jalankan Development Server

```bash
npm run dev
```

Buka browser dan akses: **http://localhost:5173**

### 4. Login

Gunakan kredensial dummy berikut:

```
Username : supplier
Password : supplier123
```

---

## 🏗️ Struktur Proyek

```
src/
├── components/          # Komponen UI reusable
│   ├── AppHeader.jsx        # Header app dengan notifikasi & avatar
│   ├── BottomNavigation.jsx # Bottom nav mobile
│   ├── StatusBadge.jsx      # Badge status (pending/approved/rejected)
│   ├── SummaryCard.jsx      # Kartu statistik dashboard
│   ├── UploadCard.jsx       # Kartu item riwayat upload
│   ├── FileUploader.jsx     # Komponen upload file dengan drag-drop
│   ├── ImagePreview.jsx     # Preview gambar dengan lightbox
│   ├── NotificationItem.jsx # Item notifikasi
│   ├── SearchBar.jsx        # Search input dengan filter
│   ├── EmptyState.jsx       # Tampilan kosong/empty
│   └── Modal.jsx            # Modal detail dokumen
│
├── pages/               # Halaman utama
│   ├── LoginPage.jsx        # Halaman login
│   ├── DashboardPage.jsx    # Halaman dashboard
│   ├── UploadPage.jsx       # Halaman upload dokumen
│   ├── HistoryPage.jsx      # Halaman riwayat
│   └── NotificationPage.jsx # Halaman notifikasi
│
├── store/               # State management (Zustand)
│   ├── authStore.js         # State autentikasi
│   └── uploadStore.js       # State upload & notifikasi
│
├── database/            # Database lokal
│   └── db.js               # Dexie.js IndexedDB setup
│
├── router/              # Routing
│   └── ProtectedRoute.jsx   # Route guard autentikasi
│
├── hooks/               # Custom hooks
│   ├── useAuth.js           # Hook autentikasi
│   └── useUploads.js        # Hook manajemen upload
│
├── App.jsx              # Root component & routing
├── main.jsx             # Entry point
└── index.css            # Global styles & design tokens
```

---

## 🛠️ Tech Stack

| Teknologi | Versi | Kegunaan |
|-----------|-------|----------|
| React | 18+ | UI framework |
| Vite | 8+ | Build tool & dev server |
| Tailwind CSS | 4+ | Utility-first styling |
| React Router | v6 | Client-side routing |
| Zustand | latest | State management |
| Dexie.js | latest | IndexedDB wrapper (offline data) |
| Lucide React | latest | Icon library |

---

## 🧑‍💻 Pengembangan

### Menambah Halaman Baru

1. Buat file baru di `src/pages/NamaPage.jsx`
2. Daftarkan route di `src/App.jsx`
3. Tambahkan menu di `src/components/BottomNavigation.jsx` (jika perlu)

### Menambah Komponen Baru

1. Buat file di `src/components/NamaKomponen.jsx`
2. Gunakan Tailwind CSS untuk styling
3. Ikuti pola functional component + React Hooks

### Menambah Data ke IndexedDB

Buka `src/database/db.js`, tambahkan store baru:

```js
db.version(2).stores({
  uploads: '++id, sku, status, createdAt',
  notifications: '++id, uploadId, type, isRead, createdAt',
  namaStoreBaru: '++id, field1, field2',  // tambahkan di sini
})
```

### Menambah State Global

Buka atau buat file di `src/store/`, lalu:

```js
import { create } from 'zustand'

const useNamaStore = create((set) => ({
  data: [],
  setData: (data) => set({ data }),
}))

export default useNamaStore
```

---

## 📱 Instalasi sebagai PWA (Android)

1. Buka aplikasi di browser Chrome Android
2. Tap menu **⋮ (tiga titik)** di pojok kanan atas
3. Pilih **"Tambahkan ke layar utama"**
4. Aplikasi akan muncul seperti native app

---

## 🔧 Build untuk Production

```bash
npm run build
```

Output akan ada di folder `dist/`. Deploy ke hosting statis seperti Vercel, Netlify, atau GitHub Pages.

### Preview build production secara lokal:

```bash
npm run preview
```

---

## 🔄 Push ke GitHub

```bash
git add .
git commit -m "pesan commit"
git push origin main
```

---

## 📋 Struktur Data IndexedDB

### Tabel `uploads`

```json
{
  "id": 1,
  "sku": "SKU-12345",
  "nota": { "name": "nota.pdf", "dataUrl": "..." },
  "suratJalan": { "name": "sj.pdf", "dataUrl": "..." },
  "fakturPajak": { "name": "fp.pdf", "dataUrl": "..." },
  "gambarProduk": [{ "name": "foto.jpg", "dataUrl": "..." }],
  "catatan": "Catatan tambahan opsional",
  "tanggalUpload": "2026-06-08T02:00:00.000Z",
  "status": "pending",
  "createdAt": "2026-06-08T02:00:00.000Z"
}
```

**Status yang tersedia:** `pending` · `approved` · `rejected`

### Tabel `notifications`

```json
{
  "id": 1,
  "uploadId": 1,
  "sku": "SKU-12345",
  "type": "approved",
  "message": "SKU-12345 telah disetujui oleh tim reviewer",
  "isRead": false,
  "createdAt": "2026-06-08T02:00:00.000Z"
}
```

---

## 🎨 Design System

Warna utama yang digunakan:

```css
--primary:        #2563EB   /* Biru utama */
--bg:             #F8FAFC   /* Background */
--card:           #FFFFFF   /* Card */
--border:         #E5E7EB   /* Border */
--success:        #22C55E   /* Hijau - Approved */
--warning:        #F59E0B   /* Kuning - Pending */
--danger:         #EF4444   /* Merah - Rejected */
--text-primary:   #111827
--text-secondary: #6B7280
```

Font: **Inter** (Google Fonts)

---

## 📄 Lisensi

MIT License — bebas digunakan dan dimodifikasi.

---

> Dibuat dengan ❤️ untuk kebutuhan manajemen dokumen supplier enterprise.
