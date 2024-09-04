import React, { useState } from "react";

import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import linkedin from './components/linkedin.png'
import github from './components/github.png'

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <Link to="/about" className="title">
        Wesley Nana Davies
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/portfolio/about">About me</NavLink>
        </li>
        <li>
          <NavLink to="/portfolio/contact">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/portfolio/projects">Projects</NavLink>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/wesley-nana-davies-57116a287/" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="Logo" className="logo" />
          </a>
        </li>
        <li>
          <a href="https://github.com/WesLeeO" target="_blank" rel="noopener noreferrer">
            <img src={github} alt="Logo" className="logo" />
          </a>
        </li>
      </ul>
    
      
    </nav>
  );
};