export const dummyProducts = [
  { id: 'p1', sku: 'S001', name: 'Semen Tiga Roda 50kg', category: 'Semen', price: 65000, stock: 150 },
  { id: 'p2', sku: 'S002', name: 'Semen Gresik 50kg', category: 'Semen', price: 63000, stock: 200 },
  { id: 'p3', sku: 'B001', name: 'Besi Beton 10mm', category: 'Besi', price: 85000, stock: 500 },
  { id: 'p4', sku: 'W001', name: 'Wiremesh M8', category: 'Besi', price: 450000, stock: 50 },
  { id: 'p5', sku: 'H001', name: 'Hebel Premium', category: 'Bata', price: 550000, stock: 100 },
  { id: 'p6', sku: 'M001', name: 'Mortar Instan', category: 'Semen', price: 75000, stock: 80 },
  { id: 'p7', sku: 'P001', name: 'Pipa PVC 4 Inch', category: 'Pipa', price: 120000, stock: 300 },
  { id: 'p8', sku: 'C001', name: 'Cat Waterproof', category: 'Cat', price: 185000, stock: 120 },
];

export const dummySuppliers = [
  { id: 's1', code: 'SUP001', name: 'PT Semen Nusantara', pic: 'Budi Santoso', phone: '081234567890' },
  { id: 's2', code: 'SUP002', name: 'PT Baja Perkasa', pic: 'Andi Kusuma', phone: '081298765432' },
  { id: 's3', code: 'SUP003', name: 'PT Keramik Indonesia', pic: 'Siti Rahma', phone: '081122334455' },
  { id: 's4', code: 'SUP004', name: 'CV Sumber Material', pic: 'Joko Widodo', phone: '085566778899' },
];

export const dummyCustomers = [
  { id: 'c1', name: 'TB Sinar Jaya', address: 'Jl. Raya Bekasi No 10' },
  { id: 'c2', name: 'TB Berkah Jaya', address: 'Jl. Cikarang Baru No 5' },
  { id: 'c3', name: 'CV Karya Konstruksi', address: 'Jl. Karawang Indah No 1' },
];

export const dummyWarehouses = [
  { id: 'w1', name: 'Gudang Bekasi', location: 'Bekasi' },
  { id: 'w2', name: 'Gudang Karawang', location: 'Karawang' },
  { id: 'w3', name: 'Gudang Cikarang', location: 'Cikarang' },
];

export const dummyDeliveries = [
  { id: 'd1', sjNumber: 'SJ-20260601-001', status: 'Dikirim', date: '2026-06-01', customer: 'TB Sinar Jaya' },
  { id: 'd2', sjNumber: 'SJ-20260602-002', status: 'Diterima', date: '2026-06-02', customer: 'CV Karya Konstruksi' },
];

export const dummyFinance = {
  totalReceivables: 150000000,
  outstanding: 45000000,
  recentInvoices: [
    { id: 'inv1', number: 'INV-001', amount: 25000000, status: 'Lunas' },
    { id: 'inv2', number: 'INV-002', amount: 45000000, status: 'Belum Bayar' },
  ]
};

export const chartDataSales = [
  { name: 'Jan', sales: 4000, profit: 2400 },
  { name: 'Feb', sales: 3000, profit: 1398 },
  { name: 'Mar', sales: 2000, profit: 9800 },
  { name: 'Apr', sales: 2780, profit: 3908 },
  { name: 'May', sales: 1890, profit: 4800 },
  { name: 'Jun', sales: 2390, profit: 3800 },
  { name: 'Jul', sales: 3490, profit: 4300 },
];

export const recentActivities = [
  { id: 1, type: 'delivery', title: 'Pengiriman Diterima', desc: 'SJ-20260602-002 telah diterima oleh CV Karya Konstruksi', time: '10 mins ago', color: 'success' },
  { id: 2, type: 'payment', title: 'Pembayaran Masuk', desc: 'INV-001 telah dibayar lunas (Rp 25.000.000)', time: '2 hours ago', color: 'primary' },
  { id: 3, type: 'alert', title: 'Stok Menipis', desc: 'Wiremesh M8 sisa 50 roll di Gudang Bekasi', time: '5 hours ago', color: 'warning' },
];
