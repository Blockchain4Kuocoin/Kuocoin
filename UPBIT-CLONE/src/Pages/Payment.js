import React from "react";
import withSize from "../Container/withSize";
import "bootstrap/dist/css/bootstrap.min.css";
import Payment from "../Components/Payment/Payment";

const Payapi = ({ match, widthSize, heightSize }) => {
    const isHomeURL = match.path === "/payment";
  
    return (
      <>
      <Payment/>
      </>
    );
  };
  
  export default withSize()(React.memo(Payapi));