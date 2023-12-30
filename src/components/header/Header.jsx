import React from "react";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello there! i'm</h5>
        <h1>Ropo Oluwaniyi</h1>
        <h5 className="text-light"> I am a Frontend Developer</h5>
        <h5 className="text-light"> Web || DevOps</h5>
        <CTA />
        <HeaderSocials />

        

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
