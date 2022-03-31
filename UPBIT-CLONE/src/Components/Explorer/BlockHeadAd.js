import React from "react";
import styled from "styled-components";

const St = {
  BlockHeadAdContainer: styled.div`
    display: flex;
    justify-content: end;
    width: ${(props) => props.width};
  `,
  BlockHeadAd: styled.div`
    display: flex;
    width: auto;
    height: auto;
    margin-left: ${(props) => props.marginL};
    padding: 10px;
    border: 1px solid lightgray;
    border-radius: 10px;
    background-color: ${(props) => props.BColor};
    align-items: center;
  `
};

const BlockHeadAd = () => {
  return(
    <St.BlockHeadAdContainer width="60%">
      <St.BlockHeadAd BColor='skyblue'> ☠️해적단 NFT 무료로 받기🙋🏻‍♂️ </St.BlockHeadAd>
      <St.BlockHeadAd BColor='lightpink' marginL='2%'> Get 5 BTC🤮 </St.BlockHeadAd>
    </St.BlockHeadAdContainer>
    //react-tooltip사용해서 말풍선 추가 가능
  )
};

export default BlockHeadAd;