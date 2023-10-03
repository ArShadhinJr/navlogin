import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import HomeButton from './components/HomeButton/HomeButton.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import QrCode from './components/QrCode/QrCode.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <BrowserRouter>
      <HomeButton/>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/home' element={<Home />} />
        <Route path='/qrcode' element={<QrCode />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
