import styled, { css } from "styled-components";
import frame from "../../asset/images/header-frame.png";

export const Wrapper = styled.div`
  z-index: 0;
  position: relative;
  width: 70vw;
  height: 100%;
  margin: 0 auto;
  color: #ffffff;
  text-shadow: 10px 10px 25px #776d66;

  h1 {
    position: absolute;
    top: 50%;
    left: 50%;
    font-size: 23.7rem;
    font-family: "Pinyon Script";
  }
`;

export const Frame = styled.div`
  z-index: 1;
  position: absolute;
  width: 100%;
  height: 100%;
  background: no-repeat center/70% url(${frame});
`;

export const UnderTitle = styled.h1`
  z-index: 0;
  word-spacing: 350px;
  transform: translate(-50%, -50%) rotate(-10deg);
`;

export const AboveTitle = styled.h1`
  z-index: 2;
  transform: translate(0%, -60%) rotate(-10deg);
`;

const titleStyles = css`
  z-index: 3;
  width: 72rem;
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  justify-content: space-between;
  font-size: 1.8rem;
  opacity: 0.8;
  text-shadow: 10px 10px 10px #776d66;
`;

export const TitleWrap = styled.div`
  ${titleStyles}
  transform: translate(-98%, -100%) rotate(-90deg);
`;

export const NameWrap = styled.div`
  ${titleStyles}
  transform: translate(-2%, -100%) rotate(-90deg);
`;
