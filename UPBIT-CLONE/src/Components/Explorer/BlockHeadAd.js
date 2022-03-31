import React from "react";
import styled from "styled-components";

const St = {
  BlockHeadAdContainer: styled.div`
    display: flex;
    justify-content: end;
    width: ${(props) => props.width};
    font-family: 'Poor Story';
    /* float: right */
  `,
  BlockHeadAd: styled.div`
    display: flex;
    font-family: 'Poor Story';
    width: auto;
    margin-left: ${(props) => props.marginL};
    padding: 10px;
    border: 1px solid lightgray;
    border-radius: 10px;
    background-color: ${(props) => props.BColor};
  `
};

const BlockHeadAd = () => {
  return(
    <St.BlockHeadAdContainer width="100%">
      <St.BlockHeadAd BColor='#ff5478'>KUOS NFT 무료로 받기</St.BlockHeadAd>
      <St.BlockHeadAd BColor='#549aff' marginL='2%'>Block Adv Test</St.BlockHeadAd>
    </St.BlockHeadAdContainer>
    //react-tooltip사용해서 말풍선 추가 가능
  )
};

export default BlockHeadAd;