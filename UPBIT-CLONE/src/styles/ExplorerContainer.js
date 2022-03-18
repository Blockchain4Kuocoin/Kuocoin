import styled, { createGlobalStyle } from "styled-components";
import normalize from "styled-normalize";
import reset from "styled-reset";

const ExplorerContainer = styled.div`
  /* ${normalize} */
  /* ${reset} */
  box-sizing: border-box;
  width: ${(props) => props.width};
  padding: 4%;
  margin-top: ${(props) => props.marginTop};
  border: 1px solid white;
  border-radius: 10px;
  box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.05);
`;

export default ExplorerContainer;