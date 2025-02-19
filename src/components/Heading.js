import React from "react";
import "../style/header.scss";

const Heading = () => {
  return (
    <header className="header">
      <div className="logo-wrapper">
        <h4 className="App-title ">CYF Hotel</h4>
        <img
          className="App-logo"
          src="https://cdn-icons-png.flaticon.com/512/1475/1475996.png"
          alt="logo-image"
        />
      </div>
      <div>
        <a href="#home" className="btn nav-menu">
          Home
        </a>
        <a href="#about" className="btn nav-menu">
          About Us
        </a>
        <a href="#order" className="btn nav-menu">
          Order
        </a>
        <a href="#bookNow" className="btn nav-menu">
          Book Now
        </a>
      </div>
    </header>
  );
};

export default Heading;
