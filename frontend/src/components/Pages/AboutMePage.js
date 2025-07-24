import React from "react";
import { Helmet } from "react-helmet";
import AboutInstructorGadeerCard from "../About/AboutInstructorGadeerCard";
import "../About/styles/AboutMePage.css";
import Footer from "../shared/Footer";

export default function AboutMePage() {
    return ( 
        <div className="about-page">
            <Helmet>
                <title>About | STEM Intelligence Tutoring</title>
                <meta name="description" content="Learn about STEM Intelligence's mission, teaching philosophy, and lead instructor. Discover our personalized, interactive approach to online tutoring." />
                <meta name="keywords" content="about STEM Intelligence, tutoring philosophy, online tutor, math help, STEM education, personalized learning" />
                <meta property="og:title" content="About | STEM Intelligence Tutoring" />
                <meta property="og:description" content="Learn about STEM Intelligence's mission, teaching philosophy, and lead instructor. Discover our personalized, interactive approach to online tutoring." />
                <meta property="og:image" content="https://www.stem-intelligence.ca/static/media/New_Logo_cropped.c8dfa7454d426f1c28fd.png" />
                <meta property="og:url" content="https://www.stem-intelligence.ca/about" />
                <link rel="canonical" href="https://www.stem-intelligence.ca/about" />
            </Helmet>
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