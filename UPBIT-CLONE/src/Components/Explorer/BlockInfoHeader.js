import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import styled from "styled-components";
import { FaCubes } from "react-icons/fa";
import { RiArrowUpDownLine } from "react-icons/ri";
import { RiBookMarkLine } from "react-icons/ri";
import  kuosLogo  from "./test4.png"

const St = {
  BlockInfoHeaderContainer: styled.header`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 90%;
    font-family: 'Poor Story';
  `,
  BlockInfoLogoDiv: styled.div`
    display: flex;
    align-items: center;
  `,
  BlockLogo: styled.div`
    width: 80px;
    height: 80px;
    margin-right: 20px;
    margin-top:30px ;
    /* margin-left:10px ; */
    /* padding-right: 20px; */
    /* border: 1px solid ; */
    border-radius: 50px;
    object-fit: cover;
    /* background-color: red; */
    /* background-image: url("../../../public/kuoslogo.png"); */
    /* background: url("./kuoslogo.png") ; */
    background-image: url(${kuosLogo});
    vertical-align: middle;
    background-repeat: no-repeat;
    
    z-index: 99 ;
  `,
  BlockLogoInfo: styled.div`
    height: 70px;
    margin-right: 10px;
    line-height: 35px; //이 방법 대신 다른 방법 찾기
    /* color: gray; */
    background: url("./kuoslogo.png") ;
    background-image: url("./kuoslogo.png") ;
  `,
  BlcokLogoName: styled.div`
    color: black;
    font-size: 30px;
    font-weight: 700;
  `,
  BlockLogoApi: styled.div`
    background-color: #e9ecef;
    /* border: 1px solid gray; */
  `,
  BlcokInfoPriceDiv: styled.div`
    display: block;
    line-height: 25px;
    font-size: 16px;
  `,
  
};

const BlockInfoHeader = () => {
  const [ blockHeights, setBlockHeights ] = useState([]);
  const [ blockTxData, setBlockTxData ] = useState([]);
  
  const params = useParams();
  console.log(params);

  useEffect(()=>{
    Axios.get(`http://localhost:3001/explorer/kuoscoinblocks`)
    .then((response) => {setBlockHeights(response.data.countheights); console.log(response.data)})
    .catch(err=>console.log(err))
  }, []);

  useEffect(()=>{
    Axios.get(`http://localhost:3001/explorer/kuoscoin/${params.height}`)
    .then((response) => {setBlockTxData(response.data[0]); console.log(response.data)})
    .catch(err=>console.log(err))
  }, []);

  return(
    <St.BlockInfoHeaderContainer>
      <St.BlockInfoLogoDiv>
          <St.BlockLogo>
            {/* <img src={kuosLogo}/> */}
          </St.BlockLogo>
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
        <div><FaCubes className="IconBox" size="30" color="#ff5478"/> Blocks {blockHeights}</div>
        <div><RiArrowUpDownLine className="IconBox" size="30" color="#549aff"/> Transactions {blockTxData.tx ? blockTxData.tx.slice(0,5) + "..." : ""}</div>
        <div><RiBookMarkLine className="IconBox" size="30" color="#ff5478"/> Addresses 30</div>
      </St.BlcokInfoPriceDiv>
    </St.BlockInfoHeaderContainer>
  )
};

export default BlockInfoHeader;