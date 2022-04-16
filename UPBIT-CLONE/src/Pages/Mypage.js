import React from "react";
import withSize from "../Container/withSize";
import "bootstrap/dist/css/bootstrap.min.css";
import Mypage from "../Components/Mypage/Mypage"
import Header from "../Components/Global/Header";
import Footer from "../Components/Global/Footer"

const Profile = ({ match, widthSize, heightSize }) => {
    const isHomeURL = match.path === "/mypage";
  
    return (
      <>
      <Header/>
      <Mypage/>
      <Footer/>
      </>
    );
  };
  
  export default withSize()(React.memo(Profile));