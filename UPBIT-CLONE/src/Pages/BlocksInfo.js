import React from "react";
import styled from "styled-components";
import withSize from "../Container/withSize";
import { viewSize } from "../styles/theme";

import Header from "../Components/Global/Header";
import Footer from "../Components/Global/Footer";

const Explorer = ({ match, widthSize, heightSize }) => {
  const isExplorerURL = match.path === "/blockname";

  return (
    <>
      <Header isExplorerURL={isExplorerURL} />
        11
      <Footer />
    </>
  );
};

export default withSize()(React.memo(Explorer));