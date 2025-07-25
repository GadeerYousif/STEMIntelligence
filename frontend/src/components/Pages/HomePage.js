import React from "react";
import { Helmet } from "react-helmet";
import HeroBanner from "../Home/HeroBanner";
import HomeParaIntro from "../Home/HomeParaIntro";
import ServicesSnapshot from "../Home/ServicesSnapshot";
import BenefitsSection from "../Home/BenefitsSection";
import ActionButton from "../Home/ActionButton";
import Footer from "../shared/Footer";

export default function HomePage() {
    return (
        <div>
            <Helmet>
                <title>STEM Intelligence | Free Online Tutoring</title>
                <meta name="description" content="Get free, high-quality online tutoring in math, science, and coding. Personalized lessons, interactive learning, and expert instructors for all ages." />
                <meta name="keywords" content="online tutoring, math help, coding classes, STEM tutoring, science tutor, free tutoring, virtual learning" />
                <meta property="og:title" content="STEM Intelligence | Free Online Tutoring" />
                <meta property="og:description" content="Get free, high-quality online tutoring in math, science, and coding. Personalized lessons, interactive learning, and expert instructors for all ages." />
                <meta property="og:image" content="https://www.stem-intelligence.ca/static/media/New_Logo_cropped.c8dfa7454d426f1c28fd.png" />
                <meta property="og:url" content="https://www.stem-intelligence.ca/" />
                
                <link rel="canonical" href="https://www.stem-intelligence.ca/" />
                <link rel="sitemap" type="application/xml" href="https://www.stem-intelligence.ca/sitemap.xml" />
                
                <script type="application/ld+json">
                  {`
                    {
                      "@context": "https://schema.org",
                      "@type": "Organization",
                      "name": "STEM Intelligence",
                      "url": "https://www.stem-intelligence.ca/"
                    }
                  `}
                </script>
            </Helmet>
            <HeroBanner />
            <HomeParaIntro />
            <BenefitsSection />
            <ServicesSnapshot />
            <ActionButton/>
            <Footer />
        </div>
    );
}