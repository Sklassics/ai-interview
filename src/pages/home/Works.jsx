import React from "react";
import FeatureSection from "./FeatureSection";
import how from '../../assets/how.png'; 
import './Works.css';

const Works = () => {
  return (
    <>
    <section className="how-it-works"> 

    <div className="containersk">
        {/* Left Section */}
        
        <div className="left-section">
        <h2 className="how-it-works-heading">
          How it <span>works</span>
    </h2>
         <div className="imagesk">
         <img className="works-img" src={how} alt="How-works" />
          </div>
        </div>


        {/* Right Section - Scrollable */}
        <div className="right-section">
          {[
            {
              number: "01",
              title: "Generate Role-Specific Questions Instantly",
              description:
                "Our AI creates customized interview questions based on the role, experience level, and industry. Whether it’s software engineering, finance, marketing, data science, product management, or healthcare, every question is relevant and impactful.",
            },
            {
              number: "02",
              title: "Eliminate Manual Scheduling",
              description:
                "Candidates complete interviews at their convenience through on-demand access. Our system removes scheduling conflicts and streamlines the entire process.",
            },
            {
              number: "03",
              title: "Conduct Interviews with AI Precision",
              description:
                "Simulated interviews replicate real scenarios using smart, adaptive questioning. Responses are recorded and analyzed for communication, clarity, and content.",
            },
            {
              number: "04",
              title: "Evaluate and Compare with Confidence",
              description:
                "Our AI assesses candidates against your custom criteria consistently and impartially. Plus, access video recordings for a comprehensive review.",
            },
          ].map((step, index) => (
            <div className="step" key={index}>
              <h3 className="step-number">{step.number}</h3>
              <h3 className="step-title">{step.title}</h3>
              <p>{step.description}</p>
              <button className="works-button"><a href='/book-demo'>Get Started</a></button>
            </div>
          ))}
        </div>
      </div>
    </section>
    <FeatureSection />
    </>
    
  );
};

export default Works;
