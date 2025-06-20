import React from "react";

export default function PricingCard({ title, price, priceLabel, features, buttonText, buttonType = "secondary", onClick, isFeatured = false }) {
    return (
        <div className={`pricing-card ${isFeatured ? 'featured' : ''}`}>
            <h3>{title}</h3>
            <div className="price">{price}</div>
            <div className="price-label">{priceLabel}</div>
            <ul className="pricing-features">
                {features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                ))}
            </ul>
            <button className={`btn btn-${buttonType}`} onClick={onClick}>
                {buttonText}
            </button>
        </div>
    );
} 