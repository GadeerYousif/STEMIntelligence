import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Form from "../SignUp/Form";
import FAQ from "../SignUp/FAQ";
import "../SignUp/styles/SignUpPage.css";
import Footer from "../shared/Footer";
import VideoSolutionForm from "../SignUp/VideoSolutionForm";

export default function SignUpPage() {
    // Send a ping to wake up the backend server when page loads
    useEffect(() => {
        const wakeUpServer = async () => {
            try {
                const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';
                await fetch(`${API_BASE_URL}/api/ping`, {
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json' },
                });
                console.log('✅ Server wake-up ping sent successfully');
            } catch (error) {
                console.log('⚠️ Server wake-up ping failed (this is normal if server is starting up)');
            }
        };

        wakeUpServer();
    }, []);

    return (
        <div className="signup-form-container">
            <Helmet>
                <title>Contact | STEM Intelligence Tutoring</title>
                <meta name="description" content="Contact STEM Intelligence for free online tutoring in math, science, and coding. Sign up for personalized lessons and get your questions answered!" />
                <meta name="keywords" content="contact STEM Intelligence, sign up, free tutoring, online math help, STEM tutor, coding help, science tutor" />
                <meta property="og:title" content="Contact | STEM Intelligence Tutoring" />
                <meta property="og:description" content="Contact STEM Intelligence for free online tutoring in math, science, and coding. Sign up for personalized lessons and get your questions answered!" />
                <meta property="og:image" content="https://www.stem-intelligence.ca/static/media/New_Logo_cropped.c8dfa7454d426f1c28fd.png" />
                <meta property="og:url" content="https://www.stem-intelligence.ca/contact" />
                <link rel="canonical" href="https://www.stem-intelligence.ca/contact" />
            </Helmet>
            <Form />
            <FAQ />
            <Footer />
        </div>
    );
}