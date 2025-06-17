import React from "react";
import AboutInstructorGadeerCard from "../AboutInstructorGadeerCard.js";
import './PageCSS/AboutMePage.css'


export default function AboutMePage() {
    console.log("Rendering About");
    return ( 
        <div>
        <h1 className="AMTitle"> This is the About me Page 1 </h1>
        <AboutInstructorGadeerCard />
            
</div>
    );
}