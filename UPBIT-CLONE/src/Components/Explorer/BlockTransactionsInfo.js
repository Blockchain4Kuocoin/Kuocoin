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
    <St.ThisBlockTransactions>Transactions included in this block</St.ThisBlockTransactions>
    <ExplorerContainer marginTop="10px" width="100%">
      <St.TransactionCate><div style={{marginRight:"8vw"}}>Hash</div><div>Output total (LTC)</div><div>Output total (USD)</div><div>Transaction fee (LTC)</div><div>Transaction fee (USD)</div><div>Fee per kB (LTC)</div><div>Size</div><div>Input count</div><div>Output count</div><div>Coindays destroyed</div></St.TransactionCate>
      <BlockWhiteDiv><div style={{marginRight:"8vw"}}>DB</div><div>DB</div><div>DB</div><div>DB</div><div>DB</div><div>DB</div><div>DB</div><div>DB</div><div>DB</div><div>DB</div></BlockWhiteDiv>
    </ExplorerContainer>
    </>
  )
};

export default ThisBlockTransactionsInfo;