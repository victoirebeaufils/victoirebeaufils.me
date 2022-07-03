import React from "react";
import { GoMarkGithub } from "react-icons/go";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "gatsby";
import "./Footer.css";

const Footer = (props) => {
  return (
    <div className="footer">
      <div class="col">
        <ul>
          <li> Victoire Beaufils</li>
          <li>victoire.beaufil@gmail.com </li>
          <li class="icons">
            {" "}
            <a href="https://github.com/victoirebeaufils/" target="_blank">
              <GoMarkGithub size={20}></GoMarkGithub>
            </a>
            <a
              href="https://www.linkedin.com/in/victoirebeaufils/"
              target="_blank"
            >
              <FaLinkedin size={20}></FaLinkedin>
            </a>
          </li>
        </ul>
      </div>
      <div class="col">
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects"> Work </a>
          </li>
          <li>
            {" "}
            <a href="/resume.pdf" target="_blank">
              Resume
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
