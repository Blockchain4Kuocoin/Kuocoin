import React from "react";
import styled from "styled-components";
import withSize from "../Container/withSize";
import { viewSize } from "../styles/theme";

import Header from "../Components/Global/Header";
import Footer from "../Components/Global/Footer";
import BlockNumInfoHeader from "../Components/Explorer/BlockNumInfoHeader"
import BlockHeadAd from "../Components/Explorer/BlockHeadAd";
import BlockNumber from "../Components/Explorer/BlockNumber";
import BlockHash from "../Components/Explorer/BlockHash";
import BlockGenralInfo from "../Components/Explorer/BlockGenralInfo";
import ThisBlockTransactionsInfo from "../Components/Explorer/BlockTransactionsInfo";
import SearchBar from "../Components/Explorer/SearchBar";
import ExplorerContainer from "../styles/ExplorerContainer";

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
  BlockHeadContainer: styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 2% 0 1% 0;
  `,
  BlockContainer: styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 auto 50px auto;
    width: 100%;
    height: 100%;
    /* @media ${({ theme }) => theme.tablet} { */
      /* margin-top: 0; */
      /* margin-bottom: 0; */
      /* align-items: center; */
    /* } */
  `,
  BlockInfoContainer: styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 1500px;
    margin: 10px 0;
    @media ${(props) => (props.isRootURL ? props.theme.tablet : true)} {
      display: none;
    }
  `,
  BlockNumberContainer: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    /* padding: 10px; */
    margin: 10px 0;
  `,
  BlockHashContainer: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background-color: white;
    padding: 4%;
    margin: 4% 0;
    color: gray;
    border-radius: 10px;
    box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.05);
  `,
  BlockGeneralInfoContainer: styled(ExplorerContainer)`
    font-size: larger;
    font-weight: 500;
    line-height: 30px;
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
        <SearchBar />
        <St.BlockHeadContainer>
          <BlockNumInfoHeader />
          <BlockHeadAd />
        </St.BlockHeadContainer>
        <St.BlockContainer>
          <St.BlockInfoContainer>
            <St.BlockNumberContainer>
              <BlockNumber />
            </St.BlockNumberContainer>
            <St.BlockHashContainer>
              <BlockHash />
            </St.BlockHashContainer>
            <St.BlockGeneralInfoContainer width="100%">
              <BlockGenralInfo />
            </St.BlockGeneralInfoContainer>
          </St.BlockInfoContainer>
          {/* <St.BlockMarketPriceContainer>
            block market price container
          </St.BlockMarketPriceContainer> */}
        </St.BlockContainer>
        <ThisBlockTransactionsInfo />
      </St.ExplorerContentContainer>
      <Footer />
    </>
  );
};

export default withSize()(React.memo(Explorer));