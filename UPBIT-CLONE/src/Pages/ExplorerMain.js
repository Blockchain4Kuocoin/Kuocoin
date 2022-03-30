import React from "react";
import styled from "styled-components";
import withSize from "../Container/withSize";
import { SiHackthebox } from "react-icons/si";

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
    height: auto;
    @media ${({ theme }) => theme.tablet} {
      margin: 5vh auto;
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
        <St.ContentDiv fontSize="55px" fontWeight="900">Kuos explorer,<br/>analytics and web services</St.ContentDiv>
        <St.ContentDiv fontSize="30px">Explore data stored on Kuoscoin</St.ContentDiv>
        <SearchBar/>
        <St.ContentDiv >Search examples: <SiHackthebox/>Block</St.ContentDiv>
      </St.BodyContainer>
      <Footer />
    </>
  );
};

export default withSize()(React.memo(Explorer));