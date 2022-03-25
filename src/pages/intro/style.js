import styled from "styled-components";

export const IntroContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.color};
  padding: 7rem 0;

  & > div {
    width: 90vw;
  }
`;

export const ActivitiesWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 4rem;
  line-height: 1.5;

  @media ${({ theme }) => theme.device.laptopL} {
    flex-direction: column;
    align-items: center;
  }
`;

export const ActivitiesTitle = styled.div`
  font-weight: bold;
  font-size: 1.9rem;
`;

export const ActivitiesContent = styled.div`
  width: 590px;

  & > :not(:first-child) {
    margin-top: 1.9rem;
  }

  @media ${({ theme }) => theme.device.laptopL} {
    width: 100%;
    margin: 3.8rem 0;
  }
`;
