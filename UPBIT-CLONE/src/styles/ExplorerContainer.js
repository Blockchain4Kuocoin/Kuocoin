import styled from "styled-components";

const ExplorerContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 4%;
  margin-top: ${(props) => props.marginTop};
  border: 1px solid white;
  border-radius: 10px;
  box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.05);
  background-color: ${(props) => props.bColor};
  margin-bottom: 6vh;
`;

export default ExplorerContainer;