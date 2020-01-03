import React from "react";

import { Switch, Route } from "react-router-dom";

import Landing from "./Components/Landing/Landing";
import Projects from "./Components/Projects/Projects";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route path="/projects" component={Projects} />
    </Switch>
  );
};

export default Routes;
