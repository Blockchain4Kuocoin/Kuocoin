import React from "react";
// import { useParams } from "react-router-dom";
// import Axios from "axios";
import styled from "styled-components";
import withSize from "../../Container/withSize";

import BlockNumber from "./BlockNumber";
import BlockHash from "./BlockHash";
import ExplorerContainer from "../../styles/ExplorerContainer";
import BlocksGenralInfo from "./BlocksGenralInfo";

const St = {
  contsContainer: styled.div`
    width: 100%;
  `,
}

const BlocksInfo = () => {
  return(
    <>
    <BlockNumber/>
    <ExplorerContainer width="100%" bColor="white">
      <BlockHash/>
    </ExplorerContainer>
    <ExplorerContainer width="100%">
      <BlocksGenralInfo/>
    </ExplorerContainer>
    </>
  )
}

export default withSize()(React.memo(BlocksInfo));