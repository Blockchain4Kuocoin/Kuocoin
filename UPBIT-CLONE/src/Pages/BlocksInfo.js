import React from "react";
import styled from "styled-components";
import withSize from "../Container/withSize";
import { viewSize } from "../styles/theme";

import Header from "../Components/Global/Header";
import Footer from "../Components/Global/Footer";
import BlockHeadAd from "../Components/Explorer/BlockHeadAd";
import ExplorerContainer from "../styles/ExplorerContainer";
import BlockInfoHeader from "../Components/Explorer/BlockInfoHeader";
import BlockInfoIcons from "../Components/Explorer/BlockInfoIcons";
import BlockInfoData1 from "../Components/Explorer/BlockInfoData1";
import BlockInfoData2 from "../Components/Explorer/BlockInfoData2";

const St = {
  BodyContainer: styled.div`
    max-width: 1400px;
    margin: 5vh auto;
    width: 100%;
    height: 100%;
    @media ${({ theme }) => theme.tablet} {
      /* margin-top: 5vh; */
      /* margin-bottom: 0; */
    }
  `,
  BlockInfoContainer: styled.div`
    display: flex;
    justify-content: space-between;
    margin: 5vh;
  `,

}

const Explorer = ({ match, widthSize, heightSize }) => {
  const isExplorerURL = match.path === "/blockname";

  return (
    <>
      <Header isExplorerURL={isExplorerURL} />
      <St.BodyContainer>
        <St.BlockInfoContainer>
          <BlockInfoHeader/>
        </St.BlockInfoContainer>
        <St.BlockInfoContainer>
          <BlockInfoIcons/>
        </St.BlockInfoContainer>
        <St.BlockInfoContainer>
          <ExplorerContainer width="50%"><BlockInfoData1/></ExplorerContainer>
          <ExplorerContainer width="50%"><BlockInfoData2/></ExplorerContainer>
        </St.BlockInfoContainer>
      </St.BodyContainer>
      <Footer />
    </>
  );
};

export default withSize()(React.memo(Explorer));