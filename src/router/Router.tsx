import React from "react";
import { Route, Switch } from "react-router-dom";
import Detail from "../pages/Detail";
import Home from "../pages/Home";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/detail/:city" exact component={Detail} />
    </Switch>
  );
};

export default Routes;
