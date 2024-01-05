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
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <RiCheckFill className="service__list-icon" />
              <p>Responsive Web Design</p>
            </li>
            <li>
              <RiCheckFill className="service__list-icon" />
              <p>Custom Website Development</p>
            </li>
            <li>
              <RiCheckFill className="service__list-icon" />
              <p>Web Application Development</p>
            </li>
            <li>
              <RiCheckFill className="service__list-icon" />
              <p>Frontend Optimization and Support</p>
            </li>
            <li>
              <RiCheckFill className="service__list-icon" />
              <p>
                E-commerce Website Development SEO-Friendly Web Development
                Integration with Third-Party Services
              </p>
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
              <p>
                Continuous Integration and Continuous Deployment (CI/CD)
                Infrastructure as Code (IaC)
                Cloud Infrastructure Management
              </p>
            </li>
            <li>
              <RiCheckFill className="service__list-icon" />
              <p>
                Containerization and Orchestration
                Performance Tuning and Optimization
              </p>
            </li>
            <li>
              <RiCheckFill className="service__list-icon" />
              <p>Disaster Recovery and Backup Strategies</p>
            </li>
            <li>
              <RiCheckFill className="service__list-icon" />
              <p>System Administration and Support Scripting and Automation</p>
            </li>
            <li>
              <RiCheckFill className="service__list-icon" />
              <p>Database Management and Optimization</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
