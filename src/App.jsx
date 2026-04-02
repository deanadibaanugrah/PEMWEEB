import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Dean from './pages/Dean';
// import Rizky from './pages/Rizky';
// import Sinta from './pages/Sinta';

function App() {
  return (
    <BrowserRouter basename="/portokelompok3.4">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dean" element={<Dean />} />
        {/* <Route path="/rizky" element={<Rizky />} />
        <Route path="/sinta" element={<Sinta />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;