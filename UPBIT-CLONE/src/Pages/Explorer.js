import React from "react";
import styled from "styled-components";
import withSize from "../Container/withSize";
import { viewSize } from "../styles/theme";

import Header from "../Components/Global/Header";
import Footer from "../Components/Global/Footer";
import BlockInfoHeader from "../Components/Explorer/BlockInfoHeader";

const St = {
  ExplorerContentContainer: styled.div`
    /* display: flex; */
    justify-content: center;
    max-width: 1500px;
    margin: 0 auto;
    margin-top: 10px;
    margin-bottom: 50px;
    width: 100%;
    height: 100%;
    border: 1px solid black;

    @media ${({ theme }) => theme.tablet} {
      margin-top: 0;
      margin-bottom: 0;
    }
  `,
  BlockContainer: styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 1500px;
    margin: 0 auto;
    margin-top: 10px;
    margin-bottom: 50px;
    width: 100%;
    height: 100%;
    border: 1px solid black;

    @media ${({ theme }) => theme.tablet} {
      /* margin-top: 0; */
      /* margin-bottom: 0; */
      /* align-items: center; */
    }
  `,
  BlockInfoContainer: styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 95%;
    max-width: 950px;
    border: 1px solid black;

    @media ${(props) => (props.isRootURL ? props.theme.tablet : true)} {
      display: none;
    }
  `,
  BlockMarketPriceContainer: styled.article`
    display: none;
    position: -webkit-sticky; /* 사파리  */
    position: sticky;
    top: 70px;
    height: 100%;
    width: 100%;
    background-color: white;
    overflow: hidden;

    @media ${({ theme }) => theme.desktop} {
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
    }
  `
};

const Explorer = ({ match, widthSize, heightSize }) => {
  const isExplorerURL = match.path === "/explorer";

  return (
    <>
      <Header isExplorerURL={isExplorerURL} />
      <St.ExplorerContentContainer>
        <BlockInfoHeader />
        <St.BlockContainer>
          <St.BlockInfoContainer>
            block info test
          </St.BlockInfoContainer>
          <St.BlockMarketPriceContainer>
            block market price container
          </St.BlockMarketPriceContainer>
        </St.BlockContainer>
      </St.ExplorerContentContainer>
      <Footer />
    </>
  );
};

export default withSize()(React.memo(Explorer));