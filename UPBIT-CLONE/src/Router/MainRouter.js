import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Main from "../Pages/Main";
import Home from "../Pages/Home";

const MainRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/trade" component={Main} />
      <Route exact path="/home" component={Home} />
    </Switch>
  );
};

export default MainRouter;
