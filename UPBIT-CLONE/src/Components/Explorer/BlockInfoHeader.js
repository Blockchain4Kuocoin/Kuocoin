import React from "react";
import styled from "styled-components";

const St = {
  BlockInfoHeaderContainer: styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: white;
  padding: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.lightGray2};
  border: 1px solid black;
  `
  // styled.head 넣으면됨.
};

const BlockInfoHeader = () => {
  return(
    <>
    <St.BlockInfoHeaderContainer>
      block header tesst 
    </St.BlockInfoHeaderContainer>
    </>
  )


};

export default BlockInfoHeader;