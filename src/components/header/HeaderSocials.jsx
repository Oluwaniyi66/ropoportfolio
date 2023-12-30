import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { FaSquareXTwitter } from "react-icons/fa6";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://linkedin.com" target="_blank">
        <FaLinkedin />
      </a>
      <a href="https://github.com" target="_blank">
        <IoLogoGithub />
      </a>
      <a href="https://twitter.com" target="_blank">
        <FaSquareXTwitter />
      </a>
    </div>
  );
}

export default HeaderSocials
