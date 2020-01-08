import React, { Component } from "react";
import Nav from "./Nav/Nav";

import { Link } from "react-router-dom";

import "./Header.scss";

class Header extends Component {
  state = {
    optClass: "top"
  };

  componentDidMount = () => {
    window.addEventListener("scroll", () => {
      window.scrollY >= 1
        ? this.setState({ optClass: "scroll" })
        : this.setState({ optClass: "top" });
    });
  };

  render() {
    console.log(this.state.optClass);
    console.log(window.scrollY);

    const { optClass } = this.state;

    return (
      <div
        className={`header`}
        style={
          optClass === "top"
            ? { boxShadow: "none" }
            : { boxShadow: "1px 7px 80px" }
        }
      >
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
  }
}

export default Header;
