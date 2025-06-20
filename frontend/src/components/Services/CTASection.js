import React from "react";

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
            <button className="btn btn-primary" onClick={onClick}>
                {buttonText}
            </button>
        </div>
    );
} 