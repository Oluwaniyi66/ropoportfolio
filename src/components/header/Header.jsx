import React from "react";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello there, i'm</h5>
        <h1>Ropo Oluwaniyi</h1>
        <h5 className="text-light"> I am a Frontend Developer</h5>
        <h5 className="text-light"> Web || DevOps</h5>
        <CTA />
        <HeaderSocials />

        <div className="myimage">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
