import React from "react";
import { RiCheckFill } from "react-icons/ri";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>My Stack</h2>

      <div className="container services__container">
        <article className="service">
          <div className="services__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <RiCheckFill className="service__list-icon" />
              <p>I am a reactJs Developer</p>
            </li>
            <li>
              <RiCheckFill className="service__list-icon" />
              <p>HTML CSS JAVASCRIPT</p>
            </li>
            <li>
              <RiCheckFill className="service__list-icon" />
              <p>React JS, Next JS, </p>
            </li>
            <li>
              <RiCheckFill className="service__list-icon" />
              <p>
                React-Query, Redux 
              </p>
            </li>
            <li>
              <RiCheckFill className="service__list-icon" />
              <p>TailWind and Material UI</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="services__head">
            <h3>DevOps</h3>
          </div>

          <ul className="service__list">
            <li>
              <RiCheckFill className="service__list-icon" />
              <p>Kubernetes</p>
            </li>
            <li>
              <RiCheckFill className="service__list-icon" />
              <p>Terraform</p>
            </li>
            <li>
              <RiCheckFill className="service__list-icon" />
              <p>Jenkins</p>
            </li>
            <li>
              <RiCheckFill className="service__list-icon" />
              <p>AWS and Azure</p>
            </li>
            <li>
              <RiCheckFill className="service__list-icon" />
              <p>Python</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
