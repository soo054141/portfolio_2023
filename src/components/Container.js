import styled from "styled-components";

export const Container = styled.div`
  width: 90vw;
  margin: 0 auto;
  padding: 7rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media ${({ theme }) => theme.device.laptop} {
    flex-direction: ${(props) =>
      props.leftSideImg ? "column" : "column-reverse"};
  }
`;
