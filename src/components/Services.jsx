import React from "react";
import { RiCheckFill } from "react-icons/ri";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>My Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="services__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <RiCheckFill className="service__list-icon" />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <RiCheckFill className="service__list-icon" />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <RiCheckFill className="service__list-icon" />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <RiCheckFill className="service__list-icon" />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <RiCheckFill className="service__list-icon" />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="services__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <RiCheckFill className="service__list-icon" />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <RiCheckFill className="service__list-icon" />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <RiCheckFill className="service__list-icon" />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <RiCheckFill className="service__list-icon" />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <RiCheckFill className="service__list-icon" />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
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
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <RiCheckFill className="service__list-icon" />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <RiCheckFill className="service__list-icon" />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <RiCheckFill className="service__list-icon" />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <RiCheckFill className="service__list-icon" />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;