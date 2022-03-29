import React from "react";
import withSize from "../Container/withSize";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "../Components/Mypage/MyNavbar";

const MyNav = ({ match, widthSize, heightSize }) => {
    const isHomeURL = match.path === "/navbar";
  
    return (
      <>
      <MyNavbar/>
      </>
    );
  };
  
  export default withSize()(React.memo(MyNav));