import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; 


function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><Link to="/">Basic Details</Link></li>
        <li><Link to="/region-availability">Region Availability</Link></li>
        <li><Link to="/experience">Experience</Link></li>
        <li><Link to="/professional-experience">Professional Experience</Link></li>
        <li><Link to="/skills-training">Skills Training</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
