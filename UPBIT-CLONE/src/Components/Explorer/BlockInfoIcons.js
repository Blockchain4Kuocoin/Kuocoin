import React from "react";
import styled from "styled-components";
import { FaCubes } from "react-icons/fa";
import { RiArrowUpDownLine } from "react-icons/ri";
import { HiArrowNarrowRight } from "react-icons/hi";
import { RiBookMarkLine } from "react-icons/ri";


const St = {
  Container: styled.div`
  display: flex;
  align-items: center;
  width: 18%;
  cursor: pointer;
  font-family: 'Poor Story';
  `,
  BlockIcons: styled.div`
  border-radius: 50%;
  padding: 12px;
  margin-right: 10px;
  background-color: white;
  color: #ff5478;
  &:hover {
    background-color: #549aff;
    color: white;
  }
  .IconBox:hover {
    color: white; 
  }
  `,
  BlockInfoDiv: styled.div`
    display: block;
    color: gray;
    font-family: 'Poor Story';
  `,
  BlockInfoDb: styled.div`
    color: black;
  `
};

const clickBlock = () => {
  document.location.href='/'
};

const BlockInfoIcons = () => {
  return(
    <>
    <St.Container onClick={clickBlock}>
      <St.BlockIcons><FaCubes className="IconBox" size="34"/></St.BlockIcons>
      <St.BlockInfoDiv>
        <>Blocks</>
        <St.BlockInfoDb>DB</St.BlockInfoDb>
      </St.BlockInfoDiv>
    </St.Container>
    <St.Container onClick={clickBlock}>
      <St.BlockIcons><RiArrowUpDownLine className="IconBox" size="34"/></St.BlockIcons>
      <St.BlockInfoDiv>
        <>Transactions</>
        <St.BlockInfoDb>DB</St.BlockInfoDb>
      </St.BlockInfoDiv>
    </St.Container>
    <St.Container onClick={clickBlock}>
      <St.BlockIcons><HiArrowNarrowRight className="IconBox" size="34"/></St.BlockIcons>
      <St.BlockInfoDiv>
        <>Outputs</>
        <St.BlockInfoDb>DB</St.BlockInfoDb>
      </St.BlockInfoDiv>
    </St.Container>
    <St.Container onClick={clickBlock}>
      <St.BlockIcons><RiBookMarkLine className="IconBox" size="34"/></St.BlockIcons>
      <St.BlockInfoDiv>
        <>Addresses</>
        <St.BlockInfoDb>DB</St.BlockInfoDb>
      </St.BlockInfoDiv>
    </St.Container>
    </>
  )
};

export default BlockInfoIcons;