import React from "react";
import "./footer.css";
import { FiInstagram } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";

const Footer = () => {
  return (
    <footer>
      <a href="/#" className="footer__logo">
        Ibrahim
      </a>

      <ul className="permalinks">
        <li>
          {" "}
          <a href="/#">Home</a>
        </li>

        <li>
          {" "}
          <a href="#about">About</a>
        </li>

        <li>
          {" "}
          <a href="#experience">Experience</a>
        </li>

        <li>
          {" "}
          <a href="#services">Services</a>
        </li>

        <li>
          {" "}
          <a href="#portfolio">Portfolio</a>
        </li>

        <li>
          {" "}
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.instagram.com/ibrahim.hussein_?utm_source=qr">
          <FiInstagram />
        </a>
        <a href="https://github.com/Ibrahimhussien227?tab=repositories">
          <FiGithub />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Ibrahim. All right reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
