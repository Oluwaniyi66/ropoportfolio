import React from "react";
import IMG1 from "../assets/oyo.jpg";
import IMG2 from "../assets/delta.jpg";
import IMG3 from "../assets/kwara.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Oyo state data managgement solution",
    github: "https://github.com/Prunedge-Dev-Team/mdm-web",
    demo: "https://smartcard.oyostate.gov.ng/verify",
  },
  {
    id: 2,
    image: IMG2,
    title: "Delta state e-procurement platform",
    github: "https://github.com/Prunedge-Dev-Team/eprocurement-delta-web",
    demo: "https://eprocurement.deltappc.dl.gov.ng/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Kwara state e-procurement",
    github: "https://github.com/Prunedge-Dev-Team/web-kwara-eprocurement",
    demo: "https://kwppa.kwarastate.gov.ng/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
