import React from "react";
import withSize from "../Container/withSize";
import "bootstrap/dist/css/bootstrap.min.css";
import Mypage from "../Components/Mypage/Mypage"

const Profile = ({ match, widthSize, heightSize }) => {
    const isHomeURL = match.path === "/mypage";
  
    return (
      <>
      <Mypage/>
      </>
    );
  };
  
  export default withSize()(React.memo(Profile));