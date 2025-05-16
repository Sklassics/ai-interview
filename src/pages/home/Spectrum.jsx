  import React from 'react';
  import './Spectrum.css';

  const Spectrum = () => {
    return (
      <>
        <div className="slider-wrap">
          <div className="slider-heading">
            <h1 className="head-text">Ace Every Interview with Confidence</h1>
            <h3 className="card-header-center">
            Conduct seamless, automated interviews which <br/> save time and ensure quality.
            </h3>
            <div className="slider-description">
              <p>Evaluate communication, technical, and problem-solving skills instantly, Track growth with real-time analytics and personalized feedback.</p>
            </div>
          </div>
        </div>

      
        <div className="card-container">
          <div className="card">
            <div className="card-content">
              <h1 className="card-title">AI-Powered Screening Interviews</h1>
              <p className="card-paragraph">Simulate real hiring scenarios with instant feedback on communication, clarity, and confidence.</p>
              <div className="card-images">
                <img src="https://cdn.prod.website-files.com/676698cb172848529c42152b/67e68d99ba8f213a4befff96_KitaHQ%20Homepage%20Graphics%201-p-2000.png" className="card1" alt="Screening Interviews" />
              </div>
            </div>
          </div>

          {/* Second Card */}
          <div className="card">
            <div className="card-content">
              <h1 className="card-title">Training and Skill Assessment</h1>
              <p className="card-paragraph">AI-driven training and assessments to boost your skills with personalized feedback.</p>
              <div className="card-images">
                <img src="https://img.freepik.com/free-photo/robot-working-as-teacher-instead-humans_23-2150912075.jpg" className="card2" alt="Training Assessments" />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  export default Spectrum;
