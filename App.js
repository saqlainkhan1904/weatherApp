import React from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";
import Navbar from "./Navbar";

function App() {
  return (
       
    <>
      <Navbar />
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        Developed by MD Saqlain Ahmad Khan | © All rights reserved
      </div>
    </>
  );
}

export default App;