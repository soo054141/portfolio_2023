import React from "react";
import { BgWrapper } from "../../components/BgWrapper";
import {
  Wrapper,
  Frame,
  UnderTitle,
  AboveTitle,
  TitleWrap,
  NameWrap,
} from "./style";

function Header() {
  return (
    <BgWrapper>
      <Wrapper>
        <Frame />
        <UnderTitle>Port&nbsp;io</UnderTitle>
        <AboveTitle>Fol</AboveTitle>
        <TitleWrap>
          <h6>프론트엔드 개발자</h6>
          <h6>2023</h6>
        </TitleWrap>
        <NameWrap>
          <h6>김유림</h6>
        </NameWrap>
      </Wrapper>
    </BgWrapper>
  );
}

export default Header;
