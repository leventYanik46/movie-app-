
import { Route, Routes } from "react-router-dom"
import Navbar from './components/Navbar'
import { Home, Login, Register } from './pages'
import React from 'react';
import './App.css'
import BackgroundImg from './img/landing-page-background-img.jpg';

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







function App() {
  return (
    <div className="landing-page">
      <span className="landing-main">
        <img src={BackgroundImg} className="background-img" alt="background image" />
        <div className="foreground-content">
          {/* Other content goes here */}
          <p>Your content goes here</p>
        </div>
      </span>
      <span className='footer'>
        <p>Web Design:<strong> Levent Yanik & Omer Sabuncu</strong></p>
      </span>
    </div>
  );
}

export default App;

