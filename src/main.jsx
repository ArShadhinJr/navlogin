import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import HomeButton from './components/HomeButton/HomeButton.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import QrCode from './components/QrCode/QrCode.jsx'
import NotFound from './components/NotFound/NotFound.jsx'
import Ordering from './components/Ordering/Ordering.jsx'
import SimpleReg from './components/SimpleReg/SimpleReg.jsx'
import SimpleLogin from './components/SimpleLogin/SimpleLogin.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <BrowserRouter>
      <HomeButton/>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/home' element={<Home />} />
        <Route path='/qrcode' element={<QrCode />} />
        <Route path='/ordering' element={<Ordering />} />
        <Route path='/simplereg' element={<SimpleReg />} />
        <Route path='/simplelogin' element={<SimpleLogin />} />
        <Route path='*' element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
