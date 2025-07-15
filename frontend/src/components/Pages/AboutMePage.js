import React from "react";
import AboutInstructorGadeerCard from "../About/AboutInstructorGadeerCard";
import "../About/styles/AboutMePage.css";
import Footer from "../shared/Footer";

export default function AboutMePage() {
    return ( 
        <div className="about-page">
            {/* Compact Header */}
            <div className="about-header">
                <h1>About STEM Intelligence</h1>
                <p>Empowering students through personalized, interactive learning experiences</p>
            </div>

            {/* Main Content - Side by Side Layout */}
            <div className="about-main-content">
                <div className="instructor-section">
                    <AboutInstructorGadeerCard />
                </div>
                
                <div className="teaching-approach-section">
                    <h2>My Teaching Approach</h2>
                    <div className="approach-grid">
                        <div className="approach-item">
                            <h3>📋 Assessment & Goals</h3>
                            <p>I begin by understanding each student's current level and learning style, then we set clear, achievable goals together.</p>
                        </div>
                        
                        <div className="approach-item">
                            <h3>🔄 Interactive Learning</h3>
                            <p>Learning happens through doing! I use real-world examples and hands-on activities to make concepts come alive.</p>
                        </div>
                        
                        <div className="approach-item">
                            <h3>🎯 Personalized Instruction</h3>
                            <p>Every lesson is tailored to your specific needs, whether you're a visual, hands-on, or discussion-based learner.</p>
                        </div>
                        
                    
                        
                        <div className="approach-item">
                            <h3>🔄 Continuous Growth</h3>
                            <p>I help you develop study skills, problem-solving strategies, and a growth mindset for lifelong learning.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mission Statement */}
            <div className="mission-section">
                <h2>Our Mission</h2>
                <p>
                    At STEM Intelligence, we believe every student has the potential to excel in mathematics, 
                    science, and technology. Our mission is to unlock that potential through personalized, 
                    engaging, and effective tutoring that builds not just knowledge, but confidence and 
                    a lifelong love of learning.
                </p>
            </div>
            
            <Footer />
        </div>
    );
}