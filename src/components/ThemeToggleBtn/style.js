import styled from "styled-components";

export const ToggleWrapper = styled.button`
  position: fixed;
  z-index: 999999;
  top: 3%;
  right: 4%;
  font-size: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 36px;
  border-radius: 5px;
  cursor: pointer;
  opacity: 0.8;
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.color};
`;
