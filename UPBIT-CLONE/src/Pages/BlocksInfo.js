import React from "react";
import styled from "styled-components";
import withSize from "../Container/withSize";
import { viewSize } from "../styles/theme";
import { GrCubes } from "react-icons/gr"

import Header from "../Components/Global/Header";
import Footer from "../Components/Global/Footer";
import BlockHeadAd from "../Components/Explorer/BlockHeadAd";
import IconsHover from "../styles/IconsHover";
import ExplorerContainer from "../styles/ExplorerContainer";

const St = {
  BodyContainer: styled.div`
    max-width: 1400px;
    margin: 5vh auto;
    width: 100%;
    height: 100%;
    @media ${({ theme }) => theme.tablet} {
      margin: 5vh auto;
      /* margin-top: 5vh; */
      /* margin-bottom: 0; */
    }
  `,
  
}

const Explorer = ({ match, widthSize, heightSize }) => {
  const isExplorerURL = match.path === "/blockname";

  return (
    <>
      <Header isExplorerURL={isExplorerURL} />
      <St.BodyContainer>
        11
        <BlockHeadAd/>
        <div>litecoin exploreres</div>
        <div>
        <IconsHover><GrCubes size={26}/></IconsHover>
        <IconsHover><GrCubes size={26}/></IconsHover>
        <IconsHover><GrCubes size={26}/></IconsHover>
        <IconsHover><GrCubes size={26}/></IconsHover>
        </div>
        <ExplorerContainer width="50%">11</ExplorerContainer>
        <ExplorerContainer width="50%">11</ExplorerContainer>
      </St.BodyContainer>
      <Footer />
    </>
  );
};

export default withSize()(React.memo(Explorer));