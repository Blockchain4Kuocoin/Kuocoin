import React from "react";
import { Switch, Route } from "react-router-dom";
import Main from "../Pages/Main";
import Explorer from "../Pages/Explorer";

const MainRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/trade" component={Main} />
      <Route exact path="/explorer" component={Explorer} />
    </Switch>
  );
};

export default MainRouter;
