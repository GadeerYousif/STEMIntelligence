import React from "react";
import "../components/componentsCSS/ServicesSnapshot.css";
/* import mathIcon from "../assets/math-icon.png";
import scienceIcon from "../assets/science-icon.png";
import codingIcon from "../assets/coding-icon.png"; */

export default function ServicesSnapshot  ()  {
  const services = [
    {
      title: "Math Tutoring (K–12)",
      description:
        "From basic arithmetic to advanced calculus, our math sessions align with your child’s grade and curriculum.",
     /*  icon: mathIcon, */
    },
    {
      title: "Science Tutoring",
      description:
        "Whether it's biology, chemistry, or physics, we make science engaging and easy to understand.",
      /* icon: scienceIcon, */
    },
    {
      title: "Coding Lessons",
      description:
        "We introduce students to real-world programming using tools like Scratch, Python, and HTML/CSS.",
      /* icon: codingIcon, */
    },
  ];

  return (
    <section className="services-section">
      <h2 className="services-title">What We Offer</h2>
      <div className="services-cards">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
{/*             <img src={service.icon} alt={`${service.title} icon`} />
 */}            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

