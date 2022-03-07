import React from "react";
import styled from "styled-components";
import { BsBox } from 'react-icons/bs';

const St = {
  BlockNumberDiv: styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 18%;
  padding: 5px;
  border-bottom: 1px solid ${({ theme }) => theme.lightGray2};
  cursor: pointer;
  `,

  BlockNumIcon: styled.div`
  border-radius: 50%;
  padding: 10px;
  background-color: white;
  color: blue;
  &:hover {
    background-color: blue;
    color: white;
  }
  .BlockBox:hover {
    color: white;
  }
  .BlockBox {
    size: 24px;
  }
  border: 1px solid black;
  `,

  BlockNumInfo: styled.div`
  padding: 10px;
  /* border: 1px solid black; */
  `
};

const clickBlock = () => {
  document.location.href='/'
};

const BlockNumberDiv = () => {
  return(
    <>
    <St.BlockNumberDiv onClick={clickBlock}>
      <St.BlockNumIcon><BsBox className="BlockBox" size="24"/></St.BlockNumIcon>
      <St.BlockNumInfo>Previos<br/>numbder</St.BlockNumInfo>
    </St.BlockNumberDiv>
    <St.BlockNumberDiv onClick={clickBlock}>
      <St.BlockNumIcon><BsBox className="BlockBox" size="24"/></St.BlockNumIcon>
      <St.BlockNumInfo>Current<br/>numbder</St.BlockNumInfo>
    </St.BlockNumberDiv>
    <St.BlockNumberDiv onClick={clickBlock}>
      <St.BlockNumIcon><BsBox className="BlockBox" size="24"/></St.BlockNumIcon>
      <St.BlockNumInfo>Next<br/>numbder</St.BlockNumInfo>
    </St.BlockNumberDiv>
    </>
  )
};

export default BlockNumberDiv;