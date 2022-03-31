import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import styled from "styled-components";
import { SiHackthebox } from 'react-icons/si';

const St = {
  container: styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    margin-bottom: 5vh;
  `,
  BlockNumberContainer: styled.div`
    display: flex;
    align-items: center;
    width: auto;
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
  BlockCurNum: styled.div`
    font-size: xx-large;
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
    .then((response) => {
      setBlockNumberData(response.data.data[0]);
      console.log(response.data.data[0])
    })
    .catch(err=>console.log(err))
  }, []);

  const clickBlock = (e) => {
    params.height - 1 < 0 ? e.preventDefault() : document.location.href=`${Number(params.height) -1}`
  };
  
  const clickBlock1 = () => {
    document.location.href=`${Number(params.height) +1}`
  };

  return(
    <St.container>
      <St.BlockNumberContainer onClick={clickBlock}>
        <St.BlockIcons><SiHackthebox className="BlockBox" size="26"/></St.BlockIcons>
        <St.BlockNumInfoDiv>
          <div style={{color : "gray"}}>Previos</div>
          <>{blockNumberData.height - 1 < 0  ? "NaN" : blockNumberData.height -1}</>
        </St.BlockNumInfoDiv>
      </St.BlockNumberContainer>
      <St.BlockNumberContainer>
        <St.BlockCurIcon><SiHackthebox className="BlockBox" size="34"/></St.BlockCurIcon>
        <St.BlockNumInfoDiv>
          <div style={{color : "gray"}}>Current</div>
          <St.BlockCurNum>{blockNumberData.height}</St.BlockCurNum>
        </St.BlockNumInfoDiv>
      </St.BlockNumberContainer>
      <St.BlockNumberContainer onClick={clickBlock1}>
        <St.BlockIcons><SiHackthebox className="BlockBox" size="26"/></St.BlockIcons>
        <St.BlockNumInfoDiv>
          <div style={{color : "gray"}}>next</div>
          <>{blockNumberData.height + 1}</>
        </St.BlockNumInfoDiv>
      </St.BlockNumberContainer>
    </St.container>
  )
};

export default BlockNumber;