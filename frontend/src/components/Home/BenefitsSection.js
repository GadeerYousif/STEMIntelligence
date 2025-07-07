import React from "react";
import "./styles/BenefitsSection.css"

export default function BenefitsSection() {
  const benefits = [
  {
    icon: "🎓",
    text: "Experienced tutors with STEM backgrounds",
  },
  {
    icon: "📚",
    text: "Customized lesson plans for every student",
  },
  {
    icon: "🕒",
    text: "Flexible scheduling via Zoom",
  }
 
];

  return (
    <section className="benefits-section">
      <div className="benefits-container">
        <h2>How We Help</h2>
        <ul className="benefits-list">
          {benefits.map((benefit, index) => (
            <li key={index}>
              <span className="benefit-icon">{benefit.icon}</span>
              <span className="benefit-text">{benefit.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};


