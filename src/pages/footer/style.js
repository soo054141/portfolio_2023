import styled from "styled-components";

export const Message = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 23.437vw;
  margin: 0 auto;
  line-height: 1.5;
  font-size: 2.8rem;
  padding-top: 40rem;

  & > h1 {
    width: 100%;
    text-align: center;
    font-size: 3rem;
    background-color: #ede0e0;
    color: #bf8787;
  }

  & > p > span {
    font-weight: 700;
  }
`;

export const Contact = styled.div`
  width: 30vw;
  line-height: 1.5;
  font-size: 1.8rem;
  margin-top: 25rem;

  & > h3 {
    width: 7.8vw;
    text-align: right;
    background-color: #ede0e0;
    color: #bf8787;
  }

  & > p {
    margin-left: 4.4vw;
  }
`;
