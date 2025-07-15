import React from "react";
import "./styles/ServiceCard.css";
import servicePage1 from "../../assets/servicesPage1.png";
import servicePage2 from "../../assets/servicesPage2.png";
import servicePage3 from "../../assets/ServicePage3.png";

export default function ServiceCard({ icon, title, subtitle, description, features, imageIndex, isReversed = false }) {
    const images = [servicePage1, servicePage2, servicePage3];
    const selectedImage = images[imageIndex] || servicePage1;

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
                <img src={selectedImage} alt={title} />
            </div>
        </div>
    );
} 