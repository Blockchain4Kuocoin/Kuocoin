import React from "react";
import styled from "styled-components";
import withSize from "../Container/withSize";
import { viewSize } from "../styles/theme";

import Header from "../Components/Global/Header";
import Footer from "../Components/Global/Footer";
import SearchBar from "../Components/Explorer/SearchBar";

const St = {
  ExplorerContentContainer: styled.div`
    max-width: 1400px;
    margin: 5vh auto;
    width: 100%;
    height: 100%;
    @media ${({ theme }) => theme.tablet} {
      margin-top: 0;
      margin-bottom: 0;
    }
  `,
}

const Explorer = ({ match, widthSize, heightSize }) => {
  const isExplorerURL = match.path === "/explorer";

  return (
    <>
      <Header isExplorerURL={isExplorerURL}></Header>
      <St.ExplorerContentContainer>
        <SearchBar />
      </St.ExplorerContentContainer>
      <Footer />
    </>
  );
};

export default withSize()(React.memo(Explorer));