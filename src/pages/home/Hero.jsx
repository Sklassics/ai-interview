import React from 'react'
import "./Hero.css";
const Hero = () => {
  return (
    <main className="container-main"> 
      <div className="hero-left">
        <h1 className="hero-line">
        Experience AI-Powered<br/>
         Mock Interviews & <br/>
         Skill Assessments
        </h1>
        <p className="hero-para">
        Prepare smarter with real-time feedback tailored to your performance.
        Practice HR, technical, and behavioral interviews in a realistic environment.
        Track your progress with detailed analytics and improvement plans.
        Boost your confidence and get interview-ready anytime, anywhere.
        </p>
        <button className="main-button"><a href='/book-demo'>Book a demo</a></button>
      </div>

      <div className="hero-image">

      </div>
    </main>
  )
}

export default Hero;
