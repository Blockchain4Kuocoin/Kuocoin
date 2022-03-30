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
import Getblockhash from "../Components/API/getblockhash";
import Getblock from "../Components/API/getblock";
import Explorer from "../Pages/Explorer";
import ExplorerMain from "../Pages/ExplorerMain";
import BlocksInfo from "../Pages/BlocksInfo";
import Userlogin from "../Pages/userlogin";
import UserSignup from "../Pages/usersignup";
import ExplorerSearch from "../Pages/ExplorerSearch";


const MainRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/trade" component={Main} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/mypage" component={Mypage} />
      <Route exact path="/login" component={Userlogin} />
      <Route exact path="/signup" component={UserSignup} />
      <Route exact path="/api" component={Api} />
      <Route exact path="/getnetworkinfo" component={Getnetworkinfo} />
      <Route exact path="/getblockcount" component={Getblockcount} />
      <Route exact path="/getnewaddress" component={Getnewaddress} />
      <Route exact path="/listaccounts" component={Listaccounts} />
      <Route exact path="/getblockhash" component={Getblockhash} />
      <Route exact path="/getblock" component={Getblock} />
      <Route exact path="/login" component={Userlogin} />
      <Route exact path="/signup" component={UserSignup} />
      <Route exact path="/explorer" component={ExplorerMain} />
      <Route exact path="/explorer/kuoscoin/:height" component={Explorer} />
    </Switch>
  );
};

export default MainRouter;
