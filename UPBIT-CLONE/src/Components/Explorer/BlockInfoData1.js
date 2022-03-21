import React from "react";
import styled from "styled-components";
import { VscGraphLine } from "react-icons/vsc";

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

const BlockInfoData1 = () => {
  return(
    <>
    All time
    <St.Container>
      <St.InforCol>
        <div>Blockchain size</div><div>Network nodes</div><div>Lastes block</div><div>Difficulty</div><div>Next estimated difficulty</div><div>Next readjustment</div><div>Hashrate</div>
      </St.InforCol>
      <St.InfoDb>
        <div>DB GB <VscGraphLine color="gray"/></div><div>DB </div><div>DB &#183; DB ago</div><div>DB <VscGraphLine color="gray"/></div><div>DB</div><div>DB from now</div><div>DB Th/s (Scrypt)</div>
      </St.InfoDb>
    </St.Container>
    </>
  )


};

export default BlockInfoData1;