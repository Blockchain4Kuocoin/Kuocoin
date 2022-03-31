import React from "react";
import styled from "styled-components";
import withSize from "../Container/withSize";
import { viewSize } from "../styles/theme";

import Header from "../Components/Global/Header";
import Footer from "../Components/Global/Footer";
import BlockHeadAd from "../Components/Explorer/BlockHeadAd";
import SearchBar from "../Components/Explorer/SearchBar";
import BlockInfoHeader from "../Components/Explorer/BlockInfoHeader";
import BlocksInfo from "../Components/Explorer/BlocksInfo";
import ThisBlockTransactionsInfo from "../Components/Explorer/BlockTransactionsInfo";

const St = {
  ExplorerContentContainer: styled.div`
    max-width: 1400px;
    margin: 5vh auto;
    width: 100%;
    height: 100%;
    @media ${({ theme }) => theme.tablet} {
      margin: 5vh 20px;
    }
  `,
  DispFlex: styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 5vh 0;
  `,
  BlockMarketPriceContainer: styled.article`
    /* position: -webkit-sticky; 사파리  */
    height: 40%;
    width: 22%;
    background-color: white;
    margin: 10px;
    border: 1px solid black;
       /* overflow: hidden; */
    /* @media ${({ theme }) => theme.desktop} {
      display: block;
      max-width: 400px;
      height: ${({ heightSize }) => `${heightSize}px`};
      margin-left: 10px;
    }
    @media ${({ theme, isRootURL }) => (!isRootURL ? theme.mobileM : true)} {
      display: none;
    }
    @media ${({ theme, isRootURL }) => (isRootURL ? theme.tablet : true)} {
      display: block;
      margin-top: 0;
      margin-bottom: 0;
      height: ${({ heightSize }) =>
        `${heightSize + 80}px`}; // 모바일 풀 화면을 위해 다시 80px 더해줌
    } */
  `,
};

const Explorer = ({ match, widthSize, heightSize }) => {

  return (
    <>
      <Header/>
      <St.ExplorerContentContainer>
        <St.DispFlex>
          <SearchBar />
          <BlockHeadAd />
        </St.DispFlex>
        <BlockInfoHeader/>
        <BlocksInfo />
        <ThisBlockTransactionsInfo/>
      </St.ExplorerContentContainer>
      <Footer />
    </>
  );
};

export default withSize()(React.memo(Explorer));