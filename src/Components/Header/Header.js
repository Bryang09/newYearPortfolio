import React from "react";
import Nav from "./Nav/Nav";

import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="logoContainer">
        <div className="logo"></div>
      </div>
      <div className="nav">
        <div className="navContainer">
          <Nav />
        </div>
      </div>
    </div>
  );
};

export default Header;
