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
  font-size: x-large;
  font-weight: 700;
  margin: 8px 0;
  `
};

const clickBlock = () => {
  document.location.href='/'
};

const BlockNumber = () => {
  const [ blockNumberData, setBlockNumberData ] = useState([]);
  
  const params = useParams();
  console.log(params);

  useEffect(()=>{
    Axios.get(`http://localhost:3001/explorer/blockname/${params.blocknumber}`)
    .then((response) => {setBlockNumberData(response.data); console.log(response)})
    .catch(err=>console.log(err))
  }, []);

  return(
    <>
    
    <St.BlockNumberContainer onClick={clickBlock}>
      <St.BlockIcons><SiHackthebox className="BlockBox" size="26"/></St.BlockIcons>
      <St.BlockNumInfoDiv>
        <St.BlockNumInfo>Previos</St.BlockNumInfo>
        <>DB -1 </>
      </St.BlockNumInfoDiv>
    </St.BlockNumberContainer>
    <St.BlockNumberContainer onClick={clickBlock}>
      <St.BlockCurIcon><SiHackthebox className="BlockBox" size="34"/></St.BlockCurIcon>
      <St.BlockNumInfoDiv>
        <St.BlockNumInfo>Current</St.BlockNumInfo>
        {blockNumberData.map(element =>
        <St.BlockCurNum>{element.blocknumber}</St.BlockCurNum>
        )}
      </St.BlockNumInfoDiv>
    </St.BlockNumberContainer>
    <St.BlockNumberContainer onClick={clickBlock}>
      <St.BlockIcons><SiHackthebox className="BlockBox" size="26"/></St.BlockIcons>
      <St.BlockNumInfoDiv>
      <St.BlockNumInfo>next</St.BlockNumInfo>
        <>DB + 1 </>
      </St.BlockNumInfoDiv>
    </St.BlockNumberContainer>
    
    </>
  )
};

export default BlockNumber;