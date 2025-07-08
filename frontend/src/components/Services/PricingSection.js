import React from "react";
import PricingCard from "./PricingCard";
import { pricingData } from "./servicesData";
import "./styles/PricingSection.css";

export default function PricingSection({ onBookSession }) {
    return (
        <div className="pricing-section">
            <h2>Service Pricing</h2>
            <p>Choose the service that best fits your learning needs and goals</p>
            <div className="pricing-cards">
                {pricingData.map((plan, index) => (
                    <PricingCard
                        key={index}
                        title={plan.title}
                        price={plan.price}
                        priceLabel={plan.priceLabel}
                        features={plan.features}
                        buttonText={plan.buttonText}
                        buttonType={plan.buttonType}
                        isFeatured={plan.isFeatured}
                        onClick={onBookSession}
                    />
                ))}
            </div>
        </div>
    );
} 