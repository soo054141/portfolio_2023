import styled from "styled-components";

const PreviewWrap = styled.div`
  width: 40vw;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    padding: 20px;
    border: 2px solid #a5a5a5;
    border-radius: 10px;
  }

  @media ${({ theme }) => theme.device.labtop} {
    margin-bottom: 5rem;
  }

  @media ${({ theme }) => theme.device.tablet} {
    width: 70vw;

    img {
      width: 70vw;
    }
  }
`;

export default PreviewWrap;
