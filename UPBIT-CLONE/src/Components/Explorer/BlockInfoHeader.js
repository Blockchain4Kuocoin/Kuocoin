import React from "react";
import styled from "styled-components";

const St = {
  BlockInfoHeaderContainer: styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 15%;
  background-color: white;
  padding: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.lightGray2};
  border: 1px solid black;
  `,
  BlockInfoHeaderLogo: styled.div`
  border: 1px solid black;
  border-radius: 50%;
  `,
  BlockInfoHeader: styled.div`
  border: 1px solid black;
  `
};

const BlockInfoHeader = () => {
  return(
    <>
    <St.BlockInfoHeaderContainer>
      <St.BlockInfoHeaderLogo>
        logo
      </St.BlockInfoHeaderLogo>
      <St.BlockInfoHeader>
        kuocoin <br/>
        kuocoin <br/>
      </St.BlockInfoHeader>
    </St.BlockInfoHeaderContainer>
    </>
  )


};

export default BlockInfoHeader;