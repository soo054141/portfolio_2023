import styled from "styled-components";

export const Wrapper = styled.div`
  width: 40%;

  & > div {
    margin-top: 4rem;
  }
`;

export const Title = styled.h1`
  font-size: 3.2rem;
  font-weight: bold;
`;

export const SubTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-top: 1.5rem;
`;

export const StackWrapper = styled.div`
  font-size: 1.6rem;
  & > :nth-child(2) {
    margin: 1.3rem 0;
  }
`;

export const Stacks = styled.div`
  display: grid;
  grid-template-columns: 90px 1fr;
`;

export const StackTitle = styled.span`
  font-weight: bold;
`;

export const StackContent = styled.p`
  font-weight: lighter;
`;

export const DetailWrapper = styled.div``;

export const DetailTitle = styled.h3`
  font-size: 1.9rem;
  font-weight: bold;
  margin-bottom: 1.3rem;
`;

export const DetailContent = styled.p`
  font-size: 1.6rem;
  font-weight: lighter;
  line-height: 1.5;
`;
