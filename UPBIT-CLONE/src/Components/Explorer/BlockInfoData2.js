import React from "react";
import styled from "styled-components";

const St = {
  Container: styled.div`
    display: flex;
    margin-top: 20px;
    line-height: 5vh;
  `,
  InforCol: styled.div`
    width: 50%;
    color: darkgray;
    font-size: initial;
  `,
  InfoDb: styled.div`
    width: 50%;
    /* color: ${(props) => props.color}; */
    font-weight: 400;
    font-size: initial;
  `
};

const BlockInfoData2 = () => {
  return(
    <>
    Mempool
    <St.Container>
      <St.InforCol>
        <div>Transactions</div><div>Transactions per second</div><div>Outputs</div><div>Fees</div><div>Size</div><div>Suggested transaction fee</div>
      </St.InforCol>
      <St.InfoDb>
        <div>DB</div><div>DB</div><div>DB</div><div>DB USD</div><div>DB</div><div>1 satosi per byte</div>
      </St.InfoDb>
    </St.Container>
    </>
  )


};

export default BlockInfoData2;