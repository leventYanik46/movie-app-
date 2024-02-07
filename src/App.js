
import { Route, Routes } from "react-router-dom"
import Navbar from './components/Navbar'
import { Login, Register,Landing, Home } from './pages'
import React from 'react';
import './App.css'


const App = () => {
  return (
    <>
      
      <Routes>

        <Route path="/" element={<Landing/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/home" element={<Home/>} Component={Navbar}/>

      </Routes>
    </>
  )
}









export default App;

