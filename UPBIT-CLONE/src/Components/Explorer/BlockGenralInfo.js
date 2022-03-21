import React from "react";
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
  `
};

const BlockGenralInfo = () => {
  return(
    <>
    General info
    <St.GeneralInfoContainer>
      <St.GeneralInformationCate>
        <div>Mined on</div><div>Transaction count</div><div>Witness tx count</div><div>Output count</div><div>Output total</div><div>Coindays destroyed</div><div>Reward</div>
      </St.GeneralInformationCate>
      <St.GeneralInformation>
        <div>DB</div><div>DB</div><div>DB</div><div>DB</div><div>DB</div><div>DB</div><div>DB</div>
      </St.GeneralInformation>
      <St.GeneralInformationCate>
        <div>Miner</div><div>Fee per kB</div><div>Input count</div><div>Input total</div><div>Fee total</div><div>Generation</div>
      </St.GeneralInformationCate>
      <St.GeneralInformation>
        <div>DB</div><div>DB</div><div>DB</div><div>DB</div><div>DB</div><div>DB</div>
      </St.GeneralInformation>
    </St.GeneralInfoContainer>
    </>
  )


};

export default BlockGenralInfo;