import React from "react";
import CTASection from "./CTASection";
import { ctaData } from "./servicesData";
import "./styles/ServicesCTA.css";

export default function ServicesCTA({ onBookSession }) {
    return (
        <>
            {/* Main CTA Section */}
            <CTASection
                title={ctaData.title}
                description={ctaData.description}
                buttonText={ctaData.buttonText}
                onClick={onBookSession}
            />

            {/* Sticky CTA for mobile */}
            <CTASection
                buttonText="Contact Now"
                onClick={onBookSession}
                isSticky={true}
            />
        </>
    );
} 