import React from "react";
import "./styles/Footer.css";

export default function Footer () {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        
        {/* === Brand or Logo Section === */}
        <div className="footer-brand">
          <h3>STEM Intelligence</h3>
          <p>Inspiring success in Math, Science & Coding</p>
        </div>

        {/* === Future Navigation or Social Links === */}
        <div className="footer-links">
          {/* Add internal page links below */}
          {/* <a href="/about">About</a> */}
          {/* <a href="/services">Services</a> */}
          {/* <a href="/faq">FAQ</a> */}
          {/* <a href="/contact">Contact</a> */}

          {/* Add external social media links below */}
          {/* <a href="https://instagram.com/stemintelligence" target="_blank" rel="noopener noreferrer">Instagram</a> */}
          {/* <a href="https://youtube.com/@stemintelligence" target="_blank" rel="noopener noreferrer">YouTube</a> */}
          {/* <a href="https://facebook.com/stemintelligence" target="_blank" rel="noopener noreferrer">Facebook</a> */}
        </div>

        {/* === Contact Info and Copyright === */}
        <div className="footer-contact">
          <p>Email us: <a href="mailto:stemintelligencetutors@gmail.com">stemintelligencetutors@gmail.com</a></p>
          <p>&copy; {new Date().getFullYear()} STEM Intelligence. All rights reserved.</p>
        </div>
        
      </div>
    </footer>
  );
};

