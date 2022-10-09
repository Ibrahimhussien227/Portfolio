import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.png";
// import IMG3 from "../../assets/portfolio3.jpg";
// import IMG4 from "../../assets/portfolio4.jpg";
// import IMG5 from "../../assets/portfolio5.png";
// import IMG6 from "../../assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "URL shortner using Firebase and MUI",
    github: "https://github.com/Ibrahimhussien227/url-shorter",
    demo: "https://shorter-46cd7.web.app/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Clone Youtube",
    github: "https://github.com/Ibrahimhussien227/yt-app-training",
    demo: "https://lucky-froyo-539484.netlify.app/",
  },
  // {
  //   id: 3,
  //   image: IMG3,
  //   title: "Figma dashboard UI kit for data design web apps",
  //   github: "https://github.com",
  //   demo: "https://dribble.com",
  // },
  // {
  //   id: 4,
  //   image: IMG4,
  //   title: "Maintaining task and tracking progress",
  //   github: "https://github.com",
  //   demo: "https://dribble.com",
  // },
  // {
  //   id: 5,
  //   image: IMG5,
  //   title: "Crypto Currency Dashboard & Financial Visulization",
  //   github: "https://github.com",
  //   demo: "https://dribble.com",
  // },
  // {
  //   id: 6,
  //   image: IMG6,
  //   title: "Crypto Currency Dashboard & Financial Visulization",
  //   github: "https://github.com",
  //   demo: "https://dribble.com",
  // },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
      <h5>My Recent Work</h5>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn">
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
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
