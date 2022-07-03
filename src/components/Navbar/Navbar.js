import React from "react";
import "./Navbar.css";
const Navbar = (props) => {
  return (
    <div class="navbar">
      <div class=" container">
        <p className="brand"> Victoire Beaufils</p>
        <ul className="navigation">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Work</a>
          </li>
          <li>
            <a href="/resume.pdf" target="_blank">
              Resume
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
