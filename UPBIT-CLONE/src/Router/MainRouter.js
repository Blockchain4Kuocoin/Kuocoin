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
<<<<<<< HEAD
import Explorer from "../Pages/Explorer";
import ExplorerMain from "../Pages/ExplorerMain";
import BlocksInfo from "../Pages/BlocksInfo";
=======
import Getblockhash from "../Components/API/getblockhash";
import Getblock from "../Components/API/getblock";
>>>>>>> 866a0be64233036563444c7b2a9a93112097e0ce

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
<<<<<<< HEAD
      <Route exact path="/blockname" component={BlocksInfo} />
      {/* 블록 세부페이지(blcokheight등등) :blockname 혹은 db에 저장되는 컬럼명으로 바꿔야함*/}
      <Route exact path="/explorer/blockname/blocknumberer" component={Explorer} />
      <Route exact path="/explorer" component={ExplorerMain} />  메인홈 작업후 위에 줄은 지움 
      {/* <Route exact path="/explorer/:blockname/block/:blocknumber" component={Explorer} /> :뒤 db컬럼명에 따라 달라짐 */}
=======
      <Route exact path="/getblockhash" component={Getblockhash} />
      <Route exact path="/getblock" component={Getblock} />
>>>>>>> 866a0be64233036563444c7b2a9a93112097e0ce
    </Switch>
  );
};

export default MainRouter;
