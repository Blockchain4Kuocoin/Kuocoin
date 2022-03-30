import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import styled from "styled-components";
import { SiHackthebox } from 'react-icons/si';

const St = {
  BlockNumberContainer: styled.div`
  display: flex;
  align-items: center;
  width: 18%;
  cursor: pointer;
  font-family: 'Poor Story';
  `,
  BlockCurIcon: styled.div`
  border-radius: 50%;
  padding: 16px;
  margin-right: 10px;
  background-color: #ff5478;
  color: white;
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
  font-size: x-large;
  font-weight: 700;
  margin: 8px 0;
  `
};



const BlockNumber = () => {
  const [ blockNumberData, setBlockNumberData ] = useState([]);
  
  const params = useParams();
  console.log(params);

  useEffect(()=>{
    Axios.get(`http://localhost:3001/explorer/kuoscoin/${params.height}`)
    .then((response) => {setBlockNumberData(response.data[0]); console.log(response.data[0])})
    .catch(err=>console.log(err))
  }, []);

  const clickBlock = () => {
    document.location.href=`${Number(params.height) -1}`
  };
  
  const clickBlock1 = () => {
    document.location.href=`${Number(params.height) +1}`
  };

  return(
    <>
    
    <St.BlockNumberContainer onClick={clickBlock}>
      <St.BlockIcons><SiHackthebox className="BlockBox" size="26"/></St.BlockIcons>
      <St.BlockNumInfoDiv>
        <St.BlockNumInfo>Previos</St.BlockNumInfo>
        <>{blockNumberData.height - 1}</>
      </St.BlockNumInfoDiv>
    </St.BlockNumberContainer>
    <St.BlockNumberContainer>
      <St.BlockCurIcon><SiHackthebox className="BlockBox" size="34"/></St.BlockCurIcon>
      <St.BlockNumInfoDiv>
        <St.BlockNumInfo>Current</St.BlockNumInfo>
        {/* {blockNumberData.map(element => */}
        <St.BlockCurNum>{blockNumberData.height}</St.BlockCurNum>
        {/* )} */}
      </St.BlockNumInfoDiv>
    </St.BlockNumberContainer>
    <St.BlockNumberContainer onClick={clickBlock1}>
      <St.BlockIcons><SiHackthebox className="BlockBox" size="26"/></St.BlockIcons>
      <St.BlockNumInfoDiv>
      <St.BlockNumInfo>next</St.BlockNumInfo>
        <>{blockNumberData.height + 1}</>
      </St.BlockNumInfoDiv>
    </St.BlockNumberContainer>
    
    </>
  )
};

export default BlockNumber;