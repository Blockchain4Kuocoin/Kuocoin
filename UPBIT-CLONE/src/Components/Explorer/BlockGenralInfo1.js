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

const BlockGenralInfo1 = () => {
  return(
    <>
    General info
    <St.GeneralInfoContainer>
      <St.GeneralInformationCate>
        <div>Size</div><div>Stripped size</div><div>Version</div><div>Merkle root</div><div>Nonce</div><div>Chainwork</div><div>Coinbase data</div>
      </St.GeneralInformationCate>
      <St.GeneralInformation>
        <div>DB</div><div>DB</div><div>DB</div><div>DB</div><div>DB</div><div>DB</div><div>DB</div>
      </St.GeneralInformation>
      <St.GeneralInformationCate>
        <div>Weight</div><div>Median time</div><div>Version [bits]</div><div>Difficulty</div><div>Bits</div>
      </St.GeneralInformationCate>
      <St.GeneralInformation>
        <div>DB</div><div>DB</div><div>DB</div><div>DB</div><div>DB</div><div>DB</div>
      </St.GeneralInformation>
    </St.GeneralInfoContainer>
    </>
  )


};

export default BlockGenralInfo1;