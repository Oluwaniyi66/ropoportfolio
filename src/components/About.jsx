import React from "react";
// import ME from "../assets/RopoDevPic.jpeg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import { data } from "./Portfolio";


const About = () => {
  return (
    <section id="about">
      <h5>Get to Know me</h5>
      <h2>About me</h2>

      <div className="container about__container">
        
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>2+ Years working experience</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>{ data?.length} Projects</small>
            </article>
          </div>

          <p>
            Hello! I'm Ropo Oluwaniyi, a passionate web developer driven by the
            artistry and functionality of coding. With hands-on experience, I
            craft responsive, user-centric websites that merge innovation with
            seamless user experiences.
            <br />
            I'm also a DevOps Engineer enthusiast dedicated to orchestrating
            seamless software delivery pipelines and optimizing infrastructure
            performance.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
