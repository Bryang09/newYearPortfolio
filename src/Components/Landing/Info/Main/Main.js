import React from "react";

import "./Main.scss";

const Main = () => {
  return (
    <div className="main">
      <h4>hello, my name is</h4>
      <h1>Bryan Gonzalez</h1>
      <h2>Front End Developer</h2>
      <h5>
        Front end developer located in Houston, TX <br />
        specializing in the MERN stack.
      </h5>
      <div style={{ display: "flex" }}>
        <a href="mailto:bryan.gonzalez1020.bg@gmail.com">Get in touch</a>{" "}
      </div>
    </div>
  );
};

export default Main;
