import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import styled from "styled-components";
import { RiCheckboxMultipleBlankLine } from "react-icons/ri"

const St = {
  GeneralInfoContainer: styled.div`
    display: flex;
    margin-top: 20px;
    line-height: 5vh;
  `,
  GeneralInformationCate: styled.div`
    width: 25%;
    color: darkgray;
    font-size: initial;
  `,
  GeneralInformation: styled.div`
    width: 25%;
    /* color: ${(props) => props.color}; */
    font-weight: 400;
    font-size: initial;

  `
};

const BlocksGenralInfo = () => {
  const [ blockGeneralInfo, setBlockGeneralInfo ] = useState([]);
  const [ timestamp, setTimestamp ] = useState('');
  const [ txData, setTxData ] = useState([]);
  console.log(blockGeneralInfo);
  
  const params = useParams();
  console.log(params);

  useEffect(()=>{
    Axios.get(`http://localhost:3001/explorer/kuoscoin/${params.height}`)
    .then((response) => {
      setBlockGeneralInfo(response.data.data[0]); 
      console.log(response.data[0]);

      const time = Number(response.data.data[0].mediantime)*1000;
      console.log(time);
      const date = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(time);
      setTimestamp(date);
      
      let arr=[];
      response.data.data[0].tx.split('/').map((ele) => {
        const txDatas = ele;
        console.log(txDatas);
        arr.push(txDatas);
      })
      setTxData(arr);
    })
    .catch(err=>console.log(err))
  }, []);


  const CopyMerkleRoot = () => {
    // console.log(blockGeneralInfo.merkleroot);
    navigator.clipboard.writeText(blockGeneralInfo.merkleroot).then(() => {
      alert("복사성공!");
    });
  };

  const CopyChainwork = () => {
    // console.log(blockGeneralInfo.merkleroot);
    navigator.clipboard.writeText(blockGeneralInfo.chainwork).then(() => {
      alert("복사성공!");
    });
  };
  
  
  // console.log(blockGenralInfo.mediantime);
  // // const timestamp = blockGenralInfo.mediantime*1000;
  // console.log(timestamp);
  // const date = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(timestamp)

  return(
    <>
    <div style={{fontSize: "x-larger", fontWeight: "bolder"}}>General info</div>
    <St.GeneralInfoContainer>
      <St.GeneralInformationCate>
        <div>Size</div><div>Stripped size</div><div>Version</div><div>Transactions</div><div>Merkle root</div><div>Nonce</div><div>Chainwork</div>
      </St.GeneralInformationCate>
      <St.GeneralInformation>
        <div>{blockGeneralInfo.size}</div><div>{blockGeneralInfo.strippedsize}</div><div>{blockGeneralInfo.version}</div><div>{txData.length}</div><div>{blockGeneralInfo.merkleroot ? blockGeneralInfo.merkleroot.slice(0,10) + "..." + blockGeneralInfo.merkleroot.slice(-10): ""} <RiCheckboxMultipleBlankLine onClick={CopyMerkleRoot} size="18"/></div>
        <div>{blockGeneralInfo.nonce}</div><div>
        {blockGeneralInfo.chainwork ? blockGeneralInfo.chainwork.slice(0,10) + "..." + blockGeneralInfo.chainwork.slice(-10): ""} <RiCheckboxMultipleBlankLine onClick={CopyChainwork} size="18"/></div>
      </St.GeneralInformation>
      <St.GeneralInformationCate>
        <div>Weight</div><div>Median time</div><div>Version [bits]</div><div>Difficulty</div><div>Bits</div><div>Confirmations</div>
      </St.GeneralInformationCate>
      <St.GeneralInformation>
        <div>{blockGeneralInfo.weight}</div><div>{timestamp}</div><div>{blockGeneralInfo.versionHex}</div><div>{blockGeneralInfo.difficulty}</div><div>{blockGeneralInfo.bits}</div><div>{blockGeneralInfo.confirmations}</div>
      </St.GeneralInformation>
    </St.GeneralInfoContainer>
    </>
  )


};

export default BlocksGenralInfo;