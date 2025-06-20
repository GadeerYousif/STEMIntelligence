import React from "react";
import "./styles/AboutInstructorGadeerCard.css";
import instructorPhoto from "../../assets/logo512.png";
export default function AboutInstructorGadeerCard() {
  return (
    <div className="lead-instructor-card">
      <img
        src={instructorPhoto}  // Fixed: Properly closed tag
        alt="Gadeer Yousif"
        className="instructor-photo"
      />  
      <h2>Lead Instructor: Gadeer Yousif</h2>
      <p><strong>Qualifications:</strong></p>
      <ul>
        <li>BEng in Computer Engineering </li>

        <li>3+ years of teaching experience</li>
      </ul>
      <p>
Hello! I’m Gadeer Yousif, a passionate educator specializing in mathematics and computer science. With over three years of experience tutoring students from Grade 4 through university level, I focus on fostering critical thinking, problem-solving skills, and confidence in my students.

My teaching philosophy centers on interactive, student-centered learning—tailoring lessons to individual needs while emphasizing real-world applications. Beyond academics, I believe in cultivating strong study habits and a growth mindset to empower lifelong learning.

Let’s unlock your full potential together!      </p>
    </div>
  );
} 