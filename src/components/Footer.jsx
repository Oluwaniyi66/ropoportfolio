import React from "react";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
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
        <a href="www.facebook.com">
          <FaFacebookF />
        </a>
        <a href="www.twitter.com">
          <FaXTwitter />
        </a>
        <a href="www.instagram.com">
          <FaInstagram />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Ropo All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
