import React from "react";
import ServiceCard from "./ServiceCard";
import { servicesData } from "./servicesData";
import "./styles/ServicesList.css";

export default function ServicesList() {
    return (
        <div className="services-list">
            {servicesData.map((service, index) => (
                <ServiceCard
                    key={index}
                    icon={service.icon}
                    title={service.title}
                    subtitle={service.subtitle}
                    description={service.description}
                    features={service.features}
                    imageIcon={service.imageIcon}
                    isReversed={service.isReversed}
                />
            ))}
        </div>
    );
} 