
import React from 'react';
import './App.css'; // Import your CSS file for styling
import BackgroundImg from './img/landing-page-background-img.jpg';

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