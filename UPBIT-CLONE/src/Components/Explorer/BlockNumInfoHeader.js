import React from "react";
import styled from "styled-components";

const St = {
  BlockInfoHeaderContainer: styled.header`
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  width: 30%;
  /* padding: 10px; */
  cursor: pointer;
  font-family: 'Poor Story';
  `,
  BlockInfoHeaderLogo: styled.div`
  width: 80px;
  height: 80px;
  margin-right: 20px;
  border: 1px solid black;
  border-radius: 50px;
  object-fit: cover;
  font-family: 'Poor Story';
  `,
  BlockNameContainer: styled.div`
  height: 70px;
  margin-right: 10px;
  font-family: 'Poor Story';
  `,
  BlcokInfoHeaderCate: styled.div`
  line-height: 35px; //이 방법 대신 다른 방법 찾기
  color: gray;
  font-family: 'Poor Story';
  `,
  BlcokInfoHeaderBlockName: styled.div`
  font-size: 24px;
  font-weight: 700;
  font-family: 'Poor Story';
  `,
  BlockInfoHeaderApiContainer: styled.div`
  background-color: rgba(999,999,999,0.8);
  `
};

const clickBlock = () => {
  document.location.href='/blockname'
};

const BlockNumInfoHeader = () => {
  return(
    <>
    <St.BlockInfoHeaderContainer onClick={clickBlock}>
      <St.BlockInfoHeaderLogo />
      <St.BlockNameContainer>
        <St.BlcokInfoHeaderCate>kuocoin &#183; blocks</St.BlcokInfoHeaderCate>
        <St.BlcokInfoHeaderBlockName>kuocoin Block</St.BlcokInfoHeaderBlockName>
      </St.BlockNameContainer>
      <St.BlockInfoHeaderApiContainer>API</St.BlockInfoHeaderApiContainer>
    </St.BlockInfoHeaderContainer>
    </>
  )


};

export default BlockNumInfoHeader;