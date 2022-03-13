import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Main from "../Pages/Main";
import Home from "../Pages/Home";
import Mypage from "../Pages/Mypage";
import Api from "../Pages/Api";
import Getnetworkinfo from "../Components/API/getnetworkinfo";
import Getblockcount from "../Components/API/getblockcount";
import Getnewaddress from "../Components/API/getnewaddress";
import Listaccounts from "../Components/API/listaccounts";

const MainRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/trade" component={Main} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/mypage" component={Mypage} />
      <Route exact path="/api" component={Api} />
      <Route exact path="/getnetworkinfo" component={Getnetworkinfo} />
      <Route exact path="/getblockcount" component={Getblockcount} />
      <Route exact path="/getnewaddress" component={Getnewaddress} />
      <Route exact path="/listaccounts" component={Listaccounts} />
    </Switch>
  );
};

export default MainRouter;
