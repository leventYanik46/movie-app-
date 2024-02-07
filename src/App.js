import { Route, Routes } from "react-router-dom"
import Navbar from './components/Navbar'
import { Home, Login, Register } from './pages'
import React from 'react';
import './App.css'

const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>

        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />

      </Routes>
    </>
  )
}

export default App