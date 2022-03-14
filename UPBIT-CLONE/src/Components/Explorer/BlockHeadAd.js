import React from "react";
import styled from "styled-components";

const St = {
  BlockHeadAdContainer: styled.div`
  display: flex;
  justify-content: end;
  width: 30%;
  //float: right
  `,
  BlockHeadAd: styled.div`
  display: flex;
  width: auto;
  margin-left: 2%;
  padding: 10px;
  border: 1px solid lightgray;
  border-radius: 10px;
  `
};

const BlockHeadAd = () => {
  return(
    <>
    <St.BlockHeadAdContainer>
      <St.BlockHeadAd style={{backgroundColor : 'skyblue'}}>해적단 NFT 무료로 받기</St.BlockHeadAd>
      <St.BlockHeadAd style={{backgroundColor : 'lightpink'}}>Block Adv Test</St.BlockHeadAd>
    </St.BlockHeadAdContainer>
    </>
    //react-tooltip사용해서 말풍선 추가 가능
  )


};

export default BlockHeadAd;