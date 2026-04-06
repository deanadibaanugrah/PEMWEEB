import { Routes, Route } from 'react-router-dom';
import Dashboard from "./pages/Dashboard.jsx";
import Dean from "./pages/Dean.jsx";
import Mifta from "./pages/Mifta.jsx";
import Zaki from "./pages/Zaki.jsx";

function App() {
  return (
    <Routes>
      {/* 1. Rute untuk localhost:5173/ */}
      <Route path="/" element={<Dashboard />} />
      
      {/* 2. Rute untuk localhost:5173/portokelompok3.4/ agar tidak blank lagi */}
      <Route path="/portokelompok3.4/" element={<Dashboard />} />
      
      {/* Rute halaman anggota tim */}
      <Route path="/dean" element={<Dean />} />
      <Route path="/mifta" element={<Mifta />} />
      <Route path="/zaki" element={<Zaki />} />
    </Routes>
  );
}

export default App;