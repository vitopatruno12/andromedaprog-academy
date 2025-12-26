import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/NavBar";
import CoursesCatalog from "./components/CoursesCatalog";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import WhatsAppSection from "./components/WhatsAppSection";
import ContactEmail from "./components/ContactEmail";
import LandingPage from "./components/LandingPage";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDark = () => setDarkMode(!darkMode);

  return (
    <Router>

        <ScrollToTop /> 
      <div className={darkMode ? "bg-dark text-light min-vh-100" : "bg-white text-dark min-vh-100"}>
        
        {/* NAVBAR SEMPRE PRESENTE */}
        <Navbar darkMode={darkMode} toggleDark={toggleDark} />

        {/* ROUTER PRINCIPALE */}
        <Routes>

          {/* === HOME / LANDING PAGE === */}
          <Route 
            path="/" 
            element={
              <>
                <LandingPage darkMode={darkMode} />
                <FAQ darkMode={darkMode} />
                <WhatsAppSection darkMode={darkMode} />
                <ContactEmail darkMode={darkMode} />
              </>
            } 
          />

          {/* === PAGINA CORSI (senza scroll landing) === */}
          <Route 
            path="/corsi" 
            element={
              <>
                <CoursesCatalog darkMode={darkMode} />
                <FAQ darkMode={darkMode} />
                <WhatsAppSection darkMode={darkMode} />
                <ContactEmail darkMode={darkMode} />
              </>
            } 
          />

        </Routes>

        {/* FOOTER SEMPRE PRESENTE */}
        <Footer darkMode={darkMode} />
      </div>
    </Router>
  );
}

export default App;
