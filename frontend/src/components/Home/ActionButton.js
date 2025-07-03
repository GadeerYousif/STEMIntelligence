import React from "react";
import "./styles/ActionButton.css";
import { Link } from "react-router-dom";

export default function ActionButton() {
  return (
    <section className="cta-bottom">
      <div className="cta-content">
        <h2>Ready to start?</h2>
        <p>Book your free intro lesson today and set your child up for success!</p>
        
        <Link to="/signup" className="cta-button">
          Book a Free Session
        </Link>
      </div>
    </section>
  );
};


