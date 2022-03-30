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
    font-family: "Poor Story" ;
    max-width: 1400px;
    min-height: 350px;
    margin: 20vh auto;
    width: 100%;
    height: 100%;
    @media ${({ theme }) => theme.tablet} {
      margin: 5vh auto;
      /* margin-top: 5vh; */
      /* margin-bottom: 0; */
    }
  `,
  ContentDiv: styled.div`
    font-size: ${(props) => props.fontSize};
    font-weight: ${(props) => props.fontWeight};
    margin: 20px 0;
  `,
}

const Explorer = (props) => {
  return (
    <>
      <Header/>
      <St.BodyContainer>
        <St.ContentDiv fontSize="50px" fontWeight="900">Blockchain explorer,<br/>analytics and web services</St.ContentDiv>
        <St.ContentDiv fontSize="24px">Explore data stored on 19 blockchains</St.ContentDiv>
        <SearchBar/>
        <St.ContentDiv >Search examples: <GrBook/>Address <SiHackthebox/>Block <GrTransaction/>Transaction</St.ContentDiv>
      </St.BodyContainer>
      <Footer />
    </>
  );
};

export default withSize()(React.memo(Explorer));