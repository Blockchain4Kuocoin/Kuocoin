import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Main from "../Pages/Main";
import Home from "../Pages/Home";
import Mypage from "../Pages/Mypage";

const MainRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/trade" component={Main} />
<<<<<<< HEAD
      <Route exact path="/home" component={Home} />
      <Route exact path="/mypage" component={Mypage} />
=======
      {/* <Route exact path="/:blockname" component={} /> 블록 세부페이지(blcokheight등등) */}
      <Route exact path="/explorer" component={Explorer} />
      {/* <Route exact path="/explorer" component={ExplorerMain} />  메인홈 작업후 11번째줄은 지움*/} 
      {/* <Route exact path="/explorer/:blockname/block/:blocknumber" component={Explorer} /> :뒤 db컬럼명에 따라 달라짐 */}
>>>>>>> a3578f502ff4200d10e8e25281e2e8a9065860d3
    </Switch>
  );
};

export default MainRouter;
