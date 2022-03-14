import React from "react";
import {
  Container,
  Wrapper,
  Frame,
  UnderTitle,
  AboveTitle,
  TitleWrap,
  NameWrap,
} from "./style";

function Header() {
  return (
    <Container>
      <Wrapper>
        <Frame />
        <UnderTitle>Port&nbsp;io</UnderTitle>
        <AboveTitle>Fol</AboveTitle>
        <TitleWrap>
          <h6>프론트엔드 개발자</h6>
          <h6>2022</h6>
        </TitleWrap>
        <NameWrap>김유림</NameWrap>
      </Wrapper>
    </Container>
  );
}

export default Header;
