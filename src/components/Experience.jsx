import React from "react";
import { FaHtml5 } from "react-icons/fa6";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { TbBrandNextjs } from "react-icons/tb";
import { SiRedux } from "react-icons/si";
import { SiReactquery } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { FaWordpressSimple } from "react-icons/fa6";
import { FaLinux } from "react-icons/fa6";
import { FaPython } from "react-icons/fa6";
import { SiDjango } from "react-icons/si";
import { FaPhp } from "react-icons/fa6";
import { FaLaravel } from "react-icons/fa6";
import { SiKubernetes } from "react-icons/si";
import { IoLogoDocker } from "react-icons/io5";
import { FaJenkins } from "react-icons/fa6";
import { BsFillPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h2>My Technical Skills</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <FaHtml5 className="experience__details-icon" />
              <div>
                <h4>Html</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <IoLogoCss3 className="experience__details-icon" />
              <div>
                <h4>Css</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <IoLogoJavascript className="experience__details-icon" />
              <div>
                <h4>Javascript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <SiTypescript className="experience__details-icon" />
              <div>
                <h4>TypeScript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <FaReact className="experience__details-icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <TbBrandNextjs className="experience__details-icon" />
              <div>
                <h4>Next Js</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <SiRedux className="experience__details-icon" />
              <div>
                <h4>Redux</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <SiReactquery className="experience__details-icon" />
              <div>
                <h4>React Query</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <FaGitAlt className="experience__details-icon" />
              <div>
                <h4>Git</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <FaWordpressSimple className="experience__details-icon" />
              <div>
                <h4>WordPress</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <FaLinux className="experience__details-icon" />
              <div>
                <h4>Linux</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>{" "}
            <article className="experience__details">
              <FaPython className="experience__details-icon" />
              <div>
                <h4>Python</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <SiDjango className="experience__details-icon" />
              <div>
                <h4>Django</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <FaPhp className="experience__details-icon" />
              <div>
                <h4>PHP</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <FaLaravel className="experience__details-icon" />
              <div>
                <h4>Laravel</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__devops">
          <h3>Development Operation</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>AWS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Azure</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <SiKubernetes className="experience__details-icon" />
              <div>
                <h4>Kubernetes</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Terraform</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <IoLogoDocker className="experience__details-icon" />
              <div>
                <h4>Docker</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <FaJenkins className="experience__details-icon" />
              <div>
                <h4>Jenkins</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
