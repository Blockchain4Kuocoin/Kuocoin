import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import styled from "styled-components";
import ExplorerContainer from "../../styles/ExplorerContainer";
import BlockWhiteDiv from "../../styles/BlockWhiteDiv";

const St = {
  ThisBlockTransactions: styled.div`
    margin-top: 10vh;
    width: 100%;
    font-size: larger;
    font-weight: 500;
  `,
  TransactionCate: styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
  `,
}

const ThisBlockTransactionsInfo = () => {
  const [ latestBlocks, setLatestBlocks ] = useState([]);
  const [ timestamp, setTimestamp ] = useState([]);
  console.log(timestamp);
  
  const params = useParams();
  console.log(params);

  useEffect(()=>{
    Axios.get(`http://localhost:3001/explorer/latestblocks`)
    .then((response) => {
      setLatestBlocks(response.data);
      console.log(response.data);
      let arr=[];
      response.data.forEach((ele) => {
        const time = Number(ele.mediantime)*1000;
        console.log(time);
        const date = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(time);
        console.log(date);
        arr.push(date);
      })
      // const time = Number(response.data[0].mediantime)*1000;
      // console.log(time);
      // const date = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(time);
      // console.log(date);
      setTimestamp(arr);
    })
    .catch(err=>console.log(err))
  }, []);

  return(
    <>
    <St.ThisBlockTransactions>Latest blocks</St.ThisBlockTransactions>
    <ExplorerContainer marginTop="10px" width="100%">
      <St.TransactionCate><div>Hash</div><div>Mined on</div></St.TransactionCate>
      <BlockWhiteDiv><div>{latestBlocks.length>0 ? latestBlocks[0].hash : null}</div><div>{timestamp.length>0 ? timestamp[0] : null}</div></BlockWhiteDiv>
      <BlockWhiteDiv><div>{latestBlocks.length>0 ? latestBlocks[1].hash : null}</div><div>{timestamp.length>0 ? timestamp[1] : null}</div></BlockWhiteDiv>
      <BlockWhiteDiv><div>{latestBlocks.length>0 ? latestBlocks[2].hash : null}</div><div>{timestamp.length>0 ? timestamp[2] : null}</div></BlockWhiteDiv>
    </ExplorerContainer>
    </>
  )
};

export default ThisBlockTransactionsInfo;