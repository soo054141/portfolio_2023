import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 45rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.color};
  margin-bottom: 10px;
`;
