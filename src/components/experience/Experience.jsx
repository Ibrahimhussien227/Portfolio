import React from "react";
import "./experience.css";
import { SiTypescript } from "react-icons/si";
import { AiOutlineHtml5 } from "react-icons/ai";
import { DiCss3Full } from "react-icons/di";
import { BsGithub } from "react-icons/bs";
import { IoLogoJavascript } from "react-icons/io";
import { BsBootstrap } from "react-icons/bs";
import { SiMaterialui } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { SiMobx } from "react-icons/si";
import { SiWebpack } from "react-icons/si";
import { SiJest } from "react-icons/si";

const Experience = () => {
  return (
    <section id="experience">
      <h2>My Experience</h2>
      <h5>What Skills I have</h5>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <AiOutlineHtml5 className="experience__details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <DiCss3Full className="experience__details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <BsGithub className="experience__details-icon" />
              <div>
                <h4>Git</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <IoLogoJavascript className="experience__details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsBootstrap className="experience__details-icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <SiMaterialui className="experience__details-icon" />
              <div>
                <h4>MUI</h4>
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
              <SiRedux className="experience__details-icon" />
              <div>
                <h4>Redux / Redux Toolkit</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <SiMobx className="experience__details-icon" />
              <div>
                <h4>Mobx</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <SiTypescript className="experience__details-icon" />
              <div>
                <h4>TypeScript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <SiWebpack className="experience__details-icon" />
              <div>
                <h4>Webpack</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <SiJest className="experience__details-icon" />
              <div>
                <h4>Jest</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
