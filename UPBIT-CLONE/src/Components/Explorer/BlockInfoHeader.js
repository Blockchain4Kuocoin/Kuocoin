import React from "react";
import styled from "styled-components";

const St = {
  BlockInfoHeaderContainer: styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    /* padding: 10px; */
    /* cursor: pointer; */
  `,
  BlockInfoLogoDiv: styled.div`
    display: flex;
    align-items: center;
  `,
  BlockLogo: styled.div`
    width: 80px;
    height: 80px;
    margin-right: 20px;
    border: 1px solid black;
    border-radius: 50px;
    object-fit: cover;
    /* background-image: url("../../../public/kuoslogo.png"); */
  `,
  BlockLogoInfo: styled.div`
    height: 70px;
    margin-right: 10px;
    line-height: 35px; //이 방법 대신 다른 방법 찾기
    color: gray;
  `,
  BlcokLogoName: styled.div`
    color: black;
    font-size: 30px;
    font-weight: 700;
  `,
  BlockLogoApi: styled.div`
    background-color: rgba(999,999,999,0.5);
    border: 1px solid gray;
  `,
  BlcokInfoPriceDiv: styled.div`
    display: block;
    line-height: 25px;
    font-size: 16px;
  `,
  
};

const clickBlock = () => {
  document.location.href='/blockname'
};

const BlockInfoHeader = () => {
  return(
    <>
    <St.BlockInfoHeaderContainer onClick={clickBlock}>
      <St.BlockInfoLogoDiv>
        <St.BlockLogo />
        <St.BlockLogoInfo>
          <>Explorer</>
          <St.BlcokLogoName>Kuoscoin</St.BlcokLogoName>
        </St.BlockLogoInfo>
        <St.BlockLogoApi>API</St.BlockLogoApi>
      </St.BlockInfoLogoDiv>
      <St.BlcokInfoPriceDiv>
        <div style={{fontSize: "24px", fontWeight: "700"}}>DB USD</div>
        <div>1 satoshi per byte</div>
        <div style={{color: "gray"}}>recommmended transaction fee</div>
      </St.BlcokInfoPriceDiv>
      <St.BlcokInfoPriceDiv>
        <div>Circulation (database</div>
        <div>Market cap (database</div>
        <div>Dominance (database</div>
      </St.BlcokInfoPriceDiv>
    </St.BlockInfoHeaderContainer>
    </>
  )


};

export default BlockInfoHeader;