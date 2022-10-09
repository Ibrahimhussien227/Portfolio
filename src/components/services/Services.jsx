import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h2>Services</h2>
      <h5>What I Offer</h5>

      <div className="services__container">
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Simple Scalability</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>React JS Development</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>The latest technologies</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Faster development times & time to market</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>SPA development</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>HTML & CSS Responsive Web Design</p>
            </li>
          </ul>
        </article>
        {/* WEB DEVELOPMENT */}
      </div>
    </section>
  );
};

export default Services;
