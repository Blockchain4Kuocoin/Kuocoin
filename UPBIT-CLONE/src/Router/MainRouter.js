import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Main from "../Pages/Main";
import Home from "../Pages/Home";
import Userlogin from "../Pages/userlogin";
import UserSignup from "../Pages/usersignup";

import Mypage from "../Pages/Mypage";

const MainRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/trade" component={Main} />
      <Route exact path="/home" component={Main} />
      <Route exact path="/userlogin" component={Userlogin} />
      <Route exact path="/usersignup" component={UserSignup} />
      <Route exact path="/mypage" component={Mypage} />
    </Switch>
  );
};

export default MainRouter;
