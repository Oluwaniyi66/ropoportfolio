import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        ROPO
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Service</a>
        </li>
        <li>
          <a href="#portfolio"></a>
        </li>
        <li>
          <a href="#testimonials"></a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="http://www.linkedin.com/in/oluwaniyiropo">
          <FaLinkedinIn />
        </a>
        <a href="https://twitter.com/oluwaniyiropo">
          <FaXTwitter />
        </a>
        <a href="https://github.com/Oluwaniyi66">
          <IoLogoGithub />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Ropo All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
