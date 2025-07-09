import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// Service Worker Registration for PWA functionality
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        console.log('SW registered: ', registration);
      })
      .catch((registrationError) => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}

// Device compatibility enhancements
const enhanceDeviceCompatibility = () => {
  // Prevent zoom on double tap (iOS)
  let lastTouchEnd = 0;
  document.addEventListener('touchend', (event) => {
    const now = (new Date()).getTime();
    if (now - lastTouchEnd <= 300) {
      event.preventDefault();
    }
    lastTouchEnd = now;
  }, false);

  // Prevent zoom on input focus (iOS)
  document.addEventListener('gesturestart', (event) => {
    event.preventDefault();
  });

  // Handle viewport height issues on mobile browsers
  const setVH = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };

  setVH();
  window.addEventListener('resize', setVH);
  window.addEventListener('orientationchange', setVH);

  // Add touch-action CSS property for better touch handling
  const style = document.createElement('style');
  style.textContent = `
    * {
      touch-action: manipulation;
    }
    input, textarea, select {
      touch-action: auto;
    }
  `;
  document.head.appendChild(style);
};

// Initialize device compatibility enhancements
enhanceDeviceCompatibility();