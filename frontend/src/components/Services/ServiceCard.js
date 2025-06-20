import React from "react";

export default function ServiceCard({ icon, title, subtitle, description, features, imageIcon, isReversed = false }) {
    return (
        <div className={`service-section ${isReversed ? 'reversed' : ''}`}>
            <div className="service-content">
                <div className="service-icon">{icon}</div>
                <h2>{title}</h2>
                <h3>{subtitle}</h3>
                <p>{description}</p>
                <ul className="service-features">
                    {features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                    ))}
                </ul>
            </div>
            <div className="service-image">
                <span>{imageIcon}</span>
            </div>
        </div>
    );
} 