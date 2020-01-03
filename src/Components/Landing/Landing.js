import React, { Component } from "react";

import "./Landing.scss";

import Header from "../Header/Header";
import Info from "./Info/Info";

export class Landing extends Component {
  render() {
    return (
      <div className="Landing">
        <div className="container">
          <Header />
          <Info />
        </div>
      </div>
    );
  }
}

export default Landing;
