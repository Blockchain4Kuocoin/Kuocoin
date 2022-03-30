import styled, { createGlobalStyle } from "styled-components";

const ExplorerContainer = styled.div`
  box-sizing: border-box;
  width: ${(props) => props.width};
  padding: 4%;
  margin-top: ${(props) => props.marginTop};
  border: 1px solid white;
  border-radius: 10px;
  box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.05);
  font-family: 'Poor Story';
  font-size: 20px ;
`;

export default ExplorerContainer;