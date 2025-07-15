import React from "react";
import "./styles/ContactButton.css";

export default function ContactButton({ 
    text = "Contact Now", 
    onClick, 
    variant = "primary", 
    size = "medium",
    isSticky = false,
    className = "",
    disabled = false
}) {
    const handleClick = () => {
        if (onClick) {
            onClick();
        } else {
            // Default behavior - scroll to signup form
            const signupForm = document.getElementById('signup-form');
            if (signupForm) {
                signupForm.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    const buttonClasses = [
        'contact-button',
        `contact-button--${variant}`,
        `contact-button--${size}`,
        isSticky ? 'contact-button--sticky' : '',
        className
    ].filter(Boolean).join(' ');

    return (
        <button 
            className={buttonClasses}
            onClick={handleClick}
            disabled={disabled}
        >
            {text}
        </button>
    );
} 