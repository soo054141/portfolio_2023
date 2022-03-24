import styled from "styled-components";

export const Container = styled.div`
  width: 90vw;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.color};
  padding: 7rem 0;
`;
