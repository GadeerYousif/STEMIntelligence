import React from "react";
import HeroBanner from "../Home/HeroBanner";
import HomeParaIntro from "../Home/HomeParaIntro";
import ServicesSnapshot from "../Home/ServicesSnapshot";

export default function HomePage() {
    return (
        <div>
            <HeroBanner />
            <HomeParaIntro />
            <ServicesSnapshot />
        </div>
    );
}