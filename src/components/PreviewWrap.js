import styled from "styled-components";

const PreviewWrap = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: ${(props) => (props.mobile ? "375px" : "100%")};
    padding: 20px;
    border: 2px solid #a5a5a5;
    border-radius: 10px;
  }
`;

export default PreviewWrap;
