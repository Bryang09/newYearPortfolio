import React from "react";
import Nav from "./Nav/Nav";

import { Link } from "react-router-dom";

import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="logoContainer">
        <Link to="/">
          <div className="logo" />
        </Link>
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
