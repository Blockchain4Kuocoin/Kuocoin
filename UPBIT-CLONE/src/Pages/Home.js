import React from "react";
import withSize from "../Container/withSize";
import Header from "../Components/Global/Header";
import Footer from "../Components/Global/Footer";
import HomeBackimg from "../Components/Home/HomeBackimg";
import "bootstrap/dist/css/bootstrap.min.css";


const Home = ({ match, widthSize, heightSize }) => {
  const isHomeURL = match.path === "/home";

  return (
    <>
    <Header/>
    <HomeBackimg/>
    <Footer/>
    </>
  );
};

export default withSize()(React.memo(Home));
