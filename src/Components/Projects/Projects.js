import React, { Component } from "react";

import "./Projects.scss";
import Header from "../Header/Header";
import Project from "./Project/Project";
import Icons from "../Landing/Info/Icons/Icons";

export class Projects extends Component {
  render() {
    return (
      <div className="Projects">
        <Icons />
        <div className="projectContainer">
          <Header />
          <Project />
        </div>
      </div>
    );
  }
}

export default Projects;
