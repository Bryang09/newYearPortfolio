import React from "react";

import "./Project.scss";

import { data } from "./ProjectData";

const Project = () => {
  const projectData = data.map((res, i) => {
    const { name, desc, img, ghLink, projectLink, heroku, tech } = res;
    return (
      <div className="project" key={i}>
        <div className="imgContainer">
          <div className="img" style={{ backgroundImage: `url(/${img})` }}>
            <div className="border"></div>
          </div>
        </div>
        <div className="text">
          <h3>{name}</h3>
          <div className="textContainer">
            <h4>{desc}</h4>
            {heroku ? (
              <span>* Please allow loading time for Heroku app.</span>
            ) : null}
          </div>{" "}
          <div className="tech">
            {tech.map((res, i) => {
              return <h5 key={i}>{res}</h5>;
            })}
          </div>
          <div className="links">
            <h4>
              <a href={projectLink}>Demo</a>
            </h4>
            <h4>
              <a href={ghLink}>Code</a>{" "}
            </h4>
          </div>
        </div>
      </div>
    );
  });
  return <div className="projectSection">{projectData}</div>;
};

export default Project;
