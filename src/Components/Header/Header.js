import React, { Component } from "react";
import Nav from "./Nav/Nav";

import { Link } from "react-router-dom";

import "./Header.scss";
import Burger from "./Burger/Burger";

class Header extends Component {
  state = {
    optClass: "top",
    burger: false
  };

  componentDidMount = () => {
    window.addEventListener("scroll", () => {
      window.scrollY >= 1
        ? this.setState({ optClass: "scroll" })
        : this.setState({ optClass: "top" });
    });
  };

  onBurger = () => {
    this.setState({ burger: !this.state.burger });
  };

  render() {
    const { optClass, burger } = this.state;

    return (
      <div
        className={`header`}
        style={
          optClass === "top"
            ? { boxShadow: "none" }
            : { boxShadow: "1px 7px 80px" }
        }
      >
        <Burger onBurger={this.onBurger} burger={burger} />
        <div className="navBar">
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
      </div>
    );
  }
}

export default Header;
