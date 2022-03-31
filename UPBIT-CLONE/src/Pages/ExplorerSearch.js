import React from "react";
import styled from "styled-components";
import withSize from "../Container/withSize";
import { viewSize } from "../styles/theme";
import { GrBook } from "react-icons/gr";
import { SiHackthebox } from "react-icons/si";
import { GrTransaction } from "react-icons/gr";

import Header from "../Components/Global/Header";
import Footer from "../Components/Global/Footer";
import SearchBar from "../Components/Explorer/SearchBar";

const St = {
  BodyContainer: styled.div`
    max-width: 1400px;
    min-height: 350px;
    margin: 15vh auto;
    width: 100%;
    height: 100%;
    font-family: 'Poor Story';
    @media ${({ theme }) => theme.tablet} {
      margin: 5vh auto;
      font-family: 'Poor Story';
    }
  `,
  ContentDiv: styled.div`
    font-size: ${(props) => props.fontSize};
    font-weight: ${(props) => props.fontWeight};
    margin: 20px 0;
  `,
}

const ExplorerSearch = (props) => {
  return (
    <>
      <Header/>
      <St.BodyContainer>
        <SearchBar />
        <St.ContentDiv >Search examples: <GrBook/>Address <SiHackthebox/>Block <GrTransaction/>Transaction</St.ContentDiv>
      </St.BodyContainer>
      <Footer />
    </>
  );
};

export default withSize()(React.memo(ExplorerSearch));