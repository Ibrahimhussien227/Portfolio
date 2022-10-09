import React, { useState } from "react";
import "./qualification.css";
import { MdCastForEducation, MdWorkOutline } from "react-icons/md";
import { IoCalendarOutline } from "react-icons/io5";

const Qualification = () => {
  const [toggle, setToggle] = useState(1);
  return (
    <section id="qualification">
      <h2>Qualification</h2>
      <h5>My personal journey</h5>

      <div className="container qualification__container">
        <div className="qualification__tabs">
          <div
            className={
              toggle === 1
                ? "qualification__button qualification__active"
                : "qualification__button"
            }
            onClick={() => setToggle(1)}
          >
            <MdCastForEducation className="qualification__tabs-icon" />
            <h3>Education</h3>
          </div>
          <div
            className={
              toggle === 2
                ? "qualification__button qualification__active"
                : "qualification__button"
            }
            onClick={() => setToggle(2)}
          >
            <MdWorkOutline className="qualification__tabs-icon" />
            <h3>Work</h3>
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggle === 1
                ? "qualification__content qualification__active"
                : "qualification__content"
            }
          >
            <article className="qualification__details">
              <div>
                <h4>Software Enginner</h4>
                <small className="text-light">KFU - University</small>
                <div className="text-light qualification__detail-icon">
                  <IoCalendarOutline />
                  2019 - 2020
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </article>
            <article className="qualification__details">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h4>JavaScript / CSS</h4>
                <small className="text-light">KFU - University</small>
                <div className="text-light qualification__detail-icon">
                  <IoCalendarOutline />
                  2020 - 2021
                </div>
              </div>
            </article>
            <article className="qualification__details">
              <div>
                <h4>React / Redux</h4>
                <small className="text-light">KFU - University</small>
                <div className="text-light qualification__detail-icon">
                  <IoCalendarOutline />
                  2021 - 2022
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
              </div>
            </article>{" "}
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggle === 2
                ? "qualification__content qualification__active"
                : "qualification__content"
            }
          >
            <article className="qualification__details">
              <div>
                <h4>Frontend Developer ( стажировка )</h4>
                <small className="text-light">FlatStack - Kazan</small>
                <div className="text-light qualification__detail-icon">
                  <IoCalendarOutline />
                  2021
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </article>
            <article className="qualification__details">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
              </div>

              <div>
                <h4>Frontend Developer ( стажировка )</h4>
                <small className="text-light">Совкомбанк - Kazan </small>
                <div className="text-light qualification__detail-icon">
                  <IoCalendarOutline />
                  2022
                </div>
              </div>
            </article>{" "}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
