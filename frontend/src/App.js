import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/shared/Navbar";
import HomePage from "./components/Pages/HomePage";
import AboutMePage from "./components/Pages/AboutMePage";
import ServicesPage from "./components/Pages/ServicesPage";
import SignUpPage from "./components/Pages/SignUpPage";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutMePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;