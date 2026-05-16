# Bankku

Bankku adalah project slicing Web Dashbord berdasarkan desain figma untuk Technical Test magang Inagata bagian Frontend. Saya menggunakan Framework React dan TailwindCSS untuk project ini 

## Tech Stack

- **Framework**: [React](https://react.dev/) dengan [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Grafik / Chart**: [@mui/x-charts](https://mui.com/x/react-charts/)
- **Ikon**: [Lucide React](https://lucide.dev/)
- **Routing**: [React Router v6](https://reactrouter.com/)

## Folder Structure

Berikut adalah struktur direktori lengkap untuk folder `src`:

```text
src/
├── assets/                  
├── components/               
│   ├── BalanceHistoryChart.jsx
│   ├── Card.jsx
│   ├── ExpenseStatisticsChart.jsx
│   ├── LoansCards.jsx
│   ├── LoansTable.jsx
│   ├── Navbar.jsx
│   ├── QuickTransfer.jsx
│   ├── RecentTransactions.jsx
│   ├── SettingEditProfile.jsx
│   ├── SettingPreferences.jsx
│   ├── SettingSecurity.jsx
│   ├── Sidebar.jsx
│   └── WeeklyActivityChart.jsx
├── layouts/                 
│   └── MainLayout.jsx
├── pages/                   
│   ├── Dashbord.jsx
│   ├── Loans.jsx
│   └── Setting.jsx
├── App.css                  
├── App.jsx                  
├── index.css                
└── main.jsx                 
```

## How to Run
1. Install [Node.js](https://nodejs.org/).
2. Clone Repository
   ```bash
   git clone https://github.com/elehben/bank-ku.git
   ```
3. Masuk project dirctory melalui terminal dengan 
   ```bash
   cd bank-ku
   ```
    install *library*:
   ```bash
   npm install
   ```
4. Jalankan server lokal:
   ```bash
   npm run dev
   ```
5. Buka peramban (browser) dan akses tautan yang muncul (contoh: `http://localhost:5173`).