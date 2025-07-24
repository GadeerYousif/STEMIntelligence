import React from "react";
import ServicesHeader from "../Services/ServicesHeader";
import ServicesList from "../Services/ServicesList";
import PricingSection from "../Services/PricingSection";
import ServicesCTA from "../Services/ServicesCTA";
import Footer from "../shared/Footer";
import { Helmet } from "react-helmet";

export default function ServicesPage() {
    const handleBookSession = () => {
        // Navigate to signup page
        window.location.href = '/signup';
    };

    return (
        <div className="services-page">
            <Helmet>
                <title>Services | STEM Intelligence Tutoring</title>
                <link rel="canonical" href="https://www.stem-intelligence.ca/services" />
            </Helmet>
            <div className="services-container">
                <ServicesHeader />
                <ServicesList />
                <PricingSection onBookSession={handleBookSession} />
                <ServicesCTA onBookSession={handleBookSession} />
                
                
                <Footer />

            </div>
        </div>
    );
}


