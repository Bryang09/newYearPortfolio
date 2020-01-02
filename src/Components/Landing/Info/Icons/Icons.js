import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faFile, faEnvelope } from "@fortawesome/free-solid-svg-icons";

import "./Icons.scss";

const Icons = () => {
  return (
    <div className="icons">
      <a href={"https://github.com/Bryang09"}>
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a href={"https://www.linkedin.com/in/bryan-gonzalez09/"}>
        <FontAwesomeIcon icon={faLinkedinIn} />
      </a>
      <a href={"mailto:bryan.gonzalez1020.bg@gmail.com"}>
        <FontAwesomeIcon icon={faEnvelope} />
      </a>
      <a href={"resume.pdf"}>
        <FontAwesomeIcon icon={faFile} />
      </a>
      <div className="line"></div>
    </div>
  );
};

export default Icons;
