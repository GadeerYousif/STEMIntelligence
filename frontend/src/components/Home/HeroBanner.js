import React from "react";
import "./styles/HeroBanner.css";
import heroImage from "../../assets/heroBanner1.png"; // Make sure you have a relevant image here
import { Link } from "react-router-dom";

export default function HeroBanner() {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>Master Math, Science & Coding</h1>
          <p>Personalized online lessons via Zoom for Grades 1–12</p>
          <Link to="/signup" className="cta-button">
          Book a Free Session
        </Link>
        </div>
      </div>
    </section>
  );
};

