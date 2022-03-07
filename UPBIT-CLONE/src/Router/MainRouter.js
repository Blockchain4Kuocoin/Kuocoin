import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Main from "../Pages/Main";
import Home from "../Pages/Home";
import Userlogin from "../Pages/userlogin";

import Mypage from "../Pages/Mypage";

const MainRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/trade" component={Main} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/userlogin" component={Userlogin} />
      <Route exact path="/mypage" component={Mypage} />
    </Switch>
  );
};

export default MainRouter;
