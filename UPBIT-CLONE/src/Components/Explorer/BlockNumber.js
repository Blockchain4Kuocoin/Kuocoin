import React from "react";
import styled from "styled-components";
import { SiHackthebox } from 'react-icons/si';

const St = {
  BlockNumberContainer: styled.div`
  display: flex;
  align-items: center;
  width: 18%;
  cursor: pointer;
  `,
  BlockCurIcon: styled.div`
  border-radius: 50%;
  padding: 16px;
  margin-right: 10px;
  background-color: blue;
  color: white;
  `,
  BlockIcons: styled.div`
  border-radius: 50%;
  padding: 12px;
  margin-right: 10px;
  background-color: white;
  color: blue;
  &:hover {
    background-color: blue;
    color: white;
  }
  .BlockBox:hover {
    color: white;
  }
  `,
  BlockNumInfoDiv: styled.div`
    display: block;
  `,
  BlockNumInfo: styled.div`
    color: gray;
  `,
  BlockCurNum: styled.div`
  font-size: larger;
  font-weight: 400;
  padding: 2px 0;
  `
};

const clickBlock = () => {
  document.location.href='/'
};

const BlockNumber = () => {
  return(
    <>
    <St.BlockNumberContainer onClick={clickBlock}>
      <St.BlockIcons><SiHackthebox className="BlockBox" size="26"/></St.BlockIcons>
      <St.BlockNumInfoDiv>
        <St.BlockNumInfo>Previos</St.BlockNumInfo>
        <>numbder</>
      </St.BlockNumInfoDiv>
    </St.BlockNumberContainer>
    <St.BlockNumberContainer onClick={clickBlock}>
      <St.BlockCurIcon><SiHackthebox className="BlockBox" size="34"/></St.BlockCurIcon>
      <St.BlockCurNum>Current<br/>numbder</St.BlockCurNum>
    </St.BlockNumberContainer>
    <St.BlockNumberContainer onClick={clickBlock}>
      <St.BlockIcons><SiHackthebox className="BlockBox" size="26"/></St.BlockIcons>
      <St.BlockNumInfoDiv>
      <St.BlockNumInfo>next</St.BlockNumInfo>
        <>numbder</>
      </St.BlockNumInfoDiv>
    </St.BlockNumberContainer>
    </>
  )
};

export default BlockNumber;