import React from "react";
import ServicesHeader from "../Services/ServicesHeader";
import ServicesList from "../Services/ServicesList";
import PricingSection from "../Services/PricingSection";
import ServicesCTA from "../Services/ServicesCTA";
import Footer from "../shared/Footer";

export default function ServicesPage() {
    const handleBookSession = () => {
        // Navigate to signup page
        window.location.href = '/signup';
    };

    return (
        <div className="services-page">
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


