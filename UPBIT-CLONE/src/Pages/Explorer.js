import React from "react";
import styled from "styled-components";
import withSize from "../Container/withSize";
import { viewSize } from "../styles/theme";

import Header from "../Components/Global/Header";
import CoinInfoHeader from "../Components/Main/CoinInfoHeader";
import Footer from "../Components/Global/Footer";

const ExplorerSt = {
  ExplorerContentContainer: styled.div`
  display: flex;
    justify-content: center;
    max-width: 1500px;
    margin: 0 auto;
    margin-top: 10px;
    margin-bottom: 50px;
    width: 100%;
    height: 100%;

    @media ${({ theme }) => theme.tablet} {
      margin-top: 0;
      margin-bottom: 0;
    }
  `
  // ,
  // ChartAndTradeContainer: styled.section`
  //   display: flex;
  //   flex-direction: column;
  //   align-items: center;
  //   width: 95%;
  //   max-width: 950px;

  //   @media ${(props) => (props.isRootURL ? props.theme.tablet : true)} {
  //     display: none;
  //   }
  // `
};

const Explorer = ({ match, widthSize, heightSize }) => {
  const isExplorerURL = match.path === "/explorer";

  return (
    <>
      <Header isExplorerURL={isExplorerURL} />
      <ExplorerSt.ExplorerContentContainer>
        ㅎㅇㄹ
      </ExplorerSt.ExplorerContentContainer>
      <Footer />
    </>
  );
};

export default withSize()(React.memo(Explorer));