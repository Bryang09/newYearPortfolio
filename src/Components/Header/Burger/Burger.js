import React from "react";

import { Link } from "react-router-dom";
import Nav from "../Nav/Nav";

const Burger = props => {
  const { burger, onBurger } = props;
  return (
    <div className={burger ? "Burger active" : "Burger"}>
      <div className="burgerHeader">
        <div className="logoContainer">
          <Link to="/">
            <div className="logo" />
          </Link>
        </div>

        <div className="burgerContainer">
          <div
            onClick={onBurger}
            className={burger ? "burgerIcon activeIcon" : "burgerIcon"}
          >
            <div className="line line1"></div>
            <div className="line line2"></div>
            <div className="line line3"></div>
          </div>
        </div>
      </div>
      <div className="navItems">
        <Nav />
      </div>
    </div>
  );
};

export default Burger;
