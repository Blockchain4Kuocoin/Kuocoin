import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
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
  .IconBox:hover {
    color: white;
  }
  `,
  BlockInfoDiv: styled.div`
    display: block;
    color: gray;
  `,
  BlockInfoDb: styled.div`
    color: blue;
  `
};

const clickBlock = () => {
  document.location.href='/'
};

const BlockInfoIcons = () => {
  const [ blockHeights, setBlockHeights ] = useState([]);
  
  const params = useParams();
  console.log(params);

  useEffect(()=>{
    Axios.get(`http://localhost:3001/exlorer/kuoscoinblocks`)
    .then((response) => {setBlockHeights(response.data.countheights); console.log(response.data)})
    .catch(err=>console.log(err))
  }, []);
  return(
    <>
    <St.Container onClick={clickBlock}>
      <St.BlockIcons><FaCubes className="IconBox" size="34"/></St.BlockIcons>
      <St.BlockInfoDiv>
        <>Blocks</>
        <St.BlockInfoDb>{blockHeights}</St.BlockInfoDb>
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