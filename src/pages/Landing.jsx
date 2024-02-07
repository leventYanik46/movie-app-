import React from 'react'
import BackgroundImg from '../img/landing-page-background-img.jpg';
const Landing = () => {
  return (
    <div className="landing-page">
      <div className="landing-main">
        <div className='landing-background'>
        <img src={BackgroundImg} className="background-img" alt="background image" />
        </div>
        <div className="foreground-content">
          {/* Other content goes here */}
          <p>Your content goes here</p>
        </div>
      </div>
      <span className='footer'>
        <p>Web Design:<strong> Levent Yanik & Omer Sabuncu</strong></p>
      </span>
    </div>
  )
}

export default Landing