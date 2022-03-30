import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import styled from "styled-components";

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
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  `
};

const BlockGenralInfo1 = () => {
  const [ blockGenralInfo, setBlockGenralInfo ] = useState([]);
  
  const params = useParams();
  console.log(params);

  useEffect(()=>{
    Axios.get(`http://localhost:3001/explorer/kuoscoin/${params.height}`)
    .then((response) => {setBlockGenralInfo(response.data[0]); console.log(response.data[0])})
    .catch(err=>console.log(err))
  }, []);


  return(
    <>
    General info
    <St.GeneralInfoContainer>
      <St.GeneralInformationCate>
        <div>Size</div><div>Stripped size</div><div>Version</div><div>Merkle root</div><div>Nonce</div><div>Chainwork</div><div>Coinbase data</div>
      </St.GeneralInformationCate>
      <St.GeneralInformation>
        <div>{blockGenralInfo.size}</div><div>{blockGenralInfo.strippedsize}</div><div>{blockGenralInfo.version}</div><div>{blockGenralInfo.merkleroot}</div><div>{blockGenralInfo.nonce}</div><div>{blockGenralInfo.chainwork}</div><div>DB</div>
      </St.GeneralInformation>
      <St.GeneralInformationCate>
        <div>Weight</div><div>Median time</div><div>Version [bits]</div><div>Difficulty</div><div>Bits</div><div>Confirmations</div>
      </St.GeneralInformationCate>
      <St.GeneralInformation>
        <div>{blockGenralInfo.weight}</div><div>{blockGenralInfo.mediantime}</div><div>{blockGenralInfo.versionHex}</div><div>{blockGenralInfo.difficulty}</div><div>{blockGenralInfo.bits}</div><div>{blockGenralInfo.confirmations}</div>
      </St.GeneralInformation>
    </St.GeneralInfoContainer>
    </>
  )


};

export default BlockGenralInfo1;