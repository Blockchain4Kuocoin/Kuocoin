import styled from "styled-components";

const IconsHover = styled.div`
  border-radius: 50%;
  padding: 12px;
  margin-right: 10px;
  background-color: white;
  color: blue;
  &:hover {
    background-color: blue;
    color: white;
  }
  .BlockBox:hover {
    color: white;
  }
`;

export default IconsHover;