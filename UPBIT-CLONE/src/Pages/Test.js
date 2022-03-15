import React from "react";
import withSize from "../Container/withSize";
import "bootstrap/dist/css/bootstrap.min.css";


const testapi = ({ match, widthSize, heightSize }) => {
    const isHomeURL = match.path === "/test";
  
    return (
      <>
      <Mypage/>
      </>
    );
  };
  
  export default withSize()(React.memo(testapi));