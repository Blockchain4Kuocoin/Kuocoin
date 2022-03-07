import React from "react";
import styled from "styled-components";

const St = {
  BlockHeadAdContainer: styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  background-color: white;
  padding: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.lightGray2};
  border: 1px solid black;
  `,
  BlockHeadAd: styled.div`
  /* display: flex; */
  /* justify-content: space-between; */
  align-items: center;
  width: 20%;
  background-color: white;
  padding: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.lightGray2};
  border: 1px solid black;
  `
};

const BlockHeadAd = () => {
  return(
    <>
    <St.BlockHeadAdContainer>
      <St.BlockHeadAd>Block Adv Test</St.BlockHeadAd>
      <St.BlockHeadAd>Block Adv Test</St.BlockHeadAd>
      <St.BlockHeadAd>Block Adv Test</St.BlockHeadAd>
      <St.BlockHeadAd>Block Adv Test</St.BlockHeadAd>
    </St.BlockHeadAdContainer>
    </>
  )


};

export default BlockHeadAd;