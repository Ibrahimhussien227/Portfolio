import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiDribbble } from "react-icons/fi";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/ibrahim-ali-ba3750242"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/Ibrahimhussien227?tab=repositories"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub />
      </a>
      <a href="https://dribble.com" target="_blank" hidden rel="noreferrer">
        <FiDribbble />
      </a>
    </div>
  );
};

export default HeaderSocials;
