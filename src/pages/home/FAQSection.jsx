import React, { useState } from "react";
// import faq from "../../assets/faq.jpg";
import faq from '../../assets/faq.jpeg';
import "./FAQSection.css"
import {
  FaQuestionCircle,
  FaLock,
  FaRobot,
  FaUserShield,
  FaHeart,
} from "react-icons/fa";
import "./FAQSection.css"; // Import the individual CSS file

const faqs = [
  {
    id: 1,
    icon: <FaQuestionCircle />,
    question: "How long does a typical AI interview or assessment take?",
    answer:
      "Our AI sessions typically run between 15 and 30 minutes. Whether it's a screening interview or a training/skill assessment, candidates can complete the session at a time that suits them—making the process both efficient and convenient.",
  },
  {
    id: 2,
    icon: <FaLock />,
    question: "Is it fair to evaluate candidates using AI?",
    answer:
      "Absolutely. Our AI enhances fairness by asking every candidate the same structured questions and evaluating them in a consistent manner. This minimizes unconscious bias while ensuring that your team makes the final decision based on objective, data-driven insights.",
  },
  {
    id: 3,
    icon: <FaRobot />,
    question: "What types of roles can benefit from this system?",
    answer:
      "Our AI solution is versatile and effective across a wide range of roles—from sales and customer service to campus recruitment, blue-collar positions, and technical roles. It also adapts seamlessly for training and skill assessments by customizing questions and evaluation criteria to suit your industry and job requirements.",
  },
  {
    id: 4,
    icon: <FaUserShield />,
    question: "How secure is the interview and assessment data?",
    answer:
      "We store your data in secure, enterprise-grade data centers with multiple layers of physical and virtual security controls. All data is encrypted at rest using AES-256 and in transit via TLS, ensuring confidentiality. Access is tightly controlled through role-based permissions and multi-factor authentication.",
  },
  {
    id: 5,
    icon: <FaHeart />,
    question: "What support do candidates receive during the process?",
    answer:
      "Candidates receive clear instructions from start to finish. The interface is intuitive and user-friendly, and we provide technical support if needed. Most candidates report finding the experience professional and comfortable.",
  },
];

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <>
      <div className="faq-container">
        {/* Left Side: FAQs */}
        <div className="left-container">
          <div className="faq-content">
            <h1 className="faq-title">
              Frequently Asked <span>Questions</span>
            </h1>

            <div className="faq-list">
              {faqs.map((faq) => (
                <div
                  key={faq.id}
                  className={`faq-item ${openFAQ === faq.id ? "open" : ""}`}
                  onClick={() => toggleFAQ(faq.id)}
                >
                  <div className="faq-question">
                    <span className="faq-icon">{faq.icon}</span>
                    <strong>{faq.question}</strong>
                  </div>
                  {openFAQ === faq.id && (
                    <p className="faq-answer">{faq.answer}</p>
                  )}
                </div>
              ))}
            </div>

            <button className="main-button">
              <a href="/book-demo">Experience Smarter Hiring</a>
            </button>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="right-container">
          <img src={faq} alt="FAQ Illustration" />
        </div>
      </div>

      {/* Screen Section */}
      <section className="screen-container">
        <h1 className="screen-heading">
          Screen & Assess with Precision
          <br />
          <span>—Begin Your Digital Talent Journey</span>
        </h1>
        <p className="screen-para">
          Leverage AI-driven interviews and skill assessments for faster, more confident hiring and training. Evaluate candidate capabilities and skill in minutes.
        </p>
        <button className="main-button">
          <a href="/book-demo">Book a demo</a>
        </button>
      </section>
    </>
  );
};

export default FAQSection;
