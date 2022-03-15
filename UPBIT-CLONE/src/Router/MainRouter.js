import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Main from "../Pages/Main";
import Home from "../Pages/Home";
import Userlogin from "../Pages/userlogin";
import UserSignup from "../Pages/usersignup";

import Mypage from "../Pages/Mypage";
import Api from "../Pages/Api";
import Getnetworkinfo from "../Components/API/getnetworkinfo";
import Getblockcount from "../Components/API/getblockcount";
import Getnewaddress from "../Components/API/getnewaddress";
import Listaccounts from "../Components/API/listaccounts";
import Getblockhash from "../Components/API/getblockhash";
import Getblock from "../Components/API/getblock";

const MainRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/trade" component={Main} />
      <Route exact path="/home" component={Main} />
      <Route exact path="/userlogin" component={Userlogin} />
      <Route exact path="/usersignup" component={UserSignup} />
      <Route exact path="/mypage" component={Mypage} />
      <Route exact path="/api" component={Api} />
      <Route exact path="/getnetworkinfo" component={Getnetworkinfo} />
      <Route exact path="/getblockcount" component={Getblockcount} />
      <Route exact path="/getnewaddress" component={Getnewaddress} />
      <Route exact path="/listaccounts" component={Listaccounts} />
      <Route exact path="/getblockhash" component={Getblockhash} />
      <Route exact path="/getblock" component={Getblock} />
    </Switch>
  );
};

export default MainRouter;
