import React from "react";
import AboutInstructorGadeerCard from "../About/AboutInstructorGadeerCard";
import "../About/styles/AboutMePage.css";

export default function AboutMePage() {
    return ( 
        <div className="about-page">
            <div className="about-header">
                <h1 className="AMTitle">About STEM Intelligence</h1>
                <p>Learn more about our mission and your dedicated instructor</p>
            </div>
            <AboutInstructorGadeerCard />
        </div>
    );
}