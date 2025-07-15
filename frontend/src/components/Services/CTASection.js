import React from "react";
import ContactButton from "../shared/ContactButton";
import "./styles/CTASection.css";

export default function CTASection({ title, description, buttonText, onClick, isSticky = false }) {
    const className = isSticky ? "sticky-cta" : "cta-section";
    
    return (
        <div className={className}>
            {!isSticky && (
                <>
                    <h2>{title}</h2>
                    <p>{description}</p>
                </>
            )}
            <ContactButton 
                text={buttonText}
                onClick={onClick}
                variant="primary"
                size="medium"
                isSticky={isSticky}
            />
        </div>
    );
} 