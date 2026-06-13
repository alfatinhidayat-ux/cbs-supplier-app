# CLARIFY ERP SUPPLIER MOBILE APP (PRD)

## Overview
Aplikasi ERP Supplier Mobile untuk distributor material bangunan berbasis Ionic React + PWA.

## Modul Utama
- Dashboard
- Master Produk
- Supplier
- Pengiriman
- Penerimaan Barang
- OCR Nota
- Keuangan
- Laporan
- Penawaran Barang
- Notifikasi
- Profil & Pengaturan

## Role
### Supplier
- Kelola produk sendiri
- Upload dokumen
- Lihat piutang
- Lihat laporan
- Ajukan penawaran


# Dashboard
## KPI
- Total Piutang
- Total Produk
- Total Pengiriman
- Barang Diterima
- Barang Selisih
- Barang Rusak

## Quick Action
- Buat Pengiriman
- Upload Nota
- Upload Surat Jalan
- Buat Penawaran

---

# Master Produk
## Data Produk
- SKU
- Barcode
- Nama Produk
- Kategori
- Brand
- Satuan Dasar
- Konversi Satuan
- Berat
- Dimensi
- Foto Produk
- Video Produk


---

# Supplier
## Data Supplier
- Kode Supplier
- Nama Supplier
- PIC
- Alamat
- NPWP
- Telepon
- Email
- Rekening

---

# Pengiriman
## Dokumen
- Surat Jalan
- Nota Barang
- Faktur Pajak

## Status
- Draft
- Dikirim
- Diterima
- Selisih
- Rusak
- Selesai

## Data Pengiriman
- Nomor Surat Jalan
- Nomor Nota
- Nomor Faktur
- Tanggal Kirim
- Supir
- Plat Nomor
- Catatan

---

# OCR Nota
Flow:
1. Upload Nota
2. OCR Scan
3. Extract SKU
4. Extract Nama Barang
5. Extract Qty
6. Extract Harga
7. User Review
8. Simpan

---

# Penerimaan Barang
## Input
- Qty Kirim
- Qty Terima
- Qty Rusak
- Foto Bukti
- Catatan

## Status
### Sesuai
Qty Kirim = Qty Terima

### Selisih
Qty Kirim != Qty Terima

### Rusak
Ada barang rusak

---

# Inventory
## Stok
- Stok Awal
- Barang Masuk
- Barang Keluar
- Stok Akhir

## Mutasi
- Barang Hilang
- Barang Rusak
- Retur

---

# Keuangan
## Piutang
- Invoice
- Jatuh Tempo
- Outstanding

## Pembayaran
- Transfer
- Giro
- Tunai

## Status
- Belum Bayar
- Sebagian
- Lunas

---

# Laporan
## Penjualan
- Per Produk
- Per Supplier
- Per Bulan

## Inventory
- Stok
- Mutasi
- Slow Moving

## Finance
- Piutang
- Pembayaran
- Invoice

Export:
- PDF
- Excel

---

# Penawaran Barang
## Data
- Nama Produk
- Harga
- MOQ
- Foto
- Katalog

## Status
- Pending
- Approved
- Rejected

---

# Notifikasi
- Barang Diterima
- Barang Selisih
- Barang Rusak
- Pembayaran Masuk
- Penawaran Disetujui

---

# Profil
- Data Perusahaan
- PIC
- Password
- Notifikasi
- Logout

---

# Dummy Data Material Bangunan

## Produk
- Semen Tiga Roda 50kg
- Semen Gresik 50kg
- Besi Beton 10mm
- Wiremesh M8
- Hebel Premium
- Mortar Instan
- Pipa PVC 4 Inch
- Cat Waterproof

## Supplier
- PT Semen Nusantara
- PT Baja Perkasa
- PT Keramik Indonesia
- CV Sumber Material

## Customer
- TB Sinar Jaya
- TB Berkah Jaya
- CV Karya Konstruksi

## Gudang
- Gudang Bekasi
- Gudang Karawang
- Gudang Cikarang

---

# Mobile Navigation

Bottom Tabs:
- Dashboard
- Pengiriman
- Laporan
- Profil

More Menu:
- Produk
- Keuangan
- Penawaran
- Notifikasi

---

# Technology

Frontend:
- Ionic React
- TypeScript
- React Query
- Zustand
- React Hook Form
- Zod

PWA:
- Offline Cache
- Push Notification
- Background Sync
- Install To Home Screen

---

# Color Palette

Brand:
- #D1D5DB

Inventory:
- #14B8A6

Sales:
- #2563EB

Finance:
- #22C55E

Purchasing:
- #F59E0B

Approval:
- #EF4444

Background:
- #F9FAFB

Surface:
- #FFFFFF
