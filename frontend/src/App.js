import { Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import { HomePage, AboutMePage, ServicesPage, SignUpPage } from "./components/Pages";

console.log({ HomePage, AboutMePage, ServicesPage, SignUpPage }); // Debug

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutMePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </div>
  );
}

export default App;