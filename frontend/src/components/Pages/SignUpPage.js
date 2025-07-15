import React, { useEffect } from "react";
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
            <Form />
            <FAQ />
            <Footer />
        </div>
    );
}