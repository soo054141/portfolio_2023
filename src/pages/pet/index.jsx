import React from "react";
import { Container } from "../../components/Container";
import InfoWrap from "../../components/InfoWrap";
import PreviewWrap from "../../components/PreviewWrap";
import animal from "../../asset/images/animal.gif";

function Pet() {
  return (
    <Container>
      <PreviewWrap>
        <a href="">
          <img src={animal} alt="" />
        </a>
      </PreviewWrap>
      <InfoWrap title="유기동물 정보 커뮤니티" />
    </Container>
  );
}

export default Pet;
