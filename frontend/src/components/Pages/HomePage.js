import React from "react";
import HeroBanner from "../Home/HeroBanner";
import HomeParaIntro from "../Home/HomeParaIntro";
import ServicesSnapshot from "../Home/ServicesSnapshot";
import BenefitsSection from "../Home/BenefitsSection";
import ActionButton from "../Home/ActionButton";
import Footer from "../shared/Footer";

export default function HomePage() {
    return (
        <div>
            <HeroBanner />
            <HomeParaIntro />
            <BenefitsSection />
            <ServicesSnapshot />
            <ActionButton/>
            <Footer />
        </div>
    );
}