import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="circle">
          <h2>N S</h2>
        </div>
        <div className="properties">
          <Link to="/home">
            <h3>HOME</h3>
          </Link>
          <Link to="/about"><h3>ABOUT</h3></Link>
          <Link to="/exp"><h3>EXPERIENCE</h3></Link>
          <Link to="/projects"> <h3>PROJECTS</h3></Link>
         <Link to="/contact"><h3>CONTACT</h3></Link>
          
        </div>
      </div>
    </>
  );
};

export default Navbar;
