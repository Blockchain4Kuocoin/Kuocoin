import React from "react";
import styled from "styled-components";
import withSize from "../../Container/withSize";

import BlockNumber from "./BlockNumber";
import BlockHash from "./BlockHash";
import ExplorerContainer from "../../styles/ExplorerContainer";
import BlocksGenralInfo from "./BlocksGenralInfo";

const St = {
  contsContainer: styled.div`
    width: 100%;
    margin: 10vh 0;
  `,
}

const BlocksInfo = () => {
  return(
    <St.contsContainer>
      <BlockNumber/>
      <ExplorerContainer width="100%" bColor="white">
        <BlockHash/>
      </ExplorerContainer>
      <ExplorerContainer width="100%">
        <BlocksGenralInfo/>
      </ExplorerContainer>
    </St.contsContainer>
  )
}

export default withSize()(React.memo(BlocksInfo));