import React, { Component } from "react";
import Icons from "./Icons/Icons";

import "./Info.scss";
import Main from "./Main/Main";

export class Info extends Component {
  render() {
    return (
      <div className="info">
        <Icons />
        <Main />
      </div>
    );
  }
}

export default Info;
