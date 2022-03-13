import React from "react";
import { Switch, Route } from "react-router-dom";
import Main from "../Pages/Main";
import Explorer from "../Pages/Explorer";

const MainRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/trade" component={Main} />
      {/* <Route exact path="/:blockname" component={} /> 블록 세부페이지(blcokheight등등) */}
      <Route exact path="/explorer" component={Explorer} />
      {/* <Route exact path="/explorer" component={ExplorerMain} />  메인홈 작업후 11번째줄은 지움*/} 
      {/* <Route exact path="/explorer/:blockname/block/:blocknumber" component={Explorer} /> :뒤 db컬럼명에 따라 달라짐 */}
    </Switch>
  );
};

export default MainRouter;
