import React from "react";
import styled from "styled-components";
import ExplorerContainer from "../../styles/ExplorerContainer";
import BlockWhiteDiv from "../../styles/BlockWhiteDiv";

const St = {
  ThisBlockTransactions: styled.div`
    margin-top: 10vh;
    width: 100%;
    font-size: larger;
    font-weight: 500;
    font-family: 'Poor Story';
  `,
  TransactionCate: styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
  `,
}

const ThisBlockTransactionsInfo = () => {
  return(
    <>
    <St.ThisBlockTransactions>Latest blocks</St.ThisBlockTransactions>
    <ExplorerContainer marginTop="10px" width="100%">
      <St.TransactionCate><div>Hash</div><div>Mined on</div></St.TransactionCate>
      <BlockWhiteDiv><div>DB</div><div>DB</div></BlockWhiteDiv>
      <BlockWhiteDiv><div>DB</div><div>DB</div></BlockWhiteDiv>
      <BlockWhiteDiv><div>DB</div><div>DB</div></BlockWhiteDiv>
    </ExplorerContainer>
    </>
  )
};

export default ThisBlockTransactionsInfo;