import React, { Component } from "react";

import "./Landing.scss";

import Header from "./Header/Header";

export class Landing extends Component {
  render() {
    return (
      <div className="Landing">
        <div className="container">
          <Header />
        </div>
      </div>
    );
  }
}

export default Landing;
