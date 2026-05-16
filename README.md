# 🏦 Bankku - Dashboard Keuangan Modern

Bankku adalah aplikasi web *dashboard* keuangan yang dibuat dengan antarmuka yang modern, bersih, dan sepenuhnya responsif. Tampilannya dirancang agar pas dan rapi saat diakses melalui perangkat Mobile (HP), Tablet, maupun Desktop.

## 🛠️ Teknologi yang Digunakan

- **Framework**: [React](https://react.dev/) dengan [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Grafik / Chart**: [@mui/x-charts](https://mui.com/x/react-charts/)
- **Ikon**: [Lucide React](https://lucide.dev/)
- **Routing**: [React Router v6](https://reactrouter.com/)

## 🚀 Cara Menjalankan di Komputer Lokal

1. Pastikan komputer Anda sudah terinstal [Node.js](https://nodejs.org/).
2. Buka terminal/command prompt, dan arahkan ke folder proyek ini.
3. Jalankan perintah instalasi berikut untuk mengunduh semua *library*:
   ```bash
   npm install
   ```
4. Jalankan server lokal:
   ```bash
   npm run dev
   ```
5. Buka peramban (browser) dan akses tautan yang muncul (contoh: `http://localhost:5173`).

## 📁 Struktur Folder Utama

- `src/components/`: Kumpulan elemen UI yang bisa dipakai berulang (Navbar, Sidebar, Card, dll).
- `src/layouts/`: Kerangka layout rute utama (pembungkus Navbar dan menu Sidebar).
- `src/pages/`: Halaman-halaman utama dalam aplikasi (Dashboard, Loans, Setting, dll).
- `src/App.jsx`: File rute (routing) utama aplikasi.
