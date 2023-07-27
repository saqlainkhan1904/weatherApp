import React, { useState } from "react";
import "./Navbar.css"; // Import your custom CSS styles
import logoImage from "./images/weather-app.png";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Function to handle toggling dark mode
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
    // Implement the logic to toggle dark mode in the entire app here (if needed)
    // You can use the useState variable 'darkMode' to track the dark mode state
  };

  return (
    <nav className={`navbar ${darkMode ? "dark-mode" : ""}`}>
      <div className="navbar-container">
      <div className="navbar-logo">
          <img src={logoImage} alt="Weather App Logo" />
        </div>
        <div className="navbar-brand">Weather App</div>
        <div className="navbar-links">
          <a href="#about">About</a>
          <a href="#signin">Sign In</a>
          <button className="dark-mode-toggle" onClick={toggleDarkMode}>
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
