import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { FaSquareXTwitter } from "react-icons/fa6";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="www.linkedin.com/in/oluwaniyiropo" target="_blank">
        <FaLinkedin />
      </a>
      <a href="https://github.com/Oluwaniyi66" target="_blank">
        <IoLogoGithub />
      </a>
      <a href="https://twitter.com/oluwaniyiropo" target="_blank">
        <FaSquareXTwitter />
      </a>
    </div>
  );
}

export default HeaderSocials
