import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// 1. Tambahkan import BrowserRouter di bawah ini
import { BrowserRouter } from 'react-router-dom' 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 2. Bungkus komponen App dengan BrowserRouter seperti ini */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)